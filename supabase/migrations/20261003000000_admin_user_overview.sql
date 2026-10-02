-- Admin-only overview of every user: join date, last sign-in and activity counts.
create or replace function public.admin_user_overview()
returns table(
  user_id uuid,
  joined_at timestamptz,
  last_sign_in_at timestamptz,
  email_confirmed_at timestamptz,
  essays_count bigint,
  speaking_count bigint,
  mock_count bigint,
  last_activity_at timestamptz
)
language plpgsql security definer set search_path = public, auth as $$
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then
    raise exception 'Only admins can view user overview';
  end if;
  return query
  select u.id, u.created_at, u.last_sign_in_at, u.email_confirmed_at,
    coalesce(e.c, 0), coalesce(s.c, 0), coalesce(m.c, 0),
    greatest(e.last_at, s.last_at, m.last_at)
  from auth.users u
  left join (select x.user_id, count(*) c, max(x.created_at) last_at from public.essays x group by x.user_id) e on e.user_id = u.id
  left join (select x.user_id, count(*) c, max(x.created_at) last_at from public.speaking_attempts x group by x.user_id) s on s.user_id = u.id
  left join (select x.user_id, count(*) c, max(x.created_at) last_at from public.mock_tests x group by x.user_id) m on m.user_id = u.id;
end; $$;

revoke all on function public.admin_user_overview() from public, anon;
grant execute on function public.admin_user_overview() to authenticated;

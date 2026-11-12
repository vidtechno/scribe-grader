-- Admin: who received a level certificate (no image), per-level issued / level-test numbers, newest first (limit 300).
create or replace function public.admin_certificates_list()
returns jsonb language plpgsql stable security definer set search_path = public, auth as $$
begin
  if not public.has_role(auth.uid(),'admin'::app_role) then raise exception 'Only admins'; end if;
  return jsonb_build_object(
    'total', (select count(*) from public.learning_certificates),
    'by_level', (select coalesce(jsonb_agg(jsonb_build_object('level', l.level_id, 'issued', coalesce(c.n, 0),
        'level_tests_taken', coalesce(t.taken, 0), 'level_tests_passed', coalesce(t.passed, 0)) order by l.level_id), '[]'::jsonb)
      from (select level_id from public.learning_certificates union select level_id from public.learning_level_tests) l
      left join (select level_id, count(*) n from public.learning_certificates group by 1) c on c.level_id = l.level_id
      left join (select level_id, count(*) taken, count(*) filter (where passed_at is not null) passed from public.learning_level_tests group by 1) t on t.level_id = l.level_id),
    'rows', (select coalesce(jsonb_agg(r order by r.issued_at desc), '[]'::jsonb) from (
      select c.number, c.level_id, c.full_name, c.percent, c.issued_at, u.email, p.public_id, c.user_id
      from public.learning_certificates c
      left join auth.users u on u.id = c.user_id
      left join public.profiles p on p.user_id = c.user_id
      order by c.issued_at desc limit 300) r));
end; $$;
revoke all on function public.admin_certificates_list() from public, anon;
grant execute on function public.admin_certificates_list() to authenticated, service_role;

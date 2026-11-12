-- Announcements: who sees them, an optional English text, and view statistics against the audience size.
alter table public.announcements
  add column if not exists audience text not null default 'existing' check (audience in ('existing', 'all')),
  add column if not exists title_en text,
  add column if not exists content_en text;
comment on column public.announcements.audience is 'existing = only accounts created before the announcement; all = everyone who signs in while it is active';

-- Per announcement: how many people saw it and how many could (admins only).
create or replace function public.admin_announcement_stats()
returns jsonb language plpgsql stable security definer set search_path = public, auth as $fn$
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then raise exception 'Only admins'; end if;
  return coalesce((
    select jsonb_agg(jsonb_build_object(
      'id', a.id,
      'views', (select count(*) from public.announcement_views v where v.announcement_id = a.id),
      'audience', case when a.audience = 'all' then (select count(*) from auth.users)
                       else (select count(*) from auth.users u where u.created_at <= a.created_at) end))
    from public.announcements a), '[]'::jsonb);
end; $fn$;
revoke all on function public.admin_announcement_stats() from public, anon;
grant execute on function public.admin_announcement_stats() to authenticated;

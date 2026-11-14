-- Who added the site to the phone's home screen: recorded when the browser reports the install and again when the site is opened from the home-screen icon.
create table if not exists public.pwa_installs (
  user_id uuid primary key references auth.users(id) on delete cascade,
  platform text not null default 'other' check (platform in ('android', 'ios', 'other')),
  first_seen_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  opens int not null default 1
);
alter table public.pwa_installs enable row level security;
revoke all on public.pwa_installs from anon, authenticated;

create or replace function public.record_pwa_install(_platform text default 'other')
returns void language plpgsql security definer set search_path = public as $fn$
begin
  if auth.uid() is null then raise exception 'not_authenticated'; end if;
  insert into public.pwa_installs (user_id, platform) values (auth.uid(), case when _platform in ('android', 'ios') then _platform else 'other' end)
    on conflict (user_id) do update set last_seen_at = now(), opens = public.pwa_installs.opens + 1;
end; $fn$;

create or replace function public.admin_pwa_installs()
returns jsonb language plpgsql stable security definer set search_path = public, auth as $fn$
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then raise exception 'Only admins'; end if;
  return jsonb_build_object(
    'total', (select count(*) from public.pwa_installs),
    'users', (select count(*) from auth.users),
    'last7', (select count(*) from public.pwa_installs where first_seen_at > now() - interval '7 days'),
    'active7', (select count(*) from public.pwa_installs where last_seen_at > now() - interval '7 days'),
    'platforms', coalesce((select jsonb_agg(x) from (select platform as key, count(*) as n from public.pwa_installs group by platform) x), '[]'::jsonb),
    'rows', coalesce((select jsonb_agg(r order by r.first_seen_at desc) from (
      select i.user_id, u.email, p.full_name, p.public_id, i.platform, i.first_seen_at, i.last_seen_at, i.opens
      from public.pwa_installs i join auth.users u on u.id = i.user_id left join public.profiles p on p.user_id = i.user_id
      order by i.first_seen_at desc limit 2000) r), '[]'::jsonb));
end; $fn$;

revoke all on function public.record_pwa_install(text), public.admin_pwa_installs() from public, anon;
grant execute on function public.record_pwa_install(text), public.admin_pwa_installs() to authenticated;

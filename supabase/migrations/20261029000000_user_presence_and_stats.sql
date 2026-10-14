-- Who is online: a tiny heartbeat table (one row per user, updated by the site every couple of minutes while a tab is
-- open and visible), used by the admin panel for "online now", "last seen" and user statistics.
create table if not exists public.user_presence (
  user_id uuid primary key references auth.users(id) on delete cascade,
  last_seen_at timestamptz not null default now()
);
-- Nobody can read or write it directly: only the security definer functions below.
alter table public.user_presence enable row level security;

-- Called by the signed-in site. At most one write per minute per user, so it stays cheap.
create or replace function public.touch_presence() returns void
language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then return; end if;
  insert into public.user_presence(user_id, last_seen_at) values (uid, now())
  on conflict (user_id) do update set last_seen_at = now()
    where public.user_presence.last_seen_at < now() - interval '60 seconds';
end; $$;
revoke all on function public.touch_presence() from public, anon;
grant execute on function public.touch_presence() to authenticated;

-- The admin user list now knows the real last visit (`online_at`) and uses it for `last_seen`.
-- The function body is patched in place so later edits to the rest of it are kept.
do $$
declare d text; patched text;
begin
  d := pg_get_functiondef('public.admin_users_list()'::regprocedure);
  patched := replace(d, 'greatest(u.last_sign_in_at, la.last_day::timestamptz, e.last_at, sp.last_at, m.last_at) as last_seen',
    'greatest(pr.last_seen_at, u.last_sign_in_at, la.last_day::timestamptz, e.last_at, sp.last_at, m.last_at) as last_seen, pr.last_seen_at as online_at');
  patched := replace(patched, 'left join public.telegram_accounts t on t.user_id = u.id',
    'left join public.telegram_accounts t on t.user_id = u.id' || E'\n    ' || 'left join public.user_presence pr on pr.user_id = u.id');
  if patched = d then raise notice 'admin_users_list already patched'; return; end if;
  execute patched;
end $$;

-- Statistics about the users, in plain numbers for the admin panel.
create or replace function public.admin_user_stats()
returns jsonb language plpgsql volatile security definer set search_path = public, auth as $$
declare r jsonb;
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then raise exception 'admin_only'; end if;
  with seen as (
    select u.id, u.created_at, greatest(pr.last_seen_at, u.last_sign_in_at, la.last_day::timestamptz) as ls
    from auth.users u
    left join public.user_presence pr on pr.user_id = u.id
    left join (select user_id, max(day) last_day from public.learning_daily_activity where xp > 0 or lessons > 0 group by user_id) la on la.user_id = u.id
  ), done as (
    select u.id, coalesce(c.n, 0) as n from auth.users u
    left join (select user_id, count(*) n from public.learning_lesson_progress where completed_at is not null group by user_id) c on c.user_id = u.id
  )
  select jsonb_build_object(
    'total', (select count(*) from seen),
    'online', (select jsonb_build_object(
        'now', count(*) filter (where ls > now() - interval '5 minutes'),
        'h1', count(*) filter (where ls > now() - interval '1 hour'),
        'h24', count(*) filter (where ls > now() - interval '24 hours'),
        'd7', count(*) filter (where ls > now() - interval '7 days'),
        'd30', count(*) filter (where ls > now() - interval '30 days'),
        'never', count(*) filter (where ls is null)) from seen),
    'signups', jsonb_build_object(
      'today', (select count(*) from auth.users where created_at >= (public.learning_today()::timestamp at time zone 'Asia/Tashkent')),
      'd7', (select count(*) from auth.users where created_at > now() - interval '7 days'),
      'prev7', (select count(*) from auth.users where created_at <= now() - interval '7 days' and created_at > now() - interval '14 days'),
      'd30', (select count(*) from auth.users where created_at > now() - interval '30 days'),
      'prev30', (select count(*) from auth.users where created_at <= now() - interval '30 days' and created_at > now() - interval '60 days')),
    'retention', jsonb_build_object(
      'cohort', (select count(*) from seen where created_at <= now() - interval '7 days' and created_at > now() - interval '14 days'),
      'back', (select count(*) from seen where created_at <= now() - interval '7 days' and created_at > now() - interval '14 days' and ls > created_at + interval '1 day')),
    'sources', jsonb_build_object(
      'google', (select count(*) from auth.users where raw_app_meta_data->>'provider' = 'google'),
      'telegram', (select count(*) from auth.users where raw_app_meta_data->>'provider' = 'telegram'),
      'email', (select count(*) from auth.users where coalesce(raw_app_meta_data->>'provider', 'email') = 'email'),
      'telegram_linked', (select count(*) from public.telegram_accounts where user_id is not null),
      'with_phone', (select count(*) from public.profiles where coalesce(phone, '') <> '')),
    'levels', coalesce((select jsonb_agg(jsonb_build_object('level', level, 'n', n) order by n desc)
        from (select level, count(*) n from public.learning_profiles group by level) l), '[]'::jsonb),
    'not_started', (select count(*) from auth.users u where not exists (select 1 from public.learning_profiles lp where lp.user_id = u.id)),
    'lessons', jsonb_build_object(
      'none', (select count(*) from done where n = 0),
      'few', (select count(*) from done where n between 1 and 2),
      'some', (select count(*) from done where n between 3 and 9),
      'many', (select count(*) from done where n >= 10)),
    'plans', jsonb_build_object(
      'free', (select count(*) from auth.users u where not exists (select 1 from public.subscriptions s where s.user_id = u.id and (s.plan_type in ('go', 'plus') or s.learn_trial_ends_at > now()))),
      'trial', (select count(*) from public.subscriptions where plan_type = 'free' and learn_trial_ends_at > now()),
      'learn', (select count(*) from public.subscriptions where plan_type = 'go' and coalesce(expires_at, 'infinity'::timestamptz) > now()),
      'ielts', (select count(*) from public.subscriptions where plan_type = 'plus' and coalesce(expires_at, 'infinity'::timestamptz) > now())),
    'cities', coalesce((select jsonb_agg(jsonb_build_object('city', city, 'n', n) order by n desc)
        from (select initcap(trim(city)) as city, count(*) n from public.profiles where coalesce(trim(city), '') <> '' group by 1 order by n desc limit 8) c), '[]'::jsonb),
    'top_xp', coalesce((select jsonb_agg(jsonb_build_object('name', coalesce(nullif(p.full_name, ''), p.username, 'Ismsiz'), 'xp', lp.xp, 'streak', lp.streak_current, 'level', lp.level) order by lp.xp desc)
        from (select * from public.learning_profiles order by xp desc limit 5) lp left join public.profiles p on p.user_id = lp.user_id), '[]'::jsonb),
    'active_14d', coalesce((select jsonb_agg(jsonb_build_object('day', d.day, 'n', coalesce(a.n, 0)) order by d.day)
        from generate_series(public.learning_today() - 13, public.learning_today(), '1 day') as d(day)
        left join (select day, count(*) n from public.learning_daily_activity where day > public.learning_today() - 15 and (xp > 0 or lessons > 0) group by day) a on a.day = d.day), '[]'::jsonb)
  ) into r;
  return r;
end; $$;
revoke all on function public.admin_user_stats() from public, anon;
grant execute on function public.admin_user_stats() to authenticated;

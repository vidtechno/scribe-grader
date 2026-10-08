-- Learning-centric foundations: levels registry, stored streak with freezes and a comeback bonus, daily goal,
-- fairer XP, achievements, follows with privacy settings, a learning leaderboard, IELTS activity feeding XP/streak,
-- and a column lock on profiles. Additive: existing RPC signatures and JSON keys are kept.

-- ============================================================
-- 0. profiles: a user may edit only their own personal details
-- ============================================================
-- Before this, the owner could UPDATE any column (credits, is_premium, public_id, email...).
revoke update on public.profiles from authenticated, anon;
grant update (full_name, age, city, phone) on public.profiles to authenticated;

-- ============================================================
-- 1. Levels registry: a new level is a row here plus its content in code, no schema change
-- ============================================================
create table if not exists public.learning_levels (
  id text primary key check (id ~ '^[a-z0-9]{2,12}$'),
  position int not null unique,
  title text not null,
  is_open boolean not null default false
);
insert into public.learning_levels(id, position, title, is_open) values
  ('beginner', 1, 'Beginner', true),
  ('a1', 2, 'Elementary', true),
  ('a2', 3, 'Pre-Intermediate', false),
  ('b1', 4, 'Intermediate', false),
  ('b2', 5, 'Upper-Intermediate', false),
  ('c1', 6, 'Advanced', false),
  ('ielts', 7, 'IELTS', false)
on conflict (id) do nothing;
alter table public.learning_levels enable row level security;
do $$ begin
  if not exists(select 1 from pg_policies where schemaname='public' and tablename='learning_levels' and policyname='Anyone signed in can read levels') then
    create policy "Anyone signed in can read levels" on public.learning_levels for select to authenticated using (true);
  end if;
end $$;
revoke all on public.learning_levels from anon, authenticated;
grant select on public.learning_levels to authenticated;
grant all on public.learning_levels to service_role;

-- The placement target is any open level (the old target_level column only allowed 'a1' and stays unused).
alter table public.learning_profiles add column if not exists placement_target text;

-- ============================================================
-- 2. Streak state, freezes and the daily goal
-- ============================================================
alter table public.learning_profiles
  add column if not exists streak_current int not null default 0,
  add column if not exists streak_best int not null default 0,
  add column if not exists streak_last_day date,
  add column if not exists streak_freezes int not null default 1,
  add column if not exists daily_goal_xp int not null default 30;
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'learning_profiles_daily_goal_check') then
    alter table public.learning_profiles add constraint learning_profiles_daily_goal_check check (daily_goal_xp between 10 and 200);
  end if;
  if not exists (select 1 from pg_constraint where conname = 'learning_profiles_streak_freezes_check') then
    alter table public.learning_profiles add constraint learning_profiles_streak_freezes_check check (streak_freezes between 0 and 2);
  end if;
end $$;
alter table public.learning_daily_activity add column if not exists goal_bonus boolean not null default false;
create index if not exists learning_daily_activity_day_idx on public.learning_daily_activity (day, user_id) include (xp);

-- Start the stored streak from the days already recorded (the old rule: consecutive days with xp > 0).
with days as (select user_id, day from public.learning_daily_activity where xp > 0),
grp as (select user_id, day, day - (row_number() over (partition by user_id order by day))::int as g from days),
runs as (select user_id, g, count(*)::int as n, max(day) as last_day from grp group by user_id, g)
update public.learning_profiles p set
  streak_best = coalesce((select max(n) from runs r where r.user_id = p.user_id), 0),
  streak_last_day = (select max(last_day) from runs r where r.user_id = p.user_id),
  streak_current = coalesce((select n from runs r where r.user_id = p.user_id order by last_day desc limit 1), 0)
where p.streak_last_day is null;

-- What the learner sees: the streak is alive when the last active day is today, yesterday, or the gap is covered by freezes.
create or replace function public.learning_streak(_user uuid)
returns int language plpgsql stable security definer set search_path=public as $$
declare p public.learning_profiles%rowtype; gap int;
begin
  select * into p from public.learning_profiles where user_id = _user;
  if not found or p.streak_last_day is null then return 0; end if;
  gap := public.learning_today() - p.streak_last_day;
  if gap <= 1 then return p.streak_current; end if;
  if gap - 1 <= p.streak_freezes then return p.streak_current; end if;
  return 0;
end; $$;

create or replace function public.learning_streak_info(_user uuid)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare p public.learning_profiles%rowtype; gap int; shown int;
begin
  select * into p from public.learning_profiles where user_id = _user;
  if not found then return jsonb_build_object('current', 0, 'best', 0, 'freezes', 0, 'done_today', false, 'at_risk', false, 'broken', false); end if;
  shown := public.learning_streak(_user);
  gap := case when p.streak_last_day is null then null else public.learning_today() - p.streak_last_day end;
  return jsonb_build_object(
    'current', shown, 'best', greatest(p.streak_best, shown), 'freezes', p.streak_freezes,
    'done_today', gap = 0,
    -- today is not done yet and the streak would need a freeze (or is lost) if nothing happens
    'at_risk', shown > 0 and coalesce(gap, 0) >= 1,
    'broken', p.streak_current > 0 and shown = 0);
end; $$;

-- ============================================================
-- 3. Achievements
-- ============================================================
create table if not exists public.learning_achievements (
  user_id uuid not null references auth.users(id) on delete cascade,
  key text not null check (key ~ '^[a-z0-9_]{2,40}$'),
  unlocked_at timestamptz not null default now(),
  primary key (user_id, key)
);
alter table public.learning_achievements enable row level security;
do $$ begin
  if not exists(select 1 from pg_policies where schemaname='public' and tablename='learning_achievements' and policyname='Own rows') then
    create policy "Own rows" on public.learning_achievements for select to authenticated using (user_id = auth.uid());
  end if;
end $$;
revoke all on public.learning_achievements from anon, authenticated;
grant select on public.learning_achievements to authenticated;
grant all on public.learning_achievements to service_role;

-- Unlocks every achievement whose condition holds now and returns the newly unlocked keys.
create or replace function public.learning_check_achievements(_user uuid)
returns text[] language plpgsql security definer set search_path=public as $$
declare
  p public.learning_profiles%rowtype; lessons int; tests int; followers int; perfect boolean;
  essays_n int; speaking_n int; fresh text[] := '{}'; k text;
  want text[] := '{}';
begin
  select * into p from public.learning_profiles where user_id = _user;
  if not found then return fresh; end if;
  select count(*) into lessons from public.learning_lesson_progress where user_id = _user and completed_at is not null;
  select count(*) into tests from public.learning_unit_tests where user_id = _user and passed_at is not null;
  select count(*) into followers from public.user_follows where followee_id = _user and ended_at is null;
  select exists(select 1 from public.learning_lesson_progress where user_id = _user and completed_at is not null and stars = 3 and best_score = total) into perfect;
  select count(*) into essays_n from public.essays where user_id = _user and status = 'completed';
  select count(*) into speaking_n from public.speaking_attempts where user_id = _user and status = 'completed';

  if lessons >= 1 then want := array_append(want, 'first_lesson'); end if;
  if lessons >= 10 then want := array_append(want, 'words_100'); end if;
  if lessons >= 30 then want := array_append(want, 'words_300'); end if;
  if lessons >= 50 then want := array_append(want, 'words_500'); end if;
  if tests >= 1 then want := array_append(want, 'unit_passed'); end if;
  if tests >= 5 then want := array_append(want, 'units_5'); end if;
  if p.level <> 'beginner' then want := array_append(want, 'level_up'); end if;
  if perfect then want := array_append(want, 'perfect_lesson'); end if;
  if p.streak_best >= 3 then want := array_append(want, 'streak_3'); end if;
  if p.streak_best >= 7 then want := array_append(want, 'streak_7'); end if;
  if p.streak_best >= 14 then want := array_append(want, 'streak_14'); end if;
  if p.streak_best >= 30 then want := array_append(want, 'streak_30'); end if;
  if p.streak_best >= 100 then want := array_append(want, 'streak_100'); end if;
  if p.xp >= 500 then want := array_append(want, 'xp_500'); end if;
  if p.xp >= 2000 then want := array_append(want, 'xp_2000'); end if;
  if p.xp >= 10000 then want := array_append(want, 'xp_10000'); end if;
  if followers >= 1 then want := array_append(want, 'first_follower'); end if;
  if followers >= 10 then want := array_append(want, 'followers_10'); end if;
  if essays_n >= 1 then want := array_append(want, 'ielts_writing'); end if;
  if speaking_n >= 1 then want := array_append(want, 'ielts_speaking'); end if;

  foreach k in array want loop
    insert into public.learning_achievements(user_id, key) values (_user, k) on conflict do nothing;
    if found then fresh := fresh || k; end if;
  end loop;
  return fresh;
end; $$;

-- ============================================================
-- 4. Social: follows, privacy settings, display names
-- ============================================================
create table if not exists public.user_follows (
  follower_id uuid not null references auth.users(id) on delete cascade,
  followee_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  -- an ended follow is kept (with its date) instead of being removed
  ended_at timestamptz,
  primary key (follower_id, followee_id),
  check (follower_id <> followee_id)
);
create index if not exists user_follows_followee_idx on public.user_follows (followee_id) where ended_at is null;

create table if not exists public.social_settings (
  user_id uuid primary key references auth.users(id) on delete cascade,
  discoverable boolean not null default true,
  show_progress boolean not null default true,
  show_ielts boolean not null default false,
  leaderboard_visible boolean not null default true,
  updated_at timestamptz not null default now()
);
alter table public.user_follows enable row level security;
alter table public.social_settings enable row level security;
do $$ begin
  if not exists(select 1 from pg_policies where schemaname='public' and tablename='user_follows' and policyname='Own follows') then
    create policy "Own follows" on public.user_follows for select to authenticated using (follower_id = auth.uid() or followee_id = auth.uid());
  end if;
  if not exists(select 1 from pg_policies where schemaname='public' and tablename='social_settings' and policyname='Own settings') then
    create policy "Own settings" on public.social_settings for select to authenticated using (user_id = auth.uid());
  end if;
end $$;
revoke all on public.user_follows, public.social_settings from anon, authenticated;
grant select on public.user_follows, public.social_settings to authenticated;
grant all on public.user_follows, public.social_settings to service_role;

-- A safe public name: first name and the initial of the last name. Never an email or a Telegram id.
create or replace function public.social_display_name(_user uuid)
returns text language plpgsql stable security definer set search_path=public as $$
declare n text; parts text[]; given text; initial text;
begin
  select nullif(btrim(full_name), '') into n from public.profiles where user_id = _user;
  if n is null or n ~ '^tg[0-9]+$' or position('@' in n) > 0 then return 'O''quvchi'; end if;
  parts := regexp_split_to_array(n, '\s+');
  given := left(parts[1], 18);
  initial := case when array_length(parts, 1) > 1 then upper(left(parts[array_length(parts, 1)], 1)) || '.' else null end;
  return btrim(given || coalesce(' ' || initial, ''));
end; $$;

create or replace function public.social_user_by_public_id(_public_id text)
returns uuid language sql stable security definer set search_path=public as $$
  select user_id from public.profiles where public_id = btrim(_public_id) limit 1
$$;

create or replace function public.social_setting(_user uuid, _key text)
returns boolean language plpgsql stable security definer set search_path=public as $$
declare v boolean;
begin
  select case _key when 'discoverable' then discoverable when 'show_progress' then show_progress
                   when 'show_ielts' then show_ielts when 'leaderboard_visible' then leaderboard_visible end
    into v from public.social_settings where user_id = _user;
  if v is not null then return v; end if;
  return _key <> 'show_ielts'; -- defaults: visible, but IELTS results stay private until the learner shares them
end; $$;

create or replace function public.social_get_settings()
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  return jsonb_build_object(
    'discoverable', public.social_setting(uid, 'discoverable'), 'show_progress', public.social_setting(uid, 'show_progress'),
    'show_ielts', public.social_setting(uid, 'show_ielts'), 'leaderboard_visible', public.social_setting(uid, 'leaderboard_visible'));
end; $$;

create or replace function public.social_update_settings(
  _discoverable boolean, _show_progress boolean, _show_ielts boolean, _leaderboard_visible boolean)
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  insert into public.social_settings(user_id, discoverable, show_progress, show_ielts, leaderboard_visible)
  values (uid, coalesce(_discoverable, true), coalesce(_show_progress, true), coalesce(_show_ielts, false), coalesce(_leaderboard_visible, true))
  on conflict (user_id) do update set discoverable = excluded.discoverable, show_progress = excluded.show_progress,
    show_ielts = excluded.show_ielts, leaderboard_visible = excluded.leaderboard_visible, updated_at = now();
  return public.social_get_settings();
end; $$;

-- A card of another learner as used in search results, suggestions and lists.
create or replace function public.social_card(_viewer uuid, _user uuid)
returns jsonb language sql stable security definer set search_path=public as $$
  select jsonb_build_object(
    'public_id', pr.public_id,
    'name', public.social_display_name(_user),
    'level', lp.level,
    'xp', case when public.social_setting(_user, 'show_progress') then coalesce(lp.xp, 0) else null end,
    'streak', case when public.social_setting(_user, 'show_progress') then public.learning_streak(_user) else null end,
    'is_following', exists(select 1 from public.user_follows where follower_id = _viewer and followee_id = _user and ended_at is null),
    'follows_me', exists(select 1 from public.user_follows where follower_id = _user and followee_id = _viewer and ended_at is null))
  from public.profiles pr left join public.learning_profiles lp on lp.user_id = pr.user_id
  where pr.user_id = _user
$$;

create or replace function public.social_search(_q text)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare uid uuid := auth.uid(); q text := btrim(coalesce(_q, '')); pattern text; result jsonb;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  if char_length(q) < 2 then return '[]'::jsonb; end if;
  pattern := '%' || replace(replace(replace(lower(q), '\', '\\'), '%', '\%'), '_', '\_') || '%';
  select coalesce(jsonb_agg(public.social_card(uid, x.user_id) order by x.exact desc, x.week_xp desc, x.name), '[]'::jsonb) into result
  from (
    select pr.user_id, (pr.public_id = q) as exact, public.social_display_name(pr.user_id) as name,
      coalesce((select sum(a.xp) from public.learning_daily_activity a where a.user_id = pr.user_id and a.day >= public.learning_today() - 6), 0) as week_xp
    from public.profiles pr
    where pr.user_id <> uid
      and public.social_setting(pr.user_id, 'discoverable')
      and (pr.public_id = q or lower(coalesce(pr.full_name, '')) like pattern escape '\')
    order by (pr.public_id = q) desc, 4 desc
    limit 20
  ) x;
  return result;
end; $$;

-- Active learners the viewer does not follow yet.
create or replace function public.social_suggestions()
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare uid uuid := auth.uid(); result jsonb;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  select coalesce(jsonb_agg(public.social_card(uid, x.user_id) order by x.week_xp desc, x.user_id), '[]'::jsonb) into result
  from (
    select lp.user_id, coalesce(sum(a.xp), 0) as week_xp
    from public.learning_profiles lp
    join public.learning_daily_activity a on a.user_id = lp.user_id and a.day >= public.learning_today() - 6 and a.xp > 0
    where lp.user_id <> uid
      and public.social_setting(lp.user_id, 'discoverable')
      and not exists(select 1 from public.user_follows f where f.follower_id = uid and f.followee_id = lp.user_id and f.ended_at is null)
    group by lp.user_id
    order by 2 desc, 1
    limit 12
  ) x;
  return result;
end; $$;

create or replace function public.social_follow(_public_id text)
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid(); target uuid; n_following int;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  target := public.social_user_by_public_id(_public_id);
  if target is null or target = uid or not public.social_setting(target, 'discoverable') then raise exception 'not_found'; end if;
  select count(*) into n_following from public.user_follows where follower_id = uid and ended_at is null;
  if n_following >= 300 and not exists(select 1 from public.user_follows where follower_id = uid and followee_id = target and ended_at is null) then
    raise exception 'follow_limit';
  end if;
  insert into public.user_follows(follower_id, followee_id) values (uid, target)
  on conflict (follower_id, followee_id) do update set ended_at = null, created_at = now() where user_follows.ended_at is not null;
  perform public.learning_check_achievements(target);
  return jsonb_build_object('following', true,
    'followers', (select count(*) from public.user_follows where followee_id = target and ended_at is null));
end; $$;

create or replace function public.social_unfollow(_public_id text)
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid(); target uuid;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  target := public.social_user_by_public_id(_public_id);
  if target is null then raise exception 'not_found'; end if;
  update public.user_follows set ended_at = now() where follower_id = uid and followee_id = target and ended_at is null;
  return jsonb_build_object('following', false,
    'followers', (select count(*) from public.user_follows where followee_id = target and ended_at is null));
end; $$;

-- The viewer's own lists: who follows me, whom I follow, and mutual friends.
create or replace function public.social_list(_kind text)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare uid uuid := auth.uid(); result jsonb;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  if _kind not in ('followers', 'following', 'friends') then raise exception 'invalid_arguments'; end if;
  select coalesce(jsonb_agg(public.social_card(uid, x.other) order by x.created_at desc), '[]'::jsonb) into result
  from (
    select case when _kind = 'followers' then f.follower_id else f.followee_id end as other, f.created_at
    from public.user_follows f
    where f.ended_at is null and (
          (_kind = 'followers' and f.followee_id = uid)
       or (_kind = 'following' and f.follower_id = uid)
       or (_kind = 'friends' and f.follower_id = uid and exists(select 1 from public.user_follows b where b.follower_id = f.followee_id and b.followee_id = uid and b.ended_at is null)))
    order by f.created_at desc
    limit 200
  ) x;
  return result;
end; $$;

-- The learning identity of a learner, as far as their privacy settings allow.
create or replace function public.social_public_profile(_public_id text)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare
  uid uuid := auth.uid(); target uuid; me boolean; lp public.learning_profiles%rowtype;
  show_prog boolean; show_ielts boolean; out jsonb; lessons int; tests int; has_lp boolean;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  target := public.social_user_by_public_id(_public_id);
  if target is null then raise exception 'not_found'; end if;
  me := target = uid;
  if not me and not public.social_setting(target, 'discoverable') then raise exception 'not_found'; end if;
  show_prog := me or public.social_setting(target, 'show_progress');
  show_ielts := me or public.social_setting(target, 'show_ielts');
  select * into lp from public.learning_profiles where user_id = target;
  has_lp := found;
  out := jsonb_build_object(
    'public_id', btrim(_public_id), 'name', public.social_display_name(target), 'is_me', me,
    'member_since', (select created_at from public.profiles where user_id = target),
    'level', lp.level,
    'followers', (select count(*) from public.user_follows where followee_id = target and ended_at is null),
    'following', (select count(*) from public.user_follows where follower_id = target and ended_at is null),
    'is_following', exists(select 1 from public.user_follows where follower_id = uid and followee_id = target and ended_at is null),
    'follows_me', exists(select 1 from public.user_follows where follower_id = target and followee_id = uid and ended_at is null),
    'progress_visible', show_prog, 'ielts_visible', show_ielts);
  if show_prog and has_lp then
    select count(*) into lessons from public.learning_lesson_progress where user_id = target and completed_at is not null;
    select count(*) into tests from public.learning_unit_tests where user_id = target and passed_at is not null;
    out := out || jsonb_build_object(
      'xp', lp.xp, 'streak', public.learning_streak(target), 'streak_best', greatest(lp.streak_best, public.learning_streak(target)),
      'lessons_done', lessons, 'words', lessons * 10, 'tests_passed', tests,
      'week_xp', (select coalesce(sum(xp), 0) from public.learning_daily_activity where user_id = target and day >= date_trunc('week', public.learning_today()::timestamp)::date),
      'next_lesson_title', lp.next_lesson_title,
      'activity', (select coalesce(jsonb_agg(jsonb_build_object('day', d.day, 'xp', coalesce(a.xp, 0)) order by d.day), '[]'::jsonb)
                   from generate_series(public.learning_today() - 13, public.learning_today(), interval '1 day') as d(day)
                   left join public.learning_daily_activity a on a.user_id = target and a.day = d.day::date),
      'achievements', (select coalesce(jsonb_agg(jsonb_build_object('key', key, 'unlocked_at', unlocked_at) order by unlocked_at), '[]'::jsonb)
                       from public.learning_achievements where user_id = target));
  end if;
  if show_ielts then
    out := out || jsonb_build_object('ielts', jsonb_build_object(
      'writing_count', (select count(*) from public.essays where user_id = target and status = 'completed'),
      'writing_best', (select max(score) from public.essays where user_id = target and status = 'completed'),
      'speaking_count', (select count(*) from public.speaking_attempts where user_id = target and status = 'completed'),
      'speaking_best', (select max(score) from public.speaking_attempts where user_id = target and status = 'completed')));
  end if;
  return out;
end; $$;

-- ============================================================
-- 5. XP, streak and the daily goal in one place
-- ============================================================
-- Records learning activity: XP (with a daily cap), the stored streak with freezes, the goal bonus (+10, once a day),
-- the comeback bonus (+25 after 3 or more missed days), profile XP and achievements.
create or replace function public.learning_record_activity(
  _user uuid, _xp int, _lessons int, _seconds int, _correct int, _answered int)
returns jsonb language plpgsql security definer set search_path=public as $$
declare
  today date := public.learning_today();
  p public.learning_profiles%rowtype; d public.learning_daily_activity%rowtype;
  base int; bonus_goal int := 0; bonus_back int := 0; total int; today_xp int;
  cur int; best int; freezes int; missed int; fresh text[]; goal_reached boolean;
begin
  select * into p from public.learning_profiles where user_id = _user for update;
  if not found then return jsonb_build_object('xp', 0, 'streak', 0); end if;
  insert into public.learning_daily_activity(user_id, day) values (_user, today) on conflict do nothing;
  select * into d from public.learning_daily_activity where user_id = _user and day = today for update;

  base := greatest(0, least(coalesce(_xp, 0), 400 - d.xp)); -- at most 400 XP a day from activities
  today_xp := d.xp + base;
  if base > 0 and not d.goal_bonus and today_xp >= p.daily_goal_xp then bonus_goal := 10; end if;
  if base > 0 and p.streak_last_day is not null and today - p.streak_last_day >= 4 then bonus_back := 25; end if;
  total := base + bonus_goal + bonus_back;
  goal_reached := (today_xp + bonus_goal + bonus_back) >= p.daily_goal_xp;

  cur := p.streak_current; best := p.streak_best; freezes := p.streak_freezes;
  if total > 0 then
    if p.streak_last_day is null then cur := 1;
    elsif p.streak_last_day = today then cur := p.streak_current;
    else
      missed := today - p.streak_last_day - 1;
      if missed <= 0 then cur := p.streak_current + 1;
      elsif missed <= p.streak_freezes then cur := p.streak_current + 1; freezes := p.streak_freezes - missed;
      else cur := 1;
      end if;
      -- a freeze is earned with every 7th day of a streak (at most 2 are kept)
      if cur > p.streak_current and cur % 7 = 0 and freezes < 2 then freezes := freezes + 1; end if;
    end if;
    best := greatest(best, cur);
  end if;

  update public.learning_daily_activity set
    xp = xp + total, lessons = lessons + coalesce(_lessons, 0),
    seconds = least(seconds + greatest(0, coalesce(_seconds, 0)), 86400),
    correct = correct + coalesce(_correct, 0), answered = answered + coalesce(_answered, 0),
    goal_bonus = goal_bonus or bonus_goal > 0
  where user_id = _user and day = today;
  update public.learning_profiles set
    xp = xp + total, streak_current = cur, streak_best = best, streak_freezes = freezes,
    streak_last_day = case when total > 0 then today else streak_last_day end, updated_at = now()
  where user_id = _user;

  fresh := public.learning_check_achievements(_user);
  return jsonb_build_object(
    'xp', total, 'base_xp', base, 'goal_bonus', bonus_goal, 'comeback_bonus', bonus_back,
    'streak', public.learning_streak(_user), 'streak_best', best, 'freezes', freezes,
    'goal_reached', goal_reached, 'new_achievements', to_jsonb(fresh));
end; $$;

-- Kept for callers that only need the side effect.
create or replace function public.learning_add_activity(_user uuid, _xp int, _lessons int, _seconds int, _correct int, _answered int)
returns void language plpgsql security definer set search_path=public as $$
begin
  perform public.learning_record_activity(_user, _xp, _lessons, _seconds, _correct, _answered);
end; $$;

create or replace function public.learning_set_daily_goal(_xp int)
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  if _xp not between 10 and 200 then raise exception 'invalid_goal'; end if;
  update public.learning_profiles set daily_goal_xp = _xp, updated_at = now() where user_id = uid;
  if not found then raise exception 'learning_not_started'; end if;
  return jsonb_build_object('daily_goal_xp', _xp);
end; $$;

-- ============================================================
-- 6. Learning RPCs: fairer XP, the new activity engine, additive result keys
-- ============================================================
create or replace function public.learning_complete_lesson(
  _lesson text, _score int, _total int, _seconds int, _next_id text default null, _next_title text default null)
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid(); pct numeric; passed boolean; stars smallint; first boolean; gain int;
  cur public.learning_lesson_progress%rowtype; act jsonb;
begin
  perform public.learning_require_access(uid);
  if _lesson !~ '^u[0-9]{1,2}-l[0-9]{1,2}$' then raise exception 'invalid_lesson'; end if;
  if _total < 1 or _total > 60 or _score < 0 or _score > _total then raise exception 'invalid_score'; end if;
  pct := _score * 100.0 / _total;
  passed := pct >= 70;
  stars := case when pct >= 90 then 3 when pct >= 80 then 2 when pct >= 70 then 1 else 0 end;
  select * into cur from public.learning_lesson_progress where user_id = uid and lesson_id = _lesson for update;
  first := passed and (cur.completed_at is null);
  -- the first pass pays in full; repeats and unsuccessful tries pay a little, so XP cannot be farmed
  gain := case when first then least(_score + 20, 80) else least(_score / 2, 10) end;
  insert into public.learning_lesson_progress(user_id, lesson_id, best_score, total, stars, attempts, completed_at, updated_at)
  values (uid, _lesson, _score, _total, stars, 1, case when passed then now() end, now())
  on conflict (user_id, lesson_id) do update set
    best_score = greatest(learning_lesson_progress.best_score, excluded.best_score),
    total = excluded.total,
    stars = greatest(learning_lesson_progress.stars, excluded.stars),
    attempts = learning_lesson_progress.attempts + 1,
    completed_at = coalesce(learning_lesson_progress.completed_at, excluded.completed_at),
    updated_at = now();
  update public.learning_profiles set last_lesson_id = _lesson,
    next_lesson_id = case when passed then left(_next_id, 20) else next_lesson_id end,
    next_lesson_title = case when passed then left(_next_title, 120) else next_lesson_title end,
    updated_at = now()
  where user_id = uid;
  act := public.learning_record_activity(uid, gain, case when passed then 1 else 0 end,
    greatest(0, least(coalesce(_seconds, 0), 5400)), _score, _total);
  return jsonb_build_object('passed', passed, 'stars', stars, 'xp', (act->>'xp')::int, 'first', first, 'streak', (act->>'streak')::int)
    || (act - 'xp' - 'streak');
end; $$;

create or replace function public.learning_log_practice(_correct int, _answered int, _seconds int)
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid(); act jsonb;
begin
  perform public.learning_require_access(uid);
  if _answered < 1 or _answered > 50 or _correct < 0 or _correct > _answered then raise exception 'invalid_score'; end if;
  act := public.learning_record_activity(uid, least(_correct, 10), 0, greatest(0, least(coalesce(_seconds, 0), 3600)), _correct, _answered);
  return jsonb_build_object('xp', (act->>'xp')::int, 'streak', (act->>'streak')::int) || (act - 'xp' - 'streak');
end; $$;

create or replace function public.learning_submit_unit_test(_unit text, _score int, _total int)
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid(); t public.learning_unit_tests%rowtype; passed boolean; gain int; act jsonb;
begin
  perform public.learning_require_access(uid);
  if _unit !~ '^u[0-9]{1,2}$' then raise exception 'invalid_unit'; end if;
  if _total < 5 or _total > 60 or _score < 0 or _score > _total then raise exception 'invalid_score'; end if;
  insert into public.learning_unit_tests(user_id, unit_id) values (uid, _unit) on conflict do nothing;
  select * into t from public.learning_unit_tests where user_id = uid and unit_id = _unit for update;
  if t.passed_at is not null then
    return jsonb_build_object('status', 'passed', 'already', true, 'best_score', t.best_score, 'best_total', t.best_total);
  end if;
  if t.locked_until is not null and t.locked_until > now() then
    return jsonb_build_object('status', 'locked', 'locked_until', t.locked_until);
  end if;
  if t.locked_until is not null then t.attempts := 0; end if; -- the 48-hour pause is over: two new attempts
  passed := _score * 100 >= _total * 80;
  gain := case when passed then 50 + least(_score, 30) else least(_score / 2, 15) end;
  update public.learning_unit_tests set
    attempts = case when passed then t.attempts else t.attempts + 1 end,
    best_score = case when best_total is null or _score * coalesce(best_total, 1) > coalesce(best_score, 0) * _total then _score else best_score end,
    best_total = case when best_total is null or _score * coalesce(best_total, 1) > coalesce(best_score, 0) * _total then _total else best_total end,
    passed_at = case when passed then now() end,
    locked_until = case when not passed and t.attempts + 1 >= 2 then now() + interval '48 hours' else null end,
    last_attempt_at = now(), updated_at = now()
  where user_id = uid and unit_id = _unit
  returning * into t;
  act := public.learning_record_activity(uid, gain, 0, 0, _score, _total);
  return jsonb_build_object(
    'status', case when passed then 'passed' when t.locked_until is not null then 'locked' else 'failed' end,
    'attempts_left', case when passed then null else greatest(0, 2 - t.attempts) end,
    'locked_until', t.locked_until, 'xp', (act->>'xp')::int) || (act - 'xp');
end; $$;

-- Starting at the first level is immediate; any other open level goes through its placement test.
create or replace function public.learning_start(_level text default 'beginner')
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid(); lv public.learning_levels%rowtype; first_level text;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  select * into lv from public.learning_levels where id = _level and is_open;
  if not found then raise exception 'level_not_available'; end if;
  select id into first_level from public.learning_levels order by position limit 1;
  if lv.id = first_level then
    insert into public.learning_profiles(user_id, level) values (uid, lv.id) on conflict (user_id) do nothing;
  else
    insert into public.learning_profiles(user_id, level, placement_target, placement_status)
    values (uid, first_level, lv.id, 'pending')
    on conflict (user_id) do update set placement_target = lv.id, placement_status = 'pending', updated_at = now()
      where learning_profiles.placement_status in ('none', 'skipped')
        and learning_profiles.placement_attempts < 2
        and (select position from public.learning_levels where id = learning_profiles.level) < lv.position;
  end if;
  return public.learning_access_for(uid);
end; $$;

create or replace function public.learning_submit_placement(
  _score int, _total int, _next_id text default null, _next_title text default null)
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid(); p public.learning_profiles%rowtype; passed boolean; tries int; gain int := 0;
  new_status text; act jsonb := '{}'::jsonb;
begin
  perform public.learning_require_access(uid);
  if _total <> 20 or _score < 0 or _score > _total then raise exception 'invalid_score'; end if;
  select * into p from public.learning_profiles where user_id = uid for update;
  if p.placement_status <> 'pending' or p.placement_target is null then raise exception 'placement_not_pending'; end if;
  passed := _score * 100 >= _total * 70;
  tries := p.placement_attempts + 1;
  if passed then
    new_status := 'passed';
    update public.learning_profiles set
      level = p.placement_target, placement_target = null, placement_status = 'passed', placement_attempts = tries,
      placement_best = greatest(coalesce(p.placement_best, 0), _score),
      next_lesson_id = left(_next_id, 20), next_lesson_title = left(_next_title, 120), updated_at = now()
    where user_id = uid;
    act := public.learning_record_activity(uid, 30, 0, 0, _score, _total);
  else
    new_status := case when tries >= 2 then 'failed' else 'pending' end;
    update public.learning_profiles set
      placement_status = new_status, placement_attempts = tries,
      placement_best = greatest(coalesce(p.placement_best, 0), _score),
      placement_target = case when tries >= 2 then null else p.placement_target end, updated_at = now()
    where user_id = uid;
  end if;
  return jsonb_build_object('passed', passed, 'status', new_status, 'attempts_left', greatest(0, 2 - tries),
    'xp', coalesce((act->>'xp')::int, 0)) || (act - 'xp');
end; $$;

create or replace function public.learning_skip_placement()
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  update public.learning_profiles set placement_status = 'skipped', placement_target = null, updated_at = now()
  where user_id = uid and placement_status = 'pending';
  return public.learning_access_for(uid);
end; $$;

-- Additive: streak details, the daily goal, achievements and the level registry.
create or replace function public.learning_state()
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  return jsonb_build_object(
    'profile', (select to_jsonb(p) - 'user_id' from public.learning_profiles p where p.user_id = uid),
    'access', public.learning_access_for(uid),
    'streak', public.learning_streak(uid),
    'streak_info', public.learning_streak_info(uid),
    'goal', jsonb_build_object(
      'daily_goal_xp', coalesce((select daily_goal_xp from public.learning_profiles where user_id = uid), 30),
      'today_xp', coalesce((select xp from public.learning_daily_activity where user_id = uid and day = public.learning_today()), 0)),
    'today', public.learning_today(),
    'progress', coalesce((select jsonb_agg(to_jsonb(x) - 'user_id') from public.learning_lesson_progress x where x.user_id = uid), '[]'::jsonb),
    'tests', coalesce((select jsonb_agg(to_jsonb(x) - 'user_id') from public.learning_unit_tests x where x.user_id = uid), '[]'::jsonb),
    'activity', coalesce((select jsonb_agg(to_jsonb(x) - 'user_id' order by x.day) from public.learning_daily_activity x
                          where x.user_id = uid and x.day > public.learning_today() - 60), '[]'::jsonb),
    'achievements', coalesce((select jsonb_agg(jsonb_build_object('key', key, 'unlocked_at', unlocked_at) order by unlocked_at)
                              from public.learning_achievements where user_id = uid), '[]'::jsonb),
    'levels', coalesce((select jsonb_agg(to_jsonb(l) order by l.position) from public.learning_levels l), '[]'::jsonb));
end; $$;

-- ============================================================
-- 7. Learning leaderboard (weekly or all-time XP; everyone or people I follow)
-- ============================================================
create or replace function public.learning_leaderboard(_scope text default 'global', _period text default 'week', _limit int default 30)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare
  uid uuid := auth.uid(); wk date := date_trunc('week', public.learning_today()::timestamp)::date;
  lim int := least(greatest(coalesce(_limit, 30), 5), 100); result jsonb;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  if _scope not in ('global', 'friends') or _period not in ('week', 'all') then raise exception 'invalid_arguments'; end if;
  with ranked as (
    select u.user_id, u.xp, (rank() over (order by u.xp desc))::int as rnk
    from (
      select lp.user_id,
        case when _period = 'week'
          then coalesce((select sum(a.xp) from public.learning_daily_activity a where a.user_id = lp.user_id and a.day >= wk), 0)::int
          else lp.xp end as xp
      from public.learning_profiles lp
      where public.social_setting(lp.user_id, 'leaderboard_visible')
        and (_scope = 'global' or lp.user_id = uid
             or exists(select 1 from public.user_follows f where f.follower_id = uid and f.followee_id = lp.user_id and f.ended_at is null))
    ) u
    where u.xp > 0
  ), top as (
    select r.rnk, public.social_display_name(r.user_id) as nm,
      jsonb_build_object(
        'rank', r.rnk, 'public_id', pr.public_id, 'name', public.social_display_name(r.user_id), 'xp', r.xp,
        'level', lp.level, 'streak', public.learning_streak(r.user_id), 'is_me', r.user_id = uid,
        'is_following', exists(select 1 from public.user_follows f where f.follower_id = uid and f.followee_id = r.user_id and f.ended_at is null)) as entry
    from ranked r
    join public.profiles pr on pr.user_id = r.user_id
    join public.learning_profiles lp on lp.user_id = r.user_id
    order by r.rnk, 2
    limit lim
  )
  select jsonb_build_object(
    'scope', _scope, 'period', _period, 'week_start', wk,
    'total', (select count(*) from ranked),
    'rows', coalesce((select jsonb_agg(t.entry order by t.rnk, t.nm) from top t), '[]'::jsonb),
    'me', (select jsonb_build_object('rank', r.rnk, 'xp', r.xp) from ranked r where r.user_id = uid),
    'me_hidden', not public.social_setting(uid, 'leaderboard_visible'))
  into result;
  return result;
end; $$;

-- ============================================================
-- 8. IELTS practice feeds the same XP and streak (only for learners who started the course)
-- ============================================================
create or replace function public.learning_on_ielts_activity()
returns trigger language plpgsql security definer set search_path=public as $$
declare xp int;
begin
  if tg_table_name = 'grammar_tests' then
    if new.completed_at is null or (tg_op = 'UPDATE' and old.completed_at is not null) then return new; end if;
    xp := 15;
  else
    if new.status is distinct from 'completed' then return new; end if;
    if tg_op = 'UPDATE' and old.status is not distinct from 'completed' then return new; end if;
    xp := case tg_table_name when 'mock_tests' then 100 else 40 end;
  end if;
  if exists(select 1 from public.learning_profiles where user_id = new.user_id) then
    perform public.learning_record_activity(new.user_id, xp, 0, 0, 0, 0);
  end if;
  return new;
exception when others then
  -- Learning bookkeeping must never block saving a result.
  raise warning 'learning_on_ielts_activity: %', sqlerrm;
  return new;
end; $$;

create or replace trigger learning_essay_xp after insert or update of status on public.essays
  for each row execute function public.learning_on_ielts_activity();
create or replace trigger learning_speaking_xp after insert or update of status on public.speaking_attempts
  for each row execute function public.learning_on_ielts_activity();
create or replace trigger learning_mock_xp after insert or update of status on public.mock_tests
  for each row execute function public.learning_on_ielts_activity();
create or replace trigger learning_grammar_xp after insert or update of completed_at on public.grammar_tests
  for each row execute function public.learning_on_ielts_activity();

-- ============================================================
-- 9. Grants
-- ============================================================
do $$
declare f text;
begin
  foreach f in array array[
    'public.learning_streak(uuid)', 'public.learning_streak_info(uuid)', 'public.learning_check_achievements(uuid)',
    'public.learning_record_activity(uuid,int,int,int,int,int)', 'public.learning_add_activity(uuid,int,int,int,int,int)',
    'public.learning_on_ielts_activity()', 'public.social_display_name(uuid)', 'public.social_user_by_public_id(text)',
    'public.social_setting(uuid,text)', 'public.social_card(uuid,uuid)'
  ] loop
    execute format('revoke all on function %s from public, anon, authenticated', f);
    execute format('grant execute on function %s to service_role', f);
  end loop;
  foreach f in array array[
    'public.learning_complete_lesson(text,int,int,int,text,text)', 'public.learning_log_practice(int,int,int)',
    'public.learning_submit_unit_test(text,int,int)', 'public.learning_start(text)',
    'public.learning_submit_placement(int,int,text,text)', 'public.learning_skip_placement()', 'public.learning_state()',
    'public.learning_set_daily_goal(int)', 'public.learning_leaderboard(text,text,int)',
    'public.social_get_settings()', 'public.social_update_settings(boolean,boolean,boolean,boolean)',
    'public.social_search(text)', 'public.social_suggestions()', 'public.social_follow(text)', 'public.social_unfollow(text)',
    'public.social_list(text)', 'public.social_public_profile(text)'
  ] loop
    execute format('revoke all on function %s from public, anon', f);
    execute format('grant execute on function %s to authenticated, service_role', f);
  end loop;
end $$;

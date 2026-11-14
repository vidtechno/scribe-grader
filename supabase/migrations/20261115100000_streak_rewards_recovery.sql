-- Streak rewards (3, 7 and 14 days), the "win your streak back" task, extra AI tutor questions, and streak-aware reminders.
-- Everything is idempotent and cheap: a reward is granted once per user and milestone; the recovery task is offered at most once
-- a day to someone whose streak broke in the last two weeks; reminders still run only three times a day.

create table if not exists public.streak_rewards (
  user_id uuid not null references auth.users(id) on delete cascade,
  milestone int not null check (milestone in (3, 7, 14)),
  kind text not null check (kind in ('ai_questions', 'trial_days', 'badge')),
  amount int not null default 0,
  granted_at timestamptz not null default now(),
  primary key (user_id, milestone)
);
create table if not exists public.lesson_help_bonus (
  user_id uuid primary key references auth.users(id) on delete cascade,
  extra int not null default 0 check (extra >= 0),
  updated_at timestamptz not null default now()
);
create table if not exists public.streak_recovery (
  user_id uuid not null references auth.users(id) on delete cascade,
  offered_day date not null,
  prev_streak int not null,
  restored_at timestamptz,
  primary key (user_id, offered_day)
);
alter table public.streak_rewards enable row level security;
alter table public.lesson_help_bonus enable row level security;
alter table public.streak_recovery enable row level security;
revoke all on public.streak_rewards, public.lesson_help_bonus, public.streak_recovery from anon, authenticated;

-- ---------------------------------------------------------------------------------------------------------------------------
-- Rewards. Called when a learner finishes the first activity of the day and when the learning page opens; granting twice is impossible.
--   3 days  -> 10 extra AI tutor questions
--   7 days  -> 2 more free trial days (people in the trial) or 10 extra AI tutor questions (paying people)
--   14 days -> the "two weeks" badge on the profile
create or replace function public.learning_streak_rewards()
returns jsonb language plpgsql security definer set search_path = public as $fn$
declare
  uid uuid := auth.uid(); s int; m int; fresh jsonb := '[]'::jsonb; plan text; plan_end timestamptz; trial timestamptz;
  paid boolean; in_trial boolean; k text; amt int;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  s := public.learning_streak(uid);
  select plan_type, expires_at, learn_trial_ends_at into plan, plan_end, trial from public.subscriptions where user_id = uid;
  paid := plan in ('go', 'plus') and (plan_end is null or plan_end > now());
  in_trial := not paid and trial is not null and trial > now();
  if s >= 3 then
    perform pg_advisory_xact_lock(hashtextextended('streak-rewards:' || uid::text, 0));
    for m in select x from unnest(array[3, 7, 14]) as x order by x loop
      exit when s < m;
      continue when exists (select 1 from public.streak_rewards where user_id = uid and milestone = m);
      if m = 3 then k := 'ai_questions'; amt := 10;
      elsif m = 7 then
        if in_trial then k := 'trial_days'; amt := 2;
        elsif paid then k := 'ai_questions'; amt := 10;
        else continue; end if;
      else k := 'badge'; amt := 0; end if;

      if k = 'ai_questions' then
        insert into public.lesson_help_bonus (user_id, extra) values (uid, amt)
          on conflict (user_id) do update set extra = public.lesson_help_bonus.extra + amt, updated_at = now();
      elsif k = 'trial_days' then
        update public.subscriptions set learn_trial_ends_at = learn_trial_ends_at + make_interval(days => amt) where user_id = uid;
      else
        insert into public.learning_achievements (user_id, key) values (uid, 'streak_14') on conflict do nothing;
      end if;
      insert into public.streak_rewards (user_id, milestone, kind, amount) values (uid, m, k, amt);
      fresh := fresh || jsonb_build_object('milestone', m, 'kind', k, 'amount', amt);
    end loop;
  end if;
  return jsonb_build_object(
    'streak', s, 'in_trial', in_trial, 'paid', paid, 'fresh', fresh,
    'granted', coalesce((select jsonb_agg(jsonb_build_object('milestone', r.milestone, 'kind', r.kind, 'amount', r.amount) order by r.milestone)
                         from public.streak_rewards r where r.user_id = uid), '[]'::jsonb),
    'bonus_left', coalesce((select extra from public.lesson_help_bonus where user_id = uid), 0));
end; $fn$;

-- ---------------------------------------------------------------------------------------------------------------------------
-- "Win your streak back": someone whose streak of 3+ days broke 4 to 14 days ago can restore it by doing 2 lessons the same day.
create or replace function public.learning_can_recover(_user uuid)
returns boolean language sql stable security definer set search_path = public as $fn$
  select coalesce((
    select p.streak_last_day is not null and p.streak_current >= 3
       and public.learning_today() - p.streak_last_day between 4 and 14
       and not exists (select 1 from public.streak_recovery r where r.user_id = _user and r.restored_at > now() - interval '30 days')
    from public.learning_profiles p where p.user_id = _user), false);
$fn$;

create or replace function public.learning_recovery_state()
returns jsonb language plpgsql security definer set search_path = public as $fn$
declare uid uuid := auth.uid(); today date := public.learning_today(); rec public.streak_recovery%rowtype; n int;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  select * into rec from public.streak_recovery where user_id = uid and offered_day = today;
  if rec.user_id is null then
    if not public.learning_can_recover(uid) then return jsonb_build_object('offer', null); end if;
    insert into public.streak_recovery (user_id, offered_day, prev_streak)
      select uid, today, p.streak_current from public.learning_profiles p where p.user_id = uid
      on conflict do nothing;
    select * into rec from public.streak_recovery where user_id = uid and offered_day = today;
    if rec.user_id is null then return jsonb_build_object('offer', null); end if;
  end if;
  select coalesce(lessons, 0) into n from public.learning_daily_activity where user_id = uid and day = today;
  return jsonb_build_object('offer', jsonb_build_object('prev_streak', rec.prev_streak, 'needed', 2, 'lessons_today', coalesce(n, 0), 'restored', rec.restored_at is not null));
end; $fn$;

create or replace function public.learning_recovery_claim()
returns jsonb language plpgsql security definer set search_path = public as $fn$
declare uid uuid := auth.uid(); today date := public.learning_today(); rec public.streak_recovery%rowtype; n int; fresh int;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  select * into rec from public.streak_recovery where user_id = uid and offered_day = today for update;
  if rec.user_id is null then return jsonb_build_object('restored', false); end if;
  if rec.restored_at is not null then return jsonb_build_object('restored', true, 'already', true); end if;
  select coalesce(lessons, 0) into n from public.learning_daily_activity where user_id = uid and day = today;
  if coalesce(n, 0) < 2 then return jsonb_build_object('restored', false, 'lessons_today', coalesce(n, 0)); end if;
  fresh := rec.prev_streak + 1; -- the old streak, and today counts too
  update public.learning_profiles set streak_current = fresh, streak_best = greatest(streak_best, fresh), streak_last_day = today where user_id = uid;
  update public.streak_recovery set restored_at = now() where user_id = uid and offered_day = today;
  return jsonb_build_object('restored', true, 'streak', fresh);
end; $fn$;

-- ---------------------------------------------------------------------------------------------------------------------------
-- AI tutor: the 3-per-lesson and 15-per-day limits stay; bonus questions from streak rewards are used only after a limit is reached.
create or replace function public.lesson_help_state(_user uuid, _lesson text)
returns jsonb language plpgsql stable security definer set search_path = public as $fn$
declare today date := public.learning_today(); l_used int; d_used int;
begin
  select coalesce(used, 0) into l_used from public.lesson_help_usage where user_id = _user and day = today and lesson_id = _lesson;
  select coalesce(sum(used), 0) into d_used from public.lesson_help_usage where user_id = _user and day = today;
  return jsonb_build_object('lesson_left', greatest(3 - coalesce(l_used, 0), 0), 'day_left', greatest(15 - d_used, 0),
    'bonus_left', coalesce((select extra from public.lesson_help_bonus where user_id = _user), 0));
end; $fn$;

create or replace function public.consume_lesson_help(_user uuid, _lesson text)
returns jsonb language plpgsql security definer set search_path = public as $fn$
declare today date := public.learning_today(); l_used int; d_used int; bonus int; use_bonus boolean := false;
begin
  if not coalesce((public.learning_access_for(_user)->>'allowed')::boolean, false) then
    return jsonb_build_object('allowed', false, 'reason', 'no_access', 'lesson_left', 0, 'day_left', 0, 'bonus_left', 0);
  end if;
  perform pg_advisory_xact_lock(hashtextextended(_user::text || today::text, 0));
  select coalesce(used, 0) into l_used from public.lesson_help_usage where user_id = _user and day = today and lesson_id = _lesson;
  select coalesce(sum(used), 0) into d_used from public.lesson_help_usage where user_id = _user and day = today;
  select coalesce(extra, 0) into bonus from public.lesson_help_bonus where user_id = _user;
  l_used := coalesce(l_used, 0); bonus := coalesce(bonus, 0);
  if l_used >= 3 or d_used >= 15 then
    if bonus <= 0 then
      return jsonb_build_object('allowed', false, 'reason', case when l_used >= 3 then 'lesson_limit' else 'day_limit' end,
        'lesson_left', greatest(3 - l_used, 0), 'day_left', greatest(15 - d_used, 0), 'bonus_left', 0);
    end if;
    use_bonus := true;
    update public.lesson_help_bonus set extra = extra - 1, updated_at = now() where user_id = _user;
    bonus := bonus - 1;
  end if;
  insert into public.lesson_help_usage (user_id, day, lesson_id, used) values (_user, today, _lesson, 1)
    on conflict (user_id, day, lesson_id) do update set used = public.lesson_help_usage.used + 1;
  return jsonb_build_object('allowed', true, 'used_bonus', use_bonus, 'bonus_left', bonus,
    'lesson_left', greatest(3 - (l_used + 1), 0), 'day_left', greatest(15 - (d_used + 1), 0));
end; $fn$;

drop function if exists public.refund_lesson_help(uuid, text);
create or replace function public.refund_lesson_help(_user uuid, _lesson text, _bonus boolean default false)
returns void language plpgsql security definer set search_path = public as $fn$
begin
  update public.lesson_help_usage set used = greatest(used - 1, 0)
    where user_id = _user and day = public.learning_today() and lesson_id = _lesson;
  if _bonus then
    insert into public.lesson_help_bonus (user_id, extra) values (_user, 1)
      on conflict (user_id) do update set extra = public.lesson_help_bonus.extra + 1, updated_at = now();
  end if;
end; $fn$;

-- ---------------------------------------------------------------------------------------------------------------------------
-- Reminders: what the bot knows about a learner now also says whether the streak can be won back.
create or replace function public.telegram_learning_summary(_user uuid)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare
  p public.learning_profiles%rowtype; today date := public.learning_today(); last_day date;
begin
  select * into p from public.learning_profiles where user_id = _user;
  if not found then return jsonb_build_object('started', false, 'access', public.learning_access_for(_user)); end if;
  select max(day) into last_day from public.learning_daily_activity where user_id = _user and xp > 0;
  return jsonb_build_object(
    'started', true,
    'level', p.level,
    'placement_status', p.placement_status,
    'placement_target', p.placement_target,
    'access', public.learning_access_for(_user),
    'xp', p.xp,
    'streak', public.learning_streak(_user),
    'streak_info', public.learning_streak_info(_user),
    'streak_prev', p.streak_current,
    'can_recover', public.learning_can_recover(_user),
    'lessons_done', (select count(*) from public.learning_lesson_progress where user_id = _user and completed_at is not null),
    'tests_passed', (select count(*) from public.learning_unit_tests where user_id = _user and passed_at is not null),
    'today_done', exists(select 1 from public.learning_daily_activity where user_id = _user and day = today and xp > 0),
    'today_xp', coalesce((select xp from public.learning_daily_activity where user_id = _user and day = today), 0),
    'daily_goal', p.daily_goal_xp,
    'week_xp', coalesce((select sum(xp) from public.learning_daily_activity
                         where user_id = _user and day >= date_trunc('week', today::timestamp)::date), 0),
    'idle_days', case when last_day is null then null else today - last_day end,
    'next_lesson_title', p.next_lesson_title);
end; $$;

-- One slot of study reminders. Same ladder as before; the only change: a learner with a streak of 2+ days gets ONE reminder a day,
-- in the slot that matches the hour they usually study (from their last 21 days of lessons; evening if unknown), with the streak in the payload.
create or replace function public.telegram_enqueue_learn_slot(_slot text, _window_minutes int default 60)
returns int language plpgsql security definer set search_path=public as $$
declare
  today date := public.learning_today(); day_start timestamptz; n int;
begin
  if _slot not in ('morning', 'afternoon', 'evening') then raise exception 'invalid_slot'; end if;
  day_start := today::timestamp at time zone 'Asia/Tashkent';
  with base as (
    select t.telegram_id, t.user_id, t.reminder_mode,
      today - coalesce((select max(a.day) from public.learning_daily_activity a where a.user_id = t.user_id and a.xp > 0),
                       (lp.created_at at time zone 'Asia/Tashkent')::date) as idle,
      public.learning_streak(t.user_id) as streak_now,
      (case when t.reminder_mode = 'light' then 'evening' else coalesce((
         select h.slot from (
           select case when extract(hour from lpr.completed_at at time zone 'Asia/Tashkent') < 12 then 'morning'
                       when extract(hour from lpr.completed_at at time zone 'Asia/Tashkent') < 17 then 'afternoon' else 'evening' end as slot, count(*) as c
           from public.learning_lesson_progress lpr
           where lpr.user_id = t.user_id and lpr.completed_at > now() - interval '21 days' group by 1) h
         order by h.c desc, h.slot desc limit 1), 'evening') end) as usual_slot,
      (select count(*) from public.telegram_outbox o where o.telegram_id = t.telegram_id and o.kind = 'learn_reminder'
         and o.created_at >= day_start) as sent_today,
      exists(select 1 from public.telegram_outbox o where o.telegram_id = t.telegram_id and o.kind = 'learn_reminder'
         and o.payload->>'slot' = _slot and o.created_at >= day_start) as slot_sent,
      (select max(o.created_at) from public.telegram_outbox o where o.telegram_id = t.telegram_id and o.kind = 'learn_reminder') as last_sent
    from public.telegram_accounts t
    join public.learning_profiles lp on lp.user_id = t.user_id
    where not t.is_blocked and not t.is_banned and t.notify_reminders and t.reminder_mode <> 'off'
      and (public.learning_access_for(t.user_id)->>'allowed')::boolean
      and not exists(select 1 from public.learning_daily_activity a where a.user_id = t.user_id and a.day = today and a.xp > 0)
  ), phased as (
    select b.*, case
        when b.idle <= 2 then 'daily'
        when b.idle <= 6 then 'comeback'
        when b.idle <= 13 then 'weekly'
        else 'last' end as phase
    from base b
    where not b.slot_sent and b.sent_today < (case b.reminder_mode when 'light' then 1 else 3 end)
  ), eligible as (
    select p.* from phased p
    where case p.phase
        when 'daily' then case when p.streak_now >= 2 then _slot = p.usual_slot else (_slot = 'evening' or p.reminder_mode = 'normal') end
        when 'comeback' then _slot = 'evening'
        when 'weekly' then _slot = 'evening' and (p.last_sent is null or p.last_sent < now() - interval '6 days')
        else _slot = 'evening' and p.idle <= 30 and (p.last_sent is null or p.last_sent < now() - interval '6 days')
             and not exists(select 1 from public.telegram_outbox o where o.telegram_id = p.telegram_id and o.kind = 'learn_reminder'
                              and o.payload->>'phase' = 'last' and o.created_at >= now() - make_interval(days => p.idle::int))
      end
  ), ordered as (
    select e.*, row_number() over (order by random()) as rn, count(*) over () as total from eligible e
  )
  insert into public.telegram_outbox(telegram_id, user_id, kind, payload, send_after)
  select o.telegram_id, o.user_id, 'learn_reminder',
    jsonb_build_object('date', today, 'slot', _slot, 'phase', o.phase, 'idle', o.idle, 'streak', o.streak_now, 'v', floor(random() * 1000)::int),
    now() + make_interval(secs => ((o.rn - 1) * _window_minutes * 60.0 / greatest(o.total, 1))::double precision)
  from ordered o;
  get diagnostics n = row_count;
  if n > 0 then perform public.telegram_kick(); end if;
  return n;
end; $$;

revoke all on function public.learning_streak_rewards(), public.learning_recovery_state(), public.learning_recovery_claim() from public, anon;
grant execute on function public.learning_streak_rewards(), public.learning_recovery_state(), public.learning_recovery_claim() to authenticated;
revoke all on function public.learning_can_recover(uuid), public.lesson_help_state(uuid, text), public.consume_lesson_help(uuid, text), public.refund_lesson_help(uuid, text, boolean) from public, anon, authenticated;
grant execute on function public.learning_can_recover(uuid), public.lesson_help_state(uuid, text), public.consume_lesson_help(uuid, text), public.refund_lesson_help(uuid, text, boolean) to service_role;

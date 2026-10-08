-- Study reminders with a character: three slots a day (soft morning, afternoon, firmer evening), an inactivity ladder
-- (daily -> comeback -> weekly -> one last message, then silence), a per-user cap and mode, and a praise message
-- after the first study of the day.

alter table public.telegram_accounts
  add column if not exists reminder_mode text not null default 'normal';
do $$ begin
  if not exists(select 1 from pg_constraint where conname = 'telegram_accounts_reminder_mode_check') then
    alter table public.telegram_accounts
      add constraint telegram_accounts_reminder_mode_check check (reminder_mode in ('normal', 'light', 'off'));
  end if;
end $$;

-- What the bot needs to talk to a learner about their study.
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
    'access', public.learning_access_for(_user),
    'xp', p.xp,
    'streak', public.learning_streak(_user),
    'streak_info', public.learning_streak_info(_user),
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

-- Weekly digest numbers for a learner (last 7 days) and their place among everyone who studied this week.
create or replace function public.telegram_learning_week(_user uuid)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare since date := public.learning_today() - 6; mine int; rnk int; total int;
begin
  select coalesce(sum(xp), 0) into mine from public.learning_daily_activity where user_id = _user and day >= since;
  select count(*) + 1 into rnk from (
    select user_id from public.learning_daily_activity where day >= since group by user_id having sum(xp) > mine) x;
  select count(distinct user_id) into total from public.learning_daily_activity where day >= since and xp > 0;
  return jsonb_build_object(
    'xp', mine, 'rank', case when mine > 0 then rnk end, 'learners', total,
    'active_days', (select count(*) from public.learning_daily_activity where user_id = _user and day >= since and xp > 0),
    'lessons', (select coalesce(sum(lessons), 0) from public.learning_daily_activity where user_id = _user and day >= since));
end; $$;

-- One slot of study reminders. Who gets what depends on how long they have been away:
--   0-2 days: daily slots (normal mode: morning, afternoon, evening; light mode: evening only)
--   3-6 days: one evening "come back" message a day
--   7-13 days: one evening message a week
--   14+ days: a single last message, then silence until they return
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
        when 'daily' then _slot = 'evening' or p.reminder_mode = 'normal'
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
    jsonb_build_object('date', today, 'slot', _slot, 'phase', o.phase, 'idle', o.idle, 'v', floor(random() * 1000)::int),
    now() + make_interval(secs => ((o.rn - 1) * _window_minutes * 60.0 / greatest(o.total, 1))::double precision)
  from ordered o;
  get diagnostics n = row_count;
  if n > 0 then perform public.telegram_kick(); end if;
  return n;
end; $$;

-- Praise after the first study of the day (only for learners connected to the bot who keep reminders on).
create or replace function public.learning_praise_enqueue()
returns trigger language plpgsql security definer set search_path=public as $$
declare n int;
begin
  if new.day = public.learning_today() and coalesce(new.xp, 0) > 0 and (tg_op = 'INSERT' or coalesce(old.xp, 0) = 0) then
    insert into public.telegram_outbox(telegram_id, user_id, kind, payload, send_after)
    select t.telegram_id, t.user_id, 'learn_praise', jsonb_build_object('date', new.day, 'v', floor(random() * 1000)::int),
      now() + interval '15 seconds'
    from public.telegram_accounts t
    where t.user_id = new.user_id and not t.is_blocked and not t.is_banned and t.notify_reminders and t.reminder_mode <> 'off';
    get diagnostics n = row_count;
    if n > 0 then perform public.telegram_kick(); end if;
  end if;
  return new;
end; $$;

do $$ begin
  if not exists(select 1 from pg_trigger where tgname = 'learning_praise' and tgrelid = 'public.learning_daily_activity'::regclass) then
    create trigger learning_praise after insert or update of xp on public.learning_daily_activity
      for each row execute function public.learning_praise_enqueue();
  end if;
end $$;

-- Learners get study reminders; the IELTS grammar-test reminder goes to people who are not learning
-- (or who did a grammar test this week), so nobody is pinged twice about "practice".
create or replace function public.telegram_enqueue_daily_test_reminders(_window_minutes int default 120)
returns int language plpgsql security definer set search_path=public as $$
declare today date := (now() at time zone 'Asia/Tashkent')::date; n int;
begin
  with eligible as (
    select t.telegram_id, t.user_id
    from public.telegram_accounts t
    where not t.is_blocked and not t.is_banned and t.notify_reminders and t.reminder_mode <> 'off'
      and (t.user_id is null or not exists(
        select 1 from public.grammar_tests g
        where g.user_id = t.user_id and g.test_date = today and g.completed_at is not null))
      and (t.user_id is null
           or not exists(select 1 from public.learning_profiles lp where lp.user_id = t.user_id)
           or exists(select 1 from public.grammar_tests g where g.user_id = t.user_id and g.test_date >= today - 7 and g.completed_at is not null))
      and not exists(
        select 1 from public.telegram_outbox o
        where o.telegram_id = t.telegram_id and o.kind = 'daily_test_reminder'
          and o.created_at >= (today::timestamp at time zone 'Asia/Tashkent'))
  ), ordered as (
    select e.*, row_number() over (order by random()) as rn, count(*) over () as total from eligible e
  )
  insert into public.telegram_outbox(telegram_id, user_id, kind, payload, send_after)
  select o.telegram_id, o.user_id, 'daily_test_reminder', jsonb_build_object('date', today),
    now() + make_interval(secs => ((o.rn - 1) * _window_minutes * 60.0 / greatest(o.total, 1))::double precision)
  from ordered o;
  get diagnostics n = row_count;
  if n > 0 then perform public.telegram_kick(); end if;
  return n;
end; $$;

do $$
declare f text;
begin
  foreach f in array array['public.telegram_learning_summary(uuid)', 'public.telegram_learning_week(uuid)',
                           'public.telegram_enqueue_learn_slot(text,int)', 'public.learning_praise_enqueue()',
                           'public.telegram_enqueue_daily_test_reminders(int)'] loop
    execute format('revoke all on function %s from public, anon, authenticated', f);
    execute format('grant execute on function %s to service_role', f);
  end loop;
end $$;

-- Tashkent times (UTC+5): morning 09:30, afternoon 14:30, evening 20:30. The old single 20:00 job is replaced.
do $$ begin
  if exists(select 1 from pg_extension where extname = 'pg_cron') then
    begin perform cron.unschedule('telegram-learn-reminder'); exception when others then null; end;
    perform cron.schedule('telegram-learn-morning', '30 4 * * *', 'select public.telegram_enqueue_learn_slot(''morning'', 90)');
    perform cron.schedule('telegram-learn-afternoon', '30 9 * * *', 'select public.telegram_enqueue_learn_slot(''afternoon'', 90)');
    perform cron.schedule('telegram-learn-evening', '30 15 * * *', 'select public.telegram_enqueue_learn_slot(''evening'', 60)');
  end if;
exception when others then raise notice 'cron scheduling skipped: %', sqlerrm; end $$;

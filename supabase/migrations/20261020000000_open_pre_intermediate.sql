-- Pre-Intermediate (A2) opens: its lessons ship with the website. People who pick it take the placement test on the
-- levels below, and passing the Elementary final test moves learners on to it.
update public.learning_levels set is_open = true where id = 'a2';

-- The bot needs to know which level a pending placement test is for.
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

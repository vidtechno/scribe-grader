-- New pricing: Learn (internal slug 'go') and IELTS (internal slug 'plus'); a 7-day Learn trial for every new account;
-- 3 Writing + 2 Speaking during the trial; and a gentler streak rule (3 missed days in a row reset the streak, nothing else).
-- The internal plan slugs stay 'go' / 'plus' so referrals, the admin panel, the bot and history keep working.

-- ============================================================
-- 1. Trial
-- ============================================================
alter table public.subscriptions add column if not exists learn_trial_ends_at timestamptz;

-- Learners keep the end of the trial they already had; everybody else gets a fresh 7 days from now.
update public.subscriptions s set learn_trial_ends_at = coalesce(
  (select lp.trial_started_at + interval '7 days' from public.learning_profiles lp where lp.user_id = s.user_id),
  now() + interval '7 days')
where s.learn_trial_ends_at is null;

alter table public.subscriptions alter column learn_trial_ends_at set default (now() + interval '7 days');
alter table public.subscriptions alter column learn_trial_ends_at set not null;

-- ============================================================
-- 2. Plans
-- ============================================================
update public.subscription_plans set
  name = 'Learn', price = 4, price_uzs = '49 000', period = '30 days',
  description = 'The full English course: Beginner to Upper-Intermediate.',
  writing_limit = 0, speaking_limit = 0, mock_test_limit = 0, badge = null,
  features = to_jsonb(array[
    'All English lessons, every level', 'Adaptive learning', 'Smart vocabulary review', 'Grammar and mistake review',
    'XP, streak and progress', 'Telegram reminders'])
where slug = 'go';

update public.subscription_plans set
  name = 'IELTS', price = 13, price_uzs = '129 000', period = '30 days',
  description = 'Everything in Learn, plus AI-graded IELTS Writing and Speaking.',
  writing_limit = 50, speaking_limit = 30, mock_test_limit = 3, badge = 'Recommended',
  features = to_jsonb(array[
    'Everything in Learn', '50 Writing evaluations / month', '30 Speaking evaluations / month',
    'AI scoring and detailed feedback', 'Full Mock Tests'])
where slug = 'plus';

update public.subscription_plans set
  name = 'Free', price = 0, price_uzs = '0',
  description = '7-day Learn trial for every new account.',
  features = to_jsonb(array['7 days of the full Learn course', '3 Writing evaluations', '2 Speaking evaluations'])
where slug = 'free';

-- Names only: running subscriptions keep the allowances they were sold with.
update public.subscriptions set plan_name = 'Learn' where plan_type = 'go';
update public.subscriptions set plan_name = 'IELTS' where plan_type = 'plus';
update public.subscription_history set plan_name = 'Learn' where plan_type = 'go';
update public.subscription_history set plan_name = 'IELTS' where plan_type = 'plus';

-- ============================================================
-- 3. Access to the course
-- ============================================================
create or replace function public.learning_access_for(_user uuid)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare plan text; plan_end timestamptz; trial_end timestamptz;
begin
  select plan_type, expires_at, learn_trial_ends_at into plan, plan_end, trial_end from public.subscriptions where user_id = _user;
  if plan in ('go', 'plus') and (plan_end is null or plan_end > now()) then
    return jsonb_build_object('allowed', true, 'reason', 'paid', 'plan', plan, 'expires_at', plan_end);
  end if;
  if trial_end is null then trial_end := now() + interval '7 days'; end if;
  return jsonb_build_object('allowed', now() < trial_end,
    'reason', case when now() < trial_end then 'trial' else 'trial_expired' end,
    'plan', coalesce(plan, 'free'), 'trial_ends_at', trial_end);
end; $$;

-- Writing and Speaking on the Free plan belong to the trial: once it is over, a plan is needed.
create or replace function public.consume_quota(_user_id uuid, _kind text)
returns jsonb language plpgsql security definer set search_path=public as $$
declare s record; lim int; used int;
begin
  perform public.enforce_subscription_expiry(_user_id);
  select * into s from public.subscriptions where user_id = _user_id for update;
  if not found then return jsonb_build_object('allowed', false, 'reason', 'no_subscription'); end if;

  if _kind = 'writing' then lim := s.writing_limit; used := s.writing_used;
  elsif _kind = 'speaking' then lim := s.speaking_limit; used := s.speaking_used;
  elsif _kind = 'mock_test' then lim := s.mock_test_limit; used := s.mock_test_used;
  else raise exception 'Unknown quota kind: %', _kind;
  end if;

  if s.plan_type = 'free' and s.learn_trial_ends_at <= now() then
    return jsonb_build_object('allowed', false, 'reason', 'trial_expired', 'plan', s.plan_type, 'kind', _kind, 'used', used, 'limit', lim);
  end if;
  if used >= lim then
    return jsonb_build_object('allowed', false, 'reason', 'limit_reached', 'plan', s.plan_type, 'kind', _kind, 'used', used, 'limit', lim);
  end if;

  if _kind = 'writing' then update public.subscriptions set writing_used = writing_used + 1 where user_id = _user_id;
  elsif _kind = 'speaking' then update public.subscriptions set speaking_used = speaking_used + 1 where user_id = _user_id;
  else update public.subscriptions set mock_test_used = mock_test_used + 1 where user_id = _user_id;
  end if;
  return jsonb_build_object('allowed', true, 'plan', s.plan_type, 'kind', _kind, 'used', used + 1, 'limit', lim);
end; $$;

-- ============================================================
-- 4. Streak: three missed days in a row reset it; XP, mastery and every other progress stay
-- ============================================================
create or replace function public.learning_streak(_user uuid)
returns int language plpgsql stable security definer set search_path=public as $$
declare p public.learning_profiles%rowtype; gap int;
begin
  select * into p from public.learning_profiles where user_id = _user;
  if not found or p.streak_last_day is null then return 0; end if;
  gap := public.learning_today() - p.streak_last_day;
  return case when gap <= 3 then p.streak_current else 0 end; -- gap 4 = three full days missed
end; $$;

create or replace function public.learning_streak_info(_user uuid)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare p public.learning_profiles%rowtype; gap int; shown int;
begin
  select * into p from public.learning_profiles where user_id = _user;
  if not found then
    return jsonb_build_object('current', 0, 'best', 0, 'freezes', 0, 'done_today', false, 'at_risk', false, 'broken', false, 'days_left', 3);
  end if;
  shown := public.learning_streak(_user);
  gap := case when p.streak_last_day is null then null else public.learning_today() - p.streak_last_day end;
  return jsonb_build_object(
    'current', shown, 'best', greatest(p.streak_best, shown), 'freezes', 0,
    'done_today', gap = 0,
    -- the streak is alive but today is still open; days_left counts today (1 = study today or lose it)
    'at_risk', shown > 0 and coalesce(gap, 0) >= 1,
    'days_left', case when gap is null then 3 else greatest(0, 4 - gap) end,
    'broken', p.streak_current > 0 and shown = 0);
end; $$;

create or replace function public.learning_record_activity(
  _user uuid, _xp int, _lessons int, _seconds int, _correct int, _answered int)
returns jsonb language plpgsql security definer set search_path=public as $$
declare
  today date := public.learning_today();
  p public.learning_profiles%rowtype; d public.learning_daily_activity%rowtype;
  base int; bonus_goal int := 0; bonus_back int := 0; total int; today_xp int;
  cur int; best int; freezes int := 0; missed int; fresh text[]; goal_reached boolean;
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

  cur := p.streak_current; best := p.streak_best; freezes := 0;
  if total > 0 then
    if p.streak_last_day is null then cur := 1;
    elsif p.streak_last_day = today then cur := p.streak_current;
    else
      -- Up to two days off keep the streak; three missed days in a row reset it (XP and mastery are never touched).
      missed := today - p.streak_last_day - 1;
      if missed <= 2 then cur := p.streak_current + 1; else cur := 1; end if;
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
    xp = xp + total, streak_current = cur, streak_best = best, streak_freezes = 0,
    streak_last_day = case when total > 0 then today else streak_last_day end, updated_at = now()
  where user_id = _user;

  fresh := public.learning_check_achievements(_user);
  return jsonb_build_object(
    'xp', total, 'base_xp', base, 'goal_bonus', bonus_goal, 'comeback_bonus', bonus_back,
    'streak', public.learning_streak(_user), 'streak_best', best, 'freezes', freezes,
    'goal_reached', goal_reached, 'new_achievements', to_jsonb(fresh));
end; $$;


revoke all on function public.learning_record_activity(uuid, int, int, int, int, int) from public, anon, authenticated;
grant execute on function public.learning_record_activity(uuid, int, int, int, int, int) to service_role;

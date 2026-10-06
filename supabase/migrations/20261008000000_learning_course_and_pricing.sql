-- English course ("O'rganish"), new prices, 6-month plans with monthly allowance, and the bot's lesson reminder.

-- ============================================================
-- Course progress
-- ============================================================
create table if not exists public.learning_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  level text not null default 'beginner' check (level in ('beginner','a1','a2','b1','b2','c1','ielts')),
  -- Free plan users can learn for 7 days from this moment.
  trial_started_at timestamptz not null default now(),
  xp int not null default 0,
  last_lesson_id text,
  next_lesson_id text,
  next_lesson_title text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.learning_lesson_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id text not null check (lesson_id ~ '^u[0-9]{1,2}-l[0-9]{1,2}$'),
  best_score int not null default 0,
  total int not null default 0,
  stars smallint not null default 0,
  attempts int not null default 0,
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id)
);

create table if not exists public.learning_unit_tests (
  user_id uuid not null references auth.users(id) on delete cascade,
  unit_id text not null check (unit_id ~ '^u[0-9]{1,2}$'),
  -- Failed attempts in the current window; two failures lock the test for 48 hours.
  attempts int not null default 0,
  best_score int,
  best_total int,
  passed_at timestamptz,
  locked_until timestamptz,
  last_attempt_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, unit_id)
);

create table if not exists public.learning_daily_activity (
  user_id uuid not null references auth.users(id) on delete cascade,
  day date not null,
  xp int not null default 0,
  lessons int not null default 0,
  seconds int not null default 0,
  correct int not null default 0,
  answered int not null default 0,
  primary key (user_id, day)
);

do $$
declare t text;
begin
  foreach t in array array['learning_profiles','learning_lesson_progress','learning_unit_tests','learning_daily_activity'] loop
    execute format('alter table public.%I enable row level security', t);
    if not exists(select 1 from pg_policies where schemaname='public' and tablename=t and policyname='Own rows') then
      execute format('create policy "Own rows" on public.%I for select to authenticated using (user_id = auth.uid())', t);
    end if;
    execute format('revoke all on public.%I from anon, authenticated', t);
    execute format('grant select on public.%I to authenticated', t);
    execute format('grant all on public.%I to service_role', t);
  end loop;
end $$;

create or replace function public.learning_today() returns date
language sql stable set search_path=public as $$ select (now() at time zone 'Asia/Tashkent')::date $$;

-- Paid plans always have access; Free users get 7 days from the day they start the course.
create or replace function public.learning_access_for(_user uuid)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare plan text; plan_end timestamptz; started timestamptz; trial_end timestamptz;
begin
  select plan_type, expires_at into plan, plan_end from public.subscriptions where user_id=_user;
  if plan in ('go','plus') and (plan_end is null or plan_end > now()) then
    return jsonb_build_object('allowed',true,'reason','paid','plan',plan,'expires_at',plan_end);
  end if;
  select trial_started_at into started from public.learning_profiles where user_id=_user;
  if started is null then
    return jsonb_build_object('allowed',true,'reason','not_started','plan',coalesce(plan,'free'),'trial_days',7);
  end if;
  trial_end := started + interval '7 days';
  return jsonb_build_object('allowed', now() < trial_end,
    'reason', case when now() < trial_end then 'trial' else 'trial_expired' end,
    'plan', coalesce(plan,'free'), 'trial_ends_at', trial_end);
end; $$;

-- Consecutive days (Tashkent time) with learning activity, counting today or yesterday as the latest day.
create or replace function public.learning_streak(_user uuid)
returns int language plpgsql stable security definer set search_path=public as $$
declare d date := public.learning_today(); n int := 0;
begin
  if not exists(select 1 from public.learning_daily_activity where user_id=_user and day=d and xp>0) then d := d - 1; end if;
  while exists(select 1 from public.learning_daily_activity where user_id=_user and day=d and xp>0) loop
    n := n + 1; d := d - 1;
  end loop;
  return n;
end; $$;

create or replace function public.learning_start(_level text default 'beginner')
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  if _level <> 'beginner' then raise exception 'level_not_available'; end if;
  insert into public.learning_profiles(user_id, level) values (uid, _level)
  on conflict (user_id) do update set level=excluded.level, updated_at=now();
  return public.learning_access_for(uid);
end; $$;

create or replace function public.learning_state()
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  return jsonb_build_object(
    'profile', (select to_jsonb(p) - 'user_id' from public.learning_profiles p where p.user_id=uid),
    'access', public.learning_access_for(uid),
    'streak', public.learning_streak(uid),
    'today', public.learning_today(),
    'progress', coalesce((select jsonb_agg(to_jsonb(x) - 'user_id') from public.learning_lesson_progress x where x.user_id=uid), '[]'::jsonb),
    'tests', coalesce((select jsonb_agg(to_jsonb(x) - 'user_id') from public.learning_unit_tests x where x.user_id=uid), '[]'::jsonb),
    'activity', coalesce((select jsonb_agg(to_jsonb(x) - 'user_id' order by x.day) from public.learning_daily_activity x
                          where x.user_id=uid and x.day > public.learning_today() - 60), '[]'::jsonb)
  );
end; $$;

create or replace function public.learning_add_activity(_user uuid, _xp int, _lessons int, _seconds int, _correct int, _answered int)
returns void language sql security definer set search_path=public as $$
  insert into public.learning_daily_activity(user_id, day, xp, lessons, seconds, correct, answered)
  values (_user, public.learning_today(), _xp, _lessons, _seconds, _correct, _answered)
  on conflict (user_id, day) do update set
    xp = learning_daily_activity.xp + excluded.xp,
    lessons = learning_daily_activity.lessons + excluded.lessons,
    seconds = least(learning_daily_activity.seconds + excluded.seconds, 86400),
    correct = learning_daily_activity.correct + excluded.correct,
    answered = learning_daily_activity.answered + excluded.answered;
$$;

create or replace function public.learning_require_access(_user uuid)
returns void language plpgsql stable security definer set search_path=public as $$
begin
  if _user is null then raise exception 'not_authenticated'; end if;
  if not exists(select 1 from public.learning_profiles where user_id=_user) then raise exception 'learning_not_started'; end if;
  if not (public.learning_access_for(_user)->>'allowed')::boolean then raise exception 'learning_locked'; end if;
end; $$;

create or replace function public.learning_complete_lesson(
  _lesson text, _score int, _total int, _seconds int, _next_id text default null, _next_title text default null)
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid(); pct numeric; passed boolean; stars smallint; first boolean; gain int;
  cur public.learning_lesson_progress%rowtype;
begin
  perform public.learning_require_access(uid);
  if _lesson !~ '^u[0-9]{1,2}-l[0-9]{1,2}$' then raise exception 'invalid_lesson'; end if;
  if _total < 1 or _total > 60 or _score < 0 or _score > _total then raise exception 'invalid_score'; end if;
  pct := _score * 100.0 / _total;
  passed := pct >= 70;
  stars := case when pct >= 90 then 3 when pct >= 80 then 2 when pct >= 70 then 1 else 0 end;
  select * into cur from public.learning_lesson_progress where user_id=uid and lesson_id=_lesson for update;
  first := passed and (cur.completed_at is null);
  gain := least(_score + case when first then 20 else 0 end, 80);
  insert into public.learning_lesson_progress(user_id, lesson_id, best_score, total, stars, attempts, completed_at, updated_at)
  values (uid, _lesson, _score, _total, stars, 1, case when passed then now() end, now())
  on conflict (user_id, lesson_id) do update set
    best_score = greatest(learning_lesson_progress.best_score, excluded.best_score),
    total = excluded.total,
    stars = greatest(learning_lesson_progress.stars, excluded.stars),
    attempts = learning_lesson_progress.attempts + 1,
    completed_at = coalesce(learning_lesson_progress.completed_at, excluded.completed_at),
    updated_at = now();
  perform public.learning_add_activity(uid, gain, case when passed then 1 else 0 end,
    greatest(0, least(coalesce(_seconds, 0), 5400)), _score, _total);
  update public.learning_profiles set xp = xp + gain, last_lesson_id = _lesson,
    next_lesson_id = case when passed then left(_next_id, 20) else next_lesson_id end,
    next_lesson_title = case when passed then left(_next_title, 120) else next_lesson_title end,
    updated_at = now()
  where user_id = uid;
  return jsonb_build_object('passed', passed, 'stars', stars, 'xp', gain, 'first', first, 'streak', public.learning_streak(uid));
end; $$;

-- Word drills and other practice outside lessons.
create or replace function public.learning_log_practice(_correct int, _answered int, _seconds int)
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid(); gain int;
begin
  perform public.learning_require_access(uid);
  if _answered < 1 or _answered > 50 or _correct < 0 or _correct > _answered then raise exception 'invalid_score'; end if;
  gain := least(_correct, 20);
  perform public.learning_add_activity(uid, gain, 0, greatest(0, least(coalesce(_seconds, 0), 3600)), _correct, _answered);
  update public.learning_profiles set xp = xp + gain, updated_at = now() where user_id = uid;
  return jsonb_build_object('xp', gain, 'streak', public.learning_streak(uid));
end; $$;

create or replace function public.learning_submit_unit_test(_unit text, _score int, _total int)
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid(); t public.learning_unit_tests%rowtype; passed boolean; gain int := 0;
begin
  perform public.learning_require_access(uid);
  if _unit !~ '^u[0-9]{1,2}$' then raise exception 'invalid_unit'; end if;
  if _total < 5 or _total > 60 or _score < 0 or _score > _total then raise exception 'invalid_score'; end if;
  insert into public.learning_unit_tests(user_id, unit_id) values (uid, _unit) on conflict do nothing;
  select * into t from public.learning_unit_tests where user_id=uid and unit_id=_unit for update;
  if t.passed_at is not null then
    return jsonb_build_object('status','passed','already',true,'best_score',t.best_score,'best_total',t.best_total);
  end if;
  if t.locked_until is not null and t.locked_until > now() then
    return jsonb_build_object('status','locked','locked_until',t.locked_until);
  end if;
  if t.locked_until is not null then t.attempts := 0; end if; -- the 48-hour pause is over: two new attempts
  passed := _score * 100 >= _total * 80;
  if passed then gain := 50; end if;
  update public.learning_unit_tests set
    attempts = case when passed then t.attempts else t.attempts + 1 end,
    best_score = case when best_total is null or _score * coalesce(best_total, 1) > coalesce(best_score, 0) * _total then _score else best_score end,
    best_total = case when best_total is null or _score * coalesce(best_total, 1) > coalesce(best_score, 0) * _total then _total else best_total end,
    passed_at = case when passed then now() end,
    locked_until = case when not passed and t.attempts + 1 >= 2 then now() + interval '48 hours' else null end,
    last_attempt_at = now(), updated_at = now()
  where user_id=uid and unit_id=_unit
  returning * into t;
  perform public.learning_add_activity(uid, gain + least(_score, 30), 0, 0, _score, _total);
  update public.learning_profiles set xp = xp + gain + least(_score, 30), updated_at = now() where user_id = uid;
  return jsonb_build_object(
    'status', case when passed then 'passed' when t.locked_until is not null then 'locked' else 'failed' end,
    'attempts_left', case when passed then null else greatest(0, 2 - t.attempts) end,
    'locked_until', t.locked_until, 'xp', gain + least(_score, 30));
end; $$;

do $$
declare f text;
begin
  foreach f in array array[
    'public.learning_access_for(uuid)', 'public.learning_streak(uuid)', 'public.learning_add_activity(uuid,int,int,int,int,int)',
    'public.learning_require_access(uuid)'
  ] loop
    execute format('revoke all on function %s from public, anon, authenticated', f);
    execute format('grant execute on function %s to service_role', f);
  end loop;
  foreach f in array array[
    'public.learning_start(text)', 'public.learning_state()', 'public.learning_complete_lesson(text,int,int,int,text,text)',
    'public.learning_log_practice(int,int,int)', 'public.learning_submit_unit_test(text,int,int)'
  ] loop
    execute format('revoke all on function %s from public, anon', f);
    execute format('grant execute on function %s to authenticated, service_role', f);
  end loop;
end $$;

-- ============================================================
-- Prices: Go $9 / 79 000 so'm, Plus $13 / 129 000 so'm (the course is included). 6 months = -10%.
-- ============================================================
update public.subscription_plans set price=9, price_uzs='79 000',
  description='Writing, Speaking and the full English course.',
  features='["20 Writing evaluations / month","15 Speaking evaluations / month","3 Full Mock Tests / month","English course from zero (Beginner → IELTS)","Daily Grammar test","AI Mentor","Progress and history"]'::jsonb
where slug='go';
update public.subscription_plans set price=13, price_uzs='129 000',
  description='For intensive learners: more evaluations and mock tests.',
  features='["50 Writing evaluations / month","40 Speaking evaluations / month","8 Full Mock Tests / month","English course from zero (Beginner → IELTS)","Daily Grammar test","AI Mentor","Progress and history"]'::jsonb
where slug='plus';
update public.subscription_plans set
  features='["3 Writing evaluations with full feedback","2 Speaking evaluations","English course: 7 days free","Daily Grammar test","Result history"]'::jsonb
where slug='free';

-- ============================================================
-- Long plans (6 months) keep a monthly allowance: usage resets every 30 days of the paid period.
-- ============================================================
alter table public.subscriptions add column if not exists usage_period_start timestamptz;

create or replace function public.roll_subscription_usage(_user_id uuid default null)
returns int language plpgsql security definer set search_path=public as $$
declare n int;
begin
  with due as (
    select user_id, coalesce(usage_period_start, started_at) as base from public.subscriptions
    where plan_type in ('go','plus') and expires_at > now() and started_at is not null
      and (_user_id is null or user_id = _user_id)
      and now() >= coalesce(usage_period_start, started_at) + interval '30 days'
  ), upd as (
    update public.subscriptions s set writing_used=0, speaking_used=0, mock_test_used=0,
      usage_period_start = d.base + make_interval(days => 30 * floor(extract(epoch from now() - d.base) / 2592000)::int)
    from due d where s.user_id = d.user_id returning 1
  ) select count(*)::int into n from upd;
  return n;
end; $$;
revoke all on function public.roll_subscription_usage(uuid) from public, anon, authenticated;
grant execute on function public.roll_subscription_usage(uuid) to service_role;

create or replace function public.enforce_subscription_expiry(_user_id uuid)
returns void language plpgsql security definer set search_path=public as $$
declare f record;
begin
  select * into f from public.subscription_plans where slug='free';
  update public.subscription_history set ended_at=now()
    where user_id=_user_id and ended_at is null and expires_at is not null and expires_at<now();
  update public.subscriptions set plan_type='free',plan_name='Free',
    writing_limit=f.writing_limit,writing_used=0,speaking_limit=f.speaking_limit,speaking_used=0,
    mock_test_limit=f.mock_test_limit,mock_test_used=0,expires_at=null,started_at=now(),usage_period_start=null,is_active=true
  where user_id=_user_id and plan_type<>'free' and expires_at is not null and expires_at<now();
  perform public.roll_subscription_usage(_user_id);
end; $$;

-- A new paid period starts a new monthly allowance.
create or replace function public.subscriptions_reset_usage_period()
returns trigger language plpgsql set search_path=public as $$
begin
  if new.started_at is distinct from old.started_at or new.plan_type is distinct from old.plan_type then
    new.usage_period_start := case when new.plan_type in ('go','plus') then new.started_at end;
  end if;
  return new;
end; $$;
create or replace trigger subscriptions_usage_period before update on public.subscriptions
  for each row execute function public.subscriptions_reset_usage_period();

-- The bot admin panel can grant 30 or 180 days; an extension of an active plan keeps the monthly allowance.
create or replace function public.telegram_admin_set_plan(_user uuid,_plan text,_days int default 30)
returns jsonb language plpgsql security definer set search_path=public as $$
declare p record; cur public.subscriptions%rowtype; s_end timestamptz; f record;
begin
  if _plan not in ('free','go','plus') then raise exception 'Unsupported plan'; end if;
  if _days not between 1 and 366 then raise exception 'Unsupported duration'; end if;
  select * into cur from public.subscriptions where user_id=_user for update;
  if not found then raise exception 'Subscription row not found'; end if;
  if _plan='free' then
    select * into f from public.subscription_plans where slug='free';
    update public.subscription_history set ended_at=now() where user_id=_user and ended_at is null;
    update public.subscriptions set plan_type='free',plan_name='Free',writing_limit=f.writing_limit,writing_used=0,
      speaking_limit=f.speaking_limit,speaking_used=0,mock_test_limit=f.mock_test_limit,mock_test_used=0,
      expires_at=null,started_at=now(),is_active=true where user_id=_user;
    insert into public.subscription_history(user_id,plan_type,plan_name,price_uzs,writing_limit,speaking_limit,mock_test_limit,started_at)
      values(_user,'free','Free','0',f.writing_limit,f.speaking_limit,f.mock_test_limit,now());
    return jsonb_build_object('plan','free','expires_at',null,'extended',false);
  end if;
  select * into p from public.subscription_plans where slug=_plan and is_active=true;
  if not found then raise exception 'Plan not found'; end if;
  if cur.plan_type=_plan and cur.expires_at is not null and cur.expires_at>now() then
    s_end := cur.expires_at + make_interval(days=>_days);
    update public.subscriptions set expires_at=s_end where user_id=_user;
    update public.subscription_history set expires_at=s_end where user_id=_user and ended_at is null;
    return jsonb_build_object('plan',_plan,'expires_at',s_end,'extended',true);
  end if;
  s_end := now() + make_interval(days=>_days);
  update public.subscription_history set ended_at=now() where user_id=_user and ended_at is null;
  update public.subscriptions set plan_type=p.slug,plan_name=p.name,writing_limit=p.writing_limit,writing_used=0,
    speaking_limit=p.speaking_limit,speaking_used=0,mock_test_limit=p.mock_test_limit,mock_test_used=0,
    started_at=now(),expires_at=s_end,is_active=true where user_id=_user;
  insert into public.subscription_history(user_id,plan_type,plan_name,price_uzs,writing_limit,speaking_limit,mock_test_limit,started_at,expires_at)
    values(_user,p.slug,p.name,p.price_uzs,p.writing_limit,p.speaking_limit,p.mock_test_limit,now(),s_end);
  return jsonb_build_object('plan',_plan,'expires_at',s_end,'extended',false);
end; $$;

-- ============================================================
-- Telegram: course summary for the bot and the evening lesson reminder.
-- ============================================================
create or replace function public.telegram_learning_summary(_user uuid)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare p public.learning_profiles%rowtype;
begin
  select * into p from public.learning_profiles where user_id=_user;
  if not found then return jsonb_build_object('started', false, 'access', public.learning_access_for(_user)); end if;
  return jsonb_build_object(
    'started', true,
    'access', public.learning_access_for(_user),
    'xp', p.xp,
    'streak', public.learning_streak(_user),
    'lessons_done', (select count(*) from public.learning_lesson_progress where user_id=_user and completed_at is not null),
    'tests_passed', (select count(*) from public.learning_unit_tests where user_id=_user and passed_at is not null),
    'today_done', exists(select 1 from public.learning_daily_activity where user_id=_user and day=public.learning_today() and xp>0),
    'next_lesson_title', p.next_lesson_title
  );
end; $$;

-- One reminder per learner who started the course, still has access and has not studied today; spread over the window.
create or replace function public.telegram_enqueue_learn_reminders(_window_minutes int default 60)
returns int language plpgsql security definer set search_path=public as $$
declare today date := public.learning_today(); n int;
begin
  with eligible as (
    select t.telegram_id, t.user_id
    from public.telegram_accounts t
    join public.learning_profiles lp on lp.user_id = t.user_id
    where not t.is_blocked and not t.is_banned and t.notify_reminders
      and (public.learning_access_for(t.user_id)->>'allowed')::boolean
      and not exists(select 1 from public.learning_daily_activity a where a.user_id=t.user_id and a.day=today and a.xp>0)
      and not exists(select 1 from public.telegram_outbox o where o.telegram_id=t.telegram_id and o.kind='learn_reminder'
                       and o.created_at >= (today::timestamp at time zone 'Asia/Tashkent'))
  ), ordered as (
    select e.*, row_number() over (order by random()) as rn, count(*) over () as total from eligible e
  )
  insert into public.telegram_outbox(telegram_id,user_id,kind,payload,send_after)
  select o.telegram_id, o.user_id, 'learn_reminder', jsonb_build_object('date',today),
    now() + make_interval(secs => ((o.rn-1) * _window_minutes * 60.0 / greatest(o.total,1))::double precision)
  from ordered o;
  get diagnostics n = row_count;
  if n > 0 then perform public.telegram_kick(); end if;
  return n;
end; $$;

do $$
declare f text;
begin
  foreach f in array array['public.telegram_learning_summary(uuid)', 'public.telegram_enqueue_learn_reminders(int)',
                           'public.telegram_admin_set_plan(uuid,text,int)'] loop
    execute format('revoke all on function %s from public, anon, authenticated', f);
    execute format('grant execute on function %s to service_role', f);
  end loop;
end $$;

do $$ begin
  if exists(select 1 from pg_extension where extname='pg_cron') then
    -- 15:00 UTC = 20:00 in Tashkent; reminders are spread until 21:00.
    perform cron.schedule('telegram-learn-reminder', '0 15 * * *', 'select public.telegram_enqueue_learn_reminders(60)');
    perform cron.schedule('subscription-usage-rollover', '17 0 * * *', 'select public.roll_subscription_usage()');
  end if;
exception when others then raise notice 'cron scheduling skipped: %', sqlerrm; end $$;

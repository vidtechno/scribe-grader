-- Admin panel v2: plain-language statistics, one-call user list, user detail and referral/learning overviews.
-- Everything is admin-only (has_role) and read-only except admin_ref_resolve. The AI cost numbers are gone.

create or replace function public.admin_overview()
returns jsonb language plpgsql volatile security definer set search_path=public,auth as $$
declare
  today date := public.learning_today();
  day_start timestamptz := (public.learning_today()::timestamp at time zone 'Asia/Tashkent');
  r jsonb;
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then raise exception 'admin_only'; end if;
  select jsonb_build_object(
    'users', jsonb_build_object(
      'total', (select count(*) from auth.users),
      'today', (select count(*) from auth.users where created_at >= day_start),
      'd7', (select count(*) from auth.users where created_at > now() - interval '7 days'),
      'd30', (select count(*) from auth.users where created_at > now() - interval '30 days'),
      'active_24h', (select count(distinct x.u) from (
          select id as u from auth.users where last_sign_in_at > now() - interval '24 hours'
          union select user_id from public.learning_daily_activity where day >= today) x),
      'active_7d', (select count(distinct x.u) from (
          select id as u from auth.users where last_sign_in_at > now() - interval '7 days'
          union select user_id from public.learning_daily_activity where day > today - 7) x),
      'google', (select count(*) from auth.users where raw_app_meta_data->>'provider' = 'google'),
      'telegram', (select count(*) from auth.users where raw_app_meta_data->>'provider' = 'telegram'),
      'email', (select count(*) from auth.users where coalesce(raw_app_meta_data->>'provider', 'email') = 'email')),
    'plans', jsonb_build_object(
      'learn', (select count(*) from public.subscriptions where plan_type = 'go' and coalesce(expires_at, 'infinity'::timestamptz) > now()),
      'ielts', (select count(*) from public.subscriptions where plan_type = 'plus' and coalesce(expires_at, 'infinity'::timestamptz) > now()),
      'trial', (select count(*) from public.subscriptions where plan_type = 'free' and learn_trial_ends_at > now()),
      'trial_ended', (select count(*) from public.subscriptions where plan_type = 'free' and learn_trial_ends_at <= now()),
      'expiring_7d', (select count(*) from public.subscriptions where plan_type in ('go', 'plus') and expires_at > now() and expires_at <= now() + interval '7 days'),
      'expired', (select count(*) from public.subscriptions where plan_type in ('go', 'plus') and expires_at <= now()),
      'monthly_uzs', (select coalesce(sum(case plan_type when 'go' then 49000 when 'plus' then 129000 else 0 end), 0)
                      from public.subscriptions where plan_type in ('go', 'plus') and coalesce(expires_at, 'infinity'::timestamptz) > now())),
    'funnel', jsonb_build_object(
      'signed_up', (select count(*) from auth.users),
      'started', (select count(*) from public.learning_profiles),
      'lesson1', (select count(*) from (select user_id from public.learning_lesson_progress where completed_at is not null group by user_id having count(*) >= 1) a),
      'lessons3', (select count(*) from (select user_id from public.learning_lesson_progress where completed_at is not null group by user_id having count(*) >= 3) a),
      'bought', (select count(distinct user_id) from public.subscription_history where plan_type in ('go', 'plus'))),
    'learning', jsonb_build_object(
      'lessons_today', (select coalesce(sum(lessons), 0) from public.learning_daily_activity where day = today),
      'lessons_7d', (select coalesce(sum(lessons), 0) from public.learning_daily_activity where day > today - 7),
      'learners_today', (select count(*) from public.learning_daily_activity where day = today and (xp > 0 or lessons > 0)),
      'learners_7d', (select count(distinct user_id) from public.learning_daily_activity where day > today - 7 and (xp > 0 or lessons > 0)),
      'streak3', (select count(*) from public.learning_profiles where streak_current >= 3),
      'streak7', (select count(*) from public.learning_profiles where streak_current >= 7)),
    'ielts', jsonb_build_object(
      'writing_7d', (select count(*) from public.essays where status = 'completed' and created_at > now() - interval '7 days'),
      'speaking_7d', (select count(*) from public.speaking_attempts where status = 'completed' and created_at > now() - interval '7 days'),
      'mock_7d', (select count(*) from public.mock_tests where status = 'completed' and created_at > now() - interval '7 days')),
    'referral', jsonb_build_object(
      'invited', (select count(*) from public.referral_invites),
      'bought', (select count(*) from public.referral_invites where purchased_at is not null),
      'rewarded', (select count(*) from public.referral_invites where rewarded_at is not null),
      'pending_count', (select count(*) from public.referral_withdrawals where status = 'pending'),
      'pending_sum', (select coalesce(sum(amount), 0) from public.referral_withdrawals where status = 'pending'),
      'paid_sum', (select coalesce(sum(amount), 0) from public.referral_withdrawals where status = 'paid')),
    'bot', jsonb_build_object(
      'total', (select count(*) from public.telegram_accounts),
      'linked', (select count(*) from public.telegram_accounts where user_id is not null),
      'blocked', (select count(*) from public.telegram_accounts where is_blocked),
      'outbox_pending', (select count(*) from public.telegram_outbox where status in ('pending', 'sending')),
      'outbox_failed_24h', (select count(*) from public.telegram_outbox where status = 'failed' and created_at > now() - interval '1 day')),
    'signups_30d', coalesce((select jsonb_agg(jsonb_build_object('day', d.day, 'n', coalesce(s.n, 0)) order by d.day)
      from generate_series(today - 29, today, '1 day') as d(day)
      left join (select (created_at at time zone 'Asia/Tashkent')::date as day, count(*) n from auth.users
                 where created_at > now() - interval '31 days' group by 1) s on s.day = d.day), '[]'::jsonb),
    'learning_14d', coalesce((select jsonb_agg(jsonb_build_object('day', d.day, 'lessons', coalesce(a.lessons, 0), 'learners', coalesce(a.learners, 0)) order by d.day)
      from generate_series(today - 13, today, '1 day') as d(day)
      left join (select day, sum(lessons) lessons, count(*) filter (where xp > 0 or lessons > 0) learners
                 from public.learning_daily_activity where day > today - 15 group by day) a on a.day = d.day), '[]'::jsonb)
  ) into r;
  return r;
end; $$;

-- One row per user with everything the admin list shows and filters on.
create or replace function public.admin_users_list()
returns jsonb language plpgsql volatile security definer set search_path=public,auth as $$
declare r jsonb;
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then raise exception 'admin_only'; end if;
  select coalesce(jsonb_agg(x order by x.created_at desc), '[]'::jsonb) into r from (
    select u.id as user_id, u.email, p.full_name, p.public_id, p.username, p.phone, p.city,
      u.created_at, u.last_sign_in_at, coalesce(u.raw_app_meta_data->>'provider', 'email') as provider,
      s.plan_type, s.expires_at, s.learn_trial_ends_at as trial_ends_at,
      s.writing_used, s.writing_limit, s.speaking_used, s.speaking_limit,
      lp.level, lp.xp, lp.streak_current as streak,
      coalesce(lc.n, 0) as lessons_done,
      la.last_day as last_learn_day,
      coalesce(e.c, 0) as essays, coalesce(sp.c, 0) as speaking, coalesce(m.c, 0) as mocks,
      coalesce(ri.n, 0) as invited, ref.referrer_id is not null as was_referred,
      t.telegram_id, t.username as telegram_username, coalesce(t.is_banned, false) as telegram_banned,
      exists(select 1 from public.user_roles ur where ur.user_id = u.id and ur.role = 'admin') as is_admin,
      greatest(u.last_sign_in_at, la.last_day::timestamptz, e.last_at, sp.last_at, m.last_at) as last_seen
    from auth.users u
    left join public.profiles p on p.user_id = u.id
    left join public.subscriptions s on s.user_id = u.id
    left join public.learning_profiles lp on lp.user_id = u.id
    left join (select user_id, count(*) n from public.learning_lesson_progress where completed_at is not null group by user_id) lc on lc.user_id = u.id
    left join (select user_id, max(day) last_day from public.learning_daily_activity where xp > 0 or lessons > 0 group by user_id) la on la.user_id = u.id
    left join (select user_id, count(*) c, max(created_at) last_at from public.essays group by user_id) e on e.user_id = u.id
    left join (select user_id, count(*) c, max(created_at) last_at from public.speaking_attempts group by user_id) sp on sp.user_id = u.id
    left join (select user_id, count(*) c, max(created_at) last_at from public.mock_tests group by user_id) m on m.user_id = u.id
    left join (select referrer_id, count(*) n from public.referral_invites group by referrer_id) ri on ri.referrer_id = u.id
    left join public.referral_invites ref on ref.referee_id = u.id
    left join public.telegram_accounts t on t.user_id = u.id
  ) x;
  return r;
end; $$;

create or replace function public.admin_user_detail(_user uuid)
returns jsonb language plpgsql volatile security definer set search_path=public,auth as $$
declare r jsonb;
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then raise exception 'admin_only'; end if;
  select jsonb_build_object(
    'learning', (select to_jsonb(l) - 'user_id' from (
        select level, xp, streak_current, streak_best, daily_goal_xp, placement_status, last_lesson_id, next_lesson_title
        from public.learning_profiles where user_id = _user) l),
    'lessons_done', (select count(*) from public.learning_lesson_progress where user_id = _user and completed_at is not null),
    'recent_lessons', coalesce((select jsonb_agg(x) from (
        select lesson_id, best_score, total, stars, completed_at from public.learning_lesson_progress
        where user_id = _user and completed_at is not null order by completed_at desc limit 8) x), '[]'::jsonb),
    'level_tests', coalesce((select jsonb_agg(x) from (
        select level_id, attempts, best_score, best_total, passed_at from public.learning_level_tests where user_id = _user) x), '[]'::jsonb),
    'activity', coalesce((select jsonb_agg(x order by x.day) from (
        select day, xp, lessons from public.learning_daily_activity where user_id = _user and day > public.learning_today() - 14) x), '[]'::jsonb),
    'history', coalesce((select jsonb_agg(x) from (
        select plan_type, plan_name, price_uzs, started_at, expires_at from public.subscription_history
        where user_id = _user order by created_at desc limit 8) x), '[]'::jsonb),
    'referral', jsonb_build_object(
      'invited', (select count(*) from public.referral_invites where referrer_id = _user),
      'bought', (select count(*) from public.referral_invites where referrer_id = _user and purchased_at is not null),
      'balance', coalesce((select balance from public.referral_wallet where user_id = _user), 0),
      'paid', coalesce((select paid from public.referral_wallet where user_id = _user), 0),
      'referred_by', (select p.full_name from public.referral_invites i join public.profiles p on p.user_id = i.referrer_id where i.referee_id = _user)),
    'subscription', (select to_jsonb(s) - 'id' - 'user_id' from public.subscriptions s where s.user_id = _user)
  ) into r;
  return r;
end; $$;

create or replace function public.admin_learning_stats()
returns jsonb language plpgsql volatile security definer set search_path=public,auth as $$
declare r jsonb;
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then raise exception 'admin_only'; end if;
  select jsonb_build_object(
    'levels', coalesce((select jsonb_agg(jsonb_build_object('level', level, 'n', n)) from (
        select level, count(*) n from public.learning_profiles group by level order by n desc) x), '[]'::jsonb),
    'top_lessons', coalesce((select jsonb_agg(jsonb_build_object('lesson', lesson_id, 'done', done, 'avg_score', avg_pct)) from (
        select lesson_id, count(*) filter (where completed_at is not null) done,
          round(avg(best_score::numeric * 100 / nullif(total, 0))) avg_pct
        from public.learning_lesson_progress group by lesson_id order by done desc limit 10) x), '[]'::jsonb),
    'hardest', coalesce((select jsonb_agg(jsonb_build_object('lesson', lesson_id, 'attempts', att, 'avg_score', avg_pct)) from (
        select lesson_id, sum(attempts) att, round(avg(best_score::numeric * 100 / nullif(total, 0))) avg_pct
        from public.learning_lesson_progress group by lesson_id having count(*) >= 2 order by avg_pct asc nulls last limit 8) x), '[]'::jsonb),
    'unit_tests', coalesce((select jsonb_agg(jsonb_build_object('unit', unit_id, 'passed', passed, 'taken', taken)) from (
        select unit_id, count(*) filter (where passed_at is not null) passed, count(*) taken
        from public.learning_unit_tests group by unit_id order by unit_id) x), '[]'::jsonb),
    'level_tests', coalesce((select jsonb_agg(jsonb_build_object('level', level_id, 'passed', passed, 'taken', taken)) from (
        select level_id, count(*) filter (where passed_at is not null) passed, count(*) taken
        from public.learning_level_tests group by level_id) x), '[]'::jsonb)
  ) into r;
  return r;
end; $$;

create or replace function public.admin_referral_overview()
returns jsonb language plpgsql volatile security definer set search_path=public,auth as $$
declare r jsonb;
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then raise exception 'admin_only'; end if;
  select jsonb_build_object(
    'pending', coalesce((select jsonb_agg(x order by x.created_at) from (
        select w.id, w.amount, w.card_number, w.card_holder, w.created_at, p.full_name, p.public_id
        from public.referral_withdrawals w left join public.profiles p on p.user_id = w.user_id where w.status = 'pending') x), '[]'::jsonb),
    'history', coalesce((select jsonb_agg(x order by x.processed_at desc) from (
        select w.id, w.amount, w.status, w.processed_at, p.full_name from public.referral_withdrawals w
        left join public.profiles p on p.user_id = w.user_id where w.status <> 'pending' order by w.processed_at desc limit 20) x), '[]'::jsonb),
    'top', coalesce((select jsonb_agg(x) from (
        select p.full_name, p.public_id, count(*) invited, count(*) filter (where i.purchased_at is not null) bought,
          coalesce(max(w.earned), 0) earned
        from public.referral_invites i left join public.profiles p on p.user_id = i.referrer_id
        left join public.referral_wallet w on w.user_id = i.referrer_id group by p.full_name, p.public_id
        order by count(*) desc limit 10) x), '[]'::jsonb)
  ) into r;
  return r;
end; $$;

-- Pay or reject a payout from the website (same logic as the bot buttons).
create or replace function public.admin_ref_resolve(_id bigint, _paid boolean)
returns jsonb language plpgsql volatile security definer set search_path=public,auth as $$
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then raise exception 'admin_only'; end if;
  return public.internal_ref_resolve_withdrawal(_id, _paid);
end; $$;

-- Bot admin: stats without AI cost, plus learning numbers.
create or replace function public.telegram_admin_stats()
returns jsonb language plpgsql volatile security definer set search_path=public,auth as $$
begin return public.admin_overview_core(); end; $$;

create or replace function public.admin_overview_core()
returns jsonb language plpgsql volatile security definer set search_path=public,auth as $$
declare
  today date := public.learning_today();
  day_start timestamptz := (public.learning_today()::timestamp at time zone 'Asia/Tashkent');
begin
  return jsonb_build_object(
    'users_total', (select count(*) from auth.users),
    'users_today', (select count(*) from auth.users where created_at >= day_start),
    'users_7d', (select count(*) from auth.users where created_at > now() - interval '7 days'),
    'users_30d', (select count(*) from auth.users where created_at > now() - interval '30 days'),
    'active_7d', (select count(distinct x.u) from (select id as u from auth.users where last_sign_in_at > now() - interval '7 days'
                    union select user_id from public.learning_daily_activity where day > today - 7) x),
    'learners_today', (select count(*) from public.learning_daily_activity where day = today and (xp > 0 or lessons > 0)),
    'lessons_today', (select coalesce(sum(lessons), 0) from public.learning_daily_activity where day = today),
    'lessons_7d', (select coalesce(sum(lessons), 0) from public.learning_daily_activity where day > today - 7),
    'trial', (select count(*) from public.subscriptions where plan_type = 'free' and learn_trial_ends_at > now()),
    'expiring_7d', (select count(*) from public.subscriptions where plan_type in ('go', 'plus') and expires_at > now() and expires_at <= now() + interval '7 days'),
    'tg_total', (select count(*) from public.telegram_accounts),
    'tg_linked', (select count(*) from public.telegram_accounts where user_id is not null),
    'tg_blocked', (select count(*) from public.telegram_accounts where is_blocked),
    'tg_banned', (select count(*) from public.telegram_accounts where is_banned),
    'tg_today', (select count(*) from public.telegram_accounts where created_at >= day_start),
    'essays_7d', (select count(*) from public.essays where status = 'completed' and created_at > now() - interval '7 days'),
    'speaking_7d', (select count(*) from public.speaking_attempts where status = 'completed' and created_at > now() - interval '7 days'),
    'paid_go', (select count(*) from public.subscriptions where plan_type = 'go' and coalesce(expires_at, 'infinity'::timestamptz) > now()),
    'paid_plus', (select count(*) from public.subscriptions where plan_type = 'plus' and coalesce(expires_at, 'infinity'::timestamptz) > now()),
    'ref_invited', (select count(*) from public.referral_invites),
    'ref_pending', (select count(*) from public.referral_withdrawals where status = 'pending'),
    'ref_pending_sum', (select coalesce(sum(amount), 0) from public.referral_withdrawals where status = 'pending'),
    'outbox_pending', (select count(*) from public.telegram_outbox where status in ('pending', 'sending')),
    'outbox_failed_24h', (select count(*) from public.telegram_outbox where status = 'failed' and created_at > now() - interval '1 day'),
    'outbox_sent_24h', (select count(*) from public.telegram_outbox where status = 'sent' and created_at > now() - interval '1 day'));
end; $$;

-- Quick lists for the bot admin: paid, expiring, trial, inactive, newest.
create or replace function public.telegram_admin_list(_kind text, _limit int default 12)
returns jsonb language plpgsql volatile security definer set search_path=public,auth as $$
declare lim int := greatest(1, least(coalesce(_limit, 12), 25)); res jsonb;
begin
  select coalesce(jsonb_agg(x), '[]'::jsonb) into res from (
    select u.id as user_id, coalesce(nullif(p.full_name, ''), split_part(u.email, '@', 1)) as name, u.email, s.plan_type, s.expires_at,
      s.learn_trial_ends_at as trial_ends_at, lp.level, lp.xp, lp.streak_current as streak
    from auth.users u
    left join public.profiles p on p.user_id = u.id
    left join public.subscriptions s on s.user_id = u.id
    left join public.learning_profiles lp on lp.user_id = u.id
    where case _kind
      when 'paid' then s.plan_type in ('go', 'plus') and coalesce(s.expires_at, 'infinity'::timestamptz) > now()
      when 'expiring' then s.plan_type in ('go', 'plus') and s.expires_at > now() and s.expires_at <= now() + interval '7 days'
      when 'trial' then s.plan_type = 'free' and s.learn_trial_ends_at > now()
      when 'trial_end' then s.plan_type = 'free' and s.learn_trial_ends_at > now() and s.learn_trial_ends_at <= now() + interval '2 days'
      when 'inactive' then lp.user_id is not null and not exists(select 1 from public.learning_daily_activity a where a.user_id = u.id and a.day > public.learning_today() - 7 and (a.xp > 0 or a.lessons > 0))
      else true end
    order by case _kind when 'paid' then s.expires_at when 'expiring' then s.expires_at when 'trial_end' then s.learn_trial_ends_at else null end asc nulls last,
      u.created_at desc
    limit lim) x;
  return res;
end; $$;

-- Bot user card: learning first, IELTS second, referral and Telegram.
create or replace function public.telegram_user_card(_user uuid)
returns jsonb language sql volatile security definer set search_path=public,auth as $$
  select jsonb_build_object(
    'user_id', u.id, 'email', u.email, 'created_at', u.created_at, 'last_sign_in_at', u.last_sign_in_at,
    'provider', coalesce(u.raw_app_meta_data->>'provider', 'email'),
    'full_name', p.full_name, 'public_id', p.public_id, 'username', p.username,
    'plan', s.plan_type, 'plan_name', s.plan_name, 'expires_at', s.expires_at, 'trial_ends_at', s.learn_trial_ends_at,
    'writing_used', s.writing_used, 'writing_limit', s.writing_limit,
    'speaking_used', s.speaking_used, 'speaking_limit', s.speaking_limit,
    'mock_used', s.mock_test_used, 'mock_limit', s.mock_test_limit,
    'level', lp.level, 'xp', lp.xp, 'streak', lp.streak_current,
    'lessons_done', (select count(*) from public.learning_lesson_progress l where l.user_id = u.id and l.completed_at is not null),
    'last_learn_day', (select max(day) from public.learning_daily_activity a where a.user_id = u.id and (a.xp > 0 or a.lessons > 0)),
    'essays', (select count(*) from public.essays e where e.user_id = u.id and e.status = 'completed'),
    'speaking', (select count(*) from public.speaking_attempts a where a.user_id = u.id and a.status = 'completed'),
    'mocks', (select count(*) from public.mock_tests m where m.user_id = u.id and m.status = 'completed'),
    'avg_writing', (select round(avg(score)::numeric, 1) from public.essays e where e.user_id = u.id and e.score is not null),
    'avg_speaking', (select round(avg(score)::numeric, 1) from public.speaking_attempts a where a.user_id = u.id and a.score is not null),
    'invited', (select count(*) from public.referral_invites i where i.referrer_id = u.id),
    'ref_balance', coalesce((select balance from public.referral_wallet w where w.user_id = u.id), 0),
    'is_admin', exists(select 1 from public.user_roles r where r.user_id = u.id and r.role = 'admin'),
    'telegram_id', t.telegram_id, 'telegram_username', t.username, 'telegram_banned', t.is_banned, 'telegram_blocked', t.is_blocked)
  from auth.users u
  left join public.profiles p on p.user_id = u.id
  left join public.subscriptions s on s.user_id = u.id
  left join public.learning_profiles lp on lp.user_id = u.id
  left join public.telegram_accounts t on t.user_id = u.id
  where u.id = _user;
$$;

do $$
declare f text;
begin
  foreach f in array array['public.admin_overview()', 'public.admin_users_list()', 'public.admin_user_detail(uuid)', 'public.admin_learning_stats()',
                           'public.admin_referral_overview()', 'public.admin_ref_resolve(bigint,boolean)'] loop
    execute format('revoke all on function %s from public, anon', f);
    execute format('grant execute on function %s to authenticated, service_role', f);
  end loop;
  foreach f in array array['public.admin_overview_core()', 'public.telegram_admin_stats()', 'public.telegram_admin_list(text,int)', 'public.telegram_user_card(uuid)'] loop
    execute format('revoke all on function %s from public, anon, authenticated', f);
    execute format('grant execute on function %s to service_role', f);
  end loop;
end $$;

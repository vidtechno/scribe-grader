-- Update current UZS list prices only. Preserve USD prices, quotas, expiry dates,
-- historical payments and subscription_history snapshots.
update public.subscription_plans set price_uzs = '99 000' where slug = 'go';
update public.subscription_plans set price_uzs = '149 000' where slug = 'plus';

-- The estimate now reads the same catalogue as checkout. Keep existing admin
-- authorization, function privileges and every other overview metric unchanged.
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
      'monthly_uzs', (select coalesce(sum(nullif(regexp_replace(p.price_uzs, '[^0-9]', '', 'g'), '')::numeric), 0)
                      from public.subscriptions s join public.subscription_plans p on p.slug = s.plan_type
                      where s.plan_type in ('go', 'plus') and coalesce(s.expires_at, 'infinity'::timestamptz) > now())),
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

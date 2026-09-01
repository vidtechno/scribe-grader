-- 1. Plan catalogue: only free + pro remain active
UPDATE public.subscription_plans SET is_active = false WHERE slug NOT IN ('free','pro');

UPDATE public.subscription_plans SET
  name = 'Free', price = 0, price_uzs = '0', period = '30 days',
  description = 'Try Scorify before upgrading.',
  writing_limit = 1, speaking_limit = 1, mock_test_limit = 0,
  mentor_limit = 0, credits_limit = 0, credit_amount = 0,
  badge = NULL, sort_order = 0, is_active = true,
  features = '["1 Writing Evaluation","1 Speaking Evaluation","Basic result history"]'::jsonb
WHERE slug = 'free';

UPDATE public.subscription_plans SET
  name = 'Scorify Pro', price = 5, price_uzs = '49 000', period = '30 days',
  description = 'Everything you need for consistent IELTS practice.',
  writing_limit = 30, speaking_limit = 20, mock_test_limit = 4,
  mentor_limit = 10, credits_limit = 0, credit_amount = 0,
  badge = 'Recommended', sort_order = 1, is_active = true,
  features = '["30 Writing Evaluations","20 Speaking Evaluations","4 Full Mock Tests","AI Mentor - 10 messages/day","Detailed AI feedback and corrections","Personal mistake analysis","Band score tracking","Progress analytics","Writing history","Speaking history"]'::jsonb
WHERE slug = 'pro';

INSERT INTO public.subscription_plans (name, slug, price, price_uzs, period, description, writing_limit, speaking_limit, mock_test_limit, mentor_limit, credits_limit, credit_amount, sort_order, is_active, features)
SELECT 'Free','free',0,'0','30 days','Try Scorify before upgrading.',1,1,0,0,0,0,0,true,'["1 Writing Evaluation","1 Speaking Evaluation","Basic result history"]'::jsonb
WHERE NOT EXISTS (SELECT 1 FROM public.subscription_plans WHERE slug='free');

INSERT INTO public.subscription_plans (name, slug, price, price_uzs, period, description, writing_limit, speaking_limit, mock_test_limit, mentor_limit, credits_limit, credit_amount, sort_order, is_active, badge, features)
SELECT 'Scorify Pro','pro',5,'49 000','30 days','Everything you need for consistent IELTS practice.',30,20,4,10,0,0,1,true,'Recommended','["30 Writing Evaluations","20 Speaking Evaluations","4 Full Mock Tests","AI Mentor - 10 messages/day","Detailed AI feedback and corrections","Personal mistake analysis","Band score tracking","Progress analytics","Writing history","Speaking history"]'::jsonb
WHERE NOT EXISTS (SELECT 1 FROM public.subscription_plans WHERE slug='pro');

-- 2. Migrate every existing user to Free (idempotent; no historical data touched)
UPDATE public.subscription_history SET ended_at = now() WHERE ended_at IS NULL;

UPDATE public.subscriptions SET
  plan_type = 'free', plan_name = 'Free',
  writing_limit = 1, writing_used = 0,
  speaking_limit = 1, speaking_used = 0,
  mock_test_limit = 0, mock_test_used = 0,
  credits_limit = 0, credits_used = 0,
  started_at = now(), expires_at = NULL, is_active = true;

INSERT INTO public.subscriptions (user_id, plan_type, plan_name, writing_limit, writing_used, speaking_limit, speaking_used, mock_test_limit, mock_test_used, credits_limit, credits_used)
SELECT p.user_id,'free','Free',1,0,1,0,0,0,0,0
FROM public.profiles p
WHERE NOT EXISTS (SELECT 1 FROM public.subscriptions s WHERE s.user_id = p.user_id);

INSERT INTO public.subscription_history (user_id, plan_type, plan_name, price_uzs, writing_limit, speaking_limit, mock_test_limit, started_at)
SELECT s.user_id,'free','Free','0',1,1,0,now() FROM public.subscriptions s
WHERE NOT EXISTS (
  SELECT 1 FROM public.subscription_history h WHERE h.user_id = s.user_id AND h.ended_at IS NULL
);

-- 3. Users may no longer mutate their own usage counters
DROP POLICY IF EXISTS "Users can update own subscription" ON public.subscriptions;
REVOKE UPDATE, INSERT, DELETE ON public.subscriptions FROM authenticated;
GRANT SELECT ON public.subscriptions TO authenticated;
GRANT ALL ON public.subscriptions TO service_role;

DROP POLICY IF EXISTS "Users can update own usage" ON public.mentor_daily_usage;
DROP POLICY IF EXISTS "Users can insert own usage" ON public.mentor_daily_usage;
REVOKE UPDATE, INSERT, DELETE ON public.mentor_daily_usage FROM authenticated;
GRANT SELECT ON public.mentor_daily_usage TO authenticated;
GRANT ALL ON public.mentor_daily_usage TO service_role;

-- 4. Expiry enforcement
CREATE OR REPLACE FUNCTION public.enforce_subscription_expiry(_user_id uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE f record;
BEGIN
  SELECT writing_limit, speaking_limit, mock_test_limit INTO f
    FROM public.subscription_plans WHERE slug = 'free';
  UPDATE public.subscription_history SET ended_at = now()
    WHERE user_id = _user_id AND ended_at IS NULL AND expires_at IS NOT NULL AND expires_at < now();
  UPDATE public.subscriptions SET
      plan_type='free', plan_name='Free',
      writing_limit = COALESCE(f.writing_limit,1), writing_used = 0,
      speaking_limit = COALESCE(f.speaking_limit,1), speaking_used = 0,
      mock_test_limit = COALESCE(f.mock_test_limit,0), mock_test_used = 0,
      expires_at = NULL, started_at = now(), is_active = true
    WHERE user_id = _user_id AND plan_type <> 'free'
      AND expires_at IS NOT NULL AND expires_at < now();
END; $$;

REVOKE ALL ON FUNCTION public.enforce_subscription_expiry(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.enforce_subscription_expiry(uuid) TO authenticated, service_role;

-- 5. Server-side quota consumption
CREATE OR REPLACE FUNCTION public.consume_quota(_user_id uuid, _kind text)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE s record; lim int; used int;
BEGIN
  PERFORM public.enforce_subscription_expiry(_user_id);
  SELECT * INTO s FROM public.subscriptions WHERE user_id = _user_id FOR UPDATE;
  IF NOT FOUND THEN
    RETURN jsonb_build_object('allowed', false, 'reason', 'no_subscription');
  END IF;

  IF _kind = 'writing' THEN lim := s.writing_limit; used := s.writing_used;
  ELSIF _kind = 'speaking' THEN lim := s.speaking_limit; used := s.speaking_used;
  ELSIF _kind = 'mock_test' THEN lim := s.mock_test_limit; used := s.mock_test_used;
  ELSE RAISE EXCEPTION 'Unknown quota kind: %', _kind;
  END IF;

  IF used >= lim THEN
    RETURN jsonb_build_object('allowed', false, 'reason', 'limit_reached',
      'plan', s.plan_type, 'kind', _kind, 'used', used, 'limit', lim);
  END IF;

  IF _kind = 'writing' THEN
    UPDATE public.subscriptions SET writing_used = writing_used + 1 WHERE user_id = _user_id;
  ELSIF _kind = 'speaking' THEN
    UPDATE public.subscriptions SET speaking_used = speaking_used + 1 WHERE user_id = _user_id;
  ELSE
    UPDATE public.subscriptions SET mock_test_used = mock_test_used + 1 WHERE user_id = _user_id;
  END IF;

  RETURN jsonb_build_object('allowed', true, 'plan', s.plan_type, 'kind', _kind,
    'used', used + 1, 'limit', lim);
END; $$;

REVOKE ALL ON FUNCTION public.consume_quota(uuid, text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.consume_quota(uuid, text) TO service_role;

CREATE OR REPLACE FUNCTION public.refund_quota(_user_id uuid, _kind text)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF _kind = 'writing' THEN
    UPDATE public.subscriptions SET writing_used = GREATEST(0, writing_used - 1) WHERE user_id = _user_id;
  ELSIF _kind = 'speaking' THEN
    UPDATE public.subscriptions SET speaking_used = GREATEST(0, speaking_used - 1) WHERE user_id = _user_id;
  ELSIF _kind = 'mock_test' THEN
    UPDATE public.subscriptions SET mock_test_used = GREATEST(0, mock_test_used - 1) WHERE user_id = _user_id;
  END IF;
END; $$;

REVOKE ALL ON FUNCTION public.refund_quota(uuid, text) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.refund_quota(uuid, text) TO service_role;

-- 6. AI Mentor daily quota
CREATE OR REPLACE FUNCTION public.consume_mentor_message(_user_id uuid)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE plan text; lim int; used int; today date := (now() AT TIME ZONE 'UTC')::date;
BEGIN
  PERFORM public.enforce_subscription_expiry(_user_id);
  SELECT plan_type INTO plan FROM public.subscriptions WHERE user_id = _user_id;
  plan := COALESCE(plan, 'free');
  SELECT mentor_limit INTO lim FROM public.subscription_plans WHERE slug = plan;
  lim := COALESCE(lim, 0);

  IF lim <= 0 THEN
    RETURN jsonb_build_object('allowed', false, 'reason', 'plan_required', 'plan', plan, 'limit', 0);
  END IF;

  INSERT INTO public.mentor_daily_usage (user_id, date, messages_used)
    VALUES (_user_id, today, 0)
    ON CONFLICT (user_id, date) DO NOTHING;

  SELECT messages_used INTO used FROM public.mentor_daily_usage
    WHERE user_id = _user_id AND date = today FOR UPDATE;
  used := COALESCE(used, 0);

  IF used >= lim THEN
    RETURN jsonb_build_object('allowed', false, 'reason', 'limit_reached', 'plan', plan, 'used', used, 'limit', lim);
  END IF;

  UPDATE public.mentor_daily_usage SET messages_used = used + 1
    WHERE user_id = _user_id AND date = today;

  RETURN jsonb_build_object('allowed', true, 'plan', plan, 'used', used + 1, 'limit', lim);
END; $$;

REVOKE ALL ON FUNCTION public.consume_mentor_message(uuid) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.consume_mentor_message(uuid) TO service_role;

CREATE UNIQUE INDEX IF NOT EXISTS mentor_daily_usage_user_date_idx
  ON public.mentor_daily_usage (user_id, date);

-- 7. Admin subscription management
CREATE OR REPLACE FUNCTION public.admin_set_subscription(
  _user_id uuid, _plan_slug text, _starts_at timestamptz DEFAULT NULL, _expires_at timestamptz DEFAULT NULL)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE p record; s_start timestamptz; s_end timestamptz;
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin'::app_role) THEN
    RAISE EXCEPTION 'Only admins can change subscriptions';
  END IF;
  IF _plan_slug NOT IN ('free','pro') THEN
    RAISE EXCEPTION 'Unsupported plan: %', _plan_slug;
  END IF;

  SELECT * INTO p FROM public.subscription_plans WHERE slug = _plan_slug AND is_active = true;
  IF NOT FOUND THEN RAISE EXCEPTION 'Plan not found: %', _plan_slug; END IF;

  s_start := COALESCE(_starts_at, now());
  IF _plan_slug = 'free' THEN
    s_end := NULL;
  ELSE
    s_end := COALESCE(_expires_at, s_start + interval '30 days');
  END IF;

  UPDATE public.subscription_history SET ended_at = now()
    WHERE user_id = _user_id AND ended_at IS NULL;

  INSERT INTO public.subscriptions (user_id, plan_type, plan_name, writing_limit, writing_used,
      speaking_limit, speaking_used, mock_test_limit, mock_test_used, credits_limit, credits_used,
      started_at, expires_at, is_active)
    VALUES (_user_id, p.slug, p.name, p.writing_limit, 0, p.speaking_limit, 0,
      p.mock_test_limit, 0, 0, 0, s_start, s_end, true)
  ON CONFLICT (user_id) DO UPDATE SET
    plan_type = EXCLUDED.plan_type, plan_name = EXCLUDED.plan_name,
    writing_limit = EXCLUDED.writing_limit, writing_used = 0,
    speaking_limit = EXCLUDED.speaking_limit, speaking_used = 0,
    mock_test_limit = EXCLUDED.mock_test_limit, mock_test_used = 0,
    started_at = EXCLUDED.started_at, expires_at = EXCLUDED.expires_at, is_active = true;

  INSERT INTO public.subscription_history (user_id, plan_type, plan_name, price_uzs,
      writing_limit, speaking_limit, mock_test_limit, started_at, expires_at)
    VALUES (_user_id, p.slug, p.name, p.price_uzs, p.writing_limit, p.speaking_limit,
      p.mock_test_limit, s_start, s_end);

  RETURN jsonb_build_object('plan', p.slug, 'started_at', s_start, 'expires_at', s_end);
END; $$;

REVOKE ALL ON FUNCTION public.admin_set_subscription(uuid, text, timestamptz, timestamptz) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.admin_set_subscription(uuid, text, timestamptz, timestamptz) TO authenticated;

CREATE OR REPLACE FUNCTION public.admin_extend_subscription(_user_id uuid, _days int DEFAULT 30)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE s record; p record; base timestamptz; new_end timestamptz;
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin'::app_role) THEN
    RAISE EXCEPTION 'Only admins can change subscriptions';
  END IF;

  SELECT * INTO s FROM public.subscriptions WHERE user_id = _user_id;
  SELECT * INTO p FROM public.subscription_plans WHERE slug = 'pro';

  IF s IS NULL OR s.plan_type <> 'pro' OR s.expires_at IS NULL OR s.expires_at < now() THEN
    RETURN public.admin_set_subscription(_user_id, 'pro', now(), now() + make_interval(days => _days));
  END IF;

  new_end := s.expires_at + make_interval(days => _days);
  UPDATE public.subscriptions SET expires_at = new_end WHERE user_id = _user_id;
  UPDATE public.subscription_history SET expires_at = new_end
    WHERE user_id = _user_id AND ended_at IS NULL;

  RETURN jsonb_build_object('plan', 'pro', 'expires_at', new_end);
END; $$;

REVOKE ALL ON FUNCTION public.admin_extend_subscription(uuid, int) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.admin_extend_subscription(uuid, int) TO authenticated;

-- 8. Legacy plan assignment helper now delegates to the new model
CREATE OR REPLACE FUNCTION public.admin_assign_plan(_user_id uuid, _plan_slug text)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  PERFORM public.admin_set_subscription(_user_id, CASE WHEN _plan_slug = 'free' THEN 'free' ELSE 'pro' END, NULL, NULL);
END; $$;

-- 9. New signups start on the plan-driven Free tier
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE f record;
BEGIN
  SELECT writing_limit, speaking_limit, mock_test_limit INTO f
    FROM public.subscription_plans WHERE slug = 'free';

  INSERT INTO public.profiles (user_id, email, full_name, credits, public_id)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name', 0, public.generate_public_id());
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user');
  INSERT INTO public.subscriptions
    (user_id, plan_type, plan_name, writing_limit, writing_used, speaking_limit, speaking_used,
     mock_test_limit, mock_test_used, credits_limit, credits_used)
  VALUES (NEW.id, 'free', 'Free', COALESCE(f.writing_limit,1), 0, COALESCE(f.speaking_limit,1), 0,
     COALESCE(f.mock_test_limit,0), 0, 0, 0);
  INSERT INTO public.subscription_history
    (user_id, plan_type, plan_name, price_uzs, writing_limit, speaking_limit, mock_test_limit, started_at)
  VALUES (NEW.id, 'free', 'Free', '0', COALESCE(f.writing_limit,1), COALESCE(f.speaking_limit,1), COALESCE(f.mock_test_limit,0), now());
  RETURN NEW;
END; $$;

-- 10. Scheduled/global downgrade sweep uses plan-driven free limits
CREATE OR REPLACE FUNCTION public.expire_subscriptions()
RETURNS integer LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE affected integer; f record;
BEGIN
  SELECT writing_limit, speaking_limit, mock_test_limit INTO f
    FROM public.subscription_plans WHERE slug = 'free';

  UPDATE public.subscription_history sh SET ended_at = now()
    WHERE sh.ended_at IS NULL AND sh.expires_at IS NOT NULL AND sh.expires_at < now();

  WITH updated AS (
    UPDATE public.subscriptions s SET
      plan_type='free', plan_name='Free',
      writing_limit=COALESCE(f.writing_limit,1), writing_used=0,
      speaking_limit=COALESCE(f.speaking_limit,1), speaking_used=0,
      mock_test_limit=COALESCE(f.mock_test_limit,0), mock_test_used=0,
      expires_at=NULL, started_at=now(), is_active=true
      WHERE s.plan_type <> 'free' AND s.expires_at IS NOT NULL AND s.expires_at < now()
      RETURNING user_id
  )
  SELECT count(*)::int INTO affected FROM updated;
  RETURN affected;
END; $$;
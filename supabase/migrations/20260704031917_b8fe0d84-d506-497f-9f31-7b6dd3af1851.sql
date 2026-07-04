
-- 1. Extend subscriptions with per-feature tracking + mock tests
ALTER TABLE public.subscriptions
  ADD COLUMN IF NOT EXISTS writing_limit integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS writing_used integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS mock_test_limit integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS mock_test_used integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS plan_name text;

-- Drop legacy plan_type check
ALTER TABLE public.subscriptions DROP CONSTRAINT IF EXISTS subscriptions_plan_type_check;
ALTER TABLE public.subscriptions
  ADD CONSTRAINT subscriptions_plan_type_check
  CHECK (plan_type IN ('free','starter','standard','pro'));

-- Backfill: everyone becomes free plan
UPDATE public.subscriptions
  SET plan_type='free', plan_name='Free',
      writing_limit=1, writing_used=0,
      speaking_limit=1, speaking_used=0,
      mock_test_limit=0, mock_test_used=0,
      expires_at=NULL, is_active=true, started_at=now();

-- 2. Extend subscription_plans with per-feature limits and monthly period
ALTER TABLE public.subscription_plans
  ADD COLUMN IF NOT EXISTS writing_limit integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS mock_test_limit integer NOT NULL DEFAULT 0;

-- Reset plan catalogue to the new 4-tier model
DELETE FROM public.subscription_plans;
INSERT INTO public.subscription_plans
  (slug, name, price, price_uzs, period, description, details, features,
   writing_limit, speaking_limit, mock_test_limit,
   credits_limit, credit_amount, mentor_limit,
   sort_order, is_active, badge)
VALUES
  ('free','Free',0,'0','/month','Try the platform','Get started with a free monthly taste of the platform.',
   '["1 Writing evaluation / month","1 Speaking evaluation / month","AI feedback with band score"]'::jsonb,
   1,1,0,0,0,0,0,true,NULL),
  ('starter','Starter',1.58,'19 000','/month','Light monthly practice','Great for casual weekly practice.',
   '["5 Writing evaluations","3 Speaking evaluations","1 Full Mock Test","AI band feedback with corrections"]'::jsonb,
   5,3,1,0,0,0,1,true,NULL),
  ('standard','Standard',3.25,'39 000','/month','Steady monthly prep','Best value for consistent IELTS preparation.',
   '["20 Writing evaluations","15 Speaking evaluations","3 Full Mock Tests","Priority AI feedback","Progress tracking"]'::jsonb,
   20,15,3,0,0,0,2,true,'Most Popular'),
  ('pro','Pro',5.75,'69 000','/month','Serious monthly prep','For test-takers targeting Band 7+.',
   '["40 Writing evaluations","30 Speaking evaluations","6 Full Mock Tests","Priority AI feedback","Detailed analytics"]'::jsonb,
   40,30,6,0,0,0,3,true,NULL);

-- 3. Subscription history table
CREATE TABLE IF NOT EXISTS public.subscription_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_type text NOT NULL,
  plan_name text NOT NULL,
  price_uzs text,
  writing_limit integer NOT NULL DEFAULT 0,
  speaking_limit integer NOT NULL DEFAULT 0,
  mock_test_limit integer NOT NULL DEFAULT 0,
  started_at timestamptz NOT NULL DEFAULT now(),
  expires_at timestamptz,
  ended_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.subscription_history TO authenticated;
GRANT ALL ON public.subscription_history TO service_role;

ALTER TABLE public.subscription_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users view own subscription history"
  ON public.subscription_history FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins manage subscription history"
  ON public.subscription_history FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE INDEX IF NOT EXISTS idx_sub_history_user ON public.subscription_history(user_id, started_at DESC);

-- 4. Update handle_new_user: free plan defaults
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name, credits)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name', 0);
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user');
  INSERT INTO public.subscriptions
    (user_id, plan_type, plan_name,
     writing_limit, writing_used,
     speaking_limit, speaking_used,
     mock_test_limit, mock_test_used,
     credits_limit, credits_used)
  VALUES (NEW.id, 'free', 'Free', 1,0, 1,0, 0,0, 0,0);
  INSERT INTO public.subscription_history
    (user_id, plan_type, plan_name, price_uzs,
     writing_limit, speaking_limit, mock_test_limit, started_at)
  VALUES (NEW.id, 'free', 'Free', '0', 1, 1, 0, now());
  RETURN NEW;
END;
$$;

-- 5. Ensure trigger exists on auth.users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 6. Auto downgrade on expiry
CREATE OR REPLACE FUNCTION public.expire_subscriptions()
RETURNS integer LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
DECLARE affected integer;
BEGIN
  -- Mark history rows ended
  UPDATE public.subscription_history sh
    SET ended_at = now()
    WHERE sh.ended_at IS NULL
      AND sh.expires_at IS NOT NULL
      AND sh.expires_at < now();

  WITH updated AS (
    UPDATE public.subscriptions s
      SET plan_type='free', plan_name='Free',
          writing_limit=1, writing_used=0,
          speaking_limit=1, speaking_used=0,
          mock_test_limit=0, mock_test_used=0,
          expires_at=NULL, started_at=now(), is_active=true
      WHERE s.plan_type <> 'free'
        AND s.expires_at IS NOT NULL
        AND s.expires_at < now()
      RETURNING user_id
  )
  SELECT count(*)::int INTO affected FROM updated;

  -- Insert new free-plan history for downgraded users
  INSERT INTO public.subscription_history
    (user_id, plan_type, plan_name, price_uzs, writing_limit, speaking_limit, mock_test_limit, started_at)
  SELECT s.user_id, 'free', 'Free', '0', 1, 1, 0, now()
    FROM public.subscriptions s
    WHERE s.plan_type = 'free'
      AND NOT EXISTS (
        SELECT 1 FROM public.subscription_history h
        WHERE h.user_id = s.user_id AND h.plan_type = 'free' AND h.ended_at IS NULL
      );

  RETURN affected;
END;
$$;

-- 7. Admin helper: assign a plan to a user (adds 30-day expiry, records history)
CREATE OR REPLACE FUNCTION public.admin_assign_plan(_user_id uuid, _plan_slug text)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
DECLARE p record; new_expires timestamptz;
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin'::app_role) THEN
    RAISE EXCEPTION 'Only admins can assign plans';
  END IF;

  SELECT slug, name, price_uzs, writing_limit, speaking_limit, mock_test_limit
    INTO p FROM public.subscription_plans WHERE slug = _plan_slug AND is_active = true;
  IF NOT FOUND THEN RAISE EXCEPTION 'Plan not found: %', _plan_slug; END IF;

  new_expires := CASE WHEN p.slug = 'free' THEN NULL ELSE now() + interval '30 days' END;

  -- Close current active history row
  UPDATE public.subscription_history
    SET ended_at = now()
    WHERE user_id = _user_id AND ended_at IS NULL;

  -- Update subscription
  UPDATE public.subscriptions
    SET plan_type = p.slug,
        plan_name = p.name,
        writing_limit = p.writing_limit, writing_used = 0,
        speaking_limit = p.speaking_limit, speaking_used = 0,
        mock_test_limit = p.mock_test_limit, mock_test_used = 0,
        started_at = now(),
        expires_at = new_expires,
        is_active = true
    WHERE user_id = _user_id;

  -- Ensure a subscription row exists
  IF NOT FOUND THEN
    INSERT INTO public.subscriptions
      (user_id, plan_type, plan_name,
       writing_limit, writing_used, speaking_limit, speaking_used,
       mock_test_limit, mock_test_used,
       credits_limit, credits_used, expires_at, started_at)
    VALUES (_user_id, p.slug, p.name,
            p.writing_limit, 0, p.speaking_limit, 0,
            p.mock_test_limit, 0, 0, 0, new_expires, now());
  END IF;

  INSERT INTO public.subscription_history
    (user_id, plan_type, plan_name, price_uzs,
     writing_limit, speaking_limit, mock_test_limit,
     started_at, expires_at)
  VALUES (_user_id, p.slug, p.name, p.price_uzs,
          p.writing_limit, p.speaking_limit, p.mock_test_limit,
          now(), new_expires);
END;
$$;

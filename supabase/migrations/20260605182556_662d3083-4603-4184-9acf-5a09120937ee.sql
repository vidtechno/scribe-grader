
-- Add new columns to subscription_plans for credit package model
ALTER TABLE public.subscription_plans
  ADD COLUMN IF NOT EXISTS credit_amount integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS badge text;

-- Wipe existing plans and seed new credit packages
DELETE FROM public.subscription_plans;
INSERT INTO public.subscription_plans (slug, name, price, price_uzs, period, credits_limit, speaking_limit, mentor_limit, credit_amount, features, description, details, is_active, sort_order, badge)
VALUES
  ('starter','Starter',1.25,'15 000',NULL,10,0,0,10,'["10 credits","Use anytime — never expires","Writing essay = 1 credit","Speaking attempt = 2 credits"]'::jsonb,'Small top-up','Great for trying the platform.',true,1,NULL),
  ('basic','Basic',2.92,'35 000',NULL,25,0,0,25,'["25 credits","Use anytime — never expires","Writing essay = 1 credit","Speaking attempt = 2 credits"]'::jsonb,'Light practice','Perfect for casual weekly practice.',true,2,NULL),
  ('standard','Standard',5.42,'65 000',NULL,50,0,0,50,'["50 credits","Use anytime — never expires","Writing essay = 1 credit","Speaking attempt = 2 credits"]'::jsonb,'Steady practice','Best value for steady IELTS prep.',true,3,'Popular'),
  ('pro','Pro',10,'120 000',NULL,100,0,0,100,'["100 credits","Use anytime — never expires","Writing essay = 1 credit","Speaking attempt = 2 credits"]'::jsonb,'Serious prep','For serious test-takers.',true,4,NULL),
  ('premium','Premium',22.92,'275 000',NULL,250,0,0,250,'["250 credits","Use anytime — never expires","Writing essay = 1 credit","Speaking attempt = 2 credits"]'::jsonb,'Power user','For power users and tutors.',true,5,'Best value'),
  ('ultimate','Ultimate',41.67,'500 000',NULL,500,0,0,500,'["500 credits","Use anytime — never expires","Writing essay = 1 credit","Speaking attempt = 2 credits"]'::jsonb,'Maximum value','Maximum savings — bulk pack.',true,6,NULL);

-- Update onboarding to grant 3 free credits, no monthly subscription
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name, credits)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name', 3);
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user');
  INSERT INTO public.subscriptions (user_id, plan_type, credits_limit, credits_used, speaking_limit, speaking_used)
  VALUES (NEW.id, 'free', 3, 0, 0, 0);
  RETURN NEW;
END;
$$;

-- Make check_my_subscription a no-op (credits never expire now)
CREATE OR REPLACE FUNCTION public.check_my_subscription()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Credits never expire in the new model. Kept as no-op for compat.
  RETURN;
END;
$$;

-- App settings: feature list shown on Buy Credits page
INSERT INTO public.app_settings (key, value)
VALUES ('credits_features', E'AI-powered IELTS writing & speaking grading\nDetailed band-score breakdown (Task, Coherence, Lexical, Grammar)\nError corrections with explanations\nModel answers & vocabulary highlights\nProgress analytics & score history\nAI Mentor (Socratic coaching)\nCustom topic support for writing and speaking\nCredits never expire')
ON CONFLICT (key) DO NOTHING;

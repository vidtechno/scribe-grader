
-- Add unique 6-digit public_id to profiles
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS public_id text UNIQUE;

CREATE OR REPLACE FUNCTION public.generate_public_id()
RETURNS text
LANGUAGE plpgsql
AS $$
DECLARE
  candidate text;
  exists_count int;
BEGIN
  LOOP
    candidate := lpad(floor(random() * 900000 + 100000)::int::text, 6, '0');
    SELECT COUNT(*) INTO exists_count FROM public.profiles WHERE public_id = candidate;
    EXIT WHEN exists_count = 0;
  END LOOP;
  RETURN candidate;
END;
$$;

-- Backfill existing users
DO $$
DECLARE r record;
BEGIN
  FOR r IN SELECT id FROM public.profiles WHERE public_id IS NULL LOOP
    UPDATE public.profiles SET public_id = public.generate_public_id() WHERE id = r.id;
  END LOOP;
END $$;

-- Update the new-user handler to assign a public_id
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name, credits, public_id)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name', 0, public.generate_public_id());
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
$function$;

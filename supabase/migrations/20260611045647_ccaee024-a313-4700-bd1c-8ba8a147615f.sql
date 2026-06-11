
-- Add premium tracking to profiles
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS total_credits_purchased INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS is_premium BOOLEAN NOT NULL DEFAULT false;

-- Auto-set is_premium when total_credits_purchased >= 10 (lifetime, never reverts)
CREATE OR REPLACE FUNCTION public.auto_premium_on_credits()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.total_credits_purchased >= 10 AND NEW.is_premium = false THEN
    NEW.is_premium := true;
  END IF;
  -- Never downgrade
  IF OLD.is_premium = true THEN
    NEW.is_premium := true;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_auto_premium ON public.profiles;
CREATE TRIGGER trg_auto_premium
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION public.auto_premium_on_credits();

-- Update new-user handler: 2 starter credits
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name, credits)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name', 2);
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user');
  INSERT INTO public.subscriptions (user_id, plan_type, credits_limit, credits_used, speaking_limit, speaking_used)
  VALUES (NEW.id, 'free', 2, 0, 0, 0);
  RETURN NEW;
END;
$$;

-- Essay comments
CREATE TABLE IF NOT EXISTS public.essay_comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  essay_id UUID NOT NULL REFERENCES public.essays(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL CHECK (length(content) > 0 AND length(content) <= 2000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.essay_comments TO authenticated;
GRANT ALL ON public.essay_comments TO service_role;

ALTER TABLE public.essay_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone authenticated can read comments"
  ON public.essay_comments FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "Users can post their own comments"
  ON public.essay_comments FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own comments"
  ON public.essay_comments FOR UPDATE
  TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Users or admins can delete comments"
  ON public.essay_comments FOR DELETE
  TO authenticated USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER trg_essay_comments_updated_at
BEFORE UPDATE ON public.essay_comments
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX IF NOT EXISTS idx_essay_comments_essay ON public.essay_comments(essay_id, created_at DESC);

-- Backfill: anyone who already has >=10 purchased credits gets premium
UPDATE public.profiles SET total_credits_purchased = GREATEST(total_credits_purchased, credits);


-- Drop check constraint first so we can migrate
ALTER TABLE public.subscriptions DROP CONSTRAINT IF EXISTS subscriptions_plan_type_check;

-- Add new columns
ALTER TABLE public.subscriptions
  ADD COLUMN IF NOT EXISTS speaking_limit integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS speaking_used integer NOT NULL DEFAULT 0;

ALTER TABLE public.subscription_plans
  ADD COLUMN IF NOT EXISTS speaking_limit integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS details text,
  ADD COLUMN IF NOT EXISTS slug text;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'subscription_plans_slug_key') THEN
    ALTER TABLE public.subscription_plans ADD CONSTRAINT subscription_plans_slug_key UNIQUE (slug);
  END IF;
END $$;

-- Migrate existing user subs
UPDATE public.subscriptions
  SET plan_type = 'yuksalish',
      credits_limit = 90,
      speaking_limit = 30,
      expires_at = COALESCE(expires_at, now() + interval '30 days')
  WHERE plan_type IN ('pro', 'pro_plus');

UPDATE public.subscriptions
  SET speaking_limit = 3,
      credits_limit = 3
  WHERE plan_type = 'free';

-- Now safe to add the new constraint
ALTER TABLE public.subscriptions
  ADD CONSTRAINT subscriptions_plan_type_check
  CHECK (plan_type IN ('free','yuksalish'));

-- Seed plans
DELETE FROM public.subscription_plans;

INSERT INTO public.subscription_plans
  (slug, name, price, price_uzs, period, credits_limit, speaking_limit, mentor_limit, features, description, details, sort_order, is_active)
VALUES
  ('free', 'Free', 0, '0', '/oy',
    3, 3, 0,
    '["Oyiga 3 ta esse baholash","Oyiga 3 ta speaking urinish","Umumiy Band ball + asosiy 3 xato","Qisman feedback (blurred)","So''nggi 10 esse progress grafigi"]'::jsonb,
    'Tanishuv uchun tekin ta''rif',
    'Free ta''rif yangi foydalanuvchilar uchun. Har oyda 3 ta esse va 3 ta speaking urinishi beriladi. Asosiy band ball va eng muhim 3 ta xato ko''rsatiladi, batafsil tahlil yopiq (blurred) ko''rinishda bo''ladi. AI Mentor mavjud emas. Qo''shimcha kredit: $0.15 / 1,200 so''m har biri.',
    1, true),
  ('yuksalish', 'Yuksalish', 9, '109,000', '/oy',
    90, 30, 30,
    '["Oyiga 90 ta esse baholash","Oyiga 30 ta speaking urinish","To''liq batafsil AI feedback","Red/Green xato tuzatishlar","Topic Vocabulary tavsiyalari","Coherence & Sentence map","AI Mentor (30 xabar/kun)","Score analytics va batafsil tarix","Speaking transcript va audio saqlash","O''zingiz tanlagan topik bo''yicha gapirish"]'::jsonb,
    'To''liq imkoniyatlar bilan tezroq yuksalish',
    'Yuksalish ta''rifi IELTS Writing va Speaking ni jiddiy o''rganmoqchi bo''lganlar uchun. Oyiga 90 ta esse va 30 ta speaking urinishi beriladi. To''liq batafsil AI tahlil, har bir mezon bo''yicha kengaytirilgan feedback, qizil/yashil xato tuzatishlar, topik bo''yicha lug''at tavsiyalari, jumla murakkabligi va matn bog''lanish xaritasi taqdim etiladi. AI Mentor kuniga 30 ta xabar bilan ishlaydi. Speaking bo''limida o''zingiz xohlagan topikni qo''shib gapirib ko''rishingiz mumkin, barcha urinishlar transkript va audio bilan saqlanadi. Muddat: 1 oy (30 kun). Muddat tugagandan so''ng ta''rif avtomatik tugaydi, qancha kredit qolganidan qat''i nazar. Qo''shimcha kredit: $0.15 / 1,200 so''m har biri.',
    2, true);

-- Update handle_new_user
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $function$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name, credits)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name', 3);
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user');
  INSERT INTO public.subscriptions (user_id, plan_type, credits_limit, credits_used, speaking_limit, speaking_used)
  VALUES (NEW.id, 'free', 3, 0, 3, 0);
  RETURN NEW;
END;
$function$;

-- Auto-expire helpers
CREATE OR REPLACE FUNCTION public.check_my_subscription()
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
BEGIN
  UPDATE public.subscriptions
    SET plan_type = 'free', credits_limit = 3, credits_used = 0,
        speaking_limit = 3, speaking_used = 0,
        expires_at = NULL, started_at = now()
    WHERE user_id = auth.uid()
      AND plan_type <> 'free' AND expires_at IS NOT NULL AND expires_at < now();
END;
$$;
GRANT EXECUTE ON FUNCTION public.check_my_subscription() TO authenticated;

CREATE OR REPLACE FUNCTION public.expire_subscriptions()
RETURNS integer LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
DECLARE affected integer;
BEGIN
  WITH updated AS (
    UPDATE public.subscriptions
      SET plan_type = 'free', credits_limit = 3, credits_used = 0,
          speaking_limit = 3, speaking_used = 0,
          expires_at = NULL, started_at = now(), is_active = true
      WHERE plan_type <> 'free' AND expires_at IS NOT NULL AND expires_at < now()
      RETURNING 1
  )
  SELECT count(*)::int INTO affected FROM updated;
  RETURN affected;
END;
$$;
GRANT EXECUTE ON FUNCTION public.expire_subscriptions() TO authenticated, service_role;

-- Extra credit pricing
INSERT INTO public.app_settings (key, value) VALUES
  ('extra_credit_price_usd', '0.15'),
  ('extra_credit_price_uzs', '1200')
ON CONFLICT DO NOTHING;

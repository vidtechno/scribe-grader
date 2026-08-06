-- 1. app_settings: remove anonymous read access
DROP POLICY IF EXISTS "Anyone can read settings" ON public.app_settings;
DROP POLICY IF EXISTS "Authenticated users can read settings" ON public.app_settings;
CREATE POLICY "Authenticated users can read settings"
ON public.app_settings FOR SELECT TO authenticated USING (true);
REVOKE SELECT ON public.app_settings FROM anon;

-- 2. Restrict SECURITY DEFINER maintenance function from end users
REVOKE ALL ON FUNCTION public.expire_subscriptions() FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.expire_subscriptions() TO service_role;

-- keep needed ones explicit
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO authenticated;
GRANT EXECUTE ON FUNCTION public.check_my_subscription() TO authenticated;
GRANT EXECUTE ON FUNCTION public.admin_assign_plan(uuid, text) TO authenticated;
REVOKE ALL ON FUNCTION public.generate_public_id() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

-- 3. Remove duplicate storage policies on speaking-audio bucket
DROP POLICY IF EXISTS "Users read own speaking audio" ON storage.objects;
DROP POLICY IF EXISTS "Users upload own speaking audio" ON storage.objects;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO authenticated, anon;

DROP POLICY IF EXISTS "Authenticated users can read settings" ON public.app_settings;
CREATE POLICY "Anyone can read settings"
ON public.app_settings FOR SELECT TO anon, authenticated USING (true);
GRANT SELECT ON public.app_settings TO anon;
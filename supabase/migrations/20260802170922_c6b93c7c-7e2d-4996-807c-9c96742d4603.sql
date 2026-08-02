-- app_settings: authenticated-only read
DROP POLICY IF EXISTS "Anyone can read settings" ON public.app_settings;
CREATE POLICY "Authenticated users can read settings"
ON public.app_settings FOR SELECT TO authenticated USING (true);

-- api_logs: users read their own
CREATE POLICY "Users can view their own api_logs"
ON public.api_logs FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- user_roles: admin-only writes, no self-assignment
DROP POLICY IF EXISTS "Admins can manage roles" ON public.user_roles;
DROP POLICY IF EXISTS "Users can view their own role" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;

CREATE POLICY "Users can view their own role"
ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
ON public.user_roles FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert roles"
ON public.user_roles FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role) AND user_id <> auth.uid());

CREATE POLICY "Admins can update roles"
ON public.user_roles FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role) AND user_id <> auth.uid());

CREATE POLICY "Admins can delete roles"
ON public.user_roles FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role) AND user_id <> auth.uid());

-- Revoke direct API execution of SECURITY DEFINER / privileged functions
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.expire_subscriptions() FROM anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.generate_public_id() FROM anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.admin_assign_plan(uuid, text) FROM anon;
REVOKE EXECUTE ON FUNCTION public.check_my_subscription() FROM anon;
GRANT EXECUTE ON FUNCTION public.admin_assign_plan(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.check_my_subscription() TO authenticated;
REVOKE ALL ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.expire_subscriptions() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.handle_new_user() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.generate_public_id() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.admin_assign_plan(uuid, text) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.check_my_subscription() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.auto_premium_on_credits() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.update_updated_at_column() FROM PUBLIC;

GRANT EXECUTE ON FUNCTION public.admin_assign_plan(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.check_my_subscription() TO authenticated;

CREATE OR REPLACE FUNCTION public.generate_public_id()
RETURNS text
LANGUAGE plpgsql
SET search_path TO 'public'
AS $function$
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
$function$;
REVOKE ALL ON FUNCTION public.generate_public_id() FROM PUBLIC, anon, authenticated;
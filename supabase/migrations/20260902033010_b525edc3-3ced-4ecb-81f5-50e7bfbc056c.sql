DROP FUNCTION IF EXISTS public.check_my_subscription();
DROP FUNCTION IF EXISTS public.admin_assign_plan(uuid, text);

REVOKE EXECUTE ON FUNCTION public.enforce_subscription_expiry(uuid) FROM authenticated;
GRANT EXECUTE ON FUNCTION public.enforce_subscription_expiry(uuid) TO service_role;
-- The referral programme is retired (a different kind of referral will come later).
-- Nothing is dropped: two accounts still hold earned balances (20 000 and 30 000 so'm) and 40 invites exist, so the data stays.
-- This only switches the programme off: no new rewards are earned or settled, and users can no longer use it.
do $r$
begin
  if to_regclass('public.referrals') is not null then
    execute 'alter table public.referrals disable trigger telegram_referral_new';
  end if;
  execute 'alter table public.learning_lesson_progress disable trigger ref_lesson_done';
  execute 'alter table public.subscription_history disable trigger ref_paid_plan';
  if exists (select 1 from cron.job where jobname = 'referral-settle') then perform cron.unschedule('referral-settle'); end if;
  if to_regprocedure('public.claim_referral(text)') is not null then execute 'revoke execute on function public.claim_referral(text) from authenticated'; end if;
  if to_regprocedure('public.my_referral()') is not null then execute 'revoke execute on function public.my_referral() from authenticated'; end if;
  if to_regprocedure('public.ref_summary()') is not null then execute 'revoke execute on function public.ref_summary() from authenticated'; end if;
  if to_regprocedure('public.claim_referral_reward()') is not null then execute 'revoke execute on function public.claim_referral_reward() from authenticated'; end if;
  if to_regprocedure('public.ref_ack_paid()') is not null then execute 'revoke execute on function public.ref_ack_paid() from authenticated'; end if;
end $r$;

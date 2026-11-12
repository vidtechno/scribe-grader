-- Removes the referral programme completely, at the owner's request (balances of 20 000 and 30 000 so'm are cancelled).
-- Step 1: the functions that are kept (admin overview, user list/detail, bot user card) stop reading the referral tables.
do $m$
declare
  fn text; src text; new_src text;
  -- a parenthesised sub-select (up to two levels deep) that reads one of the referral tables
  sub constant text := '\(\s*select[^()]*(?:\([^()]*\)[^()]*)*public\.referral_(?:invites|withdrawals|wallet)[^()]*(?:\([^()]*\)[^()]*)*\)';
begin
  -- admin_overview: drop the whole 'referral' block
  select pg_get_functiondef('public.admin_overview()'::regprocedure) into src;
  new_src := regexp_replace(src, '''referral'',\s*jsonb_build_object\(.*?\),\s*(?=''bot'')', '', 's');
  if new_src = src or new_src ~ 'referral' then raise exception 'admin_overview not rewritten'; end if;
  execute new_src;

  -- admin_overview_core: the three ref_* lines go
  select pg_get_functiondef('public.admin_overview_core()'::regprocedure) into src;
  new_src := regexp_replace(src, E'\\n\\s*''ref_[a-z_]+'',[^\\n]*', '', 'g');
  if new_src = src or new_src ~ 'referral' then raise exception 'admin_overview_core not rewritten'; end if;
  execute new_src;

  -- admin_user_detail: drop the 'referral' block
  select pg_get_functiondef('public.admin_user_detail(uuid)'::regprocedure) into src;
  new_src := regexp_replace(src, '''referral'',\s*jsonb_build_object\(.*?\),\s*(?=''subscription'')', '', 's');
  if new_src = src or new_src ~ 'referral' then raise exception 'admin_user_detail not rewritten'; end if;
  execute new_src;

  -- admin_users_list: no referral joins; the two columns stay (as constants) so the result shape is unchanged
  select pg_get_functiondef('public.admin_users_list()'::regprocedure) into src;
  new_src := regexp_replace(src, 'left join \(select referrer_id, count\(\*\) n from public\.referral_invites group by referrer_id\) ri on ri\.referrer_id = u\.id\s*', '', 'g');
  new_src := regexp_replace(new_src, 'left join public\.referral_invites ref on ref\.referee_id = u\.id\s*', '', 'g');
  new_src := regexp_replace(new_src, 'coalesce\(ri\.n, 0\)', '0', 'g');
  new_src := regexp_replace(new_src, 'ref\.referrer_id is not null', 'false', 'g');
  if new_src = src or new_src ~ 'referral' then raise exception 'admin_users_list not rewritten'; end if;
  execute new_src;

  -- telegram_user_card: invited / ref_balance become 0
  select pg_get_functiondef(p.oid) into src from pg_proc p where p.pronamespace = 'public'::regnamespace and p.proname = 'telegram_user_card' limit 1;
  new_src := regexp_replace(src, sub, '0', 'g');
  if new_src = src or new_src ~ 'referral' then raise exception 'telegram_user_card not rewritten'; end if;
  execute new_src;
end $m$;

-- Step 2: triggers, functions and tables of the programme.
drop trigger if exists ref_lesson_done on public.learning_lesson_progress;
drop trigger if exists ref_paid_plan on public.subscription_history;
drop trigger if exists telegram_referral_new on public.referrals;

do $d$
declare r record;
begin
  for r in select p.oid::regprocedure as sig from pg_proc p where p.pronamespace = 'public'::regnamespace and p.proname in (
    'admin_ref_resolve', 'admin_referral_overview', 'claim_referral', 'claim_referral_reward', 'internal_active_cycle', 'internal_claim_referral',
    'internal_claim_referral_reward', 'internal_ref_info', 'internal_ref_notify', 'internal_ref_register', 'internal_ref_request_withdrawal',
    'internal_ref_resolve_withdrawal', 'internal_ref_settle', 'internal_referral_code', 'my_referral', 'ref_ack_paid', 'ref_min_withdraw',
    'ref_on_lesson_done', 'ref_on_paid_plan', 'ref_reward_amount', 'ref_settle_due', 'ref_summary', 'telegram_on_referral', 'telegram_referral_summary')
  loop
    execute 'drop function ' || r.sig;
  end loop;
end $d$;

drop table if exists public.referral_withdrawals, public.referral_invites, public.referral_wallet, public.referral_cycles, public.referrals, public.referral_codes;

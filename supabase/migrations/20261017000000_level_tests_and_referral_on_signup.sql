-- 1. Referral fixes: info/summary write the user's code on first use, so they must not be STABLE (PostgREST runs STABLE
--    functions in a read-only transaction, which broke the referral screen for new accounts).
create or replace function public.internal_ref_info(_user uuid)
returns jsonb language plpgsql volatile security definer set search_path=public as $$
declare w public.referral_wallet%rowtype; pending jsonb;
begin
  select * into w from public.referral_wallet where user_id = _user;
  select to_jsonb(x) into pending from (select id, amount, created_at from public.referral_withdrawals where user_id = _user and status = 'pending' order by id desc limit 1) x;
  return jsonb_build_object(
    'code', public.internal_referral_code(_user),
    'balance', coalesce(w.balance, 0), 'earned', coalesce(w.earned, 0), 'paid', coalesce(w.paid, 0),
    'reward', public.ref_reward_amount(), 'min_withdraw', public.ref_min_withdraw(),
    'invited', (select count(*) from public.referral_invites where referrer_id = _user),
    'active', (select count(*) from public.referral_invites where referrer_id = _user and activated_at is not null),
    'buyers', (select count(*) from public.referral_invites where referrer_id = _user and purchased_at is not null),
    'rewarded', (select count(*) from public.referral_invites where referrer_id = _user and rewarded_at is not null),
    'pending_withdrawal', pending,
    'paid_unseen', coalesce((select jsonb_agg(jsonb_build_object('id', id, 'amount', amount)) from public.referral_withdrawals
                             where user_id = _user and status = 'paid' and seen_at is null), '[]'::jsonb),
    'recent', coalesce((select jsonb_agg(jsonb_build_object('name', public.social_display_name(referee_id),
                'state', case when rewarded_at is not null then 'rewarded' when purchased_at is not null then 'bought'
                              when activated_at is not null then 'active' else 'joined' end) order by created_at desc)
              from (select * from public.referral_invites where referrer_id = _user order by created_at desc limit 15) r), '[]'::jsonb));
end; $$;

create or replace function public.ref_summary()
returns jsonb language plpgsql volatile security definer set search_path=public as $$
begin
  if auth.uid() is null then raise exception 'not_authenticated'; end if;
  return public.internal_ref_info(auth.uid());
end; $$;

-- 2. A friend counts as soon as the account exists (bot, Telegram or Google): no lesson needed any more.
create or replace function public.internal_ref_register(_referee uuid, _code text)
returns jsonb language plpgsql security definer set search_path=public,auth as $$
declare ref uuid; created timestamptz;
begin
  if _referee is null then return jsonb_build_object('ok', false, 'reason', 'not_signed_in'); end if;
  select user_id into ref from public.referral_codes where code = upper(btrim(coalesce(_code, '')));
  if ref is null then return jsonb_build_object('ok', false, 'reason', 'invalid_code'); end if;
  if ref = _referee then return jsonb_build_object('ok', false, 'reason', 'self'); end if;
  select created_at into created from auth.users where id = _referee;
  if created is null or created < now() - interval '24 hours' then return jsonb_build_object('ok', false, 'reason', 'not_new'); end if;
  if exists(select 1 from public.referral_invites where referee_id = _referee) then return jsonb_build_object('ok', false, 'reason', 'already_claimed'); end if;
  insert into public.referral_invites(referee_id, referrer_id, code, activated_at) values (_referee, ref, upper(btrim(_code)), now());
  perform public.internal_ref_notify(ref, 'ref_activated', '{}'::jsonb);
  return jsonb_build_object('ok', true);
end; $$;
update public.referral_invites set activated_at = created_at where activated_at is null;

-- Google / website sign-ups claim the code the bot link carried.
create or replace function public.claim_referral(_code text)
returns jsonb language plpgsql volatile security definer set search_path=public as $$
begin
  if auth.uid() is null then return jsonb_build_object('ok', false, 'reason', 'not_signed_in'); end if;
  return public.internal_ref_register(auth.uid(), _code);
end; $$;
revoke all on function public.claim_referral(text) from public, anon;
grant execute on function public.claim_referral(text) to authenticated, service_role;

-- 3. Level exit tests: always open at the end of a level; passing moves the learner to the next open level.
create table if not exists public.learning_level_tests (
  user_id uuid not null references auth.users(id) on delete cascade,
  level_id text not null,
  attempts int not null default 0,
  best_score int not null default 0,
  best_total int not null default 20,
  passed_at timestamptz,
  last_attempt_at timestamptz not null default now(),
  primary key (user_id, level_id)
);
alter table public.learning_level_tests enable row level security;
revoke all on public.learning_level_tests from anon, authenticated;
grant all on public.learning_level_tests to service_role;
do $$ begin
  if not exists(select 1 from pg_policies where schemaname='public' and tablename='learning_level_tests' and policyname='Own level tests') then
    create policy "Own level tests" on public.learning_level_tests for select to authenticated using (user_id = auth.uid());
  end if;
end $$;
grant select on public.learning_level_tests to authenticated;

create or replace function public.learning_submit_level_test(_level text, _score int, _total int, _next_id text default null, _next_title text default null)
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid(); passed boolean; lv_pos int; cur_pos int; nxt_id text; nxt_open boolean := false; prev_passed timestamptz;
  advanced boolean := false; act jsonb := '{}'::jsonb;
begin
  perform public.learning_require_access(uid);
  if _total <> 20 or _score < 0 or _score > _total then raise exception 'invalid_score'; end if;
  select position into lv_pos from public.learning_levels where id = _level;
  if lv_pos is null then raise exception 'unknown_level'; end if;
  passed := _score * 100 >= _total * 70;
  select passed_at into prev_passed from public.learning_level_tests where user_id = uid and level_id = _level;
  insert into public.learning_level_tests(user_id, level_id, attempts, best_score, best_total, passed_at)
  values (uid, _level, 1, _score, _total, case when passed then now() end)
  on conflict (user_id, level_id) do update set
    attempts = learning_level_tests.attempts + 1,
    best_score = greatest(learning_level_tests.best_score, _score), last_attempt_at = now(),
    passed_at = coalesce(learning_level_tests.passed_at, case when passed then now() end);
  select id, is_open into nxt_id, nxt_open from public.learning_levels where position = lv_pos + 1;
  if passed then
    select l.position into cur_pos from public.learning_profiles p join public.learning_levels l on l.id = p.level where p.user_id = uid;
    if nxt_id is not null and nxt_open and (cur_pos is null or cur_pos < lv_pos + 1) then
      update public.learning_profiles set level = nxt_id, placement_status = 'passed', placement_target = null,
        next_lesson_id = left(_next_id, 20), next_lesson_title = left(_next_title, 120), updated_at = now()
      where user_id = uid;
      advanced := true;
    end if;
    if prev_passed is null then act := public.learning_record_activity(uid, 30, 0, 0, _score, _total); end if;
  end if;
  return jsonb_build_object('passed', passed, 'advanced', advanced, 'next_level', case when nxt_open then nxt_id end,
    'next_soon', nxt_id is not null and not nxt_open, 'xp', coalesce((act->>'xp')::int, 0)) || (act - 'xp');
end; $$;
revoke all on function public.learning_submit_level_test(text,int,int,text,text) from public, anon;
grant execute on function public.learning_submit_level_test(text,int,int,text,text) to authenticated, service_role;

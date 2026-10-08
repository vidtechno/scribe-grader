-- Instagram-style profiles (username + one of 10 ready-made avatars) and the new bot-based referral program.

-- ============================================================
-- 1. Username and avatar
-- ============================================================
create table if not exists public.profile_avatars (
  key text primary key,
  label text not null,
  emoji text not null,
  bg text not null,
  position int not null
);
insert into public.profile_avatars(key, label, emoji, bg, position) values
  ('av01', 'Tulki', '🦊', 'from-orange-400 to-amber-500', 1),
  ('av02', 'Panda', '🐼', 'from-slate-400 to-slate-600', 2),
  ('av03', 'Sher', '🦁', 'from-yellow-400 to-orange-500', 3),
  ('av04', 'Pingvin', '🐧', 'from-sky-400 to-indigo-500', 4),
  ('av05', 'Koala', '🐨', 'from-zinc-400 to-stone-500', 5),
  ('av06', 'Qurbaqa', '🐸', 'from-emerald-400 to-green-600', 6),
  ('av07', 'Yulduz', '⭐', 'from-amber-300 to-yellow-500', 7),
  ('av08', 'Raketa', '🚀', 'from-violet-500 to-fuchsia-500', 8),
  ('av09', 'Kitob', '📚', 'from-rose-400 to-red-500', 9),
  ('av10', 'Olov', '🔥', 'from-red-500 to-orange-500', 10)
on conflict (key) do nothing;
alter table public.profile_avatars enable row level security;
do $$ begin
  if not exists(select 1 from pg_policies where schemaname = 'public' and tablename = 'profile_avatars' and policyname = 'Anyone can read') then
    create policy "Anyone can read" on public.profile_avatars for select to anon, authenticated using (true);
  end if;
end $$;
revoke all on public.profile_avatars from anon, authenticated;
grant select on public.profile_avatars to anon, authenticated;
grant all on public.profile_avatars to service_role;

alter table public.profiles add column if not exists username text;
alter table public.profiles add column if not exists avatar_key text references public.profile_avatars(key);
do $$ begin
  if not exists(select 1 from pg_constraint where conname = 'profiles_username_format') then
    alter table public.profiles add constraint profiles_username_format check (username is null or username ~ '^[a-z0-9_.]{3,20}$');
  end if;
end $$;

update public.profiles set username = 'user' || public_id where username is null and public_id is not null;
update public.profiles set avatar_key = 'av' || lpad((abs(hashtext(user_id::text)) % 10 + 1)::text, 2, '0') where avatar_key is null;
create unique index if not exists profiles_username_lower_idx on public.profiles (lower(username));

-- New accounts start with a username and an avatar; the learner can change both.
create or replace function public.profiles_identity_defaults()
returns trigger language plpgsql set search_path=public as $$
begin
  if new.username is null then new.username := 'user' || coalesce(new.public_id, substr(md5(new.user_id::text), 1, 8)); end if;
  if new.avatar_key is null then new.avatar_key := 'av' || lpad((abs(hashtext(new.user_id::text)) % 10 + 1)::text, 2, '0'); end if;
  return new;
end; $$;
do $$ begin
  if not exists(select 1 from pg_trigger where tgname = 'zz_profiles_identity_defaults' and tgrelid = 'public.profiles'::regclass) then
    create trigger zz_profiles_identity_defaults before insert on public.profiles
      for each row execute function public.profiles_identity_defaults();
  end if;
end $$;

create or replace function public.profile_username_available(_username text)
returns boolean language sql stable security definer set search_path=public as $$
  select lower(btrim(coalesce(_username, ''))) ~ '^[a-z0-9_.]{3,20}$'
     and not exists(select 1 from public.profiles where lower(username) = lower(btrim(_username)) and user_id <> coalesce(auth.uid(), '00000000-0000-0000-0000-000000000000'::uuid))
$$;

create or replace function public.profile_set_identity(_username text, _avatar text)
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid(); u text := lower(btrim(coalesce(_username, '')));
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  if u !~ '^[a-z0-9_.]{3,20}$' then raise exception 'invalid_username'; end if;
  if u in ('admin', 'scorify', 'support', 'moderator', 'official', 'help', 'root') then raise exception 'username_taken'; end if;
  if _avatar is not null and not exists(select 1 from public.profile_avatars where key = _avatar) then raise exception 'invalid_avatar'; end if;
  begin
    update public.profiles set username = u, avatar_key = coalesce(_avatar, avatar_key) where user_id = uid;
  exception when unique_violation then raise exception 'username_taken';
  end;
  return jsonb_build_object('username', u, 'avatar', coalesce(_avatar, (select avatar_key from public.profiles where user_id = uid)));
end; $$;

-- The public handle also works as the profile address: /u/<username> or /u/<public id>.
create or replace function public.social_user_by_public_id(_public_id text)
returns uuid language sql stable security definer set search_path=public as $$
  select user_id from public.profiles
  where public_id = btrim(_public_id) or lower(username) = lower(ltrim(btrim(_public_id), '@')) limit 1
$$;

create or replace function public.social_card(_viewer uuid, _user uuid)
returns jsonb language sql stable security definer set search_path=public as $$
  select jsonb_build_object(
    'public_id', pr.public_id, 'username', pr.username, 'avatar', pr.avatar_key,
    'name', public.social_display_name(_user),
    'level', lp.level,
    'xp', case when public.social_setting(_user, 'show_progress') then coalesce(lp.xp, 0) else null end,
    'streak', case when public.social_setting(_user, 'show_progress') then public.learning_streak(_user) else null end,
    'is_following', exists(select 1 from public.user_follows where follower_id = _viewer and followee_id = _user and ended_at is null),
    'follows_me', exists(select 1 from public.user_follows where follower_id = _user and followee_id = _viewer and ended_at is null))
  from public.profiles pr left join public.learning_profiles lp on lp.user_id = pr.user_id
  where pr.user_id = _user
$$;

create or replace function public.social_search(_q text)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare uid uuid := auth.uid(); q text := btrim(ltrim(btrim(coalesce(_q, '')), '@')); pattern text; result jsonb;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  if char_length(q) < 2 then return '[]'::jsonb; end if;
  pattern := '%' || replace(replace(replace(lower(q), '\', '\\'), '%', '\%'), '_', '\_') || '%';
  select coalesce(jsonb_agg(public.social_card(uid, x.user_id) order by x.exact desc, x.week_xp desc, x.name), '[]'::jsonb) into result
  from (
    select pr.user_id, (pr.public_id = q or lower(coalesce(pr.username, '')) = lower(q)) as exact, public.social_display_name(pr.user_id) as name,
      coalesce((select sum(a.xp) from public.learning_daily_activity a where a.user_id = pr.user_id and a.day >= public.learning_today() - 6), 0) as week_xp
    from public.profiles pr
    where pr.user_id <> uid
      and public.social_setting(pr.user_id, 'discoverable')
      and (pr.public_id = q or lower(coalesce(pr.username, '')) like pattern escape '\' or lower(coalesce(pr.full_name, '')) like pattern escape '\')
    order by (pr.public_id = q or lower(coalesce(pr.username, '')) = lower(q)) desc, 4 desc
    limit 20
  ) x;
  return result;
end; $$;

create or replace function public.social_public_profile(_public_id text)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare
  uid uuid := auth.uid(); target uuid; me boolean; lp public.learning_profiles%rowtype;
  show_prog boolean; show_ielts boolean; out jsonb; lessons int; tests int; has_lp boolean;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  target := public.social_user_by_public_id(_public_id);
  if target is null then raise exception 'not_found'; end if;
  me := target = uid;
  if not me and not public.social_setting(target, 'discoverable') then raise exception 'not_found'; end if;
  show_prog := me or public.social_setting(target, 'show_progress');
  show_ielts := me or public.social_setting(target, 'show_ielts');
  select * into lp from public.learning_profiles where user_id = target;
  has_lp := found;
  out := jsonb_build_object(
    'public_id', (select public_id from public.profiles where user_id = target), 'username', (select username from public.profiles where user_id = target), 'avatar', (select avatar_key from public.profiles where user_id = target), 'name', public.social_display_name(target), 'is_me', me,
    'member_since', (select created_at from public.profiles where user_id = target),
    'level', lp.level,
    'followers', (select count(*) from public.user_follows where followee_id = target and ended_at is null),
    'following', (select count(*) from public.user_follows where follower_id = target and ended_at is null),
    'is_following', exists(select 1 from public.user_follows where follower_id = uid and followee_id = target and ended_at is null),
    'follows_me', exists(select 1 from public.user_follows where follower_id = target and followee_id = uid and ended_at is null),
    'progress_visible', show_prog, 'ielts_visible', show_ielts);
  if show_prog and has_lp then
    select count(*) into lessons from public.learning_lesson_progress where user_id = target and completed_at is not null;
    select count(*) into tests from public.learning_unit_tests where user_id = target and passed_at is not null;
    out := out || jsonb_build_object(
      'xp', lp.xp, 'streak', public.learning_streak(target), 'streak_best', greatest(lp.streak_best, public.learning_streak(target)),
      'lessons_done', lessons, 'words', lessons * 10, 'tests_passed', tests,
      'week_xp', (select coalesce(sum(xp), 0) from public.learning_daily_activity where user_id = target and day >= date_trunc('week', public.learning_today()::timestamp)::date),
      'next_lesson_title', lp.next_lesson_title,
      'activity', (select coalesce(jsonb_agg(jsonb_build_object('day', d.day, 'xp', coalesce(a.xp, 0)) order by d.day), '[]'::jsonb)
                   from generate_series(public.learning_today() - 13, public.learning_today(), interval '1 day') as d(day)
                   left join public.learning_daily_activity a on a.user_id = target and a.day = d.day::date),
      'achievements', (select coalesce(jsonb_agg(jsonb_build_object('key', key, 'unlocked_at', unlocked_at) order by unlocked_at), '[]'::jsonb)
                       from public.learning_achievements where user_id = target));
  end if;
  if show_ielts then
    out := out || jsonb_build_object('ielts', jsonb_build_object(
      'writing_count', (select count(*) from public.essays where user_id = target and status = 'completed'),
      'writing_best', (select max(score) from public.essays where user_id = target and status = 'completed'),
      'speaking_count', (select count(*) from public.speaking_attempts where user_id = target and status = 'completed'),
      'speaking_best', (select max(score) from public.speaking_attempts where user_id = target and status = 'completed')));
  end if;
  return out;
end; $$;

create or replace function public.learning_leaderboard(_scope text default 'global', _period text default 'week', _limit int default 30)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare
  uid uuid := auth.uid(); wk date := date_trunc('week', public.learning_today()::timestamp)::date;
  lim int := least(greatest(coalesce(_limit, 30), 5), 100); result jsonb;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  if _scope not in ('global', 'friends') or _period not in ('week', 'all') then raise exception 'invalid_arguments'; end if;
  with ranked as (
    select u.user_id, u.xp, (rank() over (order by u.xp desc))::int as rnk
    from (
      select lp.user_id,
        case when _period = 'week'
          then coalesce((select sum(a.xp) from public.learning_daily_activity a where a.user_id = lp.user_id and a.day >= wk), 0)::int
          else lp.xp end as xp
      from public.learning_profiles lp
      where public.social_setting(lp.user_id, 'leaderboard_visible')
        and (_scope = 'global' or lp.user_id = uid
             or exists(select 1 from public.user_follows f where f.follower_id = uid and f.followee_id = lp.user_id and f.ended_at is null))
    ) u
    where u.xp > 0
  ), top as (
    select r.rnk, public.social_display_name(r.user_id) as nm,
      jsonb_build_object(
        'rank', r.rnk, 'public_id', pr.public_id, 'username', pr.username, 'avatar', pr.avatar_key, 'name', public.social_display_name(r.user_id), 'xp', r.xp,
        'level', lp.level, 'streak', public.learning_streak(r.user_id), 'is_me', r.user_id = uid,
        'is_following', exists(select 1 from public.user_follows f where f.follower_id = uid and f.followee_id = r.user_id and f.ended_at is null)) as entry
    from ranked r
    join public.profiles pr on pr.user_id = r.user_id
    join public.learning_profiles lp on lp.user_id = r.user_id
    order by r.rnk, 2
    limit lim
  )
  select jsonb_build_object(
    'scope', _scope, 'period', _period, 'week_start', wk,
    'total', (select count(*) from ranked),
    'rows', coalesce((select jsonb_agg(t.entry order by t.rnk, t.nm) from top t), '[]'::jsonb),
    'me', (select jsonb_build_object('rank', r.rnk, 'xp', r.xp) from ranked r where r.user_id = uid),
    'me_hidden', not public.social_setting(uid, 'leaderboard_visible'))
  into result;
  return result;
end; $$;


-- ============================================================
-- 2. Referral program (works through the Telegram bot)
-- ============================================================
-- A friend joins through your bot link and finishes one lesson => counted. When that friend buys any paid plan after the
-- 7-day free period, 10 000 so'm goes to your referral balance. From 100 000 so'm you can ask for a payout in the bot.
create table if not exists public.referral_invites (
  referee_id uuid primary key references auth.users(id) on delete cascade,
  referrer_id uuid not null references auth.users(id) on delete cascade,
  code text not null,
  created_at timestamptz not null default now(),
  activated_at timestamptz,   -- first finished lesson
  purchased_at timestamptz,   -- first paid plan
  rewarded_at timestamptz,
  reward int not null default 0,
  check (referee_id <> referrer_id)
);
create index if not exists referral_invites_referrer_idx on public.referral_invites (referrer_id);

create table if not exists public.referral_wallet (
  user_id uuid primary key references auth.users(id) on delete cascade,
  balance int not null default 0 check (balance >= 0),
  earned int not null default 0,
  paid int not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.referral_withdrawals (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  amount int not null check (amount > 0),
  card_number text not null,
  card_holder text not null,
  status text not null default 'pending' check (status in ('pending', 'paid', 'rejected')),
  created_at timestamptz not null default now(),
  processed_at timestamptz,
  seen_at timestamptz
);
create index if not exists referral_withdrawals_user_idx on public.referral_withdrawals (user_id, created_at desc);

do $$
declare t text;
begin
  foreach t in array array['referral_invites', 'referral_wallet', 'referral_withdrawals'] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('revoke all on public.%I from anon, authenticated', t);
    execute format('grant all on public.%I to service_role', t);
  end loop;
end $$;
-- Everything is read through ref_summary(); no direct table access for clients.

create or replace function public.ref_reward_amount() returns int language sql immutable as $$ select 10000 $$;
create or replace function public.ref_min_withdraw() returns int language sql immutable as $$ select 100000 $$;

-- A new account that came through a referral link (the bot calls this when it creates the account).
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
  insert into public.referral_invites(referee_id, referrer_id, code) values (_referee, ref, upper(btrim(_code)));
  return jsonb_build_object('ok', true);
end; $$;

create or replace function public.internal_ref_notify(_user uuid, _kind text, _payload jsonb)
returns void language plpgsql security definer set search_path=public as $$
begin
  insert into public.telegram_outbox(telegram_id, user_id, kind, payload)
  select t.telegram_id, t.user_id, _kind, _payload from public.telegram_accounts t
  where t.user_id = _user and not t.is_blocked and not t.is_banned;
  perform public.telegram_kick();
exception when others then raise warning 'internal_ref_notify skipped: %', sqlerrm;
end; $$;

-- Credits 10 000 so'm once: the friend finished a lesson, bought a paid plan, and the free period is over.
create or replace function public.internal_ref_settle(_referee uuid)
returns boolean language plpgsql security definer set search_path=public as $$
declare inv public.referral_invites%rowtype; trial_end timestamptz; amount int := public.ref_reward_amount();
begin
  select * into inv from public.referral_invites where referee_id = _referee for update;
  if not found or inv.activated_at is null or inv.purchased_at is null or inv.rewarded_at is not null then return false; end if;
  select learn_trial_ends_at into trial_end from public.subscriptions where user_id = _referee;
  if trial_end is not null and trial_end > now() then return false; end if;
  insert into public.referral_wallet(user_id, balance, earned) values (inv.referrer_id, amount, amount)
  on conflict (user_id) do update set balance = referral_wallet.balance + amount, earned = referral_wallet.earned + amount, updated_at = now();
  update public.referral_invites set rewarded_at = now(), reward = amount where referee_id = _referee;
  perform public.internal_ref_notify(inv.referrer_id, 'ref_reward', jsonb_build_object('amount', amount));
  return true;
end; $$;

-- Hourly: purchases made during the free period are credited once it ends.
create or replace function public.ref_settle_due()
returns int language plpgsql security definer set search_path=public as $$
declare r record; n int := 0;
begin
  for r in select referee_id from public.referral_invites where purchased_at is not null and rewarded_at is null loop
    if public.internal_ref_settle(r.referee_id) then n := n + 1; end if;
  end loop;
  return n;
end; $$;

create or replace function public.ref_on_lesson_done()
returns trigger language plpgsql security definer set search_path=public as $$
declare ref uuid;
begin
  begin
    if new.completed_at is not null then
      update public.referral_invites set activated_at = now() where referee_id = new.user_id and activated_at is null returning referrer_id into ref;
      if ref is not null then perform public.internal_ref_notify(ref, 'ref_activated', '{}'::jsonb); end if;
    end if;
  exception when others then raise warning 'ref_on_lesson_done skipped: %', sqlerrm;
  end;
  return new;
end; $$;
do $$ begin
  if not exists(select 1 from pg_trigger where tgname = 'ref_lesson_done' and tgrelid = 'public.learning_lesson_progress'::regclass) then
    create trigger ref_lesson_done after insert or update of completed_at on public.learning_lesson_progress
      for each row execute function public.ref_on_lesson_done();
  end if;
end $$;

create or replace function public.ref_on_paid_plan()
returns trigger language plpgsql security definer set search_path=public as $$
begin
  begin
    if new.plan_type in ('go', 'plus') then
      update public.referral_invites set purchased_at = coalesce(purchased_at, now()) where referee_id = new.user_id;
      perform public.internal_ref_settle(new.user_id);
    end if;
  exception when others then raise warning 'ref_on_paid_plan skipped: %', sqlerrm;
  end;
  return new;
end; $$;
do $$ begin
  if not exists(select 1 from pg_trigger where tgname = 'ref_paid_plan' and tgrelid = 'public.subscription_history'::regclass) then
    create trigger ref_paid_plan after insert on public.subscription_history
      for each row execute function public.ref_on_paid_plan();
  end if;
end $$;

-- The numbers behind the referral screens (site and bot).
create or replace function public.internal_ref_info(_user uuid)
returns jsonb language plpgsql stable security definer set search_path=public as $$
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
returns jsonb language plpgsql stable security definer set search_path=public as $$
begin
  if auth.uid() is null then raise exception 'not_authenticated'; end if;
  return public.internal_ref_info(auth.uid());
end; $$;

create or replace function public.ref_ack_paid()
returns void language plpgsql security definer set search_path=public as $$
begin
  if auth.uid() is null then raise exception 'not_authenticated'; end if;
  update public.referral_withdrawals set seen_at = now() where user_id = auth.uid() and status = 'paid' and seen_at is null;
end; $$;

-- Payout request: the whole balance is reserved until the admin confirms or rejects it.
create or replace function public.internal_ref_request_withdrawal(_user uuid, _card text, _holder text)
returns jsonb language plpgsql security definer set search_path=public as $$
declare w public.referral_wallet%rowtype; digits text := regexp_replace(coalesce(_card, ''), '\D', '', 'g'); h text := btrim(regexp_replace(coalesce(_holder, ''), '\s+', ' ', 'g')); wid bigint;
begin
  if char_length(digits) <> 16 then raise exception 'invalid_card'; end if;
  if char_length(h) not between 3 and 60 then raise exception 'invalid_holder'; end if;
  select * into w from public.referral_wallet where user_id = _user for update;
  if not found or w.balance < public.ref_min_withdraw() then raise exception 'balance_too_low'; end if;
  if exists(select 1 from public.referral_withdrawals where user_id = _user and status = 'pending') then raise exception 'already_pending'; end if;
  insert into public.referral_withdrawals(user_id, amount, card_number, card_holder) values (_user, w.balance, digits, h) returning id into wid;
  update public.referral_wallet set balance = 0, updated_at = now() where user_id = _user;
  return jsonb_build_object('id', wid, 'amount', w.balance, 'card', digits, 'holder', h);
end; $$;

create or replace function public.internal_ref_resolve_withdrawal(_id bigint, _paid boolean)
returns jsonb language plpgsql security definer set search_path=public as $$
declare r public.referral_withdrawals%rowtype;
begin
  select * into r from public.referral_withdrawals where id = _id for update;
  if not found or r.status <> 'pending' then raise exception 'not_pending'; end if;
  if _paid then
    update public.referral_withdrawals set status = 'paid', processed_at = now() where id = _id;
    update public.referral_wallet set paid = paid + r.amount, updated_at = now() where user_id = r.user_id;
    perform public.internal_ref_notify(r.user_id, 'ref_paid', jsonb_build_object('amount', r.amount));
  else
    update public.referral_withdrawals set status = 'rejected', processed_at = now(), seen_at = now() where id = _id;
    update public.referral_wallet set balance = balance + r.amount, updated_at = now() where user_id = r.user_id;
    perform public.internal_ref_notify(r.user_id, 'ref_rejected', jsonb_build_object('amount', r.amount));
  end if;
  return jsonb_build_object('id', _id, 'user_id', r.user_id, 'amount', r.amount, 'paid', _paid);
end; $$;

-- The first referral program is gone. These keep their names (old clients and the bot may still call them) and do nothing.
create or replace function public.internal_claim_referral(_me uuid, _code text)
returns jsonb language sql security definer set search_path=public as $$ select public.internal_ref_register(_me, _code) $$;
create or replace function public.claim_referral(_code text)
returns jsonb language sql security definer set search_path=public as $$ select jsonb_build_object('ok', false, 'reason', 'removed') $$;
create or replace function public.claim_referral_reward()
returns jsonb language plpgsql security definer set search_path=public as $$ begin raise exception 'referral_removed'; end $$;
create or replace function public.my_referral()
returns jsonb language sql security definer set search_path=public as $$ select '{}'::jsonb $$;
create or replace function public.internal_claim_referral_reward(_me uuid)
returns jsonb language plpgsql security definer set search_path=public as $$ begin raise exception 'referral_removed'; end $$;
create or replace function public.telegram_referral_summary(_user uuid)
returns jsonb language sql security definer set search_path=public as $$ select public.internal_ref_info(_user) $$;

do $$
declare f text;
begin
  foreach f in array array['public.ref_summary()', 'public.ref_ack_paid()', 'public.profile_username_available(text)', 'public.profile_set_identity(text,text)'] loop
    execute format('revoke all on function %s from public, anon', f);
    execute format('grant execute on function %s to authenticated, service_role', f);
  end loop;
  foreach f in array array['public.internal_ref_register(uuid,text)', 'public.internal_ref_notify(uuid,text,jsonb)', 'public.internal_ref_settle(uuid)',
                           'public.ref_settle_due()', 'public.internal_ref_info(uuid)', 'public.internal_ref_request_withdrawal(uuid,text,text)',
                           'public.internal_ref_resolve_withdrawal(bigint,boolean)', 'public.internal_claim_referral(uuid,text)',
                           'public.internal_claim_referral_reward(uuid)', 'public.telegram_referral_summary(uuid)'] loop
    execute format('revoke all on function %s from public, anon, authenticated', f);
    execute format('grant execute on function %s to service_role', f);
  end loop;
end $$;

do $$ begin
  if exists(select 1 from pg_extension where extname = 'pg_cron') then
    perform cron.schedule('referral-settle', '11 * * * *', 'select public.ref_settle_due()');
  end if;
exception when others then raise notice 'cron scheduling skipped: %', sqlerrm; end $$;

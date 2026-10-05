-- Telegram bot integration: sign-in with Telegram, account linking, result notifications,
-- reminders and an admin panel inside the bot. Every table here is server-only (service role);
-- the website talks to it through the telegram-auth Edge Function.

-- ============================================================
-- Tables
-- ============================================================
create table if not exists public.telegram_accounts (
  telegram_id bigint primary key,
  user_id uuid unique references auth.users(id) on delete set null,
  username text,
  first_name text,
  last_name text,
  language_code text,
  notify_results boolean not null default true,
  notify_reminders boolean not null default true,
  notify_news boolean not null default true,
  is_blocked boolean not null default false,   -- the user blocked the bot
  is_banned boolean not null default false,    -- an admin banned the user in the bot
  pending_ref text,                            -- referral code from /start ref_CODE, claimed on sign-up
  state jsonb,                                 -- multi-step dialog state (goal date, admin flows)
  quiz_correct int not null default 0,
  quiz_total int not null default 0,
  linked_at timestamptz,
  created_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now()
);
create index if not exists telegram_accounts_username_idx on public.telegram_accounts(lower(username));

-- One-time codes for "Sign in with Telegram" (login) and "Connect Telegram" (link).
create table if not exists public.telegram_auth_requests (
  code text primary key,
  kind text not null check (kind in ('login','link')),
  secret_hash text,
  user_id uuid references auth.users(id) on delete cascade,
  telegram_id bigint,
  status text not null default 'pending' check (status in ('pending','confirmed','rejected','used')),
  client_info text,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default now() + interval '10 minutes'
);
create index if not exists telegram_auth_requests_expires_idx on public.telegram_auth_requests(expires_at);

create table if not exists public.telegram_broadcasts (
  id uuid primary key default gen_random_uuid(),
  created_by bigint not null,
  audience text not null check (audience in ('all','linked','unlinked','free','paid')),
  kind text not null check (kind in ('copy','text')),
  payload jsonb not null default '{}'::jsonb,
  total int not null default 0,
  status text not null default 'queued' check (status in ('queued','done','cancelled')),
  created_at timestamptz not null default now(),
  finished_at timestamptz
);

-- Messages waiting to be delivered by the bot. Filled by triggers and the admin panel,
-- drained by the telegram-bot Edge Function.
create table if not exists public.telegram_outbox (
  id bigint generated always as identity primary key,
  telegram_id bigint not null,
  user_id uuid,
  kind text not null,
  payload jsonb not null default '{}'::jsonb,
  broadcast_id uuid references public.telegram_broadcasts(id) on delete cascade,
  status text not null default 'pending' check (status in ('pending','sending','sent','failed','skipped')),
  attempts int not null default 0,
  last_error text,
  send_after timestamptz not null default now(),
  created_at timestamptz not null default now(),
  sent_at timestamptz
);
create index if not exists telegram_outbox_queue_idx on public.telegram_outbox(status, send_after, id) where status in ('pending','sending');
create index if not exists telegram_outbox_broadcast_idx on public.telegram_outbox(broadcast_id) where broadcast_id is not null;
create index if not exists telegram_outbox_created_idx on public.telegram_outbox(created_at);

create table if not exists public.telegram_settings (
  key text primary key,
  value text not null,
  updated_at timestamptz not null default now()
);
insert into public.telegram_settings(key,value) values
  ('drain_url','https://bywqpgjojnqscelloxew.supabase.co/functions/v1/telegram-bot'),
  ('drain_lease','1970-01-01T00:00:00Z')
on conflict (key) do nothing;

alter table public.telegram_accounts enable row level security;
alter table public.telegram_auth_requests enable row level security;
alter table public.telegram_broadcasts enable row level security;
alter table public.telegram_outbox enable row level security;
alter table public.telegram_settings enable row level security;
revoke all on public.telegram_accounts, public.telegram_auth_requests, public.telegram_broadcasts,
  public.telegram_outbox, public.telegram_settings from anon, authenticated;
grant all on public.telegram_accounts, public.telegram_auth_requests, public.telegram_broadcasts,
  public.telegram_outbox, public.telegram_settings to service_role;

-- ============================================================
-- Referral helpers usable without a browser session (the bot creates accounts server-side).
-- claim_referral / claim_referral_reward keep their behaviour and now delegate here.
-- ============================================================
create or replace function public.internal_claim_referral(_me uuid,_code text)
returns jsonb language plpgsql security definer set search_path=public,auth as $$
declare ref uuid; created timestamptz; cid uuid; n int; is_counted boolean; c public.referral_cycles%rowtype; exp timestamptz;
begin
  if _me is null then return jsonb_build_object('ok',false,'reason','not_signed_in'); end if;
  select user_id into ref from public.referral_codes where code=upper(trim(_code));
  if ref is null then return jsonb_build_object('ok',false,'reason','invalid_code'); end if;
  if ref=_me then return jsonb_build_object('ok',false,'reason','self'); end if;
  select created_at into created from auth.users where id=_me;
  if created is null or created < now()-interval '24 hours' then return jsonb_build_object('ok',false,'reason','not_new'); end if;
  if exists(select 1 from public.referrals where referred_id=_me) then return jsonb_build_object('ok',false,'reason','already_claimed'); end if;

  cid := public.internal_active_cycle(ref);
  select count(*) into n from public.referrals where cycle_id=cid and counted;
  is_counted := n < 20;
  insert into public.referrals(referrer_id,referred_id,cycle_id,counted) values(ref,_me,cid,is_counted);

  if is_counted and n+1 >= 20 then
    select * into c from public.referral_cycles where id=cid for update;
    if c.plus_granted_at is null then
      exp := public.internal_grant_plan(ref,'plus',30);
      update public.referral_cycles set plus_granted_at=now(), reward_expires_at=exp where id=cid;
    end if;
  end if;
  return jsonb_build_object('ok',true,'counted',is_counted);
end; $$;

create or replace function public.claim_referral(_code text)
returns jsonb language plpgsql security definer set search_path=public,auth as $$
begin
  return public.internal_claim_referral(auth.uid(),_code);
end; $$;

create or replace function public.internal_claim_referral_reward(_me uuid)
returns jsonb language plpgsql security definer set search_path=public as $$
declare cid uuid; n int; c public.referral_cycles%rowtype; exp timestamptz;
begin
  if _me is null then raise exception 'Not signed in'; end if;
  cid := public.internal_active_cycle(_me);
  select * into c from public.referral_cycles where id=cid for update;
  select count(*) into n from public.referrals where cycle_id=cid and counted;
  if n < 10 then raise exception 'Invite 10 friends first'; end if;
  if c.go_claimed_at is not null or c.plus_granted_at is not null then raise exception 'Reward already activated for this period'; end if;
  exp := public.internal_grant_plan(_me,'go',30);
  update public.referral_cycles set go_claimed_at=now(), reward_expires_at=exp where id=cid;
  return jsonb_build_object('plan','go','expires_at',exp);
end; $$;

create or replace function public.claim_referral_reward()
returns jsonb language plpgsql security definer set search_path=public as $$
begin
  return public.internal_claim_referral_reward(auth.uid());
end; $$;

-- Compact referral summary for the bot.
create or replace function public.telegram_referral_summary(_user uuid)
returns jsonb language plpgsql security definer set search_path=public as $$
declare code text; cid uuid; c public.referral_cycles%rowtype; n int; total int;
begin
  code := public.internal_referral_code(_user);
  cid := public.internal_active_cycle(_user);
  select * into c from public.referral_cycles where id=cid;
  select count(*) into n from public.referrals where cycle_id=cid and counted;
  select count(*) into total from public.referrals where referrer_id=_user;
  return jsonb_build_object('code',code,'counted',n,'total_invited',total,
    'go_claimed_at',c.go_claimed_at,'plus_granted_at',c.plus_granted_at,'reward_expires_at',c.reward_expires_at,
    'can_claim_go',(n>=10 and c.go_claimed_at is null and c.plus_granted_at is null));
end; $$;

-- ============================================================
-- Outbox delivery
-- ============================================================

-- Wakes the telegram-bot function so it delivers queued messages. Uses pg_net when it is
-- installed; without it the cron job below (or the next bot update) delivers them.
create or replace function public.telegram_kick()
returns void language plpgsql security definer set search_path=public as $$
declare u text;
begin
  select value into u from public.telegram_settings where key='drain_url';
  if coalesce(u,'')='' then return; end if;
  begin
    perform net.http_post(url:=u, body:='{"drain":true}'::jsonb,
      headers:='{"Content-Type":"application/json"}'::jsonb, timeout_milliseconds:=5000);
  exception when others then
    raise warning 'telegram_kick skipped: %', sqlerrm;
  end;
end; $$;

create or replace function public.telegram_kick_if_pending()
returns void language plpgsql security definer set search_path=public as $$
begin
  if exists(select 1 from public.telegram_outbox where status='pending' and send_after<=now())
     or exists(select 1 from public.telegram_outbox where status='sending' and send_after<now()-interval '5 minutes') then
    perform public.telegram_kick();
  end if;
end; $$;

-- Only one drainer at a time keeps the bot inside Telegram's rate limits.
create or replace function public.telegram_acquire_drain_lease(_seconds int default 60)
returns boolean language plpgsql security definer set search_path=public as $$
declare ok boolean;
begin
  update public.telegram_settings set value=(now()+make_interval(secs=>_seconds))::text, updated_at=now()
    where key='drain_lease' and value::timestamptz < now()
    returning true into ok;
  return coalesce(ok,false);
end; $$;

create or replace function public.telegram_release_drain_lease()
returns void language sql security definer set search_path=public as $$
  update public.telegram_settings set value='1970-01-01T00:00:00Z', updated_at=now() where key='drain_lease';
$$;

-- Claims the next messages to send. Personal notifications go before broadcasts.
create or replace function public.telegram_claim_outbox(_limit int default 25)
returns setof public.telegram_outbox language plpgsql security definer set search_path=public as $$
begin
  update public.telegram_outbox set status='pending'
    where status='sending' and send_after < now()-interval '5 minutes';
  return query
  update public.telegram_outbox o set status='sending', attempts=o.attempts+1, send_after=now()
  where o.id in (
    select x.id from public.telegram_outbox x
    where x.status='pending' and x.send_after<=now()
    order by (x.broadcast_id is not null), x.id
    limit greatest(1,least(_limit,100))
    for update skip locked)
  returning o.*;
end; $$;

-- Queues a message for a site user when they connected Telegram and allow this kind of message.
create or replace function public.telegram_enqueue_for_user(_user uuid,_kind text,_payload jsonb,_pref text default 'account')
returns boolean language plpgsql security definer set search_path=public as $$
declare t public.telegram_accounts%rowtype;
begin
  select * into t from public.telegram_accounts where user_id=_user and not is_blocked and not is_banned;
  if not found then return false; end if;
  if (_pref='results' and not t.notify_results) or (_pref='reminders' and not t.notify_reminders)
     or (_pref='news' and not t.notify_news) then
    return false;
  end if;
  insert into public.telegram_outbox(telegram_id,user_id,kind,payload) values(t.telegram_id,_user,_kind,coalesce(_payload,'{}'::jsonb));
  return true;
end; $$;

-- ============================================================
-- Triggers: results, referrals, plan changes
-- ============================================================
create or replace function public.telegram_on_result()
returns trigger language plpgsql security definer set search_path=public as $$
declare k text;
begin
  if new.status is distinct from 'completed' then return new; end if;
  if tg_op='UPDATE' and old.status is not distinct from 'completed' then return new; end if;
  k := case tg_table_name when 'essays' then 'essay_result' when 'speaking_attempts' then 'speaking_result' else 'mock_result' end;
  if public.telegram_enqueue_for_user(new.user_id,k,jsonb_build_object('id',new.id),'results') then
    perform public.telegram_kick();
  end if;
  return new;
exception when others then
  -- A notification problem must never block saving a result.
  raise warning 'telegram_on_result: %', sqlerrm;
  return new;
end; $$;

drop trigger if exists telegram_essay_result on public.essays;
create trigger telegram_essay_result after insert or update of status on public.essays
  for each row execute function public.telegram_on_result();
drop trigger if exists telegram_speaking_result on public.speaking_attempts;
create trigger telegram_speaking_result after insert or update of status on public.speaking_attempts
  for each row execute function public.telegram_on_result();
drop trigger if exists telegram_mock_result on public.mock_tests;
create trigger telegram_mock_result after insert or update of status on public.mock_tests
  for each row execute function public.telegram_on_result();

create or replace function public.telegram_on_referral()
returns trigger language plpgsql security definer set search_path=public as $$
begin
  if public.telegram_enqueue_for_user(new.referrer_id,'referral_new',jsonb_build_object('counted',new.counted),'account') then
    perform public.telegram_kick();
  end if;
  return new;
exception when others then
  raise warning 'telegram_on_referral: %', sqlerrm;
  return new;
end; $$;
drop trigger if exists telegram_referral_new on public.referrals;
create trigger telegram_referral_new after insert on public.referrals
  for each row execute function public.telegram_on_referral();

create or replace function public.telegram_on_plan_change()
returns trigger language plpgsql security definer set search_path=public as $$
begin
  if new.plan_type is distinct from old.plan_type
     or (new.plan_type<>'free' and new.expires_at is distinct from old.expires_at and new.expires_at > coalesce(old.expires_at,'-infinity'::timestamptz)) then
    if public.telegram_enqueue_for_user(new.user_id,'plan_changed',
         jsonb_build_object('plan',new.plan_type,'old_plan',old.plan_type,'expires_at',new.expires_at),'account') then
      perform public.telegram_kick();
    end if;
  end if;
  return new;
exception when others then
  raise warning 'telegram_on_plan_change: %', sqlerrm;
  return new;
end; $$;
drop trigger if exists telegram_plan_change on public.subscriptions;
create trigger telegram_plan_change after update of plan_type, expires_at on public.subscriptions
  for each row execute function public.telegram_on_plan_change();

-- ============================================================
-- Daily jobs: plan expiry, practice reminders, Sunday weekly report
-- ============================================================
create or replace function public.telegram_daily_jobs()
returns jsonb language plpgsql security definer set search_path=public as $$
declare n_exp int:=0; n_rem int:=0; n_week int:=0; r record;
begin
  -- Paid plans that end in about 3 days or within the next day.
  for r in
    select s.user_id, case when s.expires_at < now()+interval '1 day' then 1 else 3 end as days, s.plan_type, s.expires_at
    from public.subscriptions s
    where s.plan_type<>'free' and s.expires_at is not null
      and ((s.expires_at >= now()+interval '2 days' and s.expires_at < now()+interval '3 days')
        or (s.expires_at >= now() and s.expires_at < now()+interval '1 day'))
  loop
    if public.telegram_enqueue_for_user(r.user_id,'plan_expiring',
         jsonb_build_object('days',r.days,'plan',r.plan_type,'expires_at',r.expires_at),'reminders') then
      n_exp := n_exp+1;
    end if;
  end loop;

  -- Learners who practised during the last 14 days but not in the last 20 hours.
  for r in
    select t.user_id from public.telegram_accounts t
    where t.user_id is not null and t.notify_reminders and not t.is_blocked and not t.is_banned
      and exists(select 1 from (
        select created_at from public.essays where user_id=t.user_id and status='completed' and created_at>now()-interval '14 days'
        union all
        select created_at from public.speaking_attempts where user_id=t.user_id and status='completed' and created_at>now()-interval '14 days') a)
      and not exists(select 1 from public.essays where user_id=t.user_id and created_at>now()-interval '20 hours')
      and not exists(select 1 from public.speaking_attempts where user_id=t.user_id and created_at>now()-interval '20 hours')
  loop
    if public.telegram_enqueue_for_user(r.user_id,'practice_reminder','{}'::jsonb,'reminders') then n_rem := n_rem+1; end if;
  end loop;

  -- Sunday (Tashkent time): weekly report for everyone who practised this week.
  if extract(isodow from (now() at time zone 'Asia/Tashkent')) = 7 then
    for r in
      select t.user_id from public.telegram_accounts t
      where t.user_id is not null and t.notify_reminders and not t.is_blocked and not t.is_banned
        and (exists(select 1 from public.essays where user_id=t.user_id and status='completed' and created_at>now()-interval '7 days')
          or exists(select 1 from public.speaking_attempts where user_id=t.user_id and status='completed' and created_at>now()-interval '7 days'))
    loop
      if public.telegram_enqueue_for_user(r.user_id,'weekly_report','{}'::jsonb,'reminders') then n_week := n_week+1; end if;
    end loop;
  end if;

  -- Housekeeping.
  delete from public.telegram_auth_requests where expires_at < now()-interval '1 day';
  delete from public.telegram_outbox where status in ('sent','skipped','failed') and created_at < now()-interval '60 days';

  if n_exp+n_rem+n_week > 0 then perform public.telegram_kick(); end if;
  return jsonb_build_object('plan_expiring',n_exp,'practice_reminder',n_rem,'weekly_report',n_week);
end; $$;

-- ============================================================
-- Broadcasts
-- ============================================================
create or replace function public.telegram_audience_count(_audience text)
returns int language sql stable security definer set search_path=public as $$
  select count(*)::int from public.telegram_accounts t
  left join public.subscriptions s on s.user_id=t.user_id
  where not t.is_blocked and not t.is_banned and t.notify_news
    and case _audience
      when 'all' then true
      when 'linked' then t.user_id is not null
      when 'unlinked' then t.user_id is null
      when 'free' then t.user_id is not null and coalesce(s.plan_type,'free')='free'
      when 'paid' then t.user_id is not null and s.plan_type in ('go','plus') and coalesce(s.expires_at,'infinity'::timestamptz)>now()
      else false end;
$$;

create or replace function public.telegram_enqueue_broadcast(_id uuid)
returns int language plpgsql security definer set search_path=public as $$
declare b public.telegram_broadcasts%rowtype; n int;
begin
  select * into b from public.telegram_broadcasts where id=_id for update;
  if not found or b.status<>'queued' or b.total>0 then return 0; end if;
  insert into public.telegram_outbox(telegram_id,user_id,kind,payload,broadcast_id)
  select t.telegram_id,t.user_id,'broadcast',jsonb_build_object('kind',b.kind)||b.payload,b.id
  from public.telegram_accounts t
  left join public.subscriptions s on s.user_id=t.user_id
  where not t.is_blocked and not t.is_banned and t.notify_news
    and case b.audience
      when 'all' then true
      when 'linked' then t.user_id is not null
      when 'unlinked' then t.user_id is null
      when 'free' then t.user_id is not null and coalesce(s.plan_type,'free')='free'
      when 'paid' then t.user_id is not null and s.plan_type in ('go','plus') and coalesce(s.expires_at,'infinity'::timestamptz)>now()
      else false end;
  get diagnostics n = row_count;
  update public.telegram_broadcasts set total=n, status=case when n=0 then 'done' else 'queued' end,
    finished_at=case when n=0 then now() else null end where id=_id;
  return n;
end; $$;

-- Marks a broadcast finished once nothing is left to send; returns its stats only the first time.
create or replace function public.telegram_finish_broadcast(_id uuid)
returns jsonb language plpgsql security definer set search_path=public as $$
declare b public.telegram_broadcasts%rowtype; s int; f int; k int;
begin
  if exists(select 1 from public.telegram_outbox where broadcast_id=_id and status in ('pending','sending')) then return null; end if;
  update public.telegram_broadcasts set status='done', finished_at=now() where id=_id and status='queued' returning * into b;
  if not found then return null; end if;
  select count(*) filter (where status='sent'), count(*) filter (where status='failed'), count(*) filter (where status='skipped')
    into s,f,k from public.telegram_outbox where broadcast_id=_id;
  return jsonb_build_object('id',b.id,'created_by',b.created_by,'total',b.total,'sent',s,'failed',f,'skipped',k,'audience',b.audience);
end; $$;

-- ============================================================
-- Admin panel queries (the bot checks admin rights before calling these)
-- ============================================================
create or replace function public.telegram_admin_stats()
returns jsonb language sql stable security definer set search_path=public,auth as $$
  select jsonb_build_object(
    'users_total',(select count(*) from auth.users),
    'users_today',(select count(*) from auth.users where created_at >= date_trunc('day', now() at time zone 'Asia/Tashkent') at time zone 'Asia/Tashkent'),
    'users_7d',(select count(*) from auth.users where created_at > now()-interval '7 days'),
    'users_30d',(select count(*) from auth.users where created_at > now()-interval '30 days'),
    'active_7d',(select count(*) from auth.users where last_sign_in_at > now()-interval '7 days'),
    'tg_total',(select count(*) from public.telegram_accounts),
    'tg_linked',(select count(*) from public.telegram_accounts where user_id is not null),
    'tg_blocked',(select count(*) from public.telegram_accounts where is_blocked),
    'tg_banned',(select count(*) from public.telegram_accounts where is_banned),
    'tg_today',(select count(*) from public.telegram_accounts where created_at >= date_trunc('day', now() at time zone 'Asia/Tashkent') at time zone 'Asia/Tashkent'),
    'essays_today',(select count(*) from public.essays where status='completed' and created_at >= date_trunc('day', now() at time zone 'Asia/Tashkent') at time zone 'Asia/Tashkent'),
    'essays_7d',(select count(*) from public.essays where status='completed' and created_at > now()-interval '7 days'),
    'speaking_today',(select count(*) from public.speaking_attempts where status='completed' and created_at >= date_trunc('day', now() at time zone 'Asia/Tashkent') at time zone 'Asia/Tashkent'),
    'speaking_7d',(select count(*) from public.speaking_attempts where status='completed' and created_at > now()-interval '7 days'),
    'mock_7d',(select count(*) from public.mock_tests where status='completed' and created_at > now()-interval '7 days'),
    'paid_go',(select count(*) from public.subscriptions where plan_type='go' and coalesce(expires_at,'infinity'::timestamptz)>now()),
    'paid_plus',(select count(*) from public.subscriptions where plan_type='plus' and coalesce(expires_at,'infinity'::timestamptz)>now()),
    'ai_cost_today',(select coalesce(round(sum(cost_usd)::numeric,2),0) from public.ai_usage_events where created_at > now()-interval '1 day'),
    'ai_cost_7d',(select coalesce(round(sum(cost_usd)::numeric,2),0) from public.ai_usage_events where created_at > now()-interval '7 days'),
    'ai_cost_30d',(select coalesce(round(sum(cost_usd)::numeric,2),0) from public.ai_usage_events where created_at > now()-interval '30 days'),
    'outbox_pending',(select count(*) from public.telegram_outbox where status in ('pending','sending')),
    'outbox_failed_24h',(select count(*) from public.telegram_outbox where status='failed' and created_at > now()-interval '1 day'),
    'outbox_sent_24h',(select count(*) from public.telegram_outbox where status='sent' and created_at > now()-interval '1 day'));
$$;

create or replace function public.telegram_user_card(_user uuid)
returns jsonb language sql stable security definer set search_path=public,auth as $$
  select jsonb_build_object(
    'user_id',u.id,'email',u.email,'created_at',u.created_at,'last_sign_in_at',u.last_sign_in_at,
    'provider',coalesce(u.raw_app_meta_data->>'provider','email'),
    'full_name',p.full_name,'public_id',p.public_id,
    'plan',s.plan_type,'plan_name',s.plan_name,'expires_at',s.expires_at,
    'writing_used',s.writing_used,'writing_limit',s.writing_limit,
    'speaking_used',s.speaking_used,'speaking_limit',s.speaking_limit,
    'mock_used',s.mock_test_used,'mock_limit',s.mock_test_limit,
    'essays',(select count(*) from public.essays e where e.user_id=u.id and e.status='completed'),
    'speaking',(select count(*) from public.speaking_attempts a where a.user_id=u.id and a.status='completed'),
    'mocks',(select count(*) from public.mock_tests m where m.user_id=u.id and m.status='completed'),
    'avg_writing',(select round(avg(score)::numeric,1) from public.essays e where e.user_id=u.id and e.score is not null),
    'avg_speaking',(select round(avg(score)::numeric,1) from public.speaking_attempts a where a.user_id=u.id and a.score is not null),
    'is_admin',exists(select 1 from public.user_roles r where r.user_id=u.id and r.role='admin'),
    'telegram_id',t.telegram_id,'telegram_username',t.username,'telegram_banned',t.is_banned,'telegram_blocked',t.is_blocked)
  from auth.users u
  left join public.profiles p on p.user_id=u.id
  left join public.subscriptions s on s.user_id=u.id
  left join public.telegram_accounts t on t.user_id=u.id
  where u.id=_user;
$$;

-- Search by email, name, public ID, Telegram @username or Telegram ID.
create or replace function public.telegram_find_users(_q text)
returns jsonb language plpgsql stable security definer set search_path=public,auth as $$
declare q text:=trim(coalesce(_q,'')); res jsonb;
begin
  if length(q) < 2 then return '[]'::jsonb; end if;
  select coalesce(jsonb_agg(x),'[]'::jsonb) into res from (
    select distinct on (u.id) u.id as user_id, u.email, p.full_name, p.public_id, t.username as telegram_username, t.telegram_id
    from auth.users u
    left join public.profiles p on p.user_id=u.id
    left join public.telegram_accounts t on t.user_id=u.id
    where u.email ilike '%'||q||'%'
       or p.full_name ilike '%'||q||'%'
       or p.public_id = ltrim(q,'#')
       or lower(t.username) = lower(ltrim(q,'@'))
       or (q ~ '^[0-9]{5,15}$' and t.telegram_id = q::bigint)
    order by u.id
    limit 10) x;
  return res;
end; $$;

create or replace function public.telegram_recent_users(_limit int default 10)
returns jsonb language sql stable security definer set search_path=public,auth as $$
  select coalesce(jsonb_agg(x order by x.created_at desc),'[]'::jsonb) from (
    select u.id as user_id, u.email, u.created_at, coalesce(u.raw_app_meta_data->>'provider','email') as provider,
      p.full_name, s.plan_type
    from auth.users u
    left join public.profiles p on p.user_id=u.id
    left join public.subscriptions s on s.user_id=u.id
    order by u.created_at desc limit greatest(1,least(_limit,30))) x;
$$;

-- Same ranking as the website leaderboard: average Writing band + 0.1 per essay, at least 2 essays.
create or replace function public.telegram_leaderboard(_since timestamptz,_limit int default 10)
returns jsonb language sql stable security definer set search_path=public as $$
  with agg as (
    select e.user_id, avg(e.score)::numeric as avg_score, count(*)::int as n
    from public.essays e where e.created_at >= _since and e.score is not null
    group by e.user_id having count(*) >= 2),
  ranked as (
    select a.*, round(a.avg_score + a.n*0.1, 2) as composite,
      row_number() over (order by a.avg_score + a.n*0.1 desc, a.n desc) as rank
    from agg a)
  select coalesce(jsonb_agg(jsonb_build_object('user_id',r.user_id,'rank',r.rank,'avg',round(r.avg_score,1),'count',r.n,
    'composite',r.composite,'name',coalesce(nullif(trim(p.full_name),''),split_part(p.email,'@',1))) order by r.rank),'[]'::jsonb)
  from ranked r left join public.profiles p on p.user_id=r.user_id;
$$;

-- Admin plan change from the bot: switch to a plan for N days, or extend the same active plan.
create or replace function public.telegram_admin_set_plan(_user uuid,_plan text,_days int default 30)
returns jsonb language plpgsql security definer set search_path=public as $$
declare p record; cur public.subscriptions%rowtype; s_end timestamptz; f record;
begin
  if _plan not in ('free','go','plus') then raise exception 'Unsupported plan'; end if;
  select * into cur from public.subscriptions where user_id=_user for update;
  if not found then raise exception 'Subscription row not found'; end if;
  if _plan='free' then
    select * into f from public.subscription_plans where slug='free';
    update public.subscription_history set ended_at=now() where user_id=_user and ended_at is null;
    update public.subscriptions set plan_type='free',plan_name='Free',writing_limit=f.writing_limit,writing_used=0,
      speaking_limit=f.speaking_limit,speaking_used=0,mock_test_limit=f.mock_test_limit,mock_test_used=0,
      expires_at=null,started_at=now(),is_active=true where user_id=_user;
    insert into public.subscription_history(user_id,plan_type,plan_name,price_uzs,writing_limit,speaking_limit,mock_test_limit,started_at)
      values(_user,'free','Free','0',f.writing_limit,f.speaking_limit,f.mock_test_limit,now());
    return jsonb_build_object('plan','free','expires_at',null,'extended',false);
  end if;
  select * into p from public.subscription_plans where slug=_plan and is_active=true;
  if not found then raise exception 'Plan not found'; end if;
  if cur.plan_type=_plan and cur.expires_at is not null and cur.expires_at>now() then
    s_end := cur.expires_at + make_interval(days=>_days);
    update public.subscriptions set expires_at=s_end where user_id=_user;
    update public.subscription_history set expires_at=s_end where user_id=_user and ended_at is null;
    return jsonb_build_object('plan',_plan,'expires_at',s_end,'extended',true);
  end if;
  s_end := now() + make_interval(days=>_days);
  update public.subscription_history set ended_at=now() where user_id=_user and ended_at is null;
  update public.subscriptions set plan_type=p.slug,plan_name=p.name,writing_limit=p.writing_limit,writing_used=0,
    speaking_limit=p.speaking_limit,speaking_used=0,mock_test_limit=p.mock_test_limit,mock_test_used=0,
    started_at=now(),expires_at=s_end,is_active=true where user_id=_user;
  insert into public.subscription_history(user_id,plan_type,plan_name,price_uzs,writing_limit,speaking_limit,mock_test_limit,started_at,expires_at)
    values(_user,p.slug,p.name,p.price_uzs,p.writing_limit,p.speaking_limit,p.mock_test_limit,now(),s_end);
  return jsonb_build_object('plan',_plan,'expires_at',s_end,'extended',false);
end; $$;

-- ============================================================
-- Privileges: everything Telegram-related is for the service role only.
-- ============================================================
do $$
declare f text;
begin
  foreach f in array array[
    'public.internal_claim_referral(uuid,text)',
    'public.internal_claim_referral_reward(uuid)',
    'public.telegram_referral_summary(uuid)',
    'public.telegram_kick()',
    'public.telegram_kick_if_pending()',
    'public.telegram_acquire_drain_lease(int)',
    'public.telegram_release_drain_lease()',
    'public.telegram_claim_outbox(int)',
    'public.telegram_enqueue_for_user(uuid,text,jsonb,text)',
    'public.telegram_daily_jobs()',
    'public.telegram_audience_count(text)',
    'public.telegram_enqueue_broadcast(uuid)',
    'public.telegram_finish_broadcast(uuid)',
    'public.telegram_admin_stats()',
    'public.telegram_user_card(uuid)',
    'public.telegram_find_users(text)',
    'public.telegram_recent_users(int)',
    'public.telegram_leaderboard(timestamptz,int)',
    'public.telegram_admin_set_plan(uuid,text,int)'
  ] loop
    execute format('revoke all on function %s from public, anon, authenticated', f);
    execute format('grant execute on function %s to service_role', f);
  end loop;
end $$;

grant execute on function public.internal_referral_code(uuid) to service_role;
grant execute on function public.internal_active_cycle(uuid) to service_role;
grant execute on function public.internal_grant_plan(uuid,text,int) to service_role;
revoke all on function public.telegram_on_result() from public, anon, authenticated;
revoke all on function public.telegram_on_referral() from public, anon, authenticated;
revoke all on function public.telegram_on_plan_change() from public, anon, authenticated;

-- ============================================================
-- Background jobs (pg_net for instant delivery, pg_cron for retries and daily messages).
-- Both are optional: when an extension is unavailable the bot still works on demand.
-- ============================================================
do $$ begin
  create extension if not exists pg_net;
exception when others then raise notice 'pg_net unavailable: %', sqlerrm; end $$;

do $$ begin
  create extension if not exists pg_cron;
exception when others then raise notice 'pg_cron unavailable: %', sqlerrm; end $$;

do $$ begin
  if exists(select 1 from pg_extension where extname='pg_cron') then
    perform cron.schedule('telegram-outbox-retry', '* * * * *', 'select public.telegram_kick_if_pending()');
    -- 13:05 UTC = 18:05 in Tashkent.
    perform cron.schedule('telegram-daily-jobs', '5 13 * * *', 'select public.telegram_daily_jobs()');
  end if;
exception when others then raise notice 'cron scheduling skipped: %', sqlerrm; end $$;

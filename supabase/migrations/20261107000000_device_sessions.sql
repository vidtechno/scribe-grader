-- At most two devices per account at the same time.
-- Every sign-in is a Supabase auth session; the website registers it here together with a per-browser device id.
-- A third device stays "pending": it may only list the active devices and sign one of them out (device_revoke).
create table if not exists public.device_sessions (
  session_id uuid primary key references auth.sessions(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  device_id text not null,
  device_name text not null default 'Qurilma',
  status text not null default 'active' check (status in ('active', 'pending')),
  created_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now()
);
create index if not exists device_sessions_user_idx on public.device_sessions(user_id, status);
alter table public.device_sessions enable row level security;
revoke all on public.device_sessions from anon, authenticated;

-- Sessions that never register (scripts, very old open tabs) are removed by the sweep, but only after this moment.
create table if not exists public.device_policy (id boolean primary key default true check (id), enforce_after timestamptz not null);
insert into public.device_policy(id, enforce_after) values (true, now() + interval '24 hours') on conflict (id) do nothing;
alter table public.device_policy enable row level security;
revoke all on public.device_policy from anon, authenticated;

create or replace function public.device_max() returns int language sql immutable as $$ select 2 $$;

-- Current state for one session: its status and the active devices (the ones that can be signed out).
create or replace function public.internal_device_state(_uid uuid, _sid uuid)
returns jsonb language sql stable security definer set search_path = public as $$
  select jsonb_build_object(
    'status', coalesce((select status from public.device_sessions where session_id = _sid), 'revoked'),
    'max', public.device_max(),
    'sessions', coalesce((select jsonb_agg(jsonb_build_object(
        'id', d.session_id, 'name', d.device_name, 'last_seen', d.last_seen_at, 'created_at', d.created_at,
        'current', d.session_id = _sid) order by d.created_at)
      from public.device_sessions d where d.user_id = _uid and d.status = 'active'), '[]'::jsonb));
$$;

create or replace function public.device_register(_device_id text, _name text default null)
returns jsonb language plpgsql security definer set search_path = public, auth as $$
declare
  uid uuid := auth.uid();
  sid uuid;
  cur public.device_sessions%rowtype;
  others int;
  nm text := left(coalesce(nullif(btrim(_name), ''), 'Qurilma'), 80);
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  begin sid := (auth.jwt() ->> 'session_id')::uuid; exception when others then sid := null; end;
  -- Tokens without a session id cannot be managed: let them through.
  if sid is null then return jsonb_build_object('status', 'active', 'max', public.device_max(), 'sessions', '[]'::jsonb); end if;
  if not exists (select 1 from auth.sessions where id = sid and user_id = uid) then
    return jsonb_build_object('status', 'revoked', 'max', public.device_max(), 'sessions', '[]'::jsonb);
  end if;
  if _device_id is null or length(_device_id) not between 8 and 64
     or translate(lower(_device_id), 'abcdefghijklmnopqrstuvwxyz0123456789-', '') <> '' then
    raise exception 'bad_device';
  end if;

  perform pg_advisory_xact_lock(hashtext('device:' || uid::text));
  select * into cur from public.device_sessions where session_id = sid;
  if not found then
    -- Signing in again on the same device replaces that device's older sessions.
    delete from auth.sessions where user_id = uid and id <> sid
      and id in (select session_id from public.device_sessions where user_id = uid and device_id = _device_id);
    select count(distinct device_id) into others from public.device_sessions where user_id = uid and status = 'active';
    insert into public.device_sessions(session_id, user_id, device_id, device_name, status)
    values (sid, uid, _device_id, nm, case when others < public.device_max() then 'active' else 'pending' end);
  else
    update public.device_sessions set last_seen_at = now(), device_name = nm, device_id = _device_id where session_id = sid;
    if cur.status = 'pending' then
      select count(distinct device_id) into others from public.device_sessions where user_id = uid and status = 'active';
      if others < public.device_max() then update public.device_sessions set status = 'active' where session_id = sid; end if;
    end if;
  end if;
  return public.internal_device_state(uid, sid);
end; $$;

-- Signs one of the active devices out. Works from the pending device too, and then lets it in.
create or replace function public.device_revoke(_session_id uuid)
returns jsonb language plpgsql security definer set search_path = public, auth as $$
declare uid uuid := auth.uid(); sid uuid; others int;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  begin sid := (auth.jwt() ->> 'session_id')::uuid; exception when others then sid := null; end;
  if sid is null or not exists (select 1 from public.device_sessions where session_id = sid and user_id = uid) then
    raise exception 'session_not_registered';
  end if;
  perform pg_advisory_xact_lock(hashtext('device:' || uid::text));
  if not exists (select 1 from public.device_sessions where session_id = _session_id and user_id = uid and status = 'active') then
    raise exception 'device_not_found';
  end if;
  perform public.internal_device_kill(_session_id, uid);
  select count(distinct device_id) into others from public.device_sessions where user_id = uid and status = 'active';
  if others < public.device_max() then
    update public.device_sessions set status = 'active' where session_id = sid and status = 'pending';
  end if;
  return public.internal_device_state(uid, sid);
end; $$;

create or replace function public.internal_device_kill(_sid uuid, _uid uuid) returns void language sql security definer set search_path = public, auth as $fn$
  delete from auth.sessions where id = _sid and user_id = _uid;
$fn$;

-- Pending devices that were never resolved, and unregistered sessions, are signed out (server-side backstop for the website gate).
create or replace function public.device_sessions_sweep() returns int language sql security definer set search_path = public, auth as $fn$
  with a as (
    delete from auth.sessions s using public.device_sessions d
    where d.session_id = s.id and d.status = 'pending' and d.created_at < now() - interval '15 minutes' returning s.id
  ), b as (
    delete from auth.sessions s
    where s.created_at < now() - interval '15 minutes'
      and coalesce(s.refreshed_at, s.updated_at, s.created_at) > now() - interval '2 hours'
      and (select enforce_after from public.device_policy where id) < now()
      and not exists (select 1 from public.device_sessions d where d.session_id = s.id) returning s.id
  )
  select (select count(*) from a)::int + (select count(*) from b)::int;
$fn$;

do $$
declare f text;
begin
  foreach f in array array['public.device_register(text,text)', 'public.device_revoke(uuid)'] loop
    execute format('revoke all on function %s from public, anon', f);
    execute format('grant execute on function %s to authenticated', f);
  end loop;
  foreach f in array array['public.internal_device_state(uuid,uuid)', 'public.internal_device_kill(uuid,uuid)', 'public.device_sessions_sweep()'] loop
    execute format('revoke all on function %s from public, anon, authenticated', f);
    execute format('grant execute on function %s to service_role', f);
  end loop;
end $$;

do $$
begin
  if exists (select 1 from pg_extension where extname = 'pg_cron') then
    perform cron.unschedule(jobid) from cron.job where jobname = 'device-sessions-sweep';
    perform cron.schedule('device-sessions-sweep', '*/5 * * * *', 'select public.device_sessions_sweep()');
  end if;
exception when others then
  raise warning 'device-sessions-sweep cron skipped: %', sqlerrm;
end $$;

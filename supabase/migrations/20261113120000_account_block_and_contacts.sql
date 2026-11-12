-- Block / unblock an account from the admin panel, and a contact list (phone and Telegram given at sign-up).
alter table public.profiles add column if not exists blocked_at timestamptz, add column if not exists blocked_reason text;

create or replace function public.admin_set_account_block(_user uuid, _blocked boolean, _reason text default null)
returns jsonb language plpgsql security definer set search_path = public, auth as $fn$
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then raise exception 'Only admins'; end if;
  if _user = auth.uid() then raise exception 'You cannot block yourself'; end if;
  if public.has_role(_user, 'admin'::app_role) then raise exception 'An admin cannot be blocked'; end if;
  if not exists (select 1 from auth.users where id = _user) then raise exception 'User not found'; end if;
  if _blocked then
    -- Signing in and refreshing a session are refused while banned_until is in the future; deleting the sessions ends the current ones.
    update auth.users set banned_until = now() + interval '100 years' where id = _user;
    delete from auth.sessions where user_id = _user;
  else
    update auth.users set banned_until = null where id = _user;
  end if;
  update public.profiles set blocked_at = case when _blocked then now() end,
    blocked_reason = case when _blocked then nullif(left(trim(coalesce(_reason, '')), 300), '') end where user_id = _user;
  update public.telegram_accounts set is_banned = _blocked where user_id = _user;
  return jsonb_build_object('user_id', _user, 'blocked', _blocked);
end; $fn$;

create or replace function public.admin_account_block_state(_user uuid)
returns jsonb language plpgsql stable security definer set search_path = public as $fn$
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then raise exception 'Only admins'; end if;
  return coalesce((select jsonb_build_object('blocked', blocked_at is not null, 'blocked_at', blocked_at, 'reason', blocked_reason)
                   from public.profiles where user_id = _user), jsonb_build_object('blocked', false));
end; $fn$;

create or replace function public.admin_blocked_users()
returns jsonb language plpgsql stable security definer set search_path = public as $fn$
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then raise exception 'Only admins'; end if;
  return coalesce((select jsonb_agg(user_id) from public.profiles where blocked_at is not null), '[]'::jsonb);
end; $fn$;

-- Everyone who left a phone number or a Telegram username (admins only).
create or replace function public.admin_contacts()
returns jsonb language plpgsql stable security definer set search_path = public, auth as $fn$
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then raise exception 'Only admins'; end if;
  return jsonb_build_object(
    'counts', jsonb_build_object(
      'users', (select count(*) from auth.users),
      'phone', (select count(*) from public.user_intake where nullif(trim(phone), '') is not null),
      'telegram', (select count(*) from public.user_intake where nullif(trim(telegram_username), '') is not null),
      'both', (select count(*) from public.user_intake where nullif(trim(phone), '') is not null and nullif(trim(telegram_username), '') is not null)),
    'rows', coalesce((select jsonb_agg(r order by r.completed_at desc) from (
      select i.user_id, u.email, p.full_name, p.public_id, nullif(trim(i.phone), '') as phone, nullif(trim(i.telegram_username), '') as telegram_username,
             t.username as bot_username, i.completed_at
      from public.user_intake i
      join auth.users u on u.id = i.user_id
      left join public.profiles p on p.user_id = i.user_id
      left join public.telegram_accounts t on t.user_id = i.user_id
      where nullif(trim(i.phone), '') is not null or nullif(trim(i.telegram_username), '') is not null
      order by i.completed_at desc limit 3000) r), '[]'::jsonb));
end; $fn$;

revoke all on function public.admin_set_account_block(uuid, boolean, text), public.admin_account_block_state(uuid), public.admin_blocked_users(), public.admin_contacts() from public, anon;
grant execute on function public.admin_set_account_block(uuid, boolean, text), public.admin_account_block_state(uuid), public.admin_blocked_users(), public.admin_contacts() to authenticated;

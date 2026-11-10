-- One private response per account. Existing profiles and Auth settings are untouched.
create table public.user_intake (
  user_id uuid primary key references auth.users(id) on delete cascade,
  phone text check (phone is null or (phone ~ '^\+[1-9][0-9]{7,14}$' and (phone !~ '^\+998' or phone ~ '^\+998[0-9]{9}$'))),
  telegram_username text check (telegram_username is null or telegram_username ~ '^[A-Za-z0-9_]{5,32}$'),
  no_telegram_username boolean not null default false,
  age_range text not null check (age_range in ('under16','16_18','19_24','25_34','35plus')),
  discovery_source text not null check (discovery_source in ('search','telegram','instagram','friend','other')),
  completed_at timestamptz not null default now(),
  check (not no_telegram_username or telegram_username is null)
);
alter table public.user_intake enable row level security;
revoke all on public.user_intake from public,anon,authenticated;
grant select on public.user_intake to authenticated;
grant all on public.user_intake to service_role;
create policy "Read own intake response" on public.user_intake for select to authenticated
  using ((select auth.uid())=user_id);
create policy "Admins read intake responses" on public.user_intake for select to authenticated
  using ((select public.has_role(auth.uid(),'admin'::public.app_role)));

-- Intentional per-account API: clients cannot supply a user ID or write rows directly.
create function public.complete_user_intake(
  _phone text,_telegram_username text,_no_telegram_username boolean,_age_range text,_discovery_source text
) returns jsonb language plpgsql security definer set search_path='' as $$
declare u uuid:=auth.uid(); p text; tg text; r public.user_intake%rowtype;
begin
  if u is null then raise insufficient_privilege; end if;
  p:=nullif(regexp_replace(coalesce(_phone,''),'[\s()-]','','g'),'');
  tg:=nullif(regexp_replace(btrim(coalesce(_telegram_username,'')),'^@',''),'');
  if p is not null and (p !~ '^\+[1-9][0-9]{7,14}$' or (p ~ '^\+998' and p !~ '^\+998[0-9]{9}$')) then raise exception 'invalid_phone'; end if;
  if tg is not null and tg !~ '^[A-Za-z0-9_]{5,32}$' then raise exception 'invalid_telegram_username'; end if;
  if coalesce(_no_telegram_username,false) then tg:=null; end if;
  if _age_range is null or _age_range not in ('under16','16_18','19_24','25_34','35plus') then raise exception 'invalid_age_range'; end if;
  if _discovery_source is null or _discovery_source not in ('search','telegram','instagram','friend','other') then raise exception 'invalid_discovery_source'; end if;
  insert into public.user_intake(user_id,phone,telegram_username,no_telegram_username,age_range,discovery_source)
    values(u,p,tg,coalesce(_no_telegram_username,false),_age_range,_discovery_source)
    on conflict(user_id) do nothing returning * into r;
  if found then
    -- Skipping an optional question must not erase an existing contact number.
    if p is not null then update public.profiles set phone=p where user_id=u; end if;
  else
    select * into r from public.user_intake where user_id=u;
  end if;
  return to_jsonb(r);
end; $$;
revoke all on function public.complete_user_intake(text,text,boolean,text,text) from public,anon,authenticated;
grant execute on function public.complete_user_intake(text,text,boolean,text,text) to authenticated;

create function public.admin_user_intake(_user uuid) returns jsonb
language plpgsql security definer set search_path='' as $$
begin
  if auth.uid() is null or not public.has_role(auth.uid(),'admin'::public.app_role) then raise insufficient_privilege; end if;
  return (select to_jsonb(i) from public.user_intake i where i.user_id=_user);
end; $$;
revoke all on function public.admin_user_intake(uuid) from public,anon,authenticated;
grant execute on function public.admin_user_intake(uuid) to authenticated;

create function public.admin_intake_stats() returns jsonb
language plpgsql stable security definer set search_path='' as $$
declare total bigint; completed bigint;
begin
  if auth.uid() is null or not public.has_role(auth.uid(),'admin'::public.app_role) then raise insufficient_privilege; end if;
  select count(*) into total from public.profiles;
  select count(*) into completed from public.user_intake;
  return jsonb_build_object('total',total,'completed',completed,'pending',greatest(0,total-completed),
    'with_phone',(select count(*) from public.user_intake where phone is not null),
    'with_telegram',(select count(*) from public.user_intake where telegram_username is not null),
    'without_telegram_username',(select count(*) from public.user_intake where no_telegram_username),
    'ages',coalesce((select jsonb_agg(x) from(select age_range as key,count(*) as n from public.user_intake group by age_range)x),'[]'::jsonb),
    'sources',coalesce((select jsonb_agg(x) from(select discovery_source as key,count(*) as n from public.user_intake group by discovery_source)x),'[]'::jsonb));
end; $$;
revoke all on function public.admin_intake_stats() from public,anon,authenticated;
grant execute on function public.admin_intake_stats() to authenticated;

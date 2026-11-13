-- The intro survey now requires a phone number (the age range and "how did you find us" were already required).
-- Only the Telegram username stays optional. Everything else is unchanged.
create or replace function public.complete_user_intake(_phone text, _telegram_username text, _no_telegram_username boolean, _age_range text, _discovery_source text)
 returns jsonb
 language plpgsql
 security definer
 set search_path to ''
as $function$
declare u uuid:=auth.uid(); p text; tg text; r public.user_intake%rowtype;
begin
  if u is null then raise insufficient_privilege; end if;
  p:=nullif(regexp_replace(coalesce(_phone,''),'[\s()-]','','g'),'');
  tg:=nullif(regexp_replace(btrim(coalesce(_telegram_username,'')),'^@',''),'');
  if p is null then raise exception 'phone_required'; end if;
  if (p !~ '^\+[1-9][0-9]{7,14}$' or (p ~ '^\+998' and p !~ '^\+998[0-9]{9}$')) then raise exception 'invalid_phone'; end if;
  if tg is not null and tg !~ '^[A-Za-z0-9_]{5,32}$' then raise exception 'invalid_telegram_username'; end if;
  if coalesce(_no_telegram_username,false) then tg:=null; end if;
  if _age_range is null or _age_range not in ('under16','16_18','19_24','25_34','35plus') then raise exception 'invalid_age_range'; end if;
  if _discovery_source is null or _discovery_source not in ('search','telegram','instagram','friend','other') then raise exception 'invalid_discovery_source'; end if;
  insert into public.user_intake(user_id,phone,telegram_username,no_telegram_username,age_range,discovery_source)
    values(u,p,tg,coalesce(_no_telegram_username,false),_age_range,_discovery_source)
    on conflict(user_id) do nothing returning * into r;
  if found then
    update public.profiles set phone=p where user_id=u;
  else
    select * into r from public.user_intake where user_id=u;
  end if;
  return to_jsonb(r);
end; $function$;

-- Flood protection for the Telegram bot: repeated bursts of button presses block the sender for a growing time.
alter table public.telegram_accounts
  add column if not exists flood_until timestamptz,
  add column if not exists flood_strikes int not null default 0,
  add column if not exists flood_window_start timestamptz,
  add column if not exists flood_level int not null default 0;

-- One strike = one burst the bot had to drop. 3 strikes within 10 minutes block the sender:
-- 10 min, 30 min, 2 h, 8 h, then 24 h; the level resets after a day without a block.
create or replace function public.internal_bot_flood_strike(_tg bigint)
returns jsonb language plpgsql volatile security definer set search_path=public as $$
declare a public.telegram_accounts%rowtype; strikes int; lvl int; minutes int; until_ts timestamptz;
begin
  select * into a from public.telegram_accounts where telegram_id = _tg for update;
  if not found then return jsonb_build_object('blocked_until', null); end if;
  if a.flood_until is not null and a.flood_until > now() then
    return jsonb_build_object('blocked_until', a.flood_until, 'level', a.flood_level, 'already', true);
  end if;
  lvl := case when a.flood_until is not null and a.flood_until < now() - interval '24 hours' then 0 else a.flood_level end;
  strikes := case when a.flood_window_start is null or a.flood_window_start < now() - interval '10 minutes' then 1 else a.flood_strikes + 1 end;
  if strikes >= 3 then
    lvl := least(lvl + 1, 5);
    minutes := case lvl when 1 then 10 when 2 then 30 when 3 then 120 when 4 then 480 else 1440 end;
    until_ts := now() + make_interval(mins => minutes);
    update public.telegram_accounts set flood_until = until_ts, flood_level = lvl, flood_strikes = 0, flood_window_start = null where telegram_id = _tg;
    return jsonb_build_object('blocked_until', until_ts, 'level', lvl, 'minutes', minutes);
  end if;
  update public.telegram_accounts set flood_strikes = strikes, flood_level = lvl,
    flood_window_start = case when strikes = 1 then now() else coalesce(a.flood_window_start, now()) end where telegram_id = _tg;
  return jsonb_build_object('blocked_until', null, 'strikes', strikes);
end; $$;
revoke all on function public.internal_bot_flood_strike(bigint) from public, anon, authenticated;
grant execute on function public.internal_bot_flood_strike(bigint) to service_role;

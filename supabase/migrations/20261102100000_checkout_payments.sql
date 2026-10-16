-- Online payments through Checkout.uz (Click and Payme).
-- The edge functions create an invoice, Checkout calls our webhook, the webhook re-checks the invoice with
-- Checkout and only then activates the plan. This file holds the ledger, the server-side price and the activation.

-- ============================================================
-- Settings: while testing, every plan can be charged one flat (minimum) amount.
-- ============================================================
create table if not exists public.payment_settings (
  id boolean primary key default true check (id),
  -- When set (Checkout minimum is 1 000), every plan and period costs exactly this much. NULL = real prices.
  test_price_uzs int check (test_price_uzs is null or test_price_uzs between 1000 and 10000000),
  updated_at timestamptz not null default now()
);
insert into public.payment_settings(id) values (true) on conflict (id) do nothing;
alter table public.payment_settings enable row level security;
drop policy if exists payment_settings_read on public.payment_settings;
create policy payment_settings_read on public.payment_settings for select to anon, authenticated using (true);
drop policy if exists payment_settings_admin_update on public.payment_settings;
create policy payment_settings_admin_update on public.payment_settings for update to authenticated
  using (public.has_role(auth.uid(), 'admin'::app_role)) with check (public.has_role(auth.uid(), 'admin'::app_role));
grant select on public.payment_settings to anon, authenticated;

-- ============================================================
-- Ledger: one row per invoice.
-- ============================================================
create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan text not null check (plan in ('go', 'plus')),
  months int not null check (months in (1, 3, 6)),
  days int not null check (days between 1 and 366),
  amount_uzs int not null check (amount_uzs between 1000 and 10000000),
  status text not null default 'pending' check (status in ('pending', 'paid', 'expired', 'failed')),
  provider text not null default 'checkout',
  method text,
  checkout_id bigint unique,
  checkout_uuid text unique,
  checkout_url text,
  note text,
  raw jsonb,
  created_at timestamptz not null default now(),
  paid_at timestamptz
);
create index if not exists payments_user_idx on public.payments(user_id, created_at desc);
create index if not exists payments_pending_idx on public.payments(created_at) where status = 'pending';
alter table public.payments enable row level security;
drop policy if exists payments_read_own on public.payments;
create policy payments_read_own on public.payments for select to authenticated using (auth.uid() = user_id);
drop policy if exists payments_admin_read on public.payments;
create policy payments_admin_read on public.payments for select to authenticated using (public.has_role(auth.uid(), 'admin'::app_role));
revoke all on public.payments from anon;
revoke insert, update, delete on public.payments from authenticated;

-- ============================================================
-- Price: always computed on the server. 1 month = list price, 3 months = -5%, 6 months = -10%.
-- ============================================================
create or replace function public.internal_pay_price(_plan text, _months int)
returns int language plpgsql stable security definer set search_path = public as $$
declare base numeric; flat int; factor numeric;
begin
  if _plan not in ('go', 'plus') then raise exception 'Unsupported plan'; end if;
  factor := case _months when 1 then 1 when 3 then 2.85 when 6 then 5.4 else null end;
  if factor is null then raise exception 'Unsupported period'; end if;
  select test_price_uzs into flat from public.payment_settings where id;
  if flat is not null then return flat; end if;
  select nullif(regexp_replace(coalesce(price_uzs, ''), '\D', '', 'g'), '')::numeric into base
    from public.subscription_plans where slug = _plan and is_active = true;
  if base is null or base <= 0 then raise exception 'Plan price unavailable'; end if;
  return round(base * factor)::int;
end; $$;

-- ============================================================
-- Activation: marks the invoice paid and starts or extends the plan, once.
-- ============================================================
create or replace function public.internal_activate_payment(_id uuid, _method text default null, _raw jsonb default null)
returns jsonb language plpgsql security definer set search_path = public as $$
declare pay public.payments%rowtype; res jsonb;
begin
  select * into pay from public.payments where id = _id for update;
  if not found then raise exception 'Payment not found'; end if;
  if pay.status = 'paid' then return jsonb_build_object('already', true); end if;
  -- Starts the plan, or adds the days when the same plan is still active. Also queues the Telegram message and,
  -- through the subscription history trigger, settles a referral reward.
  res := public.telegram_admin_set_plan(pay.user_id, pay.plan, pay.days);
  update public.payments set status = 'paid', paid_at = now(), method = coalesce(_method, method),
    raw = coalesce(_raw, raw), note = null where id = _id;
  return coalesce(res, '{}'::jsonb) || jsonb_build_object('already', false);
end; $$;

-- Invoices still waiting for a result. Anything older than two hours has expired at Checkout (they last one hour).
create or replace function public.internal_payments_sweep()
returns jsonb language plpgsql security definer set search_path = public as $$
begin
  update public.payments set status = 'expired' where status = 'pending' and created_at < now() - interval '2 hours';
  return coalesce((select jsonb_agg(jsonb_build_object('id', p.id, 'checkout_id', p.checkout_id) order by p.created_at)
    from (select id, checkout_id, created_at from public.payments
          where status = 'pending' and checkout_id is not null order by created_at limit 40) p), '[]'::jsonb);
end; $$;

do $$
declare f text;
begin
  foreach f in array array['public.internal_pay_price(text,int)', 'public.internal_activate_payment(uuid,text,jsonb)',
                           'public.internal_payments_sweep()'] loop
    execute format('revoke all on function %s from public, anon, authenticated', f);
    execute format('grant execute on function %s to service_role', f);
  end loop;
end $$;

-- ============================================================
-- Safety net: every 5 minutes the checkout-status function re-checks invoices whose webhook never arrived.
-- The URL and key live in telegram_settings (set once, not stored in the repository).
-- ============================================================
create or replace function public.checkout_reconcile_kick()
returns void language plpgsql security definer set search_path = public as $$
declare u text; k text;
begin
  select value into u from public.telegram_settings where key = 'checkout_reconcile_url';
  select value into k from public.telegram_settings where key = 'checkout_reconcile_key';
  if coalesce(u, '') = '' or coalesce(k, '') = '' then return; end if;
  if not exists (select 1 from public.payments where status = 'pending' and created_at > now() - interval '2 hours') then return; end if;
  begin
    perform net.http_post(url := u, body := '{"reconcile":true}'::jsonb,
      headers := jsonb_build_object('Content-Type', 'application/json', 'Authorization', 'Bearer ' || k),
      timeout_milliseconds := 5000);
  exception when others then
    raise warning 'checkout_reconcile_kick skipped: %', sqlerrm;
  end;
end; $$;
revoke all on function public.checkout_reconcile_kick() from public, anon, authenticated;
grant execute on function public.checkout_reconcile_kick() to service_role;

do $$
begin
  if exists (select 1 from pg_extension where extname = 'pg_cron') then
    perform cron.unschedule(jobid) from cron.job where jobname = 'checkout-reconcile';
    perform cron.schedule('checkout-reconcile', '*/5 * * * *', 'select public.checkout_reconcile_kick()');
  end if;
exception when others then
  raise warning 'checkout-reconcile cron skipped: %', sqlerrm;
end $$;

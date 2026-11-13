-- Online payment (Checkout.uz) is switched off at the owner's request: plans are paid for in the Telegram chat.
-- create-checkout refuses to create invoices unless this setting is 'true'. Invoices already created can still be settled
-- (checkout-status and checkout-webhook are unchanged).
insert into public.app_settings (key, value) values ('online_payments_enabled', 'false')
  on conflict (key) do update set value = 'false';

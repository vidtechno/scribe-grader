# Online payments (Checkout.uz: Click and Payme)

Plans: Learn (`go`) and IELTS (`plus`). Periods: 1 month (30 days), 3 months (90 days, -5%), 6 months (180 days, -10%).
The price is always computed on the server (`internal_pay_price`): list price from `subscription_plans.price_uzs` times 1, 2.85 or 5.4.

## Flow
1. The pricing cards (`PlanCards`) open `PayDialog`; the payer picks Click or Payme.
2. `create-checkout` (signed-in users only) computes the price, inserts a `payments` row and calls Checkout `create_payment`
   with `return_url` = `/dashboard?payment=<id>` and `webhook_url` = `checkout-webhook?token=<secret>`. It returns the Click/Payme link.
3. Checkout calls `checkout-webhook`. The call is **not signed**, so the function only checks the secret token and then
   re-checks the invoice with Checkout (`status_payment`): it must be `paid` for exactly the amount we asked for.
   Then `internal_activate_payment` starts or extends the plan once (`telegram_admin_set_plan`: Telegram message and referral reward follow).
4. Back on the dashboard `PaymentReturn` polls `checkout-status` until the plan is on.
5. Safety net: `pg_cron` runs `checkout_reconcile_kick()` every 5 minutes; it calls `checkout-status` with `{reconcile:true}`,
   which re-checks every pending invoice. Checkout does not retry webhooks, so this matters.

## Secrets and settings
- `CHECKOUT_API_KEY` (Supabase Edge Function secret). The webhook token is derived from it (HMAC), nothing else to configure.
- Do **not** enable IP whitelist on the Checkout cash desk (edge function IPs change).
- Reconcile URL/key live in `telegram_settings` (`checkout_reconcile_url`, `checkout_reconcile_key`); not stored in the repository.
- Test mode: `update payment_settings set test_price_uzs = 1000;` charges every plan 1 000 so'm (Checkout minimum).
  Real prices: `update payment_settings set test_price_uzs = null;`

## Rules worth remembering
- Limits at Checkout: 1 000 to 10 000 000 so'm per invoice, an invoice lives one hour.
- No card-on-file: the plan does not renew by itself; the payer pays again before it ends.
- An active IELTS plan cannot be replaced by a Learn payment (409). Learn to IELTS starts IELTS from now for the paid days.
- Card numbers never touch our servers (`pay_via_card` is not used).
- Deploying functions: `create-checkout`, `checkout-status` (JWT on), `checkout-webhook` (JWT off, see `supabase/config.toml`).

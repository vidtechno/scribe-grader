// Runs against isolated PostgreSQL WASM only; never connects to production.
import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import assert from 'node:assert/strict';
const { PGlite } = await import(pathToFileURL(process.env.WRITING_PGLITE_MODULE).href);
const db = new PGlite();
try {
  await db.exec(`
    create schema auth;
    create function auth.uid() returns uuid language sql as $$select '11111111-1111-4111-8111-111111111111'::uuid$$;
    create type public.app_role as enum ('admin','user');
    create function has_role(uuid, app_role) returns boolean language sql as $$select coalesce(current_setting('test.admin',true),'false') = 'true'$$;
    create function learning_today() returns date language sql as $$select current_date$$;
    create table auth.users(id uuid, created_at timestamptz, last_sign_in_at timestamptz, raw_app_meta_data jsonb);
    create table subscriptions(plan_type text, expires_at timestamptz, learn_trial_ends_at timestamptz);
    create table subscription_plans(slug text primary key, price_uzs text, price numeric, is_active boolean);
    insert into subscription_plans values ('go','49 000',4,true),('plus','129 000',13,true),('pro','49 000',5,false);
    create table payment_settings(id boolean, test_price_uzs int);
    insert into payment_settings values (true,null);
    create table payments(amount_uzs int);
    insert into payments values (49000);
    create table subscription_history(user_id uuid, plan_type text, price_uzs text);
    insert into subscription_history values (null,'go','49 000');
    create table learning_daily_activity(user_id uuid,day date,xp int,lessons int);
    create table learning_profiles(user_id uuid,streak_current int);
    create table learning_lesson_progress(user_id uuid,completed_at timestamptz);
    create table essays(status text,created_at timestamptz);
    create table speaking_attempts(status text,created_at timestamptz);
    create table mock_tests(status text,created_at timestamptz);
    create table referral_invites(purchased_at timestamptz,rewarded_at timestamptz);
    create table referral_withdrawals(status text,amount int);
    create table telegram_accounts(user_id uuid,is_blocked boolean);
    create table telegram_outbox(status text,created_at timestamptz);
    insert into subscriptions values ('go',now()+interval '20 days',null),('plus',null,null),('go',now()-interval '1 day',null),('free',null,now()+interval '7 days');
  `);
  const checkout = await readFile(new URL('../supabase/migrations/20261102100000_checkout_payments.sql', import.meta.url), 'utf8');
  const start = checkout.indexOf('create or replace function public.internal_pay_price(');
  await db.exec(checkout.slice(start, checkout.indexOf('end; $$;', start) + 'end; $$;'.length));
  const migration = await readFile(new URL('../supabase/migrations/20261110064647_update_learn_ielts_uzs_prices.sql', import.meta.url), 'utf8');
  await db.exec(migration);
  for (const [plan, values] of [['go',[99000,282150,534600]],['plus',[149000,424650,804600]]]) {
    for (const [i, months] of [1,3,6].entries()) {
      assert.equal((await db.query('select internal_pay_price($1,$2) n',[plan,months])).rows[0].n, values[i]);
    }
  }
  await assert.rejects(db.query("select internal_pay_price('go',2)"));
  await assert.rejects(db.query("select internal_pay_price('legacy',1)"));
  await assert.rejects(db.query('select admin_overview()'), /admin_only/);
  await db.exec("select set_config('test.admin','true',false)");
  const estimate = async () => (await db.query('select admin_overview() r')).rows[0].r.plans.monthly_uzs;
  assert.equal(await estimate(),248000); // Active Learn + IELTS; expired and free excluded.
  await db.exec("update subscription_plans set price_uzs='100 000' where slug='go'");
  assert.equal(await estimate(),249000); // The estimate follows the catalogue, no hardcoded prices.
  await db.exec(migration); // Safe to reapply.
  assert.equal(await estimate(),248000);
  assert.equal((await db.query('select amount_uzs from payments')).rows[0].amount_uzs,49000);
  assert.equal((await db.query('select price_uzs from subscription_history')).rows[0].price_uzs,'49 000');
  assert.deepEqual((await db.query("select price from subscription_plans where slug in ('go','plus') order by slug")).rows.map(r=>Number(r.price)),[4,13]);
  assert.equal((await db.query("select price_uzs from subscription_plans where slug='pro'")).rows[0].price_uzs,'49 000');
  console.log('Pricing SQL passed: six checkout totals, dynamic admin estimate, admin guard, repeatability and unchanged historical amounts/USD/expiry.');
} finally { await db.close(); }

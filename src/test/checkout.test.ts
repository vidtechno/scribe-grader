import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { amountsMatch, isMethod, isPaidPlan, isPeriod, parseWebhook, payerUrl, PERIOD_DAYS, safeEqual, webhookToken } from '../../supabase/functions/_shared/checkout-core';
import { BILLING_DISCOUNT, BILLING_MONTHS } from '@/lib/plans';

const read = (p: string) => readFileSync(resolve(process.cwd(), p), 'utf8');

describe('Checkout.uz helpers', () => {
  it('accepts only the plans, periods and methods we sell', () => {
    expect([isPaidPlan('go'), isPaidPlan('plus'), isPaidPlan('free'), isPaidPlan(undefined)]).toEqual([true, true, false, false]);
    expect([isPeriod(1), isPeriod(3), isPeriod(6), isPeriod(12), isPeriod('3')]).toEqual([true, true, true, false, false]);
    expect([isMethod('click'), isMethod('payme'), isMethod('card')]).toEqual([true, true, false]);
    expect(PERIOD_DAYS).toEqual({ 1: 30, 3: 90, 6: 180 });
  });

  it('derives a stable secret webhook token from the API key', async () => {
    const a = await webhookToken('key-one');
    expect(a).toMatch(/^[0-9a-f]{64}$/);
    expect(await webhookToken('key-one')).toBe(a);
    expect(await webhookToken('key-two')).not.toBe(a);
    expect(safeEqual(a, a)).toBe(true);
    expect(safeEqual(a, a.slice(0, -1) + (a.endsWith('0') ? '1' : '0'))).toBe(false);
    expect(safeEqual(a, '')).toBe(false);
  });

  it('matches the paid amount to the invoice amount', () => {
    expect(amountsMatch(49000, 49000)).toBe(true);
    expect(amountsMatch('49000', 49000)).toBe(true);
    expect(amountsMatch(49000.4, 49000)).toBe(true);
    expect(amountsMatch(1000, 49000)).toBe(false);
    expect(amountsMatch(undefined, 49000)).toBe(false);
    expect(amountsMatch('abc', 49000)).toBe(false);
  });

  it('reads the Checkout webhook and ignores anything else', () => {
    expect(parseWebhook({ event: 'payment_confirmed', payment_system: 'click', data: { order_id: 152, amount: 50000, status: 'paid' } }))
      .toEqual({ orderId: 152, system: 'click' });
    expect(parseWebhook({ payment_system: 'paynet', data: { order_id: '7' } })).toEqual({ orderId: 7, system: 'paynet' });
    expect(parseWebhook({ data: {} })).toBeNull();
    expect(parseWebhook({ data: { order_id: -1 } })).toBeNull();
    expect(parseWebhook('x')).toBeNull();
    expect(parseWebhook(null)).toBeNull();
  });

  it('sends the payer to the chosen method when Checkout offers it', () => {
    const inv = { _url: 'https://checkout.uz/pay/u1', _pay_via: { click: 'https://checkout.uz/pay/u1/click', payme: 'https://checkout.uz/pay/u1/payme' } };
    expect(payerUrl(inv, 'payme')).toBe('https://checkout.uz/pay/u1/payme');
    expect(payerUrl(inv, null)).toBe('https://checkout.uz/pay/u1');
    expect(payerUrl({ _url: 'https://checkout.uz/pay/u1', _pay_via: {} }, 'click')).toBe('https://checkout.uz/pay/u1');
    expect(payerUrl({ _url: 'javascript:alert(1)' }, null)).toBeNull();
  });
});

describe('payment database migration', () => {
  const sql = read('supabase/migrations/20261102100000_checkout_payments.sql');

  it('uses the same period factors as the pricing cards', () => {
    expect(sql).toContain('when 1 then 1 when 3 then 2.85 when 6 then 5.4');
    for (const b of ['month', 'quarter', 'half-year'] as const) {
      const factor = Math.round(BILLING_MONTHS[b] * (1 - BILLING_DISCOUNT[b]) * 100) / 100;
      expect(sql).toContain(`${factor} `);
    }
  });

  it('keeps activation and prices away from signed-in users', () => {
    for (const fn of ['internal_pay_price(text,int)', 'internal_activate_payment(uuid,text,jsonb)', 'internal_payments_sweep()']) {
      expect(sql).toContain(`public.${fn}`);
    }
    expect(sql).toContain('revoke all on function %s from public, anon, authenticated');
    expect(sql).toContain('revoke insert, update, delete on public.payments from authenticated');
  });

  it('activates a payment once', () => {
    expect(sql).toContain("if pay.status = 'paid' then return jsonb_build_object('already', true); end if;");
    expect(sql).toContain('for update');
  });

  it('lets only the webhook be called without a user session', () => {
    const toml = read('supabase/config.toml');
    expect(toml).toContain('[functions.checkout-webhook]\nverify_jwt = false');
    expect(toml).not.toContain('[functions.create-checkout]');
    expect(toml).not.toContain('[functions.checkout-status]');
  });
});

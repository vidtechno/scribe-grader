import { describe, expect, it } from 'vitest';
import { READING_TESTS, LISTENING_TESTS } from '@/features/ielts/registry';
import { billingLabel, FREE_PRACTICE_TESTS, getPlanEntitlement, planFeatures, PAID_PLAN_SLUGS, PLAN_ENTITLEMENTS, planPrice, planTotalUzs, visaLink } from './plans';

describe('unified subscription entitlements', () => {
  it('offers only Learn (go) and IELTS (plus) as paid plans', () => {
    expect(PAID_PLAN_SLUGS).toEqual(['go', 'plus']);
  });

  it('defines the exact Free allowances for personal usage', () => {
    expect(PLAN_ENTITLEMENTS.free).toMatchObject({
      name: 'Free', priceUsd: '0', priceUzs: '0',
      personal: { writing: 1, speaking: 1, mockTests: 0 },
      practice: { reading: 3, listening: 3 },
    });
  });

  it('defines Learn: 49 000 so\'m, lessons only', () => {
    expect(PLAN_ENTITLEMENTS.go).toMatchObject({
      name: 'Learn', priceUsd: '4.99', priceUzs: '49 000',
      personal: { writing: 0, speaking: 0, mockTests: 0 },
    });
  });

  it('defines IELTS: 129 000 so\'m, 50 Writing, 30 Speaking and 6 mock tests a month', () => {
    expect(PLAN_ENTITLEMENTS.plus).toMatchObject({
      name: 'IELTS', priceUsd: '11.99', priceUzs: '129 000',
      personal: { writing: 50, speaking: 30, mockTests: 6 },
      practice: { reading: null, listening: null },
    });
    expect(planFeatures('plus', 'en').join(' ')).toMatch(/Reading: UNLIMITED.*Listening: UNLIMITED/s);
    expect(planFeatures('plus', 'uz').join(' ')).toMatch(/Reading: CHEKSIZ.*Listening: CHEKSIZ/s);
  });

  it('never grants paid owner quotas to unknown or legacy client plan names', () => {
    expect(getPlanEntitlement('pro_legacy')).toBe(PLAN_ENTITLEMENTS.free);
    expect(getPlanEntitlement('pro')).toBe(PLAN_ENTITLEMENTS.free);
    expect(getPlanEntitlement(undefined)).toBe(PLAN_ENTITLEMENTS.free);
  });

  it('opens exactly the promised number of Reading and Listening tests for free', () => {
    expect(READING_TESTS.filter((t) => t.free)).toHaveLength(FREE_PRACTICE_TESTS);
    expect(LISTENING_TESTS.filter((t) => t.free)).toHaveLength(FREE_PRACTICE_TESTS);
    expect(PLAN_ENTITLEMENTS.free.practice).toEqual({ reading: FREE_PRACTICE_TESTS, listening: FREE_PRACTICE_TESTS });
  });

  it('gives 10% off for 6 months paid in advance', () => {
    expect(planPrice('go', 'month')).toMatchObject({ usd: '4.99', uzs: '49 000' });
    expect(planPrice('go', 'half-year')).toMatchObject({ months: 6, usd: '26.95', uzs: '264 600', perMonthUzs: '44 100', saveUzs: '29 400' });
    expect(planPrice('plus', 'half-year')).toMatchObject({ usd: '64.75', uzs: '696 600', perMonthUzs: '116 100' });
  });

  it('gives 5% off for 3 months paid in advance', () => {
    expect(planPrice('go', 'quarter')).toMatchObject({ months: 3, uzs: '139 650', perMonthUzs: '46 550', saveUzs: '7 350' });
    expect(planPrice('plus', 'quarter')).toMatchObject({ uzs: '367 650', saveUzs: '19 350' });
  });

  it('charges whole so\'m that match the displayed price', () => {
    expect(planTotalUzs('go', 'month')).toBe(49000);
    expect(planTotalUzs('go', 'quarter')).toBe(139650);
    expect(planTotalUzs('go', 'half-year')).toBe(264600);
    expect(planTotalUzs('plus', 'month')).toBe(129000);
    expect(planTotalUzs('plus', 'quarter')).toBe(367650);
    expect(planTotalUzs('plus', 'half-year')).toBe(696600);
  });

  it('shows the fixed dollar prices next to the so\'m prices', () => {
    expect(PLAN_ENTITLEMENTS.go.priceUsd).toBe('4.99');
    expect(PLAN_ENTITLEMENTS.plus.priceUsd).toBe('11.99');
    expect(planPrice('go', 'quarter')).toMatchObject({ usd: '14.22', uzs: '139 650' });
    expect(planPrice('plus', 'month')).toMatchObject({ usd: '11.99', uzs: '129 000' });
    expect(planPrice('plus', 'quarter').usd).toBe('34.17');
  });

  it('sends Visa payers to the Telegram chat with the plan, period, dollar price and account ID', () => {
    const link = visaLink('plus', 'half-year', 'AB12', 'uz');
    expect(link.startsWith('https://t.me/scorify_support?text=')).toBe(true);
    const text = decodeURIComponent(link.split('text=')[1]);
    expect(text).toContain('"IELTS"');
    expect(text).toContain('6 oy');
    expect(text).toContain('Visa');
    expect(text).toContain('$64.75');
    expect(text).toContain("696 600 so'm");
    expect(text).toContain('#AB12');
    const en = decodeURIComponent(visaLink('go', 'month', null, 'en').split('text=')[1]);
    expect(en).toContain('"Learn"');
    expect(en).toContain('1 month');
    expect(en).toContain('$4.99');
    expect(en).not.toContain('#');
  });

  it('labels billing periods in both languages', () => {
    expect(billingLabel('en', 'quarter')).toBe('3 months');
    expect(billingLabel('uz', 'half-year')).toBe('6 oy');
  });

  it('has a feature text for every plan in both languages', () => {
    for (const slug of ['free', 'go', 'plus']) {
      for (const lang of ['en', 'uz'] as const) {
        const list = planFeatures(slug, lang);
        expect(list.length).toBeGreaterThan(0);
        expect(list.every((f) => !f.startsWith('plans.') && !f.includes('{'))).toBe(true);
      }
    }
  });
});

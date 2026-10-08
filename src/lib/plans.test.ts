import { describe, expect, it } from 'vitest';
import { getPlanEntitlement, PAID_PLAN_SLUGS, PLAN_ENTITLEMENTS, planPrice, purchaseLink } from './plans';

describe('unified subscription entitlements', () => {
  it('offers only Learn (go) and IELTS (plus) as paid plans', () => {
    expect(PAID_PLAN_SLUGS).toEqual(['go', 'plus']);
  });

  it('defines the exact Free allowances for personal usage', () => {
    expect(PLAN_ENTITLEMENTS.free).toMatchObject({
      name: 'Free', priceUsd: '0', priceUzs: '0',
      personal: { writing: 3, speaking: 2, mockTests: 0 },
    });
  });

  it('defines Learn: 49 000 so\'m, lessons only', () => {
    expect(PLAN_ENTITLEMENTS.go).toMatchObject({
      name: 'Learn', priceUsd: '4', priceUzs: '49 000',
      personal: { writing: 0, speaking: 0, mockTests: 0 },
    });
  });

  it('defines IELTS: 129 000 so\'m, 50 Writing and 30 Speaking a month', () => {
    expect(PLAN_ENTITLEMENTS.plus).toMatchObject({
      name: 'IELTS', priceUsd: '13', priceUzs: '129 000',
      personal: { writing: 50, speaking: 30, mockTests: 3 },
    });
  });

  it('never grants paid owner quotas to unknown or legacy client plan names', () => {
    expect(getPlanEntitlement('pro_legacy')).toBe(PLAN_ENTITLEMENTS.free);
    expect(getPlanEntitlement('pro')).toBe(PLAN_ENTITLEMENTS.free);
    expect(getPlanEntitlement(undefined)).toBe(PLAN_ENTITLEMENTS.free);
  });

  it('gives 10% off for 6 months paid in advance', () => {
    expect(planPrice('go', 'month')).toMatchObject({ usd: '4', uzs: '49 000' });
    expect(planPrice('go', 'half-year')).toMatchObject({ months: 6, usd: '21.60', uzs: '264 600', perMonthUzs: '44 100', saveUzs: '29 400' });
    expect(planPrice('plus', 'half-year')).toMatchObject({ usd: '70.20', uzs: '696 600', perMonthUzs: '116 100' });
  });

  it('pre-fills the payment message with the plan, period and price', () => {
    const text = decodeURIComponent(purchaseLink('plus', 'half-year', 'AB12').split('text=')[1]);
    expect(text).toContain('"IELTS"');
    expect(text).toContain('6 oy (-10%)');
    expect(text).toContain("696 600 so'm");
    expect(text).toContain('#AB12');
  });
});

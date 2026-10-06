import { describe, expect, it } from 'vitest';
import { getPlanEntitlement, PAID_PLAN_SLUGS, PLAN_ENTITLEMENTS, planPrice, purchaseLink } from './plans';

describe('unified subscription entitlements', () => {
  it('offers only Go and Plus as paid plans', () => {
    expect(PAID_PLAN_SLUGS).toEqual(['go', 'plus']);
  });

  it('defines the exact Free allowances for personal usage', () => {
    expect(PLAN_ENTITLEMENTS.free).toMatchObject({
      name: 'Free', priceUsd: '0', priceUzs: '0',
      personal: { writing: 3, speaking: 2, mockTests: 0 },
    });
  });

  it('defines the exact Go allowances for personal usage', () => {
    expect(PLAN_ENTITLEMENTS.go).toMatchObject({
      name: 'Scorify Go', priceUsd: '9', priceUzs: '79 000',
      personal: { writing: 20, speaking: 15, mockTests: 3 },
    });
  });

  it('defines the exact Plus allowances for personal usage', () => {
    expect(PLAN_ENTITLEMENTS.plus).toMatchObject({
      name: 'Scorify Plus', priceUsd: '13', priceUzs: '129 000',
      personal: { writing: 50, speaking: 40, mockTests: 8 },
    });
  });

  it('never grants paid owner quotas to unknown or legacy client plan names', () => {
    expect(getPlanEntitlement('pro_legacy')).toBe(PLAN_ENTITLEMENTS.free);
    expect(getPlanEntitlement('pro')).toBe(PLAN_ENTITLEMENTS.free);
    expect(getPlanEntitlement(undefined)).toBe(PLAN_ENTITLEMENTS.free);
  });

  it('gives 10% off for 6 months paid in advance', () => {
    expect(planPrice('go', 'month')).toMatchObject({ usd: '9', uzs: '79 000' });
    expect(planPrice('go', 'half-year')).toMatchObject({ months: 6, usd: '48.60', uzs: '426 600', perMonthUzs: '71 100', saveUzs: '47 400' });
    expect(planPrice('plus', 'half-year')).toMatchObject({ usd: '70.20', uzs: '696 600', perMonthUzs: '116 100' });
  });

  it('pre-fills the payment message with the plan, period and price', () => {
    const text = decodeURIComponent(purchaseLink('plus', 'half-year', 'AB12').split('text=')[1]);
    expect(text).toContain('"Scorify Plus"');
    expect(text).toContain('6 oy (-10%)');
    expect(text).toContain("696 600 so'm");
    expect(text).toContain('#AB12');
  });
});

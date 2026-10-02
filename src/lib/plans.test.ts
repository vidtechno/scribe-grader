import { describe, expect, it } from 'vitest';
import { getPlanEntitlement, PAID_PLAN_SLUGS, PLAN_ENTITLEMENTS } from './plans';

describe('unified subscription entitlements', () => {
  it('offers only Go and Plus as paid plans', () => {
    expect(PAID_PLAN_SLUGS).toEqual(['go', 'plus']);
  });

  it('defines the exact Go allowances for personal usage', () => {
    expect(PLAN_ENTITLEMENTS.go).toMatchObject({
      name: 'Scorify Go', priceUzs: '49 000',
      personal: { writing: 20, speaking: 15, mockTests: 3 },
    });
  });

  it('defines the exact Plus allowances for personal usage', () => {
    expect(PLAN_ENTITLEMENTS.plus).toMatchObject({
      name: 'Scorify Plus', priceUzs: '99 000',
      personal: { writing: 50, speaking: 40, mockTests: 8 },
    });
  });

  it('never grants paid owner quotas to unknown or legacy client plan names', () => {
    expect(getPlanEntitlement('pro_legacy')).toBe(PLAN_ENTITLEMENTS.free);
    expect(getPlanEntitlement('pro')).toBe(PLAN_ENTITLEMENTS.free);
    expect(getPlanEntitlement(undefined)).toBe(PLAN_ENTITLEMENTS.free);
  });
});

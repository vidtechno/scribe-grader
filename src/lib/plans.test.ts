import { describe, expect, it } from 'vitest';
import { READING_TESTS, LISTENING_TESTS } from '@/features/ielts/registry';
import { translate } from '@/i18n';
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

  it('defines Learn: 99 000 so\'m, lessons only', () => {
    expect(PLAN_ENTITLEMENTS.go).toMatchObject({
      name: 'Learn', priceUsd: '9', priceUzs: '99 000',
      personal: { writing: 0, speaking: 0, mockTests: 0 },
    });
  });

  it('defines IELTS: 149 000 so\'m, 50 Writing, 30 Speaking and 6 mock tests a month', () => {
    expect(PLAN_ENTITLEMENTS.plus).toMatchObject({
      name: 'IELTS', priceUsd: '14', priceUzs: '149 000',
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
    expect(planPrice('go', 'month')).toMatchObject({ usd: '9', uzs: '99 000' });
    expect(planPrice('go', 'half-year')).toMatchObject({ months: 6, usd: '48.60', uzs: '534 600', perMonthUzs: '89 100', saveUzs: '59 400' });
    expect(planPrice('plus', 'half-year')).toMatchObject({ usd: '75.60', uzs: '804 600', perMonthUzs: '134 100' });
  });

  it('gives 5% off for 3 months paid in advance', () => {
    expect(planPrice('go', 'quarter')).toMatchObject({ months: 3, uzs: '282 150', perMonthUzs: '94 050', saveUzs: '14 850' });
    expect(planPrice('plus', 'quarter')).toMatchObject({ uzs: '424 650', saveUzs: '22 350' });
  });

  it('charges whole so\'m that match the displayed price', () => {
    expect(planTotalUzs('go', 'month')).toBe(99000);
    expect(planTotalUzs('go', 'quarter')).toBe(282150);
    expect(planTotalUzs('go', 'half-year')).toBe(534600);
    expect(planTotalUzs('plus', 'month')).toBe(149000);
    expect(planTotalUzs('plus', 'quarter')).toBe(424650);
    expect(planTotalUzs('plus', 'half-year')).toBe(804600);
  });

  it('keeps landing FAQs, dashboard and paywalls consistent in both languages', () => {
    for (const lang of ['en', 'uz'] as const) {
      for (const key of ['landing.faq.5.a', 'dash.learnPlanInfo', 'learn.paywall.f4']) {
        const copy = translate(lang, key).replace(/[ ,]/g, '');
        expect(copy).toContain('99000');
        expect(copy).toContain('149000');
        expect(copy).not.toMatch(/(?<!\d)(?:49000|129000)(?!\d)/);
      }
      expect(translate(lang, 'landing.paths.english.note').replace(/[ ,]/g, '')).toContain('3300');
    }
  });

  it('shows the fixed dollar prices next to the so\'m prices', () => {
    expect(PLAN_ENTITLEMENTS.go.priceUsd).toBe('9');
    expect(PLAN_ENTITLEMENTS.plus.priceUsd).toBe('14');
    expect(planPrice('go', 'quarter')).toMatchObject({ usd: '25.65', uzs: '282 150' });
    expect(planPrice('plus', 'month')).toMatchObject({ usd: '14', uzs: '149 000' });
    expect(planPrice('plus', 'quarter').usd).toBe('39.90');
  });

  it('sends Visa payers to the Telegram chat with the plan, period, dollar price and account ID', () => {
    const link = visaLink('plus', 'half-year', 'AB12', 'uz');
    expect(link.startsWith('https://t.me/scorify_support?text=')).toBe(true);
    const text = decodeURIComponent(link.split('text=')[1]);
    expect(text).toContain('"IELTS"');
    expect(text).toContain('6 oy');
    expect(text).toContain('Visa');
    expect(text).toContain('$75.60');
    expect(text).toContain("804 600 so'm");
    expect(text).toContain('#AB12');
    const en = decodeURIComponent(visaLink('go', 'month', null, 'en').split('text=')[1]);
    expect(en).toContain('"Learn"');
    expect(en).toContain('1 month');
    expect(en).toContain('$9');
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

describe('paying through the Telegram chat while online payment is off', () => {
  it('is switched off, and the chat message names the plan, period, price and account', async () => {
    const { ONLINE_PAYMENTS, telegramPayLink, SUPPORT_CHAT } = await import('./plans');
    expect(ONLINE_PAYMENTS).toBe(false);
    const url = telegramPayLink('go', 'quarter', '312700', 'uz');
    expect(url.startsWith(`${SUPPORT_CHAT}?text=`)).toBe(true);
    const text = decodeURIComponent(url.split('?text=')[1]);
    expect(text).toContain('Learn');
    expect(text).toContain('ID: #312700');
    expect(text).toMatch(/\d/);
    expect(decodeURIComponent(telegramPayLink('plus', 'month', null, 'en').split('?text=')[1])).toContain('IELTS');
  });
});


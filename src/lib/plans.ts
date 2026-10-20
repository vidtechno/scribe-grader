import { translate, type Lang } from '@/i18n';

export type PlanSlug = 'free' | 'go' | 'plus';

type PlanFeature = { key: string; vars?: Record<string, number> };

export type PlanEntitlement = {
  slug: PlanSlug;
  name: string;
  /** Price in US dollars: shown next to the so'm price and charged to Visa payers (arranged in Telegram, there is no Visa autopay). */
  priceUsd: string;
  /** Main price, in so'm: the amount paid online with Click or Payme. */
  priceUzs: string;
  personal: { writing: number; speaking: number; mockTests: number };
  /** IELTS Reading and Listening practice tests that are open: a number of tests, or null for every test, unlimited. */
  practice: { reading: number | null; listening: number | null };
  /** What the plan includes, shown on pricing cards: message keys (see `planFeatures`). */
  features: PlanFeature[];
};

/** Reading and Listening tests 1 to 3 are open to everyone (see `free` in the IELTS registry). */
export const FREE_PRACTICE_TESTS = 3;

/**
 * Internal slugs stay `go` and `plus` (referrals, the admin panel, the bot and the database use them);
 * what people see is Learn (`go`) and IELTS (`plus`).
 */
export const PLAN_ENTITLEMENTS: Record<PlanSlug, PlanEntitlement> = {
  free: {
    slug: 'free', name: 'Free', priceUsd: '0', priceUzs: '0',
    personal: { writing: 1, speaking: 1, mockTests: 0 },
    practice: { reading: FREE_PRACTICE_TESTS, listening: FREE_PRACTICE_TESTS },
    features: [
      { key: 'plans.free.f1', vars: { days: 7 } },
      { key: 'plans.free.f2' },
      { key: 'plans.free.f3' },
      { key: 'plans.free.f4', vars: { n: FREE_PRACTICE_TESTS } },
      { key: 'plans.free.f5', vars: { n: FREE_PRACTICE_TESTS } },
    ],
  },
  go: {
    slug: 'go', name: 'Learn', priceUsd: '4.99', priceUzs: '49 000',
    personal: { writing: 0, speaking: 0, mockTests: 0 },
    practice: { reading: FREE_PRACTICE_TESTS, listening: FREE_PRACTICE_TESTS },
    features: [
      { key: 'plans.go.f1' },
      { key: 'plans.go.f2' },
      { key: 'plans.go.f3' },
      { key: 'plans.go.f4' },
      { key: 'plans.go.f5' },
      { key: 'plans.go.f6' },
      { key: 'plans.go.f7' },
      { key: 'plans.go.f8', vars: { n: FREE_PRACTICE_TESTS } },
    ],
  },
  plus: {
    slug: 'plus', name: 'IELTS', priceUsd: '11.99', priceUzs: '129 000',
    personal: { writing: 50, speaking: 30, mockTests: 6 },
    practice: { reading: null, listening: null },
    features: [
      { key: 'plans.plus.f1' },
      { key: 'plans.plus.f2' },
      { key: 'plans.plus.f3' },
      { key: 'plans.plus.f4' },
      { key: 'plans.plus.f5' },
      { key: 'plans.plus.f6' },
      { key: 'plans.plus.f7' },
    ],
  },
};

/** Every new account starts with this free Learn trial (and the Free Writing/Speaking allowance, separate from IELTS limits). */
export const LEARN_TRIAL_DAYS = 7;

export const PAID_PLAN_SLUGS: PlanSlug[] = ['go', 'plus'];

export function normalizePlanSlug(value?: string | null): PlanSlug {
  return value === 'plus' ? 'plus' : value === 'go' ? 'go' : 'free';
}

export function getPlanEntitlement(value?: string | null) {
  return PLAN_ENTITLEMENTS[normalizePlanSlug(value)];
}

export type Billing = 'month' | 'quarter' | 'half-year';
/** Paying 3 months in advance gives 5% off, 6 months gives 10% off. */
export const QUARTER_DISCOUNT = 0.05;
export const HALF_YEAR_DISCOUNT = 0.1;
export const BILLING_MONTHS: Record<Billing, 1 | 3 | 6> = { month: 1, quarter: 3, 'half-year': 6 };
export const BILLING_DISCOUNT: Record<Billing, number> = { month: 0, quarter: QUARTER_DISCOUNT, 'half-year': HALF_YEAR_DISCOUNT };
/** Uzbek labels, kept for components that have not been translated yet; use `billingLabel(lang, billing)`. */
export const BILLING_LABEL: Record<Billing, string> = { month: '1 oy', quarter: '3 oy', 'half-year': '6 oy' };
export const billingLabel = (lang: Lang, billing: Billing) => translate(lang, `plans.billing.${billing}`);

/** The plan's feature list in the chosen language. */
export function planFeatures(value: string | null | undefined, lang: Lang): string[] {
  return getPlanEntitlement(value).features.map((f) => translate(lang, f.key, f.vars));
}
export const HALF_YEAR_MONTHS = 6;

const toNumber = (value: string) => Number(value.replace(/\D/g, '')) || 0;
export const formatUzs = (value: number) => String(Math.round(value)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const formatUsd = (value: number) => (Number.isInteger(value) ? String(value) : value.toFixed(2));

/** Whole so'm charged for a plan and period. The server computes the same number; this one is only for display. */
export function planTotalUzs(value: string | null | undefined, billing: Billing): number {
  const uzs = toNumber(getPlanEntitlement(value).priceUzs);
  return Math.round(uzs * BILLING_MONTHS[billing] * (1 - BILLING_DISCOUNT[billing]));
}

/** Price of a plan for the chosen billing period: total, per-month equivalent and saving. */
export function planPrice(value: string | null | undefined, billing: Billing) {
  const p = getPlanEntitlement(value);
  const usd = Number(p.priceUsd) || 0;
  const uzs = toNumber(p.priceUzs);
  const months = BILLING_MONTHS[billing];
  const discount = BILLING_DISCOUNT[billing];
  const factor = months * (1 - discount);
  return {
    months,
    usd: formatUsd(Math.round(usd * factor * 100) / 100),
    uzs: formatUzs(uzs * factor),
    perMonthUsd: formatUsd(Math.round(usd * (1 - discount) * 100) / 100),
    perMonthUzs: formatUzs(uzs * (1 - discount)),
    saveUzs: formatUzs(uzs * months * discount),
  };
}

export const SUPPORT_CHAT = 'https://t.me/scorify_support';

/**
 * Telegram chat for paying by Visa / international card. The site has no Visa autopay, so the owner takes these orders by hand;
 * the message names the plan, period, dollar price (and the so'm equivalent) and the account ID.
 */
export function visaLink(value: string | null | undefined, billing: Billing, publicId?: string | null, lang: Lang = 'uz') {
  const p = getPlanEntitlement(value);
  const price = planPrice(value, billing);
  const text = translate(lang, 'plans.visa.message', {
    name: p.name,
    period: billing === 'month' ? translate(lang, 'plans.visa.oneMonth') : billingLabel(lang, billing),
    usd: price.usd,
    uzs: price.uzs,
    id: publicId ? ` ID: #${publicId}.` : '',
  });
  return `${SUPPORT_CHAT}?text=${encodeURIComponent(text)}`;
}

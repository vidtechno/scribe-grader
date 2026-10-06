export type PlanSlug = 'free' | 'go' | 'plus';

export type PlanEntitlement = {
  slug: PlanSlug;
  name: string;
  /** Primary price, shown in US dollars. */
  priceUsd: string;
  /** Local price for payments made in Uzbekistan. */
  priceUzs: string;
  personal: { writing: number; speaking: number; mockTests: number };
  /** What the plan includes, shown on pricing cards. */
  features: string[];
};

export const PLAN_ENTITLEMENTS: Record<PlanSlug, PlanEntitlement> = {
  free: {
    slug: 'free', name: 'Free', priceUsd: '0', priceUzs: '0',
    personal: { writing: 3, speaking: 2, mockTests: 0 },
    features: ['English course: 7 days free', 'Daily Grammar test', 'Result history'],
  },
  go: {
    slug: 'go', name: 'Scorify Go', priceUsd: '9', priceUzs: '79 000',
    personal: { writing: 20, speaking: 15, mockTests: 3 },
    features: [
      'English course from zero: lessons, pronunciation, exercises and unit tests',
      'Word lists with audio, streaks and learning statistics',
      'Full feedback on every essay and speaking answer',
      'Daily Grammar test based on your mistakes',
      'AI Mentor, progress history and Telegram notifications',
    ],
  },
  plus: {
    slug: 'plus', name: 'Scorify Plus', priceUsd: '13', priceUzs: '129 000',
    personal: { writing: 50, speaking: 40, mockTests: 8 },
    features: [
      'Everything in Go',
      '2.5× more Writing and Speaking evaluations',
      '8 timed Full Mock Tests every month',
      'Best for an intensive IELTS preparation month',
    ],
  },
};

export const PAID_PLAN_SLUGS: PlanSlug[] = ['go', 'plus'];

export function normalizePlanSlug(value?: string | null): PlanSlug {
  return value === 'plus' ? 'plus' : value === 'go' ? 'go' : 'free';
}

export function getPlanEntitlement(value?: string | null) {
  return PLAN_ENTITLEMENTS[normalizePlanSlug(value)];
}

export type Billing = 'month' | 'half-year';
/** Paying for 6 months in advance gives 10% off. */
export const HALF_YEAR_DISCOUNT = 0.1;
export const HALF_YEAR_MONTHS = 6;

const toNumber = (value: string) => Number(value.replace(/\D/g, '')) || 0;
export const formatUzs = (value: number) => String(Math.round(value)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const formatUsd = (value: number) => (Number.isInteger(value) ? String(value) : value.toFixed(2));

/** Price of a plan for the chosen billing period: total, per-month equivalent and saving. */
export function planPrice(value: string | null | undefined, billing: Billing) {
  const p = getPlanEntitlement(value);
  const usd = Number(p.priceUsd) || 0;
  const uzs = toNumber(p.priceUzs);
  if (billing === 'month') {
    return { months: 1, usd: formatUsd(usd), uzs: formatUzs(uzs), perMonthUsd: formatUsd(usd), perMonthUzs: formatUzs(uzs), saveUzs: '0' };
  }
  const factor = HALF_YEAR_MONTHS * (1 - HALF_YEAR_DISCOUNT);
  return {
    months: HALF_YEAR_MONTHS,
    usd: formatUsd(Math.round(usd * factor * 100) / 100),
    uzs: formatUzs(uzs * factor),
    perMonthUsd: formatUsd(Math.round(usd * (1 - HALF_YEAR_DISCOUNT) * 100) / 100),
    perMonthUzs: formatUzs(uzs * (1 - HALF_YEAR_DISCOUNT)),
    saveUzs: formatUzs(uzs * HALF_YEAR_MONTHS * HALF_YEAR_DISCOUNT),
  };
}

/** Telegram link to @scorify_payments with the order pre-filled. */
export function purchaseLink(value: string | null | undefined, billing: Billing, publicId?: string | null) {
  const p = getPlanEntitlement(value);
  const price = planPrice(value, billing);
  const period = billing === 'month' ? '1 oy' : `${HALF_YEAR_MONTHS} oy (-10%)`;
  const id = publicId ? ` Mening ID: #${publicId}.` : '';
  const text = `Salom! Men "${p.name}" tarifini ${period} uchun sotib olmoqchiman: $${price.usd} yoki ${price.uzs} so'm.${id}`;
  return `https://t.me/scorify_payments?text=${encodeURIComponent(text)}`;
}

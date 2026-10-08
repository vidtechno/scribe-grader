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

/**
 * Internal slugs stay `go` and `plus` (referrals, the admin panel, the bot and the database use them);
 * what people see is Learn (`go`) and IELTS (`plus`).
 */
export const PLAN_ENTITLEMENTS: Record<PlanSlug, PlanEntitlement> = {
  free: {
    slug: 'free', name: 'Free', priceUsd: '0', priceUzs: '0',
    personal: { writing: 3, speaking: 2, mockTests: 0 },
    features: ['7 days of the full Learn course', '3 Writing evaluations', '2 Speaking evaluations'],
  },
  go: {
    slug: 'go', name: 'Learn', priceUsd: '4', priceUzs: '49 000',
    personal: { writing: 0, speaking: 0, mockTests: 0 },
    features: [
      'All English lessons: Beginner to Upper-Intermediate and every level we add',
      'Adaptive learning that follows your results',
      'Smart vocabulary review (spaced repetition)',
      'Grammar review and a notebook of your mistakes',
      'XP, streak and learning progress',
      'Telegram reminders and learning updates',
    ],
  },
  plus: {
    slug: 'plus', name: 'IELTS', priceUsd: '13', priceUzs: '129 000',
    personal: { writing: 50, speaking: 30, mockTests: 3 },
    features: [
      'Everything in Learn',
      'IELTS Writing: 50 evaluations every month',
      'IELTS Speaking: 30 evaluations every month',
      'AI scoring with detailed feedback',
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

/** Telegram link to @scorify_support with the order pre-filled. */
export function purchaseLink(value: string | null | undefined, billing: Billing, publicId?: string | null) {
  const p = getPlanEntitlement(value);
  const price = planPrice(value, billing);
  const period = billing === 'month' ? '1 oy' : `${HALF_YEAR_MONTHS} oy (-10%)`;
  const id = publicId ? ` Mening ID: #${publicId}.` : '';
  const text = `Salom! Men "${p.name}" tarifini ${period} uchun sotib olmoqchiman: $${price.usd} yoki ${price.uzs} so'm.${id}`;
  return `https://t.me/scorify_support?text=${encodeURIComponent(text)}`;
}

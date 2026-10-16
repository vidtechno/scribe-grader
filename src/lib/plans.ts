export type PlanSlug = 'free' | 'go' | 'plus';

export type PlanEntitlement = {
  slug: PlanSlug;
  name: string;
  /** Primary price, shown in US dollars. */
  priceUsd: string;
  /** Local price for payments made in Uzbekistan. */
  priceUzs: string;
  personal: { writing: number; speaking: number; mockTests: number };
  /** IELTS Reading and Listening practice tests that are open: a number of tests, or null for every test, unlimited. */
  practice: { reading: number | null; listening: number | null };
  /** What the plan includes, shown on pricing cards. */
  features: string[];
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
      "To'liq Learn kursi 7 kun",
      '1 ta Writing baholash',
      '1 ta Speaking baholash',
      `${FREE_PRACTICE_TESTS} ta IELTS Reading testi`,
      `${FREE_PRACTICE_TESTS} ta IELTS Listening testi`,
    ],
  },
  go: {
    slug: 'go', name: 'Learn', priceUsd: '4', priceUzs: '49 000',
    personal: { writing: 0, speaking: 0, mockTests: 0 },
    practice: { reading: FREE_PRACTICE_TESTS, listening: FREE_PRACTICE_TESTS },
    features: [
      "Noldan Intermediate (B1) gacha 350 dan ortiq dars: o'zbekcha tushuntirish va talaffuz audiosi",
      "Real hayotiy ovozli suhbatlar: kafe, yo'l so'rash, mehmonxona",
      "Mashq o'yinlari, bosqich testlari va daraja imtihoni",
      "Aqlli lug'at takrori: so'zlar unutilishidan oldin qaytadi",
      'Grammatika takrori va xatolar daftari',
      "Streak, XP, reyting va do'stlar: o'qish odatini qurasiz",
      "Telegram eslatmalari: bir kun ham o'tkazib yubormaysiz",
      `IELTS Reading va Listening: ${FREE_PRACTICE_TESTS} tadan test ochiq`,
    ],
  },
  plus: {
    slug: 'plus', name: 'IELTS', priceUsd: '13', priceUzs: '129 000',
    personal: { writing: 50, speaking: 30, mockTests: 3 },
    practice: { reading: null, listening: null },
    features: [
      "Learn dagi hamma narsa: 350 dan ortiq dars va daraja imtihonlari",
      "IELTS Reading: CHEKSIZ. 5 ta to'liq test (3 passage, 40 savol, 60 daqiqa), band va har bir javob tahlili",
      "IELTS Listening: CHEKSIZ. 5 ta to'liq test (4 section, 40 savol), audio va transkript bilan",
      "IELTS Writing: har oy 50 ta AI baholash, 4 ta rasmiy mezon bo'yicha band va tuzatishlar",
      "IELTS Speaking: har oy 30 ta AI baholash, ravonlik, grammatika, lug'at va talaffuz tahlili",
      "Har oy 3 ta to'liq Mock test: imtihon vaqti bilan",
      "Batafsil izohli AI baholash va xatolar tahlili",
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
export const BILLING_LABEL: Record<Billing, string> = { month: '1 oy', quarter: '3 oy', 'half-year': '6 oy' };
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

/** Telegram link to @scorify_support with the order pre-filled. */
export function purchaseLink(value: string | null | undefined, billing: Billing, publicId?: string | null) {
  const p = getPlanEntitlement(value);
  const price = planPrice(value, billing);
  const period = billing === 'month' ? '1 oy' : `${BILLING_MONTHS[billing]} oy (-${Math.round(BILLING_DISCOUNT[billing] * 100)}%)`;
  const id = publicId ? ` Mening ID: #${publicId}.` : '';
  const text = `Salom! Men "${p.name}" tarifini ${period} uchun sotib olmoqchiman: $${price.usd} yoki ${price.uzs} so'm.${id}`;
  return `https://t.me/scorify_support?text=${encodeURIComponent(text)}`;
}

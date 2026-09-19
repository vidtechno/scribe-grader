export type PlanSlug = 'free' | 'go' | 'plus';

export type PlanEntitlement = {
  slug: PlanSlug;
  name: string;
  priceUzs: string;
  personal: { writing: number; speaking: number; mockTests: number };
  teacher: { grammarSubmissions: number; writingEvaluations: number; unlimitedTests: boolean };
};

export const PLAN_ENTITLEMENTS: Record<PlanSlug, PlanEntitlement> = {
  free: {
    slug: 'free', name: 'Free', priceUzs: '0',
    personal: { writing: 1, speaking: 1, mockTests: 0 },
    teacher: { grammarSubmissions: 0, writingEvaluations: 0, unlimitedTests: false },
  },
  go: {
    slug: 'go', name: 'Scorify Go', priceUzs: '49 000',
    personal: { writing: 20, speaking: 15, mockTests: 3 },
    teacher: { grammarSubmissions: 500, writingEvaluations: 30, unlimitedTests: true },
  },
  plus: {
    slug: 'plus', name: 'Scorify Plus', priceUzs: '99 000',
    personal: { writing: 50, speaking: 40, mockTests: 8 },
    teacher: { grammarSubmissions: 2000, writingEvaluations: 150, unlimitedTests: true },
  },
};

export const PAID_PLAN_SLUGS: PlanSlug[] = ['go', 'plus'];

export function normalizePlanSlug(value?: string | null): PlanSlug {
  return value === 'plus' ? 'plus' : value === 'go' ? 'go' : 'free';
}

export function getPlanEntitlement(value?: string | null) {
  return PLAN_ENTITLEMENTS[normalizePlanSlug(value)];
}

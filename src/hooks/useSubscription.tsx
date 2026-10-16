import { useCallback } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { getPlanEntitlement, normalizePlanSlug, type PlanSlug } from '@/lib/plans';

export interface Subscription {
  id: string;
  user_id: string;
  plan_type: string;
  plan_name: string | null;
  writing_limit: number;
  writing_used: number;
  speaking_limit: number;
  speaking_used: number;
  mock_test_limit: number;
  mock_test_used: number;
  started_at: string;
  expires_at: string | null;
  is_active: boolean;
  learn_trial_ends_at?: string | null;
}

// Monthly-plan model. Usage is tracked per feature on `subscriptions`.
// Expired paid plans are auto-downgraded to Free by the `expire_subscriptions` SQL function.
export function useSubscription() {
  const { user } = useAuth();
  // One shared query for every component that needs the plan (navbar, mentor, dashboard…): a single request per
  // minute instead of one per component, and one per page load.
  const qc = useQueryClient();
  const query = useQuery({
    queryKey: ['subscription', user?.id],
    enabled: !!user,
    staleTime: 60_000,
    queryFn: async () => {
      const { data, error } = await supabase.from('subscriptions').select('*').eq('user_id', user!.id).maybeSingle();
      if (error) { console.error('Unable to load subscription:', error); throw error; }
      return (data as Subscription | null) ?? null;
    },
  });
  const subscription = user ? query.data ?? null : null;
  const loading = !!user && query.isLoading;
  const fetchSubscription = useCallback(async () => { await qc.invalidateQueries({ queryKey: ['subscription'] }); }, [qc]);

  const s = subscription;
  const writingRemaining = Math.max(0, (s?.writing_limit ?? 0) - (s?.writing_used ?? 0));
  const speakingRemaining = Math.max(0, (s?.speaking_limit ?? 0) - (s?.speaking_used ?? 0));
  const mockRemaining = Math.max(0, (s?.mock_test_limit ?? 0) - (s?.mock_test_used ?? 0));
  const expiresAt = s?.expires_at ? new Date(s.expires_at) : null;
  const isExpired = expiresAt ? expiresAt.getTime() < Date.now() : false;
  const daysRemaining = expiresAt ? Math.max(0, Math.ceil((expiresAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24))) : null;
  const planType: PlanSlug = normalizePlanSlug(s?.plan_type);
  const entitlement = getPlanEntitlement(planType);
  const planName = s?.plan_name || entitlement.name;
  // Every new account has a 7-day Learn trial; it only matters while the plan is Free.
  const trialEnds = planType === 'free' && s?.learn_trial_ends_at ? new Date(s.learn_trial_ends_at) : null;
  const trialActive = !!trialEnds && trialEnds.getTime() > Date.now();
  const trialDaysLeft = trialActive && trialEnds ? Math.max(1, Math.ceil((trialEnds.getTime() - Date.now()) / 86_400_000)) : null;

  return {
    subscription,
    loading,
    planType,
    planName,
    writingRemaining, speakingRemaining, mockRemaining,
    writingLimit: s?.writing_limit ?? 0,
    speakingLimit: s?.speaking_limit ?? 0,
    mockLimit: s?.mock_test_limit ?? 0,
    writingUsed: s?.writing_used ?? 0,
    speakingUsed: s?.speaking_used ?? 0,
    mockUsed: s?.mock_test_used ?? 0,
    entitlement, trialActive, trialDaysLeft,
    expiresAt,
    daysRemaining,
    isExpired,
    refresh: fetchSubscription,
    // Compat aliases (legacy). Consider `planType !== 'free'` for premium gating.
    isPremium: planType !== 'free',
    /** IELTS plan: unlimited Reading and Listening practice (Free and Learn open tests 1–3 of each). */
    isIelts: planType === 'plus',
    creditsRemaining: 0,
  };
}

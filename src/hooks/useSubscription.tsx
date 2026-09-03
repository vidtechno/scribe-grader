import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

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
}

// Monthly-plan model. Usage is tracked per feature on `subscriptions`.
// Expired paid plans are auto-downgraded to Free by the `expire_subscriptions` SQL function.
export function useSubscription() {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchSubscription = useCallback(async () => {
    if (!user) { setLoading(false); return; }
    try {
      const { data } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();
      setSubscription((data as unknown as Subscription) || null);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => { fetchSubscription(); }, [fetchSubscription]);

  const s = subscription;
  const writingRemaining = Math.max(0, (s?.writing_limit ?? 0) - (s?.writing_used ?? 0));
  const speakingRemaining = Math.max(0, (s?.speaking_limit ?? 0) - (s?.speaking_used ?? 0));
  const mockRemaining = Math.max(0, (s?.mock_test_limit ?? 0) - (s?.mock_test_used ?? 0));
  const expiresAt = s?.expires_at ? new Date(s.expires_at) : null;
  const isExpired = expiresAt ? expiresAt.getTime() < Date.now() : false;
  const daysRemaining = expiresAt ? Math.max(0, Math.ceil((expiresAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24))) : null;
  const planType = s?.plan_type || 'free';
  const planName = s?.plan_name || (planType.charAt(0).toUpperCase() + planType.slice(1));

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
    expiresAt,
    daysRemaining,
    isExpired,
    refresh: fetchSubscription,
    // Compat aliases (legacy). Consider `planType !== 'free'` for premium gating.
    isPremium: planType !== 'free',
    creditsRemaining: 0,
  };
}

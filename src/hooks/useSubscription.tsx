import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface Subscription {
  id: string;
  user_id: string;
  plan_type: string;
  credits_limit: number;
  credits_used: number;
  started_at: string;
  expires_at: string | null;
  is_active: boolean;
}

export function useSubscription() {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchSubscription = async () => {
    if (!user) { setLoading(false); return; }
    try {
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .single();
      if (error) throw error;
      setSubscription(data as unknown as Subscription);
    } catch {
      setSubscription(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscription();
  }, [user]);

  const creditsRemaining = subscription
    ? subscription.plan_type === 'pro_plus'
      ? Infinity
      : Math.max(0, subscription.credits_limit - subscription.credits_used)
    : 0;

  const creditsPercentage = subscription
    ? subscription.plan_type === 'pro_plus'
      ? 100
      : subscription.credits_limit > 0
        ? ((subscription.credits_limit - subscription.credits_used) / subscription.credits_limit) * 100
        : 0
    : 0;

  const daysRemaining = subscription?.expires_at
    ? Math.max(0, Math.ceil((new Date(subscription.expires_at).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
    : null;

  const isExpired = subscription?.expires_at
    ? new Date(subscription.expires_at) < new Date()
    : false;

  return {
    subscription,
    loading,
    creditsRemaining,
    creditsPercentage,
    daysRemaining,
    isExpired,
    refresh: fetchSubscription,
  };
}

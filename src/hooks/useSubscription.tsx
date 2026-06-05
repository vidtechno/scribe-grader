import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface Subscription {
  id: string;
  user_id: string;
  plan_type: string;
  credits_limit: number;
  credits_used: number;
  speaking_limit: number;
  speaking_used: number;
  started_at: string;
  expires_at: string | null;
  is_active: boolean;
}

// Credits-based model: source of truth is profiles.credits.
// `subscription` row is kept for compat (plan_type, etc.) but credits never expire.
export function useSubscription() {
  const { user, profile } = useAuth();
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchSubscription = async () => {
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
  };

  useEffect(() => { fetchSubscription(); }, [user]);

  const creditsRemaining = profile?.credits ?? 0;

  return {
    subscription,
    loading,
    creditsRemaining,
    creditsPercentage: 0,
    daysRemaining: null,
    isExpired: false,
    refresh: fetchSubscription,
  };
}

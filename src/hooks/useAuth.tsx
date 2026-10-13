import { claimPendingReferral } from '@/lib/referral';
import { useState, useEffect, useRef, useCallback, useMemo, createContext, useContext } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

interface Profile {
  id: string;
  user_id: string;
  email: string;
  full_name: string | null;
  public_id?: string | null;
  username?: string | null;
  avatar_key?: string | null;
  credits: number;
  age: number | null;
  city: string | null;
  phone: string | null;
  created_at: string;
  is_premium?: boolean;
  total_credits_purchased?: number;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  loading: boolean;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const activeUserId = useRef<string | null>(null);

  // Stable identities: pages put refreshProfile in effect dependencies, and a new function on every render made
  // them refetch the profile in a loop.
  const fetchProfile = useCallback(async (userId: string) => {
    try {
      const { data: initialProfile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();
      
      if (error) throw error;
      if (initialProfile && activeUserId.current === userId) setProfile(initialProfile);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  }, []);

  const refreshProfile = useCallback(async () => {
    const id = activeUserId.current;
    if (id) await fetchProfile(id);
  }, [fetchProfile]);

  useEffect(() => {
    let disposed = false;
    let authEventReceived = false;
    const applySession = (next: Session | null) => {
      if (disposed) return;
      // The same signed-in user again (token refresh, tab regained focus): keep what is loaded, no new requests.
      if (next?.user && activeUserId.current === next.user.id) {
        setSession(next);
        setUser((prev) => (prev && prev.id === next.user.id ? prev : next.user));
        setLoading(false);
        return;
      }
      activeUserId.current = next?.user.id ?? null;
      setSession(next);
      setUser(next?.user ?? null);
      setProfile(null);
      setLoading(false);
      if (next?.user) {
        setTimeout(() => {
          if (disposed) return;
          void fetchProfile(next.user.id);
          void claimPendingReferral();
        }, 0);
      }
    };
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        authEventReceived = true;
        applySession(session);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!authEventReceived) applySession(session);
    }).catch(() => { if (!authEventReceived) applySession(null); });

    return () => { disposed = true; activeUserId.current = null; subscription.unsubscribe(); };
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setProfile(null);
  }, []);

  const value = useMemo(() => ({ user, session, profile, loading, signOut, refreshProfile }), [user, session, profile, loading, signOut, refreshProfile]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

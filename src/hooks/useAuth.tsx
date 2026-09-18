import { useState, useEffect, useRef, createContext, useContext } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { safeReturnTo } from '@/lib/returnTo';

interface Profile {
  id: string;
  user_id: string;
  email: string;
  full_name: string | null;
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
  signUp: (email: string, password: string, fullName: string, age?: number, city?: string, phone?: string) => Promise<{ error: Error | null; confirmationRequired?: boolean }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
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

  const fetchProfile = async (userId: string) => {
    try {
      const { data: initialProfile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();
      
      if (error) throw error;
      let data = initialProfile;
      // The database creates the profile before email confirmation. Populate
      // optional signup details only after an authenticated session exists.
      if (data && activeUserId.current === userId) {
        const { data: { user: currentUser } } = await supabase.auth.getUser();
        const metadata = currentUser?.id === userId ? currentUser.user_metadata : {};
        const details: { age?: number; city?: string; phone?: string } = {};
        if (data.age == null && Number.isInteger(metadata.age) && metadata.age >= 10 && metadata.age <= 80) details.age = metadata.age;
        if (!data.city && typeof metadata.city === 'string' && metadata.city.trim()) details.city = metadata.city.trim().slice(0, 100);
        if (!data.phone && typeof metadata.phone === 'string' && metadata.phone.trim()) details.phone = metadata.phone.trim().slice(0, 40);
        if (Object.keys(details).length) {
          const result = await supabase.from('profiles').update(details).eq('user_id', userId).select().single();
          if (!result.error && result.data) data = result.data;
        }
        if (activeUserId.current === userId) setProfile(data);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const refreshProfile = async () => {
    if (user) {
      await fetchProfile(user.id);
    }
  };

  useEffect(() => {
    let disposed = false;
    let authEventReceived = false;
    const applySession = (next: Session | null) => {
      if (disposed) return;
      activeUserId.current = next?.user.id ?? null;
      setSession(next);
      setUser(next?.user ?? null);
      setProfile(null);
      setLoading(false);
      if (next?.user) {
        setTimeout(() => { if (!disposed) void fetchProfile(next.user.id); }, 0);
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

  const signUp = async (email: string, password: string, fullName: string, age?: number, city?: string, phone?: string) => {
    try {
      const next = safeReturnTo(sessionStorage.getItem('scorify:returnTo'));
      const redirectUrl = `${window.location.origin}/auth/callback${next === '/dashboard' ? '' : `?next=${encodeURIComponent(next)}`}`;
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: {
            full_name: fullName,
            age: age || null,
            city: city || null,
            phone: phone || null,
          }
        }
      });
      
      if (error) return { error };
      return { error: null, confirmationRequired: !data.session };
    } catch (error) {
      return { error: error as Error };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      return { error };
    } catch (error) {
      return { error: error as Error };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      profile,
      loading,
      signUp,
      signIn,
      signOut,
      refreshProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

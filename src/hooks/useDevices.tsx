import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { currentLang, translate } from '@/i18n';
import { registerDevice, revokeDevice, type DeviceSession } from '@/lib/device';

type Status = 'checking' | 'active' | 'pending';
interface DevicesContextType {
  status: Status;
  max: number;
  sessions: DeviceSession[];
  revoke: (sessionId: string) => Promise<void>;
  refresh: () => Promise<void>;
}

const DevicesContext = createContext<DevicesContextType | undefined>(undefined);
const RECHECK_MS = 2 * 60_000;
const FAIL_OPEN_MS = 5_000;

/**
 * An account works on two devices at once. This registers the current sign-in, keeps it fresh, and tells the app when the
 * sign-in is a third device ("pending": only the device list is shown) or was removed from another device (signed out here).
 */
export function DevicesProvider({ children }: { children: React.ReactNode }) {
  const { user, signOut } = useAuth();
  const [status, setStatus] = useState<Status>('checking');
  const [max, setMax] = useState(2);
  const [sessions, setSessions] = useState<DeviceSession[]>([]);
  const userId = user?.id ?? null;
  const loggedOut = useRef(false);

  const apply = useCallback(async (state: Awaited<ReturnType<typeof registerDevice>>) => {
    if (state.status === 'revoked') {
      if (loggedOut.current) return;
      loggedOut.current = true;
      toast.info(translate(currentLang(), 'dev.revoked'));
      await supabase.auth.signOut({ scope: 'local' }).catch(() => {});
      await signOut().catch(() => {});
      return;
    }
    setMax(state.max);
    setSessions(state.sessions);
    setStatus(state.status);
  }, [signOut]);

  const refresh = useCallback(async () => {
    if (!userId) return;
    try {
      await apply(await registerDevice());
    } catch {
      // Network or server trouble must never lock people out: keep the current state, let the first check through.
      setStatus((s) => (s === 'checking' ? 'active' : s));
    }
  }, [userId, apply]);

  useEffect(() => {
    loggedOut.current = false;
    if (!userId) { setStatus('checking'); setSessions([]); return; }
    setStatus('checking');
    const failOpen = setTimeout(() => setStatus((s) => (s === 'checking' ? 'active' : s)), FAIL_OPEN_MS);
    void refresh();
    const timer = setInterval(() => void refresh(), RECHECK_MS);
    const onFocus = () => { if (document.visibilityState === 'visible') void refresh(); };
    document.addEventListener('visibilitychange', onFocus);
    return () => { clearTimeout(failOpen); clearInterval(timer); document.removeEventListener('visibilitychange', onFocus); };
  }, [userId, refresh]);

  const revoke = useCallback(async (sessionId: string) => {
    const state = await revokeDevice(sessionId);
    await apply(state);
  }, [apply]);

  const value = useMemo(() => ({ status, max, sessions, revoke, refresh }), [status, max, sessions, revoke, refresh]);
  return <DevicesContext.Provider value={value}>{children}</DevicesContext.Provider>;
}

export function useDevices() {
  const ctx = useContext(DevicesContext);
  if (!ctx) throw new Error('useDevices must be used within DevicesProvider');
  return ctx;
}

import { useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

const BEAT_MS = 2 * 60_000; // a signed-in visitor with the tab open is "online" for the admin panel for 5 minutes
const MIN_GAP_MS = 60_000;

/**
 * Tells the database that this signed-in user is here (`touch_presence`): once at start, every two minutes while the
 * tab is visible, and when the tab comes back. The database itself writes at most once a minute per user.
 */
export function usePresence(userId: string | undefined) {
  useEffect(() => {
    if (!userId) return;
    let last = 0;
    const beat = () => {
      if (document.visibilityState !== 'visible') return;
      const now = Date.now();
      if (now - last < MIN_GAP_MS) return;
      last = now;
      void Promise.resolve((supabase.rpc as unknown as (fn: string) => PromiseLike<unknown>)('touch_presence')).catch(() => { /* presence is best effort */ });
    };
    beat();
    const timer = window.setInterval(beat, BEAT_MS);
    document.addEventListener('visibilitychange', beat);
    window.addEventListener('focus', beat);
    return () => { window.clearInterval(timer); document.removeEventListener('visibilitychange', beat); window.removeEventListener('focus', beat); };
  }, [userId]);
}

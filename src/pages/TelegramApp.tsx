import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { safeReturnTo } from '@/lib/returnTo';
import { loadTelegramWebApp, markTelegramWebApp, signInWithTokenHash, telegramAuth } from '@/lib/telegram';

/** Bot deep-link sections (`startapp` / start_param) mapped to app pages. */
const START_PARAM_PATHS: Record<string, string> = {
  writing: '/writing', speaking: '/speaking', results: '/essays', speaking_history: '/speaking-history',
  mock: '/mock-test', grammar: '/grammar-test', referral: '/referral', profile: '/profile', leaderboard: '/leaderboard',
};

/**
 * Entry point of the Telegram Mini App (/tg?next=/path). Verifies Telegram's signed launch data
 * on the server, signs the user in to the same Scorify account and opens the requested page.
 */
export default function TelegramApp() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'working' | 'outside' | 'error'>('working');
  const [message, setMessage] = useState('');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const next = safeReturnTo(new URLSearchParams(window.location.search).get('next'));
      const tg = await loadTelegramWebApp();
      if (cancelled) return;
      if (!tg?.initData) {
        const { data } = await supabase.auth.getSession();
        if (data.session) navigate(next, { replace: true });
        else setStatus('outside');
        return;
      }
      markTelegramWebApp();
      tg.ready();
      tg.expand();
      try {
        const { data: current } = await supabase.auth.getSession();
        const result = await telegramAuth<{ user_id: string; token_hash?: string; start_param?: string | null }>({
          action: 'webapp', initData: tg.initData, currentUserId: current.session?.user.id,
        });
        if (result.token_hash) {
          if (current.session) await supabase.auth.signOut({ scope: 'local' });
          await signInWithTokenHash(result.token_hash);
        }
        const target = result.start_param && START_PARAM_PATHS[result.start_param] ? START_PARAM_PATHS[result.start_param] : next;
        if (!cancelled) navigate(target, { replace: true });
      } catch (e) {
        if (cancelled) return;
        setMessage(e instanceof Error ? e.message : 'Sign-in failed');
        setStatus('error');
      }
    })();
    return () => { cancelled = true; };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 text-center">
      {status === 'working' && (
        <div className="space-y-3">
          <img src="/logo-128.webp" alt="Scorify" className="w-14 h-14 mx-auto" />
          <Loader2 className="h-6 w-6 animate-spin mx-auto text-primary" />
          <p className="text-sm text-muted-foreground">Signing you in with Telegram…</p>
        </div>
      )}
      {status === 'outside' && (
        <div className="max-w-sm space-y-4">
          <Send className="h-10 w-10 mx-auto text-primary" />
          <h1 className="text-xl font-bold">Open Scorify from Telegram</h1>
          <p className="text-sm text-muted-foreground">This page signs you in automatically when it is opened from the Scorify bot. In a browser, sign in on the login page.</p>
          <Button variant="glow" onClick={() => navigate('/auth', { replace: true })}>Go to sign in</Button>
        </div>
      )}
      {status === 'error' && (
        <div className="max-w-sm space-y-4">
          <h1 className="text-xl font-bold">Could not sign you in</h1>
          <p className="text-sm text-muted-foreground">{message}</p>
          <Button variant="glow" onClick={() => window.location.reload()}>Try again</Button>
        </div>
      )}
    </div>
  );
}

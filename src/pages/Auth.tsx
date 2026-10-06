import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Loader2, ShieldCheck, Sparkles, Mic, PenLine, Gift } from 'lucide-react';
import { toast } from 'sonner';
import { authErrorMessage } from '@/lib/auth-errors';
import { supabase } from '@/integrations/supabase/client';
import { safeReturnTo } from '@/lib/returnTo';
import { getStoredReferral } from '@/lib/referral';
import { isTelegramWebApp } from '@/lib/telegram';
import { TelegramLoginButton } from '@/components/TelegramLoginButton';

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const next = safeReturnTo(new URLSearchParams(window.location.search).get('next'));
  if (next !== '/dashboard') sessionStorage.setItem('scorify:returnTo', next);
  else sessionStorage.removeItem('scorify:returnTo');
  const invited = !!getStoredReferral();
  // Google sign-in is blocked inside Telegram's in-app browser: the Mini App signs in with Telegram instead.
  if (isTelegramWebApp()) return <Navigate to={`/tg?next=${encodeURIComponent(next)}`} replace />;

  const signInWithGoogle = async () => {
    setLoading(true);
    const callback = `${window.location.origin}/auth/callback${next === '/dashboard' ? '' : `?next=${encodeURIComponent(next)}`}`;
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: callback } });
    if (error) { setLoading(false); toast.error(authErrorMessage(error)); }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="w-full max-w-md relative animate-fade-in">
        <div className="text-center mb-8">
          <img src="/logo-128.webp" alt="Scorify" className="w-16 h-16 object-contain mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Welcome to Scorify.uz</h1>
          <p className="text-muted-foreground mt-2">Sign in with Telegram or Google to start practising IELTS Writing and Speaking.</p>
        </div>

        <div className="glass-card p-8">
          {invited && (
            <div className="mb-5 flex items-start gap-2 rounded-xl border border-primary/25 bg-primary/5 p-3 text-sm">
              <Gift className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>You were invited by a friend. Sign in and your invitation is counted automatically.</span>
            </div>
          )}
          <TelegramLoginButton disabled={loading} />
          <div className="my-3" />
          <Button type="button" variant="outline" className="w-full h-12 gap-3 text-base font-semibold" disabled={loading} onClick={() => void signInWithGoogle()}>
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : (
              <svg className="h-5 w-5" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
            )}
            {loading ? 'Redirecting…' : 'Continue with Google'}
          </Button>
          <p className="mt-4 text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5" /> No password needed. We only receive your name (and email for Google).
          </p>
        </div>

        <div className="mt-6 grid gap-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2"><PenLine className="h-4 w-4 text-primary" /> 3 free Writing evaluations with full feedback</p>
          <p className="flex items-center gap-2"><Mic className="h-4 w-4 text-primary" /> 2 free Speaking evaluations</p>
          <p className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> Band scores with clear, examiner-style feedback</p>
        </div>
      </div>
    </div>
  );
}

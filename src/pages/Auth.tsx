import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Headphones, Loader2, ShieldCheck, Sparkles, Mic, PenLine } from 'lucide-react';
import { toast } from 'sonner';
import { authErrorMessage } from '@/lib/auth-errors';
import { supabase } from '@/integrations/supabase/client';
import { rememberReturnTo, safeReturnTo } from '@/lib/returnTo';
import { isTelegramWebApp } from '@/lib/telegram';
import { TelegramLoginButton } from '@/components/TelegramLoginButton';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useT } from '@/i18n';

/** Google sign-in switch: set to false to hide the button without removing the code. */
export const GOOGLE_AUTH_ENABLED = true;

export default function Auth() {
  const { t } = useT();
  const [loading, setLoading] = useState(false);
  const next = safeReturnTo(new URLSearchParams(window.location.search).get('next'));
  // Remember the destination for the Google round trip; no destination in the URL clears an old one.
  useEffect(() => { rememberReturnTo(next); }, [next]);
  // Google sign-in is blocked inside Telegram's in-app browser: the Mini App signs in with Telegram instead.
  if (isTelegramWebApp()) return <Navigate to={`/tg?next=${encodeURIComponent(next)}`} replace />;

  const signInWithGoogle = async () => {
    setLoading(true);
    // The redirect URL stays plain (it must match the one registered with the provider); /auth/callback reads the remembered destination.
    rememberReturnTo(next);
    const callback = `${window.location.origin}/auth/callback`;
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: callback } });
    if (error) { setLoading(false); toast.error(authErrorMessage(error)); }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="fixed top-3 right-3 z-10"><LanguageSwitcher /></div>

      <div className="w-full max-w-md relative animate-fade-in">
        <div className="text-center mb-8">
          <img src="/logo-128.webp" alt="Scorify" className="w-16 h-16 object-contain mx-auto mb-4" />
          <h1 className="text-3xl font-bold">{t('auth.welcome')}</h1>
          <p className="text-muted-foreground mt-2">{t('auth.subtitle')}</p>
        </div>

        <div className="glass-card p-8">
          <TelegramLoginButton disabled={loading} />
          {GOOGLE_AUTH_ENABLED && <>
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
            {loading ? t('auth.redirecting') : t('auth.google')}
          </Button></>}
          <p className="mt-4 text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5" /> {t('auth.noPassword')}
          </p>
        </div>

        <div className="mt-6 grid gap-2 text-sm text-muted-foreground">
          <p className="flex items-center gap-2"><PenLine className="h-4 w-4 text-primary" /> {t('auth.perk.writing')}</p>
          <p className="flex items-center gap-2"><Mic className="h-4 w-4 text-primary" /> {t('auth.perk.speaking')}</p>
          <p className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-primary" /> {t('auth.perk.reading')}</p>
          <p className="flex items-center gap-2"><Headphones className="h-4 w-4 text-primary" /> {t('auth.perk.listening')}</p>
          <p className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /> {t('auth.perk.bands')}</p>
        </div>
      </div>
    </div>
  );
}

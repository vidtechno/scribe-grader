import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { takePostAuthRedirect } from '@/lib/oauth';

export default function AuthCallback() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const handled = useRef(false);

  useEffect(() => {
    if (handled.current) return;
    handled.current = true;

    const finish = () => navigate(takePostAuthRedirect(), { replace: true });

    const run = async () => {
      const url = new URL(window.location.href);
      const hashParams = new URLSearchParams(url.hash.replace(/^#/, ''));

      const providerError =
        url.searchParams.get('error_description') ||
        url.searchParams.get('error') ||
        hashParams.get('error_description') ||
        hashParams.get('error');

      if (providerError) {
        setError(providerError);
        return;
      }

      const code = url.searchParams.get('code');

      try {
        if (code) {
          // PKCE flow
          const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
          if (exchangeError) throw new Error(exchangeError.message);
        } else if (hashParams.get('access_token')) {
          // Implicit flow — detectSessionInUrl already persists it; just confirm.
          await supabase.auth.getSession();
        }

        const { data } = await supabase.auth.getSession();
        if (data.session) {
          toast.success('Signed in successfully');
          finish();
          return;
        }

        // Session may arrive slightly later via detectSessionInUrl.
        const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
          if (session) {
            sub.subscription.unsubscribe();
            finish();
          }
        });
        setTimeout(() => {
          sub.subscription.unsubscribe();
          setError((prev) => prev ?? 'We could not complete the sign-in. Please try again.');
        }, 6000);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Authentication failed');
      }
    };

    run();
  }, [navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-background">
        <div className="glass-card p-8 max-w-md w-full text-center space-y-4">
          <h1 className="text-xl font-bold">Sign-in failed</h1>
          <p className="text-sm text-muted-foreground break-words">{error}</p>
          <Button className="w-full" onClick={() => navigate('/auth', { replace: true })}>
            Back to sign in
          </Button>
        </div>
      </div>
    );
  }

  return <LoadingScreen />;
}

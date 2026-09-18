import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { safeReturnTo } from '@/lib/returnTo';

export default function AuthCallback() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let disposed = false;
    let completed = false;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    let unsubscribe: (() => void) | undefined;
    const finish = () => {
      if (disposed || completed) return;
      completed = true;
      clearTimeout(timeout);
      unsubscribe?.();
      navigate(safeReturnTo(new URLSearchParams(window.location.search).get('next') || sessionStorage.getItem('scorify:returnTo')), { replace: true });
      sessionStorage.removeItem('scorify:returnTo');
    };

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

      // The Supabase client (detectSessionInUrl) handles both the PKCE `code`
      // and the implicit `#access_token` forms automatically on page load.
      try {


        const { data, error } = await supabase.auth.getSession();
        if (disposed) return;
        if (error) throw error;
        if (data.session) {
          toast.success('Signed in successfully');
          finish();
          return;
        }

        // Session may arrive slightly later via detectSessionInUrl.
        const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
          if (session) {
            finish();
          }
        });
        unsubscribe = () => sub.subscription.unsubscribe();
        timeout = setTimeout(() => {
          sub.subscription.unsubscribe();
          if (!disposed && !completed) setError('We could not complete the sign-in. Please try again.');
        }, 6000);
      } catch (e) {
        if (!disposed) setError(e instanceof Error ? e.message : 'Authentication failed');
      }
    };

    run();
    return () => { disposed = true; clearTimeout(timeout); unsubscribe?.(); };
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

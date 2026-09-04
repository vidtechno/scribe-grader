import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable/index';

const LOVABLE_ZONES = [
  'lovableproject.com',
  'lovableproject-dev.com',
  'lovable.app',
  'gpt-eng.com',
  'gptengineer.run',
];

/**
 * True only on Lovable-hosted surfaces, where the /~oauth/* broker routes exist.
 * On Vercel / scorify.uz these routes do NOT exist, so we must not use them.
 */
export function isLovableHosted(): boolean {
  if (typeof window === 'undefined') return false;
  const host = window.location.hostname;
  return LOVABLE_ZONES.some((z) => host === z || host.endsWith('.' + z));
}

/** Store where the user should land after the OAuth round-trip (same-origin only). */
export function setPostAuthRedirect(path: string) {
  if (!path.startsWith('/') || path.startsWith('//')) return;
  try {
    sessionStorage.setItem('post_auth_redirect', path);
  } catch {
    /* ignore */
  }
}

export function takePostAuthRedirect(): string {
  try {
    const v = sessionStorage.getItem('post_auth_redirect');
    sessionStorage.removeItem('post_auth_redirect');
    if (v && v.startsWith('/') && !v.startsWith('//')) return v;
  } catch {
    /* ignore */
  }
  return '/dashboard';
}

export type OAuthResult = { error: Error | null; redirected: boolean };

/**
 * Google sign-in / sign-up.
 * - Lovable preview & *.lovable.app: uses the Lovable broker (popup, works in iframe).
 * - Any other host (Vercel, scorify.uz, localhost): standard Supabase OAuth
 *   full-page redirect to the auth provider, returning to /auth/callback.
 */
export async function signInWithGoogle(next = '/dashboard'): Promise<OAuthResult> {
  setPostAuthRedirect(next);

  if (isLovableHosted()) {
    const result = await lovable.auth.signInWithOAuth('google', {
      redirect_uri: `${window.location.origin}/auth/callback`,
    });
    return {
      error: result.error ? (result.error as Error) : null,
      redirected: Boolean((result as { redirected?: boolean }).redirected),
    };
  }

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
      queryParams: { prompt: 'select_account' },
    },
  });

  if (error) return { error: new Error(error.message), redirected: false };
  return { error: null, redirected: true };
}

import { supabase } from '@/integrations/supabase/client';

const KEY = 'scorify_ref';
const CODE = /^[A-Za-z0-9]{4,16}$/;

/** Remembers the referral code of a bot link (`/auth?ref=CODE`) until the person signs in. */
export function captureReferral() {
  try {
    const code = new URLSearchParams(window.location.search).get('ref');
    if (code && CODE.test(code)) localStorage.setItem(KEY, code.toUpperCase());
  } catch { /* storage may be blocked */ }
}

/** Counts the new account for the friend who invited it. Quietly does nothing for old accounts or invalid codes. */
export async function claimPendingReferral() {
  let code: string | null = null;
  try { code = localStorage.getItem(KEY); } catch { return; }
  if (!code) return;
  try {
    const { data, error } = await (supabase as unknown as { rpc: (fn: string, args: object) => Promise<{ data: { ok?: boolean; reason?: string } | null; error: unknown }> })
      .rpc('claim_referral', { _code: code });
    // Keep the code only when the call itself failed, so it is retried on the next sign-in.
    if (!error && data && (data.ok || data.reason !== 'not_signed_in')) localStorage.removeItem(KEY);
  } catch { /* retried later */ }
}

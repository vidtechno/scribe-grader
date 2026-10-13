import { supabase } from '@/integrations/supabase/client';

/** Active paid plans, cached in the browser for 30 minutes: the landing page and the pricing dialog read them often and they rarely change. */
const KEY = 'scorify.plans.v1';
const TTL_MS = 30 * 60_000;
let pending: Promise<unknown[]> | null = null;

export async function loadActivePlans<T = unknown>(): Promise<T[]> {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (raw) {
      const { at, data } = JSON.parse(raw) as { at: number; data: T[] };
      if (Date.now() - at < TTL_MS && Array.isArray(data)) return data;
    }
  } catch { /* storage unavailable: just fetch */ }
  pending ??= (async () => {
    const { data } = await supabase.from('subscription_plans').select('*').eq('is_active', true).neq('slug', 'free').order('sort_order');
    const rows = data ?? [];
    try { if (rows.length) sessionStorage.setItem(KEY, JSON.stringify({ at: Date.now(), data: rows })); } catch { /* ignore */ }
    return rows;
  })().finally(() => { pending = null; });
  return (await pending) as T[];
}

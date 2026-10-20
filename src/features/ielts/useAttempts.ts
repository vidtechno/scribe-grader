import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { trackOnce } from '@/lib/analytics';

export interface Attempt { id: string; skill: 'reading' | 'listening'; test_id: string; mode: string; part: number | null; correct: number; total: number; band: number; created_at: string }

type Rpc = (fn: string, args: Record<string, unknown>) => PromiseLike<{ error: unknown }>;
/** Saves a finished practice (best effort: the result page works without it). */
export async function saveAttempt(a: { skill: 'reading' | 'listening'; testId: string; mode: 'full' | 'part'; part: number | null; correct: number; total: number; band: number; byKind: Record<string, unknown>; seconds: number }) {
  try {
    await (supabase.rpc as unknown as Rpc)('ielts_save_attempt', {
      _skill: a.skill, _test_id: a.testId, _mode: a.mode, _part: a.part, _correct: a.correct, _total: a.total, _band: a.band, _by_kind: a.byKind, _seconds: Math.round(a.seconds),
    });
    trackOnce('first_ielts_practice', 'device', { skill: a.skill });
  } catch { /* history is optional */ }
}

type From = (t: string) => { select: (c: string) => { eq: (k: string, v: string) => { order: (c: string, o: { ascending: boolean }) => { limit: (n: number) => PromiseLike<{ data: Attempt[] | null }> } } } };
export function useAttempts(skill: 'reading' | 'listening', userId: string | undefined) {
  return useQuery({
    queryKey: ['ielts-attempts', skill, userId],
    enabled: !!userId,
    queryFn: async () => {
      const { data } = await (supabase.from as unknown as From)('ielts_practice_attempts').select('id, skill, test_id, mode, part, correct, total, band, created_at').eq('skill', skill).order('created_at', { ascending: false }).limit(100);
      return data ?? [];
    },
  });
}

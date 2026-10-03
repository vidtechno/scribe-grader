import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

export const ACTIVITY_WEEKS = 8;

export type EssayRow = { id: string; topic: string; score: number | null; created_at: string; status: string | null };
export type SpeakingRow = EssayRow & { part: number | string | null };
export type GoalsRow = { target_band: number; weekly_essays: number; weekly_speaking: number; exam_date: string | null };

const STALE = 60_000;

/** One shared fetch of recent essays + speaking attempts, used by the dashboard and the goals card. */
export function useActivityData() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['activity', user?.id],
    enabled: !!user,
    staleTime: STALE,
    refetchOnMount: 'always', // show cached data instantly, then revalidate (new essays appear)
    queryFn: async () => {
      const since = subDays(new Date(), 7 * ACTIVITY_WEEKS + 7).toISOString();
      const [e, s] = await Promise.all([
        supabase.from('essays').select('id, topic, score, created_at, status').gte('created_at', since).order('created_at', { ascending: false }).limit(500),
        supabase.from('speaking_attempts').select('id, topic, part, score, created_at, status').gte('created_at', since).order('created_at', { ascending: false }).limit(500),
      ]);
      return { essays: (e.data || []) as EssayRow[], speaking: (s.data || []) as SpeakingRow[] };
    },
  });
}

export function useGoalsData() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['goals', user?.id],
    enabled: !!user,
    staleTime: STALE,
    queryFn: async () => {
      const { data } = await supabase.from('user_goals').select('*').eq('user_id', user!.id).maybeSingle();
      return data
        ? ({ target_band: Number(data.target_band), weekly_essays: data.weekly_essays, weekly_speaking: data.weekly_speaking, exam_date: data.exam_date } as GoalsRow)
        : null;
    },
  });
}

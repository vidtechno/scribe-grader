import { useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

/** `?mock=<id>`: the page runs as one section of a full mock test (no intro, result saved into the mock). */
export function useMockId(): string | null {
  const [params] = useSearchParams();
  const id = params.get('mock');
  return id && /^[0-9a-f-]{36}$/i.test(id) ? id : null;
}

type Rpc = (fn: string, args: Record<string, unknown>) => PromiseLike<{ error: { message?: string } | null }>;

/** Saves a finished Listening or Reading section into the mock test and moves it to the next step. */
export async function saveMockSection(mockId: string, skill: 'listening' | 'reading', testId: string,
  r: { correct: number; total: number; band: number; byKind: Record<string, unknown> }): Promise<boolean> {
  const { error } = await (supabase.rpc as unknown as Rpc)('mock_save_section', {
    _mock: mockId, _skill: skill, _test_id: testId, _correct: r.correct, _total: r.total, _band: r.band, _by_kind: r.byKind,
  });
  return !error;
}

/** Picks the Listening and Reading tests for a new mock: tests the learner has not used in a mock yet come first. */
export function pickMockTests(usedListening: (string | null)[], usedReading: (string | null)[], listening: string[], reading: string[]) {
  const pick = (all: string[], used: (string | null)[]) => {
    const fresh = all.filter((id) => !used.includes(id));
    const pool = fresh.length ? fresh : all;
    return pool[Math.floor(Math.random() * pool.length)];
  };
  return { listening: pick(listening, usedListening), reading: pick(reading, usedReading) };
}

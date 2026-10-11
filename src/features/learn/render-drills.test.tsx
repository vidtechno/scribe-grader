import { it, expect, vi } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { loadUnit } from './course';
import { wordDrills } from './practice';
import { ExerciseView } from './components/ExerciseView';

vi.mock('@/integrations/supabase/client', () => ({ supabase: {} }));

it('word drills render for every number of fresh words', async () => {
  const lessons = await loadUnit('u2');
  const errors: string[] = [];
  for (const n of [3, 4, 5, 6, 7, 8, 9, 10]) {
    for (const ex of wordDrills(lessons[0].words.slice(0, n))) {
      try { render(<ExerciseView ex={ex} mode="practice" onDone={() => {}} />); } catch (e) { errors.push(`${n} ${ex.k}: ${(e as Error).message}`); }
      cleanup();
    }
  }
  expect(errors).toEqual([]);
});

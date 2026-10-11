import { describe, expect, it, vi } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { WRITTEN_UNITS, loadUnit } from './course';
import { ExerciseView } from './components/ExerciseView';

vi.mock('@/integrations/supabase/client', () => ({ supabase: {} }));
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: null }) }));

describe('every exercise renders', () => {
  for (const u of WRITTEN_UNITS) {
    it(u.id, async () => {
      const lessons = await loadUnit(u.id);
      const errors: string[] = [];
      for (const l of lessons) {
        [...l.practice, ...l.quiz].forEach((ex, i) => {
          try { render(<MemoryRouter><ExerciseView ex={ex} mode="practice" onDone={() => {}} /></MemoryRouter>); } catch (e) { errors.push(`${l.id} #${i} ${ex.k}: ${(e as Error).message}`); }
          cleanup();
        });
      }
      expect(errors).toEqual([]);
    });
  }
});

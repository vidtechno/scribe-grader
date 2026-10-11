import { describe, expect, it, vi } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { WRITTEN_UNITS, loadUnit } from './course';
import { BlockView } from './components/BlockView';

vi.mock('@/integrations/supabase/client', () => ({ supabase: {} }));

describe('every slide block renders', () => {
  for (const u of WRITTEN_UNITS) {
    it(u.id, async () => {
      const errors: string[] = [];
      for (const l of await loadUnit(u.id)) {
        l.slides.forEach((s, i) => s.blocks.forEach((b, j) => {
          try { render(<BlockView block={b} />); } catch (e) { errors.push(`${l.id} slide ${i + 1} block ${j + 1} ${b.t}: ${(e as Error).message}`); }
          cleanup();
        }));
      }
      expect(errors).toEqual([]);
    });
  }
});

import { describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pickMockTests } from '@/features/ielts/mock';
import { LISTENING_TESTS, READING_TESTS } from '@/features/ielts/registry';
import { PLAN_ENTITLEMENTS } from '@/lib/plans';

vi.mock('@/integrations/supabase/client', () => ({ supabase: { rpc: vi.fn(async () => ({ error: null })) } }));

const read = (p: string) => readFileSync(resolve(process.cwd(), p), 'utf8');

describe('full mock test with Listening and Reading', () => {
  it('picks tests that were not used in an earlier mock first', () => {
    const l = LISTENING_TESTS.map((t) => t.id), r = READING_TESTS.map((t) => t.id);
    for (let i = 0; i < 30; i++) {
      const p = pickMockTests(['l1', 'l2', 'l3', 'l4'], ['r1', 'r2'], l, r);
      expect(p.listening).toBe('l5');
      expect(['r3', 'r4', 'r5']).toContain(p.reading);
    }
    const all = pickMockTests(l, r, l, r);
    expect(l).toContain(all.listening);
    expect(r).toContain(all.reading);
  });

  it('gives the IELTS plan 6 mock tests a month', () => {
    expect(PLAN_ENTITLEMENTS.plus.personal.mockTests).toBe(6);
    expect(read('supabase/migrations/20261105000000_mock_test_listening_reading.sql')).toContain("set mock_test_limit = 6 where slug = 'plus'");
  });

  it('saves a section only for the owner, on the matching step and test', () => {
    const sql = read('supabase/migrations/20261105000000_mock_test_listening_reading.sql');
    expect(sql).toContain('user_id = uid and status = \'in_progress\'');
    expect(sql).toContain("mt.current_step <> _skill");
    expect(sql).toContain('wrong_test');
    expect(sql).toContain('revoke all on function public.mock_save_section(uuid, text, text, int, int, numeric, jsonb) from public, anon');
  });

  it('rounds the overall band the IELTS way and waits for both sections', () => {
    const fn = read('supabase/functions/process-mock-test/index.ts');
    expect(fn).toContain('frac < 0.25 ? whole : frac < 0.75 ? whole + 0.5 : whole + 1');
    expect(fn).toContain('Listening and Reading must be finished first');
    const round = (a: number) => { const w = Math.floor(a), f = a - w; return f < 0.25 ? w : f < 0.75 ? w + 0.5 : w + 1; };
    expect(round((6.5 + 6 + 6.5 + 7) / 4)).toBe(6.5);
    expect(round((7 + 7 + 7 + 6) / 4)).toBe(7);
    expect(round((6 + 6 + 6 + 6.5) / 4)).toBe(6);
    expect(round((6 + 6 + 6.5 + 6.5) / 4)).toBe(6.5);
  });
});

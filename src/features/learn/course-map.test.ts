import { describe, expect, it, vi } from 'vitest';

vi.mock('@/integrations/supabase/client', () => ({ supabase: {} }));
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: null }) }));
import { courseMap, type LearningState } from './api';

const base = { profile: { level: 'beginner', xp: 0, trial_started_at: '', next_lesson_title: null }, access: { allowed: true, reason: 'paid', plan: 'learn' }, streak: 0, today: '2026-10-11', progress: [], tests: [], activity: [] } as unknown as LearningState;
const done = (...ids: string[]) => ({ ...base, progress: ids.map((id) => ({ lesson_id: id, best_score: 10, total: 10, stars: 3, attempts: 1, completed_at: '2026-10-01' })) }) as LearningState;

describe('courseMap with short lessons', () => {
  it('only Beginner is on the course path while the other levels are hidden', () => {
    expect(courseMap(base).total).toBeGreaterThan(0);
    expect(courseMap(base).unitsTotal).toBe(5);
  });

  it('short lessons stay locked until the lessons before them are done', () => {
    const m = courseMap(done('u1-l1'));
    expect(m.nextLesson?.id).toBe('u1-l2');
    expect(m.lessonState.get('u3-l9')).toBe('locked');
  });

  it('a learner who already went past them keeps them as done', () => {
    const m = courseMap(done('u3-l6'));
    for (const id of ['u3-l9', 'u3-l10', 'u3-l11']) expect(m.done.has(id)).toBe(true);
  });

  it('does not mark short lessons done when the next full lesson is not done', () => {
    const m = courseMap(done('u3-l5'));
    expect(m.done.has('u3-l9')).toBe(false);
  });
});

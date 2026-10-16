import { describe, expect, it, vi } from 'vitest';

vi.mock('@/integrations/supabase/client', () => ({ supabase: {} }));
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: null }) }));
import { courseMap, type LearningState } from './api';
import { learningPlan } from './plan';

const base = { profile: { level: 'beginner', xp: 0, trial_started_at: '', next_lesson_title: null }, access: { allowed: true, reason: 'paid', plan: 'learn' }, streak: 0, today: '2026-10-11', progress: [], tests: [], activity: [] } as unknown as LearningState;
const done = (...ids: string[]) => ({ ...base, progress: ids.map((id) => ({ lesson_id: id, best_score: 10, total: 10, stars: 3, attempts: 1, completed_at: '2026-10-01' })) }) as LearningState;

describe('courseMap with short lessons', () => {
  it('Beginner, Elementary, Pre-Intermediate and Intermediate are on the course path', () => {
    expect(courseMap(base).total).toBeGreaterThan(0);
    expect(courseMap(base).unitsTotal).toBe(23);
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

  it('Elementary short lessons follow the same rule', () => {
    const m = courseMap(done('u6-l1', 'u6-l2'));
    expect(m.done.has('u6-l9')).toBe(false);
    expect(m.done.has('u6-l12')).toBe(false);
    expect(courseMap(done('u6-l1', 'u6-l2', 'u6-l3', 'u6-l8')).done.has('u6-l12')).toBe(true);
    expect(courseMap(done('u6-l1', 'u6-l2', 'u6-l3', 'u6-l4', 'u6-l5', 'u6-l6', 'u6-l7', 'u6-l8')).done.has('u6-l11')).toBe(true);
  });

  it('real-life scenes come in the middle of the path, never block the lessons around them and never count twice', () => {
    // a new learner meets the scene right after the greetings lesson ...
    expect(courseMap(done('u1-l1', 'u1-l2', 'u1-l3', 'u1-l4', 'u1-l5')).nextLesson?.id).toBe('u1-l11');
    // ... and the next lesson waits for it, like for any other lesson
    expect(courseMap(done('u1-l1', 'u1-l2', 'u1-l3', 'u1-l4', 'u1-l5')).lessonState.get('u1-l6')).toBe('locked');
    // a learner who was already beyond it keeps everything done and is not sent back
    const past = courseMap(done('u1-l1', 'u1-l2', 'u1-l3', 'u1-l4', 'u1-l5', 'u1-l6', 'u1-l7'));
    expect(past.done.has('u1-l11')).toBe(true);
    expect(past.nextLesson?.id).toBe('u1-l8');
  });

  it('does not mark short lessons done when the next full lesson is not done', () => {
    const m = courseMap(done('u3-l5'));
    expect(m.done.has('u3-l9')).toBe(false);
  });

  it('a learner who finished the old Unit 3 is not asked to play the new games or short lessons', () => {
    const old = ['u3-l1', 'u3-l2', 'u3-l3', 'u3-l4', 'u3-l5', 'u3-l6', 'u3-l7', 'u3-l8'];
    const oldDrills = ['u3-l2-d1', 'u3-l3-d1', 'u3-l3-d2', 'u3-l4-d1', 'u3-l5-d1', 'u3-l5-d2', 'u3-l7-d1'];
    const state = { ...done(...old), drills: oldDrills.map((d) => ({ drill_id: d, best_score: 10, total: 10, stars: 3, attempts: 1, completed_at: '2026-10-01' })),
      tests: [{ unit_id: 'u1', passed_at: '2026-10-01' }, { unit_id: 'u2', passed_at: '2026-10-01' }] } as unknown as LearningState;
    const m = courseMap(state);
    expect(m.nextDrill).toBeNull();
    for (const id of ['u3-l9', 'u3-l10', 'u3-l11', 'u3-l12', 'u3-l13', 'u3-l14', 'u3-l15']) expect(m.done.has(id), id).toBe(true);
    expect(m.unitTest.get('u3')).toBe('open');
  });

  it('a learner in the middle of Unit 3 meets the new lessons and games in order', () => {
    const dr = ['u3-l2-d1', 'u3-l3-d1', 'u3-l3-d2'].map((d) => ({ drill_id: d, best_score: 10, total: 10, stars: 3, attempts: 1, completed_at: '2026-10-01' }));
    const m = courseMap({ ...done('u3-l1', 'u3-l2', 'u3-l3'), drills: dr, tests: [{ unit_id: 'u1', passed_at: '2026-10-01' }, { unit_id: 'u2', passed_at: '2026-10-01' }] } as unknown as LearningState);
    expect(m.nextLesson?.id).toBe('u3-l13');
  });

  it('the learning plan lists the next steps in course order, first one open', () => {
    const plan = learningPlan(base, 4);
    expect(plan.steps).toHaveLength(4);
    expect(plan.steps[0]).toMatchObject({ id: 'u1-l1', kind: 'lesson', open: true });
    expect(plan.steps.slice(1).every((s) => !s.open)).toBe(true);
    expect(plan.unit?.id).toBe('u1');
    expect(plan.levelTotal).toBeGreaterThan(plan.levelDone);
  });

  it('the plan puts a pending game right after its lesson', () => {
    const plan = learningPlan({ ...done('u3-l1', 'u3-l2'), tests: [{ unit_id: 'u1', passed_at: '2026-10-01' }, { unit_id: 'u2', passed_at: '2026-10-01' }] } as unknown as LearningState, 3);
    expect(plan.steps[0]).toMatchObject({ id: 'u3-l2-d1', kind: 'drill', open: true });
  });
});

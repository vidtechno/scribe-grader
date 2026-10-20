import { describe, expect, it, vi } from 'vitest';

vi.mock('@/integrations/supabase/client', () => ({ supabase: { rpc: vi.fn(() => { throw new Error('the real backend must not be called from tests'); }) } }));
vi.mock('@/hooks/useAuth', () => ({ useAuth: () => ({ user: null }) }));

import { lessonEntry, startLevelForLesson } from './lesson-entry';
import type { LearningState } from './api';
import { ALL_LESSONS, COURSE_UNITS } from './course';

const base = (over: Partial<LearningState> = {}): LearningState => ({
  profile: { level: 'beginner', xp: 0, trial_started_at: '2026-01-01T00:00:00Z', next_lesson_title: null },
  access: { allowed: true, reason: 'trial', plan: 'free', trial_ends_at: '2099-01-01T00:00:00Z' },
  streak: 0, today: '2026-01-01', progress: [], tests: [], activity: [],
  ...over,
});
const first = (level: string) => COURSE_UNITS.find((u) => u.level === level)!.lessons[0].id;

describe('opening a lesson link', () => {
  it('an unknown lesson id is reported, not started', () => {
    expect(lessonEntry(base(), 'nope').kind).toBe('unknown');
    expect(lessonEntry(undefined, 'nope').kind).toBe('unknown');
  });

  it('a brand-new learner (no profile) is started at the level of that lesson', () => {
    expect(lessonEntry(base({ profile: null, access: { allowed: false, reason: 'not_started', plan: 'free' } }), 'u1-l1')).toEqual({ kind: 'start', level: 'beginner' });
    for (const level of ['a1', 'a2', 'b1'] as const) {
      expect(lessonEntry(base({ profile: null }), first(level))).toEqual({ kind: 'start', level });
    }
  });

  it('start calls only the existing level-picker RPC, with the lesson\'s level, and never touches progress', async () => {
    const call = vi.fn(async () => ({}));
    await expect(startLevelForLesson(first('a2'), call)).resolves.toBe('a2');
    expect(call).toHaveBeenCalledTimes(1);
    expect(call).toHaveBeenCalledWith('learning_start_chosen', { _level: 'a2' });
    const none = vi.fn(async () => ({}));
    await expect(startLevelForLesson('nope', none)).resolves.toBeNull();
    expect(none).not.toHaveBeenCalled();
  });

  it('a failing start (server refuses the level) surfaces as an error', async () => {
    const call = vi.fn(async () => { throw new Error('level_not_available'); });
    await expect(startLevelForLesson('u1-l1', call)).rejects.toThrow('level_not_available');
  });

  it('after the start, the first lesson of the level opens', () => {
    expect(lessonEntry(base(), 'u1-l1')).toEqual({ kind: 'ok' });
    expect(lessonEntry(base({ profile: { level: 'a1', xp: 0, trial_started_at: '', next_lesson_title: null } }), first('a1'))).toEqual({ kind: 'ok' });
  });

  it('a later lesson is locked by order and points to the lesson the learner can open', () => {
    const later = COURSE_UNITS[0].lessons[4].id;
    const e = lessonEntry(base(), later);
    expect(e.kind).toBe('locked');
    if (e.kind === 'locked') expect(e.next?.id).toBe('u1-l1');
  });

  it('a lesson of another unit is locked until the unit test is passed', () => {
    const e = lessonEntry(base(), COURSE_UNITS[1].lessons[0].id);
    expect(e.kind).toBe('locked');
  });

  it('an expired trial shows the paywall, even for the first lesson (access is not weakened)', () => {
    expect(lessonEntry(base({ access: { allowed: false, reason: 'trial_expired', plan: 'free' } }), 'u1-l1')).toEqual({ kind: 'paywall' });
  });

  it('lessons of lower levels stay open for review for someone who started higher', () => {
    const state = base({ profile: { level: 'a1', xp: 0, trial_started_at: '', next_lesson_title: null } });
    expect(lessonEntry(state, 'u1-l1')).toEqual({ kind: 'ok' });
    expect(ALL_LESSONS.length).toBeGreaterThan(300);
  });
});

import { describe, expect, it, vi } from 'vitest';
vi.mock('@/integrations/supabase/client', () => ({ supabase: {} }));
import { checkOrder, checkTyped, judgeSpeech, normalize, speechQualityHint, spokenMatch } from './check';
import { unitTestQuestions, wordDrills } from './practice';
import { courseMap, type LearningState } from './api';
import { ALL_LESSONS } from './course';
import type { Lesson } from './types';

describe('answer checking', () => {
  it('ignores case, final punctuation and apostrophe style', () => {
    expect(normalize("  I’m   a Student. ")).toBe("i'm a student");
    expect(checkTyped("i'm a student", ["I'm a student", 'I am a student']).correct).toBe(true);
    expect(checkTyped('I am a student!', ["I'm a student", 'I am a student']).correct).toBe(true);
  });

  it('accepts one typo only in longer answers and reports it', () => {
    expect(checkTyped('umbrela', ['umbrella'])).toMatchObject({ correct: true, typo: true });
    expect(checkTyped('cot', ['cat']).correct).toBe(false);
    expect(checkTyped('', ['cat']).correct).toBe(false);
  });

  it('checks built sentences against the correct order and alternatives', () => {
    expect(checkOrder(['She', 'is', 'a', 'doctor'], ['She', 'is', 'a', 'doctor'])).toBe(true);
    expect(checkOrder(['Is', 'she', 'a', 'doctor'], ['She', 'is', 'a', 'doctor'])).toBe(false);
    expect(checkOrder(['Today', 'I', 'work'], ['I', 'work', 'today'], [['Today', 'I', 'work']])).toBe(true);
  });

  it('measures how much of a phrase was recognised', () => {
    expect(spokenMatch('nice to meet you', 'Nice to meet you!')).toBe(1);
    expect(spokenMatch('nice', 'Nice to meet you')).toBe(0.25);
  });
});

const words = Array.from({ length: 10 }, (_, i) => ({ en: `word${i}`, uz: `soz${i}` }));
const lesson = (id: string): Lesson => ({
  id, title: id, titleUz: id, goal: 'g', slides: [], words, practice: [], summary: ['a'],
  quiz: Array.from({ length: 10 }, (_, i) => ({ k: 'tf' as const, q: `${id}-${i}`, a: true })),
});

describe('generated practice', () => {
  it('builds word drills whose answers point at the right option', () => {
    for (const ex of wordDrills(words)) {
      if (ex.k === 'listen') expect(ex.opts[ex.a]).toBe(ex.say);
      if (ex.k === 'match') expect(ex.pairs.length).toBeGreaterThanOrEqual(3);
    }
  });

  it('draws a 20-question unit test from every lesson', () => {
    const lessons = Array.from({ length: 8 }, (_, i) => lesson(`u1-l${i + 1}`));
    const qs = unitTestQuestions(lessons, 20);
    expect(qs).toHaveLength(20);
    for (let i = 1; i <= 8; i++) expect(qs.some((q) => q.k === 'tf' && q.q.startsWith(`u1-l${i}-`))).toBe(true);
  });
});

describe('course map', () => {
  const base: LearningState = {
    profile: { level: 'beginner', xp: 0, trial_started_at: '', next_lesson_title: null },
    access: { allowed: true, reason: 'trial', plan: 'free' }, streak: 0, today: '2026-10-08', progress: [], tests: [], activity: [],
  };
  const done = (ids: string[]) => ids.map((lesson_id) => ({ lesson_id, best_score: 9, total: 10, stars: 3, attempts: 1, completed_at: '2026-10-08' }));

  it('opens only the first lesson at the start', () => {
    const m = courseMap(base);
    expect(m.lessonState.get('u1-l1')).toBe('current');
    expect(m.lessonState.get('u1-l2')).toBe('locked');
    expect(m.unitTest.get('u1')).toBe('optional');
    expect(m.unitTest.get('u2')).toBe('locked');
  });

  it('lets a learner test out of a unit: passing marks its lessons done and opens the next unit', () => {
    const m = courseMap({ ...base, tests: [{ unit_id: 'u1', attempts: 0, best_score: 18, best_total: 20, passed_at: 'x', locked_until: null, last_attempt_at: null }] });
    expect(m.lessonState.get('u1-l1')).toBe('done');
    expect(m.lessonState.get('u2-l1')).toBe('current');
    expect(m.unitTest.get('u2')).toBe('optional');
    expect(m.doneCount).toBeGreaterThanOrEqual(8);
  });

  it('opens the unit test after all lessons and the next unit only after passing it', () => {
    const unit1 = ALL_LESSONS.filter((l) => l.unitId === 'u1').map((l) => l.id);
    let m = courseMap({ ...base, progress: done(unit1) });
    expect(m.unitTest.get('u1')).toBe('open');
    expect(m.lessonState.get('u2-l1')).toBe('locked');
    expect(m.pendingTest?.id).toBe('u1');
    m = courseMap({ ...base, progress: done(unit1), tests: [{ unit_id: 'u1', attempts: 0, best_score: 18, best_total: 20, passed_at: 'x', locked_until: null, last_attempt_at: null }] });
    expect(m.lessonState.get('u2-l1')).toBe('current');
    const cooldown = courseMap({ ...base, progress: done(unit1), tests: [{ unit_id: 'u1', attempts: 2, best_score: 10, best_total: 20, passed_at: null, locked_until: new Date(Date.now() + 3_600_000).toISOString(), last_attempt_at: null }] });
    expect(cooldown.unitTest.get('u1')).toBe('cooldown');
  });
});

describe('judgeSpeech (lenient speaking practice)', () => {
  it('accepts the exact phrase and ignores case, punctuation and extra words', () => {
    expect(judgeSpeech('Hello, my name is Anvar.', 'My name is Anvar').level).toBe('great');
    expect(judgeSpeech('uh I have a window', 'I have a window').passed).toBe(true);
  });
  it('does not punish accents: sound-alike words, endings and small slips still pass', () => {
    expect(judgeSpeech('I see yellow', 'I see yellow').passed).toBe(true);
    expect(judgeSpeech('vindow', 'window').passed).toBe(true);      // one letter off
    expect(judgeSpeech('windows', 'window').passed).toBe(true);     // ending
    expect(judgeSpeech('right', 'write').passed).toBe(true);        // sounds alike
    expect(judgeSpeech('I am from Uzbekistan', "I'm from Uzbekistan").level).toBe('great'); // contraction
    expect(judgeSpeech('I have 2 brothers', 'I have two brothers').level).toBe('great');    // number
  });
  it('ignores a dropped article but not a missing content word', () => {
    expect(judgeSpeech('I have book', 'I have a book').passed).toBe(true);
    expect(judgeSpeech('I have', 'I have a red book').passed).toBe(false);
  });
  it('fails clearly different or empty speech and reports what was missing', () => {
    const j = judgeSpeech('good morning teacher', 'I like coffee');
    expect(j.passed).toBe(false);
    expect(j.missing).toEqual(expect.arrayContaining(['like', 'coffee']));
    expect(judgeSpeech('', 'hello').level).toBe('retry');
  });
  it('gives recording advice only when it did not pass', () => {
    expect(speechQualityHint('', { noSpeechProbability: 0.9, duration: 1 }, false)).toMatch(/eshitilmadi/);
    expect(speechQualityHint('mumble', { avgLogprob: -1.6 }, false)).toMatch(/sifati past/);
    expect(speechQualityHint('hello', { avgLogprob: -1.6 }, true)).toBeNull();
  });
});

import { describe, expect, it } from 'vitest';
import { BEGINNER_UNITS, PLACEMENT, loadUnit } from './course';
import { placementQuestions } from './practice';

describe('placement test', () => {
  it('has 20 playable questions drawn evenly from the five Beginner units', async () => {
    const units = await Promise.all(BEGINNER_UNITS.map((u) => loadUnit(u.id)));
    const qs = placementQuestions(units, PLACEMENT.questions);
    expect(qs).toHaveLength(20);
    expect(new Set(qs).size).toBe(20);
    expect(qs.some((q) => q.k === 'speak' || q.k === 'match')).toBe(false);
    // 4 questions from each unit
    units.forEach((lessons) => {
      const pool = new Set(lessons.flatMap((l) => l.quiz));
      expect(qs.filter((q) => pool.has(q))).toHaveLength(4);
    });
  });

  it('changes between attempts', async () => {
    const units = await Promise.all(BEGINNER_UNITS.map((u) => loadUnit(u.id)));
    const a = placementQuestions(units, 20);
    const b = placementQuestions(units, 20);
    expect(a).not.toEqual(b);
  });
});

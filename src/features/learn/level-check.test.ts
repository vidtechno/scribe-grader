import { describe, expect, it } from 'vitest';
import { bandResults, buildStartCheck, buildUpgradeCheck, recommendLevel, CHECK_SIZE, type CheckItem } from './level-check';

const items = (bands: string[]): CheckItem[] => bands.map((band) => ({ band, ex: { k: 'tf', q: 'x', a: true } }) as CheckItem);
const layout = ['beginner', 'beginner', 'beginner', 'beginner', 'beginner', 'a1', 'a1', 'a1', 'a1', 'a2', 'a2', 'a2', 'b1', 'b1', 'b1'];

describe('level check', () => {
  it('builds 15 questions, easy levels first, with no speaking or typing-heavy kinds', async () => {
    const start = await buildStartCheck();
    expect(start).toHaveLength(CHECK_SIZE);
    expect(start.map((s) => s.band)).toEqual(layout);
    for (const s of start) expect(['choice', 'tf', 'fill', 'fix', 'order', 'listen']).toContain(s.ex.k);
  });

  it('builds the upgrade test from the level just below the target', async () => {
    const up = await buildUpgradeCheck('a1');
    expect(up).toHaveLength(CHECK_SIZE);
    expect(new Set(up.map((u) => u.band))).toEqual(new Set(['beginner']));
    const up2 = await buildUpgradeCheck('a2');
    expect(new Set(up2.map((u) => u.band))).toEqual(new Set(['a1']));
    const up3 = await buildUpgradeCheck('b1');
    expect(new Set(up3.map((u) => u.band))).toEqual(new Set(['a2']));
  });

  it('recommends the level the learner really knows', () => {
    const it = items(layout);
    const answers = (right: boolean[]) => bandResults(it, right);
    // everything wrong → Beginner
    expect(recommendLevel(answers(layout.map(() => false)))).toBe('beginner');
    // Beginner band solid (4 of 5), the rest wrong → Elementary
    expect(recommendLevel(answers(layout.map((b, i) => b === 'beginner' && i < 4)))).toBe('a1');
    // Beginner and Elementary solid → Pre-Intermediate
    expect(recommendLevel(answers(layout.map((b) => b === 'beginner' || b === 'a1')))).toBe('a2');
    // everything below Intermediate solid → Intermediate
    expect(recommendLevel(answers(layout.map(() => true)))).toBe('b1');
    // a lucky Elementary band without Beginner stays Beginner
    expect(recommendLevel(answers(layout.map((b) => b === 'a1')))).toBe('beginner');
  });
});

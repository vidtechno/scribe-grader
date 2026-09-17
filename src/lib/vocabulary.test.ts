import { describe, expect, it } from 'vitest';
import { dueWords, reviewWord, WORDS } from './vocabulary';

describe('vocabulary review schedule', () => {
  it('schedules a remembered word and brings it back when due', () => {
    const first = reviewWord(undefined, true, 0);
    expect(first.stage).toBe(1);
    expect(dueWords(WORDS.slice(0, 1), { [WORDS[0].word]: first }, 1)).toHaveLength(0);
    expect(dueWords(WORDS.slice(0, 1), { [WORDS[0].word]: first }, 86_400_000)).toHaveLength(1);
  });
  it('returns forgotten words to today’s practice', () => {
    const forgotten = reviewWord({ stage: 3, dueAt: 9_000, reviews: 3 }, false, 1_000);
    expect(forgotten).toEqual({ stage: 0, dueAt: 1_000, reviews: 4 });
  });
});

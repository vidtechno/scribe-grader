import { describe, expect, it, beforeEach } from 'vitest';
import { buildDailyTest, dailySentence, isDailyDone, markDailyDone, pickDailyWords, seededRandom, DAILY_WORDS } from './daily';
import type { ReviewQueue } from './engine/engine';
import type { Word } from './types';

const words: Word[] = Array.from({ length: 12 }, (_, i) => ({ en: `word${i}`, uz: `so'z${i}`, ex: i % 2 ? `This is word${i} here.` : undefined, exUz: i % 2 ? `Bu yerda so'z${i}.` : undefined }));
const queue = (due: string[]): ReviewQueue => ({
  new_target: 6, grammar: [], mistakes: [], known: [],
  words: due.map((en) => ({ word: en, en, uz: `uz-${en}`, box: 1, lapses: 0, introduced: true })),
  stats: { mastered: 0, learning: 0, new: 0, seen: 0, due: due.length, mistakes: 0, grammar_weak: 0 },
});

describe('daily set', () => {
  it('is stable for a day and changes on another day', () => {
    const a = pickDailyWords(words, null, '2026-10-21').map((w) => w.en);
    expect(pickDailyWords(words, null, '2026-10-21').map((w) => w.en)).toEqual(a);
    expect(a).toHaveLength(DAILY_WORDS);
    expect(new Set(a).size).toBe(DAILY_WORDS);
    expect(pickDailyWords(words, null, '2026-10-22').map((w) => w.en)).not.toEqual(a);
  });
  it('takes due words first, then fills from the learned words with examples preferred', () => {
    const picked = pickDailyWords(words, queue(['word4']), '2026-10-21').map((w) => w.en);
    expect(picked[0]).toBe('word4');
    expect(picked.slice(1).every((en) => words.find((w) => w.en === en)?.ex)).toBe(true);
  });
  it('never repeats a word and copes with a small pool', () => {
    expect(pickDailyWords(words.slice(0, 2), queue(['word0', 'word0']), 'd')).toHaveLength(2);
  });
  it('seeded random is deterministic and within [0,1)', () => {
    const r1 = seededRandom('x'), r2 = seededRandom('x');
    for (let i = 0; i < 20; i++) { const v = r1(); expect(v).toBe(r2()); expect(v).toBeGreaterThanOrEqual(0); expect(v).toBeLessThan(1); }
  });
  it('the sentence comes from a picked word that has one', () => {
    expect(dailySentence([words[0], words[1]])).toEqual({ word: 'word1', en: 'This is word1 here.', uz: "Bu yerda so'z1." });
    expect(dailySentence([words[0]])).toBeNull();
  });
  it('the mini-test has one exercise per word, records into the word mastery and is capped', () => {
    const pool = words.map((w) => ({ en: w.en, uz: w.uz }));
    const picked = pickDailyWords(words, null, '2026-10-21');
    const test = buildDailyTest(picked, null, pool, [], { random: seededRandom('t') });
    expect(test).toHaveLength(DAILY_WORDS);
    for (const item of test) expect(item.ref.type).toBe('w');
    const many = buildDailyTest(picked, null, pool, Array.from({ length: 12 }, (_, i) => ({ id: `m:${i}`, ex: test[0].ex, ref: { type: 'm' as const, key: `k${i}`, lesson: 'u1-l1' } })));
    expect(many.length).toBeLessThanOrEqual(8);
  });
});

describe('done today', () => {
  beforeEach(() => localStorage.clear());
  it('is per account and per day', () => {
    expect(isDailyDone('a', '2026-10-21')).toBe(false);
    markDailyDone('a', '2026-10-21');
    expect(isDailyDone('a', '2026-10-21')).toBe(true);
    expect(isDailyDone('b', '2026-10-21')).toBe(false);
    expect(isDailyDone('a', '2026-10-22')).toBe(false);
    expect(isDailyDone(undefined, '2026-10-21')).toBe(false);
  });
});

import { describe, expect, it, beforeAll } from 'vitest';

// The bot modules read Deno.env while loading; give them an empty one.
// (imported by a variable path so the app's type check, which has no Deno types, does not load the bot sources)
type LearnSummary = Record<string, unknown>;
let reminderText: (slot: string, phase: string, s: LearnSummary, v: number, words?: { en: string; uz: string }[]) => string;
let wordsBlock: (words: { en: string; uz: string }[]) => string;
const COPY = '../../supabase/functions/telegram-bot/learn-copy.ts';
beforeAll(async () => {
  (globalThis as unknown as { Deno: unknown }).Deno = { env: { get: (k: string) => (k.includes('URL') ? 'http://localhost:54321' : 'test') } };
  ({ reminderText, wordsBlock } = await import(/* @vite-ignore */ COPY));
});

const words = [
  { en: 'apple', uz: 'olma' },
  { en: 'tea & milk', uz: "choy <va> sut" },
  { en: 'window', uz: 'deraza', ex: 'Open the window.' },
  { en: 'fourth', uz: "to'rtinchi" },
];
const base: LearnSummary = { started: true, streak: 0, idle_days: 3, next_lesson_title: 'Present Simple', access: { allowed: true } };

describe('study reminders with the learner\'s own words', () => {
  it('lists at most three words and escapes the text', () => {
    const block = wordsBlock(words);
    expect(block).toContain('Bugungi so\'zlar');
    expect(block).toContain('<b>apple</b> — olma');
    expect(block).toContain('tea &amp; milk');
    expect(block).toContain('choy &lt;va&gt; sut');
    expect(block).not.toContain('fourth');
    expect(wordsBlock([])).toBe('');
  });
  it('adds the words to the daily and comeback reminders only', () => {
    expect(reminderText('evening', 'daily', base, 1, words)).toContain('<b>apple</b>');
    expect(reminderText('morning', 'comeback', base, 1, words)).toContain('<b>apple</b>');
    expect(reminderText('evening', 'weekly', base, 1, words)).not.toContain('apple');
    expect(reminderText('evening', 'last', base, 1, words)).not.toContain('apple');
  });
  it('still works without words (old call shape)', () => {
    expect(reminderText('evening', 'daily', base, 1)).not.toContain('Bugungi so\'zlar');
  });
  it('says plainly when a long streak broke, and keeps the progress promise', () => {
    const s = { ...base, streak_info: { current: 0, best: 12, at_risk: false, broken: true } };
    const text = reminderText('morning', 'comeback', s, 1, words);
    expect(text).toContain('12 kunlik streak uzildi');
    expect(text).toContain('joyida');
    expect(reminderText('morning', 'comeback', { ...base, streak_info: { current: 0, best: 2, at_risk: false, broken: true } }, 1, words)).not.toContain('uzildi');
  });
});

// "Kun sahifasi": a five-minute set made from words the learner already met: 3 words of the day, one sentence and a short
// mini-test. The words are the same all day (seeded by the date), so reopening the page does not reshuffle them. Due words
// from the review engine come first; the answers are recorded through the same review events, so mastery boxes, streak and XP
// work exactly as in the "Takrorlash" round.
import type { Lang } from '@/i18n';
import { shuffle } from './check';
import { wordExercise, type QueueWord, type ReviewQueue, type SessionItem } from './engine/engine';
import type { Word } from './types';

export const DAILY_WORDS = 3;
export const DAILY_TEST_MAX = 8;
/** Fewest learned words needed for a sensible set (multiple-choice needs distractors). */
export const DAILY_MIN_POOL = 6;

const norm = (s: string) => s.toLowerCase().trim();

/** Small deterministic random generator (mulberry32) seeded from a string such as "2026-10-21". */
export function seededRandom(seed: string): () => number {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) { h = Math.imul(h ^ seed.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
  let a = Math.imul(h ^ (h >>> 16), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909) >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** The words of the day: words due for review first (shakiest first), then a seeded pick of the learned words, those with an example sentence preferred. */
export function pickDailyWords(all: Word[], queue: ReviewQueue | null | undefined, day: string, count = DAILY_WORDS): Word[] {
  const byEn = new Map(all.map((w) => [norm(w.en), w]));
  const picked: Word[] = [];
  const seen = new Set<string>();
  const add = (w: Word | undefined) => { if (w && !seen.has(norm(w.en)) && picked.length < count) { seen.add(norm(w.en)); picked.push(w); } };
  for (const q of queue?.words ?? []) {
    if (!q.introduced) continue;
    add(byEn.get(norm(q.en)) ?? { en: q.en, uz: q.uz, ex: q.ex ?? undefined, exUz: q.ex_uz ?? undefined });
  }
  const rest = shuffle(all.filter((w) => !seen.has(norm(w.en))), seededRandom(day));
  for (const w of [...rest.filter((x) => x.ex), ...rest.filter((x) => !x.ex)]) add(w);
  return picked;
}

/** The sentence of the day: the first picked word that has an English example (and its Uzbek translation when known). */
export function dailySentence(words: Word[]): { word: string; en: string; uz?: string } | null {
  const w = words.find((x) => x.ex?.trim());
  return w ? { word: w.en, en: w.ex!.trim(), uz: w.exUz?.trim() || undefined } : null;
}

/** Mini-test: one exercise per word of the day plus items the engine says are due (mistakes, weak grammar), shuffled and capped. */
export function buildDailyTest(
  words: Word[], queue: ReviewQueue | null | undefined, pool: { en: string; uz: string }[], extra: SessionItem[] = [],
  opts: { random?: () => number; lang?: Lang; max?: number } = {},
): SessionItem[] {
  const random = opts.random ?? Math.random;
  const rows = new Map((queue?.words ?? []).map((q) => [norm(q.en), q]));
  const items: SessionItem[] = [];
  for (const w of words) {
    const row: QueueWord = rows.get(norm(w.en)) ?? {
      word: norm(w.en), en: w.en, uz: w.uz, ex: w.ex ?? null, ex_uz: w.exUz ?? null, box: 2, lapses: 0, introduced: true,
    };
    const ex = wordExercise({ ...row, introduced: true }, pool.filter((p) => p.uz), random, false, opts.lang);
    if (ex) items.push({ id: `w:${row.word}`, ex, ref: { type: 'w', row } });
  }
  const ids = new Set(items.map((i) => i.id));
  for (const e of extra) if (!ids.has(e.id)) { ids.add(e.id); items.push(e); }
  return shuffle(items, random).slice(0, opts.max ?? DAILY_TEST_MAX);
}

// ---------------------------------------------------------------- "done today" (per account, per day)
const doneKey = (userId: string, day: string) => `scorify:daily:${userId}:${day}`;
export function isDailyDone(userId: string | undefined, day: string): boolean {
  if (!userId) return false;
  try { return localStorage.getItem(doneKey(userId, day)) === '1'; } catch { return false; }
}
export function markDailyDone(userId: string | undefined, day: string) {
  if (!userId) return;
  try { localStorage.setItem(doneKey(userId, day), '1'); } catch { /* storage unavailable */ }
}

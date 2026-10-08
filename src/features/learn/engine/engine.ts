// Scorify Learning Engine, client side. The lesson content stays as written; this module decides which words are
// new in a lesson, what comes back from earlier lessons, and what to tell the database afterwards (see
// supabase/migrations/20261015000000_learning_engine.sql for the scheduling).
import { shuffle } from '../check';
import type { Block, Exercise, Lesson, Word } from '../types';

export interface QueueWord {
  word: string; en: string; uz: string; ex?: string | null; ex_uz?: string | null; lesson_id?: string | null;
  box: number; lapses: number; introduced: boolean;
}
export interface QueueMistake { key: string; lesson: string; payload: Exercise; wrong_count: number }
export interface QueueGrammar { topic: string; title: string; box: number }
export interface ReviewQueue {
  new_target: number;
  words: QueueWord[];
  grammar: QueueGrammar[];
  mistakes: QueueMistake[];
  /** [word, box, introduced] for every word the learner has met. */
  known: [string, number, boolean][];
  stats: { mastered: number; learning: number; new: number; seen: number; due: number; mistakes: number; grammar_weak: number };
}

export type ReviewEvent =
  | { t: 'w'; word: string; en: string; uz: string; ex?: string; ex_uz?: string; lesson?: string; r: 'seen' | 'intro' | 'right' | 'wrong' }
  | { t: 'g'; topic: string; title?: string; right: number; wrong: number }
  | { t: 'm'; key: string; lesson: string; payload?: Exercise; r: 'right' | 'wrong' };

export const DEFAULT_NEW_WORDS = 6;
const wordKey = (en: string) => en.toLowerCase().trim();
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const formRe = (word: string) => new RegExp(`\\b${escapeRe(word)}(?:s|es|ed|ing)?\\b`, 'i');

// ---------------------------------------------------------------- which words are new

/**
 * The lesson keeps its 10 words, but only a few are taught as new (flashcards, drills, memorised). The rest are met
 * as exposure and come back through the review queue. Words the learner already works with are review, not new.
 */
export function splitNewWords(words: Word[], queue: ReviewQueue | null | undefined): { fresh: Word[]; extra: Word[] } {
  const target = Math.max(3, Math.min(words.length, queue?.new_target ?? DEFAULT_NEW_WORDS));
  const introduced = new Set((queue?.known ?? []).filter(([, , intro]) => intro).map(([w]) => w));
  const candidates = words.filter((w) => !introduced.has(wordKey(w.en)));
  const fresh = candidates.slice(0, target);
  const extra = words.filter((w) => !fresh.includes(w));
  return { fresh, extra };
}

// ---------------------------------------------------------------- exercises made from words

interface Pair { en: string; uz: string }

function distractors(pool: Pair[], key: 'en' | 'uz', correct: string, random: () => number): string[] | null {
  const seen = new Set([correct.toLowerCase()]);
  const out: string[] = [];
  for (const p of shuffle(pool, random)) {
    const v = p[key];
    if (!v || seen.has(v.toLowerCase())) continue;
    seen.add(v.toLowerCase());
    out.push(v);
    if (out.length === 3) return out;
  }
  return null;
}

/** One exercise for a word. Easier kinds for shaky words, sentences and typing as the word gets stronger. */
export function wordExercise(w: QueueWord, pool: Pair[], random = Math.random, allowSpeak = false): Exercise | null {
  const why = `**${w.en}** — ${w.uz}`;
  const sentence = w.ex?.trim();
  const re = formRe(w.en);
  const inSentence = !!sentence && re.test(sentence);
  const kind = !w.introduced ? 'meet' : w.box <= 1 ? (random() < 0.5 ? 'listen' : 'uz2en') : w.box <= 3 ? 'context' : 'recall';

  const choose = (prompt: 'en' | 'uz'): Exercise | null => {
    const answerKey = prompt === 'en' ? 'uz' : 'en';
    const others = distractors(pool, answerKey, w[answerKey], random);
    if (!others) return null;
    const opts = shuffle([w[answerKey], ...others], random);
    const q = prompt === 'en' ? `**${w.en}** so'zining ma'nosi qaysi?` : `"**${w.uz}**" inglizcha qanday?`;
    return { k: 'choice', q, say: prompt === 'en' ? w.en : undefined, opts, a: opts.indexOf(w[answerKey]), why };
  };

  if (kind === 'meet') return choose('en');
  if (kind === 'listen') {
    const others = distractors(pool, 'en', w.en, random);
    if (others) { const opts = shuffle([w.en, ...others], random); return { k: 'listen', say: w.en, opts, a: opts.indexOf(w.en), why }; }
    return choose('uz');
  }
  if (kind === 'uz2en') return choose('uz') ?? choose('en');
  if (kind === 'context') {
    if (inSentence && sentence) {
      const matched = re.exec(sentence)![0];
      return { k: 'fill', q: sentence.replace(re, '___'), a: [matched, w.en], uz: w.ex_uz ?? undefined, hint: w.uz, why };
    }
    return choose('uz') ?? choose('en');
  }
  // recall: type it, build the sentence, or say it
  if (sentence && w.ex_uz && allowSpeak && random() < 0.25) return { k: 'speak', say: sentence, uz: w.ex_uz };
  const tokens = sentence?.replace(/[.!?]+$/, '').split(/\s+/).filter(Boolean) ?? [];
  if (sentence && w.ex_uz && inSentence && tokens.length >= 3 && tokens.length <= 9 && random() < 0.5) {
    return { k: 'order', uz: w.ex_uz, words: tokens, why };
  }
  return { k: 'translate', uz: w.uz, a: [w.en], why };
}

/** Lesson-level topics ("grammar") are practised with the lesson's own non-vocabulary exercises. */
export function isGrammarExercise(ex: Exercise): boolean {
  switch (ex.k) {
    case 'fill': case 'order': case 'translate': return true;
    case 'choice': case 'tf': return !('say' in ex && ex.say);
    default: return false;
  }
}

export function grammarExercises(lesson: Lesson, count = 2, random = Math.random): Exercise[] {
  const pool = [...lesson.practice, ...lesson.quiz].filter(isGrammarExercise);
  return shuffle(pool, random).slice(0, count);
}

// ---------------------------------------------------------------- the warm-up session

export type SessionRef =
  | { type: 'w'; row: QueueWord }
  | { type: 'm'; key: string; lesson: string }
  | { type: 'g'; topic: string };
export interface SessionItem { id: string; ex: Exercise; ref: SessionRef }

/**
 * A short mixed session: due words (most overdue and shakiest first), words that were only seen, the mistake notebook
 * and one or two weak grammar topics. `grammar` holds exercises already loaded for the due topics.
 */
export function buildSession(
  queue: ReviewQueue, extraPool: Pair[], grammar: { topic: string; ex: Exercise }[],
  opts: { max?: number; random?: () => number; allowSpeak?: boolean } = {},
): SessionItem[] {
  const random = opts.random ?? Math.random;
  const max = opts.max ?? 7;
  const pool: Pair[] = [...queue.words.map((w) => ({ en: w.en, uz: w.uz })), ...extraPool];
  const items: SessionItem[] = [];
  let speakLeft = opts.allowSpeak ? 1 : 0;

  const introduced = queue.words.filter((w) => w.introduced).slice(0, 4);
  const seenOnly = queue.words.filter((w) => !w.introduced).slice(0, 2);
  for (const w of [...introduced, ...seenOnly]) {
    const ex = wordExercise(w, pool.filter((p) => p.uz), random, speakLeft > 0);
    if (!ex) continue;
    if (ex.k === 'speak') speakLeft--;
    items.push({ id: `w:${w.word}`, ex, ref: { type: 'w', row: w } });
  }
  for (const m of queue.mistakes.slice(0, 2)) {
    if (m.payload && typeof m.payload === 'object' && 'k' in m.payload) items.push({ id: `m:${m.key}`, ex: m.payload, ref: { type: 'm', key: m.key, lesson: m.lesson } });
  }
  for (const g of grammar.slice(0, 2)) items.push({ id: `g:${g.topic}`, ex: g.ex, ref: { type: 'g', topic: g.topic } });
  return shuffle(items, random).slice(0, max);
}

/** Outcomes of a finished session as database events. */
export function sessionEvents(results: { item: SessionItem; correct: boolean }[]): ReviewEvent[] {
  const events: ReviewEvent[] = [];
  const grammar = new Map<string, { right: number; wrong: number }>();
  for (const { item, correct } of results) {
    const ref = item.ref;
    if (ref.type === 'w') events.push({ t: 'w', word: ref.row.word, en: ref.row.en, uz: ref.row.uz, ex: ref.row.ex ?? undefined, ex_uz: ref.row.ex_uz ?? undefined, lesson: ref.row.lesson_id ?? undefined, r: correct ? 'right' : 'wrong' });
    else if (ref.type === 'm') events.push({ t: 'm', key: ref.key, lesson: ref.lesson, r: correct ? 'right' : 'wrong' });
    else {
      const g = grammar.get(ref.topic) ?? { right: 0, wrong: 0 };
      if (correct) g.right++; else g.wrong++;
      grammar.set(ref.topic, g);
    }
  }
  for (const [topic, g] of grammar) events.push({ t: 'g', topic, ...g });
  return events;
}

// ---------------------------------------------------------------- what a finished lesson tells the engine

export const exerciseKey = (lessonId: string, section: 'p' | 'q', index: number) => `${lessonId}#${section}#${index}`;

function exerciseText(ex: Exercise): string {
  switch (ex.k) {
    case 'choice': return [ex.q, ex.say ?? '', ...ex.opts].join(' ');
    case 'listen': return [ex.say, ...ex.opts].join(' ');
    case 'fill': return [ex.q, ...ex.a].join(' ');
    case 'order': return ex.words.join(' ');
    case 'translate': return ex.a.join(' ');
    case 'match': return ex.pairs.map((p) => p[0]).join(' ');
    case 'tf': return ex.q;
    case 'speak': return ex.say;
  }
}

function blockText(b: Block): string {
  switch (b.t) {
    case 'p': case 'tip': return b.md;
    case 'examples': return b.items.map((i) => i.en).join(' ');
    case 'table': return b.rows.flat().join(' ');
    case 'dialog': return b.lines.map((l) => l.en).join(' ');
    case 'text': return b.en;
    case 'check': return exerciseText(b.ex);
    case 'compare': return [...b.good.items, ...b.bad.items].join(' ');
    case 'sounds': return b.items.flatMap((i) => i.examples ?? []).join(' ');
  }
}

/** Lesson words that appear in an exercise (credited when it is answered). */
export function wordsInExercise(ex: Exercise, words: Word[]): Word[] {
  if (ex.k === 'match') {
    const set = new Set(ex.pairs.map((p) => wordKey(p[0])));
    return words.filter((w) => set.has(wordKey(w.en)));
  }
  const text = exerciseText(ex);
  return words.filter((w) => formRe(w.en).test(text));
}

export interface Outcome { ex: Exercise; section: 'p' | 'q'; index: number; correct: boolean; own: boolean }

/**
 * Events for one finished lesson run. `outcomes` hold the first attempt at each exercise of the lesson itself
 * (generated drills are not listed: `own` is false for them and they only credit words).
 */
export function lessonEvents(input: {
  lesson: Lesson; fresh: Word[]; outcomes: Outcome[]; known: Set<string>; review: { key: string; correct: boolean; lesson: string }[];
}): ReviewEvent[] {
  const { lesson, fresh, outcomes, known, review } = input;
  const events: ReviewEvent[] = [];
  const freshSet = new Set(fresh.map((w) => wordKey(w.en)));
  const base = (w: Word) => ({ t: 'w' as const, word: wordKey(w.en), en: w.en, uz: w.uz, ex: w.ex, ex_uz: w.exUz, lesson: lesson.id });

  // recall evidence per word: any miss counts as a miss, otherwise a hit
  const verdict = new Map<string, boolean>();
  for (const o of outcomes) {
    for (const w of wordsInExercise(o.ex, lesson.words)) {
      const key = wordKey(w.en);
      verdict.set(key, (verdict.get(key) ?? true) && o.correct);
    }
  }
  for (const w of lesson.words) {
    const key = wordKey(w.en);
    if (freshSet.has(key)) events.push({ ...base(w), r: 'intro' });
    if (verdict.has(key)) events.push({ ...base(w), r: verdict.get(key) ? 'right' : 'wrong' });
    else if (!freshSet.has(key)) events.push({ ...base(w), r: 'seen' });
  }

  // earlier words met again inside this lesson's slides, dialogues and sentences: exposure only
  const lessonKeys = new Set(lesson.words.map((w) => wordKey(w.en)));
  const text = [...lesson.slides.flatMap((s) => s.blocks.map(blockText)), ...lesson.practice.map(exerciseText), ...lesson.quiz.map(exerciseText)].join(' \n ');
  let seen = 0;
  for (const word of known) {
    if (seen >= 30) break;
    if (lessonKeys.has(word) || word.length < 3) continue;
    if (formRe(word).test(text)) { events.push({ t: 'w', word, en: word, uz: '', r: 'seen' }); seen++; }
  }

  // mistakes: what was missed goes into the notebook, what came back and was answered leaves it
  for (const o of outcomes) {
    if (!o.own || o.correct || o.ex.k === 'match' || o.ex.k === 'speak') continue;
    events.push({ t: 'm', key: exerciseKey(lesson.id, o.section, o.index), lesson: lesson.id, payload: o.ex, r: 'wrong' });
  }
  for (const r of review) events.push({ t: 'm', key: r.key, lesson: r.lesson, r: r.correct ? 'right' : 'wrong' });

  // grammar topic of this lesson
  const g = outcomes.filter((o) => o.own && isGrammarExercise(o.ex));
  events.push({ t: 'g', topic: lesson.id, title: lesson.titleUz, right: g.filter((o) => o.correct).length, wrong: g.filter((o) => !o.correct).length });
  return events.slice(0, 150);
}

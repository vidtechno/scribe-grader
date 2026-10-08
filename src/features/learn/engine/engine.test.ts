import { describe, expect, it } from 'vitest';
import type { Exercise, Lesson, Word } from '../types';
import { buildSession, exerciseKey, isGrammarExercise, lessonEvents, sessionEvents, splitNewWords, wordExercise, wordsInExercise, type QueueWord, type ReviewQueue } from './engine';

const word = (en: string, uz: string, extra: Partial<Word> = {}): Word => ({ en, uz, ...extra });
const words: Word[] = ['apple', 'book', 'cat', 'dog', 'egg', 'fish', 'goat', 'hat', 'ice', 'jam'].map((w, i) => word(w, `uz${i}`, { ex: `I see a ${w}.`, exUz: `Men ${w} ko'raman.` }));
const queue = (over: Partial<ReviewQueue> = {}): ReviewQueue => ({
  new_target: 6, words: [], grammar: [], mistakes: [], known: [], stats: { mastered: 0, learning: 0, new: 0, seen: 0, due: 0, mistakes: 0, grammar_weak: 0 }, ...over,
});
const qw = (en: string, uz: string, over: Partial<QueueWord> = {}): QueueWord => ({ word: en, en, uz, box: 0, lapses: 0, introduced: true, ...over });
const seq = (values: number[]) => { let i = 0; return () => values[i++ % values.length]; };

describe('splitNewWords', () => {
  it('teaches 6 new words by default and keeps the rest as exposure', () => {
    const { fresh, extra } = splitNewWords(words, null);
    expect(fresh).toHaveLength(6);
    expect(extra).toHaveLength(4);
    expect(fresh.length + extra.length).toBe(10);
  });
  it('follows the database target (4-8) and never goes below 3', () => {
    expect(splitNewWords(words, queue({ new_target: 8 })).fresh).toHaveLength(8);
    expect(splitNewWords(words, queue({ new_target: 4 })).fresh).toHaveLength(4);
    expect(splitNewWords(words, queue({ new_target: 1 })).fresh).toHaveLength(3);
  });
  it('treats already introduced words as review, not new', () => {
    const { fresh, extra } = splitNewWords(words, queue({ known: [['apple', 5, true], ['book', 2, true], ['cat', 0, false]] }));
    expect(fresh.map((w) => w.en)).not.toContain('apple');
    expect(fresh.map((w) => w.en)).not.toContain('book');
    expect(fresh.map((w) => w.en)).toContain('cat'); // only seen before: still to be taught
    expect(extra.map((w) => w.en)).toEqual(expect.arrayContaining(['apple', 'book']));
  });
});

describe('wordExercise', () => {
  const pool = [{ en: 'apple', uz: 'olma' }, { en: 'book', uz: 'kitob' }, { en: 'cat', uz: 'mushuk' }, { en: 'dog', uz: 'it' }, { en: 'egg', uz: 'tuxum' }];
  const row = (box: number, over: Partial<QueueWord> = {}) => qw('apple', 'olma', { box, ex: 'I eat an apple every day.', ex_uz: 'Men har kuni olma yeyman.', ...over });
  it('uses easy choices for shaky words and always has the correct option', () => {
    for (let i = 0; i < 20; i++) {
      const ex = wordExercise(row(0), pool, Math.random)!;
      expect(['choice', 'listen']).toContain(ex.k);
      if (ex.k === 'choice' || ex.k === 'listen') expect(ex.opts[ex.a]).toMatch(/olma|apple/);
    }
  });
  it('puts the word into its own sentence for middle boxes', () => {
    const ex = wordExercise(row(2), pool)!;
    expect(ex.k).toBe('fill');
    if (ex.k === 'fill') { expect(ex.q).toBe('I eat an ___ every day.'); expect(ex.a).toContain('apple'); }
  });
  it('asks for recall with typing or a sentence for strong words', () => {
    const kinds = new Set<string>();
    for (let i = 0; i < 30; i++) kinds.add(wordExercise(row(5), pool, Math.random)!.k);
    expect([...kinds].every((k) => ['translate', 'order'].includes(k))).toBe(true);
    expect(wordExercise(row(5), pool, seq([0.1]), true)!.k).toBe('speak');
  });
  it('falls back safely without enough distractors', () => {
    const ex = wordExercise(row(0, { introduced: false }), [{ en: 'apple', uz: 'olma' }], Math.random);
    expect(ex).toBeNull();
  });
});

describe('buildSession / sessionEvents', () => {
  it('mixes words, mistakes and grammar, capped at 7', () => {
    const mistake: Exercise = { k: 'tf', q: 'x', a: true };
    const q = queue({
      words: ['apple', 'book', 'cat', 'dog', 'egg'].map((w, i) => qw(w, `uz${i}`, { box: i % 4 })),
      mistakes: [{ key: 'u1-l1#q#1', lesson: 'u1-l1', payload: mistake, wrong_count: 2 }],
    });
    const items = buildSession(q, [], [{ topic: 'u1-l2', ex: { k: 'tf', q: 'g', a: false } }], { max: 7 });
    expect(items.length).toBeLessThanOrEqual(7);
    expect(items.some((i) => i.ref.type === 'm')).toBe(true);
    expect(items.some((i) => i.ref.type === 'g')).toBe(true);
    const events = sessionEvents(items.map((item) => ({ item, correct: item.ref.type !== 'm' })));
    expect(events.find((e) => e.t === 'm')).toMatchObject({ r: 'wrong' });
    expect(events.find((e) => e.t === 'g')).toMatchObject({ right: 1, wrong: 0 });
  });
});

describe('lessonEvents', () => {
  const lesson = {
    id: 'u1-l3', titleUz: 'Test', words, slides: [{ title: 's', blocks: [{ t: 'p', md: 'We talked about the pencil and the window.' }] }],
    practice: [{ k: 'tf', q: 'A cat is an animal', a: true }], quiz: [{ k: 'fill', q: 'I see a ___.', a: ['dog'] }],
    summary: [],
  } as unknown as Lesson;
  const fresh = words.slice(0, 6);
  it('introduces new words, records recall per word and only exposure for the rest', () => {
    const outcomes = [
      { ex: lesson.practice[0], section: 'p' as const, index: 0, correct: true, own: true },
      { ex: lesson.quiz[0], section: 'q' as const, index: 0, correct: false, own: true },
    ];
    const events = lessonEvents({ lesson, fresh, outcomes, known: new Set(['pencil', 'window', 'zebra']), review: [] });
    const w = (en: string, r: string) => events.some((e) => e.t === 'w' && e.word === en && e.r === r);
    expect(w('apple', 'intro')).toBe(true);
    expect(w('cat', 'right')).toBe(true); // answered correctly in a practice exercise
    expect(w('dog', 'wrong')).toBe(true);
    expect(w('hat', 'seen')).toBe(true); // not taught as new, not exercised
    expect(w('hat', 'intro')).toBe(false);
    expect(w('pencil', 'seen')).toBe(true); // earlier word met again in a slide
    expect(w('zebra', 'seen')).toBe(false);
    expect(events.find((e) => e.t === 'm')).toMatchObject({ key: exerciseKey('u1-l3', 'q', 0), r: 'wrong' });
    expect(events.find((e) => e.t === 'g')).toMatchObject({ topic: 'u1-l3', right: 1, wrong: 1 });
    expect(events.length).toBeLessThanOrEqual(150);
  });
  it('closes a notebook mistake that came back and was answered', () => {
    const events = lessonEvents({ lesson, fresh, outcomes: [], known: new Set(), review: [{ key: 'u1-l1#q#2', lesson: 'u1-l1', correct: true }] });
    expect(events).toContainEqual({ t: 'm', key: 'u1-l1#q#2', lesson: 'u1-l1', r: 'right' });
  });
});

describe('helpers', () => {
  it('finds lesson words (with simple endings) inside exercises', () => {
    const ex: Exercise = { k: 'fill', q: 'Two ___ are on the table.', a: ['books'] };
    expect(wordsInExercise(ex, words).map((w) => w.en)).toEqual(['book']);
  });
  it('classifies grammar exercises', () => {
    expect(isGrammarExercise({ k: 'fill', q: 'a ___', a: ['b'] })).toBe(true);
    expect(isGrammarExercise({ k: 'listen', say: 'a', opts: ['a', 'b'], a: 0 })).toBe(false);
    expect(isGrammarExercise({ k: 'choice', q: 'x', say: 'a', opts: ['a', 'b'], a: 0 })).toBe(false);
  });
});

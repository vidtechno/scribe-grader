import { shuffle } from './check';
import type { Word } from './types';

// Distinct translations prevent two visually identical answers or matching tiles.
export function gameWordPool(words: Word[]): Word[] {
  const english = new Set<string>(), translations = new Set<string>();
  return words.filter(w => {
    const en = w.en.trim().toLocaleLowerCase(), uz = w.uz.trim().toLocaleLowerCase();
    if (!en || !uz || english.has(en) || translations.has(uz)) return false;
    english.add(en); translations.add(uz); return true;
  });
}

export function wordQuiz(words: Word[], random = Math.random) {
  const pool = gameWordPool(words);
  if (pool.length < 4) return [];
  return shuffle(pool, random).slice(0, 20).map(word => ({
    word,
    options: shuffle([word.uz, ...shuffle(pool.filter(w => w.en !== word.en), random).slice(0, 3).map(w => w.uz)], random),
  }));
}

export function matchingWords(words: Word[], random = Math.random) {
  const pairs = shuffle(gameWordPool(words), random).slice(0, 6);
  return { pairs, left: shuffle(pairs, random), right: shuffle(pairs, random) };
}

/** Revisit a missed word after two or three different prompts, including at the end of a round. */
export function repeatMissedWord(questions: ReturnType<typeof wordQuiz>, index: number, words: Word[], random = Math.random) {
  const missed = questions[index];
  if (!missed) return questions;
  const gap = 2 + Math.floor(random() * 2);
  const future = questions.slice(index + 1).filter(q => q.word.en !== missed.word.en);
  const fillers = wordQuiz(words, random).filter(q => q.word.en !== missed.word.en);
  while (future.length < gap && fillers.length) future.push(fillers.shift()!);
  return [...questions.slice(0, index + 1), ...future.slice(0, gap), { ...missed, options: shuffle(missed.options, random) }, ...future.slice(gap)];
}

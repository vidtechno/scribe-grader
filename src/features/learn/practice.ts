import type { Exercise, Lesson, Word } from './types';
import { shuffle } from './check';

/** Word drills generated from the lesson's 10 words (matching, listening, meaning). */
export function wordDrills(words: Word[], random = Math.random): Exercise[] {
  if (words.length < 4) return [];
  const half = Math.ceil(words.length / 2);
  const drills: Exercise[] = [
    { k: 'match', pairs: words.slice(0, half).slice(0, 6).map((w) => [w.en, w.uz] as [string, string]) },
  ];
  if (words.length - half >= 3) drills.push({ k: 'match', pairs: words.slice(half).slice(0, 6).map((w) => [w.en, w.uz] as [string, string]) });
  const pickOptions = (target: Word, key: 'en' | 'uz') => {
    const others = shuffle(words.filter((w) => w !== target), random).slice(0, 3).map((w) => w[key]);
    const opts = shuffle([target[key], ...others], random);
    return { opts, a: opts.indexOf(target[key]) };
  };
  for (const w of shuffle(words, random).slice(0, 3)) {
    const { opts, a } = pickOptions(w, 'en');
    drills.push({ k: 'listen', say: w.en, opts, a, why: `**${w.en}** — ${w.uz}` });
  }
  for (const w of shuffle(words, random).slice(0, 2)) {
    const { opts, a } = pickOptions(w, 'en');
    drills.push({ k: 'choice', q: `"**${w.uz}**" inglizcha qanday?`, opts, a });
  }
  return drills;
}

/** A few questions from the previous lesson for the warm-up review. */
export function reviewQuestions(previous: Lesson, count = 3, random = Math.random): Exercise[] {
  const pool = previous.quiz.filter((e) => e.k !== 'speak' && e.k !== 'match');
  return shuffle(pool, random).slice(0, count);
}

/** Unit test: questions from every lesson's quiz plus word questions, shuffled. */
export function unitTestQuestions(lessons: Lesson[], total = 20, random = Math.random): Exercise[] {
  const perLesson = Math.max(1, Math.floor((total - 4) / lessons.length));
  const fromLessons = lessons.flatMap((l) => shuffle(l.quiz.filter((e) => e.k !== 'speak' && e.k !== 'match'), random).slice(0, perLesson));
  const words = lessons.flatMap((l) => l.words);
  const wordQs: Exercise[] = shuffle(words, random).slice(0, total - fromLessons.length).map((w, i) => {
    const others = shuffle(words.filter((x) => x.en !== w.en), random).slice(0, 3);
    if (i % 2 === 0) {
      const opts = shuffle([w.en, ...others.map((o) => o.en)], random);
      return { k: 'listen', say: w.en, opts, a: opts.indexOf(w.en) };
    }
    const opts = shuffle([w.uz, ...others.map((o) => o.uz)], random);
    return { k: 'choice', q: `**${w.en}** so'zining ma'nosi qaysi?`, opts, a: opts.indexOf(w.uz) };
  });
  return shuffle([...fromLessons, ...wordQs], random).slice(0, total);
}

/** Placement test for Elementary: the same number of questions from every Beginner unit, shuffled. */
export function placementQuestions(units: Lesson[][], total = 20, random = Math.random): Exercise[] {
  const perUnit = Math.floor(total / units.length);
  const pool = (lessons: Lesson[]) => shuffle(lessons.flatMap((l) => l.quiz.filter((e) => e.k !== 'speak' && e.k !== 'match')), random);
  const picked = units.flatMap((lessons) => pool(lessons).slice(0, perUnit));
  // Rounding left a few places: fill them from the units' remaining questions.
  if (picked.length < total) {
    const rest = shuffle(units.flatMap((lessons) => pool(lessons)).filter((q) => !picked.includes(q)), random);
    picked.push(...rest.slice(0, total - picked.length));
  }
  return shuffle(picked, random).slice(0, total);
}

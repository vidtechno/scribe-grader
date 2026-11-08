import { describe, expect, it } from 'vitest';
import { gameWordPool, matchingWords, repeatMissedWord, wordQuiz } from './word-games';
import { seededRandom } from './daily';
const words = Array.from({ length: 25 }, (_, i) => ({ en: `word ${i}`, uz: `so‘z ${i}` }));
describe('personal word games', () => {
  it('never uses unlearned words or duplicate answer labels', () => {
    const learned = words.slice(0, 8);
    const quiz = wordQuiz(learned, seededRandom('round'));
    expect(quiz).toHaveLength(8);
    for (const question of quiz) {
      expect(learned).toContain(question.word);
      expect(new Set(question.options).size).toBe(4);
      expect(question.options).toContain(question.word.uz);
      expect(question.options.every(option => learned.some(w => w.uz === option))).toBe(true);
    }
  });
  it('includes new lesson vocabulary when the supplied personal pool grows', () => {
    expect(wordQuiz(words.slice(0, 5))).toHaveLength(5);
    expect(wordQuiz(words.slice(0, 9))).toHaveLength(9);
    expect(wordQuiz(words)).toHaveLength(20);
    expect(wordQuiz(words, seededRandom('one'))).not.toEqual(wordQuiz(words, seededRandom('two')));
  });
  it('creates matching boards with exactly one partner per tile', () => {
    const board = matchingWords(words, seededRandom('match'));
    expect(board.pairs).toHaveLength(6);
    expect(new Set(board.left.map(w => w.en))).toEqual(new Set(board.right.map(w => w.en)));
    expect(board.left.every(w => words.includes(w))).toBe(true);
  });
  it('handles small and repeated word pools without ambiguous games', () => {
    expect(wordQuiz(words.slice(0, 3))).toEqual([]);
    expect(matchingWords(words.slice(0, 2)).pairs).toHaveLength(2);
    expect(gameWordPool([words[0], words[0], { en: 'other', uz: words[0].uz }, { en: '', uz: 'empty' }])).toHaveLength(1);
  });
  it('brings a missed word back after two or three other questions', () => {
    const quiz = wordQuiz(words.slice(0, 8), seededRandom('repeat'));
    for (const [random, gap] of [[() => 0, 2], [() => 0.99, 3]] as const) {
      const updated = repeatMissedWord(quiz, 0, words, random);
      expect(updated[gap + 1].word.en).toBe(quiz[0].word.en);
      expect(updated.slice(1, gap + 1).every(q => q.word.en !== quiz[0].word.en)).toBe(true);
    }
  });
  it('provides spacing even when the last question is missed, using only personal words', () => {
    const pool = words.slice(0, 4), quiz = wordQuiz(pool);
    const updated = repeatMissedWord(quiz, 3, pool, () => 0.99);
    expect(updated[7].word.en).toBe(quiz[3].word.en);
    expect(updated.slice(4, 7).every(q => q.word.en !== quiz[3].word.en && pool.includes(q.word))).toBe(true);
  });
});

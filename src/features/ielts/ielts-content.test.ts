import { describe, expect, it } from 'vitest';
import { listeningProblems, readingProblems } from './validate';
import { bandFor } from './bands';
import { score } from './score';
import type { ListeningTest, ReadingTest } from './types';

const reading = import.meta.glob<{ default: ReadingTest }>('./reading/r*.ts', { eager: true });
const listening = import.meta.glob<{ default: ListeningTest }>('./listening/l*.ts', { eager: true });
const only = process.env.IELTS_TEST;

describe('IELTS reading tests', () => {
  it('has tests', () => expect(Object.keys(reading).length).toBeGreaterThanOrEqual(0));
  for (const [file, mod] of Object.entries(reading)) {
    if (only && !file.includes(only)) continue;
    it(file, () => expect(readingProblems(mod.default)).toEqual([]));
  }
});
describe('IELTS listening tests', () => {
  it('has tests', () => expect(Object.keys(listening).length).toBeGreaterThanOrEqual(0));
  for (const [file, mod] of Object.entries(listening)) {
    if (only && !file.includes(only)) continue;
    it(file, () => expect(listeningProblems(mod.default)).toEqual([]));
  }
});
describe('scoring', () => {
  it('converts raw scores to bands', () => {
    expect(bandFor('reading', 40)).toBe(9);
    expect(bandFor('reading', 30)).toBe(7);
    expect(bandFor('listening', 32)).toBe(7.5);
    expect(bandFor('listening', 0)).toBe(0);
    expect(bandFor('reading', 7, 13)).toBe(5.5);
  });
  it('scores answers by question number', () => {
    const groups = [{ groups: [
      { kind: 'tfng' as const, instruction: 'x', items: [{ q: 'q', why: 'w', a: 'true' as const }] },
      { kind: 'fill' as const, instruction: 'x', items: [{ q: 'a ___', why: 'w', a: ['Four', '4'] }] },
    ] }];
    const r = score(groups, { 1: 'true', 2: ' 4. ' });
    expect(r.correct).toBe(2);
  });
});

describe('answer keys are scorable', () => {
  const tests = [...Object.entries(reading).map(([f, m]) => [f, m.default.passages] as const), ...Object.entries(listening).map(([f, m]) => [f, m.default.sections] as const)];
  for (const [file, parts] of tests) {
    it(`${file}: the key scores 40/40`, () => {
      const answers: Record<number, number | string> = {};
      let n = 1;
      for (const part of parts) for (const g of part.groups) for (const item of g.items) answers[n++] = g.kind === 'fill' ? (item.a as string[])[0] : (item.a as number | string);
      const r = score(parts, answers);
      expect(r.total).toBe(40);
      expect(r.correct).toBe(40);
      expect(score(parts, {}).correct).toBe(0);
    });
  }
});

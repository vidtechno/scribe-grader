import type { QuestionGroup } from './types';

export interface FlatQuestion {
  number: number;          // 1-based across the whole test
  group: QuestionGroup;
  index: number;           // item index inside the group
  part: number;            // passage / section index
}

export function flatten(parts: { groups: QuestionGroup[] }[]): FlatQuestion[] {
  const out: FlatQuestion[] = [];
  parts.forEach((p, part) => p.groups.forEach((group) => group.items.forEach((_, index) => out.push({ number: out.length + 1, group, index, part }))));
  return out;
}

export const normalize = (s: string) =>
  s.toLowerCase().trim().replace(/[“”"']/g, '').replace(/[.,;:!?]+$/g, '').replace(/\s+/g, ' ').trim();

/** Answers are stored by question number: a number (choice/match index), a string ('true', 'yes', typed text). */
export type Answer = number | string | undefined;

export function isCorrect(q: FlatQuestion, answer: Answer): boolean {
  if (answer === undefined || answer === '') return false;
  const item = q.group.items[q.index] as { a: unknown };
  switch (q.group.kind) {
    case 'tfng':
    case 'ynng': return answer === item.a;
    case 'mcq':
    case 'match': return answer === item.a;
    case 'fill': return typeof answer === 'string' && (item.a as string[]).some((x) => normalize(x) === normalize(answer));
  }
}

export function correctText(q: FlatQuestion): string {
  const item = q.group.items[q.index] as { a: unknown; options?: string[] };
  switch (q.group.kind) {
    case 'tfng': return String(item.a).replace('-', ' ').toUpperCase();
    case 'ynng': return String(item.a).replace('-', ' ').toUpperCase();
    case 'mcq': return `${String.fromCharCode(65 + (item.a as number))}  ${item.options?.[item.a as number] ?? ''}`;
    case 'match': return `${String.fromCharCode(65 + (item.a as number))}  ${(q.group as { options: string[] }).options[item.a as number]}`;
    case 'fill': return (item.a as string[])[0];
  }
}

export const KIND_LABEL: Record<QuestionGroup['kind'], string> = {
  tfng: 'True / False / Not Given', ynng: 'Yes / No / Not Given', mcq: 'Multiple choice', fill: 'Completion', match: 'Matching',
};

export function score(parts: { groups: QuestionGroup[] }[], answers: Record<number, Answer>) {
  const all = flatten(parts);
  const results = all.map((q) => ({ q, answer: answers[q.number], correct: isCorrect(q, answers[q.number]) }));
  const correct = results.filter((r) => r.correct).length;
  const byKind: Record<string, { correct: number; total: number }> = {};
  for (const r of results) {
    const k = r.q.group.kind;
    byKind[k] ??= { correct: 0, total: 0 };
    byKind[k].total++;
    if (r.correct) byKind[k].correct++;
  }
  return { results, correct, total: all.length, byKind };
}

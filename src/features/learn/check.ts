// Answer checking for typed and built answers. Kept forgiving about case, punctuation and apostrophes,
// strict about the words themselves, with one small typo allowed in longer answers.

export function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[‘’ʼ`´]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[.,!?;:"]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function distance(a: string, b: string): number {
  if (Math.abs(a.length - b.length) > 1) return 2;
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let diag = prev[0];
    prev[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = prev[j];
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, diag + (a[i - 1] === b[j - 1] ? 0 : 1));
      diag = tmp;
    }
  }
  return prev[b.length];
}

export type TypedResult = { correct: boolean; typo: boolean; expected: string };

/** Compares a typed answer with every accepted answer. */
export function checkTyped(input: string, accepted: string[]): TypedResult {
  const given = normalize(input);
  const expected = accepted[0] ?? '';
  if (!given) return { correct: false, typo: false, expected };
  for (const answer of accepted) {
    if (normalize(answer) === given) return { correct: true, typo: false, expected: answer };
  }
  for (const answer of accepted) {
    const target = normalize(answer);
    if (target.length >= 6 && distance(given, target) === 1) return { correct: true, typo: true, expected: answer };
  }
  return { correct: false, typo: false, expected };
}

/** Word-tile answers: the built sentence must equal the correct order or one of the alternatives. */
export function checkOrder(built: string[], words: string[], alt: string[][] = []): boolean {
  const given = normalize(built.join(' '));
  return [words, ...alt].some((option) => normalize(option.join(' ')) === given);
}

/** Share of the target words that were recognised (speech practice). */
export function spokenMatch(heard: string, target: string): number {
  const want = normalize(target).split(' ').filter(Boolean);
  const got = new Set(normalize(heard).split(' ').filter(Boolean));
  if (!want.length) return 0;
  return want.filter((w) => got.has(w)).length / want.length;
}

export function shuffle<T>(items: T[], random = Math.random): T[] {
  const list = [...items];
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

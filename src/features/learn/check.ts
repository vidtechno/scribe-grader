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

/** Contractions are the same answer as their long form: "I'm happy" = "I am happy", "don't" = "do not". */
const expand = (value: string): string => normalize(value).split(' ').map((w) => CONTRACTIONS[w] ?? w).join(' ');

/** Compares a typed answer with every accepted answer. */
export function checkTyped(input: string, accepted: string[]): TypedResult {
  const given = expand(input);
  const expected = accepted[0] ?? '';
  if (!normalize(input)) return { correct: false, typo: false, expected };
  for (const answer of accepted) {
    if (expand(answer) === given) return { correct: true, typo: false, expected: answer };
  }
  for (const answer of accepted) {
    const target = expand(answer);
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

// ---------------------------------------------------------------- speaking practice: lenient matching

const CONTRACTIONS: Record<string, string> = {
  "i'm": 'i am', "you're": 'you are', "he's": 'he is', "she's": 'she is', "it's": 'it is', "we're": 'we are', "they're": 'they are',
  "that's": 'that is', "what's": 'what is', "there's": 'there is', "here's": 'here is', "let's": 'let us', "i've": 'i have', "i'll": 'i will',
  "don't": 'do not', "doesn't": 'does not', "didn't": 'did not', "isn't": 'is not', "aren't": 'are not', "can't": 'can not', "cannot": 'can not',
  "won't": 'will not', "wasn't": 'was not', "weren't": 'were not', "haven't": 'have not', "hasn't": 'has not', "couldn't": 'could not', "wouldn't": 'would not',
};
const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
const ARTICLES = new Set(['a', 'an', 'the']);

function speechWords(text: string): string[] {
  const out: string[] = [];
  for (const raw of normalize(text).split(' ').filter(Boolean)) {
    const expanded = (CONTRACTIONS[raw] ?? raw).split(' ');
    for (const w of expanded) out.push(/^\d{1,2}$/.test(w) && Number(w) <= 20 ? NUMBERS[Number(w)] : w);
  }
  return out;
}

/** A rough sound key: words that sound alike (their, there; write, right) share it. */
export function soundKey(word: string): string {
  let w = word.toLowerCase().replace(/[^a-z]/g, '');
  w = w.replace(/^kn/, 'n').replace(/^wr/, 'r').replace(/^wh/, 'w').replace(/ph/g, 'f').replace(/ck/g, 'k').replace(/gh/g, '')
    .replace(/qu/g, 'kw').replace(/x/g, 'ks').replace(/c(?=[aou]|$)/g, 'k').replace(/c/g, 's').replace(/z/g, 's')
    .replace(/th/g, 't').replace(/sh|ch/g, 'x').replace(/(?!^)[aeiouyh]/g, '').replace(/(.)\1+/g, '$1');
  return w;
}

function editDistance(a: string, b: string): number {
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

const stem = (w: string) => (w.length > 3 ? w.replace(/(es|s)$/, '') : w);

/** 1 = same word, 0.8 = clearly the same word with a different ending or sound-alike, 0 = different. */
function wordSimilarity(want: string, got: string): number {
  if (want === got) return 1;
  if (stem(want) === stem(got) && want.length > 2) return 0.9;
  if (want.length >= 3 && soundKey(want) === soundKey(got) && soundKey(want).length >= 2) return 0.85;
  const limit = want.length >= 8 ? 2 : want.length >= 4 ? 1 : 0;
  if (limit && editDistance(want, got) <= limit) return 0.8;
  return 0;
}

export type SpeechLevel = 'great' | 'good' | 'close' | 'retry';
export interface SpeechJudgement { score: number; passed: boolean; level: SpeechLevel; missing: string[] }

/**
 * Forgiving comparison of what was recognised with what the learner was meant to say. Accents, endings, small
 * recognition slips, sound-alike words, numbers and contractions do not count against them; extra words are free.
 * This says whether the phrase was understood, not that the pronunciation is "correct".
 */
export function judgeSpeech(heard: string, target: string): SpeechJudgement {
  const want = speechWords(target);
  const got = speechWords(heard);
  if (!want.length || !got.length) return { score: 0, passed: false, level: 'retry', missing: want.filter((w) => !ARTICLES.has(w)) };
  const used = new Set<number>();
  let total = 0, earned = 0;
  const missing: string[] = [];
  for (const w of want) {
    const weight = ARTICLES.has(w) ? 0.3 : 1;
    total += weight;
    let best = 0, at = -1;
    got.forEach((g, i) => {
      if (used.has(i)) return;
      const s = wordSimilarity(w, g);
      if (s > best) { best = s; at = i; }
    });
    if (at >= 0) used.add(at);
    earned += weight * best;
    if (best === 0 && weight === 1) missing.push(w);
  }
  const score = total ? earned / total : 0;
  const passed = score >= 0.6;
  return { score, passed, level: score >= 0.9 ? 'great' : score >= 0.75 ? 'good' : passed ? 'close' : 'retry', missing };
}

export interface SpeechQuality { duration?: number | null; avgLogprob?: number | null; noSpeechProbability?: number | null }

/** Plain-language advice when the recording itself was the problem (nothing heard, too quiet or noisy). */
export function speechQualityHint(heard: string, q: SpeechQuality | null | undefined, passed: boolean): string | null {
  if (passed) return null;
  const silent = (q?.noSpeechProbability ?? 0) > 0.6 || (q?.duration ?? 1) < 0.5;
  if (!heard.trim()) {
    return silent
      ? "Ovoz deyarli eshitilmadi. Telefonni og'zingizga yaqinroq tuting va bosganingizdan keyin darrov gapiring."
      : "Hech narsa tanib bo'lmadi. Tinchroq joyda, aniq va biroz sekinroq ayting.";
  }
  if ((q?.avgLogprob ?? 0) < -1) return "Yozuv sifati past ko'rinadi (shovqin yoki uzoqlik). Mikrofonga yaqinroq va tinchroq joyda urinib ko'ring.";
  return null;
}

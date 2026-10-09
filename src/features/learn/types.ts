/**
 * Content model of the Scorify English course. Lessons are static data (no AI at runtime):
 * explanations are in Uzbek, examples and exercises in English. Text fields marked `Md`
 * support **bold**, *italic*, `highlight` and line breaks (\n).
 */
export type Md = string;

export interface Word {
  en: string;
  uz: string;
  /** IPA without slashes, e.g. "ˈæp.əl". */
  ipa?: string;
  /** noun, verb, adj, adv, phrase, number… */
  pos?: string;
  /** Short English example sentence that uses the word. */
  ex?: string;
  exUz?: string;
}

export interface SoundCard {
  /** What is shown big, e.g. "A a" or "sh". */
  label: string;
  /** Text given to the speech engine, e.g. "A" or "ship". */
  say: string;
  /** How it sounds, explained in Uzbek. */
  uz: Md;
  /** Example words, each one can be played. */
  examples?: string[];
}

export type Block =
  | { t: 'p'; md: Md }
  | { t: 'tip'; md: Md; tone?: 'info' | 'warn' | 'good' }
  | { t: 'examples'; items: { en: string; uz: string; note?: Md }[] }
  | { t: 'table'; head: string[]; rows: string[][]; /** column indexes with a play button */ speak?: number[] }
  | { t: 'sounds'; items: SoundCard[] }
  | { t: 'compare'; good: { title: string; items: string[] }; bad: { title: string; items: string[] } }
  | { t: 'dialog'; lines: { who: string; en: string; uz: string }[] }
  /** A short reading passage (English, 40–140 words) with audio and a hidden Uzbek translation. */
  | { t: 'text'; title?: string; en: string; uz: string }
  | { t: 'check'; ex: Exercise };

export interface Slide {
  title: string;
  blocks: Block[];
}

export type Exercise =
  /** Multiple choice. `say` adds a play button with that English text. */
  | { k: 'choice'; q: Md; say?: string; opts: string[]; a: number; why?: Md }
  /** Listen (audio only) and pick what was said. */
  | { k: 'listen'; say: string; opts: string[]; a: number; why?: Md }
  /** Type the missing part. `q` contains exactly one "___". `a` lists every accepted answer. */
  | { k: 'fill'; q: string; a: string[]; uz?: string; hint?: string; why?: Md }
  /** Build the sentence from word tiles. `words` is the correct order; `extra` are distractor tiles. */
  | { k: 'order'; uz: string; words: string[]; extra?: string[]; alt?: string[][]; why?: Md }
  /** Translate from Uzbek into English by typing. `a` lists every accepted answer. */
  | { k: 'translate'; uz: string; a: string[]; why?: Md }
  /** Tap matching pairs: [English, Uzbek]. 4–6 pairs. */
  | { k: 'match'; pairs: [string, string][] }
  /** True / false statement. */
  | { k: 'tf'; q: Md; a: boolean; why?: Md }
  /** Listen (audio only) and type what was said. `a` defaults to `say`. */
  | { k: 'dictation'; say: string; a?: string[]; uz?: string; why?: Md }
  /** A sentence with a mistake: the learner rewrites it correctly. `a` lists every accepted correction. */
  | { k: 'fix'; wrong: string; a: string[]; hint?: string; why?: Md }
  /** Listen and repeat aloud (speech recognition when the browser supports it). */
  | { k: 'speak'; say: string; uz?: string };

export interface Lesson {
  /** "u1-l1" */
  id: string;
  title: string;
  titleUz: string;
  /** What the learner will be able to do after the lesson (Uzbek). */
  goal: Md;
  /** Theory, explained step by step with examples and quick checks. */
  slides: Slide[];
  /** Exactly 10 words to learn by heart. */
  words: Word[];
  /** Guided practice: mistakes come back until they are fixed. */
  practice: Exercise[];
  /** Scored quiz at the end of the lesson (no `speak`). */
  quiz: Exercise[];
  /** 3–5 key takeaways (Uzbek); shown on the result screen and as the review in the next lesson. */
  summary: Md[];
  /** Advice for independent practice after the lesson (Uzbek). */
  homework?: Md;
}

export interface LessonMeta {
  id: string;
  title: string;
  titleUz: string;
}

export interface UnitMeta {
  id: string;
  n: number;
  title: string;
  titleUz: string;
  description: string;
  /** Tailwind gradient classes for the unit banner. */
  tone: string;
  lessons: LessonMeta[];
  /** The level this unit belongs to. */
  level: LevelId;
}

export type LevelId = 'beginner' | 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'ielts';

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
  /**
   * A short focused lesson (5–10 minutes): one situation or one skill, 3–5 new words, fewer exercises. Used for
   * life-situation and consolidation lessons that sit between the big grammar lessons.
   */
  mini?: true;
  /** Same as the `kind` of its LessonMeta in course.ts (grammar, situation, review, skill or scene). */
  kind?: 'grammar' | 'situation' | 'review' | 'skill' | 'scene';
  /**
   * A real-life scene: an interactive conversation (see `Scene`). Such a lesson has no slides, words, practice or quiz
   * (empty arrays); it is played by SceneRunner and completes through the same lesson progress, XP and streak as any
   * other lesson.
   */
  scene?: Scene;
  /** Exactly 10 words to learn by heart (3–7 in a `mini` lesson). */
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

/**
 * A practice game that follows a hard lesson. It has no theory: only exercises. Finishing it is required to move on
 * (learning_complete_drill in the database). Its id is "<lesson id>-d<n>", e.g. "u2-l2-d1".
 */
/** What a practice drill is, shown on its card: a game (reinforces) or a topic mastery check. */
export type GameKind =
  | 'word-match' | 'sentence-builder' | 'grammar-detective' | 'listening' | 'memory-review' | 'conversation'
  | 'speed-round' | 'fill-gap' | 'odd-one-out' | 'mini-boss' | 'mastery';

export interface Drill {
  id: string;
  /** Short English name, e.g. "Am, is or are?". */
  title: string;
  titleUz: string;
  /** What this game trains, one Uzbek sentence. */
  goal: Md;
  /** 10–12 exercises, easy first. No `speak`. */
  exercises: Exercise[];
}

export interface LessonMeta {
  id: string;
  title: string;
  titleUz: string;
  /** Short situation / consolidation lesson. Counts as done for learners who already went past it. */
  mini?: true;
  /** What kind of step it is, shown in the topic list. */
  kind?: 'grammar' | 'situation' | 'review' | 'skill' | 'scene';
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
  /** What this topic teaches, in plain Uzbek: grammar points and situations (shown on the topic card). */
  learns?: string[];
  /** The level this unit belongs to. */
  level: LevelId;
}

export type LevelId = 'beginner' | 'a1' | 'a2' | 'b1' | 'b2' | 'c1' | 'ielts';

// ---------------------------------------------------------------------------------------------- real-life scenes

/** The two recorded voices: Emma (British female) and George (British male). */
export type SceneVoice = 'emma' | 'george';

/** Drives the animated picture of the scene (colours and floating props). */
export type ScenePlace =
  | 'meet' | 'desk' | 'school' | 'family' | 'cafe' | 'time' | 'bus' | 'day' | 'street' | 'shop' | 'hotel' | 'weekend' | 'plans' | 'mission';

export interface SceneCharacter {
  name: string;
  /** Who they are, in Uzbek: "Barista", "Yangi tanish". */
  role: string;
  /** The partner's voice; the learner's own model lines are played in the other voice. */
  voice: SceneVoice;
  emoji: string;
}

/** A wrong answer the author expects, with the reason in Uzbek. `a` lists the wrong forms (compared without punctuation or case). */
export interface SceneMistake { a: string[]; why: Md }

export type SceneStep =
  /** The partner speaks (bubble + voice). */
  | { k: 'say'; en: string; uz: string }
  /** A short new phrase or rule, explained in Uzbek right where it is needed. */
  | { k: 'note'; title?: string; md: Md }
  /** The learner picks what to say. Every option marked `ok` is accepted; every wrong option explains itself. */
  | { k: 'pick'; ask: Md; opts: { en: string; ok?: true; why?: Md }[]; why?: Md; drill?: Exercise }
  /** The learner writes the reply. `a` lists every accepted reply (first = model reply). */
  | { k: 'type'; ask: Md; a: string[]; mistakes?: SceneMistake[]; why?: Md; hint?: string; drill?: Exercise }
  /** The learner builds the reply from word tiles. */
  | { k: 'build'; ask: Md; words: string[]; extra?: string[]; alt?: string[][]; mistakes?: SceneMistake[]; why?: Md; drill?: Exercise }
  /** The learner completes the reply: `q` has exactly one "___". */
  | { k: 'fill'; ask: Md; q: string; a: string[]; mistakes?: SceneMistake[]; why?: Md; hint?: string; drill?: Exercise };

export interface Scene {
  place: ScenePlace;
  partner: SceneCharacter;
  /** The situation, in Uzbek: where you are and what you must do. */
  intro: Md;
  steps: SceneStep[];
  /** A closing line in Uzbek, shown on the last screen before the result. */
  outro: Md;
}

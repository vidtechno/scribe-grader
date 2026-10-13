import { checkOrder, checkTyped, normalize } from '../check';
import type { Exercise, Lesson, Scene, SceneMistake, SceneStep, SceneVoice } from '../types';

/**
 * Real-life scenes are conversations with a partner. Every English line has a recording in one of two voices, Emma
 * (British female) and George (British male). The file name is the hash of the line with a voice marker in front, so
 * the same words can exist in both voices next to the plain recordings used by ordinary lessons.
 */
const MARK = /^¤(emma|george)¤ /;
export const voiceText = (voice: SceneVoice, en: string) => `¤${voice}¤ ${en}`;
/** The voice of a marked text, or null for plain lesson text. */
export const voiceOf = (text: string): SceneVoice | null => (MARK.exec(text)?.[1] as SceneVoice | undefined) ?? null;
export const unmarked = (text: string) => text.replace(MARK, '');
/** The learner's own lines sound like the other person in the room. */
export const otherVoice = (voice: SceneVoice): SceneVoice => (voice === 'emma' ? 'george' : 'emma');

export type TaskStep = Extract<SceneStep, { k: 'pick' | 'type' | 'build' | 'fill' }>;
export const isTask = (s: SceneStep): s is TaskStep => s.k === 'pick' || s.k === 'type' || s.k === 'build' || s.k === 'fill';

/** The reply a step expects, as a whole sentence (what the learner's voice says once they got it right). */
export function modelReply(step: TaskStep): string {
  switch (step.k) {
    case 'pick': return (step.opts.find((o) => o.ok) ?? step.opts[0]).en;
    case 'type': return step.a[0];
    case 'build': return step.words.join(' ');
    case 'fill': return step.q.replace('___', step.a[0]);
  }
}

/** Every English line of the scene with the voice it is spoken in (what the audio generator and the coverage test need). */
export function sceneAudioTexts(scene: Scene): string[] {
  const me = otherVoice(scene.partner.voice);
  const out: string[] = [];
  for (const s of scene.steps) {
    if (s.k === 'say') out.push(voiceText(scene.partner.voice, s.en));
    else if (s.k === 'pick') s.opts.filter((o) => o.ok).forEach((o) => out.push(voiceText(me, o.en)));
    else if (s.k === 'type') out.push(voiceText(me, s.a[0]));
    else if (s.k === 'build') out.push(voiceText(me, modelReply(s)));
    else if (s.k === 'fill') out.push(voiceText(me, modelReply(s)));
  }
  return [...new Set(out)];
}

export const lessonScene = (lesson: Lesson): Scene | null => lesson.scene ?? null;

// ------------------------------------------------------------------------------------------------- grading

export interface Verdict {
  correct: boolean;
  /** Spelling was slightly off but accepted. */
  typo?: boolean;
  /** Why it was wrong, in Uzbek (the expected mistake of this step, or the step's general reason). */
  why?: string;
}

const strip = (s: string) => normalize(s).replace(/\s+/g, ' ');

function mistakeFor(value: string, mistakes: SceneMistake[] | undefined): string | undefined {
  const given = strip(value);
  return mistakes?.find((m) => m.a.some((w) => strip(w) === given))?.why;
}

/**
 * A one-letter slip counts as a typo only when it is inside a word: a missing or extra letter at the END of a word
 * ("leave" for "leaves", "walk" for "walks") is the grammar being taught here, not a typing error.
 */
function harmlessTypo(given: string, expected: string): boolean {
  const a = normalize(given).split(' ');
  const b = normalize(expected).split(' ');
  if (a.length !== b.length) return false;
  const diff = a.map((w, i) => [w, b[i]] as const).filter(([x, y]) => x !== y);
  if (diff.length !== 1) return false;
  const [x, y] = diff[0];
  const [short, long] = x.length <= y.length ? [x, y] : [y, x];
  return !(long.length === short.length + 1 && long.startsWith(short)); // not an ending added or dropped
}

/** Judges a written or built reply. Any accepted variant is right; known mistakes get their own explanation. */
export function judgeReply(step: Extract<TaskStep, { k: 'type' | 'build' | 'fill' }>, value: string): Verdict {
  if (step.k === 'build') {
    const words = value.split(/\s+/).filter(Boolean);
    if (checkOrder(words, step.words, step.alt)) return { correct: true };
    return { correct: false, why: mistakeFor(value, step.mistakes) ?? step.why };
  }
  const full = (v: string) => (step.k === 'fill' ? step.q.replace('___', v) : v);
  // An expected mistake is never taken for a typo, even when it is one letter away from the right answer.
  const known = mistakeFor(value, step.mistakes) ?? (step.k === 'fill' ? mistakeFor(full(value), step.mistakes) : undefined);
  if (known) return { correct: false, why: known };
  const accepted = step.k === 'fill' ? step.a.map(full) : step.a;
  // A fill answer may be typed as the missing part or as the whole sentence.
  const r = step.k === 'fill' ? checkTyped(value, [...step.a, ...accepted]) : checkTyped(value, accepted);
  if (r.correct && (!r.typo || harmlessTypo(value, r.expected))) return { correct: true, typo: r.typo };
  return { correct: false, why: step.why };
}

/** The same step as an ordinary exercise, so a missed answer joins the learner's mistake notebook and review rounds. */
export function stepExercise(step: TaskStep, context: string): Exercise {
  const ask = `${context}${step.ask}`;
  switch (step.k) {
    case 'pick': {
      const ok = step.opts.findIndex((o) => o.ok);
      return { k: 'choice', q: ask, opts: step.opts.map((o) => o.en), a: ok, why: step.why };
    }
    case 'type': return { k: 'translate', uz: step.ask.replace(/[*`]/g, ''), a: step.a, why: step.why };
    case 'build': return { k: 'order', uz: step.ask.replace(/[*`]/g, ''), words: step.words, extra: step.extra, alt: step.alt, why: step.why };
    case 'fill': return { k: 'fill', q: step.q, a: step.a, uz: step.ask.replace(/[*`]/g, ''), hint: step.hint, why: step.why };
  }
}

/** First letters of the reply: help that does not give the answer away. */
export function replyHint(step: Extract<TaskStep, { k: 'type' | 'fill' }>, level: number): string {
  const answer = step.a[0];
  const words = answer.replace(/[.!?]+$/, '').split(/\s+/).filter(Boolean);
  if (level === 1) return step.hint ?? `Javob ${words.length} ta so'zdan iborat, "${words[0]}" bilan boshlanadi.`;
  return `${step.hint ? `${step.hint}\n` : ''}${words.map((w) => w[0] + '_'.repeat(Math.max(w.length - 1, 1))).join(' ')}`;
}

export const scoredSteps = (scene: Scene) => scene.steps.filter(isTask);

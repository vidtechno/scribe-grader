import type { SceneVoice } from './types';

/**
 * Dialogues of the Pre-Intermediate level are played in two voices: Emma (British female) and George (British male).
 * A speaker's voice follows their name (Anna → Emma, Tom → George); a speaker the lists do not know (Clerk, Doctor,
 * Friend) takes the voice that is not used yet, so two people never sound the same.
 */
const FEMALE = new Set(['anna', 'sara', 'sarah', 'kate', 'emma', 'emily', 'lily', 'mia', 'lucy', 'helen', 'jane', 'mary', 'maria', 'sofia', 'sophie', 'amy', 'alice', 'laura', 'julia', 'olivia', 'jessica', 'rachel', 'linda', 'nora', 'eva', 'ella', 'grace', 'lena', 'nina', 'diana', 'madina', 'malika', 'nilufar', 'dilnoza', 'kamola', 'zarina', 'zilola', 'gulnora', 'shahlo', 'aziza', 'feruza', 'dilya', 'nargiza', 'sevara', 'mother', 'mum', 'mom', 'sister', 'wife', 'woman', 'girl', 'waitress', 'grandmother', 'aunt', 'she', 'mrs', 'ms', 'miss', 'lady', 'daughter']);
const MALE = new Set(['tom', 'ben', 'sam', 'jack', 'john', 'mike', 'peter', 'paul', 'david', 'james', 'george', 'bob', 'dan', 'max', 'leo', 'adam', 'alex', 'chris', 'jim', 'tim', 'will', 'harry', 'oliver', 'ali', 'vali', 'sardor', 'jasur', 'botir', 'karim', 'bobur', 'timur', 'rustam', 'aziz', 'akmal', 'farhod', 'otabek', 'anvar', 'father', 'dad', 'brother', 'husband', 'man', 'boy', 'waiter', 'grandfather', 'uncle', 'he', 'mr', 'sir', 'son']);

const key = (who: string) => who.toLowerCase().replace(/[^a-z' ]/g, '').trim().split(/\s+/);

/** Voice of each speaker of a dialogue (by the name as written in `who`). */
export function dialogVoices(lines: { who: string }[]): Record<string, SceneVoice> {
  const out: Record<string, SceneVoice> = {};
  const used = new Set<SceneVoice>();
  const unknown: string[] = [];
  for (const { who } of lines) {
    if (who in out || unknown.includes(who)) continue;
    const words = key(who);
    const voice: SceneVoice | null = words.some((w) => FEMALE.has(w)) ? 'emma' : words.some((w) => MALE.has(w)) ? 'george' : null;
    if (voice) { out[who] = voice; used.add(voice); } else unknown.push(who);
  }
  for (const who of unknown) {
    const voice: SceneVoice = used.has('emma') && !used.has('george') ? 'george' : !used.has('emma') ? 'emma' : Object.keys(out).length % 2 ? 'george' : 'emma';
    out[who] = voice;
    used.add(voice);
  }
  return out;
}

/** Pre-Intermediate and Intermediate (units 12–23) are voiced with Emma and George. */
export const isTwoVoiceLesson = (lessonId: string): boolean => /^u(1[2-9]|2[0-3])-l\d+$/.test(lessonId);

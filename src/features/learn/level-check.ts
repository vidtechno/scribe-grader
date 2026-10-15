import { COURSE_UNITS, LEVELS, loadUnit } from './course';
import { shuffle } from './check';
import type { Exercise, Lesson, LevelId } from './types';

/** A short level check: 15 questions picked from the real lesson quizzes, easy levels first. */
export interface CheckItem { ex: Exercise; band: LevelId }

export const CHECK_SIZE = 15;
/** Share of correct answers in a band that counts as "knows this level". */
export const BAND_PASS = { beginner: 0.8, a1: 0.75, a2: 0.67, b1: 0.67 } as const;
/** Moving up with the quick test needs this share overall. */
export const UPGRADE_PASS_PERCENT = 75;

const OK_KINDS = new Set(['choice', 'tf', 'fill', 'fix', 'order', 'listen']);

/** Which units each band draws from, and how many questions. */
const START_PLAN: { band: LevelId; units: string[] }[] = [
  { band: 'beginner', units: ['u1', 'u2', 'u3', 'u4', 'u5'] },
  { band: 'a1', units: ['u6', 'u8', 'u9', 'u11'] },
  { band: 'a2', units: ['u13', 'u15', 'u16'] },
  { band: 'b1', units: ['u18', 'u20', 'u22'] },
];

function pick(lessons: Lesson[], count: number): Exercise[] {
  const pool = shuffle(lessons.filter((l) => !l.mini)).flatMap((l) => shuffle(l.quiz.filter((e) => OK_KINDS.has(e.k))).slice(0, 2));
  const out: Exercise[] = [];
  const seen = new Set<string>();
  for (const e of shuffle(pool)) {
    const key = JSON.stringify(e);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(e);
    if (out.length === count) break;
  }
  return out;
}

/** Questions for a first-time learner: 5 Beginner, 4 Elementary, 3 Pre-Intermediate, 3 Intermediate. */
export async function buildStartCheck(): Promise<CheckItem[]> {
  const items: CheckItem[] = [];
  for (const { band, units } of START_PLAN) {
    for (const u of units) {
      const exercises = pick(await loadUnit(u), 1);
      exercises.forEach((ex) => items.push({ ex, band }));
    }
  }
  return items.slice(0, CHECK_SIZE);
}

/** Questions for moving up to `target`: 15 from the units of the level just below it. */
export async function buildUpgradeCheck(target: LevelId): Promise<CheckItem[]> {
  const below = LEVELS[LEVELS.findIndex((l) => l.id === target) - 1];
  if (!below) return [];
  const units = COURSE_UNITS.filter((u) => u.level === below.id);
  const per = Math.ceil(CHECK_SIZE / units.length);
  const items: CheckItem[] = [];
  for (const u of units) pick(await loadUnit(u.id), per).forEach((ex) => items.push({ ex, band: below.id }));
  return shuffle(items).slice(0, CHECK_SIZE);
}

export interface BandResult { band: LevelId; right: number; total: number }

export function bandResults(items: CheckItem[], answers: boolean[]): BandResult[] {
  const bands = [...new Set(items.map((i) => i.band))];
  return bands.map((band) => {
    const idx = items.map((it, n) => (it.band === band ? n : -1)).filter((n) => n >= 0);
    return { band, right: idx.filter((n) => answers[n]).length, total: idx.length };
  });
}

/** The highest level whose lower levels are all known: start Beginner unless the Beginner band is solid, and so on. */
export function recommendLevel(results: BandResult[]): LevelId {
  const share = (b: LevelId) => { const r = results.find((x) => x.band === b); return r && r.total ? r.right / r.total : 0; };
  if (share('beginner') < BAND_PASS.beginner) return 'beginner';
  if (share('a1') < BAND_PASS.a1) return 'a1';
  if (share('a2') < BAND_PASS.a2) return 'a2';
  return 'b1';
}

import { ALL_LESSONS } from './course';
import type { LevelId } from './types';
import { callLearning, courseMap, type LearningState } from './api';

/**
 * What happens when someone opens /learn/lesson/:id (for example from a public lesson page after sign-up).
 * Access, order and trial rules stay on the server and in `courseMap`; this only decides what to show.
 */
export type LessonEntry =
  | { kind: 'unknown' }
  /** No learning profile yet: start the course at this lesson's level (same RPC as the level picker), then re-check. */
  | { kind: 'start'; level: LevelId }
  | { kind: 'paywall' }
  /** Not open yet (lessons go in order): `next` is the lesson the learner can open now, if any. */
  | { kind: 'locked'; next: { id: string; titleUz: string; title: string } | null }
  | { kind: 'ok' };

export function lessonEntry(state: LearningState | undefined, id: string): LessonEntry {
  const meta = ALL_LESSONS.find((l) => l.id === id);
  if (!meta) return { kind: 'unknown' };
  if (!state?.profile) return { kind: 'start', level: meta.level };
  if (!state.access.allowed) return { kind: 'paywall' };
  const map = courseMap(state);
  if (map.lessonState.get(id) === 'locked') {
    const n = map.nextLesson;
    return { kind: 'locked', next: n ? { id: n.id, titleUz: n.titleUz, title: n.title } : null };
  }
  return { kind: 'ok' };
}

type Call = (fn: string, args?: Record<string, unknown>) => Promise<unknown>;

/**
 * Starts the learner at the level of the lesson they opened. Uses the existing `learning_start_chosen` RPC, which only
 * accepts open levels and never overwrites an existing profile, so it cannot skip any server-side rule.
 */
export async function startLevelForLesson(id: string, call: Call = callLearning): Promise<LevelId | null> {
  const meta = ALL_LESSONS.find((l) => l.id === id);
  if (!meta) return null;
  await call('learning_start_chosen', { _level: meta.level });
  return meta.level;
}

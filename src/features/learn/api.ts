import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { ALL_LESSONS, COURSE_UNITS, drillIds } from './course';

export interface LessonProgress {
  lesson_id: string; best_score: number; total: number; stars: number; attempts: number; completed_at: string | null;
}
export interface DrillProgress { drill_id: string; best_score: number; total: number; stars: number; attempts: number; completed_at: string | null }
export interface UnitTestState {
  unit_id: string; attempts: number; best_score: number | null; best_total: number | null;
  passed_at: string | null; locked_until: string | null; last_attempt_at: string | null;
}
export interface DayActivity { day: string; xp: number; lessons: number; seconds: number; correct: number; answered: number }
export interface LearningAccess {
  allowed: boolean; reason: 'paid' | 'trial' | 'trial_expired' | 'not_started'; plan: string;
  trial_ends_at?: string; expires_at?: string | null;
}
/** `days_left`: days until three missed days in a row reset the streak (1 = study today). XP and mastery never reset. */
export interface StreakInfo { current: number; best: number; freezes?: number; done_today: boolean; at_risk: boolean; broken: boolean; days_left: number }
export interface LearningState {
  profile: {
    level: string; xp: number; trial_started_at: string; next_lesson_title: string | null;
    /** Set while the learner is taking the Elementary placement test. */
    target_level?: string | null;
    placement_status?: 'none' | 'pending' | 'passed' | 'failed' | 'skipped';
    placement_attempts?: number;
    placement_best?: number | null;
    placement_target?: string | null;
    daily_goal_xp?: number;
  } | null;
  access: LearningAccess;
  streak: number;
  streak_info?: StreakInfo;
  goal?: { daily_goal_xp: number; today_xp: number };
  achievements?: { key: string; unlocked_at: string }[];
  levels?: { id: string; position: number; title: string; is_open: boolean }[];
  today: string;
  progress: LessonProgress[];
  drills?: DrillProgress[];
  tests: UnitTestState[];
  activity: DayActivity[];
}

// The learning tables and functions are newer than the generated Supabase types.
type Rpc = (fn: string, args?: Record<string, unknown>) => Promise<{ data: unknown; error: { message: string } | null }>;
export async function callLearning<T>(fn: string, args?: Record<string, unknown>): Promise<T> {
  const rpc = supabase.rpc.bind(supabase) as unknown as Rpc;
  const { data, error } = await rpc(fn, args);
  if (error) throw new Error(error.message);
  return data as T;
}

export function useLearningState() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['learning-state', user?.id],
    enabled: !!user,
    queryFn: () => callLearning<LearningState>('learning_state'),
    staleTime: 30_000,
  });
}

export function useRefreshLearning() {
  const qc = useQueryClient();
  return () => Promise.all([qc.invalidateQueries({ queryKey: ['learning-state'] }), qc.invalidateQueries({ queryKey: ['learning-review'] })]);
}

/** `open` = a lesson of a level below the learner's starting level: free to revisit, not required. */
export type NodeState = 'done' | 'current' | 'open' | 'locked';
/** A required practice game after a hard lesson. */
export type DrillState = 'done' | 'current' | 'open' | 'locked';
/** `optional`: the unit is reached but its lessons are not finished — the learner may test out of it. */
export type TestState = 'locked' | 'optional' | 'open' | 'passed' | 'cooldown';

/**
 * Which lessons and unit tests are open, derived from progress. The path starts at the first unit of the level the
 * learner chose: lessons go in order and each unit opens after the previous unit's test is passed. Units of lower
 * levels stay open for review but are not required.
 */
export function courseMap(state: LearningState | undefined) {
  const done = new Set((state?.progress ?? []).filter((p) => p.completed_at).map((p) => p.lesson_id));
  const passed = new Set((state?.tests ?? []).filter((t) => t.passed_at).map((t) => t.unit_id));
  const effectiveDone = new Set(done);
  const drillsDone = new Set((state?.drills ?? []).filter((d) => d.completed_at).map((d) => d.drill_id));
  const lessonState = new Map<string, NodeState>();
  const drillState = new Map<string, DrillState>();
  let nextDrill: { id: string; lessonId: string } | null = null;
  const unitTest = new Map<string, TestState>();
  const startLevel = state?.profile?.level ?? 'beginner';
  const startIndex = Math.max(0, COURSE_UNITS.findIndex((u) => u.level === startLevel));
  let open = true;
  let current: string | null = null;
  COURSE_UNITS.forEach((unit, index) => {
    const allDone = unit.lessons.every((l) => done.has(l.id) && drillIds(l.id).every((d) => drillsDone.has(d)));
    const t = state?.tests.find((x) => x.unit_id === unit.id);
    const cooling = !!t?.locked_until && new Date(t.locked_until) > new Date();
    if (index < startIndex) {
      for (const l of unit.lessons) {
        lessonState.set(l.id, done.has(l.id) ? 'done' : 'open');
        for (const d of drillIds(l.id)) drillState.set(d, drillsDone.has(d) ? 'done' : 'open');
      }
      unitTest.set(unit.id, passed.has(unit.id) ? 'passed' : cooling ? 'cooldown' : 'open');
      return;
    }
    // Passing a unit's test counts the whole unit as known: its lessons are marked done and the next unit opens.
    const unitPassed = passed.has(unit.id);
    for (const l of unit.lessons) {
      if (unitPassed) {
        lessonState.set(l.id, 'done'); effectiveDone.add(l.id);
        for (const d of drillIds(l.id)) drillState.set(d, 'done');
      } else if (done.has(l.id)) {
        lessonState.set(l.id, 'done');
        // Drills are required: the next lesson waits until the lesson's drills are done, one after another.
        for (const d of drillIds(l.id)) {
          if (drillsDone.has(d)) drillState.set(d, 'done');
          else if (open) { drillState.set(d, 'current'); nextDrill ??= { id: d, lessonId: l.id }; open = false; }
          else drillState.set(d, 'locked');
        }
      }
      else if (open) { lessonState.set(l.id, 'current'); current ??= l.id; open = false; }
      else lessonState.set(l.id, 'locked');
      if (!unitPassed && !done.has(l.id)) for (const d of drillIds(l.id)) drillState.set(d, 'locked');
    }
    // The unit is reached when it is the first of the path or the previous unit's test was passed.
    const reached = index === startIndex || passed.has(COURSE_UNITS[index - 1].id);
    if (unitPassed) unitTest.set(unit.id, 'passed');
    else if (cooling) unitTest.set(unit.id, 'cooldown');
    else if (allDone) unitTest.set(unit.id, 'open');
    else unitTest.set(unit.id, reached ? 'optional' : 'locked');
    // The next unit opens only after this unit's test is passed.
    open = unitPassed;
  });
  const path = COURSE_UNITS.slice(startIndex);
  const pathLessons = path.flatMap((u) => u.lessons);
  const nextLesson = current ? ALL_LESSONS.find((l) => l.id === current) ?? null : null;
  const pendingTest = path.find((u) => unitTest.get(u.id) === 'open' || unitTest.get(u.id) === 'cooldown') ?? null;
  // The level shown first: the one with the next step, else the level the learner chose.
  const activeLevel = nextLesson?.level ?? pendingTest?.level ?? startLevel;
  return {
    lessonState, drillState, nextDrill, unitTest, nextLesson, pendingTest, done: effectiveDone, passed, activeLevel,
    doneCount: pathLessons.filter((l) => effectiveDone.has(l.id)).length,
    total: pathLessons.length,
    unitsPassed: path.filter((u) => passed.has(u.id)).length,
    unitsTotal: path.length,
  };
}

export function learningStats(state: LearningState | undefined) {
  const activity = state?.activity ?? [];
  const answered = activity.reduce((s, a) => s + a.answered, 0);
  const correct = activity.reduce((s, a) => s + a.correct, 0);
  const seconds = activity.reduce((s, a) => s + a.seconds, 0);
  const byDay = new Map(activity.map((a) => [a.day, a]));
  const today = state?.today ? new Date(`${state.today}T12:00:00Z`) : new Date();
  const week = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setUTCDate(d.getUTCDate() - (6 - i));
    const key = d.toISOString().slice(0, 10);
    return { day: key, xp: byDay.get(key)?.xp ?? 0, label: ['Ya', 'Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh'][d.getUTCDay()] };
  });
  return {
    accuracy: answered ? Math.round((correct / answered) * 100) : null,
    minutes: Math.round(seconds / 60),
    week,
    todayDone: (byDay.get(state?.today ?? '')?.xp ?? 0) > 0,
    activeDays: activity.filter((a) => a.xp > 0).length,
  };
}

export function placementPending(state: LearningState | undefined): boolean {
  return state?.profile?.placement_status === 'pending';
}

export function trialDaysLeft(access: LearningAccess | undefined): number | null {
  if (!access || access.reason !== 'trial' || !access.trial_ends_at) return null;
  return Math.max(0, Math.ceil((new Date(access.trial_ends_at).getTime() - Date.now()) / 86_400_000));
}

export function learningErrorMessage(e: unknown): string {
  const msg = e instanceof Error ? e.message : String(e);
  if (msg.includes('learning_locked')) return "Bepul 7 kunlik muddat tugadi. Davom etish uchun Learn yoki IELTS tarifini oling.";
  if (msg.includes('learning_not_started')) return "Avval darajangizni tanlang.";
  return "Saqlab bo'lmadi. Internetni tekshirib, qayta urinib ko'ring.";
}

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { ALL_LESSONS, BEGINNER_UNITS } from './course';

export interface LessonProgress {
  lesson_id: string; best_score: number; total: number; stars: number; attempts: number; completed_at: string | null;
}
export interface UnitTestState {
  unit_id: string; attempts: number; best_score: number | null; best_total: number | null;
  passed_at: string | null; locked_until: string | null; last_attempt_at: string | null;
}
export interface DayActivity { day: string; xp: number; lessons: number; seconds: number; correct: number; answered: number }
export interface LearningAccess {
  allowed: boolean; reason: 'paid' | 'trial' | 'trial_expired' | 'not_started'; plan: string;
  trial_ends_at?: string; expires_at?: string | null;
}
export interface LearningState {
  profile: { level: string; xp: number; trial_started_at: string; next_lesson_title: string | null } | null;
  access: LearningAccess;
  streak: number;
  today: string;
  progress: LessonProgress[];
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
  return () => qc.invalidateQueries({ queryKey: ['learning-state'] });
}

export type NodeState = 'done' | 'current' | 'locked';

/** Which lessons and unit tests are open, derived from progress (lessons in order, units gated by their test). */
export function courseMap(state: LearningState | undefined) {
  const done = new Set((state?.progress ?? []).filter((p) => p.completed_at).map((p) => p.lesson_id));
  const passed = new Set((state?.tests ?? []).filter((t) => t.passed_at).map((t) => t.unit_id));
  const lessonState = new Map<string, NodeState>();
  const unitTest = new Map<string, 'locked' | 'open' | 'passed' | 'cooldown'>();
  let open = true;
  let current: string | null = null;
  for (const unit of BEGINNER_UNITS) {
    for (const l of unit.lessons) {
      if (done.has(l.id)) lessonState.set(l.id, 'done');
      else if (open) { lessonState.set(l.id, 'current'); current ??= l.id; open = false; }
      else lessonState.set(l.id, 'locked');
    }
    const allDone = unit.lessons.every((l) => done.has(l.id));
    const t = state?.tests.find((x) => x.unit_id === unit.id);
    if (passed.has(unit.id)) unitTest.set(unit.id, 'passed');
    else if (!allDone) unitTest.set(unit.id, 'locked');
    else if (t?.locked_until && new Date(t.locked_until) > new Date()) unitTest.set(unit.id, 'cooldown');
    else unitTest.set(unit.id, 'open');
    // The next unit opens only after this unit's test is passed.
    open = allDone && passed.has(unit.id);
  }
  const doneCount = done.size;
  const nextLesson = current ? ALL_LESSONS.find((l) => l.id === current) ?? null : null;
  const pendingTest = BEGINNER_UNITS.find((u) => unitTest.get(u.id) === 'open' || unitTest.get(u.id) === 'cooldown') ?? null;
  return { lessonState, unitTest, doneCount, total: ALL_LESSONS.length, nextLesson, pendingTest, done, passed };
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

export function trialDaysLeft(access: LearningAccess | undefined): number | null {
  if (!access || access.reason !== 'trial' || !access.trial_ends_at) return null;
  return Math.max(0, Math.ceil((new Date(access.trial_ends_at).getTime() - Date.now()) / 86_400_000));
}

export function learningErrorMessage(e: unknown): string {
  const msg = e instanceof Error ? e.message : String(e);
  if (msg.includes('learning_locked')) return "Bepul 7 kunlik muddat tugadi. Davom etish uchun Scorify Go yoki Plus tarifini oling.";
  if (msg.includes('learning_not_started')) return "Avval darajangizni tanlang.";
  return "Saqlab bo'lmadi. Internetni tekshirib, qayta urinib ko'ring.";
}

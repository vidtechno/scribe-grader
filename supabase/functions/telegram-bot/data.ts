// Read models for the bot, built from the same tables the website uses.
import type { Db } from "../_shared/telegram-accounts.ts";
import { tzDate } from "./ui.ts";

export interface Attempt { id: string; score: number | null; created_at: string; topic: string; label: string }
export interface Goals { target_band: number; weekly_essays: number; weekly_speaking: number; exam_date: string | null }
export interface Subscription {
  plan_type: string; plan_name: string | null; expires_at: string | null;
  writing_used: number; writing_limit: number; speaking_used: number; speaking_limit: number;
  mock_test_used: number; mock_test_limit: number;
}
export interface Overview {
  essays: Attempt[]; speaking: Attempt[]; mocks: Attempt[];
  goals: Goals; sub: Subscription | null;
  profile: { full_name: string | null; email: string; public_id: string | null } | null;
}

export const DEFAULT_GOALS: Goals = { target_band: 7, weekly_essays: 3, weekly_speaking: 2, exam_date: null };

export async function loadOverview(db: Db, userId: string): Promise<Overview> {
  const [essays, speaking, mocks, goals, sub, profile] = await Promise.all([
    db.from("essays").select("id,score,created_at,topic,task_type").eq("user_id", userId).eq("status", "completed")
      .order("created_at", { ascending: false }).limit(500),
    db.from("speaking_attempts").select("id,score,created_at,topic,part").eq("user_id", userId).eq("status", "completed")
      .order("created_at", { ascending: false }).limit(500),
    db.from("mock_tests").select("id,overall_band,created_at,completed_at").eq("user_id", userId).eq("status", "completed")
      .order("created_at", { ascending: false }).limit(50),
    db.from("user_goals").select("target_band,weekly_essays,weekly_speaking,exam_date").eq("user_id", userId).maybeSingle(),
    db.from("subscriptions").select("plan_type,plan_name,expires_at,writing_used,writing_limit,speaking_used,speaking_limit,mock_test_used,mock_test_limit")
      .eq("user_id", userId).maybeSingle(),
    db.from("profiles").select("full_name,email,public_id").eq("user_id", userId).maybeSingle(),
  ]);
  return {
    essays: (essays.data ?? []).map((e) => ({ id: e.id, score: e.score, created_at: e.created_at, topic: e.topic, label: e.task_type })),
    speaking: (speaking.data ?? []).map((s) => ({ id: s.id, score: s.score, created_at: s.created_at, topic: s.topic, label: s.part })),
    mocks: (mocks.data ?? []).map((m) => ({
      id: m.id, score: m.overall_band, created_at: m.completed_at ?? m.created_at, topic: "Full Mock Test", label: "Mock",
    })),
    goals: goals.data ? { ...DEFAULT_GOALS, ...goals.data, target_band: Number(goals.data.target_band) } : DEFAULT_GOALS,
    sub: (sub.data as Subscription | null) ?? null,
    profile: profile.data ?? null,
  };
}

export function scoreStats(items: Attempt[]) {
  const scored = items.filter((i) => typeof i.score === "number") as (Attempt & { score: number })[];
  const scores = scored.map((i) => Number(i.score));
  return {
    count: items.length,
    avg: scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : null,
    best: scores.length ? Math.max(...scores) : null,
    last: scores.length ? scores[0] : null,
    /** Oldest → newest, last five scores. */
    trend: scores.slice(0, 5).reverse(),
  };
}

/** Consecutive days (Tashkent time) with at least one completed Writing or Speaking result. */
export function streakDays(items: Attempt[], now = new Date()): number {
  const days = new Set(items.map((i) => tzDate(i.created_at)));
  const cursor = new Date(`${tzDate(now)}T12:00:00Z`);
  if (!days.has(tzDate(cursor))) cursor.setUTCDate(cursor.getUTCDate() - 1);
  let streak = 0;
  while (days.has(cursor.toISOString().slice(0, 10))) {
    streak++;
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }
  return streak;
}

/** Monday of the current week in Tashkent, as YYYY-MM-DD. */
export function weekStart(now = new Date()): string {
  const d = new Date(`${tzDate(now)}T12:00:00Z`);
  const isoDow = (d.getUTCDay() + 6) % 7; // Monday = 0
  d.setUTCDate(d.getUTCDate() - isoDow);
  return d.toISOString().slice(0, 10);
}

export function countSince(items: Attempt[], dayStart: string): number {
  return items.filter((i) => tzDate(i.created_at) >= dayStart).length;
}

export function trendArrow(trend: number[]): string {
  if (trend.length < 2) return "";
  const diff = trend[trend.length - 1] - trend[0];
  return diff > 0 ? " 📈" : diff < 0 ? " 📉" : " ➡️";
}

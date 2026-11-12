/** Pure helpers for the "+N XP / weekly rank" toast. */
export interface MyRank {
  week_xp: number; rank: number | null; total: number; xp_to_next: number | null;
  next_name: string | null; leader_xp: number; all_time_rank: number | null; visible?: boolean;
}
export type Motivation = { key: string; vars?: Record<string, string | number> };

/** Positive when the learner moved up (smaller rank number); 0 when unknown or not improved. */
export function rankDelta(prev: number | null | undefined, now: number | null | undefined): number {
  if (!prev || !now) return 0;
  return Math.max(0, prev - now);
}

/** Monday of the week that contains `day` (YYYY-MM-DD), as YYYY-MM-DD. */
export function weekStart(day: string): string {
  const d = new Date(`${day}T00:00:00Z`);
  const back = (d.getUTCDay() + 6) % 7;
  return new Date(d.getTime() - back * 86_400_000).toISOString().slice(0, 10);
}

export const rankStoreKey = (userId: string, day: string) => `scorify-xprank:${userId}:${weekStart(day)}`;

export function readLastRank(userId: string, day: string): number | null {
  try {
    const n = Number(localStorage.getItem(rankStoreKey(userId, day)));
    return Number.isFinite(n) && n > 0 ? n : null;
  } catch { return null; }
}
export function saveLastRank(userId: string, day: string, rank: number | null) {
  if (!rank) return;
  try { localStorage.setItem(rankStoreKey(userId, day), String(rank)); } catch { /* storage unavailable */ }
}

/** Picks the one short line under the headline. */
export function motivation(r: MyRank, delta: number): Motivation {
  if (r.rank == null) return r.visible === false ? { key: 'learn.xpRank.hidden' } : { key: 'learn.xpRank.plain' };
  if (r.rank === 1) return { key: 'learn.xpRank.lead' };
  if (delta > 0) return { key: 'learn.xpRank.up', vars: { n: delta } };
  if (r.xp_to_next != null && r.xp_to_next <= 30 && r.next_name) return { key: 'learn.xpRank.close', vars: { n: r.xp_to_next, name: r.next_name } };
  return { key: 'learn.xpRank.plain' };
}

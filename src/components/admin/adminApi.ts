import { supabase } from '@/integrations/supabase/client';

/** The admin RPCs are newer than the generated types. */
export async function adminRpc<T>(fn: string, args: Record<string, unknown> = {}): Promise<T> {
  const { data, error } = await (supabase.rpc as unknown as (f: string, a: object) => Promise<{ data: T; error: { message: string } | null }>)(fn, args);
  if (error) throw new Error(error.message);
  return data;
}

export const som = (n: number | null | undefined) => `${Math.round(Number(n ?? 0)).toLocaleString('uz-UZ').replace(/,/g, ' ')} so'm`;
export const pct = (a: number, b: number) => (b > 0 ? `${Math.round((a / b) * 100)}%` : '—');

export const LEVEL_LABEL: Record<string, string> = { beginner: 'Beginner', a1: 'Elementary', a2: 'Pre-Intermediate', b1: 'Intermediate', b2: 'Upper-Int.', c1: 'Advanced', ielts: 'IELTS' };
export const PLAN_LABEL: Record<string, string> = { free: 'Free', go: 'Learn', plus: 'IELTS' };

export interface Overview {
  users: { total: number; today: number; d7: number; d30: number; active_24h: number; active_7d: number; google: number; telegram: number; email: number };
  plans: { learn: number; ielts: number; trial: number; trial_ended: number; expiring_7d: number; expired: number; monthly_uzs: number };
  funnel: { signed_up: number; started: number; lesson1: number; lessons3: number; bought: number };
  learning: { lessons_today: number; lessons_7d: number; learners_today: number; learners_7d: number; streak3: number; streak7: number };
  ielts: { writing_7d: number; speaking_7d: number; mock_7d: number };
  referral: { invited: number; bought: number; rewarded: number; pending_count: number; pending_sum: number; paid_sum: number };
  bot: { total: number; linked: number; blocked: number; outbox_pending: number; outbox_failed_24h: number };
  signups_30d: { day: string; n: number }[];
  learning_14d: { day: string; lessons: number; learners: number }[];
}

export interface AdminUser {
  user_id: string; email: string; full_name: string | null; public_id: string | null; username: string | null; phone: string | null; city: string | null;
  created_at: string; last_sign_in_at: string | null; provider: string; plan_type: string | null; expires_at: string | null; trial_ends_at: string | null;
  writing_used: number | null; writing_limit: number | null; speaking_used: number | null; speaking_limit: number | null;
  level: string | null; xp: number | null; streak: number | null; lessons_done: number; last_learn_day: string | null;
  essays: number; speaking: number; mocks: number; invited: number; was_referred: boolean;
  telegram_id: number | null; telegram_username: string | null; telegram_banned: boolean; is_admin: boolean; last_seen: string | null;
}

export type UserStatus = 'paid' | 'trial' | 'expired' | 'free';
/** What the user is right now: on a paid plan, in the free week, a lapsed paid plan, or plain Free. */
export function statusOf(u: AdminUser, now = Date.now()): UserStatus {
  const paid = u.plan_type === 'go' || u.plan_type === 'plus';
  if (paid) return u.expires_at && +new Date(u.expires_at) <= now ? 'expired' : 'paid';
  if (u.trial_ends_at && +new Date(u.trial_ends_at) > now) return 'trial';
  return 'free';
}

export const daysUntil = (iso: string | null | undefined) => (iso ? Math.ceil((+new Date(iso) - Date.now()) / 86_400_000) : null);

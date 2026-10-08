// Flood protection. Layer 1 runs in memory before any database work: a sender who presses too fast is ignored.
// Layer 2 is persistent: repeated bursts earn strikes, and three strikes block the sender for 10 min, growing to 24 h.
import { adminIds, esc, tg, type TelegramUser } from "../_shared/telegram.ts";
import type { Db } from "../_shared/telegram-accounts.ts";
import { send } from "./ui.ts";

/** More than BURST actions in 10 s or PER_MINUTE in 60 s is a burst. Normal use stays far below both. */
const BURST = 8;
const PER_MINUTE = 25;
const STRIKE_GAP_MS = 4000;

const hits = new Map<number, number[]>();
const lastStrike = new Map<number, number>();
const blockedUntil = new Map<number, number>();

function prune(now: number) {
  if (hits.size < 5000) return;
  for (const [id, list] of hits) if (now - list[list.length - 1] > 60_000) hits.delete(id);
  for (const [id, t] of blockedUntil) if (t < now) blockedUntil.delete(id);
  for (const [id, t] of lastStrike) if (now - t > 60_000) lastStrike.delete(id);
}

const fmtWait = (ms: number) => {
  const m = Math.ceil(ms / 60_000);
  return m >= 120 ? `${Math.round(m / 60)} soat` : `${m} daqiqa`;
};

export interface Verdict { pass: boolean; toast?: string }

/** Decides whether this update may be handled. Callers answer callback queries themselves when `pass` is false. */
export async function allow(db: Db, from: TelegramUser, chatId: number, isCallback: boolean): Promise<Verdict> {
  if (from.is_bot || adminIds().has(from.id)) return { pass: true };
  const now = Date.now();
  prune(now);
  const until = blockedUntil.get(from.id);
  if (until && until > now) return { pass: false };

  const list = (hits.get(from.id) ?? []).filter((t) => now - t < 60_000);
  list.push(now);
  hits.set(from.id, list);
  const last10 = list.filter((t) => now - t < 10_000).length;
  const tooFast = last10 > BURST || list.length > PER_MINUTE;

  if (!tooFast) {
    // Pressing fast but still allowed: make sure a block set by another instance is honoured.
    if (last10 >= 5) {
      const { data } = await db.from("telegram_accounts").select("flood_until").eq("telegram_id", from.id).maybeSingle();
      const t = data?.flood_until ? new Date(data.flood_until as string).getTime() : 0;
      if (t > now) { blockedUntil.set(from.id, t); return { pass: false }; }
    }
    return { pass: true };
  }

  // Dropped. A strike is counted at most once every few seconds, so one burst is one strike.
  const sinceStrike = now - (lastStrike.get(from.id) ?? 0);
  if (sinceStrike < STRIKE_GAP_MS) return { pass: false };
  lastStrike.set(from.id, now);
  try {
    const { data } = await db.rpc("internal_bot_flood_strike", { _tg: from.id });
    const r = (data ?? {}) as { blocked_until?: string | null; minutes?: number; level?: number; already?: boolean };
    if (r.blocked_until) {
      const t = new Date(r.blocked_until).getTime();
      blockedUntil.set(from.id, t);
      if (!r.already) {
        await send(chatId, `⏸ Juda tez-tez bosildi, shuning uchun bot sizga <b>${fmtWait(t - now)}</b> dam oladi. Keyin yana davom etasiz 🌿`).catch(() => {});
        const who = `${esc(from.first_name ?? "")}${from.username ? ` @${esc(from.username)}` : ""} · <code>${from.id}</code>`;
        for (const id of adminIds()) {
          await send(id, `🚨 <b>Flood</b>: ${who} — ${fmtWait(t - now)}ga bloklandi (daraja ${r.level ?? 1}).`).catch(() => {});
        }
      }
      return { pass: false };
    }
  } catch (e) {
    console.error("flood strike failed:", e);
  }
  return { pass: false, toast: isCallback ? "⏳ Sekinroq, iltimos 🙂" : undefined };
}

/** Answers the callback of a dropped update so the button stops spinning (best effort). */
export const dismiss = (id: string, text?: string) => tg("answerCallbackQuery", { callback_query_id: id, ...(text ? { text } : {}) }).catch(() => {});

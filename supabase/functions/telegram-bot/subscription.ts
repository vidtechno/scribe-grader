// Required channel: the bot works for people who follow @scorify_uz (the bot is an admin there, so it can check).
import { adminIds, TelegramError, tg } from "../_shared/telegram.ts";
import { cb, link, send } from "./ui.ts";

export const CHANNEL = "@scorify_uz";
export const CHANNEL_URL = "https://t.me/scorify_uz";

const MEMBER = new Set(["creator", "administrator", "member"]);
const CACHE_MS = 10 * 60_000;
const known = new Map<number, number>();

/** "restricted" members are in the channel only when is_member is true. */
export function isMemberStatus(status: string, isMember?: boolean): boolean {
  return MEMBER.has(status) || (status === "restricted" && isMember === true);
}

/**
 * Whether this person follows the channel. A positive answer is remembered for a few minutes so normal use costs no extra calls.
 * If Telegram cannot answer (the bot lost its admin rights, an outage), nobody is locked out.
 */
export async function isSubscribed(userId: number, fresh = false): Promise<boolean> {
  if (adminIds().has(userId)) return true;
  const now = Date.now();
  if (!fresh && (known.get(userId) ?? 0) > now) return true;
  try {
    const m = await tg<{ status: string; is_member?: boolean }>("getChatMember", { chat_id: CHANNEL, user_id: userId });
    const ok = isMemberStatus(m.status, m.is_member);
    if (ok) {
      if (known.size > 5000) known.clear();
      known.set(userId, now + CACHE_MS);
    } else {
      known.delete(userId);
    }
    return ok;
  } catch (e) {
    if (e instanceof TelegramError && e.code === 400 && /user not found|PARTICIPANT_ID_INVALID/i.test(e.description)) return false;
    console.error("subscription check failed (letting the user through):", e);
    return true;
  }
}

export const GATE_TEXT = [
  "👋 <b>Deyarli tayyor!</b>",
  "",
  `Botdan foydalanish uchun <b>${CHANNEL}</b> kanaliga obuna bo'ling — u yerda IELTS maslahatlari, ingliz tili darslari va yangiliklar.`,
  "",
  "1️⃣ «📢 Kanalga o'tish» → <b>Obuna bo'lish</b>",
  "2️⃣ Qaytib «✅ Obuna bo'ldim»ni bosing",
  "",
  "<i>Atigi 10 soniya — va hammasi ochiladi 🚀</i>",
].join("\n");

export const GATE_KEYBOARD = {
  inline_keyboard: [
    [link("📢 Kanalga o'tish", CHANNEL_URL)],
    [cb("✅ Obuna bo'ldim", "sub:check")],
  ],
};

export const showGate = (chatId: number) => send(chatId, GATE_TEXT, GATE_KEYBOARD);

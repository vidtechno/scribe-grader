// Shared bot UI: context, labels, keyboards and message helpers.
import { tg, TelegramError, webAppUrl, type TelegramUser } from "../_shared/telegram.ts";
import type { Db, TelegramAccount } from "../_shared/telegram-accounts.ts";

export interface Ctx {
  db: Db;
  from: TelegramUser;
  chatId: number;
  account: TelegramAccount;
  isAdmin: boolean;
  /** Set while handling a button press: replies edit this message instead of sending a new one. */
  messageId?: number;
}

export type Button =
  | { text: string; callback_data: string }
  | { text: string; url: string }
  | { text: string; web_app: { url: string } };
export type InlineKeyboard = Button[][];

export const cb = (text: string, data: string): Button => ({ text, callback_data: data });
export const link = (text: string, url: string): Button => ({ text, url });
/** Opens a page of the website inside Telegram (Mini App) with automatic sign-in. */
export const app = (text: string, path: string): Button => ({ text, web_app: { url: webAppUrl(path) } });

export const BTN = {
  stats: "📊 Statistika",
  results: "📝 Natijalarim",
  goal: "🎯 Maqsadim",
  plan: "💎 Tarifim",
  top: "🏆 Reyting",
  invite: "🎁 Do'stlarni taklif qilish",
  daily: "💡 Kunlik mashq",
  quiz: "🧠 So'z testi",
  open: "🚀 Ilovani ochish",
  settings: "⚙️ Sozlamalar",
  help: "❓ Yordam",
  admin: "👑 Admin panel",
  register: "✅ Ro'yxatdan o'tish",
  linkGoogle: "🔗 Google hisobimni ulash",
} as const;

export function mainKeyboard(ctx: Ctx) {
  const rows: { text: string }[][] = ctx.account.user_id
    ? [
      [{ text: BTN.stats }, { text: BTN.results }],
      [{ text: BTN.goal }, { text: BTN.plan }],
      [{ text: BTN.daily }, { text: BTN.quiz }],
      [{ text: BTN.top }, { text: BTN.invite }],
      [{ text: BTN.open }, { text: BTN.settings }],
    ]
    : [
      [{ text: BTN.register }, { text: BTN.linkGoogle }],
      [{ text: BTN.daily }, { text: BTN.quiz }],
      [{ text: BTN.open }, { text: BTN.help }],
    ];
  if (ctx.isAdmin) rows.push([{ text: BTN.admin }]);
  return { keyboard: rows, resize_keyboard: true, is_persistent: true, input_field_placeholder: "Bo'limni tanlang" };
}

const MAX_TEXT = 4000;

export async function send(chatId: number, text: string, replyMarkup?: unknown) {
  return tg<{ message_id: number }>("sendMessage", {
    chat_id: chatId,
    text: text.length > MAX_TEXT ? `${text.slice(0, MAX_TEXT)}…` : text,
    parse_mode: "HTML",
    link_preview_options: { is_disabled: true },
    ...(replyMarkup ? { reply_markup: replyMarkup } : {}),
  });
}

/** Edits the pressed message when possible, otherwise sends a new one. */
export async function reply(ctx: Ctx, text: string, keyboard?: InlineKeyboard) {
  const markup = keyboard ? { inline_keyboard: keyboard } : undefined;
  if (ctx.messageId) {
    try {
      await tg("editMessageText", {
        chat_id: ctx.chatId,
        message_id: ctx.messageId,
        text: text.length > MAX_TEXT ? `${text.slice(0, MAX_TEXT)}…` : text,
        parse_mode: "HTML",
        link_preview_options: { is_disabled: true },
        reply_markup: markup ?? { inline_keyboard: [] },
      });
      return;
    } catch (e) {
      if (e instanceof TelegramError && /not modified/i.test(e.description)) return;
      // The message may be too old or not editable (e.g. a copied media message): fall back to a new one.
    }
  }
  await send(ctx.chatId, text, markup);
}

export async function setState(ctx: Ctx, state: Record<string, unknown> | null) {
  ctx.account.state = state;
  await ctx.db.from("telegram_accounts").update({ state }).eq("telegram_id", ctx.account.telegram_id);
}

// ---------- formatting ----------
const MONTHS = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"];
const TZ = "Asia/Tashkent";

/** YYYY-MM-DD in Tashkent time. */
export function tzDate(d: Date | string = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" })
    .format(typeof d === "string" ? new Date(d) : d);
}

export function fmtDate(d: Date | string | null | undefined, withYear = false): string {
  if (!d) return "—";
  const [y, m, day] = tzDate(d).split("-").map(Number);
  return `${day}-${MONTHS[m - 1]}${withYear ? ` ${y}` : ""}`;
}

export function fmtShort(d: Date | string): string {
  const [, m, day] = tzDate(d).split("-");
  return `${day}.${m}`;
}

export function daysUntil(d: Date | string): number {
  const target = new Date(`${tzDate(d)}T00:00:00Z`).getTime();
  const today = new Date(`${tzDate()}T00:00:00Z`).getTime();
  return Math.round((target - today) / 86_400_000);
}

export function band(n: number | null | undefined): string {
  return typeof n === "number" && Number.isFinite(n) ? (Math.round(n * 2) / 2).toFixed(1) : "—";
}

export function bar(used: number, total: number, width = 10): string {
  if (total <= 0) return "▱".repeat(width);
  const filled = Math.max(0, Math.min(width, Math.round((used / total) * width)));
  return "▰".repeat(filled) + "▱".repeat(width - filled);
}

export const PLAN_LABEL: Record<string, string> = { free: "Free", go: "Scorify Go", plus: "Scorify Plus" };

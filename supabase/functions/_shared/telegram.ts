// Telegram Bot API helpers shared by the telegram-bot and telegram-auth functions.

export const SITE_URL = (Deno.env.get("SITE_URL") ?? "https://www.scorify.uz").replace(/\/+$/, "");
export const PAYMENTS_USERNAME = "scorify_support";
/** Telegram accounts that always see the admin panel. Site admins who link Telegram get it too. */
export const DEFAULT_ADMIN_IDS = [6117815120];

export interface TelegramUser {
  id: number;
  is_bot?: boolean;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}

export class TelegramError extends Error {
  constructor(public code: number, public description: string, public retryAfter?: number) {
    super(`Telegram ${code}: ${description}`);
  }
}

let vaultToken: string | null = null;

/** Bot token from the TELEGRAM_BOT_TOKEN secret, or from Supabase Vault (loaded by initBotToken). */
export function botToken(): string {
  const token = Deno.env.get("TELEGRAM_BOT_TOKEN") ?? vaultToken;
  if (!token) throw new Error("TELEGRAM_BOT_TOKEN is not configured");
  return token;
}

/** Loads the token from Vault once per instance when no function secret is set. */
export async function initBotToken(db: { rpc: (fn: string) => PromiseLike<{ data: unknown; error: unknown }> }) {
  if (Deno.env.get("TELEGRAM_BOT_TOKEN") || vaultToken) return;
  const { data, error } = await db.rpc("telegram_bot_token");
  if (error) console.error("could not read the bot token from Vault:", error);
  if (typeof data === "string" && data) vaultToken = data;
}

export function adminIds(): Set<number> {
  const extra = (Deno.env.get("TELEGRAM_ADMIN_IDS") ?? "")
    .split(",").map((v) => Number(v.trim())).filter((v) => Number.isSafeInteger(v) && v > 0);
  return new Set([...DEFAULT_ADMIN_IDS, ...extra]);
}

export async function tg<T = unknown>(method: string, params: Record<string, unknown> = {}): Promise<T> {
  const res = await fetch(`https://api.telegram.org/bot${botToken()}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
    signal: AbortSignal.timeout(15_000),
  });
  const data = await res.json().catch(() => ({ ok: false, error_code: res.status, description: res.statusText }));
  if (!data.ok) {
    throw new TelegramError(data.error_code ?? res.status, data.description ?? "Unknown error", data.parameters?.retry_after);
  }
  return data.result as T;
}

let cachedUsername: string | null = null;
export async function botUsername(): Promise<string> {
  const fromEnv = Deno.env.get("TELEGRAM_BOT_USERNAME");
  if (fromEnv) return fromEnv.replace(/^@/, "");
  if (!cachedUsername) cachedUsername = (await tg<{ username: string }>("getMe")).username;
  return cachedUsername;
}

export async function botLink(start?: string): Promise<string> {
  const name = await botUsername();
  return start ? `https://t.me/${name}?start=${encodeURIComponent(start)}` : `https://t.me/${name}`;
}

/** URL that opens a page of the website as a Telegram Mini App and signs the user in. */
export function webAppUrl(path = "/dashboard"): string {
  return `${SITE_URL}/tg?next=${encodeURIComponent(path)}`;
}

export function esc(value: unknown): string {
  return String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function truncate(value: unknown, max: number): string {
  const s = String(value ?? "").replace(/\s+/g, " ").trim();
  return s.length > max ? `${s.slice(0, Math.max(0, max - 1)).trimEnd()}…` : s;
}

const encoder = new TextEncoder();

function toHex(buf: ArrayBuffer): string {
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function sha256Hex(value: string): Promise<string> {
  return toHex(await crypto.subtle.digest("SHA-256", encoder.encode(value)));
}

async function hmac(key: BufferSource, data: string): Promise<ArrayBuffer> {
  const k = await crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return crypto.subtle.sign("HMAC", k, encoder.encode(data));
}

export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Secret Telegram sends in X-Telegram-Bot-Api-Secret-Token; derived from the token unless set explicitly. */
export async function webhookSecret(token = botToken()): Promise<string> {
  return Deno.env.get("TELEGRAM_WEBHOOK_SECRET") ?? (await sha256Hex(`scorify-webhook:${token}`)).slice(0, 48);
}

export function randomCode(bytes = 12): string {
  const raw = crypto.getRandomValues(new Uint8Array(bytes));
  return btoa(String.fromCharCode(...raw)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export interface WebAppInit {
  user: TelegramUser;
  authDate: number;
  startParam: string | null;
}

/**
 * Validates Telegram Mini App init data as described in
 * https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app
 */
export async function validateInitData(
  initData: string, token: string, maxAgeSeconds = 86_400, now = Date.now(),
): Promise<WebAppInit | null> {
  const params = new URLSearchParams(initData);
  const hash = params.get("hash");
  if (!hash || !/^[0-9a-f]{64}$/.test(hash)) return null;
  params.delete("hash");
  const checkString = [...params.entries()]
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    .map(([k, v]) => `${k}=${v}`).join("\n");
  const secret = await hmac(encoder.encode("WebAppData"), token);
  const expected = toHex(await hmac(secret, checkString));
  if (!safeEqual(expected, hash)) return null;

  const authDate = Number(params.get("auth_date"));
  if (!Number.isFinite(authDate) || authDate <= 0) return null;
  if (now / 1000 - authDate > maxAgeSeconds) return null;
  let user: TelegramUser;
  try {
    user = JSON.parse(params.get("user") ?? "null");
  } catch {
    return null;
  }
  if (!user || typeof user.id !== "number" || !Number.isSafeInteger(user.id)) return null;
  return { user, authDate, startParam: params.get("start_param") };
}

export function fullName(u: { first_name?: string | null; last_name?: string | null }): string {
  return [u.first_name, u.last_name].filter(Boolean).join(" ").trim();
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

import { supabase } from '@/integrations/supabase/client';
import { functionError } from '@/lib/function-errors';

/** Accounts created through Telegram get a placeholder address that should not be shown. */
export function displayEmail(email?: string | null): string | null {
  return email && !email.endsWith('@telegram.scorify.uz') ? email : null;
}

const UUID = '[0-9a-fA-F-]{36}';
const MINI_APP_PATHS = [
  /^\/(dashboard|writing|exam|speaking|essays|speaking-history|drafts|mock-test|grammar-test|leaderboard|referral|profile|admin|learn)$/,
  /^\/learn\/lesson\/u\d{1,2}-l\d{1,2}$/,
  /^\/learn\/test\/u\d{1,2}$/,
  /^\/learn\/placement$/,
  new RegExp(`^/(result|speaking-result)/${UUID}$`),
  new RegExp(`^/mock-test/(result|exam|thank-you)/${UUID}$`),
];

/** Page a bot button may open inside the Mini App; anything else falls back to the dashboard. */
export function miniAppPath(value: string | null | undefined): string {
  if (!value || !value.startsWith('/') || value.startsWith('//') || value.includes('\\')) return '/dashboard';
  try {
    const url = new URL(value, 'https://scorify.uz');
    if (url.origin !== 'https://scorify.uz') return '/dashboard';
    return MINI_APP_PATHS.some((re) => re.test(url.pathname)) ? url.pathname + url.search : '/dashboard';
  } catch {
    return '/dashboard';
  }
}

/** Session flag: the site is running inside the Telegram Mini App. */
const TG_FLAG = 'scorify:tg-webapp';

export interface TelegramWebApp {
  initData: string;
  initDataUnsafe?: { start_param?: string };
  ready(): void;
  expand(): void;
  colorScheme?: 'light' | 'dark';
}

declare global {
  interface Window { Telegram?: { WebApp?: TelegramWebApp } }
}

/** Telegram passes Mini App launch data in the URL hash (#tgWebAppData=…). */
export function launchedFromTelegram(hash = window.location.hash): boolean {
  return /tgWebAppData=/.test(hash);
}

export function markTelegramWebApp() {
  try { sessionStorage.setItem(TG_FLAG, '1'); } catch { /* storage unavailable */ }
}

export function isTelegramWebApp(): boolean {
  try { return sessionStorage.getItem(TG_FLAG) === '1' || launchedFromTelegram(); } catch { return launchedFromTelegram(); }
}

let loader: Promise<TelegramWebApp | null> | null = null;
/** Loads telegram-web-app.js on demand so normal visitors never download it. */
export function loadTelegramWebApp(): Promise<TelegramWebApp | null> {
  if (window.Telegram?.WebApp) return Promise.resolve(window.Telegram.WebApp);
  loader ??= new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-web-app.js?59';
    script.async = true;
    script.onload = () => resolve(window.Telegram?.WebApp ?? null);
    script.onerror = () => resolve(null);
    document.head.appendChild(script);
  });
  return loader;
}

export async function telegramAuth<T>(body: Record<string, unknown>): Promise<T> {
  const { data, error } = await supabase.functions.invoke('telegram-auth', { body });
  if (error) throw await functionError(error, 'Telegram service is unavailable. Please try again.');
  return data as T;
}

/** Exchanges the one-time token from telegram-auth for a Supabase session. */
export async function signInWithTokenHash(tokenHash: string) {
  const { error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type: 'magiclink' });
  if (error) throw error;
}

export interface TelegramStatus {
  linked: boolean;
  telegram_only: boolean;
  bot_url: string;
  account: null | {
    telegram_id: number; username: string | null; first_name: string | null;
    notify_results: boolean; notify_reminders: boolean; notify_news: boolean; linked_at: string | null;
  };
}

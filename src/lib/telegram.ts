import { supabase } from '@/integrations/supabase/client';
import { functionError } from '@/lib/function-errors';

/** Accounts created through Telegram get a placeholder address that should not be shown. */
export function displayEmail(email?: string | null): string | null {
  return email && !email.endsWith('@telegram.scorify.uz') ? email : null;
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

/**
 * Product analytics on top of the DataFast script that is already on every page (see index.html and api/_lib/shell.ts; it records
 * page views, referrers and countries by itself). This module adds the goals that show whether organic visits turn into learners:
 *
 *   cta_click                  a call to action on a landing/content page was used
 *   signup_complete            a new account finished signing in for the first time
 *   first_lesson_completed     the first General English lesson was finished
 *   first_ielts_practice       the first Writing/Speaking/Reading/Listening/mock attempt was finished
 *   plan_purchased             a payment was confirmed as paid
 *
 * Every goal carries only: lang (page language), audience (general_english | ielts_uz | ielts_en | other, from the first landing path),
 * entry (path the visit started on, no query string) and a few non-personal fields. Never pass emails, essays, answers or audio.
 * If the script is blocked or not loaded yet, calls are queued or silently skipped; nothing here can break a page.
 */

type DataFast = ((goal: string, meta?: Record<string, string | number | boolean>) => void) & { q?: unknown[] };
declare global { interface Window { datafast?: DataFast } }

const ENTRY_KEY = 'scorify:entry';
const DONE_PREFIX = 'scorify:an:';

export type Audience = 'general_english' | 'ielts_uz' | 'ielts_en' | 'other';

/** Which of the three audiences a landing path belongs to (the address decides, never the visitor's country). */
export function audienceOf(path: string, lang?: string): Audience {
  const p = path.split('?')[0].split('#')[0];
  if (p === '/uz' || p === '/uz/ielts' || p === '/uz/blog') return p === '/uz' ? 'general_english' : 'ielts_uz';
  if (p === '/' || p === '/ielts' || p === '/blog') return 'ielts_en';
  if (/^\/(ingliz-tili-darslari|ingliz-tili-qoidalari|inglizcha-sozlar|learn-english-from-uzbek|learn)(\/|$)/.test(p)) return 'general_english';
  if (/^\/(ielts|writing|speaking|reading|listening|mock-test|practice)/.test(p)) return lang === 'uz' ? 'ielts_uz' : 'ielts_en';
  if (/^\/blog\//.test(p)) return lang === 'uz' ? 'ielts_uz' : 'ielts_en';
  return 'other';
}

const safeGet = (store: Storage | undefined, key: string): string | null => { try { return store?.getItem(key) ?? null; } catch { return null; } };
const safeSet = (store: Storage | undefined, key: string, value: string) => { try { store?.setItem(key, value); } catch { /* storage unavailable */ } };

/** First page of the visit (kept for 30 minutes in sessionStorage, and the very first touch in localStorage for sign-up attribution). */
export function rememberEntry(path = typeof location !== 'undefined' ? location.pathname : '/') {
  if (typeof window === 'undefined') return;
  if (!safeGet(window.sessionStorage, ENTRY_KEY)) safeSet(window.sessionStorage, ENTRY_KEY, path);
  if (!safeGet(window.localStorage, ENTRY_KEY)) safeSet(window.localStorage, ENTRY_KEY, JSON.stringify({ path, at: Date.now() }));
}

function entry(): string {
  if (typeof window === 'undefined') return '/';
  const fromSession = safeGet(window.sessionStorage, ENTRY_KEY);
  if (fromSession) return fromSession;
  try { return (JSON.parse(safeGet(window.localStorage, ENTRY_KEY) ?? 'null') as { path?: string } | null)?.path ?? '/'; } catch { return '/'; }
}

export function track(goal: string, meta: Record<string, string | number | boolean> = {}) {
  if (typeof window === 'undefined') return;
  const lang = document.documentElement.lang === 'uz' ? 'uz' : 'en';
  const e = entry();
  const payload = { lang, entry: e, audience: audienceOf(e, lang), ...meta };
  try {
    if (typeof window.datafast !== 'function') {
      // Same queue the vendor snippet uses, so goals fired before the script loads are not lost.
      window.datafast = ((...args: unknown[]) => { (window.datafast!.q = window.datafast!.q || []).push(args); }) as DataFast;
    }
    window.datafast(goal, payload);
  } catch { /* analytics must never break the page */ }
}

/** Fires a goal once per browser (and per `key`, e.g. a user id or payment id). */
export function trackOnce(goal: string, key: string, meta: Record<string, string | number | boolean> = {}) {
  if (typeof window === 'undefined') return false;
  const id = `${DONE_PREFIX}${goal}:${key}`;
  if (safeGet(window.localStorage, id)) return false;
  safeSet(window.localStorage, id, '1');
  track(goal, meta);
  return true;
}

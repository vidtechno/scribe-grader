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
const AUD_KEY = 'scorify:entry-aud';
const DONE_PREFIX = 'scorify:an:';

export type Audience = 'general_english' | 'ielts_uz' | 'ielts_en' | 'other';

/**
 * Audience of the page a visit started on. Server-rendered pages (blog, lessons, grammar, IELTS) store their own audience next to the
 * entry path (api/_lib/audience.ts: the article's topic and language decide, not the country); only the two app-served landing pages
 * are classified here: `/` is the IELTS-first English page, `/uz` the General English page.
 */
export function audienceOf(path: string): Audience {
  const p = path.split('?')[0].split('#')[0];
  return p === '/uz' ? 'general_english' : p === '/' ? 'ielts_en' : 'other';
}

const safeGet = (store: Storage | undefined, key: string): string | null => { try { return store?.getItem(key) ?? null; } catch { return null; } };
const safeSet = (store: Storage | undefined, key: string, value: string) => { try { store?.setItem(key, value); } catch { /* storage unavailable */ } };

/** First page of the visit (kept for 30 minutes in sessionStorage, and the very first touch in localStorage for sign-up attribution). */
export function rememberEntry(path = typeof location !== 'undefined' ? location.pathname : '/') {
  if (typeof window === 'undefined') return;
  const audience = audienceOf(path);
  if (!safeGet(window.sessionStorage, ENTRY_KEY)) { safeSet(window.sessionStorage, ENTRY_KEY, path); safeSet(window.sessionStorage, AUD_KEY, audience); }
  if (!safeGet(window.localStorage, ENTRY_KEY)) safeSet(window.localStorage, ENTRY_KEY, JSON.stringify({ path, at: Date.now(), audience }));
}

function entry(): { path: string; audience: Audience } {
  if (typeof window === 'undefined') return { path: '/', audience: 'other' };
  const path = safeGet(window.sessionStorage, ENTRY_KEY);
  if (path) return { path, audience: (safeGet(window.sessionStorage, AUD_KEY) as Audience | null) ?? audienceOf(path) };
  try {
    const v = JSON.parse(safeGet(window.localStorage, ENTRY_KEY) ?? 'null') as { path?: string; audience?: Audience } | null;
    if (v?.path) return { path: v.path, audience: v.audience ?? audienceOf(v.path) };
  } catch { /* malformed */ }
  return { path: '/', audience: 'ielts_en' };
}

export function track(goal: string, meta: Record<string, string | number | boolean> = {}) {
  if (typeof window === 'undefined') return;
  const lang = document.documentElement.lang === 'uz' ? 'uz' : 'en';
  const e = entry();
  const payload = { lang, entry: e.path, audience: e.audience, ...meta };
  try {
    if (typeof window.datafast !== 'function') {
      // Same queue the vendor snippet uses, so goals fired before the script loads are not lost.
      window.datafast = ((...args: unknown[]) => { (window.datafast!.q = window.datafast!.q || []).push(args); }) as DataFast;
    }
    window.datafast(goal, payload);
  } catch { /* analytics must never break the page */ }
}

let currentUser: string | null = null;
/** The signed-in account, so "first …" goals are counted once per account and not once per shared browser. Kept in memory only. */
export function setAnalyticsUser(id: string | null | undefined) { currentUser = id ?? null; }

/** Key for goals that happen once per account. Without a signed-in user there is no safe key, so the goal is skipped. */
export const PER_USER = 'user';

/**
 * Fires a goal once per `key` in this browser. Use PER_USER for "first …" goals (one per account, so two people on one device
 * both count) and the confirmed payment id for purchases. The key stays in localStorage and is never sent to DataFast.
 */
export function trackOnce(goal: string, key: string, meta: Record<string, string | number | boolean> = {}) {
  if (typeof window === 'undefined') return false;
  if (key === PER_USER) { if (!currentUser) return false; key = `u:${currentUser}`; }
  const id = `${DONE_PREFIX}${goal}:${key}`;
  if (safeGet(window.localStorage, id)) return false;
  safeSet(window.localStorage, id, '1');
  track(goal, meta);
  return true;
}

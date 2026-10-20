/**
 * Post-sign-in destination (`/auth?next=/learn/lesson/u1-l1`). Only internal app pages are accepted; anything else
 * (another site, a script URL, a path that is not an app page, a sign-in page itself) falls back to the dashboard.
 */
export const DEFAULT_RETURN_TO = '/dashboard';

/**
 * First path segments of the routes in src/App.tsx that a signed-in user can be sent back to. Left out on purpose:
 * `/auth` and `/auth/callback` (would loop), `/tg` (Telegram entry point, has its own allow-list) and `/admin`
 * (staff pages are never a sign-up destination). Keep in sync with App.tsx (src/lib/returnTo.test.ts reads it).
 */
export const RETURN_TO_ROOTS = [
  'dashboard', 'learn', 'writing', 'speaking', 'speaking-result', 'speaking-history', 'reading', 'listening', 'mock-test',
  'practice', 'grammar-test', 'exam', 'result', 'leaderboard', 'profile', 'essays', 'drafts', 'support', 'referral', 'people', 'u',
] as const;

const ORIGIN = 'https://return-to.invalid';
const MAX_LENGTH = 512;

const CONTROL = new RegExp('[\\u0000-\\u001f\\u007f-\\u009f\\u2028\\u2029]');
const SAFE_SEARCH = /^\?[A-Za-z0-9\-._~%=&+,:@!*'()\/]*$/;
const SAFE_HASH = /^#[A-Za-z0-9\-_]*$/;

export function safeReturnTo(value: string | null | undefined): string {
  if (!value || value.length > MAX_LENGTH) return DEFAULT_RETURN_TO;
  if (!value.startsWith('/') || value.startsWith('//') || value.includes('\\') || CONTROL.test(value)) return DEFAULT_RETURN_TO;
  try {
    const url = new URL(value, ORIGIN);
    if (url.origin !== ORIGIN) return DEFAULT_RETURN_TO;
    // The browser decodes the path before routing: %2F%2F, %5C or an encoded control character must not slip through.
    let decoded: string;
    try { decoded = decodeURIComponent(url.pathname); } catch { return DEFAULT_RETURN_TO; }
    if (decoded.includes('\\') || decoded.includes('//') || CONTROL.test(decoded) || decoded.split('/').includes('..')) return DEFAULT_RETURN_TO;
    const root = url.pathname.split('/')[1];
    if (!(RETURN_TO_ROOTS as readonly string[]).includes(root)) return DEFAULT_RETURN_TO;
    return url.pathname + (SAFE_SEARCH.test(url.search) ? url.search : '') + (SAFE_HASH.test(url.hash) ? url.hash : '');
  } catch { return DEFAULT_RETURN_TO; }
}


/**
 * Where to go after sign-in is also kept in the browser, because the Google round trip comes back to a plain
 * /auth/callback URL (the redirect URL registered with the provider carries no query string).
 * sessionStorage is the main place; localStorage is a short-lived fallback for browsers that open the callback in a new tab.
 */
export const RETURN_TO_KEY = 'scorify:returnTo';
const RETURN_TO_TTL_MS = 30 * 60 * 1000;

export function rememberReturnTo(path: string): void {
  const next = safeReturnTo(path);
  try {
    if (next === DEFAULT_RETURN_TO) { clearStoredReturnTo(); return; }
    sessionStorage.setItem(RETURN_TO_KEY, next);
  } catch { /* storage unavailable */ }
  try { localStorage.setItem(RETURN_TO_KEY, JSON.stringify({ path: next, at: Date.now() })); } catch { /* storage unavailable */ }
}

/** The remembered destination, already validated; the dashboard when there is none. */
export function storedReturnTo(now = Date.now()): string {
  try {
    const s = sessionStorage.getItem(RETURN_TO_KEY);
    if (s) return safeReturnTo(s);
  } catch { /* storage unavailable */ }
  try {
    const raw = localStorage.getItem(RETURN_TO_KEY);
    if (raw) {
      const v = JSON.parse(raw) as { path?: unknown; at?: unknown };
      if (typeof v.path === 'string' && typeof v.at === 'number' && now - v.at >= 0 && now - v.at < RETURN_TO_TTL_MS) return safeReturnTo(v.path);
    }
  } catch { /* storage unavailable or malformed */ }
  return DEFAULT_RETURN_TO;
}

export function clearStoredReturnTo(): void {
  try { sessionStorage.removeItem(RETURN_TO_KEY); } catch { /* storage unavailable */ }
  try { localStorage.removeItem(RETURN_TO_KEY); } catch { /* storage unavailable */ }
}

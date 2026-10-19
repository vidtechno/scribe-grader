import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type Lang = 'en' | 'uz';
export const LANGS: Lang[] = ['en', 'uz'];
export const LANG_LABEL: Record<Lang, string> = { en: 'English', uz: "O'zbekcha" };

const STORE_KEY = 'scorify:lang';
const GEO_KEY = 'scorify:geo-lang';

type Dict = Record<string, string>;
type Bundle = { en: Dict; uz: Dict };

/** Every file in ./messages exports `default { en, uz }`: they are merged here, so a page's texts live next to nobody else's. */
const bundles = import.meta.glob<{ default: Bundle }>('./messages/*.ts', { eager: true });
export const MESSAGES: Bundle = { en: {}, uz: {} };
for (const mod of Object.values(bundles)) {
  Object.assign(MESSAGES.en, mod.default.en);
  Object.assign(MESSAGES.uz, mod.default.uz);
}

export function translate(lang: Lang, key: string, vars?: Record<string, string | number>): string {
  let text = MESSAGES[lang][key] ?? MESSAGES.en[key] ?? key;
  if (vars) for (const [k, v] of Object.entries(vars)) text = text.split(`{${k}}`).join(String(v));
  return text;
}

const isLang = (v: unknown): v is Lang => v === 'en' || v === 'uz';
function read(store: Storage | undefined, key: string): Lang | null {
  try {
    const v = store?.getItem(key);
    return isLang(v) ? v : null;
  } catch { return null; }
}

/** The person's own choice wins; then the /uz landing page; then the country (Uzbekistan → Uzbek); then the browser language. */
export function initialLang(pathname: string): Lang {
  if (typeof window === 'undefined') return 'en';
  const chosen = read(window.localStorage, STORE_KEY);
  if (chosen) return chosen;
  if (pathname === '/uz' || pathname.startsWith('/uz/')) return 'uz';
  const geo = read(window.sessionStorage, GEO_KEY);
  if (geo) return geo;
  return /^uz\b/i.test(navigator.language || '') ? 'uz' : 'en';
}

/** Current language outside React (error helpers, toasts): the saved choice, then the <html lang>, then English. */
export function currentLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const saved = read(window.localStorage, STORE_KEY);
  if (saved) return saved;
  return /^uz\b/i.test(document.documentElement.lang || '') ? 'uz' : 'en';
}

interface LanguageContextType { lang: Lang; setLang: (lang: Lang) => void }
// Without a provider (isolated component tests) everything renders in English.
const LanguageContext = createContext<LanguageContextType>({ lang: 'en', setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [lang, setLangState] = useState<Lang>(() => initialLang(pathname));

  // /uz is the Uzbek landing page: opening it (a search result, a shared link) switches the site to Uzbek.
  useEffect(() => {
    if (pathname === '/uz') setLangState('uz');
  }, [pathname]);

  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  // First visit without a saved choice: people in Uzbekistan get Uzbek, everyone else English. Crawlers (US) keep English.
  useEffect(() => {
    if (import.meta.env.MODE === 'test' || typeof window === 'undefined') return;
    if (read(window.localStorage, STORE_KEY) || read(window.sessionStorage, GEO_KEY) || pathname === '/uz') return;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2500);
    fetch('/api/geo', { cache: 'no-store', signal: controller.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { country?: string } | null) => {
        const guess: Lang = d?.country === 'UZ' ? 'uz' : 'en';
        try { window.sessionStorage.setItem(GEO_KEY, guess); } catch { /* storage unavailable */ }
        if (!read(window.localStorage, STORE_KEY)) setLangState(guess);
      })
      .catch(() => {})
      .finally(() => clearTimeout(timer));
    return () => { clearTimeout(timer); controller.abort(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLang = useCallback((next: Lang) => {
    try { window.localStorage.setItem(STORE_KEY, next); } catch { /* storage unavailable */ }
    setLangState(next);
    // The landing page has one address per language, so search engines and shared links stay correct.
    if (pathname === '/' && next === 'uz') navigate('/uz');
    else if (pathname === '/uz' && next === 'en') navigate('/');
  }, [pathname, navigate]);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageContextType {
  return useContext(LanguageContext);
}

/** `const { t } = useT(); t('nav.pricing')`, `t('hello', { name })` replaces {name}. Missing Uzbek text falls back to English. */
export function useT() {
  const { lang } = useLang();
  const t = useCallback((key: string, vars?: Record<string, string | number>) => translate(lang, key, vars), [lang]);
  return { t, lang };
}

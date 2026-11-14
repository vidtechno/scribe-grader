import { useEffect, useState } from 'react';

/** Adding the site to the phone's home screen. Only phones and tablets are offered it; computers never are. */
interface InstallEvent extends Event { prompt: () => Promise<void>; userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }> }

let deferred: InstallEvent | null = null;
const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());
const INSTALLED_KEY = 'scorify-installed';

/** Called once at start-up: keeps Chrome's install offer for later and registers the (cache-free) service worker. */
export function initPwa() {
  if (typeof window === 'undefined') return;
  window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); deferred = e as InstallEvent; notify(); });
  window.addEventListener('appinstalled', () => {
    deferred = null;
    try { localStorage.setItem(INSTALLED_KEY, '1'); } catch { /* ignore */ }
    notify();
  });
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', () => { void navigator.serviceWorker.register('/sw.js').catch(() => {}); });
  }
}

export type DeviceKind = 'ios' | 'android' | null;

/** `ios` / `android` for phones and tablets that can add the site to the home screen; null for computers and in-app browsers. */
export function deviceKind(ua = navigator.userAgent, platform = navigator.platform, touchPoints = navigator.maxTouchPoints): DeviceKind {
  const ios = /iPhone|iPad|iPod/.test(ua) || (platform === 'MacIntel' && touchPoints > 1);
  if (ios) return /Safari/.test(ua) && !/FBAN|FBAV|Instagram|Telegram|Line\//.test(ua) ? 'ios' : null;
  if (/Android/.test(ua)) return /; wv\)|Telegram|FBAN|FBAV|Instagram/.test(ua) ? null : 'android';
  return null;
}

export function isStandalone(): boolean {
  try {
    return window.matchMedia('(display-mode: standalone)').matches || (navigator as { standalone?: boolean }).standalone === true;
  } catch { return false; }
}

export const wasInstalled = () => { try { return localStorage.getItem(INSTALLED_KEY) === '1'; } catch { return false; } };

/** Shows Chrome's own "add to home screen" window. 'unavailable' when the browser has not offered it (then show the manual steps). */
export async function promptInstall(): Promise<'accepted' | 'dismissed' | 'unavailable'> {
  if (!deferred) return 'unavailable';
  const ev = deferred;
  deferred = null;
  notify();
  try {
    await ev.prompt();
    return (await ev.userChoice).outcome;
  } catch { return 'unavailable'; }
}

/** Whether the browser can add the site by itself with one tap (Chrome on Android). */
export function useCanPromptInstall(): boolean {
  const [can, setCan] = useState(!!deferred);
  useEffect(() => {
    const l = () => setCan(!!deferred);
    listeners.add(l); l();
    return () => { listeners.delete(l); };
  }, []);
  return can;
}

const key = (userId: string) => `scorify-install-offer:${userId}`;
interface Offer { until: number; count: number }
const readOffer = (userId: string): Offer | null => {
  try { const v = localStorage.getItem(key(userId)); return v ? JSON.parse(v) as Offer : null; } catch { return null; }
};
/** Asked again after 3 days; after the third "later" never again. */
export function snoozeInstallOffer(userId: string, forever = false) {
  const prev = readOffer(userId);
  const count = (prev?.count ?? 0) + 1;
  const until = forever || count >= 3 ? Number.MAX_SAFE_INTEGER : Date.now() + 3 * 86_400_000;
  try { localStorage.setItem(key(userId), JSON.stringify({ until, count })); } catch { /* ignore */ }
}
export function installOfferDue(userId: string): boolean {
  const o = readOffer(userId);
  return !o || o.until <= Date.now();
}

export const platformOf = (ua = navigator.userAgent, platform = navigator.platform, touchPoints = navigator.maxTouchPoints): 'android' | 'ios' | 'other' =>
  /iPhone|iPad|iPod/.test(ua) || (platform === 'MacIntel' && touchPoints > 1) ? 'ios' : /Android/.test(ua) ? 'android' : 'other';

const SEEN = (userId: string) => `scorify-install-seen:${userId}`;
/** Tells the server this person has the site on their home screen: when the browser reports the install and when the site is opened from the icon (at most every 12 hours). */
export async function reportInstall(userId: string, force = false): Promise<void> {
  try {
    const last = Number(localStorage.getItem(SEEN(userId)) ?? 0);
    if (!force && Date.now() - last < 12 * 3_600_000) return;
    localStorage.setItem(SEEN(userId), String(Date.now()));
  } catch { /* still report */ }
  const { supabase } = await import('@/integrations/supabase/client');
  await (supabase.rpc as unknown as (fn: string, args: Record<string, unknown>) => Promise<unknown>)('record_pwa_install', { _platform: platformOf() }).catch(() => {});
}

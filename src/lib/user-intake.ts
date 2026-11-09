export const AGE_RANGES = ['under16','16_18','19_24','25_34','35plus'] as const;
export const DISCOVERY_SOURCES = ['search','telegram','instagram','friend','other'] as const;
export type AgeRange = typeof AGE_RANGES[number];
export type DiscoverySource = typeof DISCOVERY_SOURCES[number];
export interface IntakeAnswers {
  phone: string; telegram: string; noUsername: boolean;
  age: AgeRange | ''; source: DiscoverySource | '';
}
export interface IntakeResponse {
  user_id: string; phone: string | null; telegram_username: string | null;
  no_telegram_username: boolean; age_range: AgeRange; discovery_source: DiscoverySource; completed_at: string;
}
export const INTAKE_SNOOZE_MS = 24 * 60 * 60 * 1000;
export const intakeKey = (id: string) => `scorify:intake:snooze:${id}`;
// Contact values never enter local storage or analytics. This key stores only a timestamp.
export function intakeSnoozed(id: string, storage: Storage = localStorage, now = Date.now()) {
  try { return Number(storage.getItem(intakeKey(id)) || 0) > now; } catch { return false; }
}
export function snoozeIntake(id: string, storage: Storage = localStorage) {
  try { storage.setItem(intakeKey(id), String(Date.now() + INTAKE_SNOOZE_MS)); } catch { /* session state still closes it */ }
}
export function normalizePhone(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return '';
  const digits = trimmed.replace(/\D/g, '');
  if (digits.length === 9 && !trimmed.startsWith('+')) return '+998' + digits;
  return '+' + digits;
}
export function normalizeTelegram(value: string) { return value.trim().replace(/^@/, ''); }
export function intakeError(step: number, a: IntakeAnswers): string | null {
  const phone = normalizePhone(a.phone);
  if (step === 0 && a.phone.trim() && (!/^\+[1-9]\d{7,14}$/.test(phone) || (phone.startsWith('+998') && !/^\+998\d{9}$/.test(phone)))) return 'intake.phoneError';
  if (step === 1 && !a.noUsername && a.telegram.trim() && !/^[A-Za-z0-9_]{5,32}$/.test(normalizeTelegram(a.telegram))) return 'intake.telegramError';
  if (step === 2 && !AGE_RANGES.includes(a.age as AgeRange)) return 'intake.ageError';
  if (step === 3 && !DISCOVERY_SOURCES.includes(a.source as DiscoverySource)) return 'intake.sourceError';
  return null;
}
/** Do not cover a recording, lesson, exam, login callback or a device-limit dialog. */
export function intakeSafeRoute(path: string) {
  return ['/dashboard','/learn','/profile','/practice','/writing','/essays','/drafts','/leaderboard','/admin'].includes(path);
}

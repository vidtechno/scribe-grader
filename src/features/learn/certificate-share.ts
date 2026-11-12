import type { Lang } from '@/i18n';

/** Public verification page of a certificate. */
export const CERT_BASE_URL = 'https://www.scorify.uz/certificate/';
export const shareUrl = (number: string) => `${CERT_BASE_URL}${encodeURIComponent(number.trim())}`;

interface TextInput { levelTitle: string; cefr: string; percent?: number | null; lang?: Lang }

/** "Upper-Intermediate (B2)"; the beginner level has no single CEFR letter to put in brackets besides "A0–A1". */
export const levelLabel = (levelTitle: string, cefr: string) => `${levelTitle} (${cefr})`;

/** One or two plain sentences for a post or a message. The link is added next to it, not inside. */
export function shareText({ levelTitle, cefr, percent, lang = 'uz' }: TextInput): string {
  const level = levelLabel(levelTitle, cefr);
  const p = typeof percent === 'number' ? Math.round(percent) : null;
  if (lang === 'en') {
    return `I finished the ${level} level on Scorify.uz${p !== null ? `, final test ${p}%` : ''}. You can check the certificate here:`;
  }
  return `Scorify.uz'da ${level} darajasini tugatdim${p !== null ? `, yakuniy test ${p}%` : ''}. Sertifikatni shu yerda tekshirish mumkin:`;
}

/** Headline printed above the certificate on the Instagram story image. */
export const storyHeadline = (levelTitle: string, cefr: string, lang: Lang = 'uz') =>
  lang === 'en' ? `I finished the ${levelLabel(levelTitle, cefr)} level!` : `Men ${levelLabel(levelTitle, cefr)} darajasini tugatdim!`;

export const telegramShareUrl = (url: string, text: string) =>
  `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;

export const linkedinShareUrl = (url: string) =>
  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

/** LinkedIn "add to profile" form: the certificate as a licence/certification entry. */
export function linkedinAddUrl({ levelTitle, cefr, number, date }: { levelTitle: string; cefr: string; number: string; date: Date }): string {
  const q = new URLSearchParams({
    startTask: 'CERTIFICATION_NAME',
    name: `Scorify.uz English ${levelLabel(levelTitle, cefr)}`,
    organizationName: 'Scorify.uz',
    issueYear: String(date.getFullYear()),
    issueMonth: String(date.getMonth() + 1),
    certUrl: shareUrl(number),
    certId: number,
  });
  return `https://www.linkedin.com/profile/add?${q.toString()}`;
}

/** A certificate issued in the last couple of minutes is "just earned" (the dialog then plays the celebration once). */
export const isFreshlyIssued = (issuedAt: string | Date, now = Date.now(), windowMs = 2 * 60_000) => {
  const t = new Date(issuedAt).getTime();
  return Number.isFinite(t) && now - t >= -windowMs && now - t <= windowMs;
};

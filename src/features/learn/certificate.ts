import { translate, type Lang } from '@/i18n';
import { LOGO_DATA_URI } from './certificate-logo';

export interface CertificateData {
  /** Full name as the learner wrote it. */
  name: string;
  /** "Beginner", "Elementary", … */
  levelTitle: string;
  /** "A1", … */
  cefr: string;
  /** Result of the level test in percent. */
  percent?: number | null;
  /** When the level test was passed. */
  date: Date;
  /** Number issued by the server (learning_issue_certificate), e.g. "SC-BEG-K7M2Q9XA". */
  number: string;
  /** Language of the printed text (the interface language); English when omitted. */
  lang?: Lang;
}

/** CEFR label printed on the certificate (the course UI says "Noldan" for Beginner). */
export const CERT_CEFR: Record<string, string> = { beginner: 'A0–A1', a1: 'A1', a2: 'A2', b1: 'B1', b2: 'B2', c1: 'C1' };
export const CERT_W = 1400;
export const CERT_H = 990;
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Widest text block (px) the name and the level line may occupy; the inner frame is CERT_W - 124 = 1276 wide. */
const MAX_TEXT_W = 1000;
/** Font size that keeps `chars` characters inside MAX_TEXT_W, given an average glyph width of `em` * fontSize. */
export const fitFontSize = (chars: number, em: number, max: number, min: number) =>
  Math.max(min, Math.min(max, Math.floor(MAX_TEXT_W / (Math.max(chars, 1) * em))));
export const formatCertDate = (d: Date) => `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`;

/** The certificate as a self-contained SVG (no external fonts or images, so it also renders as an <img>). */
export function certificateSvg(c: CertificateData): string {
  const name = esc(c.name.trim().slice(0, 48));
  // Italic serif averages about 0.5em per character; escaped entities count as one glyph.
  const nameSize = fitFontSize(c.name.trim().slice(0, 48).length, 0.5, 74, 38);
  // Bold sans averages about 0.58em per character ("Title · CEFR").
  const levelSize = fitFontSize(`${c.levelTitle} · ${c.cefr}`.length, 0.58, 72, 44);
  const lang = c.lang ?? 'en';
  const tr = (key: string) => translate(lang, key);
  const result = typeof c.percent === 'number' ? `${tr('learn.cert.result')} ${Math.round(c.percent)}%` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${CERT_W}" height="${CERT_H}" viewBox="0 0 ${CERT_W} ${CERT_H}">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fffaf5"/><stop offset="1" stop-color="#fff1f2"/></linearGradient>
  <linearGradient id="red" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#be123c"/><stop offset="1" stop-color="#f43f5e"/></linearGradient>
</defs>
<rect width="${CERT_W}" height="${CERT_H}" fill="url(#bg)"/>
<rect x="34" y="34" width="${CERT_W - 68}" height="${CERT_H - 68}" rx="26" fill="none" stroke="url(#red)" stroke-width="10"/>
<rect x="62" y="62" width="${CERT_W - 124}" height="${CERT_H - 124}" rx="16" fill="none" stroke="#e11d48" stroke-opacity=".28" stroke-width="2"/>
<circle cx="${CERT_W - 150}" cy="150" r="170" fill="#e11d48" fill-opacity=".05"/>
<circle cx="150" cy="${CERT_H - 150}" r="150" fill="#e11d48" fill-opacity=".05"/>
<image href="${LOGO_DATA_URI}" x="${CERT_W / 2 - 46}" y="96" width="92" height="92"/>
<text x="${CERT_W / 2}" y="232" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="700" letter-spacing="6" fill="#be123c">SCORIFY.UZ</text>
<text x="${CERT_W / 2}" y="330" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="82" font-weight="700" letter-spacing="10" fill="#1f2937">${esc(tr('learn.cert.title'))}</text>
<text x="${CERT_W / 2}" y="394" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#6b7280">${esc(tr('learn.cert.owner'))}</text>
<text x="${CERT_W / 2}" y="${490}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="${nameSize}" font-style="italic" font-weight="700" fill="#be123c">${name}</text>
<line x1="${CERT_W / 2 - 330}" y1="516" x2="${CERT_W / 2 + 330}" y2="516" stroke="#e11d48" stroke-opacity=".45" stroke-width="2"/>
<text x="${CERT_W / 2}" y="578" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="27" fill="#4b5563">${esc(tr('learn.cert.courseTop'))}</text>
<text x="${CERT_W / 2}" y="668" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="${levelSize}" font-weight="800" fill="#1f2937">${esc(c.levelTitle)} <tspan fill="#e11d48">· ${esc(c.cefr)}</tspan></text>
<text x="${CERT_W / 2}" y="722" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="27" fill="#4b5563">${esc(tr('learn.cert.courseBottom'))}</text>
${result ? `<text x="${CERT_W / 2}" y="764" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="700" fill="#059669">${result}</text>` : ''}
<g font-family="Helvetica, Arial, sans-serif" font-size="22" fill="#6b7280">
  <text x="130" y="${CERT_H - 118}">${esc(tr('learn.cert.date'))}</text>
  <text x="130" y="${CERT_H - 84}" font-size="30" font-weight="700" fill="#1f2937">${formatCertDate(c.date)}</text>
  <text x="${CERT_W - 130}" y="${CERT_H - 118}" text-anchor="end">${esc(tr('learn.cert.number'))}</text>
  <text x="${CERT_W - 130}" y="${CERT_H - 84}" text-anchor="end" font-size="30" font-weight="700" fill="#1f2937">${esc(c.number)}</text>
</g>
<g transform="translate(${CERT_W / 2}, ${CERT_H - 132})">
  <circle r="54" fill="url(#red)"/><circle r="46" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="2"/>
  <path d="M-20 2 l15 16 l28 -32" fill="none" stroke="#fff" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>`;
}

/** Renders the SVG to a compact JPEG (about 100 KB) for download or sharing. */
export async function certificateImage(c: CertificateData, type: 'image/jpeg' | 'image/png' = 'image/jpeg'): Promise<Blob> {
  const url = URL.createObjectURL(new Blob([certificateSvg(c)], { type: 'image/svg+xml;charset=utf-8' }));
  try {
    const img = new Image();
    img.decoding = 'async';
    await new Promise<void>((resolve, reject) => { img.onload = () => resolve(); img.onerror = () => reject(new Error('certificate_render')); img.src = url; });
    const canvas = document.createElement('canvas');
    canvas.width = CERT_W; canvas.height = CERT_H;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('certificate_canvas');
    ctx.fillStyle = '#fffaf5';
    ctx.fillRect(0, 0, CERT_W, CERT_H);
    ctx.drawImage(img, 0, 0, CERT_W, CERT_H);
    return await new Promise<Blob>((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('certificate_blob'))), type, 0.88));
  } finally { URL.revokeObjectURL(url); }
}

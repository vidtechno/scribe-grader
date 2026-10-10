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
  /** Short certificate number, e.g. "SC-BEG-7F3A". */
  number: string;
}

/** CEFR label printed on the certificate (the course UI says "Noldan" for Beginner). */
export const CERT_CEFR: Record<string, string> = { beginner: 'A0–A1', a1: 'A1', a2: 'A2', b1: 'B1', b2: 'B2', c1: 'C1' };
export const CERT_W = 1400;
export const CERT_H = 990;
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const certificateNumber = (levelId: string, userId: string, date: Date) =>
  `SC-${levelId.toUpperCase().slice(0, 3)}-${date.toISOString().slice(2, 10).replace(/-/g, '')}-${userId.replace(/-/g, '').slice(0, 4).toUpperCase()}`;

export const formatCertDate = (d: Date) => `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}.${d.getFullYear()}`;

/** The certificate as a self-contained SVG (no external fonts or images, so it also renders as an <img>). */
export function certificateSvg(c: CertificateData): string {
  const name = esc(c.name.trim().slice(0, 48));
  const nameSize = name.length > 30 ? 52 : name.length > 22 ? 62 : 74;
  const result = typeof c.percent === 'number' ? `Yakuniy test natijasi: ${Math.round(c.percent)}%` : '';
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
<text x="${CERT_W / 2}" y="330" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="82" font-weight="700" letter-spacing="10" fill="#1f2937">SERTIFIKAT</text>
<text x="${CERT_W / 2}" y="394" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#6b7280">Ushbu sertifikat egasi</text>
<text x="${CERT_W / 2}" y="${490}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="${nameSize}" font-style="italic" font-weight="700" fill="#be123c">${name}</text>
<line x1="${CERT_W / 2 - 330}" y1="516" x2="${CERT_W / 2 + 330}" y2="516" stroke="#e11d48" stroke-opacity=".45" stroke-width="2"/>
<text x="${CERT_W / 2}" y="578" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="27" fill="#4b5563">Scorify.uz ingliz tili kursining</text>
<text x="${CERT_W / 2}" y="668" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="72" font-weight="800" fill="#1f2937">${esc(c.levelTitle)} <tspan fill="#e11d48">· ${esc(c.cefr)}</tspan></text>
<text x="${CERT_W / 2}" y="722" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="27" fill="#4b5563">darajasini muvaffaqiyatli tugatganini tasdiqlaydi</text>
${result ? `<text x="${CERT_W / 2}" y="776" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="700" fill="#059669">${result}</text>` : ''}
<g font-family="Helvetica, Arial, sans-serif" font-size="22" fill="#6b7280">
  <text x="130" y="${CERT_H - 118}">Sana</text>
  <text x="130" y="${CERT_H - 84}" font-size="30" font-weight="700" fill="#1f2937">${formatCertDate(c.date)}</text>
  <text x="${CERT_W - 130}" y="${CERT_H - 118}" text-anchor="end">Sertifikat raqami</text>
  <text x="${CERT_W - 130}" y="${CERT_H - 84}" text-anchor="end" font-size="30" font-weight="700" fill="#1f2937">${esc(c.number)}</text>
</g>
<g transform="translate(${CERT_W / 2}, ${CERT_H - 148})">
  <circle r="58" fill="url(#red)"/><circle r="49" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="2"/>
  <path d="M-22 2 l16 17 l30 -34" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
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

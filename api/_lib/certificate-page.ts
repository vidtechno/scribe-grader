import { SITE, SUPABASE_KEY, SUPABASE_URL, esc, page } from './shell.js';

/** Public check of a certificate number: https://www.scorify.uz/certificate/SC-B2-K7M2Q9XA */
export interface CertificateRow {
  number: string; level_id: string; full_name: string; percent: number | null; passed_at: string | null; issued_at: string;
}

const LEVEL: Record<string, { title: string; cefr: string }> = {
  beginner: { title: 'Beginner', cefr: 'A0–A1' },
  a1: { title: 'Elementary', cefr: 'A1' },
  a2: { title: 'Pre-Intermediate', cefr: 'A2' },
  b1: { title: 'Intermediate', cefr: 'B1' },
  b2: { title: 'Upper-Intermediate', cefr: 'B2' },
};
export const NUMBER_PATTERN = /^SC-[A-Z0-9]{2,3}-[A-HJ-NP-Z2-9]{8}$/;

const dateUz = (iso: string) => {
  const d = new Date(iso);
  return `${String(d.getUTCDate()).padStart(2, '0')}.${String(d.getUTCMonth() + 1).padStart(2, '0')}.${d.getUTCFullYear()}`;
};

/** Asks the database; null when the number is not a real certificate (or the database cannot be reached). */
export async function fetchCertificate(number: string, fetcher: typeof fetch = fetch): Promise<CertificateRow | null> {
  const n = number.trim().toUpperCase();
  if (!NUMBER_PATTERN.test(n) || !SUPABASE_KEY) return null;
  const r = await fetcher(`${SUPABASE_URL}/rest/v1/rpc/certificate_verify`, {
    method: 'POST', headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ _number: n }),
  });
  if (!r.ok) throw new Error(`Supabase ${r.status}`);
  const data = (await r.json()) as { valid?: boolean } & Partial<CertificateRow>;
  return data.valid && data.number && data.full_name && data.level_id ? (data as CertificateRow) : null;
}

const STYLE = `<style>
.cert-wrap{max-width:760px;margin:0 auto;padding:36px 16px 56px}
.cert-status{display:flex;align-items:center;gap:10px;margin:0 0 18px;font-weight:700;color:#047857}
.cert-status.bad{color:#b91c1c}
.cert-status i{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:#10b981;color:#fff;font-style:normal;font-size:16px}
.cert-status.bad i{background:#ef4444}
.cert-card{position:relative;border-radius:22px;padding:6px;background:linear-gradient(135deg,#be123c,#f43f5e);box-shadow:0 20px 50px -20px rgba(190,18,60,.45)}
.cert-in{border-radius:17px;background:linear-gradient(135deg,#fffaf5,#fff1f2);padding:34px 22px 28px;text-align:center}
.cert-in img{width:56px;height:56px}
.cert-brand{margin:6px 0 0;font-size:13px;font-weight:700;letter-spacing:.3em;color:#be123c}
.cert-title{margin:14px 0 2px;font:700 clamp(28px,6vw,44px)/1.1 Georgia,'Times New Roman',serif;letter-spacing:.14em;color:#1f2937}
.cert-sub{margin:0;color:#6b7280;font-size:14px}
.cert-name{margin:18px 0 6px;font:italic 700 clamp(26px,6vw,40px)/1.15 Georgia,'Times New Roman',serif;color:#be123c;overflow-wrap:anywhere}
.cert-line{height:2px;width:min(360px,70%);margin:0 auto 16px;background:rgba(225,29,72,.4)}
.cert-level{margin:6px 0 2px;font-size:clamp(24px,5vw,36px);font-weight:800;color:#1f2937}
.cert-level span{color:#e11d48}
.cert-result{margin:10px 0 0;font-weight:700;color:#059669}
.cert-meta{display:flex;justify-content:space-between;gap:12px;margin-top:26px;text-align:left;font-size:13px;color:#6b7280}
.cert-meta b{display:block;margin-top:2px;font-size:17px;color:#1f2937}
.cert-meta div:last-child{text-align:right}
.cert-cta{margin-top:26px;padding:20px;border-radius:16px;background:#fff7ed;border:1px solid #fed7aa}
.cert-cta h2{margin:0 0 6px;font-size:20px}
.cert-cta p{margin:0 0 14px;color:#4b5563}
</style>`;

export function certificatePage(cert: CertificateRow | null, number: string): string {
  const path = `/certificate/${encodeURIComponent(number.trim().toUpperCase())}`;
  if (!cert) {
    return page({
      title: 'Sertifikat topilmadi | Scorify.uz', description: 'Bu raqam bilan Scorify.uz sertifikati topilmadi.', path, lang: 'uz', robots: 'noindex, nofollow', head: STYLE,
      body: `<main class="page"><div class="cert-wrap"><p class="cert-status bad"><i>!</i>Sertifikat topilmadi</p>
<h1 style="margin:0 0 10px">Bu raqam bo‘yicha sertifikat yo‘q</h1>
<p>Raqamni qayta tekshirib ko‘ring. U <b>SC-B2-K7M2Q9XA</b> ko‘rinishida bo‘ladi, sertifikatning pastki o‘ng burchagida yoziladi.</p>
<p><a class="btn" href="/ingliz-tili-darslari">Scorify darslari</a></p></div></main>`,
    });
  }
  const lv = LEVEL[cert.level_id] ?? { title: cert.level_id.toUpperCase(), cefr: '' };
  const levelText = lv.cefr ? `${lv.title} · ${lv.cefr}` : lv.title;
  const date = dateUz(cert.passed_at ?? cert.issued_at);
  const percent = typeof cert.percent === 'number' ? Math.round(cert.percent) : null;
  const title = `${cert.full_name}: ${lv.title}${lv.cefr ? ` (${lv.cefr})` : ''} sertifikati | Scorify.uz`;
  const description = `${cert.full_name} Scorify.uz ingliz tili kursining ${levelText} darajasini tugatdi${percent !== null ? `, yakuniy test natijasi ${percent}%` : ''}. Sertifikat raqami ${cert.number}.`;
  return page({
    title, description, path, lang: 'uz', robots: 'noindex, nofollow', head: STYLE,
    body: `<main class="page"><div class="cert-wrap">
<p class="cert-status"><i>✓</i>Sertifikat haqiqiy</p>
<div class="cert-card"><div class="cert-in">
<img src="/logo-128.webp" alt="" width="56" height="56">
<p class="cert-brand">SCORIFY.UZ</p>
<h1 class="cert-title">SERTIFIKAT</h1>
<p class="cert-sub">Ushbu sertifikat egasi</p>
<p class="cert-name">${esc(cert.full_name)}</p><div class="cert-line"></div>
<p class="cert-sub">Scorify.uz ingliz tili kursining</p>
<p class="cert-level">${esc(lv.title)}${lv.cefr ? ` <span>· ${esc(lv.cefr)}</span>` : ''}</p>
<p class="cert-sub">darajasini muvaffaqiyatli tugatganini tasdiqlaydi</p>
${percent !== null ? `<p class="cert-result">Yakuniy test natijasi: ${percent}%</p>` : ''}
<div class="cert-meta"><div>Sana<b>${esc(date)}</b></div><div>Sertifikat raqami<b>${esc(cert.number)}</b></div></div>
</div></div>
<aside class="cert-cta"><h2>Siz ham ingliz tilini noldan o‘rganing</h2><p>Scorify.uz darslari o‘zbek tilida tushuntiriladi. Birinchi hafta bepul, karta shart emas.</p><a class="btn" href="/auth?next=%2Flearn">7 kun bepul boshlash →</a></aside>
<p style="margin-top:18px;color:#6b7280;font-size:13px">Bu sahifa sertifikat Scorify.uz tomonidan berilganini tasdiqlaydi. Manzil: ${esc(`${SITE}${path}`)}</p>
</div></main>`,
  });
}

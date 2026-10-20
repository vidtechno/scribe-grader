// Head and no-JavaScript content of the landing page in both languages.
// index.html carries the English version; the build derives dist/uz/index.html (the Uzbek landing page, /uz) from it.
export const BASE = 'https://www.scorify.uz';

export const EN = {
  title: 'Scorify: Learn English Online & Prepare for IELTS — 7 Days Free',
  description: 'From first words to IELTS: 10-minute lessons with audio, AI scoring for Writing and Speaking, mock tests. Uzbek explanations. 7 days free, no card.',
  siteDescription: 'English learning platform: lessons, pronunciation, vocabulary and tests, plus IELTS Writing, Speaking, Reading and Listening practice.',
  shell: `<main class="seo-shell"><h1>From your first English word to IELTS — 10 minutes a day</h1><p>Scorify: General English from zero (Beginner, Elementary A1, Pre-Intermediate A2, Intermediate B1) with audio for every word and smart review, plus IELTS Writing, Speaking, Reading and Listening practice with AI feedback and mock tests. Uzbek explanations. 7 days free, no card.</p><nav aria-label="Useful links"><a href="/auth">Get started</a> · <a href="/uz">Uzbek version (O'zbekcha)</a> · <a href="/blog">Blog</a> · <a href="/ielts-writing-task-2">IELTS Writing Task 2</a> · <a href="/ielts-speaking-practice">IELTS Speaking practice</a> · <a href="/ielts-reading-practice">IELTS Reading</a> · <a href="/ielts-listening-practice">IELTS Listening</a> · <a href="/ielts-band-score-calculator">IELTS band score calculator</a> · <a href="/sitemap">Site map</a></nav></main>`,
};

export const UZ = {
  title: "Scorify.uz — Ingliz tili va IELTS: noldan o'rganing, 7 kun bepul",
  description: "Birinchi so'zdan IELTS gacha: 10 daqiqalik darslar, talaffuz audiosi, Writing va Speaking uchun AI baho, mock testlar. O'zbekcha tushuntirish. 7 kun bepul, karta kerak emas.",
  siteDescription: "Ingliz tilini noldan o'rganish platformasi: darslar, talaffuz, lug'at va testlar. IELTS Writing, Speaking, Reading va Listening ham bor.",
  shell: `<main class="seo-shell"><h1>Birinchi inglizcha so'zdan IELTS gacha — kuniga 10 daqiqa</h1><p>Scorify.uz: noldan umumiy ingliz tili (Beginner, Elementary A1, Pre-Intermediate A2, Intermediate B1) — har bir so'z audio bilan, aqlli takrorlash — hamda IELTS Writing, Speaking, Reading va Listening mashqlari, AI baho va mock testlar. O'zbekcha tushuntirish. 7 kun bepul, karta kerak emas.</p><nav aria-label="Foydali havolalar"><a href="/auth">Boshlash</a> · <a href="/">English version</a> · <a href="/ingliz-tili-darslari">Ingliz tili darslari</a> · <a href="/ingliz-tili-darslari/beginner">Beginner kursi</a> · <a href="/ingliz-tili-darslari/elementary">Elementary (A1)</a> · <a href="/ingliz-tili-darslari/pre-intermediate">Pre-Intermediate (A2)</a> · <a href="/ingliz-tili-darslari/intermediate">Intermediate (B1)</a> · <a href="/ingliz-tili-qoidalari">Ingliz tili qoidalari</a> · <a href="/inglizcha-sozlar">Inglizcha so'zlar</a> · <a href="/blog">Blog</a> · <a href="/ielts-writing-task-2">IELTS Writing Task 2</a> · <a href="/ielts-speaking-practice">IELTS Speaking mashqi</a> · <a href="/ielts-reading-practice">IELTS Reading</a> · <a href="/ielts-listening-practice">IELTS Listening</a> · <a href="/ielts-band-score-calculator">IELTS band kalkulyatori</a> · <a href="/sitemap">Sayt xaritasi</a></nav></main>`,
};

const q = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const re = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Turns the English index.html into the Uzbek landing page. */
export function toUzbek(html) {
  let out = html.replace('<html lang="en">', '<html lang="uz">');
  out = out.split(q(EN.title)).join(q(UZ.title)).split(EN.title).join(UZ.title);
  out = out.split(q(EN.description)).join(q(UZ.description));
  out = out.split(EN.siteDescription).join(UZ.siteDescription);
  out = out.replace('content="en_US"', 'content="uz_UZ"');
  out = out.replace(`<link rel="canonical" href="${BASE}/" />`, `<link rel="canonical" href="${BASE}/uz" />`);
  out = out.replace(`<meta property="og:url" content="${BASE}/" />`, `<meta property="og:url" content="${BASE}/uz" />`);
  out = out.replace(new RegExp(`<main class="seo-shell">[\\s\\S]*?</main>`), () => UZ.shell);
  return out;
}

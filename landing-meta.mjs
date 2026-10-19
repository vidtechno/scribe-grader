// Head and no-JavaScript content of the landing page in both languages.
// index.html carries the English version; the build derives dist/uz/index.html (the Uzbek landing page, /uz) from it.
export const BASE = 'https://www.scorify.uz';

export const EN = {
  title: 'Scorify: Learn English Online — Free Lessons & IELTS Practice',
  description: 'Learn English from zero with short daily lessons, audio pronunciation, vocabulary and tests. 7 days free. IELTS Writing, Speaking, Reading and Listening practice with AI feedback.',
  siteDescription: 'English learning platform: lessons, pronunciation, vocabulary and tests, plus IELTS Writing, Speaking, Reading and Listening practice.',
  shell: `<main class="seo-shell"><h1>Learn English from zero — 10 minutes a day</h1><p>Scorify: short lessons, audio pronunciation for every word, smart spaced repetition and tests. Beginner, Elementary (A1), Pre-Intermediate (A2) and Intermediate (B1) levels, 7 days free. IELTS Writing, Speaking, Reading and Listening practice with AI feedback.</p><nav aria-label="Useful links"><a href="/auth">Get started</a> · <a href="/uz">Uzbek version (O'zbekcha)</a> · <a href="/blog">Blog</a> · <a href="/ielts-writing-task-2">IELTS Writing Task 2</a> · <a href="/ielts-speaking-practice">IELTS Speaking practice</a> · <a href="/ielts-reading-practice">IELTS Reading</a> · <a href="/ielts-listening-practice">IELTS Listening</a> · <a href="/ielts-band-score-calculator">IELTS band score calculator</a> · <a href="/sitemap">Site map</a></nav></main>`,
};

export const UZ = {
  title: "Scorify.uz — Ingliz tili darslari: noldan o'rganing, 7 kun bepul",
  description: "Scorify.uz: ingliz tilini noldan o'rganing. Bepul ingliz tili darslari: o'zbekcha tushuntirish, talaffuz audiosi, lug'at, mashqlar va testlar. 7 kun bepul. IELTS Writing, Speaking, Reading va Listening ham bor.",
  siteDescription: "Ingliz tilini noldan o'rganish platformasi: darslar, talaffuz, lug'at va testlar. IELTS Writing, Speaking, Reading va Listening ham bor.",
  shell: `<main class="seo-shell"><h1>Ingliz tili darslari: noldan o'rganing — har kuni 10 daqiqada</h1><p>Scorify.uz: qisqa darslar, har bir so'zning talaffuzi, aqlli takrorlash va testlar. Beginner, Elementary (A1), Pre-Intermediate (A2) va Intermediate (B1) darajalari, 7 kun bepul. IELTS Writing, Speaking, Reading va Listening ham bor.</p><nav aria-label="Foydali havolalar"><a href="/auth">Boshlash</a> · <a href="/">English version</a> · <a href="/ingliz-tili-darslari">Ingliz tili darslari</a> · <a href="/ingliz-tili-darslari/beginner">Beginner kursi</a> · <a href="/ingliz-tili-darslari/elementary">Elementary (A1)</a> · <a href="/ingliz-tili-darslari/pre-intermediate">Pre-Intermediate (A2)</a> · <a href="/ingliz-tili-darslari/intermediate">Intermediate (B1)</a> · <a href="/ingliz-tili-qoidalari">Ingliz tili qoidalari</a> · <a href="/inglizcha-sozlar">Inglizcha so'zlar</a> · <a href="/blog">Blog</a> · <a href="/ielts-writing-task-2">IELTS Writing Task 2</a> · <a href="/ielts-speaking-practice">IELTS Speaking mashqi</a> · <a href="/ielts-reading-practice">IELTS Reading</a> · <a href="/ielts-listening-practice">IELTS Listening</a> · <a href="/ielts-band-score-calculator">IELTS band kalkulyatori</a> · <a href="/sitemap">Sayt xaritasi</a></nav></main>`,
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

import { SITE, breadcrumbLd, ctaBox, esc, page } from './shell.js';
import { COURSE } from './data-course.js';
import { COURSE_BASE } from './course-pages.js';
import { GUIDES, type Guide, type GuideSection } from './data-learn-guides.js';
import { WORD_TOPICS, type WordTopic } from './data-learn-words.js';

// Public SEO sections that feed the English course: Uzbek grammar guides (/ingliz-tili-qoidalari), Uzbek topic word
// lists (/inglizcha-sozlar) and an English-language landing page for people who search in English.

export const GUIDE_BASE = '/ingliz-tili-qoidalari';
export const WORDS_BASE = '/inglizcha-sozlar';
export const EN_LANDING = '/learn-english-from-uzbek';

const LEVEL_TITLE: Record<string, string> = { beginner: 'Beginner', elementary: 'Elementary (A1)', 'pre-intermediate': 'Pre-Intermediate (A2)' };
const lessonHref = (l: [string, string]) => `${COURSE_BASE}/${l[0]}/${l[1]}`;
const lessonTitle = (l: [string, string]) => COURSE.find(x => x.slug === l[0])?.units.flatMap(u => u.lessons).find(x => x.slug === l[1])?.titleUz ?? '';
const crumbs = (...items: [string, string?][]) => ['<a href="/">Bosh sahifa</a>', ...items.map(([t, h]) => (h ? `<a href="${h}">${esc(t)}</a>` : esc(t)))].join(' / ');
const hero = (eyebrow: string, h1: string, lead: string, trail: string) =>
  `<section class="hero"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb">${trail}</nav><span class="eyebrow">${esc(eyebrow)}</span><h1>${esc(h1)}</h1><p class="lead">${esc(lead)}</p></div></section>`;
const faqHtml = (faq: { q: string; a: string }[]) => faq.map(f => `<details class="faq"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('');
const faqLd = (faq: { q: string; a: string }[], lang = 'uz') => ({ '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: lang, mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) });
const article = (path: string, title: string, desc: string) => ({
  '@context': 'https://schema.org', '@type': 'Article', headline: title, description: desc, inLanguage: 'uz', mainEntityOfPage: SITE + path,
  author: { '@type': 'Organization', name: 'Scorify.uz' }, publisher: { '@type': 'Organization', name: 'Scorify.uz', logo: { '@type': 'ImageObject', url: `${SITE}/logo-180.png` } }, dateModified: '2026-10-11',
});
const table = (t: NonNullable<GuideSection['table']>) =>
  `<div class="table-scroll"><table class="data"><thead><tr>${t.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${t.rows.map(r => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`)).join('')}</tr>`).join('')}</tbody></table></div>`;
const examples = (ex: [string, string][]) => `<ul class="vocab">${ex.map(([en, uz]) => `<li><b>${esc(en)}</b> — ${esc(uz)}</li>`).join('')}</ul>`;
const lessonCta = (l: [string, string], what: string) =>
  ctaBox(`${what} darsda mashqlar va audio bilan o'tang`, `«${lessonTitle(l)}» darsi: qisqa tushuntirish, talaffuz audiosi, mashqlar va yakuniy savollar. Ro'yxatdan o'ting va hoziroq boshlang.`, '/auth', 'Darsni boshlash');

/* ---------- grammar guides ---------- */
export const guideBySlug = (slug: string | null) => GUIDES.find(g => g.slug === slug);

export function guideHub(): string {
  const body = `${hero('Ingliz tili qoidalari', `Ingliz tili grammatikasi: qoidalar o'zbek tilida`, `${GUIDES.length} ta mavzu: zamonlar, artikllar, modal fe'llar, predloglar va boshqalar. Har bir qoida misollar va o'zbek tilidagi tipik xatolar bilan.`, crumbs(['Ingliz tili qoidalari']))}
<main class="page"><div class="wrap">
<div class="grid">${GUIDES.map(g => `<a class="card" href="${GUIDE_BASE}/${g.slug}"><div class="body"><span class="meta">${esc(LEVEL_TITLE[g.level])}</span><h3>${esc(g.h1)}</h3><p>${esc(g.intro.slice(0, 140))}…</p></div></a>`).join('')}</div>
<section class="section"><h2>Qoidalarni mashq bilan mustahkamlang</h2><p>Qoidani o'qish yetarli emas: uni mashq qilish, so'zlarni audio bilan eshitish va xatolarni tuzatish kerak. Scorify kursida har bir qoida alohida dars, mashqlar va testlar bilan o'tiladi. <a href="${COURSE_BASE}">Barcha ingliz tili darslari</a>.</p></section>
${ctaBox("Ingliz tilini noldan boshlang", "Beginner kursining birinchi darsi: alifbo, tovushlar va birinchi gaplar. Ro'yxatdan o'tish bir tegishda.", '/auth', 'Boshlash')}
</div></main>`;
  return page({
    title: `Ingliz tili qoidalari o'zbek tilida: grammatika, zamonlar, misollar | Scorify.uz`,
    description: `Ingliz tili grammatikasi o'zbek tilida: to be, Present Simple, Past Simple, artikllar, predloglar, modal fe'llar va boshqa ${GUIDES.length} ta qoida. Misollar va o'zbek tilidagi tipik xatolar.`,
    path: GUIDE_BASE, lang: 'uz', body,
    jsonLd: [breadcrumbLd([{ name: 'Bosh sahifa', path: '/' }, { name: 'Ingliz tili qoidalari', path: GUIDE_BASE }]),
      { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Ingliz tili qoidalari', itemListElement: GUIDES.map((g, i) => ({ '@type': 'ListItem', position: i + 1, name: g.h1, url: `${SITE}${GUIDE_BASE}/${g.slug}` })) }],
  });
}

export function guidePage(g: Guide): string {
  const path = `${GUIDE_BASE}/${g.slug}`;
  const related = g.related.map(s => GUIDES.find(x => x.slug === s)).filter((x): x is Guide => !!x);
  const body = `${hero(`${LEVEL_TITLE[g.level]} · grammatika`, g.h1, g.intro, crumbs(['Ingliz tili qoidalari', GUIDE_BASE], [g.h1]))}
<main class="page"><div class="wrap"><article class="prose">
${g.sections.map(s => `<section class="section"><h2>${esc(s.h2)}</h2>${(s.p || []).map(p => `<p>${esc(p)}</p>`).join('')}${s.table ? table(s.table) : ''}${s.list ? `<ul>${s.list.map(i => `<li>${esc(i)}</li>`).join('')}</ul>` : ''}${s.ex ? examples(s.ex) : ''}</section>`).join('')}
<section class="section"><h2>O'zbek tilida so'zlashuvchilar uchun tipik xatolar</h2><ul>${g.traps.map(t => `<li>${esc(t)}</li>`).join('')}</ul></section>
</article>
${lessonCta(g.lesson, 'Bu qoidani')}
<section class="section"><h2>Ko'p beriladigan savollar</h2>${faqHtml(g.faq)}</section>
<section class="section"><h2>Boshqa qoidalar</h2><div class="grid">${related.map(r => `<a class="card" href="${GUIDE_BASE}/${r.slug}"><div class="body"><h3>${esc(r.h1)}</h3></div></a>`).join('')}<a class="card" href="${GUIDE_BASE}"><div class="body"><h3>Barcha qoidalar</h3></div></a></div></section>
<section class="section"><h2>Darsga o'tish</h2><p>Kursda bu mavzu: <a href="${lessonHref(g.lesson)}">${esc(lessonTitle(g.lesson))}</a> (${esc(LEVEL_TITLE[g.lesson[0]] ?? '')}). Barcha darslar: <a href="${COURSE_BASE}">ingliz tili darslari</a>.</p></section>
</div></main>`;
  return page({
    title: `${g.metaTitle} | Scorify.uz`, description: g.metaDesc, path, lang: 'uz', body, ogType: 'article',
    jsonLd: [breadcrumbLd([{ name: 'Bosh sahifa', path: '/' }, { name: 'Ingliz tili qoidalari', path: GUIDE_BASE }, { name: g.h1, path }]), article(path, g.h1, g.metaDesc), faqLd(g.faq)],
  });
}

/* ---------- topic word lists ---------- */
export const topicBySlug = (slug: string | null) => WORD_TOPICS.find(t => t.slug === slug);

export function wordsHub(): string {
  const total = WORD_TOPICS.reduce((n, t) => n + t.words.length, 0);
  const body = `${hero("Inglizcha so'zlar", `Inglizcha so'zlar mavzular bo'yicha: talaffuz va tarjima bilan`, `${WORD_TOPICS.length} ta mavzu, ${total} ta so'z va ko'plab iboralar. Har bir so'zning transkripsiyasi va o'zbekcha tarjimasi, gap misollari va eslab qolish maslahatlari.`, crumbs(["Inglizcha so'zlar"]))}
<main class="page"><div class="wrap">
<div class="grid">${WORD_TOPICS.map(t => `<a class="card" href="${WORDS_BASE}/${t.slug}"><div class="body"><span class="meta">${t.words.length} so'z</span><h3>${esc(t.h1)}</h3></div></a>`).join('')}</div>
<section class="section"><h2>So'zlarni qanday o'rganish kerak</h2><ul><li>Har kuni 5–10 ta yangi so'z, yaxshisi bir mavzudan.</li><li>So'zni transkripsiya va audio bilan birga o'rganing, faqat tarjima yetarli emas.</li><li>Har bir so'z bilan o'zingizga tegishli gap tuzing.</li><li>1, 3 va 7 kundan keyin takrorlang: aqlli takrorlash unutishni kamaytiradi.</li></ul></section>
${ctaBox("So'zlarni audio va mashqlar bilan o'rganing", "Scorify darslarida har bir so'z talaffuzi bilan beriladi, so'ng mashq va takrorlash orqali yodda qoladi.", '/auth', 'Boshlash')}
</div></main>`;
  return page({
    title: `Inglizcha so'zlar mavzular bo'yicha: tarjima va talaffuz bilan | Scorify.uz`,
    description: `Inglizcha so'zlar o'zbekcha tarjima va transkripsiya bilan: sonlar, hafta kunlari, ranglar, oila, kasblar, ovqat, kiyim, uy, ob-havo va sayohat. ${total} ta so'z.`,
    path: WORDS_BASE, lang: 'uz', body,
    jsonLd: [breadcrumbLd([{ name: 'Bosh sahifa', path: '/' }, { name: "Inglizcha so'zlar", path: WORDS_BASE }]),
      { '@context': 'https://schema.org', '@type': 'ItemList', name: "Inglizcha so'zlar mavzular bo'yicha", itemListElement: WORD_TOPICS.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.h1, url: `${SITE}${WORDS_BASE}/${t.slug}` })) }],
  });
}

export function wordsPage(t: WordTopic): string {
  const path = `${WORDS_BASE}/${t.slug}`;
  const related = t.related.map(s => WORD_TOPICS.find(x => x.slug === s)).filter((x): x is WordTopic => !!x);
  const body = `${hero(`Inglizcha so'zlar · ${LEVEL_TITLE[t.level]}`, t.h1, t.intro, crumbs(["Inglizcha so'zlar", WORDS_BASE], [t.h1]))}
<main class="page"><div class="wrap">
<section class="section"><h2>So'zlar va talaffuz</h2>
<div class="table-scroll"><table class="data"><thead><tr><th>Inglizcha</th><th>Talaffuz</th><th>O'zbekcha</th></tr></thead><tbody>${t.words.map(([en, ipa, uz]) => `<tr><th scope="row">${esc(en)}</th><td>${esc(ipa)}</td><td>${esc(uz)}</td></tr>`).join('')}</tbody></table></div></section>
<section class="section"><h2>Gap ichida ishlatish</h2>${examples(t.phrases)}</section>
<section class="section"><h2>Eslab qolish uchun maslahat</h2><p>${esc(t.tip)}</p></section>
${lessonCta(t.lesson, 'Bu mavzuni')}
<section class="section"><h2>Ko'p beriladigan savollar</h2>${faqHtml(t.faq)}</section>
<section class="section"><h2>Boshqa mavzular</h2><div class="grid">${related.map(r => `<a class="card" href="${WORDS_BASE}/${r.slug}"><div class="body"><h3>${esc(r.h1)}</h3></div></a>`).join('')}<a class="card" href="${WORDS_BASE}"><div class="body"><h3>Barcha mavzular</h3></div></a></div></section>
<section class="section"><p>Kursdagi mos dars: <a href="${lessonHref(t.lesson)}">${esc(lessonTitle(t.lesson))}</a>. Grammatika: <a href="${GUIDE_BASE}">ingliz tili qoidalari</a>.</p></section>
</div></main>`;
  return page({
    title: `${t.metaTitle} | Scorify.uz`, description: t.metaDesc, path, lang: 'uz', body, ogType: 'article',
    jsonLd: [breadcrumbLd([{ name: 'Bosh sahifa', path: '/' }, { name: "Inglizcha so'zlar", path: WORDS_BASE }, { name: t.h1, path }]), article(path, t.h1, t.metaDesc), faqLd(t.faq),
      { '@context': 'https://schema.org', '@type': 'ItemList', name: t.h1, itemListElement: t.words.map(([en, , uz], i) => ({ '@type': 'ListItem', position: i + 1, name: `${en} — ${uz}` })) }],
  });
}

/* ---------- English-language landing ---------- */
const EN_FAQ = [
  { q: 'Can I learn English from zero in Uzbek?', a: 'Yes. Scorify.uz has a full beginner course for Uzbek speakers: every explanation is in Uzbek, examples and exercises are in English, and every word has audio.' },
  { q: 'Is the course free?', a: 'Every new account gets a 7-day free trial of the course. After that you can continue with a paid plan, paid in Uzbek sums.' },
  { q: 'Which levels are available?', a: 'Beginner, Elementary (A1) and Pre-Intermediate (A2): 136 lessons in total, with unit tests and a placement test if you already know some English.' },
  { q: 'Does it work on a phone?', a: 'Yes. Lessons run in the browser on any phone or computer, and there is a Telegram bot with reminders and a Mini App.' },
  { q: 'Is there IELTS preparation too?', a: 'Yes. Scorify.uz also gives AI feedback on IELTS Writing and Speaking with estimated band scores, plus free sample answers and guides.' },
];

export function englishLanding(): string {
  const total = COURSE.reduce((n, l) => n + l.units.reduce((m, u) => m + u.lessons.length, 0), 0);
  const body = `${hero('English course for Uzbek speakers', 'Learn English from Uzbek: a step-by-step course from zero', `${total} short lessons with explanations in Uzbek, audio, exercises, unit tests and spaced repetition. Start with a free trial and learn 10 minutes a day.`, '<a href="/">Home</a> / Learn English from Uzbek')}
<main class="page"><div class="wrap">
<section class="section"><h2>Why Uzbek speakers choose Scorify</h2><ul>
<li><b>Uzbek explanations:</b> grammar is explained in your own language and compared with Uzbek, so typical mistakes are covered before you make them.</li>
<li><b>Real pronunciation:</b> every word and sentence has audio and IPA, so you learn how English really sounds.</li>
<li><b>Short daily lessons:</b> 10–15 minutes a day, with streaks, XP and reminders in Telegram.</li>
<li><b>Tests and review:</b> unit tests, a placement test and spaced repetition of words.</li></ul></section>
<section class="section"><h2>Course levels</h2><div class="grid">${COURSE.map(l => `<a class="card" href="${COURSE_BASE}/${l.slug}"><div class="body"><h3>${esc(l.title)} · ${esc(l.cefr)}</h3><p>${l.units.reduce((m, u) => m + u.lessons.length, 0)} lessons · ${l.units.length} units</p></div></a>`).join('')}</div></section>
<section class="section"><h2>Free study material in Uzbek</h2><ul><li><a href="${GUIDE_BASE}">English grammar rules explained in Uzbek</a></li><li><a href="${WORDS_BASE}">English vocabulary by topic with Uzbek translation and pronunciation</a></li><li><a href="${COURSE_BASE}">All English lessons (in Uzbek)</a></li></ul></section>
<section class="section"><h2>IELTS preparation</h2><p>Preparing for IELTS? Scorify.uz grades your Writing and Speaking with AI. See <a href="/ielts-writing-task-2-questions">Writing Task 2 questions</a>, <a href="/ielts-speaking-part-2">Speaking Part 2 cue cards</a>, the <a href="/ielts-band-score-calculator">band score calculator</a> and the <a href="/blog">blog</a> with study guides.</p></section>
${ctaBox('Start learning English today', 'Create an account in one tap with Google or Telegram and open your first lesson.', '/auth', 'Start now')}
<section class="section"><h2>Frequently asked questions</h2>${faqHtml(EN_FAQ)}</section>
</div></main>`;
  return page({
    title: 'Learn English from Uzbek: beginner course online | Scorify.uz',
    description: `Learn English from zero with explanations in Uzbek: ${total} lessons from Beginner to Pre-Intermediate, audio, exercises and tests. Start with a free trial on Scorify.uz.`,
    path: EN_LANDING, lang: 'en', body,
    alternates: [{ lang: 'en', path: EN_LANDING }, { lang: 'uz', path: COURSE_BASE }, { lang: 'x-default', path: COURSE_BASE }],
    jsonLd: [breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Learn English from Uzbek', path: EN_LANDING }]), faqLd(EN_FAQ, 'en'),
      { '@context': 'https://schema.org', '@type': 'Course', name: 'English course for Uzbek speakers', description: 'English from zero to A2 with explanations in Uzbek.', inLanguage: ['uz', 'en'], provider: { '@type': 'Organization', name: 'Scorify.uz', url: SITE }, educationalLevel: 'Beginner to A2', hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT10M', inLanguage: 'uz' } }],
  });
}

export const learnUrls = (): string[] => [GUIDE_BASE, ...GUIDES.map(g => `${GUIDE_BASE}/${g.slug}`), WORDS_BASE, ...WORD_TOPICS.map(t => `${WORDS_BASE}/${t.slug}`), EN_LANDING];

import { SITE, breadcrumbLd, ctaBox, esc, page } from './shell.js';
import { COURSE, type SeoLesson, type SeoLevel } from './data-course.js';

// Public, server-rendered pages for the English course: hub, one page per level and one per lesson. They describe
// what each lesson teaches (goal, words, key points) and lead to the real, interactive lesson behind the sign-up.

export const COURSE_BASE = '/ingliz-tili-darslari';

type LevelInfo = { h1: string; lead: string; who: string; after: string[]; metaTitle: string; metaDesc: string };
const INFO: Record<string, LevelInfo> = {
  beginner: {
    h1: "Ingliz tilini noldan o'rganish: Beginner kursi",
    lead: "Alifbo, tovushlar va birinchi gaplardan boshlanadi. Har bir dars o'zbekcha tushuntirish, talaffuz audiosi va mashqlar bilan.",
    who: "Ingliz tilini umuman bilmaydiganlar va hamma narsani noldan, qadamma-qadam boshlamoqchi bo'lganlar uchun.",
    after: ["O'zingiz haqingizda va oilangiz haqida gapira olasiz", "Kunlik tartibingizni va oddiy savollarni inglizcha aytasiz", "O'tgan va kelasi zamonda oddiy gaplar tuzasiz"],
    metaTitle: "Ingliz tilini noldan o'rganish: Beginner kursi (40 dars)",
    metaDesc: "Ingliz tilini noldan o'rganing: alifbo, tovushlar, to be, Present Simple va boshqa 40 ta dars. O'zbekcha tushuntirish, talaffuz audiosi va mashqlar.",
  },
  elementary: {
    h1: "Elementary (A1) ingliz tili kursi",
    lead: "Beginner'dan keyingi bosqich: tanishuv, ish va bo'sh vaqt, ovqat va xarid, o'tmish hikoyalari, sayohat va tajribalar.",
    who: "Alifbo va birinchi gaplarni bilganlar va kundalik mavzularda gapirishni o'rganmoqchi bo'lganlar uchun.",
    after: ["Tanishuv va qisqa suhbatlarda ishtirok etasiz", "Kafe, do'kon va mehmonxonada o'zingizni tushuntira olasiz", "Present Perfect bilan tajribangiz haqida gapirasiz"],
    metaTitle: "Elementary (A1) ingliz tili kursi: 48 dars o'zbek tilida",
    metaDesc: "Elementary (A1) ingliz tili darslari: 48 ta dars, 6 bosqich. Tanishuv, ish, ovqat va xarid, o'tmish, sayohat. O'zbekcha tushuntirish va mashqlar.",
  },
  'pre-intermediate': {
    h1: "Pre-Intermediate (A2) ingliz tili kursi",
    lead: "Kundalik mavzularda ancha erkin gapirish: o'tmish va kelajak, taqqoslash, maslahat va iltimoslar, ish va pul.",
    who: "Asosiy grammatikani bilgan va nutqini ishonchli qilmoqchi bo'lganlar uchun.",
    after: ["Voqealarni hikoya qilasiz (Past Simple va Past Continuous)", "Rejalar va ehtimollar haqida gapirasiz (will, going to, may/might)", "Oddiy email va qisqa xabarlar yozasiz"],
    metaTitle: "Pre-Intermediate (A2) ingliz tili kursi: 48 dars",
    metaDesc: "Pre-Intermediate (A2) ingliz tili darslari: o'tgan va kelasi zamon, taqqoslash, majhul nisbat, relative clauses, email yozish. 48 ta dars o'zbek tilida.",
  },
};

const FAQ = [
  { q: "Ingliz tilini noldan o'rganish mumkinmi?", a: "Ha. Beginner kursi alifbo va tovushlardan boshlanadi, barcha tushuntirishlar o'zbek tilida, misollar esa inglizcha va audio bilan beriladi." },
  { q: "Darslar qanday tuzilgan?", a: "Har bir darsda qisqa nazariya, 10 ta yangi so'z (talaffuzi bilan), mashqlar va yakuniy savollar bor. Har bosqich oxirida test, har daraja oxirida yakuniy test o'tkaziladi." },
  { q: "Beginner'dan Pre-Intermediate'gacha qancha vaqt ketadi?", a: "Kuniga 30–60 daqiqa mashq qilsangiz, taxminan 3–5 oy. Bu taxminiy hisob: natija shaxsiy sur'atga va takrorlashga bog'liq." },
  { q: "Telefonda ishlaydimi?", a: "Ha, hech narsa o'rnatish shart emas: darslar telefon va kompyuter brauzerida ochiladi." },
  { q: "Kurs bepulmi?", a: "Ro'yxatdan o'tganingizda sinov muddati beriladi, davom etish uchun Learn tarifi kerak bo'ladi." },
  { q: "IELTS ham bormi?", a: "Ha. Scorify.uz IELTS Writing va Speaking javoblarini sun'iy intellekt bilan baholaydi, shuningdek mock testlar va blog maqolalari bor." },
];
const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'uz', mainEntity: FAQ.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
const faqHtml = FAQ.map(f => `<details class="faq"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('');

const lessonCount = (l: SeoLevel) => l.units.reduce((n, u) => n + u.lessons.length, 0);
const wordCount = (l: SeoLevel) => l.units.reduce((n, u) => n + u.lessons.reduce((m, x) => m + x.words.length, 0), 0);
const crumbHtml = (...items: [string, string?][]) => ['<a href="/">Bosh sahifa</a>', ...items.map(([t, h]) => (h ? `<a href="${h}">${esc(t)}</a>` : esc(t)))].join(' / ');
const hero = (eyebrow: string, h1: string, lead: string, trail: string) =>
  `<section class="hero"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb">${trail}</nav><span class="eyebrow">${esc(eyebrow)}</span><h1>${esc(h1)}</h1><p class="lead">${esc(lead)}</p></div></section>`;
const levelPath = (l: SeoLevel) => `${COURSE_BASE}/${l.slug}`;
const lessonPath = (l: SeoLevel, x: SeoLesson) => `${COURSE_BASE}/${l.slug}/${x.slug}`;
const trim = (s: string, n: number) => (s.length <= n ? s : `${s.slice(0, n - 1).replace(/\s+\S*$/, '')}…`);

export const levelBySlug = (slug: string | null) => COURSE.find(l => l.slug === slug);
export const courseUrls = (): string[] => [COURSE_BASE, ...COURSE.flatMap(l => [levelPath(l), ...l.units.flatMap(u => u.lessons.map(x => lessonPath(l, x)))])];

export function courseHub(): string {
  const total = COURSE.reduce((n, l) => n + lessonCount(l), 0);
  const body = `${hero("Ingliz tili kursi", "Ingliz tilini noldan o'rganing: Beginner'dan Pre-Intermediate'gacha", `${total} ta dars, o'zbekcha tushuntirish, talaffuz audiosi va mashqlar. Har kuni 10–15 daqiqa bilan boshlash mumkin.`, crumbHtml(['Ingliz tili darslari']))}
<main class="page"><div class="wrap">
<div class="grid">${COURSE.map(l => `<a class="card" href="${levelPath(l)}"><div class="body"><h3>${esc(l.title)} · ${esc(l.cefr)}</h3><p>${esc(INFO[l.slug].who)}</p><p><b>${lessonCount(l)}</b> dars · <b>${l.units.length}</b> bosqich · <b>${wordCount(l)}</b> so'z</p></div></a>`).join('')}</div>
<section class="section"><h2>Darslar qanday ishlaydi</h2>
<ul><li><b>Qisqa nazariya o'zbek tilida:</b> qoida bitta-bitta, misollar va tipik xatolar bilan.</li>
<li><b>Talaffuz:</b> har bir so'z va gap audio bilan, istalgancha takrorlash mumkin.</li>
<li><b>Mashqlar:</b> tanlash, gap tuzish, eshitib yozish, xatoni topish va boshqalar. Xatolar keyin yana qaytadi.</li>
<li><b>Aqlli takrorlash:</b> o'rganilgan so'zlar unutilmasdan oldin eslatib turiladi.</li>
<li><b>Testlar:</b> har bosqich va har daraja oxirida.</li></ul></section>
<section class="section"><h2>Ko'p beriladigan savollar</h2>${faqHtml}</section>
${ctaBox("Birinchi darsni hoziroq boshlang", "Ro'yxatdan o'ting va Beginner kursining birinchi darsiga o'ting: alifbo va tovushlar.", '/auth', 'Boshlash')}
</div></main>`;
  return page({
    title: "Ingliz tilini noldan o'rganish: darslar, mashqlar | Scorify.uz",
    description: `Ingliz tilini noldan o'rganing: Beginner, Elementary va Pre-Intermediate, jami ${total} ta dars. O'zbekcha tushuntirish, talaffuz audiosi, mashqlar va testlar.`,
    path: COURSE_BASE, lang: 'uz', body,
    jsonLd: [breadcrumbLd([{ name: 'Bosh sahifa', path: '/' }, { name: 'Ingliz tili darslari', path: COURSE_BASE }]), faqLd,
      { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Ingliz tili kurslari', itemListElement: COURSE.map((l, i) => ({ '@type': 'ListItem', position: i + 1, name: `${l.title} (${l.cefr})`, url: SITE + levelPath(l) })) }],
  });
}

export function levelPage(l: SeoLevel): string {
  const info = INFO[l.slug];
  const body = `${hero(`${l.title} · ${l.cefr}`, info.h1, info.lead, crumbHtml(['Ingliz tili darslari', COURSE_BASE], [l.title]))}
<main class="page"><div class="wrap">
<p>${esc(info.who)} Kursda <b>${lessonCount(l)}</b> ta dars, <b>${l.units.length}</b> bosqich va <b>${wordCount(l)}</b> ta yangi so'z bor.</p>
<section class="section"><h2>Kursdan keyin nimani uddalaysiz</h2><ul>${info.after.map(a => `<li>${esc(a)}</li>`).join('')}</ul></section>
${l.units.map(u => `<section class="section"><h2>${u.n}-bosqich: ${esc(u.titleUz)}</h2><p>${esc(u.description)}</p>
<ol>${u.lessons.map(x => `<li><a href="${lessonPath(l, x)}">${esc(x.titleUz)}</a></li>`).join('')}</ol>
${u.canDo.length ? `<p><b>Bosqich oxirida:</b> ${u.canDo.map(esc).join('; ')}.</p>` : ''}</section>`).join('')}
<section class="section"><h2>Ko'p beriladigan savollar</h2>${faqHtml}</section>
${ctaBox(`${l.title} kursini boshlang`, "Ro'yxatdan o'ting va birinchi darsni hoziroq oching.", '/auth', 'Boshlash')}
</div></main>`;
  return page({
    title: `${info.metaTitle} | Scorify.uz`, description: info.metaDesc, path: levelPath(l), lang: 'uz', body,
    jsonLd: [breadcrumbLd([{ name: 'Bosh sahifa', path: '/' }, { name: 'Ingliz tili darslari', path: COURSE_BASE }, { name: l.title, path: levelPath(l) }]), faqLd,
      { '@context': 'https://schema.org', '@type': 'Course', name: `${l.title} ingliz tili kursi`, description: info.metaDesc, inLanguage: 'uz', educationalLevel: l.cefr,
        provider: { '@type': 'Organization', name: 'Scorify.uz', url: SITE }, numberOfCredits: lessonCount(l),
        hasPart: l.units.flatMap(u => u.lessons.map(x => ({ '@type': 'LearningResource', name: x.titleUz, url: SITE + lessonPath(l, x) }))) }],
  });
}

export function lessonPage(l: SeoLevel, x: SeoLesson): string {
  const flat = l.units.flatMap(u => u.lessons.map(y => ({ y, u })));
  const at = flat.findIndex(z => z.y.id === x.id);
  const { u } = flat[at];
  const prev = flat[at - 1]?.y; const next = flat[at + 1]?.y;
  const body = `${hero(`${l.title} · ${u.n}-bosqich`, x.titleUz, x.goal, crumbHtml(['Ingliz tili darslari', COURSE_BASE], [l.title, levelPath(l)], [x.titleUz]))}
<main class="page"><div class="wrap">
<section class="section"><h2>Dars so'zlari</h2>
<div class="table-scroll"><table class="data"><thead><tr><th>Inglizcha</th><th>Talaffuz</th><th>O'zbekcha</th></tr></thead><tbody>${x.words.map(w => `<tr><td><b>${esc(w.en)}</b></td><td>${w.ipa ? `/${esc(w.ipa)}/` : ''}</td><td>${esc(w.uz)}</td></tr>`).join('')}</tbody></table></div></section>
<section class="section"><h2>Asosiy xulosalar</h2><ul>${x.summary.map(s => `<li>${esc(s)}</li>`).join('')}</ul></section>
${ctaBox("Darsni mashqlar va audio bilan o'tang", "To'liq dars: tushuntirish, har bir so'zning talaffuzi, mashqlar va yakuniy savollar.", '/auth', 'Darsni boshlash')}
<section class="section"><h2>${u.n}-bosqich: ${esc(u.titleUz)}</h2><ol>${u.lessons.map(y => `<li>${y.id === x.id ? `<b>${esc(y.titleUz)}</b>` : `<a href="${lessonPath(l, y)}">${esc(y.titleUz)}</a>`}</li>`).join('')}</ol></section>
<nav class="pager">${prev ? `<a class="btn ghost" href="${lessonPath(l, prev)}">← ${esc(prev.titleUz)}</a>` : ''}${next ? `<a class="btn ghost" href="${lessonPath(l, next)}">${esc(next.titleUz)} →</a>` : ''}</nav>
</div></main>`;
  const desc = trim(`${x.goal}`, 155);
  return page({
    title: `${trim(x.titleUz, 42)} — ${l.title} ingliz tili darsi | Scorify.uz`, description: desc, path: lessonPath(l, x), lang: 'uz', body,
    jsonLd: [breadcrumbLd([{ name: 'Bosh sahifa', path: '/' }, { name: 'Ingliz tili darslari', path: COURSE_BASE }, { name: l.title, path: levelPath(l) }, { name: x.titleUz, path: lessonPath(l, x) }]),
      { '@context': 'https://schema.org', '@type': 'LearningResource', name: x.titleUz, description: x.goal, inLanguage: 'uz', educationalLevel: l.cefr, learningResourceType: 'Dars',
        isPartOf: { '@type': 'Course', name: `${l.title} ingliz tili kursi`, url: SITE + levelPath(l) }, provider: { '@type': 'Organization', name: 'Scorify.uz', url: SITE } }],
  });
}

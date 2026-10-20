// The IELTS hubs: /ielts (English) and /uz/ielts (Uzbek). They route visitors to the right practice and are the IELTS entry point of the
// site navigation. Facts here come from src/lib/plans.ts (limits), src/features/ielts/registry.ts (tests) and docs/ielts-practice.md;
// a test (src/test/ielts-hub.test.ts) compares the numbers with plans.ts so they cannot drift apart silently.
import { SITE, authHref, breadcrumbLd, ctaBox, esc, page } from './shell.js';
import { listPosts } from './posts.js';
import { totalPages } from './catalog.js';
import { TASK2 } from './data-task2.js';
import { CUE_CARDS } from './data-part2.js';
import { VOCAB } from './data-vocab.js';

export const IELTS_HUB_EN = '/ielts';
export const IELTS_HUB_UZ = '/uz/ielts';
export type HubLang = 'en' | 'uz';

/** Limits as defined in src/lib/plans.ts (free account and the IELTS plan). */
export const HUB_LIMITS = { freeWriting: 1, freeSpeaking: 1, freeReading: 3, freeListening: 3, writing: 50, speaking: 30, mock: 6, readingTests: 5, listeningTests: 5 } as const;

const GUIDES: Record<HubLang, string[]> = {
  en: ['ielts-band-score-explained', 'ielts-writing-task-2-essay-structure', 'ielts-writing-task-1-how-to-describe-a-graph', 'ielts-speaking-part-2-how-to-speak-for-two-minutes', 'ielts-reading-true-false-not-given-strategy', 'ielts-listening-12-tips-and-common-traps'],
  uz: ['ielts-band-ball-qanday-hisoblanadi', 'ielts-writing-task-2-qanday-yoziladi', 'ielts-writing-task-1-qanday-yoziladi', 'ielts-speaking-qanday-topshiriladi', 'ielts-reading-true-false-not-given-qanday-yechiladi', 'ielts-listening-uchun-12-maslahat'],
};

type Card = { title: string; text: string; links: [string, string][]; next: string; cta: string };
type Faq = { q: string; a: string };
type Copy = {
  title: string; description: string; eyebrow: string; h1: string; lead: string; estimate: string; home: [string, string]; crumb: string;
  heroCta: [string, string]; heroCta2: [string, string];
  skillsH: string; skills: Card[];
  toolsH: string; tools: [string, string, string][];
  planH: string; planFree: string; planPlus: string; planNote: string;
  guidesH: string; guidesAll: [string, string]; guidesOther: [string, string];
  alsoH: string; alsoText: string; alsoLink: [string, string];
  faqH: string; faq: Faq[];
  ctaTitle: string; ctaText: string; ctaLabel: string; lang: HubLang; inLang: string;
};

const L = HUB_LIMITS;
const COPY: Record<HubLang, Copy> = {
  en: {
    lang: 'en', inLang: 'en',
    title: 'IELTS Practice Online with AI Band Estimates | Scorify.uz',
    description: 'IELTS Writing and Speaking practice with AI-estimated bands, full Reading and Listening tests, mock tests, sample answers and a band score calculator.',
    eyebrow: 'IELTS preparation', h1: 'IELTS practice online: Writing, Speaking, Reading and Listening',
    lead: 'Scorify.uz is an online IELTS practice platform. Write an essay or record a speaking answer and get an AI-estimated band score with feedback, or sit full Reading and Listening tests with a timer. Sample answers, vocabulary lists and a band score calculator are open to everyone.',
    estimate: 'Bands from Scorify are AI estimates for practice, not official IELTS results. Scorify.uz is not affiliated with IELTS.',
    home: ['Home', '/'], crumb: 'IELTS',
    heroCta: ['Try a free Writing check', '/writing'], heroCta2: ['Try a free Speaking check', '/speaking'],
    skillsH: 'What you can practise',
    skills: [
      { title: 'IELTS Writing', text: 'Submit a Task 1 or Task 2 answer and get an estimated band on the four official criteria, with corrections to your text.', next: '/writing', cta: 'Practise Writing',
        links: [['/ielts-writing-task-2-questions', 'Task 2 questions and sample essays'], ['/ielts-writing-task-1-samples', 'Task 1 samples: graphs, charts, tables'], ['/ielts-writing-task-2', 'Task 2 guide'], ['/ielts-writing-task-1', 'Task 1 guide']] },
      { title: 'IELTS Speaking', text: 'Record a Part 1, 2 or 3 answer and get a report on fluency, grammar, vocabulary and pronunciation. Pronunciation is estimated from the transcript of your answer.', next: '/speaking', cta: 'Practise Speaking',
        links: [['/ielts-speaking-part-1', 'Part 1 topics'], ['/ielts-speaking-part-2', 'Part 2 cue cards'], ['/ielts-speaking-part-3', 'Part 3 discussion questions'], ['/ielts-speaking-practice', 'Speaking practice with AI feedback']] },
      { title: 'IELTS Reading', text: 'Full tests in the Academic format: 3 passages, 40 questions and a 60-minute timer, with an estimated band and a review of every answer.', next: '/reading', cta: 'Try a Reading test',
        links: [['/ielts-reading-practice', 'Question types and band table']] },
      { title: 'IELTS Listening', text: 'Full tests with 4 sections and 40 questions. Exam mode plays each recording once; practice mode lets you replay. After the test you get the answers and the transcript.', next: '/listening', cta: 'Try a Listening test',
        links: [['/ielts-listening-practice', 'Sections, tips and band table']] },
      { title: 'Mock tests', text: 'Full-length mock tests covering Listening, Reading, Writing and Speaking with exam timing. Mock tests are part of the IELTS plan.', next: '/mock-test', cta: 'Open mock tests', links: [] },
    ],
    toolsH: 'Free tools and study material',
    tools: [['/ielts-band-score-calculator', 'Band score calculator', 'Work out your overall band with the official rounding rule.'], ['/ielts-vocabulary', 'IELTS vocabulary by topic', `${VOCAB.length} word lists with meanings and examples.`],
      ['/ielts-speaking-part-2', 'Speaking cue cards', `${CUE_CARDS.length} Part 2 cue cards with band 7 sample answers.`], ['/ielts-writing-task-2-questions', 'Writing Task 2 questions', `${TASK2.length} questions with plans and model essays.`]],
    planH: 'What is free and what is in the IELTS plan',
    planFree: `A free account includes ${L.freeWriting} Writing assessment, ${L.freeSpeaking} Speaking assessment, IELTS Reading tests 1 to ${L.freeReading} and IELTS Listening tests 1 to ${L.freeListening}.`,
    planPlus: `The IELTS plan adds ${L.writing} Writing assessments and ${L.speaking} Speaking assessments a month, all ${L.readingTests} Reading and all ${L.listeningTests} Listening tests without a limit, and ${L.mock} mock tests a month.`,
    planNote: 'Limits can change; the pricing page in the app always shows the current plans.',
    guidesH: 'IELTS guides in English', guidesAll: ['/blog', 'All English articles'], guidesOther: ['/uz/blog', 'Maqolalar o‘zbek tilida'],
    alsoH: 'Also from Scorify', alsoText: 'Scorify also runs a general English course (beginner to B1) whose explanations are in Uzbek. It is separate from IELTS preparation, and you do not need it for the practice above.', alsoLink: ['/learn-english-from-uzbek', 'English course taught in Uzbek'],
    faqH: 'IELTS practice FAQ',
    faq: [
      { q: 'Are the band scores official?', a: 'No. Writing and Speaking bands are AI estimates and Reading and Listening bands come from a raw-score table that approximates real tests. They show where you stand and what to improve, not what you will get on test day.' },
      { q: 'What can I use for free?', a: `A free account includes ${L.freeWriting} Writing assessment, ${L.freeSpeaking} Speaking assessment, Reading tests 1 to ${L.freeReading} and Listening tests 1 to ${L.freeListening}. The sample answers, vocabulary lists, guides and the band score calculator on this site are open without an account.` },
      { q: 'Does the 7-day free trial unlock the IELTS plan?', a: 'No. The 7-day free trial belongs to the Learn plan, the general English course taught in Uzbek. IELTS plan features such as the monthly Writing and Speaking assessments and mock tests are not part of that trial.' },
      { q: 'Is it Academic or General Training?', a: 'The Reading tests follow the Academic format and the Writing Task 1 samples are Academic charts, tables and processes.' },
      { q: 'Do I need to speak Uzbek?', a: 'No. The IELTS practice pages and guides on /ielts and /blog are in English. Uzbek-language guides are available on the Uzbek IELTS page.' },
    ],
    ctaTitle: 'Get an estimated band for your own answer', ctaText: 'Write an essay or record a speaking answer and see your estimated band and corrections in seconds.', ctaLabel: 'Try a free Writing check',
  },
  uz: {
    lang: 'uz', inLang: 'uz',
    title: 'IELTS ga tayyorlanish: AI baholash bilan mashq | Scorify.uz',
    description: 'IELTS Writing va Speaking javoblariga AI dan taxminiy band, to‘liq Reading va Listening testlari, mock testlar, namunaviy javoblar va band kalkulyatori.',
    eyebrow: 'IELTS ga tayyorgarlik', h1: 'IELTS ga tayyorlanish: Writing, Speaking, Reading va Listening mashqlari',
    lead: 'Scorify.uz — IELTS uchun onlayn mashq platformasi. Esse yozing yoki nutq javobini yozib oling va AI dan taxminiy band hamda tuzatishlarni oling; Reading va Listening bo‘yicha esa to‘liq testlarni taymer bilan ishlang. Namunaviy javoblar, lug‘atlar va band kalkulyatori hamma uchun ochiq.',
    estimate: 'Scorify bandlari mashq uchun AI taxminidir, rasmiy IELTS natijasi emas. Scorify.uz IELTS bilan bog‘liq emas. IELTS savollari va namunaviy javoblar inglizcha; o‘zbekcha tushuntirishlar blogdagi qo‘llanmalarda.',
    home: ['Bosh sahifa', '/uz'], crumb: 'IELTS',
    heroCta: ['Writing ni bepul tekshirish', '/writing'], heroCta2: ['Speaking ni bepul sinash', '/speaking'],
    skillsH: 'Nimalarni mashq qilish mumkin',
    skills: [
      { title: 'IELTS Writing', text: 'Task 1 yoki Task 2 javobini yuboring va to‘rtta rasmiy mezon bo‘yicha taxminiy band hamda matningizga tuzatishlarni oling.', next: '/writing', cta: 'Writing mashqi',
        links: [['/ielts-writing-task-2-questions', 'Task 2 savollari va namunaviy esselar (inglizcha)'], ['/ielts-writing-task-1-samples', 'Task 1 namunalari: grafik, diagramma, jadval (inglizcha)'], ['/ielts-writing-task-2', 'Task 2 qo‘llanmasi (inglizcha)'], ['/ielts-writing-task-1', 'Task 1 qo‘llanmasi (inglizcha)']] },
      { title: 'IELTS Speaking', text: 'Part 1, 2 yoki 3 javobini yozib oling va ravonlik, grammatika, lug‘at hamda talaffuz bo‘yicha hisobot oling. Hisobotda o‘zbekcha xulosa va maslahatlar bor; talaffuz javob matniga qarab baholanadi (taxminiy).', next: '/speaking', cta: 'Speaking mashqi',
        links: [['/ielts-speaking-part-1', 'Part 1 mavzulari (inglizcha)'], ['/ielts-speaking-part-2', 'Part 2 cue card lar (inglizcha)'], ['/ielts-speaking-part-3', 'Part 3 savollari (inglizcha)'], ['/ielts-speaking-practice', 'AI baholashli Speaking mashqi (inglizcha)']] },
      { title: 'IELTS Reading', text: 'Academic formatidagi to‘liq testlar: 3 ta matn, 40 ta savol, 60 daqiqa taymer. Natijada taxminiy band va har bir javobning tahlili, shu jumladan qisqa o‘zbekcha izoh bor.', next: '/reading', cta: 'Reading testini sinash',
        links: [['/ielts-reading-practice', 'Savol turlari va band jadvali (inglizcha)']] },
      { title: 'IELTS Listening', text: 'To‘liq testlar: 4 ta section, 40 ta savol. Imtihon rejimida har bir yozuv bir marta eshittiriladi, mashq rejimida takrorlash mumkin. Testdan so‘ng javoblar va transkript ko‘rsatiladi.', next: '/listening', cta: 'Listening testini sinash',
        links: [['/ielts-listening-practice', 'Section lar, maslahatlar va band jadvali (inglizcha)']] },
      { title: 'Mock testlar', text: 'Listening, Reading, Writing va Speaking ni o‘z ichiga olgan, imtihon vaqti bilan to‘liq mock testlar. Mock testlar IELTS tarifiga kiradi.', next: '/mock-test', cta: 'Mock testlarni ochish', links: [] },
    ],
    toolsH: 'Bepul vositalar va o‘quv materiallari',
    tools: [['/ielts-band-score-calculator', 'Band kalkulyatori', 'Umumiy bandni rasmiy yaxlitlash qoidasi bilan hisoblang (inglizcha sahifa).'], ['/ielts-vocabulary', 'IELTS lug‘ati mavzular bo‘yicha', `${VOCAB.length} ta lug‘at ro‘yxati, ma’no va misollar bilan (inglizcha).`],
      ['/ielts-speaking-part-2', 'Speaking cue card lar', `${CUE_CARDS.length} ta Part 2 cue card, band 7 namunaviy javoblari bilan (inglizcha).`], ['/ielts-writing-task-2-questions', 'Writing Task 2 savollari', `${TASK2.length} ta savol, reja va namunaviy esse bilan (inglizcha).`]],
    planH: 'Nima bepul va IELTS tarifida nima bor',
    planFree: `Bepul hisobda ${L.freeWriting} ta Writing baholash, ${L.freeSpeaking} ta Speaking baholash, IELTS Reading 1–${L.freeReading}-testlar va IELTS Listening 1–${L.freeListening}-testlar bor.`,
    planPlus: `IELTS tarifi har oy ${L.writing} ta Writing va ${L.speaking} ta Speaking baholash, barcha ${L.readingTests} ta Reading va ${L.listeningTests} ta Listening testini cheklovsiz va har oy ${L.mock} ta mock testni qo‘shadi.`,
    planNote: 'Cheklovlar o‘zgarishi mumkin; joriy tariflar ilovadagi narxlar sahifasida ko‘rsatiladi.',
    guidesH: 'IELTS bo‘yicha o‘zbekcha qo‘llanmalar', guidesAll: ['/uz/blog', 'Barcha o‘zbekcha maqolalar'], guidesOther: ['/blog', 'Articles in English'],
    alsoH: 'Umumiy ingliz tili', alsoText: 'Ingliz tilini noldan o‘rganmoqchi bo‘lsangiz, Scorify da o‘zbekcha tushuntirishli kurs bor: Beginner dan Intermediate (B1) gacha.', alsoLink: ['/ingliz-tili-darslari', 'Ingliz tili darslari (o‘zbek tilida)'],
    faqH: 'IELTS mashqlari bo‘yicha savollar',
    faq: [
      { q: 'Bandlar rasmiymi?', a: 'Yo‘q. Writing va Speaking bandlari AI taxminidir, Reading va Listening bandlari esa haqiqiy testlarga yaqin xom ball jadvalidan olinadi. Ular qayerda turganingizni va nimani yaxshilash kerakligini ko‘rsatadi, imtihon natijasini kafolatlamaydi.' },
      { q: 'Nimalar bepul?', a: `Bepul hisobda ${L.freeWriting} ta Writing baholash, ${L.freeSpeaking} ta Speaking baholash, Reading 1–${L.freeReading}-testlar va Listening 1–${L.freeListening}-testlar bor. Saytdagi namunaviy javoblar, lug‘atlar, qo‘llanmalar va band kalkulyatori hisobsiz ham ochiq.` },
      { q: '7 kunlik bepul sinov IELTS tarifini ochadimi?', a: 'Yo‘q. 7 kunlik bepul sinov Learn tarifiga, ya’ni o‘zbek tilida tushuntiriladigan umumiy ingliz tili kursiga tegishli. Oylik Writing va Speaking baholashlar hamda mock testlar kabi IELTS tarifi imkoniyatlari bu sinovga kirmaydi.' },
      { q: 'Academic yoki General Training?', a: 'Reading testlari Academic formatida, Writing Task 1 namunalari esa Academic grafik, jadval va jarayonlardir.' },
      { q: 'Mashq sahifalari nega inglizcha?', a: 'IELTS savollari, namunaviy javoblar va kerakli iboralar inglizcha bo‘lishi kerak. O‘zbekcha tushuntirishlar blogdagi qo‘llanmalarda va test tahlilidagi izohlarda beriladi.' },
    ],
    ctaTitle: 'O‘z javobingiz uchun taxminiy band oling', ctaText: 'Esse yozing yoki nutq javobini yozib oling va soniyalarda taxminiy band hamda tuzatishlarni ko‘ring.', ctaLabel: 'Writing ni bepul tekshirish',
  },
};

async function guideCards(lang: HubLang) {
  let posts: Awaited<ReturnType<typeof listPosts>> = [];
  try { posts = (await listPosts()).filter(p => p.lang === lang); } catch { /* the blog is optional here */ }
  const bySlug = new Map(posts.map(p => [p.slug, p]));
  const picked = GUIDES[lang].map(s => bySlug.get(s)).filter((p): p is NonNullable<typeof p> => !!p);
  for (const p of posts) { if (picked.length >= 6) break; if (!picked.includes(p)) picked.push(p); }
  return picked.slice(0, 6);
}

export const hubPath = (lang: HubLang) => (lang === 'uz' ? IELTS_HUB_UZ : IELTS_HUB_EN);
/** Real two-way language pair: both hubs exist and say the same thing. x-default is the English hub. */
export const HUB_ALTERNATES = [{ lang: 'en', path: IELTS_HUB_EN }, { lang: 'uz', path: IELTS_HUB_UZ }, { lang: 'x-default', path: IELTS_HUB_EN }];

export async function ieltsHub(lang: HubLang): Promise<string> {
  const c = COPY[lang];
  const path = hubPath(lang);
  const guides = await guideCards(lang);
  const counts = String(totalPages());
  const btn = (href: string, label: string, ghost = false) => `<a class="btn${ghost ? ' ghost' : ''}" href="${esc(authHref(href))}">${esc(label)} →</a>`;
  const body = `<section class="hero"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><a href="${c.home[1]}">${esc(c.home[0])}</a> / ${esc(c.crumb)}</nav><span class="eyebrow">${esc(c.eyebrow)}</span><h1>${esc(c.h1)}</h1><p class="lead">${esc(c.lead)}</p>
<p style="display:flex;flex-wrap:wrap;gap:12px;margin:20px 0 8px">${btn(c.heroCta[1], c.heroCta[0])}${btn(c.heroCta2[1], c.heroCta2[0], true)}</p><p style="color:#64748b;font-size:.9rem;margin:0">${esc(c.estimate)}</p></div></section>
<main class="page"><div class="wrap">
<section class="section"><h2>${esc(c.skillsH)}</h2><div class="grid">${c.skills.map(s => `<div class="card"><div class="body"><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p>${s.links.length ? `<ul>${s.links.map(([h, t]) => `<li><a href="${h}">${esc(t)}</a></li>`).join('')}</ul>` : ''}<p>${btn(s.next, s.cta)}</p></div></div>`).join('')}</div></section>
<section class="section"><h2>${esc(c.toolsH)}</h2><div class="grid">${c.tools.map(([h, t, d]) => `<a class="card" href="${h}"><div class="body"><h3>${esc(t)}</h3><p>${esc(d)}</p></div></a>`).join('')}</div>
<p style="color:#64748b">${lang === 'uz' ? `Jami ${counts} ta bepul mashq sahifasi, namunaviy javoblar bilan (inglizcha).` : `${counts} free practice pages with model answers.`}</p></section>
<section class="section"><h2>${esc(c.planH)}</h2><ul><li>${esc(c.planFree)}</li><li>${esc(c.planPlus)}</li></ul><p style="color:#64748b">${esc(c.planNote)}</p></section>
${guides.length ? `<section class="section"><div class="section-head"><h2>${esc(c.guidesH)}</h2><a href="${c.guidesAll[0]}">${esc(c.guidesAll[1])} →</a></div><div class="grid">${guides.map(p => `<a class="card" href="/blog/${esc(p.slug)}"><div class="body"><h3>${esc(p.title)}</h3>${p.excerpt ? `<p>${esc(p.excerpt)}</p>` : ''}</div></a>`).join('')}</div></section>` : `<section class="section"><h2>${esc(c.guidesH)}</h2><p><a href="${c.guidesAll[0]}">${esc(c.guidesAll[1])} →</a></p></section>`}
${ctaBox(c.ctaTitle, c.ctaText, authHref('/writing'), c.ctaLabel)}
<section class="section"><h2>${esc(c.faqH)}</h2>${c.faq.map(f => `<details class="faq"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('')}</section>
<section class="section"><h2>${esc(c.alsoH)}</h2><p>${esc(c.alsoText)} <a href="${c.alsoLink[0]}">${esc(c.alsoLink[1])}</a></p><p><a href="${c.guidesOther[0]}" hreflang="${lang === 'en' ? 'uz' : 'en'}" lang="${lang === 'en' ? 'uz' : 'en'}">${esc(c.guidesOther[1])}</a> · <a href="${lang === 'en' ? IELTS_HUB_UZ : IELTS_HUB_EN}" hreflang="${lang === 'en' ? 'uz' : 'en'}" lang="${lang === 'en' ? 'uz' : 'en'}">${lang === 'en' ? 'IELTS o‘zbek tilida' : 'IELTS in English'}</a></p></section>
</div></main>`;
  return page({
    title: c.title, description: c.description, path, lang, body, ctaNext: '/writing', alternates: HUB_ALTERNATES, altLang: { lang: lang === 'en' ? 'uz' : 'en', path: lang === 'en' ? IELTS_HUB_UZ : IELTS_HUB_EN },
    jsonLd: [breadcrumbLd([{ name: c.home[0], path: c.home[1] }, { name: c.crumb, path }]),
      { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: c.inLang, mainEntity: c.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }],
  });
}
void SITE;

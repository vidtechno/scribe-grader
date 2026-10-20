// /learn-english-from-uzbek: an English-language introduction to the General English course FOR PEOPLE WHO SPEAK UZBEK
// (lessons are explained in Uzbek). It is not a general English course for everyone and has no hreflang pair: the Uzbek course hub
// (/ingliz-tili-darslari) is a different page, not a translation of this one. International IELTS learners are pointed to /ielts.
import { SITE, authHref, breadcrumbLd, ctaBox, esc, page } from './shell.js';
import { COURSE } from './data-course.js';
import { COURSE_BASE } from './course-pages.js';
import { EN_LANDING, GUIDE_BASE, WORDS_BASE } from './learn-pages.js';

const faqHtml = (faq: { q: string; a: string }[]) => faq.map(f => `<details class="faq"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('');
const faqLd = (faq: { q: string; a: string }[]) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: 'en', mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) });

export const EN_LANDING_FAQ = [
  { q: 'Do I need to speak Uzbek to use this course?', a: 'Yes, in practice. Every explanation is written in Uzbek and compared with Uzbek grammar; only the examples, exercises and audio are in English. If you do not speak Uzbek, this is not the right course for you.' },
  { q: 'Can I learn English from zero in Uzbek?', a: 'Yes. There is a full beginner course for Uzbek speakers: explanations in Uzbek, examples and exercises in English, and audio for every word.' },
  { q: 'Is the course free?', a: 'Every new account gets a 7-day free trial of the Learn course. After that you can continue with a paid plan, paid in Uzbek sums.' },
  { q: 'Which levels are available?', a: 'Beginner, Elementary (A1), Pre-Intermediate (A2) and Intermediate (B1), with unit tests and a placement test if you already know some English.' },
  { q: 'Does it work on a phone?', a: 'Yes. Lessons run in the browser on any phone or computer, and there is a Telegram bot with reminders and a Mini App.' },
  { q: 'Is this IELTS preparation?', a: 'No. This course teaches general English. IELTS practice (Writing and Speaking with AI-estimated bands, Reading and Listening tests) is a separate part of Scorify.uz, with its own page in English and in Uzbek.' },
];

export function englishLanding(): string {
  const total = COURSE.reduce((n, l) => n + l.units.reduce((m, u) => m + u.lessons.length, 0), 0);
  const body = `<section class="hero"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / English course with Uzbek explanations</nav><span class="eyebrow">For people who speak Uzbek</span><h1>English course with Uzbek explanations</h1>
<p class="lead">${total} short lessons that teach English from zero to B1 in Uzbek: explanations in your own language, English examples, audio, exercises, unit tests and spaced repetition. Start with a 7-day free trial.</p>
<p style="display:flex;flex-wrap:wrap;gap:12px;margin:20px 0 0"><a class="btn" href="${esc(authHref('/learn'))}">Start the free trial →</a><a class="btn ghost" href="${COURSE_BASE}">See the lessons (in Uzbek) →</a></p></div></section>
<main class="page"><div class="wrap">
<aside class="box tip"><p><b>Preparing for IELTS and you do not speak Uzbek?</b> This course is taught in Uzbek, so it is not for you. Go to the <a href="/ielts">IELTS practice hub</a> instead: Writing and Speaking with AI-estimated bands, Reading and Listening tests, sample answers and a band score calculator, all in English.</p></aside>
<section class="section"><h2>Who this course is for</h2><p>It is made for learners whose first language is Uzbek and who want to learn English step by step. Grammar is explained in Uzbek and compared with Uzbek, so the typical mistakes of Uzbek speakers are covered before you make them. The lesson pages and the course hub are in Uzbek.</p></section>
<section class="section"><h2>What you get</h2><ul>
<li><b>Uzbek explanations:</b> grammar and vocabulary are explained in Uzbek; examples and exercises are in English.</li>
<li><b>Pronunciation:</b> every word and sentence has audio and IPA.</li>
<li><b>Short daily lessons:</b> 10–15 minutes a day, with streaks, XP and reminders in Telegram.</li>
<li><b>Tests and review:</b> unit tests, a placement test and spaced repetition of words.</li></ul></section>
<section class="section"><h2>Course levels</h2><div class="grid">${COURSE.map(l => `<a class="card" href="${COURSE_BASE}/${l.slug}"><div class="body"><h3>${esc(l.title)} · ${esc(l.cefr)}</h3><p>${l.units.reduce((m, u) => m + u.lessons.length, 0)} lessons · ${l.units.length} units</p></div></a>`).join('')}</div></section>
<section class="section"><h2>Free study material in Uzbek</h2><ul><li><a href="${GUIDE_BASE}">English grammar rules explained in Uzbek</a></li><li><a href="${WORDS_BASE}">English vocabulary by topic with Uzbek translation and pronunciation</a></li><li><a href="${COURSE_BASE}">All English lessons (in Uzbek)</a></li></ul></section>
<section class="section"><h2>IELTS practice is separate</h2><p>Scorify.uz also has IELTS practice for learners worldwide. See the <a href="/ielts">IELTS hub (English)</a> or <a href="/uz/ielts" hreflang="uz" lang="uz">IELTS o‘zbek tilida</a>.</p></section>
${ctaBox('Start learning English in Uzbek', 'Create an account with Google or Telegram and open your first lesson.', authHref('/learn'), 'Start the free trial')}
<section class="section"><h2>Frequently asked questions</h2>${faqHtml(EN_LANDING_FAQ)}</section>
</div></main>`;
  return page({
    title: 'English Course with Uzbek Explanations | Scorify.uz',
    description: `English course for Uzbek speakers: ${total} lessons from Beginner to Intermediate (B1) explained in Uzbek, with audio, exercises and tests. 7-day free trial.`,
    path: EN_LANDING, lang: 'en', body, ctaNext: '/learn',
    jsonLd: [breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'English course with Uzbek explanations', path: EN_LANDING }]), faqLd(EN_LANDING_FAQ),
      { '@context': 'https://schema.org', '@type': 'Course', name: 'English course for Uzbek speakers', description: 'English from zero to B1, explained in Uzbek.', inLanguage: 'uz', provider: { '@type': 'Organization', name: 'Scorify.uz', url: SITE }, educationalLevel: 'Beginner to B1' }],
  });
}

// Public search pages for IELTS Reading and Listening practice, and the human-readable site map.
import { SITE, authHref, breadcrumbLd, ctaBox, esc, page } from './shell.js';
import { COURSE_BASE } from './course-pages.js';
import { GUIDE_BASE, WORDS_BASE } from './learn-pages.js';
import { GUIDES } from './data-learn-guides.js';
import { WORD_TOPICS } from './data-learn-words.js';
import { PART1 } from './data-part1.js';
import { PART3 } from './data-part3.js';
import { CUE_CARDS } from './data-part2.js';
import { TASK1 } from './data-task1.js';
import { TASK2 } from './data-task2.js';
import { VOCAB } from './data-vocab.js';
import { COURSE } from './data-course.js';
import { listPosts } from './posts.js';

const faqLd = (faq: { q: string; a: string }[]) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) });
const faqHtml = (faq: { q: string; a: string }[]) => faq.map(f => `<details class="faq"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('');
const hero = (eyebrow: string, h1: string, lead: string, crumb: string, underIelts = true) =>
  `<section class="hero"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / ${underIelts ? '<a href="/ielts">IELTS</a> / ' : ''}${esc(crumb)}</nav><span class="eyebrow">${esc(eyebrow)}</span><h1>${esc(h1)}</h1><p class="lead">${esc(lead)}</p></div></section>`;
const table = (head: string[], rows: string[][]) =>
  `<div class="table-scroll"><table class="data"><thead><tr>${head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`)).join('')}</tr>`).join('')}</tbody></table></div>`;

/** Raw score (out of 40) to estimated band, same tables as the practice tests in the app. Real test tables vary a little. */
const READING_BANDS: [string, string][] = [['39–40', '9'], ['37–38', '8.5'], ['35–36', '8'], ['33–34', '7.5'], ['30–32', '7'], ['27–29', '6.5'], ['23–26', '6'], ['19–22', '5.5'], ['15–18', '5'], ['13–14', '4.5'], ['10–12', '4']];
const LISTENING_BANDS: [string, string][] = [['39–40', '9'], ['37–38', '8.5'], ['35–36', '8'], ['32–34', '7.5'], ['30–31', '7'], ['26–29', '6.5'], ['23–25', '6'], ['18–22', '5.5'], ['16–17', '5'], ['13–15', '4.5'], ['10–12', '4']];

const READING_TYPES: string[][] = [
  ['Multiple choice', 'Pick the best answer (or answers) from A–D.', 'Read the question first, then find the paragraph. Wrong options are often half true.'],
  ['True / False / Not Given', 'Decide if a statement agrees with, contradicts or is not covered by the text.', '"Not Given" means the text says nothing about it, not that you disagree.'],
  ['Yes / No / Not Given', 'The same idea, but about the writer\'s opinion or claims.', 'Look for opinion words (should, believes, unlikely) and do not use your own view.'],
  ['Matching headings', 'Choose a heading for each paragraph.', 'Match the main idea of the whole paragraph, not one keyword. Do the easy ones first.'],
  ['Matching information', 'Say which paragraph contains a detail.', 'The details are paraphrased; paragraphs can be used more than once.'],
  ['Matching features', 'Match statements to people, places or theories.', 'Underline the names in the text first.'],
  ['Matching sentence endings', 'Finish each sentence with the right ending.', 'Check grammar first, then meaning.'],
  ['Sentence / summary / note / table completion', 'Fill gaps using words from the text.', 'Obey the word limit exactly and copy the spelling from the passage.'],
  ['Diagram label completion', 'Label a diagram using words from the text.', 'Find the part of the text that describes the process, then follow it step by step.'],
  ['Short-answer questions', 'Answer with a few words from the text.', 'Questions follow the order of the text, so use that to find the answer faster.'],
];
const LISTENING_TYPES: string[][] = [
  ['Form / note / table / flow-chart completion', 'Fill gaps while you listen.', 'Read the gaps in advance and predict the type of word (a number, a name, a place).'],
  ['Multiple choice', 'Choose the right option from A–C.', 'Speakers often mention all options; the answer is the one that matches the final meaning.'],
  ['Matching', 'Match speakers or items to a list.', 'The order of the audio usually follows the order of the list.'],
  ['Plan / map / diagram labelling', 'Label places on a map or parts of a diagram.', 'Note direction words (opposite, next to, behind) and follow the speaker from the entrance.'],
  ['Sentence completion', 'Finish sentences with words you hear.', 'Check the word limit and write the exact word you hear, spelled correctly.'],
  ['Short-answer questions', 'Answer with a word, a number or a short phrase.', 'Listen for the answer right after the question words you have underlined.'],
];

export function readingPage(): string {
  const faq = [
    { q: 'How many questions and how much time are there in IELTS Reading?', a: 'There are 3 passages and 40 questions, and you have 60 minutes. On the paper test there is no extra time to copy answers, so write them on the answer sheet as you go.' },
    { q: 'Is there negative marking in IELTS Reading?', a: 'No. A wrong answer does not lose marks, so answer every question, even if you have to guess.' },
    { q: 'How is the IELTS Reading band score calculated?', a: 'Each correct answer is one raw mark out of 40. The raw score is converted to a band from 1 to 9 with a table that differs a little between tests, and between Academic and General Training. The table on this page is an estimate for practice.' },
    { q: 'What raw score do I need for Band 7 in IELTS Reading?', a: 'In the Academic estimate used here, about 30 correct answers out of 40 give Band 7. Real tests can differ by a mark or so.' },
    { q: 'Are the Scorify Reading tests free?', a: 'Tests 1 to 3 are free with a free account. The IELTS plan unlocks all tests with unlimited practice. Every test has 3 passages, 40 questions, a 60-minute timer, an estimated band and a review of each answer.' },
  ];
  const body = `${hero('IELTS Academic Reading', 'IELTS Reading practice: question types, band score table and free tests', 'Practise full Reading tests with 3 passages and 40 questions in 60 minutes, learn how every question type works and see what your raw score is worth.', 'IELTS Reading practice')}
<main class="page"><div class="wrap narrow">
<section class="section"><h2>IELTS Reading format at a glance</h2>
<div class="grid"><div class="card"><div class="body"><h3>3 passages</h3><p>Texts from books, journals and newspapers, written for a general audience. They get harder from Passage 1 to Passage 3.</p></div></div>
<div class="card"><div class="body"><h3>40 questions</h3><p>One mark each. A mix of the question types below, often several types per passage.</p></div></div>
<div class="card"><div class="body"><h3>60 minutes</h3><p>About 20 minutes per passage. There is no extra time to transfer answers on the paper test.</p></div></div></div></section>
<section class="section"><h2>IELTS Reading question types and how to approach them</h2>${table(['Question type', 'What you do', 'Quick tip'], READING_TYPES)}
<p>Step-by-step methods: <a href="/blog/ielts-reading-true-false-not-given-strategy">True / False / Not Given</a> and <a href="/blog/ielts-reading-matching-headings-strategy">Matching headings</a>.</p></section>
<section class="section"><h2>IELTS Reading band score table (estimate)</h2><p>Use this table to estimate your band from the number of correct answers out of 40. Official conversion tables vary slightly from test to test, so treat the result as a guide, not a prediction.</p>${table(['Correct answers (out of 40)', 'Estimated band'], READING_BANDS.map(([a, b]) => [a, b]))}
<p>Want the overall score? Use the <a href="/ielts-band-score-calculator">IELTS band score calculator</a> with all four skills.</p></section>
<section class="section"><h2>How to practise IELTS Reading well</h2><ul>
<li><b>Time yourself.</b> Do one full test under exam conditions, then practise single passages with a 20-minute timer.</li>
<li><b>Review every wrong answer.</b> Find the sentence that proves the answer and note why you missed it: vocabulary, paraphrase or timing.</li>
<li><b>Track question types.</b> If you lose most marks on one type, practise that type alone for a week.</li>
<li><b>Build topic vocabulary.</b> Read about science, history, society and the environment; see <a href="/ielts-vocabulary">IELTS vocabulary by topic</a>.</li></ul></section>
${ctaBox('Try a free IELTS Reading test', 'Full tests with 3 passages, 40 questions and a 60-minute timer. You get an estimated band, accuracy by question type and a review of every answer. Tests 1 to 3 are free.', authHref('/reading'), 'Start a free test')}
<section class="section"><h2>IELTS Reading FAQ</h2>${faqHtml(faq)}</section>
<section class="section"><h2>Keep going</h2><div class="grid"><a class="card" href="/ielts"><div class="body"><h3>IELTS practice hub</h3><p>Writing, Speaking, Reading and Listening in one place.</p></div></a><a class="card" href="/ielts-listening-practice"><div class="body"><h3>IELTS Listening practice</h3><p>Four sections, 40 questions and a band score table.</p></div></a><a class="card" href="/ielts-writing-task-2-questions"><div class="body"><h3>Writing Task 2 questions</h3><p>Questions with plans and model essays.</p></div></a><a class="card" href="/ielts-speaking-part-2"><div class="body"><h3>Speaking Part 2 cue cards</h3><p>Model answers and vocabulary.</p></div></a></div></section>
</div></main>`;
  return page({
    title: 'IELTS Reading Practice: Question Types and Band Table | Scorify.uz', path: '/ielts-reading-practice', body,
    description: 'Free IELTS Reading practice: 3 passages, 40 questions, 60 minutes. Every question type explained, raw score to band table and a review of each answer.',
    jsonLd: [breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'IELTS', path: '/ielts' }, { name: 'IELTS Reading practice', path: '/ielts-reading-practice' }]), faqLd(faq)],
  });
}

export function listeningPage(): string {
  const faq = [
    { q: 'How long is the IELTS Listening test?', a: 'The audio lasts about 30 minutes and has 4 sections with 40 questions in total. On the paper test you get 10 extra minutes to copy your answers; on the computer you get 2 minutes to check them. Confirm the details with your test centre.' },
    { q: 'Is the audio played more than once?', a: 'No. In the real test each recording is played once, so you must answer while you listen. Practice mode in our tests lets you replay, exam mode plays each section once.' },
    { q: 'Does spelling matter in IELTS Listening?', a: 'Yes. A misspelt word is marked wrong. Singular and plural forms and numbers must be exact too, and both British and American spelling are accepted.' },
    { q: 'How is the IELTS Listening band score calculated?', a: 'Each correct answer is one mark out of 40, converted to a band from 1 to 9. The table on this page is an estimate; real conversion tables can differ by a mark.' },
    { q: 'Are the Scorify Listening tests free?', a: 'Tests 1 to 3 are free with a free account. The IELTS plan unlocks all tests with unlimited practice. Each test has 4 sections, 40 questions, audio, a transcript and an estimated band.' },
  ];
  const body = `${hero('IELTS Listening', 'IELTS Listening practice: sections, question types and band score table', 'Practise full Listening tests with 4 sections and 40 questions, learn what each section tests and see what your raw score is worth.', 'IELTS Listening practice')}
<main class="page"><div class="wrap narrow">
<section class="section"><h2>The four sections of IELTS Listening</h2>${table(['Section', 'What you hear', 'Typical tasks'], [
    ['Section 1', 'A conversation between two people in an everyday situation (booking, enquiry).', 'Form or note completion, names, numbers, addresses.'],
    ['Section 2', 'A monologue in an everyday setting (a tour, a talk about a facility).', 'Multiple choice, map or plan labelling.'],
    ['Section 3', 'A conversation of up to four speakers in an education setting (students and a tutor).', 'Multiple choice, matching, sentence completion.'],
    ['Section 4', 'An academic lecture or talk by one speaker.', 'Note, summary or table completion.'],
  ])}</section>
<section class="section"><h2>IELTS Listening question types and tips</h2>${table(['Question type', 'What you do', 'Quick tip'], LISTENING_TYPES)}
<p>More advice: <a href="/blog/ielts-listening-12-tips-and-common-traps">12 IELTS Listening tips and common traps</a>.</p></section>
<section class="section"><h2>IELTS Listening band score table (estimate)</h2><p>Estimate your band from the number of correct answers out of 40. Official tables vary slightly between tests, so use this as a practice guide.</p>${table(['Correct answers (out of 40)', 'Estimated band'], LISTENING_BANDS.map(([a, b]) => [a, b]))}
<p>See the <a href="/ielts-reading-practice">Reading band table</a> too, and work out your overall score with the <a href="/ielts-band-score-calculator">band score calculator</a>.</p></section>
<section class="section"><h2>How to improve your IELTS Listening score</h2><ul>
<li><b>Read the questions before the audio starts.</b> Underline key words and predict the kind of answer you need.</li>
<li><b>Practise with exam rules.</b> Listen once, write answers as you hear them and check spelling afterwards.</li>
<li><b>Read the transcript after each test.</b> Find every missed answer in the text and note the distractor that fooled you.</li>
<li><b>Train numbers and names.</b> Dates, prices, phone numbers and spelled names appear in almost every test.</li></ul></section>
${ctaBox('Try a free IELTS Listening test', 'Full tests with 4 sections, 40 questions and audio. Exam mode plays each recording once; practice mode lets you replay. You get an estimated band, a transcript and a review of every answer. Tests 1 to 3 are free.', authHref('/listening'), 'Start a free test')}
<section class="section"><h2>IELTS Listening FAQ</h2>${faqHtml(faq)}</section>
<section class="section"><h2>Keep going</h2><div class="grid"><a class="card" href="/ielts"><div class="body"><h3>IELTS practice hub</h3><p>Writing, Speaking, Reading and Listening in one place.</p></div></a><a class="card" href="/ielts-reading-practice"><div class="body"><h3>IELTS Reading practice</h3><p>Question types and a band score table.</p></div></a><a class="card" href="/ielts-speaking-part-1"><div class="body"><h3>Speaking Part 1 topics</h3><p>Model answers for everyday questions.</p></div></a><a class="card" href="/ielts-vocabulary"><div class="body"><h3>IELTS vocabulary by topic</h3><p>Word lists with examples.</p></div></a></div></section>
</div></main>`;
  return page({
    title: 'IELTS Listening Practice: Sections, Tips and Band Table | Scorify.uz', path: '/ielts-listening-practice', body,
    description: 'Free IELTS Listening practice: 4 sections, 40 questions with audio. Question types explained, raw score to band table and a transcript review.',
    jsonLd: [breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'IELTS', path: '/ielts' }, { name: 'IELTS Listening practice', path: '/ielts-listening-practice' }]), faqLd(faq)],
  });
}

/** Every public page in one place: helps visitors find things and gives crawlers a short path to each section. */
export async function siteMapPage(): Promise<string> {
  const list = (items: [string, string][]) => `<ul class="vocab cols2">${items.map(([h, t]) => `<li><a href="${esc(h)}">${esc(t)}</a></li>`).join('')}</ul>`;
  let posts: { slug: string; title: string; lang: string }[] = [];
  try { posts = await listPosts(); } catch { /* the blog is optional here */ }
  const sec = (title: string, href: string, items: [string, string][]) => `<section class="section"><h2><a href="${href}">${esc(title)}</a></h2>${list(items)}</section>`;
  const body = `${hero('Site map', 'All Scorify.uz pages: English course and IELTS practice', 'Every lesson, grammar guide, word list and IELTS practice page in one place.', 'Site map', false)}
<main class="page"><div class="wrap">
${sec('English course (in Uzbek)', COURSE_BASE, COURSE.map(l => [`${COURSE_BASE}/${l.slug}`, `${l.title} ${l.cefr}`] as [string, string]))}
${sec('Grammar rules', GUIDE_BASE, GUIDES.map(g => [`${GUIDE_BASE}/${g.slug}`, g.h1] as [string, string]))}
${sec('English words by topic', WORDS_BASE, WORD_TOPICS.map(t => [`${WORDS_BASE}/${t.slug}`, t.h1] as [string, string]))}
${sec('IELTS Speaking Part 1 topics', '/ielts-speaking-part-1', PART1.map(t => [`/ielts-speaking-part-1/${t.slug}`, t.title] as [string, string]))}
${sec('IELTS Speaking Part 2 cue cards', '/ielts-speaking-part-2', CUE_CARDS.map(t => [`/ielts-speaking-part-2/${t.slug}`, t.title] as [string, string]))}
${sec('IELTS Speaking Part 3 topics', '/ielts-speaking-part-3', PART3.map(t => [`/ielts-speaking-part-3/${t.slug}`, t.title] as [string, string]))}
${sec('IELTS Writing Task 2 questions', '/ielts-writing-task-2-questions', TASK2.map(t => [`/ielts-writing-task-2-questions/${t.slug}`, t.title] as [string, string]))}
${sec('IELTS Writing Task 1 samples', '/ielts-writing-task-1-samples', TASK1.map(t => [`/ielts-writing-task-1-samples/${t.slug}`, t.title] as [string, string]))}
${sec('IELTS vocabulary', '/ielts-vocabulary', VOCAB.map(t => [`/ielts-vocabulary/${t.slug}`, t.title] as [string, string]))}
${sec('IELTS tools and practice', '/ielts-reading-practice', [['/ielts', 'IELTS practice hub (English)'], ['/uz/ielts', 'IELTS o‘zbek tilida (Uzbek IELTS hub)'], ['/ielts-reading-practice', 'IELTS Reading practice'], ['/ielts-listening-practice', 'IELTS Listening practice'], ['/ielts-band-score-calculator', 'IELTS band score calculator'], ['/ielts-speaking-practice', 'IELTS Speaking practice'], ['/ielts-writing-task-2', 'IELTS Writing Task 2 guide'], ['/ielts-writing-task-1', 'IELTS Writing Task 1 guide']])}
${posts.some(p => p.lang === 'en') ? sec('Blog: articles in English', '/blog', posts.filter(p => p.lang === 'en').map(p => [`/blog/${p.slug}`, p.title] as [string, string])) : ''}
${posts.some(p => p.lang === 'uz') ? sec('Blog: maqolalar o‘zbek tilida', '/uz/blog', posts.filter(p => p.lang === 'uz').map(p => [`/blog/${p.slug}`, p.title] as [string, string])) : ''}
</div></main>`;
  return page({
    title: 'Site Map: English Course and IELTS Practice | Scorify.uz', path: '/sitemap', body,
    description: 'All Scorify.uz pages in one place: English lessons in Uzbek, grammar rules, word lists, IELTS Speaking, Writing, Reading and Listening practice, and the blog.',
    jsonLd: [breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Site map', path: '/sitemap' }])],
  });
}
export const PRACTICE_URLS = ['/ielts-reading-practice', '/ielts-listening-practice', '/sitemap'];
void SITE;

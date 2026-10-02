import type { IncomingMessage, ServerResponse } from 'node:http';
import { SITE, breadcrumbLd, ctaBox, esc, notFoundPage, page, send } from './_lib/shell.js';
import { PART1 } from './_lib/data-part1.js';
import { CUE_CARDS } from './_lib/data-part2.js';
import { TASK2 } from './_lib/data-task2.js';
import type { CueCard, Part1Topic, Task2Question, Vocab } from './_lib/types.js';

const wc = (paras: string[]) => paras.join(' ').split(/\s+/).filter(Boolean).length;
const vocabList = (v: Vocab[]) => `<ul class="vocab">${v.map(([w, m]) => `<li><b>${esc(w)}</b> — ${esc(m)}</li>`).join('')}</ul>`;
const bullets = (items: string[]) => `<ul>${items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`;
const faqLd = (faq: { q: string; a: string }[]) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) });
const faqHtml = (faq: { q: string; a: string }[]) => faq.map(f => `<details class="faq"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('');
const hero = (eyebrow: string, h1: string, lead: string, crumbs: string) => `<section class="hero"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb">${crumbs}</nav><span class="eyebrow">${esc(eyebrow)}</span><h1>${esc(h1)}</h1><p class="lead">${esc(lead)}</p></div></section>`;
const article = (ld: unknown, title: string, desc: string) => ({ '@context': 'https://schema.org', '@type': 'Article', headline: title, description: desc, inLanguage: 'en', author: { '@type': 'Organization', name: 'Scorify.uz' }, publisher: { '@type': 'Organization', name: 'Scorify.uz', logo: { '@type': 'ImageObject', url: `${SITE}/logo.png` } }, ...(ld as object) });
const link = (base: string, slug: string, text: string) => `<a class="card" href="${base}/${slug}"><div class="body"><h3>${esc(text)}</h3></div></a>`;

/* ---------- Speaking Part 1 ---------- */
function part1Hub() {
  const body = `${hero('IELTS Speaking Part 1', 'IELTS Speaking Part 1 topics with sample answers', 'Common Part 1 questions on everyday topics, with natural model answers, useful vocabulary and tips you can use today.', '<a href="/">Home</a> / Speaking Part 1')}
<main class="page"><div class="wrap"><div class="grid">${PART1.map(t => `<a class="card" href="/ielts-speaking-part-1/${t.slug}"><div class="body"><h3>${esc(t.title)}</h3><p>${esc(t.intro)}</p></div></a>`).join('')}</div>
<section class="section"><h2>How Part 1 works</h2><p>Part 1 lasts four to five minutes. The examiner asks about familiar topics such as your home, work or hobbies. Answer directly in two or three sentences, add a reason or short example, and keep a natural pace. Long speeches are not needed.</p></section>${ctaBox('Practise Part 1 out loud', 'Record your answer and get a fluency, vocabulary, grammar and pronunciation score from AI.', '/auth', 'Practise speaking')}</div></main>`;
  return page({ title: 'IELTS Speaking Part 1 Topics and Sample Answers | Scorify.uz', description: `${PART1.length} common IELTS Speaking Part 1 topics with model answers, vocabulary and examiner-style tips. Practise with instant AI feedback.`, path: '/ielts-speaking-part-1', body, jsonLd: [breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Speaking Part 1', path: '/ielts-speaking-part-1' }])] });
}
function part1Page(t: Part1Topic) {
  const path = `/ielts-speaking-part-1/${t.slug}`;
  const others = PART1.filter(x => x.slug !== t.slug).slice(0, 6);
  const title = `IELTS Speaking Part 1: ${t.title} – Questions & Sample Answers`;
  const desc = `Common IELTS Speaking Part 1 questions about ${t.title.toLowerCase()} with natural band 7 sample answers, vocabulary and tips.`;
  const body = `${hero('IELTS Speaking Part 1', `${t.title}: IELTS Speaking Part 1 questions and answers`, t.intro, `<a href="/">Home</a> / <a href="/ielts-speaking-part-1">Speaking Part 1</a> / ${esc(t.title)}`)}
<main class="page"><div class="narrow">
<section><h2>Questions and sample answers</h2>${t.qa.map(x => `<div class="qa"><h3>${esc(x.q)}</h3><p>${esc(x.a)}</p></div>`).join('')}</section>
<section class="section"><h2>Useful vocabulary</h2>${vocabList(t.vocab)}</section>
<section class="section"><h2>Tips for this topic</h2>${bullets(t.tips)}</section>
${ctaBox(`Answer these ${t.title.toLowerCase()} questions yourself`, 'Record your own answers and get instant feedback on fluency, grammar, vocabulary and pronunciation.', '/auth', 'Practise speaking')}
<section class="section"><h2>More Part 1 topics</h2><div class="grid">${others.map(o => link('/ielts-speaking-part-1', o.slug, o.title)).join('')}</div></section>
</div></main>`;
  return page({ title: `${title} | Scorify.uz`, description: desc, path, body, ogType: 'article', jsonLd: [article({ mainEntityOfPage: SITE + path }, title, desc), faqLd(t.qa.slice(0, 5).map(x => ({ q: x.q, a: x.a }))), breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Speaking Part 1', path: '/ielts-speaking-part-1' }, { name: t.title, path }])] });
}

/* ---------- Speaking Part 2 ---------- */
function part2Hub() {
  const cats = [...new Set(CUE_CARDS.map(c => c.category))];
  const body = `${hero('IELTS Speaking Part 2', 'IELTS Speaking Part 2 cue cards with band 7 sample answers', 'Popular “Describe a…” topics with a model answer, key vocabulary and the Part 3 follow-up questions examiners often ask.', '<a href="/">Home</a> / Speaking Part 2')}
<main class="page"><div class="wrap">${cats.map(cat => `<section class="section"><h2>${esc(cat)}</h2><div class="grid">${CUE_CARDS.filter(c => c.category === cat).map(c => `<a class="card" href="/ielts-speaking-part-2/${c.slug}"><div class="body"><h3>${esc(c.title)}</h3><p>${esc(c.cue)}</p></div></a>`).join('')}</div></section>`).join('')}
<section class="section"><h2>How to answer a cue card</h2><p>You get one minute to prepare and then speak for up to two minutes. Use your minute to jot down keywords for each bullet point, start with a clear opening sentence and finish with a short reflection. Talking for the full two minutes matters: stopping early limits your fluency score.</p></section>
${ctaBox('Time yourself on a real cue card', 'Practise Part 2 with a timer, record your answer and get a band estimate.', '/auth', 'Practise Part 2')}</div></main>`;
  return page({ title: 'IELTS Speaking Part 2 Cue Cards and Sample Answers | Scorify.uz', description: `${CUE_CARDS.length} IELTS Speaking Part 2 cue cards with band 7 sample answers, vocabulary and Part 3 questions. Practise free with AI feedback.`, path: '/ielts-speaking-part-2', body, jsonLd: [breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Speaking Part 2', path: '/ielts-speaking-part-2' }])] });
}
function part2Page(c: CueCard) {
  const path = `/ielts-speaking-part-2/${c.slug}`;
  const others = CUE_CARDS.filter(x => x.slug !== c.slug && x.category === c.category).concat(CUE_CARDS.filter(x => x.slug !== c.slug && x.category !== c.category)).slice(0, 6);
  const title = `IELTS Speaking Part 2: ${c.title} – Sample Answer`;
  const desc = `Band 7 sample answer for the IELTS Speaking Part 2 cue card “${c.title}”, with vocabulary, tips and Part 3 follow-up questions.`;
  const body = `${hero('IELTS Speaking Part 2', `${c.title}: IELTS Speaking Part 2 sample answer`, c.cue, `<a href="/">Home</a> / <a href="/ielts-speaking-part-2">Speaking Part 2</a> / ${esc(c.title)}`)}
<main class="page"><div class="narrow">
<section><h2>The cue card</h2><div class="box tip"><p><strong>${esc(c.cue)}</strong></p><p>You should say:</p>${bullets(c.points)}</div></section>
<section class="section"><h2>Band 7 sample answer</h2><div class="prose">${c.sample.map(p => `<p>${esc(p)}</p>`).join('')}</div><p style="color:#64748b;font-size:.9rem">About ${wc(c.sample)} words, roughly ${Math.max(1, Math.round(wc(c.sample) / 130))} minutes of natural speech.</p></section>
<section class="section"><h2>Key vocabulary</h2>${vocabList(c.vocab)}</section>
<section class="section"><h2>Tips for this cue card</h2>${bullets(c.tips)}</section>
<section class="section"><h2>Part 3 follow-up questions</h2>${c.part3.map(x => `<div class="qa"><h3>${esc(x.q)}</h3><p><strong>Idea:</strong> ${esc(x.idea)}</p></div>`).join('')}</section>
${ctaBox('Now record your own answer', 'Speak for two minutes and get a fluency, grammar, vocabulary and pronunciation score with feedback.', '/auth', 'Practise this topic')}
<section class="section"><h2>More cue cards</h2><div class="grid">${others.map(o => link('/ielts-speaking-part-2', o.slug, o.title)).join('')}</div></section>
</div></main>`;
  return page({ title: `${title} | Scorify.uz`, description: desc, path, body, ogType: 'article', jsonLd: [article({ mainEntityOfPage: SITE + path }, title, desc), breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Speaking Part 2', path: '/ielts-speaking-part-2' }, { name: c.title, path }])] });
}

/* ---------- Writing Task 2 ---------- */
function task2Hub() {
  const cats = [...new Set(TASK2.map(c => c.category))];
  const body = `${hero('IELTS Writing Task 2', 'IELTS Writing Task 2 questions, outlines and band 7+ sample essays', 'Real-style essay questions grouped by topic, each with an analysis of the task, a clear plan, a full model essay and vocabulary.', '<a href="/">Home</a> / Writing Task 2 questions')}
<main class="page"><div class="wrap">${cats.map(cat => `<section class="section"><h2>${esc(cat)}</h2><div class="grid">${TASK2.filter(c => c.category === cat).map(c => `<a class="card" href="/ielts-writing-task-2-questions/${c.slug}"><div class="body"><div class="meta"><span>${esc(c.type)}</span></div><h3>${esc(c.title)}</h3><p>${esc(c.question)}</p></div></a>`).join('')}</div></section>`).join('')}
<section class="section"><h2>The five essay types</h2><ul><li><strong>Opinion:</strong> state clearly whether you agree or disagree and defend that position throughout.</li><li><strong>Discussion + opinion:</strong> explain both views fairly, then give your own.</li><li><strong>Problem and solution:</strong> describe the main problems, then suggest realistic solutions.</li><li><strong>Advantages and disadvantages:</strong> weigh both sides, then say which is stronger if asked.</li><li><strong>Two-part question:</strong> answer each question directly in its own paragraph.</li></ul></section>
${ctaBox('Write your own essay and get a band score', 'Pick a question, write for 40 minutes and receive criterion scores and corrections from AI.', '/auth', 'Practise Writing')}</div></main>`;
  return page({ title: 'IELTS Writing Task 2 Questions, Outlines and Sample Essays | Scorify.uz', description: `${TASK2.length} IELTS Writing Task 2 questions with analysis, essay plans and full band 7+ sample answers. Practise free with AI feedback.`, path: '/ielts-writing-task-2-questions', body, jsonLd: [breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Writing Task 2 questions', path: '/ielts-writing-task-2-questions' }])] });
}
function task2Page(q: Task2Question) {
  const path = `/ielts-writing-task-2-questions/${q.slug}`;
  const others = TASK2.filter(x => x.slug !== q.slug && (x.type === q.type || x.category === q.category)).slice(0, 6);
  const words = wc(q.sample);
  const title = `IELTS Writing Task 2: ${q.title} – Sample Essay & Plan`;
  const desc = `Band 7+ sample essay, plan and vocabulary for the IELTS Writing Task 2 question on ${q.title.toLowerCase()}. Includes analysis and common mistakes.`;
  const faq = [
    { q: `What type of essay is this IELTS Task 2 question?`, a: `It is a ${q.type.toLowerCase()} question. ${q.analysis}` },
    { q: 'How many words should the essay be?', a: 'Write at least 250 words. Most strong answers are 260–300 words, planned in about five minutes and completed in 40 minutes.' },
    { q: 'How many paragraphs should I write?', a: 'Four paragraphs work well: an introduction, two body paragraphs and a conclusion. Each body paragraph needs one main idea, an explanation and an example.' },
  ];
  const body = `${hero(`IELTS Writing Task 2 · ${q.type}`, `${q.title}: IELTS Writing Task 2 sample essay`, 'Analysis of the question, a step-by-step plan and a full model answer.', `<a href="/">Home</a> / <a href="/ielts-writing-task-2-questions">Writing Task 2 questions</a> / ${esc(q.title)}`)}
<main class="page"><div class="narrow">
<section><h2>The question</h2><div class="box tip"><p><strong>${esc(q.question)}</strong></p><p style="margin:0;color:#64748b;font-size:.9rem">Write at least 250 words.</p></div></section>
<section class="section"><h2>What the question asks</h2><p>${esc(q.analysis)}</p></section>
<section class="section"><h2>Essay plan</h2><ol>${q.outline.map(o => `<li><strong>${esc(o.heading)}:</strong> ${esc(o.text)}</li>`).join('')}</ol></section>
<section class="section"><h2>Band 7+ sample essay</h2><div class="box good prose">${q.sample.map(p => `<p>${esc(p)}</p>`).join('')}</div><p style="color:#64748b;font-size:.9rem">${words} words.</p></section>
<section class="section"><h2>Why this essay scores well</h2><ul><li><strong>Task Response:</strong> every part of the question is answered and the position stays consistent from the introduction to the conclusion.</li><li><strong>Coherence and Cohesion:</strong> each paragraph has one clear idea, linked with natural connectors rather than a list of memorised phrases.</li><li><strong>Lexical Resource:</strong> topic vocabulary is precise and varied, without forcing rare words.</li><li><strong>Grammatical Range and Accuracy:</strong> a mix of simple and complex sentences, with conditionals and relative clauses used accurately.</li></ul></section>
<section class="section"><h2>Useful vocabulary</h2>${vocabList(q.vocab)}</section>
<section class="section"><h2>Common mistakes on this question</h2>${bullets(q.mistakes)}</section>
${ctaBox('Write your own answer to this question', 'Get a band score, criterion feedback and corrections on your essay in seconds.', '/auth', 'Check my essay')}
<section class="section"><h2>Frequently asked questions</h2>${faqHtml(faq)}</section>
<section class="section"><h2>More Task 2 questions</h2><div class="grid">${others.map(o => link('/ielts-writing-task-2-questions', o.slug, o.title)).join('')}</div></section>
</div></main>`;
  return page({ title: `${title} | Scorify.uz`, description: desc, path, body, ogType: 'article', jsonLd: [article({ mainEntityOfPage: SITE + path, wordCount: words }, title, desc), faqLd(faq), breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Writing Task 2 questions', path: '/ielts-writing-task-2-questions' }, { name: q.title, path }])] });
}

/* ---------- Band score calculator ---------- */
function calculator() {
  const opts = Array.from({ length: 19 }, (_, i) => (i / 2).toFixed(1)).reverse().map(v => `<option value="${v}"${v === '6.5' ? ' selected' : ''}>${v}</option>`).join('');
  const faq = [
    { q: 'How is the IELTS overall band score calculated?', a: 'The overall band is the average of your Listening, Reading, Writing and Speaking scores, rounded to the nearest half band. An average ending in .25 rounds up to the next half band, and an average ending in .75 rounds up to the next whole band.' },
    { q: 'What is 6.75 rounded to in IELTS?', a: 'An average of 6.75 rounds up to an overall band 7.0.' },
    { q: 'What is 6.25 rounded to in IELTS?', a: 'An average of 6.25 rounds up to an overall band 6.5.' }
  ];
  const body = `${hero('Free tool', 'IELTS Band Score Calculator', 'Enter your four section scores to see your overall IELTS band, using the official rounding rule.', '<a href="/">Home</a> / Band score calculator')}
<main class="page"><div class="narrow"><section class="box"><div class="calc" id="calc">
<label>Listening<select id="l">${opts}</select></label><label>Reading<select id="r">${opts}</select></label><label>Writing<select id="w">${opts}</select></label><label>Speaking<select id="s">${opts}</select></label></div>
<p style="margin:24px 0 4px;color:#64748b">Your overall band</p><div class="result" id="out">6.5</div><p id="avg" style="color:#64748b;margin-top:8px"></p></section>
<script>(function(){var ids=['l','r','w','s'];function calc(){var t=0;ids.forEach(function(i){t+=parseFloat(document.getElementById(i).value)});var a=t/4;var f=Math.floor(a);var d=a-f;var b;if(d<0.25)b=f;else if(d<0.75)b=f+0.5;else b=f+1;document.getElementById('out').textContent=b.toFixed(1);document.getElementById('avg').textContent='Average of your four scores: '+a.toFixed(2)}ids.forEach(function(i){document.getElementById(i).addEventListener('change',calc)});calc()})()</script>
<section class="section"><h2>How the overall band is rounded</h2><ul><li>Average ending in <strong>.25</strong> rounds up to the next half band (6.25 → 6.5).</li><li>Average ending in <strong>.75</strong> rounds up to the next whole band (6.75 → 7.0).</li><li>Other averages round to the nearest half or whole band (6.125 → 6.0, 6.375 → 6.5).</li></ul></section>
<section class="section"><h2>Improve your Writing and Speaking scores</h2><p>Writing and Speaking are usually the hardest to raise without feedback. Scorify gives you an estimated band, criterion scores and corrections after every practice.</p></section>
${ctaBox()}<section class="section"><h2>Frequently asked questions</h2>${faqHtml(faq.slice(0, 3))}</section></div></main>`;
  return page({ title: 'IELTS Band Score Calculator – Overall Band | Scorify.uz', description: 'Free IELTS band score calculator. Enter your Listening, Reading, Writing and Speaking scores to get your overall band using the official rounding rule.', path: '/ielts-band-score-calculator', body, jsonLd: [faqLd(faq.slice(0, 3)), { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'IELTS Band Score Calculator', url: `${SITE}/ielts-band-score-calculator`, applicationCategory: 'EducationalApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } }, breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Band score calculator', path: '/ielts-band-score-calculator' }])] });
}

export default function handler(req: IncomingMessage, res: ServerResponse & { statusCode: number }) {
  try {
    const url = new URL(req.url || '/', SITE);
    const kind = url.searchParams.get('kind');
    const slug = url.searchParams.get('slug');
    if (kind === 'sp1') {
      if (!slug) return send(res, 200, part1Hub());
      const t = PART1.find(x => x.slug === slug); return t ? send(res, 200, part1Page(t)) : send(res, 404, notFoundPage());
    }
    if (kind === 'sp2') {
      if (!slug) return send(res, 200, part2Hub());
      const c = CUE_CARDS.find(x => x.slug === slug); return c ? send(res, 200, part2Page(c)) : send(res, 404, notFoundPage());
    }
    if (kind === 'wt2') {
      if (!slug) return send(res, 200, task2Hub());
      const q = TASK2.find(x => x.slug === slug); return q ? send(res, 200, task2Page(q)) : send(res, 404, notFoundPage());
    }
    if (kind === 'calc') return send(res, 200, calculator());
    return send(res, 404, notFoundPage());
  } catch (e) {
    console.error('seo render failed', e);
    return send(res, 500, '<!doctype html><title>Temporarily unavailable</title><p>Please try again shortly.</p>');
  }
}

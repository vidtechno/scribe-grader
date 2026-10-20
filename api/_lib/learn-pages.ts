import { SITE, authHref, breadcrumbLd, ctaBox, esc, page } from './shell.js';
import { COURSE } from './data-course.js';
import { COURSE_BASE } from './course-pages.js';
import { GUIDES, type Guide, type GuideSection } from './data-learn-guides.js';
import { WORD_TOPICS, type WordTopic } from './data-learn-words.js';
import { WORD_EXAMPLES } from './data-learn-words-ex.js';
import { AUDIO_VERSION, wordAudio } from './word-audio.js';

// Public SEO sections that feed the English course: Uzbek grammar guides (/ingliz-tili-qoidalari), Uzbek topic word
// lists (/inglizcha-sozlar) and an English-language landing page for people who search in English.

export const GUIDE_BASE = '/ingliz-tili-qoidalari';
export const WORDS_BASE = '/inglizcha-sozlar';
export const EN_LANDING = '/learn-english-from-uzbek';

const LEVEL_TITLE: Record<string, string> = { beginner: 'Beginner', elementary: 'Elementary (A1)', 'pre-intermediate': 'Pre-Intermediate (A2)', intermediate: 'Intermediate (B1)' };
const lessonHref = (l: [string, string]) => `${COURSE_BASE}/${l[0]}/${l[1]}`;
const lessonTitle = (l: [string, string]) => COURSE.find(x => x.slug === l[0])?.units.flatMap(u => u.lessons).find(x => x.slug === l[1])?.titleUz ?? '';
const lessonId = (l: [string, string]) => COURSE.find(x => x.slug === l[0])?.units.flatMap(u => u.lessons).find(x => x.slug === l[1])?.id;
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
  ctaBox(`${what} darsda mashqlar va audio bilan o'tang`, `«${lessonTitle(l)}» darsi: qisqa tushuntirish, talaffuz audiosi, mashqlar va yakuniy savollar. Ro'yxatdan o'ting va hoziroq boshlang.`, authHref(lessonId(l) ? `/learn/lesson/${lessonId(l)}` : '/learn'), 'Darsni boshlash');


/* ---------- topic word pages: audio buttons, example sentences and the mini-test ---------- */
/** Sign-up link that continues into the matching course lesson after login. */
export const lessonAuthHref = (l: [string, string]) => { const id = lessonId(l); return id ? authHref(`/learn/lesson/${id}`) : '/auth'; };
const wordsCta = (t: WordTopic) =>
  ctaBox(`Keyingi qadam: «${lessonTitle(t.lesson)}» darsi`, `Dars qisqa tushuntirish, talaffuz audiosi, mashqlar va yakuniy savollardan iborat. Ro'yxatdan o'tgan har bir yangi hisobga 7 kun bepul; kirganingizdan so'ng shu darsga qaytasiz.`, lessonAuthHref(t.lesson), 'Darsni boshlash');

const WL_CSS = `<style>
.wl-jump{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 20px;padding:0;list-style:none}.wl-jump a{display:inline-flex;align-items:center;min-height:40px;padding:6px 14px;border:1px solid var(--line,#e2e8f0);border-radius:999px;background:#fff;font-weight:600;font-size:.92rem;text-decoration:none}
.wl-play{min-width:44px;min-height:44px;margin:-6px 8px -6px 0;border-radius:50%;border:1px solid var(--line,#e2e8f0);background:#fff;cursor:pointer;font-size:15px;line-height:1;vertical-align:middle}.wl-play[aria-pressed=true]{background:#fff1f3;border-color:#e80b2d}
.wl-w{font-weight:700;vertical-align:middle}.wl-ex i{display:block;color:#64748b;font-size:.88rem}.wl-msg{color:#b91c1c;margin:0 0 8px;min-height:0}
.wl-quiz .wl-q{font-size:1.15rem;font-weight:700;margin:6px 0 12px}.wl-opt{display:block;width:100%;text-align:left;min-height:48px;margin:0 0 8px;padding:10px 14px;border:1px solid var(--line,#e2e8f0);border-radius:12px;background:#fff;font:inherit;cursor:pointer}
.wl-opt.ok{border-color:#16a34a;background:#f0fdf4}.wl-opt.bad{border-color:#dc2626;background:#fef2f2}.wl-fb p{margin:6px 0}.wl-actions{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0 0}
@media(max-width:640px){.wl-t thead{position:absolute;left:-9999px}.wl-t,.wl-t tbody,.wl-t tr,.wl-t th,.wl-t td{display:block;width:100%}.wl-t tr{border:1px solid var(--line,#e2e8f0);border-radius:12px;margin:0 0 10px;padding:8px 12px}.wl-t th,.wl-t td{border:0!important;padding:3px 0!important;background:none!important}.wl-t td[data-l]::before{content:attr(data-l) ": ";color:#64748b;font-size:.8rem}}
</style>`;

function wordTable(t: WordTopic, words: WordTopic['words']): string {
  const ex = WORD_EXAMPLES[t.slug];
  const head = `<thead><tr><th>Inglizcha</th><th>Talaffuz</th><th>O'zbekcha</th>${ex ? '<th>Gapda</th>' : ''}</tr></thead>`;
  const rows = words.map(([en, ipa, uz]) => {
    const key = wordAudio(en);
    const btn = key ? `<button type="button" class="wl-play" data-a="${key}" aria-label="${esc(en)} so'zini tinglash" aria-pressed="false" hidden>▶</button>` : '';
    const e = ex?.[en];
    return `<tr><th scope="row">${btn}<span class="wl-w">${esc(en)}</span></th><td data-l="Talaffuz">${esc(ipa)}</td><td data-l="O'zbekcha">${esc(uz)}</td>${ex ? `<td class="wl-ex">${e ? `${esc(e[0])}<i>${esc(e[1])}</i>` : ''}</td>` : ''}</tr>`;
  }).join('');
  return `<div class="table-scroll"><table class="data wl-t">${head}<tbody>${rows}</tbody></table></div>`;
}

/**
 * Mini-test built from the topic's own words. Questions are drawn at random in the browser (distractors come from the same
 * group, e.g. a weekday is never offered next to a month); words with a recording also give "listen and choose" questions.
 * After every answer: the right answer, the rule behind it and the word in a sentence. The end screen offers a retry of the
 * missed words and the matching course lesson.
 */
function quizSection(t: WordTopic): string {
  const ex = WORD_EXAMPLES[t.slug] ?? {};
  const sizes = t.groups?.length ? t.groups.map(g => g.n) : [t.words.length];
  const gOf: number[] = []; sizes.forEach((n, g) => { for (let i = 0; i < n; i++) gOf.push(g); });
  const words = t.words.map(([e, i, u], k) => ({ e, i, u, g: gOf[k] ?? 0, a: wordAudio(e) ?? '', s: ex[e] ?? null }));
  const n = Math.min(8, words.length);
  const next = t.related.map(s => WORD_TOPICS.find(x => x.slug === s)).find(Boolean);
  const data = JSON.stringify({ w: words, n, v: AUDIO_VERSION, why: t.quizWhy ?? '', c: { h: lessonAuthHref(t.lesson), t: `«${lessonTitle(t.lesson)}» darsiga o'tish` }, x: next ? { h: `${WORDS_BASE}/${next.slug}`, t: `Keyingi mavzu: ${next.h1}` } : null }).replace(/</g, '\\u003c').replace(/[\u2028\u2029]/g, ' ');
  return `<section class="section" id="mini-test"><h2>Mini-test: ${n} ta savol</h2>
<p>Savollar har safar boshqacha tushadi. Har bir javobdan keyin to'g'ri javob, qisqa izoh va so'z gapda ko'rsatiladi.</p>
<div class="box wl-quiz" id="mq"><p id="mq-prog" aria-live="polite" style="margin:0;color:#64748b"></p><p id="mq-text" class="wl-q" tabindex="-1">Testni boshlash uchun tugmani bosing.</p><div id="mq-opts" role="group" aria-label="Javob variantlari"></div><div id="mq-fb" class="wl-fb" role="status" aria-live="polite"></div><div class="wl-actions" id="mq-act"><button class="btn" id="mq-go" type="button">Testni boshlash</button></div></div>
<noscript><p>Mini-test ishlashi uchun brauzerda JavaScript yoqilgan bo'lishi kerak.</p></noscript>
<script type="application/json" id="mq-data">${data}</script>
<script>(function(){var D=JSON.parse(document.getElementById('mq-data').textContent),W=D.w,$=function(i){return document.getElementById(i)};
var prog=$('mq-prog'),txt=$('mq-text'),opts=$('mq-opts'),fb=$('mq-fb'),act=$('mq-act'),go=$('mq-go'),Q=[],qi=0,sc=0,missed=[],locked=false,au=null;
function sh(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),x=a[i];a[i]=a[j];a[j]=x}return a}
function el(tag,cls,t){var e=document.createElement(tag);if(cls)e.className=cls;if(t!=null)e.textContent=t;return e}
function speak(key){try{if(au)au.pause();au=new Audio('/audio/'+key+'.mp3?v='+D.v);var p=au.play();if(p&&p.catch)p.catch(bad)}catch(e){bad()}}
function bad(){var m=$('wl-audio-msg');if(m)m.textContent='Audio hozir yuklanmadi. Tarmoqni tekshirib, qayta urinib ko‘ring.'}
function build(ids){return ids.map(function(i,k){var w=W[i],pool=[];W.forEach(function(x,j){if(j!==i&&x.g===w.g)pool.push(j)});if(pool.length<3)W.forEach(function(x,j){if(j!==i&&pool.indexOf(j)<0&&pool.length<6)pool.push(j)});return{i:i,o:sh([i].concat(sh(pool).slice(0,3))),l:!!w.a&&k%2===1}})}
function start(ids){Q=build(ids);qi=0;sc=0;missed=[];show()}
function clear(){opts.textContent='';fb.textContent='';act.textContent='';locked=false}
function show(){clear();var q=Q[qi],w=W[q.i];prog.textContent='Savol '+(qi+1)+' / '+Q.length;
if(q.l){txt.textContent='Eshiting va to‘g‘ri so‘zni tanlang.';var b=el('button','btn ghost','▶ Eshitish');b.type='button';b.onclick=function(){speak(w.a)};act.appendChild(b)}else{txt.textContent='«'+w.u+'» inglizcha qanday?'}
q.o.forEach(function(j){var b=el('button','wl-opt',W[j].e);b.type='button';b.onclick=function(){pick(q,j,b)};opts.appendChild(b)});txt.focus()}
function pick(q,j,b){if(locked)return;locked=true;var w=W[q.i],ok=j===q.i,k=0;
Array.prototype.forEach.call(opts.children,function(c,n){if(q.o[n]===q.i){c.className='wl-opt ok';c.textContent=W[q.i].e+' ✓'}});
if(!ok){b.className='wl-opt bad';b.textContent=W[j].e+' ✗';missed.push(q.i)}else sc++;
fb.textContent='';fb.appendChild(el('p',null,(ok?'To‘g‘ri! ':'Noto‘g‘ri. ')+'To‘g‘ri javob: '+w.e+' '+w.i+' — '+w.u+'.'));
if(!ok&&D.why)fb.appendChild(el('p',null,'Eslab qoling: '+D.why));
if(w.s){var p=el('p',null,'Gapda: '+w.s[0]+' — '+w.s[1]);fb.appendChild(p)}
act.textContent='';if(w.a){var l=el('button','btn ghost','▶ '+w.e);l.type='button';l.setAttribute('aria-label',w.e+' so‘zini tinglash');l.onclick=function(){speak(w.a)};act.appendChild(l)}
var n=el('button','btn',qi+1>=Q.length?'Natijani ko‘rish':'Keyingi savol');n.type='button';n.onclick=function(){qi++;qi>=Q.length?end():show()};act.appendChild(n);n.focus()}
function end(){clear();prog.textContent='Natija';txt.textContent=sc+' / '+Q.length+(sc===Q.length?'. Hammasi to‘g‘ri!':sc>=Q.length-2?'. Yaxshi natija.':'. Yana mashq qiling.');
if(missed.length){var m=el('p',null,'Xato qilingan so‘zlar: '+missed.map(function(i){return W[i].e+' ('+W[i].u+')'}).join(', ')+'.');fb.appendChild(m);var r=el('button','btn','Xatolarni qayta mashq qilish');r.type='button';r.onclick=function(){start(missed.slice())};act.appendChild(r)}
var a=el('button','btn ghost','Yangi test');a.type='button';a.onclick=function(){start(sh(W.map(function(x,i){return i})).slice(0,D.n))};act.appendChild(a);
var c=el('a','btn',D.c.t);c.href=D.c.h;act.appendChild(c);if(D.x){var x=el('a','btn ghost',D.x.t);x.href=D.x.h;act.appendChild(x)}txt.focus()}
go.onclick=function(){start(sh(W.map(function(x,i){return i})).slice(0,D.n))};
document.addEventListener('click',function(e){var b=e.target&&e.target.closest?e.target.closest('.wl-play'):null;if(b){var m=$('wl-audio-msg');if(m)m.textContent='';speak(b.getAttribute('data-a'))}});
Array.prototype.forEach.call(document.querySelectorAll('.wl-play'),function(b){b.hidden=false})})()</script></section>`;
}

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
  const grouped = !!t.groups?.length && t.groups.reduce((n, g) => n + g.n, 0) === t.words.length;
  const groups = grouped ? t.groups! : [{ id: 'sozlar', label: "So'zlar", h2: "So'zlar va talaffuz", n: t.words.length, note: undefined as string | undefined }];
  let off = 0;
  const tables = groups.map(g => { const ws = t.words.slice(off, off + g.n); off += g.n; return `<section class="section" id="${esc(g.id)}"><h2>${esc(g.h2)}</h2>${g.note ? `<p>${esc(g.note)}</p>` : ''}${wordTable(t, ws)}</section>`; }).join('');
  const jump: [string, string][] = [...groups.map(g => [g.id, g.label] as [string, string]), ['mini-test', 'Mini-test']];
  const hasAudio = t.words.some(w => wordAudio(w[0]));
  const extra = (t.extra ?? []).map(x => `<section class="section" id="${esc(x.id)}"><h2>${esc(x.h2)}</h2>${(x.p || []).map(p => `<p>${esc(p)}</p>`).join('')}${x.table ? table(x.table) : ''}${x.ex ? examples(x.ex) : ''}</section>`).join('');
  const body = `${WL_CSS}${hero(`Inglizcha so'zlar · ${LEVEL_TITLE[t.level]}`, t.h1, t.intro, crumbs(["Inglizcha so'zlar", WORDS_BASE], [t.h1]))}
<main class="page"><div class="wrap">
<nav aria-label="Sahifa bo'limlari"><ul class="wl-jump">${jump.map(([id, l]) => `<li><a href="#${esc(id)}">${esc(l)}${id === 'mini-test' ? '' : ' ↓'}</a></li>`).join('')}</ul></nav>
${hasAudio ? `<p class="wl-msg" id="wl-audio-msg" role="status" aria-live="polite"></p>` : ''}
${tables}
${extra}
${quizSection(t)}
<section class="section"><h2>Hayotda ishlatish: tayyor gaplar</h2>${examples(t.phrases)}</section>
<section class="section"><h2>Eslab qolish uchun maslahat</h2><p>${esc(t.tip)}</p></section>
${wordsCta(t)}
<section class="section"><h2>Ko'p beriladigan savollar</h2>${faqHtml(t.faq)}</section>
<section class="section"><h2>Boshqa mavzular</h2><div class="grid">${related.map(r => `<a class="card" href="${WORDS_BASE}/${r.slug}"><div class="body"><h3>${esc(r.h1)}</h3></div></a>`).join('')}<a class="card" href="${WORDS_BASE}"><div class="body"><h3>Barcha mavzular</h3></div></a></div></section>
<section class="section"><p>Kursdagi mos dars (ro'yxatdan o'tmasdan ko'rish mumkin): <a href="${lessonHref(t.lesson)}">${esc(lessonTitle(t.lesson))}</a>. Grammatika: <a href="${GUIDE_BASE}">ingliz tili qoidalari</a>.</p></section>
</div></main>`;
  return page({
    title: `${t.metaTitle} | Scorify.uz`, description: t.metaDesc, path, lang: 'uz', body, ogType: 'article',
    jsonLd: [breadcrumbLd([{ name: 'Bosh sahifa', path: '/' }, { name: "Inglizcha so'zlar", path: WORDS_BASE }, { name: t.h1, path }]), article(path, t.h1, t.metaDesc), faqLd(t.faq),
      { '@context': 'https://schema.org', '@type': 'ItemList', name: t.h1, itemListElement: t.words.map(([en, , uz], i) => ({ '@type': 'ListItem', position: i + 1, name: `${en} — ${uz}` })) }],
  });
}

/* ---------- English-language landing ---------- */
const COURSE_LESSON_TOTAL = COURSE.reduce((n, l) => n + l.units.reduce((m, u) => m + u.lessons.length, 0), 0);
const EN_FAQ = [
  { q: 'Can I learn English from zero in Uzbek?', a: 'Yes. Scorify.uz has a full beginner course for Uzbek speakers: every explanation is in Uzbek, examples and exercises are in English, and every word has audio.' },
  { q: 'Is the course free?', a: 'Every new account gets a 7-day free trial of the course. After that you can continue with a paid plan, paid in Uzbek sums.' },
  { q: 'Which levels are available?', a: `Beginner, Elementary (A1), Pre-Intermediate (A2) and Intermediate (B1): ${COURSE_LESSON_TOTAL} lessons in total, with unit tests and a placement test if you already know some English.` },
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
    description: `Learn English from zero with explanations in Uzbek: ${total} lessons from Beginner to Intermediate (B1), audio, exercises and tests. Start with a free trial on Scorify.uz.`,
    path: EN_LANDING, lang: 'en', body,
    alternates: [{ lang: 'en', path: EN_LANDING }, { lang: 'uz', path: COURSE_BASE }, { lang: 'x-default', path: COURSE_BASE }],
    jsonLd: [breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Learn English from Uzbek', path: EN_LANDING }]), faqLd(EN_FAQ, 'en'),
      { '@context': 'https://schema.org', '@type': 'Course', name: 'English course for Uzbek speakers', description: 'English from zero to B1 with explanations in Uzbek.', inLanguage: ['uz', 'en'], provider: { '@type': 'Organization', name: 'Scorify.uz', url: SITE }, educationalLevel: 'Beginner to B1', hasCourseInstance: { '@type': 'CourseInstance', courseMode: 'online', courseWorkload: 'PT10M', inLanguage: 'uz' } }],
  });
}

export const learnUrls = (): string[] => [GUIDE_BASE, ...GUIDES.map(g => `${GUIDE_BASE}/${g.slug}`), WORDS_BASE, ...WORD_TOPICS.map(t => `${WORDS_BASE}/${t.slug}`), EN_LANDING];

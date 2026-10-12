export const SITE = 'https://www.scorify.uz';
export const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || 'https://bywqpgjojnqscelloxew.supabase.co';
export const SUPABASE_KEY = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_ANON_KEY || '';

export const esc = (s: unknown) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
export const jsonLdScript = (data: unknown) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

export function slugify(input: string): string {
  return input.toLowerCase().replace(/[ʻʼ’‘`´']/g, '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);
}

export type PageOptions = {
  title: string; description: string; path: string; body: string; lang?: string; robots?: string; ogImage?: string; ogType?: string;
  jsonLd?: unknown[]; alternates?: { lang: string; path: string }[]; head?: string; publishedTime?: string; modifiedTime?: string;
};

const NAV = [
  ['/ingliz-tili-darslari', 'English course'],
  ['/ielts-writing-task-2-questions', 'Writing'],
  ['/ielts-speaking-part-2', 'Speaking'],
  ['/ielts-vocabulary', 'Vocabulary'],
  ['/ielts-band-score-calculator', 'Calculator'],
  ['/blog', 'Blog'],
];

const NAV_UZ = [
  ['/ingliz-tili-darslari', 'Darslar'],
  ['/ingliz-tili-qoidalari', 'Qoidalar'],
  ['/inglizcha-sozlar', "So'zlar"],
  ['/ielts-writing-task-2-questions', 'IELTS Writing'],
  ['/ielts-speaking-part-2', 'IELTS Speaking'],
  ['/blog', 'Blog'],
];

const FOOTER_UZ = `<div class="cols">
<div><h4>Scorify.uz</h4><p>Ingliz tilini noldan o'rganish: o'zbekcha tushuntirishli darslar, talaffuz, mashqlar va testlar. IELTS Writing va Speaking baholash ham bor.</p><a class="btn" href="/auth" style="display:inline-flex">Boshlash</a></div>
<div><h4>Kurs</h4><a href="/ingliz-tili-darslari">Barcha darslar</a><a href="/ingliz-tili-darslari/beginner">Beginner (noldan)</a><a href="/ingliz-tili-darslari/elementary">Elementary (A1)</a><a href="/ingliz-tili-darslari/pre-intermediate">Pre-Intermediate (A2)</a><a href="/ingliz-tili-qoidalari">Ingliz tili qoidalari</a><a href="/inglizcha-sozlar">Inglizcha so'zlar</a><a href="/learn-english-from-uzbek">Learn English (EN)</a></div>
<div><h4>IELTS</h4><a href="/ielts-writing-task-2-questions">Writing Task 2</a><a href="/ielts-speaking-part-2">Speaking Part 2</a><a href="/ielts-vocabulary">Vocabulary</a><a href="/ielts-band-score-calculator">Band kalkulyatori</a></div>
<div><h4>Resurslar</h4><a href="/blog">Blog va qo'llanmalar</a><a href="/blog/rss.xml">RSS</a></div>
</div><p class="copy">© ${new Date().getFullYear()} Scorify.uz. IELTS tegishli egalarining ro'yxatdan o'tgan savdo belgisi; Scorify.uz u bilan bog'liq emas.</p>`;

export function page(o: PageOptions): string {
  const uz = o.lang === 'uz';
  const url = `${SITE}${o.path}`;
  const og = o.ogImage || `${SITE}/og-image.png`;
  const robots = o.robots || 'index, follow, max-image-preview:large, max-snippet:-1';
  return `<!doctype html>
<html lang="${esc(o.lang || 'en')}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(o.title)}</title>
<meta name="description" content="${esc(o.description)}">
<meta name="robots" content="${esc(robots)}">
<link rel="canonical" href="${esc(url)}">
${(o.alternates || []).map(a => `<link rel="alternate" hreflang="${esc(a.lang)}" href="${esc(SITE + a.path)}">`).join('\n')}
<link rel="alternate" type="application/rss+xml" title="Scorify IELTS Blog" href="/blog/rss.xml">
<link rel="icon" href="/favicon.ico?v=3" sizes="any"><link rel="icon" href="/logo-48.png?v=3" type="image/png" sizes="48x48"><link rel="icon" href="/logo-192.png?v=3" type="image/png" sizes="192x192"><link rel="apple-touch-icon" href="/logo-180.png?v=3">
<meta property="og:site_name" content="Scorify.uz"><meta property="og:type" content="${esc(o.ogType || 'website')}">
<meta property="og:title" content="${esc(o.title)}"><meta property="og:description" content="${esc(o.description)}">
<meta property="og:url" content="${esc(url)}"><meta property="og:image" content="${esc(og)}">
${o.publishedTime ? `<meta property="article:published_time" content="${esc(o.publishedTime)}">` : ''}${o.modifiedTime ? `<meta property="article:modified_time" content="${esc(o.modifiedTime)}">` : ''}
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(o.title)}"><meta name="twitter:description" content="${esc(o.description)}"><meta name="twitter:image" content="${esc(og)}">
<link rel="stylesheet" href="/site.css?v=1">
${(o.jsonLd || []).map(jsonLdScript).join('\n')}
${o.head || ''}
<script defer data-website-id="dfid_2f7mA21xdCYfavtY5a4n6" data-domain="scorify.uz" src="https://datafa.st/js/script.js"></script>
</head><body>
<header class="site"><div class="wrap"><a class="brand" href="/"><img src="/logo-128.webp" alt="" width="32" height="32">Scorify.uz</a>
<nav class="links" aria-label="Main">${(uz ? NAV_UZ : NAV).map(([h, l]) => `<a href="${h}">${l}</a>`).join('')}<a class="btn" href="/auth">${uz ? 'Boshlash' : 'Practise free'}</a></nav></div></header>
${o.body}
<footer class="site"><div class="wrap">${uz ? FOOTER_UZ : `<div class="cols">
<div><h4>Scorify.uz</h4><p>AI-graded IELTS Writing and Speaking practice with band scores and examiner-style feedback.</p><a class="btn" href="/auth" style="display:inline-flex">Start practising</a></div>
<div><h4>Writing</h4><a href="/ielts-writing-task-2-questions">Task 2 questions &amp; essays</a><a href="/ielts-writing-task-1-samples">Task 1 samples</a><a href="/ielts-writing-task-2">Task 2 guide</a><a href="/ielts-writing-task-1">Task 1 guide</a></div>
<div><h4>Speaking</h4><a href="/ielts-speaking-part-1">Part 1 topics</a><a href="/ielts-speaking-part-2">Part 2 cue cards</a><a href="/ielts-speaking-part-3">Part 3 discussions</a><a href="/ielts-speaking-practice">Speaking practice</a></div>
<div><h4>Resources</h4><a href="/blog">Blog &amp; guides</a><a href="/ielts-vocabulary">Vocabulary by topic</a><a href="/ielts-band-score-calculator">Band score calculator</a><a href="/blog/rss.xml">RSS feed</a></div>
</div><p class="copy">© ${new Date().getFullYear()} Scorify.uz. IELTS is a registered trademark of its owners; Scorify.uz is not affiliated with IELTS.</p>`}</div>
</footer>
</body></html>`;
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: SITE + it.path })) };
}

export function ctaBox(title = 'Practise this with instant AI feedback', text = 'Write or record your answer and get a band score, corrections and clear next steps in seconds.', href = '/auth', label = 'Try Scorify free') {
  return `<aside class="cta"><div><h2>${esc(title)}</h2><p>${esc(text)}</p></div><a class="btn" href="${esc(href)}">${esc(label)} →</a></aside>`;
}

type Res = { statusCode: number; setHeader(k: string, v: string): void; end(body?: string): void };
export function send(res: Res, status: number, body: string, type = 'text/html; charset=utf-8', cache = 'public, s-maxage=300, stale-while-revalidate=86400') {
  res.statusCode = status;
  res.setHeader('Content-Type', type);
  res.setHeader('Cache-Control', status === 200 ? cache : 'public, s-maxage=60');
  res.end(body);
}

export function notFoundPage(): string {
  return page({
    title: 'Page not found | Scorify.uz', description: 'This page does not exist.', path: '/404', robots: 'noindex, follow',
    body: `<main class="page"><div class="narrow" style="text-align:center;padding:60px 0"><p class="eyebrow">404</p><h1>We couldn't find that page</h1><p class="lead" style="margin:0 auto 24px">It may have been moved or unpublished. Try the blog or one of our guides.</p><a class="btn" href="/blog">Go to the blog</a></div></main>`,
  });
}

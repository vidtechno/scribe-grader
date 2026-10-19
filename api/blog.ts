import type { IncomingMessage, ServerResponse } from 'node:http';
import { SITE, SUPABASE_KEY, SUPABASE_URL, breadcrumbLd, ctaBox, esc, notFoundPage, page, send, slugify } from './_lib/shell.js';
import { getPost, listPosts, type Post } from './_lib/posts.js';
import { extractFaq } from './_lib/faq.js';
import { SECTIONS, totalPages } from './_lib/catalog.js';

const PAGE_SIZE = 12;

/** Interface texts of article pages, in the language of the article. */
const UI = {
  en: { home: 'Home', blog: 'Blog', min: (n: number) => `${n} min read`, toc: 'On this page', more: 'Keep reading', switchTo: 'Read this article in Uzbek (O‘zbekcha)', switchLang: 'uz',
    ctaTitle: 'Practise this with instant AI feedback', ctaText: 'Write or record your answer and get a band score, corrections and clear next steps in seconds.', ctaLabel: 'Try Scorify free', label: 'English' },
  uz: { home: 'Bosh sahifa', blog: 'Blog', min: (n: number) => `${n} daqiqada o‘qiladi`, toc: 'Mundarija', more: 'Yana o‘qing', switchTo: 'Read this article in English', switchLang: 'en',
    ctaTitle: 'Buni darhol AI baholashi bilan mashq qiling', ctaText: 'Javobingizni yozing yoki ovozli yozib oling — band, tuzatishlar va keyingi qadamlar soniyalarda.', ctaLabel: 'Scorify’ni bepul sinash', label: 'O‘zbekcha' },
} as const;
const ui = (lang: string) => (lang === 'uz' ? UI.uz : UI.en);
const fmt = (iso: string, lang: string) => new Date(iso).toLocaleDateString(lang === 'uz' ? 'uz-UZ' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
const plain = (html: string) => html.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();

/** Adds heading ids (for the table of contents), lazy-loads images and strips anything executable. */
function enhance(html: string) {
  const toc: { level: number; id: string; text: string }[] = [];
  const used = new Set<string>();
  let out = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/\son\w+="[^"]*"/gi, '')
    .replace(/href="\s*javascript:[^"]*"/gi, 'href="#"');
  out = out.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/g, (_m, level: string, attrs: string, inner: string) => {
    const text = plain(inner);
    let id = slugify(text) || 'section';
    while (used.has(id)) id += '-2';
    used.add(id);
    toc.push({ level: Number(level), id, text });
    return `<h${level} id="${id}"${attrs.replace(/\sid="[^"]*"/, '')}>${inner}</h${level}>`;
  });
  out = out.replace(/<img\b(?![^>]*loading=)/g, '<img loading="lazy" decoding="async"');
  return { html: out, toc };
}

const card = (p: { slug: string; title: string; excerpt: string | null; cover_image_url: string | null; cover_alt?: string | null; tags: string[]; published_at: string; reading_minutes: number | null; lang: string }) => `
<a class="card" data-lang="${esc(p.lang)}" href="/blog/${esc(p.slug)}">${p.cover_image_url ? `<img class="cover" src="${esc(p.cover_image_url)}" alt="${esc(p.cover_alt || p.title)}" loading="lazy" width="640" height="360">` : '<div class="cover ph">📝</div>'}
<div class="body"><div class="meta"><span>${esc(fmt(p.published_at, p.lang))}</span>${p.reading_minutes ? `<span>${ui(p.lang).min(p.reading_minutes)}</span>` : ''}<span>${ui(p.lang).label}</span></div>
<h3>${esc(p.title)}</h3>${p.excerpt ? `<p>${esc(p.excerpt)}</p>` : ''}</div></a>`;


/**
 * Every article exists in English and Uzbek. A visitor sees the articles in their own language first: the language chosen on the
 * site (stored by the app), otherwise the country (Uzbekistan → Uzbek). "All" shows both. Search engines get the full list.
 */
const LANG_SCRIPT = `<style>html[data-bl="uz"] .card[data-lang="en"],html[data-bl="uz"] .feature[data-lang="en"],html[data-bl="en"] .card[data-lang="uz"],html[data-bl="en"] .feature[data-lang="uz"]{display:none}</style>
<script>(function(){function go(l){if(l!=='uz'&&l!=='en')return;document.documentElement.setAttribute('data-bl',l);var p=document.querySelectorAll('#langpills [data-pill]');for(var i=0;i<p.length;i++){p[i].className='pill'+(p[i].getAttribute('data-pill')===l?' on':'')}}
try{var l=localStorage.getItem('scorify:lang')||sessionStorage.getItem('scorify:geo-lang');if(l){go(l)}else{fetch('/api/geo',{cache:'no-store'}).then(function(r){return r.json()}).then(function(d){var g=d&&d.country==='UZ'?'uz':'en';try{sessionStorage.setItem('scorify:geo-lang',g)}catch(e){}go(g)}).catch(function(){})}}catch(e){}})()</script>`;

async function renderList(url: URL) {
  const lang = url.searchParams.get('lang');
  const tag = (url.searchParams.get('tag') || '').toLowerCase();
  const pageNo = Math.max(1, Number(url.searchParams.get('page')) || 1);
  const showAll = url.searchParams.has('all');
  const all = await listPosts();
  const tags = [...new Set(all.flatMap(p => p.tags))].sort();
  const posts = all.filter(p => (!lang || p.lang === lang) && (!tag || p.tags.includes(tag)));
  const filtered = !!(lang || tag || showAll || pageNo > 1);
  const featured = !filtered ? all.find(p => p.cover_image_url) : undefined;
  const rest = featured ? posts.filter(p => p.slug !== featured.slug) : posts;
  const pages = Math.max(1, Math.ceil(rest.length / PAGE_SIZE));
  const items = rest.slice((pageNo - 1) * PAGE_SIZE, pageNo * PAGE_SIZE).map(card);
  const qs = (extra: Record<string, string>) => { const p = new URLSearchParams({ ...(lang ? { lang } : {}), ...(tag ? { tag } : {}), ...extra }); const s = p.toString(); return `/blog${s ? '?' + s : ''}`; };
  const sections = SECTIONS();
  const hubs = !filtered ? `<section class="section"><div class="section-head"><h2>Practice hubs</h2><span style="color:#64748b;font-size:.9rem">${totalPages()} free pages with model answers</span></div>
<div class="hubs">${sections.map(h => `<a class="hub" href="${h.href}"><span class="ico" aria-hidden="true">${h.icon}</span><h3>${esc(h.title)}</h3><p>${esc(h.desc)}</p>${h.count ? `<span class="count">${h.count} pages →</span>` : '<span class="count">Free tool →</span>'}</a>`).join('')}</div></section>` : '';
  const feature = featured ? `<section class="section" style="margin-top:0"><a class="feature" data-lang="${esc(featured.lang)}" href="/blog/${esc(featured.slug)}"><img src="${esc(featured.cover_image_url || '')}" alt="${esc(featured.cover_alt || featured.title)}" width="800" height="450" fetchpriority="high"><div class="body"><div class="meta"><span class="tag">Latest</span><span>${esc(fmt(featured.published_at, featured.lang))}</span>${featured.reading_minutes ? `<span>${featured.reading_minutes} min read</span>` : ''}</div><h3>${esc(featured.title)}</h3>${featured.excerpt ? `<p>${esc(featured.excerpt)}</p>` : ''}<span style="color:var(--brand);font-weight:700">Read the guide →</span></div></a></section>` : '';
  const body = `
<section class="hero"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / Blog</nav><span class="eyebrow">Scorify blog</span><h1>IELTS guides, sample answers and practice topics</h1>
<p class="lead">Everything for IELTS Writing and Speaking in one place: step-by-step guides in English and Uzbek, plus ${totalPages()} practice pages with model answers.</p>
<div class="pills" id="langpills" aria-label="Filter by language"><a class="pill${!lang ? ' on' : ''}" data-pill="all" href="/blog?all=1">All</a><a class="pill${lang === 'en' ? ' on' : ''}" data-pill="en" href="/blog?lang=en">English</a><a class="pill${lang === 'uz' ? ' on' : ''}" data-pill="uz" href="/blog?lang=uz">O‘zbekcha</a></div>
${tags.length ? `<div class="pills" aria-label="Topics">${tags.slice(0, 16).map(t => `<a class="pill${t === tag ? ' on' : ''}" href="${qs({ tag: t }).replace(/&?page=\d+/, '')}">${esc(t)}</a>`).join('')}</div>` : ''}</div></section>
<main class="page"><div class="wrap">${feature}
${items.length ? `<section class="section" style="margin-top:${featured ? '40px' : '0'}"><div class="section-head"><h2>${filtered ? 'Articles' : 'Latest articles'}</h2></div><div class="grid">${items.join('')}</div></section>` : (featured ? '' : '<p class="lead">No articles here yet. Check back soon!</p>')}
${pages > 1 ? `<nav class="pager" aria-label="Pages">${pageNo > 1 ? `<a class="btn ghost" href="${qs({ page: String(pageNo - 1) })}">← Newer</a>` : ''}<span style="align-self:center;color:#64748b">Page ${pageNo} of ${pages}</span>${pageNo < pages ? `<a class="btn ghost" href="${qs({ page: String(pageNo + 1) })}">Older →</a>` : ''}</nav>` : ''}
${hubs}
${ctaBox('Try the practice yourself', 'Write an essay or record a speaking answer and get a band score with corrections in seconds. Your first evaluation is free.', '/auth', 'Check my English free')}</div></main>
${filtered ? '' : LANG_SCRIPT}`;
  return page({
    title: 'IELTS Blog: Guides, Sample Answers and Practice Topics | Scorify.uz',
    description: 'Free IELTS Writing and Speaking guides, sample answers, vocabulary and practice topics in English and Uzbek from Scorify.uz.',
    path: '/blog', bottomNav: 'blog', body, robots: filtered ? 'noindex, follow' : undefined,
    alternates: [{ lang: 'x-default', path: '/blog' }],
    jsonLd: [{ '@context': 'https://schema.org', '@type': 'Blog', name: 'Scorify IELTS Blog', url: `${SITE}/blog`, publisher: { '@type': 'Organization', name: 'Scorify.uz', logo: `${SITE}/logo.png` } }, breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }])],
  });
}

async function renderPost(post: Post) {
  const { html, toc } = enhance(post.content_html);
  const all = await listPosts().catch(() => []);
  const related = all.filter(p => p.slug !== post.slug && p.lang === post.lang)
    .map(p => ({ p, score: p.tags.filter(t => post.tags.includes(t)).length })).sort((a, b) => b.score - a.score || +new Date(b.p.published_at) - +new Date(a.p.published_at)).slice(0, 3).map(x => x.p);
  const title = post.seo_title || post.title;
  const description = post.seo_description || post.excerpt || plain(post.content_html).slice(0, 155);
  const path = `/blog/${post.slug}`;
  const alt = post.alt_slug ? all.find(p => p.slug === post.alt_slug) : null;
  const altPost = alt;
  const c = ui(post.lang);
  const alternates = [{ lang: post.lang, path }, ...(alt ? [{ lang: alt.lang, path: `/blog/${alt.slug}` }, { lang: 'x-default', path: post.lang === 'en' ? path : `/blog/${alt.slug}` }] : [])];
  const wordCount = plain(post.content_html).split(' ').filter(Boolean).length;
  const faq = extractFaq(post.content_html);
  const track = `<script>(function(){try{var k='scorify_vid',v=localStorage.getItem(k);if(!v){v=(window.crypto&&crypto.randomUUID)?crypto.randomUUID():String(Math.random()).slice(2)+Date.now();localStorage.setItem(k,v)}fetch(${JSON.stringify(SUPABASE_URL)}+'/rest/v1/rpc/track_blog_view',{method:'POST',headers:{apikey:${JSON.stringify(SUPABASE_KEY)},'Content-Type':'application/json'},body:JSON.stringify({_slug:${JSON.stringify(post.slug)},_visitor:v}),keepalive:true})}catch(e){}})()</script>`;
  const body = `
<article>
<div class="narrow post-head"><nav class="crumbs" aria-label="Breadcrumb"><a href="/">${c.home}</a> / <a href="/blog">${c.blog}</a> / ${esc(post.title)}</nav>
<h1>${esc(post.title)}</h1>
<div class="meta"><span>${esc(post.author_name)}</span><span>${esc(fmt(post.published_at, post.lang))}</span>${post.reading_minutes ? `<span>${c.min(post.reading_minutes)}</span>` : ''}${altPost ? `<a class="tag" hreflang="${c.switchLang}" lang="${c.switchLang}" href="/blog/${esc(altPost.slug)}">${c.switchTo}</a>` : ''}${post.tags.map(t => `<a class="tag" href="/blog?tag=${encodeURIComponent(t)}">${esc(t)}</a>`).join('')}</div>
${post.cover_image_url ? `<img class="post-cover" src="${esc(post.cover_image_url)}" alt="${esc(post.cover_alt || post.title)}" width="1200" height="675" fetchpriority="high">` : ''}</div>
<div class="wrap"><div class="post-layout">
<div class="prose">${html}${ctaBox(c.ctaTitle, c.ctaText, '/auth', c.ctaLabel)}</div>
<aside>${toc.length > 2 ? `<nav class="toc" aria-label="${c.toc}"><strong>${c.toc}</strong><ul>${toc.map(t => `<li class="l${t.level}"><a href="#${t.id}">${esc(t.text)}</a></li>`).join('')}</ul></nav>` : ''}</aside>
</div></div></article>
${related.length ? `<section class="section"><div class="wrap"><h2>${c.more}</h2><div class="grid">${related.map(card).join('')}</div></div></section>` : ''}
${track}`;
  return page({
    title: `${title} | Scorify.uz`, description, path, bottomNav: 'blog', body, lang: post.lang, ogType: 'article', ogImage: post.cover_image_url || undefined,
    publishedTime: post.published_at, modifiedTime: post.updated_at, alternates,
    jsonLd: [{
      '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description, inLanguage: post.lang, mainEntityOfPage: `${SITE}${path}`,
      image: post.cover_image_url ? [post.cover_image_url] : [`${SITE}/logo.png`], datePublished: post.published_at, dateModified: post.updated_at, wordCount,
      keywords: post.tags.join(', '), author: { '@type': 'Organization', name: post.author_name }, publisher: { '@type': 'Organization', name: 'Scorify.uz', logo: { '@type': 'ImageObject', url: `${SITE}/logo.png` } },
    }, breadcrumbLd([{ name: c.home, path: '/' }, { name: c.blog, path: '/blog' }, { name: post.title, path }]),
    ...(faq.length ? [{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }] : [])],
  });
}

async function renderFeed() {
  const posts = await listPosts(30);
  const items = posts.map(p => `<item><title>${esc(p.title)}</title><link>${SITE}/blog/${esc(p.slug)}</link><guid>${SITE}/blog/${esc(p.slug)}</guid><pubDate>${new Date(p.published_at).toUTCString()}</pubDate><description>${esc(p.excerpt || '')}</description></item>`).join('');
  return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Scorify IELTS Blog</title><link>${SITE}/blog</link><description>IELTS Writing and Speaking tips</description>${items}</channel></rss>`;
}

export default async function handler(req: IncomingMessage, res: ServerResponse & { statusCode: number }) {
  try {
    const url = new URL(req.url || '/', SITE);
    if (url.searchParams.get('feed')) return send(res, 200, await renderFeed(), 'application/rss+xml; charset=utf-8');
    const slug = url.searchParams.get('slug');
    if (!slug) return send(res, 200, await renderList(url));
    const post = await getPost(slug);
    if (!post) return send(res, 404, notFoundPage());
    return send(res, 200, await renderPost(post));
  } catch (e) {
    console.error('blog render failed', e);
    return send(res, 500, '<!doctype html><title>Temporarily unavailable</title><p>The blog is temporarily unavailable. Please try again shortly.</p>');
  }
}

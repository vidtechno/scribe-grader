import type { IncomingMessage, ServerResponse } from 'node:http';
import { SITE, SUPABASE_KEY, SUPABASE_URL, breadcrumbLd, ctaBox, esc, notFoundPage, page, send, slugify } from './_lib/shell.js';
import { getPost, listPosts, type Post } from './_lib/posts.js';
import { extractFaq } from './_lib/faq.js';

const PAGE_SIZE = 12;
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
<a class="card" href="/blog/${esc(p.slug)}">${p.cover_image_url ? `<img class="cover" src="${esc(p.cover_image_url)}" alt="${esc(p.cover_alt || p.title)}" loading="lazy" width="640" height="360">` : '<div class="cover ph">📝</div>'}
<div class="body"><div class="meta"><span>${esc(fmt(p.published_at, p.lang))}</span>${p.reading_minutes ? `<span>${p.reading_minutes} min read</span>` : ''}<span>${p.lang === 'uz' ? 'O‘zbekcha' : 'English'}</span></div>
<h3>${esc(p.title)}</h3>${p.excerpt ? `<p>${esc(p.excerpt)}</p>` : ''}</div></a>`;

const LEGACY = { slug: 'computer-based-ielts-writing', title: 'Computer-based IELTS Writing: how to prepare', excerpt: 'What changes on the computer-delivered test and how to practise for it.', cover_image_url: null, tags: ['writing'], published_at: '2026-01-15T00:00:00Z', reading_minutes: 6, lang: 'en' };

async function renderList(url: URL) {
  const lang = url.searchParams.get('lang');
  const tag = (url.searchParams.get('tag') || '').toLowerCase();
  const pageNo = Math.max(1, Number(url.searchParams.get('page')) || 1);
  const all = await listPosts();
  const tags = [...new Set(all.flatMap(p => p.tags))].sort();
  const posts = all.filter(p => (!lang || p.lang === lang) && (!tag || p.tags.includes(tag)));
  const showLegacy = (!lang || lang === 'en') && !tag;
  const pages = Math.max(1, Math.ceil((posts.length + (showLegacy ? 1 : 0)) / PAGE_SIZE));
  const combined = [...(showLegacy ? [LEGACY] : []), ...posts];
  const items = combined.slice((pageNo - 1) * PAGE_SIZE, pageNo * PAGE_SIZE).map(card);
  const qs = (extra: Record<string, string>) => { const p = new URLSearchParams({ ...(lang ? { lang } : {}), ...(tag ? { tag } : {}), ...extra }); const s = p.toString(); return `/blog${s ? '?' + s : ''}`; };
  const filtered = !!(lang || tag || pageNo > 1);
  const body = `
<section class="hero"><div class="wrap"><span class="eyebrow">Scorify blog</span><h1>IELTS tips, sample answers and study guides</h1>
<p class="lead">Practical advice for IELTS Writing and Speaking, in English and Uzbek. Learn the strategies behind higher band scores.</p>
<div class="pills" aria-label="Filter by language"><a class="pill${!lang ? ' on' : ''}" href="/blog">All</a><a class="pill${lang === 'en' ? ' on' : ''}" href="/blog?lang=en">English</a><a class="pill${lang === 'uz' ? ' on' : ''}" href="/blog?lang=uz">O‘zbekcha</a></div>
${tags.length ? `<div class="pills" aria-label="Topics">${tags.slice(0, 16).map(t => `<a class="pill${t === tag ? ' on' : ''}" href="${qs({ tag: t }).replace(/&?page=\d+/, '')}">${esc(t)}</a>`).join('')}</div>` : ''}</div></section>
<main class="page"><div class="wrap">${items.length ? `<div class="grid">${items.join('')}</div>` : '<p class="lead">No articles here yet. Check back soon!</p>'}
${pages > 1 ? `<nav class="pager" aria-label="Pages">${pageNo > 1 ? `<a class="btn ghost" href="${qs({ page: String(pageNo - 1) })}">← Newer</a>` : ''}<span style="align-self:center;color:#64748b">Page ${pageNo} of ${pages}</span>${pageNo < pages ? `<a class="btn ghost" href="${qs({ page: String(pageNo + 1) })}">Older →</a>` : ''}</nav>` : ''}
${ctaBox()}</div></main>`;
  return page({
    title: 'IELTS Blog: Writing & Speaking Tips, Samples and Guides | Scorify.uz',
    description: 'Free IELTS Writing and Speaking tips, sample answers, vocabulary and study plans in English and Uzbek from Scorify.uz.',
    path: '/blog', body, robots: filtered ? 'noindex, follow' : undefined,
    alternates: [{ lang: 'x-default', path: '/blog' }],
    jsonLd: [{ '@context': 'https://schema.org', '@type': 'Blog', name: 'Scorify IELTS Blog', url: `${SITE}/blog`, publisher: { '@type': 'Organization', name: 'Scorify.uz', logo: `${SITE}/logo.png` } }, breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }])],
  });
}

async function renderPost(post: Post) {
  const { html, toc } = enhance(post.content_html);
  const all = await listPosts(60).catch(() => []);
  const related = all.filter(p => p.slug !== post.slug && p.lang === post.lang)
    .map(p => ({ p, score: p.tags.filter(t => post.tags.includes(t)).length })).sort((a, b) => b.score - a.score || +new Date(b.p.published_at) - +new Date(a.p.published_at)).slice(0, 3).map(x => x.p);
  const title = post.seo_title || post.title;
  const description = post.seo_description || post.excerpt || plain(post.content_html).slice(0, 155);
  const path = `/blog/${post.slug}`;
  const alt = post.alt_slug ? all.find(p => p.slug === post.alt_slug) : null;
  const alternates = [{ lang: post.lang, path }, ...(alt ? [{ lang: alt.lang, path: `/blog/${alt.slug}` }, { lang: 'x-default', path: post.lang === 'en' ? path : `/blog/${alt.slug}` }] : [])];
  const wordCount = plain(post.content_html).split(' ').filter(Boolean).length;
  const faq = extractFaq(post.content_html);
  const track = `<script>(function(){try{var k='scorify_vid',v=localStorage.getItem(k);if(!v){v=(window.crypto&&crypto.randomUUID)?crypto.randomUUID():String(Math.random()).slice(2)+Date.now();localStorage.setItem(k,v)}fetch(${JSON.stringify(SUPABASE_URL)}+'/rest/v1/rpc/track_blog_view',{method:'POST',headers:{apikey:${JSON.stringify(SUPABASE_KEY)},'Content-Type':'application/json'},body:JSON.stringify({_slug:${JSON.stringify(post.slug)},_visitor:v}),keepalive:true})}catch(e){}})()</script>`;
  const body = `
<article>
<div class="narrow post-head"><nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/blog">Blog</a> / ${esc(post.title)}</nav>
<h1>${esc(post.title)}</h1>
<div class="meta"><span>${esc(post.author_name)}</span><span>${esc(fmt(post.published_at, post.lang))}</span>${post.reading_minutes ? `<span>${post.reading_minutes} min read</span>` : ''}${post.tags.map(t => `<a class="tag" href="/blog?tag=${encodeURIComponent(t)}">${esc(t)}</a>`).join('')}</div>
${post.cover_image_url ? `<img class="post-cover" src="${esc(post.cover_image_url)}" alt="${esc(post.cover_alt || post.title)}" width="1200" height="675" fetchpriority="high">` : ''}</div>
<div class="wrap"><div class="post-layout">
<div class="prose">${html}${ctaBox()}</div>
<aside>${toc.length > 2 ? `<nav class="toc" aria-label="On this page"><strong>On this page</strong><ul>${toc.map(t => `<li class="l${t.level}"><a href="#${t.id}">${esc(t.text)}</a></li>`).join('')}</ul></nav>` : ''}</aside>
</div></div></article>
${related.length ? `<section class="section"><div class="wrap"><h2>Keep reading</h2><div class="grid">${related.map(card).join('')}</div></div></section>` : ''}
${track}`;
  return page({
    title: `${title} | Scorify.uz`, description, path, body, lang: post.lang, ogType: 'article', ogImage: post.cover_image_url || undefined,
    publishedTime: post.published_at, modifiedTime: post.updated_at, alternates,
    jsonLd: [{
      '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description, inLanguage: post.lang, mainEntityOfPage: `${SITE}${path}`,
      image: post.cover_image_url ? [post.cover_image_url] : [`${SITE}/logo.png`], datePublished: post.published_at, dateModified: post.updated_at, wordCount,
      keywords: post.tags.join(', '), author: { '@type': 'Organization', name: post.author_name }, publisher: { '@type': 'Organization', name: 'Scorify.uz', logo: { '@type': 'ImageObject', url: `${SITE}/logo.png` } },
    }, breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path }]),
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

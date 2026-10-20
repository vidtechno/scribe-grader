import type { IncomingMessage, ServerResponse } from 'node:http';
import { SITE, SUPABASE_KEY, SUPABASE_URL, authHref, breadcrumbLd, ctaBox, esc, notFoundPage, page, send, slugify } from './_lib/shell.js';
import { getPost, listPosts, type Post } from './_lib/posts.js';
import { extractFaq } from './_lib/faq.js';
import { SECTIONS, totalPages } from './_lib/catalog.js';

const PAGE_SIZE = 12;

/** Interface texts of article pages, in the language of the article. */
const UI = {
  en: { home: 'Home', homePath: '/', base: '/blog', blog: 'Blog', min: (n: number) => `${n} min read`, toc: 'On this page', more: 'Keep reading', switchTo: 'Read this article in Uzbek (O‘zbekcha)', switchLang: 'uz',
    ctaTitle: 'Practise this with instant AI feedback', ctaText: 'Write or record your answer and get a band score, corrections and clear next steps in seconds.', ctaLabel: 'Try Scorify free', label: 'English' },
  uz: { home: 'Bosh sahifa', homePath: '/uz', base: '/uz/blog', blog: 'Blog', min: (n: number) => `${n} daqiqada o‘qiladi`, toc: 'Mundarija', more: 'Yana o‘qing', switchTo: 'Read this article in English', switchLang: 'en',
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

type ListItem = Awaited<ReturnType<typeof listPosts>>[number];
type Locale = 'en' | 'uz';

const card = (p: Pick<ListItem, 'slug' | 'title' | 'excerpt' | 'cover_image_url' | 'cover_alt' | 'tags' | 'published_at' | 'reading_minutes' | 'lang'>) => `
<a class="card" href="/blog/${esc(p.slug)}">${p.cover_image_url ? `<img class="cover" src="${esc(p.cover_image_url)}" alt="${esc(p.cover_alt || p.title)}" loading="lazy" width="640" height="360">` : '<div class="cover ph">📝</div>'}
<div class="body"><div class="meta"><span>${esc(fmt(p.published_at, p.lang))}</span>${p.reading_minutes ? `<span>${ui(p.lang).min(p.reading_minutes)}</span>` : ''}</div>
<h3>${esc(p.title)}</h3>${p.excerpt ? `<p>${esc(p.excerpt)}</p>` : ''}</div></a>`;

/**
 * Two server-rendered article lists, one per language: /blog (English) and /uz/blog (Uzbek). Each shows only the articles written in its
 * language, in its own language chrome; there is no client-side language filter. The language is decided by the URL alone.
 */
const LIST_UI = {
  en: {
    base: '/blog', home: 'Home', homePath: '/', crumb: 'Blog', eyebrow: 'Scorify blog', h1: 'IELTS guides, sample answers and practice topics',
    lead: (n: number) => `Everything for IELTS Writing and Speaking in one place: step-by-step guides in English, plus ${n} practice pages with model answers.`,
    other: { href: '/uz/blog', lang: 'uz', text: 'O‘zbekcha maqolalar' }, otherIntro: 'Prefer Uzbek?',
    title: 'IELTS Blog: Guides, Sample Answers and Practice Topics | Scorify.uz', titlePage: (n: number) => `IELTS Blog, page ${n}: Guides and Sample Answers | Scorify.uz`, titleTag: (t: string) => `IELTS articles about ${t} | Scorify.uz`,
    description: 'Free IELTS Writing and Speaking guides, sample answers, vocabulary and practice topics in English from Scorify.uz.',
    descriptionPage: (n: number, of: number) => `Page ${n} of ${of}: free IELTS Writing and Speaking guides, sample answers and practice topics in English from Scorify.uz.`,
    topics: 'Topics', all: 'All', latest: 'Latest', articles: 'Articles', latestArticles: 'Latest articles', empty: 'No articles here yet. Check back soon!', read: 'Read the guide →',
    newer: '← Newer', older: 'Older →', pageOf: (n: number, of: number) => `Page ${n} of ${of}`, pagerLabel: 'Pages',
    hubsH: 'Practice hubs', hubsCount: (n: number) => `${n} free pages with model answers`, pages: (n: number) => `${n} pages →`, tool: 'Free tool →',
    ctaTitle: 'Try the practice yourself', ctaText: 'Write an essay or record a speaking answer and get a band score with corrections in seconds. A free account includes one Writing and one Speaking assessment.', ctaLabel: 'Try a free Writing check',
    blogName: 'Scorify IELTS Blog (English)',
  },
  uz: {
    base: '/uz/blog', home: 'Bosh sahifa', homePath: '/uz', crumb: 'Blog', eyebrow: 'Scorify blogi', h1: 'IELTS bo‘yicha o‘zbekcha qo‘llanmalar va maslahatlar',
    lead: (n: number) => `IELTS Writing va Speaking bo‘yicha o‘zbek tilidagi bosqichma-bosqich qo‘llanmalar. Mashq uchun ${n} ta sahifa namunaviy javoblar bilan (ular inglizcha).`,
    other: { href: '/blog', lang: 'en', text: 'Articles in English' }, otherIntro: 'Read in English?',
    title: 'IELTS blogi: o‘zbekcha qo‘llanmalar va maslahatlar | Scorify.uz', titlePage: (n: number) => `IELTS blogi, ${n}-sahifa: o‘zbekcha qo‘llanmalar | Scorify.uz`, titleTag: (t: string) => `IELTS maqolalari: ${t} | Scorify.uz`,
    description: 'IELTS Writing va Speaking bo‘yicha bepul o‘zbekcha qo‘llanmalar, maslahatlar va mashq mavzulari: Scorify.uz blogi.',
    descriptionPage: (n: number, of: number) => `${of} sahifadan ${n}-sahifa: IELTS Writing va Speaking bo‘yicha o‘zbekcha qo‘llanmalar va maslahatlar, Scorify.uz blogi.`,
    topics: 'Mavzular', all: 'Hammasi', latest: 'Yangi', articles: 'Maqolalar', latestArticles: 'So‘nggi maqolalar', empty: 'Hozircha maqolalar yo‘q. Tez orada qaytib keling!', read: 'Qo‘llanmani o‘qish →',
    newer: '← Yangiroq', older: 'Eskiroq →', pageOf: (n: number, of: number) => `${n}-sahifa, jami ${of}`, pagerLabel: 'Sahifalar',
    hubsH: 'Mashq bo‘limlari', hubsCount: (n: number) => `${n} ta bepul sahifa, namunaviy javoblar bilan (inglizcha)`, pages: (n: number) => `${n} ta sahifa →`, tool: 'Bepul vosita →',
    ctaTitle: 'Mashqni o‘zingiz sinab ko‘ring', ctaText: 'Esse yozing yoki nutq javobini yozib oling va soniyalarda band hamda tuzatishlarni oling. Bepul hisobda bitta Writing va bitta Speaking baholash bor.', ctaLabel: 'Writing ni bepul tekshirish',
    blogName: 'Scorify IELTS blogi (o‘zbekcha)',
  },
} as const;
const HUB_UZ: Record<string, { title: string; desc: string }> = {
  wt2: { title: 'Writing Task 2 savollari', desc: 'Savol tahlili, reja va band 7+ namunaviy esselar.' },
  wt1: { title: 'Writing Task 1 namunalari', desc: 'Grafik, diagramma, jadval va jarayonlar: overview va namunaviy hisobotlar.' },
  sp1: { title: 'Speaking Part 1 mavzulari', desc: 'Kundalik savollar va tabiiy namunaviy javoblar.' },
  sp2: { title: 'Speaking Part 2 cue card lar', desc: 'Describe-a-… mavzulari va 2 daqiqalik namunaviy javoblar.' },
  sp3: { title: 'Speaking Part 3 muhokamalari', desc: 'Mavhum savollar va batafsil javoblar.' },
  vocab: { title: 'IELTS lug‘ati mavzular bo‘yicha', desc: 'Mavzuli so‘zlar ro‘yxati: ma’no va misollar bilan.' },
  calc: { title: 'Band kalkulyatori', desc: 'Umumiy bandni rasmiy yaxlitlash qoidasi bilan hisoblang.' },
};

/** Keys that never change what the list shows (tracking parameters). */
const IGNORED_PARAM = /^(utm_|fbclid$|gclid$|yclid$)/;

/** What a list URL shows: which posts, how many pages, and the featured article (page 1 of the unfiltered list). */
function planList(all: ListItem[], locale: Locale, tag: string) {
  const posts = all.filter(p => p.lang === locale && (!tag || p.tags.includes(tag)));
  const featured = tag ? undefined : posts.find(p => p.cover_image_url);
  const rest = featured ? posts.filter(p => p.slug !== featured.slug) : posts;
  return { posts, featured, rest, pages: Math.max(1, Math.ceil(rest.length / PAGE_SIZE)) };
}
const listPath = (locale: Locale, pageNo = 1) => `${LIST_UI[locale].base}${pageNo > 1 ? `?page=${pageNo}` : ''}`;

/** Returns null when the page number is past the last page (a real 404). */
export async function renderList(url: URL, locale: Locale = 'en'): Promise<string | null> {
  const c = LIST_UI[locale];
  const tag = (url.searchParams.get('tag') || '').toLowerCase().trim();
  const rawPage = url.searchParams.get('page');
  const validPage = rawPage !== null && /^[1-9]\d{0,3}$/.test(rawPage);
  const pageNo = validPage ? Number(rawPage) : 1;
  // Anything beyond a plain page number is a filter or sort variant: noindex, canonical to the clean list.
  const extraParam = [...url.searchParams.keys()].some(k => k !== 'locale' && k !== 'page' && k !== 'tag' && !IGNORED_PARAM.test(k));
  const duplicate = rawPage !== null && (!validPage || pageNo === 1);
  const filtered = !!tag || extraParam || duplicate;
  const all = await listPosts();
  const { featured, rest, pages } = planList(all, locale, tag);
  if (!filtered && pageNo > pages) return null;
  const tags = [...new Set(all.filter(p => p.lang === locale).flatMap(p => p.tags))].sort();
  const items = rest.slice((pageNo - 1) * PAGE_SIZE, pageNo * PAGE_SIZE).map(card);
  const showFeatured = featured && pageNo === 1 && !filtered;
  const qs = (extra: Record<string, string>) => { const p = new URLSearchParams({ ...(tag ? { tag } : {}), ...extra }); const s = p.toString(); return `${c.base}${s ? '?' + s : ''}`; };
  const pageHref = (n: number) => (n > 1 ? qs({ page: String(n) }) : qs({}));
  const firstPlain = pageNo === 1 && !filtered;
  const sections = SECTIONS();
  const hubs = firstPlain ? `<section class="section"><div class="section-head"><h2>${c.hubsH}</h2><span style="color:#64748b;font-size:.9rem">${c.hubsCount(totalPages())}</span></div>
<div class="hubs">${sections.map(h => { const t = locale === 'uz' ? HUB_UZ[h.key] ?? h : h; return `<a class="hub" href="${h.href}"><span class="ico" aria-hidden="true">${h.icon}</span><h3>${esc(t.title)}</h3><p>${esc(t.desc)}</p>${h.count ? `<span class="count">${c.pages(h.count)}</span>` : `<span class="count">${c.tool}</span>`}</a>`; }).join('')}</div></section>` : '';
  const feature = showFeatured ? `<section class="section" style="margin-top:0"><a class="feature" href="/blog/${esc(featured.slug)}"><img src="${esc(featured.cover_image_url || '')}" alt="${esc(featured.cover_alt || featured.title)}" width="800" height="450" fetchpriority="high"><div class="body"><div class="meta"><span class="tag">${c.latest}</span><span>${esc(fmt(featured.published_at, featured.lang))}</span>${featured.reading_minutes ? `<span>${ui(featured.lang).min(featured.reading_minutes)}</span>` : ''}</div><h3>${esc(featured.title)}</h3>${featured.excerpt ? `<p>${esc(featured.excerpt)}</p>` : ''}<span style="color:var(--brand);font-weight:700">${c.read}</span></div></a></section>` : '';
  const pager = pages > 1 ? `<nav class="pager" aria-label="${c.pagerLabel}">${pageNo > 1 ? `<a class="btn ghost" rel="prev" href="${pageHref(pageNo - 1)}">${c.newer}</a>` : ''}<span style="align-self:center;color:#64748b">${c.pageOf(pageNo, pages)}</span>${pageNo < pages ? `<a class="btn ghost" rel="next" href="${pageHref(pageNo + 1)}">${c.older}</a>` : ''}</nav>` : '';
  const body = `
<section class="hero"><div class="wrap"><nav class="crumbs" aria-label="Breadcrumb"><a href="${c.homePath}">${c.home}</a> / ${c.crumb}</nav><span class="eyebrow">${c.eyebrow}</span><h1>${c.h1}</h1>
<p class="lead">${c.lead(totalPages())} ${c.otherIntro} <a href="${c.other.href}" hreflang="${c.other.lang}" lang="${c.other.lang}">${c.other.text}</a></p>
${tags.length ? `<div class="pills" aria-label="${c.topics}">${tag ? `<a class="pill" href="${c.base}">${c.all}</a>` : ''}${tags.slice(0, 16).map(t => `<a class="pill${t === tag ? ' on' : ''}" href="${c.base}?tag=${encodeURIComponent(t)}">${esc(t)}</a>`).join('')}</div>` : ''}</div></section>
<main class="page"><div class="wrap">${feature}
${items.length ? `<section class="section" style="margin-top:${showFeatured ? '40px' : '0'}"><div class="section-head"><h2>${firstPlain ? c.latestArticles : c.articles}</h2></div><div class="grid">${items.join('')}</div></section>` : (showFeatured ? '' : `<p class="lead">${c.empty}</p>`)}
${pager}
${hubs}
${ctaBox(c.ctaTitle, c.ctaText, authHref('/writing'), c.ctaLabel)}</div></main>`;
  // Hreflang only between list pages that really exist in both languages (same page number), never on filtered variants.
  const other: Locale = locale === 'en' ? 'uz' : 'en';
  const otherPages = planList(all, other, '').pages;
  const pair = !filtered && pageNo <= otherPages;
  const alternates = pair ? [{ lang: 'en', path: listPath('en', pageNo) }, { lang: 'uz', path: listPath('uz', pageNo) }, { lang: 'x-default', path: listPath('en', pageNo) }] : undefined;
  const canonicalPath = !filtered && pageNo > 1 ? listPath(locale, pageNo) : c.base;
  const head = filtered ? '' : `${pageNo > 1 ? `<link rel="prev" href="${esc(SITE + listPath(locale, pageNo - 1))}">` : ''}${pageNo < pages ? `<link rel="next" href="${esc(SITE + listPath(locale, pageNo + 1))}">` : ''}`;
  const pageTitle = tag ? c.titleTag(tag) : pageNo > 1 && !filtered ? c.titlePage(pageNo) : c.title;
  return page({
    title: pageTitle, description: pageNo > 1 && !filtered ? c.descriptionPage(pageNo, pages) : c.description,
    path: canonicalPath, lang: locale, bottomNav: 'blog', body, robots: filtered ? 'noindex, follow' : undefined, alternates, head, ctaNext: '/writing',
    jsonLd: [{ '@context': 'https://schema.org', '@type': 'Blog', name: c.blogName, inLanguage: locale, url: `${SITE}${c.base}`, publisher: { '@type': 'Organization', name: 'Scorify.uz', logo: `${SITE}/logo.png` } }, breadcrumbLd([{ name: c.home, path: c.homePath }, { name: c.crumb, path: c.base }])],
  });
}

/** The practice an article leads to: speaking, reading and listening guides go to their own practice, everything else to Writing. */
export function practiceNext(post: Pick<Post, 'slug' | 'tags'>): string {
  const k = `${post.slug} ${post.tags.join(' ')}`.toLowerCase();
  if (/speaking|gapirish/.test(k)) return '/speaking';
  if (/reading|o.qish/.test(k)) return '/reading';
  if (/listening|tinglab/.test(k)) return '/listening';
  return '/writing';
}

async function renderPost(post: Post) {
  const { html, toc } = enhance(post.content_html);
  const all = await listPosts().catch(() => []);
  const related = all.filter(p => p.slug !== post.slug && p.lang === post.lang)
    .map(p => ({ p, score: p.tags.filter(t => post.tags.includes(t)).length })).sort((a, b) => b.score - a.score || +new Date(b.p.published_at) - +new Date(a.p.published_at)).slice(0, 3).map(x => x.p);
  const title = post.seo_title || post.title;
  const description = post.seo_description || post.excerpt || plain(post.content_html).slice(0, 155);
  const path = `/blog/${post.slug}`;
  const altRow = post.alt_slug ? all.find(p => p.slug === post.alt_slug) : null;
  // a counterpart is a real two-way pair in the other language; a lone article gets no hreflang at all
  const alt = altRow && altRow.lang !== post.lang && altRow.alt_slug === post.slug ? altRow : null;
  const altPost = alt;
  const c = ui(post.lang);
  const alternates = alt ? [{ lang: post.lang, path }, { lang: alt.lang, path: `/blog/${alt.slug}` }, { lang: 'x-default', path: post.lang === 'en' ? path : `/blog/${alt.slug}` }] : undefined;
  const wordCount = plain(post.content_html).split(' ').filter(Boolean).length;
  const faq = extractFaq(post.content_html);
  const track = `<script>(function(){try{var k='scorify_vid',v=localStorage.getItem(k);if(!v){v=(window.crypto&&crypto.randomUUID)?crypto.randomUUID():String(Math.random()).slice(2)+Date.now();localStorage.setItem(k,v)}fetch(${JSON.stringify(SUPABASE_URL)}+'/rest/v1/rpc/track_blog_view',{method:'POST',headers:{apikey:${JSON.stringify(SUPABASE_KEY)},'Content-Type':'application/json'},body:JSON.stringify({_slug:${JSON.stringify(post.slug)},_visitor:v}),keepalive:true})}catch(e){}})()</script>`;
  const body = `
<article>
<div class="narrow post-head"><nav class="crumbs" aria-label="Breadcrumb"><a href="${c.homePath}">${c.home}</a> / <a href="${c.base}">${c.blog}</a> / ${esc(post.title)}</nav>
<h1>${esc(post.title)}</h1>
<div class="meta"><span>${esc(post.author_name)}</span><span>${esc(fmt(post.published_at, post.lang))}</span>${post.reading_minutes ? `<span>${c.min(post.reading_minutes)}</span>` : ''}${altPost ? `<a class="tag" hreflang="${c.switchLang}" lang="${c.switchLang}" href="/blog/${esc(altPost.slug)}">${c.switchTo}</a>` : ''}${post.tags.map(t => `<a class="tag" href="${c.base}?tag=${encodeURIComponent(t)}">${esc(t)}</a>`).join('')}</div>
${post.cover_image_url ? `<img class="post-cover" src="${esc(post.cover_image_url)}" alt="${esc(post.cover_alt || post.title)}" width="1200" height="675" fetchpriority="high">` : ''}</div>
<div class="wrap"><div class="post-layout">
<div class="prose">${html}${ctaBox(c.ctaTitle, c.ctaText, authHref(practiceNext(post)), c.ctaLabel)}</div>
<aside>${toc.length > 2 ? `<nav class="toc" aria-label="${c.toc}"><strong>${c.toc}</strong><ul>${toc.map(t => `<li class="l${t.level}"><a href="#${t.id}">${esc(t.text)}</a></li>`).join('')}</ul></nav>` : ''}</aside>
</div></div></article>
${related.length ? `<section class="section"><div class="wrap"><h2>${c.more}</h2><div class="grid">${related.map(card).join('')}</div></div></section>` : ''}
${track}`;
  return page({
    title: `${title} | Scorify.uz`, description, path, bottomNav: 'blog', body, lang: post.lang, ogType: 'article', ogImage: post.cover_image_url || undefined,
    publishedTime: post.published_at, modifiedTime: post.updated_at, alternates, ctaNext: practiceNext(post),
    jsonLd: [{
      '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description, inLanguage: post.lang, mainEntityOfPage: `${SITE}${path}`,
      image: post.cover_image_url ? [post.cover_image_url] : [`${SITE}/logo.png`], datePublished: post.published_at, dateModified: post.updated_at, wordCount,
      keywords: post.tags.join(', '), author: { '@type': 'Organization', name: post.author_name }, publisher: { '@type': 'Organization', name: 'Scorify.uz', logo: { '@type': 'ImageObject', url: `${SITE}/logo.png` } },
    }, breadcrumbLd([{ name: c.home, path: c.homePath }, { name: c.blog, path: c.base }, { name: post.title, path }]),
    ...(faq.length ? [{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }] : [])],
  });
}

async function renderFeed() {
  const posts = await listPosts(30);
  const items = posts.map(p => `<item><title>${esc(p.title)}</title><link>${SITE}/blog/${esc(p.slug)}</link><guid>${SITE}/blog/${esc(p.slug)}</guid><pubDate>${new Date(p.published_at).toUTCString()}</pubDate><description>${esc(p.excerpt || '')}</description><category domain="language">${p.lang === 'uz' ? 'uz' : 'en'}</category></item>`).join('');
  return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Scorify IELTS Blog (English and Uzbek)</title><link>${SITE}/blog</link><description>IELTS Writing and Speaking tips in English and Uzbek. Each item carries a language category (en or uz).</description>${items}</channel></rss>`;
}

export default async function handler(req: IncomingMessage, res: ServerResponse & { statusCode: number }) {
  try {
    const url = new URL(req.url || '/', SITE);
    if (url.searchParams.get('feed')) return send(res, 200, await renderFeed(), 'application/rss+xml; charset=utf-8');
    const slug = url.searchParams.get('slug');
    if (!slug) {
      // Old language-filter links (/blog?lang=uz, /blog?all=1) now have real addresses.
      const legacy = url.searchParams.get('lang');
      if (!url.searchParams.has('locale') && (legacy === 'uz' || legacy === 'en' || url.searchParams.has('all'))) {
        const t = url.searchParams.get('tag');
        res.statusCode = 301;
        res.setHeader('Location', `${legacy === 'uz' ? '/uz/blog' : '/blog'}${t ? `?tag=${encodeURIComponent(t)}` : ''}`);
        res.setHeader('Cache-Control', 'public, s-maxage=3600');
        return res.end();
      }
      const html = await renderList(url, url.searchParams.get('locale') === 'uz' ? 'uz' : 'en');
      return html === null ? send(res, 404, notFoundPage()) : send(res, 200, html);
    }
    const post = await getPost(slug);
    if (!post) return send(res, 404, notFoundPage());
    return send(res, 200, await renderPost(post));
  } catch (e) {
    console.error('blog render failed', e);
    return send(res, 500, '<!doctype html><title>Temporarily unavailable</title><p>The blog is temporarily unavailable. Please try again shortly.</p>');
  }
}

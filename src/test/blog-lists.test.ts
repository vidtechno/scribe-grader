import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { call, canonicalOf, h1Of, hreflangsOf, hrefs, robotsOf, stubPosts, titleOf, type Row } from './render-helper';

process.env.SUPABASE_SERVICE_ROLE_KEY ||= 'test-key';
process.env.SUPABASE_ANON_KEY ||= 'test-key';
process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||= 'test-key';

const SITE = 'https://www.scorify.uz';
let handler: (req: never, res: never) => Promise<unknown>;
let langOf: Map<string, string>;
let enPages = 0;
let uzPages = 0;

const articleSlugs = (html: string) => [...new Set(hrefs(html).map(h => h.match(/^\/blog\/([^/?#]+)$/)?.[1]).filter((s): s is string => !!s && s !== 'rss.xml'))];

beforeAll(async () => {
  const { listPosts, clearPostsCache } = await import('../../api/_lib/posts');
  vi.stubGlobal('fetch', vi.fn(async () => new Response('[]', { status: 200 })));
  clearPostsCache();
  const builtIn = await listPosts();
  const nEn = builtIn.filter(p => p.lang === 'en').length;
  const nUz = builtIn.filter(p => p.lang === 'uz').length;
  // English gets 3 pages and Uzbek 2, so page 3 exists in one language only.
  const rows: Row[] = [
    ...Array.from({ length: Math.max(1, 30 - nEn) }, (_, i) => ({ slug: `db-en-${i}`, lang: 'en' as const, cover: i === 0, tags: ['writing', i % 2 ? 'band score' : 'speaking'] })),
    ...Array.from({ length: Math.max(1, 18 - nUz) }, (_, i) => ({ slug: `db-uz-${i}`, lang: 'uz' as const, cover: i === 0, tags: ['writing'] })),
  ];
  stubPosts(rows);
  clearPostsCache();
  const all = await listPosts();
  langOf = new Map(all.map(p => [p.slug, p.lang]));
  enPages = Math.ceil((all.filter(p => p.lang === 'en').length - 1) / 12);
  uzPages = Math.ceil((all.filter(p => p.lang === 'uz').length - 1) / 12);
  handler = (await import('../../api/blog')).default as never;
  vi.stubGlobal('fetch', vi.fn()); // restored per test below
  stubPosts(rows);
});
afterEach(() => { /* keep the stub: every test renders from the same posts */ });

describe('English article list /blog', () => {
  it('lists only English articles, in English chrome, with no JavaScript language filter', async () => {
    const r = await call(handler, '/api/blog');
    expect(r.statusCode).toBe(200);
    const slugs = articleSlugs(r.body);
    expect(slugs.length).toBeGreaterThan(5);
    for (const s of slugs) expect(langOf.get(s), s).toBe('en');
    expect(r.body).toContain('<html lang="en">');
    for (const bad of ['data-bl', 'langpills', 'data-pill', 'scorify:lang', '/api/geo', 'data-lang=', 'LANG_SCRIPT', 'O‘zbekcha</a><a class="pill']) expect(r.body, bad).not.toContain(bad);
    // the only inline scripts are JSON-LD, analytics and the signed-in phone bar; none of them filters by language
    expect(r.body).not.toMatch(/localStorage\.getItem\('scorify:lang'\)/);
    expect(canonicalOf(r.body)).toBe(`${SITE}/blog`);
    expect(robotsOf(r.body)).toMatch(/^index/);
    expect(h1Of(r.body)).toContain('IELTS guides');
    expect(hrefs(r.body)).toContain('/uz/blog'); // visible link to the Uzbek list
  });

  it('pairs with /uz/blog through reciprocal hreflang and x-default pointing at /blog', async () => {
    const en = hreflangsOf((await call(handler, '/api/blog')).body);
    const uz = hreflangsOf((await call(handler, '/api/blog?locale=uz')).body);
    const want = [{ lang: 'en', href: `${SITE}/blog` }, { lang: 'uz', href: `${SITE}/uz/blog` }, { lang: 'x-default', href: `${SITE}/blog` }];
    expect(en).toEqual(want);
    expect(uz).toEqual(want);
  });
});

describe('Uzbek article list /uz/blog', () => {
  it('lists only Uzbek articles, in Uzbek chrome, indexable, with a visible link to the English list', async () => {
    const r = await call(handler, '/api/blog?locale=uz');
    expect(r.statusCode).toBe(200);
    const slugs = articleSlugs(r.body);
    expect(slugs.length).toBeGreaterThan(5);
    for (const s of slugs) expect(langOf.get(s), s).toBe('uz');
    expect(r.body).toContain('<html lang="uz">');
    expect(canonicalOf(r.body)).toBe(`${SITE}/uz/blog`);
    expect(robotsOf(r.body)).toMatch(/^index/);
    expect(titleOf(r.body)).toMatch(/blogi/);
    expect(h1Of(r.body)).toMatch(/o‘zbekcha/);
    expect(r.body).toContain('Mashq bo‘limlari'); // hubs section in Uzbek
    expect(r.body).toContain('Bosh sahifa');
    expect(r.body).toMatch(/href="\/blog" hreflang="en"/);
    expect(r.body).toContain('/auth?next=%2Fwriting'); // CTA follows the page purpose
    expect(r.body).not.toContain('Practice hubs');
    expect(r.body).not.toContain('data-bl');
    expect(r.body).toContain('"inLanguage":"uz"');
    expect(r.body).toContain('"name":"Bosh sahifa","item":"https://www.scorify.uz/uz"');
    // header navigation of an Uzbek page leads to the Uzbek blog and Uzbek IELTS hub
    expect(r.body).toMatch(/<nav class="links"[^>]*>[\s\S]*href="\/uz\/ielts"[\s\S]*href="\/uz\/blog"/);
  });
});

describe('pagination', () => {
  it('page 2 and later are indexable, canonical to themselves and linked with crawlable prev/next', async () => {
    expect(enPages).toBeGreaterThanOrEqual(3);
    expect(uzPages).toBeGreaterThanOrEqual(2);
    const p1 = (await call(handler, '/api/blog')).body;
    expect(hrefs(p1)).toContain('/blog?page=2');
    expect(p1).toContain(`<link rel="next" href="${SITE}/blog?page=2">`);
    expect(p1).not.toContain('rel="prev"');

    const p2 = (await call(handler, '/api/blog?page=2')).body;
    expect(canonicalOf(p2)).toBe(`${SITE}/blog?page=2`);
    expect(robotsOf(p2)).toMatch(/^index/);
    expect(hrefs(p2)).toContain('/blog'); // prev goes to the clean first page, never ?page=1
    expect(hrefs(p2)).not.toContain('/blog?page=1');
    expect(hrefs(p2)).toContain('/blog?page=3');
    expect(titleOf(p2)).toMatch(/page 2/);
    // different articles than page 1
    const s1 = articleSlugs(p1), s2 = articleSlugs(p2);
    expect(s2.filter(s => s1.includes(s))).toEqual([]);

    const u2 = (await call(handler, '/api/blog?locale=uz&page=2')).body;
    expect(canonicalOf(u2)).toBe(`${SITE}/uz/blog?page=2`);
    expect(robotsOf(u2)).toMatch(/^index/);
    expect(h1Of(u2)).toMatch(/o‘zbekcha/);
  });

  it('puts hreflang on a page number only when that page exists in both languages', async () => {
    const both = hreflangsOf((await call(handler, '/api/blog?page=2')).body);
    expect(both).toEqual([{ lang: 'en', href: `${SITE}/blog?page=2` }, { lang: 'uz', href: `${SITE}/uz/blog?page=2` }, { lang: 'x-default', href: `${SITE}/blog?page=2` }]);
    expect(hreflangsOf((await call(handler, '/api/blog?locale=uz&page=2')).body)).toEqual(both);
    if (enPages > uzPages) {
      const lonely = await call(handler, `/api/blog?page=${enPages}`);
      expect(lonely.statusCode).toBe(200);
      expect(hreflangsOf(lonely.body)).toEqual([]);
      expect(canonicalOf(lonely.body)).toBe(`${SITE}/blog?page=${enPages}`);
    }
  });

  it('answers 404 past the last page', async () => {
    expect((await call(handler, `/api/blog?page=${enPages + 1}`)).statusCode).toBe(404);
    expect((await call(handler, `/api/blog?locale=uz&page=${uzPages + 1}`)).statusCode).toBe(404);
  });
});

describe('filters and variants', () => {
  it('tag filters are noindex,follow and canonical to the unfiltered list, without hreflang', async () => {
    for (const [u, base] of [['/api/blog?tag=writing', '/blog'], ['/api/blog?locale=uz&tag=writing', '/uz/blog'], ['/api/blog?tag=writing&page=2', '/blog']] as const) {
      const r = await call(handler, u);
      expect(r.statusCode, u).toBe(200);
      expect(robotsOf(r.body), u).toBe('noindex, follow');
      expect(canonicalOf(r.body), u).toBe(`${SITE}${base}`);
      expect(hreflangsOf(r.body), u).toEqual([]);
    }
  });

  it('other filter, sort and duplicate combinations are noindex with the clean list as canonical', async () => {
    for (const [u, base] of [['/api/blog?sort=oldest', '/blog'], ['/api/blog?q=band', '/blog'], ['/api/blog?page=1', '/blog'], ['/api/blog?page=abc', '/blog'], ['/api/blog?locale=uz&sort=oldest', '/uz/blog'], ['/api/blog?locale=uz&page=1', '/uz/blog']] as const) {
      const r = await call(handler, u);
      expect(r.statusCode, u).toBe(200);
      expect(robotsOf(r.body), u).toBe('noindex, follow');
      expect(canonicalOf(r.body), u).toBe(`${SITE}${base}`);
    }
  });

  it('ignores tracking parameters', async () => {
    const r = await call(handler, '/api/blog?utm_source=x&fbclid=y');
    expect(robotsOf(r.body)).toMatch(/^index/);
    expect(canonicalOf(r.body)).toBe(`${SITE}/blog`);
  });

  it('redirects the old language-filter links to the real language lists', async () => {
    const a = await call(handler, '/api/blog?lang=uz');
    expect([a.statusCode, a.headers.location]).toEqual([301, '/uz/blog']);
    const b = await call(handler, '/api/blog?all=1');
    expect([b.statusCode, b.headers.location]).toEqual([301, '/blog']);
    const c = await call(handler, '/api/blog?lang=en&tag=writing');
    expect([c.statusCode, c.headers.location]).toEqual([301, '/blog?tag=writing']);
  });
});

describe('article pages and feed', () => {
  it('Uzbek articles link back to the Uzbek blog, with a practice CTA that matches the topic', async () => {
    const slug = [...langOf].find(([s, l]) => l === 'uz' && s.startsWith('db-uz'))![0];
    const r = await call(handler, `/api/blog?slug=${slug}`);
    expect(r.statusCode).toBe(200);
    expect(hrefs(r.body)).toContain('/uz/blog');
    expect(hrefs(r.body)).toContain('/uz');
    expect(r.body).toContain('/auth?next=%2Fwriting');
    expect(r.body).toContain('"name":"Bosh sahifa","item":"https://www.scorify.uz/uz"');
  });

  it('keeps the feed at /blog/rss.xml with a language category on every item', async () => {
    const r = await call(handler, '/api/blog?feed=1');
    expect(r.headers['content-type']).toMatch(/rss\+xml/);
    const items = r.body.split('<item>').slice(1);
    expect(items.length).toBeGreaterThan(5);
    for (const it of items) expect(it).toMatch(/<category domain="language">(en|uz)<\/category>/);
    expect(items.some(i => i.includes('>uz</category>'))).toBe(true);
    expect(items.some(i => i.includes('>en</category>'))).toBe(true);
    const vercel = JSON.parse((await import('node:fs')).readFileSync('vercel.json', 'utf8')) as { rewrites: { source: string; destination: string }[] };
    expect(vercel.rewrites).toContainEqual({ source: '/blog/rss.xml', destination: '/api/blog?feed=1' });
    expect(vercel.rewrites).toContainEqual({ source: '/uz/blog', destination: '/api/blog?locale=uz' });
  });

  it('chooses the practice an article leads to', async () => {
    const { practiceNext } = await import('../../api/blog');
    expect(practiceNext({ slug: 'ielts-speaking-part-2-x', tags: [] })).toBe('/speaking');
    expect(practiceNext({ slug: 'ielts-reading-true-false-not-given-strategy', tags: [] })).toBe('/reading');
    expect(practiceNext({ slug: 'x', tags: ['listening'] })).toBe('/listening');
    expect(practiceNext({ slug: 'ielts-band-score-explained', tags: ['band score'] })).toBe('/writing');
  });
});

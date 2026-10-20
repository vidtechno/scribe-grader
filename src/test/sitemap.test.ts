import { beforeAll, describe, expect, it } from 'vitest';
import { existsSync, readFileSync } from 'node:fs';
import { call, canonicalOf, hreflangsOf, robotsOf, stubPosts } from './render-helper';

process.env.SUPABASE_SERVICE_ROLE_KEY ||= 'test-key';
process.env.SUPABASE_ANON_KEY ||= 'test-key';
process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||= 'test-key';

const SITE = 'https://www.scorify.uz';
type Entry = { loc: string; path: string; lastmod?: string; alts: { lang: string; href: string }[] };
let xml = '';
let entries: Entry[] = [];
let byPath = new Map<string, Entry>();

const vercel = JSON.parse(readFileSync('vercel.json', 'utf8')) as { rewrites: { source: string; destination: string }[]; redirects: { source: string; destination: string }[] };

/** Resolves a public path like Vercel does: first matching rewrite wins (the catch-all SPA rewrite is not a server-rendered page). */
function route(path: string): { dest: string } | { file: string } | { spa: true } {
  for (const r of vercel.rewrites) {
    if (r.source === '/(.*)') return { spa: true };
    const names: string[] = [];
    const re = new RegExp('^' + r.source.replace(/[.+?^${}|[\]\\]/g, '\\$&').replace(/:(\w+)/g, (_m, n) => { names.push(n); return '([^/]+)'; }) + '$');
    const m = path.match(re);
    if (!m) continue;
    let dest = r.destination;
    names.forEach((n, i) => { dest = dest.replace(`:${n}`, decodeURIComponent(m[i + 1])); });
    return dest.startsWith('/api/') ? { dest } : { file: dest };
  }
  return { spa: true };
}

beforeAll(async () => {
  stubPosts([
    { slug: 'db-en-pair', lang: 'en', alt_slug: 'db-uz-pair', updated_at: '2026-10-05T10:00:00Z' },
    { slug: 'db-uz-pair', lang: 'uz', alt_slug: 'db-en-pair', updated_at: '2026-10-07T10:00:00Z' },
    { slug: 'db-en-lonely', lang: 'en', updated_at: '2026-09-20T10:00:00Z' },
    { slug: 'computer-based-ielts-writing', lang: 'en' }, // redirected in vercel.json: must never be listed
  ]);
  const handler = (await import('../../api/sitemap')).default as never;
  const r = await call(handler, '/sitemap.xml');
  expect(r.statusCode).toBe(200);
  expect(r.headers['content-type']).toMatch(/application\/xml/);
  xml = r.body;
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  expect(doc.getElementsByTagName('parsererror').length, 'sitemap is well-formed XML').toBe(0);
  entries = [...doc.getElementsByTagName('url')].map(u => {
    const loc = u.getElementsByTagName('loc')[0].textContent!;
    return {
      loc, path: loc.replace(SITE, ''), lastmod: u.getElementsByTagName('lastmod')[0]?.textContent ?? undefined,
      alts: [...u.getElementsByTagNameNS('http://www.w3.org/1999/xhtml', 'link')].map(l => ({ lang: l.getAttribute('hreflang')!, href: l.getAttribute('href')! })),
    };
  });
  byPath = new Map(entries.map(e => [e.path, e]));
});

describe('sitemap.xml', () => {
  it('lists every URL once, as an absolute canonical URL without parameters', () => {
    expect(entries.length).toBeGreaterThan(300);
    expect(new Set(entries.map(e => e.loc)).size).toBe(entries.length);
    for (const e of entries) {
      expect(e.loc, e.loc).toMatch(/^https:\/\/www\.scorify\.uz\/[^?#\s]*$/);
      expect(e.loc.endsWith('.html'), e.loc).toBe(false);
    }
    for (const p of ['/', '/uz', '/ielts', '/uz/ielts', '/blog', '/uz/blog', '/learn-english-from-uzbek', '/ingliz-tili-darslari']) expect(byPath.has(p), p).toBe(true);
    for (const e of entries) expect(e.path, e.path).not.toMatch(/^\/blog\?|\/uz\/blog\?|page=|tag=/);
  });

  it('does not list redirected URLs', () => {
    for (const r of vercel.redirects) {
      expect(byPath.has(r.source), r.source).toBe(false);
      expect(byPath.has(r.source.replace(/\.html$/, '')) || true).toBe(true); // the destination is a normal page and may be listed
    }
    expect(byPath.has('/blog/computer-based-ielts-writing')).toBe(false);
    expect(byPath.has('/blog/db-en-lonely')).toBe(true);
  });

  it('has no changefreq or priority, and a valid lastmod only where a real date is known', () => {
    expect(xml).not.toMatch(/<changefreq>|<priority>/);
    for (const e of entries) if (e.lastmod) expect(e.lastmod, e.loc).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    // article dates are the article's own updated_at
    expect(byPath.get('/blog/db-en-pair')!.lastmod).toBe('2026-10-05');
    expect(byPath.get('/blog/db-uz-pair')!.lastmod).toBe('2026-10-07');
    expect(byPath.get('/blog/db-en-lonely')!.lastmod).toBe('2026-09-20');
    // no single date is stamped on everything
    const dated = entries.filter(e => e.lastmod);
    expect(new Set(dated.map(e => e.lastmod)).size).toBeGreaterThan(3);
    // pages whose content cannot be dated reliably carry no lastmod
    for (const p of ['/', '/uz', '/ielts-band-score-calculator', '/ielts-reading-practice', '/ielts-listening-practice', '/sitemap']) expect(byPath.get(p)!.lastmod, p).toBeUndefined();
  });

  it('dates programmatic families from content-dates.ts, one date per dataset', async () => {
    const { CONTENT_DATES } = await import('../../api/_lib/content-dates');
    const expectDate = (p: string, key: keyof typeof CONTENT_DATES) => expect(byPath.get(p)!.lastmod, p).toBe(CONTENT_DATES[key] ?? undefined);
    expectDate('/ielts-writing-task-2-questions', 'task2');
    expectDate('/ielts-speaking-part-1', 'speakingPart1');
    expectDate('/ielts-speaking-part-2', 'speakingPart2');
    expectDate('/ielts-speaking-part-3', 'speakingPart3');
    expectDate('/ielts-writing-task-1-samples', 'task1');
    expectDate('/ielts-vocabulary', 'vocabulary');
    expectDate('/ingliz-tili-darslari', 'course');
    expectDate('/ingliz-tili-qoidalari', 'learnGuides');
    expectDate('/inglizcha-sozlar', 'learnWords');
    expectDate('/ielts-writing-task-1', 'writingTask1Guide');
    expectDate('/ielts', 'ieltsHub');
    expectDate('/learn-english-from-uzbek', 'englishLanding');
    // a dataset without a date (new files, not committed yet) gives no <lastmod> at all
    for (const [key, d] of Object.entries(CONTENT_DATES)) if (d === null) expect(key).toMatch(/ieltsHub|englishLanding/);
  });

  it('only lists real, indexable, canonical pages that answer 200 (rendered through the vercel.json routes)', async () => {
    const seo = (await import('../../api/seo')).default as never;
    const blog = (await import('../../api/blog')).default as never;
    const problems: string[] = [];
    const spa = new Set(['/', '/uz']);
    for (const e of entries) {
      if (spa.has(e.path)) continue; // the app's prerendered home pages (see scripts/prerender.mjs)
      const r = route(e.path);
      if ('spa' in r) { problems.push(`${e.path}: only matches the SPA catch-all`); continue; }
      if ('file' in r) {
        const f = 'public' + r.file;
        if (!existsSync(f)) problems.push(`${e.path}: static file ${f} missing`);
        else {
          const html = readFileSync(f, 'utf8');
          if (canonicalOf(html) !== e.loc) problems.push(`${e.path}: canonical ${canonicalOf(html)}`);
          if (/noindex/i.test(robotsOf(html))) problems.push(`${e.path}: noindex`);
          if (/href=["']\/auth["']/.test(html)) problems.push(`${e.path}: sign-up link without next`);
        }
        continue;
      }
      const res = await call((r.dest.startsWith('/api/blog') ? blog : seo), r.dest);
      if (res.statusCode !== 200) { problems.push(`${e.path}: status ${res.statusCode}`); continue; }
      if (canonicalOf(res.body) !== e.loc) problems.push(`${e.path}: canonical ${canonicalOf(res.body)}`);
      if (/noindex/i.test(robotsOf(res.body))) problems.push(`${e.path}: noindex`);
      // every sign-up link keeps the page context, and the page remembers where the visit started
      if (/href=["']\/auth["']/.test(res.body)) problems.push(`${e.path}: sign-up link without next`);
      if (!res.body.includes("/track.js")) problems.push(`${e.path}: no entry/CTA tracking script`);
      // hreflang in the page must equal hreflang in the sitemap
      const inPage = hreflangsOf(res.body).map(a => `${a.lang} ${a.href}`).sort();
      const inMap = e.alts.map(a => `${a.lang} ${a.href}`).sort();
      if (JSON.stringify(inPage) !== JSON.stringify(inMap)) problems.push(`${e.path}: hreflang differs, page ${JSON.stringify(inPage)} sitemap ${JSON.stringify(inMap)}`);
    }
    expect(problems).toEqual([]);
  }, 120_000);

  it('only has true hreflang pairs, reciprocal, with x-default present in the sitemap', () => {
    const withAlts = entries.filter(e => e.alts.length);
    const paths = new Set(withAlts.map(e => e.path));
    for (const must of ['/', '/uz', '/ielts', '/uz/ielts', '/blog', '/uz/blog', '/blog/db-en-pair', '/blog/db-uz-pair']) expect(paths.has(must), must).toBe(true);
    expect(paths.has('/blog/db-en-lonely')).toBe(false);
    expect(paths.has('/learn-english-from-uzbek')).toBe(false);
    expect(paths.has('/ingliz-tili-darslari')).toBe(false);
    for (const e of withAlts) {
      const langs = e.alts.map(a => a.lang).sort();
      expect(langs, e.path).toEqual(['en', 'uz', 'x-default']);
      const self = e.alts.find(a => a.href === e.loc);
      expect(self, `${e.path} lists itself`).toBeTruthy();
      for (const a of e.alts) {
        const target = byPath.get(a.href.replace(SITE, ''));
        expect(target, `${e.path} -> ${a.lang} ${a.href} is in the sitemap`).toBeTruthy();
        if (!target) continue;
        // reciprocity: the target lists exactly the same set of alternates
        expect(target.alts.map(x => `${x.lang} ${x.href}`).sort(), `${a.href} mirrors ${e.path}`).toEqual(e.alts.map(x => `${x.lang} ${x.href}`).sort());
      }
      // x-default is the English version
      expect(e.alts.find(a => a.lang === 'x-default')!.href).toBe(e.alts.find(a => a.lang === 'en')!.href);
    }
    // every English/Uzbek blog pair is a pair of two different languages
    const pairs = withAlts.filter(e => e.path.startsWith('/blog/'));
    expect(pairs.length).toBeGreaterThanOrEqual(10);
  });

  it('counts the URLs by family', () => {
    const fam = (re: RegExp) => entries.filter(e => re.test(e.path)).length;
    const counts = {
      home: fam(/^\/(uz)?$/), ieltsHubs: fam(/^\/(uz\/)?ielts$/), blogLists: fam(/^\/(uz\/)?blog$/), blogPosts: fam(/^\/blog\/./), task2: fam(/^\/ielts-writing-task-2-questions\/./), task1: fam(/^\/ielts-writing-task-1-samples\/./),
      sp1: fam(/^\/ielts-speaking-part-1\/./), sp2: fam(/^\/ielts-speaking-part-2\/./), sp3: fam(/^\/ielts-speaking-part-3\/./), vocab: fam(/^\/ielts-vocabulary\/./), course: fam(/^\/ingliz-tili-darslari/),
      grammar: fam(/^\/ingliz-tili-qoidalari/), words: fam(/^\/inglizcha-sozlar/), total: entries.length,
    };
    console.log('SITEMAP COUNTS', JSON.stringify(counts));
    expect(counts.ieltsHubs).toBe(2);
    expect(counts.blogLists).toBe(2);
  });
});

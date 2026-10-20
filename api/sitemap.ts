import type { IncomingMessage, ServerResponse } from 'node:http';
import { SITE, esc, send } from './_lib/shell.js';
import { listPosts } from './_lib/posts.js';
import { PART1 } from './_lib/data-part1.js';
import { CUE_CARDS } from './_lib/data-part2.js';
import { TASK2 } from './_lib/data-task2.js';
import { PART3 } from './_lib/data-part3.js';
import { TASK1 } from './_lib/data-task1.js';
import { VOCAB } from './_lib/data-vocab.js';
import { courseUrls } from './_lib/course-pages.js';
import { EN_LANDING, GUIDE_BASE, learnUrls } from './_lib/learn-pages.js';
import { PRACTICE_URLS } from './_lib/practice-pages.js';
import { IELTS_HUB_EN, IELTS_HUB_UZ } from './_lib/ielts-hub.js';
import { contentDate, type ContentDateKey } from './_lib/content-dates.js';

/**
 * Only canonical, indexable pages that answer 200 are listed: no redirects, no noindex pages, no filtered or duplicate list URLs
 * (/blog?tag=…, /blog?page=1 …) and every URL once. Page 2+ of the article lists are indexable but are reached through the crawlable
 * pager, so they are not listed. <changefreq> and <priority> are not written (Google ignores them).
 *
 * `lastmod` is the date of the last real content change of that page family, or it is left out:
 *  - blog articles: the article's own updated_at;
 *  - /blog and /uz/blog: the newest updated_at among the articles in that language;
 *  - programmatic families: one date per dataset from api/_lib/content-dates.ts (git history of the data files);
 *  - pages whose content cannot be dated reliably (home pages, calculator, Reading/Listening pages, HTML site map): no lastmod.
 */
type Alt = { lang: string; path: string };
type Url = { path: string; lastmod?: string; alternates?: Alt[] };

/** Public URLs that redirect (see "redirects" in vercel.json): never listed even if a blog post exists with that slug. */
export const REDIRECTED_PATHS = new Set(['/blog/computer-based-ielts-writing']);

const pair = (en: string, uz: string): Alt[] => [{ lang: 'en', path: en }, { lang: 'uz', path: uz }, { lang: 'x-default', path: en }];
const isDate = (d?: string | null): d is string => !!d && /^\d{4}-\d{2}-\d{2}/.test(d);

export async function sitemapEntries(): Promise<Url[]> {
  const out = new Map<string, Url>();
  const add = (path: string, dateKey?: ContentDateKey, extra: Partial<Url> = {}) => {
    if (out.has(path) || REDIRECTED_PATHS.has(path)) return;
    out.set(path, { path, lastmod: dateKey ? contentDate(dateKey) : undefined, ...extra });
  };

  add('/', undefined, { alternates: pair('/', '/uz') });
  add('/uz', undefined, { alternates: pair('/', '/uz') });
  add(IELTS_HUB_EN, 'ieltsHub', { alternates: pair(IELTS_HUB_EN, IELTS_HUB_UZ) });
  add(IELTS_HUB_UZ, 'ieltsHub', { alternates: pair(IELTS_HUB_EN, IELTS_HUB_UZ) });

  add('/ielts-writing-task-1', 'writingTask1Guide');
  add('/ielts-writing-task-2', 'writingTask2Guide');
  add('/ielts-speaking-practice', 'speakingPracticeGuide');
  add('/ielts-writing-task-2-questions', 'task2');
  add('/ielts-speaking-part-1', 'speakingPart1');
  add('/ielts-speaking-part-2', 'speakingPart2');
  add('/ielts-speaking-part-3', 'speakingPart3');
  add('/ielts-writing-task-1-samples', 'task1');
  add('/ielts-vocabulary', 'vocabulary');
  add('/ielts-band-score-calculator');
  for (const path of PRACTICE_URLS) add(path);
  for (const path of courseUrls()) add(path, 'course');
  for (const path of learnUrls()) add(path, path === EN_LANDING ? 'englishLanding' : path.startsWith(GUIDE_BASE) ? 'learnGuides' : 'learnWords');
  for (const q of TASK2) add(`/ielts-writing-task-2-questions/${q.slug}`, 'task2');
  for (const t of PART1) add(`/ielts-speaking-part-1/${t.slug}`, 'speakingPart1');
  for (const t of PART3) add(`/ielts-speaking-part-3/${t.slug}`, 'speakingPart3');
  for (const t of TASK1) add(`/ielts-writing-task-1-samples/${t.slug}`, 'task1');
  for (const v of VOCAB) add(`/ielts-vocabulary/${v.slug}`, 'vocabulary');
  for (const c of CUE_CARDS) add(`/ielts-speaking-part-2/${c.slug}`, 'speakingPart2');

  try {
    const posts = await listPosts();
    const newest = (lang: string) => posts.filter(p => p.lang === lang && isDate(p.updated_at)).map(p => p.updated_at.slice(0, 10)).sort().pop();
    add('/blog', undefined, { lastmod: newest('en'), alternates: pair('/blog', '/uz/blog') });
    add('/uz/blog', undefined, { lastmod: newest('uz'), alternates: pair('/blog', '/uz/blog') });
    for (const p of posts) {
      const alt = p.alt_slug ? posts.find(x => x.slug === p.alt_slug) : undefined;
      // hreflang only for a true two-way pair in two different languages
      const twoWay = alt && alt.lang !== p.lang && alt.alt_slug === p.slug;
      const en = p.lang === 'en' ? p : alt;
      add(`/blog/${p.slug}`, undefined, {
        lastmod: isDate(p.updated_at) ? p.updated_at.slice(0, 10) : undefined,
        alternates: twoWay && en ? [{ lang: p.lang, path: `/blog/${p.slug}` }, { lang: alt.lang, path: `/blog/${alt.slug}` }, { lang: 'x-default', path: `/blog/${en.slug}` }] : undefined,
      });
    }
  } catch (e) {
    console.error('sitemap: posts unavailable', e);
    add('/blog', undefined, { alternates: pair('/blog', '/uz/blog') });
    add('/uz/blog', undefined, { alternates: pair('/blog', '/uz/blog') });
  }
  return [...out.values()];
}

export default async function handler(_req: IncomingMessage, res: ServerResponse & { statusCode: number }) {
  const urls = await sitemapEntries();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.map(u =>
    `  <url><loc>${esc(SITE + u.path)}</loc>${isDate(u.lastmod) ? `<lastmod>${u.lastmod}</lastmod>` : ''}${(u.alternates || []).map(a => `<xhtml:link rel="alternate" hreflang="${a.lang}" href="${esc(SITE + a.path)}"/>`).join('')}</url>`).join('\n')}\n</urlset>\n`;
  send(res, 200, xml, 'application/xml; charset=utf-8', 'public, s-maxage=3600, stale-while-revalidate=86400');
}

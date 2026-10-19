import type { IncomingMessage, ServerResponse } from 'node:http';
import { SITE, esc, send } from './_lib/shell.js';
import { listPosts } from './_lib/posts.js';
import { PART1 } from './_lib/data-part1.js';
import { CUE_CARDS } from './_lib/data-part2.js';
import { TASK2 } from './_lib/data-task2.js';
import { PART3 } from './_lib/data-part3.js';
import { TASK1 } from './_lib/data-task1.js';
import { VOCAB } from './_lib/data-vocab.js';
import { COURSE_BASE, courseUrls } from './_lib/course-pages.js';
import { learnUrls } from './_lib/learn-pages.js';
import { PRACTICE_URLS } from './_lib/practice-pages.js';

type Url = { path: string; priority: string; changefreq: string; lastmod?: string; alternates?: { lang: string; path: string }[] };
/** Bump when the static or programmatic content changes meaningfully. */
const CONTENT_UPDATED = '2026-10-19';

export default async function handler(_req: IncomingMessage, res: ServerResponse & { statusCode: number }) {
  const urls: Url[] = [
    { path: '/', priority: '1.0', changefreq: 'weekly', lastmod: CONTENT_UPDATED, alternates: [{ lang: 'en', path: '/' }, { lang: 'uz', path: '/uz' }, { lang: 'x-default', path: '/' }] },
    { path: '/uz', priority: '1.0', changefreq: 'weekly', lastmod: CONTENT_UPDATED, alternates: [{ lang: 'en', path: '/' }, { lang: 'uz', path: '/uz' }, { lang: 'x-default', path: '/' }] },
    { path: '/ielts-writing-task-1', priority: '0.9', changefreq: 'monthly', lastmod: CONTENT_UPDATED },
    { path: '/ielts-writing-task-2', priority: '0.9', changefreq: 'monthly', lastmod: CONTENT_UPDATED },
    { path: '/ielts-speaking-practice', priority: '0.9', changefreq: 'monthly', lastmod: CONTENT_UPDATED },
    { path: '/ielts-writing-task-2-questions', priority: '0.9', changefreq: 'weekly', lastmod: CONTENT_UPDATED },
    { path: '/ielts-speaking-part-1', priority: '0.9', changefreq: 'weekly', lastmod: CONTENT_UPDATED },
    { path: '/ielts-speaking-part-2', priority: '0.9', changefreq: 'weekly', lastmod: CONTENT_UPDATED },
    { path: '/ielts-speaking-part-3', priority: '0.9', changefreq: 'weekly', lastmod: CONTENT_UPDATED },
    { path: '/ielts-writing-task-1-samples', priority: '0.9', changefreq: 'weekly', lastmod: CONTENT_UPDATED },
    { path: '/ielts-vocabulary', priority: '0.8', changefreq: 'weekly', lastmod: CONTENT_UPDATED },
    { path: '/ielts-band-score-calculator', priority: '0.8', changefreq: 'monthly', lastmod: CONTENT_UPDATED },
    { path: '/blog', priority: '0.8', changefreq: 'daily', lastmod: CONTENT_UPDATED },
    ...PRACTICE_URLS.map(path => ({ path, priority: path === '/sitemap' ? '0.4' : '0.9', changefreq: 'monthly', lastmod: CONTENT_UPDATED })),
    ...courseUrls().map(path => ({ path, priority: path === COURSE_BASE ? '1.0' : path.split('/').length === 3 ? '0.9' : '0.7', changefreq: 'monthly', lastmod: CONTENT_UPDATED })),
    ...learnUrls().map(path => ({ path, priority: path.split('/').length === 2 ? '0.9' : '0.8', changefreq: 'monthly', lastmod: CONTENT_UPDATED })),
    ...TASK2.map(q => ({ path: `/ielts-writing-task-2-questions/${q.slug}`, priority: '0.7', changefreq: 'monthly', lastmod: CONTENT_UPDATED })),
    ...PART1.map(t => ({ path: `/ielts-speaking-part-1/${t.slug}`, priority: '0.7', changefreq: 'monthly', lastmod: CONTENT_UPDATED })),
    ...PART3.map(t => ({ path: `/ielts-speaking-part-3/${t.slug}`, priority: '0.7', changefreq: 'monthly', lastmod: CONTENT_UPDATED })),
    ...TASK1.map(t => ({ path: `/ielts-writing-task-1-samples/${t.slug}`, priority: '0.7', changefreq: 'monthly', lastmod: CONTENT_UPDATED })),
    ...VOCAB.map(v => ({ path: `/ielts-vocabulary/${v.slug}`, priority: '0.7', changefreq: 'monthly', lastmod: CONTENT_UPDATED })),
    ...CUE_CARDS.map(c => ({ path: `/ielts-speaking-part-2/${c.slug}`, priority: '0.7', changefreq: 'monthly', lastmod: CONTENT_UPDATED })),
  ];
  try {
    const posts = await listPosts();
    for (const p of posts) {
      const alt = p.alt_slug ? posts.find(x => x.slug === p.alt_slug) : undefined;
      urls.push({
        path: `/blog/${p.slug}`, priority: '0.8', changefreq: 'monthly', lastmod: p.updated_at.slice(0, 10),
        alternates: alt ? [{ lang: p.lang, path: `/blog/${p.slug}` }, { lang: alt.lang, path: `/blog/${alt.slug}` }, { lang: 'x-default', path: `/blog/${p.lang === 'en' ? p.slug : alt.slug}` }] : undefined,
      });
    }
  } catch (e) { console.error('sitemap: posts unavailable', e); }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.map(u =>
    `  <url><loc>${esc(SITE + u.path)}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}<changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority>${(u.alternates || []).map(a => `<xhtml:link rel="alternate" hreflang="${a.lang}" href="${esc(SITE + a.path)}"/>`).join('')}</url>`).join('\n')}\n</urlset>`;
  send(res, 200, xml, 'application/xml; charset=utf-8', 'public, s-maxage=3600, stale-while-revalidate=86400');
}

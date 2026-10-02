import type { IncomingMessage, ServerResponse } from 'node:http';
import { SITE, esc, send } from './_lib/shell.js';
import { listPosts } from './_lib/posts.js';
import { PART1 } from './_lib/data-part1.js';
import { CUE_CARDS } from './_lib/data-part2.js';
import { TASK2 } from './_lib/data-task2.js';

type Url = { path: string; priority: string; changefreq: string; lastmod?: string };

export default async function handler(_req: IncomingMessage, res: ServerResponse & { statusCode: number }) {
  const urls: Url[] = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/ielts-writing-task-1', priority: '0.9', changefreq: 'monthly' },
    { path: '/ielts-writing-task-2', priority: '0.9', changefreq: 'monthly' },
    { path: '/ielts-speaking-practice', priority: '0.9', changefreq: 'monthly' },
    { path: '/ielts-writing-task-2-questions', priority: '0.9', changefreq: 'weekly' },
    { path: '/ielts-speaking-part-1', priority: '0.9', changefreq: 'weekly' },
    { path: '/ielts-speaking-part-2', priority: '0.9', changefreq: 'weekly' },
    { path: '/ielts-band-score-calculator', priority: '0.8', changefreq: 'monthly' },
    { path: '/blog', priority: '0.8', changefreq: 'daily' },
    { path: '/blog/computer-based-ielts-writing', priority: '0.7', changefreq: 'monthly' },
    ...TASK2.map(q => ({ path: `/ielts-writing-task-2-questions/${q.slug}`, priority: '0.7', changefreq: 'monthly' })),
    ...PART1.map(t => ({ path: `/ielts-speaking-part-1/${t.slug}`, priority: '0.7', changefreq: 'monthly' })),
    ...CUE_CARDS.map(c => ({ path: `/ielts-speaking-part-2/${c.slug}`, priority: '0.7', changefreq: 'monthly' })),
  ];
  try {
    for (const p of await listPosts()) urls.push({ path: `/blog/${p.slug}`, priority: '0.8', changefreq: 'monthly', lastmod: p.updated_at.slice(0, 10) });
  } catch (e) { console.error('sitemap: posts unavailable', e); }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u =>
    `  <url><loc>${esc(SITE + u.path)}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}<changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`).join('\n')}\n</urlset>`;
  send(res, 200, xml, 'application/xml; charset=utf-8', 'public, s-maxage=3600, stale-while-revalidate=86400');
}

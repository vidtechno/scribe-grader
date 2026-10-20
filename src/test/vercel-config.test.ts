import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(__dirname, '../..');
const vercel = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8')) as {
  rewrites: { source: string; destination: string }[];
  redirects: { source: string; destination: string }[];
  headers: { source: string; headers: { key: string; value: string }[] }[];
};
const app = fs.readFileSync(path.join(root, 'src/App.tsx'), 'utf8');

/** Vercel path patterns are path-to-regexp: `:name` is one segment, `:name*` is zero or more. */
function matches(pattern: string, url: string): boolean {
  const re = new RegExp('^' + pattern.replace(/\/:[A-Za-z]+\*/g, '(?:/.*)?').replace(/:[A-Za-z]+/g, '[^/]+') + '$');
  return re.test(url);
}
const route = (url: string) => vercel.rewrites.find((r) => matches(r.source, url));
const concrete = (p: string) => p.replace(/:[A-Za-z]+/g, 'x');

describe('vercel routing', () => {
  const routes = [...app.matchAll(/<Route path="([^"]+)"/g)].map((m) => m[1]).filter((p) => p !== '*');

  it('has no catch-all rewrite: unknown URLs get a real 404', () => {
    expect(vercel.rewrites.some((r) => r.source === '/(.*)' || r.source === '/:path*')).toBe(false);
  });

  it('serves every app route from the empty app shell (not the landing page)', () => {
    for (const r of routes.filter((p) => p !== '/' && p !== '/uz')) {
      const hit = route(concrete(r));
      expect(hit, `rewrite for ${r}`).toBeDefined();
      expect(hit!.destination, r).toBe('/app.html');
    }
  });

  it('keeps every app route out of the index with an X-Robots-Tag header', () => {
    for (const r of routes.filter((p) => p !== '/' && p !== '/uz')) {
      const h = vercel.headers.find((x) => matches(x.source, concrete(r)) && x.headers.some((k) => k.key === 'X-Robots-Tag'));
      expect(h, `noindex header for ${r}`).toBeDefined();
      expect(h!.headers.find((k) => k.key === 'X-Robots-Tag')!.value).toMatch(/noindex/);
    }
  });

  it('serves the Uzbek landing page from its prerendered file and keeps index.html out of the index', () => {
    expect(route('/uz')?.destination).toBe('/uz/index.html');
    expect(vercel.redirects.find((r) => r.source === '/index.html')?.destination).toBe('/');
    expect(route('/ielts')?.destination).toContain('kind=ielts-hub');
    expect(route('/uz/ielts')?.destination).toContain('lang=uz');
    expect(route('/uz/blog')?.destination).toContain('locale=uz');
  });

  it('public server-rendered pages are not routed to the app shell', () => {
    for (const url of ['/blog', '/blog/some-post', '/ingliz-tili-darslari', '/ingliz-tili-darslari/beginner/lesson', '/ielts-speaking-part-2/x', '/learn-english-from-uzbek', '/inglizcha-sozlar/ranglar', '/sitemap.xml']) {
      const hit = route(url);
      expect(hit, url).toBeDefined();
      expect(hit!.destination, url).not.toBe('/app.html');
    }
  });
});

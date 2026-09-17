import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const read = (path: string) => readFileSync(resolve(root, path), 'utf8');
const paths = ['/ielts-writing-task-1', '/ielts-writing-task-2', '/ielts-speaking-practice'];

describe('public search pages', () => {
  it('serves distinct useful HTML at each non-brand IELTS URL', () => {
    const vercel = JSON.parse(read('vercel.json')) as { rewrites: Array<{ source: string; destination: string }> };
    const titles = new Set<string>();
    for (const path of paths) {
      const html = read(`public${path}.html`);
      expect(vercel.rewrites).toContainEqual({ source: path, destination: `${path}.html` });
      expect(html).toContain(`rel="canonical" href="https://www.scorify.uz${path}"`);
      expect(html).toContain('<h1>');
      expect(html).toContain('https://ielts.org/');
      expect(html.match(/<section\b/g)?.length).toBeGreaterThanOrEqual(5);
      const title = html.match(/<title>(.*?)<\/title>/)?.[1];
      expect(title).toBeTruthy();
      titles.add(title!);
    }
    expect(titles.size).toBe(paths.length);
  });

  it('keeps private routes out of search and uses the redirect target as canonical', () => {
    const vercel = JSON.parse(read('vercel.json')) as { headers: Array<{ source: string; headers: Array<{ key: string; value: string }> }> };
    const privatePaths = ['/auth', '/dashboard', '/writing', '/speaking', '/grammar-test'];
    for (const path of privatePaths) {
      expect(vercel.headers.find((entry) => entry.source === path)?.headers).toContainEqual({ key: 'X-Robots-Tag', value: 'noindex, nofollow' });
    }
    expect(read('index.html')).toContain('rel="canonical" href="https://www.scorify.uz/"');
    expect(read('public/robots.txt')).toContain('Sitemap: https://www.scorify.uz/sitemap.xml');
  });
});

import { describe, it, expect } from 'vitest';
import { parseSitemap, selectChanged } from '../../scripts/indexnow.mjs';
import { verificationTags } from '../../api/_lib/verification';

const xml = `<urlset><url><loc>https://www.scorify.uz/</loc></url><url><loc>https://www.scorify.uz/blog/a?x=1&amp;y=2</loc><lastmod>2026-10-01</lastmod></url><url><loc>https://www.scorify.uz/blog/b</loc><lastmod>2026-10-05</lastmod></url></urlset>`;

describe('indexnow selection', () => {
  const entries = parseSitemap(xml);
  it('parses loc and lastmod', () => {
    expect(entries).toHaveLength(3);
    expect(entries[1].loc).toContain('x=1&y=2');
  });
  it('sends everything the first time, then only new or changed lastmod', () => {
    expect(selectChanged(entries, {})).toHaveLength(3);
    const seen = Object.fromEntries(entries.map((e: { loc: string; lastmod: string }) => [e.loc, e.lastmod]));
    expect(selectChanged(entries, seen)).toHaveLength(0);
    expect(selectChanged(entries, { ...seen, 'https://www.scorify.uz/blog/b': '2026-09-01' }).map((e: { loc: string }) => e.loc)).toEqual(['https://www.scorify.uz/blog/b']);
  });
  it('deduplicates and honours --urls', () => {
    expect(selectChanged([...entries, ...entries], {})).toHaveLength(3);
    expect(selectChanged(entries, {}, { only: ['/blog/b'] })).toHaveLength(1);
  });
});

describe('verification tags', () => {
  it('writes nothing without codes and escapes odd input', () => {
    expect(verificationTags({})).toBe('');
    expect(verificationTags({ BING_SITE_VERIFICATION: 'AB12"><script>' })).toBe('<meta name="msvalidate.01" content="AB12script">');
  });
});

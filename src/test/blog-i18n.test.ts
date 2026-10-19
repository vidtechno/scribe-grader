import { describe, expect, it, vi } from 'vitest';

process.env.SUPABASE_SERVICE_ROLE_KEY ||= 'test-key';
process.env.SUPABASE_ANON_KEY ||= 'test-key';
process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||= 'test-key';

const DB_EN = ['ielts-writing-task-2-essay-structure', 'improve-ielts-writing-band-6-to-7', 'ielts-speaking-band-7-what-examiners-look-for',
  'ielts-speaking-part-2-how-to-speak-for-two-minutes', 'ielts-writing-task-1-how-to-describe-a-graph', 'ielts-band-score-explained'];
const DB_UZ = ['ielts-30-kunlik-tayyorgarlik-rejasi', 'ielts-speaking-qanday-topshiriladi', 'ielts-writing-task-2-qanday-yoziladi',
  'ielts-writing-task-1-qanday-yoziladi', 'ielts-band-ball-qanday-hisoblanadi'];

describe('bilingual blog', () => {
  it('lists every article with a counterpart in the other language, linked both ways', async () => {
    // Supabase is unreachable in tests: the posts that live in the database are modelled by their slugs.
    vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify([
      ...DB_EN.map((slug) => ({ id: slug, slug, lang: 'en', title: slug, excerpt: null, cover_image_url: null, cover_alt: null, tags: [], published_at: '2026-10-02T00:00:00Z', updated_at: '2026-10-02T00:00:00Z', reading_minutes: 5, author_name: 'x', alt_slug: null })),
      ...DB_UZ.map((slug) => ({ id: slug, slug, lang: 'uz', title: slug, excerpt: null, cover_image_url: null, cover_alt: null, tags: [], published_at: '2026-10-02T00:00:00Z', updated_at: '2026-10-02T00:00:00Z', reading_minutes: 5, author_name: 'x', alt_slug: null })),
    ]))));
    const { listPosts, clearPostsCache } = await import('../../api/_lib/posts');
    clearPostsCache();
    const posts = await listPosts();
    const bySlug = new Map(posts.map((p) => [p.slug, p]));
    expect(bySlug.size).toBe(posts.length); // unique slugs
    const lonely = posts.filter((p) => {
      const alt = p.alt_slug ? bySlug.get(p.alt_slug) : undefined;
      return !alt || alt.lang === p.lang || alt.alt_slug !== p.slug;
    }).map((p) => `${p.lang}:${p.slug}`);
    expect(lonely, 'articles without a two-way counterpart in the other language').toEqual([]);
    expect(posts.filter((p) => p.lang === 'en').length).toBe(posts.filter((p) => p.lang === 'uz').length);
    vi.unstubAllGlobals();
  });

  it('keeps translations well formed and free of links to the wrong language', async () => {
    const { TRANSLATED_POSTS } = await import('../../api/_lib/data-blog-i18n');
    const { STATIC_POSTS } = await import('../../api/_lib/data-blog-new');
    const lang = new Map([...STATIC_POSTS, ...TRANSLATED_POSTS].map((p) => [p.slug, p.lang]));
    DB_EN.forEach((s) => lang.set(s, 'en'));
    DB_UZ.forEach((s) => lang.set(s, 'uz'));
    expect(TRANSLATED_POSTS.length).toBe(19);
    for (const p of TRANSLATED_POSTS) {
      expect(['en', 'uz']).toContain(p.lang);
      expect(lang.get(p.alt_slug!), `${p.slug} translates a post that exists`).toBeDefined();
      expect(lang.get(p.alt_slug!)).not.toBe(p.lang);
      expect((p.seo_title ?? '').length, `${p.slug} seo_title`).toBeLessThanOrEqual(62);
      expect((p.seo_description ?? '').length, `${p.slug} seo_description`).toBeLessThanOrEqual(160);
      expect(p.content_html.length, `${p.slug} content`).toBeGreaterThan(3000);
      for (const m of p.content_html.matchAll(/\/blog\/([a-z0-9-]+)["#?]/g)) {
        const target = lang.get(m[1]);
        if (target) expect(target, `${p.slug} links to ${m[1]}`).toBe(p.lang);
      }
    }
  });
});

import { beforeEach, describe, expect, it, vi } from 'vitest';

process.env.SUPABASE_SERVICE_ROLE_KEY ||= 'test-key';
process.env.SUPABASE_ANON_KEY ||= 'test-key';
process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||= 'test-key';

describe('blog post list cache', () => {
  beforeEach(() => { vi.restoreAllMocks(); });

  it('asks Supabase once for many page renders and still lists the built-in guides', async () => {
    const { listPosts, clearPostsCache } = await import('../../api/_lib/posts');
    const { SUPABASE_KEY } = await import('../../api/_lib/shell');
    clearPostsCache();
    const row = { id: 'db1', slug: 'from-db', lang: 'en', title: 'DB post', excerpt: null, cover_image_url: null, cover_alt: null, tags: [], published_at: '2026-10-01T00:00:00Z', updated_at: '2026-10-01T00:00:00Z', reading_minutes: 3, author_name: 'T', alt_slug: null };
    const fetchMock = vi.fn(async () => new Response(JSON.stringify([row]), { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);
    if (!SUPABASE_KEY) return; // no key configured in this environment: the list falls back to the built-in guides only
    const a = await listPosts(60);
    const b = await listPosts(30);
    const c = await listPosts();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(a.some(p => p.slug === 'from-db')).toBe(true);
    expect(b.length).toBe(30);
    expect((await listPosts(5)).length).toBe(5);
    expect(c.length).toBe(38);
    expect(c.some(p => p.slug === 'ielts-linking-words-and-how-to-use-them')).toBe(true);
  });

  it('serves the built-in guides when Supabase fails and does not retry on every request', async () => {
    const { listPosts, clearPostsCache } = await import('../../api/_lib/posts');
    clearPostsCache();
    const fetchMock = vi.fn(async () => { throw new Error('down'); });
    vi.stubGlobal('fetch', fetchMock);
    const first = await listPosts();
    await listPosts(); await listPosts();
    expect(first.length).toBeGreaterThanOrEqual(18);
    expect(fetchMock.mock.calls.length).toBeLessThanOrEqual(1);
  });
});

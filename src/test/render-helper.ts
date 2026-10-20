// Helpers for tests that render the server-side handlers in api/ (Supabase is unreachable here, so fetch is mocked).
import { vi } from 'vitest';

export type Res = { statusCode: number; headers: Record<string, string>; body: string; setHeader(k: string, v: string): void; end(b?: string): void };
export async function call(handler: (req: never, res: never) => Promise<unknown>, url: string): Promise<Res> {
  const res: Res = { statusCode: 0, headers: {}, body: '', setHeader(k, v) { this.headers[k.toLowerCase()] = v; }, end(b) { this.body = b ?? ''; } };
  await handler({ url } as never, res as never);
  return res;
}

export const canonicalOf = (html: string) => html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
export const robotsOf = (html: string) => html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? '';
export const hreflangsOf = (html: string) => [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(m => ({ lang: m[1], href: m[2] }));
export const h1Of = (html: string) => html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? '';
export const titleOf = (html: string) => html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '';
export const hrefs = (html: string) => [...html.matchAll(/<a\b[^>]*\shref="([^"]*)"/g)].map(m => m[1]);

export type Row = { slug: string; lang: 'en' | 'uz'; title?: string; tags?: string[]; alt_slug?: string | null; cover?: boolean; updated_at?: string; published_at?: string };

/** Pretends the `blog_posts` table holds these rows (the built-in guides are merged in by posts.ts as usual). */
export function stubPosts(rows: Row[]) {
  const full = rows.map((r, i) => ({
    id: r.slug, slug: r.slug, lang: r.lang, title: r.title ?? `${r.lang === 'uz' ? 'Maqola' : 'Article'} ${r.slug}`, excerpt: 'Excerpt', content_html: '<p>Body text</p>',
    cover_image_url: r.cover ? `https://example.com/${r.slug}.jpg` : null, cover_alt: null, tags: r.tags ?? ['writing'], seo_title: null, seo_description: null, alt_slug: r.alt_slug ?? null,
    published_at: r.published_at ?? `2026-09-${String(1 + (i % 28)).padStart(2, '0')}T00:00:00Z`, updated_at: r.updated_at ?? `2026-10-${String(1 + (i % 28)).padStart(2, '0')}T00:00:00Z`, author_name: 'Scorify', reading_minutes: 5,
  }));
  vi.stubGlobal('fetch', vi.fn(async (input: unknown) => {
    const u = String(input);
    const m = u.match(/slug=eq\.([^&]+)/);
    return new Response(JSON.stringify(m ? full.filter(p => p.slug === decodeURIComponent(m[1])) : full), { status: 200 });
  }));
}

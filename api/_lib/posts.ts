import { SUPABASE_KEY, SUPABASE_URL } from './shell.js';
import { STATIC_POSTS as GUIDES } from './data-blog-new.js';
import { TRANSLATED_POSTS } from './data-blog-i18n.js';
import { applyOverride } from './blog-overrides.js';

const STATIC_POSTS: Post[] = [...GUIDES, ...TRANSLATED_POSTS];

/** Articles written separately in each language that cover the same topic (the rest are linked by `alt_slug` on the translation). */
const KNOWN_PAIRS: [string, string][] = [
  ['ielts-band-score-explained', 'ielts-band-ball-qanday-hisoblanadi'],
  ['ielts-writing-task-1-how-to-describe-a-graph', 'ielts-writing-task-1-qanday-yoziladi'],
  ['ielts-writing-task-2-essay-structure', 'ielts-writing-task-2-qanday-yoziladi'],
  ['ielts-reading-true-false-not-given-strategy', 'ielts-reading-true-false-not-given-qanday-yechiladi'],
  ['ielts-listening-12-tips-and-common-traps', 'ielts-listening-uchun-12-maslahat'],
];

/** Makes language links two-way: if B says it is the translation of A, A links to B. */
function linkPairs<T extends { slug: string; alt_slug: string | null }>(rows: T[]): T[] {
  const alt = new Map<string, string>();
  for (const [a, b] of KNOWN_PAIRS) { alt.set(a, b); alt.set(b, a); }
  for (const r of rows) if (r.alt_slug) { if (!alt.has(r.slug)) alt.set(r.slug, r.alt_slug); if (!alt.has(r.alt_slug)) alt.set(r.alt_slug, r.slug); }
  return rows.map(r => (alt.has(r.slug) && alt.get(r.slug) !== r.alt_slug ? { ...r, alt_slug: alt.get(r.slug)! } : r));
}

export type Post = {
  id: string; slug: string; lang: string; title: string; excerpt: string | null; content_html: string; cover_image_url: string | null; cover_alt: string | null;
  tags: string[]; seo_title: string | null; seo_description: string | null; alt_slug: string | null; published_at: string; updated_at: string;
  author_name: string; reading_minutes: number | null;
};

async function rest<T>(path: string): Promise<T> {
  if (!SUPABASE_KEY) throw new Error('Supabase key is not configured');
  const r = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } });
  if (!r.ok) throw new Error(`Supabase ${r.status}`);
  return r.json() as Promise<T>;
}

const LIST_COLS = 'id,slug,lang,title,excerpt,cover_image_url,cover_alt,tags,published_at,updated_at,reading_minutes,author_name,alt_slug';
type ListItem = Omit<Post, 'content_html' | 'seo_title' | 'seo_description'>;
const summary = ({ content_html: _c, seo_title: _t, seo_description: _d, ...rest }: Post): ListItem => rest;

/** Guides that ship with the site (see data-blog-new.ts). Posts written in the admin editor with the same slug win. */
export const getPost = async (slug: string): Promise<Post | null> => {
  const fromDb = await rest<Post[]>(`blog_posts?select=*&slug=eq.${encodeURIComponent(slug)}&limit=1`).then(r => r[0] || null).catch(() => null);
  const post = fromDb ?? STATIC_POSTS.find(p => p.slug === slug) ?? null;
  if (!post) return null;
  const all = await listPosts().catch(() => []);
  const linked = all.find(p => p.slug === slug)?.alt_slug && !post.alt_slug ? { ...post, alt_slug: all.find(p => p.slug === slug)!.alt_slug } : post;
  // Edited copy that lives in code (the database is shared with production and is not rewritten).
  return applyOverride(linked);
};
/**
 * The list is read on almost every public page (the "study guides" block) and by crawlers all day, so it is kept in
 * memory for a few minutes per server instance. Every request used to cost one Supabase API call and one log entry.
 * If Supabase is slow or down, the last good list keeps being served.
 */
const LIST_TTL_MS = 10 * 60_000;
let listCache: { at: number; rows: ListItem[] } | null = null;
export const clearPostsCache = () => { listCache = null; };

export const listPosts = async (limit = 500): Promise<ListItem[]> => {
  const now = Date.now();
  if (!listCache || now - listCache.at > LIST_TTL_MS) {
    try {
      const rows = await rest<ListItem[]>(`blog_posts?select=${LIST_COLS}&order=published_at.desc&limit=500`);
      listCache = { at: now, rows };
    } catch {
      // keep the previous rows when there are any; retry soon instead of on every request
      listCache = { at: listCache ? now - LIST_TTL_MS + 30_000 : now - LIST_TTL_MS + 30_000, rows: listCache?.rows ?? [] };
    }
  }
  const fromDb = listCache.rows;
  const have = new Set(fromDb.map(p => p.slug));
  return linkPairs([...fromDb, ...STATIC_POSTS.filter(p => !have.has(p.slug)).map(summary)].map(applyOverride))
    .sort((a, b) => +new Date(b.published_at) - +new Date(a.published_at)).slice(0, limit);
};

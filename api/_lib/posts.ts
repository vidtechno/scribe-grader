import { SUPABASE_KEY, SUPABASE_URL } from './shell.js';
import { STATIC_POSTS } from './data-blog-new.js';

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
  return fromDb ?? STATIC_POSTS.find(p => p.slug === slug) ?? null;
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
  return [...fromDb, ...STATIC_POSTS.filter(p => !have.has(p.slug)).map(summary)]
    .sort((a, b) => +new Date(b.published_at) - +new Date(a.published_at)).slice(0, limit);
};

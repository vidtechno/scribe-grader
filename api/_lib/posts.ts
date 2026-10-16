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
export const listPosts = async (limit = 500): Promise<ListItem[]> => {
  const fromDb = await rest<ListItem[]>(`blog_posts?select=${LIST_COLS}&order=published_at.desc&limit=${limit}`).catch(() => [] as ListItem[]);
  const have = new Set(fromDb.map(p => p.slug));
  return [...fromDb, ...STATIC_POSTS.filter(p => !have.has(p.slug)).map(summary)]
    .sort((a, b) => +new Date(b.published_at) - +new Date(a.published_at)).slice(0, limit);
};

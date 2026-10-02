import { SUPABASE_KEY, SUPABASE_URL } from './shell.js';

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
export const getPost = async (slug: string) =>
  (await rest<Post[]>(`blog_posts?select=*&slug=eq.${encodeURIComponent(slug)}&limit=1`))[0] || null;
export const listPosts = (limit = 500) =>
  rest<Omit<Post, 'content_html' | 'seo_title' | 'seo_description'>[]>(`blog_posts?select=${LIST_COLS}&order=published_at.desc&limit=${limit}`);

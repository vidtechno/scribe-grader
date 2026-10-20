/**
 * Which of the three audiences a public page serves. The page decides (path, language, article topic), never the visitor's country:
 *  - general_english: the English course taught in Uzbek (/uz, /ingliz-tili-*, /inglizcha-sozlar, General English articles in Uzbek)
 *  - ielts_uz:        IELTS content in Uzbek
 *  - ielts_en:        IELTS content in English
 *  - other:           mixed lists, support pages, English articles that are not about IELTS
 */
export type Audience = 'general_english' | 'ielts_uz' | 'ielts_en' | 'other';

export function audienceForPath(path: string, lang: string): Audience {
  const p = (path.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/');
  if (p === '/uz') return 'general_english';
  if (p === '/uz/ielts') return 'ielts_uz';
  if (p === '/uz/blog' || p === '/blog' || p === '/') return p === '/' ? 'ielts_en' : 'other';
  if (/^\/(ingliz-tili-darslari|ingliz-tili-qoidalari|inglizcha-sozlar|learn-english-from-uzbek)(\/|$)/.test(p)) return 'general_english';
  if (/^\/(ielts|writing|speaking|reading|listening|mock-test)/.test(p)) return lang === 'uz' ? 'ielts_uz' : 'ielts_en';
  return 'other';
}

/** An article is IELTS when its slug, tags or title say so; an Uzbek article without IELTS is General English; otherwise it is not classified. */
export function audienceForPost(post: { slug: string; lang: string; tags: string[]; title: string }): Audience {
  const ielts = /ielts/i.test(post.slug) || /ielts/i.test(post.title) || post.tags.some((t) => /ielts/i.test(t));
  if (ielts) return post.lang === 'uz' ? 'ielts_uz' : 'ielts_en';
  return post.lang === 'uz' ? 'general_english' : 'other';
}

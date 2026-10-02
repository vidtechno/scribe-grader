import { supabase } from '@/integrations/supabase/client';

export type BlogLang = 'en' | 'uz';

const TRANSLIT: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'j', з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n',
  о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'x', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sh', ъ: '', ы: 'i', ь: '',
  э: 'e', ю: 'yu', я: 'ya', ў: 'o', қ: 'q', ғ: 'g', ҳ: 'h',
};

/** URL-safe slug. Handles Uzbek Latin (o‘, g‘, ʼ) and Cyrillic. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[ʻʼ’‘`´']/g, '')
    .replace(/[Ѐ-ӿ]/g, (ch) => TRANSLIT[ch] ?? '')
    .normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

export function textFromHtml(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

export function readingMinutes(html: string): number {
  const words = textFromHtml(html).split(' ').filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

const MAX_WIDTH = 1600;

/** Resizes large images and converts them to WebP so blog pages stay fast. GIFs are kept as they are. */
export async function prepareImage(file: File): Promise<{ blob: Blob; ext: string; type: string }> {
  if (file.type === 'image/gif' || file.type === 'image/svg+xml') {
    return { blob: file, ext: file.type === 'image/gif' ? 'gif' : 'svg', type: file.type };
  }
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, MAX_WIDTH / bitmap.width);
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext('2d')!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  const blob: Blob | null = await new Promise((resolve) => canvas.toBlob(resolve, 'image/webp', 0.85));
  if (!blob) return { blob: file, ext: file.type.split('/')[1] || 'jpg', type: file.type };
  return { blob, ext: 'webp', type: 'image/webp' };
}

export async function uploadBlogImage(file: File): Promise<string> {
  if (file.size > 12 * 1024 * 1024) throw new Error('Image is larger than 12 MB');
  const { blob, ext, type } = await prepareImage(file);
  if (blob.size > 5 * 1024 * 1024) throw new Error('Image is still larger than 5 MB after compression');
  const base = slugify(file.name.replace(/\.[^.]+$/, '')) || 'image';
  const path = `${new Date().getFullYear()}/${crypto.randomUUID().slice(0, 8)}-${base}.${ext}`;
  const { error } = await supabase.storage.from('blog-images').upload(path, blob, { contentType: type, cacheControl: '31536000' });
  if (error) throw error;
  return supabase.storage.from('blog-images').getPublicUrl(path).data.publicUrl;
}

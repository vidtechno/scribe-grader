export type Faq = { q: string; a: string };

const strip = (html: string) => html.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

/** Extracts question/answer pairs from a "Frequently asked questions" section (an h2 followed by h3 + p pairs). */
export function extractFaq(html: string): Faq[] {
  const start = html.search(/<h2[^>]*>\s*(Frequently asked questions|Ko‘p beriladigan savollar)\s*<\/h2>/i);
  if (start === -1) return [];
  const rest = html.slice(start).replace(/^<h2[^>]*>[\s\S]*?<\/h2>/i, '');
  const section = rest.split(/<h2[\s>]/i)[0];
  const faqs: Faq[] = [];
  for (const m of section.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi)) {
    const q = strip(m[1]); const a = strip(m[2]);
    if (q && a) faqs.push({ q, a });
  }
  return faqs;
}

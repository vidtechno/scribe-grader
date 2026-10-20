import { describe, expect, it, vi } from 'vitest';
import { call, hrefs, stubPosts } from './render-helper';

process.env.SUPABASE_SERVICE_ROLE_KEY ||= 'test-key';
process.env.SUPABASE_ANON_KEY ||= 'test-key';
process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||= 'test-key';

const ctaHrefs = (html: string) => [...html.matchAll(/<aside class="cta">[\s\S]*?<a class="btn" href="([^"]*)"/g)].map(m => m[1]);

describe('calls to action on the English IELTS pages follow the purpose of the page', () => {
  const cases: [string, string][] = [
    ['/api/seo?kind=sp1', '%2Fspeaking'], ['/api/seo?kind=sp1&slug=hobbies', '%2Fspeaking'], ['/api/seo?kind=sp2', '%2Fspeaking'], ['/api/seo?kind=sp3', '%2Fspeaking'],
    ['/api/seo?kind=wt2', '%2Fwriting'], ['/api/seo?kind=wt1', '%2Fwriting'], ['/api/seo?kind=vocab', '%2Fwriting'], ['/api/seo?kind=calc', '%2Fwriting'],
    ['/api/seo?kind=reading', '%2Freading'], ['/api/seo?kind=listening', '%2Flistening'],
  ];
  it.each(cases)('%s', async (url, next) => {
    stubPosts([{ slug: 'db-en-1', lang: 'en', tags: ['writing', 'speaking'] }, { slug: 'db-uz-1', lang: 'uz', tags: ['writing', 'speaking'] }]);
    const seo = (await import('../../api/seo')).default as never;
    const r = await call(seo, url);
    expect(r.statusCode).toBe(200);
    const ctas = ctaHrefs(r.body);
    expect(ctas.length).toBeGreaterThan(0);
    for (const h of ctas) expect(h, url).toBe(`/auth?next=${next}`);
    // IELTS-first: the only link to the Uzbek-taught course is the labelled secondary one; no Uzbek-language article is mixed in
    const course = hrefs(r.body).filter(h => /ingliz-tili-darslari|learn-english-from-uzbek/.test(h));
    expect(course.every(h => h === '/learn-english-from-uzbek'), url).toBe(true);
    expect(r.body).not.toContain('/blog/db-uz-1');
    expect(r.body).not.toMatch(/7 days free|Ingliz tilini/);
    vi.unstubAllGlobals();
  });

  it('breadcrumbs lead through the IELTS hub, in the page and in JSON-LD', async () => {
    stubPosts([]);
    const seo = (await import('../../api/seo')).default as never;
    const r = await call(seo, '/api/seo?kind=sp2&slug=' + (await import('../../api/_lib/data-part2')).CUE_CARDS[0].slug);
    expect(r.body).toContain('<a href="/">Home</a> / <a href="/ielts">IELTS</a> /');
    expect(r.body).toContain('"name":"IELTS","item":"https://www.scorify.uz/ielts"');
    expect(r.body).not.toContain('"name":"Blog","item"');
    vi.unstubAllGlobals();
  });

  it('the HTML site map lists both hubs and both article lists', async () => {
    stubPosts([{ slug: 'db-en-1', lang: 'en' }, { slug: 'db-uz-1', lang: 'uz' }]);
    const seo = (await import('../../api/seo')).default as never;
    const r = await call(seo, '/api/seo?kind=map');
    for (const h of ['/ielts', '/uz/ielts', '/blog', '/uz/blog']) expect(hrefs(r.body), h).toContain(h);
    vi.unstubAllGlobals();
  });
});

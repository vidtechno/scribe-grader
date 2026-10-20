import { beforeAll, describe, expect, it, vi } from 'vitest';
import { call, canonicalOf, h1Of, hreflangsOf, hrefs, robotsOf, stubPosts } from './render-helper';
import { PLAN_ENTITLEMENTS, FREE_PRACTICE_TESTS } from '@/lib/plans';

process.env.SUPABASE_SERVICE_ROLE_KEY ||= 'test-key';
process.env.SUPABASE_ANON_KEY ||= 'test-key';
process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||= 'test-key';

const SITE = 'https://www.scorify.uz';
let seo: (req: never, res: never) => Promise<unknown>;
let en = '';
let uz = '';

beforeAll(async () => {
  stubPosts([{ slug: 'db-en-1', lang: 'en' }, { slug: 'db-uz-1', lang: 'uz' }]);
  seo = (await import('../../api/seo')).default as never;
  en = (await call(seo, '/api/seo?kind=ielts-hub')).body;
  uz = (await call(seo, '/api/seo?kind=ielts-hub&lang=uz')).body;
});

/** The part of the page between the header and the footer. */
const main = (html: string) => html.slice(html.indexOf('</header>'), html.indexOf('<footer'));
const authLinks = (html: string) => hrefs(html).filter(h => h.startsWith('/auth'));

describe('IELTS hubs /ielts and /uz/ielts', () => {
  it('render with their own canonical, language and a single H1', () => {
    expect(canonicalOf(en)).toBe(`${SITE}/ielts`);
    expect(canonicalOf(uz)).toBe(`${SITE}/uz/ielts`);
    expect(en).toContain('<html lang="en">');
    expect(uz).toContain('<html lang="uz">');
    expect(en.match(/<h1/g)).toHaveLength(1);
    expect(uz.match(/<h1/g)).toHaveLength(1);
    expect(h1Of(en)).toMatch(/IELTS/);
    expect(h1Of(uz)).toMatch(/IELTS/);
    expect(robotsOf(en)).toMatch(/^index/);
    expect(robotsOf(uz)).toMatch(/^index/);
  });

  it('are an English-Uzbek pair with reciprocal hreflang and x-default on /ielts', () => {
    const want = [{ lang: 'en', href: `${SITE}/ielts` }, { lang: 'uz', href: `${SITE}/uz/ielts` }, { lang: 'x-default', href: `${SITE}/ielts` }];
    expect(hreflangsOf(en)).toEqual(want);
    expect(hreflangsOf(uz)).toEqual(want);
    // the language switch is a real counterpart link, labelled as the language
    expect(en).toMatch(/<a href="\/uz\/ielts" hreflang="uz" lang="uz" class="lang-link">O‘zbekcha<\/a>/);
    expect(uz).toMatch(/<a href="\/ielts" hreflang="en" lang="en" class="lang-link">English<\/a>/);
  });

  it('use only visible breadcrumbs and FAQ in JSON-LD', () => {
    for (const [html, home, crumb] of [[en, 'Home', 'IELTS'], [uz, 'Bosh sahifa', 'IELTS']] as const) {
      expect(html).toContain(`<nav class="crumbs" aria-label="Breadcrumb">`);
      expect(html).toContain(`"name":"${home}"`);
      expect(html).toContain(`"name":"${crumb}","item"`);
      const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
      const faq = ld.find(x => x['@type'] === 'FAQPage');
      expect(faq.mainEntity.length).toBeGreaterThanOrEqual(4);
      for (const q of faq.mainEntity) expect(html.replace(/&#39;/g, "'").replace(/&quot;/g, '"')).toContain(q.name.replace(/'/g, "'"));
    }
  });

  it('send every sign-up button to the matching practice through next=', () => {
    for (const html of [en, uz]) {
      const links = authLinks(main(html));
      expect(links.length).toBeGreaterThanOrEqual(7);
      for (const l of links) expect(l, l).toMatch(/^\/auth\?next=%2F(writing|speaking|reading|listening|mock-test)$/);
      for (const n of ['writing', 'speaking', 'reading', 'listening', 'mock-test']) expect(links, n).toContain(`/auth?next=%2F${n}`);
      // the header button follows the page too
      expect(authLinks(html.slice(0, html.indexOf('</header>')))).toEqual(['/auth?next=%2Fwriting']);
    }
  });

  it('English hub: the primary call to action is IELTS practice, the Uzbek-taught course is a labelled secondary link', () => {
    const hero = en.slice(en.indexOf('<section class="hero">'), en.indexOf('</section>', en.indexOf('<section class="hero">')));
    const heroButtons = [...hero.matchAll(/<a class="btn[^"]*" href="([^"]+)"/g)].map(m => m[1]);
    expect(heroButtons[0]).toBe('/auth?next=%2Fwriting');
    for (const h of heroButtons) expect(h).not.toMatch(/ingliz-tili|learn-english-from-uzbek|learn/);
    for (const h of authLinks(en)) expect(h).not.toMatch(/learn/);
    const course = hrefs(main(en)).filter(h => /ingliz-tili-darslari|learn-english-from-uzbek/.test(h));
    expect(course).toEqual(['/learn-english-from-uzbek']);
    expect(en).toMatch(/<a href="\/learn-english-from-uzbek">English course taught in Uzbek<\/a>/);
    // IELTS-first navigation
    const nav = en.match(/<nav class="links"[^>]*>([\s\S]*?)<\/nav>/)![1];
    const navLinks = hrefs(nav);
    expect(navLinks[0]).toBe('/ielts');
    expect(navLinks).not.toContain('/ingliz-tili-darslari');
    expect(navLinks.indexOf('/learn-english-from-uzbek')).toBeGreaterThan(navLinks.indexOf('/blog'));
  });

  it('link to every practice page and the guides in the language of the hub', async () => {
    for (const html of [en, uz]) {
      const h = hrefs(main(html));
      for (const p of ['/ielts-writing-task-2-questions', '/ielts-writing-task-1-samples', '/ielts-speaking-part-1', '/ielts-speaking-part-2', '/ielts-speaking-part-3', '/ielts-reading-practice', '/ielts-listening-practice', '/ielts-band-score-calculator', '/ielts-vocabulary']) expect(h, p).toContain(p);
    }
    expect(hrefs(main(en))).toContain('/blog');
    const { listPosts } = await import('../../api/_lib/posts');
    const lang = new Map((await listPosts()).map(p => [p.slug, p.lang]));
    const guideLangs = (html: string) => hrefs(main(html)).map(h => h.match(/^\/blog\/([^/?#]+)$/)?.[1]).filter((x): x is string => !!x).map(x => lang.get(x));
    expect(guideLangs(en).length).toBeGreaterThanOrEqual(4);
    expect(new Set(guideLangs(en))).toEqual(new Set(['en']));
    expect(hrefs(main(uz))).toContain('/uz/blog');
    expect(guideLangs(uz).length).toBeGreaterThanOrEqual(4);
    expect(new Set(guideLangs(uz))).toEqual(new Set(['uz']));
    expect(hrefs(main(uz))).toContain('/ingliz-tili-darslari');
  });

  it('state the real limits of plans.ts and keep the Learn trial apart from IELTS features', () => {
    const free = PLAN_ENTITLEMENTS.free, plus = PLAN_ENTITLEMENTS.plus;
    expect(free.personal).toMatchObject({ writing: 1, speaking: 1 });
    expect(FREE_PRACTICE_TESTS).toBe(3);
    for (const html of [en, uz]) {
      const text = html.replace(/<[^>]+>/g, ' ');
      expect(text).toContain(`${plus.personal.writing}`);
      expect(text).toContain(`${plus.personal.speaking}`);
      expect(text).toContain(`${plus.personal.mockTests}`);
    }
    expect(en).toMatch(/free account includes 1 Writing assessment, 1 Speaking assessment, IELTS Reading tests 1 to 3 and IELTS Listening tests 1 to 3/);
    expect(en).toMatch(/7-day free trial belongs to the Learn plan/);
    expect(uz).toMatch(/7 kunlik bepul sinov Learn tarifiga/);
    expect(en).not.toMatch(/\$\s?\d|so'm|UZS/); // no prices on the hub
  });

  it('say that Scorify bands are estimates and not official', () => {
    expect(en).toMatch(/AI estimates for practice, not official IELTS results/);
    expect(uz).toMatch(/rasmiy IELTS natijasi emas/);
  });
});

describe('English course page /learn-english-from-uzbek', () => {
  it('is an introduction for people who speak Uzbek, points international IELTS learners to /ielts and has no hreflang pair', async () => {
    const r = await call(seo, '/api/seo?kind=en-learn');
    expect(r.statusCode).toBe(200);
    expect(h1Of(r.body)).toMatch(/Uzbek explanations/);
    expect(r.body).toMatch(/For people who speak Uzbek/);
    expect(hrefs(main(r.body))).toContain('/ielts');
    expect(r.body).toContain('do not speak Uzbek');
    expect(hreflangsOf(r.body)).toEqual([]);
    expect(canonicalOf(r.body)).toBe(`${SITE}/learn-english-from-uzbek`);
    const course = await call(seo, '/api/seo?kind=course');
    expect(hreflangsOf(course.body)).toEqual([]);
    vi.unstubAllGlobals();
  });
});

import { describe, expect, it } from 'vitest';
import { page, langSwitch, defaultCtaNext } from '../../api/_lib/shell';

const base = { title: 'T', description: 'D', body: '<main></main>' };
const header = (html: string) => html.slice(html.indexOf('<header'), html.indexOf('</header>'));
const footer = (html: string) => html.slice(html.indexOf('<footer'));
const navLinks = (html: string) => [...header(html).matchAll(/<a href="([^"]+)"/g)].map(m => m[1]);

describe('language switch', () => {
  it('links the real counterpart when one exists (altLang or a matching hreflang alternate)', () => {
    const viaAlt = page({ ...base, path: '/x', altLang: { lang: 'uz', path: '/uz/x' } });
    expect(viaAlt).toContain('<a href="/uz/x" hreflang="uz" lang="uz" class="lang-link">O‘zbekcha</a>');
    expect(footer(viaAlt)).toContain('<a href="/uz/x" hreflang="uz" lang="uz">O‘zbekcha</a>');
    const viaAlternates = page({ ...base, path: '/x', lang: 'uz', alternates: [{ lang: 'uz', path: '/x' }, { lang: 'en', path: '/en-x' }, { lang: 'x-default', path: '/en-x' }] });
    expect(viaAlternates).toContain('<a href="/en-x" hreflang="en" lang="en" class="lang-link">English</a>');
  });

  it('without a counterpart an English page links the Uzbek home page and says so', () => {
    const html = page({ ...base, path: '/ielts-speaking-part-2' });
    const sw = langSwitch({});
    expect(sw).toMatchObject({ href: '/uz', real: false, label: 'Saytning o‘zbekcha versiyasi' });
    expect(header(html)).toMatch(/<a href="\/uz" hreflang="uz" lang="uz" class="lang-link" title="[^"]+">O‘zbekcha sayt<\/a>/);
    expect(footer(html)).toMatch(/<a href="\/uz" hreflang="uz" lang="uz" title="[^"]+">Saytning o‘zbekcha versiyasi<\/a>/);
    expect(html).not.toContain('hreflang" href'); // a switch is not an alternate link
    expect(html).not.toMatch(/<link rel="alternate" hreflang/);
  });

  it('without a counterpart an Uzbek page links the English home page and says so', () => {
    const html = page({ ...base, path: '/ingliz-tili-qoidalari', lang: 'uz' });
    expect(langSwitch({ lang: 'uz' })).toMatchObject({ href: '/', real: false, label: 'English version of the site' });
    expect(header(html)).toMatch(/<a href="\/" hreflang="en" lang="en" class="lang-link" title="[^"]+">English site<\/a>/);
    expect(footer(html)).toMatch(/<a href="\/" hreflang="en" lang="en" title="[^"]+">English version of the site<\/a>/);
  });

  it('ignores an alternate that is the page itself or x-default', () => {
    expect(langSwitch({ lang: 'uz', alternates: [{ lang: 'uz', path: '/a' }, { lang: 'x-default', path: '/b' }] }).real).toBe(false);
    expect(langSwitch({ alternates: [{ lang: 'en', path: '/a' }, { lang: 'x-default', path: '/a' }] }).real).toBe(false);
  });
});

describe('navigation', () => {
  it('English pages are IELTS-first and name the Uzbek-taught course as a secondary link', () => {
    const html = page({ ...base, path: '/ielts-vocabulary' });
    const links = navLinks(html);
    expect(links.slice(0, 7)).toEqual(['/ielts', '/ielts-writing-task-2-questions', '/ielts-speaking-part-2', '/ielts-reading-practice', '/ielts-listening-practice', '/ielts-band-score-calculator', '/blog']);
    expect(links).not.toContain('/ingliz-tili-darslari');
    expect(header(html)).toContain('class="sec"');
    expect(header(html)).toContain('English course (taught in Uzbek)');
  });

  it('Uzbek pages show General English and the Uzbek IELTS hub and blog', () => {
    const html = page({ ...base, path: '/ingliz-tili-qoidalari', lang: 'uz' });
    expect(navLinks(html).slice(0, 5)).toEqual(['/ingliz-tili-darslari', '/ingliz-tili-qoidalari', '/inglizcha-sozlar', '/uz/ielts', '/uz/blog']);
    expect(footer(html)).toContain('href="/uz/blog"');
    expect(footer(html)).toContain('href="/uz/ielts"');
  });

  it('the header button follows the purpose of the page', () => {
    expect(defaultCtaNext('/ielts-speaking-part-1/hobbies')).toBe('/speaking');
    expect(defaultCtaNext('/ielts-reading-practice')).toBe('/reading');
    expect(defaultCtaNext('/ielts-listening-practice')).toBe('/listening');
    expect(defaultCtaNext('/ielts-writing-task-2-questions/x')).toBe('/writing');
    expect(defaultCtaNext('/ingliz-tili-darslari/beginner')).toBe('/learn');
    expect(page({ ...base, path: '/ielts-speaking-part-2' })).toContain('class="btn" href="/auth?next=%2Fspeaking">Practise free');
    expect(page({ ...base, path: '/ingliz-tili-qoidalari', lang: 'uz' })).toContain('class="btn" href="/auth?next=%2Flearn">Boshlash');
    expect(page({ ...base, path: '/unknown', ctaNext: '/reading' })).toContain('href="/auth?next=%2Freading"');
    expect(page({ ...base, path: '/unknown' })).toContain('class="btn" href="/auth?next=%2Fpractice">');
  });
});

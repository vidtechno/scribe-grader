// @vitest-environment jsdom
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { audienceForPath, audienceForPost } from '../../api/_lib/audience';
import { page } from '../../api/_lib/shell';
import { trackOnce, setAnalyticsUser, PER_USER, rememberEntry, track } from '../lib/analytics';

describe('audience classification', () => {
  const post = (slug: string, lang: string, tags: string[] = [], title = 'x') => ({ slug, lang, tags, title });
  it('IELTS articles follow their language; General English articles are separate; other English articles are unclassified', () => {
    expect(audienceForPost(post('ielts-linking-words', 'en', ['ielts']))).toBe('ielts_en');
    expect(audienceForPost(post('ielts-writing-task-1-qanday-yoziladi', 'uz', ['ielts']))).toBe('ielts_uz');
    expect(audienceForPost(post('ingliz-tilida-12-zamon-jadvali', 'uz', ['grammatika']))).toBe('general_english');
    expect(audienceForPost(post('how-to-study-abroad', 'en', ['study']))).toBe('other');
  });
  it('paths decide pages, never the country', () => {
    expect(audienceForPath('/uz', 'uz')).toBe('general_english');
    expect(audienceForPath('/inglizcha-sozlar/ranglar', 'uz')).toBe('general_english');
    expect(audienceForPath('/ingliz-tili-qoidalari/present-simple', 'uz')).toBe('general_english');
    expect(audienceForPath('/ielts', 'en')).toBe('ielts_en');
    expect(audienceForPath('/uz/ielts', 'uz')).toBe('ielts_uz');
    expect(audienceForPath('/blog', 'en')).toBe('other');
  });
});

describe('server page tracking script', () => {
  beforeEach(() => { sessionStorage.clear(); localStorage.clear(); delete (window as unknown as { datafast?: unknown }).datafast; });
  const mount = (audience?: 'ielts_en' | 'general_english') => {
    const html = page({ title: 'T | Scorify.uz', description: 'd', path: '/blog/some-article', lang: 'en', audience, body: '<aside class="cta"><a id="c" href="/auth?next=%2Fwriting">Try</a></aside>' });
    document.documentElement.lang = 'en';
    document.body.innerHTML = html.slice(html.indexOf('<body>') + 6, html.indexOf('</body>'));
    const script = document.body.querySelector('script:not([src]):last-of-type') ?? [...document.body.querySelectorAll('script')].pop()!;
    new Function(script.textContent!).call(window); // eslint-disable-line no-new-func
  };
  it('stores the first page with its audience and counts the CTA click with them', () => {
    const seen: unknown[][] = [];
    (window as unknown as { datafast: (...a: unknown[]) => void }).datafast = (...a: unknown[]) => { seen.push(a); };
    mount('ielts_en');
    expect(sessionStorage.getItem('scorify:entry')).toBe('/');
    expect(sessionStorage.getItem('scorify:entry-aud')).toBe('ielts_en');
    document.addEventListener('click', (e) => e.preventDefault());
    document.getElementById('c')!.click();
    expect(seen[0][0]).toBe('cta_click');
    expect(seen[0][1]).toMatchObject({ location: 'cta_box', target: 'auth', audience: 'ielts_en', lang: 'en' });
  });
  it('keeps the original landing page when the SPA starts afterwards (article → /auth)', () => {
    mount('general_english');
    sessionStorage.setItem('scorify:entry', '/blog/some-article');
    rememberEntry('/auth');
    const calls: unknown[][] = [];
    (window as unknown as { datafast: (...a: unknown[]) => void }).datafast = (...a: unknown[]) => { calls.push(a); };
    track('signup_complete');
    expect(calls[0][1]).toMatchObject({ entry: '/blog/some-article', audience: 'general_english' });
  });
});

describe('once-only goals', () => {
  beforeEach(() => { localStorage.clear(); setAnalyticsUser(null); });
  it('first_* goals count once per account, not once per browser', () => {
    const f = vi.fn(); (window as unknown as { datafast: unknown }).datafast = f;
    setAnalyticsUser('user-a'); expect(trackOnce('first_ielts_practice', PER_USER)).toBe(true); expect(trackOnce('first_ielts_practice', PER_USER)).toBe(false);
    setAnalyticsUser('user-b'); expect(trackOnce('first_ielts_practice', PER_USER)).toBe(true);
    setAnalyticsUser(null); expect(trackOnce('first_ielts_practice', PER_USER)).toBe(false);
    expect(f).toHaveBeenCalledTimes(2);
  });
  it('purchases are keyed by the confirmed payment id', () => {
    expect(trackOnce('plan_purchased', 'pay:p1')).toBe(true);
    expect(trackOnce('plan_purchased', 'pay:p1')).toBe(false);
    expect(trackOnce('plan_purchased', 'pay:p2')).toBe(true);
  });
});

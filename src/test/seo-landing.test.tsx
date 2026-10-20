import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@/integrations/supabase/client', async () => await import('@/prerender/supabase-stub'));

const count = (html: string, re: RegExp) => (html.match(re) ?? []).length;

describe('prerendered landing pages', () => {
  beforeEach(() => { try { localStorage.clear(); sessionStorage.clear(); } catch { /* jsdom */ } });

  it('English "/" has real, visible content', async () => {
    const { renderLanding } = await import('@/prerender');
    const { html } = renderLanding('/');
    expect(html).toContain('<h1');
    expect(html).toMatch(/Practise IELTS with/);
    expect(html).not.toContain('seo-shell');
    expect(html).not.toMatch(/left:\s*-9999px/);
    expect(html).toMatch(/1,600 UZS/);
    expect(html).toMatch(/Free sample: 1 Writing, 1 Speaking, 3 Reading and 3 Listening/);
  });

  it('Uzbek "/uz" content is Uzbek', async () => {
    const { renderLanding } = await import('@/prerender');
    const { html } = renderLanding('/uz');
    expect(html).toMatch(/Birinchi inglizcha/);
    expect(html).not.toMatch(/Practise IELTS with/);
  });

  it('the language of a public address does not depend on the saved choice', async () => {
    localStorage.setItem('scorify:lang', 'uz');
    const { renderLanding } = await import('@/prerender');
    expect(renderLanding('/').html).toMatch(/Practise IELTS with/);
    localStorage.setItem('scorify:lang', 'en');
    expect(renderLanding('/uz').html).toMatch(/Birinchi inglizcha/);
  });

  it('audience routing: English page leads to IELTS practice, Uzbek page to the Uzbek-taught course', async () => {
    const { renderLanding } = await import('@/prerender');
    const en = renderLanding('/').html;
    const uz = renderLanding('/uz').html;
    expect(en).toContain('href="/auth?next=%2Fpractice"');
    expect(en).not.toMatch(/href="\/auth\?next=%2Flearn"[^>]*>[^<]*<button[^>]*>[^<]*Try IELTS/);
    expect(uz).toContain('href="/auth?next=%2Flearn"');
    // the English page labels General English as an Uzbek-taught course
    expect(en).toMatch(/English course with Uzbek explanations/);
    // IELTS comes before General English on the English page, after it on the Uzbek page
    expect(en.indexOf('id="ielts"')).toBeGreaterThan(-1);
    const at = (html: string, needle: string) => html.indexOf(needle, html.indexOf('id="paths"'));
    expect(at(en, 'IELTS preparation')).toBeLessThan(at(en, 'General English'));
    expect(at(uz, 'Umumiy ingliz tili')).toBeLessThan(at(uz, 'IELTS tayyorgarlik'));
  });

  it('does not use "from zero to B1" as the headline promise', async () => {
    const { renderLanding } = await import('@/prerender');
    for (const path of ['/', '/uz'] as const) {
      const h1 = /<h1[^>]*>([\s\S]*?)<\/h1>/.exec(renderLanding(path).html)?.[1] ?? '';
      expect(h1).not.toMatch(/B1/);
    }
  });
});

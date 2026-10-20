// @vitest-environment node
import { describe, expect, it, vi } from 'vitest';

vi.mock('@/integrations/supabase/client', async () => await import('@/prerender/supabase-stub'));

const count = (html: string, re: RegExp) => (html.match(re) ?? []).length;

// Same environment as the build step (no DOM), so react-helmet-async returns the head tags like it does for the real files.
describe('prerendered landing head', () => {
  it('"/" has exactly one title, description, canonical and robots, plus the reciprocal hreflang pair', async () => {
    const { renderLanding } = await import('@/prerender');
    const { head } = renderLanding('/');
    expect(count(head, /<title[ >]/g)).toBe(1);
    expect(count(head, /name="description"/g)).toBe(1);
    expect(count(head, /rel="canonical"/g)).toBe(1);
    expect(head).toContain('rel="canonical" href="https://www.scorify.uz/"');
    expect(count(head, /name="robots"/g)).toBe(1);
    expect(head).toContain('hrefLang="en" href="https://www.scorify.uz/"');
    expect(head).toContain('hrefLang="uz" href="https://www.scorify.uz/uz"');
    expect(head).toContain('hrefLang="x-default" href="https://www.scorify.uz/"');
    expect(head).toContain('property="og:url" content="https://www.scorify.uz/"');
  });

  it('"/uz" has its own canonical, Uzbek metadata and the same pair', async () => {
    const { renderLanding } = await import('@/prerender');
    const { head } = renderLanding('/uz');
    expect(count(head, /rel="canonical"/g)).toBe(1);
    expect(head).toContain('rel="canonical" href="https://www.scorify.uz/uz"');
    expect(head).toContain('property="og:locale" content="uz_UZ"');
    expect(head).toContain('property="og:url" content="https://www.scorify.uz/uz"');
    expect(head).toContain('hrefLang="x-default" href="https://www.scorify.uz/"');
  });
});

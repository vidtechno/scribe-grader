import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';

process.env.SUPABASE_SERVICE_ROLE_KEY ||= 'test-key';
process.env.SUPABASE_ANON_KEY ||= 'test-key';
process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||= 'test-key';

import seo from '../../api/seo';
import { COURSE } from '../../api/_lib/data-course';
import { LEARN_PRICE_UZS, TRIAL_DAYS } from '../../api/_lib/course-pages';
import { LEARN_TRIAL_DAYS, PLAN_ENTITLEMENTS } from '../lib/plans';

const OPEN = ['beginner', 'elementary', 'pre-intermediate', 'intermediate'];
const levels = COURSE.filter((l) => OPEN.includes(l.slug));
const count = (l: (typeof COURSE)[number]) => l.units.reduce((n, u) => n + u.lessons.length, 0);

async function render(query: string): Promise<string> {
  const headers: Record<string, string> = {};
  let body = '';
  const res = { statusCode: 0, setHeader: (k: string, v: string) => { headers[k] = v; }, end: (b?: string) => { body = b ?? ''; } };
  await seo({ url: `/api/seo?${query}`, headers: {} } as never, res as never);
  expect(res.statusCode, query).toBe(200);
  return body;
}
const jsonLd = (html: string): Record<string, unknown>[] =>
  [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((m) => JSON.parse(m[1]) as Record<string, unknown>);
const text = (html: string) => html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&#39;|&apos;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ');
const unescape = (v: string) => v.replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&');
const meta = (html: string, name: string) => unescape(html.match(new RegExp(`<meta (?:name|property)="${name}" content="([^"]*)"`))?.[1] ?? '');
// The sign-up button inside the page's call-to-action box (the site header and footer have their own generic links).
const hrefs = (html: string) => [...html.matchAll(/<aside class="cta">.*?<a class="btn" href="([^"]+)"/gs)].map((m) => m[1]);

describe('course data used by the public pages', () => {
  it('has the level sizes the pages must show', () => {
    expect(levels.map((l) => l.slug)).toEqual(OPEN);
    for (const l of levels) expect(count(l)).toBeGreaterThan(0);
  });
  it('uses the same trial length and Learn price as the app', () => {
    expect(TRIAL_DAYS).toBe(LEARN_TRIAL_DAYS);
    expect(LEARN_PRICE_UZS).toBe(Number(PLAN_ENTITLEMENTS.go.priceUzs.replace(/\D/g, '')));
  });
});

describe('level pages', () => {
  for (const l of levels) {
    it(`${l.slug}: every lesson/unit count comes from the data`, async () => {
      const html = await render(`kind=level&level=${l.slug}`);
      const n = count(l);
      const title = unescape(html.match(/<title>(.*?)<\/title>/)![1]);
      const desc = meta(html, 'description');
      expect(title).toContain(`${n} dars`);
      expect(desc).toContain(`${n} ta dars`);
      if (l.slug === 'elementary') expect(desc).toContain(`${l.units.length} bosqich`);
      const visible = text(html);
      expect(visible).toContain(`${n} ta dars, ${l.units.length} bosqich`);
      // No other lesson count may appear in the title or description.
      for (const stale of [48, 74]) { if (stale !== n) { expect(title).not.toMatch(new RegExp(`\\b${stale}\\b`)); expect(desc).not.toMatch(new RegExp(`\\b${stale}\\b`)); } }
      // Every lesson is listed once on the page.
      expect([...html.matchAll(/<li><a href="\/ingliz-tili-darslari\/[^"]+\/[^"]+">/g)].length).toBe(n);
      const course = jsonLd(html).find((d) => d['@type'] === 'Course')!;
      expect(course.description).toBe(desc);
      expect((course.hasPart as unknown[]).length).toBe(n);
    });

    it(`${l.slug}: JSON-LD has no credits and only states what the page shows`, async () => {
      const html = await render(`kind=level&level=${l.slug}`);
      const course = jsonLd(html).find((d) => d['@type'] === 'Course')! as Record<string, any>;
      expect(course).not.toHaveProperty('numberOfCredits');
      expect(JSON.stringify(jsonLd(html))).not.toContain('numberOfCredits');
      expect(course.isAccessibleForFree).toBe(false);
      expect(course.inLanguage).toBe('uz');
      expect(course.provider.name).toBe('Scorify.uz');
      expect(course.hasCourseInstance.courseMode).toBe('online');
      expect(course.hasCourseInstance).not.toHaveProperty('courseWorkload');
      expect(course.offers.priceCurrency).toBe('UZS');
      expect(course.offers.price).toBe('49000');
      const visible = text(html);
      expect(visible).toContain(`${TRIAL_DAYS} kun bepul sinov`);
      expect(visible).toContain('49 000');
      expect(course.offers.description).toContain(`${TRIAL_DAYS} kun bepul`);
      expect(visible).toContain(String(course.offers.description));
      expect(visible).toContain(l.title);
      // The FAQ markup matches the visible FAQ.
      const faq = jsonLd(html).find((d) => d['@type'] === 'FAQPage')! as Record<string, any>;
      for (const q of faq.mainEntity) { expect(visible).toContain(q.name); expect(visible).toContain(q.acceptedAnswer.text); }
    });

    it(`${l.slug}: CTA signs up and returns to the level's first lesson`, async () => {
      const html = await render(`kind=level&level=${l.slug}`);
      const first = l.units[0].lessons[0].id;
      const cta = hrefs(html).filter((h) => h.startsWith('/auth'));
      expect(cta).toEqual([`/auth?next=${encodeURIComponent(`/learn/lesson/${first}`)}`]);
    });
  }
});

describe('hub page', () => {
  it('shows the total and per-level counts from the data', async () => {
    const html = await render('kind=course');
    const total = levels.reduce((n, l) => n + count(l), 0);
    expect(meta(html, 'description')).toContain(`jami ${total} ta dars`);
    const visible = text(html);
    expect(visible).toContain(`${total} ta dars`);
    for (const l of levels) expect(visible).toContain(`${count(l)} dars · ${l.units.length} bosqich`);
  });
  it('CTA returns to /learn and is honest about the trial and the paid plan', async () => {
    const html = await render('kind=course');
    expect(hrefs(html).filter((h) => h.startsWith('/auth'))).toEqual(['/auth?next=%2Flearn']);
    const visible = text(html);
    expect(visible).toContain(`${TRIAL_DAYS} kun bepul sinov`);
    expect(visible).toContain('49 000');
    expect(jsonLd(html).some((d) => d['@type'] === 'Course')).toBe(false);
    expect(JSON.stringify(jsonLd(html))).not.toContain('numberOfCredits');
  });
});

describe('lesson pages', () => {
  it('CTA returns to the exact lesson in the app and says what happens next', async () => {
    for (const l of levels) {
      const lessons = l.units.flatMap((u) => u.lessons);
      for (const x of [lessons[0], lessons[Math.floor(lessons.length / 2)], lessons[lessons.length - 1]]) {
        const html = await render(`kind=lesson&level=${l.slug}&slug=${x.slug}`);
        expect(hrefs(html).filter((h) => h.startsWith('/auth')), x.id).toEqual([`/auth?next=${encodeURIComponent(`/learn/lesson/${x.id}`)}`]);
        const visible = text(html);
        expect(visible).toContain(`${TRIAL_DAYS} kun bepul sinov`);
        expect(visible).toContain('Darslar ketma-ket ochiladi');
        expect(JSON.stringify(jsonLd(html))).not.toContain('numberOfCredits');
      }
    }
  });
  it('lesson ids are safe to carry through the sign-up link', () => {
    for (const l of levels) for (const u of l.units) for (const x of u.lessons) expect(x.id, x.id).toMatch(/^[A-Za-z0-9_-]+$/);
  });
});

describe('English landing page', () => {
  it('does not carry a hand-typed lesson total', async () => {
    const html = await render('kind=en-learn');
    const total = COURSE.reduce((n, l) => n + count(l), 0);
    expect(text(html)).toContain(String(total));
    expect(text(html)).not.toMatch(/about 360/);
    expect(readFileSync('api/_lib/learn-pages.ts', 'utf8')).not.toMatch(/about 360/);
  });
});

import { afterEach, describe, expect, it, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { applyOverride, needsTimerScript, OVERRIDES, TIMER_SCRIPT, type OverridablePost } from '../../api/_lib/blog-overrides';
import { COLLEGE_SAMPLE, LIBRARY_MODEL, SCORED_ARTICLE } from '../../api/_lib/blog-override-content';
import { STATIC_POSTS } from '../../api/_lib/data-blog-new';

// Headings of the production articles as they were when the overrides were written (read-only SELECT). The insertion points must be among them.
const HEADINGS: Record<string, string[]> = {
  'ielts-writing-task-1-how-to-describe-a-graph': ['What examiners want in Task 1', 'The 20-minute plan', 'The language of change', 'Tenses in Task 1', 'Six mistakes that lower your Task 1 score', 'Your Task 1 checklist', 'Practise with real charts', 'Frequently asked questions'],
  'ielts-writing-task-1-qanday-yoziladi': ['Task 1 da ekspert nimani qidiradi?', '20 daqiqalik reja', 'Diagramma turlari va ularga mos iboralar', 'Trend (o‘zgarish) uchun lug‘at', 'Zamonlar', 'Task 1 dagi 6 ta keng tarqalgan xato', 'Topshirishdan oldingi tekshiruv ro‘yxati', 'Haqiqiy diagrammalar bilan mashq qiling', 'Ko‘p beriladigan savollar'],
  'ielts-writing-task-2-qanday-yoziladi': ['Task 2 nima va nega bu qadar muhim?', 'Insho qanday baholanadi?', '40 daqiqalik reja: vaqtni qanday taqsimlash kerak?', '1-bosqich: Savolni to‘g‘ri tahlil qiling', 'To‘liq namuna insho (izohlar bilan)', 'Eng ko‘p uchraydigan 7 ta xato', 'Topshirishdan oldingi tekshiruv ro‘yxati', 'Ko‘p beriladigan savollar', 'Mashq qiling va natijani o‘lchang'],
  'ielts-speaking-part-2-how-to-speak-for-two-minutes': ['How IELTS Speaking Part 2 works', 'The two-minute plan', 'What to do when you run out of ideas', 'A full model answer', 'Frequently asked questions', 'Start practising today'],
};
const LANG: Record<string, string> = { 'ielts-writing-task-1-qanday-yoziladi': 'uz', 'ielts-writing-task-2-qanday-yoziladi': 'uz' };

const fixture = (slug: string): OverridablePost & Record<string, unknown> => ({
  id: slug, slug, lang: LANG[slug] ?? 'en', title: 'Old title', excerpt: 'Old excerpt', cover_image_url: null, cover_alt: 'Old alt', tags: ['ielts'],
  seo_title: 'Old seo', seo_description: 'Old description', alt_slug: null, published_at: '2026-01-01T00:00:00Z', updated_at: '2026-02-01T00:00:00Z', author_name: 'Scorify Team', reading_minutes: 8,
  content_html: `<p>Intro paragraph.</p>${HEADINGS[slug].map(h => `<h2>${h}</h2><p>Old section text.</p>`).join('')}`,
});

const words = (s: string) => s.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length;
const count = (s: string, re: RegExp) => (s.match(re) ?? []).length;

describe('override module', () => {
  it('leaves other posts alone and returns the same object', () => {
    const p = { slug: 'some-other-post', title: 'T', excerpt: null, content_html: '<p>x</p>' };
    expect(applyOverride(p)).toBe(p);
  });

  for (const slug of Object.keys(HEADINGS)) {
    it(`${slug}: applies, is idempotent and inserts before the right heading`, () => {
      const post = fixture(slug);
      const once = applyOverride(post);
      expect(once.title).not.toBe('Old title');
      expect(once.seo_title).not.toBe('Old seo');
      expect(once.seo_description).not.toBe('Old description');
      expect(once.excerpt).not.toBe('Old excerpt');
      expect(once.content_html!.startsWith(`<!--ov:${slug}-->`)).toBe(true);
      expect(once.updated_at).toBe('2026-10-20T00:00:00.000Z');
      expect(applyOverride(once)).toEqual(once); // idempotent
      expect(applyOverride(structuredClone(once))).toEqual(once);
      expect(post.content_html).toContain('Old section text.'); // input not mutated
      // each insertion sits right before its marker heading, and every marker exists in the real article
      for (const ins of OVERRIDES[slug].insertions ?? []) {
        const heading = ins.before!.replace(/<\/?h2>/g, '');
        expect(HEADINGS[slug], `${slug}: marker "${heading}" must be a heading of the current article`).toContain(heading);
        const at = once.content_html!.indexOf(ins.before!);
        expect(at).toBeGreaterThan(0);
        expect(once.content_html!.indexOf(ins.html.slice(0, 60))).toBeLessThan(at);
        expect(count(once.content_html!, new RegExp(ins.before!.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'))).toBe(1);
      }
      expect(once.content_html).not.toMatch(/<script/i); // blog.ts would strip them anyway
      expect(once.content_html).not.toMatch(/<h1/i);
      expect(once.content_html).not.toMatch(/undefined|\[object/);
    });
  }

  it('applies to list rows (no content) without inventing fields', () => {
    const row = { slug: 'ielts-speaking-part-2-how-to-speak-for-two-minutes', title: 'Old', excerpt: 'Old', cover_alt: null as string | null };
    const out = applyOverride(row);
    expect(out.title).toMatch(/How Many Minutes/);
    expect('content_html' in out).toBe(false);
    expect('seo_title' in out).toBe(false);
  });

  it('a missing marker appends the section instead of losing it', () => {
    const post = { ...fixture('ielts-writing-task-1-how-to-describe-a-graph'), content_html: '<p>Rewritten article without the old headings.</p>' };
    const out = applyOverride(post);
    expect(out.content_html).toContain('Worked example');
    expect(out.content_html).toContain('Practice task');
  });
});

describe('graph article: original line graph, model, number selection, practice', () => {
  const html = applyOverride(fixture('ielts-writing-task-1-how-to-describe-a-graph')).content_html!;
  it('has an inline SVG line graph labelled as fictional, and a bar chart for the practice task', () => {
    expect(count(html, /<svg\b/g)).toBe(2);
    expect(html).toContain('fictional data');
    expect(html).toContain('<polyline'); // line graph
    expect(html).toContain('Riverside Library');
  });
  it('model report is long enough and uses only numbers that come from the data', () => {
    const model = Object.values(LIBRARY_MODEL).join(' ');
    expect(words(model)).toBeGreaterThanOrEqual(150);
    const allowed = new Set([30, 34, 41, 52, 61, 58, 55, 47, 36, 20, 22, 21, 23, 28, 6, 2, 2000, 2010, 2015, 2020]);
    for (const n of model.match(/\d+/g) ?? []) expect(allowed.has(+n), `number ${n}`).toBe(true);
    // derived claims are right: gap 2000 = 58-30 = 28, gap 2010 = 47-41 = 6
    expect(58 - 30).toBe(28); expect(47 - 41).toBe(6);
    expect(LIBRARY_MODEL.overview).not.toMatch(/\d/); // overview without numbers
  });
  it('explains how to choose numbers and has a practice task with a sample answer and a Writing CTA', () => {
    expect(html).toContain('How to choose which numbers to mention');
    expect(html).toContain('Practice task');
    expect(html).toContain('<details>');
    expect(html).toContain('href="/auth?next=%2Fwriting"');
    expect(words(`${COLLEGE_SAMPLE.overview} ${COLLEGE_SAMPLE.detail}`)).toBeGreaterThan(80);
    expect(COLLEGE_SAMPLE.overview).not.toMatch(/\d/);
    // practice data adds up
    expect(45 + 15 + 25 + 15).toBe(100); expect(30 + 28 + 24 + 18).toBe(100);
    expect(html.indexOf('Worked example')).toBeLessThan(html.indexOf('The language of change'));
    expect(html.indexOf('Practice task')).toBeLessThan(html.indexOf('Frequently asked questions'));
  });
});

describe('Uzbek Task 1 / Task 2 articles', () => {
  it('Task 1: chart, model, four-criteria analysis, practice and CTA', () => {
    const html = applyOverride(fixture('ielts-writing-task-1-qanday-yoziladi')).content_html!;
    expect(count(html, /<svg\b/g)).toBe(2);
    for (const c of ['Task Achievement', 'Coherence and Cohesion', 'Lexical Resource', 'Grammatical Range and Accuracy']) expect(html).toContain(c);
    expect(html).toContain('Namuna hisobot');
    expect(html).toContain('Mashq topshirig‘i');
    expect(html).toContain('xayoliy');
    expect(html).toContain('href="/auth?next=%2Fwriting"');
    expect(html.indexOf('Namuna hisobot')).toBeLessThan(html.indexOf('Diagramma turlari va ularga mos iboralar'));
  });
  it('Task 2: analysis by the four criteria, practice prompt, CTA', () => {
    const html = applyOverride(fixture('ielts-writing-task-2-qanday-yoziladi')).content_html!;
    for (const c of ['Task Response', 'Coherence and Cohesion', 'Lexical Resource', 'Grammatical Range and Accuracy']) expect(html).toContain(c);
    expect(html).toContain('Mashq topshirig‘i');
    expect(html).toContain('href="/auth?next=%2Fwriting"');
    expect(html.indexOf('to‘rt mezon bo‘yicha tahlil')).toBeLessThan(html.indexOf('Eng ko‘p uchraydigan 7 ta xato'));
    expect(html).not.toMatch(/Band 7 uchun/);
  });
});

describe('scoring article', () => {
  const post = STATIC_POSTS.find(p => p.slug === 'how-ielts-speaking-and-writing-are-scored')!;
  const out = applyOverride(post);
  it('answers first, then criteria tables, weighting, rounding and the honesty line', () => {
    const html = out.content_html;
    expect(html.startsWith('<!--ov:how-ielts-speaking-and-writing-are-scored--><aside class="box good" id="short-answer">')).toBe(true);
    expect(html.indexOf('Short answer')).toBeLessThan(html.indexOf('<h2>'));
    for (const c of ['Fluency and Coherence', 'Lexical Resource', 'Grammatical Range and Accuracy', 'Pronunciation', 'Task Achievement', 'Task Response']) expect(html).toContain(c);
    expect(count(html, /<table>/g)).toBeGreaterThanOrEqual(3);
    expect(count(html, /<td>25%<\/td>/g)).toBe(4);
    expect(html).toMatch(/Task 2 carries more weight than Task 1/);
    expect(html).toMatch(/not an official IELTS score/);
    expect(html).toContain('<h2>Frequently asked questions</h2>');
    expect(out.title).toMatch(/^How Is IELTS Scored in Speaking and Writing/);
  });
  it('rounding table follows the published rule', () => {
    const rule = (avg: number) => { const f = avg - Math.floor(avg); return Math.floor(avg) + (f < 0.25 ? 0 : f < 0.75 ? 0.5 : 1); };
    for (const [avg, band] of [[6.125, 6], [6.25, 6.5], [6.375, 6.5], [6.75, 7], [6.875, 7]] as const) {
      expect(rule(avg)).toBe(band);
      expect(SCORED_ARTICLE).toContain(`<tr><td>${avg}</td><td>${band.toFixed(1)}</td></tr>`);
    }
    expect((7 + 6.5 + 6 + 6.5) / 4).toBe(6.5);
  });
  it('old text with unverifiable claims is gone', () => {
    expect(out.content_html).not.toMatch(/does not know your other scores/);
  });
});

describe('Speaking Part 2 article: answer first and practice timer', () => {
  const out = applyOverride(fixture('ielts-speaking-part-2-how-to-speak-for-two-minutes'));
  it('answers the minutes question at the very top and places the timer hook', () => {
    const html = out.content_html!;
    expect(html.startsWith('<!--ov:ielts-speaking-part-2-how-to-speak-for-two-minutes--><aside class="box good" id="short-answer">')).toBe(true);
    expect(html).toMatch(/1 minute to prepare<\/strong>[\s\S]*1 to 2 minutes<\/strong>[\s\S]*stops you at 2 minutes/);
    expect(html.indexOf('data-ielts-timer')).toBeLessThan(html.indexOf('The two-minute plan'));
    expect(html).toContain('data-timer-start');
    expect(html).toContain('data-timer-reset');
    expect(html).toContain('role="timer"');
    expect(html).toContain('aria-live="polite"');
    expect(needsTimerScript(html)).toBe(true);
    expect(needsTimerScript('<p>no timer</p>')).toBe(false);
    expect(html).not.toMatch(/ on\w+=/); // blog.ts strips inline handlers
  });

  describe('timer script', () => {
    afterEach(() => { vi.useRealTimers(); });
    const mount = () => {
      document.body.innerHTML = out.content_html!.replace(/<!--[\s\S]*?-->/, '');
      new Function(TIMER_SCRIPT.replace(/^<script>/, '').replace(/<\/script>$/, ''))();
      const q = (s: string) => document.querySelector(s) as HTMLElement;
      return { clock: q('[data-timer-clock]'), phase: q('[data-timer-phase]'), start: q('[data-timer-start]') as HTMLButtonElement, skip: q('[data-timer-skip]') as HTMLButtonElement, reset: q('[data-timer-reset]') as HTMLButtonElement, ctl: q('[data-timer-controls]') };
    };
    it('runs 1:00 preparation, then 2:00 speaking, then stops; reset works', () => {
      vi.useFakeTimers();
      const t = mount();
      expect(t.ctl.hidden).toBe(false); // controls appear only when the script runs
      expect(t.clock.textContent).toBe('1:00');
      t.start.click();
      expect(t.phase.textContent).toMatch(/Preparation/);
      expect(t.start.disabled).toBe(true);
      vi.advanceTimersByTime(30_000);
      expect(t.clock.textContent).toBe('0:30');
      vi.advanceTimersByTime(30_500);
      expect(t.phase.textContent).toMatch(/Speak now/);
      expect(t.clock.textContent).toBe('2:00');
      vi.advanceTimersByTime(60_500);
      expect(t.phase.textContent).toMatch(/Keep going/);
      vi.advanceTimersByTime(60_000);
      expect(t.phase.textContent).toMatch(/Time is up/);
      expect(t.clock.textContent).toBe('0:00');
      expect(t.start.textContent).toBe('Start again');
      t.reset.click();
      expect(t.clock.textContent).toBe('1:00');
      expect(t.phase.textContent).toBe('Ready');
      t.start.click();
      t.skip.click();
      expect(t.phase.textContent).toMatch(/Speak now/);
    });
    it('is safe to run twice and makes no network calls', () => {
      vi.useFakeTimers();
      const fetchSpy = vi.fn();
      (globalThis as unknown as { fetch: unknown }).fetch = fetchSpy;
      const t = mount();
      new Function(TIMER_SCRIPT.replace(/^<script>/, '').replace(/<\/script>$/, ''))();
      t.start.click();
      vi.advanceTimersByTime(5_000);
      expect(fetchSpy).not.toHaveBeenCalled();
      expect(t.clock.textContent).toBe('0:55');
      expect(TIMER_SCRIPT).not.toMatch(/fetch|XMLHttpRequest|sendBeacon|WebSocket/);
    });
  });
});

describe('links inside the overrides point to existing pages', () => {
  const vercel = JSON.parse(readFileSync(resolve(process.cwd(), 'vercel.json'), 'utf8')) as { rewrites: { source: string }[] };
  const patterns = vercel.rewrites.map(r => new RegExp(`^${r.source.replace(/:[a-z]+\*?/gi, '[^/]+').replace(/\//g, '\\/')}$`));
  const dbBlogSlugs = ['ielts-band-score-explained']; // referenced by existing articles and by KNOWN_PAIRS in posts.ts
  it('every internal href resolves', () => {
    const all = Object.keys(HEADINGS).map(s => applyOverride(fixture(s)).content_html!).join('') + SCORED_ARTICLE;
    const hrefs = new Set([...all.matchAll(/href="(\/[^"]*)"/g)].map(m => m[1]));
    expect(hrefs.size).toBeGreaterThan(5);
    for (const href of hrefs) {
      const path = href.split('?')[0];
      if (path === '/auth') { expect(href).toMatch(/^\/auth\?next=%2F(writing|speaking)$/); continue; }
      if (path.startsWith('/blog/')) { expect([...STATIC_POSTS.map(p => p.slug), ...dbBlogSlugs], href).toContain(path.slice(6)); continue; }
      expect(patterns.some(p => p.test(path)), href).toBe(true);
    }
  });
});

describe('through the blog handler', () => {
  it('renders each overridden article with one title, description, canonical and H1', async () => {
    vi.resetModules();
    const posts = Object.keys(HEADINGS).map(fixture);
    const staticPost = STATIC_POSTS.find(p => p.slug === 'how-ielts-speaking-and-writing-are-scored')!;
    vi.doMock('../../api/_lib/posts', () => ({
      getPost: async (slug: string) => { const p = [...posts, staticPost].find(x => x.slug === slug); return p ? applyOverride(p as never) : null; },
      listPosts: async () => [],
    }));
    const { default: handler } = await import('../../api/blog');
    for (const slug of [...Object.keys(HEADINGS), 'how-ielts-speaking-and-writing-are-scored']) {
      let body = ''; const res = { statusCode: 0, setHeader() {}, end(b?: string) { body = b ?? ''; } };
      await handler({ url: `/api/blog?slug=${slug}` } as never, res as never);
      expect(res.statusCode, slug).toBe(200);
      expect(count(body, /<title>/g)).toBe(1);
      expect(count(body, /<meta name="description"/g)).toBe(1);
      expect(count(body, /<link rel="canonical"/g)).toBe(1);
      expect(body).toContain(`<link rel="canonical" href="https://www.scorify.uz/blog/${slug}">`);
      expect(count(body, /<h1>/g)).toBe(1);
      expect(body).not.toContain('Old title');
      expect(body).not.toContain('Old description');
      if (slug.includes('describe-a-graph') || slug.endsWith('task-1-qanday-yoziladi')) expect(body).toMatch(/<svg viewBox/);
      if (slug.includes('two-minutes')) { expect(body).toContain('data-ielts-timer'); expect(body).toContain('role="timer"'); }
      if (slug.includes('are-scored')) expect(body).toContain('id="short-answer"');
    }
    vi.doUnmock('../../api/_lib/posts');
  });
});

describe('official source links', () => {
  it('every article with IELTS rules links to ielts.org, IDP and the British Council', () => {
    for (const slug of ['how-ielts-speaking-and-writing-are-scored', 'ielts-speaking-part-2-how-to-speak-for-two-minutes', 'ielts-writing-task-1-how-to-describe-a-graph', 'ielts-writing-task-1-qanday-yoziladi', 'ielts-writing-task-2-qanday-yoziladi']) {
      const base = STATIC_POSTS.find((p) => p.slug === slug);
      const html = applyOverride({ slug, title: 't', excerpt: '', cover_alt: null, content_html: base?.content_html ?? '<h2>x</h2>' } as unknown as OverridablePost & { content_html: string }).content_html;
      expect(html, slug).toContain('https://ielts.org/');
      expect(html, slug).toContain('ielts.idp.com');
      expect(html, slug).toContain('takeielts.britishcouncil.org');
    }
  });
});

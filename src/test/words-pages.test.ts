import { describe, expect, it } from 'vitest';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import seo from '../../api/seo';
import { COURSE } from '../../api/_lib/data-course';
import { WORD_TOPICS } from '../../api/_lib/data-learn-words';
import { WORD_EXAMPLES } from '../../api/_lib/data-learn-words-ex';
import { GUIDES } from '../../api/_lib/data-learn-guides';
import { AUDIO_VERSION, audioKey as serverKey, wordAudio } from '../../api/_lib/word-audio';
import { audioKey, AUDIO_VERSION as APP_VERSION } from '../../src/features/learn/audio-key';

const SLUGS = ['hafta-kunlari-va-oylar', 'ranglar', 'oila-azolari', 'sonlar-1-100'];
const LESSON_ID: Record<string, string> = { 'hafta-kunlari-va-oylar': 'u3-l7', ranglar: 'u1-l8', 'oila-azolari': 'u4-l7', 'sonlar-1-100': 'u1-l6' };

async function render(slug: string): Promise<string> {
  let body = ''; let status = 0;
  const res = { statusCode: 0, setHeader() {}, end(b?: string) { body = b ?? ''; } };
  await seo({ url: `/api/seo?kind=words&slug=${slug}` } as never, res as never);
  status = res.statusCode;
  expect(status).toBe(200);
  return body;
}
const count = (html: string, re: RegExp) => (html.match(re) ?? []).length;

describe('audio keys for word pages', () => {
  it('uses the same hash and cache version as the course player', () => {
    expect(AUDIO_VERSION).toBe(APP_VERSION);
    for (const t of WORD_TOPICS) for (const [en] of t.words) expect(serverKey(en)).toBe(audioKey(en));
  });
  it('lists exactly the words that have a recording on disk', () => {
    for (const t of WORD_TOPICS) for (const [en] of t.words) {
      const onDisk = existsSync(resolve(process.cwd(), `public/audio/${audioKey(en)}.mp3`));
      expect(!!wordAudio(en), `${t.slug}: ${en} (regenerate api/_lib/word-audio.ts if the audio folder changed)`).toBe(onDisk);
    }
  });
});

describe('vocabulary pages: Search Console group', () => {
  it('has an example sentence for every word of the four pages', () => {
    for (const s of SLUGS) {
      const t = WORD_TOPICS.find(x => x.slug === s)!;
      for (const [en] of t.words) expect(WORD_EXAMPLES[s]?.[en], `${s}: ${en}`).toBeTruthy();
      expect(Object.keys(WORD_EXAMPLES[s]).sort()).toEqual(t.words.map(w => w[0]).sort());
      expect(t.groups!.reduce((n, g) => n + g.n, 0)).toBe(t.words.length);
      expect(t.quizWhy).toBeTruthy();
    }
  });

  for (const slug of SLUGS) {
    it(`${slug}: renders a complete page`, async () => {
      const html = await render(slug);
      const t = WORD_TOPICS.find(x => x.slug === slug)!;
      expect(count(html, /<title>/g)).toBe(1);
      expect(count(html, /<meta name="description"/g)).toBe(1);
      expect(count(html, /<link rel="canonical"/g)).toBe(1);
      expect(html).toContain(`<link rel="canonical" href="https://www.scorify.uz/inglizcha-sozlar/${slug}">`);
      expect(count(html, /<h1>/g)).toBe(1);
      expect(html).toContain(`<h1>${t.h1.replace(/'/g, '&#39;')}</h1>`);
      expect(html).not.toMatch(/undefined|\[object|NaN/);
      // quiz markup + data, lesson continuation through sign-up
      expect(html).toContain('id="mini-test"');
      expect(html).toContain('id="mq-data"');
      expect(html).toContain(`/auth?next=${encodeURIComponent(`/learn/lesson/${LESSON_ID[slug]}`)}`);
      // audio: every button points to an existing file and is hidden until the script runs
      const keys = [...html.matchAll(/class="wl-play" data-a="([0-9a-f]{16})"/g)].map(m => m[1]);
      expect(keys.length).toBeGreaterThan(5);
      for (const k of keys) expect(existsSync(resolve(process.cwd(), `public/audio/${k}.mp3`))).toBe(true);
      expect(html).toContain('hidden>▶</button>');
      // phones: the table turns into cards (styles present) and every example sentence is rendered
      expect(html).toContain('@media(max-width:640px)');
      for (const [en, uz] of Object.values(WORD_EXAMPLES[slug])) { expect(html).toContain(en.replace(/'/g, '&#39;')); expect(html).toContain(uz.replace(/'/g, '&#39;')); }
      // the promise of "audio" in the meta tags needs real coverage
      const share = t.words.filter(w => wordAudio(w[0])).length / t.words.length;
      if (/audio|tinglash/i.test(t.metaDesc + t.metaTitle)) expect(share, `${slug} promises audio`).toBeGreaterThanOrEqual(0.9);
      // internal links point to existing pages
      for (const [, href] of html.matchAll(/<a [^>]*href="(\/[^"#?]*)"/g)) {
        if (href.startsWith('/inglizcha-sozlar/')) expect(WORD_TOPICS.map(x => x.slug)).toContain(href.split('/')[2]);
        if (href.startsWith('/ingliz-tili-qoidalari/')) expect(GUIDES.map(x => x.slug)).toContain(href.split('/')[2]);
        if (href.startsWith('/ingliz-tili-darslari/')) {
          const [, , level, lesson] = href.split('/');
          if (lesson) expect(COURSE.find(l => l.slug === level)?.units.flatMap(u => u.lessons).some(l => l.slug === lesson), href).toBe(true);
          else expect(COURSE.some(l => l.slug === level), href).toBe(true);
        }
      }
      expect(html).toMatch(/href="\/ingliz-tili-darslari\/[a-z-]+\/[a-z0-9-]+"/); // public lesson page stays linked
    });
  }

  it('weekdays come first, months in their own later section with a jump link', async () => {
    const html = await render('hafta-kunlari-va-oylar');
    const iDays = html.indexOf('id="hafta-kunlari"');
    const iMonths = html.indexOf('id="oylar"');
    expect(iDays).toBeGreaterThan(0);
    expect(iMonths).toBeGreaterThan(iDays);
    expect(html.indexOf('>Monday<')).toBeGreaterThan(iDays);
    expect(html.indexOf('>Sunday<')).toBeLessThan(iMonths);
    expect(html.indexOf('>January<')).toBeGreaterThan(iMonths);
    expect(html.indexOf('>December<')).toBeGreaterThan(html.indexOf('>January<'));
    expect(html).toContain('href="#oylar"');
    expect(html.indexOf('id="mini-test"')).toBeGreaterThan(iMonths);
    // no long call-to-action block before the first table
    expect(html.indexOf('class="cta"')).toBeGreaterThan(iDays);
  });

  it('numbers page lists 1-100 completely', async () => {
    const html = await render('sonlar-1-100');
    for (const w of ['twenty-one', 'fifty-eight', 'ninety-nine', 'sixty-four', 'forty-five']) expect(html).toContain(w);
    expect(html).toContain('91–100');
    expect(html).toContain('id="royxat"');
  });
});

describe('mini-test script (run in a DOM)', () => {
  for (const slug of SLUGS) {
    it(`${slug}: asks questions, explains answers, offers retry and the lesson`, async () => {
      const html = await render(slug);
      const doc = new DOMParser().parseFromString(html, 'text/html');
      document.body.innerHTML = doc.querySelector('#mini-test')!.outerHTML;
      const code = doc.querySelector('#mini-test script:not([type])')!.textContent!;
      (globalThis as unknown as { Audio: unknown }).Audio = class { play() { return Promise.resolve(); } pause() {} };
      // eslint-disable-next-line no-new-func
      new Function(code)();
      const $ = (id: string) => document.getElementById(id)!;
      const data = JSON.parse($('mq-data').textContent!);
      expect(data.n).toBe(8);
      ($('mq-go') as HTMLButtonElement).click();
      let seenWrong = false;
      for (let q = 0; q < data.n; q++) {
        expect($('mq-prog').textContent).toBe(`Savol ${q + 1} / ${data.n}`);
        const opts = [...document.querySelectorAll<HTMLButtonElement>('#mq-opts .wl-opt')];
        expect(opts.length).toBe(4);
        expect(new Set(opts.map(o => o.textContent)).size).toBe(4);
        // answer the first question wrongly on purpose: pick the option that is not the answer
        const wanted = $('mq-text').textContent!;
        const target = q === 0 ? opts.find(o => !data.w.some((w: { e: string; u: string }) => w.e === o.textContent && wanted.includes(`«${w.u}»`))) ?? opts[0] : opts[0];
        target.click();
        const fb = $('mq-fb').textContent!;
        expect(fb).toMatch(/To‘g‘ri javob: .+ \/.+\/ — /);
        if (/Noto‘g‘ri/.test(fb)) { seenWrong = true; expect(fb).toContain('Eslab qoling:'); }
        expect(document.querySelectorAll('#mq-opts .wl-opt.ok').length).toBe(1);
        // sentence shown for words that have one (every word of these four pages)
        expect(fb).toContain('Gapda: ');
        const next = [...document.querySelectorAll<HTMLButtonElement>('#mq-act button')].find(b => /savol|Natijani/.test(b.textContent!))!;
        next.click();
      }
      expect($('mq-prog').textContent).toBe('Natija');
      expect($('mq-text').textContent).toMatch(/^\d \/ 8/);
      const links = [...document.querySelectorAll<HTMLAnchorElement>('#mq-act a')];
      expect(links[0].getAttribute('href')).toBe(`/auth?next=${encodeURIComponent(`/learn/lesson/${LESSON_ID[slug]}`)}`);
      expect(links[0].textContent).toContain('darsiga o\'tish');
      if (seenWrong) expect(document.getElementById('mq-act')!.textContent).toContain('Xatolarni qayta mashq qilish');
    });
  }
});

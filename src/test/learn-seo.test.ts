import { describe, expect, it } from 'vitest';
import { COURSE } from '../../api/_lib/data-course';
import { GUIDES } from '../../api/_lib/data-learn-guides';
import { WORD_TOPICS } from '../../api/_lib/data-learn-words';
import { englishLanding, guideHub, guidePage, wordsHub, wordsPage, learnUrls } from '../../api/_lib/learn-pages';

const lessonExists = ([level, slug]: [string, string]) => !!COURSE.find(l => l.slug === level)?.units.flatMap(u => u.lessons).some(x => x.slug === slug);

describe('Uzbek learning SEO pages', () => {
  it('has unique slugs and valid lesson / related links', () => {
    for (const list of [GUIDES, WORD_TOPICS]) {
      const slugs = list.map(x => x.slug);
      expect(new Set(slugs).size).toBe(slugs.length);
      for (const x of list) {
        expect(lessonExists(x.lesson), `${x.slug} lesson`).toBe(true);
        for (const r of x.related) expect(slugs, `${x.slug} related ${r}`).toContain(r);
        expect(x.metaDesc.length, `${x.slug} description`).toBeGreaterThan(80);
        expect(x.metaDesc.length, `${x.slug} description`).toBeLessThan(260);
        expect(x.faq.length).toBeGreaterThanOrEqual(2);
      }
    }
  });
  it('word rows have english, ipa and uzbek', () => {
    for (const t of WORD_TOPICS) for (const w of t.words) expect(w.every(c => c.trim().length > 0), `${t.slug}: ${w}`).toBe(true);
  });
  it('guide tables are rectangular', () => {
    for (const g of GUIDES) for (const s of g.sections) if (s.table) for (const r of s.table.rows) expect(r.length, `${g.slug}: ${r[0]}`).toBe(s.table.head.length);
  });
  it('renders every page without leftovers', () => {
    const pages = [guideHub(), wordsHub(), englishLanding(), ...GUIDES.map(guidePage), ...WORD_TOPICS.map(wordsPage)];
    for (const html of pages) { expect(html).not.toMatch(/undefined|\[object/); expect(html).toContain('<h1>'); }
    expect(new Set(learnUrls()).size).toBe(learnUrls().length);
  });
});

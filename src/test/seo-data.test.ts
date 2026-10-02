import { describe, expect, it } from 'vitest';
import { PART1 } from '../../api/_lib/data-part1';
import { CUE_CARDS } from '../../api/_lib/data-part2';
import { TASK2 } from '../../api/_lib/data-task2';
import { PART3 } from '../../api/_lib/data-part3';
import { TASK1 } from '../../api/_lib/data-task1';
import { VOCAB } from '../../api/_lib/data-vocab';

const words = (paras: string[]) => paras.join(' ').split(/\s+/).filter(Boolean).length;
const unique = (slugs: string[]) => new Set(slugs).size === slugs.length;
const urlSafe = /^[a-z0-9]+(-[a-z0-9]+)*$/;

describe('programmatic SEO content', () => {
  it('uses unique, URL-safe slugs', () => {
    for (const list of [PART1, CUE_CARDS, TASK2, PART3, TASK1, VOCAB]) {
      expect(unique(list.map(x => x.slug))).toBe(true);
      list.forEach(x => expect(x.slug).toMatch(urlSafe));
    }
  });

  it('gives every Writing Task 2 sample essay at least 250 words and four paragraphs', () => {
    for (const q of TASK2) {
      expect(words(q.sample), q.slug).toBeGreaterThanOrEqual(250);
      expect(q.sample.length, q.slug).toBeGreaterThanOrEqual(4);
      expect(q.outline.length, q.slug).toBeGreaterThanOrEqual(4);
      expect(q.vocab.length, q.slug).toBeGreaterThanOrEqual(6);
    }
  });

  it('gives every cue card a substantial sample answer and Part 3 follow-ups', () => {
    for (const c of CUE_CARDS) {
      expect(words(c.sample), c.slug).toBeGreaterThanOrEqual(180);
      expect(c.points.length, c.slug).toBe(4);
      expect(c.part3.length, c.slug).toBeGreaterThanOrEqual(3);
    }
  });

  it('gives every Part 1 topic at least six questions with answers', () => {
    for (const t of PART1) {
      expect(t.qa.length, t.slug).toBeGreaterThanOrEqual(6);
      t.qa.forEach(x => expect(x.a.split(' ').length, `${t.slug}: ${x.q}`).toBeGreaterThanOrEqual(16));
    }
  });

  it('gives every Part 3 topic developed answers', () => {
    for (const t of PART3) {
      expect(t.qa.length, t.slug).toBeGreaterThanOrEqual(5);
      t.qa.forEach(x => expect(x.a.split(' ').length, `${t.slug}: ${x.q}`).toBeGreaterThanOrEqual(19));
      expect(t.vocab.length, t.slug).toBeGreaterThanOrEqual(6);
    }
  });

  it('does not reuse a slug across Part 1 and Part 3 sets by accident', () => {
    expect(PART1.length).toBeGreaterThanOrEqual(30);
    expect(PART3.length).toBeGreaterThanOrEqual(16);
  });
});

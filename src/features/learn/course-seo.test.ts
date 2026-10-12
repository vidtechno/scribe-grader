import { describe, expect, it } from 'vitest';
import { COURSE } from '../../../api/_lib/data-course';
import { WRITTEN_UNITS } from './course';

// The public SEO pages read a generated copy of the course outline. Regenerate it after changing lessons:
//   npx tsx scripts/build-course-seo.ts
describe('course outline for the public SEO pages', () => {
  it('lists every written lesson once, with unique slugs', () => {
    const fromCourse = COURSE.flatMap((l) => l.units.flatMap((u) => u.lessons.map((x) => x.id)));
    expect(fromCourse).toEqual(WRITTEN_UNITS.flatMap((u) => u.lessons.map((l) => l.id)));
    for (const level of COURSE) {
      const slugs = level.units.flatMap((u) => u.lessons.map((x) => x.slug));
      expect(new Set(slugs).size).toBe(slugs.length);
    }
  });
});

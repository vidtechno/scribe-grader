import { describe, expect, it } from 'vitest';
import { DRILL_COUNTS, WRITTEN_UNITS, drillIds, loadDrills } from './course';
import type { Exercise, Lesson } from './types';
import { drillProblems, exerciseProblems, lessonProblems } from './content-validate';

// Validates every lesson of the course. Run one unit with: UNIT=u2 npx vitest run src/features/learn
const only = process.env.UNIT;
const units = WRITTEN_UNITS.filter((u) => !only || u.id === only);

describe('Course content', () => {
  for (const unit of units) {
    it(`${unit.id}: every lesson is complete and valid`, async () => {
      const { loadUnit } = await import('./course');
      const lessons = await loadUnit(unit.id);
      expect(lessons.map((l) => l.id)).toEqual(unit.lessons.map((l) => l.id));
      lessons.forEach((l, i) => {
        expect(l.title).toBe(unit.lessons[i].title);
        expect(l.titleUz).toBe(unit.lessons[i].titleUz);
        expect(!!l.mini).toBe(!!unit.lessons[i].mini);
      });
      expect(lessons.flatMap((l) => lessonProblems(l, unit.level))).toEqual([]);
    });
  }
});

describe('unit extras', () => {
  it('every written unit has can-do items, repair exercises, a cultural note and a project', async () => {
    const { UNIT_EXTRAS } = await import('./unit-extras');
    const problems: string[] = [];
    for (const u of WRITTEN_UNITS) {
      const x = UNIT_EXTRAS[u.id];
      if (!x) { problems.push(`${u.id}: missing extras`); continue; }
      if (x.canDo.length < 3) problems.push(`${u.id}: needs 3+ can-do items`);
      if (x.traps.length < 2) problems.push(`${u.id}: needs 2+ traps`);
      if (x.culture.trim().length < 40) problems.push(`${u.id}: culture note too short`);
      if (x.project.criteria.length < 3) problems.push(`${u.id}: project needs 3+ criteria`);
      x.traps.forEach((t, i) => problems.push(...exerciseProblems(t.fix, `${u.id} trap ${i + 1}`)));
    }
    expect(problems).toEqual([]);
  });
});

describe('drills', () => {
  it('every drill is complete and every announced drill exists', async () => {
    const p: string[] = [];
    const ids = new Set<string>();
    for (const u of units) {
      for (const d of await loadDrills(u.id)) {
        ids.add(d.id);
        const where = d.id;
        p.push(...drillProblems(d));
        const lessonId = d.id.replace(/-d\d+$/, '');
        if (!DRILL_COUNTS[lessonId]) p.push(`${where}: lesson ${lessonId} is not in DRILL_COUNTS`);
      }
    }
    for (const u of units) {
      for (const l of u.lessons) {
        for (const id of drillIds(l.id)) if (!ids.has(id)) p.push(`${id}: announced in DRILL_COUNTS but not written`);
      }
    }
    expect(p).toEqual([]);
  });
});

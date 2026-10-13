import { describe, expect, it } from 'vitest';
import { DRILL_COUNTS, WRITTEN_UNITS, drillIds, loadDrills } from './course';
import type { Exercise, Lesson } from './types';
import { exerciseProblems, sceneProblems } from './content-validate';

// Validates every lesson of the course. Run one unit with: UNIT=u2 npx vitest run src/features/learn
const only = process.env.UNIT;
const units = WRITTEN_UNITS.filter((u) => !only || u.id === only);

function lessonProblems(lesson: Lesson, level: string): string[] {
  if (lesson.scene) return sceneProblems(lesson);
  const p: string[] = [];
  const id = lesson.id;
  if (lesson.slides.length < (lesson.mini ? 3 : 4) || lesson.slides.length > 9) p.push(`${id}: needs ${lesson.mini ? 3 : 4}–9 slides (has ${lesson.slides.length})`);
  let checks = 0;
  lesson.slides.forEach((s, i) => {
    if (!s.title.trim() || !s.blocks.length) p.push(`${id}: slide ${i + 1} is empty`);
    s.blocks.forEach((b, j) => {
      if (b.t === 'check') { checks++; p.push(...exerciseProblems(b.ex, `${id} slide ${i + 1} check ${j + 1}`)); }
      if (b.t === 'table' && b.rows.some((r) => r.length !== b.head.length)) p.push(`${id}: slide ${i + 1} table row width`);
      if (b.t === 'text' && (!b.en.trim() || !b.uz.trim())) p.push(`${id}: slide ${i + 1} reading text needs en and uz`);
    });
  });
  // From Elementary on, every lesson has connected English to read or listen to, not only single sentences.
  const blocks = lesson.slides.flatMap((s) => s.blocks);
  if (level !== 'beginner' && !blocks.some((b) => b.t === 'text' || b.t === 'dialog')) p.push(`${id}: needs a reading text or a dialogue`);
  if (checks < 2) p.push(`${id}: needs at least 2 quick checks inside slides (has ${checks})`);
  const mini = !!lesson.mini;
  if (mini ? lesson.words.length < 3 || lesson.words.length > 7 : lesson.words.length !== 10) p.push(`${id}: needs ${mini ? '3–7' : 'exactly 10'} words (has ${lesson.words.length})`);
  if (new Set(lesson.words.map((w) => w.en.toLowerCase())).size !== lesson.words.length) p.push(`${id}: duplicate words`);
  lesson.words.forEach((w) => { if (!w.en.trim() || !w.uz.trim()) p.push(`${id}: word without translation`); });
  if (lesson.practice.length < (mini ? 8 : 10) || lesson.practice.length > 18) p.push(`${id}: practice needs ${mini ? 8 : 10}–18 items (has ${lesson.practice.length})`);
  if (new Set(lesson.practice.map((e) => e.k)).size < (mini ? 4 : 5)) p.push(`${id}: practice needs at least ${mini ? 4 : 5} different exercise kinds`);
  if (lesson.quiz.length < (mini ? 6 : 8) || lesson.quiz.length > 12) p.push(`${id}: quiz needs ${mini ? 6 : 8}–12 items (has ${lesson.quiz.length})`);
  if (lesson.quiz.some((e) => e.k === 'speak')) p.push(`${id}: no speak items in the quiz`);
  lesson.practice.forEach((e, i) => p.push(...exerciseProblems(e, `${id} practice ${i + 1}`)));
  lesson.quiz.forEach((e, i) => p.push(...exerciseProblems(e, `${id} quiz ${i + 1}`)));
  if (lesson.summary.length < 3 || lesson.summary.length > 6) p.push(`${id}: summary needs 3–6 points`);
  if (!lesson.goal.trim()) p.push(`${id}: missing goal`);
  return p;
}

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
        if (!/^u\d+-l\d+-d[1-3]$/.test(d.id)) p.push(`${where}: bad id`);
        if (!d.title.trim() || !d.titleUz.trim() || !d.goal.trim()) p.push(`${where}: needs title, titleUz and goal`);
        if (d.exercises.length < 10 || d.exercises.length > 12) p.push(`${where}: needs 10–12 exercises (has ${d.exercises.length})`);
        if (new Set(d.exercises.map((e) => e.k)).size < 4) p.push(`${where}: needs at least 4 different kinds`);
        if (d.exercises.some((e) => e.k === 'speak')) p.push(`${where}: no speak in drills`);
        d.exercises.forEach((e, i) => p.push(...exerciseProblems(e, `${where} #${i + 1}`)));
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

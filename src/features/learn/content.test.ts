import { describe, expect, it } from 'vitest';
import { WRITTEN_UNITS } from './course';
import type { Exercise, Lesson } from './types';

// Validates every lesson of the course. Run one unit with: UNIT=u2 npx vitest run src/features/learn
const only = process.env.UNIT;
const units = WRITTEN_UNITS.filter((u) => !only || u.id === only);

function exerciseProblems(ex: Exercise, where: string): string[] {
  const p: string[] = [];
  const nonEmpty = (s: unknown) => typeof s === 'string' && s.trim().length > 0;
  switch (ex.k) {
    case 'choice':
    case 'listen': {
      if (ex.k === 'choice' && !nonEmpty(ex.q)) p.push(`${where}: empty question`);
      if (ex.k === 'listen' && !nonEmpty(ex.say)) p.push(`${where}: listen without say`);
      if (ex.opts.length < 2 || ex.opts.length > 5) p.push(`${where}: needs 2–5 options`);
      if (new Set(ex.opts.map((o) => o.trim().toLowerCase())).size !== ex.opts.length) p.push(`${where}: duplicate options`);
      if (!Number.isInteger(ex.a) || ex.a < 0 || ex.a >= ex.opts.length) p.push(`${where}: answer index out of range`);
      break;
    }
    case 'fill':
      if ((ex.q.match(/___/g) ?? []).length !== 1) p.push(`${where}: fill needs exactly one ___`);
      if (!ex.a.length || !ex.a.every(nonEmpty)) p.push(`${where}: fill needs answers`);
      break;
    case 'order':
      if (ex.words.length < 2 || !ex.words.every(nonEmpty)) p.push(`${where}: order needs 2+ words`);
      if (!nonEmpty(ex.uz)) p.push(`${where}: order needs uz`);
      break;
    case 'translate':
      if (!nonEmpty(ex.uz) || !ex.a.length || !ex.a.every(nonEmpty)) p.push(`${where}: translate needs uz and answers`);
      break;
    case 'match': {
      if (ex.pairs.length < 3 || ex.pairs.length > 6) p.push(`${where}: match needs 3–6 pairs`);
      const left = new Set(ex.pairs.map(([a]) => a.toLowerCase()));
      const right = new Set(ex.pairs.map(([, b]) => b.toLowerCase()));
      if (left.size !== ex.pairs.length || right.size !== ex.pairs.length) p.push(`${where}: match has duplicates`);
      break;
    }
    case 'tf':
      if (!nonEmpty(ex.q) || typeof ex.a !== 'boolean') p.push(`${where}: tf needs q and boolean a`);
      break;
    case 'speak':
      if (!nonEmpty(ex.say)) p.push(`${where}: speak needs say`);
      break;
    case 'dictation':
      if (!nonEmpty(ex.say)) p.push(`${where}: dictation needs say`);
      break;
    case 'fix':
      if (!nonEmpty(ex.wrong) || !ex.a.length || !ex.a.every(nonEmpty)) p.push(`${where}: fix needs wrong and answers`);
      else if (ex.a.some((x) => x.trim().toLowerCase() === ex.wrong.trim().toLowerCase())) p.push(`${where}: fix answer equals the wrong sentence`);
      break;
    default:
      p.push(`${where}: unknown exercise kind`);
  }
  return p;
}

function lessonProblems(lesson: Lesson, level: string): string[] {
  const p: string[] = [];
  const id = lesson.id;
  if (lesson.slides.length < 4 || lesson.slides.length > 9) p.push(`${id}: needs 4–9 slides (has ${lesson.slides.length})`);
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
  if (lesson.words.length !== 10) p.push(`${id}: needs exactly 10 words (has ${lesson.words.length})`);
  if (new Set(lesson.words.map((w) => w.en.toLowerCase())).size !== lesson.words.length) p.push(`${id}: duplicate words`);
  lesson.words.forEach((w) => { if (!w.en.trim() || !w.uz.trim()) p.push(`${id}: word without translation`); });
  if (lesson.practice.length < 10 || lesson.practice.length > 18) p.push(`${id}: practice needs 10–18 items (has ${lesson.practice.length})`);
  if (new Set(lesson.practice.map((e) => e.k)).size < 5) p.push(`${id}: practice needs at least 5 different exercise kinds`);
  if (lesson.quiz.length < 8 || lesson.quiz.length > 12) p.push(`${id}: quiz needs 8–12 items (has ${lesson.quiz.length})`);
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

import { describe, expect, it } from 'vitest';
import { A1_UNITS, A2_UNITS, BEGINNER_UNITS, DRILL_COUNTS, NEW_DRILL_IDS, drillIds, loadUnit } from './course';
import { DRILL_GAME, DRILL_REVIEW_OF, GAMES } from './games';
import { BEGINNER_EXAM } from './content/beginner/exam';

const BUILT = [...BEGINNER_UNITS, ...A1_UNITS, ...A2_UNITS];
const lessonIds = BUILT.flatMap((u) => u.lessons.map((l) => l.id));
const beginnerDrills = lessonIds.flatMap((id) => drillIds(id));

describe('Rebuilt curriculum structure (Beginner, Elementary and Pre-Intermediate)', () => {
  it('has at least 60 meaningful activities, and games are spread through the course', () => {
    const tests = BUILT.length + 1; // unit tests + the final exam
    expect(lessonIds.length + beginnerDrills.length + tests).toBeGreaterThanOrEqual(60);
    for (const u of BUILT) expect(u.lessons.some((l) => drillIds(l.id).length > 0)).toBe(true);
  });

  it('every drill has a game kind and every game kind belongs to an announced drill', () => {
    for (const id of beginnerDrills) expect(DRILL_GAME[id], id).toBeDefined();
    for (const id of Object.keys(DRILL_GAME)) if (/^u([1-9]|1[0-7])-/.test(id)) expect(beginnerDrills, id).toContain(id);
    for (const g of Object.values(DRILL_GAME)) expect(GAMES[g]).toBeDefined();
    for (const id of NEW_DRILL_IDS) expect(DRILL_COUNTS[id.replace(/-d\d+$/, '')]).toBeGreaterThanOrEqual(Number(id.slice(-1)));
  });

  it('a mastery check or mini-boss comes only after the lessons it revisits, in the same unit', () => {
    for (const [drill, topics] of Object.entries(DRILL_REVIEW_OF)) {
      const lesson = drill.replace(/-d\d+$/, '');
      const unit = BUILT.find((u) => u.lessons.some((l) => l.id === lesson))!;
      const ids = unit.lessons.map((l) => l.id);
      for (const t of topics) {
        expect(ids, `${drill} revisits ${t}`).toContain(t);
        expect(ids.indexOf(t), `${t} before ${drill}`).toBeLessThanOrEqual(ids.indexOf(lesson));
      }
      expect(['mastery', 'mini-boss']).toContain(DRILL_GAME[drill]);
    }
    for (const [drill, game] of Object.entries(DRILL_GAME)) if (/^u([1-9]|1[0-7])-/.test(game === 'mastery' || game === 'mini-boss' ? drill : 'x')) expect(DRILL_REVIEW_OF[drill], drill).toBeDefined();
  });

  it('every unit has a topic review, a real-life situation and ends with a review', () => {
    for (const u of BUILT) {
      expect(u.lessons.some((l) => l.kind === 'situation'), `${u.id} situation`).toBe(true);
      expect(u.lessons.some((l) => l.kind === 'review'), `${u.id} review`).toBe(true);
      expect(u.lessons.at(-1)!.kind === 'review' || u.lessons.at(-1)!.kind === 'skill', `${u.id} ends with review`).toBe(true);
      expect(u.learns?.length ?? 0, `${u.id} learns`).toBeGreaterThanOrEqual(4);
    }
    // all four skills appear across the course
    const kinds = new Set(BEGINNER_UNITS.flatMap((u) => u.lessons.map((l) => l.kind)));
    expect(kinds.has('skill')).toBe(true);
  });

  it('lesson content kind matches the course outline', async () => {
    for (const u of BUILT) {
      const lessons = await loadUnit(u.id);
      lessons.forEach((l, i) => { if (l.kind) expect(l.kind, l.id).toBe(u.lessons[i].kind); });
    }
  });

  it('the final exam bank covers five skills', () => {
    const skills = new Set(BEGINNER_EXAM.map((x) => x.skill));
    expect([...skills].sort()).toEqual(['grammar', 'listening', 'reading', 'vocabulary', 'writing']);
  });
});

import { courseMap, type LearningState } from './api';
import { ALL_LESSONS, COURSE_UNITS, drillIds } from './course';
import { DRILL_GAME, GAMES } from './games';

export interface PlanStep {
  id: string;
  kind: 'lesson' | 'drill' | 'test';
  to: string;
  title: string;
  /** What kind of step it is, in a few words: "Dars", "Vaziyat", "O'yin: Gap tuzish", "Mavzu testi"… */
  label: string;
  unitId: string;
  /** The first step is open; later ones wait for the earlier ones. */
  open: boolean;
}

const LESSON_LABEL: Record<string, string> = { situation: 'Hayotiy vaziyat', scene: 'Real hayot: suhbat', review: 'Takror', skill: "Ko'nikma" };

/**
 * What the learner does next: the next few steps of the course in the order the course map opens them (lessons, their
 * games and the unit test), plus progress numbers. Used by the dashboard and the course page so both say the same thing.
 */
export function learningPlan(state: LearningState | undefined, count = 4) {
  const map = courseMap(state);
  const startUnit = map.nextDrill ? ALL_LESSONS.find((l) => l.id === map.nextDrill!.lessonId)?.unitId : map.nextLesson?.unitId ?? map.pendingTest?.id;
  const startIndex = Math.max(0, COURSE_UNITS.findIndex((u) => u.id === startUnit));
  const steps: PlanStep[] = [];
  for (const unit of COURSE_UNITS.slice(startIndex)) {
    for (const l of unit.lessons) {
      const lessonDone = map.lessonState.get(l.id) === 'done';
      if (!lessonDone && map.lessonState.get(l.id) !== 'open') {
        steps.push({ id: l.id, kind: 'lesson', to: `/learn/lesson/${l.id}`, title: l.titleUz, label: LESSON_LABEL[l.kind ?? ''] ?? 'Dars', unitId: unit.id, open: false });
      }
      for (const d of drillIds(l.id)) {
        const st = map.drillState.get(d);
        if (st === 'done' || st === 'open') continue;
        const g = DRILL_GAME[d];
        steps.push({ id: d, kind: 'drill', to: `/learn/drill/${d}`, title: g ? GAMES[g].label : "Mashq o'yini", label: g === 'mastery' ? 'Mavzu testi' : g === 'mini-boss' ? 'Mini-boss' : `O'yin · ${l.titleUz}`, unitId: unit.id, open: false });
      }
      if (steps.length >= count) break;
    }
    if (steps.length >= count) break;
    const t = map.unitTest.get(unit.id);
    if (t && t !== 'passed') {
      steps.push({ id: `test-${unit.id}`, kind: 'test', to: `/learn/test/${unit.id}`, title: `${unit.titleUz.split(':')[0]}: bosqich testi`, label: 'Bosqich testi', unitId: unit.id, open: false });
      if (steps.length >= count) break;
    }
    if (t !== 'passed') break; // later units open only after this unit's test
  }
  const first = steps[0];
  if (first) first.open = !!(map.nextDrill || map.nextLesson || map.pendingTest);
  const unit = COURSE_UNITS.find((u) => u.id === (first?.unitId ?? startUnit));
  const levelUnits = COURSE_UNITS.filter((u) => u.level === unit?.level);
  const levelLessons = levelUnits.flatMap((u) => u.lessons);
  const last = [...(state?.progress ?? [])].filter((p) => p.completed_at).sort((a, b) => (b.completed_at! > a.completed_at! ? 1 : -1))
    .map((p) => ALL_LESSONS.find((l) => l.id === p.lesson_id)).find(Boolean);
  return {
    map, steps: steps.slice(0, count), unit, last,
    unitDone: unit ? unit.lessons.filter((l) => map.done.has(l.id)).length : 0,
    unitTotal: unit?.lessons.length ?? 0,
    levelDone: levelLessons.filter((l) => map.done.has(l.id)).length,
    levelTotal: levelLessons.length,
  };
}

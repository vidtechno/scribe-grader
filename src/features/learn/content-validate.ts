import { checkFix } from './check';
import { isTask, scoredSteps } from './scene/scene';
import type { Drill, Exercise, Lesson, SceneMistake } from './types';

/** Structural checks of course content, shared by the content tests (and handy when writing new lessons). */
export function exerciseProblems(ex: Exercise, where: string): string[] {
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
      // Handing the wrong sentence back is wrong; every accepted answer is right (checked the way the app checks it).
      else if (checkFix(ex.wrong, ex.wrong, ex.a).correct) p.push(`${where}: the wrong sentence is accepted: ${ex.wrong}`);
      else if (ex.a.some((x) => !checkFix(x, ex.wrong, ex.a).correct)) p.push(`${where}: an accepted answer is rejected (too close to the wrong sentence?): ${ex.a.join(' | ')}`);
      break;
    default:
      p.push(`${where}: unknown exercise kind`);
  }
  return p;
}

const nonEmpty = (s: unknown): s is string => typeof s === 'string' && s.trim().length > 0;

/** Checks of a real-life scene (a lesson with `scene`): structure, explanations for every wrong choice, accepted variants. */
export function sceneProblems(lesson: Lesson): string[] {
  const p: string[] = [];
  const id = lesson.id;
  const sc = lesson.scene;
  if (!sc) return [`${id}: no scene`];
  if (lesson.kind !== 'scene' || !lesson.mini) p.push(`${id}: a scene lesson is a mini lesson with kind "scene"`);
  if (lesson.slides.length || lesson.words.length || lesson.practice.length || lesson.quiz.length) p.push(`${id}: a scene lesson has no slides, words, practice or quiz`);
  if (!nonEmpty(lesson.goal) || !nonEmpty(sc.intro) || !nonEmpty(sc.outro)) p.push(`${id}: needs goal, intro and outro`);
  if (lesson.summary.length < 3 || lesson.summary.length > 5) p.push(`${id}: summary needs 3–5 points`);
  if (!nonEmpty(sc.partner.name) || !nonEmpty(sc.partner.role) || !nonEmpty(sc.partner.emoji) || !['emma', 'george'].includes(sc.partner.voice)) p.push(`${id}: incomplete partner`);
  const steps = sc.steps;
  if (steps.length < 8 || steps.length > 30) p.push(`${id}: needs 8–30 steps (has ${steps.length})`);
  if (steps[0]?.k !== 'say') p.push(`${id}: the partner speaks first`);
  if (steps.at(-1) && !isTask(steps.at(-1)!) && steps.at(-1)!.k !== 'say') p.push(`${id}: do not end on a note`);
  const tasks = scoredSteps(sc);
  if (tasks.length < 4 || tasks.length > 14) p.push(`${id}: needs 4–14 answers (has ${tasks.length})`);
  if (new Set(tasks.map((t) => t.k)).size < 2) p.push(`${id}: use at least two kinds of answers`);
  const dupTask = (list: SceneMistake[] | undefined, where: string) => (list ?? []).forEach((m) => { if (!m.a.length || !m.a.every(nonEmpty) || !nonEmpty(m.why)) p.push(`${where}: a mistake needs wrong forms and a reason`); });
  steps.forEach((s, i) => {
    const where = `${id} step ${i + 1} (${s.k})`;
    if (s.k === 'say') {
      if (!nonEmpty(s.en) || !nonEmpty(s.uz)) p.push(`${where}: needs en and uz`);
      if (s.en.length > 140) p.push(`${where}: line too long for a beginner`);
      return;
    }
    if (s.k === 'note') { if (!nonEmpty(s.md)) p.push(`${where}: empty note`); return; }
    if (!nonEmpty(s.ask)) p.push(`${where}: needs ask (what to do, in Uzbek)`);
    if (s.drill) p.push(...exerciseProblems(s.drill, `${where} drill`), ...(s.drill.k === 'speak' ? [`${where}: no speak in a drill`] : []));
    if (s.k === 'pick') {
      if (s.opts.length < 3 || s.opts.length > 5) p.push(`${where}: needs 3–5 options`);
      if (!s.opts.some((o) => o.ok)) p.push(`${where}: no correct option`);
      if (new Set(s.opts.map((o) => o.en.trim().toLowerCase())).size !== s.opts.length) p.push(`${where}: duplicate options`);
      s.opts.forEach((o) => { if (!nonEmpty(o.en)) p.push(`${where}: empty option`); if (!o.ok && !nonEmpty(o.why ?? s.why)) p.push(`${where}: wrong option "${o.en}" needs a reason`); });
    } else if (s.k === 'type') {
      if (!s.a.length || !s.a.every(nonEmpty)) p.push(`${where}: needs accepted replies`);
      if (!nonEmpty(s.why) && !(s.mistakes?.length)) p.push(`${where}: needs a reason (why) for a wrong reply`);
      dupTask(s.mistakes, where);
    } else if (s.k === 'build') {
      if (s.words.length < 2 || !s.words.every(nonEmpty)) p.push(`${where}: needs 2+ words`);
      if (!nonEmpty(s.why) && !(s.mistakes?.length)) p.push(`${where}: needs a reason (why) for a wrong order`);
      dupTask(s.mistakes, where);
    } else if (s.k === 'fill') {
      if ((s.q.match(/___/g) ?? []).length !== 1) p.push(`${where}: fill needs exactly one ___`);
      if (!s.a.length || !s.a.every(nonEmpty)) p.push(`${where}: needs accepted answers`);
      if (!nonEmpty(s.why) && !(s.mistakes?.length)) p.push(`${where}: needs a reason (why)`);
      dupTask(s.mistakes, where);
    }
  });
  return p;
}

export function lessonProblems(lesson: Lesson, level: string): string[] {
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


/** Problems of one practice game (drill). */
export function drillProblems(d: Drill): string[] {
  const p: string[] = [];
  const where = d.id;
  if (!/^u\d+-l\d+-d[1-3]$/.test(d.id)) p.push(`${where}: bad id`);
  if (!d.title.trim() || !d.titleUz.trim() || !d.goal.trim()) p.push(`${where}: needs title, titleUz and goal`);
  if (d.exercises.length < 10 || d.exercises.length > 12) p.push(`${where}: needs 10–12 exercises (has ${d.exercises.length})`);
  if (new Set(d.exercises.map((e) => e.k)).size < 4) p.push(`${where}: needs at least 4 different kinds`);
  if (d.exercises.some((e) => e.k === 'speak')) p.push(`${where}: no speak in drills`);
  d.exercises.forEach((e, i) => p.push(...exerciseProblems(e, `${where} #${i + 1}`)));
  return p;
}

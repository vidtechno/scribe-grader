/**
 * Lists, for every real-life scene, the English words that the learner has not met in any earlier lesson of the
 * course (words of lessons, examples, dialogues and exercises up to the scene's place in the path). A scene may
 * introduce a few words, but only in a `note` step; everything else should be listed here as known.
 *
 *   npx tsx scripts/scene-vocab-audit.ts            # all scenes
 *   npx tsx scripts/scene-vocab-audit.ts u3-l16     # one scene
 *
 * It also prints the structural problems of each scene (the same checks as the content tests).
 */
import { BEGINNER_UNITS, loadUnit } from '../src/features/learn/course';
import { lessonAudioTexts } from '../src/features/learn/audio-plan';
import { unmarked } from '../src/features/learn/scene/scene';
import { sceneProblems } from '../src/features/learn/content-validate';
import type { Lesson } from '../src/features/learn/types';

const tokens = (t: string) => unmarked(t).toLowerCase().replace(/[’‘`]/g, "'").match(/[a-z]+(?:'[a-z]+)?/g) ?? [];
// Words of the learner's own situation that every scene may use.
const ALWAYS = new Set(['ali', 'anna']);

async function main() {
  const only = process.argv[2];
  const order: Lesson[] = [];
  for (const u of BEGINNER_UNITS) order.push(...(await loadUnit(u.id)));
  const known = new Set<string>(ALWAYS);
  for (const lesson of order) {
    if (lesson.scene && (!only || lesson.id === only)) {
      const sc = lesson.scene;
      const lines = sc.steps.flatMap((s) => (s.k === 'say' ? [s.en] : s.k === 'pick' ? s.opts.filter((o) => o.ok).map((o) => o.en) : s.k === 'type' ? s.a : s.k === 'build' ? [s.words.join(' ')] : s.k === 'fill' ? [s.q.replace('___', s.a[0])] : []));
      const noted = new Set(sc.steps.flatMap((s) => (s.k === 'note' ? tokens(s.md.replace(/\*\*/g, '')) : [])));
      const unknown = new Map<string, number>();
      for (const l of lines) for (const w of tokens(l)) if (!known.has(w)) unknown.set(w, (unknown.get(w) ?? 0) + 1);
      const list = [...unknown].map(([w, n]) => `${w}${noted.has(w) ? '*' : ''}${n > 1 ? `×${n}` : ''}`);
      const problems = sceneProblems(lesson);
      console.log(`${lesson.id} ${lesson.titleUz}\n  problems: ${problems.length ? '\n    ' + problems.join('\n    ') : 'none'}\n  new words (${list.length}; * = explained in a note): ${list.join(', ') || '—'}`);
    }
    // what the learner has heard or read up to and including this lesson
    for (const t of lessonAudioTexts(lesson, null)) for (const w of tokens(t)) known.add(w);
    for (const w of lesson.words) for (const x of tokens(w.en)) known.add(x);
    if (lesson.scene) for (const s of lesson.scene.steps) if (s.k === 'say') for (const w of tokens(s.en)) known.add(w);
  }
}
main();

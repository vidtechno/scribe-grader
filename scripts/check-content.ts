/**
 * Checks lesson and drill files while they are being written, without needing the whole unit:
 *   npx tsx scripts/check-content.ts src/features/learn/content/b1/u18/l1.ts src/features/learn/content/b1/u18/drills-a.ts
 * Lesson files (default export = Lesson) are checked against the structure rules and against the outline in course.ts
 * (id, title, titleUz and mini must match exactly); drill files (named export `drills` or default array) against the drill rules.
 */
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { WRITTEN_UNITS, DRILL_COUNTS } from '../src/features/learn/course';
import { DRILL_GAME } from '../src/features/learn/games';
import { drillProblems, lessonProblems } from '../src/features/learn/content-validate';
import type { Drill, Lesson } from '../src/features/learn/types';

async function main() {
  const files = process.argv.slice(2);
  let bad = 0;
  for (const f of files) {
    const mod = await import(pathToFileURL(resolve(f)).href);
    const problems: string[] = [];
    const exported = mod.default ?? mod.drills ?? mod.drillsA ?? mod.drillsB ?? mod.drillsC ?? Object.values(mod).find(Array.isArray);
    if (Array.isArray(exported)) {
      for (const d of exported as Drill[]) {
        problems.push(...drillProblems(d));
        const lessonId = d.id.replace(/-d\d+$/, '');
        if (!DRILL_COUNTS[lessonId]) problems.push(`${d.id}: lesson not announced in DRILL_COUNTS`);
        if (!DRILL_GAME[d.id]) problems.push(`${d.id}: no game kind in DRILL_GAME`);
      }
      console.log(`${f}: ${(exported as Drill[]).map((d) => d.id).join(', ')}`);
    } else if (exported && typeof exported === 'object' && 'slides' in exported) {
      const lesson = exported as Lesson;
      const unit = WRITTEN_UNITS.find((u) => lesson.id.startsWith(u.id + '-'));
      const meta = unit?.lessons.find((l) => l.id === lesson.id);
      if (!unit || !meta) problems.push(`${lesson.id}: not in the outline`);
      else {
        if (lesson.title !== meta.title) problems.push(`${lesson.id}: title must be exactly "${meta.title}"`);
        if (lesson.titleUz !== meta.titleUz) problems.push(`${lesson.id}: titleUz must be exactly "${meta.titleUz}"`);
        if (!!lesson.mini !== !!meta.mini) problems.push(`${lesson.id}: mini must be ${!!meta.mini}`);
        if (meta.kind && lesson.kind !== meta.kind) problems.push(`${lesson.id}: kind must be ${meta.kind}`);
        problems.push(...lessonProblems(lesson, unit.level));
      }
      console.log(`${f}: ${lesson.id}`);
    } else problems.push('no lesson or drills export found');
    if (problems.length) { bad++; console.log(problems.map((x) => '  ✗ ' + x).join('\n')); } else console.log('  ✓ ok');
  }
  process.exit(bad ? 1 : 0);
}
main().catch((e) => { console.error(e); process.exit(1); });

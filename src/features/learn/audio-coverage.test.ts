import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { WRITTEN_UNITS, loadDrills, loadUnit } from './course';
import { isEnglish } from './audio-plan';
import { audioKey } from './audio-key';
import { cleanText, speakable } from './speech';
import { generatedFillText } from './engine/engine';
import type { Exercise } from './types';

// Every text the course can play (lessons, drills, review rounds) must have a recording in public/audio. A text
// without one is read by the phone's own voice, which many devices do not have. Record missing ones with:
//   npx tsx scripts/generate-lesson-audio.ts
describe('audio coverage', () => {
  it('has a recording for every text the interface plays', async () => {
    const manifest = new Set((JSON.parse(readFileSync('public/audio/manifest.json', 'utf8')) as { keys: string[] }).keys);
    const problems = new Set<string>();
    const check = (where: string, text: string | undefined) => {
      if (!text) return;
      const clean = cleanText(text);
      if (!clean || !speakable(clean)) return;
      const key = audioKey(clean);
      if (!manifest.has(key)) problems.add(`${where}: no recording for "${clean}"`);
      else if (!existsSync(`public/audio/${key}.mp3`)) problems.add(`${where}: file missing for "${clean}"`);
    };
    const exercise = (where: string, e: Exercise) => {
      if (e.k === 'choice') check(where, e.say);
      if (e.k === 'listen' || e.k === 'speak' || e.k === 'dictation') check(where, e.say);
      if (e.k === 'fill') check(where, e.q.replace('___', '…'));
      if (e.k === 'match') e.pairs.forEach(([en]) => { if (/^[a-z]/i.test(en)) check(where, en); });
    };
    for (const unit of WRITTEN_UNITS) {
      for (const lesson of await loadUnit(unit.id)) {
        const at = lesson.id;
        for (const w of lesson.words) { check(at, w.en); check(at, w.ex); check(at, generatedFillText(w)); }
        lesson.practice.forEach((e) => exercise(at, e));
        lesson.quiz.forEach((e) => exercise(at, e));
        for (const slide of lesson.slides) for (const b of slide.blocks) {
          if (b.t === 'check') exercise(at, b.ex);
          if (b.t === 'examples') b.items.forEach((i) => check(at, i.en));
          if (b.t === 'table' && b.speak) b.rows.forEach((r) => b.speak!.forEach((c) => check(at, r[c])));
          if (b.t === 'sounds') b.items.forEach((i) => { check(at, i.say); (i.examples ?? []).forEach((x) => check(at, x)); });
          if (b.t === 'compare') b.good.items.filter(isEnglish).forEach((x) => check(at, x));
          if (b.t === 'dialog') b.lines.forEach((l) => check(at, l.en));
          if (b.t === 'text') check(at, b.en);
        }
      }
      for (const drill of await loadDrills(unit.id)) drill.exercises.forEach((e) => exercise(drill.id, e));
    }
    expect([...problems].slice(0, 20)).toEqual([]);
  }, 60_000);
});

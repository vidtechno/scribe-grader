import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { WRITTEN_UNITS, loadDrills, loadUnit } from './course';
import { isEnglish } from './audio-plan';
import { audioKey } from './audio-key';
import { cleanText, speakable } from './speech';
import { generatedFillText } from './engine/engine';
import { sceneAudioTexts, voiceText } from './scene/scene';
import { dialogVoices, isTwoVoiceLesson } from './dialog-voices';
import type { Exercise } from './types';
import { BEGINNER_EXAM, BEGINNER_SPEAKING } from './content/beginner/exam';
import { ELEMENTARY_EXAM, ELEMENTARY_SPEAKING } from './content/a1/exam';
import { PREINTERMEDIATE_EXAM, PREINTERMEDIATE_SPEAKING } from './content/a2/exam';

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
        // real-life scenes: every line in the voice it is played in (Emma or George)
        if (lesson.scene) sceneAudioTexts(lesson.scene).forEach((t) => check(at, t));
        for (const w of lesson.words) { check(at, w.en); check(at, w.ex); check(at, generatedFillText(w)); }
        lesson.practice.forEach((e) => exercise(at, e));
        lesson.quiz.forEach((e) => exercise(at, e));
        for (const slide of lesson.slides) for (const b of slide.blocks) {
          if (b.t === 'check') exercise(at, b.ex);
          if (b.t === 'examples') b.items.forEach((i) => check(at, i.en));
          if (b.t === 'table' && b.speak) b.rows.forEach((r) => b.speak!.forEach((c) => check(at, r[c])));
          if (b.t === 'sounds') b.items.forEach((i) => { check(at, i.say); (i.examples ?? []).forEach((x) => check(at, x)); });
          if (b.t === 'compare') b.good.items.filter(isEnglish).forEach((x) => check(at, x));
          if (b.t === 'dialog') { const who = isTwoVoiceLesson(lesson.id) ? dialogVoices(b.lines) : null; b.lines.forEach((l) => check(at, who ? voiceText(who[l.who], l.en) : l.en)); }
          if (b.t === 'text') check(at, b.voice ? voiceText(b.voice, b.en) : b.en);
        }
      }
      for (const drill of await loadDrills(unit.id)) drill.exercises.forEach((e) => exercise(drill.id, e));
    }
    for (const item of BEGINNER_EXAM) exercise(`exam ${item.topic}`, item.ex);
    for (const ex of BEGINNER_SPEAKING) exercise('exam speaking', ex);
    for (const item of ELEMENTARY_EXAM) exercise(`exam a1 ${item.topic}`, item.ex);
    for (const ex of ELEMENTARY_SPEAKING) exercise('exam a1 speaking', ex);
    for (const item of PREINTERMEDIATE_EXAM) exercise(`exam a2 ${item.topic}`, item.ex);
    for (const ex of PREINTERMEDIATE_SPEAKING) exercise('exam a2 speaking', ex);
    expect([...problems].slice(0, 20)).toEqual([]);
  }, 60_000);
});

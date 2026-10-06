/**
 * Pre-records every English text of the course as a small mp3 in public/audio/<key>.mp3 plus a manifest.
 * The app plays these files first, so sound works on every phone (no speech engine, no third-party service needed).
 *
 *   npx tsx scripts/generate-lesson-audio.ts                  # units in course.ts, voice: espeak-ng + mbrola (apt)
 *   npx tsx scripts/generate-lesson-audio.ts --all            # also units that are written but not released yet
 *   npx tsx scripts/generate-lesson-audio.ts --engine edge    # neural voice (pip install edge-tts; needs internet)
 *   npx tsx scripts/generate-lesson-audio.ts --force          # re-record existing files
 *
 * Needs ffmpeg. Existing files are kept, so only new or changed texts are recorded.
 */
import { execFile } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { promisify } from 'node:util';
import { lessonAudioTexts } from '../src/features/learn/audio-plan';
import { audioKey } from '../src/features/learn/audio-key';
import { COURSE_UNITS, loadUnit } from '../src/features/learn/course';
import type { Lesson } from '../src/features/learn/types';

const run = promisify(execFile);
const args = process.argv.slice(2);
const flag = (name: string) => args.includes(`--${name}`);
const option = (name: string, fallback: string) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : fallback; };

const engine = option('engine', 'espeak');
const OUT = join(process.cwd(), 'public', 'audio');
const VOICES: Record<string, string> = { espeak: 'espeak-ng mb-us1 (female), 140 wpm', edge: 'edge en-US-AriaNeural' };

const LETTERS: Record<string, string> = {
  A: 'ay', B: 'bee', C: 'see', D: 'dee', E: 'ee', F: 'eff', G: 'jee', H: 'aitch', I: 'eye', J: 'jay', K: 'kay', L: 'el', M: 'em',
  N: 'en', O: 'oh', P: 'pee', Q: 'kyoo', R: 'ar', S: 'ess', T: 'tee', U: 'yoo', V: 'vee', W: 'double you', X: 'ex', Y: 'why', Z: 'zed',
};

/** What the voice reads: letters by their names, arrows and dashes as pauses. */
function speechText(text: string): string {
  if (/^[A-Z]$/.test(text)) return LETTERS[text];
  return text
    .replace(/\s*→\s*/g, ', ')
    .replace(/\s+[–—-]\s+/g, ', ')
    .replace(/[“”"]/g, '')
    .replace(/…/g, '...')
    .replace(/\s+/g, ' ')
    .trim();
}

async function synthesize(text: string, mp3: string, tmp: string) {
  const say = speechText(text);
  const wav = `${tmp}.wav`;
  if (engine === 'edge') {
    await run('edge-tts', ['--voice', 'en-US-AriaNeural', '--rate=-10%', '--text', say, '--write-media', wav]);
  } else {
    await run('espeak-ng', ['-v', 'mb-us1', '-s', '140', '-g', '4', '-w', wav, say]);
  }
  await run('ffmpeg', ['-y', '-loglevel', 'error', '-i', wav, '-ac', '1', '-ar', '22050', '-codec:a', 'libmp3lame', '-b:a', '24k', mp3]);
}

async function allLessons(): Promise<Lesson[]> {
  const lessons: Lesson[] = [];
  if (flag('all')) {
    const root = join(process.cwd(), 'src/features/learn/content');
    for (const level of readdirSync(root)) {
      for (const unit of readdirSync(join(root, level)).filter((d) => statSync(join(root, level, d)).isDirectory())) {
        const mod = await import(`../src/features/learn/content/${level}/${unit}/index`) as { lessons: Lesson[] };
        lessons.push(...mod.lessons);
      }
    }
  } else {
    for (const unit of COURSE_UNITS) lessons.push(...await loadUnit(unit.id));
  }
  return lessons;
}

async function main() {
  mkdirSync(OUT, { recursive: true });
  const texts = new Map<string, string>();
  for (const lesson of await allLessons()) {
    for (const t of lessonAudioTexts(lesson)) {
      const key = audioKey(t);
      const other = texts.get(key);
      if (other !== undefined && other !== t) throw new Error(`Key collision: "${t}" and "${other}"`);
      texts.set(key, t);
    }
  }
  const todo = [...texts].filter(([key]) => flag('force') || !existsSync(join(OUT, `${key}.mp3`)));
  console.log(`${texts.size} texts, ${todo.length} to record (${VOICES[engine] ?? engine})`);

  let done = 0;
  const failed: string[] = [];
  const queue = [...todo];
  const worker = async (id: number) => {
    for (let item = queue.shift(); item; item = queue.shift()) {
      const [key, text] = item;
      try {
        await synthesize(text, join(OUT, `${key}.mp3`), join(tmpdir(), `lesson-audio-${process.pid}-${id}`));
      } catch (e) {
        failed.push(`${text} (${(e as Error).message.split('\n')[0]})`);
      }
      if (++done % 200 === 0) console.log(`  ${done}/${todo.length}`);
    }
  };
  await Promise.all(Array.from({ length: Number(option('jobs', '6')) }, (_, i) => worker(i)));

  const keys = [...texts.keys()].filter((k) => existsSync(join(OUT, `${k}.mp3`))).sort();
  // The manifest keeps the player from probing for files that do not exist.
  const previous = existsSync(join(OUT, 'manifest.json')) ? (JSON.parse(readFileSync(join(OUT, 'manifest.json'), 'utf8')) as { keys: string[] }).keys : [];
  const merged = [...new Set([...previous.filter((k) => existsSync(join(OUT, `${k}.mp3`))), ...keys])].sort();
  writeFileSync(join(OUT, 'manifest.json'), JSON.stringify({ voice: VOICES[engine] ?? engine, keys: merged }));
  console.log(`manifest: ${merged.length} files`);
  if (failed.length) { console.error(`${failed.length} failed:\n${failed.slice(0, 20).join('\n')}`); process.exitCode = 1; }
}

void main();

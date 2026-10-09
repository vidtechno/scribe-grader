/**
 * Pre-records every English text of the course as a small mp3 in public/audio/<key>.mp3 plus a manifest.
 * The app plays these files first, so sound works on every phone (no speech engine, no third-party service needed).
 *
 *   npx tsx scripts/generate-lesson-audio.ts                  # every written lesson, voice: espeak-ng + mbrola (apt)
 *   npx tsx scripts/generate-lesson-audio.ts --engine edge    # neural voice (pip install edge-tts; needs internet)
 *   npx tsx scripts/generate-lesson-audio.ts --force          # re-record existing files
 *   ELEVENLABS_API_KEY=... npx tsx scripts/generate-lesson-audio.ts --engine elevenlabs --budget 9500
 *       # premium voice, lesson by lesson from the start of the course, until the credit budget is spent.
 *       # Finished keys are listed in scripts/audio-premium.json so the next run continues where this one stopped.
 *
 * Needs ffmpeg. Existing files are kept, so only new or changed texts are recorded.
 */
import { execFile } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { promisify } from 'node:util';
import { exerciseAudioTexts, lessonAudioTexts } from '../src/features/learn/audio-plan';
import { audioKey } from '../src/features/learn/audio-key';
import { WRITTEN_UNITS, loadDrills, loadUnit } from '../src/features/learn/course';
import type { Lesson } from '../src/features/learn/types';

const run = promisify(execFile);
const args = process.argv.slice(2);
const flag = (name: string) => args.includes(`--${name}`);
const option = (name: string, fallback: string) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : fallback; };

const engine = option('engine', 'espeak');
const OUT = join(process.cwd(), 'public', 'audio');
const VOICES: Record<string, string> = { espeak: 'espeak-ng mb-us1 (female), 140 wpm', edge: 'edge en-US-AriaNeural', elevenlabs: 'ElevenLabs Rachel (female) + espeak-ng for the rest' };
const PREMIUM_LIST = join(process.cwd(), 'scripts', 'audio-premium.json');
const ELEVEN_VOICE = option('voice', '21m00Tcm4TlvDq8ikWAM'); // Rachel: calm, clear American female
const ELEVEN_MODEL = option('model', 'eleven_flash_v2_5'); // half a credit per character
const CREDITS_PER_CHAR = ELEVEN_MODEL.includes('flash') || ELEVEN_MODEL.includes('turbo') ? 0.5 : 1;

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

async function withRetries<T>(task: () => Promise<T>, tries = 4): Promise<T> {
  for (let attempt = 1; ; attempt++) {
    try { return await task(); } catch (e) {
      if (attempt >= tries) throw e;
      await new Promise((r) => setTimeout(r, 1000 * attempt));
    }
  }
}

/** Letters are said by name; "zee" is the American name of Z. */
const ELEVEN_LETTERS: Record<string, string> = { ...LETTERS, A: 'Ay', E: 'Ee', I: 'Eye', O: 'Oh', U: 'Yoo', Z: 'Zee', J: 'Jay', K: 'Kay', Y: 'Why', R: 'Are', Q: 'Cue' };

async function elevenlabs(text: string, mp3: string) {
  const say = /^[A-Z]$/.test(text) ? `${ELEVEN_LETTERS[text]}.` : speechText(text).replace(/\s*=\s*/g, ' is ');
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${ELEVEN_VOICE}?output_format=mp3_22050_32`, {
    method: 'POST',
    headers: { 'xi-api-key': process.env.ELEVENLABS_API_KEY ?? '', 'content-type': 'application/json' },
    body: JSON.stringify({ text: say, model_id: ELEVEN_MODEL, voice_settings: { stability: 0.6, similarity_boost: 0.75, speed: 0.9 } }),
  });
  if (!res.ok) throw new Error(`ElevenLabs ${res.status}: ${(await res.text()).slice(0, 160)}`);
  writeFileSync(mp3, Buffer.from(await res.arrayBuffer()));
}

async function synthesize(text: string, mp3: string, tmp: string) {
  if (engine === 'elevenlabs') return withRetries(() => elevenlabs(text, mp3), 3);
  const say = speechText(text);
  let raw: string;
  if (engine === 'edge') {
    raw = `${tmp}.mp3`;
    await withRetries(() => run('edge-tts', ['--voice', 'en-US-AriaNeural', '--rate=-10%', '--text', say, '--write-media', raw]));
  } else {
    raw = `${tmp}.wav`;
    await run('espeak-ng', ['-v', 'mb-us1', '-s', '140', '-g', '4', '-w', raw, say]);
  }
  await run('ffmpeg', ['-y', '-loglevel', 'error', '-i', raw, '-ac', '1', '-ar', '22050', '-codec:a', 'libmp3lame', '-b:a', '32k', mp3]);
}

/** Every written lesson, released or not, so a level's audio is ready before it opens. */
async function allLessons(): Promise<Lesson[]> {
  const lessons: Lesson[] = [];
  for (const unit of WRITTEN_UNITS) lessons.push(...await loadUnit(unit.id));
  return lessons;
}

async function main() {
  // Fail at once (not after thousands of recordings) when a needed tool is missing.
  if (engine === 'elevenlabs' && !process.env.ELEVENLABS_API_KEY) throw new Error('Set ELEVENLABS_API_KEY');
  const tools: [string, string][] = engine === 'elevenlabs' ? [] : [['ffmpeg', '-version'], engine === 'edge' ? ['edge-tts', '--help'] : ['espeak-ng', '--version']];
  for (const [tool, flagToProbe] of tools) {
    try { await run(tool, [flagToProbe]); } catch { throw new Error(`${tool} is not installed (or not on PATH)`); }
  }
  mkdirSync(OUT, { recursive: true });
  const texts = new Map<string, string>();
  const lessonKeys: string[][] = [];
  const all = await allLessons();
  for (const [index, lesson] of all.entries()) {
    const own: string[] = [];
    const previous = index > 0 && all[index - 1].id.split('-')[0] === lesson.id.split('-')[0] ? all[index - 1] : null;
    for (const t of lessonAudioTexts(lesson, previous)) {
      own.push(audioKey(t));
      const key = audioKey(t);
      const other = texts.get(key);
      if (other !== undefined && other !== t) throw new Error(`Key collision: "${t}" and "${other}"`);
      texts.set(key, t);
    }
    lessonKeys.push(own);
  }
  // Practice games after lessons have their own listening and reading texts.
  for (const unit of WRITTEN_UNITS) {
    for (const drill of await loadDrills(unit.id)) {
      for (const t of drill.exercises.flatMap(exerciseAudioTexts)) texts.set(audioKey(t), t);
    }
  }
  let todo = [...texts].filter(([key]) => flag('force') || !existsSync(join(OUT, `${key}.mp3`)));
  const premium = new Set<string>(existsSync(PREMIUM_LIST) ? (JSON.parse(readFileSync(PREMIUM_LIST, 'utf8')) as string[]) : []);
  if (engine === 'elevenlabs') {
    // Whole lessons, in course order, until the credit budget is used up: no lesson is left half in one voice.
    const budget = Number(option('budget', '9500'));
    let spent = 0;
    const chosen = new Set<string>();
    let lastLesson = '';
    for (const [index, keys] of lessonKeys.entries()) {
      const fresh = [...new Set(keys)].filter((k) => !premium.has(k) && !chosen.has(k));
      const cost = fresh.reduce((n, k) => n + texts.get(k)!.length * CREDITS_PER_CHAR, 0);
      if (spent + cost > budget) break;
      spent += cost;
      fresh.forEach((k) => chosen.add(k));
      lastLesson = all[index].id;
    }
    todo = [...texts].filter(([key]) => chosen.has(key));
    console.log(`budget ${budget} credits: ${todo.length} texts (~${Math.round(spent)} credits) up to and including lesson ${lastLesson || '(none)'}`);
    if (flag('dry')) return;
  }
  console.log(`${texts.size} texts, ${todo.length} to record (${VOICES[engine] ?? engine})`);

  let done = 0;
  const failed: string[] = [];
  const queue = [...todo];
  const worker = async (id: number) => {
    for (let item = queue.shift(); item; item = queue.shift()) {
      const [key, text] = item;
      try {
        await synthesize(text, join(OUT, `${key}.mp3`), join(tmpdir(), `lesson-audio-${process.pid}-${id}`));
        if (engine === 'elevenlabs') premium.add(key);
      } catch (e) {
        failed.push(`${text} (${(e as Error).message.split('\n')[0]})`);
      }
      if (++done % 200 === 0) console.log(`  ${done}/${todo.length}`);
    }
  };
  await Promise.all(Array.from({ length: Number(option('jobs', engine === 'elevenlabs' ? '2' : '6')) }, (_, i) => worker(i)));

  if (engine === 'elevenlabs') writeFileSync(PREMIUM_LIST, JSON.stringify([...premium].sort()));
  const keys = [...texts.keys()].filter((k) => existsSync(join(OUT, `${k}.mp3`))).sort();
  // The manifest keeps the player from probing for files that do not exist.
  const previous = existsSync(join(OUT, 'manifest.json')) ? (JSON.parse(readFileSync(join(OUT, 'manifest.json'), 'utf8')) as { keys: string[] }).keys : [];
  const merged = [...new Set([...previous.filter((k) => existsSync(join(OUT, `${k}.mp3`))), ...keys])].sort();
  writeFileSync(join(OUT, 'manifest.json'), JSON.stringify({ voice: VOICES[engine] ?? engine, keys: merged }));
  console.log(`manifest: ${merged.length} files`);
  if (failed.length) { console.error(`${failed.length} failed:\n${failed.slice(0, 20).join('\n')}`); process.exitCode = 1; }
}

main().catch((e: Error) => { console.error(e.message); process.exit(1); });

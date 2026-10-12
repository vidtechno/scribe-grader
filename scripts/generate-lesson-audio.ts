/**
 * Pre-records every English text of the course as a small mp3 in public/audio/<key>.mp3 plus a manifest.
 * The app plays these files first, so sound works on every phone (no speech engine, no third-party service needed).
 *
 *   npx tsx scripts/generate-lesson-audio.ts                  # every written lesson, voice: espeak-ng + mbrola (apt)
 *   npx tsx scripts/generate-lesson-audio.ts --engine edge    # neural voice (pip install edge-tts; needs internet)
 *   npx tsx scripts/generate-lesson-audio.ts --force          # re-record existing files
 *   ELEVENLABS_API_KEY=... npx tsx scripts/generate-lesson-audio.ts --engine elevenlabs --level beginner --budget 9900
 *       # premium voice, lesson by lesson (a lesson's own texts, then its practice games; the Beginner final exam after
 *       # the last Beginner lesson) from the start of the course, until the credit budget is spent. Add --dry to only count.
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
import { cleanText, speakable } from '../src/features/learn/speech';
import { audioKey } from '../src/features/learn/audio-key';
import { WRITTEN_UNITS, lessonOfDrill, loadDrills, loadUnit } from '../src/features/learn/course';
import { BEGINNER_EXAM, BEGINNER_SPEAKING } from '../src/features/learn/content/beginner/exam';

const run = promisify(execFile);
const args = process.argv.slice(2);
const flag = (name: string) => args.includes(`--${name}`);
const option = (name: string, fallback: string) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : fallback; };

const engine = option('engine', 'espeak');
const OUT = join(process.cwd(), 'public', 'audio');
const VOICES: Record<string, string> = { espeak: 'espeak-ng mb-us1 (female), 140 wpm', edge: 'edge en-US-AriaNeural', elevenlabs: 'ElevenLabs Sarah (female) + espeak-ng for the rest' };
const PREMIUM_LIST = join(process.cwd(), 'scripts', 'audio-premium.json');
const ELEVEN_VOICE = option('voice', 'EXAVITQu4vr4xnSDxMaL'); // Sarah: calm, clear American female (premade, works on the free plan)
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

/** What ElevenLabs is sent: letters by name, "=" as "is", arrows and dashes as pauses. */
function elevenSay(text: string): string {
  return /^[A-Z]$/.test(text) ? `${ELEVEN_LETTERS[text]}.` : speechText(text).replace(/\s*=\s*/g, ' is ');
}

/**
 * Same voice and model for everything; only how lively it is changes. Letters and single words keep the settings of the
 * first recordings, sentences get a little more intonation, dialogue lines, greetings, questions and exclamations the most.
 */
type Mood = 'clear' | 'natural' | 'lively';
const MOODS: Record<Mood, { stability: number; speed: number }> = {
  clear: { stability: 0.6, speed: 0.9 },
  natural: { stability: 0.5, speed: 0.92 },
  lively: { stability: 0.35, speed: 0.95 },
};
const WARM = /^(hello|hi|hey|good (morning|afternoon|evening|night)|goodbye|bye|see you|thank|thanks|sorry|excuse me|please|welcome|nice to meet|how are you|happy|congratulations|well done|great|wow)\b/i;
function moodOf(text: string, dialogue: boolean): Mood {
  if (/^[A-Z]$/.test(text) || !/\s/.test(text.trim())) return 'clear';
  if (dialogue || /[!?]/.test(text) || WARM.test(text)) return 'lively';
  return 'natural';
}

const QUOTA = 'quota_exceeded';
let creditsSpent = 0; // what ElevenLabs actually charged (its `character-cost` header)

async function elevenlabs(text: string, mp3: string, mood: Mood) {
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${ELEVEN_VOICE}?output_format=mp3_22050_32`, {
    method: 'POST',
    headers: { 'xi-api-key': process.env.ELEVENLABS_API_KEY ?? '', 'content-type': 'application/json' },
    body: JSON.stringify({ text: elevenSay(text), model_id: ELEVEN_MODEL, voice_settings: { ...MOODS[mood], similarity_boost: 0.75 } }),
  });
  if (!res.ok) throw new Error(`ElevenLabs ${res.status}: ${(await res.text()).slice(0, 160)}`);
  creditsSpent += Number(res.headers.get('character-cost') ?? elevenSay(text).length * CREDITS_PER_CHAR);
  writeFileSync(mp3, Buffer.from(await res.arrayBuffer()));
}

async function synthesize(text: string, mp3: string, tmp: string, mood: Mood) {
  if (engine === 'elevenlabs') return withRetries(() => elevenlabs(text, mp3, mood), 3);
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

/** What is recorded together: one lesson (its own texts, then its practice games) or the Beginner final exam. */
interface Group { id: string; level: string; keys: string[] }

async function main() {
  // Fail at once (not after thousands of recordings) when a needed tool is missing.
  if (engine === 'elevenlabs' && !process.env.ELEVENLABS_API_KEY) throw new Error('Set ELEVENLABS_API_KEY');
  const tools: [string, string][] = engine === 'elevenlabs' ? [] : [['ffmpeg', '-version'], engine === 'edge' ? ['edge-tts', '--help'] : ['espeak-ng', '--version']];
  for (const [tool, flagToProbe] of tools) {
    try { await run(tool, [flagToProbe]); } catch { throw new Error(`${tool} is not installed (or not on PATH)`); }
  }
  mkdirSync(OUT, { recursive: true });
  const texts = new Map<string, string>();
  const dialogueKeys = new Set<string>();
  const groups: Group[] = [];
  const remember = (t: string): string => {
    const key = audioKey(t);
    const other = texts.get(key);
    if (other !== undefined && other !== t) throw new Error(`Key collision: "${t}" and "${other}"`);
    texts.set(key, t);
    return key;
  };
  for (const unit of WRITTEN_UNITS) {
    const lessons = await loadUnit(unit.id);
    const drills = await loadDrills(unit.id);
    for (const [index, lesson] of lessons.entries()) {
      const keys = lessonAudioTexts(lesson, index > 0 ? lessons[index - 1] : null).map(remember);
      // The practice games that belong to the lesson (the next lesson opens after them) are recorded with it.
      for (const drill of drills.filter((d) => lessonOfDrill(d.id) === lesson.id)) {
        keys.push(...drill.exercises.flatMap(exerciseAudioTexts).map(remember));
      }
      for (const slide of lesson.slides) for (const b of slide.blocks) {
        if (b.t === 'dialog') for (const l of b.lines) { const c = cleanText(l.en); if (c && speakable(c)) dialogueKeys.add(audioKey(c)); }
      }
      groups.push({ id: lesson.id, level: unit.level, keys });
    }
  }
  // The Beginner final exam (questions are drawn at random, so every item needs its recording): after the last Beginner lesson.
  const examKeys = [...BEGINNER_EXAM.flatMap((item) => exerciseAudioTexts(item.ex)), ...BEGINNER_SPEAKING.flatMap(exerciseAudioTexts)].map(remember);
  const lastBeginner = groups.map((g) => g.level).lastIndexOf('beginner');
  groups.splice(lastBeginner + 1, 0, { id: 'beginner-exam', level: 'beginner', keys: examKeys });

  const moodOfKey = (key: string): Mood => moodOf(texts.get(key)!, dialogueKeys.has(key));
  const premium = new Set<string>(existsSync(PREMIUM_LIST) ? (JSON.parse(readFileSync(PREMIUM_LIST, 'utf8')) as string[]) : []);
  const savePremium = () => writeFileSync(PREMIUM_LIST, JSON.stringify([...premium].sort()));
  let todo = [...texts].filter(([key]) => flag('force') || !existsSync(join(OUT, `${key}.mp3`)));
  const selected: Group[] = [];
  let hardCap = 0;
  if (engine === 'elevenlabs') {
    // Whole lessons, in course order, until the credit budget is used up: no lesson is left half in one voice.
    let budget = Number(option('budget', '9500'));
    if (!flag('dry')) {
      const sub = (await (await fetch('https://api.elevenlabs.io/v1/user/subscription', { headers: { 'xi-api-key': process.env.ELEVENLABS_API_KEY! } })).json()) as { character_count?: number; character_limit?: number };
      if (typeof sub.character_limit === 'number') {
        const left = sub.character_limit - (sub.character_count ?? 0);
        console.log(`ElevenLabs credits left: ${left}`);
        budget = Math.min(budget, left);
      }
    }
    hardCap = budget;
    const level = option('level', '');
    const chosen = new Set<string>();
    const order: [string, string][] = [];
    let spent = 0;
    for (const group of groups.filter((g) => !level || g.level === level)) {
      const fresh = [...new Set(group.keys)].filter((k) => !premium.has(k) && !chosen.has(k));
      const cost = fresh.reduce((n, k) => n + elevenSay(texts.get(k)!).length * CREDITS_PER_CHAR, 0);
      if (spent + cost > budget) { console.log(`next lesson does not fit: ${group.id} needs ~${Math.round(cost)} credits, ${Math.round(budget - spent)} left`); break; }
      spent += cost;
      fresh.forEach((k) => { chosen.add(k); order.push([k, texts.get(k)!]); });
      selected.push(group);
    }
    todo = order;
    const to = selected[selected.length - 1];
    console.log(`budget ${Math.round(budget)} credits: ${todo.length} texts (~${Math.round(spent)} credits), ${selected.length} lessons/groups up to and including ${to?.id ?? '(none)'}`);
    const moods = todo.reduce<Record<string, number>>((n, [k]) => { const m = moodOfKey(k); n[m] = (n[m] ?? 0) + 1; return n; }, {});
    console.log(`voice styles: ${JSON.stringify(moods)}`);
    if (flag('dry')) return;
  }
  console.log(`${texts.size} texts, ${todo.length} to record (${VOICES[engine] ?? engine})`);

  let done = 0;
  let stop = false;
  const failed: [string, string, string][] = [];
  const queue = [...todo];
  const attempt = async (key: string, text: string, id: number) => {
    await synthesize(text, join(OUT, `${key}.mp3`), join(tmpdir(), `lesson-audio-${process.pid}-${id}`), moodOfKey(key));
    if (engine === 'elevenlabs') { premium.add(key); if (premium.size % 25 === 0) savePremium(); }
  };
  const worker = async (id: number) => {
    for (let item = queue.shift(); item && !stop; item = queue.shift()) {
      const [key, text] = item;
      if (engine === 'elevenlabs' && creditsSpent + elevenSay(text).length * CREDITS_PER_CHAR > hardCap) { stop = true; failed.push([key, text, 'credit cap reached']); break; }
      try { await attempt(key, text, id); } catch (e) {
        const message = (e as Error).message.split('\n')[0];
        if (message.includes(QUOTA)) stop = true;
        failed.push([key, text, message]);
      }
      if (++done % 100 === 0) console.log(`  ${done}/${todo.length} (${Math.round(creditsSpent)} credits)`);
    }
  };
  await Promise.all(Array.from({ length: Number(option('jobs', engine === 'elevenlabs' ? '2' : '6')) }, (_, i) => worker(i)));
  // One more try for the ones that failed (not after the credits ran out).
  if (!stop && failed.length) {
    const again = failed.splice(0);
    for (const [key, text] of again) {
      try { await attempt(key, text, 9); } catch (e) { failed.push([key, text, (e as Error).message.split('\n')[0]]); }
    }
  }

  if (engine === 'elevenlabs') savePremium();
  const keys = [...texts.keys()].filter((k) => existsSync(join(OUT, `${k}.mp3`))).sort();
  // The manifest keeps the player from probing for files that do not exist.
  const previous = existsSync(join(OUT, 'manifest.json')) ? (JSON.parse(readFileSync(join(OUT, 'manifest.json'), 'utf8')) as { keys: string[] }).keys : [];
  const merged = [...new Set([...previous.filter((k) => existsSync(join(OUT, `${k}.mp3`))), ...keys])].sort();
  writeFileSync(join(OUT, 'manifest.json'), JSON.stringify({ voice: VOICES[engine] ?? engine, keys: merged }));
  console.log(`manifest: ${merged.length} files`);

  if (engine === 'elevenlabs') {
    // Where the premium voice reaches: the last group in order with nothing missing before it.
    const level = option('level', '');
    const scope = groups.filter((g) => !level || g.level === level);
    const complete = (g: Group) => g.keys.every((k) => premium.has(k) && existsSync(join(OUT, `${k}.mp3`)));
    const firstGap = scope.findIndex((g) => !complete(g));
    const covered = firstGap < 0 ? scope : scope.slice(0, firstGap);
    console.log(`credits charged: ${Math.round(creditsSpent)}`);
    console.log(`premium voice covers ${covered.length}/${scope.length} groups; last complete: ${covered[covered.length - 1]?.id ?? '(none)'}; next: ${scope[firstGap]?.id ?? '(none, all done)'}`);
    if (firstGap >= 0) {
      const missing = [...new Set(scope[firstGap].keys)].filter((k) => !premium.has(k));
      console.log(`  ${scope[firstGap].id} still needs ${missing.length} texts`);
    }
  }
  if (failed.length) { console.error(`${failed.length} failed:\n${failed.slice(0, 20).map(([, t, m]) => `${t} (${m})`).join('\n')}`); process.exitCode = 1; }
}

main().catch((e: Error) => { console.error(e.message); process.exit(1); });

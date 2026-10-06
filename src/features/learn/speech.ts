// Pronunciation without paid APIs. Sources, best first:
//  1. recordings of our own, pre-made for every text of the course and served as static files (/audio/<key>.mp3,
//     see scripts/generate-lesson-audio.ts): they play on every phone, whatever its speech engine or network;
//  2. for texts without a recording: human recordings of single words from the free Dictionary API, and a free
//     online voice for sentences;
//  3. the device's own speech engine (when it has an English voice).
// The clips of the open lesson are loaded into memory when it opens, so a tap plays at once; opening another lesson
// (or leaving the course) releases them. Nothing here touches our database.

import { audioKey } from './audio-key';

const SINGLE_WORD = /^[a-z][a-z'-]{2,}$/i;
const MAX_CHUNK = 180;

/** Lesson text may carry markdown marks or emoji; the speech engines should only get the words. */
export function cleanText(text: string): string {
  return text.replace(/[*`_]/g, '').replace(/[☀-➿\u{1f300}-\u{1faff}]/gu, '').replace(/\s+/g, ' ').trim();
}

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

// ---------------------------------------------------------------- device voice

function englishVoice(): SpeechSynthesisVoice | null {
  if (typeof speechSynthesis === 'undefined') return null;
  const voices = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().replace('_', '-').startsWith('en'));
  const preferred = ['Google US English', 'Samantha', 'Google UK English Female', 'Daniel', 'Microsoft Aria', 'Microsoft Jenny'];
  for (const name of preferred) {
    const v = voices.find((x) => x.name.includes(name));
    if (v) return v;
  }
  return voices.find((v) => v.lang === 'en-US') ?? voices.find((v) => v.lang === 'en-GB') ?? voices[0] ?? null;
}

if (typeof speechSynthesis !== 'undefined') {
  // Some browsers load voices asynchronously.
  speechSynthesis.getVoices();
  speechSynthesis.addEventListener?.('voiceschanged', () => speechSynthesis.getVoices());
}

export const canSpeak = () => typeof speechSynthesis !== 'undefined' || typeof Audio !== 'undefined';

/** Resolves true once the device started speaking; false when it did not (no engine, error, or nothing within 2 s). */
function synth(text: string, slow: boolean): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof speechSynthesis === 'undefined') return resolve(false);
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      const voice = englishVoice();
      if (voice) u.voice = voice;
      u.lang = voice?.lang ?? 'en-US';
      u.rate = slow ? 0.6 : 0.9;
      let started = false;
      u.onstart = () => { started = true; };
      u.onend = () => resolve(started);
      u.onerror = () => resolve(started);
      setTimeout(() => { if (!started) resolve(false); }, 2000);
      speechSynthesis.speak(u);
    } catch { resolve(false); }
  });
}

// ---------------------------------------------------------------- prepared clips (in memory, per lesson)

interface Clip { audio: HTMLAudioElement; ready: boolean; failed: boolean; whenReady: Promise<boolean> }

let generation = 0;
const entries = new Map<string, Promise<Clip[] | null>>();
/** Texts whose clips exist, for a synchronous play inside the tap (phones only allow audio started by a tap). */
const resolved = new Map<string, Clip[]>();
let playToken = 0;
let playing: HTMLAudioElement | null = null;

const keyOf = (text: string) => text.toLowerCase();

// Which texts have a recording of our own (public/audio/manifest.json, written by the generator).
let manifestPromise: Promise<Set<string>> | null = null;
let manifestSet: Set<string> | null = null;
function loadManifest(): Promise<Set<string>> {
  manifestPromise ??= fetch('/audio/manifest.json')
    .then((r) => (r.ok ? r.json() : { keys: [] }))
    .then((m: { keys?: string[] }) => new Set(m.keys ?? []))
    .catch(() => new Set<string>())
    .then((set) => { manifestSet = set; return set; });
  return manifestPromise;
}
const hosted = (text: string) => manifestSet?.has(audioKey(text)) ?? false;

function disposeClip(c: Clip) {
  try { c.audio.pause(); c.audio.removeAttribute('src'); c.audio.load(); } catch { /* already gone */ }
}

function makeClip(url: string): Clip {
  const audio = new Audio();
  audio.preload = 'auto';
  (audio as HTMLAudioElement & { referrerPolicy?: string }).referrerPolicy = 'no-referrer';
  const clip: Clip = { audio, ready: false, failed: false, whenReady: Promise.resolve(false) };
  clip.whenReady = new Promise<boolean>((resolve) => {
    audio.addEventListener('canplaythrough', () => { clip.ready = true; resolve(true); }, { once: true });
    audio.addEventListener('error', () => { clip.failed = true; resolve(false); }, { once: true });
    setTimeout(() => resolve(clip.ready), 8000);
  });
  audio.src = url;
  audio.load();
  return clip;
}

/** Free online voice. Long text is cut into sentences of at most ~180 characters. */
const onlineVoiceUrl = (text: string) =>
  `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=en&q=${encodeURIComponent(text)}`;

function chunks(text: string): string[] {
  const out: string[] = [];
  let cur = '';
  for (const sentence of text.split(/(?<=[.!?])\s+/)) {
    if (cur && (cur + ' ' + sentence).length > MAX_CHUNK) { out.push(cur); cur = ''; }
    cur = cur ? `${cur} ${sentence}` : sentence;
    while (cur.length > MAX_CHUNK) {
      const cut = cur.lastIndexOf(' ', MAX_CHUNK);
      out.push(cur.slice(0, cut > 0 ? cut : MAX_CHUNK));
      cur = cur.slice(cut > 0 ? cut + 1 : MAX_CHUNK);
    }
  }
  if (cur) out.push(cur);
  return out;
}

async function dictionaryUrl(word: string): Promise<string | null> {
  try {
    const r = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.toLowerCase())}`, { signal: AbortSignal.timeout(3000) });
    if (!r.ok) return null;
    const data: unknown = await r.json();
    if (!Array.isArray(data)) return null;
    const urls = data.flatMap((entry: { phonetics?: { audio?: string }[] }) => (entry.phonetics ?? []).map((p) => p.audio ?? ''))
      .filter((u: string) => u.startsWith('https://'));
    return urls.find((u: string) => u.includes('-us')) ?? urls.find((u: string) => u.includes('-uk')) ?? urls[0] ?? null;
  } catch { return null; }
}

/** Creates (once) the clips of a text. A recording that fails to load is replaced by the online voice. */
function getClips(text: string): Promise<Clip[] | null> {
  const key = keyOf(text);
  const found = entries.get(key);
  if (found) return found;
  const gen = generation;
  const made = (async (): Promise<Clip[] | null> => {
    let list: Clip[] | null = null;
    await loadManifest();
    if (hosted(text)) {
      const clip = makeClip(`/audio/${audioKey(text)}.mp3`);
      list = (await clip.whenReady) ? [clip] : (disposeClip(clip), null);
    }
    if (!list && SINGLE_WORD.test(text)) {
      const url = await dictionaryUrl(text);
      if (url) {
        const clip = makeClip(url);
        list = (await clip.whenReady) ? [clip] : (disposeClip(clip), null);
      }
    }
    list ??= chunks(text).map((c) => makeClip(onlineVoiceUrl(c)));
    if (gen !== generation) { list.forEach(disposeClip); return null; } // another lesson opened meanwhile
    resolved.set(key, list);
    return list;
  })();
  entries.set(key, made);
  return made;
}

/** Starts loading the audio of the open lesson in the background (a few files at a time). */
export function prepareAudio(texts: string[]) {
  void loadManifest();
  const gen = generation;
  const queue = [...new Set(texts.map(cleanText).filter(Boolean))];
  const worker = async () => {
    for (let t = queue.shift(); t !== undefined; t = queue.shift()) {
      if (gen !== generation) return;
      const clips = await getClips(t);
      await Promise.race([clips?.[clips.length - 1]?.whenReady ?? Promise.resolve(false), sleep(4000)]);
    }
  };
  for (let i = 0; i < 3; i++) void worker();
}

/** Frees the prepared clips (called when the lesson is left). */
export function releaseAudio() {
  generation++;
  playToken++;
  playing?.pause();
  playing = null;
  resolved.forEach((list) => list.forEach(disposeClip));
  resolved.clear();
  entries.clear();
  if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
}

/** Stops whatever is playing. */
export function stopSpeaking() {
  playToken++;
  playing?.pause();
  if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
}

async function playClips(list: Clip[], slow: boolean, token: number): Promise<boolean> {
  for (const clip of list) {
    if (token !== playToken) return true; // replaced by a newer tap
    if (!clip.ready && !clip.failed) await Promise.race([clip.whenReady, sleep(4000)]);
    if (token !== playToken) return true;
    if (clip.failed) return false;
    const a = clip.audio;
    try {
      a.currentTime = 0;
      a.playbackRate = slow ? 0.75 : 1;
      playing = a;
      await a.play();
      await new Promise<void>((resolve) => {
        a.onended = () => resolve();
        a.onpause = () => resolve();
        a.onerror = () => resolve();
      });
    } catch { return false; }
  }
  return true;
}

/**
 * Plays English text. Returns false when nothing could be played on this device, so the page can offer a way on.
 * Prepared clips start inside the tap itself, so phones accept them and there is no wait.
 */
export async function speak(text: string, opts: { slow?: boolean } = {}): Promise<boolean> {
  const clean = cleanText(text);
  if (!clean) return false;
  stopSpeaking();
  const token = playToken;
  const slow = !!opts.slow;

  let clips = resolved.get(keyOf(clean)) ?? null;
  if (clips?.[0]?.ready) {
    if (await playClips(clips, slow, token)) return true;
    return synth(clean, slow);
  }

  // Not ready yet. Our own recording is a small same-site file: wait for it. Otherwise a device voice answers at
  // once, and without one the online clip is waited for.
  await Promise.race([loadManifest(), sleep(1500)]);
  const device = englishVoice() !== null;
  const pending = getClips(clean);
  if (hosted(clean)) {
    clips = await Promise.race([pending, sleep(6000).then(() => null)]);
    if (token !== playToken) return true;
    if (clips?.length && (await playClips(clips, slow, token))) return true;
    return synth(clean, slow);
  }
  if (device) {
    if (await synth(clean, slow)) return true;
    clips = await Promise.race([pending, sleep(2500).then(() => null)]);
  } else {
    clips = await Promise.race([pending, sleep(5000).then(() => null)]);
  }
  if (token !== playToken) return true;
  if (clips?.length && (await playClips(clips, slow, token))) return true;
  return device ? false : synth(clean, slow);
}

/** Warms the clips of a few texts (the lesson page prepares the whole lesson; this is for small lists). */
export function prefetch(words: string[]) {
  prepareAudio(words);
}

type Recognition = {
  lang: string; interimResults: boolean; maxAlternatives: number;
  onresult: ((e: { results: { 0: { transcript: string } }[] }) => void) | null;
  onerror: (() => void) | null; onend: (() => void) | null;
  start(): void; stop(): void;
};

export function speechRecognitionSupported(): boolean {
  const w = window as unknown as { SpeechRecognition?: unknown; webkitSpeechRecognition?: unknown };
  return !!(w.SpeechRecognition || w.webkitSpeechRecognition);
}

/** Listens once and returns what the learner said (empty string when nothing was recognised). */
export function listenOnce(timeoutMs = 7000): Promise<string> {
  return new Promise((resolve) => {
    const w = window as unknown as { SpeechRecognition?: new () => Recognition; webkitSpeechRecognition?: new () => Recognition };
    const Ctor = w.SpeechRecognition ?? w.webkitSpeechRecognition;
    if (!Ctor) return resolve('');
    const rec = new Ctor();
    rec.lang = 'en-US';
    rec.interimResults = false;
    rec.maxAlternatives = 3;
    let text = '';
    const timer = setTimeout(() => rec.stop(), timeoutMs);
    rec.onresult = (e) => { text = Array.from(e.results).map((r) => r[0].transcript).join(' '); };
    rec.onerror = () => { clearTimeout(timer); resolve(text); };
    rec.onend = () => { clearTimeout(timer); resolve(text); };
    try { rec.start(); } catch { clearTimeout(timer); resolve(''); }
  });
}

// Pronunciation without paid APIs. Sources:
//  1. recordings of our own, pre-made for every text of the course and served as static files (/audio/<key>.mp3,
//     see scripts/generate-lesson-audio.ts): they play on every phone, whatever its speech engine or network;
// Every text of the course has a recording (a test enforces it). The device's own speech engine and online robot
// voices are never used: a text without a recording stays silent and the page offers the written text instead.
// The clips of the open lesson are loaded into memory when it opens, so a tap plays at once; opening another lesson
// (or leaving the course) releases them. Nothing here touches our database.

import { audioKey, audioUrl } from './audio-key';


/** Lesson text may carry markdown marks or emoji; the speech engines should only get the words. */
export function cleanText(text: string): string {
  return text.replace(/[*`_]/g, '').replace(/[☀-➿\u{1f300}-\u{1faff}]/gu, '')
    // Hints in brackets ("(agar … bo'lmasa)", "(kechqurun kelganda) Good evening!") are for the reader, not for the voice.
    // A single bracketed word at the start is English ("(a) quarter past eight") and stays.
    .replace(/\s*\([^)]*\)\s*$/, '')
    .replace(/^\([^)\s]+(?:\s[^)]*)\)\s*/, '')
    .replace(/\s+/g, ' ').trim();
}

/** False for texts that are only numbers and symbols ("—", "36 = …"): nothing worth reading aloud. */
export const speakable = (text: string): boolean => /[A-Za-z]/.test(cleanText(text));

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export const canSpeak = () => typeof Audio !== 'undefined';

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
  manifestPromise ??= fetchManifest();
  return manifestPromise;
}
/** A slow or failed manifest must not turn every phrase into the device voice: retry, and keep trying on later taps. */
async function fetchManifest(): Promise<Set<string>> {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const r = await fetch('/audio/manifest.json');
      if (r.ok) {
        const m = (await r.json()) as { keys?: string[] };
        manifestSet = new Set(m.keys ?? []);
        return manifestSet;
      }
    } catch { /* offline for a moment: try again */ }
    await sleep(500 * (attempt + 1));
  }
  manifestPromise = null;
  return new Set<string>();
}
/** Unknown manifest = try our own file anyway; it falls back to the other sources if the file is missing. */
const hosted = (text: string) => (manifestSet ? manifestSet.has(audioKey(text)) : true);

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
      // One more try before giving up on our own recording: a slow network is not a missing file.
      for (let attempt = 0; attempt < 2 && !list; attempt++) {
        const clip = makeClip(audioUrl(text));
        list = (await clip.whenReady) ? [clip] : (disposeClip(clip), null);
      }
    }
    // No recording means no sound: neither the browser voice nor an online robot voice is used.
    list ??= [];
    if (gen !== generation) { list.forEach(disposeClip); return null; } // another lesson opened meanwhile
    if (!list.length) { entries.delete(key); return list; } // let the next tap try again
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
}

/** Stops whatever is playing. */
export function stopSpeaking() {
  playToken++;
  playing?.pause();
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
  if (clips?.[0]?.ready && (await playClips(clips, slow, token))) return true;
  if (token !== playToken) return true;

  // Not ready yet. Our own recording is a small same-site file: wait for it (the manifest first).
  await Promise.race([loadManifest(), sleep(1500)]);
  clips = await Promise.race([getClips(clean), sleep(hosted(clean) ? 6000 : 5000).then(() => null)]);
  if (token !== playToken) return true;
  return !!clips?.length && (await playClips(clips, slow, token));
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

// Pronunciation without paid APIs: single words use real recordings from the free Dictionary API
// (dictionaryapi.dev) when available; everything else uses the browser's built-in speech engine.

const recordings = new Map<string, Promise<string | null>>();
let current: HTMLAudioElement | null = null;

function englishVoice(): SpeechSynthesisVoice | null {
  if (typeof speechSynthesis === 'undefined') return null;
  const voices = speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('en'));
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

function recordingFor(word: string): Promise<string | null> {
  const key = word.toLowerCase();
  let found = recordings.get(key);
  if (!found) {
    found = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(key)}`, { signal: AbortSignal.timeout(2500) })
      .then((r) => (r.ok ? r.json() : null))
      .then((data: unknown) => {
        if (!Array.isArray(data)) return null;
        const urls = data.flatMap((entry: { phonetics?: { audio?: string }[] }) => (entry.phonetics ?? []).map((p) => p.audio ?? ''))
          .filter((u: string) => u.startsWith('https://'));
        return urls.find((u: string) => u.includes('-us')) ?? urls.find((u: string) => u.includes('-uk')) ?? urls[0] ?? null;
      })
      .catch(() => null);
    recordings.set(key, found);
  }
  return found;
}

function synth(text: string, slow: boolean): Promise<void> {
  return new Promise((resolve) => {
    if (typeof speechSynthesis === 'undefined') return resolve();
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const voice = englishVoice();
    if (voice) u.voice = voice;
    u.lang = voice?.lang ?? 'en-US';
    u.rate = slow ? 0.6 : 0.9;
    u.onend = () => resolve();
    u.onerror = () => resolve();
    speechSynthesis.speak(u);
  });
}

/** Plays English text. Single words (3+ letters) prefer a human recording. */
export async function speak(text: string, opts: { slow?: boolean } = {}): Promise<void> {
  const clean = text.trim();
  if (!clean) return;
  current?.pause();
  if (/^[a-z][a-z'-]{2,}$/i.test(clean)) {
    const url = await recordingFor(clean);
    if (url) {
      try {
        const audio = new Audio(url);
        audio.playbackRate = opts.slow ? 0.75 : 1;
        current = audio;
        await audio.play();
        await new Promise<void>((resolve) => { audio.onended = () => resolve(); audio.onerror = () => resolve(); });
        return;
      } catch {
        // fall back to the speech engine
      }
    }
  }
  await synth(clean, !!opts.slow);
}

/** Warms the recording cache so the first click plays instantly. */
export function prefetch(words: string[]) {
  words.filter((w) => /^[a-z][a-z'-]{2,}$/i.test(w.trim())).slice(0, 12).forEach((w) => void recordingFor(w.trim()));
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

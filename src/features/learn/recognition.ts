// Speaking practice input. The learner's voice is recorded in the browser and turned into text by the
// `transcribe-lesson` function (Whisper), which is far more reliable for accented speech than the browser's own
// recogniser. Without a microphone API or without the function, the browser recogniser is the fallback.
import { supabase } from '@/integrations/supabase/client';
import { audioExtension, recordingMimeType } from '@/lib/audio';
import { functionError } from '@/lib/function-errors';
import type { SpeechQuality } from './check';

export const canRecord = () =>
  typeof navigator !== 'undefined' && !!navigator.mediaDevices?.getUserMedia && typeof MediaRecorder !== 'undefined';

export interface Recording { stop(): Promise<{ blob: Blob; ms: number }>; cancel(): void }

/** Starts the microphone. `onLevel` gets 0..1 volume values for a little animation; the clip stops itself at `maxMs`. */
export async function startRecording(maxMs = 9000, onLevel?: (v: number) => void, onAutoStop?: () => void): Promise<Recording> {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
  });
  const mime = recordingMimeType();
  const recorder = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
  const chunks: Blob[] = [];
  const startedAt = Date.now();
  let ctx: AudioContext | null = null;
  let raf = 0;
  let timer = 0;
  let finished = false;

  recorder.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data); };
  try {
    ctx = new AudioContext();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    ctx.createMediaStreamSource(stream).connect(analyser);
    const data = new Uint8Array(analyser.frequencyBinCount);
    const tick = () => {
      analyser.getByteTimeDomainData(data);
      let peak = 0;
      for (const v of data) peak = Math.max(peak, Math.abs(v - 128));
      onLevel?.(Math.min(1, peak / 64));
      raf = requestAnimationFrame(tick);
    };
    if (onLevel) tick();
  } catch { /* the animation is optional */ }

  const release = () => {
    clearTimeout(timer);
    cancelAnimationFrame(raf);
    stream.getTracks().forEach((t) => t.stop());
    void ctx?.close().catch(() => {});
  };
  const finish = () => new Promise<{ blob: Blob; ms: number }>((resolve) => {
    if (finished) return resolve({ blob: new Blob(chunks), ms: Date.now() - startedAt });
    finished = true;
    recorder.onstop = () => {
      release();
      resolve({ blob: new Blob(chunks, { type: (recorder.mimeType || 'audio/webm').split(';')[0] }), ms: Date.now() - startedAt });
    };
    if (recorder.state === 'recording') recorder.stop(); else { release(); resolve({ blob: new Blob(chunks), ms: Date.now() - startedAt }); }
  });

  recorder.start(200);
  timer = window.setTimeout(() => { onAutoStop?.(); }, maxMs);
  return {
    stop: finish,
    cancel: () => { finished = true; recorder.onstop = null; if (recorder.state === 'recording') recorder.stop(); release(); },
  };
}

export interface Transcription { transcript: string; quality: SpeechQuality | null }

/** Sends a short clip to the lesson transcription function. Throws a readable error when it cannot be used. */
export async function transcribeClip(blob: Blob): Promise<Transcription> {
  const form = new FormData();
  form.append('audio', blob, `speech.${audioExtension(blob.type)}`);
  const { data, error } = await supabase.functions.invoke('transcribe-lesson', { body: form });
  if (error || !data) throw await functionError(error, 'Transcription failed');
  return { transcript: typeof data.transcript === 'string' ? data.transcript : '', quality: data.quality ?? null };
}

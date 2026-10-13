/** Stable file name of a spoken text: shared by the audio generator (scripts/generate-lesson-audio.ts) and the player. */
export function audioKey(text: string): string {
  let h1 = 0x811c9dc5;
  let h2 = 0x9747b28c;
  for (let i = 0; i < text.length; i++) {
    const c = text.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 0x01000193);
    h2 = Math.imul(h2 ^ c, 0x85ebca6b);
    h2 ^= h2 >>> 13;
  }
  return (h1 >>> 0).toString(16).padStart(8, '0') + (h2 >>> 0).toString(16).padStart(8, '0');
}

/**
 * Recordings are cached by phones and browsers for a year (vercel.json), so a re-recorded file needs a new address:
 * raise this number whenever audio files are replaced.
 */
export const AUDIO_VERSION = 3;
export const audioUrl = (text: string) => `/audio/${audioKey(text)}.mp3?v=${AUDIO_VERSION}`;

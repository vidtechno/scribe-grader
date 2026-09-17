import { afterEach, describe, expect, it, vi } from 'vitest';
import { audioExtension, recordingMimeType } from './audio';
describe('browser audio formats', () => {
  afterEach(() => vi.unstubAllGlobals());
  it('falls back to MP4 when WebM is unsupported', () => {
    vi.stubGlobal('MediaRecorder', { isTypeSupported: (type: string) => type === 'audio/mp4' });
    expect(recordingMimeType()).toBe('audio/mp4');
  });
  it.each([['audio/webm;codecs=opus', 'webm'], ['audio/mp4', 'mp4'], ['audio/ogg;codecs=opus', 'ogg']])('keeps the correct extension for %s', (type, extension) => {
    expect(audioExtension(type)).toBe(extension);
  });
});

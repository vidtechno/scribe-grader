import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { SpeechRecorder } from './SpeechRecorder';

describe('speaking recording', () => {
  afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); });
  it('reports elapsed time and preserves the supported recording format', async () => {
    let now = 1_000;
    vi.spyOn(Date, 'now').mockImplementation(() => now);
    const stopTrack = vi.fn();
    Object.defineProperty(navigator, 'mediaDevices', { configurable: true, value: { getUserMedia: vi.fn().mockResolvedValue({ getTracks: () => [{ stop: stopTrack }] }) } });
    vi.stubGlobal('requestAnimationFrame', vi.fn(() => 1));
    vi.stubGlobal('cancelAnimationFrame', vi.fn());
    vi.stubGlobal('AudioContext', class {
      createMediaStreamSource() { return { connect: vi.fn() }; }
      createAnalyser() { return { fftSize: 64, frequencyBinCount: 32, getByteFrequencyData: vi.fn() }; }
      close() { return Promise.resolve(); }
    });
    vi.stubGlobal('MediaRecorder', class {
      static isTypeSupported(type: string) { return type === 'audio/mp4'; }
      mimeType = 'audio/mp4';
      state = 'inactive';
      onstop: (() => void) | null = null;
      ondataavailable: ((event: { data: Blob }) => void) | null = null;
      start() { this.state = 'recording'; }
      stop() {
        this.state = 'inactive';
        this.ondataavailable?.({ data: new Blob(['recorded audio'], { type: this.mimeType }) });
        this.onstop?.();
      }
    });
    const complete = vi.fn();
    render(<SpeechRecorder onRecordingComplete={complete} />);
    fireEvent.click(screen.getByRole('button', { name: 'Start recording' }));
    await waitFor(() => expect(screen.getByRole('button', { name: 'Stop recording' })).toBeInTheDocument());
    now = 13_000;
    await act(async () => fireEvent.click(screen.getByRole('button', { name: 'Stop recording' })));
    expect(complete).toHaveBeenCalledWith(expect.any(Blob), 12);
    expect(complete.mock.calls[0][0].type).toBe('audio/mp4');
    expect(stopTrack).toHaveBeenCalled();
  });
});

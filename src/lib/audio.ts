export function recordingMimeType(): string | undefined {
  return ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus']
    .find(type => MediaRecorder.isTypeSupported(type));
}

export function audioExtension(type: string): string {
  const base = type.split(';')[0].toLowerCase();
  if (base === 'audio/mp4') return 'mp4';
  if (base === 'audio/ogg') return 'ogg';
  if (base === 'audio/wav' || base === 'audio/x-wav') return 'wav';
  if (base === 'audio/mpeg') return 'mp3';
  return 'webm';
}

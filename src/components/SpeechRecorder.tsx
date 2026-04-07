import { useState, useRef, useEffect, useCallback } from 'react';
import { Mic, Square, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface SpeechRecorderProps {
  onRecordingComplete: (blob: Blob, duration: number) => void;
  isProcessing?: boolean;
  maxDuration?: number; // seconds
}

export function SpeechRecorder({ onRecordingComplete, isProcessing = false, maxDuration = 180 }: SpeechRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [duration, setDuration] = useState(0);
  const [audioLevels, setAudioLevels] = useState<number[]>(new Array(20).fill(0));
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current?.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    if (timerRef.current) clearInterval(timerRef.current);
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
    }
    setIsRecording(false);
  }, []);

  useEffect(() => {
    if (isRecording && duration >= maxDuration) {
      stopRecording();
    }
  }, [duration, maxDuration, isRecording, stopRecording]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop());
    };
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      // Audio analysis for wave animation
      const audioCtx = new AudioContext();
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 64;
      source.connect(analyser);
      analyserRef.current = analyser;

      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        onRecordingComplete(blob, duration);
        setDuration(0);
        audioCtx.close();
      };

      mediaRecorder.start(250);
      setIsRecording(true);
      setDuration(0);

      timerRef.current = window.setInterval(() => {
        setDuration(d => d + 1);
      }, 1000);

      // Animate levels
      const updateLevels = () => {
        if (!analyserRef.current) return;
        const data = new Uint8Array(analyserRef.current.frequencyBinCount);
        analyserRef.current.getByteFrequencyData(data);
        const levels = Array.from(data.slice(0, 20)).map(v => v / 255);
        setAudioLevels(levels);
        animationRef.current = requestAnimationFrame(updateLevels);
      };
      updateLevels();
    } catch {
      alert('Microphone access is required for speaking practice.');
    }
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Wave Animation */}
      <div className="h-24 flex items-center justify-center gap-[3px] w-full max-w-sm">
        <AnimatePresence>
          {isRecording && audioLevels.map((level, i) => (
            <motion.div
              key={i}
              initial={{ height: 4 }}
              animate={{ height: Math.max(4, level * 80) }}
              exit={{ height: 4 }}
              transition={{ duration: 0.1 }}
              className="w-2 rounded-full bg-primary"
              style={{ opacity: 0.4 + level * 0.6 }}
            />
          ))}
        </AnimatePresence>
        {!isRecording && !isProcessing && (
          <div className="flex items-center gap-[3px]">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-2 h-1 rounded-full bg-muted-foreground/20" />
            ))}
          </div>
        )}
        {isProcessing && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="text-sm">Processing...</span>
          </div>
        )}
      </div>

      {/* Timer */}
      {isRecording && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <p className="text-3xl font-mono font-bold tabular-nums">{formatTime(duration)}</p>
          <p className="text-xs text-muted-foreground mt-1">Max {formatTime(maxDuration)}</p>
        </motion.div>
      )}

      {/* Record Button */}
      <motion.div whileTap={{ scale: 0.95 }}>
        {isRecording ? (
          <Button
            onClick={stopRecording}
            size="xl"
            variant="destructive"
            className="rounded-full w-20 h-20 p-0"
            disabled={isProcessing}
          >
            <Square className="h-8 w-8" />
          </Button>
        ) : (
          <Button
            onClick={startRecording}
            size="xl"
            variant="glow"
            className="rounded-full w-20 h-20 p-0"
            disabled={isProcessing}
          >
            <Mic className="h-8 w-8" />
          </Button>
        )}
      </motion.div>

      <p className="text-sm text-muted-foreground text-center">
        {isRecording ? 'Tap to stop recording' : isProcessing ? 'Analyzing your response...' : 'Tap to start recording'}
      </p>
    </div>
  );
}

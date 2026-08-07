import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AudioPlayer } from '@/components/AudioPlayer';
import { Mic, Square, RotateCcw, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const MAX_SECONDS = 20;

const DEMO_PROMPT = 'Describe a place you enjoy visiting and explain why you like it.';

export function HeroSpeakingDemo() {
  const [recording, setRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const timerRef = useRef<number | null>(null);

  useEffect(() => () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    recorderRef.current?.stream.getTracks().forEach((t) => t.stop());
    if (audioUrl) URL.revokeObjectURL(audioUrl);
  }, [audioUrl]);

  const stop = () => {
    recorderRef.current?.state === 'recording' && recorderRef.current.stop();
  };

  const start = async () => {
    try {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
        setAudioUrl(null);
      }
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => e.data.size > 0 && chunksRef.current.push(e.data);
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || 'audio/webm' });
        setAudioUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((t) => t.stop());
        setRecording(false);
        if (timerRef.current) window.clearInterval(timerRef.current);
      };
      recorder.start();
      recorderRef.current = recorder;
      setRecording(true);
      setSeconds(0);
      timerRef.current = window.setInterval(() => {
        setSeconds((s) => {
          if (s + 1 >= MAX_SECONDS) {
            stop();
            return MAX_SECONDS;
          }
          return s + 1;
        });
      }, 1000);
    } catch {
      toast.error('Microphone access denied. Please allow your microphone to try the demo.');
    }
  };

  const reset = () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl);
    setAudioUrl(null);
    setSeconds(0);
  };

  return (
    <div className="relative z-20 mt-16 bg-card/90 backdrop-blur-sm rounded-3xl border border-border shadow-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-brand-red/10 flex items-center justify-center">
            <Mic className="h-4 w-4 text-brand-red" />
          </div>
          <div>
            <p className="text-sm font-semibold">Try Speaking — 20s demo</p>
            <p className="text-[11px] text-muted-foreground">Record & listen back. No account needed.</p>
          </div>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary">Free</span>
      </div>

      <p className="text-xs text-muted-foreground italic mb-4 leading-relaxed">“{DEMO_PROMPT}”</p>

      {recording ? (
        <div className="space-y-3">
          <div className="flex items-end justify-center gap-[3px] h-8">
            {[0.4, 0.9, 0.6, 1, 0.5, 0.85, 0.35, 0.7, 0.55, 0.95, 0.45, 0.8].map((h, i) => (
              <motion.span
                key={i}
                animate={{ scaleY: [h * 0.3, h, h * 0.4] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut', delay: i * 0.06 }}
                className="w-[4px] h-8 origin-bottom rounded-full bg-brand-red"
              />
            ))}
          </div>
          <div className="text-center text-sm font-semibold tabular-nums">
            0:{seconds.toString().padStart(2, '0')} <span className="text-muted-foreground font-normal">/ 0:{MAX_SECONDS}</span>
          </div>
          <Button onClick={stop} variant="destructive" className="w-full gap-2">
            <Square className="h-4 w-4" /> Stop recording
          </Button>
        </div>
      ) : audioUrl ? (
        <div className="space-y-3">
          <AudioPlayer src={audioUrl} />
          <div className="flex gap-2">
            <Button onClick={reset} variant="outline" className="flex-1 gap-2">
              <RotateCcw className="h-4 w-4" /> Re-record
            </Button>
            <Link to="/auth" className="flex-1">
              <Button variant="glow" className="w-full gap-2">
                <Sparkles className="h-4 w-4" /> Get AI band score
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <Button onClick={start} variant="glow" className="w-full gap-2">
          <Mic className="h-4 w-4" /> Start demo recording
        </Button>
      )}
    </div>
  );
}

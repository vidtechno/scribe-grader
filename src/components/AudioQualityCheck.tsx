import { useEffect, useRef, useState } from 'react';
import { Mic, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Pre-flight microphone check. Requests mic permission, samples audio for
 * ~3 seconds, and calls onPass() when the peak level clears a small
 * threshold. Prevents users spending credits on silent recordings.
 */
export function AudioQualityCheck({ onPass }: { onPass: () => void }) {
  const [state, setState] = useState<'idle' | 'checking' | 'ok' | 'silent' | 'denied'>('idle');
  const [level, setLevel] = useState(0);
  const rafRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      streamRef.current?.getTracks().forEach(t => t.stop());
    };
  }, []);

  const runCheck = async () => {
    setState('checking');
    setLevel(0);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      source.connect(analyser);
      const data = new Uint8Array(analyser.frequencyBinCount);
      let peak = 0;
      const start = performance.now();
      const tick = () => {
        analyser.getByteFrequencyData(data);
        const avg = data.reduce((a, b) => a + b, 0) / data.length;
        peak = Math.max(peak, avg);
        setLevel(avg);
        if (performance.now() - start < 3000) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          stream.getTracks().forEach(t => t.stop());
          ctx.close();
          if (peak > 8) { setState('ok'); onPass(); }
          else setState('silent');
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    } catch {
      setState('denied');
    }
  };

  const percent = Math.min(100, Math.round((level / 128) * 100));
  const barColor = percent > 40 ? 'bg-emerald-500' : percent > 15 ? 'bg-amber-500' : 'bg-destructive';

  return (
    <div className="glass-card p-5 mb-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Mic className="h-4 w-4 text-primary" />
        <p className="text-sm font-semibold">Microphone Check</p>
      </div>
      <p className="text-xs text-muted-foreground mb-4">
        Say a few words to make sure we can hear you before you spend credits.
      </p>

      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden mb-4">
        <div className={`h-full transition-all ${barColor}`} style={{ width: `${percent}%` }} />
      </div>

      {state === 'idle' && (
        <Button size="sm" variant="outline" onClick={runCheck} className="gap-2">
          <Mic className="h-4 w-4" /> Run Mic Test
        </Button>
      )}
      {state === 'checking' && (
        <div className="text-xs text-muted-foreground inline-flex items-center gap-1">
          <Loader2 className="h-3 w-3 animate-spin" /> Listening for 3 seconds…
        </div>
      )}
      {state === 'ok' && (
        <div className="text-xs text-emerald-600 inline-flex items-center gap-1 font-medium">
          <CheckCircle2 className="h-3 w-3" /> Mic works great — you're ready to record.
        </div>
      )}
      {state === 'silent' && (
        <div className="space-y-2">
          <div className="text-xs text-amber-600 inline-flex items-center gap-1 font-medium">
            <AlertTriangle className="h-3 w-3" /> We couldn't detect your voice.
          </div>
          <div>
            <Button size="sm" variant="outline" onClick={runCheck}>Try again</Button>
          </div>
        </div>
      )}
      {state === 'denied' && (
        <div className="text-xs text-destructive inline-flex items-center gap-1 font-medium">
          <AlertTriangle className="h-3 w-3" /> Microphone permission denied. Enable it in your browser settings.
        </div>
      )}
    </div>
  );
}
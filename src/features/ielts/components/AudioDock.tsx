import { useEffect, useRef, useState } from 'react';
import { Headphones, Pause, Play, RotateCcw, RotateCw, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useT } from '@/i18n';

const mmss = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
const PREP_SECONDS = 15;

/**
 * The recording of one listening section.
 * Exam mode copies the real test: a short pause to look at the questions, then the recording plays once, with no pause and no seeking.
 * Practice mode gives full control: play/pause, rewind and forward 10 s, speed and a seek bar.
 */
export function AudioDock({ src, exam, section, first, last, played, onStart, onEnded }: {
  src: string; exam: boolean; section: number; first: number; last: number; played: boolean; onStart: () => void; onEnded: () => void;
}) {
  const { t } = useT();
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [dur, setDur] = useState(0);
  const [error, setError] = useState(false);
  const [prep, setPrep] = useState<number | null>(null);
  const [speed, setSpeed] = useState(1);
  const [volume, setVolume] = useState(1);
  const [ended, setEnded] = useState(false);

  useEffect(() => { setPlaying(false); setTime(0); setError(false); setPrep(null); setEnded(false); setSpeed(1); }, [src]);
  useEffect(() => { if (ref.current) ref.current.volume = volume; }, [volume, src]);
  useEffect(() => { if (ref.current) ref.current.playbackRate = speed; }, [speed, src]);

  const play = () => { void ref.current?.play().then(() => onStart()).catch(() => setError(true)); };

  // The countdown before an exam recording: the learner looks at the questions first.
  useEffect(() => {
    if (prep === null) return;
    if (prep <= 0) { setPrep(null); play(); return; }
    const id = window.setTimeout(() => setPrep((p) => (p === null ? null : p - 1)), 1000);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prep]);

  const pct = dur ? Math.min(100, (time / dur) * 100) : 0;
  const finished = exam && played && !playing && prep === null;
  const start = () => { if (exam) setPrep(PREP_SECONDS); else play(); };
  const toggle = () => { const a = ref.current; if (!a) return; if (a.paused) play(); else if (!exam) a.pause(); };
  const seek = (delta: number) => { const a = ref.current; if (a) a.currentTime = Math.max(0, Math.min(a.duration || 0, a.currentTime + delta)); };

  const status = error ? t('ielts.listening.audioError')
    : prep !== null ? t('ielts.listening.prep', { first, last, n: prep })
      : ended || finished ? (exam ? t('ielts.listening.ended') : t('ielts.listening.practiceHint'))
        : playing ? t('ielts.listening.playing')
          : exam ? t('ielts.listening.headphones') : t('ielts.listening.practiceHint');

  return (
    <div className="sticky top-[6.75rem] z-30 mb-4 overflow-hidden rounded-2xl border border-border bg-card/95 shadow-md backdrop-blur">
      <audio ref={ref} src={src} preload="auto" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
        onEnded={() => { setPlaying(false); setEnded(true); onEnded(); }} onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDur(e.currentTarget.duration)} onError={() => setError(true)} />
      <div className="h-1 bg-secondary"><div className="h-full bg-primary transition-[width] duration-300" style={{ width: `${pct}%` }} /></div>
      <div className="flex items-center gap-3 p-3">
        {exam && !played && prep === null ? (
          <Button variant="glow" onClick={start} disabled={error} className="shrink-0 gap-2"><Headphones className="h-4 w-4" />{t('ielts.listening.start', { n: section + 1 })}</Button>
        ) : (
          <Button size="icon" variant="glow" onClick={toggle} disabled={error || (exam && (prep !== null || finished))}
            aria-label={playing ? t('ielts.listening.pause') : t('ielts.listening.play')} className="h-12 w-12 shrink-0 rounded-full">
            {playing && !exam ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span aria-hidden className="flex h-5 items-end gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className={cn('w-1 rounded-full bg-primary', playing ? 'animate-pulse' : 'opacity-30')} style={{ height: `${[40, 80, 60, 100, 50][i]}%`, animationDelay: `${i * 120}ms` }} />
              ))}
            </span>
            <p className={cn('truncate text-sm', prep !== null ? 'font-bold text-primary' : 'text-muted-foreground')} aria-live="polite">{status}</p>
          </div>
          {!exam ? (
            <input type="range" min={0} max={dur || 1} step={0.1} value={time} aria-label={t('ielts.listening.position')}
              onChange={(e) => { if (ref.current) ref.current.currentTime = Number(e.target.value); }} className="mt-1 h-6 w-full accent-[hsl(var(--primary))]" />
          ) : null}
          <div className="flex justify-between text-xs tabular-nums text-muted-foreground"><span>{mmss(time)}</span><span>{dur ? mmss(dur) : '--:--'}</span></div>
        </div>
        {!exam && (
          <div className="hidden shrink-0 items-center gap-1 sm:flex">
            <button type="button" onClick={() => seek(-10)} aria-label={t('ielts.listening.back10')} className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-secondary"><RotateCcw className="h-4 w-4" /></button>
            <button type="button" onClick={() => seek(10)} aria-label={t('ielts.listening.fwd10')} className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-secondary"><RotateCw className="h-4 w-4" /></button>
            <select value={speed} onChange={(e) => setSpeed(Number(e.target.value))} aria-label={t('ielts.listening.speed')} className="h-9 rounded-lg border border-border bg-background px-1.5 text-sm">
              {[0.75, 1, 1.25].map((v) => <option key={v} value={v}>{v}×</option>)}
            </select>
          </div>
        )}
        <label className="hidden shrink-0 items-center gap-1.5 md:flex" title={t('ielts.listening.volume')}>
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <input type="range" min={0} max={1} step={0.05} value={volume} onChange={(e) => setVolume(Number(e.target.value))} aria-label={t('ielts.listening.volume')} className="w-20 accent-[hsl(var(--primary))]" />
        </label>
      </div>
      {!exam && (
        <div className="flex items-center justify-center gap-2 border-t border-border p-2 sm:hidden">
          <button type="button" onClick={() => seek(-10)} className="inline-flex h-9 items-center gap-1 rounded-lg border border-border px-3 text-xs"><RotateCcw className="h-4 w-4" />10s</button>
          <button type="button" onClick={() => seek(10)} className="inline-flex h-9 items-center gap-1 rounded-lg border border-border px-3 text-xs"><RotateCw className="h-4 w-4" />10s</button>
          <select value={speed} onChange={(e) => setSpeed(Number(e.target.value))} aria-label={t('ielts.listening.speed')} className="h-9 rounded-lg border border-border bg-background px-2 text-sm">
            {[0.75, 1, 1.25].map((v) => <option key={v} value={v}>{v}×</option>)}
          </select>
        </div>
      )}
    </div>
  );
}

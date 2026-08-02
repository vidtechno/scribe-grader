import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, RotateCcw, Rewind, FastForward } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
  className?: string;
}

function formatTime(seconds: number) {
  if (!isFinite(seconds) || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function AudioPlayer({ src, className = '' }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      setIsReady(true);
    };
    const onTimeUpdate = () => setCurrentTime(audio.currentTime || 0);
    const onEnded = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);

    // Load new source when src changes
    audio.load();
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setIsReady(false);

    return () => {
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, [src]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
  };

  const handleSeek = (values: number[]) => {
    const audio = audioRef.current;
    if (!audio || !values.length) return;
    audio.currentTime = values[0];
    setCurrentTime(values[0]);
  };

  const skip = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = Math.min(Math.max((audio.currentTime || 0) + seconds, 0), duration || 0);
    audio.currentTime = next;
    setCurrentTime(next);
  };

  const restart = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    setCurrentTime(0);
    audio.play().catch(() => {});
  };

  return (
    <div className={`w-full rounded-2xl border border-border bg-card p-4 shadow-sm ${className}`}>
      <audio ref={audioRef} src={src} preload="metadata" className="hidden" />

      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full shrink-0"
          onClick={togglePlay}
          disabled={!isReady}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
        </Button>

        <div className="flex-1 min-w-0 space-y-2">
          <Slider
            value={[currentTime]}
            max={duration || 1}
            step={0.1}
            onValueChange={handleSeek}
            disabled={!isReady}
            className="cursor-pointer"
          />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-3">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="gap-1.5 text-xs"
          onClick={() => skip(-10)}
          disabled={!isReady}
        >
          <Rewind className="h-3.5 w-3.5" /> -10s
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="gap-1.5 text-xs"
          onClick={restart}
          disabled={!isReady}
        >
          <RotateCcw className="h-3.5 w-3.5" /> Replay
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="gap-1.5 text-xs"
          onClick={() => skip(10)}
          disabled={!isReady}
        >
          <FastForward className="h-3.5 w-3.5" /> +10s
        </Button>
      </div>
    </div>
  );
}

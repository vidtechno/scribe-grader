import { useState } from 'react';
import { Turtle, Volume2 } from 'lucide-react';
import { toast } from 'sonner';
import { speak } from '../speech';

let warned = false;
function warnNoSound() {
  if (warned) return;
  warned = true;
  toast.message("Ovoz chiqmadi", {
    description: "Telefoningiz ovozi va internetni tekshiring. Eshitish mashqlarida «Matnni ko'rsatish» tugmasi bilan davom etishingiz mumkin.",
  });
}

/** Play button for English text, with an optional slow-speed button. */
export function SpeakButton({ text, size = 'sm', slow = false, label }: { text: string; size?: 'sm' | 'md' | 'lg'; slow?: boolean; label?: string }) {
  const [playing, setPlaying] = useState(false);
  const play = async (isSlow: boolean) => {
    setPlaying(true);
    try {
      const ok = await speak(text, { slow: isSlow });
      if (!ok) warnNoSound();
    } finally { setPlaying(false); }
  };
  const dim = size === 'lg' ? 'h-16 w-16' : size === 'md' ? 'h-10 w-10' : 'h-8 w-8';
  const icon = size === 'lg' ? 'h-7 w-7' : size === 'md' ? 'h-5 w-5' : 'h-4 w-4';
  return (
    <span className="inline-flex items-center gap-1.5 align-middle">
      <button type="button" onClick={(e) => { e.stopPropagation(); void play(false); }} aria-label={`Tinglash: ${text}`}
        className={`${dim} shrink-0 rounded-full grid place-items-center transition-all ${playing ? 'bg-primary text-primary-foreground scale-95' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}>
        <Volume2 className={icon} />
      </button>
      {slow && (
        <button type="button" onClick={(e) => { e.stopPropagation(); void play(true); }} aria-label="Sekin tinglash"
          className={`${size === 'lg' ? 'h-11 w-11' : 'h-8 w-8'} shrink-0 rounded-full grid place-items-center bg-secondary text-muted-foreground hover:text-primary`}>
          <Turtle className="h-4 w-4" />
        </button>
      )}
      {label && <span className="text-xs text-muted-foreground">{label}</span>}
    </span>
  );
}

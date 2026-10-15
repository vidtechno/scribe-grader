import { Clock, Mic, PenLine } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { TopicOption } from '@/lib/speakingTopics';

const PART_NAME = { part1: 'Part 1 · Interview', part2: 'Part 2 · Long turn', part3: 'Part 3 · Discussion' } as const;

/** The selected topic, drawn like the card the examiner hands over (Part 2) or the list of questions (Parts 1 and 3). */
export function TopicCard({ option, custom, seconds, compact }: { option?: TopicOption; custom?: string; seconds: number; compact?: boolean }) {
  const part = option?.part ?? 'part2';
  return (
    <div className={cn('rounded-2xl border-2 border-foreground/80 bg-card shadow-[4px_4px_0_0_hsl(var(--foreground)/0.12)]', compact ? 'p-4' : 'p-5 sm:p-6')}>
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary"><Mic className="h-3.5 w-3.5" />{custom ? 'Your own topic' : PART_NAME[part]}</span>
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3.5 w-3.5" />up to {seconds >= 120 ? `${seconds / 60} min` : `${seconds} s`}</span>
      </div>
      {custom ? (
        <p className="text-base font-semibold flex items-start gap-2"><PenLine className="h-4 w-4 mt-1 shrink-0 text-muted-foreground" />{custom}</p>
      ) : option?.card ? (
        <>
          <h3 className="text-lg sm:text-xl font-bold leading-snug mb-3">{option.card.title}</h3>
          <p className="text-sm font-semibold mb-1">You should say:</p>
          <ul className="space-y-1 mb-3 text-sm">{option.card.points.map((p, i) => <li key={i} className="flex gap-2"><span className="text-primary">•</span>{p}</li>)}</ul>
          <p className="text-sm font-semibold">and {option.card.explain}.</p>
        </>
      ) : option ? (
        <>
          <h3 className="text-lg sm:text-xl font-bold leading-snug mb-3">{option.label}</h3>
          <ol className="space-y-2 text-sm">{option.questions?.map((q, i) => <li key={i} className="flex gap-2"><span className="h-5 w-5 rounded-full bg-primary/10 text-primary text-[11px] font-bold grid place-items-center shrink-0">{i + 1}</span>{q}</li>)}</ol>
        </>
      ) : null}
    </div>
  );
}

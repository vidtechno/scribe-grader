import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Flame, Gift, Zap } from 'lucide-react';
import { useT } from '@/i18n';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useReviewQueue } from '../engine/api';
import { useStreakRewards, type LearningState } from '../api';
import { DailyCard } from './DailyCard';
import { WeekCalendar } from './WeekCalendar';

/** The numbers a learner keeps glancing at: streak, XP, reviews waiting and the next streak reward. */
function useNumbers(state: LearningState) {
  const { data: queue } = useReviewQueue();
  const { data: rewards } = useStreakRewards();
  const info = state.streak_info;
  const streak = info?.current ?? state.streak ?? 0;
  const due = (queue?.stats?.due ?? 0) + (queue?.stats?.mistakes ?? 0);
  const granted = new Set((rewards?.granted ?? []).map((g) => g.milestone));
  const next = ([3, 7, 14] as const).find((m) => m > streak && !granted.has(m));
  return { xp: state.profile?.xp ?? 0, streak, due, next, risk: !!info?.at_risk && !info?.done_today, done: info?.done_today ?? false };
}

/** The four icons of the top bar, one tap each: streak (orange when today is still open), XP, reviews, next reward. */
function Numbers({ state, big = false }: { state: LearningState; big?: boolean }) {
  const { t } = useT();
  const n = useNumbers(state);
  const cls = big ? 'text-lg' : 'text-base';
  const icon = big ? 'h-7 w-7' : 'h-6 w-6';
  return (
    <span className={`flex w-full items-center justify-between gap-2 font-extrabold ${cls}`}>
      <span className={`flex items-center gap-1.5 ${n.streak > 0 ? 'text-orange-500' : 'text-muted-foreground'}`} title={t('learn.continue.streak')}>
        <Flame className={`${icon} ${n.streak > 0 ? 'fill-orange-400' : ''} ${n.risk ? 'animate-pulse' : ''}`} />{n.streak}
      </span>
      <span className="flex items-center gap-1.5 text-amber-500" title="XP"><Zap className={`${icon} fill-amber-400`} />{n.xp}</span>
      <span className="flex items-center gap-1.5 text-primary" title={t('learn.continue.dueSuffix')}><Brain className={icon} />{n.due}</span>
      <span className={`flex items-center gap-1.5 ${n.next ? 'text-fuchsia-500' : 'text-muted-foreground/50'}`}><Gift className={icon} />{n.next ?? '✓'}</span>
    </span>
  );
}

/** Everything behind the numbers: the week, the daily 5 minutes and the reviews waiting. */
function PanelBody({ state, wordCount }: { state: LearningState; wordCount: number }) {
  const { t } = useT();
  const n = useNumbers(state);
  return (
    <div className="space-y-3">
      <WeekCalendar state={state} />
      <DailyCard state={state} wordCount={wordCount} compact />
      <Link to="/learn?tab=words" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-sm transition-colors hover:border-primary">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><Brain className="h-5 w-5" /></span>
        <span className="min-w-0"><span className="block text-xl font-black leading-none">{n.due}</span><span className="text-xs font-semibold text-muted-foreground">{t('learn.continue.dueSuffix')}</span></span>
      </Link>
    </div>
  );
}

/** Wide screens: the right-hand panel beside the road map, in view while the map scrolls. */
export function RightPanel({ state, wordCount }: { state: LearningState; wordCount: number }) {
  const { t } = useT();
  return (
    <aside className="sticky top-4 hidden space-y-3 self-start xl:block" aria-label={t('learn.rail.label')}>
      <div className="rounded-2xl border border-border bg-card px-4 py-3 shadow-sm"><Numbers state={state} big /></div>
      <PanelBody state={state} wordCount={wordCount} />
    </aside>
  );
}

/** Phones and narrower screens: the same four numbers as a bar that stays on top; a tap opens the week and the daily 5 minutes. */
export function StatsBar({ state, wordCount }: { state: LearningState; wordCount: number }) {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} aria-label={t('learn.rail.label')}
        className="sticky top-14 z-20 -mx-4 mb-3 block w-[calc(100%+2rem)] border-b border-border bg-background/95 px-5 py-2.5 backdrop-blur lg:top-0 xl:hidden">
        <Numbers state={state} />
      </button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" className="mx-auto max-h-[88vh] max-w-lg overflow-y-auto rounded-t-3xl">
          <SheetHeader className="text-left">
            <SheetTitle>{t('learn.rail.label')}</SheetTitle>
            <SheetDescription className="sr-only">{t('learn.week.title')}</SheetDescription>
          </SheetHeader>
          <div className="mt-3"><PanelBody state={state} wordCount={wordCount} /></div>
        </SheetContent>
      </Sheet>
    </>
  );
}

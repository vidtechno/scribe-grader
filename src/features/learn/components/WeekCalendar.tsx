import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Flame, Gift, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useT } from '@/i18n';
import { useStreakRewards, type LearningState, type RewardGrant } from '../api';
import { weekDots } from './StreakCelebration';

const MILESTONES = [3, 7, 14] as const;
const DAY_LETTERS: Record<'uz' | 'en', string[]> = {
  uz: ['Ya', 'Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh'],
  en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
};

/** Short name of what a milestone gives, in the learner's own situation (trial, paying or neither). */
export function rewardKey(milestone: number, inTrial: boolean): string {
  if (milestone === 3) return 'learn.week.reward.ai';
  if (milestone === 7) return inTrial ? 'learn.week.reward.trial' : 'learn.week.reward.ai';
  return 'learn.week.reward.badge';
}

/**
 * The learning home's week at a glance: seven circles (today glows until it is done), the "+1 today" button and the
 * three streak rewards. Rewards are granted by the server the first time the streak reaches 3, 7 and 14 days.
 */
export function WeekCalendar({ state }: { state: LearningState }) {
  const { t, lang } = useT();
  const { data: rewards } = useStreakRewards();
  const info = state.streak_info;
  const streak = info?.current ?? state.streak ?? 0;
  const doneToday = info?.done_today ?? false;
  const dots = weekDots(state);
  const letters = DAY_LETTERS[lang === 'uz' ? 'uz' : 'en'];
  const inTrial = rewards?.in_trial ?? state.access.reason === 'trial';
  const granted = new Set((rewards?.granted ?? []).map((g) => g.milestone));
  const next = MILESTONES.find((m) => m > streak && !granted.has(m));

  // A reward that was granted by this very visit stays on screen after the next refetch reports it as old.
  const [fresh, setFresh] = useState<RewardGrant[]>([]);
  useEffect(() => {
    if (rewards?.fresh?.length) setFresh((prev) => (prev.length ? prev : rewards.fresh));
  }, [rewards]);

  return (
    <section aria-label={t('learn.week.label')} className="mb-4 overflow-hidden rounded-[1.75rem] border border-border bg-card p-4 shadow-sm sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[.2em] text-orange-600 dark:text-orange-400">{t('learn.week.title')}</p>
          <p className="mt-1 text-lg font-extrabold leading-snug">
            {streak > 0 ? t('learn.week.streak', { n: streak }) : t('learn.week.none')}
          </p>
        </div>
        {doneToday
          ? <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300"><Check className="h-3.5 w-3.5" />{t('learn.week.done')}</span>
          : null}
      </div>

      <ol className="mt-4 grid grid-cols-7 gap-1.5 sm:gap-3" aria-label={t('learn.week.days')}>
        {dots.map((d, i) => {
          const glowing = d.today && !d.done;
          return (
            <li key={i} className="flex flex-col items-center gap-1.5">
              <span className={`text-[11px] font-semibold ${d.today ? 'text-orange-600 dark:text-orange-400' : 'text-muted-foreground'}`}>{letters[d.dow]}</span>
              <motion.span
                aria-label={d.done ? t('learn.week.dayDone') : d.today ? t('learn.week.dayToday') : t('learn.week.dayMissed')}
                className={`relative grid h-9 w-9 place-items-center rounded-full sm:h-11 sm:w-11 ${d.done ? 'bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-md shadow-orange-500/30' : glowing ? 'border-2 border-orange-400 bg-orange-500/10 text-orange-500' : 'bg-secondary text-muted-foreground/40'}`}
                animate={glowing ? { boxShadow: ['0 0 0 0 rgba(251,146,60,.55)', '0 0 0 9px rgba(251,146,60,0)'] } : undefined}
                transition={glowing ? { duration: 1.6, repeat: Infinity, ease: 'easeOut' } : undefined}>
                {d.done ? <Check className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={3} /> : glowing ? <Flame className="h-4 w-4 sm:h-5 sm:w-5" /> : null}
              </motion.span>
            </li>
          );
        })}
      </ol>

      {!doneToday && (
        <Button asChild variant="glow" className="mt-4 w-full gap-2 text-base font-bold">
          <Link to="/learn/daily"><Flame className="h-4 w-4" />{t('learn.week.cta')}</Link>
        </Button>
      )}

      <div className="mt-4 grid grid-cols-3 gap-2">
        {MILESTONES.map((m) => {
          const got = granted.has(m) || streak >= m;
          return (
            <div key={m} className={`rounded-2xl border p-2.5 text-center ${got ? 'border-emerald-500/40 bg-emerald-500/10' : m === next ? 'border-orange-400/50 bg-orange-500/10' : 'border-border bg-secondary/40'}`}>
              <p className="flex items-center justify-center gap-1 text-xs font-extrabold">
                {got ? <Check className="h-3.5 w-3.5 text-emerald-600" strokeWidth={3} /> : m === next ? <Gift className="h-3.5 w-3.5 text-orange-500" /> : <Lock className="h-3.5 w-3.5 text-muted-foreground" />}
                {t('learn.week.day', { n: m })}
              </p>
              <p className="mt-1 text-[11px] font-semibold leading-snug text-muted-foreground">{t(rewardKey(m, inTrial))}</p>
            </div>
          );
        })}
      </div>
      {next
        ? <p className="mt-3 text-center text-sm text-muted-foreground">{t('learn.week.next', { n: next - streak, day: next })}</p>
        : <p className="mt-3 text-center text-sm font-semibold text-emerald-700 dark:text-emerald-300">{t('learn.week.all')}</p>}

      <AnimatePresence>
        {fresh.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 8, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }} role="status"
            className="mt-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 p-3 text-center text-sm font-bold text-white">
            {fresh.map((g) => <p key={g.milestone}>🎁 {t(`learn.week.won.${g.kind}`, { n: g.amount, day: g.milestone })}</p>)}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

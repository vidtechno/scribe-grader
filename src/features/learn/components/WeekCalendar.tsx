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

  const goal = Math.max(1, state.goal?.daily_goal_xp ?? 30);
  const todayXp = state.goal?.today_xp ?? 0;
  const risk = !doneToday && streak > 0 && !!info?.at_risk;
  return (
    <section aria-label={t('learn.week.label')} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#ff4058] via-primary to-[#ad001f] p-4 text-white shadow-xl shadow-primary/20">
      <span aria-hidden className="absolute -right-14 -top-20 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
      <div className="relative flex items-center gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/15"><Flame className={`h-6 w-6 ${streak > 0 ? 'fill-orange-300 text-orange-200' : 'text-white/70'}`} /></span>
        <div className="min-w-0 flex-1">
          <p className="text-lg font-extrabold leading-tight">{streak > 0 ? t('learn.week.streak', { n: streak }) : t('learn.week.none')}</p>
          <p className="text-xs font-semibold text-white/80">{risk ? t('learn.goal.atRisk', { n: streak }) : doneToday ? t('learn.week.done') : t('learn.week.title')} · {todayXp}/{goal} XP</p>
        </div>
      </div>

      <ol className="relative mt-3 grid grid-cols-7 gap-1" aria-label={t('learn.week.days')}>
        {dots.map((d, i) => {
          const glowing = d.today && !d.done;
          return (
            <li key={i} className="flex flex-col items-center gap-1">
              <span className={`text-[10px] font-bold ${d.today ? 'text-white' : 'text-white/65'}`}>{letters[d.dow]}</span>
              <motion.span
                aria-label={d.done ? t('learn.week.dayDone') : d.today ? t('learn.week.dayToday') : t('learn.week.dayMissed')}
                className={`grid h-8 w-8 place-items-center rounded-full sm:h-9 sm:w-9 ${d.done ? 'bg-white text-primary shadow-md' : glowing ? 'border-2 border-white bg-white/20 text-white' : 'bg-white/15 text-white/40'}`}
                animate={glowing ? { boxShadow: ['0 0 0 0 rgba(255,255,255,.7)', '0 0 0 8px rgba(255,255,255,0)'] } : undefined}
                transition={glowing ? { duration: 1.6, repeat: Infinity, ease: 'easeOut' } : undefined}>
                {d.done ? <Check className="h-4 w-4" strokeWidth={3.5} /> : glowing ? <Flame className="h-4 w-4" /> : null}
              </motion.span>
            </li>
          );
        })}
      </ol>

      {!doneToday && (
        <Button asChild size="sm" className="relative mt-3 w-full gap-2 bg-white font-bold text-primary hover:bg-white/90">
          <Link to="/learn/daily"><Flame className="h-4 w-4" />{t('learn.week.cta')}</Link>
        </Button>
      )}

      <div className="relative mt-3 flex gap-1.5">
        {MILESTONES.map((m) => {
          const got = granted.has(m) || streak >= m;
          return (
            <div key={m} className={`min-w-0 flex-1 rounded-xl px-2 py-1.5 text-center ${got ? 'bg-emerald-400/30' : m === next ? 'bg-white/25 ring-1 ring-white/60' : 'bg-black/15'}`}>
              <p className="flex items-center justify-center gap-1 text-[11px] font-extrabold">
                {got ? <Check className="h-3 w-3" strokeWidth={3.5} /> : m === next ? <Gift className="h-3 w-3" /> : <Lock className="h-3 w-3 opacity-70" />}
                {t('learn.week.day', { n: m })}
              </p>
              <p className="text-[10px] font-semibold leading-tight text-white/85">{t(rewardKey(m, inTrial))}</p>
            </div>
          );
        })}
      </div>
      {next
        ? <p className="relative mt-2 text-center text-[11px] font-semibold text-white/80">{t('learn.week.next', { n: next - streak, day: next })}</p>
        : <p className="relative mt-2 text-center text-[11px] font-bold">{t('learn.week.all')}</p>}

      <AnimatePresence>
        {fresh.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 8, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }} role="status"
            className="relative mt-2 rounded-xl bg-white p-2.5 text-center text-sm font-bold text-primary">
            {fresh.map((g) => <p key={g.milestone}>🎁 {t(`learn.week.won.${g.kind}`, { n: g.amount, day: g.milestone })}</p>)}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useQueryClient } from '@tanstack/react-query';
import { Check, Flame, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useT } from '@/i18n';
import { claimStreakRewards, useLearningState, type LearningState, type RewardGrant } from '../api';
import { setStreakModalOpen } from './celebrationBus';

type Snapshot = { streak: number; doneToday: boolean };
const MILESTONES = [3, 7, 14, 30, 50, 100, 200, 365];
const seenKey = (userId: string, day: string) => `scorify-streak-seen:${userId}:${day}`;

/** Last seven days, oldest first: true when the learner earned XP that day. */
export function weekDots(state: LearningState): { label: string; dow: number; done: boolean; today: boolean }[] {
  const xpByDay = new Map(state.activity.map((a) => [a.day, a.xp]));
  const today = new Date(`${state.today}T00:00:00Z`);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today.getTime() - (6 - i) * 86_400_000);
    const key = d.toISOString().slice(0, 10);
    return { label: d.toLocaleDateString('en', { weekday: 'narrow', timeZone: 'UTC' }), dow: d.getUTCDay(), done: (xpByDay.get(key) ?? 0) > 0 || (i === 6 && state.streak_info?.done_today === true), today: i === 6 };
  });
}

/** Counts up from `from` to `to`. */
function useCountUp(from: number, to: number, run: boolean) {
  const [n, setN] = useState(from);
  useEffect(() => {
    if (!run) return;
    const id = window.setTimeout(() => setN(to), 650);
    return () => window.clearTimeout(id);
  }, [from, to, run]);
  return n;
}

/**
 * Watches the learning state; when today's first activity raises the streak it shows a small celebration
 * (flame, the number ticking up by one, the last seven days). Mounted once for the whole app.
 */
export function StreakCelebration() {
  const { user } = useAuth();
  const { data: state } = useLearningState();
  const { t } = useT();
  const qc = useQueryClient();
  const prev = useRef<Snapshot | null>(null);
  const [show, setShow] = useState<{ from: number; to: number; dots: ReturnType<typeof weekDots>; rewards: RewardGrant[]; inTrial: boolean } | null>(null);

  useEffect(() => {
    if (!state || !user) return;
    const info = state.streak_info;
    const streak = info?.current ?? state.streak ?? 0;
    const doneToday = info?.done_today ?? false;
    const before = prev.current;
    prev.current = { streak, doneToday };
    // Today's first activity: the day just became "done".
    if (!before || before.doneToday || !doneToday || streak <= 0) return;
    try {
      if (sessionStorage.getItem(seenKey(user.id, state.today))) return;
      sessionStorage.setItem(seenKey(user.id, state.today), '1');
    } catch { /* storage unavailable: show it anyway */ }
    setShow({ from: before.streak < streak ? before.streak : streak - 1, to: streak, dots: weekDots(state), rewards: [], inTrial: false });
    // A streak of 3+ days may have just earned a reward. One idempotent call, once a day, only when the day first becomes done.
    if (streak >= 3) {
      void claimStreakRewards().then((r) => {
        qc.setQueryData(['streak-rewards', user.id], r);
        if (r.fresh.length) setShow((cur) => (cur && cur.to === streak ? { ...cur, rewards: r.fresh, inTrial: r.in_trial } : cur));
      }).catch(() => { /* the home page claims it on the next visit */ });
    }
  }, [state, user, qc]);

  useEffect(() => {
    setStreakModalOpen(!!show);
    return () => setStreakModalOpen(false);
  }, [show]);

  useEffect(() => {
    if (!show) return;
    const id = window.setTimeout(() => setShow(null), show.rewards.length ? 12_000 : 7000);
    return () => window.clearTimeout(id);
  }, [show]);

  const count = useCountUp(show?.from ?? 0, show?.to ?? 0, !!show);
  const milestone = show ? MILESTONES.includes(show.to) : false;

  return (
    <AnimatePresence>
      {show && (
        <motion.div key="streak" className="fixed inset-0 z-[100] grid place-items-center bg-black/55 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShow(null)} role="dialog" aria-modal="true" aria-label={t('learn.streak.title')}>
          <motion.div className="w-full max-w-sm rounded-3xl bg-card p-6 text-center shadow-2xl" onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, y: 24, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
            <motion.div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-lg shadow-orange-500/40"
              animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 1.1, repeat: 2 }}>
              <Flame className="h-12 w-12 fill-yellow-200 text-white" />
            </motion.div>
            <div className="mt-4 flex items-center justify-center gap-2 overflow-hidden text-6xl font-black leading-none text-orange-500" aria-live="polite">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span key={count} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -40, opacity: 0 }} transition={{ duration: 0.35 }}>{count}</motion.span>
              </AnimatePresence>
            </div>
            <p className="mt-1 text-lg font-extrabold">{t('learn.streak.lead', { n: show.to })}</p>
            <p className="mt-1 text-sm text-muted-foreground">{milestone ? t('learn.streak.milestone', { n: show.to }) : show.from === 0 ? t('learn.streak.first') : t('learn.streak.keep')}</p>
            <AnimatePresence>
              {show.rewards.map((g) => (
                <motion.div key={g.milestone} initial={{ opacity: 0, y: 12, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 240, damping: 16 }}
                  className="mt-4 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 p-3 text-left text-white shadow-lg shadow-orange-500/30">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/20"><Gift className="h-5 w-5" /></span>
                  <span className="min-w-0 text-sm font-bold leading-snug">{t(`learn.week.won.${g.kind}`, { n: g.amount, day: g.milestone })}</span>
                </motion.div>
              ))}
            </AnimatePresence>
            <div className="mt-4 flex justify-center gap-2">
              {show.dots.map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <span className="text-[10px] font-semibold text-muted-foreground">{d.label}</span>
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.15 + i * 0.07, type: 'spring' }}
                    className={`grid h-7 w-7 place-items-center rounded-full ${d.done ? 'bg-orange-500 text-white' : 'bg-secondary text-muted-foreground/50'} ${d.today ? 'ring-2 ring-orange-300' : ''}`}>
                    {d.done ? <Check className="h-4 w-4" /> : null}
                  </motion.span>
                </div>
              ))}
            </div>
            <Button className="mt-5 w-full" variant="glow" onClick={() => setShow(null)}>{t('learn.streak.continue')}</Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

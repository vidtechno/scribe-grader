import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import { Trophy, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useT } from '@/i18n';
import { callLearning, useLearningState } from '../api';
import { isStreakModalOpen, subscribeStreakModal } from './celebrationBus';
import { motivation, rankDelta, readLastRank, saveLastRank, type MyRank } from './xpRank';

const DEBOUNCE_MS = 1500;
const MIN_GAP_MS = 60_000;
const VISIBLE_MS = 7000;

interface Shown { gain: number; rank: MyRank; delta: number }

function useCountUp(to: number, run: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let i = 0;
    const steps = 12;
    const id = window.setInterval(() => { i += 1; setN(Math.round((to * i) / steps)); if (i >= steps) window.clearInterval(id); }, 45);
    return () => window.clearInterval(id);
  }, [to, run]);
  return n;
}

/**
 * Watches the learning state; when XP goes up it shows a small non-blocking card with the weekly rank
 * and a button to the leaderboard. Mounted once, next to StreakCelebration.
 */
export function XpRankToast() {
  const { user } = useAuth();
  const { data: state } = useLearningState();
  const { t } = useT();
  const navigate = useNavigate();
  const qc = useQueryClient();
  const prevXp = useRef<number | null>(null);
  const prevUser = useRef<string | null>(null);
  const gain = useRef(0);
  const lastShown = useRef(0);
  const timer = useRef<number | undefined>(undefined);
  const unsub = useRef<(() => void) | null>(null);
  const day = useRef('');
  const [show, setShow] = useState<Shown | null>(null);

  day.current = state?.today ?? '';
  const uid = user?.id ?? null;

  useEffect(() => {
    if (!state || !uid) return;
    if (prevUser.current !== uid) { prevUser.current = uid; prevXp.current = null; gain.current = 0; }
    const xp = state.profile?.xp;
    if (typeof xp !== 'number') return;
    const before = prevXp.current;
    prevXp.current = xp;
    if (before == null || xp <= before) return;
    gain.current += xp - before;
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => void present(uid), DEBOUNCE_MS);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, uid]);

  useEffect(() => () => { window.clearTimeout(timer.current); unsub.current?.(); }, []);

  async function present(userId: string) {
    const earned = gain.current;
    if (earned <= 0) return;
    if (Date.now() - lastShown.current < MIN_GAP_MS && lastShown.current > 0) { gain.current = 0; return; }
    // Let the streak celebration finish first.
    if (isStreakModalOpen()) {
      unsub.current?.();
      unsub.current = subscribeStreakModal(() => {
        if (isStreakModalOpen()) return;
        unsub.current?.(); unsub.current = null;
        timer.current = window.setTimeout(() => void present(userId), 400);
      });
      return;
    }
    gain.current = 0;
    try {
      const rank = await qc.fetchQuery({ queryKey: ['learning-my-rank', userId], staleTime: 2000, queryFn: () => callLearning<MyRank>('learning_my_rank') });
      const delta = rankDelta(readLastRank(userId, day.current), rank.rank);
      saveLastRank(userId, day.current, rank.rank);
      lastShown.current = Date.now();
      setShow({ gain: earned, rank, delta });
    } catch { /* the toast is a nicety: stay quiet on errors */ }
  }

  useEffect(() => {
    if (!show) return;
    const id = window.setTimeout(() => setShow(null), VISIBLE_MS);
    return () => window.clearTimeout(id);
  }, [show]);

  const count = useCountUp(show?.gain ?? 0, !!show);
  const r = show?.rank;
  const line = show && r ? motivation(r, show.delta) : null;
  const progress = r && r.xp_to_next != null ? Math.round((r.week_xp / (r.week_xp + r.xp_to_next)) * 100) : null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+5.5rem)] z-[60] flex justify-center px-3 sm:bottom-5">
      <AnimatePresence>
        {show && r && line && (
          <motion.div key="xp-rank" role="status" aria-live="polite"
            className="pointer-events-auto w-full max-w-sm rounded-2xl border border-border bg-card p-3.5 shadow-xl"
            initial={{ y: 40, opacity: 0, scale: 0.96 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 24, opacity: 0, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}>
            <div className="flex items-start gap-3">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15 text-primary"><Trophy className="h-5 w-5" /></div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-extrabold leading-snug">
                  {r.rank != null ? t('learn.xpRank.title', { xp: count, rank: r.rank }) : t('learn.xpRank.titleNoRank', { xp: count, week: r.week_xp })}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{t(line.key, line.vars)}</p>
              </div>
              {show.delta > 0 && (
                <motion.span initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: [0.4, 1.25, 1], opacity: 1 }} transition={{ delay: 0.35, duration: 0.5 }}
                  className="shrink-0 rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {t('learn.xpRank.moved', { n: show.delta })}
                </motion.span>
              )}
              <button type="button" aria-label={t('learn.xpRank.close.aria')} onClick={() => setShow(null)}
                className="-mr-1 -mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full text-muted-foreground hover:bg-secondary"><X className="h-4 w-4" /></button>
            </div>
            {progress != null && (
              <div className="mt-2.5" aria-label={t('learn.xpRank.toNext')}>
                <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                  <motion.div className="h-full rounded-full bg-primary" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }} />
                </div>
              </div>
            )}
            <Button size="sm" variant="outline" className="mt-3 w-full" onClick={() => { setShow(null); navigate('/leaderboard'); }}>
              {t('learn.xpRank.view')}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

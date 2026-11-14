import { Link } from 'react-router-dom';
import { Brain, Flame, Gift, Sun, Zap } from 'lucide-react';
import { useT } from '@/i18n';
import { useReviewQueue } from '../engine/api';
import { useStreakRewards, type LearningState } from '../api';
import { rewardKey } from './WeekCalendar';

/** The numbers a learner keeps glancing at, kept in view while the road map scrolls. */
function useRail(state: LearningState) {
  const { data: queue } = useReviewQueue();
  const { data: rewards } = useStreakRewards();
  const info = state.streak_info;
  const streak = info?.current ?? state.streak ?? 0;
  const goal = Math.max(1, state.goal?.daily_goal_xp ?? 30);
  const todayXp = state.goal?.today_xp ?? 0;
  const due = (queue?.stats?.due ?? 0) + (queue?.stats?.mistakes ?? 0);
  const granted = new Set((rewards?.granted ?? []).map((g) => g.milestone));
  const next = ([3, 7, 14] as const).find((m) => m > streak && !granted.has(m));
  return { streak, goal, todayXp, due, next, inTrial: rewards?.in_trial ?? state.access.reason === 'trial', done: info?.done_today ?? false, risk: !!info?.at_risk && !info?.done_today };
}

const card = 'rounded-2xl border border-border bg-card p-3 shadow-sm';

/** Wide screens: two small columns beside the road map (`side` picks which), sticky while it scrolls. */
export function SideRail({ state, side }: { state: LearningState; side: 'left' | 'right' }) {
  const { t } = useT();
  const r = useRail(state);
  const pct = Math.min(100, Math.round((r.todayXp / r.goal) * 100));
  return (
    <aside className="sticky top-4 hidden space-y-3 self-start xl:block" aria-label={t('learn.rail.label')}>
      {side === 'left' ? (
        <>
          <div className={`${card} ${r.risk ? 'border-orange-400/60 bg-orange-500/10' : ''}`}>
            <p className="flex items-center gap-2 text-2xl font-black"><Flame className={`h-6 w-6 ${r.streak > 0 ? 'fill-orange-400 text-orange-500' : 'text-muted-foreground'}`} />{r.streak}</p>
            <p className="text-xs font-semibold text-muted-foreground">{r.risk ? t('learn.rail.risk') : t('learn.continue.streak')}</p>
          </div>
          <div className={card}>
            <p className="flex items-center gap-2 text-sm font-extrabold"><Zap className="h-4 w-4 text-amber-500" />{r.todayXp}/{r.goal} XP</p>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary"><div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pct}%` }} /></div>
            <p className="mt-1.5 text-[11px] text-muted-foreground">{t('learn.rail.goal')}</p>
          </div>
        </>
      ) : (
        <>
          {r.next && (
            <div className={card}>
              <p className="flex items-center gap-2 text-sm font-extrabold"><Gift className="h-4 w-4 text-orange-500" />{t('learn.week.day', { n: r.next })}</p>
              <p className="mt-0.5 text-xs font-semibold text-muted-foreground">{t(rewardKey(r.next, r.inTrial))}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">{t('learn.week.next', { n: r.next - r.streak, day: r.next })}</p>
            </div>
          )}
          <Link to="/learn?tab=words" className={`${card} block transition-colors hover:border-primary`}>
            <p className="flex items-center gap-2 text-sm font-extrabold"><Brain className="h-4 w-4 text-primary" />{r.due}</p>
            <p className="text-xs font-semibold text-muted-foreground">{t('learn.continue.dueSuffix')}</p>
          </Link>
          {!r.done && (
            <Link to="/learn/daily" className="flex items-center gap-2 rounded-2xl bg-primary p-3 text-sm font-extrabold text-primary-foreground shadow-md shadow-primary/20 hover:opacity-95">
              <Sun className="h-4 w-4" />{t('learn.rail.daily')}
            </Link>
          )}
        </>
      )}
    </aside>
  );
}

/** Phones and narrow screens: one slim line that stays at the top while the road map scrolls. */
export function RailStrip({ state }: { state: LearningState }) {
  const { t } = useT();
  const r = useRail(state);
  return (
    <div className="sticky top-14 z-20 -mx-4 mb-3 flex items-center justify-around gap-2 border-b border-border bg-background/90 px-4 py-1.5 text-sm font-extrabold backdrop-blur lg:top-0 xl:hidden" aria-label={t('learn.rail.label')}>
      <span className={`flex items-center gap-1 ${r.risk ? 'text-orange-600' : ''}`}><Flame className={`h-4 w-4 ${r.streak > 0 ? 'fill-orange-400 text-orange-500' : 'text-muted-foreground'}`} />{r.streak}</span>
      <span className="flex items-center gap-1"><Zap className="h-4 w-4 text-amber-500" />{r.todayXp}/{r.goal}</span>
      <Link to="/learn?tab=words" className="flex items-center gap-1"><Brain className="h-4 w-4 text-primary" />{r.due}</Link>
      {r.next && <span className="flex items-center gap-1 text-xs text-muted-foreground"><Gift className="h-3.5 w-3.5 text-orange-500" />{t('learn.week.day', { n: r.next })}</span>}
    </div>
  );
}

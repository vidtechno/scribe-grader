import { Link } from 'react-router-dom';
import { Brain, Check, Flame, Gift, Zap } from 'lucide-react';
import { useT } from '@/i18n';
import { useReviewQueue } from '../engine/api';
import { useStreakRewards, type LearningState } from '../api';
import { rewardKey } from './WeekCalendar';
import { weekDots } from './StreakCelebration';
import { DailyCard } from './DailyCard';

const LETTERS = { uz: ['Ya', 'Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh'], en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] };

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
  return { xp: state.profile?.xp ?? 0, streak, goal, todayXp, due, next, inTrial: rewards?.in_trial ?? state.access.reason === 'trial', done: info?.done_today ?? false, risk: !!info?.at_risk && !info?.done_today };
}

const card = 'rounded-2xl border border-border bg-card p-3 shadow-sm';

/** Wide screens: two small columns beside the road map (`side` picks which), sticky while it scrolls. */
export function SideRail({ state, side, wordCount }: { state: LearningState; side: 'left' | 'right'; wordCount: number }) {
  const { t, lang } = useT();
  const r = useRail(state);
  const pct = Math.min(100, Math.round((r.todayXp / r.goal) * 100));
  const dots = weekDots(state);
  const letters = LETTERS[lang === 'uz' ? 'uz' : 'en'];
  return (
    <aside className="sticky top-4 hidden space-y-3 self-start xl:block" aria-label={t('learn.rail.label')}>
      {side === 'left' ? (
        <>
          <div className={`relative overflow-hidden rounded-2xl p-3.5 text-white shadow-lg ${r.risk ? 'bg-gradient-to-br from-orange-500 to-red-600 shadow-orange-500/25' : 'bg-gradient-to-br from-[#ff4058] to-[#ad001f] shadow-primary/25'}`}>
            <span aria-hidden className="absolute -right-6 -top-8 h-24 w-24 rounded-full bg-white/15" />
            <p className="relative flex items-center gap-2 text-3xl font-black leading-none"><Flame className={`h-7 w-7 ${r.streak > 0 ? 'fill-yellow-300 text-yellow-200' : 'text-white/60'}`} />{r.streak}</p>
            <p className="relative mt-1.5 text-xs font-bold text-white/90">{r.risk ? t('learn.rail.risk') : t('learn.continue.streak')}</p>
          </div>
          <div className={card}>
            <p className="mb-2 text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground">{t('learn.week.title')}</p>
            <ol className="grid grid-cols-7 gap-1" aria-label={t('learn.week.days')}>
              {dots.map((d, i) => (
                <li key={i} className="flex flex-col items-center gap-1">
                  <span className={`text-[9px] font-bold ${d.today ? 'text-primary' : 'text-muted-foreground'}`}>{letters[d.dow]}</span>
                  <span className={`grid h-5 w-5 place-items-center rounded-full ${d.done ? 'bg-gradient-to-br from-orange-400 to-red-500 text-white' : d.today ? 'border-2 border-orange-400 bg-orange-500/10' : 'bg-secondary'}`}>
                    {d.done ? <Check className="h-3 w-3" strokeWidth={4} /> : d.today ? <Flame className="h-3 w-3 text-orange-500" /> : null}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className={card}>
            <p className="flex items-center justify-between text-sm font-extrabold"><span className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-amber-500" />{r.todayXp}/{r.goal}</span><span className="text-[11px] font-bold text-muted-foreground">XP</span></p>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary"><div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all" style={{ width: `${pct}%` }} /></div>
            <p className="mt-1.5 flex justify-between text-[11px] text-muted-foreground"><span>{t('learn.rail.goal')}</span><span className="font-bold text-foreground">{r.xp} XP</span></p>
          </div>
        </>
      ) : (
        <>
          <DailyCard state={state} wordCount={wordCount} compact />
          {r.next && (
            <div className={`${card} bg-gradient-to-br from-orange-500/10 to-card`}>
              <p className="flex items-center gap-2 text-sm font-extrabold"><Gift className="h-4 w-4 text-orange-500" />{t('learn.week.day', { n: r.next })}</p>
              <p className="mt-0.5 text-xs font-semibold">{t(rewardKey(r.next, r.inTrial))}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">{t('learn.week.next', { n: r.next - r.streak, day: r.next })}</p>
            </div>
          )}
          <Link to="/learn?tab=words" className={`${card} block transition-colors hover:border-primary`}>
            <p className="flex items-center gap-2 text-lg font-black"><Brain className="h-5 w-5 text-primary" />{r.due}</p>
            <p className="text-xs font-semibold text-muted-foreground">{t('learn.continue.dueSuffix')}</p>
          </Link>
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

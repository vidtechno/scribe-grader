import { Flame } from 'lucide-react';
import { useT } from '@/i18n';
import type { LearningState } from '../api';

/** A streak-first card with today's XP kept as a compact supporting goal. */
export function GoalStreak({ state }: { state: LearningState }) {
  const { t } = useT();
  const goal = Math.max(1, state.goal?.daily_goal_xp ?? 30);
  const today = state.goal?.today_xp ?? 0;
  const pct = Math.min(1, today / goal);
  const info = state.streak_info;
  const streak = info?.current ?? state.streak ?? 0;
  const done = today >= goal;
  const note = done ? t('learn.goal.done')
    : info?.at_risk ? t('learn.goal.atRisk', { n: streak })
      : today > 0 ? t('learn.goal.left', { n: goal - today }) : t('learn.goal.none');
  return (
    <section aria-label={t('learn.goal.label')} className="relative mb-4 min-h-[164px] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#ff4058] via-primary to-[#ad001f] p-5 text-white shadow-xl shadow-primary/20 sm:p-6">
      <span aria-hidden className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
      <span aria-hidden className="absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-orange-300/15 blur-2xl" />
      <div className="relative flex items-center gap-4 sm:gap-6">
        <div className="grid h-[92px] w-[92px] shrink-0 place-items-center rounded-3xl border border-white/20 bg-white/15 shadow-inner backdrop-blur-sm">
          <Flame className={`h-9 w-9 ${streak > 0 ? 'fill-orange-300 text-orange-200' : 'text-white/70'}`} />
          <span className="-mt-3 text-center"><b className="text-4xl font-black leading-none">{streak}</b><span className="ml-1 text-xs font-semibold text-white/80">{t('learn.continue.streak')}</span></span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-extrabold uppercase tracking-[.2em] text-white/75">{t('learn.goal.streakTitle')}</p>
          <p className="mt-1 text-lg font-extrabold leading-snug sm:text-xl">{note}</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/20">
              <div className="h-full rounded-full bg-white transition-all duration-700" style={{ width: `${Math.round(pct * 100)}%` }} />
            </div>
            <span className="shrink-0 text-xs font-bold text-white/85">{today}/{goal} XP</span>
          </div>
        </div>
      </div>
    </section>
  );
}

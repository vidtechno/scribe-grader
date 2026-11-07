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
  const R = 34, C = 2 * Math.PI * R;
  const note = done ? t('learn.goal.done')
    : info?.at_risk ? t('learn.goal.atRisk', { n: streak })
      : today > 0 ? t('learn.goal.left', { n: goal - today }) : t('learn.goal.none');
  return (
    <section aria-label={t('learn.goal.label')} className="relative overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/[0.10] via-card to-orange-400/[0.10] p-4 mb-4 flex items-center gap-4 shadow-sm">
      <span aria-hidden className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
      <div className="relative grid h-[74px] w-[74px] shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-red-700 text-white shadow-lg shadow-primary/20">
        <Flame className={`h-7 w-7 ${streak > 0 ? 'fill-orange-300 text-orange-200' : 'text-white/70'}`} />
        <span className="-mt-2 text-center"><b className="text-xl leading-none">{streak}</b><span className="ml-1 text-[10px] text-white/75">{t('learn.continue.streak')}</span></span>
      </div>
      <div className="relative min-w-0 flex-1">
        <p className="text-[11px] font-bold uppercase tracking-[.16em] text-primary">{t('learn.goal.streakTitle')}</p>
        <p className="mt-0.5 font-extrabold leading-snug">{note}</p>
        <p className="mt-1 text-xs text-muted-foreground">{t('learn.goal.today')} · {today}/{goal} XP</p>
      </div>
      <div className="relative hidden w-[62px] h-[62px] shrink-0 sm:block">
        <svg viewBox="0 0 88 88" className="w-full h-full -rotate-90" aria-hidden>
          <circle cx="44" cy="44" r={R} fill="none" stroke="hsl(var(--secondary))" strokeWidth="8" />
          <circle cx="44" cy="44" r={R} fill="none" stroke={done ? '#10b981' : 'hsl(var(--primary))'} strokeWidth="8" strokeLinecap="round"
            strokeDasharray={C} strokeDashoffset={C * (1 - pct)} className="transition-all duration-700" />
        </svg>
        <div className="absolute inset-0 grid place-items-center text-center leading-tight">
          <span><b className="text-sm">{Math.round(pct * 100)}%</b></span>
        </div>
      </div>
    </section>
  );
}

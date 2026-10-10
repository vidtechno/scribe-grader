import { Flame } from 'lucide-react';
import type { LearningState } from '../api';

/** The first thing on the Learn page: today's goal as a ring and the current streak as a big flame. */
export function GoalStreak({ state }: { state: LearningState }) {
  const goal = Math.max(1, state.goal?.daily_goal_xp ?? 30);
  const today = state.goal?.today_xp ?? 0;
  const pct = Math.min(1, today / goal);
  const info = state.streak_info;
  const streak = info?.current ?? state.streak ?? 0;
  const done = today >= goal;
  const R = 34, C = 2 * Math.PI * R;
  const note = done ? "Bugungi maqsad bajarildi. Barakalla!"
    : info?.at_risk ? `Streak ${streak} kun xavfda: bugun bitta dars qiling`
      : today > 0 ? `Maqsadga ${goal - today} XP qoldi` : "Bugun hali dars qilmadingiz";
  return (
    <section aria-label="Kunlik maqsad va streak" className="rounded-2xl border border-border bg-card p-4 mb-4 flex items-center gap-5">
      <div className="relative w-[88px] h-[88px] shrink-0">
        <svg viewBox="0 0 88 88" className="w-full h-full -rotate-90" aria-hidden>
          <circle cx="44" cy="44" r={R} fill="none" stroke="hsl(var(--secondary))" strokeWidth="9" />
          <circle cx="44" cy="44" r={R} fill="none" stroke={done ? '#10b981' : 'hsl(var(--primary))'} strokeWidth="9" strokeLinecap="round"
            strokeDasharray={C} strokeDashoffset={C * (1 - pct)} className="transition-all duration-700" />
        </svg>
        <div className="absolute inset-0 grid place-items-center text-center leading-tight">
          <span><b className="text-lg">{today}</b><span className="block text-[10px] text-muted-foreground">/ {goal} XP</span></span>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Bugungi maqsad</p>
        <p className="font-bold text-lg leading-snug">{note}</p>
      </div>
      <div className="text-center shrink-0" title="Ketma-ket o'qigan kunlar">
        <Flame className={`h-10 w-10 mx-auto ${streak > 0 ? 'text-orange-500 fill-orange-400' : 'text-muted-foreground'}`} />
        <p className="text-2xl font-extrabold leading-none mt-0.5">{streak}</p>
        <p className="text-[11px] text-muted-foreground">kun streak</p>
      </div>
    </section>
  );
}

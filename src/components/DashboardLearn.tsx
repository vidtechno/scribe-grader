import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Gift, Medal, Target, Trophy } from 'lucide-react';
import { useLearningState } from '@/features/learn/api';
import { achievementInfo } from '@/features/learn/achievements';
import { useReviewQueue } from '@/features/learn/engine/api';
import { useLeaderboard } from '@/features/social/api';

const card = 'group glass-card-hover p-4 flex flex-col gap-2';

/** The learning side of the dashboard: what to review, where you stand this week, latest achievements, referral. */
export function DashboardLearn() {
  const { data: state } = useLearningState();
  const { data: queue } = useReviewQueue(!!state?.profile);
  const { data: board } = useLeaderboard('global', 'week');
  if (!state?.profile) return null;

  const due = (queue?.stats.due ?? 0) + (queue?.stats.mistakes ?? 0);
  const goal = state.goal?.daily_goal_xp ?? state.profile.daily_goal_xp ?? 30;
  const today = state.goal?.today_xp ?? 0;
  const pct = Math.min(100, Math.round((today / goal) * 100));
  const recent = [...(state.achievements ?? [])].slice(-4).reverse();

  return (
    <section className="grid sm:grid-cols-2 gap-3 mb-6" aria-label="Learning">
      <Link to="/learn?tab=words" className={card}>
        <span className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"><Brain className="h-4 w-4 text-primary" />Takrorlash</span>
        <span className="text-2xl font-extrabold leading-none">{due}<span className="text-sm font-medium text-muted-foreground ml-1.5">{due === 1 ? 'ta kutmoqda' : 'ta kutmoqda'}</span></span>
        <span className="text-xs text-muted-foreground">
          {due > 0 ? "So'z va xatolar — 5 daqiqada takrorlab oling" : `Hozircha hammasi joyida · ${queue?.stats.mastered ?? 0} ta so'z mustahkam`}
        </span>
      </Link>

      <div className={card}>
        <span className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"><Target className="h-4 w-4 text-primary" />Bugungi maqsad</span>
        <span className="text-2xl font-extrabold leading-none">{today}<span className="text-sm font-medium text-muted-foreground"> / {goal} XP</span></span>
        <div className="h-2 rounded-full bg-secondary overflow-hidden"><div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pct}%` }} /></div>
      </div>

      <Link to="/leaderboard" className={card}>
        <span className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"><Trophy className="h-4 w-4 text-amber-500" />Haftalik reyting</span>
        {board?.me ? (
          <>
            <span className="text-2xl font-extrabold leading-none">#{board.me.rank}<span className="text-sm font-medium text-muted-foreground ml-1.5">{board.me.xp} XP</span></span>
            <span className="text-xs text-muted-foreground">{board.total} o'quvchi ichida · yuqoriga chiqing</span>
          </>
        ) : (
          <>
            <span className="text-lg font-bold leading-tight">Reytingga kiring</span>
            <span className="text-xs text-muted-foreground">Bu hafta bitta dars — va siz ro'yxatdasiz</span>
          </>
        )}
      </Link>

      <Link to="/profile#referral" className={card}>
        <span className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"><Gift className="h-4 w-4 text-emerald-600" />Referal</span>
        <span className="text-lg font-bold leading-tight">Do'st taklif qiling — 10 000 so'mdan</span>
        <span className="text-xs text-muted-foreground inline-flex items-center gap-1">Har bir tarif olgan do'st uchun <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" /></span>
      </Link>

      {recent.length > 0 && (
        <div className="sm:col-span-2 glass-card p-4">
          <p className="flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2.5"><Medal className="h-4 w-4 text-primary" />So'nggi yutuqlar</p>
          <div className="flex flex-wrap gap-2">
            {recent.map((a) => { const i = achievementInfo(a.key); return <span key={a.key} className="inline-flex items-center gap-1.5 rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium"><span>{i.icon}</span>{i.title}</span>; })}
          </div>
        </div>
      )}
    </section>
  );
}

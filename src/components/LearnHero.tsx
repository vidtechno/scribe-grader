import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Compass, Flame, GraduationCap, Lock, Play, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { courseMap, learningStats, placementPending, trialDaysLeft, useLearningState } from '@/features/learn/api';
import { levelOf } from '@/features/learn/course';

/** The dashboard's main card: where the learner is in the English course and the one button that continues it. */
export function LearnHero({ onUpgrade }: { onUpgrade: () => void }) {
  const { data: state, isLoading } = useLearningState();
  const shell = 'relative overflow-hidden rounded-3xl p-5 sm:p-7 text-white bg-gradient-to-br from-primary via-rose-500 to-orange-400 shadow-xl shadow-primary/20';
  const bubbles = (
    <>
      <span aria-hidden className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/10" />
      <span aria-hidden className="absolute right-20 -bottom-16 w-40 h-40 rounded-full bg-white/10" />
    </>
  );

  if (isLoading) return <div className="rounded-3xl h-[190px] bg-secondary/60 animate-pulse" aria-busy />;

  if (!state?.profile) {
    return (
      <div className={shell}>
        {bubbles}
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="w-14 h-14 rounded-2xl bg-white/20 grid place-items-center shrink-0"><GraduationCap className="h-7 w-7" /></span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest opacity-90">Learn English</p>
            <h2 className="text-xl sm:text-2xl font-extrabold leading-tight">Ingliz tilini noldan o'rganing</h2>
            <p className="text-sm opacity-90 mt-1">Darslar, talaffuz, mashqlar va testlar. Free tarifda 7 kun bepul, keyin Learn yoki IELTS.</p>
          </div>
          <Link to="/learn"><Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 gap-2 font-bold">Boshlash<ArrowRight className="h-4 w-4" /></Button></Link>
        </div>
      </div>
    );
  }

  if (placementPending(state)) {
    return (
      <div className={shell}>
        {bubbles}
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="w-14 h-14 rounded-2xl bg-white/20 grid place-items-center shrink-0"><Compass className="h-7 w-7" /></span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest opacity-90">{levelOf(state.profile.placement_target).title} · {levelOf(state.profile.placement_target).cefr}</p>
            <h2 className="text-xl sm:text-2xl font-extrabold leading-tight">Daraja testi sizni kutmoqda</h2>
            <p className="text-sm opacity-90 mt-1">Oldingi darajalardan 20 ta savol. 70% topsangiz, to'g'ridan-to'g'ri {levelOf(state.profile.placement_target).title}'dan boshlaysiz.</p>
          </div>
          <Link to="/learn/placement"><Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 gap-2 font-bold">Testni boshlash<ArrowRight className="h-4 w-4" /></Button></Link>
        </div>
      </div>
    );
  }

  const map = courseMap(state);
  const stats = learningStats(state);
  const daysLeft = trialDaysLeft(state.access);
  const locked = !state.access.allowed;
  const level = levelOf(state.profile.level);
  const goal = state.goal?.daily_goal_xp ?? state.profile.daily_goal_xp ?? 30;
  const todayXp = state.goal?.today_xp ?? 0;
  const info = state.streak_info;
  const goalText = todayXp >= goal
    ? `Bugungi maqsad bajarildi: ${todayXp}/${goal} XP. Barakalla!`
    : todayXp > 0
      ? `Bugungi maqsad: ${todayXp}/${goal} XP — oz qoldi`
      : info?.broken ? "Streak uzildi, lekin yangisini bugun boshlash mumkin"
      : info?.at_risk ? `Streak ${info.current} kun — ${info.days_left <= 1 ? 'bugun oxirgi kun, bir dars qiling' : 'bir dars qilsangiz, davom etadi'}`
      : `Bugungi maqsad: ${goal} XP (~${Math.max(5, Math.round(goal / 3))} daqiqa)`;
  const pct = map.total ? Math.round((map.doneCount / map.total) * 100) : 0;
  const continueTo = map.nextLesson ? `/learn/lesson/${map.nextLesson.id}` : map.pendingTest ? `/learn/test/${map.pendingTest.id}` : '/learn';
  const heading = locked ? "Bepul davr tugadi" : map.nextLesson ? map.nextLesson.titleUz : map.pendingTest ? 'Bosqich testi tayyor' : "Hozircha mavjud darslar tugadi";
  const kicker = locked ? 'Natijalaringiz saqlangan' : map.nextLesson ? (stats.todayDone ? 'Yana bitta dars?' : 'Keyingi dars') : 'Bosqich testi';

  return (
    <div className={shell}>
      {bubbles}
      <div className="relative">
        <div className="flex flex-wrap items-center gap-2 mb-3 text-xs font-semibold">
          <span className="rounded-full bg-white/20 px-2.5 py-1">{level.title} · {level.cefr === 'Noldan' ? '0' : level.cefr}</span>
          <span className="rounded-full bg-white/20 px-2.5 py-1 inline-flex items-center gap-1"><Flame className="h-3.5 w-3.5" />{info?.current ?? state.streak} kun</span>
          <span className="rounded-full bg-white/20 px-2.5 py-1 inline-flex items-center gap-1"><Zap className="h-3.5 w-3.5" />{state.profile.xp} XP</span>
          {daysLeft !== null && <span className="rounded-full bg-white/20 px-2.5 py-1 inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />Bepul: {daysLeft} kun</span>}
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest opacity-90">{kicker}</p>
            <h2 className="text-xl sm:text-2xl font-extrabold leading-tight mt-0.5">{heading}</h2>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-2.5 flex-1 rounded-full bg-white/25 overflow-hidden"><div className="h-full rounded-full bg-white transition-all" style={{ width: `${pct}%` }} /></div>
              <span className="text-xs font-semibold whitespace-nowrap">{map.doneCount}/{map.total} dars</span>
            </div>
            <p className="text-xs opacity-90 mt-2 flex items-center gap-1.5">
              <Target className="h-3.5 w-3.5" />{goalText}
            </p>
          </div>
          {locked ? (
            <Button size="lg" onClick={onUpgrade} className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 gap-2 font-bold"><Lock className="h-4 w-4" />Learn / IELTS</Button>
          ) : (
            <Link to={continueTo} className="sm:shrink-0">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 gap-2 font-bold"><Play className="h-4 w-4 fill-current" />{map.nextLesson ? 'Davom etish' : 'Ochish'}</Button>
            </Link>
          )}
        </div>
        <div className="mt-5 flex items-stretch gap-1.5 h-10" aria-label="Oxirgi 7 kun">
          {(() => {
            const maxXp = Math.max(20, ...stats.week.map((d) => d.xp));
            return stats.week.map((d) => (
              <div key={d.day} className="flex-1 flex items-end justify-center" title={`${d.label}: ${d.xp} XP`}>
                <div className={`w-3 sm:w-4 rounded-full ${d.xp ? 'bg-white' : 'bg-white/30'}`} style={{ height: d.xp ? `${Math.max(25, (d.xp / maxXp) * 100)}%` : '12%' }} />
              </div>
            ));
          })()}
        </div>
        <div className="flex justify-between text-[10px] opacity-80 mt-1">{stats.week.map((d) => <span key={d.day} className="flex-1 text-center">{d.label}</span>)}</div>
      </div>
    </div>
  );
}

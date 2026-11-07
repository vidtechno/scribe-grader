import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, BookOpen, CheckCircle2, Clock3, Compass, GraduationCap, Headphones,
  Flame, Layers3, Lock, Mic, PenTool, Play, Sparkles, Target, Zap,
} from 'lucide-react';
import { useT } from '@/i18n';
import { Button } from '@/components/ui/button';
import { courseMap, learningStats, placementPending, useLearningState } from '@/features/learn/api';
import { ALL_LESSONS, COURSE_UNITS, levelOf, unitNo } from '@/features/learn/course';

type LearnHeroProps = {
  hasIeltsActivity: boolean;
  onUpgrade: () => void;
  onWriting: () => void;
  onSpeaking: () => void;
};

const pathCard = 'group relative overflow-hidden rounded-3xl border bg-card p-5 sm:p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg focus-within:ring-2 focus-within:ring-primary/40';

/** New users choose a goal; returning users get one clear continuation action. */
export function LearnHero({ hasIeltsActivity, onUpgrade, onWriting, onSpeaking }: LearnHeroProps) {
  const { t, lang } = useT();
  const { data: state, isLoading } = useLearningState();

  if (isLoading) return <div className="h-[380px] rounded-3xl bg-secondary/60 animate-pulse" aria-busy />;

  const completedLessons = state?.progress?.filter((item) => item.completed_at).length ?? 0;
  const completedDrills = state?.drills?.filter((item) => item.completed_at).length ?? 0;
  const completedTests = state?.tests?.filter((item) => item.passed_at).length ?? 0;
  const hasCourseActivity = completedLessons + completedDrills + completedTests > 0 || (state?.profile?.xp ?? 0) > 0;

  if (!hasCourseActivity && !hasIeltsActivity) {
    return <FirstVisit onWriting={onWriting} onSpeaking={onSpeaking} />;
  }

  if (!state?.profile) return <ReturningGrid englishCard={<StartEnglishCard />} onWriting={onWriting} onSpeaking={onSpeaking} />;

  if (placementPending(state)) {
    const target = levelOf(state.profile.placement_target);
    return (
      <ReturningGrid
        englishCard={(
          <article className={`${pathCard} border-primary/30`}>
            <div className="flex h-full flex-col">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary"><Compass className="h-5 w-5" /></span>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-primary">{target.title}</p>
              <h2 className="mt-1 text-xl sm:text-2xl font-extrabold">{t('learnhero.placement.title')}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t('learnhero.placement.desc', { level: target.title })}</p>
              <Link to="/learn/placement" className="mt-auto pt-5"><Button size="lg" variant="glow" className="w-full gap-2">{t('learnhero.placement.start')}<ArrowRight className="h-4 w-4" /></Button></Link>
            </div>
          </article>
        )}
        onWriting={onWriting}
        onSpeaking={onSpeaking}
      />
    );
  }

  const map = courseMap(state);
  const stats = learningStats(state, lang);
  const level = levelOf(state.profile.level);
  const goal = state.goal?.daily_goal_xp ?? state.profile.daily_goal_xp ?? 30;
  const todayXp = state.goal?.today_xp ?? 0;
  const nextLesson = map.nextLesson;
  const drillTitle = map.nextDrill ? ALL_LESSONS.find((lesson) => lesson.id === map.nextDrill!.lessonId)?.titleUz : null;
  const heading = map.nextDrill ? t('learnhero.drill', { title: drillTitle ?? '' }) : nextLesson ? nextLesson.titleUz : map.pendingTest ? t('learnhero.testReady') : t('learnhero.allDone');
  const topic = COURSE_UNITS.find((unit) => unit.id === (map.nextDrill ? ALL_LESSONS.find((lesson) => lesson.id === map.nextDrill!.lessonId)?.unitId : nextLesson?.unitId ?? map.pendingTest?.id));
  const locked = !state.access.allowed;

  const englishCard = (
    <article className={`${pathCard} border-primary/25`}>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary"><GraduationCap className="h-4 w-4" />{t('dash.continueLearning')}</span>
          <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">{level.title}</span>
        </div>
        <h2 className="mt-3 text-xl sm:text-2xl font-extrabold leading-tight">{locked ? t('learnhero.locked') : heading}</h2>
        {topic ? <p className="mt-1 text-sm text-muted-foreground">{t('learnhero.topic', { n: unitNo(topic), title: topic.titleUz })}</p> : null}
        <div className="mt-4 grid grid-cols-[1.35fr_0.65fr] gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-orange-500/15 to-amber-400/5 p-4"><span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600"><Flame className="h-5 w-5 fill-orange-400" />{t('social.streak')}</span><p className="mt-1 text-3xl font-black">{state.streak} <span className="text-sm font-semibold text-muted-foreground">{t('dash.dayStreak')}</span></p><p className="mt-1 text-xs text-muted-foreground">{stats.todayDone ? t('learn.home.todayDone') : t('learn.home.todayNotDone')}</p></div>
          <div className="rounded-2xl bg-secondary/55 p-4 text-center"><Zap className="mx-auto h-5 w-5 text-amber-500" /><b className="mt-1 block text-xl">{todayXp}/{goal}</b><span className="text-[11px] text-muted-foreground">{t('dash.xpToday')}</span></div>
        </div>
        {locked ? (
          <Button size="lg" onClick={onUpgrade} className="mt-5 w-full gap-2"><Lock className="h-4 w-4" />{t('dash.unlockLearning')}</Button>
        ) : (
          <Link to="/learn" className="mt-auto pt-5"><Button size="lg" variant="glow" className="w-full gap-2 font-bold"><Play className="h-4 w-4 fill-current" />{t('dash.continueLesson')}</Button></Link>
        )}
      </div>
    </article>
  );

  return <ReturningGrid englishCard={englishCard} onWriting={onWriting} onSpeaking={onSpeaking} />;
}

function FirstVisit({ onWriting, onSpeaking }: { onWriting: () => void; onSpeaking: () => void }) {
  const { t } = useT();
  return (
    <section aria-labelledby="choose-path-title">
      <div className="mb-4 sm:mb-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{t('dash.startKicker')}</p>
        <h2 id="choose-path-title" className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight">{t('dash.chooseGoal')}</h2>
        <p className="mt-1 text-sm sm:text-base text-muted-foreground">{t('dash.chooseGoalText')}</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <article className={`${pathCard} border-primary/30 bg-gradient-to-br from-card via-card to-primary/[0.06]`}>
          <span aria-hidden className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/[0.06]" />
          <div className="relative flex h-full flex-col">
            <CardHeading icon={BookOpen} kicker={t('dash.generalEnglish')} title={t('dash.improveEnglish')} />
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{t('dash.improveEnglishText')}</p>
            <ul className="mt-4 grid grid-cols-1 min-[420px]:grid-cols-3 gap-2 text-xs font-semibold">
              <li className="flex items-center gap-1.5"><Clock3 className="h-4 w-4 text-primary" />{t('dash.tenMinutes')}</li>
              <li className="flex items-center gap-1.5"><Target className="h-4 w-4 text-primary" />{t('dash.dailyProgress')}</li>
              <li className="flex items-center gap-1.5"><Layers3 className="h-4 w-4 text-primary" />{t('dash.levelRange')}</li>
            </ul>
            <Link to="/learn" className="mt-5 block"><Button size="lg" variant="glow" className="w-full gap-2 font-bold">{t('dash.startQuickLesson')}<ArrowRight className="h-4 w-4" /></Button></Link>
            <Link to="/learn/start" className="mt-3 text-center text-xs font-medium text-muted-foreground hover:text-primary">{t('dash.unsureLevel')} <span className="font-semibold text-primary underline underline-offset-2">{t('dash.takeLevelCheck')}</span></Link>
          </div>
        </article>
        <article className={`${pathCard} border-orange-300/50 bg-gradient-to-br from-card via-card to-orange-500/[0.06]`}>
          <span aria-hidden className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-orange-400/[0.08]" />
          <div className="relative flex h-full flex-col">
            <CardHeading icon={Target} kicker={t('dash.ieltsPreparation')} title={t('dash.prepareIelts')} orange />
            <p className="mt-4 text-sm leading-6 text-muted-foreground">{t('dash.prepareIeltsText')}</p>
            <SkillGrid onWriting={onWriting} onSpeaking={onSpeaking} />
            <Link to="/practice" className="mt-5 block"><Button size="lg" className="w-full gap-2 font-bold">{t('dash.chooseIelts')}<ArrowRight className="h-4 w-4" /></Button></Link>
            <p className="mt-3 text-center text-xs text-muted-foreground">{t('dash.includesMocks')}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

function ReturningGrid({ englishCard, onWriting, onSpeaking }: { englishCard: ReactNode; onWriting: () => void; onSpeaking: () => void }) {
  const { t } = useT();
  return (
    <section aria-label={t('dash.todayFocus')}>
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{t('dash.todayFocus')}</p>
        <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight">{t('dash.pickOneAction')}</h2>
      </div>
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-4">
        {englishCard}
        <article className={`${pathCard} border-orange-300/40`}>
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600"><Target className="h-4 w-4" />IELTS</span>
              <Link to="/practice" className="text-xs font-semibold text-primary hover:underline">{t('dash.allPractice')}</Link>
            </div>
            <h2 className="mt-3 text-xl sm:text-2xl font-extrabold">{t('dash.ieltsToday')}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t('dash.ieltsTodayText')}</p>
            <SkillGrid onWriting={onWriting} onSpeaking={onSpeaking} />
            <Link to="/practice" className="mt-auto pt-4"><Button variant="glow" className="w-full gap-2 font-bold"><CheckCircle2 className="h-4 w-4" />{t('dash.allPractice')}</Button></Link>
          </div>
        </article>
      </div>
    </section>
  );
}

function StartEnglishCard() {
  const { t } = useT();
  return (
    <article className={`${pathCard} border-primary/25`}>
      <div className="flex h-full flex-col">
        <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary"><Sparkles className="h-5 w-5" /></span>
        <h2 className="mt-4 text-xl sm:text-2xl font-extrabold">{t('dash.startEnglish')}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t('dash.startEnglishText')}</p>
        <Link to="/learn" className="mt-auto pt-5"><Button size="lg" variant="glow" className="w-full gap-2">{t('dash.chooseLevel')}<ArrowRight className="h-4 w-4" /></Button></Link>
      </div>
    </article>
  );
}

function CardHeading({ icon: Icon, kicker, title, orange = false }: { icon: typeof PenTool; kicker: string; title: string; orange?: boolean }) {
  return (
    <div className="flex items-start gap-3">
      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${orange ? 'bg-orange-500/10 text-orange-600' : 'bg-primary/10 text-primary'}`}><Icon className="h-6 w-6" /></span>
      <div><p className={`text-[11px] font-bold uppercase tracking-wider ${orange ? 'text-orange-600' : 'text-primary'}`}>{kicker}</p><h3 className="text-xl sm:text-2xl font-extrabold">{title}</h3></div>
    </div>
  );
}

function SkillGrid({ onWriting, onSpeaking }: { onWriting: () => void; onSpeaking: () => void }) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2">
      <SkillButton icon={PenTool} label="Writing" onClick={onWriting} />
      <SkillButton icon={Mic} label="Speaking" onClick={onSpeaking} />
      <SkillLink icon={BookOpen} label="Reading" to="/reading" />
      <SkillLink icon={Headphones} label="Listening" to="/listening" />
    </div>
  );
}

function SkillButton({ icon: Icon, label, onClick }: { icon: typeof PenTool; label: string; onClick: () => void }) {
  return <button type="button" onClick={onClick} className="flex min-h-11 items-center gap-2 rounded-xl bg-secondary/55 px-3 py-2.5 text-left text-sm font-semibold hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><Icon className="h-4 w-4 shrink-0 text-primary" />{label}</button>;
}

function SkillLink({ icon: Icon, label, to }: { icon: typeof PenTool; label: string; to: string }) {
  return <Link to={to} className="flex min-h-11 items-center gap-2 rounded-xl bg-secondary/55 px-3 py-2.5 text-sm font-semibold hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><Icon className="h-4 w-4 shrink-0 text-primary" />{label}</Link>;
}

import { useT } from '@/i18n';
import { TelegramConnectModal } from '@/components/TelegramConnectCard';
import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookA, Clock, Compass, Flame, GraduationCap, Loader2, Play, Search, Sparkles, Target, Trophy, Zap,
} from 'lucide-react';
import { toast } from 'sonner';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ALL_LESSONS, COURSE_UNITS, LEVELS, PLACEMENT, TRIAL_DAYS, levelOf, loadUnit } from '@/features/learn/course';
import {
  callLearning, courseMap, learningErrorMessage, learningStats, placementPending, trialDaysLeft, useLearningState, useRefreshLearning,
  type LearningState,
} from '@/features/learn/api';
import type { Exercise, LevelId, Word } from '@/features/learn/types';
import { Roadmap } from '@/features/learn/components/Roadmap';
import { SpeedRound } from '@/features/learn/components/SpeedRound';
import { SkipIntroBanner } from '@/features/learn/components/SkipIntroBanner';
import { ContinueCard } from '@/features/learn/components/ContinueCard';
import { GoalStreak } from '@/features/learn/components/GoalStreak';
import { DailyCard } from '@/features/learn/components/DailyCard';
import { LearnPaywall } from '@/features/learn/components/LearnPaywall';
import { SpeakButton } from '@/features/learn/components/SpeakButton';
import { loadSession, useReviewQueue } from '@/features/learn/engine/api';
import { WordDrill, type DrillItem } from '@/features/learn/components/WordDrill';
import { shuffle } from '@/features/learn/check';

const LEVEL_ORDER: LevelId[] = ['beginner', 'a1', 'a2', 'b1', 'b2', 'c1', 'ielts'];

export default function Learn() {
  const { data: state, isLoading, error } = useLearningState();
  const { t } = useT();

  return (
    <div className="min-h-screen bg-background pb-28 md:pb-12">
      <SEOHead title={t('learn.home.seoTitle')} description={t('learn.home.seoDesc')} path="/learn" noindex />
      <Navbar />
      <TelegramConnectModal />
      <main className="pt-24 px-4 sm:px-6 max-w-5xl mx-auto">
        {isLoading ? <div className="grid place-items-center py-24"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
          : error ? <p className="text-center py-24 text-muted-foreground">{t('learn.home.loadError')}</p>
            : !state?.profile ? <LevelPicker access={state?.access} />
              : <CourseHome state={state} />}
      </main>
    </div>
  );
}

/** Who each level is for, in a sentence the learner can compare with their own English. */
const LEVEL_FOR: Partial<Record<LevelId, string>> = {
  beginner: 'learn.levelFor.beginner',
  a1: 'learn.levelFor.a1',
  a2: 'learn.levelFor.a2',
  b1: 'learn.levelFor.b1',
};
const levelSize = (level: LevelId) => {
  const units = COURSE_UNITS.filter((u) => u.level === level);
  return { units: units.length, lessons: units.reduce((n, u) => n + u.lessons.length, 0) };
};

function LevelPicker({ access }: { access?: LearningState['access'] }) {
  const { t, lang } = useT();
  const refresh = useRefreshLearning();
  const navigate = useNavigate();
  const [busy, setBusy] = useState<LevelId | null>(null);
  const start = async (level: LevelId) => {
    setBusy(level);
    try {
      // The learner starts at the level they picked; no test is required (the level check below is optional).
      await callLearning('learning_start_chosen', { _level: level });
      await refresh();
      toast.success(t('learn.home.levelStarted', { level: levelOf(level).title }));
    } catch (e) {
      toast.error(learningErrorMessage(e, lang));
    } finally { setBusy(null); }
  };
  const paid = access?.reason === 'paid';
  return (
    <div className="max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1 mb-4"><GraduationCap className="h-4 w-4" />{t('learn.home.badge')}</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">{t('learn.home.heroA')} <span className="gradient-text">{t('learn.home.heroB')}</span> {t('learn.home.heroC')}</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {t('learn.home.heroText')}
        </p>
        <p className="text-sm mt-3 font-medium">{paid ? t('learn.home.included') : t('learn.home.freeTrial', { days: TRIAL_DAYS })}</p>
      </motion.div>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">{t('learn.home.pickLevel')}</h2>
      <p className="text-sm text-muted-foreground mb-3">{t('learn.home.pickLevelHint')}</p>
      <div className="grid sm:grid-cols-2 gap-3">
        {LEVELS.map((l, i) => (
          <motion.button key={l.id} type="button" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
            disabled={!l.available || !!busy} onClick={() => start(l.id)}
            className={`text-left rounded-2xl border-2 p-4 flex gap-4 items-start transition-all ${l.available
              ? 'border-primary bg-primary/5 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5' : 'border-border bg-card opacity-60 cursor-not-allowed'}`}>
            <span className={`w-14 h-14 shrink-0 rounded-2xl grid place-items-center font-extrabold ${l.available ? 'bg-gradient-to-br from-primary to-brand-red-soft text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>
              {l.cefr === 'Noldan' ? '0' : l.cefr === 'IELTS' ? 'IE' : l.cefr}
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2 font-bold text-lg">{l.title}
                {!l.available && <span className="text-[10px] uppercase tracking-wide rounded-full bg-secondary px-2 py-0.5 text-muted-foreground font-semibold">{t('learn.home.soon')}</span>}
              </span>
              <span className="block text-sm text-muted-foreground mt-0.5">{LEVEL_FOR[l.id] ? t(LEVEL_FOR[l.id]!) : l.text}</span>
              {l.available && levelSize(l.id).lessons > 0 && <span className="block text-xs text-muted-foreground/80 mt-1">{t('learn.home.levelSize', { units: levelSize(l.id).units, lessons: levelSize(l.id).lessons })}</span>}
              {l.available && <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">{busy === l.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}{t('learn.home.startHere')}</span>}
            </span>
          </motion.button>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-5 text-center">
        <p className="font-semibold mb-1">{t('learn.home.unsure')}</p>
        <p className="text-sm text-muted-foreground mb-3">{t('learn.home.unsureHint')}</p>
        <Button variant="outline" className="gap-2" onClick={() => navigate('/learn/start')}><Compass className="h-4 w-4" />{t('learn.home.takeTest')}</Button>
      </div>
    </div>
  );
}

function CourseHome({ state }: { state: LearningState }) {
  const { t, lang } = useT();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const tab: 'map' | 'words' = params.get('tab') === 'words' ? 'words' : 'map';
  const setTab = (next: 'map' | 'words') => setParams(next === 'words' ? { tab: 'words' } : {}, { replace: true });
  const [levelTab, setLevelTab] = useState<LevelId | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const map = useMemo(() => courseMap(state), [state]);
  const stats = useMemo(() => learningStats(state, lang), [state, lang]);
  const daysLeft = trialDaysLeft(state.access);
  const locked = !state.access.allowed;
  const maxXp = Math.max(20, ...stats.week.map((d) => d.xp));
  const level = levelTab ?? (map.activeLevel as LevelId);
  const startLevel = state.profile?.level ?? 'beginner';
  const shownLevels = LEVELS.filter((l) => l.available && LEVEL_ORDER.indexOf(l.id) >= LEVEL_ORDER.indexOf(startLevel as LevelId) || l.id === level);
  if (placementPending(state)) return <PlacementGate target={(state.profile?.placement_target ?? 'a1') as LevelId} attemptsLeft={Math.max(0, PLACEMENT.attempts - (state.profile?.placement_attempts ?? 0))} />;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3 mb-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{levelOf(startLevel).cefr === 'Noldan' ? t('learn.home.startedScratch', { level: levelOf(startLevel).title }) : t('learn.home.startedAt', { level: levelOf(startLevel).title, cefr: levelOf(startLevel).cefr })}</p>
          <h1 className="text-2xl sm:text-3xl font-extrabold">{t('learn.home.courseTitle')}</h1>
        </div>
        <Link to="/dashboard" className="inline-flex items-center gap-1.5 rounded-full border border-border text-sm font-medium px-3.5 py-2 hover:border-primary hover:text-primary transition-colors sm:order-last">{t('learn.home.dashboard')}</Link>
        <Link to="/leaderboard" className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-400 text-sm font-semibold px-3.5 py-2 hover:bg-amber-500/20 transition-colors sm:order-last">
          <Trophy className="h-4 w-4" />{t('learn.home.leaderboard')}
        </Link>
      </div>

      {daysLeft !== null && (
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-2 mb-3 text-sm flex items-center gap-2">
          <Clock className="h-5 w-5 text-amber-600 shrink-0" />
          <span className="flex-1">{t('learn.home.trialA')} <b>{t('learn.home.trialDays', { days: daysLeft })}</b> {t('learn.home.trialB')}</span>
        </div>
      )}
      {(locked || showPaywall) && <div className="mb-6"><LearnPaywall access={state.access} compact /></div>}
      {!locked && <ContinueCard state={state} />}
      {!locked && <GoalStreak state={state} />}
      {!locked && <DailyCard state={state} wordCount={map.wordCount} />}
      <SkipIntroBanner state={state} />

      {/* Stats */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-4" aria-label={t('learn.home.stats')}>
        <StatCard icon={Flame} tone="text-orange-500" label="Streak" value={t('learn.home.streakDays', { n: state.streak })} hint={stats.todayDone ? t('learn.home.todayDone') : t('learn.home.todayNotDone')} />
        <StatCard icon={Zap} tone="text-amber-500" label="Jami XP" value={String(state.profile?.xp ?? 0)} hint={t('learn.home.activeDays', { n: stats.activeDays })} />
        <StatCard icon={Trophy} tone="text-primary" label={t('learn.home.lessons')} value={`${map.doneCount} / ${map.total}`} hint={t('learn.home.unitTests', { done: map.unitsPassed, total: map.unitsTotal })} />
        <StatCard icon={BookA} tone="text-emerald-500" label={t('learn.home.words')} value={String(map.wordCount)} hint={stats.accuracy !== null ? t('learn.home.accuracy', { pct: stats.accuracy, min: stats.minutes }) : t('learn.home.startFirst')} />
      </section>

      <div className="flex gap-2 mb-4 p-1 rounded-xl bg-secondary/60 w-fit">
        {([['map', t('learn.home.tabTopics')], ['words', t('learn.home.tabWords')]] as const).map(([id, label]) => (
          <button key={id} type="button" onClick={() => setTab(id)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${tab === id ? 'bg-card shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>{label}</button>
        ))}
      </div>

      {tab === 'map' ? (
        <>
          {shownLevels.length > 1 && (
            <div className="flex gap-2 mb-6 overflow-x-auto" role="tablist" aria-label={t('learn.home.level')}>
              {shownLevels.map((l) => (
                <button key={l.id} type="button" role="tab" aria-selected={level === l.id} onClick={() => setLevelTab(l.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border whitespace-nowrap transition-colors ${level === l.id ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:text-foreground'}`}>
                  {l.title} <span className="opacity-70 text-xs">{l.cefr === 'Noldan' ? '0' : l.cefr}</span>
                </button>
              ))}
            </div>
          )}
          <Roadmap state={state} level={level} onLocked={() => (locked ? setShowPaywall(true) : toast(t('learn.home.locked')))} />
          <section className="glass-card p-4 mt-6" aria-label={t('learn.home.weekly')}>
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold flex items-center gap-2"><Target className="h-4 w-4 text-primary" />{t('learn.home.thisWeek')}</p>
          <p className="text-xs text-muted-foreground">{t('learn.home.weekHint')}</p>
        </div>
        <div className="flex items-end gap-2 h-24">
          {stats.week.map((d) => (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-1.5">
              <div className="w-full flex-1 flex items-end">
                <div className={`w-full rounded-md ${d.xp ? 'bg-gradient-to-t from-primary to-brand-red-soft' : 'bg-secondary'}`} style={{ height: `${d.xp ? Math.max(12, (d.xp / maxXp) * 100) : 8}%` }} title={`${d.xp} XP`} />
              </div>
              <span className={`text-[11px] ${d.day === state.today ? 'font-bold text-primary' : 'text-muted-foreground'}`}>{d.label}</span>
            </div>
          ))}
        </div>
      </section>
        </>
      ) : (
        <WordBook state={state} locked={locked} />
      )}
    </div>
  );
}

/** Shown while a placement test is waiting: take it, or start from Beginner. */
function PlacementGate({ target, attemptsLeft }: { target: LevelId; attemptsLeft: number }) {
  const { t, lang } = useT();
  const lv = levelOf(target);
  const navigate = useNavigate();
  const refresh = useRefreshLearning();
  const [busy, setBusy] = useState(false);
  const skip = async () => {
    setBusy(true);
    try {
      await callLearning('learning_skip_placement');
      await refresh();
      toast.success(t('learn.home.beginnerStarted'));
    } catch (e) {
      toast.error(learningErrorMessage(e, lang));
    } finally { setBusy(false); }
  };
  return (
    <div className="max-w-xl mx-auto text-center py-6">
      <span className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-brand-red-soft grid place-items-center"><Compass className="h-8 w-8 text-primary-foreground" /></span>
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">{lv.title} · {lv.cefr}</p>
      <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">{t('learn.home.placementTitle')}</h1>
      <p className="text-muted-foreground mb-5">
        {t('learn.home.placementText', { questions: PLACEMENT.questions, pct: PLACEMENT.passPercent, level: lv.title, left: attemptsLeft })}
      </p>
      <Button size="lg" variant="glow" className="w-full gap-2" onClick={() => navigate('/learn/placement')}><Play className="h-4 w-4 fill-current" />{t('learn.home.startTest')}</Button>
      <Button variant="ghost" className="w-full mt-2" disabled={busy} onClick={() => void skip()}>{t('learn.home.skipTest')}</Button>
    </div>
  );
}

function StatCard({ icon: Icon, tone, label, value, hint }: { icon: typeof Flame; tone: string; label: string; value: string; hint: string }) {
  return (
    <div className="glass-card px-3.5 py-2.5">
      <div className="flex items-center gap-2 text-xs text-muted-foreground"><Icon className={`h-4 w-4 ${tone}`} />{label}</div>
      <p className="text-xl font-extrabold">{value}</p>
      <p className="text-[11px] text-muted-foreground mt-0.5 truncate">{hint}</p>
    </div>
  );
}

function WordBook({ state, locked }: { state: LearningState; locked: boolean }) {
  const { t, lang } = useT();
  const refresh = useRefreshLearning();
  const [groups, setGroups] = useState<{ lessonId: string; title: string; words: Word[] }[] | null>(null);
  const [query, setQuery] = useState('');
  const [drill, setDrill] = useState<DrillItem[] | null>(null);
  const [preparing, setPreparing] = useState(false);
  const [speed, setSpeed] = useState(false);
  const { data: queue } = useReviewQueue();
  const done = useMemo(() => new Set(state.progress.filter((p) => p.completed_at).map((p) => p.lesson_id)), [state.progress]);

  useEffect(() => {
    const units = [...new Set(ALL_LESSONS.filter((l) => done.has(l.id)).map((l) => l.unitId))];
    Promise.all(units.map(loadUnit)).then((all) => {
      setGroups(all.flat().filter((l) => done.has(l.id)).map((l) => ({ lessonId: l.id, title: l.titleUz, words: l.words })));
    }).catch(() => setGroups([]));
  }, [done]);

  if (!groups) return <div className="grid place-items-center py-16"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  const all = groups.flatMap((g) => g.words);
  if (!all.length) return <p className="text-center text-muted-foreground py-16">{t('learn.home.noWords')}</p>;

  const q = query.trim().toLowerCase();
  const filtered = groups.map((g) => ({ ...g, words: g.words.filter((w) => !q || w.en.toLowerCase().includes(q) || w.uz.toLowerCase().includes(q)) })).filter((g) => g.words.length);

  // Smart review: what the engine says is due (words, mistakes, grammar). With nothing due, a free practice round.
  const startDrill = async () => {
    setPreparing(true);
    try {
      const pool = all.map((w) => ({ en: w.en, uz: w.uz }));
      const due = queue && (queue.words.length || queue.mistakes.length || queue.grammar.length)
        ? await loadSession(queue, { max: 10, extraPool: pool, allowSpeak: true, lang }) : [];
      if (due.length) { setDrill(due.map((item) => ({ ex: item.ex, item }))); return; }
      const picked = shuffle(all).slice(0, 10);
      setDrill(picked.map((w, i) => {
        const others = shuffle(all.filter((x) => x.en !== w.en)).slice(0, 3);
        if (i % 3 === 0) return { ex: { k: 'translate', uz: w.uz, a: [w.en], why: `**${w.en}** — ${w.uz}` } as Exercise };
        const opts = shuffle([w.en, ...others.map((o) => o.en)]);
        return { ex: i % 3 === 1 ? { k: 'listen', say: w.en, opts, a: opts.indexOf(w.en) } as Exercise
          : { k: 'choice', q: t('learn.home.howToSay', { word: w.uz }), opts, a: opts.indexOf(w.en) } as Exercise };
      }));
    } finally { setPreparing(false); }
  };
  const stats = queue?.stats;
  const dueCount = (stats?.due ?? 0) + (stats?.mistakes ?? 0);

  return (
    <div>
      <div className="flex flex-wrap gap-3 items-center mb-5">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t('learn.home.search')} className="pl-9" />
        </div>
        <Button variant="glow" className="gap-2" disabled={locked || preparing || all.length < 4} onClick={() => void startDrill()}>
          {preparing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
          {dueCount > 0 ? t('learn.home.reviewN', { n: Math.min(dueCount, 10) }) : t('learn.home.reviewWords')}
        </Button>
        <Button variant="outline" className="gap-2" disabled={locked || all.length < 8} onClick={() => setSpeed(true)}>
          <Zap className="h-4 w-4 text-amber-500" />{t('learn.home.speedRound')}
        </Button>
      </div>
      {stats && (
        <div className="grid grid-cols-3 gap-2 mb-4 text-center">
          <div className="glass-card py-2.5"><p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{stats.mastered}</p><p className="text-[11px] text-muted-foreground">{t('learn.home.mastered')}</p></div>
          <div className="glass-card py-2.5"><p className="text-lg font-bold text-primary">{stats.learning + stats.new}</p><p className="text-[11px] text-muted-foreground">{t('learn.home.learning')}</p></div>
          <div className="glass-card py-2.5"><p className="text-lg font-bold">{dueCount}</p><p className="text-[11px] text-muted-foreground">{t('learn.home.due')}</p></div>
        </div>
      )}
      <p className="text-sm text-muted-foreground mb-4">{t('learn.home.wordsHint', { n: all.length })}</p>
      <div className="space-y-5">
        {filtered.map((g) => (
          <div key={g.lessonId}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{g.title}</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {g.words.map((w) => (
                <div key={w.en} className="glass-card px-3 py-2.5 flex items-center gap-3">
                  <SpeakButton text={w.en} />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold">{w.en} {w.ipa && <span className="font-mono text-xs text-muted-foreground font-normal">/{w.ipa}/</span>}</p>
                    <p className="text-sm text-muted-foreground truncate">{w.uz}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {speed && <SpeedRound words={all} onClose={() => setSpeed(false)} onFinished={() => void refresh()} />}
      {drill && <WordDrill items={drill} onClose={() => setDrill(null)} onFinished={refresh} />}
    </div>
  );
}


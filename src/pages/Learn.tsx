import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookA, Check, CheckCircle2, Clock, Compass, Flame, GraduationCap, Loader2, Play, Search, Sparkles, Target, Trophy, X, Zap,
} from 'lucide-react';
import { toast } from 'sonner';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ALL_LESSONS, LEVELS, PLACEMENT, TRIAL_DAYS, levelOf, loadUnit } from '@/features/learn/course';
import {
  callLearning, courseMap, learningErrorMessage, learningStats, placementPending, trialDaysLeft, useLearningState, useRefreshLearning,
  type LearningState,
} from '@/features/learn/api';
import type { Exercise, LevelId, Word } from '@/features/learn/types';
import { Roadmap } from '@/features/learn/components/Roadmap';
import { LearnPaywall } from '@/features/learn/components/LearnPaywall';
import { SpeakButton } from '@/features/learn/components/SpeakButton';
import { ExerciseView } from '@/features/learn/components/ExerciseView';
import { shuffle } from '@/features/learn/check';
import { exerciseAudioTexts } from '@/features/learn/audio-plan';
import { useLessonAudio } from '@/features/learn/useLessonAudio';

const LEVEL_ORDER: LevelId[] = ['beginner', 'a1', 'a2', 'b1', 'b2', 'c1', 'ielts'];

export default function Learn() {
  const { data: state, isLoading, error } = useLearningState();

  return (
    <div className="min-h-screen bg-background pb-28 md:pb-12">
      <SEOHead title="Ingliz tilini o'rganish" description="Ingliz tilini noldan o'rganing: darslar, mashqlar, testlar va talaffuz." path="/learn" noindex />
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 max-w-5xl mx-auto">
        {isLoading ? <div className="grid place-items-center py-24"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
          : error ? <p className="text-center py-24 text-muted-foreground">O'rganish bo'limini yuklab bo'lmadi. Sahifani yangilang.</p>
            : !state?.profile ? <LevelPicker access={state?.access} />
              : <CourseHome state={state} />}
      </main>
    </div>
  );
}

function LevelPicker({ access }: { access?: LearningState['access'] }) {
  const refresh = useRefreshLearning();
  const navigate = useNavigate();
  const [busy, setBusy] = useState<LevelId | null>(null);
  const start = async (level: LevelId) => {
    setBusy(level);
    try {
      await callLearning('learning_start', { _level: level });
      await refresh();
      if (level === 'beginner') toast.success("Kurs boshlandi! Birinchi dars sizni kutmoqda.");
      else navigate('/learn/placement'); // Elementary starts with a placement test
    } catch (e) {
      toast.error(learningErrorMessage(e));
    } finally { setBusy(null); }
  };
  const paid = access?.reason === 'paid';
  return (
    <div className="max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1 mb-4"><GraduationCap className="h-4 w-4" />Yangi: ingliz tili kursi</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Ingliz tilini <span className="gradient-text">noldan</span> o'rganing</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Har bir dars: mavzuni sodda tushuntirish, talaffuz, 10 ta yangi so'z, mashqlar va test. Har bosqich oxirida imtihon —
          bilmasdan oldinga o'tib ketmaysiz.
        </p>
        <p className="text-sm mt-3 font-medium">{paid ? 'Kurs tarifingizga kiritilgan.' : `Free tarifda ${TRIAL_DAYS} kun bepul, keyin Scorify Go yoki Plus.`}</p>
      </motion.div>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Darajangizni tanlang</h2>
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
                {!l.available && <span className="text-[10px] uppercase tracking-wide rounded-full bg-secondary px-2 py-0.5 text-muted-foreground font-semibold">Tez orada</span>}
              </span>
              <span className="block text-sm text-muted-foreground mt-0.5">{l.text}</span>
              {l.available && <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">{busy === l.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}Shu darajadan boshlash</span>}
            </span>
          </motion.button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground text-center mt-6">Aniq bilmasangiz — Beginner'dan boshlang: dastlabki darslar tez o'tadi, lekin talaffuz va asosiy grammatikadagi bo'shliqlarni yopadi. Elementary'ni tanlasangiz, avval Beginner bo'yicha 20 ta savoldan iborat daraja testidan o'tasiz (70% kerak, 2 ta urinish). O'tmasangiz, Beginner'dan boshlaysiz.</p>
    </div>
  );
}

function CourseHome({ state }: { state: LearningState }) {
  const navigate = useNavigate();
  const [tab, setTab] = useState<'map' | 'words'>('map');
  const [levelTab, setLevelTab] = useState<LevelId | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);
  const map = useMemo(() => courseMap(state), [state]);
  const stats = useMemo(() => learningStats(state), [state]);
  const daysLeft = trialDaysLeft(state.access);
  const locked = !state.access.allowed;
  const maxXp = Math.max(20, ...stats.week.map((d) => d.xp));
  const level = levelTab ?? (map.activeLevel as LevelId);
  const startLevel = state.profile?.level ?? 'beginner';
  const shownLevels = LEVELS.filter((l) => l.available && LEVEL_ORDER.indexOf(l.id) >= LEVEL_ORDER.indexOf(startLevel as LevelId) || l.id === level);
  const continueTo = map.nextLesson ? `/learn/lesson/${map.nextLesson.id}` : map.pendingTest ? `/learn/test/${map.pendingTest.id}` : null;
  if (placementPending(state)) return <PlacementGate attemptsLeft={Math.max(0, PLACEMENT.attempts - (state.profile?.placement_attempts ?? 0))} />;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{levelOf(startLevel).title} · {levelOf(startLevel).cefr}dan boshlagan</p>
          <h1 className="text-2xl sm:text-3xl font-extrabold">Ingliz tili kursi</h1>
        </div>
        {continueTo && !locked && (
          <Button variant="glow" size="lg" className="gap-3 w-full sm:w-auto sm:max-w-md min-w-0 h-auto py-2.5 px-4 justify-start" onClick={() => navigate(continueTo)}>
            <Play className="h-5 w-5 fill-current shrink-0" />
            <span className="flex flex-col items-start text-left leading-tight min-w-0 whitespace-normal">
              <span className="text-[11px] font-medium opacity-90">{map.nextLesson ? 'Davom etish' : 'Bosqich testi'}</span>
              <span className="font-semibold">{map.nextLesson ? map.nextLesson.titleUz : 'Topshirishga tayyor'}</span>
            </span>
          </Button>
        )}
      </div>

      {daysLeft !== null && (
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3.5 mb-5 text-sm flex items-center gap-3">
          <Clock className="h-5 w-5 text-amber-600 shrink-0" />
          <span className="flex-1">Bepul davr: <b>{daysLeft} kun</b> qoldi. Undan keyin kurs Scorify Go va Plus tariflarida davom etadi.</span>
        </div>
      )}
      {(locked || showPaywall) && <div className="mb-6"><LearnPaywall access={state.access} compact /></div>}

      {/* Stats */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4" aria-label="Statistika">
        <StatCard icon={Flame} tone="text-orange-500" label="Streak" value={`${state.streak} kun`} hint={stats.todayDone ? 'Bugungi reja bajarildi ✓' : 'Bugun hali dars qilinmadi'} />
        <StatCard icon={Zap} tone="text-amber-500" label="Jami XP" value={String(state.profile?.xp ?? 0)} hint={`${stats.activeDays} faol kun`} />
        <StatCard icon={Trophy} tone="text-primary" label="Darslar" value={`${map.doneCount} / ${map.total}`} hint={`${map.unitsPassed} / ${map.unitsTotal} bosqich testi`} />
        <StatCard icon={BookA} tone="text-emerald-500" label="So'zlar" value={String(map.doneCount * 10)} hint={stats.accuracy !== null ? `Aniqlik ${stats.accuracy}% · ${stats.minutes} daq` : 'Birinchi darsdan boshlang'} />
      </section>
      <section className="glass-card p-4 mb-6" aria-label="Haftalik faollik">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold flex items-center gap-2"><Target className="h-4 w-4 text-primary" />Shu hafta</p>
          <p className="text-xs text-muted-foreground">Kuniga kamida 1 dars — eng yaxshi natija beradigan odat</p>
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

      <div className="flex gap-2 mb-6 p-1 rounded-xl bg-secondary/60 w-fit">
        {([['map', "Yo'l xaritasi"], ['words', "Lug'atim"]] as const).map(([id, label]) => (
          <button key={id} type="button" onClick={() => setTab(id)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${tab === id ? 'bg-card shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>{label}</button>
        ))}
      </div>

      {tab === 'map' ? (
        <>
          {shownLevels.length > 1 && (
            <div className="flex gap-2 mb-6 overflow-x-auto" role="tablist" aria-label="Daraja">
              {shownLevels.map((l) => (
                <button key={l.id} type="button" role="tab" aria-selected={level === l.id} onClick={() => setLevelTab(l.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border whitespace-nowrap transition-colors ${level === l.id ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:text-foreground'}`}>
                  {l.title} <span className="opacity-70 text-xs">{l.cefr === 'Noldan' ? '0' : l.cefr}</span>
                </button>
              ))}
            </div>
          )}
          <Roadmap state={state} level={level} onLocked={() => (locked ? setShowPaywall(true) : toast("Bu qism hali yopiq — avvalgi darslar va bosqich testini tugating."))} />
        </>
      ) : (
        <WordBook state={state} locked={locked} />
      )}
    </div>
  );
}

/** Shown while the Elementary placement test is waiting: take it, or start from Beginner. */
function PlacementGate({ attemptsLeft }: { attemptsLeft: number }) {
  const navigate = useNavigate();
  const refresh = useRefreshLearning();
  const [busy, setBusy] = useState(false);
  const skip = async () => {
    setBusy(true);
    try {
      await callLearning('learning_skip_placement');
      await refresh();
      toast.success("Beginner kursi boshlandi. Birinchi dars sizni kutmoqda.");
    } catch (e) {
      toast.error(learningErrorMessage(e));
    } finally { setBusy(false); }
  };
  return (
    <div className="max-w-xl mx-auto text-center py-6">
      <span className="mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-brand-red-soft grid place-items-center"><Compass className="h-8 w-8 text-primary-foreground" /></span>
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Elementary · A1</p>
      <h1 className="text-2xl sm:text-3xl font-extrabold mb-3">Avval daraja testi</h1>
      <p className="text-muted-foreground mb-5">
        Beginner kursidan {PLACEMENT.questions} ta savol. Kamida {PLACEMENT.passPercent}% to'g'ri javob bersangiz, to'g'ridan-to'g'ri Elementary darslariga o'tasiz.
        {' '}{attemptsLeft} ta urinish qoldi; o'tolmasangiz, Beginner'dan boshlaysiz.
      </p>
      <Button size="lg" variant="glow" className="w-full gap-2" onClick={() => navigate('/learn/placement')}><Play className="h-4 w-4 fill-current" />Testni boshlash</Button>
      <Button variant="ghost" className="w-full mt-2" disabled={busy} onClick={() => void skip()}>Testsiz, Beginner'dan boshlash</Button>
    </div>
  );
}

function StatCard({ icon: Icon, tone, label, value, hint }: { icon: typeof Flame; tone: string; label: string; value: string; hint: string }) {
  return (
    <div className="glass-card p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1"><Icon className={`h-4 w-4 ${tone}`} />{label}</div>
      <p className="text-2xl font-extrabold">{value}</p>
      <p className="text-[11px] text-muted-foreground mt-0.5 truncate">{hint}</p>
    </div>
  );
}

function WordBook({ state, locked }: { state: LearningState; locked: boolean }) {
  const refresh = useRefreshLearning();
  const [groups, setGroups] = useState<{ lessonId: string; title: string; words: Word[] }[] | null>(null);
  const [query, setQuery] = useState('');
  const [drill, setDrill] = useState<Exercise[] | null>(null);
  const done = useMemo(() => new Set(state.progress.filter((p) => p.completed_at).map((p) => p.lesson_id)), [state.progress]);

  useEffect(() => {
    const units = [...new Set(ALL_LESSONS.filter((l) => done.has(l.id)).map((l) => l.unitId))];
    Promise.all(units.map(loadUnit)).then((all) => {
      setGroups(all.flat().filter((l) => done.has(l.id)).map((l) => ({ lessonId: l.id, title: l.titleUz, words: l.words })));
    }).catch(() => setGroups([]));
  }, [done]);

  if (!groups) return <div className="grid place-items-center py-16"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  const all = groups.flatMap((g) => g.words);
  if (!all.length) return <p className="text-center text-muted-foreground py-16">Bu yerda tugatgan darslaringizdagi so'zlar to'planadi. Birinchi darsni tugating!</p>;

  const q = query.trim().toLowerCase();
  const filtered = groups.map((g) => ({ ...g, words: g.words.filter((w) => !q || w.en.toLowerCase().includes(q) || w.uz.toLowerCase().includes(q)) })).filter((g) => g.words.length);

  const startDrill = () => {
    const picked = shuffle(all).slice(0, 10);
    setDrill(picked.map((w, i) => {
      const others = shuffle(all.filter((x) => x.en !== w.en)).slice(0, 3);
      if (i % 3 === 0) return { k: 'translate', uz: w.uz, a: [w.en], why: `**${w.en}** — ${w.uz}` } as Exercise;
      const opts = shuffle([w.en, ...others.map((o) => o.en)]);
      return i % 3 === 1 ? { k: 'listen', say: w.en, opts, a: opts.indexOf(w.en) } as Exercise
        : { k: 'choice', q: `"**${w.uz}**" inglizcha qanday?`, opts, a: opts.indexOf(w.en) } as Exercise;
    }));
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3 items-center mb-5">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="So'z qidirish…" className="pl-9" />
        </div>
        <Button variant="glow" className="gap-2" disabled={locked || all.length < 4} onClick={startDrill}><Sparkles className="h-4 w-4" />So'zlarni takrorlash</Button>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{all.length} ta so'z. Har kuni 5 daqiqa takrorlash — so'zlar uzoq xotirada qolishining eng ishonchli yo'li.</p>
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
      {drill && <WordDrill items={drill} onClose={() => setDrill(null)} onFinished={refresh} />}
    </div>
  );
}

function WordDrill({ items, onClose, onFinished }: { items: Exercise[]; onClose: () => void; onFinished: () => void }) {
  const [i, setI] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [startedAt] = useState(Date.now());
  const [finished, setFinished] = useState(false);
  useLessonAudio(items.flatMap(exerciseAudioTexts), 'drill');
  const finish = async (score: number) => {
    setFinished(true);
    try {
      await callLearning('learning_log_practice', { _correct: score, _answered: items.length, _seconds: Math.round((Date.now() - startedAt) / 1000) });
      onFinished();
    } catch (e) { toast.error(learningErrorMessage(e)); }
  };
  return (
    <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur overflow-y-auto">
      <div className="max-w-xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-6">
          <button type="button" onClick={onClose} aria-label="Yopish" className="h-9 w-9 rounded-full grid place-items-center hover:bg-secondary"><X className="h-5 w-5" /></button>
          <div className="h-2.5 flex-1 rounded-full bg-secondary overflow-hidden"><div className="h-full bg-primary transition-all" style={{ width: `${(Math.min(i, items.length) / items.length) * 100}%` }} /></div>
        </div>
        {finished ? (
          <div className="text-center py-10">
            <CheckCircle2 className="h-14 w-14 text-emerald-500 mx-auto mb-3" />
            <h2 className="text-2xl font-bold mb-1">{correct} / {items.length}</h2>
            <p className="text-muted-foreground mb-6">{correct >= items.length * 0.8 ? "Ajoyib! So'zlar yaxshi esda qolgan." : "Xato qilgan so'zlaringizni yana bir bor ko'zdan kechiring."}</p>
            <Button onClick={onClose} className="gap-2"><Check className="h-4 w-4" />Tayyor</Button>
          </div>
        ) : (
          <ExerciseView key={i} ex={items[i]} mode="practice" onDone={(c) => {
            const s = correct + (c ? 1 : 0);
            setCorrect(s);
            if (i + 1 >= items.length) void finish(s); else setI(i + 1);
          }} />
        )}
      </div>
    </div>
  );
}


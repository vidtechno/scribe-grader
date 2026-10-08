import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, BookOpenCheck, ChevronLeft, ChevronRight, Clock, Flame, Loader2, MessageCircleQuestion, RotateCcw,
  Sparkles, Star, Target, Trophy, X, Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { ALL_LESSONS, COURSE_UNITS, LESSON_MENTOR_ENABLED, LESSON_PASS_PERCENT, levelOf, loadLesson } from '@/features/learn/course';
import type { Exercise, Lesson } from '@/features/learn/types';
import { callLearning, courseMap, learningErrorMessage, useLearningState, useRefreshLearning } from '@/features/learn/api';
import { reviewQuestions, wordDrills } from '@/features/learn/practice';
import { lessonAudioTexts } from '@/features/learn/audio-plan';
import { useLessonAudio } from '@/features/learn/useLessonAudio';
import { BlockView } from '@/features/learn/components/BlockView';
import { ExerciseView } from '@/features/learn/components/ExerciseView';
import { Flashcards } from '@/features/learn/components/Flashcards';
import { Md } from '@/features/learn/components/Md';
import { achievementInfo } from '@/features/learn/achievements';
import { SpeakButton } from '@/features/learn/components/SpeakButton';
import { LearnPaywall } from '@/features/learn/components/LearnPaywall';

type Phase = 'intro' | 'review' | 'slides' | 'words' | 'practice' | 'quiz' | 'result';
const PHASES: { id: Phase; label: string; weight: number }[] = [
  { id: 'review', label: 'Takrorlash', weight: 8 },
  { id: 'slides', label: 'Mavzu', weight: 37 },
  { id: 'words', label: "So'zlar", weight: 12 },
  { id: 'practice', label: 'Mashq', weight: 28 },
  { id: 'quiz', label: 'Test', weight: 15 },
];

interface Saved {
  passed: boolean; stars: number; xp: number; first: boolean; streak: number;
  goal_bonus?: number; comeback_bonus?: number; goal_reached?: boolean; new_achievements?: string[];
}

export default function LearnLesson() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const { data: state, isLoading: stateLoading } = useLearningState();
  const refresh = useRefreshLearning();
  const [content, setContent] = useState<{ lesson: Lesson; previous: Lesson | null } | null>(null);
  const [loadError, setLoadError] = useState('');
  const [phase, setPhase] = useState<Phase>('intro');
  const [result, setResult] = useState<{ score: number; total: number; seconds: number } | null>(null);
  const started = useRef(Date.now());

  useEffect(() => {
    setContent(null); setPhase('intro'); setResult(null); setLoadError('');
    loadLesson(id).then(setContent).catch(() => setLoadError("Bu dars topilmadi yoki hali tayyor emas."));
  }, [id]);

  const map = useMemo(() => courseMap(state), [state]);
  const meta = ALL_LESSONS.find((l) => l.id === id);
  // The lesson's audio loads into memory once and is freed when the next lesson opens, so every tap plays at once.
  const audioTexts = useMemo(() => (content ? lessonAudioTexts(content.lesson, content.previous) : null), [content]);
  useLessonAudio(audioTexts, id);

  if (loadError || !meta) return <Centered><p className="mb-4">{loadError || 'Dars topilmadi.'}</p><Link to="/learn"><Button>Darslarga qaytish</Button></Link></Centered>;
  if (stateLoading || !content) return <Centered><Loader2 className="h-8 w-8 animate-spin text-primary" /></Centered>;
  if (!state?.profile) return <Navigate to="/learn" replace />;
  if (!state.access.allowed) return <Centered><LearnPaywall access={state.access} /></Centered>;
  if (map.lessonState.get(id) === 'locked') {
    return <Centered><p className="mb-4 max-w-sm text-center">Bu dars hali yopiq. Avvalgi darslarni (va bosqich testini) tugating — tizim sizni bosqichma-bosqich olib boradi.</p><Link to="/learn"><Button>Yo'l xaritasiga qaytish</Button></Link></Centered>;
  }

  const { lesson } = content;
  // A learner who started at a higher level has not taken the lessons of the levels below: no review of those.
  const previous = content.previous && map.lessonState.get(content.previous.id) !== 'open' ? content.previous : null;
  const unit = COURSE_UNITS.find((u) => u.lessons.some((l) => l.id === id))!;
  const index = ALL_LESSONS.findIndex((l) => l.id === id);
  const next = ALL_LESSONS[index + 1] ?? null;

  const exit = () => { if (phase === 'intro' || phase === 'result' || window.confirm("Darsdan chiqasizmi? Natija saqlanmaydi.")) navigate('/learn'); };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={`${lesson.title} — ${levelOf(unit.level).title}`} description={lesson.goal} path={`/learn/lesson/${id}`} noindex />
      <TopBar phase={phase} onExit={exit} lesson={lesson} />
      <main className="max-w-2xl mx-auto px-4 pt-20 pb-28">
        {phase === 'intro' && <Intro lesson={lesson} unitTitle={`${unit.n}-bosqich · ${unit.titleUz}`} hasReview={!!previous}
          onStart={() => { started.current = Date.now(); setPhase(previous ? 'review' : 'slides'); }} />}
        {phase === 'review' && previous && <Review previous={previous} onDone={() => setPhase('slides')} />}
        {phase === 'slides' && <Slides lesson={lesson} onDone={() => setPhase('words')} />}
        {phase === 'words' && <Flashcards words={lesson.words} onFinish={() => setPhase('practice')} />}
        {phase === 'practice' && <Practice lesson={lesson} onDone={() => setPhase('quiz')} />}
        {phase === 'quiz' && <Quiz key={`quiz-${started.current}`} lesson={lesson} onDone={(score) => {
          setResult({ score, total: lesson.quiz.length, seconds: Math.round((Date.now() - started.current) / 1000) });
          setPhase('result');
        }} />}
        {phase === 'result' && result && (
          <Result key={started.current} lesson={lesson} score={result.score} total={result.total} seconds={result.seconds} next={next}
            unitLast={unit.lessons[unit.lessons.length - 1].id === id} unitId={unit.id}
            onSaved={refresh} onRetry={() => { started.current = Date.now(); setPhase('practice'); }} />
        )}
      </main>
    </div>
  );
}

function Centered({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-background grid place-items-center p-6 text-center">{children}</div>;
}

function TopBar({ phase, onExit, lesson }: { phase: Phase; onExit: () => void; lesson: Lesson }) {
  const doneWeight = PHASES.slice(0, Math.max(0, PHASES.findIndex((p) => p.id === phase))).reduce((s, p) => s + p.weight, 0);
  const pct = phase === 'result' ? 100 : phase === 'intro' ? 0 : doneWeight;
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-background/90 backdrop-blur border-b border-border">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
        <button type="button" onClick={onExit} aria-label="Chiqish" className="h-9 w-9 rounded-full grid place-items-center hover:bg-secondary"><X className="h-5 w-5" /></button>
        <div className="flex-1">
          <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-primary to-brand-red-soft rounded-full" animate={{ width: `${pct}%` }} transition={{ duration: 0.4 }} />
          </div>
          <p className="text-[11px] text-muted-foreground mt-1 truncate">
            {PHASES.find((p) => p.id === phase)?.label ?? (phase === 'result' ? 'Natija' : lesson.titleUz)}
          </p>
        </div>
        {LESSON_MENTOR_ENABLED && (
          <button type="button" aria-label="AI mentordan so'rash" title="Tushunmagan joyingizni AI mentordan so'rang"
            onClick={() => window.dispatchEvent(new CustomEvent('scorify:mentor', { detail: { context: `${lesson.id} ${lesson.title}: ${lesson.goal}` } }))}
            className="h-9 w-9 rounded-full grid place-items-center hover:bg-secondary text-primary"><MessageCircleQuestion className="h-5 w-5" /></button>
        )}
      </div>
    </header>
  );
}

function Intro({ lesson, unitTitle, hasReview, onStart }: { lesson: Lesson; unitTitle: string; hasReview: boolean; onStart: () => void }) {
  const items = [
    hasReview && { icon: RotateCcw, text: "Oldingi darsni qisqa takrorlash" },
    { icon: BookOpenCheck, text: `Mavzu: ${lesson.slides.length} qism, misollar va tekshiruvlar bilan` },
    { icon: Sparkles, text: `${lesson.words.length} ta yangi so'z — talaffuzi bilan` },
    { icon: Target, text: `${lesson.practice.length + 5}+ mashq — xatolar qayta beriladi` },
    { icon: Trophy, text: `Yakuniy test: ${lesson.quiz.length} savol, o'tish uchun ${LESSON_PASS_PERCENT}%` },
  ].filter(Boolean) as { icon: typeof Star; text: string }[];
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{unitTitle}</p>
      <h1 className="text-3xl font-extrabold mb-1">{lesson.titleUz}</h1>
      <p className="text-muted-foreground mb-5">{lesson.title}</p>
      <div className="glass-card p-5 mb-5">
        <p className="text-sm font-semibold mb-1.5 flex items-center gap-2"><Target className="h-4 w-4 text-primary" />Dars maqsadi</p>
        <p className="text-[15px] leading-relaxed"><Md text={lesson.goal} /></p>
      </div>
      <ul className="space-y-2.5 mb-6">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-3 text-sm"><span className="w-8 h-8 rounded-lg bg-primary/10 text-primary grid place-items-center"><it.icon className="h-4 w-4" /></span>{it.text}</li>
        ))}
      </ul>
      <p className="text-xs text-muted-foreground mb-4 flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />Taxminan 15–25 daqiqa. Shoshilmang — har bir misolni tinglab, ovoz chiqarib takrorlang.</p>
      <Button size="lg" variant="glow" className="w-full text-base" onClick={onStart}>Darsni boshlash</Button>
    </motion.div>
  );
}

function Review({ previous, onDone }: { previous: Lesson; onDone: () => void }) {
  const questions = useMemo(() => reviewQuestions(previous), [previous]);
  const [step, setStep] = useState(-1);
  if (step < 0) {
    return (
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Takrorlash</p>
        <h2 className="text-2xl font-bold mb-4">Oldingi dars: {previous.titleUz}</h2>
        <ul className="glass-card p-5 space-y-2.5 mb-6">
          {previous.summary.map((s, i) => <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed"><span className="text-primary">✓</span><Md text={s} /></li>)}
        </ul>
        <Button size="lg" className="w-full" onClick={() => (questions.length ? setStep(0) : onDone())}>
          {questions.length ? `Eslab qolganingizni tekshiring (${questions.length} savol)` : "Yangi mavzuga o'tish"}
        </Button>
      </div>
    );
  }
  return (
    <div>
      <p className="text-xs text-muted-foreground mb-3">Takrorlash · {step + 1} / {questions.length}</p>
      <ExerciseView key={step} ex={questions[step]} mode="practice" onDone={() => (step + 1 >= questions.length ? onDone() : setStep(step + 1))} />
    </div>
  );
}

function Slides({ lesson, onDone }: { lesson: Lesson; onDone: () => void }) {
  const [i, setI] = useState(0);
  const [answered, setAnswered] = useState<Record<string, true>>({});
  const slide = lesson.slides[i];
  const checks = slide.blocks.map((b, j) => (b.t === 'check' ? `${i}-${j}` : null)).filter(Boolean) as string[];
  const ready = checks.every((k) => answered[k]);
  const last = i === lesson.slides.length - 1;
  useEffect(() => { window.scrollTo({ top: 0 }); }, [i]);
  return (
    <div>
      <div className="flex gap-1 mb-4">{lesson.slides.map((_, k) => <span key={k} className={`h-1 flex-1 rounded-full ${k <= i ? 'bg-primary' : 'bg-border'}`} />)}</div>
      <motion.div key={i} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }}>
        <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
        <div className="space-y-4">
          {slide.blocks.map((b, j) => (
            <BlockView key={`${i}-${j}`} block={b} onCheck={() => setAnswered((a) => ({ ...a, [`${i}-${j}`]: true }))} />
          ))}
        </div>
      </motion.div>
      <div className="fixed bottom-0 inset-x-0 bg-background/95 backdrop-blur border-t border-border">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" disabled={i === 0} onClick={() => setI(i - 1)} className="gap-1"><ChevronLeft className="h-4 w-4" />Orqaga</Button>
          <span className="text-xs text-muted-foreground flex-1 text-center">{ready ? `${i + 1} / ${lesson.slides.length}` : 'Avval savolga javob bering'}</span>
          <Button variant={last ? 'glow' : 'default'} disabled={!ready} onClick={() => (last ? onDone() : setI(i + 1))} className="gap-1">
            {last ? "So'zlarga o'tish" : 'Keyingi'}<ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function Practice({ lesson, onDone }: { lesson: Lesson; onDone: () => void }) {
  const initial = useMemo(() => [...wordDrills(lesson.words), ...lesson.practice], [lesson]);
  const [queue, setQueue] = useState<{ ex: Exercise; key: string; tries: number }[]>(() => initial.map((ex, i) => ({ ex, key: `p${i}`, tries: 0 })));
  const [pos, setPos] = useState(0);
  const [solved, setSolved] = useState(0);
  const item = queue[pos];
  useEffect(() => { if (!item) onDone(); }, [item, onDone]);
  if (!item) return null;
  const answer = (correct: boolean) => {
    if (correct) setSolved((s) => s + 1);
    else if (item.tries < 2) setQueue((q) => [...q, { ...item, key: `${item.key}r`, tries: item.tries + 1 }]);
    else setSolved((s) => s + 1);
    setPos((p) => p + 1);
  };
  const retry = item.tries > 0;
  return (
    <div>
      <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
        <span>Mashq · {Math.min(solved + 1, initial.length)} / {initial.length}</span>
        {retry && <span className="text-amber-600 dark:text-amber-400 font-semibold">↻ Xatoni tuzatamiz</span>}
      </div>
      <div className="h-1.5 rounded-full bg-secondary mb-5 overflow-hidden"><div className="h-full bg-primary transition-all" style={{ width: `${(solved / initial.length) * 100}%` }} /></div>
      <ExerciseView key={item.key} ex={item.ex} mode="practice" onDone={answer} />
    </div>
  );
}

function Quiz({ lesson, onDone }: { lesson: Lesson; onDone: (score: number) => void }) {
  const [i, setI] = useState(-1);
  const [score, setScore] = useState(0);
  if (i < 0) {
    return (
      <div className="text-center py-6">
        <Trophy className="h-12 w-12 text-amber-500 mx-auto mb-3" />
        <h2 className="text-2xl font-bold mb-2">Yakuniy test</h2>
        <p className="text-muted-foreground mb-6 max-w-sm mx-auto">{lesson.quiz.length} ta savol. Darsni tugatish uchun kamida {LESSON_PASS_PERCENT}% to'g'ri javob kerak. Bu safar xatolar qayta berilmaydi — diqqat bilan!</p>
        <Button size="lg" variant="glow" onClick={() => setI(0)}>Testni boshlash</Button>
      </div>
    );
  }
  const ex = lesson.quiz[i];
  return (
    <div>
      <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground"><span>Test · {i + 1} / {lesson.quiz.length}</span><span>✓ {score}</span></div>
      <ExerciseView key={i} ex={ex} mode="quiz" onDone={(c) => {
        const s = score + (c ? 1 : 0);
        setScore(s);
        if (i + 1 >= lesson.quiz.length) onDone(s); else setI(i + 1);
      }} />
    </div>
  );
}

function Result({ lesson, score, total, seconds, next, unitLast, unitId, onSaved, onRetry }: {
  lesson: Lesson; score: number; total: number; seconds: number; next: { id: string; title: string; titleUz: string; unitId: string } | null;
  unitLast: boolean; unitId: string; onSaved: () => void; onRetry: () => void;
}) {
  const navigate = useNavigate();
  const [saved, setSaved] = useState<Saved | null>(null);
  const [error, setError] = useState('');
  const sent = useRef(false);
  const pct = Math.round((score / total) * 100);
  const passed = pct >= LESSON_PASS_PERCENT;

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    callLearning<Saved>('learning_complete_lesson', {
      _lesson: lesson.id, _score: score, _total: total, _seconds: seconds,
      _next_id: next && next.unitId === unitId ? next.id : null,
      _next_title: next && next.unitId === unitId ? `${next.titleUz}` : null,
    }).then((r) => { setSaved(r); onSaved(); }).catch((e) => setError(learningErrorMessage(e)));
  }, [lesson.id, score, total, seconds, next, unitId, onSaved]);

  const stars = saved?.stars ?? (pct >= 90 ? 3 : pct >= 80 ? 2 : pct >= 70 ? 1 : 0);
  return (
    <div className="text-center">
      <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 220, damping: 14 }}
        className="mx-auto mb-4 w-24 h-24 rounded-full grid place-items-center bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl shadow-amber-500/30">
        {passed ? <Trophy className="h-12 w-12 text-white" /> : <RotateCcw className="h-11 w-11 text-white" />}
      </motion.div>
      <div className="flex justify-center gap-2 mb-3">
        {[1, 2, 3].map((n) => (
          <motion.span key={n} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.25 + n * 0.15, type: 'spring' }}>
            <Star className={`h-9 w-9 ${n <= stars ? 'fill-amber-400 text-amber-400' : 'text-border'}`} />
          </motion.span>
        ))}
      </div>
      <h2 className="text-2xl font-extrabold mb-1">{passed ? 'Dars tugatildi!' : 'Yana bir urinish kerak'}</h2>
      <p className="text-muted-foreground mb-5">
        {passed ? `Test natijasi: ${score} / ${total} (${pct}%)` : `Natija ${score} / ${total} (${pct}%). O'tish uchun ${LESSON_PASS_PERCENT}% kerak — mashqni yana bir bor ishlab, testni qayta topshiring.`}
      </p>
      <div className="grid grid-cols-3 gap-2.5 mb-6">
        <Stat icon={Zap} label="XP" value={saved ? `+${saved.xp}` : '…'} />
        <Stat icon={Flame} label="Streak" value={saved ? `${saved.streak} kun` : '…'} />
        <Stat icon={Clock} label="Vaqt" value={`${Math.max(1, Math.round(seconds / 60))} daq`} />
      </div>
      {error && <p className="text-sm text-destructive mb-4">{error}</p>}
      {saved && (!!saved.goal_bonus || !!saved.comeback_bonus || !!saved.new_achievements?.length) && (
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-left text-sm mb-4 space-y-1.5">
          {saved.goal_reached && <p>🎯 Kunlik maqsad bajarildi{saved.goal_bonus ? ` · +${saved.goal_bonus} XP` : ''}</p>}
          {!!saved.comeback_bonus && <p>👋 Qaytganingiz yaxshi bo'ldi · +{saved.comeback_bonus} XP</p>}
          {saved.new_achievements?.map((k) => { const a = achievementInfo(k); return <p key={k}>{a.icon} Yangi yutuq: <b>{a.title}</b></p>; })}
        </div>
      )}

      <div className="glass-card p-5 text-left mb-4">
        <p className="font-semibold mb-2.5">📌 Bugun o'rgandingiz</p>
        <ul className="space-y-2">{lesson.summary.map((s, i) => <li key={i} className="text-sm flex gap-2 leading-relaxed"><span className="text-primary">•</span><Md text={s} /></li>)}</ul>
      </div>
      <div className="glass-card p-5 text-left mb-4">
        <p className="font-semibold mb-1">🧠 Yodlang: 10 ta so'z</p>
        <p className="text-xs text-muted-foreground mb-3">Ertaga bu so'zlarni yana bir bor takrorlang — shunda uzoq xotiraga o'tadi.</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {lesson.words.map((w) => (
            <div key={w.en} className="flex items-center gap-2 rounded-lg bg-secondary/40 px-2.5 py-1.5 text-sm">
              <SpeakButton text={w.en} /><span className="font-semibold">{w.en}</span><span className="text-muted-foreground truncate">— {w.uz}</span>
            </div>
          ))}
        </div>
      </div>
      {lesson.homework && (
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-left text-sm mb-6"><p className="font-semibold mb-1">🏠 Mustaqil mashq</p><Md text={lesson.homework} /></div>
      )}

      <div className="space-y-2.5">
        {passed ? (
          unitLast ? (
            <Button size="lg" variant="glow" className="w-full" onClick={() => navigate(`/learn/test/${unitId}`)}>Bosqich testiga o'tish</Button>
          ) : next ? (
            <Button size="lg" variant="glow" className="w-full" onClick={() => navigate(`/learn/lesson/${next.id}`)}>Keyingi dars: {next.titleUz}</Button>
          ) : null
        ) : (
          <Button size="lg" variant="glow" className="w-full gap-2" onClick={onRetry}><RotateCcw className="h-4 w-4" />Mashq va testni qayta ishlash</Button>
        )}
        <Button size="lg" variant="outline" className="w-full gap-2" onClick={() => navigate('/learn')}><ArrowLeft className="h-4 w-4" />Yo'l xaritasiga</Button>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Star; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <Icon className="h-5 w-5 text-primary mx-auto mb-1" />
      <p className="font-bold">{value}</p>
      <p className="text-[11px] text-muted-foreground">{label}</p>
    </div>
  );
}

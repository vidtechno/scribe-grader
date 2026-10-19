import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LifeBuoy, BookOpenCheck, ChevronLeft, ChevronRight, Clock, Loader2, MessageCircleQuestion, RotateCcw,
  Sparkles, Star, Target, Trophy, X,
} from 'lucide-react';
import { useT } from '@/i18n';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { ALL_LESSONS, COURSE_UNITS, LESSON_CHECK_QUESTIONS, LESSON_MENTOR_ENABLED, levelOf, loadLesson } from '@/features/learn/course';
import type { Exercise, Lesson } from '@/features/learn/types';
import { courseMap, useLearningState, useRefreshLearning } from '@/features/learn/api';
import { reviewQuestions, wordDrills } from '@/features/learn/practice';
import { shuffle } from '@/features/learn/check';
import { lessonAudioTexts } from '@/features/learn/audio-plan';
import { useLessonAudio } from '@/features/learn/useLessonAudio';
import { BlockView } from '@/features/learn/components/BlockView';
import { isTwoVoiceLesson } from '@/features/learn/dialog-voices';
import { ReviewNav } from '@/features/learn/components/ReviewNav';
import { ExerciseView } from '@/features/learn/components/ExerciseView';
import { Flashcards } from '@/features/learn/components/Flashcards';
import { lessonEvents, sessionEvents, splitNewWords, type Outcome, type SessionItem } from '@/features/learn/engine/engine';
import { loadSession, recordReview, useReviewQueue } from '@/features/learn/engine/api';
import type { Word } from '@/features/learn/types';
import { Md } from '@/features/learn/components/Md';
import { LearnPaywall } from '@/features/learn/components/LearnPaywall';
import { Result } from '@/features/learn/components/LessonResult';
import { SceneRunner } from '@/features/learn/scene/SceneRunner';

type Phase = 'intro' | 'review' | 'warmup' | 'slides' | 'words' | 'practice' | 'quiz' | 'result';
const PHASES: { id: Phase; label: string; weight: number }[] = [
  { id: 'review', label: 'learn.lesson.phaseReview', weight: 4 },
  { id: 'warmup', label: 'learn.lesson.phaseWarmup', weight: 6 },
  { id: 'slides', label: 'learn.lesson.phaseTopic', weight: 37 },
  { id: 'words', label: 'learn.lesson.phaseWords', weight: 10 },
  { id: 'practice', label: 'learn.lesson.phasePractice', weight: 28 },
  { id: 'quiz', label: 'learn.lesson.phaseQuiz', weight: 15 },
];

export default function LearnLesson() {
  const { t, lang } = useT();
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const { data: state, isLoading: stateLoading } = useLearningState();
  const refresh = useRefreshLearning();
  const [content, setContent] = useState<{ lesson: Lesson; previous: Lesson | null } | null>(null);
  const [loadError, setLoadError] = useState('');
  const [phase, setPhase] = useState<Phase>('intro');
  const [result, setResult] = useState<{ score: number; total: number; seconds: number } | null>(null);
  const started = useRef(Date.now());
  const queueQuery = useReviewQueue();
  const queue = queueQuery.data ?? null;
  const [warmup, setWarmup] = useState<SessionItem[] | null>(null);
  // Outcomes of this run, sent to the learning engine when the lesson ends.
  const track = useRef<{ outcomes: Map<string, Outcome>; review: { key: string; correct: boolean; lesson: string }[] }>({ outcomes: new Map(), review: [] });

  useEffect(() => {
    setContent(null); setPhase('intro'); setResult(null); setLoadError(''); setWarmup(null);
    track.current = { outcomes: new Map(), review: [] };
    loadLesson(id).then(setContent).catch(() => setLoadError(t('learn.lesson.notFoundYet')));
  }, [id]);

  const map = useMemo(() => courseMap(state), [state]);
  const split = useMemo(() => (content ? splitNewWords(content.lesson.words, queue) : null), [content, queue]);
  // The warm-up is built once per lesson from what is due (words, mistakes, grammar); nothing due means no warm-up.
  useEffect(() => {
    if (!content || queueQuery.isLoading || warmup) return;
    if (!queue) { setWarmup([]); return; }
    const pool = content.lesson.words.map((w) => ({ en: w.en, uz: w.uz }));
    loadSession(queue, { extraPool: pool, allowSpeak: false, lang }).then(setWarmup).catch(() => setWarmup([]));
  }, [content, queue, queueQuery.isLoading, warmup]);
  const meta = ALL_LESSONS.find((l) => l.id === id);
  // The lesson's audio loads into memory once and is freed when the next lesson opens, so every tap plays at once.
  const audioTexts = useMemo(() => (content ? lessonAudioTexts(content.lesson, content.previous) : null), [content]);
  useLessonAudio(audioTexts, id);

  if (loadError || !meta) return <Centered><p className="mb-4">{loadError || t('learn.lesson.notFound')}</p><Link to="/learn"><Button>{t('learn.lesson.backToLessons')}</Button></Link></Centered>;
  if (stateLoading || !content || !split || (queueQuery.isLoading && !queue) || !warmup) return <Centered><Loader2 className="h-8 w-8 animate-spin text-primary" /></Centered>;
  if (!state?.profile) return <Navigate to="/learn" replace />;
  if (!state.access.allowed) return <Centered><LearnPaywall access={state.access} /></Centered>;
  if (map.lessonState.get(id) === 'locked') {
    return <Centered><p className="mb-4 max-w-sm text-center">{t('learn.lesson.locked')}</p><Link to="/learn"><Button>{t('learn.lesson.backToMap')}</Button></Link></Centered>;
  }

  const { lesson } = content;
  // A learner who started at a higher level has not taken the lessons of the levels below: no review of those.
  const previous = content.previous && map.lessonState.get(content.previous.id) !== 'open' ? content.previous : null;
  const unit = COURSE_UNITS.find((u) => u.lessons.some((l) => l.id === id))!;
  const index = ALL_LESSONS.findIndex((l) => l.id === id);
  const next = ALL_LESSONS[index + 1] ?? null;

  // A real-life scene is an interactive conversation; it completes through the same progress, XP and streak.
  if (lesson.scene) {
    return (
      <>
        <SEOHead title={`${lesson.title} — ${levelOf(unit.level).title}`} description={lesson.goal} path={`/learn/lesson/${id}`} noindex />
        <SceneRunner key={id} lesson={lesson} unitTitle={t('learn.lesson.unitTitle', { n: unit.n, title: unit.titleUz })} next={next} unitLast={unit.lessons[unit.lessons.length - 1].id === id} unitId={unit.id}
          known={new Set((queue?.known ?? []).map(([w]) => w))} onSaved={refresh} />
      </>
    );
  }

  const exit = () => { if (phase === 'intro' || phase === 'result' || window.confirm(t('learn.lesson.confirmExit'))) navigate('/learn'); };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={`${lesson.title} — ${levelOf(unit.level).title}`} description={lesson.goal} path={`/learn/lesson/${id}`} noindex />
      <TopBar phase={phase} onExit={exit} lesson={lesson} />
      <main className="max-w-2xl mx-auto px-4 pt-20 pb-28">
        {phase === 'intro' && <Intro lesson={lesson} unitTitle={t('learn.lesson.unitTitle', { n: unit.n, title: unit.titleUz })} hasReview={!!previous} newWords={split.fresh.length} warmup={warmup.length}
          onStart={() => { started.current = Date.now(); setPhase(previous ? 'review' : warmup.length ? 'warmup' : 'slides'); }} />}
        {phase === 'review' && previous && <Review previous={previous} questions={warmup.length ? 0 : 3} onDone={() => setPhase(warmup.length ? 'warmup' : 'slides')} />}
        {phase === 'warmup' && <Warmup items={warmup} onResults={(results) => {
          track.current.review = results.filter((r) => r.item.ref.type === 'm').map((r) => ({ key: (r.item.ref as { key: string }).key, correct: r.correct, lesson: (r.item.ref as { lesson: string }).lesson }));
          void recordReview(sessionEvents(results.filter((r) => r.item.ref.type !== 'm')), false).catch(() => {});
          void recordReview(sessionEvents(results.filter((r) => r.item.ref.type === 'm')), false).catch(() => {});
        }} onDone={() => setPhase('slides')} />}
        {phase === 'slides' && <Slides lesson={lesson} onDone={() => setPhase(split.fresh.length ? 'words' : 'practice')} />}
        {phase === 'words' && <Flashcards words={split.fresh} extra={split.extra} onFinish={() => setPhase('practice')} />}
        {phase === 'practice' && <Practice lesson={lesson} fresh={split.fresh} onOutcome={(o) => track.current.outcomes.set(o.own ? `p${o.index}` : `d${track.current.outcomes.size}`, o)} onDone={() => setPhase('quiz')} />}
        {phase === 'quiz' && <Quiz key={`quiz-${started.current}`} lesson={lesson} onOutcome={(o) => track.current.outcomes.set(`q${o.index}`, o)} onDone={() => {
          // The lesson score is the first-try accuracy over the guided practice and the quick check together.
          const own = [...track.current.outcomes.values()].filter((o) => o.own);
          setResult({ score: own.filter((o) => o.correct).length, total: Math.max(1, own.length), seconds: Math.round((Date.now() - started.current) / 1000) });
          setPhase('result');
        }} />}
        {phase === 'result' && result && (
          <Result key={started.current} lesson={lesson} fresh={split.fresh} score={result.score} total={result.total} seconds={result.seconds} next={next}
            unitLast={unit.lessons[unit.lessons.length - 1].id === id} unitId={unit.id}
            events={() => lessonEvents({ lesson, fresh: split.fresh, outcomes: [...track.current.outcomes.values()], known: new Set((queue?.known ?? []).map(([w]) => w)), review: track.current.review })}
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
  const { t } = useT();
  const doneWeight = PHASES.slice(0, Math.max(0, PHASES.findIndex((p) => p.id === phase))).reduce((s, p) => s + p.weight, 0);
  const pct = phase === 'result' ? 100 : phase === 'intro' ? 0 : doneWeight;
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-background/90 backdrop-blur border-b border-border">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
        <button type="button" onClick={onExit} aria-label={t('learn.lesson.exit')} className="h-9 w-9 rounded-full grid place-items-center hover:bg-secondary"><X className="h-5 w-5" /></button>
        <div className="flex-1">
          <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-primary to-brand-red-soft rounded-full" animate={{ width: `${pct}%` }} transition={{ duration: 0.4 }} />
          </div>
          <p className="text-[11px] text-muted-foreground mt-1 truncate">
            {t(PHASES.find((p) => p.id === phase)?.label ?? (phase === 'result' ? 'learn.lesson.phaseResult' : '')) || lesson.titleUz}
          </p>
        </div>
        <Link to="/support" target="_blank" aria-label={t('learn.lesson.help')} className="shrink-0 inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold hover:border-primary/50"><LifeBuoy className="h-4 w-4 text-primary" /><span className="hidden min-[380px]:inline">{t('learn.lesson.help')}</span></Link>
        {LESSON_MENTOR_ENABLED && (
          <button type="button" aria-label={t('learn.lesson.askMentor')} title={t('learn.lesson.askMentorTitle')}
            onClick={() => window.dispatchEvent(new CustomEvent('scorify:mentor', { detail: { context: `${lesson.id} ${lesson.title}: ${lesson.goal}` } }))}
            className="h-9 w-9 rounded-full grid place-items-center hover:bg-secondary text-primary"><MessageCircleQuestion className="h-5 w-5" /></button>
        )}
      </div>
    </header>
  );
}

function Intro({ lesson, unitTitle, hasReview, newWords, warmup, onStart }: { lesson: Lesson; unitTitle: string; hasReview: boolean; newWords: number; warmup: number; onStart: () => void }) {
  const { t } = useT();
  const items = [
    hasReview && { icon: RotateCcw, text: t('learn.lesson.introReview') },
    { icon: BookOpenCheck, text: t('learn.lesson.introTopic', { n: lesson.slides.length }) },
    warmup > 0 && { icon: RotateCcw, text: t('learn.lesson.introWarmup', { n: warmup }) },
    newWords > 0 ? { icon: Sparkles, text: t('learn.lesson.introNewWords', { n: newWords }) } : { icon: Sparkles, text: t('learn.lesson.introOldWords') },
    { icon: Target, text: t('learn.lesson.introPractice', { n: lesson.practice.length }) },
    { icon: Trophy, text: t('learn.lesson.introQuiz', { n: LESSON_CHECK_QUESTIONS }) },
  ].filter(Boolean) as { icon: typeof Star; text: string }[];
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{unitTitle}</p>
      <h1 className="text-3xl font-extrabold mb-1">{lesson.titleUz}</h1>
      <p className="text-muted-foreground mb-5">{lesson.title}</p>
      <div className="glass-card p-5 mb-5">
        <p className="text-sm font-semibold mb-1.5 flex items-center gap-2"><Target className="h-4 w-4 text-primary" />{t('learn.lesson.goal')}</p>
        <p className="text-[15px] leading-relaxed"><Md text={lesson.goal} /></p>
      </div>
      <ul className="space-y-2.5 mb-6">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-3 text-sm"><span className="w-8 h-8 rounded-lg bg-primary/10 text-primary grid place-items-center"><it.icon className="h-4 w-4" /></span>{it.text}</li>
        ))}
      </ul>
      <p className="text-xs text-muted-foreground mb-4 flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{lesson.mini ? t('learn.lesson.timeShort') : t('learn.lesson.timeLong')} {t('learn.lesson.slowDown')}</p>
      <Button size="lg" variant="glow" className="w-full text-base" onClick={onStart}>{t('learn.lesson.start')}</Button>
    </motion.div>
  );
}

function Review({ previous, questions: count, onDone }: { previous: Lesson; questions: number; onDone: () => void }) {
  const { t } = useT();
  const questions = useMemo(() => (count > 0 ? reviewQuestions(previous, count) : []), [previous, count]);
  const [step, setStep] = useState(-1);
  if (step < 0) {
    return (
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{t('learn.lesson.phaseReview')}</p>
        <h2 className="text-2xl font-bold mb-4">{t('learn.lesson.prevLesson', { title: previous.titleUz })}</h2>
        <ul className="glass-card p-5 space-y-2.5 mb-6">
          {previous.summary.map((s, i) => <li key={i} className="flex gap-2.5 text-[15px] leading-relaxed"><span className="text-primary">✓</span><Md text={s} /></li>)}
        </ul>
        <Button size="lg" className="w-full" onClick={() => (questions.length ? setStep(0) : onDone())}>
          {questions.length ? t('learn.lesson.checkRecall', { n: questions.length }) : t('learn.lesson.toNewTopic')}
        </Button>
      </div>
    );
  }
  return (
    <div>
      <p className="text-xs text-muted-foreground mb-3">{t('learn.lesson.phaseReview')} · {step + 1} / {questions.length}</p>
      <ExerciseView key={step} ex={questions[step]} mode="practice" onDone={() => (step + 1 >= questions.length ? onDone() : setStep(step + 1))} />
    </div>
  );
}

function Warmup({ items, onResults, onDone }: { items: SessionItem[]; onResults: (r: { item: SessionItem; correct: boolean }[]) => void; onDone: () => void }) {
  const { t } = useT();
  const [i, setI] = useState(0);
  const results = useRef<{ item: SessionItem; correct: boolean }[]>([]);
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">{t('learn.lesson.phaseWarmup')}</p>
      <p className="text-xs text-muted-foreground mb-3">{i + 1} / {items.length} · {t('learn.lesson.fromPrevious')}</p>
      <div className="h-1.5 rounded-full bg-secondary mb-5 overflow-hidden"><div className="h-full bg-primary transition-all" style={{ width: `${(i / items.length) * 100}%` }} /></div>
      <ExerciseView key={items[i].id} ex={items[i].ex} mode="practice" onDone={(c) => {
        results.current.push({ item: items[i], correct: c });
        if (i + 1 >= items.length) { onResults(results.current); onDone(); } else setI(i + 1);
      }} />
    </div>
  );
}

function Slides({ lesson, onDone }: { lesson: Lesson; onDone: () => void }) {
  const { t } = useT();
  const [i, setI] = useState(0);
  const [answered, setAnswered] = useState<Record<string, true>>({});
  const [seen, setSeen] = useState(0);
  const slide = lesson.slides[i];
  const goTo = (n: number) => { setI(n); setSeen((m) => Math.max(m, n)); };
  const checks = slide.blocks.map((b, j) => (b.t === 'check' ? `${i}-${j}` : null)).filter(Boolean) as string[];
  const ready = checks.every((k) => answered[k]);
  const last = i === lesson.slides.length - 1;
  useEffect(() => { window.scrollTo({ top: 0 }); }, [i]);
  return (
    <div>
      <div className="flex gap-1 mb-4">{lesson.slides.map((_, k) => <span key={k} className={`h-1 flex-1 rounded-full ${k <= i ? 'bg-primary' : 'bg-border'}`} />)}</div>
      {/* Visited slides stay mounted (hidden): going back shows the answers given, and they cannot be changed. */}
      {lesson.slides.slice(0, seen + 1).map((sl, n) => (
        <div key={n} hidden={n !== i}>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }}>
            <h2 className="text-2xl font-bold mb-4">{sl.title}</h2>
            <div className="space-y-4">
              {sl.blocks.map((b, j) => (
                <BlockView key={`${n}-${j}`} block={b} voices={isTwoVoiceLesson(lesson.id)} onCheck={() => setAnswered((a) => ({ ...a, [`${n}-${j}`]: true }))} />
              ))}
            </div>
          </motion.div>
        </div>
      ))}
      <div className="fixed bottom-0 inset-x-0 bg-background/95 backdrop-blur border-t border-border">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Button variant="ghost" disabled={i === 0} onClick={() => goTo(i - 1)} className="gap-1"><ChevronLeft className="h-4 w-4" />{t('learn.lesson.back')}</Button>
          <span className="text-xs text-muted-foreground flex-1 text-center">{ready ? `${i + 1} / ${lesson.slides.length}` : t('learn.lesson.answerFirst')}</span>
          <Button variant={last ? 'glow' : 'default'} disabled={!ready} onClick={() => (last ? onDone() : goTo(i + 1))} className="gap-1">
            {last ? t('learn.lesson.toWords') : t('learn.lesson.next')}<ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

function Practice({ lesson, fresh, onOutcome, onDone }: { lesson: Lesson; fresh: Word[]; onOutcome: (o: Outcome) => void; onDone: () => void }) {
  const { t } = useT();
  const drills = useMemo(() => wordDrills(fresh), [fresh]);
  const initial = useMemo(() => [...drills, ...lesson.practice], [drills, lesson]);
  const [queue, setQueue] = useState<{ ex: Exercise; key: string; tries: number }[]>(() => initial.map((ex, i) => ({ ex, key: `p${i}`, tries: 0 })));
  const [pos, setPos] = useState(0);
  const [solved, setSolved] = useState(0);
  const [view, setView] = useState<number | null>(null);
  const item = queue[pos];
  useEffect(() => { if (!item) onDone(); }, [item, onDone]);
  if (!item) return null;
  const answer = (correct: boolean) => {
    if (item.tries === 0) {
      const at = Number(item.key.slice(1));
      onOutcome({ ex: item.ex, section: 'p', index: at - drills.length, correct, own: at >= drills.length });
    }
    if (correct) setSolved((s) => s + 1);
    else if (item.tries < 2) setQueue((q) => [...q, { ...item, key: `${item.key}r`, tries: item.tries + 1 }]);
    else setSolved((s) => s + 1);
    setView(null);
    setPos((p) => p + 1);
  };
  const retry = item.tries > 0;
  const shown = view ?? pos;
  return (
    <div>
      <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
        <span>{t('learn.lesson.phasePractice')} · {Math.min(solved + 1, initial.length)} / {initial.length}</span>
        {retry && <span className="text-amber-600 dark:text-amber-400 font-semibold">{t('learn.lesson.fixing')}</span>}
      </div>
      <div className="h-1.5 rounded-full bg-secondary mb-5 overflow-hidden"><div className="h-full bg-primary transition-all" style={{ width: `${(solved / initial.length) * 100}%` }} /></div>
      {/* Answered exercises stay mounted (hidden) so the learner can look at them again, but not change them. */}
      {queue.slice(0, pos + 1).map((it, n) => (
        <div key={it.key} hidden={n !== shown} className={n < pos ? 'pointer-events-none select-none' : ''} aria-hidden={n !== shown}>
          <ExerciseView ex={it.ex} mode="practice" onDone={n === pos ? answer : () => {}} />
        </div>
      ))}
      <ReviewNav shown={shown} current={pos} onShow={(n) => setView(n >= pos ? null : n)} />
    </div>
  );
}

/** A few quick questions at the end of a lesson: a check, not a final exam (mastery tests come after the topic). */
function pickCheck(quiz: Exercise[], count: number): { ex: Exercise; index: number }[] {
  const pool = quiz.map((ex, index) => ({ ex, index })).filter((q) => q.ex.k !== 'match' && q.ex.k !== 'speak');
  const picked: { ex: Exercise; index: number }[] = [];
  for (const q of shuffle(pool)) {
    if (picked.length >= count) break;
    if (picked.some((p) => p.ex.k === q.ex.k) && picked.length < pool.length - 1 && pool.some((o) => !picked.some((p) => p.ex.k === o.ex.k) && o !== q)) continue;
    picked.push(q);
  }
  return picked.length ? picked : pool.slice(0, count);
}

function Quiz({ lesson, onOutcome, onDone }: { lesson: Lesson; onOutcome: (o: Outcome) => void; onDone: (score: number) => void }) {
  const { t } = useT();
  const [i, setI] = useState(-1);
  const [score, setScore] = useState(0);
  const [view, setView] = useState<number | null>(null);
  const questions = useMemo(() => pickCheck(lesson.quiz, LESSON_CHECK_QUESTIONS), [lesson]);
  if (i < 0) {
    return (
      <div className="text-center py-6">
        <Trophy className="h-12 w-12 text-amber-500 mx-auto mb-3" />
        <h2 className="text-2xl font-bold mb-2">{t('learn.lesson.quizTitle')}</h2>
        <p className="text-muted-foreground mb-6 max-w-sm mx-auto">{t('learn.lesson.quizText', { n: questions.length })}</p>
        <Button size="lg" variant="glow" onClick={() => setI(0)}>{t('learn.lesson.begin')}</Button>
      </div>
    );
  }
  const shown = view ?? i;
  return (
    <div>
      <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground"><span>{t('learn.lesson.check')} · {shown + 1} / {questions.length}</span><span>✓ {score}</span></div>
      {questions.slice(0, i + 1).map((q, n) => (
        <div key={n} hidden={n !== shown} className={n < i ? 'pointer-events-none select-none' : ''} aria-hidden={n !== shown}>
          <ExerciseView ex={q.ex} mode="quiz" onDone={n !== i ? () => {} : (c) => {
            const s = score + (c ? 1 : 0);
            setScore(s);
            onOutcome({ ex: q.ex, section: 'q', index: q.index, correct: c, own: true });
            if (i + 1 >= questions.length) onDone(s); else { setView(null); setI(i + 1); }
          }} />
        </div>
      ))}
      <ReviewNav shown={shown} current={i} onShow={(n) => setView(n >= i ? null : n)} />
    </div>
  );
}

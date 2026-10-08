import { useEffect, useMemo, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Compass, Loader2, PartyPopper, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { exerciseAudioTexts } from '@/features/learn/audio-plan';
import { useLessonAudio } from '@/features/learn/useLessonAudio';
import { COURSE_UNITS, LEVELS, PLACEMENT, ALL_LESSONS, levelOf, loadUnit } from '@/features/learn/course';
import type { Exercise, Lesson } from '@/features/learn/types';
import { callLearning, learningErrorMessage, placementPending, useLearningState, useRefreshLearning } from '@/features/learn/api';
import { placementQuestions } from '@/features/learn/practice';
import { ExerciseView } from '@/features/learn/components/ExerciseView';
import { LearnPaywall } from '@/features/learn/components/LearnPaywall';
import { MistakeReview, TestShell } from '@/features/learn/components/TestShell';

interface Outcome { passed: boolean; status: 'passed' | 'pending' | 'failed'; attempts_left: number; xp: number }

/** Placement test for the level the learner asked for: 20 questions from the levels below it, 70% to start at Elementary, 2 attempts. */
export default function LearnPlacement() {
  const navigate = useNavigate();
  const { data: state, isLoading } = useLearningState();
  const refresh = useRefreshLearning();
  const [units, setUnits] = useState<Lesson[][] | null>(null);
  const [questions, setQuestions] = useState<Exercise[] | null>(null);
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [error, setError] = useState('');
  const audioTexts = useMemo(() => (questions ? questions.flatMap(exerciseAudioTexts) : null), [questions]);
  useLessonAudio(audioTexts, `placement-${questions ? 'q' : ''}`);

  // The test covers every unit of the levels below the level the learner asked for.
  const target = state?.profile?.placement_target ?? 'a1';
  const targetIndex = LEVELS.findIndex((l) => l.id === target);
  const below = useMemo(() => COURSE_UNITS.filter((u) => LEVELS.findIndex((l) => l.id === u.level) < targetIndex), [targetIndex]);
  useEffect(() => {
    if (!below.length) return;
    Promise.all(below.map((u) => loadUnit(u.id))).then(setUnits).catch(() => setError('Test yuklanmadi. Sahifani yangilang.'));
  }, [below]);

  const attemptsLeft = Math.max(0, PLACEMENT.attempts - (state?.profile?.placement_attempts ?? 0));
  const firstTarget = ALL_LESSONS.find((l) => l.level === target);
  const targetTitle = levelOf(target).title;

  if (isLoading || (!units && !error)) return <TestShell title="Daraja testi" path="/learn/placement"><div className="grid place-items-center py-24"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div></TestShell>;
  if (!state?.profile) return <Navigate to="/learn" replace />;
  if (!state.access.allowed) return <TestShell title="Daraja testi" path="/learn/placement"><div className="py-10"><LearnPaywall access={state.access} /></div></TestShell>;
  // Nothing to take (already placed, or never asked for Elementary) and no result to show.
  if (!placementPending(state) && !outcome) return <Navigate to="/learn" replace />;

  const submit = async (all: boolean[]) => {
    const score = all.filter(Boolean).length;
    try {
      const r = await callLearning<Outcome>('learning_submit_placement', {
        _score: score, _total: all.length, _next_id: firstTarget?.id ?? null, _next_title: firstTarget?.titleUz ?? null,
      });
      setOutcome(r);
      await refresh();
    } catch (e) { setError(learningErrorMessage(e)); }
  };

  const skip = async () => {
    try {
      await callLearning('learning_skip_placement');
      await refresh();
      navigate('/learn');
    } catch (e) { setError(learningErrorMessage(e)); }
  };

  if (outcome && questions) {
    const score = answers.filter(Boolean).length;
    const pct = Math.round((score / questions.length) * 100);
    return (
      <TestShell title="Daraja testi" path="/learn/placement">
        <div className="text-center py-6">
          <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}
            className={`mx-auto mb-4 w-24 h-24 rounded-[30px] grid place-items-center ${outcome.passed ? 'bg-gradient-to-br from-emerald-400 to-teal-500' : 'bg-gradient-to-br from-slate-400 to-slate-500'}`}>
            {outcome.passed ? <PartyPopper className="h-11 w-11 text-white" /> : <Compass className="h-11 w-11 text-white" />}
          </motion.div>
          <h1 className="text-2xl font-extrabold mb-1">
            {outcome.passed ? `${targetTitle}'ga xush kelibsiz!` : outcome.status === 'failed' ? "Beginner'dan boshlaymiz" : "Bu safar o'tmadi"}
          </h1>
          <p className="text-muted-foreground mb-5">Natija: {score} / {questions.length} ({pct}%). O'tish uchun {PLACEMENT.passPercent}% kerak.</p>
          {!outcome.passed && (
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-left mb-5">
              {outcome.status === 'failed'
                ? <>Ikkala urinishda ham o'tilmadi. Hechqisi yo'q — Beginner kursi darajangizni mustahkam poydevorga aylantiradi. Dastlabki darslar tez o'tadi.</>
                : <>Yana <b>{outcome.attempts_left} ta urinish</b> qoldi. Xatolarni ko'rib chiqing va qayta urinib ko'ring.</>}
            </div>
          )}
          <MistakeReview questions={questions} answers={answers} />
          <div className="space-y-2.5 mt-6">
            {!outcome.passed && outcome.status === 'pending' && (
              <Button size="lg" variant="glow" className="w-full gap-2" onClick={() => { setOutcome(null); setQuestions(null); setAnswers([]); setI(0); }}><RotateCcw className="h-4 w-4" />Qayta urinish</Button>
            )}
            <Button size="lg" variant={outcome.passed || outcome.status === 'failed' ? 'glow' : 'outline'} className="w-full" onClick={() => navigate('/learn')}>
              {outcome.passed ? `${targetTitle} darslariga o'tish` : outcome.status === 'failed' ? "Beginner'ni boshlash" : "Beginner'dan boshlash"}
            </Button>
          </div>
        </div>
      </TestShell>
    );
  }

  if (questions) {
    return (
      <TestShell title="Daraja testi" path="/learn/placement" progress={i / questions.length}
        onExit={() => { if (window.confirm('Testdan chiqasizmi? Bu urinish hisoblanmaydi.')) navigate('/learn'); }}>
        <p className="text-xs text-muted-foreground mb-4">Savol {i + 1} / {questions.length} · javoblar oxirida ko'rsatiladi</p>
        <ExerciseView key={i} ex={questions[i]} mode="test" onDone={(c) => {
          const all = [...answers, c];
          setAnswers(all);
          if (i + 1 >= questions.length) void submit(all); else setI(i + 1);
        }} />
        {error && <p className="text-sm text-destructive mt-4">{error}</p>}
      </TestShell>
    );
  }

  return (
    <TestShell title="Daraja testi" path="/learn/placement">
      <div className="py-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{targetTitle} · {levelOf(target).cefr}</p>
        <h1 className="text-3xl font-extrabold mb-3 flex items-center gap-3"><Compass className="h-8 w-8 text-primary" />Daraja testi</h1>
        <p className="text-muted-foreground mb-5">{targetTitle}'dan boshlash uchun oldingi darajalardagi bilimlaringizni tekshiramiz. O'tsangiz, ularni o'qib o'tirmaysiz.</p>
        <ul className="glass-card p-5 space-y-2.5 text-sm mb-6">
          <li>📝 <b>{PLACEMENT.questions} ta savol</b> — oldingi darajalarning barcha bosqichlaridan</li>
          <li>🎯 O'tish uchun kamida <b>{PLACEMENT.passPercent}%</b> ({Math.ceil(PLACEMENT.questions * PLACEMENT.passPercent / 100)} ta to'g'ri javob)</li>
          <li>🔁 <b>{PLACEMENT.attempts} ta urinish</b>. O'tolmasangiz, Beginner'dan boshlaysiz</li>
          <li>🔊 Eshitish savollari bor — quloqchin yoki ovoz yoqilgan bo'lsin</li>
        </ul>
        <p className="text-sm mb-4">Qolgan urinishlar: <b>{attemptsLeft}</b></p>
        {error && <p className="text-sm text-destructive mb-3">{error}</p>}
        <Button size="lg" variant="glow" className="w-full" disabled={!units} onClick={() => units && setQuestions(placementQuestions(units, PLACEMENT.questions))}>Testni boshlash</Button>
        <Button variant="ghost" className="w-full mt-3" onClick={() => void skip()}>Testsiz, Beginner'dan boshlash</Button>
        <Button variant="ghost" className="w-full mt-1 gap-2" onClick={() => navigate('/learn')}><ArrowLeft className="h-4 w-4" />Orqaga</Button>
      </div>
    </TestShell>
  );
}

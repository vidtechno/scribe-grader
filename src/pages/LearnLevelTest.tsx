import { useEffect, useMemo, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Loader2, PartyPopper, RotateCcw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { exerciseAudioTexts } from '@/features/learn/audio-plan';
import { useLessonAudio } from '@/features/learn/useLessonAudio';
import { ALL_LESSONS, LEVELS, LEVEL_TEST, levelOf, loadUnit, unitsOf } from '@/features/learn/course';
import type { Exercise, Lesson, LevelId } from '@/features/learn/types';
import { callLearning, learningErrorMessage, useLearningState, useRefreshLearning } from '@/features/learn/api';
import { placementQuestions } from '@/features/learn/practice';
import { CertificateDialog } from '@/features/learn/components/CertificateDialog';
import { ExerciseView } from '@/features/learn/components/ExerciseView';
import { LearnPaywall } from '@/features/learn/components/LearnPaywall';
import { MistakeReview, TestShell } from '@/features/learn/components/TestShell';

interface Outcome { passed: boolean; advanced: boolean; next_level: string | null; next_soon: boolean; xp: number }

/** Final test of a level: always open, 20 questions from all of its units, 70% to pass and move on. Retake as often as needed. */
export default function LearnLevelTest() {
  const navigate = useNavigate();
  const { level: param } = useParams();
  const level = LEVELS.find((l) => l.id === param && l.available)?.id as LevelId | undefined;
  const { data: state, isLoading } = useLearningState();
  const refresh = useRefreshLearning();
  const [units, setUnits] = useState<Lesson[][] | null>(null);
  const [questions, setQuestions] = useState<Exercise[] | null>(null);
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [error, setError] = useState('');
  const [certificate, setCertificate] = useState(false);
  const audioTexts = useMemo(() => (questions ? questions.flatMap(exerciseAudioTexts) : null), [questions]);
  useLessonAudio(audioTexts, `level-${level}-${questions ? 'q' : ''}`);
  const path = `/learn/level-test/${level}`;

  useEffect(() => {
    if (!level) return;
    Promise.all(unitsOf(level).map((u) => loadUnit(u.id))).then(setUnits).catch(() => setError('Test yuklanmadi. Sahifani yangilang.'));
  }, [level]);

  if (!level) return <Navigate to="/learn" replace />;
  const title = levelOf(level).title;
  const shell = (children: React.ReactNode, props: { progress?: number; onExit?: () => void } = {}) => (
    <TestShell title={`${title} yakuniy testi`} path={path} {...props}>{children}</TestShell>
  );
  if (isLoading || (!units && !error)) return shell(<div className="grid place-items-center py-24"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>);
  if (!state?.profile) return <Navigate to="/learn" replace />;
  if (!state.access.allowed) return shell(<div className="py-10"><LearnPaywall access={state.access} /></div>);

  const nextLevel = LEVELS[LEVELS.findIndex((l) => l.id === level) + 1];
  const firstNext = nextLevel?.available ? ALL_LESSONS.find((l) => l.level === nextLevel.id) : undefined;

  const submit = async (all: boolean[]) => {
    try {
      const r = await callLearning<Outcome>('learning_submit_level_test', {
        _level: level, _score: all.filter(Boolean).length, _total: all.length, _next_id: firstNext?.id ?? null, _next_title: firstNext?.titleUz ?? null,
      });
      setOutcome(r);
      await refresh();
    } catch (e) { setError(learningErrorMessage(e)); }
  };

  if (outcome && questions) {
    const score = answers.filter(Boolean).length;
    const pct = Math.round((score / questions.length) * 100);
    return shell(
      <div className="text-center py-6">
        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}
          className={`mx-auto mb-4 w-24 h-24 rounded-[30px] grid place-items-center ${outcome.passed ? 'bg-gradient-to-br from-emerald-400 to-teal-500' : 'bg-gradient-to-br from-slate-400 to-slate-500'}`}>
          {outcome.passed ? <PartyPopper className="h-11 w-11 text-white" /> : <Trophy className="h-11 w-11 text-white" />}
        </motion.div>
        <h1 className="text-2xl font-extrabold mb-1">
          {outcome.passed ? (outcome.advanced && nextLevel ? `${nextLevel.title}'ga o'tdingiz!` : `${title} tugallandi!`) : "Bu safar o'tmadi"}
        </h1>
        <p className="text-muted-foreground mb-5">Natija: {score} / {questions.length} ({pct}%). O'tish uchun {LEVEL_TEST.passPercent}% kerak.</p>
        {outcome.passed && outcome.next_soon && nextLevel && (
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm mb-5">{nextLevel.title} darajasi tez orada ochiladi. Hozircha takrorlash orqali bilimingizni mustahkamlang.</div>
        )}
        {!outcome.passed && (
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-left mb-5">
            Xatolarni ko'rib chiqing — keyin testni istagancha qayta topshirishingiz mumkin.
          </div>
        )}
        <MistakeReview questions={questions} answers={answers} />
        <div className="space-y-2.5 mt-6">
          {outcome.passed && (
            <Button size="lg" variant="outline" className="w-full gap-2" onClick={() => setCertificate(true)}><Award className="h-4 w-4" />Sertifikatni olish</Button>
          )}
          {!outcome.passed && (
            <Button size="lg" variant="glow" className="w-full gap-2" onClick={() => { setOutcome(null); setQuestions(null); setAnswers([]); setI(0); }}><RotateCcw className="h-4 w-4" />Qayta urinish</Button>
          )}
          <Button size="lg" variant={outcome.passed ? 'glow' : 'outline'} className="w-full" onClick={() => navigate('/learn')}>
            {outcome.passed && outcome.advanced && nextLevel ? `${nextLevel.title} darslariga o'tish` : "Kursga qaytish"}
          </Button>
        </div>
        {certificate && <CertificateDialog levelId={level} score={score} total={questions.length} onClose={() => setCertificate(false)} />}
      </div>,
    );
  }

  if (questions) {
    return shell(
      <>
        <p className="text-xs text-muted-foreground mb-4">Savol {i + 1} / {questions.length} · javoblar oxirida ko'rsatiladi</p>
        <ExerciseView key={i} ex={questions[i]} mode="test" onDone={(c) => {
          const all = [...answers, c];
          setAnswers(all);
          if (i + 1 >= questions.length) void submit(all); else setI(i + 1);
        }} />
        {error && <p className="text-sm text-destructive mt-4">{error}</p>}
      </>,
      { progress: i / questions.length, onExit: () => { if (window.confirm('Testdan chiqasizmi? Bu urinish hisoblanmaydi.')) navigate('/learn'); } },
    );
  }

  return shell(
    <div className="py-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{title} · {levelOf(level).cefr}</p>
      <h1 className="text-3xl font-extrabold mb-3 flex items-center gap-3"><Trophy className="h-8 w-8 text-primary" />{title} yakuniy testi</h1>
      <p className="text-muted-foreground mb-5">
        {nextLevel?.available
          ? `Barcha ${title} darslarini o'tmasdan ham testni topshirishingiz mumkin. O'tsangiz, ${nextLevel.title} darslari ochiladi.`
          : `Bilimingizni sinab ko'ring. ${nextLevel ? `${nextLevel.title} ochilganda shu test sizni keyingi darajaga olib o'tadi.` : ''}`}
      </p>
      <ul className="glass-card p-5 space-y-2.5 text-sm mb-6">
        <li>📝 <b>{LEVEL_TEST.questions} ta savol</b> — {title}ning barcha bosqichlaridan</li>
        <li>🎯 O'tish uchun kamida <b>{LEVEL_TEST.passPercent}%</b> ({Math.ceil(LEVEL_TEST.questions * LEVEL_TEST.passPercent / 100)} ta to'g'ri javob)</li>
        <li>🔁 Urinishlar soni cheklanmagan</li>
        <li>🔊 Eshitish savollari bor — quloqchin yoki ovoz yoqilgan bo'lsin</li>
      </ul>
      {error && <p className="text-sm text-destructive mb-3">{error}</p>}
      <Button size="lg" variant="glow" className="w-full" disabled={!units} onClick={() => units && setQuestions(placementQuestions(units, LEVEL_TEST.questions))}>Testni boshlash</Button>
      <Button variant="ghost" className="w-full mt-2 gap-2" onClick={() => navigate('/learn')}><ArrowLeft className="h-4 w-4" />Orqaga</Button>
    </div>,
  );
}

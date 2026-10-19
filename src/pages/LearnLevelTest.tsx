import { useEffect, useMemo, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Loader2, PartyPopper, RotateCcw, Trophy } from 'lucide-react';
import { useT } from '@/i18n';
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
import { BeginnerExam, ElementaryExam, IntermediateExam, PreIntermediateExam } from './LearnBeginnerExam';

interface Outcome { passed: boolean; advanced: boolean; next_level: string | null; next_soon: boolean; xp: number }

/** Final test of a level: always open, 20 questions from all of its units, 70% to pass and move on. Retake as often as needed. */
export default function LearnLevelTest() {
  const { level } = useParams();
  return level === 'beginner' ? <BeginnerExam /> : level === 'a1' ? <ElementaryExam /> : level === 'a2' ? <PreIntermediateExam /> : level === 'b1' ? <IntermediateExam /> : <GenericLevelTest />;
}

function GenericLevelTest() {
  const { t, lang } = useT();
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
    Promise.all(unitsOf(level).map((u) => loadUnit(u.id))).then(setUnits).catch(() => setError(t('learn.placement.loadError')));
  }, [level]);

  if (!level) return <Navigate to="/learn" replace />;
  const title = levelOf(level).title;
  const shell = (children: React.ReactNode, props: { progress?: number; onExit?: () => void } = {}) => (
    <TestShell title={t('learn.level.title', { level: title })} path={path} {...props}>{children}</TestShell>
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
    } catch (e) { setError(learningErrorMessage(e, lang)); }
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
          {outcome.passed ? (outcome.advanced && nextLevel ? t('learn.level.moved', { level: nextLevel.title }) : t('learn.exam.completed', { level: title })) : t('learn.unitTest.failed')}
        </h1>
        <p className="text-muted-foreground mb-5">{t('learn.unitTest.result', { score, total: questions.length, pct, need: LEVEL_TEST.passPercent })}</p>
        {outcome.passed && outcome.next_soon && nextLevel && (
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm mb-5">{t('learn.level.soon', { level: nextLevel.title })}</div>
        )}
        {!outcome.passed && (
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-left mb-5">
            {t('learn.level.reviewMistakes')}
          </div>
        )}
        <MistakeReview questions={questions} answers={answers} />
        <div className="space-y-2.5 mt-6">
          {outcome.passed && (
            <Button size="lg" variant="outline" className="w-full gap-2" onClick={() => setCertificate(true)}><Award className="h-4 w-4" />{t('learn.exam.getCertificate')}</Button>
          )}
          {!outcome.passed && (
            <Button size="lg" variant="glow" className="w-full gap-2" onClick={() => { setOutcome(null); setQuestions(null); setAnswers([]); setI(0); }}><RotateCcw className="h-4 w-4" />{t('learn.unitTest.retry')}</Button>
          )}
          <Button size="lg" variant={outcome.passed ? 'glow' : 'outline'} className="w-full" onClick={() => navigate('/learn')}>
            {outcome.passed && outcome.advanced && nextLevel ? t('learn.check.toLessons', { level: nextLevel.title }) : t('learn.exam.backToCourse')}
          </Button>
        </div>
        {certificate && <CertificateDialog levelId={level} onClose={() => setCertificate(false)} />}
      </div>,
    );
  }

  if (questions) {
    return shell(
      <>
        <p className="text-xs text-muted-foreground mb-4">{t('learn.unitTest.question', { n: i + 1, total: questions.length })}</p>
        <ExerciseView key={i} ex={questions[i]} mode="test" onDone={(c) => {
          const all = [...answers, c];
          setAnswers(all);
          if (i + 1 >= questions.length) void submit(all); else setI(i + 1);
        }} />
        {error && <p className="text-sm text-destructive mt-4">{error}</p>}
      </>,
      { progress: i / questions.length, onExit: () => { if (window.confirm(t('learn.unitTest.confirmExit'))) navigate('/learn'); } },
    );
  }

  return shell(
    <div className="py-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{title} · {levelOf(level).cefr}</p>
      <h1 className="text-3xl font-extrabold mb-3 flex items-center gap-3"><Trophy className="h-8 w-8 text-primary" />{t('learn.level.title', { level: title })}</h1>
      <p className="text-muted-foreground mb-5">
        {nextLevel?.available
          ? t('learn.level.introNext', { level: title, next: nextLevel.title })
          : `${t('learn.level.introTry')} ${nextLevel ? t('learn.level.introLater', { next: nextLevel.title }) : ''}`}
      </p>
      <ul className="glass-card p-5 space-y-2.5 text-sm mb-6">
        <li>📝 <b>{t('learn.unitTest.ruleQ', { n: LEVEL_TEST.questions })}</b> {t('learn.level.ruleQRest', { level: title })}</li>
        <li>🎯 {t('learn.unitTest.rulePassA')} <b>{LEVEL_TEST.passPercent}%</b> {t('learn.placement.correctCount', { n: Math.ceil(LEVEL_TEST.questions * LEVEL_TEST.passPercent / 100) })}</li>
        <li>🔁 {t('learn.level.ruleUnlimited')}</li>
        <li>🔊 {t('learn.level.ruleAudio')}</li>
      </ul>
      {error && <p className="text-sm text-destructive mb-3">{error}</p>}
      <Button size="lg" variant="glow" className="w-full" disabled={!units} onClick={() => units && setQuestions(placementQuestions(units, LEVEL_TEST.questions))}>{t('learn.unitTest.start')}</Button>
      <Button variant="ghost" className="w-full mt-2 gap-2" onClick={() => navigate('/learn')}><ArrowLeft className="h-4 w-4" />{t('learn.lesson.back')}</Button>
    </div>,
  );
}

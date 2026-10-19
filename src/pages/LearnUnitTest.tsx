import { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Crown, Hourglass, Loader2, RotateCcw, ShieldCheck } from 'lucide-react';
import { useT } from '@/i18n';
import { Button } from '@/components/ui/button';
import { exerciseAudioTexts } from '@/features/learn/audio-plan';
import { useLessonAudio } from '@/features/learn/useLessonAudio';
import { COURSE_UNITS, UNIT_TEST, levelOf, loadUnit, unitNo } from '@/features/learn/course';
import type { Exercise, Lesson } from '@/features/learn/types';
import { callLearning, courseMap, learningErrorMessage, useLearningState, useRefreshLearning } from '@/features/learn/api';
import { unitTestQuestions } from '@/features/learn/practice';
import { ExerciseView } from '@/features/learn/components/ExerciseView';
import { LearnPaywall } from '@/features/learn/components/LearnPaywall';
import { MistakeReview, TestShell } from '@/features/learn/components/TestShell';

interface Outcome { status: 'passed' | 'failed' | 'locked'; attempts_left?: number | null; locked_until?: string | null; xp?: number; already?: boolean }

export default function LearnUnitTest() {
  const { t, lang } = useT();
  const locale = lang === 'uz' ? 'uz-UZ' : 'en-US';
  const { unitId = '' } = useParams();
  const navigate = useNavigate();
  const { data: state, isLoading } = useLearningState();
  const refresh = useRefreshLearning();
  const unit = COURSE_UNITS.find((u) => u.id === unitId);
  const [lessons, setLessons] = useState<Lesson[] | null>(null);
  const [questions, setQuestions] = useState<Exercise[] | null>(null);
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [error, setError] = useState('');
  const audioTexts = useMemo(() => (questions ? questions.flatMap(exerciseAudioTexts) : null), [questions]);
  useLessonAudio(audioTexts, `${unitId}-${questions ? 'q' : ''}`);

  useEffect(() => { if (unit) loadUnit(unit.id).then(setLessons).catch(() => setError(t('learn.unitTest.loadError'))); }, [unit]);
  const map = useMemo(() => courseMap(state), [state]);

  if (!unit) return <Navigate to="/learn" replace />;
  if (isLoading || !lessons) return <TestShell><div className="grid place-items-center py-24"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div></TestShell>;
  if (!state?.profile) return <Navigate to="/learn" replace />;
  if (!state.access.allowed) return <TestShell><div className="py-10"><LearnPaywall access={state.access} /></div></TestShell>;

  const testState = map.unitTest.get(unit.id);
  const row = state.tests.find((t) => t.unit_id === unit.id);
  const attemptsLeft = Math.max(0, UNIT_TEST.attempts - (row?.locked_until && new Date(row.locked_until) <= new Date() ? 0 : row?.attempts ?? 0));

  const submit = async (all: boolean[]) => {
    const score = all.filter(Boolean).length;
    try {
      const r = await callLearning<Outcome>('learning_submit_unit_test', { _unit: unit.id, _score: score, _total: all.length });
      setOutcome(r);
      await refresh();
    } catch (e) { setError(learningErrorMessage(e, lang)); }
  };

  // Result screen
  if (outcome && questions) {
    const score = answers.filter(Boolean).length;
    const pct = Math.round((score / questions.length) * 100);
    const passed = outcome.status === 'passed';
    const next = COURSE_UNITS[unit.n];
    return (
      <TestShell>
        <div className="text-center py-6">
          <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}
            className={`mx-auto mb-4 w-24 h-24 rounded-[30px] rotate-45 grid place-items-center ${passed ? 'bg-gradient-to-br from-amber-300 to-yellow-500' : 'bg-gradient-to-br from-slate-400 to-slate-500'}`}>
            {passed ? <Crown className="h-11 w-11 text-white -rotate-45" /> : <Hourglass className="h-10 w-10 text-white -rotate-45" />}
          </motion.div>
          <h1 className="text-2xl font-extrabold mb-1">{passed ? t('learn.unitTest.passed', { n: unitNo(unit) }) : t('learn.unitTest.failed')}</h1>
          <p className="text-muted-foreground mb-5">{t('learn.unitTest.result', { score, total: questions.length, pct, need: UNIT_TEST.passPercent })}</p>
          {!passed && (
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-left mb-5">
              {outcome.status === 'locked' && outcome.locked_until
                ? <>{t('learn.unitTest.bothUsed')} <b>{t('learn.unitTest.reviewUnit')}</b> {t('learn.unitTest.reopens', { date: new Date(outcome.locked_until).toLocaleString(locale) })}</>
                : <>{t('learn.unitTest.moreA')} <b>{t('learn.unitTest.moreB', { n: outcome.attempts_left ?? 0 })}</b> {t('learn.unitTest.moreC')}</>}
            </div>
          )}
          <MistakeReview questions={questions} answers={answers} />
          <div className="space-y-2.5 mt-6">
            {passed && next && <Button size="lg" variant="glow" className="w-full" onClick={() => navigate('/learn')}>{t('learn.unitTest.toNext', { n: unitNo(next), title: next.titleUz })}</Button>}
            {passed && !next && <p className="font-semibold text-primary">{t('learn.unitTest.allDone', { level: levelOf(unit.level).title })}</p>}
            {!passed && outcome.status === 'failed' && <Button size="lg" variant="glow" className="w-full gap-2" onClick={() => { setOutcome(null); setQuestions(null); setAnswers([]); setI(0); }}><RotateCcw className="h-4 w-4" />{t('learn.unitTest.retry')}</Button>}
            <Button size="lg" variant="outline" className="w-full gap-2" onClick={() => navigate('/learn')}><ArrowLeft className="h-4 w-4" />{t('learn.unitTest.toMap')}</Button>
          </div>
        </div>
      </TestShell>
    );
  }

  // In progress
  if (questions) {
    return (
      <TestShell onExit={() => { if (window.confirm(t('learn.unitTest.confirmExit'))) navigate('/learn'); }} progress={i / questions.length}>
        <p className="text-xs text-muted-foreground mb-4">{t('learn.unitTest.question', { n: i + 1, total: questions.length })}</p>
        <ExerciseView key={i} ex={questions[i]} mode="test" onDone={(c) => {
          const all = [...answers, c];
          setAnswers(all);
          if (i + 1 >= questions.length) void submit(all); else setI(i + 1);
        }} />
        {error && <p className="text-sm text-destructive mt-4">{error}</p>}
      </TestShell>
    );
  }

  // Intro / gate
  return (
    <TestShell>
      <div className="py-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{t('learn.lesson.unitTitle', { n: unit.n, title: unit.titleUz })}</p>
        <h1 className="text-3xl font-extrabold mb-3 flex items-center gap-3"><ShieldCheck className="h-8 w-8 text-primary" />{t('learn.unitTest.title')}</h1>
        {testState === 'passed' ? (
          <p className="mb-6">{t('learn.unitTest.alreadyPassed')} ✅ ({row?.best_score}/{row?.best_total}).</p>
        ) : testState === 'locked' ? (
          <p className="mb-6">{t('learn.unitTest.notOpen')}</p>
        ) : testState === 'cooldown' && row?.locked_until ? (
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 mb-6">
            <p className="font-semibold mb-1">{t('learn.unitTest.cooldownTitle')}</p>
            <p className="text-sm">{t('learn.unitTest.cooldownA')} <b>{new Date(row.locked_until).toLocaleString(locale)}</b> {t('learn.unitTest.cooldownB')}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {unit.lessons.map((l) => <Link key={l.id} to={`/learn/lesson/${l.id}`} className="text-xs rounded-full bg-background border border-border px-3 py-1 hover:border-primary">{l.titleUz}</Link>)}
            </div>
          </div>
        ) : (
          <>
            <ul className="glass-card p-5 space-y-2.5 text-sm mb-6">
              <li>📝 <b>{t('learn.unitTest.ruleQ', { n: UNIT_TEST.questions })}</b> {t('learn.unitTest.ruleQRest')}</li>
              <li>🎯 {t('learn.unitTest.rulePassA')} <b>{UNIT_TEST.passPercent}%</b> {t('learn.unitTest.rulePassB')}</li>
              <li>🔁 <b>{t('learn.unitTest.ruleAttempts', { n: UNIT_TEST.attempts })}</b>; {t('learn.unitTest.ruleLock', { hours: UNIT_TEST.lockHours })}</li>
              <li>🔓 {t('learn.unitTest.ruleUnlock')}</li>
            </ul>
            {testState === 'optional' && (
              <p className="rounded-xl border border-violet-500/30 bg-violet-500/10 p-3 text-sm mb-4">
                ⚡ {t('learn.unitTest.skipA')} <b>{t('learn.unitTest.skipB')}</b> {t('learn.unitTest.skipC')}
              </p>
            )}
            <p className="text-sm mb-4">{t('learn.unitTest.attemptsLeft')} <b>{attemptsLeft}</b></p>
            <Button size="lg" variant="glow" className="w-full" onClick={() => setQuestions(unitTestQuestions(lessons, UNIT_TEST.questions, Math.random, lang))}>{t('learn.unitTest.start')}</Button>
          </>
        )}
        <Button variant="ghost" className="w-full mt-3 gap-2" onClick={() => navigate('/learn')}><ArrowLeft className="h-4 w-4" />{t('learn.unitTest.toMap')}</Button>
      </div>
    </TestShell>
  );
}

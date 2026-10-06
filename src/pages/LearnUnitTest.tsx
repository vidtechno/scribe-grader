import { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Crown, Hourglass, Loader2, RotateCcw, ShieldCheck, X, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { BEGINNER_UNITS, UNIT_TEST, loadUnit } from '@/features/learn/course';
import type { Exercise, Lesson } from '@/features/learn/types';
import { callLearning, courseMap, learningErrorMessage, useLearningState, useRefreshLearning } from '@/features/learn/api';
import { unitTestQuestions } from '@/features/learn/practice';
import { ExerciseView } from '@/features/learn/components/ExerciseView';
import { LearnPaywall } from '@/features/learn/components/LearnPaywall';
import { Md } from '@/features/learn/components/Md';

interface Outcome { status: 'passed' | 'failed' | 'locked'; attempts_left?: number | null; locked_until?: string | null; xp?: number; already?: boolean }

export default function LearnUnitTest() {
  const { unitId = '' } = useParams();
  const navigate = useNavigate();
  const { data: state, isLoading } = useLearningState();
  const refresh = useRefreshLearning();
  const unit = BEGINNER_UNITS.find((u) => u.id === unitId);
  const [lessons, setLessons] = useState<Lesson[] | null>(null);
  const [questions, setQuestions] = useState<Exercise[] | null>(null);
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [error, setError] = useState('');

  useEffect(() => { if (unit) loadUnit(unit.id).then(setLessons).catch(() => setError("Test yuklanmadi.")); }, [unit]);
  const map = useMemo(() => courseMap(state), [state]);

  if (!unit) return <Navigate to="/learn" replace />;
  if (isLoading || !lessons) return <Shell><div className="grid place-items-center py-24"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div></Shell>;
  if (!state?.profile) return <Navigate to="/learn" replace />;
  if (!state.access.allowed) return <Shell><div className="py-10"><LearnPaywall access={state.access} /></div></Shell>;

  const testState = map.unitTest.get(unit.id);
  const row = state.tests.find((t) => t.unit_id === unit.id);
  const attemptsLeft = Math.max(0, UNIT_TEST.attempts - (row?.locked_until && new Date(row.locked_until) <= new Date() ? 0 : row?.attempts ?? 0));

  const submit = async (all: boolean[]) => {
    const score = all.filter(Boolean).length;
    try {
      const r = await callLearning<Outcome>('learning_submit_unit_test', { _unit: unit.id, _score: score, _total: all.length });
      setOutcome(r);
      await refresh();
    } catch (e) { setError(learningErrorMessage(e)); }
  };

  // Result screen
  if (outcome && questions) {
    const score = answers.filter(Boolean).length;
    const pct = Math.round((score / questions.length) * 100);
    const passed = outcome.status === 'passed';
    const next = BEGINNER_UNITS[unit.n];
    return (
      <Shell>
        <div className="text-center py-6">
          <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}
            className={`mx-auto mb-4 w-24 h-24 rounded-[30px] rotate-45 grid place-items-center ${passed ? 'bg-gradient-to-br from-amber-300 to-yellow-500' : 'bg-gradient-to-br from-slate-400 to-slate-500'}`}>
            {passed ? <Crown className="h-11 w-11 text-white -rotate-45" /> : <Hourglass className="h-10 w-10 text-white -rotate-45" />}
          </motion.div>
          <h1 className="text-2xl font-extrabold mb-1">{passed ? `${unit.n}-bosqich yakunlandi!` : 'Bu safar o\'tmadi'}</h1>
          <p className="text-muted-foreground mb-5">Natija: {score} / {questions.length} ({pct}%). O'tish uchun {UNIT_TEST.passPercent}% kerak.</p>
          {!passed && (
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-left mb-5">
              {outcome.status === 'locked' && outcome.locked_until
                ? <>Ikkala urinish ham ishlatildi. <b>Bosqich darslarini qayta ko'rib chiqing</b> — test {new Date(outcome.locked_until).toLocaleString('uz-UZ')} da yana ochiladi (2 ta yangi urinish bilan).</>
                : <>Yana <b>{outcome.attempts_left ?? 0} ta urinish</b> qoldi. Pastdagi xatolarni ko'rib chiqing va mavzularni takrorlang, keyin qayta urinib ko'ring.</>}
            </div>
          )}
          <MistakeReview questions={questions} answers={answers} />
          <div className="space-y-2.5 mt-6">
            {passed && next && <Button size="lg" variant="glow" className="w-full" onClick={() => navigate('/learn')}>{next.n}-bosqichga o'tish: {next.titleUz}</Button>}
            {passed && !next && <p className="font-semibold text-primary">🎉 Beginner darajasini to'liq tugatdingiz! Keyingi daraja tez orada.</p>}
            {!passed && outcome.status === 'failed' && <Button size="lg" variant="glow" className="w-full gap-2" onClick={() => { setOutcome(null); setQuestions(null); setAnswers([]); setI(0); }}><RotateCcw className="h-4 w-4" />Qayta urinish</Button>}
            <Button size="lg" variant="outline" className="w-full gap-2" onClick={() => navigate('/learn')}><ArrowLeft className="h-4 w-4" />Yo'l xaritasiga</Button>
          </div>
        </div>
      </Shell>
    );
  }

  // In progress
  if (questions) {
    return (
      <Shell onExit={() => { if (window.confirm('Testdan chiqasizmi? Bu urinish hisoblanmaydi.')) navigate('/learn'); }} progress={i / questions.length}>
        <p className="text-xs text-muted-foreground mb-4">Savol {i + 1} / {questions.length} · javoblar oxirida ko'rsatiladi</p>
        <ExerciseView key={i} ex={questions[i]} mode="test" onDone={(c) => {
          const all = [...answers, c];
          setAnswers(all);
          if (i + 1 >= questions.length) void submit(all); else setI(i + 1);
        }} />
        {error && <p className="text-sm text-destructive mt-4">{error}</p>}
      </Shell>
    );
  }

  // Intro / gate
  return (
    <Shell>
      <div className="py-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{unit.n}-bosqich · {unit.titleUz}</p>
        <h1 className="text-3xl font-extrabold mb-3 flex items-center gap-3"><ShieldCheck className="h-8 w-8 text-primary" />Bosqich testi</h1>
        {testState === 'passed' ? (
          <p className="mb-6">Bu bosqich testini allaqachon topshirgansiz ✅ ({row?.best_score}/{row?.best_total}).</p>
        ) : testState === 'locked' ? (
          <p className="mb-6">Test bosqichning barcha {unit.lessons.length} ta darsini tugatgandan keyin ochiladi.</p>
        ) : testState === 'cooldown' && row?.locked_until ? (
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 mb-6">
            <p className="font-semibold mb-1">Test vaqtincha yopiq</p>
            <p className="text-sm">Ikki urinishda ham o'tilmadi. Bu vaqtda bosqich darslarini takrorlang — test <b>{new Date(row.locked_until).toLocaleString('uz-UZ')}</b> da ochiladi.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {unit.lessons.map((l) => <Link key={l.id} to={`/learn/lesson/${l.id}`} className="text-xs rounded-full bg-background border border-border px-3 py-1 hover:border-primary">{l.titleUz}</Link>)}
            </div>
          </div>
        ) : (
          <>
            <ul className="glass-card p-5 space-y-2.5 text-sm mb-6">
              <li>📝 <b>{UNIT_TEST.questions} ta savol</b> — bosqichdagi barcha darslar va so'zlardan</li>
              <li>🎯 O'tish uchun kamida <b>{UNIT_TEST.passPercent}%</b> to'g'ri javob</li>
              <li>🔁 <b>{UNIT_TEST.attempts} ta urinish</b>; ikkalasida ham o'tilmasa, test {UNIT_TEST.lockHours} soatga yopiladi — bu vaqt takrorlash uchun</li>
              <li>🔓 Testdan o'tsangiz keyingi bosqich ochiladi</li>
            </ul>
            <p className="text-sm mb-4">Qolgan urinishlar: <b>{attemptsLeft}</b></p>
            <Button size="lg" variant="glow" className="w-full" onClick={() => setQuestions(unitTestQuestions(lessons, UNIT_TEST.questions))}>Testni boshlash</Button>
          </>
        )}
        <Button variant="ghost" className="w-full mt-3 gap-2" onClick={() => navigate('/learn')}><ArrowLeft className="h-4 w-4" />Yo'l xaritasiga</Button>
      </div>
    </Shell>
  );
}

function Shell({ children, onExit, progress }: { children: React.ReactNode; onExit?: () => void; progress?: number }) {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Bosqich testi" description="Beginner bosqich testi" path="/learn/test" noindex />
      {onExit && (
        <header className="fixed top-0 inset-x-0 z-40 bg-background/90 backdrop-blur border-b border-border">
          <div className="max-w-2xl mx-auto px-4 h-14 flex items-center gap-3">
            <button type="button" onClick={onExit} aria-label="Chiqish" className="h-9 w-9 rounded-full grid place-items-center hover:bg-secondary"><X className="h-5 w-5" /></button>
            <div className="h-2.5 flex-1 rounded-full bg-secondary overflow-hidden"><div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all" style={{ width: `${(progress ?? 0) * 100}%` }} /></div>
          </div>
        </header>
      )}
      <main className="max-w-2xl mx-auto px-4 pt-20 pb-24">{children}</main>
    </div>
  );
}

function MistakeReview({ questions, answers }: { questions: Exercise[]; answers: boolean[] }) {
  const wrong = questions.map((q, i) => ({ q, ok: answers[i] })).filter((x) => !x.ok);
  if (!wrong.length) return null;
  return (
    <div className="text-left glass-card p-4">
      <p className="font-semibold mb-3">Xato qilingan savollar ({wrong.length})</p>
      <ul className="space-y-3 text-sm">
        {wrong.map(({ q }, i) => (
          <li key={i} className="flex gap-2.5"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /><span className="min-w-0"><QuestionText q={q} /></span></li>
        ))}
      </ul>
    </div>
  );
}

function QuestionText({ q }: { q: Exercise }) {
  switch (q.k) {
    case 'choice': return <><Md text={q.q} /> → <b>{q.opts[q.a]}</b></>;
    case 'listen': return <>Tinglash: <b>{q.say}</b></>;
    case 'tf': return <><Md text={q.q} /> → <b>{q.a ? "To'g'ri" : "Noto'g'ri"}</b></>;
    case 'fill': return <>{q.q.replace('___', `[${q.a[0]}]`)}</>;
    case 'translate': return <>{q.uz} → <b>{q.a[0]}</b></>;
    case 'order': return <>{q.uz} → <b>{q.words.join(' ')}</b></>;
    case 'match': return <>Juftliklar: {q.pairs.map((p) => `${p[0]} = ${p[1]}`).join(', ')}</>;
    case 'speak': return <>{q.say}</>;
  }
}

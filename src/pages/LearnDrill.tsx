import { useEffect, useMemo, useRef, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Loader2, RotateCcw, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { ALL_LESSONS, LESSON_PASS_PERCENT, drillIds, lessonOfDrill, loadDrill } from '@/features/learn/course';
import type { Drill } from '@/features/learn/types';
import { callLearning, courseMap, learningErrorMessage, useLearningState, useRefreshLearning } from '@/features/learn/api';
import { exerciseAudioTexts } from '@/features/learn/audio-plan';
import { useLessonAudio } from '@/features/learn/useLessonAudio';
import { ExerciseView } from '@/features/learn/components/ExerciseView';
import { LearnPaywall } from '@/features/learn/components/LearnPaywall';
import { MistakeReview, TestShell } from '@/features/learn/components/TestShell';

interface Saved { passed: boolean; stars: number; xp: number; first: boolean }

/** A practice game after a hard lesson: exercises only, one try each, 70% to pass. Required before the next lesson. */
export default function LearnDrill() {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const { data: state, isLoading } = useLearningState();
  const refresh = useRefreshLearning();
  const [drill, setDrill] = useState<Drill | null>(null);
  const [failed, setFailed] = useState(false);
  const [round, setRound] = useState(0);
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [saved, setSaved] = useState<Saved | null>(null);
  const [error, setError] = useState('');
  const startedAt = useRef(Date.now());
  const sending = useRef(false);
  const lessonId = lessonOfDrill(id);
  const lesson = ALL_LESSONS.find((l) => l.id === lessonId);
  const audioTexts = useMemo(() => (drill ? drill.exercises.flatMap(exerciseAudioTexts) : null), [drill]);
  useLessonAudio(audioTexts, `${id}-${round}`);

  useEffect(() => { loadDrill(id).then(setDrill).catch(() => setFailed(true)); }, [id]);
  const map = useMemo(() => courseMap(state), [state]);

  const total = drill?.exercises.length ?? 0;
  const done = answers.length === total && total > 0;
  useEffect(() => {
    if (!done || saved || sending.current || !drill) return;
    sending.current = true;
    callLearning<Saved>('learning_complete_drill', {
      _drill: id, _score: answers.filter(Boolean).length, _total: total, _seconds: Math.round((Date.now() - startedAt.current) / 1000),
    }).then(async (r) => { setSaved(r); await refresh(); })
      .catch((e) => setError(learningErrorMessage(e)))
      .finally(() => { sending.current = false; });
  }, [done, saved, drill, id, answers, total, refresh]);

  if (!lesson || failed) return <Navigate to="/learn" replace />;
  if (isLoading || !drill) return <TestShell><div className="grid place-items-center py-24"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div></TestShell>;
  if (!state?.profile) return <Navigate to="/learn" replace />;
  if (!state.access.allowed) return <TestShell><div className="py-10"><LearnPaywall access={state.access} /></div></TestShell>;
  if (map.drillState.get(id) === 'locked' || map.drillState.get(id) === undefined) return <Navigate to="/learn" replace />;

  const retry = () => { setAnswers([]); setI(0); setSaved(null); setError(''); setRound((r) => r + 1); startedAt.current = Date.now(); };

  if (done) {
    const score = answers.filter(Boolean).length;
    const pct = Math.round((score / total) * 100);
    const passed = pct >= LESSON_PASS_PERCENT;
    const ids = drillIds(lessonId);
    const nextDrillId = ids[ids.indexOf(id) + 1];
    return (
      <TestShell title="Mashq">
        <div className="text-center py-8">
          <Zap className={`h-14 w-14 mx-auto mb-3 ${passed ? 'text-amber-500' : 'text-muted-foreground'}`} />
          <h1 className="text-2xl font-extrabold mb-1">{passed ? 'Mashq tugadi!' : "Yana bir urinib ko'ring"}</h1>
          <p className="text-muted-foreground mb-3">{score} / {total} · {pct}%{saved?.first && saved.xp ? ` · +${saved.xp} XP` : ''}</p>
          <div className="flex justify-center gap-1 mb-5">
            {[1, 2, 3].map((n) => <Star key={n} className={`h-7 w-7 ${n <= (saved?.stars ?? (pct >= 90 ? 3 : pct >= 80 ? 2 : passed ? 1 : 0)) ? 'fill-amber-400 text-amber-400' : 'text-border'}`} />)}
          </div>
          {!passed && <p className="text-sm text-muted-foreground mb-5">Keyingi darsga o'tish uchun kamida {LESSON_PASS_PERCENT}% kerak. Xatolaringizni ko'rib chiqib, qayta urinib ko'ring.</p>}
          {error && <p className="text-sm text-destructive mb-3">{error}</p>}
          <div className="text-left mb-6"><MistakeReview questions={drill.exercises} answers={answers} /></div>
          <div className="space-y-2.5">
            {passed ? (
              nextDrillId
                ? <Button size="lg" variant="glow" className="w-full" disabled={!saved && !error} onClick={() => navigate(`/learn/drill/${nextDrillId}`)}>Keyingi mashq</Button>
                : <Button size="lg" variant="glow" className="w-full" disabled={!saved && !error} onClick={() => navigate('/learn')}>Davom etish</Button>
            ) : (
              <Button size="lg" variant="glow" className="w-full gap-2" onClick={retry}><RotateCcw className="h-4 w-4" />Qayta urinish</Button>
            )}
            <Button size="lg" variant="outline" className="w-full gap-2" onClick={() => navigate('/learn')}><ArrowLeft className="h-4 w-4" />Yo'l xaritasiga</Button>
          </div>
        </div>
      </TestShell>
    );
  }

  return (
    <TestShell title="Mashq">
      <SEOHead title={`Mashq: ${drill.titleUz}`} path={`/learn/drill/${id}`} noindex />
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary flex items-center gap-1.5"><Zap className="h-3.5 w-3.5" />Mashq · {lesson.titleUz}</p>
        <h1 className="text-xl font-extrabold">{drill.titleUz}</h1>
        <p className="text-sm text-muted-foreground">{drill.goal}</p>
        <div className="h-2 rounded-full bg-secondary overflow-hidden mt-3"><div className="h-full bg-primary transition-all" style={{ width: `${(i / total) * 100}%` }} /></div>
      </div>
      <ExerciseView key={`${round}-${i}`} ex={drill.exercises[i]} mode="practice" onDone={(ok) => { setAnswers((a) => [...a, ok]); setI((n) => n + 1); }} />
    </TestShell>
  );
}

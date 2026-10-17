import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Headphones, Lock, Pause, Play } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { LoadingScreen } from '@/components/LoadingScreen';
import { PricingModal } from '@/components/PricingModal';
import { SEOHead } from '@/components/SEOHead';
import { cn } from '@/lib/utils';
import { DIFFICULTY_HINT, LISTENING_TESTS, listeningAudioUrl, loadListeningTest } from '@/features/ielts/registry';
import type { ListeningTest } from '@/features/ielts/types';
import { bandFor } from '@/features/ielts/bands';
import { flatten, score, type Answer } from '@/features/ielts/score';
import { GroupView } from '@/features/ielts/components/GroupView';
import { ResultPanel } from '@/features/ielts/components/ResultPanel';
import { saveAttempt } from '@/features/ielts/useAttempts';
import { saveMockSection, useMockId } from '@/features/ielts/mock';
import { toast } from 'sonner';

const mmss = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

/** One recording per section. Exam mode: play once, no pause, no seeking (like the real test). Practice mode: full controls. */
function SectionPlayer({ src, exam, played, onStart }: { src: string; exam: boolean; played: boolean; onStart: () => void }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [dur, setDur] = useState(0);
  const [error, setError] = useState(false);
  useEffect(() => { setPlaying(false); setTime(0); setError(false); }, [src]);
  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    if (a.paused) { void a.play().then(() => onStart()).catch(() => setError(true)); } else if (!exam) a.pause();
  };
  const finished = exam && played && !playing;
  return (
    <div className="glass-card p-4 mb-4 flex items-center gap-3">
      <audio ref={ref} src={src} preload="auto" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)} onLoadedMetadata={(e) => setDur(e.currentTarget.duration)} onError={() => setError(true)} />
      <Button size="icon" variant="glow" onClick={toggle} disabled={finished || error} aria-label={playing ? 'Pause' : 'Play'} className="shrink-0 rounded-full h-12 w-12">
        {playing && !exam ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </Button>
      <div className="flex-1 min-w-0">
        <input type="range" min={0} max={dur || 1} step={0.1} value={time} disabled={exam} aria-label="Audio position"
          onChange={(e) => { if (ref.current) ref.current.currentTime = Number(e.target.value); }} className="w-full accent-[hsl(var(--primary))] disabled:opacity-70" />
        <div className="flex justify-between text-xs text-muted-foreground tabular-nums"><span>{mmss(time)}</span><span>{dur ? mmss(dur) : '--:--'}</span></div>
      </div>
      <p className="text-xs text-muted-foreground w-28 hidden sm:block">
        {error ? 'Audio could not be loaded.' : exam ? (finished ? 'You can only hear it once.' : playing ? 'Playing…' : 'Plays once.') : 'Practice: replay and rewind freely.'}
      </p>
    </div>
  );
}

export default function ListeningTestPage() {
  const { id = '' } = useParams<{ id: string }>();
  const { isIelts } = useSubscription();
  const navigate = useNavigate();
  const mockId = useMockId();
  const autoStarted = useRef(false);
  const meta = LISTENING_TESTS.find((t) => t.id === id);
  const [test, setTest] = useState<ListeningTest | null | undefined>(undefined);
  const [stage, setStage] = useState<'intro' | 'run' | 'done'>('intro');
  const [exam, setExam] = useState(true);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [section, setSection] = useState(0);
  const [played, setPlayed] = useState<boolean[]>([false, false, false, false]);
  const [showPricing, setShowPricing] = useState(false);
  const startedAt = useRef(0);
  const saved = useRef(false);

  useEffect(() => { let off = false; void loadListeningTest(id).then((t) => { if (!off) setTest(t); }); return () => { off = true; }; }, [id]);
  const locked = !!meta && !meta.free && !isIelts;
  const starts = useMemo(() => {
    if (!test) return [];
    let n = 1;
    return test.sections.map((p) => p.groups.map((g) => { const s = n; n += g.items.length; return s; }));
  }, [test]);

  const finish = useCallback(() => {
    if (!test) return;
    setStage('done');
    if (saved.current) return;
    saved.current = true;
    const r = score(test.sections, answers);
    void saveAttempt({ skill: 'listening', testId: test.id, mode: 'full', part: null, correct: r.correct, total: r.total, band: bandFor('listening', r.correct, r.total), byKind: r.byKind, seconds: (Date.now() - startedAt.current) / 1000 });
    if (mockId) {
      void saveMockSection(mockId, 'listening', test.id, { correct: r.correct, total: r.total, band: bandFor('listening', r.correct, r.total), byKind: r.byKind }).then((ok) => {
        if (!ok) toast.error('Could not save your Listening result. Open the mock test again to continue.');
        navigate(`/mock-test/exam/${mockId}`, { replace: true });
      });
    }
  }, [test, answers, mockId, navigate]);

  // In a mock test the exam starts at once, in exam mode (each recording plays once).
  useEffect(() => {
    if (mockId && test && stage === 'intro' && !autoStarted.current && (!meta || meta.free || isIelts)) {
      autoStarted.current = true;
      setExam(true); setAnswers({}); setPlayed([false, false, false, false]); setSection(0); saved.current = false; startedAt.current = Date.now(); setStage('run');
    }
  }, [mockId, test, stage, meta, isIelts]);

  if (test === undefined) return <LoadingScreen />;
  if (!test || !meta) return <div className="min-h-screen grid place-items-center"><Link to="/listening"><Button variant="outline">Test not found</Button></Link></div>;

  const all = flatten(test.sections);
  const answered = (n: number) => answers[n] !== undefined && answers[n] !== '';

  if (stage === 'done' && mockId) return <LoadingScreen />;

  if (stage === 'done') {
    const parts = test.sections.map((s) => ({
      title: s.title,
      groups: s.groups,
      extra: (
        <details className="mb-4 rounded-lg border border-border p-3 text-sm">
          <summary className="cursor-pointer font-semibold">Transcript</summary>
          <div className="mt-2 space-y-1.5">
            {s.lines.map((l, i) => <p key={i}><span className="text-xs font-semibold uppercase text-muted-foreground mr-1.5">{l.voice}</span>{l.text}</p>)}
          </div>
        </details>
      ),
    }));
    const r = score(test.sections, answers);
    return (
      <div className="min-h-screen bg-background pb-24 md:pb-0">
        <SEOHead title={`${test.title} result`} description="IELTS Listening practice result." path={`/listening/${test.id}`} noindex />
        <Navbar />
        <main className="pt-24 pb-12 px-4 max-w-4xl mx-auto">
          <ResultPanel skill="listening" parts={parts} answers={answers} band={bandFor('listening', r.correct, r.total)} onRetry={() => { setStage('intro'); }} backTo="/listening" />
        </main>
      </div>
    );
  }

  if (stage === 'intro') {
    return (
      <div className="min-h-screen bg-background pb-24 md:pb-0">
        <SEOHead title={test.title} description="IELTS Listening practice test with British voices." path={`/listening/${test.id}`} noindex />
        <Navbar />
        <main className="pt-24 pb-12 px-4 max-w-2xl mx-auto">
          <Link to="/listening" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="h-4 w-4" />All listening tests</Link>
          <div className="glass-card p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">{test.title} · {meta.difficulty} <span className="normal-case tracking-normal text-muted-foreground">({DIFFICULTY_HINT[meta.difficulty]})</span></p>
            <h1 className="text-2xl font-bold mb-2">{meta.name}</h1>
            <p className="text-sm text-muted-foreground mb-4">{meta.blurb}</p>
            <ul className="mb-5 space-y-1.5 text-sm">{test.sections.map((s, i) => <li key={i} className="flex gap-2"><span className="text-primary font-semibold shrink-0">Section {i + 1}</span><span className="text-muted-foreground">{s.title.replace(/^Section \d+:\s*/, '')}</span></li>)}</ul>
            <ul className="text-sm space-y-1.5 mb-5 list-disc pl-5">
              <li>4 sections, 40 questions, about 30 minutes of audio — like the real IELTS Listening.</li>
              <li>Section 1: everyday conversation · 2: talk on a social topic · 3: academic discussion · 4: university lecture.</li>
              <li>Use headphones in a quiet place. Read the questions before each recording starts.</li>
            </ul>
            {locked ? (
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
                <p className="flex items-center gap-2 font-semibold mb-1"><Lock className="h-4 w-4" />IELTS plan</p>
                <p className="text-muted-foreground mb-3">Tests 1–3 are free. Tests 4–5 come with the IELTS plan: unlimited Listening practice, all tests, no limits.</p>
                <Button variant="glow" onClick={() => setShowPricing(true)}>See plans</Button>
              </div>
            ) : (
              <div className="space-y-3">
                <Button variant="glow" className="w-full gap-2" onClick={() => { setExam(true); setAnswers({}); setPlayed([false, false, false, false]); setSection(0); saved.current = false; startedAt.current = Date.now(); setStage('run'); window.scrollTo(0, 0); }}><Headphones className="h-4 w-4" />Exam mode · audio plays once</Button>
                <Button variant="outline" className="w-full" onClick={() => { setExam(false); setAnswers({}); setPlayed([false, false, false, false]); setSection(0); saved.current = false; startedAt.current = Date.now(); setStage('run'); window.scrollTo(0, 0); }}>Practice mode · replay and rewind</Button>
              </div>
            )}
          </div>
        </main>
        <PricingModal open={showPricing} onOpenChange={setShowPricing} currentPlan="free" />
      </div>
    );
  }

  const sec = test.sections[section];
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead title={test.title} description="IELTS Listening practice test." path={`/listening/${test.id}`} noindex />
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-3xl mx-auto px-3 py-2 flex items-center gap-3">
          <button type="button" onClick={() => { if (confirm('Leave the test? Your answers will be lost.')) navigate(mockId ? `/mock-test/exam/${mockId}` : '/listening'); }} className="text-muted-foreground hover:text-foreground" aria-label="Leave test"><ArrowLeft className="h-5 w-5" /></button>
          <div className="min-w-0 flex-1"><p className="text-sm font-semibold truncate">{test.title}</p><p className="text-xs text-muted-foreground">{exam ? 'Exam mode' : 'Practice mode'} · Section {section + 1} of 4</p></div>
          <Button size="sm" variant="glow" onClick={() => { const un = all.length - Object.keys(answers).filter((k) => answered(Number(k))).length; if (un === 0 || confirm(`${un} question(s) unanswered. Finish the test?`)) finish(); }}>Finish</Button>
        </div>
        <div className="max-w-3xl mx-auto px-3 pb-2 flex gap-2">
          {test.sections.map((_, i) => (
            <button key={i} type="button" onClick={() => setSection(i)} className={cn('flex-1 py-1 rounded-md text-xs font-semibold border', section === i ? 'bg-primary text-primary-foreground border-primary' : 'border-border')}>Section {i + 1}</button>
          ))}
        </div>
      </header>
      <main className="flex-1 max-w-3xl w-full mx-auto px-3 py-4 pb-28">
        <h1 className="text-lg font-bold mb-1">{sec.title}</h1>
        <p className="text-sm text-muted-foreground mb-3">{sec.context}</p>
        <SectionPlayer src={listeningAudioUrl(test.id, section)} exam={exam} played={played[section]} onStart={() => setPlayed((p) => p.map((v, i) => (i === section ? true : v)))} />
        {sec.groups.map((g, gi) => (
          <GroupView key={`${section}-${gi}`} group={g} start={starts[section][gi]} answers={answers} onAnswer={(n, v) => setAnswers((a) => ({ ...a, [n]: v }))} />
        ))}
        <div className="flex justify-between mt-6">
          <Button variant="outline" disabled={section === 0} onClick={() => { setSection(section - 1); window.scrollTo(0, 0); }}>Previous section</Button>
          {section < 3 ? <Button variant="glow" onClick={() => { setSection(section + 1); window.scrollTo(0, 0); }}>Next section</Button> : <Button variant="glow" onClick={() => { const un = all.length - Object.keys(answers).filter((k) => answered(Number(k))).length; if (un === 0 || confirm(`${un} question(s) unanswered. Finish the test?`)) finish(); }}>Finish test</Button>}
        </div>
      </main>
      <nav className="fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border px-2 py-2 overflow-x-auto" aria-label="Question navigator">
        <div className="flex gap-1 max-w-3xl mx-auto min-w-max">
          {all.map((q) => (
            <button key={q.number} type="button" onClick={() => { setSection(q.part); window.setTimeout(() => document.getElementById(`q-${q.number}`)?.scrollIntoView({ block: 'center', behavior: 'smooth' }), 60); }}
              aria-label={`Question ${q.number}${answered(q.number) ? ', answered' : ''}`}
              className={cn('h-7 min-w-7 px-1 rounded text-[11px] font-semibold border', answered(q.number) ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground', q.part === section && !answered(q.number) && 'border-primary/50')}>{q.number}</button>
          ))}
        </div>
      </nav>
    </div>
  );
}

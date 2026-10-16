import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Highlighter, Lock, Minus, Plus } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { LoadingScreen } from '@/components/LoadingScreen';
import { PricingModal } from '@/components/PricingModal';
import { SEOHead } from '@/components/SEOHead';
import { cn } from '@/lib/utils';
import { DIFFICULTY_HINT, READING_TESTS, loadReadingTest } from '@/features/ielts/registry';
import type { ReadingTest } from '@/features/ielts/types';
import { bandFor } from '@/features/ielts/bands';
import { flatten, score, type Answer } from '@/features/ielts/score';
import { GroupView } from '@/features/ielts/components/GroupView';
import { ResultPanel } from '@/features/ielts/components/ResultPanel';
import { saveAttempt } from '@/features/ielts/useAttempts';

const FULL_SECONDS = 60 * 60;
const PART_SECONDS = 20 * 60;
const mmss = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

export default function ReadingTestPage() {
  const { id = '' } = useParams<{ id: string }>();
  const { user } = useAuth();
  const { isIelts } = useSubscription();
  const navigate = useNavigate();
  const meta = READING_TESTS.find((t) => t.id === id);
  const [test, setTest] = useState<ReadingTest | null | undefined>(undefined);
  const [stage, setStage] = useState<'intro' | 'run' | 'done'>('intro');
  const [mode, setMode] = useState<{ kind: 'full' | 'part'; part: number }>({ kind: 'full', part: 0 });
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [part, setPart] = useState(0);
  const [pane, setPane] = useState<'text' | 'questions'>('text');
  const [left, setLeft] = useState(FULL_SECONDS);
  const [showPricing, setShowPricing] = useState(false);
  const [flags, setFlags] = useState<Set<number>>(new Set());
  const [marks, setMarks] = useState<Set<string>>(new Set());
  const [marking, setMarking] = useState(false);
  const [size, setSize] = useState(1);
  const startedAt = useRef(0);
  const saved = useRef(false);

  useEffect(() => { let off = false; void loadReadingTest(id).then((t) => { if (!off) setTest(t); }); return () => { off = true; }; }, [id]);

  const locked = !!meta && !meta.free && !isIelts;
  // Question numbers run across the whole test, so each passage starts after the previous one.
  const starts = useMemo(() => {
    if (!test) return [];
    let n = 1;
    return test.passages.map((p) => p.groups.map((g) => { const s = n; n += g.items.length; return s; }));
  }, [test]);

  const finish = useCallback(() => {
    if (!test) return;
    setStage('done');
    if (saved.current) return;
    saved.current = true;
    const scored = mode.kind === 'full' ? test.passages : [test.passages[mode.part]];
    // For a single passage the answers are keyed by the passage's own numbers, so score only its questions.
    const sub = mode.kind === 'full' ? answers : Object.fromEntries(Object.entries(answers).map(([k, v]) => [Number(k) - (starts[mode.part]?.[0] ?? 1) + 1, v]));
    const r = score(scored, sub);
    void saveAttempt({ skill: 'reading', testId: test.id, mode: mode.kind, part: mode.kind === 'part' ? mode.part : null, correct: r.correct, total: r.total, band: bandFor('reading', r.correct, r.total), byKind: r.byKind, seconds: (Date.now() - startedAt.current) / 1000 });
  }, [test, mode, answers, starts]);

  useEffect(() => {
    if (stage !== 'run') return;
    const t = window.setInterval(() => setLeft((s) => s - 1), 1000);
    return () => window.clearInterval(t);
  }, [stage]);
  useEffect(() => { if (stage === 'run' && left <= 0) finish(); }, [left, stage, finish]);

  if (test === undefined) return <LoadingScreen />;
  if (!test || !meta) return <div className="min-h-screen grid place-items-center"><Link to="/reading"><Button variant="outline">Test not found</Button></Link></div>;

  const begin = (kind: 'full' | 'part', p = 0) => {
    setMode({ kind, part: p });
    setPart(p); setAnswers({}); setPane('text'); setFlags(new Set()); setMarks(new Set()); setMarking(false); saved.current = false;
    setLeft(kind === 'full' ? FULL_SECONDS : PART_SECONDS);
    startedAt.current = Date.now();
    setStage('run');
    window.scrollTo(0, 0);
  };

  const shown = mode.kind === 'full' ? test.passages : [test.passages[mode.part]];
  const all = flatten(test.passages);
  const answered = (n: number) => answers[n] !== undefined && answers[n] !== '';
  const jump = (n: number) => {
    const q = all[n - 1];
    if (!q) return;
    if (mode.kind === 'full') setPart(q.part);
    setPane('questions');
    window.setTimeout(() => document.getElementById(`q-${n}`)?.scrollIntoView({ block: 'center', behavior: 'smooth' }), 60);
  };

  if (stage === 'done') {
    // Single-passage practice is scored on that passage only.
    const parts = shown.map((p) => ({ title: p.title, groups: p.groups }));
    const offset = mode.kind === 'part' ? (starts[mode.part]?.[0] ?? 1) - 1 : 0;
    const sub = Object.fromEntries(Object.entries(answers).map(([k, v]) => [Number(k) - offset, v]));
    const r = score(parts, sub);
    return (
      <div className="min-h-screen bg-background pb-24 md:pb-0">
        <SEOHead title={`${test.title} result`} description="IELTS Reading practice result." path={`/reading/${test.id}`} noindex />
        <Navbar />
        <main className="pt-24 pb-12 px-4 max-w-4xl mx-auto">
          <ResultPanel skill="reading" parts={parts} answers={sub} band={bandFor('reading', r.correct, r.total)} onRetry={() => setStage('intro')} backTo="/reading" />
        </main>
      </div>
    );
  }

  if (stage === 'intro') {
    return (
      <div className="min-h-screen bg-background pb-24 md:pb-0">
        <SEOHead title={test.title} description="IELTS Academic Reading practice test." path={`/reading/${test.id}`} noindex />
        <Navbar />
        <main className="pt-24 pb-12 px-4 max-w-2xl mx-auto">
          <Link to="/reading" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="h-4 w-4" />All reading tests</Link>
          <div className="glass-card p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">{test.title} · {meta.difficulty} <span className="normal-case tracking-normal text-muted-foreground">({DIFFICULTY_HINT[meta.difficulty]})</span></p>
            <h1 className="text-2xl font-bold mb-2">{meta.name}</h1>
            <p className="text-sm text-muted-foreground mb-4">{meta.blurb}</p>
            <ul className="mb-5 space-y-1.5 text-sm">{test.passages.map((p, i) => <li key={i} className="flex gap-2"><span className="text-primary font-semibold shrink-0">Passage {i + 1}</span><span className="text-muted-foreground">{p.title}</span></li>)}</ul>
            <ul className="text-sm space-y-1.5 mb-6 list-disc pl-5">
              <li>3 passages, 40 questions, 60 minutes — like the real IELTS Academic Reading.</li>
              <li>No penalty for wrong answers: answer every question.</li>
              <li>At the end you get an estimated band and a review of each answer.</li>
            </ul>
            {locked ? (
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
                <p className="flex items-center gap-2 font-semibold mb-1"><Lock className="h-4 w-4" />IELTS plan</p>
                <p className="text-muted-foreground mb-3">Tests 1–3 are free. Tests 4–5 come with the IELTS plan: unlimited Reading practice, all tests, no limits.</p>
                <Button variant="glow" onClick={() => setShowPricing(true)}>See plans</Button>
              </div>
            ) : (
              <div className="space-y-3">
                <Button variant="glow" className="w-full gap-2" onClick={() => begin('full')}><Clock className="h-4 w-4" />Full test · 60 min</Button>
                <p className="text-xs text-muted-foreground text-center">or practise one passage (20 min)</p>
                <div className="grid grid-cols-3 gap-2">
                  {test.passages.map((p, i) => (
                    <Button key={i} variant="outline" className="h-auto py-2 flex-col" onClick={() => begin('part', i)}>
                      <span className="text-xs text-muted-foreground">Passage {i + 1}</span>
                      <span className="text-xs font-semibold line-clamp-2 whitespace-normal">{p.title}</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
        <PricingModal open={showPricing} onOpenChange={setShowPricing} currentPlan="free" />
        {!user && null}
      </div>
    );
  }

  const passage = test.passages[part];
  // Question labels in single-passage mode keep the real numbers (e.g. 14-26) for consistency with the full test.
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead title={test.title} description="IELTS Academic Reading practice test." path={`/reading/${test.id}`} noindex />
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-3 py-2 flex items-center gap-3">
          <button type="button" onClick={() => { if (confirm('Leave the test? Your answers will be lost.')) navigate('/reading'); }} className="text-muted-foreground hover:text-foreground" aria-label="Leave test"><ArrowLeft className="h-5 w-5" /></button>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold truncate">{test.title}</p>
            <p className="text-xs text-muted-foreground">{mode.kind === 'full' ? `Passage ${part + 1} of 3` : `Passage ${mode.part + 1}`}</p>
          </div>
          <span className={cn('font-mono text-sm font-semibold tabular-nums px-2 py-1 rounded-md', left < 300 ? 'bg-destructive/10 text-destructive' : 'bg-secondary')} aria-label="Time left"><Clock className="inline h-3.5 w-3.5 mr-1" />{mmss(Math.max(0, left))}</span>
          <Button size="sm" variant="glow" onClick={() => { const un = shown.reduce((s, p) => s + p.groups.reduce((a, g) => a + g.items.length, 0), 0) - Object.keys(answers).filter((k) => answered(Number(k))).length; if (un === 0 || confirm(`${un} question(s) unanswered. Finish the test?`)) finish(); }}>Finish</Button>
        </div>
        {mode.kind === 'full' && (
          <div className="max-w-7xl mx-auto px-3 pb-2 flex gap-2">
            {test.passages.map((_, i) => (
              <button key={i} type="button" onClick={() => setPart(i)} className={cn('px-3 py-1 rounded-md text-xs font-semibold border', part === i ? 'bg-primary text-primary-foreground border-primary' : 'border-border')}>Passage {i + 1}</button>
            ))}
          </div>
        )}
        <div className="lg:hidden max-w-7xl mx-auto px-3 pb-2 flex gap-2">
          {(['text', 'questions'] as const).map((p) => (
            <button key={p} type="button" onClick={() => setPane(p)} className={cn('flex-1 py-1.5 rounded-md text-xs font-semibold border', pane === p ? 'bg-secondary border-primary/40' : 'border-border')}>{p === 'text' ? 'Passage' : 'Questions'}</button>
          ))}
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-0 lg:gap-6 px-3 py-4 pb-28">
        <article className={cn('lg:block lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto lg:pr-3', pane === 'text' ? 'block' : 'hidden')}>
          <h1 className="text-xl font-bold mb-1">{passage.title}</h1>
          {passage.intro && <p className="text-sm text-muted-foreground italic mb-3">{passage.intro}</p>}
          <div className="flex items-center gap-2 mb-3 sticky top-0 z-10 bg-background/90 backdrop-blur py-1">
            <button type="button" onClick={() => setMarking((m) => !m)} aria-pressed={marking}
              className={cn('inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs font-semibold', marking ? 'bg-yellow-300/70 border-yellow-500 text-foreground' : 'border-border text-muted-foreground')}>
              <Highlighter className="h-3.5 w-3.5" />{marking ? 'Tap a sentence to highlight' : 'Highlighter'}
            </button>
            {marks.size > 0 && <button type="button" onClick={() => setMarks(new Set())} className="text-xs text-muted-foreground hover:text-foreground">Clear</button>}
            <span className="ml-auto inline-flex items-center gap-1" aria-label="Text size">
              <button type="button" aria-label="Smaller text" disabled={size === 0} onClick={() => setSize((v) => Math.max(0, v - 1))} className="p-1.5 rounded-md border border-border disabled:opacity-40"><Minus className="h-3.5 w-3.5" /></button>
              <button type="button" aria-label="Larger text" disabled={size === 2} onClick={() => setSize((v) => Math.min(2, v + 1))} className="p-1.5 rounded-md border border-border disabled:opacity-40"><Plus className="h-3.5 w-3.5" /></button>
            </span>
          </div>
          <div className={cn('space-y-3 leading-relaxed', ['text-sm', 'text-[15px]', 'text-[17px]'][size])}>
            {passage.paragraphs.map((t, i) => (
              <p key={i}>
                {passage.labelled && <span className="font-bold mr-2">{String.fromCharCode(65 + i)}</span>}
                {(t.match(/[^.!?]+[.!?]+["”’')\]]*\s*|[^.!?]+$/g) ?? [t]).map((sentence, k) => {
                  const key = `${part}:${i}:${k}`;
                  return <span key={k} onClick={marking ? () => setMarks((m) => { const n = new Set(m); if (n.has(key)) n.delete(key); else n.add(key); return n; }) : undefined}
                    className={cn(marks.has(key) && 'bg-yellow-300/60 dark:bg-yellow-500/40 rounded-sm', marking && 'cursor-pointer hover:bg-yellow-200/60')}>{sentence}</span>;
                })}
              </p>
            ))}
          </div>
        </article>
        <section className={cn('lg:block lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto lg:pl-1', pane === 'questions' ? 'block' : 'hidden')}>
          {passage.groups.map((g, gi) => (
            <GroupView key={`${part}-${gi}`} group={g} start={(starts[part]?.[gi] ?? 1)} answers={answers} onAnswer={(n, v) => setAnswers((a) => ({ ...a, [n]: v }))} flags={flags} onFlag={(n) => setFlags((f) => { const x = new Set(f); if (x.has(n)) x.delete(n); else x.add(n); return x; })} />
          ))}
        </section>
      </main>

      <nav className="fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border px-2 py-2 overflow-x-auto" aria-label="Question navigator">
        <div className="flex gap-1 max-w-7xl mx-auto min-w-max">
          {all.filter((q) => mode.kind === 'full' || q.part === mode.part).map((q) => (
            <button key={q.number} type="button" onClick={() => jump(q.number)} aria-label={`Question ${q.number}${answered(q.number) ? ', answered' : ''}${flags.has(q.number) ? ', marked for review' : ''}`}
              className={cn('h-7 min-w-7 px-1 rounded text-[11px] font-semibold border', answered(q.number) ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground', q.part === part && !answered(q.number) && 'border-primary/50', flags.has(q.number) && 'ring-2 ring-amber-400')}>
              {q.number}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Headphones, Lock } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { LoadingScreen } from '@/components/LoadingScreen';
import { PricingModal } from '@/components/PricingModal';
import { SEOHead } from '@/components/SEOHead';
import { cn } from '@/lib/utils';
import { LISTENING_TESTS, listeningAudioUrl, loadListeningTest } from '@/features/ielts/registry';
import type { ListeningTest } from '@/features/ielts/types';
import { bandFor } from '@/features/ielts/bands';
import { flatten, score, type Answer } from '@/features/ielts/score';
import { GroupView } from '@/features/ielts/components/GroupView';
import { ResultPanel } from '@/features/ielts/components/ResultPanel';
import { AudioDock } from '@/features/ielts/components/AudioDock';
import { saveAttempt } from '@/features/ielts/useAttempts';
import { saveMockSection, useMockId } from '@/features/ielts/mock';
import { toast } from 'sonner';
import { useT } from '@/i18n';

const mmss = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;


export default function ListeningTestPage() {
  const { id = '' } = useParams<{ id: string }>();
  const { t: tr } = useT();
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
  const [ended, setEnded] = useState<boolean[]>([false, false, false, false]);
  const [elapsed, setElapsed] = useState(0);
  const startedAt = useRef(0);
  const saved = useRef(false);

  useEffect(() => { let off = false; void loadListeningTest(id).then((t) => { if (!off) setTest(t); }); return () => { off = true; }; }, [id]);
  const locked = !!meta && !meta.free && !isIelts;
  useEffect(() => {
    if (stage !== 'run') return;
    const id = window.setInterval(() => setElapsed(Math.round((Date.now() - startedAt.current) / 1000)), 1000);
    return () => window.clearInterval(id);
  }, [stage]);
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
        if (!ok) toast.error(tr('ielts.listening.saveFail'));
        navigate(`/mock-test/exam/${mockId}`, { replace: true });
      });
    }
  }, [test, answers, mockId, navigate, tr]);

  // In a mock test the exam starts at once, in exam mode (each recording plays once).
  useEffect(() => {
    if (mockId && test && stage === 'intro' && !autoStarted.current && (!meta || meta.free || isIelts)) {
      autoStarted.current = true;
      setExam(true); setAnswers({}); setPlayed([false, false, false, false]); setEnded([false, false, false, false]); setElapsed(0); setSection(0); saved.current = false; startedAt.current = Date.now(); setStage('run');
    }
  }, [mockId, test, stage, meta, isIelts]);

  if (test === undefined) return <LoadingScreen />;
  if (!test || !meta) return <div className="min-h-screen grid place-items-center"><Link to="/listening"><Button variant="outline">{tr('ielts.notFound')}</Button></Link></div>;

  const all = flatten(test.sections);
  const answered = (n: number) => answers[n] !== undefined && answers[n] !== '';

  if (stage === 'done' && mockId) return <LoadingScreen />;

  if (stage === 'done') {
    const parts = test.sections.map((s) => ({
      title: s.title,
      groups: s.groups,
      extra: (
        <details className="mb-4 rounded-lg border border-border p-3 text-sm">
          <summary className="cursor-pointer font-semibold">{tr('ielts.listening.transcript')}</summary>
          <div className="mt-2 space-y-1.5">
            {s.lines.map((l, i) => <p key={i}><span className="text-xs font-semibold uppercase text-muted-foreground mr-1.5">{l.voice}</span>{l.text}</p>)}
          </div>
        </details>
      ),
    }));
    const r = score(test.sections, answers);
    return (
      <div className="min-h-screen bg-background pb-24 md:pb-0">
        <SEOHead title={`${test.title} ${tr('ielts.seo.resultSuffix')}`} description={tr('ielts.seo.listeningResult')} path={`/listening/${test.id}`} noindex />
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
        <SEOHead title={test.title} description={tr('ielts.seo.listeningIntro')} path={`/listening/${test.id}`} noindex />
        <Navbar />
        <main className="pt-24 pb-12 px-4 max-w-2xl mx-auto">
          <Link to="/listening" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="h-4 w-4" />{tr('ielts.listening.all')}</Link>
          <div className="glass-card p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">{test.title} · {tr(`ielts.diff.${meta.difficulty}`)} <span className="normal-case tracking-normal text-muted-foreground">({tr(`ielts.hint.${meta.difficulty}`)})</span></p>
            <h1 className="text-2xl font-bold mb-2">{meta.name}</h1>
            <p className="text-sm text-muted-foreground mb-4">{meta.blurb}</p>
            <ul className="mb-5 space-y-1.5 text-sm">{test.sections.map((s, i) => <li key={i} className="flex gap-2"><span className="text-primary font-semibold shrink-0">{tr('ielts.sectionN', { n: i + 1 })}</span><span className="text-muted-foreground">{s.title.replace(/^Section \d+:\s*/, '')}</span></li>)}</ul>
            <ul className="text-sm space-y-1.5 mb-5 list-disc pl-5">
              <li>{tr('ielts.listening.rule1')}</li>
              <li>{tr('ielts.listening.rule2')}</li>
              <li>{tr('ielts.listening.rule3')}</li>
            </ul>
            {locked ? (
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm">
                <p className="flex items-center gap-2 font-semibold mb-1"><Lock className="h-4 w-4" />{tr('ielts.lock.title')}</p>
                <p className="text-muted-foreground mb-3">{tr('ielts.listening.lockText')}</p>
                <Button variant="glow" onClick={() => setShowPricing(true)}>{tr('ielts.lock.seePlans')}</Button>
              </div>
            ) : (
              <div className="space-y-3">
                <Button variant="glow" className="w-full gap-2" onClick={() => { setExam(true); setAnswers({}); setPlayed([false, false, false, false]); setEnded([false, false, false, false]); setElapsed(0); setSection(0); saved.current = false; startedAt.current = Date.now(); setStage('run'); window.scrollTo(0, 0); }}><Headphones className="h-4 w-4" />{tr('ielts.listening.examBtn')}</Button>
                <Button variant="outline" className="w-full" onClick={() => { setExam(false); setAnswers({}); setPlayed([false, false, false, false]); setEnded([false, false, false, false]); setElapsed(0); setSection(0); saved.current = false; startedAt.current = Date.now(); setStage('run'); window.scrollTo(0, 0); }}>{tr('ielts.listening.practiceBtn')}</Button>
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
      <SEOHead title={test.title} description={tr('ielts.seo.listeningTest')} path={`/listening/${test.id}`} noindex />
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-3xl mx-auto px-3 py-2 flex items-center gap-3">
          <button type="button" onClick={() => { if (confirm(tr('ielts.confirm.leave'))) navigate(mockId ? `/mock-test/exam/${mockId}` : '/listening'); }} className="text-muted-foreground hover:text-foreground" aria-label={tr('ielts.leave')}><ArrowLeft className="h-5 w-5" /></button>
          <div className="min-w-0 flex-1"><p className="text-sm font-semibold truncate">{test.title}</p><p className="text-xs text-muted-foreground">{exam ? tr('ielts.listening.examMode') : tr('ielts.listening.practiceMode')} · {tr('ielts.listening.sectionOf', { n: section + 1 })}</p></div>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1.5 font-mono text-sm font-semibold tabular-nums" aria-label={tr('ielts.listening.elapsed')}><Clock className="h-3.5 w-3.5" />{mmss(elapsed)}</span>
          <Button size="sm" variant="glow" onClick={() => { const un = all.length - Object.keys(answers).filter((k) => answered(Number(k))).length; if (un === 0 || confirm(tr('ielts.confirm.unanswered', { n: un }))) finish(); }}>{tr('ielts.finish')}</Button>
        </div>
        <div className="max-w-3xl mx-auto px-3 pb-2 flex gap-2">
          {test.sections.map((_, i) => (
            <button key={i} type="button" onClick={() => setSection(i)} className={cn('flex-1 py-1 rounded-md text-xs font-semibold border', section === i ? 'bg-primary text-primary-foreground border-primary' : 'border-border')}>{tr('ielts.sectionN', { n: i + 1 })}</button>
          ))}
        </div>
      </header>
      <main className="flex-1 max-w-3xl w-full mx-auto px-3 py-4 pb-28">
        <h1 className="text-lg font-bold mb-1">{sec.title}</h1>
        <p className="text-sm text-muted-foreground mb-3">{sec.context}</p>
        <AudioDock src={listeningAudioUrl(test.id, section)} exam={exam} section={section} first={starts[section][0]} last={starts[section][0] + sec.groups.reduce((n, g) => n + g.items.length, 0) - 1}
          played={played[section]} onStart={() => setPlayed((p) => p.map((v, i) => (i === section ? true : v)))} onEnded={() => setEnded((p) => p.map((v, i) => (i === section ? true : v)))} />
        {sec.groups.map((g, gi) => (
          <GroupView key={`${section}-${gi}`} group={g} start={starts[section][gi]} answers={answers} onAnswer={(n, v) => setAnswers((a) => ({ ...a, [n]: v }))} />
        ))}
        <div className="flex justify-between mt-6">
          <Button variant="outline" disabled={section === 0} onClick={() => { setSection(section - 1); window.scrollTo(0, 0); }}>{tr('ielts.listening.prev')}</Button>
          {section < 3 ? <Button variant="glow" className={cn(ended[section] && 'animate-pulse')} onClick={() => { setSection(section + 1); window.scrollTo(0, 0); }}>{tr('ielts.listening.next')}</Button> : <Button variant="glow" onClick={() => { const un = all.length - Object.keys(answers).filter((k) => answered(Number(k))).length; if (un === 0 || confirm(tr('ielts.confirm.unanswered', { n: un }))) finish(); }}>{tr('ielts.listening.finishTest')}</Button>}
        </div>
      </main>
      <nav className="fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t border-border px-2 py-2 overflow-x-auto" aria-label={tr('ielts.navigator')}>
        <div className="flex gap-1 max-w-3xl mx-auto min-w-max">
          {all.map((q) => (
            <button key={q.number} type="button" onClick={() => { setSection(q.part); window.setTimeout(() => document.getElementById(`q-${q.number}`)?.scrollIntoView({ block: 'center', behavior: 'smooth' }), 60); }}
              aria-label={`${tr('ielts.q.questionN', { n: q.number })}${answered(q.number) ? tr('ielts.answeredSuffix') : ''}`}
              className={cn('h-7 min-w-7 px-1 rounded text-[11px] font-semibold border', answered(q.number) ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground', q.part === section && !answered(q.number) && 'border-primary/50')}>{q.number}</button>
          ))}
        </div>
      </nav>
    </div>
  );
}

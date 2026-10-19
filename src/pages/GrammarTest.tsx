import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BrainCircuit, CheckCircle2, Loader2, RotateCcw, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useT } from '@/i18n';

type Question = { prompt: string; options: string[]; skill: string; correctAnswer?: number; explanation?: string };
type SourceEssay = { id: string; task_type: string; topic: string; score: number };
type GrammarTestData = {
  id: string; test_date: string; source_summary: string; source_essays: SourceEssay[];
  difficulty: string; pool_size: number; started: boolean;
  questions: Question[]; answers?: Record<string, number>;
  score: number | null; completed_at: string | null;
};
type History = { id: string; test_date: string; source_summary: string; difficulty: string; score: number; completed_at: string; selected_indices?: number[] };
type Action = 'today' | 'generate' | 'start' | 'submit' | 'history';

async function request<T>(action: Action, extra: Record<string, unknown>, unavailable: string): Promise<T> {
  const { data, error } = await supabase.functions.invoke('generate-grammar-test', { body: { action, ...extra } });
  if (error) {
    const response = 'context' in error ? error.context as Response : null;
    const detail = response && typeof response.json === 'function'
      ? await response.json().catch(() => null) as { error?: string } | null : null;
    const message = error.message.includes('Failed to send a request')
      ? unavailable
      : error.message;
    throw new Error(detail?.error || message);
  }
  if (data?.error) throw new Error(data.error);
  return data as T;
}

export default function GrammarTest() {
  const { user } = useAuth();
  const { t } = useT();
  const tRef = useRef(t);
  tRef.current = t;
  const [test, setTest] = useState<GrammarTestData | null>(null);
  const [history, setHistory] = useState<History[]>([]);
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [reviewing, setReviewing] = useState(false);

  const load = useCallback(async () => {
    setLoading(true); setReady(false); setError('');
    try {
      const [today, past] = await Promise.all([
        request<{ test: GrammarTestData | null }>('today', {}, tRef.current('grammar.unavailable')),
        request<{ history: History[] }>('history', {}, tRef.current('grammar.unavailable')),
      ]);
      setTest(today.test);
      setHistory(past.history);
      setReviewing(false);
      setReady(true);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : tRef.current('grammar.loadFail'));
    } finally { setLoading(false); }
  }, []);

  useEffect(() => { if (user?.id) void load(); }, [user?.id, load]);

  const generate = async () => {
    setBusy(true); setError('');
    try {
      const result = await request<{ test: GrammarTestData }>('generate', {}, t('grammar.unavailable'));
      setTest(result.test); setCurrent(0); setSelected({}); setReviewing(false);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : t('grammar.generateFail'));
    } finally { setBusy(false); }
  };

  const start = async () => {
    setBusy(true); setError('');
    try {
      const result = await request<{ test: GrammarTestData }>('start', {}, t('grammar.unavailable'));
      setTest(result.test); setCurrent(0); setSelected({});
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : t('grammar.startFail'));
    } finally { setBusy(false); }
  };

  const submit = async () => {
    if (!test) return;
    if (Object.keys(selected).length !== test.questions.length) {
      setError(t('grammar.answerAll', { n: test.questions.length })); return;
    }
    setBusy(true); setError('');
    try {
      const answers = test.questions.map((_, index) => selected[index]);
      const result = await request<{ test: GrammarTestData }>('submit', { testId: test.id, answers }, t('grammar.unavailable'));
      setTest(result.test); setReviewing(true); setCurrent(0);
      setHistory((previous) => [{
        id: result.test.id, test_date: result.test.test_date, source_summary: result.test.source_summary,
        difficulty: result.test.difficulty, score: result.test.score ?? 0,
        selected_indices: Array.from({ length: result.test.questions.length }, (_, index) => index),
        completed_at: result.test.completed_at ?? new Date().toISOString(),
      }, ...previous.filter((item) => item.id !== result.test.id)]);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : t('grammar.saveFail'));
    } finally { setBusy(false); }
  };

  const completed = Boolean(test?.completed_at);
  const question = test?.questions[current];
  const selectedAnswer = completed ? test?.answers?.[String(current)] : selected[current];

  return <div className="min-h-screen bg-background pb-24">
    <SEOHead title={t('grammar.seoTitle')} description={t('grammar.seoDesc')} path="/grammar-test" noindex />
    <Navbar />
    <main className="pt-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="h-4 w-4" /> {t('grammar.back')}</Link>
      <div className="flex flex-wrap items-end justify-between gap-3 mb-7">
        <div><p className="text-sm font-medium text-primary mb-2">{t('grammar.eyebrow')}</p><h1 className="text-3xl font-bold">{t('grammar.h1')}</h1><p className="text-muted-foreground mt-2">{completed && test.questions.length === 10 ? t('grammar.legacy') : t('grammar.sub')}</p></div>
        {test && <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-sm capitalize">{test.difficulty.replace('-', ' ')}</span>}
      </div>

      {error && <div role="alert" className="rounded-xl border border-destructive/40 bg-destructive/5 text-destructive p-4 mb-6">
        <p className="font-medium">{t('grammar.errorTitle')}</p><p className="text-sm mt-1">{error}</p>
        <Button variant="outline" size="sm" className="mt-3" onClick={() => void load()}><RotateCcw className="h-4 w-4 mr-2" /> {t('grammar.checkAgain')}</Button>
      </div>}

      {loading ? <div className="glass-card p-12 text-center"><Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" /><p className="mt-4">{t('grammar.checking')}</p></div>
        : !test ? <div className="glass-card p-8 sm:p-12 text-center">
          <BrainCircuit className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">{t('grammar.readyTitle')}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-3">{t('grammar.readyText1')}</p>
          <p className="text-sm text-muted-foreground mb-6">{t('grammar.readyText2')}</p>
          <Button disabled={busy || !ready} onClick={() => void generate()}>{busy && <Loader2 className="h-4 w-4 animate-spin mr-2" />}{busy ? t('grammar.preparing') : t('grammar.generate')}</Button>
        </div>
        : !test.started ? <div className="glass-card p-8 sm:p-12 text-center">
          <BrainCircuit className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">{t('grammar.questionsReady')}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-3">{t('grammar.questionsReadyText')}</p>
          <p className="text-sm text-muted-foreground mb-6">{test.source_summary}</p>
          <Button disabled={busy} onClick={() => void start()}>{busy ? t('grammar.starting') : t('grammar.start')}</Button>
        </div>
        : completed && !reviewing ? <div className="glass-card p-8 sm:p-12 text-center">
          <CheckCircle2 className="h-14 w-14 text-primary mx-auto mb-4" /><h2 className="text-2xl font-bold">{t('grammar.result')}</h2>
          <p className="text-5xl font-bold text-primary my-4">{test.score}/{test.questions.length}</p>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">{test.source_summary}</p>
          <Button onClick={() => { setReviewing(true); setCurrent(0); }}>{t('grammar.review')}</Button>
        </div>
        : <div className="grid lg:grid-cols-[1fr_280px] gap-6">
          <section className="glass-card p-5 sm:p-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-4"><span>{t('grammar.questionOf', { n: current + 1, total: test.questions.length })}</span><span>{completed ? t('grammar.reviewLabel') : t('grammar.answered', { n: Object.keys(selected).length })}</span></div>
            <div className="h-2 bg-secondary rounded-full mb-7"><div className="h-full bg-primary rounded-full" style={{ width: `${(current + 1) / test.questions.length * 100}%` }} /></div>
            <p className="text-xs uppercase tracking-wide text-primary mb-2">{question?.skill}</p>
            <h2 className="text-xl font-semibold mb-6">{question?.prompt}</h2>
            <div className="space-y-3">{question?.options.map((option, index) => {
              const correct = completed && index === question.correctAnswer;
              const wrong = completed && selectedAnswer === index && index !== question.correctAnswer;
              return <button key={index} type="button" disabled={completed} onClick={() => setSelected((previous) => ({ ...previous, [current]: index }))}
                className={`w-full rounded-xl border p-4 text-left transition-colors ${correct ? 'border-emerald-500 bg-emerald-500/10' : wrong ? 'border-destructive bg-destructive/10' : selectedAnswer === index ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}`}>
                <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>{option}
              </button>;
            })}</div>
            {completed && <div className="bg-secondary/50 rounded-xl p-4 mt-5 text-sm"><p className="font-semibold mb-1">{t('grammar.explanation')}</p>{question?.explanation}</div>}
            <div className="flex justify-between gap-3 mt-8">
              <Button variant="outline" disabled={current === 0} onClick={() => setCurrent((value) => value - 1)}>{t('grammar.prev')}</Button>
              {current < test.questions.length - 1 ? <Button onClick={() => setCurrent((value) => value + 1)}>{t('grammar.next')}</Button>
                : completed ? <Button onClick={() => setReviewing(false)}>{t('grammar.viewResult')}</Button>
                  : <Button disabled={busy || Object.keys(selected).length !== test.questions.length} onClick={() => void submit()}>{busy ? t('grammar.saving') : t('grammar.finish')}</Button>}
            </div>
          </section>
          <aside className="glass-card p-5 h-fit">
            <div className="flex gap-2 items-center mb-3"><Sparkles className="h-5 w-5 text-primary" /><h3 className="font-semibold">{t('grammar.built')}</h3></div>
            <p className="text-sm text-muted-foreground mb-4">{test.source_summary}</p>
            {test.source_essays.length ? <ul className="space-y-3">{test.source_essays.map((essay) => <li key={essay.id} className="border-t border-border pt-3 text-sm">
              <Link className="text-primary hover:underline font-medium" to={`/result/${essay.id}`}>{essay.task_type}: {essay.topic}</Link><span className="block text-xs text-muted-foreground mt-1">{t('grammar.writingBand', { band: essay.score })}</span>
            </li>)}</ul> : <p className="text-xs text-muted-foreground">{t('grammar.personalise')}</p>}
          </aside>
        </div>}

      <section className="mt-8"><h2 className="text-lg font-semibold mb-3">{t('grammar.previous')}</h2>
        {history.length ? <div className="grid sm:grid-cols-2 gap-3">{history.map((item) => <div key={item.id} className="glass-card p-4 flex items-center justify-between">
          <div><p className="font-medium">{item.test_date}</p><p className="text-xs text-muted-foreground capitalize">{item.difficulty.replace('-', ' ')} · {t('grammar.completedLabel')}</p></div>
          <span className="text-xl font-bold text-primary">{item.score}/{[10, 20].includes(item.selected_indices?.length ?? 0) ? item.selected_indices?.length : 10}</span>
        </div>)}</div> : <p className="text-sm text-muted-foreground">{t('grammar.historyEmpty')}</p>}
      </section>
    </main>
  </div>;
}

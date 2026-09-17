import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Clock3, Loader2, RotateCcw, Sparkles, XCircle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

type Question = { prompt: string; options: string[]; correctAnswer: number; explanation: string; skill?: string };
type GrammarTestData = { id: string; test_date: string; source_essay_ids: string[]; source_summary: string; difficulty: string; questions: Question[]; answers: Record<string, number>; score: number | null; completed_at: string | null };

export default function GrammarTest() {
  const { user } = useAuth();
  const [test, setTest] = useState<GrammarTestData | null>(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [finished, setFinished] = useState(false);

  const load = async () => {
    setGenerating(true);
    const { data, error } = await supabase.functions.invoke('generate-grammar-test', { body: { date: new Date().toISOString().slice(0, 10) } });
    if (error || !data?.test) toast.error(error?.message || data?.error || 'Grammar test could not be loaded');
    else { setTest(data.test as GrammarTestData); setFinished(Boolean(data.test.completed_at)); }
    setGenerating(false); setLoading(false);
  };
  useEffect(() => { void load(); }, [user?.id]);

  const question = test?.questions[current];
  const answered = Object.keys(selected).length;
  const score = useMemo(() => test ? test.questions.reduce((sum, q, index) => sum + (selected[index] === q.correctAnswer ? 1 : 0), 0) : 0, [selected, test]);
  const finish = async () => {
    if (!test || answered < test.questions.length) { toast.error('Answer all 10 questions first'); return; }
    const answers = Object.fromEntries(Object.entries(selected).map(([key, value]) => [key, value]));
    const { error } = await (supabase as any).from('grammar_tests').update({ answers, score, completed_at: new Date().toISOString() }).eq('id', test.id).eq('user_id', user?.id);
    if (error) { toast.error('Could not save your result'); return; }
    setTest({ ...test, answers, score, completed_at: new Date().toISOString() }); setFinished(true); toast.success('Grammar test completed');
  };

  return <div className="min-h-screen bg-background pb-20"><SEOHead title="Daily Grammar Test" description="A grammar test generated from your recent IELTS writing." path="/grammar-test" noindex /><Navbar /><main className="pt-24 px-4 sm:px-6 max-w-4xl mx-auto">
    <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"><ArrowLeft className="h-4 w-4" /> Back to Dashboard</Link>
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7"><div><p className="text-sm font-medium text-primary mb-2">Daily practice</p><h1 className="text-3xl font-bold">Grammar Test</h1><p className="text-muted-foreground mt-2">10 questions built from your latest writing patterns.</p></div>{test && <span className="text-sm rounded-full bg-primary/10 text-primary px-3 py-1 capitalize">{test.difficulty}</span>}</div>
    {loading || generating ? <div className="glass-card p-12 text-center"><Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" /><p className="font-medium">AI is preparing today’s test…</p><p className="text-sm text-muted-foreground mt-2">It uses your latest three essays and is cached for the day.</p></div> : !test ? <div className="glass-card p-10 text-center"><p className="text-muted-foreground mb-4">No test available yet.</p><Button onClick={() => void load()}><RotateCcw className="h-4 w-4 mr-2" /> Try again</Button></div> : finished ? <div className="glass-card p-8 sm:p-12 text-center"><CheckCircle2 className="h-14 w-14 text-emerald-500 mx-auto mb-4" /><h2 className="text-2xl font-bold mb-2">Today’s result</h2><p className="text-5xl font-bold text-primary mb-3">{test.score}/{test.questions.length}</p><p className="text-muted-foreground mb-6">{test.source_summary}</p><Button variant="outline" onClick={() => { setSelected({}); setFinished(false); setCurrent(0); }}>Review answers</Button></div> : <div className="grid lg:grid-cols-[1fr_260px] gap-6"><section className="glass-card p-6 sm:p-8"><div className="flex items-center justify-between mb-6"><span className="text-sm text-muted-foreground">Question {current + 1} of {test.questions.length}</span><span className="text-sm text-muted-foreground">{answered} answered</span></div><div className="h-2 rounded-full bg-secondary mb-8"><div className="h-full rounded-full bg-primary transition-all" style={{ width: `${((current + 1) / test.questions.length) * 100}%` }} /></div><h2 className="text-xl font-semibold leading-relaxed mb-6">{question?.prompt}</h2><div className="space-y-3">{question?.options.map((option, index) => <button key={option} onClick={() => setSelected({ ...selected, [current]: index })} className={`w-full p-4 rounded-xl border text-left transition-colors ${selected[current] === index ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}`}><span className="inline-flex w-7 h-7 rounded-full bg-secondary items-center justify-center mr-3 text-sm font-semibold">{String.fromCharCode(65 + index)}</span>{option}</button>)}</div><div className="flex justify-between mt-8"><Button variant="outline" disabled={current === 0} onClick={() => setCurrent((value) => value - 1)}>Previous</Button>{current === test.questions.length - 1 ? <Button onClick={() => void finish()}>Finish test</Button> : <Button onClick={() => setCurrent((value) => value + 1)}>Next</Button>}</div></section><aside className="glass-card p-5 h-fit"><div className="flex items-center gap-2 mb-4"><Sparkles className="h-5 w-5 text-primary" /><h3 className="font-semibold">Personalised test</h3></div><p className="text-sm text-muted-foreground leading-relaxed mb-5">{test.source_summary}</p><div className="flex items-center gap-2 text-xs text-muted-foreground"><Clock3 className="h-4 w-4" /> About 5 minutes</div><p className="text-xs text-muted-foreground mt-3">Based on {test.source_essay_ids.length} recent {test.source_essay_ids.length === 1 ? 'essay' : 'essays'}.</p></aside></div>}
  </main></div>;
}

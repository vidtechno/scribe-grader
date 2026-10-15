import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, Headphones, ListChecks, Lock, Sparkles, Trophy } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { cn } from '@/lib/utils';
import { DIFFICULTY_HINT, LISTENING_TESTS, READING_TESTS, type TestMeta } from '@/features/ielts/registry';
import { useAttempts, type Attempt } from '@/features/ielts/useAttempts';
import { format } from 'date-fns';

const DIFF_STYLE = { Foundation: 'bg-emerald-500/10 text-emerald-600', Standard: 'bg-amber-500/10 text-amber-600', Challenging: 'bg-rose-500/10 text-rose-600' } as const;

const COPY = {
  reading: {
    icon: BookOpen, title: 'IELTS Academic Reading', part: 'Passage',
    facts: [['3', 'passages'], ['40', 'questions'], ['60', 'minutes']],
    steps: ['Pick a test: every one has different topics and question types.', 'Read and answer in 60 minutes (or practise a single passage).', 'Get an estimated band, accuracy by question type and a full answer review.'],
  },
  listening: {
    icon: Headphones, title: 'IELTS Listening', part: 'Section',
    facts: [['4', 'sections'], ['40', 'questions'], ['30', 'minutes of audio']],
    steps: ['Pick a test: different situations, speakers and question types.', 'Exam mode plays each recording once; practice mode lets you replay.', 'Get an estimated band, a review of every answer and the full transcript.'],
  },
} as const;

/** Reading or Listening: a shelf of test variants, each with a name, a short description and the learner's progress. */
export default function IeltsTests({ skill }: { skill: 'reading' | 'listening' }) {
  const { user } = useAuth();
  const { isPremium } = useSubscription();
  const attempts = useAttempts(skill, user?.id);
  const tests = skill === 'reading' ? READING_TESTS : LISTENING_TESTS;
  const copy = COPY[skill];
  const Icon = copy.icon;
  const list: Attempt[] = attempts.data ?? [];
  const stats = useMemo(() => {
    const full = list.filter((a) => a.mode === 'full');
    const best = Math.max(0, ...full.map((a) => Number(a.band)));
    const done = new Set(full.map((a) => a.test_id)).size;
    const avg = full.length ? full.reduce((s, a) => s + Number(a.band), 0) / full.length : 0;
    return { best, done, avg, count: list.length };
  }, [list]);
  const best = (id: string) => Math.max(0, ...list.filter((a) => a.test_id === id && a.mode === 'full').map((a) => Number(a.band)));
  const count = (id: string) => list.filter((a) => a.test_id === id).length;
  const nextUp = tests.find((t) => count(t.id) === 0 && (t.free || isPremium));
  const nameOf = (id: string) => tests.find((t) => t.id === id)?.name ?? id;

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SEOHead title={`${copy.title} practice`} description={`Full ${copy.title} practice tests with an estimated band score and answer review.`} path={`/${skill}`} noindex />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 max-w-5xl mx-auto">
        <Link to="/practice" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"><ArrowLeft className="h-4 w-4" />IELTS practice</Link>

        <section className="glass-card p-5 sm:p-7 mb-8 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-primary/10 blur-2xl pointer-events-none" aria-hidden />
          <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
            <span className="w-14 h-14 rounded-2xl bg-primary/10 text-primary grid place-items-center shrink-0"><Icon className="h-7 w-7" /></span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Full practice tests</p>
              <h1 className="text-2xl sm:text-3xl font-bold">{copy.title}</h1>
              <div className="flex flex-wrap gap-2 mt-3">
                {copy.facts.map(([n, l]) => <span key={l} className="text-xs rounded-full bg-secondary px-3 py-1"><b>{n}</b> {l}</span>)}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:w-72 text-center">
              {[[stats.done ? `${stats.done}/${tests.length}` : `0/${tests.length}`, 'tests done'], [stats.best ? stats.best.toFixed(1) : '–', 'best band'], [stats.avg ? stats.avg.toFixed(1) : '–', 'average']].map(([v, l]) => (
                <div key={l} className="rounded-xl bg-secondary/50 py-2"><p className="font-bold text-lg leading-tight">{v}</p><p className="text-[10px] text-muted-foreground">{l}</p></div>
              ))}
            </div>
          </div>
          <ol className="relative grid sm:grid-cols-3 gap-3 mt-6 text-xs text-muted-foreground">
            {copy.steps.map((s, i) => (
              <li key={i} className="flex gap-2"><span className="h-5 w-5 rounded-full bg-primary/10 text-primary text-[11px] font-bold grid place-items-center shrink-0">{i + 1}</span>{s}</li>
            ))}
          </ol>
        </section>

        <div className="flex items-baseline justify-between mb-3">
          <h2 className="text-lg font-semibold">Choose a test</h2>
          <p className="text-xs text-muted-foreground">{tests.length} tests · each one has new topics</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {tests.map((t: TestMeta, index) => {
            const locked = !t.free && !isPremium;
            const b = best(t.id);
            const n = count(t.id);
            return (
              <Link key={t.id} to={`/${skill}/${t.id}`} className={cn('group glass-card-hover p-5 flex flex-col gap-3', nextUp?.id === t.id && 'ring-1 ring-primary/40')}>
                <div className="flex items-start gap-3">
                  <span className="h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center font-bold shrink-0">{index + 1}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold leading-snug">{t.name}</h3>
                    <div className="flex flex-wrap items-center gap-1.5 mt-1">
                      <span className={cn('text-[10px] font-semibold rounded-full px-2 py-0.5', DIFF_STYLE[t.difficulty])} title={DIFFICULTY_HINT[t.difficulty]}>{t.difficulty}</span>
                      {t.free && <span className="text-[10px] font-semibold rounded-full px-2 py-0.5 bg-primary/10 text-primary">Free</span>}
                      {nextUp?.id === t.id && <span className="text-[10px] font-semibold rounded-full px-2 py-0.5 bg-primary text-primary-foreground inline-flex items-center gap-1"><Sparkles className="h-3 w-3" />Up next</span>}
                    </div>
                  </div>
                  {locked ? <Lock className="h-4 w-4 text-muted-foreground shrink-0" /> : <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />}
                </div>
                <p className="text-sm text-muted-foreground">{t.blurb}</p>
                <ul className="space-y-1 text-xs">
                  {t.parts.map((p, i) => (
                    <li key={i} className="flex gap-2"><span className="text-primary font-semibold shrink-0">{copy.part} {i + 1}</span><span className="text-muted-foreground truncate">{p.replace(/^Section \d+:\s*/, '')}</span></li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-2 mt-auto border-t border-border text-xs">
                  <span className="flex flex-wrap gap-1">{t.topics.map((x) => <span key={x} className="rounded bg-secondary px-1.5 py-0.5 text-muted-foreground">{x}</span>)}</span>
                  <span className="text-muted-foreground shrink-0 pl-2 inline-flex items-center gap-1">
                    {n > 0 ? <><CheckCircle2 className="h-3.5 w-3.5 text-primary" />{b > 0 ? `Best ${b.toFixed(1)}` : `${n} tried`}</> : locked ? 'IELTS plan' : <><Clock className="h-3.5 w-3.5" />{skill === 'reading' ? '60 min' : '~30 min'}</>}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {list.length > 0 && (
          <section aria-label="Recent attempts">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2"><Trophy className="h-4 w-4 text-primary" />Recent attempts</h2>
            <div className="glass-card divide-y divide-border">
              {list.slice(0, 8).map((a) => (
                <div key={a.id} className="flex items-center gap-3 px-4 py-3 text-sm">
                  <span className="h-9 w-9 rounded-lg bg-primary/10 text-primary grid place-items-center font-bold text-sm shrink-0">{Number(a.band).toFixed(1)}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium truncate">{nameOf(a.test_id)}</span>
                    <span className="block text-xs text-muted-foreground">{a.mode === 'part' ? `${copy.part} ${(a.part ?? 0) + 1} only` : 'Full test'} · {a.correct}/{a.total} · {format(new Date(a.created_at), 'MMM d')}</span>
                  </span>
                  <Link to={`/${skill}/${a.test_id}`} className="text-xs text-primary inline-flex items-center gap-1 hover:underline"><ListChecks className="h-3.5 w-3.5" />Retry</Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

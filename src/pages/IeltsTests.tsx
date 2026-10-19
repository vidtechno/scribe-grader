import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, Headphones, ListChecks, Lock, Sparkles, Trophy } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { cn } from '@/lib/utils';
import { LISTENING_TESTS, READING_TESTS, type TestMeta } from '@/features/ielts/registry';
import { useAttempts, type Attempt } from '@/features/ielts/useAttempts';
import { format } from 'date-fns';
import { uz } from 'date-fns/locale';
import { useT } from '@/i18n';

const DIFF_STYLE = { Foundation: 'bg-emerald-500/10 text-emerald-600', Standard: 'bg-amber-500/10 text-amber-600', Challenging: 'bg-rose-500/10 text-rose-600' } as const;

const COPY = {
  reading: {
    icon: BookOpen, titleKey: 'ielts.tests.reading.title', partKey: 'ielts.passageN',
    facts: [['3', 'ielts.tests.reading.f1'], ['40', 'ielts.tests.f.questions'], ['60', 'ielts.tests.reading.f3']],
    steps: ['ielts.tests.reading.s1', 'ielts.tests.reading.s2', 'ielts.tests.reading.s3'],
  },
  listening: {
    icon: Headphones, titleKey: 'ielts.tests.listening.title', partKey: 'ielts.sectionN',
    facts: [['4', 'ielts.tests.listening.f1'], ['40', 'ielts.tests.f.questions'], ['30', 'ielts.tests.listening.f3']],
    steps: ['ielts.tests.listening.s1', 'ielts.tests.listening.s2', 'ielts.tests.listening.s3'],
  },
} as const;

/** Reading or Listening: a shelf of test variants, each with a name, a short description and the learner's progress. */
export default function IeltsTests({ skill }: { skill: 'reading' | 'listening' }) {
  const { t, lang } = useT();
  const { user } = useAuth();
  const { isIelts } = useSubscription();
  const attempts = useAttempts(skill, user?.id);
  const tests = skill === 'reading' ? READING_TESTS : LISTENING_TESTS;
  const copy = COPY[skill];
  const title = t(copy.titleKey);
  const partLabel = (n: number) => t(copy.partKey, { n });
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
  const nextUp = tests.find((t) => count(t.id) === 0 && (t.free || isIelts));
  const nameOf = (id: string) => tests.find((t) => t.id === id)?.name ?? id;

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SEOHead title={t('ielts.tests.seoTitle', { title })} description={t('ielts.tests.seoDesc', { title })} path={`/${skill}`} noindex />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 max-w-5xl mx-auto">
        <Link to="/practice" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"><ArrowLeft className="h-4 w-4" />{t('ielts.tests.back')}</Link>

        <section className="glass-card p-5 sm:p-7 mb-8 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-primary/10 blur-2xl pointer-events-none" aria-hidden />
          <div className="relative flex flex-col sm:flex-row sm:items-center gap-5">
            <span className="w-14 h-14 rounded-2xl bg-primary/10 text-primary grid place-items-center shrink-0"><Icon className="h-7 w-7" /></span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">{t('ielts.tests.eyebrow')}</p>
              <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
              <div className="flex flex-wrap gap-2 mt-3">
                {copy.facts.map(([n, l]) => <span key={l} className="text-xs rounded-full bg-secondary px-3 py-1"><b>{n}</b> {t(l)}</span>)}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:w-72 text-center">
              {[[stats.done ? `${stats.done}/${tests.length}` : `0/${tests.length}`, t('ielts.tests.done')], [stats.best ? stats.best.toFixed(1) : '–', t('ielts.tests.best')], [stats.avg ? stats.avg.toFixed(1) : '–', t('ielts.tests.average')]].map(([v, l]) => (
                <div key={l} className="rounded-xl bg-secondary/50 py-2"><p className="font-bold text-lg leading-tight">{v}</p><p className="text-[10px] text-muted-foreground">{l}</p></div>
              ))}
            </div>
          </div>
          <ol className="relative grid sm:grid-cols-3 gap-3 mt-6 text-xs text-muted-foreground">
            {copy.steps.map((s, i) => (
              <li key={i} className="flex gap-2"><span className="h-5 w-5 rounded-full bg-primary/10 text-primary text-[11px] font-bold grid place-items-center shrink-0">{i + 1}</span>{t(s)}</li>
            ))}
          </ol>
        </section>

        <div className="flex items-baseline justify-between mb-3">
          <h2 className="text-lg font-semibold">{t('ielts.tests.choose')}</h2>
          <p className="text-xs text-muted-foreground">{t('ielts.tests.summary', { n: tests.length })} · {isIelts ? t('ielts.tests.unlimited') : t('ielts.tests.freeNote')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {tests.map((test: TestMeta, index) => {
            const locked = !test.free && !isIelts;
            const b = best(test.id);
            const n = count(test.id);
            return (
              <Link key={test.id} to={`/${skill}/${test.id}`} className={cn('group glass-card-hover p-5 flex flex-col gap-3', nextUp?.id === test.id && 'ring-1 ring-primary/40')}>
                <div className="flex items-start gap-3">
                  <span className="h-10 w-10 rounded-xl bg-primary text-primary-foreground grid place-items-center font-bold shrink-0">{index + 1}</span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold leading-snug">{test.name}</h3>
                    <div className="flex flex-wrap items-center gap-1.5 mt-1">
                      <span className={cn('text-[10px] font-semibold rounded-full px-2 py-0.5', DIFF_STYLE[test.difficulty])} title={t(`ielts.hint.${test.difficulty}`)}>{t(`ielts.diff.${test.difficulty}`)}</span>
                      {test.free && <span className="text-[10px] font-semibold rounded-full px-2 py-0.5 bg-primary/10 text-primary">{t('ielts.tests.free')}</span>}
                      {nextUp?.id === test.id && <span className="text-[10px] font-semibold rounded-full px-2 py-0.5 bg-primary text-primary-foreground inline-flex items-center gap-1"><Sparkles className="h-3 w-3" />{t('ielts.tests.upNext')}</span>}
                    </div>
                  </div>
                  {locked ? <Lock className="h-4 w-4 text-muted-foreground shrink-0" /> : <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />}
                </div>
                <p className="text-sm text-muted-foreground">{test.blurb}</p>
                <ul className="space-y-1 text-xs">
                  {test.parts.map((p, i) => (
                    <li key={i} className="flex gap-2"><span className="text-primary font-semibold shrink-0">{partLabel(i + 1)}</span><span className="text-muted-foreground truncate">{p.replace(/^Section \d+:\s*/, '')}</span></li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-2 mt-auto border-t border-border text-xs">
                  <span className="flex flex-wrap gap-1">{test.topics.map((x) => <span key={x} className="rounded bg-secondary px-1.5 py-0.5 text-muted-foreground">{x}</span>)}</span>
                  <span className="text-muted-foreground shrink-0 pl-2 inline-flex items-center gap-1">
                    {n > 0 ? <><CheckCircle2 className="h-3.5 w-3.5 text-primary" />{b > 0 ? t('ielts.tests.bestN', { band: b.toFixed(1) }) : t('ielts.tests.triedN', { n })}</> : locked ? t('ielts.tests.planLock') : <><Clock className="h-3.5 w-3.5" />{skill === 'reading' ? t('ielts.tests.min60') : t('ielts.tests.min30')}</>}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {list.length > 0 && (
          <section aria-label={t('ielts.tests.recent')}>
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2"><Trophy className="h-4 w-4 text-primary" />{t('ielts.tests.recent')}</h2>
            <div className="glass-card divide-y divide-border">
              {list.slice(0, 8).map((a) => (
                <div key={a.id} className="flex items-center gap-3 px-4 py-3 text-sm">
                  <span className="h-9 w-9 rounded-lg bg-primary/10 text-primary grid place-items-center font-bold text-sm shrink-0">{Number(a.band).toFixed(1)}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium truncate">{nameOf(a.test_id)}</span>
                    <span className="block text-xs text-muted-foreground">{a.mode === 'part' ? t('ielts.tests.onlyPart', { part: partLabel((a.part ?? 0) + 1) }) : t('ielts.fullTest')} · {a.correct}/{a.total} · {format(new Date(a.created_at), 'MMM d', lang === 'uz' ? { locale: uz } : undefined)}</span>
                  </span>
                  <Link to={`/${skill}/${a.test_id}`} className="text-xs text-primary inline-flex items-center gap-1 hover:underline"><ListChecks className="h-3.5 w-3.5" />{t('ielts.tests.retry')}</Link>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

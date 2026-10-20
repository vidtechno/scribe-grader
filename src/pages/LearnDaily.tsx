import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2, Sparkles, Sun } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useT } from '@/i18n';
import { ALL_LESSONS, loadUnit } from '@/features/learn/course';
import { useLearningState, useRefreshLearning } from '@/features/learn/api';
import { loadSession, useReviewQueue } from '@/features/learn/engine/api';
import { buildDailyTest, dailySentence, DAILY_MIN_POOL, isDailyDone, markDailyDone, pickDailyWords } from '@/features/learn/daily';
import type { Word } from '@/features/learn/types';
import { LearnPaywall } from '@/features/learn/components/LearnPaywall';
import { SpeakButton } from '@/features/learn/components/SpeakButton';
import { WordDrill, type DrillItem } from '@/features/learn/components/WordDrill';

/** "Bugungi 5 daqiqa": three words of the day, one sentence, then a short quiz that is recorded like a review round. */
export default function LearnDaily() {
  const { t, lang } = useT();
  const { user } = useAuth();
  const navigate = useNavigate();
  const refresh = useRefreshLearning();
  const { data: state, isLoading } = useLearningState();
  const { data: queue, isLoading: queueLoading } = useReviewQueue();
  const [learned, setLearned] = useState<Word[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [drill, setDrill] = useState<DrillItem[] | null>(null);
  const [preparing, setPreparing] = useState(false);
  const [finished, setFinished] = useState(false);
  const day = state?.today ?? '';

  const doneLessons = useMemo(() => new Set((state?.progress ?? []).filter((p) => p.completed_at).map((p) => p.lesson_id)), [state?.progress]);
  useEffect(() => {
    if (!state) return;
    const units = [...new Set(ALL_LESSONS.filter((l) => doneLessons.has(l.id)).map((l) => l.unitId))];
    Promise.all(units.map(loadUnit))
      .then((all) => setLearned(all.flat().filter((l) => doneLessons.has(l.id)).flatMap((l) => l.words)))
      .catch(() => { setLearned([]); setFailed(true); });
  }, [state, doneLessons]);

  // De-duplicate by English text: the same word can appear in several lessons.
  const pool = useMemo(() => {
    const seen = new Set<string>();
    return (learned ?? []).filter((w) => { const k = w.en.toLowerCase(); if (seen.has(k)) return false; seen.add(k); return true; });
  }, [learned]);
  const today = useMemo(() => (pool.length >= DAILY_MIN_POOL && day ? pickDailyWords(pool, queue, day) : []), [pool, queue, day]);
  const sentence = useMemo(() => dailySentence(today), [today]);
  const doneToday = isDailyDone(user?.id, day) || finished;

  const startQuiz = async () => {
    setPreparing(true);
    try {
      const pairs = pool.map((w) => ({ en: w.en, uz: w.uz }));
      const extra = queue && (queue.mistakes.length || queue.grammar.length)
        ? (await loadSession(queue, { max: 4, extraPool: pairs, lang })).filter((i) => i.ref.type !== 'w') : [];
      const test = buildDailyTest(today, queue, pairs, extra, { lang });
      setDrill(test.map((item) => ({ ex: item.ex, item })));
    } finally { setPreparing(false); }
  };

  const body = () => {
    if (isLoading || queueLoading || learned === null) return <div className="grid place-items-center py-24"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
    if (!state?.profile || !pool.length) {
      return <Notice text={failed ? t('learn.daily.loadError') : t('learn.daily.needLesson')} cta={t('learn.daily.goLesson')} />;
    }
    if (!state.access.allowed) return <LearnPaywall access={state.access} compact />;
    if (pool.length < DAILY_MIN_POOL) return <Notice text={t('learn.daily.tooFew', { n: DAILY_MIN_POOL })} cta={t('learn.daily.goLesson')} />;
    return (
      <>
        <div className="text-center mb-6">
          <span className="mx-auto mb-3 h-14 w-14 rounded-2xl bg-primary/10 text-primary grid place-items-center"><Sun className="h-7 w-7" /></span>
          <h1 className="text-2xl sm:text-3xl font-extrabold">{t('learn.daily.heading')}</h1>
          <p className="text-muted-foreground">{t('learn.daily.sub')}</p>
        </div>
        {doneToday && <p className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 mb-4 text-sm font-medium text-center">{t('learn.daily.finished')}</p>}
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{t('learn.daily.wordsTitle')}</h2>
        <div className="space-y-2 mb-5">
          {today.map((w) => (
            <div key={w.en} className="glass-card px-3.5 py-3 flex items-start gap-3">
              <SpeakButton text={w.en} />
              <div className="min-w-0 flex-1">
                <p className="font-bold text-lg leading-tight">{w.en} {w.ipa && <span className="font-mono text-xs text-muted-foreground font-normal">/{w.ipa}/</span>}</p>
                <p className="text-muted-foreground">{w.uz}</p>
                {w.ex && <p className="text-sm mt-1 italic">{w.ex}</p>}
              </div>
            </div>
          ))}
        </div>
        {sentence && (
          <>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{t('learn.daily.sentenceTitle')}</h2>
            <div className="glass-card px-3.5 py-3 flex items-start gap-3 mb-6">
              <SpeakButton text={sentence.en} />
              <div className="min-w-0 flex-1"><p className="font-semibold">{sentence.en}</p>{sentence.uz && <p className="text-sm text-muted-foreground">{sentence.uz}</p>}</div>
            </div>
          </>
        )}
        <Button size="lg" variant="glow" className="w-full gap-2" disabled={preparing} onClick={() => void startQuiz()}>
          {preparing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}{doneToday ? t('learn.daily.again') : t('learn.daily.startQuiz')}
        </Button>
        <Button variant="ghost" className="w-full mt-2" onClick={() => navigate('/learn')}>{t('learn.daily.back')}</Button>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-background pb-28 md:pb-12">
      <SEOHead title={t('learn.daily.seoTitle')} description={t('learn.daily.seoDesc')} path="/learn/daily" noindex />
      <Navbar />
      <main className="pt-24 px-4 sm:px-6 max-w-xl mx-auto">{body()}</main>
      {drill && (
        <WordDrill items={drill} onClose={() => setDrill(null)}
          onFinished={() => { markDailyDone(user?.id, day); setFinished(true); void refresh(); }} />
      )}
    </div>
  );
}

function Notice({ text, cta }: { text: string; cta: string }) {
  return (
    <div className="text-center py-16">
      <p className="text-muted-foreground mb-4">{text}</p>
      <Link to="/learn"><Button variant="outline">{cta}</Button></Link>
    </div>
  );
}

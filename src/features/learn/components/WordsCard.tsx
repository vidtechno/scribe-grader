import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, ChevronRight } from 'lucide-react';
import { useT } from '@/i18n';
import { ALL_LESSONS, loadUnit } from '../course';
import type { LearningState } from '../api';
import type { Word } from '../types';
import { WordGames } from './WordGames';

/** The words of every finished lesson, loaded lesson content by lesson content. */
export function useLearnedWords(state: LearningState): Word[] {
  const done = useMemo(() => new Set(state.progress.filter((p) => p.completed_at).map((p) => p.lesson_id)), [state.progress]);
  const [words, setWords] = useState<Word[]>([]);
  useEffect(() => {
    let off = false;
    const units = [...new Set(ALL_LESSONS.filter((l) => done.has(l.id)).map((l) => l.unitId))];
    Promise.all(units.map(loadUnit)).then((all) => { if (!off) setWords(all.flat().filter((l) => done.has(l.id)).flatMap((l) => l.words)); }).catch(() => {});
    return () => { off = true; };
  }, [done]);
  return words;
}

/** "My words": how many you know, the two word games to play right away, and a link to the whole list. */
export function WordsCard({ state, wordCount }: { state: LearningState; wordCount: number }) {
  const { t } = useT();
  const words = useLearnedWords(state);
  return (
    <section className="rounded-2xl border border-border bg-card p-3.5 shadow-sm" aria-label={t('learn.home.tabWords')}>
      <Link to="/learn?tab=words" className="mb-3 flex items-center gap-2.5">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-500/10 text-violet-600"><Brain className="h-5 w-5" /></span>
        <span className="min-w-0 flex-1"><span className="block text-base font-extrabold leading-tight">{t('learn.home.tabWords')}</span><span className="text-xs font-semibold text-muted-foreground">{t('learn.words.count', { n: wordCount })}</span></span>
        <ChevronRight className="h-5 w-5 text-muted-foreground" />
      </Link>
      <WordGames words={words} locked={false} compact />
    </section>
  );
}

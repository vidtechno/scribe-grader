import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Sun } from 'lucide-react';
import { useT } from '@/i18n';
import { useAuth } from '@/hooks/useAuth';
import { isDailyDone } from '../daily';
import type { LearningState } from '../api';

/** Entry to the five-minute daily set. Shown once the learner has words from finished lessons. */
export function DailyCard({ state, wordCount }: { state: LearningState; wordCount: number }) {
  const { t } = useT();
  const { user } = useAuth();
  if (wordCount < 4) return null;
  const done = isDailyDone(user?.id, state.today);
  return (
    <Link to="/learn/daily" aria-label={t('learn.daily.title')}
      className={`rounded-2xl border p-4 mb-4 flex items-center gap-4 transition-colors hover:border-primary ${done ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-primary/40 bg-primary/5'}`}>
      <span className={`h-11 w-11 shrink-0 rounded-xl grid place-items-center ${done ? 'bg-emerald-500/15 text-emerald-600' : 'bg-primary/15 text-primary'}`}>
        {done ? <CheckCircle2 className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-bold leading-snug">{done ? t('learn.daily.done') : t('learn.daily.title')}</span>
        <span className="block text-sm text-muted-foreground">{done ? t('learn.daily.cardDone') : t('learn.daily.sub')}</span>
      </span>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary shrink-0">{done ? t('learn.daily.again') : t('learn.daily.open')}<ChevronRight className="h-4 w-4" /></span>
    </Link>
  );
}

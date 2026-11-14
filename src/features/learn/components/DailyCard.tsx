import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Sun } from 'lucide-react';
import { useT } from '@/i18n';
import { useAuth } from '@/hooks/useAuth';
import { isDailyDone } from '../daily';
import type { LearningState } from '../api';

/** Entry to the five-minute daily set. Shown once the learner has words from finished lessons. */
export function DailyCard({ state, wordCount, compact = false }: { state: LearningState; wordCount: number; compact?: boolean }) {
  const { t } = useT();
  const { user } = useAuth();
  if (wordCount < 4) return null;
  const done = isDailyDone(user?.id, state.today);
  return (
    <Link to="/learn/daily" aria-label={t('learn.daily.title')}
      className={`group flex flex-col justify-between border shadow-sm ${compact ? 'rounded-2xl p-3' : 'mb-4 min-h-[164px] rounded-[1.75rem] p-5'} transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-lg ${done ? 'border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 to-card' : 'border-primary/25 bg-gradient-to-br from-primary/[0.08] via-card to-orange-400/[0.08]'}`}>
      <span className="flex min-w-0 items-start gap-3">
        <span className={`grid shrink-0 place-items-center rounded-2xl ${compact ? 'h-9 w-9' : 'h-12 w-12'} ${done ? 'bg-emerald-500/15 text-emerald-600' : 'bg-primary/15 text-primary'}`}>
          {done ? <CheckCircle2 className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
        </span>
        <span className="min-w-0 pt-0.5">
          <span className={`block font-extrabold leading-tight ${compact ? 'text-sm' : 'text-lg'}`}>{done ? t('learn.daily.done') : t('learn.daily.title')}</span>
          <span className={`mt-1 block leading-snug text-muted-foreground ${compact ? 'text-xs' : 'text-sm'}`}>{done ? t('learn.daily.cardDone') : t('learn.daily.sub')}</span>
        </span>
      </span>
      <span className={`${compact ? 'mt-2.5' : 'mt-4'} inline-flex w-full items-center justify-center gap-1 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${done ? 'bg-emerald-600 text-white group-hover:bg-emerald-700' : 'bg-primary text-primary-foreground group-hover:bg-primary/90'}`}>
        {done ? t('learn.daily.again') : t('learn.daily.open')}<ChevronRight className="h-4 w-4" />
      </span>
    </Link>
  );
}

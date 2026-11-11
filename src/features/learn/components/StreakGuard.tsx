import { Link } from 'react-router-dom';
import { Flame, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useT } from '@/i18n';
import type { LearningState } from '../api';

/**
 * Shown when the learner has not studied for a day or two: one lesson or exercise today protects the streak.
 * When the streak is already gone it invites them to start a new one.
 */
export function StreakGuard({ state }: { state: LearningState }) {
  const { t } = useT();
  const info = state.streak_info;
  if (!info || info.done_today) return null;
  const last = info.days_left <= 1;
  if (info.at_risk && info.current > 0) {
    return (
      <div role="status" className={`mb-4 flex flex-wrap items-center gap-3 rounded-2xl border p-4 ${last ? 'border-red-500/50 bg-red-500/10' : 'border-orange-500/40 bg-orange-500/10'}`}>
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-white ${last ? 'bg-red-500' : 'bg-orange-500'}`}><ShieldAlert className="h-6 w-6" /></span>
        <div className="min-w-0 flex-1">
          <p className="font-extrabold leading-snug">{last ? t('learn.guard.lastTitle', { n: info.current }) : t('learn.guard.title', { n: info.current })}</p>
          <p className="text-sm text-muted-foreground">{t('learn.guard.text')}</p>
        </div>
        <Button asChild variant="glow" size="sm"><Link to="/learn/daily">{t('learn.guard.cta')}</Link></Button>
      </div>
    );
  }
  if (info.broken && info.best > 0) {
    return (
      <div role="status" className="mb-4 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-secondary/50 p-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-muted text-muted-foreground"><Flame className="h-6 w-6" /></span>
        <p className="min-w-0 flex-1 text-sm"><b>{t('learn.guard.brokenTitle')}</b> {t('learn.guard.brokenText', { n: info.best })}</p>
        <Button asChild variant="outline" size="sm"><Link to="/learn/daily">{t('learn.guard.cta')}</Link></Button>
      </div>
    );
  }
  return null;
}

import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check, LifeBuoy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useT } from '@/i18n';
import { callLearning, useRecovery, useRefreshLearning, type LearningState, type RecoveryOffer } from '../api';
import { StreakGuard } from './StreakGuard';

/** "Do 2 lessons today and win your streak back": a task instead of a loss. Claims the streak once both lessons are done. */
function RecoveryCard({ offer }: { offer: RecoveryOffer }) {
  const { t } = useT();
  const refresh = useRefreshLearning();
  const claiming = useRef(false);
  const ready = !offer.restored && offer.lessons_today >= offer.needed;

  useEffect(() => {
    if (!ready || claiming.current) return;
    claiming.current = true;
    void callLearning('learning_recovery_claim').then(() => refresh()).catch(() => { claiming.current = false; });
  }, [ready, refresh]);

  if (offer.restored) {
    return (
      <div role="status" className="mb-4 flex items-center gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-500 text-white"><Check className="h-6 w-6" strokeWidth={3} /></span>
        <p className="min-w-0 flex-1 font-extrabold leading-snug">{t('learn.recovery.done', { n: offer.prev_streak + 1 })}</p>
      </div>
    );
  }
  const done = Math.min(offer.lessons_today, offer.needed);
  return (
    <div role="status" className="mb-4 flex flex-wrap items-center gap-3 rounded-2xl border border-orange-500/40 bg-orange-500/10 p-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-orange-500 text-white"><LifeBuoy className="h-6 w-6" /></span>
      <div className="min-w-0 flex-1">
        <p className="font-extrabold leading-snug">{t('learn.recovery.title', { n: offer.needed })}</p>
        <p className="text-sm text-muted-foreground">{t('learn.recovery.text', { prev: offer.prev_streak })}</p>
        <div className="mt-2 flex items-center gap-2" aria-label={t('learn.recovery.progress', { done, n: offer.needed })}>
          {Array.from({ length: offer.needed }, (_, i) => (
            <span key={i} className={`grid h-6 w-6 place-items-center rounded-full text-white ${i < done ? 'bg-orange-500' : 'bg-secondary'}`}>{i < done ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : null}</span>
          ))}
          <span className="text-xs font-semibold text-muted-foreground">{done}/{offer.needed}</span>
        </div>
      </div>
      <Button asChild variant="glow" size="sm"><Link to="/learn">{t('learn.recovery.cta')}</Link></Button>
    </div>
  );
}

/** The streak banner of the learning home: the recovery task when one is on offer, otherwise the usual guard. */
export function StreakStatus({ state }: { state: LearningState }) {
  const { data } = useRecovery(state.streak_info);
  const offer = data?.offer;
  if (offer) return <RecoveryCard offer={offer} />;
  return <StreakGuard state={state} />;
}

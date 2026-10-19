import { Suspense, lazy, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Lock } from 'lucide-react';
import { useT } from '@/i18n';
import { Button } from '@/components/ui/button';
import type { LearningAccess } from '../api';

const PricingModal = lazy(() => import('@/components/PricingModal').then((m) => ({ default: m.PricingModal })));

/** Shown when the 7-day free period is over and the learner is on the Free plan. */
export function LearnPaywall({ access, compact = false }: { access: LearningAccess; compact?: boolean }) {
  const { t, lang } = useT();
  const [open, setOpen] = useState(false);
  return (
    <div className={`glass-card ${compact ? 'p-5' : 'p-6 sm:p-8'} max-w-lg mx-auto text-left border-primary/30`}>
      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-4"><Lock className="h-6 w-6" /></div>
      <h2 className="text-xl font-bold mb-1">{t('learn.paywall.title')}</h2>
      <p className="text-sm text-muted-foreground mb-4">
        {t('learn.paywall.textA')} <b>Learn</b> {t('learn.paywall.or')} <b>IELTS</b> {t('learn.paywall.textB')}
      </p>
      <ul className="space-y-2 mb-5 text-sm">
        {['learn.paywall.f1', 'learn.paywall.f2', 'learn.paywall.f3', 'learn.paywall.f4'].map((k) => <li key={k} className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />{t(k)}</li>)}
      </ul>
      <Button variant="glow" size="lg" className="w-full" onClick={() => setOpen(true)}>{t('learn.paywall.choose')}</Button>
      {!compact && <Link to="/learn" className="block text-center text-sm text-muted-foreground mt-3 hover:text-primary">{t('learn.lesson.backToMap')}</Link>}
      {access.reason === 'trial_expired' && access.trial_ends_at && (
        <p className="text-[11px] text-muted-foreground mt-3 text-center">{t('learn.paywall.ended', { date: new Date(access.trial_ends_at).toLocaleDateString(lang === 'uz' ? 'uz-UZ' : 'en-US') })}</p>
      )}
      {open && <Suspense fallback={null}><PricingModal open={open} onOpenChange={setOpen} /></Suspense>}
    </div>
  );
}

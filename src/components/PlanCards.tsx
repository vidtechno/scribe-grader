import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard, GraduationCap, Mic, PenLine, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PayDialog } from '@/components/PayDialog';
import { useAuth } from '@/hooks/useAuth';
import { useT } from '@/i18n';
import { usePaymentSettings } from '@/hooks/usePaymentSettings';
import { BILLING_DISCOUNT, billingLabel, formatUzs, type Billing, LEARN_TRIAL_DAYS, getPlanEntitlement, planFeatures, planPrice, planTotalUzs } from '@/lib/plans';

export interface PlanRow {
  slug: string;
  name: string;
  description: string | null;
  badge: string | null;
  writing_limit: number;
  speaking_limit: number;
  mock_test_limit: number;
}

const TAGLINE: Record<string, string> = { go: 'plans.tagline.go', plus: 'plans.tagline.plus' };

/** Learn and IELTS side by side, with a 1 month / 6 months (-10%) switch. Used on the landing page and in the pricing dialog. */
export function PlanCards({ plans, currentPlan, publicId }: { plans: PlanRow[]; currentPlan?: string; publicId?: string | null }) {
  const { t, lang } = useT();
  const [billing, setBilling] = useState<Billing>('month');
  const [paying, setPaying] = useState<string | null>(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { testPriceUzs } = usePaymentSettings();
  const payAmount = (slug: string) => testPriceUzs ?? planTotalUzs(slug, billing);
  const choose = (slug: string) => {
    if (!user) { navigate('/auth'); return; }
    setPaying(slug);
  };
  return (
    <div>
      <div className="max-w-4xl mx-auto mb-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm flex items-start gap-3">
        <GraduationCap className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
        <p>
          <strong>{t('plans.trial.strong', { days: LEARN_TRIAL_DAYS })}</strong> {t('plans.trial.rest')}
        </p>
      </div>
      <div className="flex justify-center mb-6">
        <div className="inline-flex p-1 rounded-xl bg-secondary/70 border border-border" role="tablist" aria-label={t('plans.billingPeriod')}>
          {(['month', 'quarter', 'half-year'] as const).map((id) => (
            <button key={id} type="button" role="tab" aria-selected={billing === id} onClick={() => setBilling(id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${billing === id ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
              {billingLabel(lang, id)}
              {BILLING_DISCOUNT[id] > 0 && <span className="text-[10px] font-bold rounded-full bg-emerald-500 text-white px-1.5 py-0.5">-{Math.round(BILLING_DISCOUNT[id] * 100)}%</span>}
            </button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full">
        {plans.map((plan, index) => {
          const ielts = plan.slug === 'plus';
          const isCurrent = currentPlan === plan.slug;
          const price = planPrice(plan.slug, billing);
          const e = getPlanEntitlement(plan.slug);
          const Icon = ielts ? Target : GraduationCap;
          return (
            <motion.div key={plan.slug} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
              className={`relative rounded-2xl border p-6 flex flex-col ${ielts ? 'border-primary bg-primary/5 shadow-xl shadow-primary/10' : 'border-border glass-card'}`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wide">{plan.badge}</div>
              )}
              <div className="flex items-center gap-3 mb-3">
                <span className={`w-10 h-10 rounded-xl grid place-items-center ${ielts ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}><Icon className="h-5 w-5" /></span>
                <div>
                  <h3 className="text-xl font-bold leading-tight">{e.name}</h3>
                  <p className="text-xs text-muted-foreground">{TAGLINE[plan.slug] ? t(TAGLINE[plan.slug]) : ''}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold text-primary">{price.uzs}</span>
                  <span className="text-sm text-muted-foreground">{billing === 'month' ? t('plans.price.month') : t('plans.price.period', { period: billingLabel(lang, billing) })}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">≈ ${price.usd}{billing !== 'month' ? t('plans.perMonth', { uzs: price.perMonthUzs }) : ''}</p>
                {billing !== 'month' && <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1">{t('plans.save', { amount: price.saveUzs })}</p>}
              </div>
              <p className={`text-xs font-semibold rounded-lg px-3 py-2 mb-4 ${ielts ? 'bg-secondary text-muted-foreground' : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'}`}>
                {ielts ? t('plans.noTrial') : t('plans.trialDays', { days: LEARN_TRIAL_DAYS })}
              </p>
              {ielts && (
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="rounded-xl bg-background/70 border border-border p-3 text-center"><PenLine className="h-4 w-4 text-primary mx-auto mb-1" /><p className="text-xl font-bold leading-none">{e.personal.writing}</p><p className="text-[11px] text-muted-foreground mt-1">{t('plans.writingPerMonth')}</p></div>
                  <div className="rounded-xl bg-background/70 border border-border p-3 text-center"><Mic className="h-4 w-4 text-primary mx-auto mb-1" /><p className="text-xl font-bold leading-none">{e.personal.speaking}</p><p className="text-[11px] text-muted-foreground mt-1">{t('plans.speakingPerMonth')}</p></div>
                </div>
              )}
              <ul className="space-y-2 mb-6 flex-1">
                {planFeatures(plan.slug, lang).map((f) => <li key={f} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /><span>{f}</span></li>)}
              </ul>
              <Button variant={ielts ? 'glow' : 'outline'} className="w-full gap-2 mt-auto" disabled={isCurrent && billing === 'month'}
                onClick={() => choose(plan.slug)}>
                <CreditCard className="h-4 w-4" />
                {isCurrent && billing === 'month' ? t('plans.current') : `${t('plans.buy', { name: e.name })}${billing !== 'month' ? ` · ${billingLabel(lang, billing)}` : ''}`}
              </Button>
            </motion.div>
          );
        })}
      </div>
      <p className="text-xs text-muted-foreground text-center mt-6">
        {t('plans.footer.a', { period: t(`plans.valid.${billing}`) })}
        {billing === 'month' ? '' : t('plans.footer.renew')}. {t('plans.footer.b')} <span className="text-primary font-semibold">@scorify_support</span>.
      </p>
      {testPriceUzs !== null && (
        <p className="text-xs text-amber-600 dark:text-amber-400 text-center mt-2">{t('plans.testMode', { amount: formatUzs(testPriceUzs) })}</p>
      )}
      {paying && <PayDialog open onOpenChange={(v) => { if (!v) setPaying(null); }} plan={paying} billing={billing} amountUzs={payAmount(paying)} testMode={testPriceUzs !== null} />}
    </div>
  );
}

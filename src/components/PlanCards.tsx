import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check, CreditCard, Gift, GraduationCap, MessageCircle, ShieldCheck, Sparkles, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PayDialog } from '@/components/PayDialog';
import { useAuth } from '@/hooks/useAuth';
import { usePaymentSettings } from '@/hooks/usePaymentSettings';
import { useT } from '@/i18n';
import {
  BILLING_DISCOUNT, BILLING_MONTHS, ONLINE_PAYMENTS, billingLabel, formatUzs, getPlanEntitlement, LEARN_TRIAL_DAYS, planFeatures, planPrice,
  planTotalUzs, telegramPayLink, visaLink, type Billing,
} from '@/lib/plans';
import { cn } from '@/lib/utils';

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

/** Price per day for a period (30-day months), in whole so'm. */
export const perDayUzs = (slug: string, billing: Billing) => Math.round(planTotalUzs(slug, billing) / (BILLING_MONTHS[billing] * 30));

/**
 * Learn and IELTS side by side with a 1 / 3 / 6 month switch. Used on the landing page and in the pricing dialog.
 * Honest persuasion only: the regular price crossed out next to the discounted one, the price per day, and what a new account gets for free.
 */
export function PlanCards({ plans, currentPlan, publicId }: { plans: PlanRow[]; currentPlan?: string; publicId?: string | null }) {
  const { t, lang } = useT();
  const [billing, setBilling] = useState<Billing>('month');
  const [paying, setPaying] = useState<string | null>(null);
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const { testPriceUzs } = usePaymentSettings();
  const payAmount = (slug: string) => testPriceUzs ?? planTotalUzs(slug, billing);
  const choose = (slug: string) => {
    if (!user) { navigate('/auth'); return; }
    setPaying(slug);
  };
  const id = profile?.public_id ?? publicId;

  return (
    <div>
      <div className="mb-5 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-500/25 dark:text-emerald-300">
          <Gift className="h-4 w-4" />{t('plans.pill', { days: LEARN_TRIAL_DAYS })}
        </span>
      </div>

      <div className="mb-7 flex justify-center">
        <div className="inline-flex rounded-2xl border border-border bg-secondary/70 p-1" role="tablist" aria-label={t('plans.billingPeriod')}>
          {(['month', 'quarter', 'half-year'] as const).map((b) => (
            <button key={b} type="button" role="tab" aria-selected={billing === b} onClick={() => setBilling(b)}
              className={cn('flex items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold transition-all sm:gap-2 sm:px-4', billing === b ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground')}>
              {billingLabel(lang, b)}
              {BILLING_DISCOUNT[b] > 0 && <span className="rounded-full bg-emerald-500 px-1.5 py-0.5 text-[10px] font-bold text-white">-{Math.round(BILLING_DISCOUNT[b] * 100)}%</span>}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-4xl items-stretch gap-6 md:grid-cols-2 md:pt-3">
        {plans.map((plan, index) => {
          const ielts = plan.slug === 'plus';
          const isCurrent = currentPlan === plan.slug;
          const price = planPrice(plan.slug, billing);
          const e = getPlanEntitlement(plan.slug);
          const Icon = ielts ? Target : GraduationCap;
          const months = BILLING_MONTHS[billing];
          const regular = planTotalUzs(plan.slug, 'month') * months;
          const discounted = months > 1;
          const trialOffer = !ielts && !user;
          const payHref = telegramPayLink(plan.slug, billing, id, lang);
          const payLabel = ONLINE_PAYMENTS ? t('plans.buy', { name: e.name }) : t('plans.tg.pay');
          return (
            <motion.div key={plan.slug} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}
              className={cn('relative flex flex-col rounded-3xl p-6 sm:p-7',
                ielts ? 'bg-gradient-to-b from-primary/[0.09] via-card to-card shadow-2xl shadow-primary/15 ring-2 ring-primary md:-translate-y-3' : 'bg-card shadow-lg shadow-black/[0.04] ring-1 ring-border')}>
              {(plan.badge || ielts) && (
                <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-primary px-3.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground shadow-md">
                  <Sparkles className="h-3 w-3" />{plan.badge || t('plans.best')}
                </div>
              )}

              <div className="mb-5 flex items-center gap-3">
                <span className={cn('grid h-11 w-11 shrink-0 place-items-center rounded-2xl', ielts ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary')}><Icon className="h-5 w-5" /></span>
                <div className="min-w-0">
                  <h3 className="text-xl font-extrabold leading-tight">{e.name}</h3>
                  <p className="truncate text-sm text-muted-foreground">{TAGLINE[plan.slug] ? t(TAGLINE[plan.slug]) : ''}</p>
                </div>
              </div>

              <div className="mb-5">
                {discounted && <p className="text-sm text-muted-foreground line-through decoration-destructive/60">{formatUzs(regular)} {t('plans.som')}</p>}
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-[2.6rem] font-black leading-none tracking-tight text-foreground">{price.uzs}</span>
                  <span className="text-sm font-medium text-muted-foreground">{billing === 'month' ? t('plans.price.month') : t('plans.price.period', { period: billingLabel(lang, billing) })}</span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">{t('plans.perDay', { uzs: formatUzs(perDayUzs(plan.slug, billing)) })}</span>
                  <span className="text-muted-foreground">{t('plans.usd', { usd: price.usd })}</span>
                  {discounted && <span className="rounded-full bg-emerald-500/15 px-2.5 py-1 font-semibold text-emerald-700 dark:text-emerald-300">{t('plans.save', { amount: price.saveUzs })}</span>}
                </div>
              </div>

              <ul className="mb-6 flex-1 space-y-2.5">
                {planFeatures(plan.slug, lang).map((f, i) => (
                  <li key={f} className="flex items-start gap-2.5 text-[15px] leading-snug">
                    <span className={cn('mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full', ielts && i === 0 ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary')}><Check className="h-3 w-3" strokeWidth={3} /></span>
                    <span className={cn(ielts && i === 0 && 'font-semibold')}>{f}</span>
                  </li>
                ))}
              </ul>

              {isCurrent && billing === 'month' ? (
                <Button variant="outline" size="lg" className="w-full" disabled>{t('plans.current')}</Button>
              ) : trialOffer ? (
                <>
                  <Button size="lg" variant="glow" className="w-full gap-2 text-base font-bold" onClick={() => navigate('/auth?next=%2Flearn')}>
                    <Gift className="h-4 w-4" />{t('plans.cta.trial', { days: LEARN_TRIAL_DAYS })}
                  </Button>
                  <p className="mt-2.5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground"><ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />{t('plans.cta.nocard')}</p>
                  {ONLINE_PAYMENTS
                    ? <button type="button" onClick={() => choose(plan.slug)} className="mt-1 text-center text-xs font-medium text-muted-foreground hover:text-primary hover:underline">{t('plans.cta.orPay')}</button>
                    : <a href={payHref} target="_blank" rel="noopener noreferrer" className="mt-1 text-center text-xs font-medium text-muted-foreground hover:text-primary hover:underline">{t('plans.cta.orPay')}</a>}
                </>
              ) : ONLINE_PAYMENTS ? (
                <Button size="lg" variant={ielts ? 'glow' : 'outline'} className="w-full gap-2 text-base font-bold" onClick={() => choose(plan.slug)}>
                  <CreditCard className="h-4 w-4" />{payLabel}
                </Button>
              ) : (
                <Button asChild size="lg" variant={ielts ? 'glow' : 'outline'} className="w-full gap-2 text-base font-bold">
                  <a href={payHref} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" />{payLabel}</a>
                </Button>
              )}
              {!trialOffer && !(isCurrent && billing === 'month') && (
                ONLINE_PAYMENTS ? (
                  <a href={visaLink(plan.slug, billing, id, lang)} target="_blank" rel="noopener noreferrer" className="mt-2.5 text-center text-xs text-muted-foreground hover:text-primary hover:underline">{t('plans.visa.short')}</a>
                ) : (
                  <p className="mt-2.5 text-center text-xs text-muted-foreground">{t('plans.support.note')}</p>
                )
              )}
            </motion.div>
          );
        })}
      </div>

      {testPriceUzs !== null && <p className="mt-3 text-center text-xs text-amber-600 dark:text-amber-400">{t('plans.testMode', { amount: formatUzs(testPriceUzs) })}</p>}
      {ONLINE_PAYMENTS && paying && <PayDialog open onOpenChange={(v) => { if (!v) setPaying(null); }} plan={paying} billing={billing} amountUzs={payAmount(paying)} testMode={testPriceUzs !== null} />}
    </div>
  );
}

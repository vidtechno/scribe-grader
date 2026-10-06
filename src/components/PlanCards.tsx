import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ClipboardList, ExternalLink, GraduationCap, Mic, PenLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Billing, getPlanEntitlement, planPrice, purchaseLink } from '@/lib/plans';

export interface PlanRow {
  slug: string;
  name: string;
  description: string | null;
  badge: string | null;
  writing_limit: number;
  speaking_limit: number;
  mock_test_limit: number;
}

/** Go / Plus cards with a 1 month / 6 months (-10%) switch. Used on the landing page and in the pricing dialog. */
export function PlanCards({ plans, currentPlan, publicId }: { plans: PlanRow[]; currentPlan?: string; publicId?: string | null }) {
  const [billing, setBilling] = useState<Billing>('month');
  return (
    <div>
      <div className="flex justify-center mb-6">
        <div className="inline-flex p-1 rounded-xl bg-secondary/70 border border-border" role="tablist" aria-label="Billing period">
          {([['month', '1 month'], ['half-year', '6 months']] as const).map(([id, label]) => (
            <button key={id} type="button" role="tab" aria-selected={billing === id} onClick={() => setBilling(id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${billing === id ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
              {label}
              {id === 'half-year' && <span className="text-[10px] font-bold rounded-full bg-emerald-500 text-white px-1.5 py-0.5">-10%</span>}
            </button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full">
        {plans.map((plan, index) => {
          const popular = plan.slug === 'plus';
          const isCurrent = currentPlan === plan.slug;
          const price = planPrice(plan.slug, billing);
          const features = getPlanEntitlement(plan.slug).features;
          return (
            <motion.div key={plan.slug} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}
              className={`relative rounded-2xl border p-6 flex flex-col ${popular ? 'border-primary bg-primary/5 shadow-xl shadow-primary/10' : 'border-border glass-card'}`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wide">{plan.badge}</div>
              )}
              <p className="text-[10px] font-bold uppercase tracking-[.16em] text-primary mb-2">IELTS + English course</p>
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              {plan.description && <p className="text-xs text-muted-foreground mb-4">{plan.description}</p>}
              <div className="mb-5">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold text-primary">${price.usd}</span>
                  <span className="text-xs text-muted-foreground">{billing === 'month' ? '/ month' : '/ 6 months'}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">or {price.uzs} so'm{billing === 'month' ? ' / month' : ''} in Uzbekistan</p>
                {billing === 'half-year' && (
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1">{price.perMonthUzs} so'm / month · you save {price.saveUzs} so'm</p>
                )}
              </div>
              <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Every month</p>
              <ul className="space-y-2 mb-4 text-sm">
                <li className="flex items-center gap-2"><PenLine className="h-4 w-4 text-primary shrink-0" /><span><strong>{plan.writing_limit}</strong> Writing evaluations</span></li>
                <li className="flex items-center gap-2"><Mic className="h-4 w-4 text-primary shrink-0" /><span><strong>{plan.speaking_limit}</strong> Speaking evaluations</span></li>
                <li className="flex items-center gap-2"><ClipboardList className="h-4 w-4 text-primary shrink-0" /><span><strong>{plan.mock_test_limit}</strong> Full Mock Tests</span></li>
                <li className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-primary shrink-0" /><span><strong>English course</strong> from zero — unlimited</span></li>
              </ul>
              <ul className="space-y-2 mb-6 flex-1">
                {features.map((f) => <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground"><Check className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" /><span>{f}</span></li>)}
              </ul>
              <Button variant={popular ? 'glow' : 'outline'} className="w-full gap-2 mt-auto" disabled={isCurrent && billing === 'month'}
                onClick={() => window.open(purchaseLink(plan.slug, billing, publicId), '_blank')}>
                <ExternalLink className="h-4 w-4" />
                {isCurrent && billing === 'month' ? 'Current plan' : `Get ${plan.name}${billing === 'half-year' ? ' for 6 months' : ''}`}
              </Button>
            </motion.div>
          );
        })}
      </div>
      <p className="text-xs text-muted-foreground text-center mt-6">
        Payments are handled via Telegram <span className="text-primary font-semibold">@scorify_payments</span>. Your plan activates after confirmation
        and lasts {billing === 'month' ? '30 days' : '6 months; Writing, Speaking and Mock Test allowances renew every 30 days'}.
      </p>
    </div>
  );
}

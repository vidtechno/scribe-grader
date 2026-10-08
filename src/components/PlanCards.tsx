import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ExternalLink, GraduationCap, Mic, PenLine, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Billing, LEARN_TRIAL_DAYS, getPlanEntitlement, planPrice, purchaseLink } from '@/lib/plans';

export interface PlanRow {
  slug: string;
  name: string;
  description: string | null;
  badge: string | null;
  writing_limit: number;
  speaking_limit: number;
  mock_test_limit: number;
}

const TAGLINE: Record<string, string> = {
  go: "Ingliz tilini bosqichma-bosqich o'rganing",
  plus: "Ingliz tili va IELTS ga tayyorlanish",
};

/** Learn and IELTS side by side, with a 1 month / 6 months (-10%) switch. Used on the landing page and in the pricing dialog. */
export function PlanCards({ plans, currentPlan, publicId }: { plans: PlanRow[]; currentPlan?: string; publicId?: string | null }) {
  const [billing, setBilling] = useState<Billing>('month');
  return (
    <div>
      <div className="max-w-4xl mx-auto mb-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm flex items-start gap-3">
        <GraduationCap className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
        <p>
          <strong>Har bir yangi hisobga {LEARN_TRIAL_DAYS} kun Learn bepul</strong> — barcha darslar va moslashuvchan tizim —
          shuningdek 3 ta Writing va 2 ta Speaking baholash. Keyin Learn yoki IELTS ni tanlaysiz.
        </p>
      </div>
      <div className="flex justify-center mb-6">
        <div className="inline-flex p-1 rounded-xl bg-secondary/70 border border-border" role="tablist" aria-label="To'lov davri">
          {([['month', '1 oy'], ['half-year', '6 oy']] as const).map(([id, label]) => (
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
                  <p className="text-xs text-muted-foreground">{TAGLINE[plan.slug]}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold text-primary">{price.uzs}</span>
                  <span className="text-sm text-muted-foreground">so'm {billing === 'month' ? '/ oy' : '/ 6 oy'}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">≈ ${price.usd}{billing === 'half-year' ? ` · ${price.perMonthUzs} so'm / oy` : ''}</p>
                {billing === 'half-year' && <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1">Tejaysiz: {price.saveUzs} so'm</p>}
              </div>
              <p className={`text-xs font-semibold rounded-lg px-3 py-2 mb-4 ${ielts ? 'bg-secondary text-muted-foreground' : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'}`}>
                {ielts ? "Sinov yo'q — avval Learn ni bepul sinab ko'ring" : `Yangi hisoblar uchun ${LEARN_TRIAL_DAYS} kun bepul`}
              </p>
              {ielts && (
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="rounded-xl bg-background/70 border border-border p-3 text-center"><PenLine className="h-4 w-4 text-primary mx-auto mb-1" /><p className="text-xl font-bold leading-none">{e.personal.writing}</p><p className="text-[11px] text-muted-foreground mt-1">Writing / oy</p></div>
                  <div className="rounded-xl bg-background/70 border border-border p-3 text-center"><Mic className="h-4 w-4 text-primary mx-auto mb-1" /><p className="text-xl font-bold leading-none">{e.personal.speaking}</p><p className="text-[11px] text-muted-foreground mt-1">Speaking / oy</p></div>
                </div>
              )}
              <ul className="space-y-2 mb-6 flex-1">
                {e.features.map((f) => <li key={f} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /><span>{f}</span></li>)}
              </ul>
              <Button variant={ielts ? 'glow' : 'outline'} className="w-full gap-2 mt-auto" disabled={isCurrent && billing === 'month'}
                onClick={() => window.open(purchaseLink(plan.slug, billing, publicId), '_blank')}>
                <ExternalLink className="h-4 w-4" />
                {isCurrent && billing === 'month' ? 'Joriy tarif' : `${e.name} ni tanlash${billing === 'half-year' ? ' · 6 oy' : ''}`}
              </Button>
            </motion.div>
          );
        })}
      </div>
      <p className="text-xs text-muted-foreground text-center mt-6">
        To'lov Telegram orqali: <span className="text-primary font-semibold">@scorify_support</span>. Tasdiqlangach tarif yoqiladi va
        {billing === 'month' ? ' 30 kun amal qiladi' : ' 6 oy amal qiladi; IELTS oylik limitlari har 30 kunda yangilanadi'}.
      </p>
    </div>
  );
}

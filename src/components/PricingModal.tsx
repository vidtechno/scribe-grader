import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, ExternalLink, PenLine, Mic, ClipboardList, Sparkles, Crown, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { TEACHER_PLANS, type TeacherPlan } from '@/lib/teacher-plans';

const TELEGRAM_USERNAME = 'scorify_payments';

interface Plan {
  slug: string;
  name: string;
  price: number;
  price_uzs: string | null;
  writing_limit: number;
  speaking_limit: number;
  mock_test_limit: number;
  features: string[];
  description: string | null;
  sort_order: number;
  badge: string | null;
}

interface PricingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentPlan?: string;
}

export function PricingModal({ open, onOpenChange, currentPlan }: PricingModalProps) {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    if (!open) return;
    (async () => {
      const { data } = await supabase
        .from('subscription_plans')
        .select('*')
        .eq('is_active', true)
        .neq('slug', 'free')
        .order('sort_order');
      const mappedPlans = (data || []).map((plan) => ({
        ...plan,
        features: Array.isArray(plan.features)
          ? plan.features.filter((feature): feature is string => typeof feature === 'string')
          : [],
      }));
      setPlans(mappedPlans as Plan[]);
    })();
  }, [open]);

  const handleBuy = (plan: Plan) => {
    const msg = encodeURIComponent(
      `Salom! Men "${plan.name}" tarifini sotib olmoqchiman (${plan.price_uzs} so'm / oy).`
    );
    window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${msg}`, '_blank');
  };

  const handleTeacherBuy = (plan: TeacherPlan) => {
    const msg = encodeURIComponent(
      `Salom! Men "${plan.name}" tarifini sotib olmoqchiman (${plan.priceUzs} so'm / oy).`
    );
    window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${msg}`, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-border max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <Crown className="h-6 w-6 text-primary" /> Choose Your Plan
          </DialogTitle>
          <DialogDescription className="text-center">
            Choose a learner plan for IELTS practice or a teacher plan for class assessments.
          </DialogDescription>
        </DialogHeader>

        {/* Motivational block */}
        <div className="glass-card p-5 mb-2 border-l-4 border-l-primary">
          <div className="flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-primary mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              IELTS success is built on consistent practice and insightful feedback.
              Our platform empowers you to master your skills with targeted analysis,
              turning every exercise into a step toward your goal.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 py-4">
          {plans.map((plan, index) => {
            const popular = (plan.badge || '').toLowerCase().includes('popular');
            const isCurrent = currentPlan === plan.slug;
            return (
              <motion.div
                key={plan.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`relative rounded-xl border p-5 flex flex-col ${
                  popular
                    ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10 scale-[1.02]'
                    : 'border-border bg-secondary/20'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wide">
                    {plan.badge}
                  </div>
                )}
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-primary mb-2">For learners</p>
                <h3 className="font-bold text-lg">{plan.name}</h3>
                {plan.description && (
                  <p className="text-xs text-muted-foreground mb-3">{plan.description}</p>
                )}
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-primary">{plan.price_uzs}</span>
                  <span className="text-xs text-muted-foreground">so'm / month</span>
                </div>
                <ul className="space-y-2 mb-5 flex-1">
                  <li className="flex items-center gap-2 text-sm">
                    <PenLine className="h-4 w-4 text-primary flex-shrink-0" />
                    <span><strong>{plan.writing_limit}</strong> Writing evaluations</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Mic className="h-4 w-4 text-primary flex-shrink-0" />
                    <span><strong>{plan.speaking_limit}</strong> Speaking evaluations</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <ClipboardList className="h-4 w-4 text-primary flex-shrink-0" />
                    <span><strong>{plan.mock_test_limit}</strong> Full Mock Tests</span>
                  </li>
                  {(plan.features || []).slice(3).filter((f) => !/mentor/i.test(f)).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Check className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={popular ? 'glow' : 'outline'}
                  className="w-full gap-2 mt-auto"
                  onClick={() => handleBuy(plan)}
                  disabled={isCurrent}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {isCurrent ? 'Current Plan' : 'Buy via Telegram'}
                </Button>
              </motion.div>
            );
          })}
          {TEACHER_PLANS.map((plan, index) => (
            <motion.div
              key={plan.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (plans.length + index) * 0.05 }}
              className={`relative rounded-xl border p-5 flex flex-col ${
                plan.badge ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10' : 'border-border bg-secondary/20'
              }`}
            >
              {plan.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wide">{plan.badge}</div>}
              <p className="text-[10px] font-bold uppercase tracking-[.16em] text-primary mb-2">For teachers</p>
              <h3 className="font-bold text-lg">{plan.name}</h3>
              <p className="text-xs text-muted-foreground mb-3 min-h-10">{plan.description}</p>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-primary">{plan.priceUzs}</span>
                <span className="text-xs text-muted-foreground">so'm / month</span>
              </div>
              <ul className="space-y-2 mb-5 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    {featureIndex === 0 ? <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> : <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />}
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant={plan.badge ? 'glow' : 'outline'} className="w-full gap-2 mt-auto" onClick={() => handleTeacherBuy(plan)}>
                <ExternalLink className="h-3.5 w-3.5" /> Buy via Telegram
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground text-center">
          Payments are handled manually via Telegram @{TELEGRAM_USERNAME}. Your plan is activated after confirmation and lasts for 30 days.
        </p>
      </DialogContent>
    </Dialog>
  );
}

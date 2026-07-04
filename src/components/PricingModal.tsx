import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, ExternalLink, PenLine, Mic, ClipboardList, Sparkles, Crown } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

const TELEGRAM_USERNAME = 'writingexambase';

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
      setPlans((data as any as Plan[]) || []);
    })();
  }, [open]);

  const handleBuy = (plan: Plan) => {
    const msg = encodeURIComponent(
      `Salom! Men "${plan.name}" tarifini sotib olmoqchiman (${plan.price_uzs} so'm / oy).`
    );
    window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${msg}`, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-border max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <Crown className="h-6 w-6 text-primary" /> Choose Your Plan
          </DialogTitle>
          <DialogDescription className="text-center">
            Monthly subscriptions with Writing, Speaking and Mock Test evaluations included.
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

        <div className="grid sm:grid-cols-3 gap-3 py-4">
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
                  {(plan.features || []).slice(3).map((f) => (
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
        </div>

        <p className="text-xs text-muted-foreground text-center">
          Payments are handled manually via Telegram @{TELEGRAM_USERNAME}. Your plan is activated after confirmation and lasts for 30 days.
        </p>
      </DialogContent>
    </Dialog>
  );
}
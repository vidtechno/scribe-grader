import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, ExternalLink, PenLine, Mic, ClipboardList, Sparkles, Crown, GraduationCap, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

const TELEGRAM_USERNAME = 'scorify_payments';

interface Plan {
  slug: string;
  name: string;
  price: number;
  price_uzs: string | null;
  writing_limit: number;
  speaking_limit: number;
  mock_test_limit: number;
  teacher_grammar_limit: number;
  teacher_writing_limit: number;
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-border max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <Crown className="h-6 w-6 text-primary" /> Choose Your Plan
          </DialogTitle>
          <DialogDescription className="text-center">
            One subscription unlocks both personal IELTS practice and Teacher Mode.
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

        <div className="grid md:grid-cols-2 gap-4 py-4 max-w-4xl mx-auto w-full">
          {plans.map((plan, index) => {
            const popular = plan.slug === 'plus';
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
                <p className="text-[10px] font-bold uppercase tracking-[.16em] text-primary mb-2">Student + Teacher Mode</p>
                <h3 className="font-bold text-lg">{plan.name}</h3>
                {plan.description && (
                  <p className="text-xs text-muted-foreground mb-3">{plan.description}</p>
                )}
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-primary">{plan.price_uzs}</span>
                  <span className="text-xs text-muted-foreground">so'm / month</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Personal usage</p>
                <ul className="space-y-2 mb-4">
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
                </ul>
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Teacher usage</p>
                <ul className="space-y-2 mb-5 flex-1">
                  <li className="flex items-center gap-2 text-sm"><GraduationCap className="h-4 w-4 text-primary"/><span><strong>Unlimited</strong> test creation</span></li>
                  <li className="flex items-center gap-2 text-sm"><BookOpen className="h-4 w-4 text-primary"/><span><strong>{plan.teacher_grammar_limit.toLocaleString()}</strong> Grammar submissions</span></li>
                  <li className="flex items-center gap-2 text-sm"><PenLine className="h-4 w-4 text-primary"/><span><strong>{plan.teacher_writing_limit}</strong> Writing evaluations</span></li>
                  <li className="flex items-start gap-2 text-xs text-muted-foreground"><Check className="h-3.5 w-3.5 text-primary mt-0.5"/><span>Invite links, test settings, participants and question analytics</span></li>
                  <li className="flex items-start gap-2 text-xs text-muted-foreground"><Check className="h-3.5 w-3.5 text-primary mt-0.5"/><span>Daily Grammar, AI Mentor and progress history included</span></li>
                </ul>
                <Button
                  variant={popular ? 'glow' : 'outline'}
                  className="w-full gap-2 mt-auto"
                  onClick={() => handleBuy(plan)}
                  disabled={isCurrent}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  {isCurrent ? 'Current Plan' : `Get ${plan.name}`}
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

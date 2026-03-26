import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, Crown, Zap, Star, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const TELEGRAM_USERNAME = 'diyorbek_anorboyev';

interface Plan {
  name: string;
  price: string;
  priceUzs: string;
  period: string;
  icon: typeof Star;
  features: string[];
  credits: string;
  popular?: boolean;
}

interface PricingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentPlan?: string;
}

const plans: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    priceUzs: "0 so'm",
    period: '',
    icon: Star,
    credits: '3 essays / month',
    features: [
      '3 essay evaluations per month',
      'Band scores for all 4 criteria',
      'Partial feedback (first 8 words)',
      'Last 10 essays progress chart',
      'Basic task distribution stats',
    ],
  },
  {
    name: 'Pro',
    price: '$3',
    priceUzs: "29,000 so'm",
    period: '/month',
    icon: Zap,
    credits: '25 essays / month',
    popular: true,
    features: [
      '25 essay evaluations per month',
      'Full detailed AI feedback',
      'Error correction with explanations',
      'Score analytics & weekly activity',
      'All IELTS topics',
      'Essays history with pagination',
      'Progress reports',
    ],
  },
  {
    name: 'Pro Plus',
    price: '$10',
    priceUzs: "99,000 so'm",
    period: '/month',
    icon: Crown,
    credits: '100 essays / month',
    features: [
      '100 essay evaluations per month',
      'Full detailed AI feedback',
      'Advanced error correction',
      'Full analytics dashboard',
      'Priority grading speed',
      'All IELTS topics',
      'Essays history with pagination',
      'Personalized improvement tips',
    ],
  },
];

export function PricingModal({ open, onOpenChange, currentPlan = 'free' }: PricingModalProps) {
  const handleUpgrade = () => {
    window.open(`https://t.me/${TELEGRAM_USERNAME}`, '_blank');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-border max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Choose Your Plan</DialogTitle>
          <DialogDescription className="text-center">
            Upgrade your plan to unlock more features and practice more
          </DialogDescription>
        </DialogHeader>

        <div className="grid sm:grid-cols-3 gap-4 py-4">
          {plans.map((plan, index) => {
            const isCurrent = plan.name.toLowerCase().replace(' ', '_') === currentPlan;
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-xl border p-5 flex flex-col ${
                  plan.popular
                    ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                    : 'border-border bg-secondary/20'
                } ${isCurrent ? 'ring-2 ring-primary' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    Popular
                  </div>
                )}

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-bold">{plan.name}</h3>
                </div>

                <div className="mb-1">
                  <span className="text-2xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{plan.priceUzs}{plan.period}</p>
                <p className="text-sm font-medium text-primary mb-4">{plan.credits}</p>

                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {isCurrent ? (
                  <Button variant="outline" disabled className="w-full">
                    Current Plan
                  </Button>
                ) : plan.name === 'Free' ? (
                  <Button variant="outline" disabled className="w-full">
                    Default
                  </Button>
                ) : (
                  <Button
                    variant={plan.popular ? 'glow' : 'outline'}
                    className="w-full gap-2"
                    onClick={handleUpgrade}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Upgrade
                  </Button>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="glass-card p-4 text-center space-y-2">
          <p className="text-sm font-medium">
            To upgrade your plan, please contact admin via Telegram
          </p>
          <p className="text-xs text-muted-foreground">
            Ta'rifga o'tish uchun Telegram orqali admin bilan bog'laning
          </p>
          <Button variant="glow" size="sm" className="gap-2 mt-2" onClick={handleUpgrade}>
            <ExternalLink className="h-4 w-4" />
            Contact @diyorbek_anorboyev
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

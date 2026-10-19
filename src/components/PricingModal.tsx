import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { PlanCards } from '@/components/PlanCards';
import { useT } from '@/i18n';
import { useAuth } from '@/hooks/useAuth';
import { Crown } from 'lucide-react';
import { loadActivePlans } from '@/lib/cached-plans';

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
  const { profile } = useAuth();
  const { t } = useT();

  useEffect(() => {
    if (!open) return;
    (async () => {
      const data = await loadActivePlans<Plan & { features: unknown }>();
      const mappedPlans = data.map((plan) => ({
        ...plan,
        features: Array.isArray(plan.features)
          ? plan.features.filter((feature): feature is string => typeof feature === 'string')
          : [],
      }));
      setPlans(mappedPlans as Plan[]);
    })();
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-border max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <Crown className="h-6 w-6 text-primary" /> {t('pricingModal.title')}
          </DialogTitle>
          <DialogDescription className="text-center">
            {t('pricingModal.desc')}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4"><PlanCards plans={plans} currentPlan={currentPlan} publicId={profile?.public_id} /></div>
      </DialogContent>
    </Dialog>
  );
}

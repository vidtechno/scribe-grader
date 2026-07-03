import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, ExternalLink, Coins, PenLine, Mic, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

const TELEGRAM_USERNAME = 'writingexambase';

interface CreditPackage {
  slug: string;
  name: string;
  price: number;
  price_uzs: string | null;
  credit_amount: number;
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

export function PricingModal({ open, onOpenChange }: PricingModalProps) {
  const [packages, setPackages] = useState<CreditPackage[]>([]);
  const [featuresText, setFeaturesText] = useState<string>('');

  useEffect(() => {
    if (!open) return;
    (async () => {
      const [{ data: planData }, { data: settings }] = await Promise.all([
        supabase.from('subscription_plans').select('*').eq('is_active', true).order('sort_order'),
        supabase.from('app_settings').select('key, value').eq('key', 'credits_features').maybeSingle(),
      ]);
      setPackages((planData as any as CreditPackage[]) || []);
      if (settings?.value) setFeaturesText(settings.value);
    })();
  }, [open]);

  const handleBuy = (pkg: CreditPackage) => {
    const msg = encodeURIComponent(`Hi! I'd like to buy the "${pkg.name}" pack (${pkg.credit_amount} credits — ${pkg.price_uzs} so'm).`);
    window.open(`https://t.me/${TELEGRAM_USERNAME}?text=${msg}`, '_blank');
  };

  const features = (featuresText || '').split('\n').filter(Boolean);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-border max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <Coins className="h-6 w-6 text-primary" /> Buy Credits
          </DialogTitle>
          <DialogDescription className="text-center">
            Pay once, use anytime. Credits never expire.
          </DialogDescription>
        </DialogHeader>

        {/* What you get */}
        <div className="glass-card p-5 mb-2">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-4 w-4 text-primary" />
            <h3 className="font-semibold text-sm">What every credit unlocks</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-4">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{f}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-3 border-t border-border/60">
            <div className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-primary/10 text-primary">
              <PenLine className="h-3.5 w-3.5" /> Writing essay = 2 credits
            </div>
            <div className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-accent/10 text-accent-foreground border border-accent/30">
              <Mic className="h-3.5 w-3.5" /> Speaking attempt = 2 credits
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 py-4">
          {packages.map((pkg, index) => {
            const popular = (pkg.badge || '').toLowerCase().includes('popular');
            return (
              <motion.div key={pkg.slug}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`relative rounded-xl border p-5 flex flex-col ${
                  popular ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10' : 'border-border bg-secondary/20'
                }`}>
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wide">
                    {pkg.badge}
                  </div>
                )}
                <h3 className="font-bold text-lg">{pkg.name}</h3>
                {pkg.description && <p className="text-xs text-muted-foreground mb-3">{pkg.description}</p>}
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-bold text-primary">{pkg.credit_amount}</span>
                  <span className="text-xs text-muted-foreground">credits</span>
                </div>
                <p className="text-sm font-medium mb-4">{pkg.price_uzs} so'm <span className="text-xs text-muted-foreground">(~${pkg.price})</span></p>
                <Button variant={popular ? 'glow' : 'outline'} className="w-full gap-2 mt-auto" onClick={() => handleBuy(pkg)}>
                  <ExternalLink className="h-3.5 w-3.5" /> Buy via Telegram
                </Button>
              </motion.div>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground text-center">
          Payments are completed via Telegram with admin @{TELEGRAM_USERNAME}. Credits are added to your account after confirmation.
        </p>
      </DialogContent>
    </Dialog>
  );
}
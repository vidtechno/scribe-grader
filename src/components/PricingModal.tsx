import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Check, Crown, Star, ExternalLink, Mic, FileText, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

const TELEGRAM_USERNAME = 'writingexambase';

interface Plan {
  slug: string;
  name: string;
  price: number;
  price_uzs: string | null;
  period: string | null;
  credits_limit: number;
  speaking_limit: number;
  mentor_limit: number;
  features: string[];
  description: string | null;
  details: string | null;
  sort_order: number;
}

interface PricingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentPlan?: string;
}

export function PricingModal({ open, onOpenChange, currentPlan = 'free' }: PricingModalProps) {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [extraUsd, setExtraUsd] = useState('0.15');
  const [extraUzs, setExtraUzs] = useState('1200');

  useEffect(() => {
    if (!open) return;
    (async () => {
      const [{ data: planData }, { data: settings }] = await Promise.all([
        supabase.from('subscription_plans').select('*').eq('is_active', true).order('sort_order'),
        supabase.from('app_settings').select('key, value').in('key', ['extra_credit_price_usd','extra_credit_price_uzs']),
      ]);
      setPlans((planData as any as Plan[]) || []);
      (settings || []).forEach((s: any) => {
        if (s.key === 'extra_credit_price_usd') setExtraUsd(s.value);
        if (s.key === 'extra_credit_price_uzs') setExtraUzs(s.value);
      });
    })();
  }, [open]);

  const handleUpgrade = () => window.open(`https://t.me/${TELEGRAM_USERNAME}`, '_blank');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-border max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">Ta'rifni tanlang</DialogTitle>
          <DialogDescription className="text-center">
            Ko'proq imkoniyatlardan foydalanish uchun ta'rifni yangilang
          </DialogDescription>
        </DialogHeader>

        <div className="grid sm:grid-cols-2 gap-4 py-4">
          {plans.map((plan, index) => {
            const isCurrent = plan.slug === currentPlan;
            const isPaid = plan.slug !== 'free';
            const Icon = isPaid ? Crown : Star;
            return (
              <motion.div key={plan.slug}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-xl border p-6 flex flex-col ${
                  isPaid ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10' : 'border-border bg-secondary/20'
                } ${isCurrent ? 'ring-2 ring-primary' : ''}`}>
                {isPaid && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    Tavsiya etiladi
                  </div>
                )}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{plan.name}</h3>
                </div>
                <div className="mb-1">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{plan.price_uzs} so'm{plan.period}</p>
                {plan.description && <p className="text-xs italic text-primary mb-3">{plan.description}</p>}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="rounded-lg bg-card border border-border p-2 text-center">
                    <FileText className="h-3.5 w-3.5 mx-auto text-primary mb-0.5" />
                    <p className="text-base font-bold">{plan.credits_limit}</p>
                    <p className="text-[9px] text-muted-foreground">essay/oy</p>
                  </div>
                  <div className="rounded-lg bg-card border border-border p-2 text-center">
                    <Mic className="h-3.5 w-3.5 mx-auto text-primary mb-0.5" />
                    <p className="text-base font-bold">{plan.speaking_limit}</p>
                    <p className="text-[9px] text-muted-foreground">speaking/oy</p>
                  </div>
                  <div className="rounded-lg bg-card border border-border p-2 text-center">
                    <MessageSquare className="h-3.5 w-3.5 mx-auto text-primary mb-0.5" />
                    <p className="text-base font-bold">{plan.mentor_limit || '—'}</p>
                    <p className="text-[9px] text-muted-foreground">mentor/kun</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4 flex-1">
                  {(plan.features || []).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.details && (
                  <details className="mb-4 text-xs text-muted-foreground">
                    <summary className="cursor-pointer font-medium text-primary mb-1">Batafsil</summary>
                    <p className="leading-relaxed">{plan.details}</p>
                  </details>
                )}
                {isPaid && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3 p-2 rounded-lg bg-secondary/40">
                    <Clock className="h-3 w-3" />
                    <span>Muddat: 30 kun (avtomatik tugaydi)</span>
                  </div>
                )}
                {isCurrent ? (
                  <Button variant="outline" disabled className="w-full">Joriy ta'rif</Button>
                ) : !isPaid ? (
                  <Button variant="outline" disabled className="w-full">Asosiy ta'rif</Button>
                ) : (
                  <Button variant="glow" className="w-full gap-2" onClick={handleUpgrade}>
                    <ExternalLink className="h-4 w-4" /> Telegram orqali sotib olish
                  </Button>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="glass-card p-4 text-center space-y-2 mt-2">
          <p className="text-sm font-medium">
            Qo'shimcha kredit: <span className="text-primary">${extraUsd}</span> / <span className="text-primary">{extraUzs} so'm</span> har biri
          </p>
          <p className="text-xs text-muted-foreground">
            Yangilash yoki qo'shimcha kreditlar uchun Telegram orqali admin bilan bog'laning
          </p>
          <Button variant="glow" size="sm" className="gap-2 mt-2" onClick={handleUpgrade}>
            <ExternalLink className="h-4 w-4" /> Contact @writingexambase
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
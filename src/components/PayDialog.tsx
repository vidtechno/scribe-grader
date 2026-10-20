import { useState } from 'react';
import { Loader2, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { startCheckout, type CheckoutMethod } from '@/lib/checkout';
import { useT } from '@/i18n';
import { Rich } from '@/i18n/rich';
import { useAuth } from '@/hooks/useAuth';
import { billingLabel, formatUzs, getPlanEntitlement, planPrice, visaLink, type Billing } from '@/lib/plans';

const METHODS: { id: CheckoutMethod; name: string; hint: string; className: string }[] = [
  { id: 'click', name: 'Click', hint: 'pay.click.hint', className: 'bg-[#00b5ff] hover:bg-[#0099dd] text-white' },
  { id: 'payme', name: 'Payme', hint: 'pay.payme.hint', className: 'bg-[#33cccc] hover:bg-[#29b3b3] text-slate-900' },
];

/** Asks how to pay (Click or Payme), creates the invoice and sends the payer to the payment page. */
export function PayDialog({ open, onOpenChange, plan, billing, amountUzs, testMode }: {
  open: boolean; onOpenChange: (open: boolean) => void; plan: string; billing: Billing; amountUzs: number; testMode: boolean;
}) {
  const { t, lang } = useT();
  const { profile } = useAuth();
  const [busy, setBusy] = useState<CheckoutMethod | null>(null);
  const name = getPlanEntitlement(plan).name;

  const pay = async (method: CheckoutMethod) => {
    if (plan !== 'go' && plan !== 'plus') return;
    setBusy(method);
    try {
      const { url } = await startCheckout({ plan, billing, method });
      window.location.assign(url);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : t('pay.failed'));
      setBusy(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!busy) onOpenChange(v); }}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>{name} · {t(`pay.billing.${billing}`)}</DialogTitle>
          <DialogDescription>
            <Rich text={t('pay.amount', { amount: formatUzs(amountUzs) })} boldClassName="text-foreground" />
            {testMode && <span className="block mt-1 text-amber-600 dark:text-amber-400">{t('pay.test')}</span>}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3">
          {METHODS.map((m) => (
            <Button key={m.id} type="button" disabled={!!busy} onClick={() => pay(m.id)} className={`h-14 justify-between text-base font-bold ${m.className}`}>
              <span>{m.name}</span>
              {busy === m.id ? <Loader2 className="h-5 w-5 animate-spin" /> : <span className="text-xs font-medium opacity-80">{t(m.hint)}</span>}
            </Button>
          ))}
        </div>
        <div className="rounded-xl border border-border bg-secondary/40 p-3 text-xs">
          <p className="font-semibold mb-1">{t('plans.visa.heading')}</p>
          <p className="text-muted-foreground mb-2">{t('plans.visa.text', { name, period: billingLabel(lang, billing), usd: planPrice(plan, billing).usd })}</p>
          <a href={visaLink(plan, billing, profile?.public_id, lang)} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">💳 {t('plans.visa.cta')} →</a>
        </div>
        <p className="text-xs text-muted-foreground flex items-start gap-2">
          <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5" />
          {t('pay.secure')}
        </p>
      </DialogContent>
    </Dialog>
  );
}

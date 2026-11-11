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

/**
 * Payment systems offered through Checkout.uz. Logos are the systems' own brand files: put them at public/pay/<id>.svg
 * (click, payme, uzcard-humo, paynet); until a file exists the name is shown instead.
 */
const METHODS: { id: CheckoutMethod; name: string; logo: string; hint: string }[] = [
  // Click is switched off for now (it does not work); add the line back to offer it again.
  { id: 'payme', name: 'Payme', logo: '/pay/payme.svg', hint: 'pay.payme.hint' },
  { id: 'uzcard', name: 'Uzcard / Humo', logo: '/pay/uzcard-humo.svg', hint: 'pay.card.hint' },
  { id: 'paynet', name: 'Paynet', logo: '/pay/paynet.svg', hint: 'pay.paynet.hint' },
];

function MethodLogo({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span className="font-bold">{name}</span>;
  return <img src={src} alt={name} className="h-7 max-w-[120px] object-contain" onError={() => setFailed(true)} />;
}

/** Asks how to pay (Click, Payme, Uzcard/Humo or Paynet), creates the invoice and sends the payer to the payment page. */
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
        <div className="grid grid-cols-2 gap-3">
          {METHODS.map((m) => (
            <Button key={m.id} type="button" variant="outline" disabled={!!busy} onClick={() => pay(m.id)} className="h-20 flex-col gap-1 bg-white text-slate-900 hover:bg-slate-50 border-slate-200 dark:border-slate-700">
              {busy === m.id ? <Loader2 className="h-6 w-6 animate-spin" /> : <MethodLogo src={m.logo} name={m.name} />}
              <span className="text-[11px] font-medium text-slate-500">{t(m.hint)}</span>
            </Button>
          ))}
        </div>
        <details className="rounded-xl border border-border bg-secondary/40 p-3 text-xs">
          <summary className="cursor-pointer font-semibold">{t('plans.visa.heading')}</summary>
          <div className="mt-2">
          <p className="text-muted-foreground mb-2">{t('plans.visa.text', { name, period: billingLabel(lang, billing), usd: planPrice(plan, billing).usd })}</p>
          <a href={visaLink(plan, billing, profile?.public_id, lang)} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">💳 {t('plans.visa.cta')} →</a>
          </div>
        </details>
        <p className="text-xs text-muted-foreground flex items-start gap-2">
          <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5" />
          {t('pay.secure')}
        </p>
      </DialogContent>
    </Dialog>
  );
}

import { useState } from 'react';
import { Loader2, ShieldCheck } from 'lucide-react';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { startCheckout, type CheckoutMethod } from '@/lib/checkout';
import { BILLING_LABEL, formatUzs, getPlanEntitlement, type Billing } from '@/lib/plans';

const METHODS: { id: CheckoutMethod; name: string; hint: string; className: string }[] = [
  { id: 'click', name: 'Click', hint: 'Click ilovasi yoki karta', className: 'bg-[#00b5ff] hover:bg-[#0099dd] text-white' },
  { id: 'payme', name: 'Payme', hint: 'Payme ilovasi yoki karta', className: 'bg-[#33cccc] hover:bg-[#29b3b3] text-slate-900' },
];

/** Asks how to pay (Click or Payme), creates the invoice and sends the payer to the payment page. */
export function PayDialog({ open, onOpenChange, plan, billing, amountUzs, testMode }: {
  open: boolean; onOpenChange: (open: boolean) => void; plan: string; billing: Billing; amountUzs: number; testMode: boolean;
}) {
  const [busy, setBusy] = useState<CheckoutMethod | null>(null);
  const name = getPlanEntitlement(plan).name;

  const pay = async (method: CheckoutMethod) => {
    if (plan !== 'go' && plan !== 'plus') return;
    setBusy(method);
    try {
      const { url } = await startCheckout({ plan, billing, method });
      window.location.assign(url);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "To'lovni boshlab bo'lmadi");
      setBusy(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!busy) onOpenChange(v); }}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>{name} · {BILLING_LABEL[billing]}</DialogTitle>
          <DialogDescription>
            To'lanadigan summa: <strong className="text-foreground">{formatUzs(amountUzs)} so'm</strong>
            {testMode && <span className="block mt-1 text-amber-600 dark:text-amber-400">Sinov rejimi: hozir har bir tarif shu narxda.</span>}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3">
          {METHODS.map((m) => (
            <Button key={m.id} type="button" disabled={!!busy} onClick={() => pay(m.id)} className={`h-14 justify-between text-base font-bold ${m.className}`}>
              <span>{m.name}</span>
              {busy === m.id ? <Loader2 className="h-5 w-5 animate-spin" /> : <span className="text-xs font-medium opacity-80">{m.hint}</span>}
            </Button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground flex items-start gap-2">
          <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5" />
          To'lov xavfsiz sahifada amalga oshadi. Tarif to'lovdan keyin avtomatik yoqiladi, karta ma'lumotlari bizda saqlanmaydi.
        </p>
      </DialogContent>
    </Dialog>
  );
}

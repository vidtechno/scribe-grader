import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, Loader2, RefreshCw, XCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { checkPayment, type PaymentState } from '@/lib/checkout';
import { getPlanEntitlement } from '@/lib/plans';

const POLL_MS = 3000;
const GIVE_UP_MS = 3 * 60_000;

/** Shown on the dashboard after the payer comes back from Click / Payme (`?payment=<id>`): waits for the plan to switch on. */
export function PaymentReturn({ onPaid }: { onPaid: () => void }) {
  const [params, setParams] = useSearchParams();
  const id = params.get('payment');
  const [state, setState] = useState<PaymentState | 'waiting'>('waiting');
  const [plan, setPlan] = useState<string | undefined>();
  const [attempt, setAttempt] = useState(0);
  const paidRef = useRef(false);

  useEffect(() => {
    if (!id) return;
    let stopped = false;
    const started = Date.now();
    setState('waiting');
    const tick = async () => {
      if (stopped) return;
      try {
        const r = await checkPayment(id);
        if (stopped) return;
        if (r.status === 'paid') {
          setPlan(r.plan);
          setState('paid');
          if (!paidRef.current) { paidRef.current = true; onPaid(); toast.success("To'lov qabul qilindi, tarif yoqildi!"); }
          return;
        }
        if (r.status === 'failed' || r.status === 'expired') { setState(r.status); return; }
      } catch { /* keep trying until the time is up */ }
      if (Date.now() - started > GIVE_UP_MS) { setState('pending'); return; }
      setTimeout(tick, POLL_MS);
    };
    tick();
    return () => { stopped = true; };
  }, [id, attempt, onPaid]);

  if (!id) return null;
  const close = () => { const next = new URLSearchParams(params); next.delete('payment'); setParams(next, { replace: true }); };

  return (
    <div className="mb-6 rounded-2xl border border-border bg-card p-4 flex items-start gap-3" role="status">
      {state === 'waiting' && <Loader2 className="h-5 w-5 animate-spin text-primary mt-0.5 shrink-0" />}
      {state === 'paid' && <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />}
      {(state === 'failed' || state === 'expired') && <XCircle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />}
      {(state === 'pending' || state === 'error') && <RefreshCw className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />}
      <div className="flex-1 text-sm">
        {state === 'waiting' && <><p className="font-semibold">To'lov tekshirilmoqda…</p><p className="text-muted-foreground">Bir necha soniya kuting, tarif avtomatik yoqiladi.</p></>}
        {state === 'paid' && <><p className="font-semibold">Rahmat! {plan ? `${getPlanEntitlement(plan).name} tarifi yoqildi.` : "Tarif yoqildi."}</p><p className="text-muted-foreground">Mashqlarni davom ettirishingiz mumkin.</p></>}
        {state === 'failed' && <><p className="font-semibold">To'lov tasdiqlanmadi</p><p className="text-muted-foreground">Summa mos kelmadi. Pul yechilgan bo'lsa, @scorify_support ga yozing.</p></>}
        {state === 'expired' && <><p className="font-semibold">To'lov muddati tugadi</p><p className="text-muted-foreground">Hisob 1 soat amal qiladi. Tarifni qaytadan tanlang.</p></>}
        {(state === 'pending' || state === 'error') && (
          <><p className="font-semibold">To'lov hali tasdiqlanmadi</p>
            <p className="text-muted-foreground">To'lagan bo'lsangiz, bir-ikki daqiqada tarif o'zi yoqiladi. Yoki qayta tekshiring. Muammo bo'lsa, @scorify_support.</p></>
        )}
      </div>
      <div className="flex gap-2 shrink-0">
        {(state === 'pending' || state === 'error') && <Button size="sm" variant="outline" onClick={() => setAttempt((n) => n + 1)}>Qayta tekshirish</Button>}
        {state !== 'waiting' && <Button size="sm" variant="ghost" onClick={close}>Yopish</Button>}
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, Loader2, RefreshCw, XCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { checkPayment, type PaymentState } from '@/lib/checkout';
import { getPlanEntitlement } from '@/lib/plans';
import { currentLang, translate, useT } from '@/i18n';

const POLL_MS = 3000;
const GIVE_UP_MS = 3 * 60_000;

/** Shown on the dashboard after the payer comes back from Click / Payme (`?payment=<id>`): waits for the plan to switch on. */
export function PaymentReturn({ onPaid }: { onPaid: () => void }) {
  const { t } = useT();
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
          if (!paidRef.current) { paidRef.current = true; onPaid(); toast.success(translate(currentLang(), 'payRet.success')); }
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
        {state === 'waiting' && <><p className="font-semibold">{t('payRet.checking')}</p><p className="text-muted-foreground">{t('payRet.checkingHint')}</p></>}
        {state === 'paid' && <><p className="font-semibold">{plan ? t('payRet.thanks', { plan: getPlanEntitlement(plan).name }) : t('payRet.thanksNoPlan')}</p><p className="text-muted-foreground">{t('payRet.continue')}</p></>}
        {state === 'failed' && <><p className="font-semibold">{t('payRet.failed')}</p><p className="text-muted-foreground">{t('payRet.failedHint')}</p></>}
        {state === 'expired' && <><p className="font-semibold">{t('payRet.expired')}</p><p className="text-muted-foreground">{t('payRet.expiredHint')}</p></>}
        {(state === 'pending' || state === 'error') && (
          <><p className="font-semibold">{t('payRet.pending')}</p>
            <p className="text-muted-foreground">{t('payRet.pendingHint')}</p></>
        )}
      </div>
      <div className="flex gap-2 shrink-0">
        {(state === 'pending' || state === 'error') && <Button size="sm" variant="outline" onClick={() => setAttempt((n) => n + 1)}>{t('payRet.recheck')}</Button>}
        {state !== 'waiting' && <Button size="sm" variant="ghost" onClick={close}>{t('payRet.close')}</Button>}
      </div>
    </div>
  );
}

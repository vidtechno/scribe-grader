import { ExternalLink, Gift, Loader2, PartyPopper } from 'lucide-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { callLearning } from '@/features/learn/api';
import { useTelegramStatus } from '@/components/TelegramConnectCard';

interface RefSummary {
  balance: number; earned: number; paid: number; reward: number; min_withdraw: number;
  invited: number; active: number; buyers: number; rewarded: number;
  pending_withdrawal: { id: number; amount: number } | null;
  paid_unseen: { id: number; amount: number }[];
  recent: { name: string; state: 'joined' | 'active' | 'bought' | 'rewarded' }[];
}

const money = (n: number) => `${String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} so'm`;
const STATE: Record<string, string> = { joined: "Qo'shildi", active: 'Dars qildi ✓', bought: 'Tarif oldi', rewarded: "+10 000 so'm ✓" };

/** Referral balance and statistics. Links, payouts and the rules are handled in the Telegram bot. */
export function ReferralCard() {
  const { user } = useAuth();
  const qc = useQueryClient();
  const { data: tg } = useTelegramStatus();
  const { data } = useQuery({
    queryKey: ['ref-summary', user?.id], enabled: !!user, staleTime: 30_000,
    queryFn: () => callLearning<RefSummary>('ref_summary'),
  });
  const ack = useMutation({
    mutationFn: () => callLearning('ref_ack_paid'),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['ref-summary'] }),
  });
  if (!data) return null;
  const pct = Math.min(100, Math.round((data.balance / data.min_withdraw) * 100));
  const botLink = tg?.bot_url ? `${tg.bot_url}?start=referral` : null;

  return (
    <section id="referral" className="glass-card p-6 mb-6 scroll-mt-24" aria-label="Referal">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 grid place-items-center shrink-0"><Gift className="h-5 w-5 text-emerald-600" /></div>
        <div>
          <h2 className="text-lg font-semibold">Referal — do'st taklif qiling, pul ishlang</h2>
          <p className="text-sm text-muted-foreground">
            Do'stingiz botdagi havolangiz orqali kirib, kamida <b>1 ta dars</b> tugatsa — referal hisoblanadi. U <b>7 kunlik bepul davrdan keyin</b> istalgan
            pullik tarifni olsa, balansingizga <b>{money(data.reward)}</b> qo'shiladi.
          </p>
        </div>
      </div>

      {data.paid_unseen.length > 0 && (
        <div className="mb-4 flex items-center gap-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3.5 text-sm">
          <PartyPopper className="h-5 w-5 text-emerald-600 shrink-0" />
          <span className="flex-1"><b>Pul to'landi!</b> {money(data.paid_unseen.reduce((s, p) => s + p.amount, 0))} kartangizga o'tkazildi.</span>
          <Button size="sm" variant="outline" disabled={ack.isPending} onClick={() => ack.mutate()}>{ack.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Yaxshi'}</Button>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
        {[
          ['Taklif qilingan', data.invited], ['Dars qilganlar (hisoblandi)', data.active], ['Tarif olganlar', data.buyers], ['Balans', money(data.balance)],
        ].map(([label, value]) => (
          <div key={String(label)} className="rounded-xl bg-secondary/40 p-3 text-center">
            <p className="text-lg font-bold leading-tight">{value}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>Yechib olish uchun {money(data.min_withdraw)} kerak</span><span>{pct}%</span>
        </div>
        <div className="h-2 rounded-full bg-secondary overflow-hidden"><div className="h-full bg-emerald-500 transition-all" style={{ width: `${pct}%` }} /></div>
        {data.pending_withdrawal && <p className="text-xs text-amber-600 mt-2">So'rov yuborilgan: {money(data.pending_withdrawal.amount)} — admin tasdiqlashini kuting.</p>}
        {data.paid > 0 && <p className="text-xs text-muted-foreground mt-1">Jami to'langan: {money(data.paid)}</p>}
      </div>

      {data.recent.length > 0 && (
        <ul className="divide-y divide-border/60 mb-4 text-sm">
          {data.recent.slice(0, 5).map((r, i) => (
            <li key={i} className="flex justify-between py-1.5"><span>{r.name}</span><span className="text-muted-foreground">{STATE[r.state]}</span></li>
          ))}
        </ul>
      )}

      {botLink && (
        <a href={botLink} target="_blank" rel="noopener noreferrer">
          <Button variant="glow" className="gap-2 w-full sm:w-auto"><ExternalLink className="h-4 w-4" />Havolani olish va yechib olish — botda</Button>
        </a>
      )}
    </section>
  );
}

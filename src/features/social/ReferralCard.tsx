import { ExternalLink, Gift, Loader2, PartyPopper } from 'lucide-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { useT } from '@/i18n';
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

const STATE: Record<string, string> = { joined: 'social.refJoined', active: 'social.refSignedUp', bought: 'social.refBought', rewarded: 'social.refRewarded' };

/** Referral balance and statistics. Links, payouts and the rules are handled in the Telegram bot. */
export function ReferralCard() {
  const { t, lang } = useT();
  const money = (n: number) => t('social.money', { n: String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, lang === 'uz' ? ' ' : ',') });
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
    <section id="referral" className="glass-card p-6 mb-6 scroll-mt-24" aria-label={t('social.refAria')}>
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 grid place-items-center shrink-0"><Gift className="h-5 w-5 text-emerald-600" /></div>
        <div>
          <h2 className="text-lg font-semibold">{t('social.refTitle')}</h2>
          <p className="text-sm text-muted-foreground">
            {t('social.refText', { amount: money(data.reward) }).split(/<\/?b>/).map((part, i) => (i % 2 ? <b key={i}>{part}</b> : part))}
          </p>
        </div>
      </div>

      {data.paid_unseen.length > 0 && (
        <div className="mb-4 flex items-center gap-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3.5 text-sm">
          <PartyPopper className="h-5 w-5 text-emerald-600 shrink-0" />
          <span className="flex-1"><b>{t('social.refPaid')}</b> {t('social.refPaidText', { amount: money(data.paid_unseen.reduce((s, p) => s + p.amount, 0)) })}</span>
          <Button size="sm" variant="outline" disabled={ack.isPending} onClick={() => ack.mutate()}>{ack.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : t('social.refOk')}</Button>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
        {[
          [t('social.refInvited'), data.invited], [t('social.refActive'), data.active], [t('social.refBuyers'), data.buyers], [t('social.refBalance'), money(data.balance)],
        ].map(([label, value]) => (
          <div key={String(label)} className="rounded-xl bg-secondary/40 p-3 text-center">
            <p className="text-lg font-bold leading-tight">{value}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>{t('social.refNeed', { amount: money(data.min_withdraw) })}</span><span>{pct}%</span>
        </div>
        <div className="h-2 rounded-full bg-secondary overflow-hidden"><div className="h-full bg-emerald-500 transition-all" style={{ width: `${pct}%` }} /></div>
        {data.pending_withdrawal && <p className="text-xs text-amber-600 mt-2">{t('social.refPending', { amount: money(data.pending_withdrawal.amount) })}</p>}
        {data.paid > 0 && <p className="text-xs text-muted-foreground mt-1">{t('social.refTotalPaid', { amount: money(data.paid) })}</p>}
      </div>

      {data.recent.length > 0 && (
        <ul className="divide-y divide-border/60 mb-4 text-sm">
          {data.recent.slice(0, 5).map((r, i) => (
            <li key={i} className="flex justify-between py-1.5"><span>{r.name}</span><span className="text-muted-foreground">{t(STATE[r.state])}</span></li>
          ))}
        </ul>
      )}

      {botLink && (
        <a href={botLink} target="_blank" rel="noopener noreferrer">
          <Button variant="glow" className="gap-2 w-full sm:w-auto"><ExternalLink className="h-4 w-4" />{t('social.refBot')}</Button>
        </a>
      )}
    </section>
  );
}

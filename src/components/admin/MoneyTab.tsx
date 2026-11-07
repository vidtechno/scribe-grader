import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { adminRpc, daysUntil, PLAN_LABEL, statusOf, type AdminUser } from './adminApi';

/** Subscription follow-up without the retired referral programme. */
export function MoneyTab() {
  const { data: users = [], isLoading } = useQuery({ queryKey: ['admin', 'users'], queryFn: () => adminRpc<AdminUser[]>('admin_users_list') });
  const now = Date.now();
  const expiring = users.filter(u => statusOf(u, now) === 'paid' && u.expires_at && +new Date(u.expires_at) - now <= 7 * 864e5)
    .sort((a, b) => +new Date(a.expires_at!) - +new Date(b.expires_at!));
  const trialEnding = users.filter(u => statusOf(u, now) === 'trial' && u.trial_ends_at && +new Date(u.trial_ends_at) - now <= 2 * 864e5);

  if (isLoading) return <div className="grid place-items-center py-24"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <section className="glass-card p-5">
        <h2 className="font-bold">7 kunda tugaydigan obunalar</h2>
        <p className="text-xs text-muted-foreground mb-3">Yangilash uchun yozing: <b>@scorify_support</b></p>
        {expiring.length ? <div className="space-y-2">{expiring.map(u => (
          <div key={u.user_id} className="flex justify-between gap-3 rounded-lg bg-secondary/40 p-2.5 text-sm"><span className="truncate">{u.full_name || u.email}</span>
            <span className="shrink-0 font-medium">{PLAN_LABEL[u.plan_type ?? '']} · {daysUntil(u.expires_at)} kun</span></div>
        ))}</div> : <p className="text-sm text-muted-foreground">Yaqin kunlarda tugaydigan obuna yo'q.</p>}
      </section>
      <section className="glass-card p-5">
        <h2 className="font-bold">Bepul hafta tugayapti</h2>
        <p className="text-xs text-muted-foreground mb-3">Keyingi 2 kun ichida sinov muddati tugaydigan foydalanuvchilar</p>
        {trialEnding.length ? <div className="space-y-2">{trialEnding.map(u => (
          <div key={u.user_id} className="flex justify-between gap-3 rounded-lg bg-secondary/40 p-2.5 text-sm"><span className="truncate">{u.full_name || u.email}</span>
            <span className="shrink-0 font-medium">{daysUntil(u.trial_ends_at)} kun</span></div>
        ))}</div> : <p className="text-sm text-muted-foreground">Hozircha yo'q.</p>}
      </section>
    </div>
  );
}

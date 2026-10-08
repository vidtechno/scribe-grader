import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { Check, Loader2, X } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { adminRpc, daysUntil, PLAN_LABEL, som, statusOf, type AdminUser } from './adminApi';

interface Referral {
  pending: { id: number; amount: number; card_number: string; card_holder: string; created_at: string; full_name: string | null; public_id: string | null }[];
  history: { id: number; amount: number; status: string; processed_at: string; full_name: string | null }[];
  top: { full_name: string | null; public_id: string | null; invited: number; bought: number; earned: number }[];
}

const card = (n: string) => n.replace(/(\d{4})(?=\d)/g, '$1 ');

export function MoneyTab() {
  const qc = useQueryClient();
  const [busy, setBusy] = useState<number | null>(null);
  const { data: ref, isLoading } = useQuery({ queryKey: ['admin', 'referral'], queryFn: () => adminRpc<Referral>('admin_referral_overview') });
  const { data: users = [] } = useQuery({ queryKey: ['admin', 'users'], queryFn: () => adminRpc<AdminUser[]>('admin_users_list') });
  const now = Date.now();
  const expiring = users.filter(u => statusOf(u, now) === 'paid' && u.expires_at && +new Date(u.expires_at) - now <= 7 * 864e5)
    .sort((a, b) => +new Date(a.expires_at!) - +new Date(b.expires_at!));
  const trialEnding = users.filter(u => statusOf(u, now) === 'trial' && u.trial_ends_at && +new Date(u.trial_ends_at) - now <= 2 * 864e5);

  const resolve = async (id: number, paid: boolean) => {
    if (!window.confirm(paid ? "To'landi deb belgilansinmi? Foydalanuvchiga xabar boradi." : "Rad etilsinmi? Summa balansga qaytariladi.")) return;
    setBusy(id);
    try {
      await adminRpc('admin_ref_resolve', { _id: id, _paid: paid });
      toast.success(paid ? "To'landi deb belgilandi" : 'Rad etildi');
      await qc.invalidateQueries({ queryKey: ['admin'] });
    } catch (e) { toast.error((e as Error).message); }
    finally { setBusy(null); }
  };

  if (isLoading) return <div className="grid place-items-center py-24"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  return (
    <div className="space-y-6">
      <section className="glass-card p-4">
        <h2 className="font-bold">Referal: yechib olish so'rovlari</h2>
        <p className="text-xs text-muted-foreground mb-3">Karta raqamiga pulni o'tkazib, «To'landi» ni bosing. Foydalanuvchi saytda va botda xabar oladi.</p>
        {ref?.pending.length ? <div className="space-y-3">{ref.pending.map(w => (
          <div key={w.id} className="rounded-xl border p-3 flex flex-wrap items-center gap-3">
            <div className="min-w-0 flex-1">
              <p className="font-semibold">{w.full_name || 'Ismsiz'}{w.public_id ? <span className="text-xs text-muted-foreground font-normal"> · #{w.public_id}</span> : ''}</p>
              <p className="text-sm">💰 <b>{som(w.amount)}</b></p>
              <p className="text-sm font-mono">💳 {card(w.card_number)}</p>
              <p className="text-sm">🧾 {w.card_holder}</p>
              <p className="text-[11px] text-muted-foreground">So'rov #{w.id} · {format(new Date(w.created_at), 'd MMM HH:mm')}</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" className="gap-1.5" disabled={busy === w.id} onClick={() => void resolve(w.id, true)}><Check className="h-4 w-4" />To'landi</Button>
              <Button size="sm" variant="outline" className="gap-1.5 text-destructive" disabled={busy === w.id} onClick={() => void resolve(w.id, false)}><X className="h-4 w-4" />Rad etish</Button>
            </div>
          </div>
        ))}</div> : <p className="text-sm text-muted-foreground">Kutilayotgan so'rov yo'q.</p>}
      </section>

      <div className="grid lg:grid-cols-2 gap-6">
        <section className="glass-card p-4">
          <h2 className="font-bold">7 kunda tugaydigan obunalar</h2>
          <p className="text-xs text-muted-foreground mb-3">Yangilash uchun yozing: <b>@scorify_support</b></p>
          {expiring.length ? <div className="space-y-1.5">{expiring.map(u => (
            <div key={u.user_id} className="flex justify-between gap-3 text-sm"><span className="truncate">{u.full_name || u.email}</span>
              <span className="shrink-0">{PLAN_LABEL[u.plan_type ?? '']} · {daysUntil(u.expires_at)} kun</span></div>
          ))}</div> : <p className="text-sm text-muted-foreground">Yaqin kunlarda tugaydigan obuna yo'q.</p>}
        </section>
        <section className="glass-card p-4">
          <h2 className="font-bold">Bepul hafta tugayapti (2 kun ichida)</h2>
          <p className="text-xs text-muted-foreground mb-3">Pullik tarifga o'tishga eng yaqin foydalanuvchilar</p>
          {trialEnding.length ? <div className="space-y-1.5">{trialEnding.map(u => (
            <div key={u.user_id} className="flex justify-between gap-3 text-sm"><span className="truncate">{u.full_name || u.email}</span>
              <span className="shrink-0">{u.lessons_done} dars · {daysUntil(u.trial_ends_at)} kun</span></div>
          ))}</div> : <p className="text-sm text-muted-foreground">Hozircha yo'q.</p>}
        </section>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <section className="glass-card p-4">
          <h2 className="font-bold mb-3">Eng yaxshi referal qiluvchilar</h2>
          {ref?.top.length ? <div className="space-y-1.5">{ref.top.map((t, i) => (
            <div key={i} className="flex justify-between gap-3 text-sm"><span className="truncate">{i + 1}. {t.full_name || 'Ismsiz'}</span>
              <span className="shrink-0">{t.invited} taklif · {t.bought} tarif · {som(t.earned)}</span></div>
          ))}</div> : <p className="text-sm text-muted-foreground">Hozircha referal yo'q.</p>}
        </section>
        <section className="glass-card p-4">
          <h2 className="font-bold mb-3">Oxirgi to'lovlar (referal)</h2>
          {ref?.history.length ? <div className="space-y-1.5">{ref.history.map(h => (
            <div key={h.id} className="flex justify-between gap-3 text-sm"><span className="truncate">{h.full_name || 'Ismsiz'}</span>
              <span className="shrink-0">{som(h.amount)} · {h.status === 'paid' ? "to'langan ✓" : 'rad etilgan'}</span></div>
          ))}</div> : <p className="text-sm text-muted-foreground">Hozircha yo'q.</p>}
        </section>
      </div>
    </div>
  );
}

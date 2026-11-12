import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Clock, Loader2, Moon, Send, Wallet } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Section } from './AdminUi';
import { adminRpc } from './adminApi';

type Audience = 'trial_ending' | 'inactive_3d' | 'paid_ending';
interface Counts { trial_ending: number; inactive_3d: number; paid_ending: number; all_linked: number }
interface HistoryRow { id: string; audience: string; created_at: string; total: number; sent: number; failed: number; pending: number }

const AUDIENCES: { id: Audience; label: string; icon: LucideIcon; text: string }[] = [
  {
    id: 'trial_ending', label: 'Sinov muddati tugayapti (2 kun)', icon: Clock,
    text: "Salom! Bepul sinov haftangiz tugashiga 2 kundan kam qoldi. Hoziroq darslarni davom ettiring va natijani yo'qotmang. Tarifni yangilasangiz, mashqlar uzilmaydi.",
  },
  {
    id: 'inactive_3d', label: '3 kundan beri kirmaganlar', icon: Moon,
    text: "Salom! Sizni bir necha kundan beri ko'rmadik. Bugun atigi 10 daqiqa ajrating, bitta dars ham katta qadam. Davom etamizmi?",
  },
  {
    id: 'paid_ending', label: "To'lovi tugayapti (3 kun)", icon: Wallet,
    text: "Salom! Tarifingiz muddati 3 kun ichida tugaydi. Mashqlar va natijalaringiz uzilmasligi uchun obunani oldindan yangilab qo'ying.",
  },
];
const LABEL = Object.fromEntries(AUDIENCES.map(a => [a.id, a.label])) as Record<string, string>;
const MAX = 1500;

const fmt = (iso: string) => new Date(iso).toLocaleString('uz-UZ', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

/** Send a Telegram message (through the bot's outbox) to one of three reachable user groups. */
export function BroadcastTab() {
  const qc = useQueryClient();
  const [audience, setAudience] = useState<Audience | null>(null);
  const [text, setText] = useState('');
  const [confirming, setConfirming] = useState(false);

  const counts = useQuery({ queryKey: ['admin', 'broadcast', 'counts'], queryFn: () => adminRpc<Counts>('admin_broadcast_counts') });
  const history = useQuery({ queryKey: ['admin', 'broadcast', 'history'], queryFn: () => adminRpc<HistoryRow[]>('admin_broadcast_history'), refetchInterval: 15_000 });

  const send = useMutation({
    mutationFn: (v: { audience: Audience; text: string }) => adminRpc<{ id: string; total: number }>('admin_broadcast_send', { _audience: v.audience, _text: v.text }),
    onSuccess: (r) => {
      toast.success(`${r?.total ?? 0} kishiga navbatga qo'yildi`);
      setConfirming(false);
      void qc.invalidateQueries({ queryKey: ['admin', 'broadcast'] });
    },
    onError: (e: Error) => { setConfirming(false); toast.error(e.message || 'Yuborilmadi'); },
  });

  const pick = (a: (typeof AUDIENCES)[number]) => { setAudience(a.id); setText(a.text); setConfirming(false); };
  const n = audience && counts.data ? Number(counts.data[audience] ?? 0) : 0;
  const trimmed = text.trim();
  const canSend = !!audience && trimmed.length > 0 && text.length <= MAX && n > 0;

  return (
    <div className="space-y-8">
      <Section title="Telegram xabari" subtitle="Faqat botga ulangan va xabarlarni o'chirmagan foydalanuvchilarga yetkaziladi">
        <div className="grid gap-3 sm:grid-cols-3">
          {AUDIENCES.map(a => (
            <button key={a.id} type="button" onClick={() => pick(a)} aria-pressed={audience === a.id}
              className={`glass-card p-4 text-left transition-colors border-2 ${audience === a.id ? 'border-primary' : 'border-transparent hover:border-border'}`}>
              <a.icon className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm font-semibold">{a.label}</p>
              <p className="text-2xl font-bold mt-1">{counts.isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : Number(counts.data?.[a.id] ?? 0)}</p>
              <p className="text-xs text-muted-foreground">kishi</p>
            </button>
          ))}
        </div>
        {counts.isError && <p className="text-sm text-destructive mt-2">Sonlarni yuklab bo'lmadi</p>}
      </Section>

      {audience && (
        <section className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="bc-text" className="text-sm font-medium">Xabar matni</label>
            <textarea id="bc-text" value={text} onChange={e => { setText(e.target.value); setConfirming(false); }} rows={7}
              className="w-full rounded-xl border bg-background p-3 text-sm" />
            <p className={`text-xs ${text.length > MAX ? 'text-destructive' : 'text-muted-foreground'}`}>{text.length} / {MAX}. Oddiy matn yozing; bot tugmasini o'zi qo'shadi.</p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Ko'rinishi</p>
            <div data-testid="bc-preview" className="rounded-2xl rounded-tl-sm bg-muted p-3 text-sm whitespace-pre-wrap break-words min-h-[6rem]">{trimmed || '…'}</div>
            <div className="rounded-lg bg-primary/10 text-primary text-xs font-semibold text-center py-2">🌐 Scorify'ni ochish</div>
          </div>
          <div className="md:col-span-2 flex flex-wrap items-center gap-3">
            {!confirming ? (
              <Button onClick={() => setConfirming(true)} disabled={!canSend} className="gap-2"><Send className="h-4 w-4" />Yuborish</Button>
            ) : (
              <>
                <p className="text-sm font-semibold">{n} kishiga yuborilsin?</p>
                <Button onClick={() => send.mutate({ audience, text })} disabled={send.isPending} className="gap-2">
                  {send.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}Ha, yuborish
                </Button>
                <Button variant="outline" onClick={() => setConfirming(false)} disabled={send.isPending}>Bekor qilish</Button>
              </>
            )}
            {audience && n === 0 && !counts.isLoading && <p className="text-xs text-muted-foreground">Bu guruhda hozircha hech kim yo'q</p>}
          </div>
        </section>
      )}

      <Section title="Yuborilganlar tarixi" subtitle="Oxirgi 30 ta xabar">
        {history.isLoading ? <Loader2 className="h-5 w-5 animate-spin text-primary" /> : !(history.data ?? []).length ? (
          <p className="text-sm text-muted-foreground">Hali xabar yuborilmagan</p>
        ) : (
          <ul className="space-y-2">
            {(history.data ?? []).map(h => {
              const done = h.sent + h.failed;
              const pct = h.total > 0 ? Math.min(100, Math.round((done / h.total) * 100)) : 100;
              return (
                <li key={h.id} className="glass-card p-3 text-sm">
                  <div className="flex flex-wrap justify-between gap-2">
                    <span className="font-medium">{LABEL[h.audience] ?? h.audience}</span>
                    <span className="text-xs text-muted-foreground">{fmt(h.created_at)}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted mt-2 overflow-hidden"><div className="h-full bg-primary" style={{ width: `${pct}%` }} /></div>
                  <p className="text-xs text-muted-foreground mt-1">Jami {h.total} · yuborildi {h.sent} · xato {h.failed} · navbatda {h.pending}</p>
                </li>
              );
            })}
          </ul>
        )}
      </Section>
    </div>
  );
}

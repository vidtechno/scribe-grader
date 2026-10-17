import { useState } from 'react';
import { Laptop, Loader2, LogOut, Smartphone } from 'lucide-react';
import { toast } from 'sonner';
import { formatDistanceToNow } from 'date-fns';
import { uz } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { useDevices } from '@/hooks/useDevices';

const isPhone = (name: string) => /iPhone|Android|Telegram/.test(name);

/** The devices signed in to this account; any of them can be signed out right here. */
export function ActiveDevicesList({ onDone }: { onDone?: () => void }) {
  const { sessions, revoke } = useDevices();
  const [busy, setBusy] = useState<string | null>(null);

  const remove = async (id: string, current: boolean) => {
    if (current && !window.confirm('Shu qurilmadan chiqasizmi?')) return;
    setBusy(id);
    try {
      await revoke(id);
      toast.success(current ? 'Chiqdingiz' : 'Qurilma akkauntdan chiqarildi');
      onDone?.();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : 'Bajarib bo‘lmadi');
    } finally {
      setBusy(null);
    }
  };

  return (
    <ul className="space-y-2">
      {sessions.map((s) => {
        const Icon = isPhone(s.name) ? Smartphone : Laptop;
        return (
          <li key={s.id} className="flex items-center gap-3 rounded-xl border border-border bg-secondary/30 p-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium">{s.name}{s.current && <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] text-primary">Shu qurilma</span>}</span>
              <span className="block text-xs text-muted-foreground">
                Oxirgi faollik: {formatDistanceToNow(new Date(s.last_seen), { addSuffix: true, locale: uz })}
              </span>
            </span>
            <Button size="sm" variant="outline" className="gap-1.5 shrink-0" disabled={busy !== null} onClick={() => void remove(s.id, s.current)}>
              {busy === s.id ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <LogOut className="h-3.5 w-3.5" />} Chiqarish
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

/** Profile card. */
export function ActiveDevicesCard() {
  const { sessions, max } = useDevices();
  if (!sessions.length) return null;
  return (
    <div className="glass-card p-6 mb-6">
      <h2 className="mb-1 flex items-center gap-2 text-lg font-semibold"><Smartphone className="h-5 w-5 text-primary" /> Faol qurilmalar</h2>
      <p className="mb-4 text-sm text-muted-foreground">Akkauntga bir vaqtda {max} ta qurilmadan kirish mumkin. Notanish qurilmani shu yerdan chiqarib yuboring.</p>
      <ActiveDevicesList />
    </div>
  );
}

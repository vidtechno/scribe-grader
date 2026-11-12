import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { CalendarRange, CheckCircle2, Download, MessageCircle, Phone, Users } from 'lucide-react';
import { AGE_RANGES, DISCOVERY_SOURCES, type IntakeResponse } from '@/lib/user-intake';
import { translate } from '@/i18n';
import { adminRpc, pct } from './adminApi';
import { Bars, Section, Stat } from './AdminUi';

interface IntakeStats {
  total: number; completed: number; pending: number; with_phone: number; with_telegram: number; without_telegram_username: number;
  ages: { key: string; n: number }[]; sources: { key: string; n: number }[];
}
export function IntakeStatsPanel() {
  const { data, isLoading, error, refetch } = useQuery({ queryKey: ['admin','intake-stats'],
    queryFn: () => adminRpc<IntakeStats>('admin_intake_stats'), staleTime: 60_000 });
  return <Section title="Tanishuv so‘rovnomasi" subtitle="Yosh oralig‘i va Scorify haqida qayerdan eshitgani — foydalanuvchilarning o‘z javoblari.">
    {isLoading ? <p className="text-sm text-muted-foreground">Yuklanmoqda…</p> : error || !data ? <p className="text-sm text-destructive">Tanishuv statistikasi yuklanmadi. <button onClick={() => void refetch()} className="underline">Qayta urinish</button></p> : <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Stat icon={CheckCircle2} label="Javob berganlar" value={data.completed} hint={`${pct(data.completed,data.total)} · jami ${data.total} foydalanuvchi`} />
        <Stat icon={Users} label="Hali to‘ldirmagan" value={data.pending} />
        <Stat icon={Phone} label="Telefon yozganlar" value={data.with_phone} hint="Ixtiyoriy ravishda" />
        <Stat icon={MessageCircle} label="Telegram username yozganlar" value={data.with_telegram} hint={`Username’i yo‘q: ${data.without_telegram_username}`} />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="glass-card p-4 space-y-4"><h3 className="font-semibold flex gap-2 items-center"><CalendarRange className="h-4 w-4 text-primary" />Yosh oralig‘i</h3>
          <Bars rows={AGE_RANGES.map(key => { const n=Number(data.ages.find(row=>row.key===key)?.n || 0); return {label:translate('uz',`intake.age.${key}`),n,hint:pct(n,data.completed)}; })} />
        </div>
        <div className="glass-card p-4 space-y-4"><h3 className="font-semibold">Bizni qayerdan topishgan?</h3>
          <Bars rows={DISCOVERY_SOURCES.map(key => { const n=Number(data.sources.find(row=>row.key===key)?.n || 0); return {label:translate('uz',`intake.source.${key}`),n,hint:pct(n,data.completed)}; })} />
        </div>
      </div>
      <p className="text-xs text-muted-foreground">Foizlar {data.completed} ta javob asosida. Kirish usuli (Google/Telegram) va reklama manbasi bir xil ko‘rsatkich emas.</p>
    </>}
  </Section>;
}

export function UserIntakeDetails({ userId }: { userId: string }) {
  const { data, isLoading, error, refetch } = useQuery({ queryKey: ['admin','user-intake',userId],
    queryFn: () => adminRpc<IntakeResponse | null>('admin_user_intake',{_user:userId}), staleTime:60_000 });
  return <section className="mt-6 rounded-xl border bg-primary/[0.025] p-4 space-y-3">
    <h3 className="text-sm font-bold">Tanishuv javoblari</h3>
    {isLoading ? <p className="text-xs text-muted-foreground">Yuklanmoqda…</p> : error ? <p className="text-xs text-destructive">Yuklanmadi. <button onClick={()=>void refetch()} className="underline">Qayta urinish</button></p> : !data ? <p className="text-xs text-muted-foreground">Hali so‘rovnomani to‘ldirmagan.</p> : <dl className="text-sm space-y-2.5">
      <div><dt className="text-xs text-muted-foreground">Telefon (ixtiyoriy)</dt><dd className="font-medium break-all">{data.phone || 'Yozilmagan'}</dd></div>
      <div><dt className="text-xs text-muted-foreground">Bog‘lanish uchun Telegram</dt><dd className="font-medium break-all">{data.telegram_username ? `@${data.telegram_username}` : data.no_telegram_username ? 'Username’im yo‘q' : 'Yozilmagan'}</dd>
        {data.telegram_username && <p className="text-[11px] text-muted-foreground mt-1">Foydalanuvchi o‘zi ko‘rsatgan; Telegram akkaunti tasdiqlangani degani emas.</p>}</div>
      <div><dt className="text-xs text-muted-foreground">Yosh oralig‘i</dt><dd className="font-medium">{translate('uz',`intake.age.${data.age_range}`)}</dd></div>
      <div><dt className="text-xs text-muted-foreground">Bizni qayerdan topgan?</dt><dd className="font-medium">{translate('uz',`intake.source.${data.discovery_source}`)}</dd></div>
      <div><dt className="text-xs text-muted-foreground">To‘ldirilgan</dt><dd className="text-xs">{new Date(data.completed_at).toLocaleString('uz-UZ')}</dd></div>
    </dl>}
  </section>;
}

interface ContactRow { user_id: string; email: string | null; full_name: string | null; public_id: string | null; phone: string | null; telegram_username: string | null; bot_username: string | null; completed_at: string | null }
interface Contacts { counts: { users: number; phone: number; telegram: number; both: number }; rows: ContactRow[] }

const csvCell = (v: string | null | undefined) => `"${(v ?? '').replace(/"/g, '""')}"`;

/** Everyone who left a phone number or a Telegram username when they signed up (they wrote it themselves, so it is not verified). */
export function ContactsPanel() {
  const { data, isLoading, error } = useQuery({ queryKey: ['admin', 'contacts'], queryFn: () => adminRpc<Contacts>('admin_contacts'), staleTime: 60_000 });
  const [q, setQ] = useState('');
  const rows = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return (data?.rows ?? []).filter((r) => !needle || [r.full_name, r.email, r.phone, r.telegram_username, r.bot_username].some((x) => x?.toLowerCase().includes(needle)));
  }, [data, q]);
  const download = () => {
    const lines = [['Ism', 'Email', 'Telefon', 'Telegram', 'Sana'].join(','), ...rows.map((r) => [r.full_name, r.email, r.phone, r.telegram_username ? `@${r.telegram_username}` : '', r.completed_at ? r.completed_at.slice(0, 10) : ''].map(csvCell).join(','))];
    const url = URL.createObjectURL(new Blob(['\ufeff' + lines.join('\n')], { type: 'text/csv;charset=utf-8' }));
    const a = document.createElement('a');
    a.href = url; a.download = 'scorify-kontaktlar.csv'; a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <Section title="Kontaktlar" subtitle="Ro‘yxatdan o‘tishda telefon yoki Telegram yozganlar. Ma’lumotni foydalanuvchining o‘zi kiritgan, tasdiqlanmagan.">
      {isLoading ? <p className="text-sm text-muted-foreground">Yuklanmoqda…</p> : error || !data ? <p className="text-sm text-destructive">Kontaktlar yuklanmadi.</p> : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <Stat icon={Users} label="Jami foydalanuvchi" value={data.counts.users} />
            <Stat icon={Phone} label="Telefon yozgan" value={data.counts.phone} hint={pct(data.counts.phone, data.counts.users)} />
            <Stat icon={MessageCircle} label="Telegram yozgan" value={data.counts.telegram} hint={pct(data.counts.telegram, data.counts.users)} />
            <Stat icon={CheckCircle2} label="Ikkalasini yozgan" value={data.counts.both} hint={pct(data.counts.both, data.counts.users)} />
          </div>
          <div className="glass-card p-4">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Ism, email, telefon yoki @telegram…" className="min-w-0 flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary" />
              <button type="button" onClick={download} disabled={!rows.length} className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-semibold hover:bg-secondary disabled:opacity-50"><Download className="h-4 w-4" />CSV ({rows.length})</button>
            </div>
            {rows.length ? (
              <div className="max-h-[28rem] overflow-auto">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-card text-left text-xs text-muted-foreground"><tr><th className="py-1.5 pr-3 font-medium">Ism</th><th className="pr-3 font-medium">Telefon</th><th className="pr-3 font-medium">Telegram</th><th className="pr-3 font-medium">Email</th><th className="font-medium">Sana</th></tr></thead>
                  <tbody>{rows.map((r) => (
                    <tr key={r.user_id} className="border-t border-border/60 align-top">
                      <td className="py-1.5 pr-3 font-medium">{r.full_name || '—'}</td>
                      <td className="pr-3 tabular-nums">{r.phone ? <a href={`tel:${r.phone}`} className="text-primary hover:underline">{r.phone}</a> : <span className="text-muted-foreground">—</span>}</td>
                      <td className="pr-3">{r.telegram_username ? <a href={`https://t.me/${r.telegram_username}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@{r.telegram_username}</a> : <span className="text-muted-foreground">—</span>}</td>
                      <td className="pr-3 break-all text-xs text-muted-foreground">{r.email}</td>
                      <td className="whitespace-nowrap text-xs text-muted-foreground">{r.completed_at ? new Date(r.completed_at).toLocaleDateString('uz-UZ') : ''}</td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            ) : <p className="text-sm text-muted-foreground">Hozircha kontakt yo‘q.</p>}
          </div>
        </>
      )}
    </Section>
  );
}

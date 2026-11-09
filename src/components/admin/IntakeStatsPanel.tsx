import { useQuery } from '@tanstack/react-query';
import { CalendarRange, CheckCircle2, MessageCircle, Phone, Users } from 'lucide-react';
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

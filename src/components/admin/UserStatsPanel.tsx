import { useQuery } from '@tanstack/react-query';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { format } from 'date-fns';
import { CalendarClock, Flame, GraduationCap, Loader2, MapPin, Repeat, Send, Sparkles, TrendingDown, TrendingUp, Trophy, UserPlus, Users, Wifi } from 'lucide-react';
import { adminRpc, LEVEL_LABEL, pct, type UserStats } from './adminApi';
import { Bars, Section, Stat } from './AdminUi';

/** "+25% o'tgan haftaga nisbatan" / "o'zgarmagan" for a count compared with the same length of time before. */
function trend(now: number, before: number): string {
  if (before === 0) return now > 0 ? "oldin hech kim yo'q edi" : 'o‘zgarmagan';
  const d = Math.round(((now - before) / before) * 100);
  return d === 0 ? 'o‘zgarmagan' : `${d > 0 ? '+' : ''}${d}% oldingi davrga nisbatan`;
}

/** Statistics about the users: who is on the site, how many are coming and staying, what they do and where they are. */
export function UserStatsPanel() {
  const { data: s, isLoading, error } = useQuery({ queryKey: ['admin', 'user-stats'], queryFn: () => adminRpc<UserStats>('admin_user_stats'), refetchInterval: 60_000 });
  if (isLoading) return <div className="grid place-items-center py-24"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  if (error || !s) return <p className="text-destructive text-sm">Statistika yuklanmadi: {(error as Error)?.message}</p>;
  const o = s.online;
  const up7 = s.signups.d7 >= s.signups.prev7;
  const up30 = s.signups.d30 >= s.signups.prev30;
  const planRows = [
    { label: 'Pullik: Learn', n: s.plans.learn }, { label: 'Pullik: IELTS', n: s.plans.ielts },
    { label: 'Bepul hafta', n: s.plans.trial }, { label: 'Free (sinovi tugagan)', n: s.plans.free },
  ];
  return (
    <div className="space-y-8">
      <Section title="Saytda kimlar bor?" subtitle="Sayt ochiq turgan har bir foydalanuvchi har 2 daqiqada o'zini bildiradi. Hozir onlayn — oxirgi 5 daqiqada">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          <Stat icon={Wifi} label="Hozir onlayn" value={o.now} hint="Oxirgi 5 daqiqa" tone="text-emerald-500" accent={o.now > 0} />
          <Stat icon={Users} label="Oxirgi 1 soat" value={o.h1} />
          <Stat icon={Users} label="Oxirgi 24 soat" value={o.h24} hint={`Jami ${pct(o.h24, s.total)}`} />
          <Stat icon={Users} label="Oxirgi 7 kun" value={o.d7} hint={`Jami ${pct(o.d7, s.total)}`} />
          <Stat icon={Users} label="Oxirgi 30 kun" value={o.d30} hint={`Hech kirmagan: ${o.never}`} />
        </div>
        <p className="text-xs text-muted-foreground">Yopishqoqlik (kunlik / oylik faollar): <b>{pct(o.h24, o.d30)}</b>. Bu raqam qancha yuqori bo'lsa, odamlar shuncha tez-tez qaytadi.</p>
      </Section>

      <Section title="O'sish va qaytish" subtitle="Yangi odamlar oldingi shunday davrga nisbatan">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Stat icon={UserPlus} label="Bugun yangi" value={s.signups.today} hint={`Jami: ${s.total}`} />
          <Stat icon={up7 ? TrendingUp : TrendingDown} label="7 kunda yangi" value={s.signups.d7} hint={trend(s.signups.d7, s.signups.prev7)} tone={up7 ? 'text-emerald-500' : 'text-destructive'} />
          <Stat icon={up30 ? TrendingUp : TrendingDown} label="30 kunda yangi" value={s.signups.d30} hint={trend(s.signups.d30, s.signups.prev30)} tone={up30 ? 'text-emerald-500' : 'text-destructive'} />
          <Stat icon={Repeat} label="Qaytganlar" value={pct(s.retention.back, s.retention.cohort)} hint={`7–14 kun oldin kelgan ${s.retention.cohort} kishidan ${s.retention.back} tasi keyingi kunlarda yana kirgan`} tone="text-primary" />
        </div>
      </Section>

      <Section title="Kunlik faol o'quvchilar (14 kun)" subtitle="Har kuni kamida bitta dars yoki mashq qilgan odamlar soni">
        <div className="glass-card p-3 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={s.active_14d.map((d) => ({ ...d, label: format(new Date(d.day), 'd MMM') }))}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="label" tick={{ fontSize: 10 }} interval={1} />
              <YAxis allowDecimals={false} tick={{ fontSize: 10 }} width={28} />
              <Tooltip formatter={(v: number) => [v, 'O‘quvchi']} />
              <Area type="monotone" dataKey="n" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.2)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Section>

      <div className="grid lg:grid-cols-2 gap-6">
        <Section title="Qanchalik o'qiydi?" subtitle="Tugatilgan darslar soni bo'yicha foydalanuvchilar">
          <div className="glass-card p-4">
            <Bars rows={[
              { label: 'Hali dars qilmagan', n: s.lessons.none, hint: pct(s.lessons.none, s.total) },
              { label: '1–2 dars', n: s.lessons.few, hint: pct(s.lessons.few, s.total) },
              { label: '3–9 dars', n: s.lessons.some, hint: pct(s.lessons.some, s.total) },
              { label: '10+ dars', n: s.lessons.many, hint: pct(s.lessons.many, s.total) },
            ]} />
          </div>
        </Section>
        <Section title="Tariflar" subtitle="Hozirgi holat">
          <div className="glass-card p-4"><Bars rows={planRows.map((r) => ({ ...r, hint: pct(r.n, s.total) }))} tone="bg-emerald-500" /></div>
        </Section>
        <Section title="Daraja bo'yicha" subtitle={`Kursni boshlaganlar. Kursni boshlamagan: ${s.not_started}`}>
          <div className="glass-card p-4">
            {s.levels.length ? <Bars rows={s.levels.map((l) => ({ label: LEVEL_LABEL[l.level] ?? l.level, n: l.n }))} tone="bg-violet-500" /> : <p className="text-sm text-muted-foreground">Hali hech kim boshlamagan</p>}
          </div>
        </Section>
        <Section title="Qanday kirishgan?" subtitle="Ro'yxatdan o'tish usuli">
          <div className="glass-card p-4 space-y-4">
            <Bars rows={[{ label: 'Email', n: s.sources.email }, { label: 'Telegram', n: s.sources.telegram }, { label: 'Google', n: s.sources.google }]} tone="bg-sky-500" />
            <p className="text-xs text-muted-foreground flex items-center gap-1.5"><Send className="h-3.5 w-3.5" />Telegram bot ulangan: <b>{s.sources.telegram_linked}</b> ({pct(s.sources.telegram_linked, s.total)}) · telefon raqami yozganlar: <b>{s.sources.with_phone}</b></p>
          </div>
        </Section>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Section title="Eng faol o'quvchilar" subtitle="Eng ko'p XP to'plaganlar">
          <div className="glass-card divide-y divide-border/60">
            {s.top_xp.map((u, i) => (
              <div key={`${u.name}-${i}`} className="flex items-center gap-3 px-4 py-2.5 text-sm">
                <span className={`w-6 text-center font-bold ${i === 0 ? 'text-amber-500' : 'text-muted-foreground'}`}>{i === 0 ? <Trophy className="h-4 w-4 inline" /> : i + 1}</span>
                <span className="min-w-0 flex-1 truncate font-medium">{u.name}</span>
                <span className="text-xs text-muted-foreground hidden sm:inline">{LEVEL_LABEL[u.level] ?? u.level}</span>
                <span className="inline-flex items-center gap-0.5 text-xs text-orange-500"><Flame className="h-3 w-3" />{u.streak}</span>
                <span className="font-semibold inline-flex items-center gap-0.5"><Sparkles className="h-3.5 w-3.5 text-amber-500" />{u.xp}</span>
              </div>
            ))}
            {!s.top_xp.length && <p className="p-4 text-sm text-muted-foreground">Hali ma'lumot yo'q</p>}
          </div>
        </Section>
        <Section title="Shaharlar" subtitle="Profilda shahar yozgan foydalanuvchilar">
          <div className="glass-card p-4">
            {s.cities.length ? <Bars rows={s.cities.map((c) => ({ label: c.city, n: c.n }))} tone="bg-amber-500" /> : <p className="text-sm text-muted-foreground flex items-center gap-2"><MapPin className="h-4 w-4" />Hozircha shahar yozganlar kam</p>}
          </div>
        </Section>
      </div>

      <p className="text-xs text-muted-foreground flex items-center gap-1.5"><CalendarClock className="h-3.5 w-3.5" /><GraduationCap className="h-3.5 w-3.5" />Raqamlar har daqiqada yangilanadi. «Onlayn» sayt ochiq va ko'rinib turgan odamlarni sanaydi: ilova yopilsa yoki boshqa oynaga o'tilsa, 5 daqiqadan keyin onlayn emas.</p>
    </div>
  );
}

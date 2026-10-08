import { useQuery } from '@tanstack/react-query';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Loader2, Users, GraduationCap, Wallet, Gift, Bot, Flame, CalendarClock } from 'lucide-react';
import { format } from 'date-fns';
import { adminRpc, pct, som, type Overview } from './adminApi';

function Stat({ icon: Icon, label, value, hint, tone = 'text-primary' }: { icon: typeof Users; label: string; value: string | number; hint?: string; tone?: string }) {
  return (
    <div className="glass-card p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1"><Icon className={`h-4 w-4 ${tone}`} />{label}</div>
      <p className="text-2xl font-extrabold">{value}</p>
      {hint && <p className="text-[11px] text-muted-foreground mt-0.5">{hint}</p>}
    </div>
  );
}

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <div><h2 className="font-bold">{title}</h2>{subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}</div>
      {children}
    </section>
  );
}

export function OverviewTab() {
  const { data: o, isLoading, error } = useQuery({ queryKey: ['admin', 'overview'], queryFn: () => adminRpc<Overview>('admin_overview'), refetchInterval: 60_000 });
  if (isLoading) return <div className="grid place-items-center py-24"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  if (error || !o) return <p className="text-destructive text-sm">Statistika yuklanmadi: {(error as Error)?.message}</p>;
  const f = o.funnel;
  const steps: [string, number, string][] = [
    ["Ro'yxatdan o'tdi", f.signed_up, ''],
    ['Kursni boshladi', f.started, pct(f.started, f.signed_up)],
    ['1+ dars tugatdi', f.lesson1, pct(f.lesson1, f.started)],
    ['3+ dars tugatdi', f.lessons3, pct(f.lessons3, f.lesson1)],
    ['Pullik tarif oldi', f.bought, pct(f.bought, f.lessons3)],
  ];
  const max = Math.max(1, f.signed_up);
  return (
    <div className="space-y-8">
      <Section title="Bugungi holat" subtitle="Eng muhim raqamlar bir qarashda">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Stat icon={Users} label="Jami foydalanuvchilar" value={o.users.total} hint={`Bugun +${o.users.today} · 7 kunda +${o.users.d7} · 30 kunda +${o.users.d30}`} />
          <Stat icon={Flame} label="Bugun o'qiganlar" value={o.learning.learners_today} hint={`7 kunda: ${o.learning.learners_7d} kishi`} tone="text-orange-500" />
          <Stat icon={Wallet} label="Pullik obunachilar" value={o.plans.learn + o.plans.ielts} hint={`Learn ${o.plans.learn} · IELTS ${o.plans.ielts}`} tone="text-emerald-500" />
          <Stat icon={Wallet} label="Oylik tushum (taxminiy)" value={som(o.plans.monthly_uzs)} hint="Faol obunalar narxi yig'indisi" tone="text-emerald-500" />
        </div>
      </Section>

      <Section title="Voronka: foydalanuvchi qayerda to'xtayapti?" subtitle="Har bir qadam oldingisiga nisbatan foizda">
        <div className="glass-card p-4 space-y-2.5">
          {steps.map(([label, n, p]) => (
            <div key={label}>
              <div className="flex justify-between text-sm mb-1"><span>{label}</span><span className="font-semibold">{n}{p && <span className="text-muted-foreground font-normal"> · {p}</span>}</span></div>
              <div className="h-2.5 rounded-full bg-secondary overflow-hidden"><div className="h-full bg-primary rounded-full" style={{ width: `${(n / max) * 100}%` }} /></div>
            </div>
          ))}
        </div>
      </Section>

      <div className="grid lg:grid-cols-2 gap-6">
        <Section title="Yangi foydalanuvchilar (30 kun)">
          <div className="glass-card p-3 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={o.signups_30d.map(d => ({ ...d, label: format(new Date(d.day), 'd MMM') }))}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="label" tick={{ fontSize: 10 }} interval={4} />
                <YAxis allowDecimals={false} tick={{ fontSize: 10 }} width={28} />
                <Tooltip formatter={(v: number) => [v, 'Yangi']} />
                <Area type="monotone" dataKey="n" stroke="hsl(var(--primary))" fill="hsl(var(--primary) / 0.2)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Section>
        <Section title="Darslar va o'quvchilar (14 kun)">
          <div className="glass-card p-3 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={o.learning_14d.map(d => ({ ...d, label: format(new Date(d.day), 'd MMM') }))}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="label" tick={{ fontSize: 10 }} interval={1} />
                <YAxis allowDecimals={false} tick={{ fontSize: 10 }} width={28} />
                <Tooltip />
                <Bar dataKey="lessons" name="Tugatilgan darslar" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="learners" name="O'quvchilar" fill="hsl(var(--primary) / 0.4)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Section>
      </div>

      <Section title="Tariflar va sinov davri">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Stat icon={CalendarClock} label="Bepul haftada" value={o.plans.trial} hint="Sinov davri davom etmoqda" tone="text-amber-500" />
          <Stat icon={CalendarClock} label="Sinovi tugagan (Free)" value={o.plans.trial_ended} hint="Pullik tarifga o'tmagan" tone="text-muted-foreground" />
          <Stat icon={CalendarClock} label="7 kunda tugaydi" value={o.plans.expiring_7d} hint="Yangilashni eslating" tone="text-orange-500" />
          <Stat icon={CalendarClock} label="Muddati o'tgan" value={o.plans.expired} hint="Pullik tarifi tugagan" tone="text-destructive" />
        </div>
      </Section>

      <Section title="O'quv faolligi">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Stat icon={GraduationCap} label="Bugun tugatilgan darslar" value={o.learning.lessons_today} hint={`7 kunda: ${o.learning.lessons_7d}`} />
          <Stat icon={Users} label="Faol (24 soat / 7 kun)" value={`${o.users.active_24h} / ${o.users.active_7d}`} hint="Kirgan yoki o'qigan" />
          <Stat icon={Flame} label="3+ kunlik streak" value={o.learning.streak3} hint={`7+ kun: ${o.learning.streak7}`} tone="text-orange-500" />
          <Stat icon={Users} label="Kirish usuli" value={`G ${o.users.google} · T ${o.users.telegram}`} hint={`Google ${o.users.google} · Telegram ${o.users.telegram} · Email ${o.users.email}`} />
        </div>
      </Section>

      <div className="grid lg:grid-cols-2 gap-6">
        <Section title="Referal">
          <div className="grid grid-cols-2 gap-3">
            <Stat icon={Gift} label="Taklif qilinganlar" value={o.referral.invited} hint={`Tarif olgan: ${o.referral.bought} · mukofot: ${o.referral.rewarded}`} />
            <Stat icon={Gift} label="Yechish so'rovlari" value={o.referral.pending_count} hint={o.referral.pending_count ? `${som(o.referral.pending_sum)} to'lash kerak` : `Jami to'langan: ${som(o.referral.paid_sum)}`} tone={o.referral.pending_count ? 'text-destructive' : 'text-primary'} />
          </div>
        </Section>
        <Section title="Telegram bot">
          <div className="grid grid-cols-2 gap-3">
            <Stat icon={Bot} label="Bot foydalanuvchilari" value={o.bot.total} hint={`Hisobi ulangan: ${o.bot.linked} · bloklagan: ${o.bot.blocked}`} />
            <Stat icon={Bot} label="Xabarlar navbati" value={o.bot.outbox_pending} hint={`24 soatda xato: ${o.bot.outbox_failed_24h}`} tone={o.bot.outbox_failed_24h ? 'text-destructive' : 'text-primary'} />
          </div>
        </Section>
      </div>

      <Section title="IELTS (oxirgi 7 kun)" subtitle="Writing, Speaking va Mock test bo'yicha bajarilgan topshiriqlar">
        <div className="grid grid-cols-3 gap-3">
          <Stat icon={GraduationCap} label="Writing" value={o.ielts.writing_7d} />
          <Stat icon={GraduationCap} label="Speaking" value={o.ielts.speaking_7d} />
          <Stat icon={GraduationCap} label="Mock test" value={o.ielts.mock_7d} />
        </div>
      </Section>
    </div>
  );
}

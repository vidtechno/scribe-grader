import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { adminRpc, LEVEL_LABEL } from './adminApi';

interface Stats {
  levels: { level: string; n: number }[];
  top_lessons: { lesson: string; done: number; avg_score: number | null }[];
  hardest: { lesson: string; attempts: number; avg_score: number | null }[];
  unit_tests: { unit: string; passed: number; taken: number }[];
  level_tests: { level: string; passed: number; taken: number }[];
}

function Card({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return <section className="glass-card p-4"><h2 className="font-bold">{title}</h2>{subtitle && <p className="text-xs text-muted-foreground mb-3">{subtitle}</p>}<div className={subtitle ? '' : 'mt-3'}>{children}</div></section>;
}
const Empty = () => <p className="text-sm text-muted-foreground">Hozircha ma'lumot yo'q.</p>;

export function LearningTab() {
  const { data, isLoading, error } = useQuery({ queryKey: ['admin', 'learning'], queryFn: () => adminRpc<Stats>('admin_learning_stats') });
  if (isLoading) return <div className="grid place-items-center py-24"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  if (error || !data) return <p className="text-destructive text-sm">Yuklanmadi: {(error as Error)?.message}</p>;
  const maxLevel = Math.max(1, ...data.levels.map(l => l.n));
  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <Card title="Daraja bo'yicha o'quvchilar" subtitle="Kurs boshlagan foydalanuvchilar hozir qaysi darajada">
        {data.levels.length ? <div className="space-y-2.5">{data.levels.map(l => (
          <div key={l.level}><div className="flex justify-between text-sm mb-1"><span>{LEVEL_LABEL[l.level] ?? l.level}</span><span className="font-semibold">{l.n}</span></div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden"><div className="h-full bg-primary rounded-full" style={{ width: `${(l.n / maxLevel) * 100}%` }} /></div></div>
        ))}</div> : <Empty />}
      </Card>

      <Card title="Daraja yakuniy testlari" subtitle="Nechta urinish bo'ldi va nechtasi 70% dan o'tdi">
        {data.level_tests.length ? <div className="space-y-1.5">{data.level_tests.map(t => (
          <div key={t.level} className="flex justify-between text-sm"><span>{LEVEL_LABEL[t.level] ?? t.level}</span><span><b>{t.passed}</b> / {t.taken} o'tdi</span></div>
        ))}</div> : <Empty />}
      </Card>

      <Card title="Eng ko'p tugatilgan darslar" subtitle="Foydalanuvchilar eng ko'p tugatgan 10 ta dars">
        {data.top_lessons.length ? <div className="space-y-1.5">{data.top_lessons.map(l => (
          <div key={l.lesson} className="flex justify-between text-sm"><span className="font-mono text-xs">{l.lesson}</span><span><b>{l.done}</b> kishi{l.avg_score !== null ? ` · o'rtacha ${l.avg_score}%` : ''}</span></div>
        ))}</div> : <Empty />}
      </Card>

      <Card title="Eng qiyin darslar" subtitle="O'rtacha natijasi eng past darslar. Mazmunini qayta ko'rib chiqing">
        {data.hardest.length ? <div className="space-y-1.5">{data.hardest.map(l => (
          <div key={l.lesson} className="flex justify-between text-sm"><span className="font-mono text-xs">{l.lesson}</span><span>o'rtacha <b>{l.avg_score ?? '—'}%</b> · {l.attempts} urinish</span></div>
        ))}</div> : <Empty />}
      </Card>

      <div className="lg:col-span-2">
        <Card title="Bosqich testlari" subtitle="Har bir bosqich (unit) testi bo'yicha o'tganlar">
          {data.unit_tests.length ? <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1.5">{data.unit_tests.map(t => (
            <div key={t.unit} className="flex justify-between text-sm"><span className="font-mono text-xs">{t.unit}</span><span><b>{t.passed}</b> / {t.taken} o'tdi</span></div>
          ))}</div> : <Empty />}
        </Card>
      </div>
    </div>
  );
}

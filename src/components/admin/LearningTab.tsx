import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Award, Check, Loader2, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

interface Report { id: string; lesson_id: string | null; page: string | null; exercise: Record<string, unknown> | null; note: string | null; status: string; created_at: string; email: string | null }

/** Mistakes learners reported with "Xato topdim". */
function ReportsCard() {
  const qc = useQueryClient();
  const { data } = useQuery({ queryKey: ['admin', 'content-reports'], queryFn: () => adminRpc<{ open: number; rows: Report[] }>('admin_content_reports', { _status: 'open' }) });
  const resolve = async (id: string, status: 'fixed' | 'dismissed') => {
    await adminRpc('admin_content_report_resolve', { _id: id, _status: status });
    await qc.invalidateQueries({ queryKey: ['admin', 'content-reports'] });
  };
  return (
    <Card title={`Darslardagi xatolar haqida xabarlar${data ? ` (${data.open})` : ''}`} subtitle="Foydalanuvchilar «Xato topdim» tugmasini bosgan mashqlar. To'g'rilagach yoping">
      {data?.rows.length ? <div className="space-y-2.5 max-h-96 overflow-y-auto">{data.rows.map(r => (
        <div key={r.id} className="rounded-xl border border-border p-3 text-sm">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs bg-secondary rounded px-1.5 py-0.5">{r.lesson_id ?? r.page ?? '—'}</span>
            <span className="text-xs text-muted-foreground truncate">{r.email ?? ''} · {new Date(r.created_at).toLocaleDateString('uz-UZ')}</span>
            <span className="ml-auto flex gap-1">
              <button type="button" title="To'g'rilandi" onClick={() => void resolve(r.id, 'fixed')} className="h-7 w-7 grid place-items-center rounded-md hover:bg-emerald-500/15 text-emerald-600"><Check className="h-4 w-4" /></button>
              <button type="button" title="Xato emas" onClick={() => void resolve(r.id, 'dismissed')} className="h-7 w-7 grid place-items-center rounded-md hover:bg-secondary text-muted-foreground"><X className="h-4 w-4" /></button>
            </span>
          </div>
          {r.note && <p className="mb-1">{r.note}</p>}
          <pre className="text-[11px] leading-snug whitespace-pre-wrap break-words text-muted-foreground max-h-28 overflow-y-auto">{JSON.stringify(r.exercise)}</pre>
        </div>
      ))}</div> : <Empty />}
    </Card>
  );
}

interface CertRow {
  number: string; level_id: string; full_name: string; percent: number | null; passed_at: string | null; issued_at: string; renamed_at: string | null;
  user_id: string; email: string; profile_name: string | null; public_id: string | null;
  all_certificates: { number: string; level_id: string; full_name: string; percent: number | null; passed_at: string | null }[];
}
const day = (iso: string | null) => (iso ? new Date(iso).toLocaleDateString('uz-UZ') : '—');

/** Finds a certificate by its number and shows who owns it and every certificate of that account. */
function CertificateCheck() {
  const [q, setQ] = useState('');
  const [rows, setRows] = useState<CertRow[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const search = async () => {
    setBusy(true); setError('');
    try { setRows(await adminRpc<CertRow[]>('admin_certificate_lookup', { _q: q })); }
    catch (e) { setError((e as Error).message); } finally { setBusy(false); }
  };
  return (
    <Card title="Sertifikatni tekshirish" subtitle="Sertifikatdagi raqamni kiriting (masalan SC-BEG-K7M2Q9XA). Raqamning bir qismi ham yetadi">
      <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); void search(); }}>
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="SC-BEG-…" className="font-mono" />
        <Button type="submit" disabled={busy || q.trim().length < 3} className="gap-1.5">{busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}Qidirish</Button>
      </form>
      {error && <p className="text-sm text-destructive mt-2">{error}</p>}
      {rows && !rows.length && <p className="text-sm mt-3 rounded-lg bg-destructive/10 text-destructive px-3 py-2">Bunday raqamli sertifikat topilmadi. U soxta bo'lishi mumkin.</p>}
      {rows?.map((r) => (
        <div key={r.number} className="mt-3 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3.5 text-sm">
          <p className="font-bold flex items-center gap-2"><Award className="h-4 w-4 text-emerald-600" /><span className="font-mono">{r.number}</span> · {LEVEL_LABEL[r.level_id] ?? r.level_id}{r.percent != null ? ` · ${r.percent}%` : ''}</p>
          <p className="mt-1">Sertifikatdagi ism: <b>{r.full_name}</b>{r.renamed_at ? <span className="text-amber-600"> (ism keyin o'zgartirilgan: {day(r.renamed_at)})</span> : null}</p>
          <p>Akkaunt: <b>{r.email}</b>{r.public_id ? ` · ID ${r.public_id}` : ''}{r.profile_name && r.profile_name !== r.full_name ? ` · profil: ${r.profile_name}` : ''}</p>
          <p className="text-muted-foreground">Test o'tilgan: {day(r.passed_at)} · berilgan: {day(r.issued_at)}</p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Shu akkauntning barcha sertifikatlari</p>
          <ul className="mt-1 space-y-0.5">{r.all_certificates.map((c) => (
            <li key={c.number}><span className="font-mono text-xs">{c.number}</span> · {LEVEL_LABEL[c.level_id] ?? c.level_id}{c.percent != null ? ` · ${c.percent}%` : ''} · {day(c.passed_at)}</li>
          ))}</ul>
        </div>
      ))}
    </Card>
  );
}

export function LearningTab() {
  const { data, isLoading, error } = useQuery({ queryKey: ['admin', 'learning'], queryFn: () => adminRpc<Stats>('admin_learning_stats') });
  if (isLoading) return <div className="grid place-items-center py-24"><Loader2 className="h-6 w-6 animate-spin text-primary" /></div>;
  if (error || !data) return <p className="text-destructive text-sm">Yuklanmadi: {(error as Error)?.message}</p>;
  const maxLevel = Math.max(1, ...data.levels.map(l => l.n));
  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <div className="lg:col-span-2"><CertificateCheck /></div>
      <div className="lg:col-span-2"><ReportsCard /></div>
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

import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

/** A number with a label and an optional one-line hint: the building block of the admin statistics. */
export function Stat({ icon: Icon, label, value, hint, tone = 'text-primary', accent = false }: { icon: LucideIcon; label: string; value: string | number; hint?: string; tone?: string; accent?: boolean }) {
  return (
    <div className={`glass-card p-4 ${accent ? 'border-emerald-500/40 bg-emerald-500/5' : ''}`}>
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1"><Icon className={`h-4 w-4 ${tone}`} />{label}</div>
      <p className="text-2xl font-extrabold">{value}</p>
      {hint && <p className="text-[11px] text-muted-foreground mt-0.5">{hint}</p>}
    </div>
  );
}

export function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <div><h2 className="font-bold">{title}</h2>{subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}</div>
      {children}
    </section>
  );
}

/** Horizontal bars: each row has a label, a number and a bar as wide as its share of the largest row. */
export function Bars({ rows, tone = 'bg-primary' }: { rows: { label: string; n: number; hint?: string }[]; tone?: string }) {
  const max = Math.max(1, ...rows.map((r) => r.n));
  return (
    <div className="space-y-2.5">
      {rows.map((r) => (
        <div key={r.label}>
          <div className="flex justify-between text-sm mb-1"><span>{r.label}</span><span className="font-semibold">{r.n}{r.hint && <span className="text-muted-foreground font-normal"> · {r.hint}</span>}</span></div>
          <div className="h-2.5 rounded-full bg-secondary overflow-hidden"><div className={`h-full rounded-full ${tone}`} style={{ width: `${(r.n / max) * 100}%` }} /></div>
        </div>
      ))}
    </div>
  );
}

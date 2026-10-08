import type { LucideIcon } from 'lucide-react';

export function UsageBar({ used, limit }: { used: number; limit: number }) {
  const pct = limit > 0 ? Math.min(100, (used / limit) * 100) : 0;
  return (
    <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
      <div className={`h-full rounded-full transition-all ${pct >= 100 ? 'bg-destructive' : 'bg-primary'}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export function PracticeCard({ icon: Icon, title, text, left, limit, used, last, average, tone, children }: {
  icon: LucideIcon; title: string; text: string; left: number; limit: number; used: number; last: string; average: string; tone: 'primary' | 'accent'; children: React.ReactNode;
}) {
  const tint = tone === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/15 text-accent';
  return (
    <div className="glass-card p-5 sm:p-6 flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className={`w-12 h-12 rounded-2xl grid place-items-center ${tint}`}><Icon className="h-6 w-6" /></span>
          <div>
            <h2 className="text-xl font-bold leading-tight">{title}</h2>
            <p className="text-sm text-muted-foreground">{text}</p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-2xl font-bold leading-none">{left}</p>
          <p className="text-[11px] text-muted-foreground">left this month</p>
        </div>
      </div>
      <div className="mt-4"><UsageBar used={used} limit={limit} /></div>
      <div className="mt-4 grid grid-cols-2 gap-3 text-center">
        <div className="rounded-xl bg-secondary/40 py-2"><p className="text-lg font-bold">{last}</p><p className="text-[11px] text-muted-foreground">Latest band</p></div>
        <div className="rounded-xl bg-secondary/40 py-2"><p className="text-lg font-bold">{average}</p><p className="text-[11px] text-muted-foreground">Average band</p></div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">{children}</div>
    </div>
  );
}


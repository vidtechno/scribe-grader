/** Dollar price first; the Uzbek so'm price is shown as the secondary, local option. */
export function PriceTag({ usd, uzs, size = 'lg' }: { usd: string | number; uzs?: string | null; size?: 'lg' | 'sm' }) {
  const amount = Number(usd) || 0;
  return (
    <div>
      <div className="flex items-baseline gap-1">
        <span className={`${size === 'lg' ? 'text-4xl' : 'text-2xl'} font-bold text-primary`}>{amount === 0 ? 'Free' : `$${amount}`}</span>
        {amount > 0 && <span className="text-xs text-muted-foreground">/ month</span>}
      </div>
      {amount > 0 && uzs && <p className="text-xs text-muted-foreground mt-0.5">or {uzs} so'm / month in Uzbekistan</p>}
    </div>
  );
}

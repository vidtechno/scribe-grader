import { Coins } from 'lucide-react';

interface SubscriptionBadgeProps {
  planType?: string;
  size?: 'sm' | 'md';
}

// Credit-based model: there are no subscription tiers anymore.
// Kept for compatibility — renders a simple "Credit Member" chip.
export function SubscriptionBadge({ size = 'sm' }: SubscriptionBadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-medium bg-primary/10 text-primary border border-primary/20 ${
      size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
    }`}>
      <Coins className={size === 'sm' ? 'h-3 w-3' : 'h-4 w-4'} />
      Credits
    </span>
  );
}

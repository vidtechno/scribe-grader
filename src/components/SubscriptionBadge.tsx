import { Coins, Crown } from 'lucide-react';

interface SubscriptionBadgeProps {
  planType?: string;
  size?: 'sm' | 'md';
  isPremium?: boolean;
}

// Credit-based model with a lifetime Premium flag once a user has purchased
// at least 10 credits total. Renders a Premium badge in that case.
export function SubscriptionBadge({ size = 'sm', isPremium }: SubscriptionBadgeProps) {
  if (isPremium) {
    return (
      <span className={`inline-flex items-center gap-1 rounded-full font-medium bg-gradient-to-r from-amber-400/20 to-amber-600/20 text-amber-700 dark:text-amber-300 border border-amber-500/30 ${
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
      }`}>
        <Crown className={size === 'sm' ? 'h-3 w-3' : 'h-4 w-4'} />
        Premium
      </span>
    );
  }
  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-medium bg-primary/10 text-primary border border-primary/20 ${
      size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
    }`}>
      <Coins className={size === 'sm' ? 'h-3 w-3' : 'h-4 w-4'} />
      Credits
    </span>
  );
}

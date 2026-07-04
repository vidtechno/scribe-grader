import { Crown, Sparkles, Zap, Star } from 'lucide-react';

interface SubscriptionBadgeProps {
  planType?: string;
  planName?: string;
  size?: 'sm' | 'md';
  isPremium?: boolean;
}

// Renders a badge that reflects the user's current monthly plan.
export function SubscriptionBadge({ planType = 'free', planName, size = 'sm' }: SubscriptionBadgeProps) {
  const label = planName || planType.charAt(0).toUpperCase() + planType.slice(1);
  const style = (() => {
    switch (planType) {
      case 'pro':
        return { Icon: Crown, cls: 'bg-gradient-to-r from-amber-400/20 to-amber-600/20 text-amber-700 dark:text-amber-300 border border-amber-500/30' };
      case 'standard':
        return { Icon: Sparkles, cls: 'bg-gradient-to-r from-primary/20 to-primary/10 text-primary border border-primary/30' };
      case 'starter':
        return { Icon: Zap, cls: 'bg-secondary text-foreground border border-border' };
      default:
        return { Icon: Star, cls: 'bg-muted text-muted-foreground border border-border' };
    }
  })();
  const { Icon, cls } = style;
  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-medium ${cls} ${
      size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
    }`}>
      <Icon className={size === 'sm' ? 'h-3 w-3' : 'h-4 w-4'} />
      {label}
    </span>
  );
}

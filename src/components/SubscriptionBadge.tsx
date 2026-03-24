import { Crown, Zap, Star } from 'lucide-react';

interface SubscriptionBadgeProps {
  planType: string;
  size?: 'sm' | 'md';
}

const planConfig = {
  free: { label: 'Free', icon: Star, className: 'bg-secondary text-secondary-foreground' },
  pro: { label: 'Pro', icon: Zap, className: 'bg-primary/20 text-primary border border-primary/30' },
  pro_plus: { label: 'Pro+', icon: Crown, className: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' },
};

export function SubscriptionBadge({ planType, size = 'sm' }: SubscriptionBadgeProps) {
  const config = planConfig[planType as keyof typeof planConfig] || planConfig.free;
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-medium ${config.className} ${
      size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
    }`}>
      <Icon className={size === 'sm' ? 'h-3 w-3' : 'h-4 w-4'} />
      {config.label}
    </span>
  );
}

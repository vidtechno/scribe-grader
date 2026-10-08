import { Link } from 'react-router-dom';
import { Flame, Loader2, UserCheck, UserPlus, Zap } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { levelOf } from '@/features/learn/course';
import { socialErrorMessage, useFollow, type SocialCard } from './api';

export function Avatar({ name, size = 'md' }: { name: string; size?: 'md' | 'lg' }) {
  const initials = name.split(/\s+/).map((s) => s[0]).join('').slice(0, 2).toUpperCase() || 'O';
  const dim = size === 'lg' ? 'h-20 w-20 text-2xl rounded-2xl' : 'h-10 w-10 text-sm rounded-xl';
  return <span className={`${dim} shrink-0 grid place-items-center font-bold text-primary-foreground bg-gradient-to-br from-primary to-brand-red-soft`}>{initials}</span>;
}

export function FollowButton({ publicId, following, size = 'sm' }: { publicId: string; following: boolean; size?: 'sm' | 'default' }) {
  const follow = useFollow();
  return (
    <Button size={size} variant={following ? 'outline' : 'default'} disabled={follow.isPending} className="gap-1.5 shrink-0"
      onClick={() => follow.mutate({ publicId, follow: !following }, { onError: (e) => toast.error(socialErrorMessage(e)) })}>
      {follow.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : following ? <UserCheck className="h-4 w-4" /> : <UserPlus className="h-4 w-4" />}
      {following ? 'Obuna' : 'Obuna bo\'lish'}
    </Button>
  );
}

export function levelLabel(level: string | null | undefined): string {
  if (!level) return 'Yangi';
  return levelOf(level).title;
}

export function PersonRow({ card }: { card: SocialCard }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/60 p-3">
      <Link to={`/u/${card.public_id}`} className="flex flex-1 min-w-0 items-center gap-3">
        <Avatar name={card.name} />
        <span className="min-w-0">
          <span className="block truncate font-semibold text-sm">{card.name}</span>
          <span className="flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground">
            <span>{levelLabel(card.level)}</span>
            {card.xp != null && <span className="inline-flex items-center gap-0.5"><Zap className="h-3 w-3" />{card.xp}</span>}
            {!!card.streak && <span className="inline-flex items-center gap-0.5 text-orange-500"><Flame className="h-3 w-3" />{card.streak}</span>}
            {card.follows_me && <span className="text-primary">sizga obuna</span>}
          </span>
        </span>
      </Link>
      <FollowButton publicId={card.public_id} following={card.is_following} />
    </div>
  );
}

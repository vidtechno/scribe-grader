import { Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlurredContentProps {
  text: string;
  visibleWords?: number;
  onUpgrade: () => void;
}

export function BlurredContent({ text, visibleWords = 8, onUpgrade }: BlurredContentProps) {
  const words = text.split(' ');
  const visible = words.slice(0, visibleWords).join(' ');
  const hasMore = words.length > visibleWords;

  if (!hasMore) {
    return <span className="text-sm text-muted-foreground leading-relaxed">{text}</span>;
  }

  return (
    <div className="relative">
      <p className="text-sm text-muted-foreground leading-relaxed">
        {visible}{' '}
        <span className="blur-sm select-none">
          {words.slice(visibleWords).join(' ')}
        </span>
      </p>
      <div className="absolute inset-0 top-6 flex items-center justify-center bg-gradient-to-t from-card/90 to-transparent rounded-lg">
        <Button variant="outline" size="sm" className="gap-2 border-primary/30 text-primary" onClick={onUpgrade}>
          <Crown className="h-3.5 w-3.5" />
          Upgrade to unlock
        </Button>
      </div>
    </div>
  );
}

import { useMemo, useState } from 'react';
import { RefreshCw, Search, Shuffle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { topicOptions, randomTopic, type PartKey, type TopicOption } from '@/lib/speakingTopics';
import { TOPIC_CATEGORIES, type TopicCategory } from '@/lib/speakingBank.types';

/** Browse the topic bank by category, search it, or let chance pick. */
export function TopicPicker({ part, selectedId, onSelect }: { part: PartKey; selectedId?: string; onSelect: (t: TopicOption) => void }) {
  const [category, setCategory] = useState<TopicCategory | 'All'>('All');
  const [query, setQuery] = useState('');
  const all = topicOptions(part);
  const present = useMemo(() => TOPIC_CATEGORIES.filter((c) => all.some((t) => t.category === c)), [all]);
  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((t) => (category === 'All' || t.category === category) && (!q || t.label.toLowerCase().includes(q) || t.text.toLowerCase().includes(q)));
  }, [all, category, query]);

  return (
    <div>
      <div className="flex gap-2 mb-3">
        <div className="relative flex-1">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={`Search ${all.length} topics…`} className="pl-9" aria-label="Search topics" />
        </div>
        <Button type="button" variant="outline" className="gap-2 shrink-0" onClick={() => onSelect(randomTopic(part, category, selectedId))}>
          <Shuffle className="h-4 w-4" /><span className="hidden sm:inline">Surprise me</span>
        </Button>
      </div>
      <div className="flex gap-1.5 overflow-x-auto pb-2 -mx-1 px-1" role="tablist" aria-label="Topic categories">
        {(['All', ...present] as const).map((c) => (
          <button key={c} type="button" role="tab" aria-selected={category === c} onClick={() => setCategory(c)}
            className={cn('shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition-colors', category === c ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:border-primary/50')}>
            {c}
          </button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground my-2">{shown.length} topic{shown.length === 1 ? '' : 's'}</p>
      <ul className="grid sm:grid-cols-2 gap-2 max-h-[26rem] overflow-y-auto pr-1">
        {shown.map((t) => (
          <li key={t.id}>
            <button type="button" onClick={() => onSelect(t)} aria-pressed={selectedId === t.id}
              className={cn('w-full text-left rounded-xl border p-3 transition-all h-full', selectedId === t.id ? 'border-primary bg-primary/5 ring-1 ring-primary/40' : 'border-border bg-card hover:border-primary/40')}>
              <span className="block text-[10px] uppercase tracking-wide text-muted-foreground">{t.category}</span>
              <span className="block text-sm font-medium leading-snug">{t.label}</span>
            </button>
          </li>
        ))}
        {shown.length === 0 && <li className="col-span-full text-sm text-muted-foreground py-6 text-center flex items-center justify-center gap-2"><RefreshCw className="h-4 w-4" />No topic matches. Try another word.</li>}
      </ul>
    </div>
  );
}

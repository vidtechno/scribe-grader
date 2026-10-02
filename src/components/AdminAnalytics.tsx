import { useState } from 'react';
import { BarChart3, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const STORAGE_KEY = 'scorify-admin-datafast-url';
const DEFAULT_URL = 'https://datafa.st/dashboard';

function readStored(): string {
  try { return localStorage.getItem(STORAGE_KEY) ?? ''; } catch { return ''; }
}

/** Admin-only DataFast statistics. The visitor script itself is loaded in index.html for every page. */
export function AdminAnalytics() {
  const [saved, setSaved] = useState(readStored);
  const [draft, setDraft] = useState(saved);
  const url = saved.startsWith('https://datafa.st/') ? saved : '';

  const save = () => {
    const value = draft.trim();
    try { localStorage.setItem(STORAGE_KEY, value); } catch { /* storage unavailable */ }
    setSaved(value);
  };

  return (
    <div className="space-y-4">
      <div className="glass-card p-4 space-y-3">
        <p className="text-sm font-semibold flex items-center gap-2"><BarChart3 className="h-4 w-4 text-primary" /> DataFast analytics</p>
        <p className="text-xs text-muted-foreground">
          Tracking runs on every page of scorify.uz. Paste your DataFast share link (https://datafa.st/share/…) to see the statistics here.
          Only admins can open this tab; the link is kept in this browser only.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input value={draft} onChange={e => setDraft(e.target.value)} placeholder="https://datafa.st/share/…" />
          <Button onClick={save} disabled={draft.trim() === saved}>Save</Button>
          <a href={url || DEFAULT_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2 w-full sm:w-auto"><ExternalLink className="h-4 w-4" /> Open DataFast</Button>
          </a>
        </div>
        {saved && !url && <p className="text-xs text-destructive">Only https://datafa.st/ links are accepted.</p>}
      </div>
      {url && (
        <iframe title="DataFast analytics" src={url} className="w-full h-[80vh] rounded-xl border bg-background" />
      )}
    </div>
  );
}

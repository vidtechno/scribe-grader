import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Navbar } from '@/components/Navbar';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mic, ChevronRight, Clock, ChevronLeft, Loader2, AlertCircle, PenLine } from 'lucide-react';
import { format } from 'date-fns';

interface Attempt {
  id: string;
  topic: string;
  part: string;
  score: number | null;
  duration_seconds: number;
  created_at: string;
  status?: string;
  error_message?: string | null;
}

export default function SpeakingHistory() {
  const { user } = useAuth();
  const [items, setItems] = useState<Attempt[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState<'all' | 'drafts' | 'processing'>('all');
  const PAGE_SIZE = 10;

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    const load = async () => {
      const { data } = await supabase
        .from('speaking_attempts')
        .select('id, topic, part, score, duration_seconds, created_at, status, error_message')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      if (cancelled) return;
      setItems((data as any) || []);
      setLoading(false);
    };
    load();
    const channel = supabase
      .channel('speaking-history-live')
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'speaking_attempts', filter: `user_id=eq.${user.id}` },
        () => load())
      .subscribe();
    return () => { cancelled = true; supabase.removeChannel(channel); };
  }, [user]);

  const filtered = useMemo(() => {
    if (tab === 'drafts') return items.filter(a => a.status === 'draft');
    if (tab === 'processing') return items.filter(a => a.status === 'processing' || a.status === 'queued');
    return items;
  }, [items, tab]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const draftCount = items.filter(a => a.status === 'draft').length;
  const procCount = items.filter(a => a.status === 'processing' || a.status === 'queued').length;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SEOHead title="Speaking History" description="All your IELTS Speaking attempts" path="/speaking-history" />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <Link to="/dashboard" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Mic className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Speaking History</h1>
            <p className="text-sm text-muted-foreground">{items.length} total attempt{items.length === 1 ? '' : 's'}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {([
            { k: 'all', label: `All (${items.length})` },
            { k: 'processing', label: `Processing (${procCount})` },
            { k: 'drafts', label: `Drafts (${draftCount})` },
          ] as const).map(t => (
            <button key={t.k} onClick={() => { setTab(t.k); setPage(1); }}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition ${
                tab === t.k ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary/40 border-border text-muted-foreground hover:text-foreground'
              }`}>
              {t.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="space-y-2">{[1,2,3].map(i => <div key={i} className="h-16 bg-secondary/40 rounded-lg animate-pulse" />)}</div>
        ) : filtered.length === 0 ? (
          <div className="glass-card p-10 text-center">
            <Mic className="h-12 w-12 mx-auto mb-3 opacity-40" />
            <p className="text-muted-foreground mb-4">
              {tab === 'drafts' ? 'No drafts saved' : tab === 'processing' ? 'Nothing is processing right now' : 'No speaking attempts yet'}
            </p>
            <Link to="/speaking"><Button variant="glow">Start your first attempt</Button></Link>
          </div>
        ) : (
          <>
          <div className="space-y-2">
            {paginated.map(a => {
              const isDraft = a.status === 'draft';
              const isProcessing = a.status === 'processing' || a.status === 'queued';
              const isFailed = a.status === 'failed';
              const href = isDraft ? '/speaking' : `/speaking-result/${a.id}`;
              return (
              <Link key={a.id} to={href}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-base font-bold ${
                  isProcessing ? 'bg-blue-500/15 text-blue-600' :
                  isDraft ? 'bg-amber-500/15 text-amber-600' :
                  isFailed ? 'bg-destructive/15 text-destructive' :
                  (a.score ?? 0) >= 7 ? 'bg-primary/15 text-primary' : (a.score ?? 0) >= 5 ? 'bg-yellow-500/15 text-yellow-600' : 'bg-destructive/15 text-destructive'
                }`}>
                  {isProcessing ? <Loader2 className="h-5 w-5 animate-spin" /> :
                   isDraft ? <PenLine className="h-5 w-5" /> :
                   isFailed ? <AlertCircle className="h-5 w-5" /> :
                   (a.score ?? '—')}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary uppercase">{a.part}</span>
                    <span className="text-[10px] text-muted-foreground">{format(new Date(a.created_at), 'MMM d, yyyy')}</span>
                    {isProcessing && <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-blue-500/15 text-blue-600">Processing…</span>}
                    {isDraft && <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-600">Draft</span>}
                    {isFailed && <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-destructive/15 text-destructive">Failed</span>}
                    <span className="text-[10px] text-muted-foreground inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {Math.floor(a.duration_seconds/60)}:{(a.duration_seconds%60).toString().padStart(2,'0')}
                    </span>
                  </div>
                  <p className="text-sm truncate text-muted-foreground">{a.topic}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            );})}
          </div>
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6">
              <Button variant="outline" size="sm" disabled={currentPage === 1}
                onClick={() => setPage(p => Math.max(1, p - 1))} className="gap-1">
                <ChevronLeft className="h-4 w-4" /> Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button variant="outline" size="sm" disabled={currentPage === totalPages}
                onClick={() => setPage(p => Math.min(totalPages, p + 1))} className="gap-1">
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
          </>
        )}
      </main>
    </div>
  );
}
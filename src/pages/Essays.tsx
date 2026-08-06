import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { LoadingScreen } from '@/components/LoadingScreen';
import { SEOHead } from '@/components/SEOHead';
import { ArrowLeft, FileText, ChevronRight, ChevronLeft, Loader2, AlertCircle, PenLine } from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';

interface Essay {
  id: string;
  task_type: string;
  topic: string;
  score: number | null;
  word_count: number;
  created_at: string;
  status?: string;
  error_message?: string | null;
}

const PAGE_SIZE = 10;

export default function Essays() {
  const { user } = useAuth();
  const [essays, setEssays] = useState<Essay[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [tab, setTab] = useState<'all' | 'drafts' | 'processing'>('all');

  useEffect(() => {
    if (!user) return;
    fetchEssays();
    const channel = supabase
      .channel('essays-history-live')
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'essays', filter: `user_id=eq.${user.id}` },
        () => fetchEssays())
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [user]);

  const fetchEssays = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('essays')
        .select('id, task_type, topic, score, word_count, created_at, status, error_message')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEssays(data || []);
    } catch (error) {
      console.error('Error fetching essays:', error);
    } finally {
      setLoading(false);
    }
  };

  const filtered = useMemo(() => {
    if (tab === 'drafts') return essays.filter(e => e.status === 'draft');
    if (tab === 'processing') return essays.filter(e => e.status === 'processing' || e.status === 'queued');
    return essays;
  }, [essays, tab]);
  const totalCount = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  const currentPageSafe = Math.min(currentPage, totalPages);
  const pageItems = filtered.slice((currentPageSafe - 1) * PAGE_SIZE, currentPageSafe * PAGE_SIZE);
  const draftCount = essays.filter(e => e.status === 'draft').length;
  const procCount = essays.filter(e => e.status === 'processing' || e.status === 'queued').length;

  const getScoreColor = (score: number) => {
    if (score >= 7) return 'text-primary';
    if (score >= 5) return 'text-yellow-500';
    return 'text-destructive';
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SEOHead title="My Essays" description="View all your IELTS practice essays and scores." path="/essays" noindex />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Link>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">All Essays</h1>
            <p className="text-muted-foreground text-sm">{essays.length} essays total</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {([
            { k: 'all', label: `All (${essays.length})` },
            { k: 'processing', label: `Processing (${procCount})` },
            { k: 'drafts', label: `Drafts (${draftCount})` },
          ] as const).map(t => (
            <button key={t.k} onClick={() => { setTab(t.k); setCurrentPage(1); }}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition ${
                tab === t.k ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary/40 border-border text-muted-foreground hover:text-foreground'
              }`}>
              {t.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-20 bg-secondary/50 rounded-lg animate-pulse" />)}
          </div>
        ) : pageItems.length > 0 ? (
          <div className="space-y-3">
            {pageItems.map((essay, index) => {
              const isDraft = essay.status === 'draft';
              const isProcessing = essay.status === 'processing' || essay.status === 'queued';
              const isFailed = essay.status === 'failed';
              const href = isDraft ? '/exam' : `/result/${essay.id}`;
              return (
              <motion.div
                key={essay.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={href}
                  className="flex items-center justify-between p-4 rounded-lg glass-card-hover group">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{essay.task_type}</span>
                      <span className="text-xs text-muted-foreground">{format(new Date(essay.created_at), 'MMM d, yyyy · HH:mm')}</span>
                      <span className="text-xs text-muted-foreground">{essay.word_count} words</span>
                      {isProcessing && <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-blue-500/15 text-blue-600 inline-flex items-center gap-1"><Loader2 className="h-3 w-3 animate-spin" /> Processing…</span>}
                      {isDraft && <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-600 inline-flex items-center gap-1"><PenLine className="h-3 w-3" /> Draft</span>}
                      {isFailed && <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-destructive/15 text-destructive inline-flex items-center gap-1"><AlertCircle className="h-3 w-3" /> Failed</span>}
                    </div>
                    <p className="text-sm truncate text-muted-foreground">{essay.topic}</p>
                  </div>
                  <div className="flex items-center gap-3 ml-4">
                    {isProcessing ? (
                      <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
                    ) : essay.score !== null ? (
                      <span className={`text-lg font-bold ${getScoreColor(essay.score)}`}>{essay.score}</span>
                    ) : (
                      <span className="text-sm text-muted-foreground">—</span>
                    )}
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>);
            })}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <FileText className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>No essays yet. Start your first exam!</p>
            <Link to="/exam?task=2" className="mt-4 inline-block">
              <Button variant="glow">Start Writing</Button>
            </Link>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button variant="outline" size="sm" disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <Button key={page} variant={page === currentPage ? 'default' : 'outline'} size="sm"
                onClick={() => setCurrentPage(page)}
                className="w-9">
                {page}
              </Button>
            ))}
            <Button variant="outline" size="sm" disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}

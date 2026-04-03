import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { LoadingScreen } from '@/components/LoadingScreen';
import { SEOHead } from '@/components/SEOHead';
import { ArrowLeft, FileText, ChevronRight, ChevronLeft } from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

interface Essay {
  id: string;
  task_type: string;
  topic: string;
  score: number | null;
  word_count: number;
  created_at: string;
}

const PAGE_SIZE = 10;

export default function Essays() {
  const [essays, setEssays] = useState<Essay[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  useEffect(() => {
    fetchEssays();
  }, [currentPage]);

  const fetchEssays = async () => {
    setLoading(true);
    try {
      const from = (currentPage - 1) * PAGE_SIZE;
      const to = from + PAGE_SIZE - 1;

      const { count } = await supabase
        .from('essays')
        .select('*', { count: 'exact', head: true });

      setTotalCount(count || 0);

      const { data, error } = await supabase
        .from('essays')
        .select('id, task_type, topic, score, word_count, created_at')
        .order('created_at', { ascending: false })
        .range(from, to);

      if (error) throw error;
      setEssays(data || []);
    } catch (error) {
      console.error('Error fetching essays:', error);
    } finally {
      setLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 7) return 'text-primary';
    if (score >= 5) return 'text-yellow-500';
    return 'text-destructive';
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SEOHead title="My Essays" description="View all your IELTS practice essays and scores." path="/essays" />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Link>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">All Essays</h1>
            <p className="text-muted-foreground text-sm">{totalCount} essays total</p>
          </div>
        </div>

        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-20 bg-secondary/50 rounded-lg animate-pulse" />)}
          </div>
        ) : essays.length > 0 ? (
          <div className="space-y-3">
            {essays.map((essay, index) => (
              <motion.div
                key={essay.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/result/${essay.id}`}
                  className="flex items-center justify-between p-4 rounded-lg glass-card-hover group">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{essay.task_type}</span>
                      <span className="text-xs text-muted-foreground">{format(new Date(essay.created_at), 'MMM d, yyyy · HH:mm')}</span>
                      <span className="text-xs text-muted-foreground">{essay.word_count} words</span>
                    </div>
                    <p className="text-sm truncate text-muted-foreground">{essay.topic}</p>
                  </div>
                  <div className="flex items-center gap-3 ml-4">
                    {essay.score !== null ? (
                      <span className={`text-lg font-bold ${getScoreColor(essay.score)}`}>{essay.score}</span>
                    ) : (
                      <span className="text-sm text-muted-foreground">Pending</span>
                    )}
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
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

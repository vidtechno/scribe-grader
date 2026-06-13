import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { MockTestHistoryCard, MockTestSummary } from '@/components/MockTestHistoryCard';
import { BandTrendChart } from '@/components/BandTrendChart';
import { motion } from 'framer-motion';
import { ClipboardList, Sparkles, Award, TrendingUp, AlertCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export default function MockTestDashboard() {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [tests, setTests] = useState<MockTestSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data } = await supabase
        .from('mock_tests')
        .select('id,status,overall_band,task1_band,task2_band,speaking_band,created_at,completed_at,grammar_errors_count,lexical_errors_count')
        .order('created_at', { ascending: false });
      setTests((data as any) || []);
      setLoading(false);
    })();
  }, [user]);

  const completed = tests.filter(t => t.status === 'completed');
  const avg = completed.length > 0
    ? (completed.reduce((a, t) => a + (t.overall_band || 0), 0) / completed.length).toFixed(1)
    : 'N/A';
  const best = completed.length > 0 ? Math.max(...completed.map(t => t.overall_band || 0)) : 'N/A';

  const startTest = async () => {
    if (!user) return;
    if ((profile?.credits ?? 0) < 1) {
      toast.error('You need at least 1 credit to start a mock test');
      return;
    }
    setCreating(true);
    // Resume if there's already an in-progress test
    const inProgress = tests.find(t => t.status === 'in_progress');
    if (inProgress) {
      navigate(`/mock-test/exam/${inProgress.id}`);
      return;
    }
    const { data, error } = await supabase
      .from('mock_tests')
      .insert({ user_id: user.id, status: 'in_progress', current_step: 'task1' })
      .select()
      .single();
    setCreating(false);
    if (error || !data) { toast.error('Failed to start mock test'); return; }
    navigate(`/mock-test/exam/${data.id}`);
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SEOHead title="Mock Test Simulator" description="Take full IELTS mock tests and track your band trend over time." path="/mock-test" />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 sm:p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                <ClipboardList className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-1">Mock Test Simulator</h1>
                <p className="text-sm text-muted-foreground">Full IELTS exam: Writing Task 1 + Task 2 + Speaking Parts 1–3</p>
              </div>
            </div>
            <Button variant="glow" size="lg" onClick={startTest} disabled={creating} className="gap-2 w-full sm:w-auto">
              {creating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
              Start New Mock Test
              <span className="ml-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-primary-foreground/15">1 credit</span>
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { icon: ClipboardList, value: tests.length, label: 'Total Tests' },
            { icon: Award, value: completed.length, label: 'Completed' },
            { icon: TrendingUp, value: avg, label: 'Avg Band' },
            { icon: Sparkles, value: best, label: 'Best Band' },
          ].map(s => (
            <div key={s.label} className="glass-card p-3 sm:p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <s.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold">{s.value}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" /> Band Score Trend
          </h2>
          <BandTrendChart data={completed} />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Past Mock Tests</h2>
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground py-8">Loading…</div>
        ) : tests.length === 0 ? (
          <div className="glass-card p-8 text-center">
            <AlertCircle className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
            <p className="font-semibold mb-1">No mock tests yet</p>
            <p className="text-sm text-muted-foreground mb-4">Take your first full mock test to track your progress.</p>
            <Button variant="glow" onClick={startTest} disabled={creating} className="gap-2">
              <Sparkles className="h-4 w-4" /> Start Mock Test
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {tests.map(t => <MockTestHistoryCard key={t.id} mt={t} />)}
          </div>
        )}
      </main>
    </div>
  );
}
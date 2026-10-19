import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { MockTestHistoryCard, MockTestSummary } from '@/components/MockTestHistoryCard';
import { BandTrendChart } from '@/components/BandTrendChart';
import { motion } from 'framer-motion';
import { ClipboardList, Sparkles, Award, TrendingUp, AlertCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { PricingModal } from '@/components/PricingModal';
import { LISTENING_TESTS, READING_TESTS } from '@/features/ielts/registry';
import { pickMockTests } from '@/features/ielts/mock';
import { useT } from '@/i18n';

export default function MockTestDashboard() {
  const { t: tr } = useT();
  const { user } = useAuth();
  const { mockRemaining, loading: quotaLoading, planType } = useSubscription();
  const navigate = useNavigate();
  const [tests, setTests] = useState<MockTestSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    const load = async () => {
      const { data } = await supabase
        .from('mock_tests')
        .select('id,status,overall_band,task1_band,task2_band,speaking_band,listening_band,reading_band,listening_test_id,reading_test_id,created_at,completed_at,grammar_errors_count,lexical_errors_count')
        .order('created_at', { ascending: false });
      if (!cancelled) {
        setTests((data as any) || []);
        setLoading(false);
      }
    };
    load();
    const channel = supabase
      .channel('mock-tests-live')
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'mock_tests', filter: `user_id=eq.${user.id}` },
        () => load()
      )
      .subscribe();
    return () => { cancelled = true; supabase.removeChannel(channel); };
  }, [user]);

  const completed = tests.filter(t => t.status === 'completed');
  const avg = completed.length > 0
    ? (completed.reduce((a, t) => a + (t.overall_band || 0), 0) / completed.length).toFixed(1)
    : tr('mock.dash.na');
  const best = completed.length > 0 ? Math.max(...completed.map(t => t.overall_band || 0)) : tr('mock.dash.na');
  const inProgressTest = tests.find(t => t.status === 'in_progress');
  const startLabel = inProgressTest ? tr('mock.dash.resume') : mockRemaining > 0 ? tr('mock.dash.start') : tr('mock.dash.upgrade');

  const startTest = async () => {
    if (!user || loading || quotaLoading || creating) return;
    // Resume if there's already an in-progress test
    if (inProgressTest) {
      navigate(`/mock-test/exam/${inProgressTest.id}`);
      return;
    }
    if (mockRemaining <= 0) { setShowPricing(true); return; }
    setCreating(true);
    const chosen = pickMockTests(
      tests.map((t: any) => t.listening_test_id), tests.map((t: any) => t.reading_test_id),
      LISTENING_TESTS.map((t) => t.id), READING_TESTS.map((t) => t.id),
    );
    const { data, error } = await supabase
      .from('mock_tests')
      .insert({ user_id: user.id, status: 'in_progress', current_step: 'listening', listening_test_id: chosen.listening, reading_test_id: chosen.reading } as any)
      .select()
      .single();
    setCreating(false);
    if (error || !data) { toast.error(tr('mock.dash.startFail')); return; }
    navigate(`/mock-test/exam/${data.id}`);
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SEOHead title={tr('mock.dash.seoTitle')} description={tr('mock.dash.seoDesc')} path="/mock-test" noindex />
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
                <h1 className="text-2xl sm:text-3xl font-bold mb-1">{tr('mock.dash.seoTitle')}</h1>
                <p className="text-sm text-muted-foreground">{tr('mock.dash.intro')}</p>
              </div>
            </div>
            <Button variant="glow" size="lg" onClick={startTest} disabled={creating || loading || quotaLoading} className="gap-2 w-full sm:w-auto">
              {creating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
              {startLabel}
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { icon: ClipboardList, value: tests.length, label: tr('mock.dash.total') },
            { icon: Award, value: completed.length, label: tr('mock.dash.completed') },
            { icon: TrendingUp, value: avg, label: tr('mock.dash.avg') },
            { icon: Sparkles, value: best, label: tr('mock.dash.best') },
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
            <TrendingUp className="h-5 w-5 text-primary" /> {tr('mock.dash.trend')}
          </h2>
          <BandTrendChart data={completed} />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">{tr('mock.dash.past')}</h2>
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground py-8">{tr('mock.dash.loading')}</div>
        ) : tests.length === 0 ? (
          <div className="glass-card p-8 text-center">
            <AlertCircle className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
            <p className="font-semibold mb-1">{tr('mock.dash.empty')}</p>
            <p className="text-sm text-muted-foreground mb-4">{tr('mock.dash.emptyText')}</p>
            <Button variant="glow" onClick={startTest} disabled={creating || loading || quotaLoading} className="gap-2">
              <Sparkles className="h-4 w-4" /> {startLabel}
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {tests.map(t => <MockTestHistoryCard key={t.id} mt={t} />)}
          </div>
        )}
      </main>
      <PricingModal open={showPricing} onOpenChange={setShowPricing} currentPlan={planType} />
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { PricingModal } from '@/components/PricingModal';
import { motion } from 'framer-motion';
import {
  PenTool, FileText, ChevronRight, Clock, BarChart3, Award, Target,
  History, Loader2, AlertCircle, PenLine, Crown, Sparkles, ArrowRight
} from 'lucide-react';
import { format } from 'date-fns';

interface Essay {
  id: string;
  task_type: string;
  topic: string;
  score: number | null;
  word_count: number;
  created_at: string;
  status?: string;
}

export default function Writing() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { planType, writingLimit, writingUsed, writingRemaining } = useSubscription() as any;
  const [essays, setEssays] = useState<Essay[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPricing, setShowPricing] = useState(false);

  useEffect(() => {
    if (!user) return;
    const load = async () => {
      const { data } = await supabase
        .from('essays')
        .select('id, task_type, topic, score, word_count, created_at, status')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(50);
      setEssays((data as any) || []);
      setLoading(false);
    };
    load();
    const ch = supabase.channel('writing-hub-live')
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'essays', filter: `user_id=eq.${user.id}` },
        () => load())
      .subscribe();
    return () => { supabase.removeChannel(ch); };
  }, [user]);

  const remaining = typeof writingRemaining === 'number'
    ? writingRemaining
    : Math.max(0, (writingLimit ?? 0) - (writingUsed ?? 0));

  const openTask = (task: 1 | 2) => {
    if (remaining <= 0) { setShowPricing(true); return; }
    navigate(`/exam?task=${task}`);
  };

  const scored = essays.filter(e => e.score !== null);
  const avg = scored.length ? (scored.reduce((a, e) => a + (e.score || 0), 0) / scored.length).toFixed(1) : '—';
  const best = scored.length ? Math.max(...scored.map(e => e.score || 0)) : '—';
  const draftCount = essays.filter(e => e.status === 'draft').length;
  const recent = essays.slice(0, 5);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SEOHead title="Writing Practice" description="Practice IELTS Writing Task 1 and Task 2 with instant AI feedback." path="/writing" noindex />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
              <PenTool className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Writing Practice</h1>
              <p className="text-sm text-muted-foreground">Choose a task, write, and get an AI band score instantly.</p>
            </div>
          </div>
        </motion.div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {[
            { icon: FileText, label: 'Total essays', value: essays.length },
            { icon: Award, label: 'Average band', value: avg },
            { icon: Target, label: 'Best band', value: best },
            { icon: PenLine, label: 'Drafts', value: draftCount },
          ].map(s => (
            <div key={s.label} className="glass-card-hover p-3 sm:p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <s.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-lg font-bold leading-none">{s.value}</p>
                <p className="text-[11px] text-muted-foreground mt-1">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Usage banner */}
        <div className="glass-card p-4 mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-medium">{remaining}</span>
            <span className="text-muted-foreground">writing evaluations left on your plan</span>
          </div>
          <Button size="sm" variant="outline" className="gap-1" onClick={() => setShowPricing(true)}>
            <Crown className="h-4 w-4" /> {planType === 'free' ? 'Upgrade' : 'Change plan'}
          </Button>
        </div>

        {/* Task chooser */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <button onClick={() => openTask(1)} className="glass-card-hover p-6 text-left group relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center mb-3">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Task 1 — 20 minutes</h3>
              <p className="text-sm text-muted-foreground mb-4">Describe a chart, graph, map or process in at least 150 words.</p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                Start Task 1 <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </button>
          <button onClick={() => openTask(2)} className="glass-card-hover p-6 text-left group relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-3">
                <PenTool className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Task 2 — 40 minutes</h3>
              <p className="text-sm text-muted-foreground mb-4">Write an opinion or discussion essay of at least 250 words.</p>
              <span className="inline-flex items-center gap-1 text-sm text-accent-foreground font-medium">
                Start Task 2 <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </button>
        </div>

        {/* Recent essays */}
        <div className="glass-card p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <History className="h-5 w-5 text-primary" />
              <h3 className="text-base sm:text-lg font-semibold">Recent essays</h3>
            </div>
            {essays.length > 5 && (
              <Link to="/essays">
                <Button variant="ghost" size="sm" className="gap-1 text-primary">
                  View all <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
          {loading ? (
            <div className="space-y-2">{[1,2,3].map(i => <div key={i} className="h-16 bg-secondary/40 rounded-lg animate-pulse" />)}</div>
          ) : recent.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <FileText className="h-10 w-10 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No essays yet. Start with Task 1 or Task 2 above.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {recent.map(e => {
                const isDraft = e.status === 'draft';
                const isProcessing = e.status === 'processing' || e.status === 'queued';
                const isFailed = e.status === 'failed';
                const href = isDraft ? '/exam' : `/result/${e.id}`;
                return (
                  <Link key={e.id} to={href} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all group">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold ${
                      isProcessing ? 'bg-blue-500/15 text-blue-600' :
                      isDraft ? 'bg-amber-500/15 text-amber-600' :
                      isFailed ? 'bg-destructive/15 text-destructive' :
                      (e.score ?? 0) >= 7 ? 'bg-primary/15 text-primary' : (e.score ?? 0) >= 5 ? 'bg-yellow-500/15 text-yellow-600' : 'bg-destructive/15 text-destructive'
                    }`}>
                      {isProcessing ? <Loader2 className="h-5 w-5 animate-spin" /> :
                       isDraft ? <PenLine className="h-5 w-5" /> :
                       isFailed ? <AlertCircle className="h-5 w-5" /> :
                       (e.score ?? '—')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-primary/10 text-primary">{e.task_type}</span>
                        <span className="text-[10px] text-muted-foreground">{format(new Date(e.created_at), 'MMM d')}</span>
                        <span className="text-[10px] text-muted-foreground inline-flex items-center gap-1"><Clock className="h-3 w-3" />{e.word_count} words</span>
                      </div>
                      <p className="text-xs sm:text-sm truncate text-muted-foreground">{e.topic}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <PricingModal open={showPricing} onOpenChange={setShowPricing} currentPlan={planType} />
    </div>
  );
}
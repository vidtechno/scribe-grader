import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Award, FileText, Mic, ClipboardList, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function ScoreCard({ label, score }: { label: string; score: number | null }) {
  return (
    <div className="glass-card p-4 text-center">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-2xl font-bold text-primary">{score ?? '—'}</p>
    </div>
  );
}

function FeedbackBlock({ title, fb }: { title: string; fb: any }) {
  if (!fb) return null;
  return (
    <div className="glass-card p-5">
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {Object.entries(fb).filter(([k, v]: any) =>
          ['taskAchievement','coherenceCohesion','lexicalResource','grammaticalRange','fluencyCoherence','pronunciation'].includes(k) && v?.score
        ).map(([k, v]: any) => (
          <div key={k} className="bg-secondary/30 rounded-lg p-2 text-center">
            <p className="text-[10px] text-muted-foreground capitalize">{k.replace(/([A-Z])/g, ' $1').trim()}</p>
            <p className="text-sm font-bold">{v.score}</p>
          </div>
        ))}
      </div>
      {fb.strengths?.length > 0 && (
        <div className="mb-3">
          <p className="text-xs font-semibold text-emerald-600 mb-1.5 flex items-center gap-1">
            <CheckCircle2 className="h-3.5 w-3.5" /> Strengths
          </p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {fb.strengths.slice(0, 5).map((s: string, i: number) => <li key={i}>• {s}</li>)}
          </ul>
        </div>
      )}
      {fb.suggestions?.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-amber-600 mb-1.5 flex items-center gap-1">
            <AlertCircle className="h-3.5 w-3.5" /> Suggestions
          </p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {fb.suggestions.slice(0, 5).map((s: string, i: number) => <li key={i}>• {s}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function MockTestResult() {
  const { id } = useParams<{ id: string }>();
  const [mt, setMt] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const { data } = await supabase.from('mock_tests').select('*').eq('id', id).single();
      setMt(data);
    })();
  }, [id]);

  if (!mt) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 sm:p-8 mb-6 text-center">
          <Award className="h-12 w-12 text-primary mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">Overall Band Score</p>
          <p className="text-5xl font-bold text-primary mb-2">{mt.overall_band ?? '—'}</p>
          <p className="text-xs text-muted-foreground">Completed mock test</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <ScoreCard label="Task 1" score={mt.task1_band} />
          <ScoreCard label="Task 2" score={mt.task2_band} />
          <ScoreCard label="Speaking" score={mt.speaking_band} />
          <ScoreCard label="Overall" score={mt.overall_band} />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="glass-card p-4">
            <p className="text-xs text-muted-foreground">Grammar Errors</p>
            <p className="text-xl font-bold">{mt.grammar_errors_count ?? 0}</p>
          </div>
          <div className="glass-card p-4">
            <p className="text-xs text-muted-foreground">Vocabulary Upgrades</p>
            <p className="text-xl font-bold">{mt.lexical_errors_count ?? 0}</p>
          </div>
        </div>

        <div className="space-y-6">
          {mt.task1_feedback && (
            <FeedbackBlock title="Writing Task 1" fb={mt.task1_feedback} />
          )}
          {mt.task2_feedback && (
            <FeedbackBlock title="Writing Task 2" fb={mt.task2_feedback} />
          )}
          {mt.speaking_feedback && (
            <FeedbackBlock title="Speaking (Parts 1–3)" fb={mt.speaking_feedback} />
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <Link to="/mock-test">
            <Button variant="outline" className="gap-2">
              <ClipboardList className="h-4 w-4" /> Back to Mock Tests
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
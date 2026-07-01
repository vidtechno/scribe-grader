import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Loader2, ClipboardList, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MockTestThankYou() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [status, setStatus] = useState<string>('submitted');

  useEffect(() => {
    if (!id) return;
    let stop = false;
    const check = async () => {
      const { data } = await supabase.from('mock_tests').select('status').eq('id', id).single();
      if (stop || !data) return;
      setStatus((data as any).status);
      if ((data as any).status === 'completed') {
        navigate(`/mock-test/result/${id}`);
      }
    };
    check();
    // Realtime channel: instantly react to grading completion
    const channel = supabase
      .channel(`mock-test-${id}`)
      .on('postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'mock_tests', filter: `id=eq.${id}` },
        (payload) => {
          const s = (payload.new as any).status;
          setStatus(s);
          if (s === 'completed') navigate(`/mock-test/result/${id}`);
        }
      )
      .subscribe();
    // Safety fallback poll every 20s in case realtime lags
    const interval = setInterval(check, 20000);
    return () => { stop = true; clearInterval(interval); supabase.removeChannel(channel); };
  }, [id, navigate]);

  const failed = status === 'failed';

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <main className="pt-24 pb-12 px-4 max-w-xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 text-center">
          {failed ? (
            <>
              <AlertCircle className="h-14 w-14 text-destructive mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-2">Grading Failed</h1>
              <p className="text-sm text-muted-foreground mb-6">
                Something went wrong while evaluating your test. Please try again or contact support.
              </p>
            </>
          ) : (
            <>
              <CheckCircle2 className="h-14 w-14 text-emerald-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-2">Your Mock Test is Submitted</h1>
              <p className="text-sm text-muted-foreground mb-6">
                Results will be ready in <span className="font-medium text-foreground">5–10 minutes</span>.
                You'll be redirected automatically when grading completes.
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-6">
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>Status: {status === 'grading' ? 'Grading…' : 'Pending evaluation…'}</span>
              </div>
            </>
          )}
          <Link to="/mock-test">
            <Button variant="outline" className="gap-2">
              <ClipboardList className="h-4 w-4" /> Back to Mock Tests
            </Button>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Loader2, ClipboardList, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useSubscription } from '@/hooks/useSubscription';
import { PricingModal } from '@/components/PricingModal';
import { functionError } from '@/lib/function-errors';
import { useT } from '@/i18n';

export default function MockTestThankYou() {
  const { t } = useT();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [status, setStatus] = useState<string>('submitted');
  const [retrying, setRetrying] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const { mockRemaining, refresh: refreshSubscription, planType } = useSubscription();

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

  const retryGrading = async () => {
    if (!id || retrying) return;
    if (mockRemaining <= 0) { setShowPricing(true); return; }
    setRetrying(true);
    try {
      const { data, error } = await supabase.from('mock_tests')
        .update({ status: 'submitted' }).eq('id', id).eq('status', 'failed')
        .select('id').maybeSingle();
      if (error || !data) throw new Error(t('mock.thanks.retryFail'));
      setStatus('submitted');
      const result = await supabase.functions.invoke('process-mock-test', { body: { mockTestId: id } });
      if (result.error) throw await functionError(result.error, t('mock.thanks.gradeFail'));
      await refreshSubscription();
      navigate(`/mock-test/result/${id}`, { replace: true });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t('mock.thanks.gradeFail'));
      const { data } = await supabase.from('mock_tests').select('status').eq('id', id).maybeSingle();
      if (data) setStatus(data.status);
    } finally { setRetrying(false); }
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <main className="pt-24 pb-12 px-4 max-w-xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 text-center">
          {failed ? (
            <>
              <AlertCircle className="h-14 w-14 text-destructive mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-2">{t('mock.thanks.failedTitle')}</h1>
              <p className="text-sm text-muted-foreground mb-6">
                {t('mock.thanks.failedText')}
              </p>
              <Button onClick={retryGrading} disabled={retrying} className="mb-4 w-full">
                {retrying ? t('mock.thanks.retrying') : mockRemaining > 0 ? t('mock.thanks.retry') : t('mock.thanks.upgrade')}
              </Button>
            </>
          ) : (
            <>
              <CheckCircle2 className="h-14 w-14 text-emerald-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-2">{t('mock.thanks.title')}</h1>
              <p className="text-sm text-muted-foreground mb-6">
                {t('mock.thanks.readyIn')} <span className="font-medium text-foreground">{t('mock.thanks.minutes')}</span>. {t('mock.thanks.redirect')}
              </p>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-6">
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                <span>{t('mock.thanks.status')} {status === 'grading' ? t('mock.thanks.grading') : t('mock.thanks.pending')}</span>
              </div>
            </>
          )}
          <Link to="/mock-test">
            <Button variant="outline" className="gap-2">
              <ClipboardList className="h-4 w-4" /> {t('mock.back')}
            </Button>
          </Link>
        </motion.div>
      </main>
      <PricingModal open={showPricing} onOpenChange={setShowPricing} currentPlan={planType} />
    </div>
  );
}

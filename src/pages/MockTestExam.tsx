import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { MockWritingStep } from '@/components/MockWritingStep';
import { SpeechRecorder } from '@/components/SpeechRecorder';
import { LoadingScreen } from '@/components/LoadingScreen';
import { getRandomTopic } from '@/lib/topics';
import { getRandomSpeakingTopic } from '@/lib/speakingTopics';
import { Send, Mic, ArrowRight, Loader2, BookOpen, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { audioExtension } from '@/lib/audio';
import { functionError } from '@/lib/function-errors';
import { useT } from '@/i18n';

type Step = 'listening' | 'reading' | 'task1' | 'task2' | 'speaking_p1' | 'speaking_p2' | 'speaking_p3' | 'done';

/** New mock tests start with Listening and Reading; mock tests created earlier have no such sections. */
const STEP_ORDER_FULL: Step[] = ['listening', 'reading', 'task1', 'task2', 'speaking_p1', 'speaking_p2', 'speaking_p3', 'done'];
const STEP_ORDER_LEGACY: Step[] = ['task1', 'task2', 'speaking_p1', 'speaking_p2', 'speaking_p3', 'done'];
const STEP_LABELS: Record<Step, string> = {
  listening: 'mock.step.listening',
  reading: 'mock.step.reading',
  task1: 'mock.step.task1',
  task2: 'mock.step.task2',
  speaking_p1: 'mock.step.speaking_p1',
  speaking_p2: 'mock.step.speaking_p2',
  speaking_p3: 'mock.step.speaking_p3',
  done: 'mock.step.done',
};
const SPEAKING_MAX: Record<'speaking_p1' | 'speaking_p2' | 'speaking_p3', number> = {
  speaking_p1: 90, speaking_p2: 120, speaking_p3: 150,
};

export default function MockTestExam() {
  const { user } = useAuth();
  const { id } = useParams<{ id: string }>();
  return <MockTestSession key={`${user?.id}:${id}`} />;
}

function MockTestSession() {
  const { id } = useParams<{ id: string }>();
  const { t } = useT();
  const navigate = useNavigate();
  const { user, refreshProfile } = useAuth();
  const [mt, setMt] = useState<any>(null);
  const [step, setStep] = useState<Step>('task1');
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Load mock test, ensure all topics exist, set current step
  useEffect(() => {
    if (!id || !user) return;
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase.from('mock_tests').select('*').eq('id', id).eq('user_id', user.id).single();
      if (cancelled) return;
      if (error || !data) { toast.error(t('mock.exam.notFound')); navigate('/mock-test'); return; }
      if (data.user_id !== user.id) { toast.error(t('mock.exam.denied')); navigate('/mock-test'); return; }
      if (data.status !== 'in_progress') {
        navigate(data.status === 'completed' ? `/mock-test/result/${id}` : `/mock-test/thank-you/${id}`);
        return;
      }

      const patch: any = {};
      if (!data.task1_topic) patch.task1_topic = getRandomTopic('Task 1').prompt;
      if (!data.task2_topic) patch.task2_topic = getRandomTopic('Task 2').prompt;
      if (!data.speaking_p1_topic) patch.speaking_p1_topic = getRandomSpeakingTopic('part1');
      if (!data.speaking_p2_topic) patch.speaking_p2_topic = getRandomSpeakingTopic('part2');
      if (!data.speaking_p3_topic) patch.speaking_p3_topic = getRandomSpeakingTopic('part3');
      let row = data;
      if (Object.keys(patch).length > 0) {
        const { data: updated } = await supabase.from('mock_tests').update(patch).eq('id', id).select().single();
        if (updated) row = updated;
      }
      if (cancelled) return;
      setMt(row);
      const cur = (row.current_step || 'task1') as Step;
      setStep(cur);
    })();
    return () => { cancelled = true; };
  }, [id, user?.id, navigate, t]);

  const stepOrder = mt?.listening_test_id ? STEP_ORDER_FULL : STEP_ORDER_LEGACY;
  const advance = (current: Step): Step => {
    const i = stepOrder.indexOf(current);
    return stepOrder[Math.min(i + 1, stepOrder.length - 1)];
  };

  const handleAudioComplete = useCallback(async (blob: Blob) => {
    if (!mt || !user) return;
    if (step !== 'speaking_p1' && step !== 'speaking_p2' && step !== 'speaking_p3') return;
    setUploading(true);
    try {
      const part = step === 'speaking_p1' ? 'p1' : step === 'speaking_p2' ? 'p2' : 'p3';
      const path = `${user.id}/mock-tests/${mt.id}/${part}-${Date.now()}.${audioExtension(blob.type)}`;
      const { error: upErr } = await supabase.storage.from('speaking-audio').upload(path, blob, { contentType: blob.type });
      if (upErr) throw upErr;
      const next = advance(step);
      const col = step === 'speaking_p1' ? 'speaking_p1_audio_url' : step === 'speaking_p2' ? 'speaking_p2_audio_url' : 'speaking_p3_audio_url';
      const patch: any = { [col]: path, current_step: next };
      const { error } = await supabase.from('mock_tests').update(patch).eq('id', mt.id);
      if (error) throw error;
      toast.success(t('mock.exam.saved', { step: t(STEP_LABELS[step]) }));
      setMt({ ...mt, ...patch });
      setStep(next);
    } catch (e: any) {
      toast.error(e.message || t('mock.exam.uploadFail'));
    } finally {
      setUploading(false);
    }
  }, [mt, user, step, t]);

  const handleFinalSubmit = useCallback(async () => {
    if (!mt) return;
    setSubmitting(true);
    try {
      const { error: saveError } = await supabase.from('mock_tests').update({
        status: 'submitted',
        submitted_at: new Date().toISOString(),
      }).eq('id', mt.id);
      if (saveError) throw saveError;

      const { error: gradeError } = await supabase.functions.invoke('process-mock-test', { body: { mockTestId: mt.id } });
      if (gradeError) throw await functionError(gradeError, t('mock.exam.gradeFail'));

      await refreshProfile();
      navigate(`/mock-test/thank-you/${mt.id}`);
    } catch (e: any) {
      toast.error(e.message || t('mock.exam.submitFail'));
    } finally {
      setSubmitting(false);
    }
  }, [mt, user, navigate, refreshProfile, t]);

  if (!mt) return <LoadingScreen />;

  const stepIndex = Math.max(0, stepOrder.indexOf(step));
  const totalSteps = stepOrder.length - 1;
  const progressPct = (stepIndex / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        {/* Stepper */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>{t('mock.exam.stepOf', { n: Math.min(stepIndex + 1, totalSteps), total: totalSteps })}</span>
            <span className="font-semibold text-foreground">{t(STEP_LABELS[step])}</span>
          </div>
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all" style={{ width: `${progressPct}%` }} />
          </div>
        </div>

        {(step === 'listening' || step === 'reading') && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} key={step} className="glass-card p-6 sm:p-8">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              {step === 'listening' ? <Headphones className="h-6 w-6 text-primary" /> : <BookOpen className="h-6 w-6 text-primary" />}
            </div>
            <h2 className="text-xl font-bold mb-2">{step === 'listening' ? t('mock.exam.sec1') : t('mock.exam.sec2')}</h2>
            <p className="text-sm text-muted-foreground mb-4">
              {step === 'listening' ? t('mock.exam.listeningText') : t('mock.exam.readingText')}
            </p>
            <ul className="text-sm space-y-1.5 mb-6 list-disc pl-5 text-muted-foreground">
              <li>{t('mock.exam.rule1')}</li>
              <li>{t('mock.exam.rule2')}</li>
              <li>{t('mock.exam.rule3')}</li>
            </ul>
            <Button variant="glow" size="lg" className="gap-2" onClick={() => navigate(`/${step}/${step === 'listening' ? mt.listening_test_id : mt.reading_test_id}?mock=${mt.id}`)}>
              <ArrowRight className="h-4 w-4" />{step === 'listening' ? t('mock.exam.startListening') : t('mock.exam.startReading')}
            </Button>
          </motion.div>
        )}

        {(step === 'task1' || step === 'task2') && user && (
          <MockWritingStep key={`${user.id}:${mt.id}:${step}`} userId={user.id} mockId={mt.id}
            task={step === 'task1' ? 'Task 1' : 'Task 2'}
            topic={step === 'task1' ? mt.task1_topic : mt.task2_topic}
            serverText={step === 'task1' ? mt.task1_essay : mt.task2_essay}
            onSaved={(text) => {
              const next = advance(step);
              const payload = step === 'task1'
                ? { task1_essay: text, current_step: next }
                : { task2_essay: text, current_step: next };
              setMt({ ...mt, ...payload }); setStep(next);
            }} />
        )}

        {(step === 'speaking_p1' || step === 'speaking_p2' || step === 'speaking_p3') && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} key={step}>
            <div className="glass-card p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mic className="h-4 w-4 text-primary" />
                </div>
                <span className="font-semibold text-sm">{t(STEP_LABELS[step])}</span>
              </div>
              <p className="text-sm leading-relaxed">
                {step === 'speaking_p1' ? mt.speaking_p1_topic : step === 'speaking_p2' ? mt.speaking_p2_topic : mt.speaking_p3_topic}
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                {t('mock.exam.maxSeconds', { n: SPEAKING_MAX[step] })}
              </p>
            </div>
            <SpeechRecorder
              onRecordingComplete={handleAudioComplete}
              isProcessing={uploading}
              maxDuration={SPEAKING_MAX[step]}
            />
          </motion.div>
        )}

        {step === 'done' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 text-center">
            <Send className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">{t('mock.exam.readyTitle')}</h2>
            <p className="text-sm text-muted-foreground mb-6">
              {t('mock.exam.readyText1')} {t('mock.exam.readyText2a')} <b>{t('mock.exam.startEval')}</b>{t('mock.exam.readyText2b')}
            </p>
            <Button onClick={handleFinalSubmit} disabled={submitting} variant="glow" size="lg" className="gap-2">
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {t('mock.exam.startEval')}
              <span className="ml-2 text-[11px] font-medium px-2 py-0.5 rounded-full bg-primary-foreground/20">
                {t('mock.exam.uses')}
              </span>
            </Button>
          </motion.div>
        )}
      </main>
    </div>
  );
}

import { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { SpeechRecorder } from '@/components/SpeechRecorder';
import { LoadingScreen } from '@/components/LoadingScreen';
import { getRandomTopic } from '@/lib/topics';
import { getRandomSpeakingTopic } from '@/lib/speakingTopics';
import { Clock, FileText, Send, Mic, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

type Step = 'task1' | 'task2' | 'speaking_p1' | 'speaking_p2' | 'speaking_p3' | 'done';

const STEP_ORDER: Step[] = ['task1', 'task2', 'speaking_p1', 'speaking_p2', 'speaking_p3', 'done'];
const STEP_LABELS: Record<Step, string> = {
  task1: 'Writing Task 1',
  task2: 'Writing Task 2',
  speaking_p1: 'Speaking · Part 1',
  speaking_p2: 'Speaking · Part 2',
  speaking_p3: 'Speaking · Part 3',
  done: 'Submit',
};
const WRITING_LIMIT: Record<'task1' | 'task2', number> = { task1: 20 * 60, task2: 40 * 60 };
const WRITING_MIN: Record<'task1' | 'task2', number> = { task1: 150, task2: 250 };
const SPEAKING_MAX: Record<'speaking_p1' | 'speaking_p2' | 'speaking_p3', number> = {
  speaking_p1: 90, speaking_p2: 120, speaking_p3: 150,
};

export default function MockTestExam() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, refreshProfile } = useAuth();
  const [mt, setMt] = useState<any>(null);
  const [step, setStep] = useState<Step>('task1');
  const [essay, setEssay] = useState('');
  const [timeLeft, setTimeLeft] = useState(WRITING_LIMIT.task1);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const initRef = useRef(false);

  // Load mock test, ensure all topics exist, set current step
  useEffect(() => {
    if (!id || !user || initRef.current) return;
    initRef.current = true;
    (async () => {
      const { data, error } = await supabase.from('mock_tests').select('*').eq('id', id).single();
      if (error || !data) { toast.error('Mock test not found'); navigate('/mock-test'); return; }
      if (data.user_id !== user.id) { toast.error('Access denied'); navigate('/mock-test'); return; }
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
      setMt(row);
      const cur = (row.current_step || 'task1') as Step;
      setStep(cur);
      if (cur === 'task1') { setEssay(row.task1_essay || ''); setTimeLeft(WRITING_LIMIT.task1); }
      else if (cur === 'task2') { setEssay(row.task2_essay || ''); setTimeLeft(WRITING_LIMIT.task2); }
    })();
  }, [id, user, navigate]);

  // Writing timer
  useEffect(() => {
    if (step !== 'task1' && step !== 'task2') return;
    if (timeLeft <= 0) { void completeWritingStep(); return; }
    const t = setInterval(() => setTimeLeft(v => v - 1), 1000);
    return () => clearInterval(t);
  }, [step, timeLeft]);

  const formatTime = (s: number) => `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;

  const wordCount = essay.trim().split(/\s+/).filter(Boolean).length;

  const advance = (current: Step): Step => {
    const i = STEP_ORDER.indexOf(current);
    return STEP_ORDER[Math.min(i + 1, STEP_ORDER.length - 1)];
  };

  const completeWritingStep = useCallback(async () => {
    if (!mt || (step !== 'task1' && step !== 'task2')) return;
    setUploading(true);
    const next = advance(step);
    const payload: any = step === 'task1'
      ? { task1_essay: essay, task1_word_count: wordCount, current_step: next }
      : { task2_essay: essay, task2_word_count: wordCount, current_step: next };
    const { error } = await supabase.from('mock_tests').update(payload).eq('id', mt.id);
    setUploading(false);
    if (error) { toast.error('Failed to save'); return; }
    toast.success(`${STEP_LABELS[step]} saved`);
    setMt({ ...mt, ...payload });
    setStep(next);
    setEssay('');
    if (next === 'task2') setTimeLeft(WRITING_LIMIT.task2);
  }, [mt, step, essay, wordCount]);

  const handleAudioComplete = useCallback(async (blob: Blob) => {
    if (!mt || !user) return;
    if (step !== 'speaking_p1' && step !== 'speaking_p2' && step !== 'speaking_p3') return;
    setUploading(true);
    try {
      const part = step === 'speaking_p1' ? 'p1' : step === 'speaking_p2' ? 'p2' : 'p3';
      const path = `${user.id}/mock-tests/${mt.id}/${part}-${Date.now()}.webm`;
      const { error: upErr } = await supabase.storage.from('speaking-audio').upload(path, blob, { contentType: 'audio/webm' });
      if (upErr) throw upErr;
      const next = advance(step);
      const col = step === 'speaking_p1' ? 'speaking_p1_audio_url' : step === 'speaking_p2' ? 'speaking_p2_audio_url' : 'speaking_p3_audio_url';
      const patch: any = { [col]: path, current_step: next };
      const { error } = await supabase.from('mock_tests').update(patch).eq('id', mt.id);
      if (error) throw error;
      toast.success(`${STEP_LABELS[step]} saved`);
      setMt({ ...mt, ...patch });
      setStep(next);
    } catch (e: any) {
      toast.error(e.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  }, [mt, user, step]);

  const handleFinalSubmit = useCallback(async () => {
    if (!mt) return;
    setSubmitting(true);
    try {
      await supabase.from('mock_tests').update({
        status: 'submitted',
        submitted_at: new Date().toISOString(),
      }).eq('id', mt.id);

      // Server-side quota check + AI grading
      const { data: res, error: fnErr } = await supabase.functions.invoke('process-mock-test', { body: { mockTestId: mt.id } });
      if (fnErr || (res as any)?.error) {
        toast.error((res as any)?.error || 'Your plan has no Mock Tests remaining. Please upgrade to continue.');
        await supabase.from('mock_tests').update({ status: 'in_progress', submitted_at: null }).eq('id', mt.id);
        setSubmitting(false);
        return;
      }

      await refreshProfile();
      navigate(`/mock-test/thank-you/${mt.id}`);
    } catch (e: any) {
      toast.error(e.message || 'Submit failed');
    } finally {
      setSubmitting(false);
    }
  }, [mt, user, navigate, refreshProfile]);

  if (!mt) return <LoadingScreen />;

  const stepIndex = STEP_ORDER.indexOf(step);
  const totalSteps = 5;
  const progressPct = (stepIndex / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        {/* Stepper */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>Step {Math.min(stepIndex + 1, totalSteps)} of {totalSteps}</span>
            <span className="font-semibold text-foreground">{STEP_LABELS[step]}</span>
          </div>
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all" style={{ width: `${progressPct}%` }} />
          </div>
        </div>

        {(step === 'task1' || step === 'task2') && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} key={step}>
            <div className="glass-card p-5 mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Topic</span>
                <span className="flex items-center gap-1.5 font-mono text-sm font-bold bg-secondary/50 px-2.5 py-1 rounded">
                  <Clock className="h-3.5 w-3.5" /> {formatTime(timeLeft)}
                </span>
              </div>
              <p className="text-sm leading-relaxed">{step === 'task1' ? mt.task1_topic : mt.task2_topic}</p>
              <div className="mt-3 text-xs text-muted-foreground flex items-center gap-3">
                <span className="flex items-center gap-1"><FileText className="h-3 w-3" /> Min {WRITING_MIN[step]} words</span>
                <span className={wordCount >= WRITING_MIN[step] ? 'text-green-600 font-medium' : ''}>{wordCount} written</span>
              </div>
            </div>

            <Textarea
              value={essay}
              onChange={(e) => setEssay(e.target.value)}
              placeholder="Start writing your response..."
              className="min-h-[400px] text-base leading-relaxed"
              autoFocus
            />

            <div className="mt-4 flex justify-end">
              <Button
                onClick={completeWritingStep}
                disabled={uploading || wordCount < 20}
                variant="glow"
                className="gap-2"
              >
                {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
                Save & Continue
              </Button>
            </div>
          </motion.div>
        )}

        {(step === 'speaking_p1' || step === 'speaking_p2' || step === 'speaking_p3') && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} key={step}>
            <div className="glass-card p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mic className="h-4 w-4 text-primary" />
                </div>
                <span className="font-semibold text-sm">{STEP_LABELS[step]}</span>
              </div>
              <p className="text-sm leading-relaxed">
                {step === 'speaking_p1' ? mt.speaking_p1_topic : step === 'speaking_p2' ? mt.speaking_p2_topic : mt.speaking_p3_topic}
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                Max {SPEAKING_MAX[step]} seconds. Recording auto-saves when you stop.
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
            <h2 className="text-xl font-bold mb-2">Ready to Submit</h2>
            <p className="text-sm text-muted-foreground mb-6">
              You've completed all tasks. Submit to send your responses for AI evaluation.
              Credits are deducted only when you press <b>Start Evaluation</b>.
            </p>
            <Button onClick={handleFinalSubmit} disabled={submitting} variant="glow" size="lg" className="gap-2">
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              Start Evaluation
              <span className="ml-2 text-[11px] font-medium px-2 py-0.5 rounded-full bg-primary-foreground/20">
                Uses 1 Mock Test from your plan
              </span>
            </Button>
          </motion.div>
        )}
      </main>
    </div>
  );
}
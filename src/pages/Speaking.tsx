import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { SpeechRecorder } from '@/components/SpeechRecorder';
import { PricingModal } from '@/components/PricingModal';
import { SEOHead } from '@/components/SEOHead';
import { getRandomSpeakingTopic } from '@/lib/speakingTopics';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic, RefreshCw, Clock, Brain, CheckCircle2, BarChart3,
  Loader2, AlertCircle, Sparkles
} from 'lucide-react';
import { toast } from 'sonner';

const GRADING_STEPS = [
  { label: 'Ovoz transkripsiya qilinmoqda...', icon: Mic, duration: 4000 },
  { label: "Nutq tahlil qilinmoqda...", icon: Brain, duration: 3000 },
  { label: 'Band ball baholanmoqda...', icon: BarChart3, duration: 3000 },
];

type PartType = 'part1' | 'part2' | 'part3';

const PART_INFO: Record<PartType, { label: string; time: number; desc: string }> = {
  part1: { label: 'Part 1', time: 60, desc: 'Answer questions about familiar topics (4-5 minutes in real exam)' },
  part2: { label: 'Part 2', time: 120, desc: 'Speak for 1-2 minutes on a topic card' },
  part3: { label: 'Part 3', time: 120, desc: 'Discuss abstract ideas related to Part 2 topic' },
};

export default function Speaking() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { subscription } = useSubscription();
  const planType = subscription?.plan_type || 'free';

  const [selectedPart, setSelectedPart] = useState<PartType>('part2');
  const [topic, setTopic] = useState(() => getRandomSpeakingTopic('part2'));
  const [isProcessing, setIsProcessing] = useState(false);
  const [gradingStep, setGradingStep] = useState(0);
  const [showPricing, setShowPricing] = useState(false);
  const [monthlyAttempts, setMonthlyAttempts] = useState(0);
  const [started, setStarted] = useState(false);

  const maxAttempts = planType === 'pro_plus' ? 30 : planType === 'pro' ? 10 : 3;
  const canAttempt = monthlyAttempts < maxAttempts;

  useEffect(() => {
    if (user) fetchMonthlyAttempts();
  }, [user]);

  const fetchMonthlyAttempts = async () => {
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const { count } = await supabase
      .from('speaking_attempts')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user!.id)
      .gte('created_at', startOfMonth.toISOString());

    setMonthlyAttempts(count || 0);
  };

  const changeTopic = () => {
    setTopic(getRandomSpeakingTopic(selectedPart));
  };

  const changePart = (part: PartType) => {
    setSelectedPart(part);
    setTopic(getRandomSpeakingTopic(part));
    setStarted(false);
  };

  const handleRecordingComplete = async (blob: Blob, duration: number) => {
    if (!user) return;
    if (!canAttempt) {
      setShowPricing(true);
      return;
    }

    setIsProcessing(true);
    setGradingStep(0);

    // Step through grading animation
    const stepTimers: number[] = [];
    let cumulative = 0;
    GRADING_STEPS.forEach((step, i) => {
      cumulative += step.duration;
      stepTimers.push(window.setTimeout(() => setGradingStep(i + 1), cumulative));
    });

    try {
      // 1. Upload audio
      const fileName = `${user.id}/${Date.now()}.webm`;
      const { error: uploadError } = await supabase.storage
        .from('speaking-audio')
        .upload(fileName, blob, { contentType: 'audio/webm' });

      if (uploadError) throw new Error('Audio upload failed');

      // 2. Transcribe
      const formData = new FormData();
      formData.append('audio', blob, 'audio.webm');

      const { data: transcribeData, error: transcribeError } = await supabase.functions
        .invoke('transcribe-audio', { body: formData });

      if (transcribeError || !transcribeData?.transcript) {
        throw new Error('Transcription failed');
      }

      const transcript = transcribeData.transcript;

      // 3. Grade
      const { data: gradeData, error: gradeError } = await supabase.functions
        .invoke('grade-speaking', {
          body: { transcript, topic, part: PART_INFO[selectedPart].label, userId: user.id },
        });

      if (gradeError || !gradeData) {
        throw new Error('Grading failed');
      }

      // 4. Save to database
      const { data: attempt, error: saveError } = await supabase
        .from('speaking_attempts')
        .insert({
          user_id: user.id,
          topic,
          part: selectedPart,
          transcript,
          audio_url: fileName,
          feedback: gradeData,
          score: gradeData.overallBand,
          duration_seconds: duration,
        })
        .select()
        .single();

      if (saveError) throw saveError;

      stepTimers.forEach(clearTimeout);
      toast.success('Speaking response graded!');
      navigate(`/speaking-result/${attempt.id}`);
    } catch (err: any) {
      console.error('Speaking processing error:', err);
      toast.error(err.message || 'Something went wrong');
      stepTimers.forEach(clearTimeout);
    } finally {
      setIsProcessing(false);
      setGradingStep(0);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SEOHead title="Speaking Practice" description="Practice IELTS Speaking with AI-powered feedback and scoring." path="/speaking" />
      <Navbar />

      {/* Grading Overlay */}
      <AnimatePresence>
        {isProcessing && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="text-center space-y-8 p-8">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}>
                <Sparkles className="h-12 w-12 text-primary mx-auto" />
              </motion.div>
              <div className="space-y-4">
                {GRADING_STEPS.map((step, i) => {
                  const Icon = step.icon;
                  const isActive = gradingStep === i;
                  const isDone = gradingStep > i;
                  return (
                    <motion.div key={i} initial={{ opacity: 0.3 }} animate={{ opacity: isDone || isActive ? 1 : 0.3 }}
                      className="flex items-center gap-3 justify-center"
                    >
                      {isDone ? <CheckCircle2 className="h-5 w-5 text-primary" /> :
                        isActive ? <Loader2 className="h-5 w-5 animate-spin text-primary" /> :
                        <Icon className="h-5 w-5 text-muted-foreground" />}
                      <span className={`text-sm ${isDone ? 'text-primary' : isActive ? 'font-medium' : 'text-muted-foreground'}`}>
                        {step.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">IELTS Speaking Practice</h1>
            <p className="text-muted-foreground text-sm">
              {monthlyAttempts}/{maxAttempts} attempts used this month
            </p>
          </div>

          {/* Part Selector */}
          {!started && (
            <div className="grid grid-cols-3 gap-3 mb-6">
              {(Object.entries(PART_INFO) as [PartType, typeof PART_INFO[PartType]][]).map(([key, info]) => (
                <button
                  key={key}
                  onClick={() => changePart(key)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    selectedPart === key
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-border bg-card hover:bg-secondary/30'
                  }`}
                >
                  <p className="font-semibold text-sm">{info.label}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{info.time}s max</p>
                </button>
              ))}
            </div>
          )}

          {/* Topic Card */}
          <div className="glass-card p-6 mb-8">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mic className="h-4 w-4 text-primary" />
                </div>
                <span className="font-semibold text-sm">{PART_INFO[selectedPart].label}</span>
              </div>
              {!started && (
                <Button variant="ghost" size="sm" onClick={changeTopic} className="gap-1">
                  <RefreshCw className="h-3 w-3" /> New Topic
                </Button>
              )}
            </div>
            <p className="text-sm leading-relaxed">{topic}</p>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>Max {PART_INFO[selectedPart].time} seconds</span>
            </div>
          </div>

          {!canAttempt ? (
            <div className="glass-card p-6 text-center">
              <AlertCircle className="h-10 w-10 text-destructive mx-auto mb-3" />
              <p className="font-semibold mb-1">Monthly Limit Reached</p>
              <p className="text-sm text-muted-foreground mb-4">
                You've used all {maxAttempts} speaking attempts this month.
              </p>
              <Button variant="glow" onClick={() => setShowPricing(true)}>Upgrade Plan</Button>
            </div>
          ) : !started ? (
            <div className="text-center">
              <Button variant="glow" size="lg" onClick={() => setStarted(true)} className="gap-2">
                <Mic className="h-5 w-5" /> Start Speaking
              </Button>
              <p className="text-xs text-muted-foreground mt-3">{PART_INFO[selectedPart].desc}</p>
            </div>
          ) : (
            <SpeechRecorder
              onRecordingComplete={handleRecordingComplete}
              isProcessing={isProcessing}
              maxDuration={PART_INFO[selectedPart].time}
            />
          )}
        </motion.div>
      </main>

      <PricingModal open={showPricing} onOpenChange={setShowPricing} currentPlan={planType} />
    </div>
  );
}

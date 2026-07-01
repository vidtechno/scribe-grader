import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SpeechRecorder } from '@/components/SpeechRecorder';
import { PricingModal } from '@/components/PricingModal';
import { SEOHead } from '@/components/SEOHead';
import { getRandomSpeakingTopic } from '@/lib/speakingTopics';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic, RefreshCw, Clock, Brain, CheckCircle2, BarChart3,
  Loader2, AlertCircle, Sparkles, PenLine, Coins, History
} from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const SPEAKING_COST = 2;

const GRADING_STEPS = [
  { label: 'Transcribing your audio...', icon: Mic, duration: 4000 },
  { label: 'Analyzing your speech...', icon: Brain, duration: 3000 },
  { label: 'Evaluating band score...', icon: BarChart3, duration: 3000 },
];

type PartType = 'part1' | 'part2' | 'part3';

const PART_INFO: Record<PartType, { label: string; time: number; desc: string }> = {
  part1: { label: 'Part 1', time: 60, desc: 'Answer questions about familiar topics (4-5 minutes in real exam)' },
  part2: { label: 'Part 2', time: 120, desc: 'Speak for 1-2 minutes on a topic card' },
  part3: { label: 'Part 3', time: 120, desc: 'Discuss abstract ideas related to Part 2 topic' },
};

export default function Speaking() {
  const navigate = useNavigate();
  const { user, profile, refreshProfile } = useAuth();
  const { subscription } = useSubscription();
  const planType = subscription?.plan_type || 'free';

  const credits = profile?.credits ?? 0;
  const canAttempt = credits >= SPEAKING_COST;

  const [selectedPart, setSelectedPart] = useState<PartType>('part2');
  const [topic, setTopic] = useState(() => getRandomSpeakingTopic('part2'));
  const [useCustomTopic, setUseCustomTopic] = useState(false);
  const [customTopic, setCustomTopic] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [gradingStep, setGradingStep] = useState(0);
  const [showPricing, setShowPricing] = useState(false);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [started, setStarted] = useState(false);

  const activeTopic = useCustomTopic && customTopic.trim() ? customTopic.trim() : topic;

  useEffect(() => {
    if (user) fetchTotalAttempts();
  }, [user]);

  const fetchTotalAttempts = async () => {
    const { count } = await supabase
      .from('speaking_attempts')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user!.id);
    setTotalAttempts(count || 0);
  };

  const changeTopic = () => setTopic(getRandomSpeakingTopic(selectedPart));

  const changePart = (part: PartType) => {
    setSelectedPart(part);
    setTopic(getRandomSpeakingTopic(part));
    setStarted(false);
  };

  const handleRecordingComplete = async (blob: Blob, duration: number) => {
    if (!user) return;
    if (!canAttempt) {
      toast.error("You don't have enough credits");
      setShowPricing(true);
      return;
    }

    setIsProcessing(true);
    setGradingStep(0);

    // Deduct credits immediately when Start Evaluation begins
    await supabase.from('profiles').update({ credits: Math.max(0, credits - SPEAKING_COST) }).eq('user_id', user.id);

    // Insert a "processing" row so history shows a spinner instantly
    const audioFileName = `${user.id}/${Date.now()}.webm`;
    const { data: pendingRow } = await supabase.from('speaking_attempts').insert({
      user_id: user.id, topic: activeTopic, part: selectedPart,
      audio_url: audioFileName, duration_seconds: duration, status: 'processing'
    }).select().single();

    // Step through grading animation
    const stepTimers: number[] = [];
    let cumulative = 0;
    GRADING_STEPS.forEach((step, i) => {
      cumulative += step.duration;
      stepTimers.push(window.setTimeout(() => setGradingStep(i + 1), cumulative));
    });

    try {
      // 1. Upload audio
      const { error: uploadError } = await supabase.storage
        .from('speaking-audio')
        .upload(audioFileName, blob, { contentType: 'audio/webm' });

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
          body: { transcript, topic: activeTopic, part: PART_INFO[selectedPart].label, userId: user.id },
        });

      if (gradeError || !gradeData) {
        throw new Error('Grading failed');
      }

      // 4. Update the pending row with final grade
      const { data: attempt, error: saveError } = await supabase
        .from('speaking_attempts')
        .update({
          transcript,
          feedback: gradeData,
          score: gradeData.overallBand,
          status: 'completed',
        })
        .eq('id', pendingRow!.id)
        .select()
        .single();
      if (saveError) throw saveError;

      await refreshProfile();

      stepTimers.forEach(clearTimeout);
      toast.success(`Speaking graded! −${SPEAKING_COST} credits`);
      navigate(`/speaking-result/${attempt.id}`);
    } catch (err: any) {
      console.error('Speaking processing error:', err);
      if (pendingRow) {
        await supabase.from('speaking_attempts').update({ status: 'failed', error_message: err.message }).eq('id', pendingRow.id);
      }
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
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">IELTS Speaking Practice</h1>
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground flex-wrap">
              <span className="flex items-center gap-1"><Coins className="h-3.5 w-3.5 text-primary" /> {credits} credits available</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-amber-600 font-medium">Cost per attempt: {SPEAKING_COST} credits</span>
              <span>•</span>
              <Link to="/speaking-history" className="inline-flex items-center gap-1 text-primary hover:underline">
                <History className="h-3.5 w-3.5" /> History ({totalAttempts})
              </Link>
            </div>
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
                <Button variant="ghost" size="sm" onClick={() => setUseCustomTopic(!useCustomTopic)} className="gap-1 text-xs">
                  <PenLine className="h-3 w-3" />
                  {useCustomTopic ? 'Use random topic' : 'Use my own topic'}
                </Button>
              )}
            </div>
            {useCustomTopic && !started ? (
              <Input
                placeholder={`Type your own ${PART_INFO[selectedPart].label} topic...`}
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
              />
            ) : (
              <>
                <p className="text-sm leading-relaxed">{activeTopic}</p>
                {!started && !useCustomTopic && (
                  <Button variant="ghost" size="sm" onClick={changeTopic} className="gap-1 mt-3">
                    <RefreshCw className="h-3 w-3" /> New random topic
                  </Button>
                )}
              </>
            )}
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>Max {PART_INFO[selectedPart].time} seconds</span>
            </div>
          </div>

          {!canAttempt ? (
            <div className="glass-card p-6 text-center">
              <AlertCircle className="h-10 w-10 text-destructive mx-auto mb-3" />
              <p className="font-semibold mb-1">Out of credits</p>
              <p className="text-sm text-muted-foreground mb-4">
                You need at least {SPEAKING_COST} credits to take a speaking attempt. You have {credits}.
              </p>
              <Button variant="glow" onClick={() => setShowPricing(true)} className="gap-2">
                <Coins className="h-4 w-4" /> Buy Credits
              </Button>
            </div>
          ) : !started ? (
            <div className="text-center">
              <Button
                variant="glow"
                size="lg"
                onClick={() => {
                  if (useCustomTopic && !customTopic.trim()) { toast.error('Please enter your topic'); return; }
                  setStarted(true);
                }}
                className="gap-2"
              >
                <Mic className="h-5 w-5" /> Start Speaking
                <span className="ml-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-primary-foreground/15">Uses {SPEAKING_COST} credits</span>
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

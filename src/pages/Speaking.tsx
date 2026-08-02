import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SpeechRecorder } from '@/components/SpeechRecorder';
import { AudioQualityCheck } from '@/components/AudioQualityCheck';
import { AudioPlayer } from '@/components/AudioPlayer';
import { PricingModal } from '@/components/PricingModal';
import { SEOHead } from '@/components/SEOHead';
import { getRandomSpeakingTopic } from '@/lib/speakingTopics';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic, RefreshCw, Clock, Brain, CheckCircle2, BarChart3,
  Loader2, AlertCircle, Sparkles, PenLine, Crown, History, ChevronRight
} from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

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
  const { subscription, planType, speakingRemaining, refresh: refreshSub } = useSubscription();
  const canAttempt = speakingRemaining > 0;

  const [selectedPart, setSelectedPart] = useState<PartType>('part2');
  const [topic, setTopic] = useState(() => getRandomSpeakingTopic('part2'));
  const [useCustomTopic, setUseCustomTopic] = useState(false);
  const [customTopic, setCustomTopic] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [gradingStep, setGradingStep] = useState(0);
  const [showPricing, setShowPricing] = useState(false);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [recent, setRecent] = useState<any[]>([]);
  const [started, setStarted] = useState(false);
  const [micReady, setMicReady] = useState(false);
  const [pending, setPending] = useState<{ blob: Blob; duration: number; url: string } | null>(null);

  useEffect(() => {
    return () => { if (pending) URL.revokeObjectURL(pending.url); };
  }, [pending]);

  const handleRecorded = (blob: Blob, duration: number) => {
    if (pending) URL.revokeObjectURL(pending.url);
    setPending({ blob, duration, url: URL.createObjectURL(blob) });
  };

  const discardRecording = () => {
    if (pending) URL.revokeObjectURL(pending.url);
    setPending(null);
  };

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
    const { data } = await supabase
      .from('speaking_attempts')
      .select('id, topic, part, score, status, created_at')
      .eq('user_id', user!.id)
      .order('created_at', { ascending: false })
      .limit(5);
    setRecent((data as any) || []);
  };

  const changeTopic = () => setTopic(getRandomSpeakingTopic(selectedPart));

  const changePart = (part: PartType) => {
    setSelectedPart(part);
    setTopic(getRandomSpeakingTopic(part));
    setStarted(false);
    setMicReady(false);
  };

  const handleRecordingComplete = async (blob: Blob, duration: number) => {
    if (!user) return;
    if (!canAttempt) {
      toast.error("You have used all your Speaking evaluations for this plan.");
      setShowPricing(true);
      return;
    }

    setIsProcessing(true);
    setGradingStep(0);

    // Increment usage immediately when Start Evaluation begins
    await supabase.from('subscriptions')
      .update({ speaking_used: ((subscription as any)?.speaking_used ?? 0) + 1 } as any)
      .eq('user_id', user.id);

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
      await refreshSub();

      stepTimers.forEach(clearTimeout);
      toast.success('Speaking graded!');
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
      discardRecording();
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
              <span className="flex items-center gap-1 font-medium">
                Speaking remaining: <span className="text-primary">{speakingRemaining}</span>
              </span>
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
              <p className="font-semibold mb-1">Speaking limit reached</p>
              <p className="text-sm text-muted-foreground mb-4">
                You have used all Speaking evaluations for your current plan. Upgrade to continue practicing.
              </p>
              <Button variant="glow" onClick={() => setShowPricing(true)} className="gap-2">
                <Crown className="h-4 w-4" /> Upgrade Plan
              </Button>
            </div>
          ) : !started ? (
            <div className="text-center">
              <Button
                variant="glow"
                size="lg"
                onClick={() => {
                  if (!canAttempt) { setShowPricing(true); return; }
                  if (useCustomTopic && !customTopic.trim()) { toast.error('Please enter your topic'); return; }
                  setStarted(true);
                }}
                className="gap-2"
              >
                <Mic className="h-5 w-5" /> Start Speaking
              </Button>
              <p className="text-xs text-muted-foreground mt-3">{PART_INFO[selectedPart].desc}</p>
            </div>
          ) : !micReady ? (
            <AudioQualityCheck onPass={() => setMicReady(true)} />
          ) : pending ? (
            <div className="glass-card p-6 space-y-5">
              <div className="text-center">
                <p className="font-semibold mb-1">Review your recording</p>
                <p className="text-sm text-muted-foreground">
                  Listen to your answer first. Send it to the AI only if you are happy with it.
                </p>
              </div>
              <AudioPlayer src={pending.url} />
              <p className="text-xs text-center text-muted-foreground">
                Length: {Math.floor(pending.duration / 60)}:{(pending.duration % 60).toString().padStart(2, '0')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="glow"
                  className="flex-1 gap-2"
                  disabled={isProcessing}
                  onClick={() => handleRecordingComplete(pending.blob, pending.duration)}
                >
                  <Sparkles className="h-4 w-4" /> Evaluate with AI
                </Button>
                <Button variant="outline" className="flex-1 gap-2" disabled={isProcessing} onClick={discardRecording}>
                  <RefreshCw className="h-4 w-4" /> Discard & re-record
                </Button>
              </div>
              <p className="text-[11px] text-center text-muted-foreground">
                Your Speaking quota is deducted only when you press "Evaluate with AI".
              </p>
            </div>
          ) : (
            <>
              <SpeechRecorder
                onRecordingComplete={handleRecorded}
                isProcessing={isProcessing}
                maxDuration={PART_INFO[selectedPart].time}
              />
              <p className="text-[11px] text-center text-muted-foreground mt-3">
                After you stop, you can listen to your recording before sending it for evaluation.
              </p>
            </>
          )}
        </motion.div>

        {/* Recent attempts */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-10 glass-card p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <History className="h-5 w-5 text-primary" />
              <h3 className="text-base sm:text-lg font-semibold">Recent attempts</h3>
            </div>
            {totalAttempts > 5 && (
              <Link to="/speaking-history">
                <Button variant="ghost" size="sm" className="gap-1 text-primary">
                  View all <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
          {recent.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Mic className="h-10 w-10 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No speaking attempts yet.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {recent.map((a: any) => {
                const isProcessing = a.status === 'processing' || a.status === 'queued';
                const isDraft = a.status === 'draft';
                const isFailed = a.status === 'failed';
                const href = isDraft ? '/speaking' : `/speaking-result/${a.id}`;
                return (
                  <Link key={a.id} to={href} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all group">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold ${
                      isProcessing ? 'bg-blue-500/15 text-blue-600' :
                      isDraft ? 'bg-amber-500/15 text-amber-600' :
                      isFailed ? 'bg-destructive/15 text-destructive' :
                      (a.score ?? 0) >= 7 ? 'bg-primary/15 text-primary' : (a.score ?? 0) >= 5 ? 'bg-yellow-500/15 text-yellow-600' : 'bg-destructive/15 text-destructive'
                    }`}>
                      {isProcessing ? <Loader2 className="h-5 w-5 animate-spin" /> :
                       isFailed ? <AlertCircle className="h-5 w-5" /> :
                       (a.score ?? '—')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-primary/10 text-primary uppercase">{a.part}</span>
                        <span className="text-[10px] text-muted-foreground">{format(new Date(a.created_at), 'MMM d')}</span>
                      </div>
                      <p className="text-xs sm:text-sm truncate text-muted-foreground">{a.topic}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </Link>
                );
              })}
            </div>
          )}
        </motion.div>
      </main>

      <PricingModal open={showPricing} onOpenChange={setShowPricing} currentPlan={planType} />
    </div>
  );
}

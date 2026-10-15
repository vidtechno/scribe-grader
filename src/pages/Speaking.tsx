import { useState, useEffect, useRef } from 'react';
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
import { randomTopic, type TopicOption } from '@/lib/speakingTopics';
import { TopicCard } from '@/components/speaking/TopicCard';
import { TopicPicker } from '@/components/speaking/TopicPicker';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic, RefreshCw, Clock, Brain, CheckCircle2, BarChart3,
  Loader2, AlertCircle, Sparkles, PenLine, Crown, History, ChevronRight
} from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { audioExtension } from '@/lib/audio';
import { functionError } from '@/lib/function-errors';

const GRADING_STEPS = [
  { label: 'Transcribing your audio...', icon: Mic, duration: 4000 },
  { label: 'Analyzing your speech...', icon: Brain, duration: 3000 },
  { label: 'Evaluating band score...', icon: BarChart3, duration: 3000 },
];

type PartType = 'part1' | 'part2' | 'part3';

const PART_INFO: Record<PartType, { label: string; name: string; time: number; desc: string; real: string; tips: string[] }> = {
  part1: { label: 'Part 1', name: 'Interview', time: 60, desc: 'Answer four short questions about yourself and everyday topics.', real: '4–5 min in the real exam',
    tips: ['Answer in 2–3 sentences, not one word.', 'Give a reason or a short example.', 'Speak naturally; do not memorise answers.'] },
  part2: { label: 'Part 2', name: 'Long turn', time: 120, desc: 'Speak for 1–2 minutes on a cue card. You get one minute to prepare.', real: '1–2 min talk after 1 min of preparation',
    tips: ['Cover every bullet point in order.', 'Use past, present and future where it fits.', 'Keep going until time is up: add feelings and details.'] },
  part3: { label: 'Part 3', name: 'Discussion', time: 120, desc: 'Discuss bigger ideas linked to a topic: opinions, reasons, comparisons.', real: '4–5 min in the real exam',
    tips: ['Give an opinion, then a reason, then an example.', 'Compare past and present, or different groups.', 'It is fine to say "That depends…" and explain.'] },
};

export default function Speaking() {
  const navigate = useNavigate();
  const { user, profile, refreshProfile } = useAuth();
  const { subscription, planType, speakingRemaining, refresh: refreshSub } = useSubscription();
  const canAttempt = speakingRemaining > 0;

  const [selectedPart, setSelectedPart] = useState<PartType>('part2');
  const [option, setOption] = useState<TopicOption>(() => randomTopic('part2'));
  const [prepLeft, setPrepLeft] = useState<number | null>(null);
  const [useCustomTopic, setUseCustomTopic] = useState(false);
  const [customTopic, setCustomTopic] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const processingRef = useRef(false);
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

  const activeTopic = useCustomTopic && customTopic.trim() ? customTopic.trim() : option.text;
  const needsPrep = selectedPart === 'part2' && prepLeft !== 0;

  // Part 2 gives one minute to prepare before the recorder opens, like the real exam.
  useEffect(() => {
    if (!started || !micReady || selectedPart !== 'part2') return;
    setPrepLeft((v) => (v === null ? 60 : v));
  }, [started, micReady, selectedPart]);
  useEffect(() => {
    if (prepLeft === null || prepLeft <= 0) return;
    const t = window.setTimeout(() => setPrepLeft((v) => (v === null ? v : v - 1)), 1000);
    return () => window.clearTimeout(t);
  }, [prepLeft]);

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

  const changePart = (part: PartType) => {
    setSelectedPart(part);
    setOption(randomTopic(part));
    setStarted(false);
    setMicReady(false);
    setPrepLeft(null);
  };

  const handleRecordingComplete = async (blob: Blob, duration: number) => {
    if (processingRef.current) return;
    if (!user) return;
    if (!canAttempt) {
      toast.error("You have used all your Speaking evaluations for this plan.");
      setShowPricing(true);
      return;
    }

    processingRef.current = true;
    setIsProcessing(true);
    setGradingStep(0);

    // Usage is consumed server-side by the grade-speaking function.

    // Insert a "processing" row so history shows a spinner instantly
    const audioFileName = `${user.id}/${Date.now()}.${audioExtension(blob.type)}`;
    const { data: pendingRow, error: pendingError } = await supabase.from('speaking_attempts').insert({
      user_id: user.id, topic: activeTopic, part: selectedPart,
      audio_url: audioFileName, duration_seconds: duration, status: 'processing'
    }).select().single();
    if (pendingError || !pendingRow) {
      processingRef.current = false;
      setIsProcessing(false);
      toast.error('Your recording could not be saved. Please try again.');
      return;
    }

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
        .upload(audioFileName, blob, { contentType: blob.type });

      if (uploadError) throw new Error('Audio upload failed');

      // 2. Transcribe
      const formData = new FormData();
      formData.append('audio', blob, `audio.${audioExtension(blob.type)}`);

      const { data: transcribeData, error: transcribeError } = await supabase.functions
        .invoke('transcribe-audio', { body: formData });

      if (transcribeError || !transcribeData?.transcript) {
        throw await functionError(transcribeError, 'Transcription failed');
      }

      const transcript = transcribeData.transcript;

      // 3. Grade
      const { data: gradeData, error: gradeError } = await supabase.functions
        .invoke('grade-speaking', {
          body: { transcript, topic: activeTopic, part: PART_INFO[selectedPart].label,
            durationSeconds: duration, transcription: transcribeData.metrics ?? null },
        });

      if (gradeError || !gradeData) {
        throw await functionError(gradeError, 'Grading failed');
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
        .eq('id', pendingRow.id)
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
      processingRef.current = false;
      setIsProcessing(false);
      setGradingStep(0);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SEOHead title="Speaking Practice" description="Practice IELTS Speaking with AI-powered feedback and scoring." path="/speaking" noindex />
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
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">IELTS Speaking</p>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">Speaking practice</h1>
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground flex-wrap">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary px-3 py-1 font-medium">{speakingRemaining} evaluations left</span>
              <Link to="/speaking-history" className="inline-flex items-center gap-1 text-primary hover:underline">
                <History className="h-3.5 w-3.5" /> History ({totalAttempts})
              </Link>
            </div>
          </div>

          {/* Part selector */}
          {!started && (
            <div className="grid grid-cols-3 gap-3 mb-6" role="tablist" aria-label="Speaking part">
              {(Object.entries(PART_INFO) as [PartType, typeof PART_INFO[PartType]][]).map(([key, info]) => (
                <button key={key} role="tab" aria-selected={selectedPart === key} onClick={() => changePart(key)}
                  className={`p-3 sm:p-4 rounded-2xl border text-left transition-all ${selectedPart === key ? 'border-primary bg-primary/5 ring-1 ring-primary/40' : 'border-border bg-card hover:border-primary/40'}`}>
                  <p className={`text-xs font-semibold ${selectedPart === key ? 'text-primary' : 'text-muted-foreground'}`}>{info.label}</p>
                  <p className="font-bold text-sm sm:text-base">{info.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 hidden sm:block">{info.real}</p>
                </button>
              ))}
            </div>
          )}

          {/* Chosen topic, drawn like the real card */}
          <div className="mb-6">
            <TopicCard option={useCustomTopic ? undefined : option} custom={useCustomTopic ? (customTopic.trim() || 'Type your own topic below…') : undefined} seconds={PART_INFO[selectedPart].time} />
            {!started && (
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs text-muted-foreground">{PART_INFO[selectedPart].desc}</p>
                <Button variant="ghost" size="sm" onClick={() => setUseCustomTopic(!useCustomTopic)} className="gap-1 text-xs">
                  <PenLine className="h-3 w-3" />{useCustomTopic ? 'Choose from the topic list' : 'Use my own topic'}
                </Button>
              </div>
            )}
            {!started && useCustomTopic && (
              <Input className="mt-3" placeholder={`Type your own ${PART_INFO[selectedPart].label} topic...`} value={customTopic} onChange={(e) => setCustomTopic(e.target.value)} />
            )}
          </div>

          {!started && !useCustomTopic && (
            <div className="glass-card p-4 sm:p-5 mb-6">
              <h2 className="font-semibold text-sm mb-3">Choose a topic</h2>
              <TopicPicker part={selectedPart} selectedId={option.id} onSelect={(t) => { setOption(t); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
            </div>
          )}

          {!started && (
            <ul className="grid sm:grid-cols-3 gap-2 mb-6 text-xs text-muted-foreground" aria-label="Tips">
              {PART_INFO[selectedPart].tips.map((t, i) => <li key={i} className="rounded-xl bg-secondary/40 p-3 flex gap-2"><span className="text-primary font-bold">{i + 1}</span>{t}</li>)}
            </ul>
          )}

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
            </div>
          ) : !micReady ? (
            <AudioQualityCheck onPass={() => setMicReady(true)} />
          ) : needsPrep ? (
            <div className="glass-card p-6 text-center space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Preparation time</p>
              <p className="text-5xl font-bold tabular-nums">{String(Math.floor((prepLeft ?? 60) / 60)).padStart(2, '0')}:{String((prepLeft ?? 60) % 60).padStart(2, '0')}</p>
              <p className="text-sm text-muted-foreground">Think about each bullet point. Write key words if you like (notes are not saved).</p>
              <textarea className="w-full min-h-[96px] rounded-xl border border-border bg-background p-3 text-sm" placeholder="Your notes…" aria-label="Preparation notes" />
              <Button variant="glow" className="gap-2" onClick={() => setPrepLeft(0)}><Mic className="h-4 w-4" />I am ready, start recording</Button>
            </div>
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

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { PricingModal } from '@/components/PricingModal';
import { getRandomTopic } from '@/lib/topics';
import { motion } from 'framer-motion';
import { 
  Clock, FileText, Send, RefreshCw, AlertCircle,
  Loader2, Sparkles, PenLine
} from 'lucide-react';
import { toast } from 'sonner';

export default function Exam() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { profile, refreshProfile } = useAuth();
  
  const taskType = searchParams.get('task') === '1' ? 'Task 1' : 'Task 2';
  const timeLimit = taskType === 'Task 1' ? 20 * 60 : 40 * 60;
  
  const [topic, setTopic] = useState(() => getRandomTopic(taskType));
  const [useCustomTopic, setUseCustomTopic] = useState(false);
  const [customTopic, setCustomTopic] = useState('');
  const [essay, setEssay] = useState('');
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [examStarted, setExamStarted] = useState(false);

  const activeTopic = useCustomTopic && customTopic.trim() ? customTopic.trim() : topic.prompt;

  const wordCount = essay.trim().split(/\s+/).filter(Boolean).length;
  const minWords = taskType === 'Task 1' ? 150 : 250;
  const isWordCountValid = wordCount >= minWords;

  useEffect(() => {
    if (!examStarted || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(timer); handleSubmit(); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [examStarted, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const regenerateTopic = () => {
    setTopic(getRandomTopic(taskType));
    toast.success('New topic generated!');
  };

  const handleSubmit = useCallback(async () => {
    if (!profile) { toast.error('Please sign in'); return; }
    if (profile.credits < 1) { setShowPricing(true); return; }
    if (!isWordCountValid) { toast.error(`Please write at least ${minWords} words`); return; }

    setIsSubmitting(true);
    try {
      const topicText = activeTopic;
      const { data: gradeResult, error: gradeError } = await supabase.functions.invoke('grade-essay', {
        body: { essay, taskType, topic: topicText }
      });
      if (gradeError) throw gradeError;

      const { data: essayData, error: essayError } = await supabase.from('essays').insert({
        user_id: profile.user_id, task_type: taskType, topic: topicText,
        essay_text: essay, word_count: wordCount, score: gradeResult.overallBand, feedback: gradeResult
      }).select().single();
      if (essayError) throw essayError;

      await supabase.from('profiles').update({ credits: profile.credits - 1 }).eq('user_id', profile.user_id);

      // Also update subscription credits_used
      const { data: sub } = await supabase.from('subscriptions').select('credits_used').eq('user_id', profile.user_id).single();
      if (sub) {
        await supabase.from('subscriptions').update({ credits_used: (sub as any).credits_used + 1 }).eq('user_id', profile.user_id);
      }

      await refreshProfile();
      toast.success('Essay submitted and graded!');
      navigate(`/result/${essayData.id}`);
    } catch (error: any) {
      console.error('Submit error:', error);
      toast.error(error.message?.includes('Rate limit') ? 'Too many requests. Please try again.' : 'Failed to grade essay. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [essay, taskType, topic, profile, wordCount, isWordCountValid, minWords, navigate, refreshProfile]);

  const startExam = () => {
    if (profile && profile.credits < 1) { setShowPricing(true); return; }
    setExamStarted(true);
  };

  const getTimeColor = () => {
    const percentage = timeLeft / timeLimit;
    if (percentage <= 0.1) return 'text-destructive';
    if (percentage <= 0.25) return 'text-yellow-500';
    return 'text-primary';
  };

  const timePercentage = (timeLeft / timeLimit) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {!examStarted ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center py-12">
            <div className="glass-card p-8 mb-8">
              <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-primary" />
              </motion.div>
              <h1 className="text-3xl font-bold mb-2">{taskType} Writing Exam</h1>
              <p className="text-muted-foreground mb-6">
                You have {taskType === 'Task 1' ? '20' : '40'} minutes. Write at least {minWords} words.
              </p>
              <div className="bg-secondary/30 rounded-lg p-4 mb-6 text-left">
                <p className="text-sm text-muted-foreground mb-2">Topic Preview:</p>
                <p className="text-sm">{topic.prompt}</p>
                <Button variant="ghost" size="sm" className="mt-3 gap-2" onClick={regenerateTopic}>
                  <RefreshCw className="h-4 w-4" /> Get Different Topic
                </Button>
              </div>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {taskType === 'Task 1' ? '20' : '40'} min</span>
                <span className="flex items-center gap-1"><FileText className="h-4 w-4" /> {minWords}+ words</span>
              </div>
              <Button variant="glow" size="xl" onClick={startExam} className="gap-2">
                <Sparkles className="h-5 w-5" /> Start Exam
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">{taskType}</span>
                <span className={`flex items-center gap-2 font-mono text-2xl font-bold ${getTimeColor()}`}>
                  <Clock className="h-5 w-5" /> {formatTime(timeLeft)}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-sm ${isWordCountValid ? 'text-primary' : 'text-muted-foreground'}`}>
                  {wordCount} / {minWords} words
                </span>
                <Button variant="glow" onClick={handleSubmit} disabled={isSubmitting || !isWordCountValid} className="gap-2">
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />} Submit
                </Button>
              </div>
            </div>

            {/* Time progress bar */}
            <div className="w-full h-1 bg-secondary rounded-full mb-6 overflow-hidden">
              <motion.div className={`h-full rounded-full ${timePercentage <= 10 ? 'bg-destructive' : timePercentage <= 25 ? 'bg-yellow-500' : 'bg-primary'}`}
                style={{ width: `${timePercentage}%` }} transition={{ duration: 1 }} />
            </div>

            <div className="glass-card p-6 mb-6">
              <h2 className="text-lg font-semibold mb-2">Topic</h2>
              <p className="text-muted-foreground">{topic.prompt}</p>
            </div>

            <div className="glass-card p-6">
              <Textarea placeholder="Start writing your essay here..." value={essay}
                onChange={(e) => setEssay(e.target.value)}
                className="min-h-[400px] resize-none bg-transparent border-none focus-visible:ring-0 text-base leading-relaxed"
                autoFocus />
            </div>

            {!isWordCountValid && wordCount > 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="mt-4 flex items-center gap-2 text-yellow-500 text-sm">
                <AlertCircle className="h-4 w-4" />
                Write at least {minWords - wordCount} more words to submit
              </motion.div>
            )}
          </motion.div>
        )}
      </main>

      <PricingModal open={showPricing} onOpenChange={setShowPricing} />
    </div>
  );
}

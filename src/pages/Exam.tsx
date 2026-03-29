import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
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
  Loader2, Sparkles, PenLine, PanelLeftClose, PanelLeft
} from 'lucide-react';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Exam() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { profile, refreshProfile } = useAuth();
  const { subscription } = useSubscription();
  const isMobile = useIsMobile();
  
  const taskType = searchParams.get('task') === '1' ? 'Task 1' : 'Task 2';
  const planType = subscription?.plan_type || 'free';
  const timeLimit = taskType === 'Task 1' ? 20 * 60 : 40 * 60;
  
  const [topic, setTopic] = useState(() => getRandomTopic(taskType));
  const [useCustomTopic, setUseCustomTopic] = useState(false);
  const [customTopic, setCustomTopic] = useState('');
  const [essay, setEssay] = useState('');
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [examStarted, setExamStarted] = useState(false);
  const [showTopicPanel, setShowTopicPanel] = useState(true);

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
        body: { essay, taskType, topic: topicText, planType }
      });
      if (gradeError) throw gradeError;

      const { data: essayData, error: essayError } = await supabase.from('essays').insert({
        user_id: profile.user_id, task_type: taskType, topic: topicText,
        essay_text: essay, word_count: wordCount, score: gradeResult.overallBand, feedback: gradeResult
      }).select().single();
      if (essayError) throw essayError;

      await supabase.from('profiles').update({ credits: profile.credits - 1 }).eq('user_id', profile.user_id);

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
    if (useCustomTopic && !customTopic.trim()) { toast.error("Please enter a topic"); return; }
    setExamStarted(true);
  };

  const getTimeColor = () => {
    const percentage = timeLeft / timeLimit;
    if (percentage <= 0.1) return 'text-red-600';
    if (percentage <= 0.25) return 'text-yellow-600';
    return 'text-gray-700';
  };

  const timePercentage = (timeLeft / timeLimit) * 100;

  if (!examStarted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-center py-12">
            <div className="glass-card p-8 mb-8">
              <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-primary" />
              </motion.div>
              <h1 className="text-3xl font-bold mb-2">{taskType} Writing Exam</h1>
              <p className="text-muted-foreground mb-6">
                You have {taskType === 'Task 1' ? '20' : '40'} minutes. Write at least {minWords} words.
              </p>
              <div className="bg-secondary/30 rounded-lg p-4 mb-4 text-left">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">
                    {useCustomTopic ? "Your topic:" : "Topic:"}
                  </p>
                  <Button variant="ghost" size="sm" className="gap-2 text-xs" 
                    onClick={() => setUseCustomTopic(!useCustomTopic)}>
                    <PenLine className="h-3 w-3" />
                    {useCustomTopic ? "Use random topics" : "Enter my own topic"}
                  </Button>
                </div>
                {useCustomTopic ? (
                  <Input
                    placeholder="Enter your topic here..."
                    value={customTopic}
                    onChange={(e) => setCustomTopic(e.target.value)}
                    className="bg-background/50"
                  />
                ) : (
                  <>
                    <p className="text-sm">{topic.prompt}</p>
                    <Button variant="ghost" size="sm" className="mt-3 gap-2" onClick={regenerateTopic}>
                      <RefreshCw className="h-4 w-4" /> New topic
                    </Button>
                  </>
                )}
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
        </main>
        <PricingModal open={showPricing} onOpenChange={setShowPricing} />
      </div>
    );
  }

  // CD-IELTS Style Exam Workspace
  return (
    <div className="min-h-screen bg-[#f0f0f0] flex flex-col">
      {/* IELTS-style top bar */}
      <div className="bg-[#2c3e50] text-white px-4 py-2 flex items-center justify-between flex-wrap gap-2 z-50">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-sm">{taskType} — Writing</span>
          <span className="text-xs text-gray-300">WritingExam.uz</span>
        </div>
        <div className="flex items-center gap-4">
          <span className={`flex items-center gap-1.5 font-mono text-lg font-bold ${getTimeColor()} bg-white/10 px-3 py-1 rounded`}>
            <Clock className="h-4 w-4" /> {formatTime(timeLeft)}
          </span>
          <span className={`text-sm font-medium ${isWordCountValid ? 'text-green-400' : 'text-gray-300'}`}>
            {wordCount} / {minWords} words
          </span>
          <Button 
            size="sm"
            onClick={handleSubmit} 
            disabled={isSubmitting || !isWordCountValid} 
            className="gap-1.5 bg-green-600 hover:bg-green-700 text-white border-0"
          >
            {isSubmitting ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />} Submit
          </Button>
        </div>
      </div>

      {/* Time progress bar */}
      <div className="w-full h-1 bg-gray-300">
        <div 
          className={`h-full transition-all duration-1000 ${timePercentage <= 10 ? 'bg-red-500' : timePercentage <= 25 ? 'bg-yellow-500' : 'bg-green-500'}`}
          style={{ width: `${timePercentage}%` }} 
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Topic Panel */}
        {isMobile ? (
          <>
            <button 
              onClick={() => setShowTopicPanel(!showTopicPanel)}
              className="flex items-center gap-2 px-4 py-2 bg-[#34495e] text-white text-sm w-full"
            >
              {showTopicPanel ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeft className="h-4 w-4" />}
              {showTopicPanel ? 'Hide Topic' : 'Show Topic'}
            </button>
            {showTopicPanel && (
              <div className="bg-white border-b border-gray-300 p-4 max-h-[40vh] overflow-y-auto">
                <h2 className="text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Question</h2>
                <p className="text-sm text-gray-800 leading-relaxed">{activeTopic}</p>
              </div>
            )}
          </>
        ) : (
          <div className="w-[400px] min-w-[350px] bg-white border-r border-gray-300 flex flex-col">
            <div className="bg-[#ecf0f1] border-b border-gray-300 px-4 py-2">
              <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Question</h2>
            </div>
            <div className="p-5 flex-1 overflow-y-auto">
              <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">{activeTopic}</p>
            </div>
          </div>
        )}

        {/* Writing Area */}
        <div className="flex-1 flex flex-col bg-white">
          <div className="bg-[#ecf0f1] border-b border-gray-300 px-4 py-2 flex items-center justify-between">
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Your Response</h2>
            {!isWordCountValid && wordCount > 0 && (
              <span className="text-xs text-yellow-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {minWords - wordCount} more words needed
              </span>
            )}
          </div>
          <div className="flex-1 p-0">
            <Textarea 
              placeholder="Start writing your essay here..."
              value={essay}
              onChange={(e) => setEssay(e.target.value)}
              className="h-full min-h-[400px] lg:min-h-0 resize-none border-none rounded-none focus-visible:ring-0 text-base leading-[1.8] text-gray-900 placeholder:text-gray-400 p-5"
              style={{ backgroundColor: '#FFFFFF' }}
              autoFocus 
            />
          </div>
        </div>
      </div>

      <PricingModal open={showPricing} onOpenChange={setShowPricing} />
    </div>
  );
}

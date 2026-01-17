import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { getRandomTopic } from '@/lib/topics';
import { 
  Clock, 
  FileText, 
  Send, 
  RefreshCw, 
  AlertCircle,
  Loader2,
  Sparkles
} from 'lucide-react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function Exam() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { profile, refreshProfile } = useAuth();
  
  const taskType = searchParams.get('task') === '1' ? 'Task 1' : 'Task 2';
  const timeLimit = taskType === 'Task 1' ? 20 * 60 : 40 * 60; // in seconds
  
  const [topic, setTopic] = useState(() => getRandomTopic(taskType));
  const [essay, setEssay] = useState('');
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNoCreditsModal, setShowNoCreditsModal] = useState(false);
  const [examStarted, setExamStarted] = useState(false);

  const wordCount = essay.trim().split(/\s+/).filter(Boolean).length;
  const minWords = taskType === 'Task 1' ? 150 : 250;
  const isWordCountValid = wordCount >= minWords;

  // Timer
  useEffect(() => {
    if (!examStarted || timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
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
    if (!profile) {
      toast.error('Please sign in to submit');
      return;
    }

    if (profile.credits < 1) {
      setShowNoCreditsModal(true);
      return;
    }

    if (!isWordCountValid) {
      toast.error(`Please write at least ${minWords} words`);
      return;
    }

    setIsSubmitting(true);

    try {
      // Call the AI grading edge function
      const { data: gradeResult, error: gradeError } = await supabase.functions.invoke('grade-essay', {
        body: { 
          essay: essay,
          taskType: taskType,
          topic: topic.prompt
        }
      });

      if (gradeError) throw gradeError;

      // Save the essay with the score
      const { data: essayData, error: essayError } = await supabase
        .from('essays')
        .insert({
          user_id: profile.user_id,
          task_type: taskType,
          topic: topic.prompt,
          essay_text: essay,
          word_count: wordCount,
          score: gradeResult.overallBand,
          feedback: gradeResult
        })
        .select()
        .single();

      if (essayError) throw essayError;

      // Deduct credit
      await supabase
        .from('profiles')
        .update({ credits: profile.credits - 1 })
        .eq('user_id', profile.user_id);

      await refreshProfile();
      
      toast.success('Essay submitted and graded!');
      navigate(`/result/${essayData.id}`);
    } catch (error: any) {
      console.error('Submit error:', error);
      if (error.message?.includes('Rate limit')) {
        toast.error('Too many requests. Please try again in a moment.');
      } else if (error.message?.includes('Payment required')) {
        toast.error('AI credits exhausted. Please try again later.');
      } else {
        toast.error('Failed to grade essay. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  }, [essay, taskType, topic, profile, wordCount, isWordCountValid, minWords, navigate, refreshProfile]);

  const startExam = () => {
    if (profile && profile.credits < 1) {
      setShowNoCreditsModal(true);
      return;
    }
    setExamStarted(true);
  };

  const getTimeColor = () => {
    const percentage = timeLeft / timeLimit;
    if (percentage <= 0.1) return 'text-destructive';
    if (percentage <= 0.25) return 'text-yellow-500';
    return 'text-primary';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {!examStarted ? (
          // Pre-exam screen
          <div className="max-w-2xl mx-auto text-center animate-fade-in py-12">
            <div className="glass-card p-8 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold mb-2">{taskType} Writing Exam</h1>
              <p className="text-muted-foreground mb-6">
                You have {taskType === 'Task 1' ? '20' : '40'} minutes to complete this task.
                Write at least {minWords} words.
              </p>
              
              <div className="bg-secondary/30 rounded-lg p-4 mb-6 text-left">
                <p className="text-sm text-muted-foreground mb-2">Topic Preview:</p>
                <p className="text-sm">{topic.prompt}</p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-3 gap-2"
                  onClick={regenerateTopic}
                >
                  <RefreshCw className="h-4 w-4" />
                  Get Different Topic
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {taskType === 'Task 1' ? '20' : '40'} minutes
                </span>
                <span className="flex items-center gap-1">
                  <FileText className="h-4 w-4" />
                  {minWords}+ words
                </span>
              </div>

              <Button 
                variant="glow" 
                size="xl" 
                onClick={startExam}
                className="gap-2"
              >
                <Sparkles className="h-5 w-5" />
                Start Exam
              </Button>
            </div>
          </div>
        ) : (
          // Exam interface
          <div className="animate-fade-in">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  {taskType}
                </span>
                <span className={`flex items-center gap-2 font-mono text-2xl font-bold ${getTimeColor()}`}>
                  <Clock className="h-5 w-5" />
                  {formatTime(timeLeft)}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-sm ${isWordCountValid ? 'text-primary' : 'text-muted-foreground'}`}>
                  {wordCount} / {minWords} words
                </span>
                <Button
                  variant="glow"
                  onClick={handleSubmit}
                  disabled={isSubmitting || !isWordCountValid}
                  className="gap-2"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  Submit
                </Button>
              </div>
            </div>

            {/* Topic Card */}
            <div className="glass-card p-6 mb-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-lg font-semibold mb-2">Topic</h2>
                  <p className="text-muted-foreground">{topic.prompt}</p>
                </div>
              </div>
            </div>

            {/* Essay Input */}
            <div className="glass-card p-6">
              <Textarea
                placeholder="Start writing your essay here..."
                value={essay}
                onChange={(e) => setEssay(e.target.value)}
                className="min-h-[400px] resize-none bg-transparent border-none focus-visible:ring-0 text-base leading-relaxed"
                autoFocus
              />
            </div>

            {/* Validation Warning */}
            {!isWordCountValid && wordCount > 0 && (
              <div className="mt-4 flex items-center gap-2 text-yellow-500 text-sm">
                <AlertCircle className="h-4 w-4" />
                Write at least {minWords - wordCount} more words to submit
              </div>
            )}
          </div>
        )}
      </main>

      {/* No Credits Modal */}
      <Dialog open={showNoCreditsModal} onOpenChange={setShowNoCreditsModal}>
        <DialogContent className="glass-card border-border">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              No Credits Left
            </DialogTitle>
            <DialogDescription>
              You've used all your credits. Purchase more to continue practicing.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="glass-card p-4">
              <h4 className="font-semibold mb-2">Credit Packages</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                  <span>5 Credits</span>
                  <span className="font-bold text-primary">$4.99</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-primary/10 border border-primary/30">
                  <span>15 Credits <span className="text-xs text-primary">(Best Value)</span></span>
                  <span className="font-bold text-primary">$9.99</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                  <span>50 Credits</span>
                  <span className="font-bold text-primary">$24.99</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Contact admin for credit purchases
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

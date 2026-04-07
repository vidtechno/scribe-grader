import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useSubscription } from '@/hooks/useSubscription';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { LoadingScreen } from '@/components/LoadingScreen';
import { BlurredContent } from '@/components/BlurredContent';
import { PricingModal } from '@/components/PricingModal';
import { SEOHead } from '@/components/SEOHead';
import {
  ArrowLeft, Award, MessageSquare, CheckCircle, Target,
  AlertTriangle, Crown, Mic, BookA, Volume2
} from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

interface Feedback {
  overallBand: number;
  fluencyCoherence: { score: number; feedback: string };
  lexicalResource: { score: number; feedback: string };
  grammaticalRange: { score: number; feedback: string };
  pronunciation: { score: number; feedback: string };
  strengths: string[];
  suggestions: string[];
  errorCorrections?: { original: string; corrected: string; explanation: string; type?: string }[];
  vocabularyHighlights?: { word: string; context: string; rating: string }[];
  fluencyNotes?: {
    fillerWords: string[];
    fillerCount: number;
    averageSentenceLength: number;
    topicDevelopment: string;
  };
  sampleAnswer?: string;
}

interface Attempt {
  id: string;
  topic: string;
  part: string;
  transcript: string | null;
  score: number | null;
  feedback: Feedback | null;
  duration_seconds: number;
  created_at: string;
}

export default function SpeakingResult() {
  const { id } = useParams<{ id: string }>();
  const [attempt, setAttempt] = useState<Attempt | null>(null);
  const [loading, setLoading] = useState(true);
  const [showPricing, setShowPricing] = useState(false);
  const { subscription } = useSubscription();

  const planType = subscription?.plan_type || 'free';
  const isFree = planType === 'free';
  const isPro = planType === 'pro' || planType === 'pro_plus';
  const isProPlus = planType === 'pro_plus';

  useEffect(() => {
    fetchAttempt();
  }, [id]);

  const fetchAttempt = async () => {
    if (!id) return;
    const { data, error } = await supabase
      .from('speaking_attempts')
      .select('*')
      .eq('id', id)
      .single();
    if (!error && data) setAttempt(data as unknown as Attempt);
    setLoading(false);
  };

  if (loading) return <LoadingScreen />;
  if (!attempt || !attempt.feedback) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg font-semibold mb-2">Result not found</p>
        <Link to="/dashboard"><Button variant="outline">Go to Dashboard</Button></Link>
      </div>
    </div>
  );

  const fb = attempt.feedback;
  const score = fb.overallBand;

  const getScoreColor = (s: number) =>
    s >= 7 ? 'text-primary' : s >= 5.5 ? 'text-amber-500' : 'text-destructive';

  const radarData = [
    { criterion: 'Fluency', score: fb.fluencyCoherence.score, fullMark: 9 },
    { criterion: 'Lexical', score: fb.lexicalResource.score, fullMark: 9 },
    { criterion: 'Grammar', score: fb.grammaticalRange.score, fullMark: 9 },
    { criterion: 'Pronunciation', score: fb.pronunciation.score, fullMark: 9 },
  ];

  const criteria = [
    { label: 'Fluency & Coherence', data: fb.fluencyCoherence, icon: Volume2 },
    { label: 'Lexical Resource', data: fb.lexicalResource, icon: BookA },
    { label: 'Grammatical Range', data: fb.grammaticalRange, icon: MessageSquare },
    { label: 'Pronunciation', data: fb.pronunciation, icon: Mic },
  ];

  const onUpgrade = () => setShowPricing(true);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SEOHead title="Speaking Result" description="Your IELTS Speaking practice result." path={`/speaking-result/${id}`} />
      <Navbar />

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link to="/dashboard" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Link>

        {/* Header */}
        <div className="glass-card p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex flex-col items-center">
              <div className={`text-5xl font-bold ${getScoreColor(score)}`}>{score}</div>
              <p className="text-sm text-muted-foreground mt-1">Overall Band</p>
            </div>
            <div className="flex-1 w-full">
              <div className="h-48 w-full">
                <ResponsiveContainer>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="criterion" tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 9]} tick={{ fontSize: 10 }} />
                    <Radar name="Score" dataKey="score" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span>{attempt.part.replace('part', 'Part ')}</span>
            <span>•</span>
            <span>{Math.floor(attempt.duration_seconds / 60)}:{(attempt.duration_seconds % 60).toString().padStart(2, '0')} duration</span>
            <span>•</span>
            <span>{format(new Date(attempt.created_at), 'MMM d, yyyy')}</span>
          </div>
        </div>

        {/* Criteria Scores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {criteria.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.label} className="glass-card p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className={`text-lg font-bold ${getScoreColor(c.data.score)}`}>{c.data.score}</p>
                  </div>
                </div>
                {isFree ? (
                  <BlurredContent text={c.data.feedback} onUpgrade={onUpgrade} />
                ) : (
                  <p className="text-sm text-muted-foreground">{c.data.feedback}</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Strengths & Suggestions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="glass-card p-5">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" /> Strengths
            </h3>
            {isFree ? (
              <BlurredContent text={fb.strengths.join('. ')} onUpgrade={onUpgrade} />
            ) : (
              <ul className="space-y-2">{fb.strengths.map((s, i) => <li key={i} className="text-sm text-muted-foreground">• {s}</li>)}</ul>
            )}
          </div>
          <div className="glass-card p-5">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <Target className="h-4 w-4 text-amber-500" /> Suggestions
            </h3>
            {isFree ? (
              <BlurredContent text={fb.suggestions.join('. ')} onUpgrade={onUpgrade} />
            ) : (
              <ul className="space-y-2">{fb.suggestions.map((s, i) => <li key={i} className="text-sm text-muted-foreground">• {s}</li>)}</ul>
            )}
          </div>
        </div>

        {/* Error Corrections - Pro */}
        {fb.errorCorrections && fb.errorCorrections.length > 0 && (
          <div className="glass-card p-5 mb-6">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" /> Error Corrections
              {!isPro && <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full flex items-center gap-1"><Crown className="h-3 w-3" /> Premium</span>}
            </h3>
            {!isPro ? (
              <BlurredContent text={fb.errorCorrections.map(e => `${e.original} → ${e.corrected}: ${e.explanation}`).join('. ')} onUpgrade={onUpgrade} />
            ) : (
              <div className="space-y-3">
                {fb.errorCorrections.map((e, i) => (
                  <div key={i} className="p-3 rounded-lg bg-secondary/30">
                    <p className="text-sm"><span className="line-through text-destructive">{e.original}</span> → <span className="text-primary font-medium">{e.corrected}</span></p>
                    <p className="text-xs text-muted-foreground mt-1">{e.explanation}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Fluency Notes - Pro Plus */}
        {fb.fluencyNotes && (
          <div className="glass-card p-5 mb-6">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-primary" /> Fluency Analysis
              {!isProPlus && <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full flex items-center gap-1"><Crown className="h-3 w-3" /> Pro Plus</span>}
            </h3>
            {!isProPlus ? (
              <BlurredContent text={`Filler words: ${fb.fluencyNotes.fillerCount}. Average sentence length: ${fb.fluencyNotes.averageSentenceLength} words. ${fb.fluencyNotes.topicDevelopment}`} onUpgrade={onUpgrade} />
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-secondary/30">
                    <p className="text-xs text-muted-foreground">Filler Words</p>
                    <p className="font-bold">{fb.fluencyNotes.fillerCount}</p>
                    {fb.fluencyNotes.fillerWords.length > 0 && (
                      <p className="text-xs text-muted-foreground mt-1">({fb.fluencyNotes.fillerWords.join(', ')})</p>
                    )}
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/30">
                    <p className="text-xs text-muted-foreground">Avg Sentence Length</p>
                    <p className="font-bold">{fb.fluencyNotes.averageSentenceLength} words</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">{fb.fluencyNotes.topicDevelopment}</p>
              </>
            )}
          </div>
        )}

        {/* Sample Answer - Pro Plus */}
        {fb.sampleAnswer && (
          <div className="glass-card p-5 mb-6">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" /> Model Answer
              {!isProPlus && <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full flex items-center gap-1"><Crown className="h-3 w-3" /> Pro Plus</span>}
            </h3>
            {!isProPlus ? (
              <BlurredContent text={fb.sampleAnswer} onUpgrade={onUpgrade} />
            ) : (
              <p className="text-sm text-muted-foreground leading-relaxed">{fb.sampleAnswer}</p>
            )}
          </div>
        )}

        {/* Transcript */}
        {attempt.transcript && (
          <div className="glass-card p-5 mb-6">
            <h3 className="font-semibold text-sm mb-3">Your Transcript</h3>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{attempt.transcript}</p>
          </div>
        )}

        {/* Topic */}
        <div className="glass-card p-5">
          <h3 className="font-semibold text-sm mb-2">Topic</h3>
          <p className="text-sm text-muted-foreground">{attempt.topic}</p>
        </div>
      </main>

      <PricingModal open={showPricing} onOpenChange={setShowPricing} currentPlan={planType} />
    </div>
  );
}

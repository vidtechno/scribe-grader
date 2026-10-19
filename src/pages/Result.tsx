import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { LoadingScreen } from '@/components/LoadingScreen';
import { ErrorCorrections } from '@/components/ErrorCorrections';
import { EssayComments } from '@/components/EssayComments';
import { SEOHead } from '@/components/SEOHead';
import { 
  ArrowLeft, Award, BookOpen, MessageSquare, CheckCircle,
  Target, FileText, AlertTriangle,
  BookA, Link2, Layers
} from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { uz as uzLocale } from 'date-fns/locale';
import { useT } from '@/i18n';

interface ErrorCorrectionItem {
  original: string;
  corrected: string;
  explanation: string;
  type?: 'error' | 'improvement';
}

interface VocabItem {
  word: string;
  count: number;
  suggestions: string[];
}

interface CoherenceItem {
  location: string;
  status: 'strong' | 'weak' | 'missing';
  suggestion: string;
}

interface SentenceItem {
  sentence: string;
  type: 'simple' | 'compound' | 'complex';
}

interface Feedback {
  overallBand: number;
  taskAchievement: { score: number; feedback: string };
  coherenceCohesion: { score: number; feedback: string };
  lexicalResource: { score: number; feedback: string };
  grammaticalRange: { score: number; feedback: string };
  suggestions: string[];
  strengths: string[];
  errorCorrections?: ErrorCorrectionItem[];
  vocabularyAnalysis?: VocabItem[];
  coherenceCheck?: CoherenceItem[];
  sentenceComplexity?: SentenceItem[];
  modelUsed?: string;
}

interface Essay {
  id: string;
  task_type: string;
  topic: string;
  essay_text: string;
  word_count: number;
  score: number | null;
  feedback: Feedback | null;
  created_at: string;
}

export default function Result() {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useT();
  const [essay, setEssay] = useState<Essay | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    (async () => {
      try {
        const { data, error } = await supabase.from('essays').select('*').eq('id', id).single();
        if (error) throw error;
        setEssay(data as unknown as Essay);
      } catch (error) {
        console.error('Error fetching essay:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <LoadingScreen />;
  if (!essay) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('rs.notFound')}</h1>
          <Link to="/dashboard"><Button>{t('rs.backDash')}</Button></Link>
        </div>
      </div>
    );
  }

  const feedback = essay.feedback;
  const chartData = feedback ? [
    { subject: t('rs.radarTask'), score: feedback.taskAchievement.score, fullMark: 9 },
    { subject: t('rs.radarCoh'), score: feedback.coherenceCohesion.score, fullMark: 9 },
    { subject: t('rs.radarLex'), score: feedback.lexicalResource.score, fullMark: 9 },
    { subject: t('rs.radarGram'), score: feedback.grammaticalRange.score, fullMark: 9 },
  ] : [];

  const getScoreColor = (score: number) => {
    if (score >= 7) return 'text-primary';
    if (score >= 5) return 'text-yellow-500';
    return 'text-destructive';
  };

  const sentenceColors: Record<string, string> = {
    simple: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200',
    compound: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200',
    complex: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200',
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SEOHead title={t('rs.seoTitle')} description={t('rs.seoDesc')} path={`/result/${id}`} noindex />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
          <Link to="/dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> {t('rs.backDash')}
          </Link>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-8 animate-fade-in">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">{essay.task_type}</span>
              <span className="text-sm text-muted-foreground">{format(new Date(essay.created_at), 'MMMM d, yyyy', lang === 'uz' ? { locale: uzLocale } : undefined)}</span>
            </div>
            <h1 className="text-2xl font-bold">{t('rs.heading')}</h1>
          </div>
          {essay.score !== null && (
            <div className="glass-card px-8 py-4 text-center glow-effect">
              <p className="text-sm text-muted-foreground mb-1">{t('rs.overall')}</p>
              <p className={`text-5xl font-bold ${getScoreColor(essay.score)}`}>{essay.score}</p>
            </div>
          )}
        </div>

        {feedback && (
          <>
            {/* Scores Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" /> {t('rs.breakdown')}
                </h2>
                <div className="h-64 sm:h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={chartData}>
                      <PolarGrid stroke="hsl(var(--border))" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
                      <PolarRadiusAxis domain={[0, 9]} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }} />
                      <Radar name={t('rs.score')} dataKey="score" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} strokeWidth={2} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" /> {t('rs.detailedScores')}
                </h2>
                <div className="space-y-4">
                  {[
                    { label: t('rs.crit.ta'), score: feedback.taskAchievement.score },
                    { label: t('rs.crit.cc'), score: feedback.coherenceCohesion.score },
                    { label: t('rs.crit.lr'), score: feedback.lexicalResource.score },
                    { label: t('rs.crit.gra'), score: feedback.grammaticalRange.score },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-24 sm:w-32 h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${(item.score / 9) * 100}%` }} />
                        </div>
                        <span className={`font-bold w-8 ${getScoreColor(item.score)}`}>{item.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Error Corrections */}
            <div className="glass-card p-6 mb-8 animate-fade-in" style={{ animationDelay: '0.25s' }}>
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" /> {t('rs.errorsTitle')}
              </h2>
              <ErrorCorrections corrections={feedback.errorCorrections || []} />
            </div>

            {/* Vocabulary Range Analysis */}
            {feedback.vocabularyAnalysis && feedback.vocabularyAnalysis.length > 0 && (
              <div className="glass-card p-6 mb-8 animate-fade-in" style={{ animationDelay: '0.27s' }}>
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BookA className="h-5 w-5 text-primary" /> 
                  {t('rs.vocabTitle')}
                </h2>
                <p className="text-xs text-muted-foreground mb-4">{t('rs.vocabDesc')}</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {feedback.vocabularyAnalysis.map((item, i) => (
                    <div key={i} className="rounded-lg border border-border bg-secondary/20 p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-sm font-medium text-destructive">"{item.word}"</span>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">{t('rs.used', { n: item.count })}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.suggestions.map((s, j) => (
                          <span key={j} className="text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">{s}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Coherence Check */}
            {feedback.coherenceCheck && feedback.coherenceCheck.length > 0 && (
              <div className="glass-card p-6 mb-8 animate-fade-in" style={{ animationDelay: '0.29s' }}>
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Link2 className="h-5 w-5 text-primary" /> 
                  {t('rs.cohTitle')}
                </h2>
                <p className="text-xs text-muted-foreground mb-4">{t('rs.cohDesc')}</p>
                <div className="space-y-3">
                  {feedback.coherenceCheck.map((item, i) => {
                    const statusColors = {
                      strong: 'border-green-300 dark:border-green-800 bg-green-50 dark:bg-green-950/20',
                      weak: 'border-yellow-300 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20',
                      missing: 'border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/20',
                    };
                    const statusBadge = {
                      strong: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300',
                      weak: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300',
                      missing: 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300',
                    };
                    return (
                      <div key={i} className={`rounded-lg border p-3 ${statusColors[item.status]}`}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{item.location}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${statusBadge[item.status]}`}>{t(`rs.status.${item.status}`)}</span>
                        </div>
                        {item.suggestion && item.status !== 'strong' && (
                          <p className="text-xs text-muted-foreground italic">{t('rs.suggestion')} {item.suggestion}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Sentence Complexity Map */}
            {feedback.sentenceComplexity && feedback.sentenceComplexity.length > 0 && (
              <div className="glass-card p-6 mb-8 animate-fade-in" style={{ animationDelay: '0.31s' }}>
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" /> {t('rs.sentTitle')}
                </h2>
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="flex items-center gap-1.5 text-xs"><span className="w-3 h-3 rounded bg-blue-200 dark:bg-blue-800"></span> {t('rs.simple')}</span>
                  <span className="flex items-center gap-1.5 text-xs"><span className="w-3 h-3 rounded bg-yellow-200 dark:bg-yellow-800"></span> {t('rs.compound')}</span>
                  <span className="flex items-center gap-1.5 text-xs"><span className="w-3 h-3 rounded bg-green-200 dark:bg-green-800"></span> {t('rs.complex')}</span>
                </div>
                <div className="space-y-2 max-h-[400px] overflow-y-auto">
                  {feedback.sentenceComplexity.map((item, i) => (
                    <div key={i} className={`text-xs px-3 py-2 rounded ${sentenceColors[item.type]}`}>
                      <span className="font-medium capitalize mr-2">[{t(`rs.sent.${item.type}`)}]</span>
                      {item.sentence}
                    </div>
                  ))}
                </div>
                {(() => {
                  const total = feedback.sentenceComplexity!.length;
                  const simple = feedback.sentenceComplexity!.filter(s => s.type === 'simple').length;
                  const compound = feedback.sentenceComplexity!.filter(s => s.type === 'compound').length;
                  const complex = feedback.sentenceComplexity!.filter(s => s.type === 'complex').length;
                  return (
                    <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                      <div className="p-2 rounded bg-blue-50 dark:bg-blue-950/30">
                        <p className="text-lg font-bold text-blue-600">{Math.round((simple/total)*100)}%</p>
                        <p className="text-xs text-muted-foreground">{t('rs.simple')}</p>
                      </div>
                      <div className="p-2 rounded bg-yellow-50 dark:bg-yellow-950/30">
                        <p className="text-lg font-bold text-yellow-600">{Math.round((compound/total)*100)}%</p>
                        <p className="text-xs text-muted-foreground">{t('rs.compound')}</p>
                      </div>
                      <div className="p-2 rounded bg-green-50 dark:bg-green-950/30">
                        <p className="text-lg font-bold text-green-600">{Math.round((complex/total)*100)}%</p>
                        <p className="text-xs text-muted-foreground">{t('rs.complex')}</p>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Strengths & Suggestions */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" /> {t('rs.strengths')}
                </h2>
                <ul className="space-y-3">
                  {feedback.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="h-3 w-3 text-primary" />
                      </span>
                      <span className="text-sm text-muted-foreground">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" /> {t('rs.improve')}
                </h2>
                <ul className="space-y-3">
                  {feedback.suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-yellow-500 text-xs font-bold">
                        {index + 1}
                      </span>
                      <span className="text-sm text-muted-foreground">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Detailed Feedback */}
            <div className="glass-card p-6 mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" /> {t('rs.detailedFeedback')}
              </h2>
              <div className="space-y-6">
                {[
                  { title: t('rs.crit.ta'), content: feedback.taskAchievement.feedback },
                  { title: t('rs.crit.cc'), content: feedback.coherenceCohesion.feedback },
                  { title: t('rs.crit.lr'), content: feedback.lexicalResource.feedback },
                  { title: t('rs.crit.gra2'), content: feedback.grammaticalRange.feedback },
                ].map((section) => (
                  <div key={section.title} className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <h3 className="font-medium mb-2">{section.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Original Essay */}
        <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" /> {t('rs.yourEssay')}
            </h2>
            <span className="text-sm text-muted-foreground">{t('wr.words', { n: essay.word_count })}</span>
          </div>
          <div className="p-4 bg-secondary/30 rounded-lg">
            <p className="text-sm text-muted-foreground mb-4 italic">{essay.topic}</p>
            <div className="prose prose-sm max-w-none">
              {essay.essay_text.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0 text-foreground leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </main>
      {essay && (
        <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-12">
          <EssayComments essayId={essay.id} />
        </div>
      )}
    </div>
  );
}

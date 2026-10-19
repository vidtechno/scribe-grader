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
  AlertTriangle, Crown, Mic, BookA, Volume2, TrendingUp, Repeat, Languages, ListChecks
} from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { uz as uzLocale } from 'date-fns/locale';
import { useT } from '@/i18n';

interface Feedback {
  overallBand: number;
  fluencyCoherence: Criterion;
  lexicalResource: Criterion;
  grammaticalRange: Criterion;
  pronunciation: Criterion;
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
  summaryUz?: string;
  nextStepsUz?: string[];
  partFeedback?: string;
  upgradedPhrases?: { said: string; better: string; why: string }[];
  grammarProfile?: { used: string[]; missing: string[]; errorPatterns: string[] };
  pronunciationFocus?: { word: string; tip: string }[];
  bandUpPlan?: { targetBand: number | null; steps: string[] };
  metrics?: {
    words: number; uniqueWords: number; lexicalDiversity: number; wordsPerMinute: number | null; sentences: number;
    averageSentenceLength: number; longestSentence: number; fillerCount: number; fillers: { word: string; count: number }[];
    repeatedWords: { word: string; count: number }[]; connectors: string[]; basicConnectorCount: number; longWordShare: number; contractions: number;
  };
}
type Criterion = { score: number; feedback: string; evidence?: string[]; toNextBand?: string[] };

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
  const { t, lang } = useT();
  const [attempt, setAttempt] = useState<Attempt | null>(null);
  const [loading, setLoading] = useState(true);
  const [showPricing, setShowPricing] = useState(false);
  const { isPremium } = useSubscription();

  // Lifetime Premium unlocks every advanced section.
  const isFree = !isPremium;
  const isPro = isPremium;
  const isProPlus = isPremium;

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
        <p className="text-lg font-semibold mb-2">{t('sr.notFound')}</p>
        <Link to="/dashboard"><Button variant="outline">{t('sr.goDash')}</Button></Link>
      </div>
    </div>
  );

  const fb = attempt.feedback;
  const score = fb.overallBand;

  const getScoreColor = (s: number) =>
    s >= 7 ? 'text-primary' : s >= 5.5 ? 'text-amber-500' : 'text-destructive';

  const radarData = [
    { criterion: t('sr.radarFluency'), score: fb.fluencyCoherence.score, fullMark: 9 },
    { criterion: t('sr.radarLex'), score: fb.lexicalResource.score, fullMark: 9 },
    { criterion: t('sr.radarGram'), score: fb.grammaticalRange.score, fullMark: 9 },
    { criterion: t('sr.radarPron'), score: fb.pronunciation.score, fullMark: 9 },
  ];

  const criteria = [
    { label: t('sr.crit.fc'), data: fb.fluencyCoherence, icon: Volume2 },
    { label: t('rs.crit.lr'), data: fb.lexicalResource, icon: BookA },
    { label: t('rs.crit.gra'), data: fb.grammaticalRange, icon: MessageSquare },
    { label: t('sr.crit.pron'), data: fb.pronunciation, icon: Mic },
  ];

  const onUpgrade = () => setShowPricing(true);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SEOHead title={t('sr.seoTitle')} description={t('sr.seoDesc')} path={`/speaking-result/${id}`} noindex />
      <Navbar />

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link to="/dashboard" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> {t('rs.backDash')}
        </Link>

        {/* Header */}
        <div className="glass-card p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex flex-col items-center">
              <div className={`text-5xl font-bold ${getScoreColor(score)}`}>{score}</div>
              <p className="text-sm text-muted-foreground mt-1">{t('rs.overall')}</p>
            </div>
            <div className="flex-1 w-full">
              <div className="h-48 w-full">
                <ResponsiveContainer>
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="criterion" tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 9]} tick={{ fontSize: 10 }} />
                    <Radar name={t('rs.score')} dataKey="score" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.2} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
            <span>{attempt.part.replace('part', 'Part ')}</span>
            <span>•</span>
            <span>{Math.floor(attempt.duration_seconds / 60)}:{(attempt.duration_seconds % 60).toString().padStart(2, '0')} {t('sr.duration')}</span>
            <span>•</span>
            <span>{format(new Date(attempt.created_at), 'MMM d, yyyy', lang === 'uz' ? { locale: uzLocale } : undefined)}</span>
          </div>
        </div>

        {/* Summary in Uzbek + measured speech facts */}
        {(fb.summaryUz || fb.metrics) && (
          <div className="glass-card p-5 mb-6">
            {fb.summaryUz && (
              <>
                <h3 className="font-semibold text-sm mb-2 flex items-center gap-2"><Languages className="h-4 w-4 text-primary" /> {t('sr.summary')}</h3>
                <p className="text-sm leading-relaxed">{fb.summaryUz}</p>
                {fb.nextStepsUz && fb.nextStepsUz.length > 0 && (
                  isFree ? <div className="mt-3"><BlurredContent text={fb.nextStepsUz.join('. ')} onUpgrade={onUpgrade} /></div> : (
                    <ul className="mt-3 space-y-1.5">{fb.nextStepsUz.map((step, i) => <li key={i} className="text-sm text-muted-foreground">✓ {step}</li>)}</ul>
                  )
                )}
              </>
            )}
            {fb.metrics && (
              <div className={fb.summaryUz ? 'mt-5 pt-4 border-t border-border' : ''}>
                <h3 className="font-semibold text-sm mb-3">{t('sr.numbers')}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    [t('sr.m.words'), String(fb.metrics.words), fb.metrics.words < 60 ? t('sr.m.short') : ''],
                    [t('sr.m.speed'), fb.metrics.wordsPerMinute ? `${fb.metrics.wordsPerMinute} ${t('sr.m.wpm')}` : '–', t('sr.m.natural')],
                    [t('sr.m.variety'), `${Math.round(fb.metrics.lexicalDiversity * 100)}%`, t('sr.m.diffWords')],
                    [t('sr.m.fillers'), String(fb.metrics.fillerCount), t('sr.m.atLeast')],
                    [t('sr.m.avgSentence'), `${fb.metrics.averageSentenceLength}`, t('sr.m.wordsUnit')],
                    [t('sr.m.longest'), `${fb.metrics.longestSentence}`, t('sr.m.wordsUnit')],
                    [t('sr.m.linkers'), String(fb.metrics.connectors.length), t('sr.m.beyond')],
                    [t('sr.m.longWords'), `${Math.round(fb.metrics.longWordShare * 100)}%`, t('sr.m.letters')],
                  ].map(([k, v, note]) => (
                    <div key={k} className="p-3 rounded-lg bg-secondary/30">
                      <p className="text-xs text-muted-foreground">{k}</p>
                      <p className="font-bold">{v}</p>
                      {note && <p className="text-[10px] text-muted-foreground">{note}</p>}
                    </div>
                  ))}
                </div>
                {(fb.metrics.connectors.length > 0 || fb.metrics.repeatedWords.length > 0) && (
                  <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                    {fb.metrics.connectors.length > 0 && <p><span className="font-semibold text-foreground">{t('sr.linkersUsed')}</span> {fb.metrics.connectors.join(', ')}</p>}
                    {fb.metrics.repeatedWords.length > 0 && <p className="flex items-center gap-1"><Repeat className="h-3 w-3" /><span><span className="font-semibold text-foreground">{t('sr.repeated')}</span> {fb.metrics.repeatedWords.map((w) => `${w.word} ×${w.count}`).join(', ')} — {t('sr.findSynonyms')}</span></p>}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

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
                  <>
                    <p className="text-sm text-muted-foreground">{c.data.feedback}</p>
                    {c.data.evidence && c.data.evidence.length > 0 && (
                      <ul className="mt-2 flex flex-wrap gap-1.5">{c.data.evidence.map((e, i) => <li key={i} className="text-[11px] px-2 py-0.5 rounded-full bg-secondary/60 text-muted-foreground">{e}</li>)}</ul>
                    )}
                    {c.data.toNextBand && c.data.toNextBand.length > 0 && (
                      <div className="mt-3 rounded-lg bg-primary/5 border border-primary/15 p-2.5">
                        <p className="text-[11px] font-semibold text-primary flex items-center gap-1 mb-1"><TrendingUp className="h-3 w-3" /> {t('sr.gain')}</p>
                        <ul className="space-y-0.5">{c.data.toNextBand.map((step, i) => <li key={i} className="text-xs text-muted-foreground">• {step}</li>)}</ul>
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Strengths & Suggestions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="glass-card p-5">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" /> {t('rs.strengths')}
            </h3>
            {isFree ? (
              <BlurredContent text={fb.strengths.join('. ')} onUpgrade={onUpgrade} />
            ) : (
              <ul className="space-y-2">{fb.strengths.map((s, i) => <li key={i} className="text-sm text-muted-foreground">• {s}</li>)}</ul>
            )}
          </div>
          <div className="glass-card p-5">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <Target className="h-4 w-4 text-amber-500" /> {t('sr.suggestions')}
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
              <AlertTriangle className="h-4 w-4 text-amber-500" /> {t('sr.errors')}
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

        {/* Better ways to say it */}
        {fb.upgradedPhrases && fb.upgradedPhrases.length > 0 && (
          <div className="glass-card p-5 mb-6">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2"><BookA className="h-4 w-4 text-primary" /> {t('sr.upgradePhrases')}</h3>
            {isFree ? <BlurredContent text={fb.upgradedPhrases.map((p) => `${p.said} → ${p.better}: ${p.why}`).join('. ')} onUpgrade={onUpgrade} /> : (
              <div className="space-y-3">
                {fb.upgradedPhrases.map((p, i) => (
                  <div key={i} className="p-3 rounded-lg bg-secondary/30">
                    <p className="text-sm"><span className="text-muted-foreground">{p.said}</span> → <span className="text-primary font-medium">{p.better}</span></p>
                    <p className="text-xs text-muted-foreground mt-1">{p.why}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Grammar profile + task feedback */}
        {(fb.grammarProfile && (fb.grammarProfile.used.length + fb.grammarProfile.missing.length + fb.grammarProfile.errorPatterns.length > 0)) || fb.partFeedback ? (
          <div className="glass-card p-5 mb-6">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2"><ListChecks className="h-4 w-4 text-primary" /> {t('sr.grammarProfile')}</h3>
            {isFree ? <BlurredContent text={`${fb.partFeedback ?? ''} ${fb.grammarProfile?.used.join(', ') ?? ''}`} onUpgrade={onUpgrade} /> : (
              <>
                {fb.partFeedback && <p className="text-sm text-muted-foreground mb-3">{fb.partFeedback}</p>}
                <div className="grid sm:grid-cols-3 gap-3 text-xs">
                  {([[t('sr.gp.used'), fb.grammarProfile?.used, 'text-primary'], [t('sr.gp.missing'), fb.grammarProfile?.missing, 'text-amber-500'], [t('sr.gp.errors'), fb.grammarProfile?.errorPatterns, 'text-destructive']] as const).map(([title, list, color]) => list && list.length > 0 && (
                    <div key={title} className="p-3 rounded-lg bg-secondary/30">
                      <p className={`font-semibold mb-1 ${color}`}>{title}</p>
                      <ul className="space-y-0.5 text-muted-foreground">{list.map((x, i) => <li key={i}>• {x}</li>)}</ul>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ) : null}

        {/* Pronunciation focus */}
        {fb.pronunciationFocus && fb.pronunciationFocus.length > 0 && (
          <div className="glass-card p-5 mb-6">
            <h3 className="font-semibold text-sm mb-1 flex items-center gap-2"><Mic className="h-4 w-4 text-primary" /> {t('sr.pronFocus')}</h3>
            <p className="text-xs text-muted-foreground mb-3">{t('sr.pronDesc')}</p>
            {isFree ? <BlurredContent text={fb.pronunciationFocus.map((p) => `${p.word}: ${p.tip}`).join('. ')} onUpgrade={onUpgrade} /> : (
              <ul className="space-y-2">{fb.pronunciationFocus.map((p, i) => <li key={i} className="text-sm"><span className="font-semibold">{p.word}</span> <span className="text-muted-foreground">— {p.tip}</span></li>)}</ul>
            )}
          </div>
        )}

        {/* Plan to the next band */}
        {fb.bandUpPlan && fb.bandUpPlan.steps.length > 0 && (
          <div className="glass-card p-5 mb-6 border border-primary/20">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> {t('sr.plan', { band: fb.bandUpPlan.targetBand ?? Math.min(9, score + 0.5) })}</h3>
            {isFree ? <BlurredContent text={fb.bandUpPlan.steps.join('. ')} onUpgrade={onUpgrade} /> : (
              <ol className="space-y-2 list-decimal pl-5 text-sm text-muted-foreground">{fb.bandUpPlan.steps.map((step, i) => <li key={i}>{step}</li>)}</ol>
            )}
            <Link to="/speaking" className="inline-block mt-4"><Button variant="glow" size="sm" className="gap-2"><Mic className="h-4 w-4" />{t('sr.practiseAgain')}</Button></Link>
          </div>
        )}

        {/* Fluency Notes - Pro Plus */}
        {fb.fluencyNotes && (
          <div className="glass-card p-5 mb-6">
            <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-primary" /> {t('sr.fluencyAnalysis')}
              {!isProPlus && <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full flex items-center gap-1"><Crown className="h-3 w-3" /> Pro Plus</span>}
            </h3>
            {!isProPlus ? (
              <BlurredContent text={`${t('sr.fillerWords')}: ${fb.fluencyNotes.fillerCount}. ${t('sr.avgSentLen')}: ${fb.fluencyNotes.averageSentenceLength} ${t('sr.m.wordsUnit')}. ${fb.fluencyNotes.topicDevelopment}`} onUpgrade={onUpgrade} />
            ) : (
              <>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-secondary/30">
                    <p className="text-xs text-muted-foreground">{t('sr.fillerWords')}</p>
                    <p className="font-bold">{fb.fluencyNotes.fillerCount}</p>
                    {fb.fluencyNotes.fillerWords.length > 0 && (
                      <p className="text-xs text-muted-foreground mt-1">({fb.fluencyNotes.fillerWords.join(', ')})</p>
                    )}
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/30">
                    <p className="text-xs text-muted-foreground">{t('sr.avgSentLen')}</p>
                    <p className="font-bold">{fb.fluencyNotes.averageSentenceLength} {t('sr.m.wordsUnit')}</p>
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
              <Award className="h-4 w-4 text-primary" /> {t('sr.model')}
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
            <h3 className="font-semibold text-sm mb-3">{t('sr.transcript')}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{attempt.transcript}</p>
          </div>
        )}

        {/* Topic */}
        <div className="glass-card p-5">
          <h3 className="font-semibold text-sm mb-2">{t('pdf.topic')}</h3>
          <p className="text-sm text-muted-foreground">{attempt.topic}</p>
        </div>
      </main>

      <PricingModal open={showPricing} onOpenChange={setShowPricing} />
    </div>
  );
}

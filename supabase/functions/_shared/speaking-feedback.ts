const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === 'object' && v !== null && !Array.isArray(v);
import type { SpeechMetrics } from './speech-metrics.ts';

const str = (v: unknown, max = 600) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const strings = (v: unknown, max: number, len = 400) => (Array.isArray(v) ? v.map((x) => str(x, len)).filter(Boolean).slice(0, max) : []);

/** Keeps only well-formed extra sections of the model's answer; anything malformed is dropped rather than shown. */
export function cleanSpeakingExtras(fb: Record<string, unknown>, metrics: SpeechMetrics) {
  for (const key of ['fluencyCoherence', 'lexicalResource', 'grammaticalRange', 'pronunciation']) {
    const c = fb[key] as Record<string, unknown>;
    c.evidence = strings(c.evidence, 4, 240);
    c.toNextBand = strings(c.toNextBand, 4, 300);
  }
  fb.summaryUz = str(fb.summaryUz, 700);
  fb.nextStepsUz = strings(fb.nextStepsUz, 4, 300);
  fb.partFeedback = str(fb.partFeedback, 900);
  fb.upgradedPhrases = (Array.isArray(fb.upgradedPhrases) ? fb.upgradedPhrases : []).filter(isRecord)
    .map((p) => ({ said: str(p.said, 160), better: str(p.better, 200), why: str(p.why, 240) })).filter((p) => p.said && p.better).slice(0, 6);
  const g = isRecord(fb.grammarProfile) ? fb.grammarProfile : {};
  fb.grammarProfile = { used: strings(g.used, 6, 120), missing: strings(g.missing, 5, 120), errorPatterns: strings(g.errorPatterns, 5, 200) };
  fb.pronunciationFocus = (Array.isArray(fb.pronunciationFocus) ? fb.pronunciationFocus : []).filter(isRecord)
    .map((p) => ({ word: str(p.word, 40), tip: str(p.tip, 260) })).filter((p) => p.word && p.tip).slice(0, 5);
  const plan = isRecord(fb.bandUpPlan) ? fb.bandUpPlan : {};
  const target = Number(plan.targetBand);
  fb.bandUpPlan = { targetBand: Number.isFinite(target) && target >= 1 && target <= 9 ? Math.round(target * 2) / 2 : null, steps: strings(plan.steps, 5, 300) };
  // The measurable numbers always come from code. The model only adds the comment about topic development.
  const notes = isRecord(fb.fluencyNotes) ? fb.fluencyNotes : {};
  fb.fluencyNotes = {
    fillerWords: metrics.fillers.map((f) => f.word),
    fillerCount: metrics.fillerCount,
    averageSentenceLength: metrics.averageSentenceLength,
    topicDevelopment: str(notes.topicDevelopment, 700),
  };
  fb.metrics = metrics;
  return fb;
}

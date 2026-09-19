import { isRecord } from './http.ts';

const band = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value) && value >= 0 && value <= 9;

/** Reject incomplete model output before charging quota or rendering a result. */
export function validGrade(value: unknown, kind: 'writing' | 'speaking'): value is Record<string, unknown> & { overallBand: number } {
  if (!isRecord(value) || !band(value.overallBand)) return false;
  const criteria = kind === 'writing'
    ? ['taskAchievement', 'coherenceCohesion', 'lexicalResource', 'grammaticalRange']
    : ['fluencyCoherence', 'lexicalResource', 'grammaticalRange', 'pronunciation'];
  const criteriaValid = criteria.every(key => {
    const criterion = value[key];
    return isRecord(criterion) && band(criterion.score) && typeof criterion.feedback === 'string' && criterion.feedback.trim().length >= 40;
  });
  const corrections = value.errorCorrections;
  const correctionsValid = Array.isArray(corrections) && corrections.length >= 3 && corrections.every(item =>
    isRecord(item) && typeof item.original === 'string' && item.original.trim().length > 0 &&
    typeof item.corrected === 'string' && item.corrected.trim().length > 0 &&
    typeof item.explanation === 'string' && item.explanation.trim().length > 10 &&
    (item.type === 'error' || item.type === 'improvement'));
  return criteriaValid && correctionsValid && ['strengths', 'suggestions'].every(key =>
    Array.isArray(value[key]) && value[key].length >= 3 && value[key].every(item => typeof item === 'string'));
}

/** Recompute the displayed band from the four criterion scores so the model cannot inflate it independently. */
export function calibratedOverall(value: Record<string, unknown>, kind: 'writing'|'speaking') {
  const keys = kind === 'writing'
    ? ['taskAchievement','coherenceCohesion','lexicalResource','grammaticalRange']
    : ['fluencyCoherence','lexicalResource','grammaticalRange','pronunciation'];
  const scores = keys.map(key => Number((value[key] as Record<string,unknown>)?.score));
  return Math.round((scores.reduce((sum,score)=>sum+score,0)/scores.length)*2)/2;
}

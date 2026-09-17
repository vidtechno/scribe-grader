import { isRecord } from './http.ts';

const band = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value) && value >= 0 && value <= 9;

/** Reject incomplete model output before charging quota or rendering a result. */
export function validGrade(value: unknown, kind: 'writing' | 'speaking'): value is Record<string, unknown> & { overallBand: number } {
  if (!isRecord(value) || !band(value.overallBand)) return false;
  const criteria = kind === 'writing'
    ? ['taskAchievement', 'coherenceCohesion', 'lexicalResource', 'grammaticalRange']
    : ['fluencyCoherence', 'lexicalResource', 'grammaticalRange', 'pronunciation'];
  return criteria.every(key => {
    const criterion = value[key];
    return isRecord(criterion) && band(criterion.score) && typeof criterion.feedback === 'string';
  }) && ['strengths', 'suggestions'].every(key => Array.isArray(value[key]) && value[key].every(item => typeof item === 'string'));
}

import assert from 'node:assert/strict';
import { validGrade } from './grading.ts';

Deno.test('grading rejects incomplete responses that would crash result pages', () => {
  assert.equal(validGrade({ overallBand: 7 }, 'writing'), false);
  const criterion = { score: 7, feedback: 'Clear response' };
  const result = { overallBand: 7, taskAchievement: criterion, coherenceCohesion: criterion, lexicalResource: criterion, grammaticalRange: criterion, strengths: ['Clear'], suggestions: ['Develop examples'] };
  assert.equal(validGrade(result, 'writing'), true);
  assert.equal(validGrade({ ...result, strengths: [null] }, 'writing'), false);
  assert.equal(validGrade({ ...result, lexicalResource: { score: 12, feedback: '' } }, 'writing'), false);
  assert.equal(validGrade(result, 'speaking'), false);
});

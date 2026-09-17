import { describe, expect, it } from 'vitest';
import { difficultyFor, gradeAnswers, publicTest, validQuestions, type GrammarQuestion, type GrammarTestRow } from '../../supabase/functions/_shared/grammar';

const questions: GrammarQuestion[] = Array.from({ length: 10 }, (_, index) => ({
  prompt: `Choose the correct sentence for item ${index + 1}.`,
  options: ['He go to school.', 'He goes to school.', 'He going school.', 'He gone school.'],
  correctAnswer: 1,
  explanation: 'Third person singular uses -s in the present simple.',
  skill: 'subject-verb agreement',
}));
const row: GrammarTestRow = {
  id: 'test', user_id: 'user', test_date: '2026-09-18', source_summary: 'From one essay',
  source_essay_ids: [], source_essays: [], difficulty: 'intermediate',
  questions, answers: {}, score: null, completed_at: null, created_at: '2026-09-18T00:00:00Z',
};

describe('daily grammar test safety', () => {
  it('never reveals answer keys before completion', () => {
    const response = publicTest(row);
    expect(response.questions[0]).toEqual({ prompt: questions[0].prompt, options: questions[0].options, skill: questions[0].skill });
    expect(response.answers).toBeUndefined();
  });
  it('reveals explanations only after server-side grading', () => {
    const score = gradeAnswers(questions, Array(10).fill(1));
    expect(score).toBe(10);
    const response = publicTest({ ...row, score, answers: { '0': 1 }, completed_at: '2026-09-18T00:05:00Z' });
    expect(response.questions[0]).toHaveProperty('correctAnswer', 1);
    expect(response.answers).toEqual({ '0': 1 });
  });
  it('rejects incomplete AI output and adapts difficulty to grammar scores', () => {
    expect(validQuestions({ questions: questions.slice(0, 9) })).toBe(false);
    expect(validQuestions({ questions })).toBe(true);
    expect(difficultyFor([4.5, 5])).toBe('elementary');
    expect(difficultyFor([7, 7.5])).toBe('advanced');
  });
});

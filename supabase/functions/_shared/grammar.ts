export type GrammarQuestion = { prompt: string; options: string[]; correctAnswer: number; explanation: string; skill: string };
export type GrammarTestRow = {
  id: string; user_id: string; test_date: string; source_summary: string;
  source_essay_ids: string[]; source_essays: Array<{ id: string; task_type: string; topic: string; score: number }>;
  difficulty: string; questions: GrammarQuestion[]; answers: Record<string, number>;
  selected_indices: number[]; started_at: string | null;
  score: number | null; completed_at: string | null; created_at: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

export function validQuestions(value: unknown): value is { questions: GrammarQuestion[] } {
  if (!isRecord(value) || !Array.isArray(value.questions) || value.questions.length !== 20) return false;
  return value.questions.every((q) => isRecord(q) && typeof q.prompt === 'string' && q.prompt.length >= 10 && q.prompt.length <= 500 &&
    typeof q.explanation === 'string' && q.explanation.length >= 5 && q.explanation.length <= 600 &&
    typeof q.skill === 'string' && q.skill.length >= 2 && q.skill.length <= 80 &&
    Array.isArray(q.options) && q.options.length === 4 &&
    q.options.every((option) => typeof option === 'string' && option.trim().length > 0 && option.length <= 240) &&
    new Set(q.options.map((option: string) => option.trim().toLowerCase())).size === 4 &&
    Number.isInteger(q.correctAnswer) && Number(q.correctAnswer) >= 0 && Number(q.correctAnswer) < 4);
}

export function normalizeBatch(value: unknown): GrammarQuestion[] {
  if (!isRecord(value) || !Array.isArray(value.questions)) return [];
  const result: GrammarQuestion[] = [];
  for (const raw of value.questions) {
    if (!isRecord(raw) || typeof raw.prompt !== 'string' || !Array.isArray(raw.options)) continue;
    const prompt = raw.prompt.trim();
    const options = raw.options.map((option) => typeof option === 'string' ? option.trim() : '');
    const answer = typeof raw.correctAnswer === 'string' && /^[A-D]$/i.test(raw.correctAnswer)
      ? raw.correctAnswer.toUpperCase().charCodeAt(0) - 65
      : typeof raw.correctAnswer === 'number' ? raw.correctAnswer : Number.NaN;
    if (prompt.length < 10 || prompt.length > 500 || options.length !== 4 ||
        options.some((option) => !option || option.length > 240) ||
        new Set(options.map((option) => option.toLowerCase())).size !== 4 ||
        !Number.isInteger(answer) || answer < 0 || answer > 3) continue;
    const explanation = typeof raw.explanation === 'string' && raw.explanation.trim().length >= 5
      ? raw.explanation.trim().slice(0, 600) : 'Review the grammar rule used in the correct option.';
    const skill = typeof raw.skill === 'string' && raw.skill.trim().length >= 2
      ? raw.skill.trim().slice(0, 80) : 'Grammar';
    result.push({ prompt, options, correctAnswer: answer, explanation, skill });
  }
  return result;
}

export function buildQuestionPool(batches: unknown[], fallback: GrammarQuestion[]) {
  const questions: GrammarQuestion[] = [];
  const seen = new Set<string>();
  const add = (question: GrammarQuestion) => {
    const key = question.prompt.toLowerCase().replace(/\s+/g, ' ').trim();
    if (questions.length < 20 && !seen.has(key)) { seen.add(key); questions.push(question); }
  };
  batches.flatMap(normalizeBatch).forEach(add);
  const aiCount = questions.length;
  fallback.forEach(add);
  return { questions, fallbackCount: questions.length - aiCount };
}

export function publicTest(row: GrammarTestRow) {
  const complete = Boolean(row.completed_at);
  const selected = row.selected_indices?.length === 10 ? row.selected_indices : [];
  const questions = selected.map((index) => row.questions[index]).filter(Boolean);
  return {
    id: row.id, test_date: row.test_date, source_summary: row.source_summary,
    source_essays: row.source_essays ?? [], difficulty: row.difficulty,
    pool_size: row.questions.length, started: selected.length === 10,
    questions: complete ? questions : questions.map(({ prompt, options, skill }) => ({ prompt, options, skill })),
    answers: complete ? row.answers : undefined, score: row.score, completed_at: row.completed_at,
  };
}

export function randomTenIndices(poolSize = 20): number[] {
  if (poolSize < 10) throw new Error('At least ten questions are required');
  const indices = Array.from({ length: poolSize }, (_, index) => index);
  for (let i = indices.length - 1; i > 0; i--) {
    const random = new Uint32Array(1);
    crypto.getRandomValues(random);
    const j = random[0] % (i + 1);
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices.slice(0, 10);
}

export function difficultyFor(scores: number[]) {
  if (!scores.length) return 'intermediate';
  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  return average >= 7 ? 'advanced' : average >= 6 ? 'upper-intermediate' : average >= 5 ? 'intermediate' : 'elementary';
}

export function gradeAnswers(questions: GrammarQuestion[], selected: number[]) {
  return questions.reduce((sum, question, index) => sum + Number(question.correctAnswer === selected[index]), 0);
}

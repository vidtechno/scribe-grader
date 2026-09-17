import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getRequestUser, serviceClient } from "../_shared/quota.ts";
import { boundedString, isRecord, json, preflight } from "../_shared/http.ts";

const systemPrompt = `You create concise IELTS grammar practice tests from a student's recent essays. Return ONLY JSON with this shape:
{"difficulty":"elementary|intermediate|upper-intermediate|advanced","sourceSummary":"short user-facing summary","questions":[{"prompt":"question","options":["A","B","C","D"],"correctAnswer":0,"explanation":"short explanation","skill":"articles|tenses|prepositions|agreement|conditionals|sentence structure"}]}
Create exactly 10 questions. Each must have exactly four options and correctAnswer must be a zero-based integer. Use errors and patterns in the essays. If there are too few errors, create useful questions about the student's likely level. Make harder questions when writing scores are high and simpler ones when scores are low. Never include unsafe or unrelated content.`;

function validTest(value: unknown): value is { difficulty: string; sourceSummary: string; questions: Array<Record<string, unknown>> } {
  if (!isRecord(value) || !boundedString(value.sourceSummary, 500, 10) || !Array.isArray(value.questions) || value.questions.length !== 10) return false;
  if (!['elementary','intermediate','upper-intermediate','advanced'].includes(String(value.difficulty))) return false;
  return value.questions.every((q) => isRecord(q) && boundedString(q.prompt, 500, 10) && boundedString(q.explanation, 600, 10) && Array.isArray(q.options) && q.options.length === 4 && q.options.every((x) => boundedString(x, 240, 1)) && Number.isInteger(q.correctAnswer) && Number(q.correctAnswer) >= 0 && Number(q.correctAnswer) < 4);
}

serve(async (req) => {
  const early = preflight(req);
  if (early) return early;
  try {
    const admin = serviceClient();
    const user = await getRequestUser(req, admin);
    if (!user) return json(req, { error: 'Unauthorized' }, 401);
    const body: unknown = await req.json().catch(() => ({}));
    const requestedDate = isRecord(body) && boundedString(body.date, 10, 10) ? body.date : new Date().toISOString().slice(0, 10);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(requestedDate)) return json(req, { error: 'Invalid date' }, 400);

    const { data: cached, error: cacheError } = await admin.from('grammar_tests').select('id,test_date,source_essay_ids,source_summary,difficulty,questions,answers,score,completed_at,created_at').eq('user_id', user.id).eq('test_date', requestedDate).maybeSingle();
    if (cacheError) { console.error('grammar cache lookup failed', cacheError); return json(req, { error: 'Grammar test storage is not ready' }, 503); }
    if (cached) return json(req, { test: cached, cached: true });

    const { data: essays, error: essaysError } = await admin.from('essays').select('id,task_type,topic,essay_text,score,feedback,created_at').eq('user_id', user.id).order('created_at', { ascending: false }).limit(3);
    if (essaysError) return json(req, { error: 'Could not load recent essays' }, 503);
    const recent = essays ?? [];
    const context = recent.map((essay) => JSON.stringify({ id: essay.id, taskType: essay.task_type, topic: essay.topic, score: essay.score, text: String(essay.essay_text).slice(0, 5000), feedback: essay.feedback })).join('\n');
    const average = recent.filter((essay) => typeof essay.score === 'number').reduce((sum, essay) => sum + Number(essay.score), 0) / Math.max(1, recent.filter((essay) => typeof essay.score === 'number').length);
    const difficulty = average >= 7 ? 'advanced' : average >= 6 ? 'upper-intermediate' : average >= 5 ? 'intermediate' : 'elementary';
    const key = Deno.env.get('OPENAI_API_KEY');
    if (!key) return json(req, { error: 'AI service not configured' }, 503);
    const response = await fetch('https://api.openai.com/v1/chat/completions', { method: 'POST', signal: AbortSignal.timeout(45_000), headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ model: 'gpt-4o-mini', temperature: 0.2, response_format: { type: 'json_object' }, messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: `Target difficulty: ${difficulty}. Recent essays (up to three, newest first):\n${context || 'No essays yet. Create a useful beginner diagnostic test.'}` }] }) });
    if (!response.ok) return json(req, { error: 'Failed to generate grammar test' }, response.status === 429 ? 429 : 502);
    const ai = await response.json();
    let generated: unknown;
    try { generated = JSON.parse(ai.choices?.[0]?.message?.content ?? ''); } catch { return json(req, { error: 'Invalid grammar test response' }, 502); }
    if (!validTest(generated)) return json(req, { error: 'Invalid grammar test structure' }, 502);
    const payload = { user_id: user.id, test_date: requestedDate, source_essay_ids: recent.map((essay) => essay.id), source_summary: generated.sourceSummary, difficulty: generated.difficulty, questions: generated.questions, answers: {} };
    const { data: inserted, error: insertError } = await admin.from('grammar_tests').insert(payload).select('id,test_date,source_essay_ids,source_summary,difficulty,questions,answers,score,completed_at,created_at').single();
    if (insertError) {
      // A second tab may have won the race; return the cached test instead of charging another request.
      const { data: raced } = await admin.from('grammar_tests').select('id,test_date,source_essay_ids,source_summary,difficulty,questions,answers,score,completed_at,created_at').eq('user_id', user.id).eq('test_date', requestedDate).maybeSingle();
      if (raced) return json(req, { test: raced, cached: true });
      return json(req, { error: 'Could not save grammar test' }, 503);
    }
    return json(req, { test: inserted, cached: false });
  } catch (error) { console.error('generate-grammar-test error', error); return json(req, { error: 'Unexpected server error' }, 500); }
});

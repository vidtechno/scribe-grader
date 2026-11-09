import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { calibratedOverall, validGrade } from '../_shared/grading.ts';

import { serviceClient, getRequestUser } from "../_shared/quota.ts";
import { isRecord, json, preflight } from "../_shared/http.ts";
import { logTextUsage } from "../_shared/ai-usage.ts";

const systemPrompt = `You are a strict, evidence-based IELTS Writing examiner. Evaluate the response as it is written, using the four official IELTS Writing criteria. Do not reward ambition when control and accuracy are weak. Do not assume intended meaning when the sentence is unclear.

CALIBRATION RULES:
- Score Task Achievement/Response, Coherence and Cohesion, Lexical Resource, and Grammatical Range and Accuracy independently in 0.5 bands.
- Band 7 for Grammatical Range and Accuracy requires frequent error-free sentences and good control of complex structures. Frequent agreement, article, tense, word-form, punctuation, fragment, or run-on errors normally place this criterion at 5.0–6.0.
- Band 7 Lexical Resource requires flexible, precise vocabulary with only occasional inappropriate choices. Repeated awkward collocations or wrong word forms must lower it.
- A memorised-looking introduction, length, or advanced words alone cannot justify Band 7.
- For Task 1, check overview, key-feature selection, comparisons, data accuracy, and the 150-word expectation. For Task 2, check whether every part is answered, the position is clear and developed, ideas are supported, and the 250-word expectation.
- Before choosing scores, silently audit every sentence. Then make each feedback paragraph cite at least two concrete excerpts or patterns from the response.
- The overall band must equal the four-criterion average rounded to the nearest 0.5.

For each essay, you must provide:
1. An overall band score (0-9, can use .5 increments)
2. Individual scores for each criterion (0-9, can use .5 increments):
   - Task Achievement/Response
   - Coherence and Cohesion
   - Lexical Resource
   - Grammatical Range and Accuracy
3. Specific feedback for each criterion
4. 3-5 key strengths of the essay
5. 3-5 specific suggestions for improvement
6. Error corrections: Find ALL grammatical errors, spelling mistakes, incorrect word usage, punctuation problems and awkward phrasing in the essay. Return at least 8 items when the response contains that many issues. If it has fewer than 3 true errors, add specific high-band improvements so the array still has at least 3 items. For every item:
   - Copy the exact original phrase or sentence
   - Provide a natural corrected phrase or full sentence
   - Provide a brief explanation of WHY it's wrong (grammar rule, style issue, etc.)
   - Provide a "type" field: either "error" (for mistakes) or "improvement" (for high-band alternatives/style upgrades)
7. Vocabulary Range Analysis: Identify repeated common/basic words and suggest academic high-band synonyms. For each:
   - "word": the repeated basic word
   - "count": how many times it appears
   - "suggestions": array of 2-3 academic synonyms
8. Coherence Check: Analyze paragraph transitions and linking words usage. For each paragraph transition:
   - "location": e.g. "Between paragraph 1 and 2"
   - "status": "strong", "weak", or "missing"
   - "suggestion": recommended linking phrase if weak/missing
9. Sentence Complexity Map: Categorize each sentence by complexity:
   - "sentence": the sentence text (first 80 chars)
   - "type": "simple", "compound", or "complex"

Be accurate, fair, and constructive in your feedback. Base your scoring strictly on the IELTS band descriptors.

You must respond ONLY with a valid JSON object in this exact format:
{
  "overallBand": number,
  "taskAchievement": { "score": number, "feedback": "string" },
  "coherenceCohesion": { "score": number, "feedback": "string" },
  "lexicalResource": { "score": number, "feedback": "string" },
  "grammaticalRange": { "score": number, "feedback": "string" },
  "strengths": ["string"],
  "suggestions": ["string"],
  "errorCorrections": [
    { "original": "wrong text", "corrected": "corrected text", "explanation": "why", "type": "error or improvement" }
  ],
  "vocabularyAnalysis": [
    { "word": "basic word", "count": number, "suggestions": ["synonym1", "synonym2"] }
  ],
  "coherenceCheck": [
    { "location": "Between paragraph X and Y", "status": "strong/weak/missing", "suggestion": "linking phrase" }
  ],
  "sentenceComplexity": [
    { "sentence": "first 80 chars...", "type": "simple/compound/complex" }
  ]
}`;

serve(async (req) => {
  const early = preflight(req);
  if (early) return early;
  let admin: ReturnType<typeof serviceClient> | null = null;
  let attemptId: string | null = null;
  let userId: string | null = null;
  const token = crypto.randomUUID();
  let claimed = false;
  try {
    admin = serviceClient();
    const user = await getRequestUser(req, admin);
    if (!user) return json(req, { error: 'writing.session' }, 401);
    userId = user.id;
    const body: unknown = await req.json();
    if (!isRecord(body) || typeof body.attemptId !== 'string' ||
        !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(body.attemptId)) {
      return json(req, { error: 'Saved Writing attempt ID required' }, 400);
    }
    attemptId = body.attemptId;
    const key = Deno.env.get('OPENAI_API_KEY');
    if (!key) return json(req, { error: 'writing.aiUnavailable' }, 503);

    // Row lock + quota reservation are one transaction. JWT supplies ownership;
    // text/topic/task always come from the saved snapshot, never the request body.
    const { data: claim, error: claimError } = await admin.rpc('claim_writing_grade', {
      _id: attemptId, _user_id: user.id, _token: token,
    });
    if (claimError) return json(req, { error: 'writing.setup' }, 503);
    if (claim.state === 'missing') return json(req, { error: 'Save the essay before grading' }, 404);
    if (claim.state === 'completed') return json(req, { state: 'completed', essayId: attemptId, result: claim.result });
    if (claim.state === 'grading' || claim.state === 'review_required') {
      return json(req, { state: claim.state, essayId: attemptId }, 202);
    }
    if (claim.state === 'too_short') return json(req, { error: 'writing.tooShort' }, 400);
    if (claim.state === 'quota') return json(req, { error: claim.quota.reason === 'trial_expired' ? 'writing.trialExpired' : 'writing.quota', limitReached: true }, 403);
    if (claim.state !== 'claimed') return json(req, { error: 'Writing attempt is not available for grading' }, 409);
    claimed = true;
    const { essay_text: essay, task_type: taskType, topic } = claim.attempt;
    const wordCount = essay.trim().split(/\s+/).length;
    const model = 'gpt-4o-mini';
    const userPrompt = `Evaluate this IELTS ${taskType} essay using the specified JSON format.
Topic: ${topic}
Word count: ${wordCount}. Expected minimum: ${taskType === 'Task 1' ? 150 : 250}.
Essay:
${essay}
List concrete errors and corrections, vocabulary alternatives, coherence checks and sentence complexity.`;
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST', signal: AbortSignal.timeout(60_000),
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, messages: [
        { role: 'system', content: systemPrompt }, { role: 'user', content: userPrompt },
      ], temperature: 0.3, response_format: { type: 'json_object' } }),
    });
    const finish = async (result: unknown, failure: string | null = null) => {
      // Retrying this transaction cannot consume quota or call OpenAI again.
      for (let i = 0; i < 3; i++) {
        const { error } = await admin!.rpc('finish_writing_grade', {
          _id: attemptId, _user_id: userId, _token: token, _result: result, _failure: failure,
        });
        if (!error) { claimed = false; return; }
      }
      throw new Error('Writing result persistence failed');
    };
    if (!response.ok) {
      // Only definite non-completion rejections release the reservation.
      // A 5xx or network timeout may have run the model: fail closed.
      const retryable = [400, 401, 403, 404, 413, 422, 429].includes(response.status);
      await finish(null, retryable ? 'rejected' : 'ambiguous');
      return json(req, { error: retryable ? 'writing.providerRejected' : 'writing.review' }, response.status === 429 ? 429 : 502);
    }
    const aiResponse = await response.json();
    // Accounting telemetry must not discard an otherwise valid paid response.
    await logTextUsage(admin, user.id, 'writing', model, aiResponse.usage, { taskType, attemptId }).catch(() => undefined);
    const gradeResult = JSON.parse(aiResponse.choices?.[0]?.message?.content || 'null');
    if (!validGrade(gradeResult, 'writing')) throw new Error('Invalid grading result');
    gradeResult.overallBand = calibratedOverall(gradeResult, 'writing');
    for (const field of ['errorCorrections','vocabularyAnalysis','coherenceCheck','sentenceComplexity']) {
      if (!Array.isArray(gradeResult[field])) gradeResult[field] = [];
    }
    gradeResult.modelUsed = 'Scorify AI';
    gradeResult.quota = claim.quota;
    await finish(gradeResult);
    return json(req, { state: 'completed', essayId: attemptId, result: gradeResult });
  } catch {
    // Never log essay content, provider responses or secrets.
    if (claimed && admin && attemptId && userId) {
      await admin.rpc('finish_writing_grade', {
        _id: attemptId, _user_id: userId, _token: token, _result: null, _failure: 'ambiguous',
      });
    }
    return json(req, { error: claimed ? 'writing.review' : 'ex.gradeFailed' }, 503);
  }
});

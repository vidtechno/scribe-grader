import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

import { serviceClient, getRequestUser, consumeQuota, refundQuota, quotaErrorMessage } from "../_shared/quota.ts";
import { boundedString, isRecord, json, preflight } from "../_shared/http.ts";

const systemPrompt = `You are an expert IELTS Writing examiner with years of experience. You will evaluate essays according to the official IELTS Writing band descriptors.

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
6. Error corrections: Find ALL grammatical errors, spelling mistakes, incorrect word usage, and awkward phrasing in the essay. For each error:
   - Provide the original wrong text
   - Provide the corrected version
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
  let quotaUserId: string | null = null;
  let admin: ReturnType<typeof serviceClient> | null = null;

  try {
    admin = serviceClient();
    const user = await getRequestUser(req, admin);
    if (!user) return json(req, { error: 'Unauthorized' }, 401);

    const body: unknown = await req.json();
    if (!isRecord(body) || !boundedString(body.essay, 20_000, 20) ||
        !boundedString(body.topic, 500) ||
        (body.taskType !== 'Task 1' && body.taskType !== 'Task 2')) {
      return json(req, { error: 'Invalid essay, task type or topic' }, 400);
    }
    const { essay, taskType, topic } = body;

    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) return json(req, { error: 'AI service not configured' }, 503);

    const quota = await consumeQuota(admin, user.id, 'writing');
    if (!quota.allowed) {
      return json(req, { error: quotaErrorMessage(quota, 'writing'), limitReached: quota.reason === 'limit_reached', plan: quota.plan }, quota.reason === 'quota_check_failed' ? 503 : 403);
    }
    quotaUserId = user.id;


    // All plans use gpt-4o-mini for speed and cost efficiency
    const model = 'gpt-4o-mini';
    const cost = 0.005;

    const userPrompt = `Please evaluate this IELTS ${taskType} essay.

Topic: ${topic}

Essay:
${essay}

Provide your evaluation as a JSON object following the exact format specified. Make sure to:
- Find and list ALL errors in the errorCorrections array
- Include "improvement" type entries for high-band alternatives
- Analyze vocabulary range and find repeated basic words with academic synonyms
- Check coherence between all paragraphs
- Categorize every sentence by complexity (simple/compound/complex)`;

    console.log(`Calling OpenAI (${model}) for essay grading...`);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      signal: AbortSignal.timeout(60_000),
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.3,
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI error:', response.status, errorText);
      await refundQuota(admin, quotaUserId, 'writing');
      quotaUserId = null;

      if (response.status === 429) {
        return json(req, { error: 'Rate limit exceeded. Please try again later.' }, 429);
      }

      return json(req, { error: 'Failed to get AI response' }, 502);
    }

    const aiResponse = await response.json();
    const content = aiResponse.choices?.[0]?.message?.content;

    if (!content) {
      await refundQuota(admin, quotaUserId, 'writing');
      quotaUserId = null;
      return json(req, { error: 'Invalid AI response' }, 502);
    }

    let gradeResult;
    try {
      gradeResult = JSON.parse(content);
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      await refundQuota(admin, quotaUserId, 'writing');
      quotaUserId = null;
      return json(req, { error: 'Failed to parse grading result' }, 502);
    }

    if (!isRecord(gradeResult) || typeof gradeResult.overallBand !== 'number' ||
        !Number.isFinite(gradeResult.overallBand) || gradeResult.overallBand < 0 ||
        gradeResult.overallBand > 9 || !isRecord(gradeResult.taskAchievement)) {
      await refundQuota(admin, quotaUserId, 'writing');
      quotaUserId = null;
      return json(req, { error: 'Invalid grading result structure' }, 502);
    }

    // Ensure arrays exist
    if (!Array.isArray(gradeResult.errorCorrections)) gradeResult.errorCorrections = [];
    if (!Array.isArray(gradeResult.vocabularyAnalysis)) gradeResult.vocabularyAnalysis = [];
    if (!Array.isArray(gradeResult.coherenceCheck)) gradeResult.coherenceCheck = [];
    if (!Array.isArray(gradeResult.sentenceComplexity)) gradeResult.sentenceComplexity = [];

    // Log API usage
    const { error: logError } = await admin.from('api_logs').insert({
      user_id: user.id, model_used: model, cost,
    });
    if (logError) console.error('Failed to log API usage:', logError.message);

    gradeResult.modelUsed = 'Scorify AI';
    gradeResult.quota = { used: quota.used, limit: quota.limit, plan: quota.plan };

    console.log('Essay graded successfully:', gradeResult.overallBand);

    quotaUserId = null;
    return json(req, gradeResult);
  } catch (error) {
    console.error('Grade essay error:', error);
    if (quotaUserId && admin) await refundQuota(admin, quotaUserId, 'writing');
    return json(req, { error: 'Essay grading failed' }, 500);

  }
});

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { calibratedOverall, validGrade } from '../_shared/grading.ts';

import { serviceClient, getRequestUser, consumeQuota, refundQuota, quotaErrorMessage } from "../_shared/quota.ts";
import { boundedString, isRecord, json, preflight } from "../_shared/http.ts";
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
    const wordCount = essay.trim().split(/\s+/).length;

    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) return json(req, { error: 'AI service not configured' }, 503);

    const quota = await consumeQuota(admin, user.id, 'writing');
    if (!quota.allowed) {
      return json(req, { error: quotaErrorMessage(quota, 'writing'), limitReached: quota.reason === 'limit_reached', plan: quota.plan }, quota.reason === 'quota_check_failed' ? 503 : 403);
    }
    quotaUserId = user.id;


    const model = 'gpt-4o';

    const userPrompt = `Please evaluate this IELTS ${taskType} essay.

Topic: ${topic}
Submitted word count: ${wordCount} (expected minimum: ${taskType==='Task 1'?150:250})

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

    if (!validGrade(gradeResult, 'writing')) {
      await refundQuota(admin, quotaUserId, 'writing');
      quotaUserId = null;
      return json(req, { error: 'Invalid grading result structure' }, 502);
    }

    gradeResult.overallBand = calibratedOverall(gradeResult,'writing');

    // Ensure arrays exist
    if (!Array.isArray(gradeResult.errorCorrections)) gradeResult.errorCorrections = [];
    if (!Array.isArray(gradeResult.vocabularyAnalysis)) gradeResult.vocabularyAnalysis = [];
    if (!Array.isArray(gradeResult.coherenceCheck)) gradeResult.coherenceCheck = [];
    if (!Array.isArray(gradeResult.sentenceComplexity)) gradeResult.sentenceComplexity = [];

    await logTextUsage(admin,user.id,'writing',model,aiResponse.usage,{ taskType });

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

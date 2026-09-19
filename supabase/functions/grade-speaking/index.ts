import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { validGrade } from '../_shared/grading.ts';
import { serviceClient, getRequestUser, consumeQuota, refundQuota, quotaErrorMessage } from "../_shared/quota.ts";
import { boundedString, isRecord, json, preflight } from "../_shared/http.ts";
import { logTextUsage } from "../_shared/ai-usage.ts";

const SPEAKING_SYSTEM_PROMPT = `You are an expert IELTS Speaking examiner. You will receive a transcript of a candidate's spoken response to an IELTS Speaking topic.

Evaluate the response based on the four official IELTS Speaking criteria and return a JSON object with this EXACT structure:

{
  "overallBand": <number 1-9, can use 0.5 increments>,
  "fluencyCoherence": { "score": <number 1-9>, "feedback": "<detailed feedback>" },
  "lexicalResource": { "score": <number 1-9>, "feedback": "<detailed feedback>" },
  "grammaticalRange": { "score": <number 1-9>, "feedback": "<detailed feedback>" },
  "pronunciation": { "score": <number 1-9>, "feedback": "<detailed feedback>" },
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "suggestions": ["<suggestion 1>", "<suggestion 2>", "<suggestion 3>"],
  "errorCorrections": [
    { "original": "<what they said>", "corrected": "<correct version>", "explanation": "<why>", "type": "error" }
  ],
  "vocabularyHighlights": [
    { "word": "<good word used>", "context": "<how it was used>", "rating": "good" | "excellent" | "could_improve" }
  ],
  "fluencyNotes": {
    "fillerWords": ["um", "uh"],
    "fillerCount": <number>,
    "averageSentenceLength": <number>,
    "topicDevelopment": "<comment on how well they developed the topic>"
  },
  "sampleAnswer": "<a short model answer paragraph showing how to improve>"
}

Be strict but fair. Base scores on IELTS band descriptors. The transcript may contain transcription errors - evaluate the content and language, not transcription accuracy.`;

serve(async (req) => {
  const early = preflight(req);
  if (early) return early;
  let quotaUserId: string | null = null;
  let admin: ReturnType<typeof serviceClient> | null = null;

  try {
    admin = serviceClient();
    const user = await getRequestUser(req, admin);
    if (!user) return json(req, { error: "Unauthorized" }, 401);

    const body: unknown = await req.json();
    if (!isRecord(body) || !boundedString(body.transcript, 20_000, 10) ||
        !boundedString(body.topic, 500) ||
        (body.part !== undefined && !boundedString(body.part, 80))) {
      return json(req, { error: "Invalid transcript, topic or part" }, 400);
    }
    const { transcript, topic, part } = body;

    const openaiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openaiKey) return json(req, { error: "AI service not configured" }, 503);

    const quota = await consumeQuota(admin, user.id, "speaking");
    if (!quota.allowed) {
      return json(req, { error: quotaErrorMessage(quota, "speaking"), limitReached: quota.reason === "limit_reached", plan: quota.plan }, quota.reason === "quota_check_failed" ? 503 : 403);
    }
    quotaUserId = user.id;

    const userPrompt = `IELTS Speaking ${part || 'Part 2'} Topic: "${topic}"

Candidate's transcript:
"""
${transcript}
"""

Please evaluate this speaking response according to IELTS Speaking band descriptors. Return ONLY the JSON object.`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      signal: AbortSignal.timeout(60_000),
      headers: {
        Authorization: `Bearer ${openaiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SPEAKING_SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.3,
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("OpenAI error:", errText);
      await refundQuota(admin, quotaUserId, "speaking");
      quotaUserId = null;
      return json(req, { error: "AI service error" }, response.status === 429 ? 429 : 502);
    }

    const aiData = await response.json();
    const feedback: unknown = JSON.parse(aiData.choices?.[0]?.message?.content ?? "null");
    if (!validGrade(feedback, 'speaking')) {
      throw new Error("Invalid AI grading response");
    }

    // Ensure arrays exist
    feedback.strengths = Array.isArray(feedback.strengths) ? feedback.strengths : [];
    feedback.suggestions = Array.isArray(feedback.suggestions) ? feedback.suggestions : [];
    feedback.errorCorrections = Array.isArray(feedback.errorCorrections) ? feedback.errorCorrections : [];
    feedback.vocabularyHighlights = Array.isArray(feedback.vocabularyHighlights) ? feedback.vocabularyHighlights : [];
    feedback.quota = { used: quota.used, limit: quota.limit, plan: quota.plan };

    await logTextUsage(admin,user.id,'speaking','gpt-4o-mini',aiData.usage,{ part:part ?? 'Part 2' });

    quotaUserId = null;
    return json(req, feedback);
  } catch (e) {
    console.error("grade-speaking error:", e);
    if (quotaUserId && admin) await refundQuota(admin, quotaUserId, "speaking");
    return json(req, { error: "Speaking grading failed" }, 500);
  }
});

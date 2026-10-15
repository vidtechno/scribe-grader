import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { calibratedOverall, validGrade } from '../_shared/grading.ts';
import { serviceClient, getRequestUser, consumeQuota, refundQuota, quotaErrorMessage } from "../_shared/quota.ts";
import { boundedString, isRecord, json, preflight } from "../_shared/http.ts";
import { logTextUsage } from "../_shared/ai-usage.ts";
import { speechMetrics } from "../_shared/speech-metrics.ts";
import { cleanSpeakingExtras } from "../_shared/speaking-feedback.ts";

const SPEAKING_SYSTEM_PROMPT = `You are a strict, evidence-based IELTS Speaking examiner who coaches Uzbek-speaking candidates. You receive a transcript, the recording duration, transcription-quality signals and MEASURED FACTS computed by software (word count, speed, fillers, connectors, repeated words). Trust the measured facts; never contradict them.

SCORING (0.5 steps, each criterion independently; the overall band is their average):
Fluency and Coherence: 4 = frequent breaks, simple links, repetition; 5 = keeps going but with hesitation, over-uses basic connectors (and/but/so/because), limited development; 6 = willing to go on at length, some hesitation and repetition, uses a range of connectors with mixed accuracy; 7 = speaks at length without noticeable effort, some hesitation, a range of discourse markers used flexibly, ideas developed and relevant; 8-9 = fluent, hesitation only for content, fully coherent and developed.
Lexical Resource: 4 = basic, repeated words; 5 = manages familiar topics, limited flexibility, attempts paraphrase with mixed success; 6 = wide enough vocabulary to discuss topics at length, some imprecision, paraphrase generally works; 7 = flexible, some less common and idiomatic items with awareness of style and collocation, some inappropriate choices; 8-9 = precise and natural.
Grammatical Range and Accuracy: 4 = basic forms, many errors; 5 = basic forms mostly correct, limited complex structures, frequent errors in them; 6 = mix of simple and complex forms, errors that rarely hinder understanding; 7 = range of complex structures with some flexibility, frequent error-free sentences, some persistent errors; 8-9 = wide range, almost all error-free.
Pronunciation: you only have TEXT. Never claim to hear sounds. Give a conservative estimate from transcription confidence and intelligibility signals (low confidence, unclear fragments), say this limit in its feedback, and stay within one band of the other scores unless the evidence is clear.
RULES:
- Short or underdeveloped answers cannot exceed band 6 for Fluency. Repeated basic errors keep Grammar at 5.0-6.0. Memorised or off-topic material is penalised.
- Judge relevance and development against the task (the topic and the part). Part 1: short natural answers with reasons/examples. Part 2: sustained talk of about 1-2 minutes covering the cue-card points, with structure. Part 3: abstract discussion with opinions, reasons, comparison, speculation.
- Every criterion's feedback must cite concrete wording from the transcript or the measured facts. Do not invent pauses or sounds.
- The transcript may contain transcription errors; evaluate language, not transcription accuracy. Whisper often removes um/uh, so the filler count is a minimum.
- Corrections: at least 3 real errors with exact wording (type "error"); if fewer true errors exist, use "improvement" items.
- All explanations are in clear simple English EXCEPT summaryUz and nextStepsUz, which are in Uzbek (Latin script).

Return ONLY a JSON object with this EXACT structure:
{
  "overallBand": <number, average of the four criteria rounded to .5>,
  "fluencyCoherence": { "score": <1-9>, "feedback": "<3-4 sentences citing evidence>", "evidence": ["<short quote or measured fact>"], "toNextBand": ["<one concrete action to gain half a band>"] },
  "lexicalResource": { "score": <1-9>, "feedback": "...", "evidence": [...], "toNextBand": [...] },
  "grammaticalRange": { "score": <1-9>, "feedback": "...", "evidence": [...], "toNextBand": [...] },
  "pronunciation": { "score": <1-9>, "feedback": "... (state that this is estimated from text)", "evidence": [...], "toNextBand": [...] },
  "summaryUz": "<2-3 sentences in Uzbek: what level this is, the biggest strength and the single most important thing to fix>",
  "strengths": ["<3 specific strengths>"],
  "suggestions": ["<3 specific, actionable suggestions>"],
  "errorCorrections": [ { "original": "<exact words said>", "corrected": "<correct version>", "explanation": "<why>", "type": "error" | "improvement" } ],
  "upgradedPhrases": [ { "said": "<basic phrase the candidate used>", "better": "<natural band 7+ alternative>", "why": "<when/how to use it>" } ],
  "vocabularyHighlights": [ { "word": "<word or collocation used>", "context": "<how it was used>", "rating": "good" | "excellent" | "could_improve" } ],
  "grammarProfile": { "used": ["<structures the candidate used, e.g. first conditional, present perfect, relative clause>"], "missing": ["<structures a band 7 answer would show>"], "errorPatterns": ["<recurring error types, e.g. missing articles>"] },
  "fluencyNotes": { "topicDevelopment": "<how well they developed and organised the answer, and relevance to the task>" },
  "partFeedback": "<2-3 sentences specific to this part: Part 1 answer extension; Part 2 coverage of cue-card points and structure; Part 3 depth of opinion and justification>",
  "pronunciationFocus": [ { "word": "<word from the transcript likely to be hard for Uzbek speakers, e.g. with th, w/v, long vowels, word stress>", "tip": "<how to say it>" } ],
  "bandUpPlan": { "targetBand": <next realistic band>, "steps": ["<3-5 ordered practice steps for the next week>"] },
  "nextStepsUz": ["<3 short practice tips in Uzbek>"],
  "sampleAnswer": "<a model answer for the SAME task at about band 7.5, 90-150 words, natural spoken style>"
}`;

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
        (body.part !== undefined && !boundedString(body.part, 80)) ||
        (body.durationSeconds !== undefined && (typeof body.durationSeconds !== 'number' || body.durationSeconds < 1 || body.durationSeconds > 900))) {
      return json(req, { error: "Invalid transcript, topic or part" }, 400);
    }
    const { transcript, topic, part } = body;
    const durationSeconds = typeof body.durationSeconds === 'number' ? body.durationSeconds : null;
    const transcription = isRecord(body.transcription) ? body.transcription : {};
    const metrics = speechMetrics(transcript, durationSeconds);

    const openaiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openaiKey) return json(req, { error: "AI service not configured" }, 503);

    const quota = await consumeQuota(admin, user.id, "speaking");
    if (!quota.allowed) {
      return json(req, { error: quotaErrorMessage(quota, "speaking"), limitReached: quota.reason === "limit_reached", plan: quota.plan }, quota.reason === "quota_check_failed" ? 503 : 403);
    }
    quotaUserId = user.id;

    const confidence = typeof transcription.averageLogprob === 'number' ? transcription.averageLogprob : 'unknown';
    const noSpeech = typeof transcription.noSpeechProbability === 'number' ? transcription.noSpeechProbability : 'unknown';
    const userPrompt = `IELTS Speaking ${part || 'Part 2'}
Task / topic: "${topic}"

Candidate's transcript:
"""
${transcript}
"""

MEASURED FACTS (computed by software, exact):
- ${metrics.words} words, ${metrics.uniqueWords} different words (lexical diversity ${metrics.lexicalDiversity}), ${Math.round(metrics.longWordShare * 100)}% words of 8+ letters
- duration ${durationSeconds ?? 'unknown'} s, speed ${metrics.wordsPerMinute ?? 'unknown'} words per minute (natural speech is about 120-160)
- ${metrics.sentences} sentences, average ${metrics.averageSentenceLength} words, longest ${metrics.longestSentence} words
- filler words found: ${metrics.fillers.length ? metrics.fillers.map((f) => `${f.word} x${f.count}`).join(', ') : 'none'} (Whisper usually drops um/uh, so this is a minimum)
- repeated content words: ${metrics.repeatedWords.length ? metrics.repeatedWords.map((w) => `${w.word} x${w.count}`).join(', ') : 'none'}
- linking words beyond and/but/so/because: ${metrics.connectors.length ? metrics.connectors.join(', ') : 'none'}; basic connectors used ${metrics.basicConnectorCount} times
- contractions: ${metrics.contractions}
- transcription confidence (avg log-prob) ${confidence}; no-speech probability ${noSpeech}

Evaluate according to the IELTS Speaking band descriptors. Return ONLY the JSON object.`;

    // The stronger model gives much better coaching; if it is unavailable the cheaper one still grades.
    let aiData: { choices?: { message?: { content?: string } }[]; usage?: Record<string, number> } | null = null;
    let usedModel = '';
    let lastStatus = 502;
    for (const model of ['gpt-4o', 'gpt-4o-mini']) {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        signal: AbortSignal.timeout(75_000),
        headers: { Authorization: `Bearer ${openaiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          model,
          messages: [{ role: "system", content: SPEAKING_SYSTEM_PROMPT }, { role: "user", content: userPrompt }],
          temperature: 0.3,
          max_tokens: 3200,
          response_format: { type: "json_object" },
        }),
      }).catch((e) => { console.error(`OpenAI ${model} request failed:`, e); return null; });
      if (response?.ok) { aiData = await response.json(); usedModel = model; break; }
      if (response) { console.error(`OpenAI ${model} error:`, await response.text()); lastStatus = response.status; }
      if (response?.status === 429 || response?.status === 401) break; // the other model would fail the same way
    }
    if (!aiData) {
      await refundQuota(admin, quotaUserId, "speaking");
      quotaUserId = null;
      return json(req, { error: "AI service error" }, lastStatus === 429 ? 429 : 502);
    }

    const feedback: unknown = JSON.parse(aiData.choices?.[0]?.message?.content ?? "null");
    if (!validGrade(feedback, 'speaking')) {
      throw new Error("Invalid AI grading response");
    }
    feedback.overallBand = calibratedOverall(feedback,'speaking');

    // Ensure arrays exist
    feedback.strengths = Array.isArray(feedback.strengths) ? feedback.strengths : [];
    feedback.suggestions = Array.isArray(feedback.suggestions) ? feedback.suggestions : [];
    feedback.errorCorrections = Array.isArray(feedback.errorCorrections) ? feedback.errorCorrections : [];
    feedback.vocabularyHighlights = Array.isArray(feedback.vocabularyHighlights) ? feedback.vocabularyHighlights : [];
    cleanSpeakingExtras(feedback, metrics);
    feedback.quota = { used: quota.used, limit: quota.limit, plan: quota.plan };

    await logTextUsage(admin,user.id,'speaking',usedModel,aiData.usage,{ part:part ?? 'Part 2' });

    quotaUserId = null;
    return json(req, feedback);
  } catch (e) {
    console.error("grade-speaking error:", e);
    if (quotaUserId && admin) await refundQuota(admin, quotaUserId, "speaking");
    return json(req, { error: "Speaking grading failed" }, 500);
  }
});

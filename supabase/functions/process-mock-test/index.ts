import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { consumeQuota, getRequestUser, quotaErrorMessage, refundQuota, serviceClient } from "../_shared/quota.ts";
import { boundedString, corsHeaders as responseHeaders, isRecord, json, preflight } from "../_shared/http.ts";

const WRITING_SYSTEM = `You are an expert IELTS Writing examiner. Return ONLY a JSON object with:
{
  "overallBand": number,
  "taskAchievement": { "score": number, "feedback": "string" },
  "coherenceCohesion": { "score": number, "feedback": "string" },
  "lexicalResource": { "score": number, "feedback": "string" },
  "grammaticalRange": { "score": number, "feedback": "string" },
  "strengths": ["string"],
  "suggestions": ["string"],
  "errorCorrections": [{ "original": "string", "corrected": "string", "explanation": "string", "type": "error|improvement" }],
  "vocabularyAnalysis": [{ "word": "string", "count": number, "suggestions": ["string"] }]
}`;

const SPEAKING_SYSTEM = `You are an expert IELTS Speaking examiner. Return ONLY JSON:
{
  "overallBand": number,
  "fluencyCoherence": { "score": number, "feedback": "string" },
  "lexicalResource": { "score": number, "feedback": "string" },
  "grammaticalRange": { "score": number, "feedback": "string" },
  "pronunciation": { "score": number, "feedback": "string" },
  "strengths": ["string"],
  "suggestions": ["string"],
  "errorCorrections": [{ "original": "string", "corrected": "string", "explanation": "string", "type": "error" }]
}`;

type GradeResult = Record<string, unknown> & {
  overallBand: number;
  errorCorrections?: unknown[];
  vocabularyAnalysis?: unknown[];
};

async function callOpenAI(system: string, user: string, key: string): Promise<GradeResult> {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    signal: AbortSignal.timeout(60_000),
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: system }, { role: "user", content: user }],
      temperature: 0.3,
      response_format: { type: "json_object" },
    }),
  });
  if (!res.ok) throw new Error(`OpenAI grading failed: ${res.status}`);
  const data = await res.json();
  const result: unknown = JSON.parse(data.choices?.[0]?.message?.content ?? "null");
  if (!isRecord(result) || typeof result.overallBand !== "number" ||
      !Number.isFinite(result.overallBand) || result.overallBand < 0 || result.overallBand > 9) {
    throw new Error("Invalid AI grading result");
  }
  return result as GradeResult;
}

async function downloadAudio(supabase: ReturnType<typeof serviceClient>, path: string): Promise<Blob> {
  const { data, error } = await supabase.storage.from("speaking-audio").download(path);
  if (error || !data) throw new Error("Mock test audio could not be downloaded");
  if (data.size === 0 || data.size > 15 * 1024 * 1024) throw new Error("Invalid mock test audio size");
  return data;
}

async function transcribeAudio(data: Blob, key: string): Promise<string> {
  const fd = new FormData();
  fd.append("file", data, "audio.webm");
  fd.append("model", "whisper-1");
  const res = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    signal: AbortSignal.timeout(60_000),
    headers: { Authorization: `Bearer ${key}` },
    body: fd,
  });
  if (!res.ok) throw new Error(`Audio transcription failed: ${res.status}`);
  const json = await res.json();
  if (!boundedString(json.text, 20_000)) throw new Error("Invalid audio transcription");
  return json.text;
}

serve(async (req) => {
  const early = preflight(req);
  if (early) return early;
  const corsHeaders = responseHeaders(req);

  let quotaUserId: string | null = null;
  let claimedMockTestId: string | null = null;
  let verifiedUserId: string | null = null;
  let admin: ReturnType<typeof serviceClient> | null = null;

  try {
    admin = serviceClient();
    const user = await getRequestUser(req, admin);
    if (!user) return json(req, { error: "Unauthorized" }, 401);
    verifiedUserId = user.id;

    const body: unknown = await req.json();
    if (!isRecord(body) || typeof body.mockTestId !== "string" ||
        !/^[0-9a-f-]{36}$/i.test(body.mockTestId)) {
      return json(req, { error: "Invalid mockTestId" }, 400);
    }
    const mockTestId = body.mockTestId;
    const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");
    if (!OPENAI_API_KEY) return json(req, { error: "AI service not configured" }, 503);

    const { data: mt, error: mtErr } = await admin.from("mock_tests").select("*")
      .eq("id", mockTestId).eq("user_id", user.id).maybeSingle();
    if (mtErr) throw mtErr;
    if (!mt) return json(req, { error: "Mock test not found" }, 404);
    if (mt.status !== "submitted") return json(req, { error: "Mock test is not ready for grading" }, 409);
    const audioPrefix = `${user.id}/mock-tests/${mockTestId}/`;
    if (!boundedString(mt.task1_essay, 20_000, 20) || !boundedString(mt.task2_essay, 20_000, 20) ||
        !boundedString(mt.task1_topic, 500) || !boundedString(mt.task2_topic, 500) ||
        ![mt.speaking_p1_audio_url, mt.speaking_p2_audio_url, mt.speaking_p3_audio_url]
          .every((path) => boundedString(path, 1_000) && path.startsWith(audioPrefix))) {
      return json(req, { error: "Mock test is incomplete" }, 400);
    }

    // Only one invocation can claim a submitted test. The request body never
    // controls the user ID or a row changed with service-role privileges.
    const { data: claim, error: claimError } = await admin.from("mock_tests")
      .update({ status: "grading" }).eq("id", mockTestId).eq("user_id", user.id)
      .eq("status", "submitted").select("id").maybeSingle();
    if (claimError) throw claimError;
    if (!claim) return json(req, { error: "Mock test is already being graded" }, 409);
    claimedMockTestId = mockTestId;

    const q = await consumeQuota(admin, user.id, "mock_test");
    if (!q.allowed) {
      const { error: statusError } = await admin.from("mock_tests")
        .update({ status: "failed" }).eq("id", mockTestId).eq("user_id", user.id).eq("status", "grading");
      if (statusError) throw statusError;
      claimedMockTestId = null;
      return json(req, { error: quotaErrorMessage(q, "mock_test") }, q.reason === "quota_check_failed" ? 503 : 403);
    }
    quotaUserId = user.id;
    const supabase = admin;

    // Verify every stored audio object before starting paid AI requests.
    const audio = await Promise.all([
      downloadAudio(supabase, mt.speaking_p1_audio_url),
      downloadAudio(supabase, mt.speaking_p2_audio_url),
      downloadAudio(supabase, mt.speaking_p3_audio_url),
    ]);

    const [task1, task2, t1, t2, t3] = await Promise.all([
      callOpenAI(
        WRITING_SYSTEM,
        `IELTS Task 1.\nTopic: ${mt.task1_topic}\n\nEssay:\n${mt.task1_essay}`,
        OPENAI_API_KEY
      ),
      callOpenAI(
        WRITING_SYSTEM,
        `IELTS Task 2.\nTopic: ${mt.task2_topic}\n\nEssay:\n${mt.task2_essay}`,
        OPENAI_API_KEY
      ),
      transcribeAudio(audio[0], OPENAI_API_KEY),
      transcribeAudio(audio[1], OPENAI_API_KEY),
      transcribeAudio(audio[2], OPENAI_API_KEY),
    ]);
    const combined = `Part 1 Topic: ${mt.speaking_p1_topic}\nPart 1 Response: ${t1}\n\nPart 2 Topic: ${mt.speaking_p2_topic}\nPart 2 Response: ${t2}\n\nPart 3 Topic: ${mt.speaking_p3_topic}\nPart 3 Response: ${t3}`;
    const speaking = await callOpenAI(SPEAKING_SYSTEM, `Evaluate this full IELTS Speaking exam:\n\n${combined}`, OPENAI_API_KEY);

    const t1Band = task1?.overallBand ?? 0;
    const t2Band = task2?.overallBand ?? 0;
    // Writing weight: Task 2 counts twice as much as Task 1
    const writingBand = (t1Band && t2Band) ? (t1Band + t2Band * 2) / 3 : (t2Band || t1Band);
    const spBand = speaking?.overallBand ?? 0;
    const overall = spBand && writingBand
      ? Math.round(((writingBand + spBand) / 2) * 2) / 2
      : (writingBand || spBand);

    const grammarErrors =
      (Array.isArray(task1?.errorCorrections) ? task1.errorCorrections.filter((e: unknown) => isRecord(e) && e.type === "error").length : 0) +
      (Array.isArray(task2?.errorCorrections) ? task2.errorCorrections.filter((e: unknown) => isRecord(e) && e.type === "error").length : 0) +
      (Array.isArray(speaking?.errorCorrections) ? speaking.errorCorrections.length : 0);
    const lexicalErrors =
      (Array.isArray(task1?.vocabularyAnalysis) ? task1.vocabularyAnalysis.length : 0) +
      (Array.isArray(task2?.vocabularyAnalysis) ? task2.vocabularyAnalysis.length : 0);

    const { data: saved, error: saveError } = await supabase.from("mock_tests").update({
      status: "completed",
      current_step: "done",
      task1_feedback: task1,
      task2_feedback: task2,
      speaking_feedback: speaking,
      speaking_p1_transcript: t1,
      speaking_p2_transcript: t2,
      speaking_p3_transcript: t3,
      task1_band: t1Band || null,
      task2_band: t2Band || null,
      speaking_band: spBand || null,
      overall_band: overall || null,
      grammar_errors_count: grammarErrors,
      lexical_errors_count: lexicalErrors,
      completed_at: new Date().toISOString(),
    }).eq("id", mockTestId).eq("user_id", user.id).eq("status", "grading")
      .select("id").maybeSingle();
    if (saveError) throw saveError;
    if (!saved) throw new Error("Mock test status changed during grading");

    quotaUserId = null;
    claimedMockTestId = null;
    return new Response(JSON.stringify({ ok: true, overall }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  } catch (e) {
    console.error("process-mock-test error:", e);
    if (claimedMockTestId && verifiedUserId && admin) {
      const { error } = await admin.from("mock_tests").update({ status: "failed" })
        .eq("id", claimedMockTestId).eq("user_id", verifiedUserId).eq("status", "grading");
      if (error) console.error("Could not mark mock test failed:", error.message);
    }
    if (quotaUserId && admin) await refundQuota(admin, quotaUserId, "mock_test");
    return json(req, { error: "Mock test grading failed" }, 500);
  }
});

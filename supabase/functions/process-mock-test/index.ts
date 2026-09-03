import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

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

async function callOpenAI(system: string, user: string, key: string) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: system }, { role: "user", content: user }],
      temperature: 0.3,
      response_format: { type: "json_object" },
    }),
  });
  if (!res.ok) throw new Error(`OpenAI ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return JSON.parse(data.choices[0].message.content);
}

async function transcribeAudioPath(supabase: any, path: string, key: string): Promise<string> {
  if (!path) return "";
  const { data, error } = await supabase.storage.from("speaking-audio").download(path);
  if (error || !data) return "";
  const fd = new FormData();
  fd.append("file", data, "audio.webm");
  fd.append("model", "whisper-1");
  const res = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}` },
    body: fd,
  });
  if (!res.ok) return "";
  const json = await res.json();
  return json.text || "";
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  let quotaUserId: string | null = null;
  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

  try {
    const { mockTestId } = await req.json();
    if (!mockTestId) {
      return new Response(JSON.stringify({ error: "Missing mockTestId" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY")!;
    const supabase = admin;

    // Authenticate the caller
    const authHeader = req.headers.get("Authorization");
    const token = authHeader?.replace("Bearer ", "") ?? "";
    const { data: authData } = await supabase.auth.getUser(token);
    const user = authData?.user;
    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    const { data: mt, error: mtErr } = await supabase.from("mock_tests").select("*").eq("id", mockTestId).single();
    if (mtErr || !mt) throw new Error("Mock test not found");
    if (mt.user_id !== user.id) {
      return new Response(JSON.stringify({ error: "Forbidden" }), {
        status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    // Consume one Mock Test allowance server-side
    const { data: quota, error: quotaErr } = await supabase.rpc("consume_quota", {
      _user_id: user.id, _kind: "mock_test",
    });
    const q = quota as { allowed: boolean; reason?: string; plan?: string; limit?: number } | null;
    if (quotaErr || !q?.allowed) {
      const msg = q?.reason === "limit_reached"
        ? (q.plan === "free"
            ? "Full Mock Tests are available on Scorify Pro. Upgrade to continue."
            : `You have used all ${q.limit} Mock Tests in your plan this period.`)
        : "Could not verify your plan allowance. Please try again.";
      return new Response(JSON.stringify({ error: msg }), {
        status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }
    quotaUserId = user.id;

    await supabase.from("mock_tests").update({ status: "grading" }).eq("id", mockTestId);

    // Writing Task 1
    let task1: any = null, task2: any = null, speaking: any = null;
    if (mt.task1_essay && mt.task1_topic) {
      task1 = await callOpenAI(
        WRITING_SYSTEM,
        `IELTS Task 1.\nTopic: ${mt.task1_topic}\n\nEssay:\n${mt.task1_essay}`,
        OPENAI_API_KEY
      );
    }
    if (mt.task2_essay && mt.task2_topic) {
      task2 = await callOpenAI(
        WRITING_SYSTEM,
        `IELTS Task 2.\nTopic: ${mt.task2_topic}\n\nEssay:\n${mt.task2_essay}`,
        OPENAI_API_KEY
      );
    }

    // Speaking — transcribe all 3 parts, combine, grade once
    const t1 = await transcribeAudioPath(supabase, mt.speaking_p1_audio_url, OPENAI_API_KEY);
    const t2 = await transcribeAudioPath(supabase, mt.speaking_p2_audio_url, OPENAI_API_KEY);
    const t3 = await transcribeAudioPath(supabase, mt.speaking_p3_audio_url, OPENAI_API_KEY);
    if (t1 || t2 || t3) {
      const combined = `Part 1 Topic: ${mt.speaking_p1_topic}\nPart 1 Response: ${t1}\n\nPart 2 Topic: ${mt.speaking_p2_topic}\nPart 2 Response: ${t2}\n\nPart 3 Topic: ${mt.speaking_p3_topic}\nPart 3 Response: ${t3}`;
      speaking = await callOpenAI(SPEAKING_SYSTEM, `Evaluate this full IELTS Speaking exam:\n\n${combined}`, OPENAI_API_KEY);
    }

    const t1Band = task1?.overallBand ?? 0;
    const t2Band = task2?.overallBand ?? 0;
    // Writing weight: Task 2 counts twice as much as Task 1
    const writingBand = (t1Band && t2Band) ? (t1Band + t2Band * 2) / 3 : (t2Band || t1Band);
    const spBand = speaking?.overallBand ?? 0;
    const overall = spBand && writingBand
      ? Math.round(((writingBand + spBand) / 2) * 2) / 2
      : (writingBand || spBand);

    const grammarErrors =
      (task1?.errorCorrections?.filter((e: any) => e.type === "error").length || 0) +
      (task2?.errorCorrections?.filter((e: any) => e.type === "error").length || 0) +
      (speaking?.errorCorrections?.length || 0);
    const lexicalErrors =
      (task1?.vocabularyAnalysis?.length || 0) +
      (task2?.vocabularyAnalysis?.length || 0);

    await supabase.from("mock_tests").update({
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
    }).eq("id", mockTestId);

    return new Response(JSON.stringify({ ok: true, overall }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  } catch (e: any) {
    console.error("process-mock-test error:", e);
    try {
      const { mockTestId } = await req.clone().json();
      const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
      await supabase.from("mock_tests").update({ status: "failed" }).eq("id", mockTestId);
    } catch {}
    return new Response(JSON.stringify({ error: e.message || "Unknown" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
});
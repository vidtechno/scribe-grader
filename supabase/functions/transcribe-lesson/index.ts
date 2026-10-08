// Speech-to-text for the speaking exercises inside lessons ("listen and repeat").
// It only turns audio into text (plus audio-quality numbers). Whether the learner "pronounced it correctly" is NOT
// decided here: the lesson compares the text leniently with the target phrase and treats the result as practice.
// It does not use the IELTS Speaking allowance; access to the course (plan or trial) and a rate limit apply instead.
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getRequestUser, serviceClient } from "../_shared/quota.ts";
import { json, preflight } from "../_shared/http.ts";
import { logAudioUsage } from "../_shared/ai-usage.ts";

const MAX_AUDIO_BYTES = 3 * 1024 * 1024;
const AUDIO_TYPES = new Set(["audio/webm", "audio/mp4", "audio/mpeg", "audio/wav", "audio/x-wav", "audio/ogg", "audio/aac"]);
// Short phrases only: a lesson sentence takes a few seconds.
const LIMITS: [minutes: number, maximum: number][] = [[10, 40], [1440, 400]];

serve(async (req) => {
  const early = preflight(req);
  if (early) return early;

  try {
    const admin = serviceClient();
    const user = await getRequestUser(req, admin);
    if (!user) return json(req, { error: "Unauthorized" }, 401);

    const openaiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openaiKey) return json(req, { error: "AI service not configured" }, 503);

    const formData = await req.formData();
    const audio = formData.get("audio");
    if (!(audio instanceof File) || audio.size < 200 || audio.size > MAX_AUDIO_BYTES ||
        !AUDIO_TYPES.has(audio.type.split(";")[0].toLowerCase())) {
      return json(req, { error: "Invalid audio file" }, 400);
    }

    const { data: access, error: accessError } = await admin.rpc("learning_access_for", { _user: user.id });
    if (accessError) throw accessError;
    if (!access?.allowed) return json(req, { error: "The course trial is over" }, 403);

    for (const [minutes, maximum] of LIMITS) {
      const since = new Date(Date.now() - minutes * 60_000).toISOString();
      const { count, error } = await admin.from("api_logs").select("id", { head: true, count: "exact" })
        .eq("user_id", user.id).eq("model_used", "transcribe-lesson").gte("created_at", since);
      if (error) throw error;
      if ((count ?? 0) >= maximum) return json(req, { error: "Too many recordings, try again a little later" }, 429);
    }
    const { error: logError } = await admin.from("api_logs").insert({ user_id: user.id, model_used: "transcribe-lesson", cost: 0 });
    if (logError) throw logError;

    const form = new FormData();
    form.append("file", audio, audio.name || "speech.webm");
    form.append("model", "whisper-1");
    form.append("language", "en");
    form.append("temperature", "0");
    form.append("response_format", "verbose_json");
    // A neutral hint about the kind of audio. The target phrase is deliberately NOT sent: it would pull the
    // transcript towards what the learner was supposed to say instead of what they said.
    form.append("prompt", "A language learner says a short English word or sentence.");

    const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST", signal: AbortSignal.timeout(30_000), headers: { Authorization: `Bearer ${openaiKey}` }, body: form,
    });
    if (!response.ok) {
      console.error("Transcription provider error:", response.status, await response.text());
      return json(req, { error: "Transcription failed" }, response.status === 429 ? 429 : 502);
    }

    const result = await response.json() as { text?: unknown; duration?: unknown; segments?: unknown };
    const transcript = typeof result.text === "string" ? result.text.trim().slice(0, 600) : "";
    const duration = Number(result.duration) || 0;
    const segments = Array.isArray(result.segments) ? result.segments : [];
    const nums = (key: string) => segments
      .map((s: unknown) => (typeof s === "object" && s !== null && key in s ? Number((s as Record<string, unknown>)[key]) : NaN))
      .filter(Number.isFinite);
    const avg = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);
    await logAudioUsage(admin, user.id, "lesson-speaking", "whisper-1", duration);
    return json(req, {
      transcript,
      quality: { duration, avgLogprob: avg(nums("avg_logprob")), noSpeechProbability: avg(nums("no_speech_prob")) },
    });
  } catch (error) {
    console.error("transcribe-lesson error:", error);
    return json(req, { error: "Transcription failed" }, 500);
  }
});

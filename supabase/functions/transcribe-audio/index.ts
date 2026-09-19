import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getRequestUser, serviceClient } from "../_shared/quota.ts";
import { boundedString, json, preflight } from "../_shared/http.ts";
import { logAudioUsage } from "../_shared/ai-usage.ts";

const MAX_AUDIO_BYTES = 15 * 1024 * 1024;
const AUDIO_TYPES = new Set(["audio/webm", "audio/mp4", "audio/mpeg", "audio/wav", "audio/x-wav", "audio/ogg"]);

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
    const audioFile = formData.get("audio");
    if (!(audioFile instanceof File) || audioFile.size === 0 ||
        audioFile.size > MAX_AUDIO_BYTES || !AUDIO_TYPES.has(audioFile.type.split(';')[0].toLowerCase())) {
      return json(req, { error: "Invalid audio file" }, 400);
    }

    // Transcription precedes speaking grading, so do not consume the speaking
    // allowance here. Reject requests with no remaining allowance instead.
    const { error: expiryError } = await admin.rpc("enforce_subscription_expiry", { _user_id: user.id });
    if (expiryError) throw expiryError;
    const { data: subscription, error: planError } = await admin.from("subscriptions")
      .select("speaking_limit,speaking_used").eq("user_id", user.id).maybeSingle();
    if (planError) throw planError;
    if (!subscription || subscription.speaking_used >= subscription.speaking_limit) {
      return json(req, { error: "No Speaking evaluations remaining" }, 403);
    }

    // api_logs is already indexed by user and creation time. This is a
    // best-effort burst guard; the grading RPC remains the atomic plan limit.
    for (const [minutes, maximum] of [[10, 6], [1440, 24]]) {
      const since = new Date(Date.now() - minutes * 60_000).toISOString();
      const { count, error } = await admin.from("api_logs")
        .select("id", { head: true, count: "exact" })
        .eq("user_id", user.id).eq("model_used", "transcribe-audio")
        .gte("created_at", since);
      if (error) throw error;
      if ((count ?? 0) >= maximum) return json(req, { error: "Too many transcription requests" }, 429);
    }
    const { error: logError } = await admin.from("api_logs").insert({
      user_id: user.id, model_used: "transcribe-audio", cost: 0,
    });
    if (logError) throw logError;

    const whisperForm = new FormData();
    whisperForm.append("file", audioFile, audioFile.name || "audio.webm");
    whisperForm.append("model", "whisper-1");
    whisperForm.append("language", "en");
    whisperForm.append("response_format", "verbose_json");

    const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      signal: AbortSignal.timeout(60_000),
      headers: { Authorization: `Bearer ${openaiKey}` },
      body: whisperForm,
    });
    if (!response.ok) {
      console.error("Transcription provider error:", response.status, await response.text());
      return json(req, { error: "Transcription failed" }, response.status === 429 ? 429 : 502);
    }

    const result: unknown = await response.json();
    const transcript = typeof result === "object" && result !== null && "text" in result
      ? result.text : null;
    if (!boundedString(transcript, 20_000)) return json(req, { error: "Invalid transcription result" }, 502);
    const duration = typeof result === 'object' && result !== null && 'duration' in result ? Number(result.duration) : 0;
    await logAudioUsage(admin,user.id,'transcription','whisper-1',duration);
    return json(req, { transcript });
  } catch (error) {
    console.error("transcribe-audio error:", error);
    return json(req, { error: "Transcription failed" }, 500);
  }
});

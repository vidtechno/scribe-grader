// In-lesson AI help: a learner asks about the lesson they are studying (3 questions per lesson, 15 per day).
// The count is taken on the server before the model is called and given back when the call fails.
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getRequestUser, serviceClient } from "../_shared/quota.ts";
import { boundedString, json, preflight } from "../_shared/http.ts";
import { logTextUsage } from "../_shared/ai-usage.ts";
import { EXPLAIN_REQUEST, maxTokens, parseRequest, systemPrompt } from "../_shared/lesson-help-core.ts";

const MODEL = "gpt-4o-mini";

serve(async (req) => {
  const early = preflight(req);
  if (early) return early;
  try {
    const db = serviceClient();
    const user = await getRequestUser(req, db);
    if (!user) return json(req, { error: "Unauthorized" }, 401);

    const request = parseRequest(await req.json().catch(() => null));
    if (!request) return json(req, { error: "Invalid request" }, 400);

    const { data: setting } = await db.from("app_settings").select("value").eq("key", "ai_lesson_help_enabled").maybeSingle();
    const enabled = setting?.value === "true";
    if (!enabled) return json(req, { enabled: false, error: "AI yordam hozircha o'chirilgan." }, request.action === "status" ? 200 : 403);

    if (request.action === "status") {
      const { data } = await db.rpc("lesson_help_state", { _user: user.id, _lesson: request.lessonId });
      const s = (data ?? {}) as { lesson_left?: number; day_left?: number };
      return json(req, { enabled: true, lessonLeft: s.lesson_left ?? 0, dayLeft: s.day_left ?? 0 });
    }

    const apiKey = Deno.env.get("OPENAI_API_KEY");
    if (!apiKey) return json(req, { error: "AI service not configured" }, 503);

    const { data: quota, error: quotaError } = await db.rpc("consume_lesson_help", { _user: user.id, _lesson: request.lessonId });
    if (quotaError) {
      console.error("consume_lesson_help error:", quotaError.message);
      return json(req, { error: "Limitni tekshirib bo'lmadi. Qayta urinib ko'ring." }, 503);
    }
    const q = quota as { allowed: boolean; reason?: string; lesson_left?: number; day_left?: number };
    if (!q.allowed) {
      const error = q.reason === "no_access" ? "Bu funksiya Learn tarifi yoki bepul sinov davomida ishlaydi."
        : q.reason === "day_limit" ? "Bugungi 15 ta savol tugadi. Ertaga yana yozishingiz mumkin."
          : "Bu darsda 3 ta savol berib bo'ldingiz. Boshqa darsda yoki ertaga davom eting.";
      return json(req, { error, reason: q.reason, lessonLeft: q.lesson_left ?? 0, dayLeft: q.day_left ?? 0 }, 429);
    }

    const userMessage = request.kind === "explain" ? EXPLAIN_REQUEST : request.message;
    let reply: string | null = null;
    let usage: Record<string, number> | undefined;
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        signal: AbortSignal.timeout(40_000),
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          model: MODEL,
          temperature: 0.4,
          max_tokens: maxTokens(request.kind),
          messages: [{ role: "system", content: systemPrompt(request) }, ...request.history, { role: "user", content: userMessage }],
        }),
      });
      if (res.ok) {
        const data = await res.json();
        const text = data.choices?.[0]?.message?.content;
        if (boundedString(text, 8_000)) { reply = text; usage = data.usage; }
      } else {
        console.error("OpenAI error:", res.status, (await res.text()).slice(0, 200));
      }
    } catch (e) {
      console.error("OpenAI call failed:", e instanceof Error ? e.message : e);
    }

    if (!reply) {
      await db.rpc("refund_lesson_help", { _user: user.id, _lesson: request.lessonId });
      return json(req, { error: "AI hozir javob bera olmadi. Savolingiz hisobga olinmadi, qayta urinib ko'ring.", lessonLeft: (q.lesson_left ?? 0) + 1, dayLeft: (q.day_left ?? 0) + 1 }, 502);
    }
    await logTextUsage(db, user.id, "lesson_help", MODEL, usage, { lesson: request.lessonId, kind: request.kind });
    return json(req, { reply, lessonLeft: q.lesson_left ?? 0, dayLeft: q.day_left ?? 0 });
  } catch (e) {
    console.error("lesson-mentor error:", e instanceof Error ? e.message : e);
    return json(req, { error: "Server xatosi. Qayta urinib ko'ring." }, 500);
  }
});

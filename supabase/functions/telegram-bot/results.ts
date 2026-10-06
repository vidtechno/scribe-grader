// Result cards for Writing, Speaking and Mock Tests (used in the results menu and in notifications).
import { esc, truncate } from "../_shared/telegram.ts";
import type { Db } from "../_shared/telegram-accounts.ts";
import { app, band, cb, fmtDate, type InlineKeyboard } from "./ui.ts";

export type ResultKind = "e" | "s" | "m";

type Rec = Record<string, unknown>;
const rec = (v: unknown): Rec => (v && typeof v === "object" && !Array.isArray(v) ? v as Rec : {});
const crit = (fb: Rec, key: string) => band(Number(rec(fb[key]).score));
const list = (v: unknown, n: number) => (Array.isArray(v) ? v : []).filter((s) => typeof s === "string").slice(0, n) as string[];

function corrections(fb: Rec, n: number): string {
  const items = (Array.isArray(fb.errorCorrections) ? fb.errorCorrections : [])
    .map(rec).filter((c) => typeof c.original === "string" && typeof c.corrected === "string" && c.type !== "improvement")
    .slice(0, n);
  if (!items.length) return "";
  return "\n🛠 <b>Asosiy xatolar:</b>\n" + items.map((c) =>
    `• <s>${esc(truncate(c.original, 90))}</s>\n   ✅ ${esc(truncate(c.corrected, 110))}`).join("\n");
}

function goalLine(score: number | null, target?: number | null): string {
  if (typeof score !== "number" || !target) return "";
  const gap = Math.round((target - score) * 2) / 2;
  return gap <= 0
    ? `\n🎯 Maqsadingiz (${band(target)}) bajarildi! 🎉`
    : `\n🎯 Maqsadingizgacha (${band(target)}): yana <b>${band(gap)}</b> band`;
}

function delta(score: number | null, previous: number | null): string {
  if (typeof score !== "number" || typeof previous !== "number") return "";
  const d = Math.round((score - previous) * 2) / 2;
  return d > 0 ? ` (📈 +${d.toFixed(1)})` : d < 0 ? ` (📉 ${d.toFixed(1)})` : " (➡️ o'zgarmadi)";
}

export interface Card { text: string; keyboard: InlineKeyboard }

export async function resultCard(
  db: Db, kind: ResultKind, id: string, userId: string,
  opts: { notification?: boolean; full?: boolean } = {},
): Promise<Card | null> {
  const { data: goal } = await db.from("user_goals").select("target_band").eq("user_id", userId).maybeSingle();
  const target = goal ? Number(goal.target_band) : 7; // same default as the website goals card
  const back: InlineKeyboard = opts.notification ? [[cb("📊 Statistika", "n:u:stats"), cb("📝 Barcha natijalar", "n:r:l:a")]]
    : [[cb("⬅️ Natijalarga qaytish", "r:l:a")]];

  if (kind === "e") {
    const { data: e } = await db.from("essays").select("id,task_type,topic,score,feedback,word_count,created_at,status")
      .eq("id", id).eq("user_id", userId).maybeSingle();
    if (!e || e.status !== "completed") return null;
    const { data: prev } = await db.from("essays").select("score").eq("user_id", userId).eq("status", "completed")
      .lt("created_at", e.created_at).not("score", "is", null).order("created_at", { ascending: false }).limit(1).maybeSingle();
    const fb = rec(e.feedback);
    const strengths = list(fb.strengths, opts.full ? 3 : 1);
    const tips = list(fb.suggestions, opts.full ? 3 : 2);
    const text = [
      opts.notification ? "✍️ <b>Writing natijangiz tayyor!</b>\n" : `✍️ <b>Writing · ${esc(e.task_type)}</b>\n`,
      `📌 <i>${esc(truncate(e.topic, 160))}</i>`,
      `📅 ${fmtDate(e.created_at, true)} · ${e.word_count ?? 0} so'z\n`,
      `🏅 Umumiy band: <b>${band(e.score)}</b>${delta(e.score, prev?.score ?? null)}`,
      `• Task ${e.task_type === "Task 1" ? "Achievement" : "Response"}: <b>${crit(fb, "taskAchievement")}</b>`,
      `• Coherence & Cohesion: <b>${crit(fb, "coherenceCohesion")}</b>`,
      `• Lexical Resource: <b>${crit(fb, "lexicalResource")}</b>`,
      `• Grammar Range & Accuracy: <b>${crit(fb, "grammaticalRange")}</b>`,
      goalLine(e.score, target),
      strengths.length ? `\n💪 <b>Kuchli tomon:</b>\n${strengths.map((s) => `• ${esc(truncate(s, 220))}`).join("\n")}` : "",
      tips.length ? `\n📌 <b>Nimani yaxshilash kerak:</b>\n${tips.map((s) => `• ${esc(truncate(s, 220))}`).join("\n")}` : "",
      corrections(fb, opts.full ? 4 : 2),
    ].filter(Boolean).join("\n");
    return { text, keyboard: [[app("📄 To'liq tahlilni ochish", `/result/${e.id}`)], [app("✍️ Yana esse yozish", "/writing")], ...back] };
  }

  if (kind === "s") {
    const { data: s } = await db.from("speaking_attempts").select("id,part,topic,score,feedback,duration_seconds,created_at,status")
      .eq("id", id).eq("user_id", userId).maybeSingle();
    if (!s || s.status !== "completed") return null;
    const { data: prev } = await db.from("speaking_attempts").select("score").eq("user_id", userId).eq("status", "completed")
      .lt("created_at", s.created_at).not("score", "is", null).order("created_at", { ascending: false }).limit(1).maybeSingle();
    const fb = rec(s.feedback);
    const tips = list(fb.suggestions, opts.full ? 3 : 2);
    const fillers = rec(fb.fluencyNotes);
    const text = [
      opts.notification ? "🎤 <b>Speaking natijangiz tayyor!</b>\n" : `🎤 <b>Speaking · ${esc(s.part)}</b>\n`,
      `📌 <i>${esc(truncate(s.topic, 160))}</i>`,
      `📅 ${fmtDate(s.created_at, true)}${s.duration_seconds ? ` · ${Math.round(s.duration_seconds)} soniya` : ""}\n`,
      `🏅 Umumiy band: <b>${band(s.score)}</b>${delta(s.score, prev?.score ?? null)}`,
      `• Fluency & Coherence: <b>${crit(fb, "fluencyCoherence")}</b>`,
      `• Lexical Resource: <b>${crit(fb, "lexicalResource")}</b>`,
      `• Grammar Range & Accuracy: <b>${crit(fb, "grammaticalRange")}</b>`,
      `• Pronunciation: <b>${crit(fb, "pronunciation")}</b>`,
      typeof fillers.fillerCount === "number" ? `🗣 To'ldiruvchi so'zlar (um, uh…): ${fillers.fillerCount} ta` : "",
      goalLine(s.score, target),
      tips.length ? `\n📌 <b>Maslahatlar:</b>\n${tips.map((t) => `• ${esc(truncate(t, 220))}`).join("\n")}` : "",
      corrections(fb, opts.full ? 3 : 2),
    ].filter(Boolean).join("\n");
    return { text, keyboard: [[app("📄 To'liq tahlilni ochish", `/speaking-result/${s.id}`)], [app("🎤 Yana mashq qilish", "/speaking")], ...back] };
  }

  const { data: m } = await db.from("mock_tests")
    .select("id,overall_band,task1_band,task2_band,speaking_band,grammar_errors_count,lexical_errors_count,completed_at,created_at,status")
    .eq("id", id).eq("user_id", userId).maybeSingle();
  if (!m || m.status !== "completed") return null;
  const text = [
    opts.notification ? "🧪 <b>Mock test natijangiz tayyor!</b>\n" : "🧪 <b>Full Mock Test</b>\n",
    `📅 ${fmtDate(m.completed_at ?? m.created_at, true)}\n`,
    `🏅 Umumiy band: <b>${band(m.overall_band)}</b>`,
    `• Writing Task 1: <b>${band(m.task1_band)}</b>`,
    `• Writing Task 2: <b>${band(m.task2_band)}</b>`,
    `• Speaking: <b>${band(m.speaking_band)}</b>`,
    `\n🔎 Grammatik xatolar: ${m.grammar_errors_count ?? 0} · Leksik izohlar: ${m.lexical_errors_count ?? 0}`,
    goalLine(m.overall_band, target),
  ].filter(Boolean).join("\n");
  return { text, keyboard: [[app("📄 To'liq natijani ochish", `/mock-test/result/${m.id}`)], ...back] };
}

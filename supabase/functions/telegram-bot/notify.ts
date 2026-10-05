// Delivers queued messages from telegram_outbox: results, referral and plan updates, reminders and broadcasts.
import { sleep, tg, TelegramError } from "../_shared/telegram.ts";
import type { Db } from "../_shared/telegram-accounts.ts";
import { app, band, bar, cb, daysUntil, fmtDate, type InlineKeyboard, PLAN_LABEL } from "./ui.ts";
import { countSince, loadOverview, scoreStats, streakDays, weekStart } from "./data.ts";
import { resultCard } from "./results.ts";
import { functionUrl } from "./setup.ts";

interface OutboxItem {
  id: number; telegram_id: number; user_id: string | null; kind: string;
  payload: Record<string, unknown>; broadcast_id: string | null; attempts: number;
}

type Delivery =
  | { text: string; keyboard?: InlineKeyboard }
  | { copy: { from_chat_id: number; message_id: number } };

async function render(db: Db, item: OutboxItem): Promise<Delivery | null> {
  const p = item.payload ?? {};
  const userId = item.user_id;
  switch (item.kind) {
    case "essay_result":
    case "speaking_result":
    case "mock_result": {
      if (!userId || typeof p.id !== "string") return null;
      const kind = item.kind === "essay_result" ? "e" : item.kind === "speaking_result" ? "s" : "m";
      return resultCard(db, kind, p.id, userId, { notification: true });
    }
    case "referral_new": {
      if (!userId) return null;
      const { data } = await db.rpc("telegram_referral_summary", { _user: userId });
      const r = (data ?? {}) as { counted?: number; can_claim_go?: boolean };
      const n = r.counted ?? 0;
      const next = n < 10 ? `Go mukofotigacha yana <b>${10 - n}</b> ta do'st.` : n < 20 ? `Plus mukofotigacha yana <b>${20 - n}</b> ta do'st.` : "Siz maksimal mukofotni oldingiz! 🏆";
      return {
        text: p.counted
          ? `🎉 <b>Yangi do'stingiz qo'shildi!</b>\n\n👥 Hisoblangan: <b>${n}</b>/20 ${bar(n, 20, 10)}\n${next}`
          : "👋 Havolangiz orqali yangi do'stingiz qo'shildi (bu davrda 20 talik limit to'lgan).",
        keyboard: r.can_claim_go ? [[cb("🎉 1 oy Go'ni faollashtirish", "n:rf:claim")]] : [[cb("🎁 Taklif bo'limi", "n:u:invite")]],
      };
    }
    case "plan_changed": {
      const plan = String(p.plan ?? "free"), old = String(p.old_plan ?? "");
      if (plan === "free") {
        return {
          text: `ℹ️ <b>${PLAN_LABEL[old] ?? "Pullik"} tarifingiz muddati tugadi.</b>\nHozir sizda Free tarif. Mashqlarni davom ettirish uchun tarifni yangilang.`,
          keyboard: [[cb("💎 Tariflar", "n:u:plan")]],
        };
      }
      const extended = plan === old;
      return {
        text: `${extended ? "⏳" : "🎉"} <b>${PLAN_LABEL[plan] ?? plan} ${extended ? "uzaytirildi" : "faollashtirildi"}!</b>\n` +
          (p.expires_at ? `Amal qiladi: <b>${fmtDate(String(p.expires_at), true)}</b> gacha.` : "") +
          "\n\nOmad! Mashqlarni boshlang 👇",
        keyboard: [[app("✍️ Writing", "/writing"), app("🎤 Speaking", "/speaking")], [cb("💎 Tarifim", "n:u:plan")]],
      };
    }
    case "plan_expiring": {
      const days = Number(p.days ?? 1);
      return {
        text: `⏰ <b>${PLAN_LABEL[String(p.plan)] ?? "Tarif"}</b> ${days <= 1 ? "<b>ertaga</b>" : `<b>${days} kundan</b> keyin`} tugaydi` +
          (p.expires_at ? ` (${fmtDate(String(p.expires_at), true)})` : "") + ".\n\nUzilishsiz davom etish uchun hozir yangilang.",
        keyboard: [[cb("💳 Tarifni yangilash", "n:u:plan")]],
      };
    }
    case "practice_reminder": {
      if (!userId) return null;
      const o = await loadOverview(db, userId);
      const ws = weekStart();
      const weekW = countSince(o.essays, ws), weekS = countSince(o.speaking, ws);
      const streak = streakDays([...o.essays, ...o.speaking]);
      return {
        text: [
          "⏰ <b>Bugungi mashq qoldi!</b>\n",
          streak > 0 ? `🔥 ${streak} kunlik streakingizni yo'qotmang.` : "Har kungi 20 daqiqa — bandni ko'tarishning eng ishonchli yo'li.",
          `\n📅 Bu hafta: Writing ${weekW}/${o.goals.weekly_essays} · Speaking ${weekS}/${o.goals.weekly_speaking}`,
          o.goals.exam_date && daysUntil(o.goals.exam_date) >= 0 ? `🗓 Imtihongacha ${daysUntil(o.goals.exam_date)} kun` : "",
        ].filter(Boolean).join("\n"),
        keyboard: [[app("✍️ Esse yozish", "/writing"), app("🎤 Speaking", "/speaking")], [cb("💡 Kunlik mashq", "n:u:daily")]],
      };
    }
    case "weekly_report": {
      if (!userId) return null;
      const o = await loadOverview(db, userId);
      const since = new Date(Date.now() - 7 * 86_400_000).toISOString();
      const w = scoreStats(o.essays.filter((e) => e.created_at >= since));
      const s = scoreStats(o.speaking.filter((e) => e.created_at >= since));
      return {
        text: [
          "📬 <b>Haftalik hisobot</b>\n",
          `✍️ Writing: ${w.count} ta${w.count ? ` · o'rtacha <b>${band(w.avg)}</b> · eng yaxshi <b>${band(w.best)}</b>` : ""}`,
          `🎤 Speaking: ${s.count} ta${s.count ? ` · o'rtacha <b>${band(s.avg)}</b> · eng yaxshi <b>${band(s.best)}</b>` : ""}`,
          `🎯 Reja: Writing ${w.count}/${o.goals.weekly_essays} · Speaking ${s.count}/${o.goals.weekly_speaking}`,
          `🔥 Streak: ${streakDays([...o.essays, ...o.speaking])} kun`,
          "\nYangi haftada ham davom eting! 💪",
        ].join("\n"),
        keyboard: [[cb("📊 Statistika", "n:u:stats"), cb("🎯 Maqsad", "n:u:goal")]],
      };
    }
    case "broadcast": {
      if (p.kind === "copy" && typeof p.from_chat_id === "number" && typeof p.message_id === "number") {
        return { copy: { from_chat_id: p.from_chat_id, message_id: p.message_id } };
      }
      if (p.kind === "text" && typeof p.text === "string") {
        return { text: p.text, keyboard: [[app("🌐 Scorify'ni ochish", "/dashboard")]] };
      }
      return null;
    }
  }
  return null;
}

async function mark(db: Db, id: number, patch: Record<string, unknown>) {
  await db.from("telegram_outbox").update(patch).eq("id", id);
}

async function deliver(db: Db, item: OutboxItem): Promise<boolean> {
  try {
    const d = await render(db, item);
    if (!d) {
      await mark(db, item.id, { status: "skipped", last_error: "nothing to send" });
      return false;
    }
    if ("copy" in d) {
      await tg("copyMessage", { chat_id: item.telegram_id, ...d.copy });
    } else {
      await tg("sendMessage", {
        chat_id: item.telegram_id, text: d.text, parse_mode: "HTML",
        link_preview_options: { is_disabled: true },
        ...(d.keyboard ? { reply_markup: { inline_keyboard: d.keyboard } } : {}),
      });
    }
    await mark(db, item.id, { status: "sent", sent_at: new Date().toISOString(), last_error: null });
    return true;
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    if (e instanceof TelegramError && (e.code === 403 || (e.code === 400 && /chat not found|user is deactivated/i.test(e.description)))) {
      await db.from("telegram_accounts").update({ is_blocked: true }).eq("telegram_id", item.telegram_id);
      await mark(db, item.id, { status: "skipped", last_error: message.slice(0, 500) });
    } else if (e instanceof TelegramError && e.code === 429) {
      const wait = (e.retryAfter ?? 5) * 1000;
      await mark(db, item.id, { status: "pending", send_after: new Date(Date.now() + wait).toISOString(), last_error: message.slice(0, 500) });
      await sleep(Math.min(wait, 10_000));
    } else {
      const retry = item.attempts < 3;
      await mark(db, item.id, {
        status: retry ? "pending" : "failed",
        send_after: new Date(Date.now() + 60_000 * item.attempts).toISOString(),
        last_error: message.slice(0, 500),
      });
    }
    return false;
  }
}

/** Sends queued messages for up to ~45 seconds. Only one drainer runs at a time. */
export async function drain(db: Db): Promise<Record<string, unknown>> {
  const started = Date.now();
  const { data: lease } = await db.rpc("telegram_acquire_drain_lease", { _seconds: 75 });
  if (!lease) return { skipped: "another drain is running" };
  let sent = 0, processed = 0;
  const broadcasts = new Set<string>();
  try {
    while (Date.now() - started < 45_000) {
      const { data: batch, error } = await db.rpc("telegram_claim_outbox", { _limit: 25 });
      if (error) throw error;
      const items = (batch ?? []) as OutboxItem[];
      if (!items.length) break;
      for (const item of items) {
        if (item.broadcast_id) broadcasts.add(item.broadcast_id);
        if (await deliver(db, item)) sent++;
        processed++;
        await sleep(40); // stays under Telegram's ~30 messages per second
      }
    }
  } finally {
    await db.rpc("telegram_release_drain_lease");
  }

  for (const id of broadcasts) {
    const { data } = await db.rpc("telegram_finish_broadcast", { _id: id });
    const r = data as { created_by: number; total: number; sent: number; failed: number; skipped: number } | null;
    if (r) {
      await tg("sendMessage", {
        chat_id: r.created_by, parse_mode: "HTML",
        text: `📣 <b>Xabar yuborish yakunlandi</b>\n\nJami: ${r.total}\n✅ Yetkazildi: ${r.sent}\n🚫 Botni bloklagan: ${r.skipped}\n⚠️ Xato: ${r.failed}`,
      }).catch((e) => console.error("broadcast report failed:", e));
    }
  }

  const { count } = await db.from("telegram_outbox").select("id", { count: "exact", head: true })
    .eq("status", "pending").lte("send_after", new Date().toISOString());
  if (count) {
    // More work left: hand over to a fresh invocation instead of exceeding the time limit.
    await fetch(functionUrl(), {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ drain: true }),
      signal: AbortSignal.timeout(5_000),
    }).catch((e) => console.error("self-kick failed:", e));
  }
  return { processed, sent, remaining: count ?? 0, ms: Date.now() - started };
}


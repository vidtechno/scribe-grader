// Delivers queued messages from telegram_outbox: results, referral and plan updates, reminders and broadcasts.
import { esc, SITE_URL, sleep, tg, TelegramError, truncate } from "../_shared/telegram.ts";
import type { Db } from "../_shared/telegram-accounts.ts";
import { app, band, bar, cb, fmtDate, hint, type InlineKeyboard, page, PLAN_LABEL, quote, title, tzDate } from "./ui.ts";
import { loadOverview, scoreStats, streakDays } from "./data.ts";
import { resultCard } from "./results.ts";
import { functionUrl } from "./setup.ts";
import { type LearnSummary, type Phase, type Slot, praiseText, reminderText } from "./learn-copy.ts";

interface OutboxItem {
  id: number; telegram_id: number; user_id: string | null; kind: string;
  payload: Record<string, unknown>; broadcast_id: string | null; attempts: number;
}

type Delivery =
  | { text: string; keyboard?: InlineKeyboard; preview?: string }
  | { copy: { from_chat_id: number; message_id: number } };

const money = (n: number) => `${String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm`;

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
    case "ref_activated":
      return {
        text: `${title("🎉", "Referal hisoblandi!")}\nDo'stingiz ro'yxatdan o'tdi. U 7 kunlik bepul davrdan keyin pullik tarifni olsa, balansingizga <b>10 000 so'm</b> qo'shiladi.`,
        keyboard: [[cb("🎁 Referal", "n:u:invite")]],
      };
    case "ref_reward":
      return {
        text: `${title("💰", `+${money(Number(p.amount ?? 10000))}`)}\nDo'stingiz pullik tarif sotib oldi — referal balansingizga pul qo'shildi!`,
        keyboard: [[cb("🎁 Referal balansi", "n:u:invite")]],
      };
    case "ref_paid":
      return {
        text: `${title("✅", "Pul to'landi!")}\n<b>${money(Number(p.amount ?? 0))}</b> kartangizga o'tkazildi. Rahmat, Scorify'ni tarqatganingiz uchun! 🙌`,
        keyboard: [[cb("🎁 Yana taklif qilish", "n:u:invite")]],
      };
    case "ref_rejected":
      return {
        text: `${title("↩️", "So'rov rad etildi")}\n<b>${money(Number(p.amount ?? 0))}</b> referal balansingizga qaytarildi. Karta ma'lumotlarini tekshirib, qayta so'rov yuboring.`,
        keyboard: [[cb("🎁 Referal", "n:u:invite")]],
      };
    case "plan_changed": {
      const plan = String(p.plan ?? "free"), old = String(p.old_plan ?? "");
      if (plan === "free") {
        return {
          text: `${title("ℹ️", `${PLAN_LABEL[old] ?? "Pullik"} tarifingiz muddati tugadi`)}\n` +
            hint("Hozir sizda Free tarif. Mashqlarni uzilishsiz davom ettirish uchun tarifni yangilang."),
          keyboard: [[cb("💎 Tariflar", "n:u:plan")]],
        };
      }
      const extended = plan === old;
      return {
        text: [
          title(extended ? "⏳" : "🎉", `${PLAN_LABEL[plan] ?? plan} ${extended ? "uzaytirildi" : "faollashtirildi"}!`),
          p.expires_at ? hint(`${fmtDate(String(p.expires_at), true)} gacha amal qiladi.`) : "",
          "\nOmad! Mashqlarni boshlang 👇",
        ].filter(Boolean).join("\n"),
        keyboard: [[app("✍️ Writing", "/writing"), app("🎤 Speaking", "/speaking")], [cb("💎 Tarifim", "n:u:plan")]],
      };
    }
    case "plan_expiring": {
      const days = Number(p.days ?? 1);
      return {
        text: title("⏰", `${PLAN_LABEL[String(p.plan)] ?? "Tarif"} ${days <= 1 ? "ertaga" : `${days} kundan keyin`} tugaydi`) +
          (p.expires_at ? `\n${hint(fmtDate(String(p.expires_at), true))}` : "") +
          "\n\nMashqlar uzilib qolmasligi uchun hozir yangilang.",
        keyboard: [[cb("💳 Tarifni yangilash", "n:u:plan")]],
      };
    }
    case "weekly_report": {
      if (!userId) return null;
      const o = await loadOverview(db, userId);
      const since = new Date(Date.now() - 7 * 86_400_000).toISOString();
      const w = scoreStats(o.essays.filter((e) => e.created_at >= since));
      const s = scoreStats(o.speaking.filter((e) => e.created_at >= since));
      const { data: ls } = await db.rpc("telegram_learning_summary", { _user: userId });
      const { data: lw } = await db.rpc("telegram_learning_week", { _user: userId });
      const learn = ls as LearnSummary | null;
      const week = (lw ?? {}) as { xp?: number; rank?: number | null; learners?: number; active_days?: number; lessons?: number };
      const learnBlock = learn?.started && (week.xp ?? 0) > 0
        ? "\n" + quote([
          `🎓 Darslar: <b>${week.lessons ?? 0}</b> ta · <b>${week.xp}</b> XP · ${week.active_days ?? 0}/7 kun faol`,
          week.rank ? `🏆 Reyting: <b>${week.rank}</b>-o'rin (${week.learners} o'quvchi ichida)` : "",
        ].filter(Boolean).join("\n"))
        : "";
      // A learner who did no IELTS practice this week gets a study digest, not a page of zeros.
      const studyOnly = !!learnBlock && w.count + s.count === 0;
      if (studyOnly) {
        return {
          text: [title("📬", "Haftalik hisobot"), learnBlock, hint("Yangi haftada ham shu ruhda davom eting! 💪")].join("\n"),
          keyboard: [[app("▶️ Darsni davom ettirish", "/learn")], [app("🏆 Reyting", "/leaderboard")]],
        };
      }
      return {
        text: [
          title("📬", "Haftalik hisobot"),
          hint("Shu hafta qilgan ishlaringiz") + "\n",
          `✍️ Writing: <b>${w.count}</b> ta${w.count ? ` · o'rtacha <b>${band(w.avg)}</b> · eng yaxshi <b>${band(w.best)}</b>` : ""}`,
          `🎤 Speaking: <b>${s.count}</b> ta${s.count ? ` · o'rtacha <b>${band(s.avg)}</b> · eng yaxshi <b>${band(s.best)}</b>` : ""}`,
          quote(`🎯 Reja: Writing ${w.count}/${o.goals.weekly_essays} · Speaking ${s.count}/${o.goals.weekly_speaking}\n` +
            `🔥 Streak: ${streakDays([...o.essays, ...o.speaking])} kun`),
          learnBlock,
          hint("Yangi haftada ham shu ruhda davom eting! 💪"),
        ].filter(Boolean).join("\n"),
        keyboard: [[cb("📊 Natijalarim", "n:u:stats"), cb("🎯 Maqsad", "n:u:goal")]],
      };
    }
    case "daily_test_reminder":
      return null; // this reminder was removed; rows queued earlier are skipped
    case "learn_reminder": {
      if (!userId || (p.date && p.date !== tzDate())) return null;
      const { data } = await db.rpc("telegram_learning_summary", { _user: userId });
      const s = (data ?? {}) as LearnSummary;
      if (!s.started || s.today_done || !s.access?.allowed) return null; // studied after the reminder was queued
      const slot = (["morning", "afternoon", "evening"].includes(String(p.slot)) ? p.slot : "evening") as Slot;
      const phase = (["daily", "comeback", "weekly", "last"].includes(String(p.phase)) ? p.phase : "daily") as Phase;
      return {
        text: reminderText(slot, phase, s, Number(p.v ?? 0)),
        keyboard: phase === "last"
          ? [[app("▶️ Darslarga qaytish", "/learn")], [cb("🔕 Eslatmalarni o'chirish", "s:rm:off")]]
          : [[app("▶️ Darsni boshlash", "/learn")]],
      };
    }
    case "learn_praise": {
      if (!userId || (p.date && p.date !== tzDate())) return null;
      const { data } = await db.rpc("telegram_learning_summary", { _user: userId });
      const s = (data ?? {}) as LearnSummary;
      if (!s.started) return null;
      const reached = (s.today_xp ?? 0) >= (s.daily_goal ?? 30);
      return {
        text: praiseText(s, Number(p.v ?? 0)),
        keyboard: reached ? [[app("🏆 Reyting", "/leaderboard")]] : [[app("▶️ Yana bitta dars", "/learn")]],
      };
    }
    case "blog_post": {
      if (typeof p.post_id !== "string") return null;
      const { data: post } = await db.from("blog_posts").select("slug,title,excerpt,lang,reading_minutes,status,published_at")
        .eq("id", p.post_id).maybeSingle();
      if (!post || post.status !== "published") return null;
      const url = `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`;
      return {
        text: [
          title("🆕", `Yangi maqola${post.lang === "en" ? " · English" : ""}`) + "\n",
          `<b>${esc(post.title)}</b>`,
          post.excerpt ? quote(esc(truncate(post.excerpt, 280))) : "",
          post.reading_minutes ? hint(`⏱ ${post.reading_minutes} daqiqalik o'qish`) : "",
        ].filter(Boolean).join("\n"),
        preview: url,
        keyboard: [[page("📖 Maqolani o'qish", url)], [cb("📚 Boshqa maqolalar", "n:u:blog")]],
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
        link_preview_options: d.preview
          ? { url: d.preview, prefer_large_media: true, show_above_text: true }
          : { is_disabled: true },
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
        text: `📣 <b>Xabar yuborish yakunlandi</b>\n\nJami: <b>${r.total}</b>\n✅ Yetkazildi: ${r.sent}\n🚫 Botni bloklagan: ${r.skipped}\n⚠️ Xato: ${r.failed}`,
      }).catch((e) => console.error("broadcast report failed:", e));
    }
  }

  // Housekeeping: expired sign-in codes and old delivered messages.
  const dayAgo = new Date(Date.now() - 86_400_000).toISOString();
  const twoMonthsAgo = new Date(Date.now() - 60 * 86_400_000).toISOString();
  await db.from("telegram_auth_requests").delete().lt("expires_at", dayAgo);
  await db.from("telegram_outbox").delete().in("status", ["sent", "skipped", "failed"]).lt("created_at", twoMonthsAgo);

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


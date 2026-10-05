// Admin panel inside the bot (Telegram ID 6117815120 and linked site admins).
import { esc, tg, truncate } from "../_shared/telegram.ts";
import { isTelegramEmail } from "../_shared/telegram-accounts.ts";
import { app, band, cb, type Ctx, fmtDate, type InlineKeyboard, PLAN_LABEL, reply, send, setState } from "./ui.ts";
import { setupBot } from "./setup.ts";
import { drain } from "./notify.ts";

declare const EdgeRuntime: { waitUntil(p: Promise<unknown>): void } | undefined;
function background(p: Promise<unknown>) {
  const guarded = p.catch((e) => console.error("background task failed:", e));
  if (typeof EdgeRuntime !== "undefined") EdgeRuntime.waitUntil(guarded);
}

const AUDIENCES: Record<string, string> = {
  all: "Barcha bot foydalanuvchilari",
  linked: "Hisobi ulanganlar",
  unlinked: "Hisobi ulanmaganlar",
  free: "Free tarifdagilar",
  paid: "Go / Plus tarifdagilar",
};

const HOME: InlineKeyboard = [[cb("⬅️ Admin panel", "ad:home")]];

export async function showAdmin(ctx: Ctx) {
  await reply(ctx, "👑 <b>Admin panel</b>\n\nBot va saytni boshqarish. Bo'limni tanlang:", [
    [cb("📈 Statistika", "ad:stats"), cb("📣 Xabar yuborish", "ad:bc")],
    [cb("🔍 Foydalanuvchi", "ad:us"), cb("🆕 Yangi a'zolar", "ad:new")],
    [cb("📢 Sayt e'lonlari", "ad:an"), cb("🤖 Bot holati", "ad:bot")],
    [app("🖥 Saytdagi admin panel", "/admin")],
  ]);
}

async function showStats(ctx: Ctx) {
  const { data, error } = await ctx.db.rpc("telegram_admin_stats");
  if (error) throw error;
  const s = data as Record<string, number>;
  await reply(ctx, [
    "📈 <b>Statistika</b>\n",
    "👥 <b>Foydalanuvchilar</b>",
    `Jami: <b>${s.users_total}</b> · Bugun: +${s.users_today} · 7 kun: +${s.users_7d} · 30 kun: +${s.users_30d}`,
    `7 kunda faol (kirgan): ${s.active_7d}`,
    "\n🤖 <b>Bot</b>",
    `Jami: <b>${s.tg_total}</b> · Bugun: +${s.tg_today} · Hisobi ulangan: ${s.tg_linked}`,
    `Botni bloklagan: ${s.tg_blocked} · Ban: ${s.tg_banned}`,
    "\n📝 <b>Faollik</b>",
    `Writing: bugun ${s.essays_today} · 7 kun ${s.essays_7d}`,
    `Speaking: bugun ${s.speaking_today} · 7 kun ${s.speaking_7d}`,
    `Mock test (7 kun): ${s.mock_7d}`,
    "\n💎 <b>Faol obunalar</b>",
    `Go: <b>${s.paid_go}</b> · Plus: <b>${s.paid_plus}</b>`,
    "\n🧠 <b>AI xarajati</b>",
    `24 soat: $${s.ai_cost_today} · 7 kun: $${s.ai_cost_7d} · 30 kun: $${s.ai_cost_30d}`,
    "\n📬 <b>Bildirishnomalar</b>",
    `24 soatda yuborilgan: ${s.outbox_sent_24h} · Navbatda: ${s.outbox_pending} · Xato: ${s.outbox_failed_24h}`,
  ].join("\n"), [[cb("🔄 Yangilash", "ad:stats")], ...HOME]);
}

// ---------------------------------------------------------------- broadcasts

async function chooseAudience(ctx: Ctx) {
  const counts = await Promise.all(Object.keys(AUDIENCES).map(async (a) => {
    const { data } = await ctx.db.rpc("telegram_audience_count", { _audience: a });
    return [a, Number(data ?? 0)] as const;
  }));
  await reply(ctx, "📣 <b>Xabar yuborish</b>\n\nKimga yuboramiz? (Yangiliklarni o'chirib qo'yganlar va botni bloklaganlar hisobga olinmaydi.)",
    [...counts.map(([a, n]) => [cb(`${AUDIENCES[a]} — ${n}`, `ad:bc:a:${a}`)]), ...HOME]);
}

async function askBroadcastMessage(ctx: Ctx, audience: string) {
  if (!AUDIENCES[audience]) return chooseAudience(ctx);
  await setState(ctx, { awaiting: "bc_msg", audience });
  await reply(ctx, `✍️ <b>${AUDIENCES[audience]}</b> uchun xabarni yuboring.\n\nMatn, rasm, video, fayl yoki ovozli xabar — istalgan turdagi xabar ` +
    "aynan shu ko'rinishda nusxalanadi.\n\nBekor qilish: /cancel");
}

async function previewBroadcast(ctx: Ctx, messageId: number) {
  const audience = String(ctx.account.state?.audience ?? "all");
  const { data: n } = await ctx.db.rpc("telegram_audience_count", { _audience: audience });
  await setState(ctx, { awaiting: "bc_confirm", audience, message_id: messageId });
  await send(ctx.chatId, "👀 <b>Ko'rinishi:</b>");
  await tg("copyMessage", { chat_id: ctx.chatId, from_chat_id: ctx.chatId, message_id: messageId });
  await send(ctx.chatId, `Auditoriya: <b>${AUDIENCES[audience]}</b> — <b>${n ?? 0}</b> kishi.\nYuboraymi?`, {
    inline_keyboard: [[cb("✅ Yuborish", "ad:bc:go"), cb("❌ Bekor qilish", "ad:bc:no")]],
  });
}

async function startBroadcast(ctx: Ctx) {
  const st = ctx.account.state;
  if (st?.awaiting !== "bc_confirm" || typeof st.message_id !== "number") return reply(ctx, "Yuboriladigan xabar topilmadi.", HOME);
  await setState(ctx, null);
  const { data: b, error } = await ctx.db.from("telegram_broadcasts").insert({
    created_by: ctx.from.id, audience: String(st.audience), kind: "copy",
    payload: { from_chat_id: ctx.chatId, message_id: st.message_id },
  }).select("id").single();
  if (error) throw error;
  const { data: total, error: qErr } = await ctx.db.rpc("telegram_enqueue_broadcast", { _id: b.id });
  if (qErr) throw qErr;
  await reply(ctx, `🚀 Navbatga qo'yildi: <b>${total}</b> ta xabar.\nYuborish fon rejimida ketadi, yakunida hisobot yuboraman.`, HOME);
  background(drain(ctx.db));
}

// ---------------------------------------------------------------- users

async function askUserSearch(ctx: Ctx) {
  await setState(ctx, { awaiting: "user_search" });
  await reply(ctx, "🔍 Qidiruv: email, ism, ID (#123456), Telegram @username yoki Telegram ID yuboring.\n\nBekor qilish: /cancel", HOME);
}

async function searchUsers(ctx: Ctx, query: string) {
  const { data, error } = await ctx.db.rpc("telegram_find_users", { _q: query });
  if (error) throw error;
  const rows = (data ?? []) as { user_id: string; email: string; full_name: string | null; telegram_username: string | null }[];
  if (rows.length === 1) {
    await setState(ctx, null);
    return userCard(ctx, rows[0].user_id);
  }
  if (!rows.length) return send(ctx.chatId, "Hech kim topilmadi. Boshqa so'rov yuboring yoki /cancel.");
  await setState(ctx, null);
  await send(ctx.chatId, `Topildi: ${rows.length} ta`, {
    inline_keyboard: [...rows.map((r) => [cb(truncate(`${r.full_name ?? ""} ${isTelegramEmail(r.email) ? `@${r.telegram_username ?? "telegram"}` : r.email}`, 60), `ad:u:${r.user_id}`)]), ...HOME],
  });
}

export async function userCard(ctx: Ctx, userId: string) {
  const { data, error } = await ctx.db.rpc("telegram_user_card", { _user: userId });
  if (error) throw error;
  const u = data as Record<string, any> | null;
  if (!u) return reply(ctx, "Foydalanuvchi topilmadi.", HOME);
  const login = u.provider === "telegram" ? "Telegram" : u.provider === "google" ? "Google" : esc(u.provider);
  const text = [
    `👤 <b>${esc(u.full_name || "Ismsiz")}</b>${u.is_admin ? " 👑" : ""}`,
    `${isTelegramEmail(u.email) ? "📧 —" : `📧 ${esc(u.email)}`} · ID #${esc(u.public_id ?? "—")}`,
    `🔐 Kirish: ${login} · Ro'yxatdan: ${fmtDate(u.created_at, true)}`,
    `🕐 Oxirgi kirish: ${u.last_sign_in_at ? fmtDate(u.last_sign_in_at, true) : "—"}`,
    u.telegram_id ? `🤖 Telegram: ${u.telegram_username ? `@${esc(u.telegram_username)}` : u.telegram_id}${u.telegram_banned ? " · 🚫 ban" : ""}${u.telegram_blocked ? " · botni bloklagan" : ""}` : "🤖 Telegram: ulanmagan",
    `\n💎 Tarif: <b>${PLAN_LABEL[u.plan] ?? esc(u.plan_name ?? u.plan)}</b>${u.expires_at ? ` · ${fmtDate(u.expires_at, true)} gacha` : ""}`,
    `Limitlar: ✍️ ${u.writing_used}/${u.writing_limit} · 🎤 ${u.speaking_used}/${u.speaking_limit} · 🧪 ${u.mock_used}/${u.mock_limit}`,
    `\n📝 Writing: ${u.essays} ta (o'rtacha ${band(u.avg_writing === null ? null : Number(u.avg_writing))})`,
    `🎤 Speaking: ${u.speaking} ta (o'rtacha ${band(u.avg_speaking === null ? null : Number(u.avg_speaking))})`,
    `🧪 Mock: ${u.mocks} ta`,
  ].join("\n");
  const keyboard: InlineKeyboard = [
    [cb("Go +30 kun", `ad:p:go:${userId}`), cb("Plus +30 kun", `ad:p:plus:${userId}`)],
    [cb("⬇️ Free'ga o'tkazish", `ad:p:free:${userId}`)],
  ];
  if (u.telegram_id) {
    keyboard.push([cb("✉️ Xabar yozish", `ad:dm:${u.telegram_id}`),
      u.telegram_banned ? cb("✅ Bandan chiqarish", `ad:unban:${u.telegram_id}`) : cb("🚫 Botda ban", `ad:ban:${u.telegram_id}`)]);
  }
  keyboard.push([cb("🔄 Yangilash", `ad:u:${userId}`)], ...HOME);
  await reply(ctx, text, keyboard);
}

async function confirmPlan(ctx: Ctx, plan: string, userId: string) {
  const what = plan === "free" ? "Free tarifga o'tkazish (limitlar nolga tushadi)" : `${PLAN_LABEL[plan]} — 30 kun (faol bo'lsa uzaytiriladi)`;
  await reply(ctx, `Tasdiqlaysizmi?\n\n<b>${what}</b>`, [
    [cb("✅ Ha", `ad:P:${plan}:${userId}`), cb("❌ Yo'q", `ad:u:${userId}`)],
  ]);
}

async function applyPlan(ctx: Ctx, plan: string, userId: string) {
  const { data, error } = await ctx.db.rpc("telegram_admin_set_plan", { _user: userId, _plan: plan, _days: 30 });
  if (error) return reply(ctx, `⚠️ Xato: ${esc(error.message)}`, [[cb("⬅️ Orqaga", `ad:u:${userId}`)]]);
  const r = data as { plan: string; expires_at: string | null; extended: boolean };
  await send(ctx.chatId, `✅ ${PLAN_LABEL[r.plan]} ${r.extended ? "uzaytirildi" : "o'rnatildi"}${r.expires_at ? ` — ${fmtDate(r.expires_at, true)} gacha` : ""}.\n` +
    "Foydalanuvchi Telegram ulagan bo'lsa, unga avtomatik xabar boradi.");
  await userCard({ ...ctx, messageId: undefined }, userId);
}

async function setBan(ctx: Ctx, telegramId: number, banned: boolean) {
  await ctx.db.from("telegram_accounts").update({ is_banned: banned, state: null }).eq("telegram_id", telegramId);
  const { data } = await ctx.db.from("telegram_accounts").select("user_id").eq("telegram_id", telegramId).maybeSingle();
  await send(ctx.chatId, banned ? "🚫 Foydalanuvchi botda bloklandi (sayt hisobi ishlayveradi)." : "✅ Ban olib tashlandi.");
  if (data?.user_id) await userCard({ ...ctx, messageId: undefined }, data.user_id);
}

async function askDirectMessage(ctx: Ctx, telegramId: number) {
  await setState(ctx, { awaiting: "dm", telegram_id: telegramId });
  await reply(ctx, "✉️ Foydalanuvchiga yuboriladigan xabarni yozing (istalgan turdagi xabar).\n\nBekor qilish: /cancel");
}

async function sendDirectMessage(ctx: Ctx, messageId: number) {
  const target = Number(ctx.account.state?.telegram_id);
  await setState(ctx, null);
  try {
    await tg("sendMessage", { chat_id: target, text: "✉️ <b>Scorify jamoasidan xabar:</b>", parse_mode: "HTML" });
    await tg("copyMessage", { chat_id: target, from_chat_id: ctx.chatId, message_id: messageId });
    await send(ctx.chatId, "✅ Xabar yetkazildi.", { inline_keyboard: HOME });
  } catch (e) {
    await send(ctx.chatId, `⚠️ Yuborib bo'lmadi: ${esc(e instanceof Error ? e.message : String(e))}`, { inline_keyboard: HOME });
  }
}

async function recentUsers(ctx: Ctx) {
  const { data, error } = await ctx.db.rpc("telegram_recent_users", { _limit: 12 });
  if (error) throw error;
  const rows = (data ?? []) as { user_id: string; email: string; full_name: string | null; provider: string; created_at: string; plan_type: string | null }[];
  const icon = (p: string) => (p === "telegram" ? "🤖" : p === "google" ? "🟢" : "📧");
  await reply(ctx, "🆕 <b>Oxirgi ro'yxatdan o'tganlar</b>\n🤖 Telegram · 🟢 Google", [
    ...rows.map((r) => [cb(truncate(`${icon(r.provider)} ${fmtDate(r.created_at)} · ${r.full_name || (isTelegramEmail(r.email) ? "Telegram" : r.email)} · ${PLAN_LABEL[r.plan_type ?? "free"] ?? r.plan_type}`, 60), `ad:u:${r.user_id}`)]),
    ...HOME,
  ]);
}

// ---------------------------------------------------------------- website announcements

async function announcements(ctx: Ctx) {
  const { data } = await ctx.db.from("announcements").select("id,title,type,status,created_at")
    .order("created_at", { ascending: false }).limit(8);
  const rows = data ?? [];
  const text = ["📢 <b>Saytdagi e'lonlar</b>", "Faol e'lonlar foydalanuvchilarga saytda ko'rsatiladi.\n",
    ...rows.map((a) => `${a.status === "active" ? "🟢" : "⚪️"} ${esc(truncate(a.title, 50))} · ${a.type === "modal" ? "oyna" : "banner"} · ${fmtDate(a.created_at)}`),
    rows.length ? "" : "Hozircha e'lon yo'q."].join("\n");
  await reply(ctx, text, [
    [cb("➕ Yangi e'lon", "ad:an:new")],
    ...rows.filter((a) => a.status === "active").map((a) => [cb(`⏸ O'chirish: ${truncate(a.title, 30)}`, `ad:an:off:${a.id}`)]),
    ...HOME,
  ]);
}

async function createAnnouncement(ctx: Ctx, push: boolean) {
  const st = ctx.account.state ?? {};
  if (st.awaiting !== "ann_push" || typeof st.title !== "string" || typeof st.content !== "string") return announcements(ctx);
  await setState(ctx, null);
  const { error } = await ctx.db.from("announcements").insert({
    title: st.title, content: st.content, type: st.type === "modal" ? "modal" : "alert", status: "active",
  });
  if (error) throw error;
  let note = "";
  if (push) {
    const { data: b, error: bErr } = await ctx.db.from("telegram_broadcasts").insert({
      created_by: ctx.from.id, audience: "all", kind: "text",
      payload: { text: `📢 <b>${esc(st.title)}</b>\n\n${esc(st.content)}` },
    }).select("id").single();
    if (bErr) throw bErr;
    const { data: n } = await ctx.db.rpc("telegram_enqueue_broadcast", { _id: b.id });
    note = `\n📣 Telegramga ham yuborilmoqda: ${n} kishi.`;
    background(drain(ctx.db));
  }
  await reply(ctx, `✅ E'lon saytda e'lon qilindi.${note}`, [[cb("📢 E'lonlar", "ad:an")], ...HOME]);
}

// ---------------------------------------------------------------- bot status

async function botStatus(ctx: Ctx) {
  const info = await tg<Record<string, any>>("getWebhookInfo");
  const { data: s } = await ctx.db.rpc("telegram_admin_stats");
  const stats = (s ?? {}) as Record<string, number>;
  await reply(ctx, [
    "🤖 <b>Bot holati</b>\n",
    `Webhook: ${info.url ? "✅ ulangan" : "❌ o'rnatilmagan"}`,
    `Kutilayotgan yangilanishlar: ${info.pending_update_count ?? 0}`,
    info.last_error_message ? `Oxirgi xato: ${esc(info.last_error_message)} (${info.last_error_date ? fmtDate(new Date(info.last_error_date * 1000)) : ""})` : "Oxirgi xato: yo'q",
    `\n📬 Navbatda: ${stats.outbox_pending ?? 0} · 24 soatda xato: ${stats.outbox_failed_24h ?? 0}`,
    `👥 Bot foydalanuvchilari: ${stats.tg_total ?? 0} (bloklagan: ${stats.tg_blocked ?? 0})`,
  ].join("\n"), [
    [cb("🔧 Webhook va menyuni qayta sozlash", "ad:bot:setup")],
    [cb("♻️ Xatolarni qayta yuborish", "ad:bot:retry"), cb("📬 Navbatni yuborish", "ad:bot:drain")],
    [cb("⏰ Kunlik eslatmalarni hozir yuborish", "ad:bot:daily")],
    [cb("🔄 Yangilash", "ad:bot")],
    ...HOME,
  ]);
}

// ---------------------------------------------------------------- routing

export async function adminCallback(ctx: Ctx, parts: string[]) {
  const [, action, a, b] = parts;
  switch (action) {
    case "home": await setState(ctx, null); return showAdmin(ctx);
    case "stats": return showStats(ctx);
    case "bc":
      if (a === "a") return askBroadcastMessage(ctx, b);
      if (a === "go") return startBroadcast(ctx);
      if (a === "no") { await setState(ctx, null); return reply(ctx, "❌ Bekor qilindi.", HOME); }
      await setState(ctx, null);
      return chooseAudience(ctx);
    case "us": return askUserSearch(ctx);
    case "u": return userCard(ctx, a);
    case "new": return recentUsers(ctx);
    case "p": return confirmPlan(ctx, a, b);
    case "P": return applyPlan(ctx, a, b);
    case "dm": return askDirectMessage(ctx, Number(a));
    case "ban": return setBan(ctx, Number(a), true);
    case "unban": return setBan(ctx, Number(a), false);
    case "an":
      if (a === "new") {
        await setState(ctx, { awaiting: "ann_title" });
        return reply(ctx, "📢 Yangi e'lon sarlavhasini yuboring (bekor qilish: /cancel).");
      }
      if (a === "off" && b) {
        await ctx.db.from("announcements").update({ status: "inactive" }).eq("id", b);
        return announcements(ctx);
      }
      if (a === "t" && (b === "alert" || b === "modal")) {
        await setState(ctx, { ...(ctx.account.state ?? {}), awaiting: "ann_push", type: b });
        return reply(ctx, "Telegram bot foydalanuvchilariga ham yuboraymi?", [
          [cb("✅ Ha, saytga ham, botga ham", "ad:an:push:1")],
          [cb("🌐 Faqat saytga", "ad:an:push:0")],
        ]);
      }
      if (a === "push") return createAnnouncement(ctx, b === "1");
      return announcements(ctx);
    case "bot":
      if (a === "setup") {
        const r = await setupBot(ctx.db);
        const failed = Object.entries(r).filter(([, v]) => typeof v === "string" && v.startsWith("error"));
        return reply(ctx, failed.length ? `⚠️ Qisman: ${esc(failed.map(([k, v]) => `${k}: ${v}`).join("\n"))}` : "✅ Webhook, buyruqlar va menyu qayta sozlandi.", [[cb("⬅️ Bot holati", "ad:bot")]]);
      }
      if (a === "retry") {
        const { data } = await ctx.db.from("telegram_outbox").update({ status: "pending", attempts: 0, send_after: new Date().toISOString() })
          .eq("status", "failed").gte("created_at", new Date(Date.now() - 7 * 86_400_000).toISOString()).select("id");
        background(drain(ctx.db));
        return reply(ctx, `♻️ Qayta navbatga qo'yildi: ${data?.length ?? 0} ta.`, [[cb("⬅️ Bot holati", "ad:bot")]]);
      }
      if (a === "drain") {
        background(drain(ctx.db));
        return reply(ctx, "📬 Navbatdagi xabarlar yuborilmoqda.", [[cb("⬅️ Bot holati", "ad:bot")]]);
      }
      if (a === "daily") {
        const { data, error } = await ctx.db.rpc("telegram_daily_jobs");
        if (error) throw error;
        background(drain(ctx.db));
        const r = (data ?? {}) as Record<string, number>;
        return reply(ctx, `⏰ Navbatga qo'yildi:\n• Tarif tugashi: ${r.plan_expiring ?? 0}\n• Mashq eslatmasi: ${r.practice_reminder ?? 0}\n• Haftalik hisobot: ${r.weekly_report ?? 0}`,
          [[cb("⬅️ Bot holati", "ad:bot")]]);
      }
      return botStatus(ctx);
  }
  return showAdmin(ctx);
}

/** Handles admin dialog input. Returns true when the message was consumed. */
export async function adminInput(ctx: Ctx, message: { message_id: number; text?: string }): Promise<boolean> {
  const st = ctx.account.state;
  const text = message.text?.trim() ?? "";
  switch (st?.awaiting) {
    case "bc_msg":
      await previewBroadcast(ctx, message.message_id);
      return true;
    case "user_search":
      if (!text) { await send(ctx.chatId, "Matn ko'rinishida yuboring yoki /cancel."); return true; }
      await searchUsers(ctx, text);
      return true;
    case "dm":
      await sendDirectMessage(ctx, message.message_id);
      return true;
    case "ann_title":
      if (!text || text.length > 120) { await send(ctx.chatId, "Sarlavha 1–120 belgidan iborat matn bo'lsin."); return true; }
      await setState(ctx, { awaiting: "ann_content", title: text });
      await send(ctx.chatId, "Endi e'lon matnini yuboring (2000 belgigacha).");
      return true;
    case "ann_content":
      if (!text || text.length > 2000) { await send(ctx.chatId, "Matn 1–2000 belgidan iborat bo'lsin."); return true; }
      await setState(ctx, { ...st, awaiting: "ann_type", content: text });
      await send(ctx.chatId, "Saytda qanday ko'rsatilsin?", {
        inline_keyboard: [[cb("📌 Banner (yuqorida)", "ad:an:t:alert"), cb("🪟 Oyna (modal)", "ad:an:t:modal")]],
      });
      return true;
    case "bc_confirm":
    case "ann_type":
    case "ann_push":
      await send(ctx.chatId, "Yuqoridagi tugmalardan birini tanlang yoki /cancel.");
      return true;
  }
  return false;
}

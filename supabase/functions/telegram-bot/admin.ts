// Admin panel inside the bot (Telegram ID 6117815120 and linked site admins).
import { esc, tg, truncate } from "../_shared/telegram.ts";
import { isTelegramEmail } from "../_shared/telegram-accounts.ts";
import { app, band, bar, cb, type Ctx, fmtDate, type InlineKeyboard, PLAN_LABEL, reply, send, setState } from "./ui.ts";
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
  paid: "Learn / IELTS tarifdagilar",
  notstarted: "Darslarni hali boshlamaganlar",
};

const HOME: InlineKeyboard = [[cb("⬅️ Admin panel", "ad:home")]];

export async function showAdmin(ctx: Ctx) {
  const { data } = await ctx.db.rpc("telegram_admin_stats");
  const s = (data ?? {}) as Record<string, number>;
  const alerts = [
    s.ref_pending ? `💸 To'lash kerak: <b>${s.ref_pending}</b> ta so'rov (${money(s.ref_pending_sum)})` : "",
    s.expiring_7d ? `⏳ 7 kunda tugaydigan obuna: <b>${s.expiring_7d}</b>` : "",
    s.outbox_failed_24h ? `⚠️ Xabar yuborishda xato (24 soat): <b>${s.outbox_failed_24h}</b>` : "",
  ].filter(Boolean);
  await reply(ctx, ["👑 <b>Admin panel</b>", alerts.length ? `\n${alerts.join("\n")}` : "\n✅ Hammasi joyida — kutayotgan ish yo'q.", "\nBo'limni tanlang:"].join("\n"), [
    [cb("📊 Bugungi holat", "ad:stats")],
    [cb("👥 Foydalanuvchilar", "ad:ul"), cb(s.ref_pending ? `💸 To'lovlar (${s.ref_pending})` : "💸 To'lovlar", "ad:pay")],
    [cb("📣 Xabar yuborish", "ad:bc"), cb("📢 Sayt e'lonlari", "ad:an")],
    [cb("🤖 Bot holati", "ad:bot")],
    [app("🖥 Saytdagi admin panel", "/admin")],
  ]);
}

const LEVELS: Record<string, string> = { beginner: "Beginner", a1: "Elementary", a2: "Pre-Intermediate", b1: "Intermediate", b2: "Upper-Int.", c1: "Advanced" };
const money = (n: number) => `${String(Math.round(Number(n) || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm`;

const pct = (a: number, b: number) => (b > 0 ? `${Math.round((a / b) * 100)}%` : "—");
const num = (n: unknown) => Number(n ?? 0);

/** Bot statistics, one screen per topic: people, learning, funnel, and the older overview of plans, referrals and IELTS. */
async function showStats(ctx: Ctx, section = "u") {
  const { data: f, error: fe } = await ctx.db.rpc("telegram_admin_funnel");
  if (fe) throw fe;
  const { data: o, error: oe } = await ctx.db.rpc("telegram_admin_stats");
  if (oe) throw oe;
  const b = (f ?? {}) as Record<string, number>;
  const s = (o ?? {}) as Record<string, number>;
  const nav: InlineKeyboard = [
    [cb(section === "u" ? "• 👥 Odamlar" : "👥 Odamlar", "ad:stats:u"), cb(section === "l" ? "• 🎓 O'qish" : "🎓 O'qish", "ad:stats:l")],
    [cb(section === "f" ? "• 🔁 Voronka" : "🔁 Voronka", "ad:stats:f"), cb(section === "o" ? "• 💎 Boshqa" : "💎 Boshqa", "ad:stats:o")],
    [cb("🔄 Yangilash", `ad:stats:${section}`)],
    ...HOME,
  ];
  let text: string;
  if (section === "l") {
    text = [
      "🎓 <b>O'qish</b> (botga kirganlar orasida)\n",
      `Darslarni boshlaganlar: <b>${num(b.started)}</b>`,
      `Hali boshlamaganlar: <b>${num(b.not_started)}</b>`,
      "",
      `Bugun dars qilganlar (XP olgan): <b>${num(b.xp_today)}</b>`,
      `Bugun kamida 1 dars yoki mashqni tugatganlar: <b>${num(b.finished_today)}</b>`,
      "",
      `Butun saytda bugun o'qiganlar: ${num(s.learners_today)} · tugatilgan darslar: ${num(s.lessons_today)}`,
      `7 kunda tugatilgan darslar: ${num(s.lessons_7d)}`,
    ].join("\n");
  } else if (section === "f") {
    text = [
      "🔁 <b>Voronka</b> (botdan boshlab)\n",
      `1. Botga kirganlar: <b>${num(b.total)}</b>`,
      `2. Hisobini ulaganlar: <b>${num(b.linked)}</b> — ${pct(num(b.linked), num(b.total))}`,
      `3. Darsni boshlaganlar: <b>${num(b.started)}</b> — ${pct(num(b.started), num(b.linked))}`,
      `4. Bugun o'qiganlar: <b>${num(b.xp_today)}</b> — ${pct(num(b.xp_today), num(b.started))}`,
      "",
      `${bar(num(b.linked), num(b.total))} ulanish`,
      `${bar(num(b.started), num(b.linked))} boshlash`,
      `${bar(num(b.xp_today), num(b.started))} bugungi faollik`,
      "",
      `Hali boshlamaganlar: <b>${num(b.not_started)}</b> (shundan hisobi ulanmagan: ${num(b.total) - num(b.linked)})`,
    ].join("\n");
    nav.unshift([cb(`✉️ Boshlamaganlarga xabar yozish (${num(b.not_started)})`, "ad:bc:a:notstarted")]);
  } else if (section === "o") {
    text = [
      "💎 <b>Tariflar</b>",
      `Learn: <b>${num(s.paid_go)}</b> · IELTS: <b>${num(s.paid_plus)}</b> · bepul haftada: ${num(s.trial)}`,
      `7 kunda tugaydi: ${num(s.expiring_7d)}`,
      "\n🎁 <b>Referal</b>",
      `Taklif qilinganlar: ${num(s.ref_invited)}`,
      `Kutilayotgan to'lov: ${s.ref_pending ? `<b>${s.ref_pending}</b> (${money(s.ref_pending_sum)})` : "yo'q"}`,
      "\n🤖 <b>Xabarlar (24 soat)</b>",
      `Yuborildi: ${num(s.outbox_sent_24h)} · navbatda: ${num(s.outbox_pending)} · xato: ${num(s.outbox_failed_24h)}`,
      "\n✍️ <b>IELTS (7 kun)</b>",
      `Writing: ${num(s.essays_7d)} · Speaking: ${num(s.speaking_7d)}`,
    ].join("\n");
  } else {
    text = [
      "👥 <b>Botga kirganlar</b>\n",
      `Bugun qo'shilgan: <b>${num(b.today)}</b>`,
      `Oxirgi 7 kunda: <b>${num(b.d7)}</b>`,
      `Oxirgi 30 kunda: <b>${num(b.d30)}</b>`,
      `Jami: <b>${num(b.total)}</b>`,
      "",
      `Hisobi ulangan: ${num(b.linked)} · ulanmagan: ${num(b.total) - num(b.linked)}`,
      `Botni bloklaganlar: ${num(b.blocked)} · ban: ${num(s.tg_banned)}`,
    ].join("\n");
  }
  await reply(ctx, text, nav);
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

// ---------------------------------------------------------------- users menu & payouts

const LISTS: Record<string, string> = {
  paid: "💎 Pullik obunachilar",
  expiring: "⏳ 7 kunda tugaydi",
  trial_end: "🎁 Bepul hafta tugayapti (2 kun)",
  trial: "🆓 Bepul haftada",
  inactive: "😴 7 kundan beri o'qimayapti",
};

async function usersMenu(ctx: Ctx) {
  await reply(ctx, "👥 <b>Foydalanuvchilar</b>\n\nQidiring yoki ro'yxatni tanlang:", [
    [cb("🔍 Qidirish", "ad:us"), cb("🆕 Yangilar", "ad:new")],
    [cb(LISTS.paid, "ad:ul:paid"), cb(LISTS.expiring, "ad:ul:expiring")],
    [cb(LISTS.trial_end, "ad:ul:trial_end"), cb(LISTS.trial, "ad:ul:trial")],
    [cb(LISTS.inactive, "ad:ul:inactive")],
    ...HOME,
  ]);
}

async function userList(ctx: Ctx, kind: string) {
  if (!LISTS[kind]) return usersMenu(ctx);
  const { data, error } = await ctx.db.rpc("telegram_admin_list", { _kind: kind, _limit: 15 });
  if (error) throw error;
  const rows = (data ?? []) as { user_id: string; name: string; plan_type: string | null; expires_at: string | null; trial_ends_at: string | null; level: string | null; xp: number | null }[];
  const tail = (r: (typeof rows)[number]) => kind === "paid" || kind === "expiring" ? `${PLAN_LABEL[r.plan_type ?? ""] ?? ""} · ${r.expires_at ? fmtDate(r.expires_at) : "—"}`
    : kind === "trial_end" || kind === "trial" ? `${r.trial_ends_at ? fmtDate(r.trial_ends_at) : "—"} gacha` : `${r.xp ?? 0} XP`;
  await reply(ctx, `${LISTS[kind]}\n${rows.length ? "" : "\nHozircha hech kim yo'q."}`, [
    ...rows.map((r) => [cb(truncate(`${r.name} · ${tail(r)}`, 60), `ad:u:${r.user_id}`)]),
    [cb("⬅️ Foydalanuvchilar", "ad:ul")],
    ...HOME,
  ]);
}

async function payouts(ctx: Ctx) {
  const { data } = await ctx.db.from("referral_withdrawals").select("id,amount,card_number,card_holder,created_at,user_id")
    .eq("status", "pending").order("created_at", { ascending: true }).limit(10);
  const rows = data ?? [];
  if (!rows.length) return reply(ctx, "💸 <b>To'lovlar</b>\n\nKutilayotgan yechib olish so'rovi yo'q ✅", HOME);
  await reply(ctx, `💸 <b>To'lovlar</b>\n\nKutilayotgan so'rovlar: <b>${rows.length}</b>. Pastda har biri alohida yuboriladi.`, HOME);
  for (const w of rows) {
    const { data: p } = await ctx.db.from("profiles").select("full_name,public_id").eq("user_id", w.user_id).maybeSingle();
    await send(ctx.chatId, [
      `👤 ${esc(p?.full_name ?? "Ismsiz")}${p?.public_id ? ` · #${esc(p.public_id)}` : ""}`,
      `💰 <b>${money(w.amount)}</b>`,
      `💳 <code>${String(w.card_number).replace(/(\d{4})(?=\d)/g, "$1 ")}</code>`,
      `🧾 ${esc(w.card_holder)}`,
      `<i>So'rov #${w.id} · ${fmtDate(w.created_at)}</i>`,
    ].join("\n"), { inline_keyboard: [[cb("✅ To'landi", `ad:wd:ok:${w.id}`), cb("❌ Rad etish", `ad:wd:no:${w.id}`)]] });
  }
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
  const trialLeft = u.trial_ends_at ? Math.ceil((new Date(u.trial_ends_at).getTime() - Date.now()) / 86_400_000) : 0;
  const planLine = u.plan !== "free"
    ? `💎 <b>${PLAN_LABEL[u.plan] ?? esc(u.plan_name ?? u.plan)}</b>${u.expires_at ? ` · ${fmtDate(u.expires_at, true)} gacha` : ""}`
    : trialLeft > 0 ? `🆓 Bepul haftada — <b>${trialLeft} kun</b> qoldi` : "🆓 Free (sinov tugagan)";
  const text = [
    `👤 <b>${esc(u.full_name || "Ismsiz")}</b>${u.is_admin ? " 👑" : ""}${u.username ? ` · @${esc(u.username)}` : ""}`,
    `${isTelegramEmail(u.email) ? "📧 —" : `📧 ${esc(u.email)}`} · ID #${esc(u.public_id ?? "—")}`,
    `🔐 ${login} · ro'yxatdan: ${fmtDate(u.created_at, true)} · oxirgi kirish: ${u.last_sign_in_at ? fmtDate(u.last_sign_in_at, true) : "—"}`,
    `\n${planLine}`,
    u.level
      ? `\n🎓 <b>${LEVELS[u.level] ?? esc(u.level)}</b> · ⚡️ ${u.xp ?? 0} XP · 🔥 ${u.streak ?? 0} kun · ${u.lessons_done} ta dars${u.last_learn_day ? ` · oxirgi o'qish ${fmtDate(u.last_learn_day)}` : ""}`
      : "\n🎓 Kursni hali boshlamagan",
    u.essays || u.speaking || u.mocks ? `✍️ IELTS: Writing ${u.essays} (o'rtacha ${band(u.avg_writing === null ? null : Number(u.avg_writing))}) · Speaking ${u.speaking} (${band(u.avg_speaking === null ? null : Number(u.avg_speaking))}) · Mock ${u.mocks}` : "",
    u.invited || u.ref_balance ? `🎁 Referal: ${u.invited} taklif · balans ${money(u.ref_balance)}` : "",
    u.telegram_id ? `🤖 ${u.telegram_username ? `@${esc(u.telegram_username)}` : u.telegram_id}${u.telegram_banned ? " · 🚫 ban" : ""}${u.telegram_blocked ? " · botni bloklagan" : ""}` : "🤖 Telegram ulanmagan",
  ].filter((x) => x !== "").join("\n");
  const keyboard: InlineKeyboard = [
    [cb("Learn +30 kun", `ad:p:go:${userId}`), cb("Learn +6 oy", `ad:p:go180:${userId}`)],
    [cb("IELTS +30 kun", `ad:p:plus:${userId}`), cb("IELTS +6 oy", `ad:p:plus180:${userId}`)],
    [cb("⬇️ Free'ga o'tkazish", `ad:p:free:${userId}`)],
  ];
  if (u.telegram_id) {
    keyboard.push([cb("✉️ Xabar yozish", `ad:dm:${u.telegram_id}`),
      u.telegram_banned ? cb("✅ Bandan chiqarish", `ad:unban:${u.telegram_id}`) : cb("🚫 Botda ban", `ad:ban:${u.telegram_id}`)]);
  }
  keyboard.push([cb("🔄 Yangilash", `ad:u:${userId}`), cb("👥 Ro'yxat", "ad:ul")], ...HOME);
  await reply(ctx, text, keyboard);
}

/** "go", "plus" = 30 days; "go180", "plus180" = 6 months. */
function planChoice(value: string) {
  const plan = value.replace(/180$/, "");
  return { plan, days: value.endsWith("180") ? 180 : 30 };
}

async function confirmPlan(ctx: Ctx, value: string, userId: string) {
  const { plan, days } = planChoice(value);
  const what = plan === "free" ? "Free tarifga o'tkazish (limitlar nolga tushadi)"
    : `${PLAN_LABEL[plan]} — ${days === 180 ? "6 oy (limitlar har 30 kunda yangilanadi)" : "30 kun"} (faol bo'lsa uzaytiriladi)`;
  await reply(ctx, `Tasdiqlaysizmi?\n\n<b>${what}</b>`, [
    [cb("✅ Ha", `ad:P:${value}:${userId}`), cb("❌ Yo'q", `ad:u:${userId}`)],
  ]);
}

async function applyPlan(ctx: Ctx, value: string, userId: string) {
  const { plan, days } = planChoice(value);
  const { data, error } = await ctx.db.rpc("telegram_admin_set_plan", { _user: userId, _plan: plan, _days: days });
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
    [cb("⏰ Eslatmalarni hozir yuborish", "ad:bot:daily")],
    [cb("🔄 Yangilash", "ad:bot")],
    ...HOME,
  ]);
}

// ---------------------------------------------------------------- routing

export async function adminCallback(ctx: Ctx, parts: string[]) {
  const [, action, a, b] = parts;
  switch (action) {
    case "home": await setState(ctx, null); return showAdmin(ctx);
    case "stats": return showStats(ctx, a || "u");
    case "bc":
      if (a === "a") return askBroadcastMessage(ctx, b);
      if (a === "go") return startBroadcast(ctx);
      if (a === "no") { await setState(ctx, null); return reply(ctx, "❌ Bekor qilindi.", HOME); }
      await setState(ctx, null);
      return chooseAudience(ctx);
    case "ul": return a ? userList(ctx, a) : usersMenu(ctx);
    case "pay": return payouts(ctx);
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
    case "wd": {
      const id = Number(b);
      if (!Number.isSafeInteger(id) || (a !== "ok" && a !== "no")) return;
      const { data, error } = await ctx.db.rpc("internal_ref_resolve_withdrawal", { _id: id, _paid: a === "ok" });
      if (error) return reply(ctx, "ℹ️ Bu so'rov allaqachon ko'rib chiqilgan yoki topilmadi.");
      const r = data as { amount: number };
      const sum = `${String(r.amount).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm`;
      return reply(ctx, a === "ok"
        ? `✅ So'rov #${id} — <b>${sum}</b> to'landi deb belgilandi. Foydalanuvchiga xabar yuborildi.`
        : `❌ So'rov #${id} rad etildi. <b>${sum}</b> foydalanuvchi balansiga qaytarildi.`);
    }
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
        const [jobs, lessons] = await Promise.all([
          ctx.db.rpc("telegram_daily_jobs"),
          ctx.db.rpc("telegram_enqueue_learn_slot", { _slot: "evening", _window_minutes: 0 }),
        ]);
        if (jobs.error) throw jobs.error;
        if (lessons.error) throw lessons.error;
        background(drain(ctx.db));
        const r = (jobs.data ?? {}) as Record<string, number>;
        return reply(ctx, `⏰ Navbatga qo'yildi:\n• Dars eslatmasi: ${lessons.data ?? 0}\n• Tarif tugashi: ${r.plan_expiring ?? 0}\n• Haftalik hisobot: ${r.weekly_report ?? 0}\n\n` +
          "<i>Avtomatik: dars eslatmalari 09:30 / 14:30 / 20:30 (navbatma-navbat).</i>",
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

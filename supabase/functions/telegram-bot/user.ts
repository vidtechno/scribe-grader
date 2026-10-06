// Learner features of the bot. Writing and Speaking answers are only accepted on the website;
// the bot shows results, progress, goals, plan, leaderboard, referrals and daily practice.
import { esc, PAYMENTS_USERNAME, SITE_URL, botLink, truncate } from "../_shared/telegram.ts";
import {
  ensureScorifyUser, isTelegramEmail, linkTelegramToUser, type TelegramAccount,
} from "../_shared/telegram-accounts.ts";
import {
  app, band, bar, BTN, cb, type Ctx, daysUntil, fmtDate, fmtShort, type InlineKeyboard, link, mainKeyboard,
  PLAN_LABEL, reply, send, setState, tzDate,
} from "./ui.ts";
import { countSince, DEFAULT_GOALS, loadOverview, scoreStats, streakDays, trendArrow, weekStart } from "./data.ts";
import { resultCard, type ResultKind } from "./results.ts";
import { dailySet, quizOptions, WORDS } from "./content.ts";

// ---------------------------------------------------------------- start & menu

export async function showMenu(ctx: Ctx, text?: string) {
  const name = esc(ctx.from.first_name ?? "do'stim");
  const body = text ?? (ctx.account.user_id
    ? `Asosiy menyu, ${name}. Kerakli bo'limni tanlang 👇`
    : `Assalomu alaykum, ${name}! 👋\n\n<b>Scorify</b> — IELTS Writing va Speaking uchun sun'iy intellekt asosidagi baholash platformasi.\n\n` +
      `🤖 Bu bot orqali siz:\n• natijalaringizni avtomatik olasiz\n• statistikangiz, maqsadingiz va tarifingizni kuzatasiz\n` +
      `• har kuni yangi so'z, savol va grammatika maslahatini olasiz\n\n` +
      `Boshlash uchun <b>${BTN.register}</b> tugmasini bosing yoki saytdagi Google hisobingizni ulang.`);
  await send(ctx.chatId, body, mainKeyboard(ctx));
}

export async function handleStart(ctx: Ctx, payload: string) {
  if (payload.startsWith("login_")) return loginRequest(ctx, payload.slice(6));
  if (payload.startsWith("link_")) return linkRequest(ctx, payload.slice(5));
  if (payload.startsWith("ref_")) {
    const code = payload.slice(4).toUpperCase();
    if (/^[A-Z0-9]{4,16}$/.test(code) && !ctx.account.user_id) {
      await ctx.db.from("telegram_accounts").update({ pending_ref: code }).eq("telegram_id", ctx.account.telegram_id);
      ctx.account.pending_ref = code;
      return showMenu(ctx, `Assalomu alaykum! 👋 Sizni do'stingiz <b>Scorify</b>ga taklif qildi.\n\n` +
        `Scorify — IELTS Writing va Speaking javoblaringizni bir necha soniyada band bo'yicha baholaydi.\n\n` +
        `<b>${BTN.register}</b> tugmasini bosing — taklif avtomatik hisoblanadi va bepul Writing hamda Speaking baholash olasiz.`);
    }
  }
  const sections: Record<string, (c: Ctx) => Promise<void>> = {
    stats: showStats, results: (c) => showResults(c, "a"), goal: showGoal, plan: showPlan, invite: showInvite,
    daily: showDaily, quiz: newQuiz, settings: showSettings, top: (c) => showTop(c, "w"),
  };
  if (sections[payload]) {
    await showMenu(ctx);
    return sections[payload](ctx);
  }
  return showMenu(ctx);
}

/** Returns the linked Scorify user or asks the person to register first. */
async function requireUser(ctx: Ctx): Promise<string | null> {
  if (ctx.account.user_id) return ctx.account.user_id;
  await reply(ctx, "Bu bo'lim uchun Scorify hisobi kerak.\n\n" +
    "• Yangi bo'lsangiz — <b>Ro'yxatdan o'tish</b> (bir bosishda, Telegram orqali).\n" +
    "• Saytda Google orqali hisobingiz bo'lsa — uni ulang, natijalaringiz shu yerga keladi.", [
    [cb(BTN.register, "u:register")],
    [cb(BTN.linkGoogle, "u:linkinfo")],
  ]);
  return null;
}

export async function register(ctx: Ctx) {
  if (ctx.account.user_id) return showMenu(ctx, "Sizda allaqachon Scorify hisobi bor ✅");
  const { created } = await ensureScorifyUser(ctx.db, ctx.account);
  const { data } = await ctx.db.from("telegram_accounts").select("*").eq("telegram_id", ctx.account.telegram_id).single();
  if (data) ctx.account = data as TelegramAccount;
  await showMenu(ctx, created
    ? "🎉 <b>Hisobingiz yaratildi!</b>\n\nSizga <b>Free</b> tarif berildi: 1 ta Writing va 1 ta Speaking baholash.\n\n" +
      "Esse yozish va speaking topshirish sayt (ilova) ichida bo'ladi — natija tayyor bo'lishi bilan shu yerga yuboraman. " +
      "Saytga kirish uchun <b>Continue with Telegram</b> tugmasidan foydalaning."
    : "✅ Hisobingiz Telegram'ga ulandi.");
  await send(ctx.chatId, "Birinchi mashqni boshlaymizmi?", {
    inline_keyboard: [[app("✍️ Writing", "/writing"), app("🎤 Speaking", "/speaking")], [app("🏠 Bosh sahifa", "/dashboard")]],
  });
}

export async function linkInfo(ctx: Ctx) {
  await reply(ctx, "🔗 <b>Google hisobingizni ulash</b>\n\n" +
    "1. Saytga Google orqali kiring.\n2. <b>Profile</b> sahifasidagi <b>Connect Telegram</b> tugmasini bosing.\n" +
    "3. Telegram ochiladi — shu yerda <b>Start</b>ni bosing. Tayyor!\n\n" +
    "Shundan so'ng barcha natijalaringiz, tarifingiz va statistikangiz shu botda ko'rinadi.", [
    [link("🌐 Profile sahifasini ochish", `${SITE_URL}/profile?connect=telegram`)],
  ]);
}

// ---------------------------------------------------------------- login & linking from the website

async function loginRequest(ctx: Ctx, code: string) {
  const { data: row } = await ctx.db.from("telegram_auth_requests").select("*").eq("code", code).eq("kind", "login").maybeSingle();
  if (!row || row.status !== "pending" || new Date(row.expires_at) < new Date()) {
    return showMenu(ctx, "⌛️ Bu kirish havolasi eskirgan. Saytda <b>Continue with Telegram</b> tugmasini qayta bosing.");
  }
  await send(ctx.chatId,
    `🔐 <b>Scorify.uz saytiga kirish</b>\n\n🖥 Qurilma: ${esc(row.client_info ?? "brauzer")}\n🕐 ${fmtShort(row.created_at)} ` +
    `${new Intl.DateTimeFormat("uz-UZ", { timeZone: "Asia/Tashkent", hour: "2-digit", minute: "2-digit" }).format(new Date(row.created_at))}\n\n` +
    `Agar kirishni hozir o'zingiz boshlagan bo'lsangiz, <b>Tasdiqlash</b>ni bosing.\n` +
    `⚠️ So'rovni siz yubormagan bo'lsangiz — bosmang, hech kimga bermang.`,
    { inline_keyboard: [[cb("✅ Tasdiqlash", `lg:ok:${code}`), cb("❌ Rad etish", `lg:no:${code}`)]] });
}

export async function loginDecision(ctx: Ctx, code: string, approve: boolean) {
  const { data: row } = await ctx.db.from("telegram_auth_requests").select("*").eq("code", code).eq("kind", "login").maybeSingle();
  if (!row || row.status !== "pending" || new Date(row.expires_at) < new Date()) {
    return reply(ctx, "⌛️ So'rov eskirgan yoki allaqachon ishlatilgan. Saytda qaytadan urinib ko'ring.");
  }
  if (!approve) {
    await ctx.db.from("telegram_auth_requests").update({ status: "rejected", telegram_id: ctx.from.id }).eq("code", code);
    return reply(ctx, "❌ Kirish rad etildi.");
  }
  const { created } = await ensureScorifyUser(ctx.db, ctx.account);
  await ctx.db.from("telegram_auth_requests").update({ status: "confirmed", telegram_id: ctx.from.id })
    .eq("code", code).eq("status", "pending");
  const { data } = await ctx.db.from("telegram_accounts").select("*").eq("telegram_id", ctx.account.telegram_id).single();
  if (data) ctx.account = data as TelegramAccount;
  await reply(ctx, "✅ <b>Tasdiqlandi!</b> Brauzerga qayting — kirish avtomatik yakunlanadi.");
  if (created) await showMenu(ctx, "🎉 Scorify hisobingiz yaratildi. Natijalaringiz shu botga keladi.");
}

async function linkRequest(ctx: Ctx, code: string) {
  const { data: row } = await ctx.db.from("telegram_auth_requests").select("*").eq("code", code).eq("kind", "link").maybeSingle();
  if (!row || row.status !== "pending" || new Date(row.expires_at) < new Date() || !row.user_id) {
    return showMenu(ctx, "⌛️ Ulash havolasi eskirgan. Saytdagi Profile sahifasida <b>Connect Telegram</b>ni qayta bosing.");
  }
  const result = await linkTelegramToUser(ctx.db, ctx.account, row.user_id);
  if (!result.ok) {
    return showMenu(ctx, result.reason === "linked_elsewhere"
      ? "⚠️ Bu Telegram allaqachon boshqa Scorify hisobiga ulangan.\n\nAvval uni uzing: ⚙️ Sozlamalar → Telegram'ni hisobdan uzish, so'ng saytda qayta ulang."
      : "⚠️ Bu Telegram orqali yaratilgan Scorify hisobingizda natijalar yoki tarif bor, shuning uchun uni boshqa hisobga avtomatik almashtira olmayman.\n\n" +
        `Ikkala hisobni birlashtirish uchun yozing: @${PAYMENTS_USERNAME}`);
  }
  await ctx.db.from("telegram_auth_requests").update({ status: "used", telegram_id: ctx.from.id }).eq("code", code);
  const { data } = await ctx.db.from("telegram_accounts").select("*").eq("telegram_id", ctx.account.telegram_id).single();
  if (data) ctx.account = data as TelegramAccount;
  const { data: profile } = await ctx.db.from("profiles").select("email,full_name").eq("user_id", row.user_id).maybeSingle();
  await showMenu(ctx, `✅ <b>Hisob ulandi!</b>\n\n👤 ${esc(profile?.full_name ?? "")} ${profile?.email ? `(${esc(profile.email)})` : ""}\n\n` +
    "Endi Writing, Speaking va Mock test natijalaringiz shu yerga avtomatik keladi.");
}

// ---------------------------------------------------------------- statistics

export async function showStats(ctx: Ctx) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  const o = await loadOverview(ctx.db, userId);
  const w = scoreStats(o.essays), s = scoreStats(o.speaking), m = scoreStats(o.mocks);
  const streak = streakDays([...o.essays, ...o.speaking]);
  const ws = weekStart();
  const weekW = countSince(o.essays, ws), weekS = countSince(o.speaking, ws);
  const latest = [w.last, s.last].filter((x): x is number => typeof x === "number");
  const current = latest.length ? Math.max(...latest) : null;

  const lines = [`📊 <b>Statistikangiz</b>\n`];
  lines.push(`✍️ <b>Writing</b> — ${w.count} ta esse`);
  if (w.count) {
    lines.push(`   O'rtacha <b>${band(w.avg)}</b> · Eng yaxshi <b>${band(w.best)}</b> · Oxirgi <b>${band(w.last)}</b>`);
    if (w.trend.length > 1) lines.push(`   Trend: ${w.trend.map(band).join(" → ")}${trendArrow(w.trend)}`);
  }
  lines.push(`\n🎤 <b>Speaking</b> — ${s.count} ta urinish`);
  if (s.count) {
    lines.push(`   O'rtacha <b>${band(s.avg)}</b> · Eng yaxshi <b>${band(s.best)}</b> · Oxirgi <b>${band(s.last)}</b>`);
    if (s.trend.length > 1) lines.push(`   Trend: ${s.trend.map(band).join(" → ")}${trendArrow(s.trend)}`);
  }
  if (m.count) lines.push(`\n🧪 <b>Mock test</b> — ${m.count} ta · Eng yaxshi <b>${band(m.best)}</b>`);
  lines.push(`\n🔥 Streak: <b>${streak}</b> kun${streak >= 3 ? " — zo'r ketyapsiz!" : ""}`);
  lines.push(`📅 Bu hafta: Writing ${weekW}/${o.goals.weekly_essays} · Speaking ${weekS}/${o.goals.weekly_speaking}`);
  lines.push(`🎯 Maqsad: <b>${band(o.goals.target_band)}</b>${current !== null
    ? (current >= o.goals.target_band ? " ✅ erishildi" : ` (yana ${band(o.goals.target_band - current)} band)`) : ""}`);
  if (o.goals.exam_date) {
    const d = daysUntil(o.goals.exam_date);
    if (d >= 0) lines.push(`🗓 Imtihongacha: <b>${d}</b> kun`);
  }
  if (!w.count && !s.count) lines.push("\nHali natija yo'q. Birinchi mashqni boshlang — natija shu yerga keladi 👇");

  await reply(ctx, lines.join("\n"), [
    [cb(BTN.results, "r:l:a"), cb(BTN.goal, "u:goal")],
    [app("✍️ Writing", "/writing"), app("🎤 Speaking", "/speaking")],
    [app("📈 Saytda batafsil", "/dashboard")],
  ]);
}

// ---------------------------------------------------------------- results

export async function showResults(ctx: Ctx, filter: string) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  const o = await loadOverview(ctx.db, userId);
  const items = [
    ...(filter === "a" || filter === "e" ? o.essays.map((x) => ({ ...x, k: "e" as const, icon: "✍️" })) : []),
    ...(filter === "a" || filter === "s" ? o.speaking.map((x) => ({ ...x, k: "s" as const, icon: "🎤" })) : []),
    ...(filter === "a" || filter === "m" ? o.mocks.map((x) => ({ ...x, k: "m" as const, icon: "🧪" })) : []),
  ].sort((a, b) => b.created_at.localeCompare(a.created_at)).slice(0, 10);

  const tab = (label: string, f: string) => cb(filter === f ? `• ${label} •` : label, `r:l:${f}`);
  const keyboard: InlineKeyboard = [[tab("Hammasi", "a"), tab("✍️", "e"), tab("🎤", "s"), tab("🧪", "m")]];
  for (const i of items) {
    keyboard.push([cb(`${i.icon} ${band(i.score)} · ${truncate(i.label, 14)} · ${fmtShort(i.created_at)} · ${truncate(i.topic, 22)}`, `r:v:${i.k}:${i.id}`)]);
  }
  keyboard.push([app("🗂 Saytdagi tarix", filter === "s" ? "/speaking-history" : filter === "m" ? "/mock-test" : "/essays")]);
  await reply(ctx, items.length
    ? "📝 <b>Oxirgi natijalaringiz</b>\nBatafsil ko'rish uchun natijani tanlang 👇"
    : "📝 Bu bo'limda hali natija yo'q.\n\nSaytda esse yozing yoki speaking topshiring — natija avtomatik shu yerga keladi.", keyboard);
}

export async function showResult(ctx: Ctx, kind: ResultKind, id: string) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  const card = await resultCard(ctx.db, kind, id, userId, { full: true });
  if (!card) return reply(ctx, "Natija topilmadi.", [[cb("⬅️ Orqaga", "r:l:a")]]);
  await reply(ctx, card.text, card.keyboard);
}

// ---------------------------------------------------------------- goals (shared with the website dashboard)

async function goals(ctx: Ctx, userId: string) {
  const { data } = await ctx.db.from("user_goals").select("target_band,weekly_essays,weekly_speaking,exam_date").eq("user_id", userId).maybeSingle();
  return data ? { ...DEFAULT_GOALS, ...data, target_band: Number(data.target_band) } : { ...DEFAULT_GOALS };
}

async function saveGoals(ctx: Ctx, userId: string, patch: Record<string, unknown>) {
  const current = await goals(ctx, userId);
  const { error } = await ctx.db.from("user_goals").upsert({ user_id: userId, ...current, ...patch, updated_at: new Date().toISOString() });
  if (error) throw error;
}

export async function showGoal(ctx: Ctx) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  const g = await goals(ctx, userId);
  const o = await loadOverview(ctx.db, userId);
  const ws = weekStart();
  const weekW = countSince(o.essays, ws), weekS = countSince(o.speaking, ws);
  const exam = g.exam_date ? daysUntil(g.exam_date) : null;
  const text = [
    "🎯 <b>Maqsadingiz</b> (saytdagi Goals bilan bir xil)\n",
    `🏅 Maqsad band: <b>${band(g.target_band)}</b>`,
    `🗓 Imtihon sanasi: <b>${g.exam_date ? `${fmtDate(g.exam_date, true)}${exam !== null && exam >= 0 ? ` (${exam} kun qoldi)` : " (o'tib ketgan)"}` : "belgilanmagan"}</b>`,
    `\n📅 <b>Haftalik reja</b>`,
    `✍️ Writing: ${weekW}/${g.weekly_essays} ${bar(weekW, g.weekly_essays, 8)}`,
    `🎤 Speaking: ${weekS}/${g.weekly_speaking} ${bar(weekS, g.weekly_speaking, 8)}`,
    "\nO'zgartirish uchun tugmalardan foydalaning 👇",
  ].join("\n");
  const bands = [5.5, 6, 6.5, 7, 7.5, 8, 8.5];
  await reply(ctx, text, [
    bands.slice(0, 4).map((b) => cb(b === g.target_band ? `✅${b.toFixed(1)}` : b.toFixed(1), `g:b:${b}`)),
    bands.slice(4).map((b) => cb(b === g.target_band ? `✅${b.toFixed(1)}` : b.toFixed(1), `g:b:${b}`)),
    [cb("✍️ −", "g:we:-1"), cb(`Writing: ${g.weekly_essays}/hafta`, "g:noop"), cb("✍️ +", "g:we:1")],
    [cb("🎤 −", "g:ws:-1"), cb(`Speaking: ${g.weekly_speaking}/hafta`, "g:noop"), cb("🎤 +", "g:ws:1")],
    [cb("🗓 Imtihon sanasini kiritish", "g:date"), ...(g.exam_date ? [cb("🗑 Sanani o'chirish", "g:date:clear")] : [])],
  ]);
}

export async function goalAction(ctx: Ctx, parts: string[]) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  const g = await goals(ctx, userId);
  const [, action, value] = parts;
  if (action === "b") {
    const b = Number(value);
    if (b >= 4 && b <= 9) await saveGoals(ctx, userId, { target_band: b });
  } else if (action === "we" || action === "ws") {
    const key = action === "we" ? "weekly_essays" : "weekly_speaking";
    const next = Math.max(0, Math.min(21, g[key] + Number(value)));
    await saveGoals(ctx, userId, { [key]: next });
  } else if (action === "date") {
    if (value === "clear") {
      await saveGoals(ctx, userId, { exam_date: null });
    } else {
      await setState(ctx, { awaiting: "exam_date" });
      return send(ctx.chatId, "🗓 Imtihon sanasini yuboring, masalan: <b>25.12.2026</b>\n\nBekor qilish: /cancel");
    }
  } else if (action === "noop") {
    return;
  }
  await showGoal(ctx);
}

export async function examDateInput(ctx: Ctx, text: string) {
  const userId = ctx.account.user_id;
  if (!userId) return setState(ctx, null);
  const m = /^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/.exec(text.trim()) ?? null;
  const iso = /^(\d{4})-(\d{2})-(\d{2})$/.exec(text.trim());
  const date = m ? `${m[3]}-${m[2].padStart(2, "0")}-${m[1].padStart(2, "0")}` : iso ? text.trim() : null;
  const valid = date && !Number.isNaN(Date.parse(`${date}T00:00:00Z`)) && new Date(`${date}T00:00:00Z`).toISOString().startsWith(date);
  if (!valid || daysUntil(date!) < 0 || daysUntil(date!) > 730) {
    return send(ctx.chatId, "Sanani tushunmadim yoki u o'tib ketgan. Masalan: <b>25.12.2026</b> (bekor qilish: /cancel)");
  }
  await saveGoals(ctx, userId, { exam_date: date });
  await setState(ctx, null);
  await send(ctx.chatId, `✅ Imtihon sanasi saqlandi: <b>${fmtDate(date!, true)}</b> (${daysUntil(date!)} kun qoldi).`);
  await showGoal({ ...ctx, messageId: undefined });
}

// ---------------------------------------------------------------- plan

export async function showPlan(ctx: Ctx) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  const o = await loadOverview(ctx.db, userId);
  const sub = o.sub;
  const plan = sub?.plan_type ?? "free";
  const days = sub?.expires_at ? daysUntil(sub.expires_at) : null;
  const usage = (label: string, used = 0, limit = 0) => limit <= 0
    ? `${label}: bu tarifda yo'q`
    : `${label}: ${used}/${limit} ${bar(used, limit, 8)}${limit - used > 0 ? ` (${limit - used} ta qoldi)` : " — limit tugadi"}`;
  const text = [
    `💎 <b>Tarifingiz: ${PLAN_LABEL[plan] ?? esc(sub?.plan_name ?? plan)}</b>`,
    ...(sub?.expires_at ? [`⏳ Amal qiladi: ${fmtDate(sub.expires_at, true)} gacha${days !== null ? ` (${Math.max(0, days)} kun)` : ""}`] : []),
    "",
    usage("✍️ Writing", sub?.writing_used, sub?.writing_limit),
    usage("🎤 Speaking", sub?.speaking_used, sub?.speaking_limit),
    usage("🧪 Mock test", sub?.mock_test_used, sub?.mock_test_limit),
    "",
    "<b>Tariflar (oyiga):</b>",
    "• <b>Scorify Go</b> — $5 / 49 000 so'm: 20 Writing, 15 Speaking, 3 Mock test",
    "• <b>Scorify Plus</b> — $9 / 99 000 so'm: 50 Writing, 40 Speaking, 8 Mock test",
    "",
    "💳 To'lov Telegram orqali qabul qilinadi, tasdiqlangach tarif 30 kunga yoqiladi va shu yerga xabar keladi.",
  ].join("\n");
  const id = o.profile?.public_id ? ` Mening ID: #${o.profile.public_id}.` : "";
  const buy = (name: string, price: string) => link(`💳 ${name} — ${price}`,
    `https://t.me/${PAYMENTS_USERNAME}?text=${encodeURIComponent(`Salom! Men "${name}" tarifini sotib olmoqchiman (${price} / oy).${id}`)}`);
  await reply(ctx, text, [
    [buy("Scorify Go", "$5 yoki 49 000 so'm")],
    [buy("Scorify Plus", "$9 yoki 99 000 so'm")],
    [cb("🎁 Bepul olish: do'stlarni taklif qilish", "u:invite")],
  ]);
}

// ---------------------------------------------------------------- leaderboard

export async function showTop(ctx: Ctx, period: string) {
  const now = new Date();
  const today = tzDate(now);
  const since = period === "d" ? `${today}T00:00:00+05:00`
    : period === "m" ? `${today.slice(0, 8)}01T00:00:00+05:00` : `${weekStart(now)}T00:00:00+05:00`;
  const { data, error } = await ctx.db.rpc("telegram_leaderboard", { _since: since, _limit: 1000 });
  if (error) throw error;
  const rows = (data ?? []) as { user_id: string; rank: number; avg: number; count: number; name: string }[];
  const medal = (r: number) => (r === 1 ? "🥇" : r === 2 ? "🥈" : r === 3 ? "🥉" : `${r}.`);
  const short = (n: string) => {
    const [first, second] = (n || "Foydalanuvchi").trim().split(/\s+/);
    return esc(truncate(second ? `${first} ${second[0]}.` : first, 24));
  };
  const title = period === "d" ? "bugungi" : period === "m" ? "oylik" : "haftalik";
  const lines = [`🏆 <b>Writing reytingi — ${title}</b>`, "<i>Kamida 2 ta esse; o'rtacha band + faollik bonusi</i>\n"];
  if (!rows.length) lines.push("Hali hech kim reytingga kirmadi. Birinchi bo'ling! 💪");
  for (const r of rows.slice(0, 10)) lines.push(`${medal(r.rank)} ${short(r.name)} — <b>${band(r.avg)}</b> · ${r.count} ta esse`);
  const me = ctx.account.user_id ? rows.find((r) => r.user_id === ctx.account.user_id) : null;
  if (me && me.rank > 10) lines.push(`…\n${me.rank}. <b>Siz</b> — ${band(me.avg)} · ${me.count} ta esse`);
  else if (!me && ctx.account.user_id) lines.push("\nSiz hali bu davrda reytingda yo'qsiz — 2 ta esse yozing.");
  const tab = (label: string, p: string) => cb(period === p ? `• ${label} •` : label, `t:${p}`);
  await reply(ctx, lines.join("\n"), [[tab("Bugun", "d"), tab("Hafta", "w"), tab("Oy", "m")], [app("🏆 Saytdagi reyting", "/leaderboard")]]);
}

// ---------------------------------------------------------------- referrals

export async function showInvite(ctx: Ctx) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  const { data, error } = await ctx.db.rpc("telegram_referral_summary", { _user: userId });
  if (error) throw error;
  const r = data as { code: string; counted: number; total_invited: number; can_claim_go: boolean; go_claimed_at: string | null; plus_granted_at: string | null; reward_expires_at: string | null };
  const siteLink = `${SITE_URL}/?ref=${r.code}`;
  const botRef = await botLink(`ref_${r.code}`);
  const text = [
    "🎁 <b>Do'stlarni taklif qiling — bepul tarif oling</b>\n",
    "• 10 ta do'st → <b>1 oy Scorify Go</b>",
    "• 20 ta do'st → <b>1 oy Scorify Plus</b> (avtomatik)\n",
    `👥 Hisoblangan: <b>${r.counted}</b>/20 ${bar(r.counted, 20, 10)}`,
    `Jami taklif qilinganlar: ${r.total_invited}`,
    r.go_claimed_at ? "✅ Go mukofoti faollashtirilgan" : "",
    r.plus_granted_at ? "✅ Plus mukofoti berilgan" : "",
    r.reward_expires_at ? `⏳ Mukofot muddati: ${fmtDate(r.reward_expires_at, true)}` : "",
    `\n🔗 Sayt havolasi:\n<code>${esc(siteLink)}</code>`,
    `🤖 Bot havolasi:\n<code>${esc(botRef)}</code>`,
    "\n<i>Faqat yangi ro'yxatdan o'tgan do'stlar hisoblanadi.</i>",
  ].filter(Boolean).join("\n");
  const share = `https://t.me/share/url?url=${encodeURIComponent(botRef)}&text=${encodeURIComponent("IELTS Writing va Speaking'ni sun'iy intellekt bilan bepul baholang — Scorify 🚀")}`;
  const keyboard: InlineKeyboard = [[link("📤 Do'stlarga yuborish", share)]];
  if (r.can_claim_go) keyboard.unshift([cb("🎉 1 oy Go'ni faollashtirish", "rf:claim")]);
  keyboard.push([app("🎁 Saytdagi taklif sahifasi", "/referral")]);
  await reply(ctx, text, keyboard);
}

export async function claimGo(ctx: Ctx) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  const { data, error } = await ctx.db.rpc("internal_claim_referral_reward", { _me: userId });
  if (error) return reply(ctx, `⚠️ ${esc(error.message)}`, [[cb("⬅️ Orqaga", "u:invite")]]);
  const exp = (data as { expires_at?: string })?.expires_at;
  await reply(ctx, `🎉 <b>Scorify Go faollashtirildi!</b>${exp ? `\nAmal qiladi: ${fmtDate(exp, true)} gacha.` : ""}`, [[cb(BTN.plan, "u:plan")]]);
}

// ---------------------------------------------------------------- daily practice & quiz

export async function showDaily(ctx: Ctx) {
  const d = dailySet();
  const text = [
    `💡 <b>Kunlik mashq — ${fmtDate(new Date())}</b>\n`,
    `📚 <b>Kun so'zi: ${esc(d.word.word)}</b> <i>(${d.word.pos})</i> — ${esc(d.word.uz)}`,
    `<i>${esc(d.word.example)}</i>`,
    `Sinonimlar: ${d.word.synonyms.map(esc).join(", ")}\n`,
    `🎤 <b>Speaking ${d.speaking.part}:</b>\n${esc(d.speaking.text)}\n`,
    `✍️ <b>Writing Task 2:</b>\n${esc(d.task2)}\n`,
    `📐 <b>Grammatika:</b> ${d.grammar}`,
    "\n<i>Javoblar faqat saytda baholanadi — natija shu botga keladi.</i>",
  ].join("\n");
  await reply(ctx, text, [
    [app("🎤 Speaking'da javob berish", "/speaking"), app("✍️ Esse yozish", "/writing")],
    [cb("🧠 So'z testi", "q:n"), app("📝 Grammatika testi", "/grammar-test")],
  ]);
}

export async function newQuiz(ctx: Ctx) {
  const correct = Math.floor(Math.random() * WORDS.length);
  const reverse = Math.random() < 0.5;
  const options = quizOptions(correct);
  const w = WORDS[correct];
  const question = reverse
    ? `🧠 <b>So'z testi</b>\n\n«<b>${esc(w.uz)}</b>» ma'nosini beruvchi inglizcha so'z qaysi?`
    : `🧠 <b>So'z testi</b>\n\n<b>${esc(w.word)}</b> <i>(${w.pos})</i> so'zining ma'nosi qaysi?`;
  const score = ctx.account.quiz_total ? `\n\n📈 Hisobingiz: ${ctx.account.quiz_correct}/${ctx.account.quiz_total}` : "";
  await reply(ctx, question + score, [
    ...options.map((i) => [cb(truncate(reverse ? WORDS[i].word : WORDS[i].uz, 40), `q:a:${correct}:${i}:${reverse ? 1 : 0}`)]),
    [cb("⏭ Boshqa so'z", "q:n")],
  ]);
}

export async function answerQuiz(ctx: Ctx, correct: number, chosen: number) {
  const w = WORDS[correct];
  if (!w || !WORDS[chosen]) return newQuiz(ctx);
  const ok = correct === chosen;
  const total = ctx.account.quiz_total + 1, right = ctx.account.quiz_correct + (ok ? 1 : 0);
  await ctx.db.from("telegram_accounts").update({ quiz_total: total, quiz_correct: right }).eq("telegram_id", ctx.account.telegram_id);
  ctx.account.quiz_total = total;
  ctx.account.quiz_correct = right;
  await reply(ctx, [
    ok ? "✅ <b>To'g'ri!</b>" : `❌ <b>Noto'g'ri.</b> To'g'ri javob: <b>${esc(w.uz)}</b>`,
    `\n<b>${esc(w.word)}</b> <i>(${w.pos})</i> — ${esc(w.uz)}`,
    `<i>${esc(w.example)}</i>`,
    `Sinonimlar: ${w.synonyms.map(esc).join(", ")}`,
    `\n📈 Hisobingiz: ${right}/${total} (${Math.round((right / total) * 100)}%)`,
  ].join("\n"), [[cb("➡️ Keyingi savol", "q:n")], [cb("💡 Kunlik mashq", "u:daily")]]);
}

// ---------------------------------------------------------------- open app, settings, help

export async function openApp(ctx: Ctx) {
  await reply(ctx, "🚀 <b>Scorify ilovasi</b>\n\nTelegram ichida ochiladi va avtomatik kirasiz. Bo'limni tanlang:", [
    [app("🏠 Bosh sahifa", "/dashboard")],
    [app("✍️ Writing", "/writing"), app("🎤 Speaking", "/speaking")],
    [app("🧪 Mock test", "/mock-test"), app("📝 Grammatika testi", "/grammar-test")],
    [app("👤 Profil", "/profile")],
  ]);
}

export async function showSettings(ctx: Ctx) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  const { data: profile } = await ctx.db.from("profiles").select("email,full_name,public_id").eq("user_id", userId).maybeSingle();
  const a = ctx.account;
  const onOff = (v: boolean) => (v ? "✅" : "🚫");
  const tgOnly = isTelegramEmail(profile?.email);
  await reply(ctx, [
    "⚙️ <b>Sozlamalar</b>\n",
    `👤 ${esc(profile?.full_name ?? "")}${profile?.public_id ? ` · ID #${esc(profile.public_id)}` : ""}`,
    tgOnly ? "🔐 Kirish: Telegram orqali" : `📧 ${esc(profile?.email ?? "")}`,
    "\n<b>Bildirishnomalar:</b>",
    `${onOff(a.notify_results)} Natijalar (Writing, Speaking, Mock)`,
    `${onOff(a.notify_reminders)} Eslatmalar (mashq, tarif muddati, haftalik hisobot)`,
    `${onOff(a.notify_news)} Yangiliklar va e'lonlar`,
  ].join("\n"), [
    [cb(`${onOff(a.notify_results)} Natijalar`, "s:t:results")],
    [cb(`${onOff(a.notify_reminders)} Eslatmalar`, "s:t:reminders")],
    [cb(`${onOff(a.notify_news)} Yangiliklar`, "s:t:news")],
    ...(tgOnly ? [] : [[cb("🔓 Telegram'ni hisobdan uzish", "s:unlink")]]),
  ]);
}

export async function settingsAction(ctx: Ctx, parts: string[]) {
  const [, action, value] = parts;
  if (action === "t" && ["results", "reminders", "news"].includes(value)) {
    const key = `notify_${value}` as "notify_results" | "notify_reminders" | "notify_news";
    const next = !ctx.account[key];
    await ctx.db.from("telegram_accounts").update({ [key]: next }).eq("telegram_id", ctx.account.telegram_id);
    ctx.account[key] = next;
    return showSettings(ctx);
  }
  if (action === "unlink" && !value) {
    return reply(ctx, "Telegram'ni Scorify hisobingizdan uzasizmi? Natijalar botga kelmay qoladi (saytdagi ma'lumotlar saqlanadi).", [
      [cb("Ha, uzish", "s:unlink:yes"), cb("Yo'q", "u:settings")],
    ]);
  }
  if (action === "unlink" && value === "yes" && ctx.account.user_id) {
    const { data: profile } = await ctx.db.from("profiles").select("email").eq("user_id", ctx.account.user_id).maybeSingle();
    if (isTelegramEmail(profile?.email)) return reply(ctx, "Bu hisob Telegram orqali yaratilgan, uni uzib bo'lmaydi.");
    await ctx.db.from("telegram_accounts").update({ user_id: null, linked_at: null }).eq("telegram_id", ctx.account.telegram_id);
    ctx.account.user_id = null;
    await reply(ctx, "🔓 Telegram hisobdan uzildi.");
    return showMenu({ ...ctx, messageId: undefined });
  }
}

export async function showHelp(ctx: Ctx) {
  await reply(ctx, [
    "❓ <b>Yordam</b>\n",
    "<b>Scorify bot</b> sayt bilan to'liq bog'langan:",
    "• ✍️ Esse va 🎤 speaking <b>faqat saytda (ilovada)</b> topshiriladi — natija tayyor bo'lishi bilan bu yerga keladi.",
    "• 📊 Statistika, 📝 natijalar, 🎯 maqsad, 💎 tarif va 🏆 reyting sayt bilan bir xil ma'lumotlardan olinadi.",
    "• 🚀 «Ilovani ochish» yoki pastdagi <b>Scorify</b> menyu tugmasi saytni Telegram ichida ochadi va avtomatik kiritadi.",
    "• 💻 Kompyuterda saytga <b>Continue with Telegram</b> orqali kiring — tasdiqlash shu botga keladi.\n",
    "<b>Buyruqlar:</b> /stats /results /goal /plan /top /invite /daily /quiz /settings /app",
    `\nSavol yoki to'lov: @${PAYMENTS_USERNAME}`,
  ].join("\n"), [[app("🌐 Saytni ochish", "/dashboard")]]);
}

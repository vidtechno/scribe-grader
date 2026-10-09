// Learner features of the bot. Writing and Speaking answers are only accepted on the website;
// the bot shows results, progress, goals, plan, leaderboard, referrals, articles and daily practice.
import { adminIds, esc, PAYMENTS_USERNAME, SITE_URL, botLink, truncate } from "../_shared/telegram.ts";
import {
  ensureScorifyUser, isTelegramEmail, linkTelegramToUser, type TelegramAccount,
} from "../_shared/telegram-accounts.ts";
import {
  app, band, bar, BTN, cb, type Ctx, daysUntil, fmtDate, fmtShort, hint, type InlineKeyboard, kv, link, mainKeyboard,
  page, PLAN_LABEL, quote, reply, send, setState, title, tzDate,
} from "./ui.ts";
import { countSince, DEFAULT_GOALS, loadOverview, scoreStats, streakDays, trendArrow, weekStart } from "./data.ts";
import { resultCard, type ResultKind } from "./results.ts";
import { dailySet, quizOptions, WORDS } from "./content.ts";

// ---------------------------------------------------------------- start & menu

/** The two ways in: a one-tap Telegram account, or Google on the website (the referral code travels along). */
function signupKeyboard(ctx: Ctx): InlineKeyboard {
  const ref = ctx.account.pending_ref;
  return [
    [cb("✅ Ro'yxatdan o'tish", "u:register")],
    [link("🔗 Google orqali kirish", `${SITE_URL}/auth${ref ? `?ref=${encodeURIComponent(ref)}` : ""}`)],
  ];
}

export async function showMenu(ctx: Ctx, text?: string) {
  const name = esc(ctx.from.first_name ?? "do'stim");
  if (!ctx.account.user_id) {
    const body = text ?? [
      `Assalomu alaykum, <b>${name}</b>! 👋\n`,
      "Men — <b>Scorify</b> yordamchisiman. Ingliz tilini noldan o'rganing: darslar, talaffuz, so'zlar va mashqlar.\n",
      title("✨", "Bu yerda sizni kutmoqda:"),
      "• 🎓 bosqichma-bosqich ingliz tili kursi — <b>7 kun bepul</b>",
      "• 📚 o'z lug'atingiz va takrorlash tizimi",
      "• 🔥 streak, XP va reyting",
      "• 🎁 do'stlarni taklif qilib pul ishlash\n",
      hint("Davom etish uchun hisob oching 👇"),
    ].join("\n");
    await send(ctx.chatId, body, { inline_keyboard: signupKeyboard(ctx) });
    return;
  }
  await send(ctx.chatId, text ?? `${name}, bugun nimadan boshlaymiz? 👇`, mainKeyboard(ctx));
}

export async function handleStart(ctx: Ctx, payload: string) {
  if (payload.startsWith("login_")) return loginRequest(ctx, payload.slice(6));
  if (payload.startsWith("link_")) return linkRequest(ctx, payload.slice(5));
  if (payload.startsWith("ref_")) {
    const code = payload.slice(4).toUpperCase();
    if (/^[A-Z0-9]{4,16}$/.test(code) && !ctx.account.user_id) {
      await ctx.db.from("telegram_accounts").update({ pending_ref: code }).eq("telegram_id", ctx.account.telegram_id);
      ctx.account.pending_ref = code;
      return showMenu(ctx, [
        "Assalomu alaykum! 👋 Sizni do'stingiz <b>Scorify</b>ga taklif qildi.\n",
        "Scorify — ingliz tilini noldan o'rganish va IELTS'ga tayyorlanish platformasi: darslar, talaffuz, mashqlar va testlar.\n",
        hint("Ro'yxatdan o'ting — <b>7 kun Learn bepul</b>. Ro'yxatdan o'tishingiz bilan do'stingiz referal hisoblaydi."),
      ].join("\n"));
    }
    if (ctx.account.user_id) {
      return showMenu(ctx, "Siz allaqachon ro'yxatdan o'tgansiz — referal havolasi faqat yangi foydalanuvchilar uchun ishlaydi. O'z havolangizni «👤 Kabinet → 🎁 Referal» bo'limidan oling.");
    }
  }
  const sections: Record<string, (c: Ctx) => Promise<void>> = {
    stats: showStats, results: (c) => showResults(c, "a"), goal: showGoal, plan: showPlan, invite: showInvite,
    daily: showDaily, quiz: newQuiz, settings: showSettings, top: (c) => showTop(c, "w"), referral: showInvite,
    cabinet: showCabinet, articles: showArticles, blog: showArticles, test: showDailyTest,
    writing: showWriting, speaking: showSpeaking, learn: showLearn,
  };
  if (sections[payload]) {
    await showMenu(ctx);
    return sections[payload](ctx);
  }
  return showMenu(ctx);
}

/** Returns the linked Scorify user or offers to create / connect an account first. */
async function requireUser(ctx: Ctx): Promise<string | null> {
  if (ctx.account.user_id) return ctx.account.user_id;
  await showStart(ctx, hint("Bu bo'lim Scorify hisobi bilan ishlaydi — keling, avval uni ochamiz.") + "\n\n");
  return null;
}

/** Account choice for people who are not signed up yet. */
export async function showStart(ctx: Ctx, prefix = "") {
  if (ctx.account.user_id) return showCabinet(ctx);
  await reply(ctx, [
    `${prefix}${title("🚀", "Scorify'ni boshlaymiz")}\n`,
    "✅ <b>Ro'yxatdan o'tish</b> — bir bosishda Telegram orqali hisob ochiladi, <b>7 kun bepul</b> o'qiysiz.\n",
    "🔗 <b>Google orqali kirish</b> — saytda Google hisobingiz bilan kirasiz.",
  ].join("\n"), signupKeyboard(ctx));
}

export async function register(ctx: Ctx) {
  if (ctx.account.user_id) return showMenu(ctx, "Sizda allaqachon Scorify hisobi bor ✅");
  const { created } = await ensureScorifyUser(ctx.db, ctx.account);
  const { data } = await ctx.db.from("telegram_accounts").select("*").eq("telegram_id", ctx.account.telegram_id).single();
  if (data) ctx.account = data as TelegramAccount;
  await showMenu(ctx, created
    ? [
      title("🎉", "Xush kelibsiz! Hisobingiz tayyor."),
      "\nSizga <b>7 kun Learn bepul</b> berildi — ingliz tili kursi to'liq ochiq.\n",
      quote("🎓 Darslar, lug'at va mashqlar — hammasi shu yerdan.\n" +
        "💻 Kompyuterda saytga <b>Continue with Telegram</b> orqali kirasiz."),
    ].join("\n")
    : "✅ Hisobingiz Telegram'ga ulandi.");
  await send(ctx.chatId, "Birinchi darsdan boshlaymizmi? 💪", {
    inline_keyboard: [[app("🚀 Kursni boshlash", "/learn")], [cb("🎁 Referal — do'st taklif qiling", "u:invite")]],
  });
}

export async function linkInfo(ctx: Ctx) {
  await reply(ctx, [
    title("🔗", "Google hisobingizni ulash") + "\n",
    "1️⃣ Saytga Google orqali kiring.",
    "2️⃣ <b>Profile</b> sahifasida <b>Connect Telegram</b> tugmasini bosing.",
    "3️⃣ Telegram ochiladi — shu yerda <b>Start</b>ni bosing. Tayyor!\n",
    hint("Shundan so'ng barcha natijalaringiz, tarifingiz va statistikangiz shu botda ko'rinadi."),
  ].join("\n"), [
    [link("🌐 Profile sahifasini ochish", `${SITE_URL}/profile?connect=telegram`)],
  ]);
}

// ---------------------------------------------------------------- login & linking from the website

async function loginRequest(ctx: Ctx, code: string) {
  const { data: row } = await ctx.db.from("telegram_auth_requests").select("*").eq("code", code).eq("kind", "login").maybeSingle();
  if (!row || row.status !== "pending" || new Date(row.expires_at) < new Date()) {
    return showMenu(ctx, "⌛️ Bu kirish havolasi eskirgan. Saytda <b>Continue with Telegram</b> tugmasini qayta bosing.");
  }
  const time = new Intl.DateTimeFormat("uz-UZ", { timeZone: "Asia/Tashkent", hour: "2-digit", minute: "2-digit" })
    .format(new Date(row.created_at));
  await send(ctx.chatId, [
    title("🔐", "Scorify.uz saytiga kirish") + "\n",
    kv("🖥 Qurilma", esc(row.client_info ?? "brauzer")),
    kv("🕐 Vaqt", `${fmtShort(row.created_at)} ${time}`) + "\n",
    "Kirishni hozir o'zingiz boshlagan bo'lsangiz, <b>Tasdiqlash</b>ni bosing.",
    quote("⚠️ So'rovni siz yubormagan bo'lsangiz — bosmang va havolani hech kimga bermang."),
  ].join("\n"),
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
  await reply(ctx, `${title("✅", "Tasdiqlandi!")}\n${hint("Brauzerga qayting — kirish avtomatik yakunlanadi.")}`);
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
      ? "⚠️ Bu Telegram allaqachon boshqa Scorify hisobiga ulangan.\n\n" +
        hint("Avval uni uzing: 👤 Kabinet → ⚙️ Sozlamalar → Telegram'ni uzish, so'ng saytda qayta ulang.")
      : "⚠️ Bu Telegram orqali yaratilgan hisobingizda natijalar yoki tarif bor, shuning uchun uni boshqa hisobga avtomatik almashtira olmayman.\n\n" +
        hint(`Ikkala hisobni birlashtirish uchun yozing: @${PAYMENTS_USERNAME}`));
  }
  await ctx.db.from("telegram_auth_requests").update({ status: "used", telegram_id: ctx.from.id }).eq("code", code);
  const { data } = await ctx.db.from("telegram_accounts").select("*").eq("telegram_id", ctx.account.telegram_id).single();
  if (data) ctx.account = data as TelegramAccount;
  const { data: profile } = await ctx.db.from("profiles").select("email,full_name").eq("user_id", row.user_id).maybeSingle();
  await showMenu(ctx, [
    title("✅", "Hisob ulandi!") + "\n",
    `👤 ${esc(profile?.full_name ?? "")} ${profile?.email ? hint(`(${esc(profile.email)})`) : ""}\n`,
    "Endi Writing, Speaking va Mock test natijalaringiz shu yerga avtomatik keladi.",
  ].join("\n"));
}

// ---------------------------------------------------------------- practice: Writing, Speaking, daily test

const left = (used = 0, limit = 0) => Math.max(0, limit - used);

export async function showWriting(ctx: Ctx) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  const o = await loadOverview(ctx.db, userId);
  const w = scoreStats(o.essays);
  const remaining = left(o.sub?.writing_used, o.sub?.writing_limit);
  await reply(ctx, [
    title("✍️", "IELTS Writing"),
    hint("Task 1 yoki Task 2 — esse yozing, sun'iy intellekt uni 4 mezon bo'yicha baholaydi.") + "\n",
    kv("📦 Qolgan baholashlar", String(remaining)),
    w.count ? kv("🏅 Oxirgi natija", band(w.last)) + ` · o'rtacha ${band(w.avg)}` : "🏅 Hali esse yozmagansiz — birinchisi sizni kutmoqda!",
    `\n${quote(remaining
      ? "💡 Taymer bilan yozing: Task 1 — 20 daqiqa, Task 2 — 40 daqiqa. Natija tayyor bo'lishi bilan shu yerga keladi."
      : "Bu oydagi limit tugadi. Tarifni yangilang yoki do'stlarni taklif qilib bepul oy oling.")}`,
  ].join("\n"), remaining
    ? [[app("✍️ Yozishni boshlash", "/writing")], [app("🗂 Esselarim", "/essays"), app("📄 Qoralamalar", "/drafts")]]
    : [[cb("💎 Tarifni yangilash", "u:plan")], [cb("🎁 Referal", "u:invite")]]);
}

export async function showSpeaking(ctx: Ctx) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  const o = await loadOverview(ctx.db, userId);
  const s = scoreStats(o.speaking);
  const remaining = left(o.sub?.speaking_used, o.sub?.speaking_limit);
  await reply(ctx, [
    title("🎤", "IELTS Speaking"),
    hint("Part 1, 2 yoki 3 — javobingizni yozib oling, sun'iy intellekt ravonlik, lug'at va grammatikani baholaydi.") + "\n",
    kv("📦 Qolgan baholashlar", String(remaining)),
    s.count ? kv("🏅 Oxirgi natija", band(s.last)) + ` · o'rtacha ${band(s.avg)}` : "🏅 Hali speaking topshirmagansiz — mikrofonni tayyorlang!",
    `\n${quote(remaining
      ? "💡 Tinch joyda gapiring va javobni kamida 1–2 daqiqa davom ettiring — shunda baho aniqroq bo'ladi."
      : "Bu oydagi limit tugadi. Tarifni yangilang yoki do'stlarni taklif qilib bepul oy oling.")}`,
  ].join("\n"), remaining
    ? [[app("🎤 Gapirishni boshlash", "/speaking")], [app("🗂 Speaking tarixi", "/speaking-history")]]
    : [[cb("💎 Tarifni yangilash", "u:plan")], [cb("🎁 Referal", "u:invite")]]);
}

export async function showDailyTest(ctx: Ctx) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  const today = tzDate();
  const [{ data: test }, { data: recent }] = await Promise.all([
    ctx.db.from("grammar_tests").select("score,completed_at").eq("user_id", userId).eq("test_date", today).maybeSingle(),
    ctx.db.from("grammar_tests").select("test_date").eq("user_id", userId).not("completed_at", "is", null)
      .order("test_date", { ascending: false }).limit(60),
  ]);
  // Consecutive days with a finished test, counting today or yesterday as the latest day.
  const days = new Set((recent ?? []).map((r) => r.test_date as string));
  const cursor = new Date(`${today}T12:00:00Z`);
  if (!days.has(today)) cursor.setUTCDate(cursor.getUTCDate() - 1);
  let streak = 0;
  while (days.has(cursor.toISOString().slice(0, 10))) {
    streak++;
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }

  const done = !!test?.completed_at;
  await reply(ctx, [
    title("📝", "Kunlik grammatika testi"),
    hint("Har kuni 10 ta savol — sizning xatolaringiz asosida tuziladi.") + "\n",
    done
      ? `✅ Bugungi test bajarildi: <b>${test?.score ?? 0}/10</b>`
      : "⏳ Bugungi test hali ishlanmadi — atigi 5 daqiqa.",
    kv("🔥 Ketma-ket kunlar", String(streak)),
    `\n${quote(done ? "Zo'r! Ertaga yangi savollar tayyor bo'ladi. Hozircha so'z testi bilan lug'atni mustahkamlang 🧠"
      : "Har kuni ozgina mashq — imtihonda katta farq. Vaqt topilganda 5 daqiqa ajrating ⏰")}`,
  ].join("\n"), [
    [app(done ? "📋 Natijani ko'rish" : "📝 Testni boshlash", "/grammar-test")],
    [cb("🧠 So'z testi", "q:n")],
  ]);
}

// ---------------------------------------------------------------- English course

interface LearningSummary {
  started: boolean;
  level?: string;
  placement_status?: string;
  placement_target?: string | null;
  access: { allowed: boolean; reason: string; trial_ends_at?: string };
  xp?: number; streak?: number; lessons_done?: number; tests_passed?: number; today_done?: boolean; next_lesson_title?: string | null;
  today_xp?: number; daily_goal?: number; week_xp?: number;
  streak_info?: { current: number; best: number; at_risk: boolean; broken: boolean };
}
// Lessons and unit tests on the learning path, by the level the learner started at (Beginner 5 units, Elementary 6, Pre-Intermediate 6).
const COURSE_SIZE: Record<string, { name: string; lessons: number; units: number }> = {
  beginner: { name: "Beginner", lessons: 136, units: 17 },
  a1: { name: "Elementary (A1)", lessons: 96, units: 12 },
  a2: { name: "Pre-Intermediate (A2)", lessons: 48, units: 6 },
};

export async function showDictionary(ctx: Ctx) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  await reply(ctx, [
    title("📚", "Lug'atim"),
    hint("Darslarda o'rgangan barcha so'zlaringiz — talaffuzi va tarjimasi bilan.") + "\n",
    quote("🔎 so'z qidirish\n🔊 talaffuzni tinglash\n🧠 vaqti kelgan so'zlarni takrorlash"),
  ].join("\n"), [[app("📚 Lug'atni ochish", "/learn?tab=words")]]);
}

export async function showLearn(ctx: Ctx) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  const { data, error } = await ctx.db.rpc("telegram_learning_summary", { _user: userId });
  if (error) throw error;
  const s = data as LearningSummary;
  if (!s.started) {
    await reply(ctx, [
      title("🎓", "Ingliz tilini noldan o'rganing"),
      hint("Harflar va talaffuzdan boshlab, bosqichma-bosqich — IELTS'gacha.") + "\n",
      "Har bir darsda:",
      quote([
        "📖 mavzuni sodda o'zbek tilida tushuntirish va misollar",
        "🔊 har bir so'z va gapning talaffuzi",
        "🧠 10 ta yangi so'z — yodlash uchun",
        "✍️ mashqlar: tinglash, gap tuzish, tarjima, to'ldirish",
        "🏆 yakuniy test; har bosqich oxirida imtihon",
      ].join("\n")),
      s.access.reason === "paid" ? hint("Kurs tarifingizga kiritilgan ✅") : hint("Free tarifda 7 kun bepul, keyin Learn yoki IELTS bilan davom etasiz."),
    ].join("\n"), [[app("🚀 Kursni boshlash", "/learn")]]);
    return;
  }
  if (s.placement_status === "pending") {
    await reply(ctx, [
      title("🧭", `${s.placement_target === "a2" ? "Pre-Intermediate" : "Elementary"} uchun daraja testi`),
      hint(`Oldingi darajalardan 20 ta savol. Kamida 70% topsangiz, to'g'ridan-to'g'ri ${s.placement_target === "a2" ? "Pre-Intermediate" : "Elementary"} darslariga o'tasiz; 2 ta urinish.`),
    ].join("\n"), [[app("🧭 Testni boshlash", "/learn/placement")], [app("🎓 Kursni ochish", "/learn")]]);
    return;
  }
  const trialLeft = s.access.reason === "trial" && s.access.trial_ends_at
    ? Math.max(0, Math.ceil((new Date(s.access.trial_ends_at).getTime() - Date.now()) / 86_400_000)) : null;
  const size = COURSE_SIZE[s.level ?? "beginner"] ?? COURSE_SIZE.beginner;
  const done = Math.min(s.lessons_done ?? 0, size.lessons);
  const lines = [
    title("🎓", `Ingliz tili kursi · ${size.name}`),
    s.today_done ? hint("Bugungi dars bajarildi — barakalla! 🎉") : hint("Bugun hali dars qilinmadi — 15 daqiqa ajrating."),
    "",
    `${bar(done, size.lessons, 10)}  <b>${done}</b>/${size.lessons} dars`,
    kv("🔥 Streak", `${s.streak_info?.current ?? s.streak ?? 0} kun`) + " · " + kv("⚡ XP", String(s.xp ?? 0)),
    hint(`🎯 Bugun: ${s.today_xp ?? 0}/${s.daily_goal ?? 30} XP${s.streak_info ? ` · rekord ${s.streak_info.best} kun` : ""}`),
    s.streak_info?.at_risk && !s.today_done ? hint("⚠️ Streak xavfda — bugun bitta dars qiling.") : "",
    kv("🏆 Bosqich testlari", `${Math.min(s.tests_passed ?? 0, size.units)}/${size.units}`) + " · " + kv("🧠 So'zlar", String(done * 10)),
    s.next_lesson_title ? `\n▶️ Keyingi dars: <b>${esc(s.next_lesson_title)}</b>` : "",
    trialLeft !== null ? `\n${hint(`⏳ Bepul davr: ${trialLeft} kun qoldi`)}` : "",
    !s.access.allowed ? `\n${quote("🔒 Bepul 7 kun tugadi. Natijalaringiz saqlangan — davom etish uchun Learn yoki IELTS tarifini oling.")}` : "",
  ].filter((x) => x !== "");
  await reply(ctx, lines.join("\n"), s.access.allowed
    ? [[app("▶️ Darsni davom ettirish", "/learn")]]
    : [[cb("💎 Tariflar", "u:plan")], [app("🎓 Kursni ochish", "/learn")]]);
}

// ---------------------------------------------------------------- statistics & results

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

  const section = (emoji: string, name: string, st: ReturnType<typeof scoreStats>, unit: string) => {
    const lines = [`${emoji} <b>${name}</b> · ${st.count} ta ${unit}`];
    if (st.count) {
      lines.push(`O'rtacha <b>${band(st.avg)}</b> · Eng yaxshi <b>${band(st.best)}</b> · Oxirgi <b>${band(st.last)}</b>`);
      if (st.trend.length > 1) lines.push(hint(`Dinamika: ${st.trend.map(band).join(" → ")}`) + trendArrow(st.trend));
    }
    return lines.join("\n");
  };
  const lines = [
    title("📊", "Natijalarim") + "\n",
    section("✍️", "Writing", w, "esse"),
    "",
    section("🎤", "Speaking", s, "urinish"),
  ];
  if (m.count) lines.push("", `🧪 <b>Mock test</b> · ${m.count} ta · Eng yaxshi <b>${band(m.best)}</b>`);
  lines.push("", quote([
    `🔥 Streak: <b>${streak}</b> kun${streak >= 3 ? " — zo'r ketyapsiz!" : ""}`,
    `📅 Bu hafta: Writing ${weekW}/${o.goals.weekly_essays} · Speaking ${weekS}/${o.goals.weekly_speaking}`,
    `🎯 Maqsad: <b>${band(o.goals.target_band)}</b>${current !== null
      ? (current >= o.goals.target_band ? " ✅ erishildi" : ` · yana ${band(o.goals.target_band - current)} band`) : ""}`,
    ...(o.goals.exam_date && daysUntil(o.goals.exam_date) >= 0 ? [`🗓 Imtihongacha: <b>${daysUntil(o.goals.exam_date)}</b> kun`] : []),
  ].join("\n")));
  if (!w.count && !s.count) lines.push("\n" + hint("Hali natija yo'q. Birinchi mashqni boshlang — natija shu yerga keladi 👇"));

  const latest3 = [
    ...o.essays.map((x) => ({ ...x, k: "e", icon: "✍️" })),
    ...o.speaking.map((x) => ({ ...x, k: "s", icon: "🎤" })),
    ...o.mocks.map((x) => ({ ...x, k: "m", icon: "🧪" })),
  ].sort((a, b) => b.created_at.localeCompare(a.created_at)).slice(0, 3);
  await reply(ctx, lines.join("\n"), [
    ...latest3.map((i) => [cb(`${i.icon} ${band(i.score)} · ${fmtShort(i.created_at)} · ${truncate(i.topic, 28)}`, `r:v:${i.k}:${i.id}`)]),
    [cb("🗂 Barcha natijalar", "r:l:a"), cb("🎯 Maqsad", "u:goal")],
    [cb("⬅️ Kabinet", "u:cab")],
  ]);
}

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
  keyboard.push([app("🌐 Saytdagi tarix", filter === "s" ? "/speaking-history" : filter === "m" ? "/mock-test" : "/essays"), cb("⬅️ Orqaga", "u:stats")]);
  await reply(ctx, items.length
    ? `${title("🗂", "Oxirgi natijalaringiz")}\n${hint("Batafsil tahlil uchun natijani tanlang 👇")}`
    : `${title("🗂", "Natijalar")}\n\n${hint("Bu bo'limda hali natija yo'q. Esse yozing yoki speaking topshiring — natija avtomatik shu yerga keladi.")}`,
    keyboard);
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
    title("🎯", "Maqsadingiz"),
    hint("Saytdagi Goals bo'limi bilan bir xil — bu yerda o'zgartirsangiz, u yerda ham yangilanadi.") + "\n",
    kv("🏅 Maqsad band", band(g.target_band)),
    kv("🗓 Imtihon", g.exam_date ? `${fmtDate(g.exam_date, true)}${exam !== null && exam >= 0 ? ` (${exam} kun qoldi)` : " (o'tib ketgan)"}` : "belgilanmagan"),
    "\n<b>📅 Haftalik reja</b>",
    `✍️ Writing  ${bar(weekW, g.weekly_essays, 8)}  ${weekW}/${g.weekly_essays}`,
    `🎤 Speaking ${bar(weekS, g.weekly_speaking, 8)}  ${weekS}/${g.weekly_speaking}`,
  ].join("\n");
  const bands = [5.5, 6, 6.5, 7, 7.5, 8, 8.5];
  await reply(ctx, text, [
    bands.slice(0, 4).map((b) => cb(b === g.target_band ? `✅ ${b.toFixed(1)}` : b.toFixed(1), `g:b:${b}`)),
    bands.slice(4).map((b) => cb(b === g.target_band ? `✅ ${b.toFixed(1)}` : b.toFixed(1), `g:b:${b}`)),
    [cb("✍️ −", "g:we:-1"), cb(`Writing: ${g.weekly_essays}/hafta`, "g:noop"), cb("✍️ +", "g:we:1")],
    [cb("🎤 −", "g:ws:-1"), cb(`Speaking: ${g.weekly_speaking}/hafta`, "g:noop"), cb("🎤 +", "g:ws:1")],
    [cb("🗓 Imtihon sanasi", "g:date"), ...(g.exam_date ? [cb("🗑 Sanani o'chirish", "g:date:clear")] : [])],
    [cb("⬅️ Kabinet", "u:cab")],
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
      return send(ctx.chatId, `${title("🗓", "Imtihon sanasini yuboring")}\n${hint("Masalan: 25.12.2026 · bekor qilish: /cancel")}`);
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
    return send(ctx.chatId, `Sanani tushunmadim yoki u o'tib ketgan.\n${hint("Masalan: 25.12.2026 · bekor qilish: /cancel")}`);
  }
  await saveGoals(ctx, userId, { exam_date: date });
  await setState(ctx, null);
  await send(ctx.chatId, `✅ Imtihon sanasi saqlandi: <b>${fmtDate(date!, true)}</b> — ${daysUntil(date!)} kun qoldi. Omad! 🍀`);
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
    ? `${label}  ${hint("bu tarifda yo'q")}`
    : `${label}  ${bar(used, limit, 8)}  ${used}/${limit}${limit - used > 0 ? "" : " · " + hint("limit tugadi")}`;
  const text = [
    title("💎", `Tarifingiz: ${PLAN_LABEL[plan] ?? esc(sub?.plan_name ?? plan)}`),
    ...(sub?.expires_at ? [hint(`${fmtDate(sub.expires_at, true)} gacha · ${Math.max(0, days ?? 0)} kun qoldi`)] : []),
    "",
    usage("✍️ Writing ", sub?.writing_used, sub?.writing_limit),
    usage("🎤 Speaking", sub?.speaking_used, sub?.speaking_limit),
    usage("🧪 Mock test", sub?.mock_test_used, sub?.mock_test_limit),
    "",
    quote([
      "<b>Learn</b> — 49 000 so'm oyiga",
      hint("Barcha ingliz tili darslari · adaptiv o'rganish · so'z va grammatika takrori · XP va streak"),
      "",
      "<b>IELTS</b> — 129 000 so'm oyiga",
      hint("Learn'dagi hammasi + 50 Writing · 30 Speaking · AI baholash va tahlil"),
      "",
      "🎁 Yangi hisob: <b>7 kun Learn bepul</b> + 3 Writing va 2 Speaking. IELTS tarifida bepul davr yo'q.",
      "🎉 <b>6 oyga birdan to'lasangiz −10%</b>",
      hint("Learn: 264 600 so'm · IELTS: 696 600 so'm (limitlar har 30 kunda yangilanadi)"),
    ].join("\n")),
    hint("💳 To'lov Telegram orqali. Tasdiqlangach tarif yoqiladi va shu yerga xabar keladi."),
  ].join("\n");
  const id = o.profile?.public_id ? ` Mening ID: #${o.profile.public_id}.` : "";
  const buy = (name: string, period: string, price: string) => link(`💳 ${name} · ${period} — ${price}`,
    `https://t.me/${PAYMENTS_USERNAME}?text=${encodeURIComponent(`Salom! Men "${name}" tarifini ${period} uchun sotib olmoqchiman: ${price}.${id}`)}`);
  await reply(ctx, text, [
    [buy("Learn", "1 oy", "49 000 so'm"), buy("Learn", "6 oy", "264 600 so'm")],
    [buy("IELTS", "1 oy", "129 000 so'm"), buy("IELTS", "6 oy", "696 600 so'm")],
    [cb("🎁 Referal — do'st taklif qiling, pul ishlang", "u:invite")],
    [cb("⬅️ Kabinet", "u:cab")],
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
  const titleText = period === "d" ? "bugungi" : period === "m" ? "oylik" : "haftalik";
  const lines = [title("🏆", `Writing reytingi — ${titleText}`), hint("Kamida 2 ta esse · o'rtacha band + faollik bonusi") + "\n"];
  if (!rows.length) lines.push("Hali hech kim reytingga kirmadi. Birinchi bo'ling! 💪");
  for (const r of rows.slice(0, 10)) lines.push(`${medal(r.rank)} ${short(r.name)} — <b>${band(r.avg)}</b> · ${r.count} ta esse`);
  const me = ctx.account.user_id ? rows.find((r) => r.user_id === ctx.account.user_id) : null;
  if (me && me.rank > 10) lines.push(`…\n${me.rank}. <b>Siz</b> — ${band(me.avg)} · ${me.count} ta esse`);
  else if (!me && ctx.account.user_id) lines.push("\n" + hint("Siz hali bu davrda reytingda yo'qsiz — 2 ta esse yozing."));
  const tab = (label: string, p: string) => cb(period === p ? `• ${label} •` : label, `t:${p}`);
  await reply(ctx, lines.join("\n"), [
    [tab("Bugun", "d"), tab("Hafta", "w"), tab("Oy", "m")],
    [app("🌐 Saytdagi reyting", "/leaderboard"), cb("⬅️ Kabinet", "u:cab")],
  ]);
}

// ---------------------------------------------------------------- referrals

interface RefInfo {
  code: string; balance: number; earned: number; paid: number; reward: number; min_withdraw: number;
  invited: number; active: number; buyers: number; rewarded: number; pending_withdrawal: { id: number; amount: number } | null;
}
const som = (n: number) => `${String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm`;

export async function showInvite(ctx: Ctx) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  const { data, error } = await ctx.db.rpc("internal_ref_info", { _user: userId });
  if (error) throw error;
  const r = data as RefInfo;
  const refLink = await botLink(`ref_${r.code}`);
  const can = r.balance >= r.min_withdraw && !r.pending_withdrawal;
  const text = [
    title("🎁", "Referal — do'st taklif qiling, pul ishlang") + "\n",
    "<b>Qanday ishlaydi:</b>",
    quote([
      "1️⃣ Havolangizni do'stingizga yuboring.",
      "2️⃣ U havola orqali botga kirib ro'yxatdan o'tadi (Telegram yoki Google) — shu zahoti referal hisoblanadi.",
      `3️⃣ U <b>7 kunlik bepul davrdan keyin</b> istalgan pullik tarifni sotib olsa, balansingizga <b>${som(r.reward)}</b> qo'shiladi.`,
      `4️⃣ Balans <b>${som(r.min_withdraw)}</b> ga yetganda yechib olasiz.`,
    ].join("\n")),
    "🔗 <b>Sizning havolangiz</b>",
    `<code>${esc(refLink)}</code>`,
    "\n📊 <b>Statistika</b>",
    `👥 Taklif qilingan: <b>${r.invited}</b>`,
    `✅ Ro'yxatdan o'tgan (hisoblangan): <b>${r.active}</b>`,
    `💳 Pullik tarif olgan: <b>${r.buyers}</b>`,
    `\n💰 Balans: <b>${som(r.balance)}</b> ${hint(`(${bar(Math.min(r.balance, r.min_withdraw), r.min_withdraw, 10)})`)}`,
    r.paid > 0 ? hint(`Jami to'langan: ${som(r.paid)}`) : "",
    r.pending_withdrawal ? `\n⏳ So'rov yuborilgan: <b>${som(r.pending_withdrawal.amount)}</b> — admin tasdiqlashini kuting.` : "",
    !can && !r.pending_withdrawal ? hint(`Yechib olish uchun yana ${som(Math.max(0, r.min_withdraw - r.balance))} kerak.`) : "",
  ].filter((x) => x !== "").join("\n");
  const share = `https://t.me/share/url?url=${encodeURIComponent(refLink)}&text=${encodeURIComponent("Ingliz tilini noldan o'rganing: har kuni bor-yo'g'i 10 daqiqa — darslar, so'zlar va talaffuz. Keling, birga boshlaymiz! 🚀")}`;
  const keyboard: InlineKeyboard = [[link("📤 Do'stlarga yuborish", share)]];
  if (can) keyboard.push([cb(`💸 Yechib olish (${som(r.balance)})`, "rf:w")]);
  keyboard.push([cb("🔄 Yangilash", "u:invite"), cb("⬅️ Kabinet", "u:cab")]);
  await reply(ctx, text, keyboard);
}

/** Step 1 of a payout: show how much can be withdrawn and ask to confirm. */
export async function withdrawStart(ctx: Ctx) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  const { data } = await ctx.db.rpc("internal_ref_info", { _user: userId });
  const r = data as RefInfo;
  if (r.pending_withdrawal) return showInvite(ctx);
  if (r.balance < r.min_withdraw) {
    return reply(ctx, `${title("💸", "Yechib olish")}\nBalansingiz ${som(r.balance)}. Yechib olish uchun kamida <b>${som(r.min_withdraw)}</b> kerak.`, [[cb("⬅️ Orqaga", "u:invite")]]);
  }
  await reply(ctx, [
    title("💸", "Pulni yechib olish") + "\n",
    `Yechib olish mumkin: <b>${som(r.balance)}</b>`,
    hint("Tasdiqlasangiz, keyingi qadamda karta raqami va karta egasining ismini yozasiz. Admin pulni o'tkazib bergach, sizga xabar keladi."),
  ].join("\n"), [[cb("✅ Tasdiqlash", "rf:wy"), cb("❌ Bekor qilish", "u:invite")]]);
}

export async function withdrawConfirm(ctx: Ctx) {
  await setState(ctx, { awaiting: "wd_card" });
  await reply(ctx, `${title("💳", "Karta raqami")}\nPul o'tkaziladigan <b>16 xonali karta raqamini</b> yozing.\n${hint("Bekor qilish: /cancel")}`);
}

/** Handles the card number / holder name messages of the payout dialog. Returns true when the message was consumed. */
export async function referralInput(ctx: Ctx, text: string): Promise<boolean> {
  const st = ctx.account.state;
  if (st?.awaiting !== "wd_card" && st?.awaiting !== "wd_holder") return false;
  const userId = ctx.account.user_id;
  if (!userId) { await setState(ctx, null); return true; }
  if (st.awaiting === "wd_card") {
    const digits = text.replace(/\D/g, "");
    if (digits.length !== 16) { await send(ctx.chatId, "Karta raqami 16 ta raqamdan iborat bo'lsin. Qayta yozing yoki /cancel."); return true; }
    await setState(ctx, { awaiting: "wd_holder", card: digits });
    await send(ctx.chatId, `${title("👤", "Karta egasi")}\nKarta egasining <b>ism-familiyasini</b> yozing (kartadagidek).`);
    return true;
  }
  const holder = text.trim().replace(/\s+/g, " ");
  if (holder.length < 3 || holder.length > 60) { await send(ctx.chatId, "Ism-familiyani to'g'ri yozing yoki /cancel."); return true; }
  const card = String(st.card ?? "");
  await setState(ctx, null);
  const { data, error } = await ctx.db.rpc("internal_ref_request_withdrawal", { _user: userId, _card: card, _holder: holder });
  if (error) {
    const reason = /balance_too_low/.test(error.message) ? "Balans yetarli emas." : /already_pending/.test(error.message) ? "Sizda tasdiqlanmagan so'rov bor." : "So'rovni yuborib bo'lmadi.";
    await send(ctx.chatId, `⚠️ ${reason}`);
    return true;
  }
  const w = data as { id: number; amount: number; card: string; holder: string };
  await send(ctx.chatId, `${title("✅", "So'rov yuborildi")}\n${som(w.amount)} — admin tekshirib, kartangizga o'tkazadi. Tayyor bo'lgach xabar beraman.`);
  const { data: profile } = await ctx.db.from("profiles").select("full_name,username,public_id").eq("user_id", userId).maybeSingle();
  const who = `${esc(profile?.full_name ?? ctx.from.first_name ?? "")}${profile?.username ? ` (@${esc(profile.username)})` : ""} · ID #${esc(profile?.public_id ?? "—")}${ctx.from.username ? ` · TG @${esc(ctx.from.username)}` : ""}`;
  const adminText = [
    title("💸", "Referal pulini yechib olish so'rovi") + "\n",
    `👤 ${who}`,
    `💰 Summa: <b>${som(w.amount)}</b>`,
    `💳 Karta: <code>${w.card.replace(/(\d{4})(?=\d)/g, "$1 ")}</code>`,
    `🧾 Karta egasi: <b>${esc(w.holder)}</b>`,
    hint(`So'rov #${w.id}`),
  ].join("\n");
  for (const id of adminIds()) {
    await send(id, adminText, { inline_keyboard: [[cb("✅ To'landi", `ad:wd:ok:${w.id}`), cb("❌ Rad etish", `ad:wd:no:${w.id}`)]] }).catch((e) => console.error("admin notify failed:", e));
  }
  return true;
}

// ---------------------------------------------------------------- daily practice & quiz

export async function showDaily(ctx: Ctx) {
  const d = dailySet();
  const text = [
    title("💡", `Kunlik mashq · ${fmtDate(new Date())}`) + "\n",
    `📚 <b>Kun so'zi:</b> <b>${esc(d.word.word)}</b> ${hint(`(${d.word.pos})`)} — ${esc(d.word.uz)}`,
    quote(`<i>${esc(d.word.example)}</i>\nSinonimlar: ${d.word.synonyms.map(esc).join(", ")}`),
    `🎤 <b>Speaking ${d.speaking.part}</b>`,
    quote(esc(d.speaking.text)),
    "✍️ <b>Writing Task 2</b>",
    quote(esc(d.task2)),
    "📐 <b>Grammatika</b>",
    quote(d.grammar),
    hint("Javoblar ilovada baholanadi — natija shu chatga keladi."),
  ].join("\n");
  await reply(ctx, text, [
    [app("🎤 Javob berish", "/speaking"), app("✍️ Esse yozish", "/writing")],
    [cb("🧠 So'z testi", "q:n"), app("📝 Kunlik test", "/grammar-test")],
  ]);
}

export async function newQuiz(ctx: Ctx) {
  const correct = Math.floor(Math.random() * WORDS.length);
  const reverse = Math.random() < 0.5;
  const options = quizOptions(correct);
  const w = WORDS[correct];
  const question = reverse
    ? `${title("🧠", "So'z testi")}\n\n«<b>${esc(w.uz)}</b>» ma'nosini beruvchi inglizcha so'z qaysi?`
    : `${title("🧠", "So'z testi")}\n\n<b>${esc(w.word)}</b> ${hint(`(${w.pos})`)} so'zining ma'nosi qaysi?`;
  const score = ctx.account.quiz_total ? `\n\n${hint(`📈 Hisobingiz: ${ctx.account.quiz_correct}/${ctx.account.quiz_total}`)}` : "";
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
    ok ? title("✅", "To'g'ri!") : `${title("❌", "Noto'g'ri.")} To'g'ri javob: <b>${esc(w.uz)}</b>`,
    `\n<b>${esc(w.word)}</b> ${hint(`(${w.pos})`)} — ${esc(w.uz)}`,
    quote(`<i>${esc(w.example)}</i>\nSinonimlar: ${w.synonyms.map(esc).join(", ")}`),
    hint(`📈 Hisobingiz: ${right}/${total} · ${Math.round((right / total) * 100)}%`),
  ].join("\n"), [[cb("➡️ Keyingi savol", "q:n")]]);
}

// ---------------------------------------------------------------- cabinet, articles, app, settings, help

/** Everything that is not on the main keyboard: a compact profile summary with section buttons. */
export async function showCabinet(ctx: Ctx) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  const o = await loadOverview(ctx.db, userId);
  const { data: ls } = await ctx.db.rpc("telegram_learning_summary", { _user: userId });
  const s = (ls ?? {}) as LearningSummary;
  const plan = o.sub?.plan_type ?? "free";
  const name = esc(o.profile?.full_name || ctx.from.first_name || "");
  const streak = s.streak_info?.current ?? s.streak ?? 0;
  await reply(ctx, [
    title("👤", name) + (o.profile?.public_id ? `  ${hint(`ID #${esc(o.profile.public_id)}`)}` : "") + "\n",
    `💎 <b>${PLAN_LABEL[plan] ?? esc(plan)}</b>${o.sub?.expires_at ? ` ${hint(`· ${fmtDate(o.sub.expires_at, true)} gacha`)}` : ""}`,
    `🔥 Streak <b>${streak}</b> kun · ⚡️ <b>${s.xp ?? 0}</b> XP · 🎓 <b>${s.lessons_done ?? 0}</b> ta dars`,
    s.today_done ? hint("Bugungi dars bajarildi ✅") : hint("Bugun hali dars qilmadingiz — bitta dars yetadi."),
  ].join("\n"), [
    [cb("🎓 Darslar", "u:learn"), cb("📚 Lug'at", "u:dict")],
    [app("🏆 Reyting", "/leaderboard"), cb("🎁 Referal", "u:invite")],
    [cb("💎 Tarif", "u:plan"), cb("⚙️ Sozlamalar", "u:settings")],
    [cb("✍️ IELTS natijalarim", "u:stats"), cb("❓ Yordam", "u:help")],
    [app("🌐 Saytni ochish", "/learn")],
  ]);
}

const blogUrl = (slug: string) => `${SITE_URL}/blog/${encodeURIComponent(slug)}`;

/** Latest blog posts; each one opens inside Telegram. */
export async function showArticles(ctx: Ctx) {
  const { data } = await ctx.db.from("blog_posts").select("slug,title,lang,reading_minutes,published_at")
    .eq("status", "published").lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false }).limit(7);
  const posts = data ?? [];
  const flag = (lang: string) => (lang === "uz" ? "🇺🇿" : "🇬🇧");
  await reply(ctx, posts.length
    ? `${title("📖", "Foydali maqolalar")}\n${hint("Band oshirish sirlari, namunalar va tayyor rejalar — o'qish uchun tanlang 👇")}`
    : `${title("📖", "Foydali maqolalar")}\n\n${hint("Hozircha maqolalar yo'q — yangilari chiqishi bilan shu yerga yuboraman.")}`, [
    ...posts.map((p) => [page(`${flag(p.lang)} ${truncate(p.title, 46)}${p.reading_minutes ? ` · ${p.reading_minutes} daq` : ""}`, blogUrl(p.slug))]),
    [page("📚 Barcha maqolalar", `${SITE_URL}/blog`)],
  ]);
}

export async function openApp(ctx: Ctx) {
  await reply(ctx, `${title("🌐", "Scorify ilovasi")}\n${hint("Telegram ichida ochiladi va avtomatik kirasiz. Bo'limni tanlang:")}`, [
    [app("🏠 Bosh sahifa", "/dashboard")],
    [app("✍️ Writing", "/writing"), app("🎤 Speaking", "/speaking")],
    [app("🧪 Mock test", "/mock-test"), app("📝 Kunlik test", "/grammar-test")],
    [app("👤 Profil", "/profile")],
  ]);
}

export async function showSettings(ctx: Ctx) {
  const userId = await requireUser(ctx);
  if (!userId) return;
  const { data: profile } = await ctx.db.from("profiles").select("email,full_name,public_id").eq("user_id", userId).maybeSingle();
  const a = ctx.account;
  const onOff = (v: boolean) => (v ? "🔔" : "🔕");
  const tgOnly = isTelegramEmail(profile?.email);
  await reply(ctx, [
    title("⚙️", "Sozlamalar") + "\n",
    `👤 ${esc(profile?.full_name ?? "")}${profile?.public_id ? ` ${hint(`· ID #${esc(profile.public_id)}`)}` : ""}`,
    tgOnly ? hint("🔐 Kirish: Telegram orqali") : hint(`📧 ${esc(profile?.email ?? "")}`),
    "\n<b>Bildirishnomalar</b> " + hint("(bosib yoqing / o'chiring)"),
    `${onOff(a.notify_results)} Natijalar — Writing, Speaking, Mock`,
    `${onOff(a.notify_reminders)} Eslatmalar — dars eslatmalari, tarif muddati, haftalik hisobot`,
    `⏰ Eslatma rejimi: <b>${MODE_LABEL[a.reminder_mode ?? "normal"]}</b> ${hint("(kuniga 3 tagacha / faqat kechqurun / o'chirilgan)")}`,
    `${onOff(a.notify_news)} Yangiliklar — yangi maqolalar va e'lonlar`,
  ].join("\n"), [
    [cb(`${onOff(a.notify_results)} Natijalar`, "s:t:results"), cb(`${onOff(a.notify_reminders)} Eslatmalar`, "s:t:reminders")],
    [cb(`${onOff(a.notify_news)} Yangiliklar`, "s:t:news"), cb("⏰ Eslatma rejimi", "s:rm")],
    ...(tgOnly ? [] : [[cb("🔓 Telegram'ni hisobdan uzish", "s:unlink")]]),
    [cb("⬅️ Kabinet", "u:cab")],
  ]);
}

const MODE_LABEL = { normal: "Oddiy", light: "Yengil", off: "O'chiq" } as const;
const NEXT_MODE = { normal: "light", light: "off", off: "normal" } as const;

export async function settingsAction(ctx: Ctx, parts: string[]) {
  const [, action, value] = parts;
  if (action === "rm") {
    const current = ctx.account.reminder_mode ?? "normal";
    const next = value === "normal" || value === "light" || value === "off" ? value : NEXT_MODE[current];
    await ctx.db.from("telegram_accounts").update({ reminder_mode: next }).eq("telegram_id", ctx.account.telegram_id);
    ctx.account.reminder_mode = next;
    if (value === "off") await reply(ctx, "🔕 Dars eslatmalari o'chirildi. Qaytmoqchi bo'lsangiz — ⚙️ Sozlamalar → Eslatma rejimi.");
    else return showSettings(ctx);
    return;
  }
  if (action === "t" && ["results", "reminders", "news"].includes(value)) {
    const key = `notify_${value}` as "notify_results" | "notify_reminders" | "notify_news";
    const next = !ctx.account[key];
    await ctx.db.from("telegram_accounts").update({ [key]: next }).eq("telegram_id", ctx.account.telegram_id);
    ctx.account[key] = next;
    return showSettings(ctx);
  }
  if (action === "unlink" && !value) {
    return reply(ctx, `Telegram'ni Scorify hisobingizdan uzasizmi?\n${hint("Natijalar botga kelmay qoladi, saytdagi ma'lumotlar saqlanadi.")}`, [
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
    title("❓", "Scorify bot qanday ishlaydi?") + "\n",
    "🎓 <b>Ingliz tili darslari</b> — noldan boshlab: tushuntirish, talaffuz, mashq va testlar.",
    "✍️ <b>Writing</b> va 🎤 <b>Speaking</b> — ilovada topshirasiz, natija shu chatga keladi.",
    "📝 <b>Kunlik test</b> — har kuni 10 ta grammatika savoli, xatolaringiz asosida.",
    "🧠 <b>So'z testi</b> — IELTS lug'atini o'yin tarzida mustahkamlang.",
    "📖 <b>Foydali maqolalar</b> — Writing va Speaking bo'yicha amaliy qo'llanmalar.",
    "👤 <b>Kabinet</b> — natijalar, maqsad, tarif, reyting va sozlamalar.\n",
    quote("💻 Kompyuterda saytga <b>Continue with Telegram</b> orqali kiring — tasdiqlash shu yerga keladi."),
    hint(`Savol yoki to'lov bo'yicha: @${PAYMENTS_USERNAME}`),
  ].join("\n"), [[app("🌐 Ilovani ochish", "/dashboard")]]);
}

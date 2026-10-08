// Scorify Telegram bot.
//   POST with X-Telegram-Bot-Api-Secret-Token → Telegram webhook update
//   POST {"drain":true}                       → deliver queued notifications (called by pg_net / pg_cron)
//   GET  ?setup=<bot token>                   → register webhook, commands and menu button (run once after deploy)
import { serviceClient } from "../_shared/quota.ts";
import { adminIds, botToken, initBotToken, safeEqual, tg, type TelegramUser, webAppUrl, webhookSecret } from "../_shared/telegram.ts";
import { isSiteAdmin, upsertTelegramAccount } from "../_shared/telegram-accounts.ts";
import { BTN, type Ctx, LEGACY_BTN, send, setState } from "./ui.ts";
import * as user from "./user.ts";
import { adminCallback, adminInput, showAdmin } from "./admin.ts";
import { drain } from "./notify.ts";
import { setupBot } from "./setup.ts";

declare const EdgeRuntime: { waitUntil(p: Promise<unknown>): void } | undefined;

interface Message {
  message_id: number;
  from?: TelegramUser;
  chat: { id: number; type: string };
  text?: string;
}
interface CallbackQuery { id: string; from: TelegramUser; data?: string; message?: Message }
interface Update {
  update_id: number;
  message?: Message;
  callback_query?: CallbackQuery;
  my_chat_member?: { chat: { id: number; type: string }; from: TelegramUser; new_chat_member: { status: string } };
}

const db = serviceClient();
const ok = () => new Response("ok");

async function buildCtx(from: TelegramUser, chatId: number): Promise<Ctx> {
  const account = await upsertTelegramAccount(db, from);
  const isAdmin = adminIds().has(from.id) || await isSiteAdmin(db, account.user_id);
  return { db, from, chatId, account, isAdmin };
}

const MENU: Record<string, (ctx: Ctx) => Promise<unknown>> = {
  [BTN.learn]: user.showLearn,
  [BTN.writing]: user.showWriting,
  [BTN.speaking]: user.showSpeaking,
  [BTN.dictionary]: user.showDictionary,
  [BTN.articles]: user.showArticles,
  [BTN.cabinet]: user.showCabinet,
  [BTN.referral]: user.showInvite,
  [BTN.start]: (c) => user.showStart(c),
  [BTN.help]: user.showHelp,
};

/** Buttons of older keyboards: still answered, and the new keyboard is sent along. */
const LEGACY: Record<string, (ctx: Ctx) => Promise<unknown>> = {
  [LEGACY_BTN.stats]: user.showStats,
  [LEGACY_BTN.results]: user.showStats,
  [LEGACY_BTN.results2]: user.showStats,
  [LEGACY_BTN.goal]: user.showGoal,
  [LEGACY_BTN.plan]: user.showPlan,
  [LEGACY_BTN.top]: (c) => user.showTop(c, "w"),
  [LEGACY_BTN.invite]: user.showInvite,
  [LEGACY_BTN.dailyTest]: user.showDailyTest,
  [LEGACY_BTN.quiz]: user.newQuiz,
  [LEGACY_BTN.daily]: user.showDaily,
  [LEGACY_BTN.open]: user.openApp,
  [LEGACY_BTN.settings]: user.showSettings,
  [LEGACY_BTN.register]: user.register,
  [LEGACY_BTN.linkGoogle]: user.linkInfo,
};

const COMMANDS: Record<string, (ctx: Ctx) => Promise<unknown>> = {
  menu: (c) => user.showMenu(c),
  learn: user.showLearn,
  referral: user.showInvite,
  dictionary: user.showDictionary,
  writing: user.showWriting,
  speaking: user.showSpeaking,
  test: user.showDailyTest,
  quiz: user.newQuiz,
  articles: user.showArticles,
  blog: user.showArticles,
  cabinet: user.showCabinet,
  results: user.showStats,
  stats: user.showStats,
  goal: user.showGoal,
  plan: user.showPlan,
  top: (c) => user.showTop(c, "w"),
  invite: user.showInvite,
  daily: user.showDaily,
  app: user.openApp,
  settings: user.showSettings,
  help: user.showHelp,
};

async function onMessage(msg: Message) {
  if (!msg.from || msg.from.is_bot || msg.chat.type !== "private") return;
  const ctx = await buildCtx(msg.from, msg.chat.id);
  if (ctx.account.is_banned) {
    await send(ctx.chatId, "🚫 Sizning botdan foydalanishingiz cheklangan.");
    return;
  }
  const text = msg.text?.trim() ?? "";
  const command = /^\/([a-z_]+)(?:@\w+)?(?:\s+(.+))?$/i.exec(text);

  if (command) {
    const name = command[1].toLowerCase();
    const arg = command[2]?.trim() ?? "";
    if (ctx.account.state && name !== "admin") await setState(ctx, null);
    if (name === "start") return user.handleStart(ctx, arg);
    if (name === "cancel") return user.showMenu(ctx, "❎ Bekor qilindi.");
    if (name === "admin") return ctx.isAdmin ? showAdmin(ctx) : user.showMenu(ctx);
    if (COMMANDS[name]) return COMMANDS[name](ctx);
    return user.showMenu(ctx);
  }

  // Menu buttons always win over a pending dialog.
  if (MENU[text] || LEGACY[text] || text === BTN.admin) {
    if (ctx.account.state) await setState(ctx, null);
    if (text === BTN.admin) return ctx.isAdmin ? showAdmin(ctx) : user.showMenu(ctx);
    if (LEGACY[text]) {
      await user.showMenu(ctx, "✨ <b>Menyu yangilandi</b> — endi hammasi ixchamroq.\n<i>Natijalar, maqsad, tarif va boshqalar «👤 Kabinet» ichida.</i>");
      return LEGACY[text](ctx);
    }
    return MENU[text](ctx);
  }

  if (ctx.account.state) {
    if (text && await user.referralInput(ctx, text)) return;
    if (ctx.isAdmin && await adminInput(ctx, msg)) return;
    if (ctx.account.state.awaiting === "exam_date" && text) return user.examDateInput(ctx, text);
  }

  await send(ctx.chatId,
    "✍️ Esse va 🎤 speaking javoblari ilova ichida topshiriladi — u yerda sun'iy intellekt ularni baholaydi, natijani esa shu yerga yuboraman.\n\n" +
    "Boshqa bo'limlar pastdagi menyuda 👇",
    { inline_keyboard: [[{ text: "✍️ Writing", web_app: { url: webAppUrl("/writing") } },
      { text: "🎤 Speaking", web_app: { url: webAppUrl("/speaking") } }]] });
}

async function onCallback(q: CallbackQuery) {
  if (!q.message || q.message.chat.type !== "private") {
    await tg("answerCallbackQuery", { callback_query_id: q.id }).catch(() => {});
    return;
  }
  const ctx = await buildCtx(q.from, q.message.chat.id);
  ctx.messageId = q.message.message_id;
  const parts = (q.data ?? "").split(":");
  // Buttons under notifications ("n:" prefix) open a new message so the notification stays in the chat.
  if (parts[0] === "n") {
    parts.shift();
    ctx.messageId = undefined;
  }
  let toast: string | undefined;

  try {
    if (ctx.account.is_banned) {
      toast = "Botdan foydalanish cheklangan";
      return;
    }
    switch (parts[0]) {
      case "u": {
        const map: Record<string, (c: Ctx) => Promise<unknown>> = {
          stats: user.showStats, plan: user.showPlan, goal: user.showGoal, invite: user.showInvite, daily: user.showDaily,
          settings: user.showSettings, help: user.showHelp, open: user.openApp, register: user.register, linkinfo: user.linkInfo,
          cab: user.showCabinet, blog: user.showArticles, start: (c) => user.showStart(c), test: user.showDailyTest,
          writing: user.showWriting, speaking: user.showSpeaking, learn: user.showLearn,
        };
        if (parts[1] === "register") ctx.messageId = undefined;
        if (map[parts[1]]) await map[parts[1]](ctx);
        break;
      }
      case "r":
        if (parts[1] === "l") await user.showResults(ctx, parts[2] ?? "a");
        else if (parts[1] === "v" && ["e", "s", "m"].includes(parts[2]) && /^[0-9a-f-]{36}$/i.test(parts[3] ?? "")) {
          await user.showResult(ctx, parts[2] as "e" | "s" | "m", parts[3]);
        }
        break;
      case "g":
        await user.goalAction(ctx, parts);
        break;
      case "t":
        await user.showTop(ctx, ["d", "w", "m"].includes(parts[1]) ? parts[1] : "w");
        break;
      case "rf":
        if (parts[1] === "w") await user.withdrawStart(ctx);
        else if (parts[1] === "wy") await user.withdrawConfirm(ctx);
        break;
      case "q":
        if (parts[1] === "n") await user.newQuiz(ctx);
        else if (parts[1] === "a") {
          const correct = Number(parts[2]), chosen = Number(parts[3]);
          toast = correct === chosen ? "✅ To'g'ri!" : "❌ Noto'g'ri";
          await user.answerQuiz(ctx, correct, chosen);
        }
        break;
      case "s":
        await user.settingsAction(ctx, parts);
        break;
      case "lg":
        await user.loginDecision(ctx, parts[2] ?? "", parts[1] === "ok");
        break;
      case "ad":
        if (!ctx.isAdmin) {
          toast = "Faqat adminlar uchun";
          break;
        }
        await adminCallback(ctx, parts);
        break;
    }
  } finally {
    await tg("answerCallbackQuery", { callback_query_id: q.id, ...(toast ? { text: toast } : {}) }).catch(() => {});
  }
}

async function onUpdate(update: Update) {
  if (update.message) return onMessage(update.message);
  if (update.callback_query) return onCallback(update.callback_query);
  if (update.my_chat_member && update.my_chat_member.chat.type === "private") {
    const blocked = ["kicked", "left"].includes(update.my_chat_member.new_chat_member.status);
    await db.from("telegram_accounts").update({ is_blocked: blocked }).eq("telegram_id", update.my_chat_member.from.id);
  }
}

function background(p: Promise<unknown>): Promise<void> | void {
  const guarded = p.then(() => {}).catch((e) => console.error("drain failed:", e));
  if (typeof EdgeRuntime !== "undefined") EdgeRuntime.waitUntil(guarded);
  else return guarded;
}

Deno.serve(async (req) => {
  const url = new URL(req.url);
  await initBotToken(db);

  if (req.method === "GET" && url.searchParams.has("setup")) {
    let token: string;
    try {
      token = botToken();
    } catch {
      return Response.json({ error: "TELEGRAM_BOT_TOKEN secret is not set" }, { status: 500 });
    }
    if (!safeEqual(url.searchParams.get("setup") ?? "", token)) return new Response("Forbidden", { status: 403 });
    return Response.json(await setupBot(db));
  }
  if (req.method !== "POST") return new Response("Scorify bot is running", { status: 200 });

  const secretHeader = req.headers.get("X-Telegram-Bot-Api-Secret-Token");
  if (secretHeader !== null) {
    if (!safeEqual(secretHeader, await webhookSecret())) return new Response("Forbidden", { status: 403 });
    let update: Update;
    try {
      update = await req.json();
    } catch {
      return ok();
    }
    try {
      await onUpdate(update);
    } catch (e) {
      console.error("update failed:", e);
      const chatId = update.message?.chat.id ?? update.callback_query?.message?.chat.id;
      if (chatId) await send(chatId, "⚠️ Xatolik yuz berdi. Birozdan keyin qayta urinib ko'ring.").catch(() => {});
    }
    return ok(); // Always 200 so Telegram does not retry the same update.
  }

  // Drain request: only delivers what is already queued, so it needs no secret.
  const body = await req.json().catch(() => null) as { drain?: boolean } | null;
  if (body?.drain) {
    const task = background(drain(db));
    if (task) await task;
    return new Response(JSON.stringify({ ok: true }), { status: 202, headers: { "Content-Type": "application/json" } });
  }
  return new Response("Bad request", { status: 400 });
});


// Registers the webhook, commands, menu button and descriptions with Telegram.
import { adminIds, botToken, SITE_URL, tg, webhookSecret } from "../_shared/telegram.ts";
import type { Db } from "../_shared/telegram-accounts.ts";

export function functionUrl(): string {
  const base = (Deno.env.get("SUPABASE_URL") ?? "").replace(/\/+$/, "");
  return `${base}/functions/v1/telegram-bot`;
}

const USER_COMMANDS = [
  { command: "start", description: "Bosh menyu" },
  { command: "stats", description: "Statistikam" },
  { command: "results", description: "Natijalarim" },
  { command: "goal", description: "Maqsad va haftalik reja" },
  { command: "plan", description: "Tarif va limitlar" },
  { command: "top", description: "Writing reytingi" },
  { command: "invite", description: "Do'stlarni taklif qilish" },
  { command: "daily", description: "Kunlik mashq" },
  { command: "quiz", description: "So'z testi" },
  { command: "app", description: "Scorify ilovasini ochish" },
  { command: "settings", description: "Bildirishnomalar" },
  { command: "help", description: "Yordam" },
];

export async function setupBot(db: Db): Promise<Record<string, unknown>> {
  const url = functionUrl();
  const results: Record<string, unknown> = {};
  const step = async (name: string, fn: () => Promise<unknown>) => {
    try {
      results[name] = await fn();
    } catch (e) {
      results[name] = `error: ${e instanceof Error ? e.message : String(e)}`;
    }
  };

  await step("setWebhook", async () => tg("setWebhook", {
    url,
    secret_token: await webhookSecret(botToken()),
    allowed_updates: ["message", "callback_query", "my_chat_member"],
    max_connections: 40,
  }));
  await step("setMyCommands", () => tg("setMyCommands", { commands: USER_COMMANDS }));
  for (const id of adminIds()) {
    await step(`setMyCommands:${id}`, () => tg("setMyCommands", {
      commands: [...USER_COMMANDS, { command: "admin", description: "👑 Admin panel" }],
      scope: { type: "chat", chat_id: id },
    }));
  }
  await step("setChatMenuButton", () => tg("setChatMenuButton", {
    menu_button: { type: "web_app", text: "Scorify", web_app: { url: `${SITE_URL}/tg?next=%2Fdashboard` } },
  }));
  await step("setMyShortDescription", () => tg("setMyShortDescription", {
    short_description: "IELTS Writing va Speaking natijalaringiz, statistika, maqsad va kunlik mashq — Scorify.uz bilan bog'langan bot.",
  }));
  await step("setMyDescription", () => tg("setMyDescription", {
    description: "Scorify — IELTS Writing va Speaking'ni sun'iy intellekt yordamida baholaydigan platforma.\n\n" +
      "Bu bot orqali:\n• natijalaringiz avtomatik keladi\n• statistika, maqsad va tarifingizni kuzatasiz\n" +
      "• har kuni yangi so'z, savol va grammatika maslahatini olasiz\n• saytni Telegram ichida ochib, bir bosishda kirasiz\n\n" +
      "Boshlash uchun «Start» tugmasini bosing.",
  }));
  await step("drain_url", async () => {
    const { error } = await db.from("telegram_settings").upsert({ key: "drain_url", value: url, updated_at: new Date().toISOString() });
    if (error) throw error;
    return url;
  });
  await step("getWebhookInfo", () => tg("getWebhookInfo"));
  return results;
}

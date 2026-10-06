// Registers the webhook, commands, menu button and descriptions with Telegram.
import { adminIds, botToken, SITE_URL, tg, webhookSecret } from "../_shared/telegram.ts";
import type { Db } from "../_shared/telegram-accounts.ts";

export function functionUrl(): string {
  const base = (Deno.env.get("SUPABASE_URL") ?? "").replace(/\/+$/, "");
  return `${base}/functions/v1/telegram-bot`;
}

const USER_COMMANDS = [
  { command: "start", description: "Bosh menyu" },
  { command: "writing", description: "IELTS Writing" },
  { command: "speaking", description: "IELTS Speaking" },
  { command: "test", description: "Kunlik grammatika testi" },
  { command: "quiz", description: "So'z testi" },
  { command: "articles", description: "Foydali maqolalar" },
  { command: "cabinet", description: "Kabinet: natijalar, maqsad, tarif" },
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
    short_description: "IELTS Writing va Speaking natijalaringiz, kunlik testlar va foydali maqolalar — Scorify.uz rasmiy boti.",
  }));
  await step("setMyDescription", () => tg("setMyDescription", {
    description: "Scorify — IELTS Writing va Speaking javoblaringizni bir necha soniyada band bo'yicha baholaydigan platforma.\n\n" +
      "Bu botda:\n• natijalaringiz avtomatik keladi — mezonlar va xatolar tahlili bilan\n• har kuni grammatika testi va so'z mashqi\n" +
      "• IELTS bo'yicha foydali maqolalar\n• saytni Telegram ichida ochib, bir bosishda kirasiz\n\n" +
      "Boshlash uchun «Start»ni bosing 👇",
  }));
  await step("drain_url", async () => {
    const { error } = await db.from("telegram_settings").upsert({ key: "drain_url", value: url, updated_at: new Date().toISOString() });
    if (error) throw error;
    return url;
  });
  await step("getWebhookInfo", () => tg("getWebhookInfo"));
  return results;
}

// Website side of the Telegram integration.
//   login_start / login_poll  – "Continue with Telegram" on the sign-in page (confirmed in the bot)
//   webapp                   – automatic sign-in inside the Telegram Mini App (initData)
//   status / link_start / unlink / settings – Telegram card on the profile page (signed-in users)
import { getRequestUser, serviceClient } from "../_shared/quota.ts";
import { isRecord, json, preflight } from "../_shared/http.ts";
import { botLink, botToken, randomCode, sha256Hex, safeEqual, truncate, validateInitData } from "../_shared/telegram.ts";
import {
  createSessionToken, ensureScorifyUser, isTelegramEmail, type TelegramAccount, upsertTelegramAccount,
} from "../_shared/telegram-accounts.ts";

const CODE = /^[A-Za-z0-9_-]{8,32}$/;

function clientInfo(req: Request): string {
  const ua = req.headers.get("User-Agent") ?? "";
  const os = /Android/i.test(ua) ? "Android" : /iPhone|iPad|iOS/i.test(ua) ? "iOS" : /Windows/i.test(ua) ? "Windows"
    : /Mac OS X|Macintosh/i.test(ua) ? "macOS" : /Linux/i.test(ua) ? "Linux" : "";
  const browser = /Edg\//.test(ua) ? "Edge" : /OPR\/|Opera/.test(ua) ? "Opera" : /Firefox\//.test(ua) ? "Firefox"
    : /Chrome\//.test(ua) ? "Chrome" : /Safari\//.test(ua) ? "Safari" : "";
  return truncate([browser, os].filter(Boolean).join(", ") || "Web browser", 80);
}

Deno.serve(async (req) => {
  const early = preflight(req);
  if (early) return early;

  try {
    const db = serviceClient();
    const body: unknown = await req.json().catch(() => null);
    if (!isRecord(body) || typeof body.action !== "string") return json(req, { error: "Invalid request" }, 400);

    switch (body.action) {
      case "login_start": {
        const code = randomCode(12);
        const secret = randomCode(24);
        const { error } = await db.from("telegram_auth_requests").insert({
          code, kind: "login", secret_hash: await sha256Hex(secret), client_info: clientInfo(req),
        });
        if (error) throw error;
        return json(req, { code, secret, url: await botLink(`login_${code}`), expires_in: 600 });
      }

      case "login_poll": {
        if (typeof body.code !== "string" || !CODE.test(body.code) || typeof body.secret !== "string" || body.secret.length > 64) {
          return json(req, { error: "Invalid request" }, 400);
        }
        const { data: row } = await db.from("telegram_auth_requests").select("*").eq("code", body.code).eq("kind", "login").maybeSingle();
        if (!row || !safeEqual(row.secret_hash ?? "", await sha256Hex(body.secret))) return json(req, { status: "not_found" });
        if (row.status === "pending") {
          return json(req, { status: new Date(row.expires_at) < new Date() ? "expired" : "pending" });
        }
        if (row.status !== "confirmed") return json(req, { status: row.status });

        const { data: claimed } = await db.from("telegram_auth_requests").update({ status: "used" })
          .eq("code", body.code).eq("status", "confirmed").select("telegram_id").maybeSingle();
        if (!claimed?.telegram_id) return json(req, { status: "used" });
        const { data: account } = await db.from("telegram_accounts").select("*").eq("telegram_id", claimed.telegram_id).single();
        if (!account) return json(req, { status: "not_found" });
        if ((account as TelegramAccount).is_banned) return json(req, { status: "banned" });
        const { userId } = await ensureScorifyUser(db, account as TelegramAccount);
        return json(req, { status: "ok", ...(await createSessionToken(db, userId)) });
      }

      case "webapp": {
        if (typeof body.initData !== "string" || body.initData.length > 4096) return json(req, { error: "Invalid init data" }, 400);
        const init = await validateInitData(body.initData, botToken());
        if (!init || init.user.is_bot) return json(req, { error: "Telegram data could not be verified" }, 401);
        const existing = await db.from("telegram_accounts").select("is_banned").eq("telegram_id", init.user.id).maybeSingle();
        if (existing.data?.is_banned) return json(req, { error: "This Telegram account is blocked" }, 403);
        const account = await upsertTelegramAccount(db, init.user);
        const { userId, created } = await ensureScorifyUser(db, account);
        // The page skips the sign-in step when it already has a session for this user.
        if (typeof body.currentUserId === "string" && body.currentUserId === userId) {
          return json(req, { user_id: userId, created, start_param: init.startParam });
        }
        return json(req, { user_id: userId, created, start_param: init.startParam, ...(await createSessionToken(db, userId)) });
      }
    }

    // Everything below needs a signed-in site user.
    const user = await getRequestUser(req, db);
    if (!user) return json(req, { error: "Unauthorized" }, 401);
    const { data: linked } = await db.from("telegram_accounts")
      .select("telegram_id,username,first_name,notify_results,notify_reminders,notify_news,linked_at")
      .eq("user_id", user.id).maybeSingle();

    switch (body.action) {
      case "status":
        return json(req, {
          linked: !!linked,
          telegram_only: isTelegramEmail(user.email),
          account: linked ?? null,
          bot_url: await botLink(),
        });

      case "link_start": {
        if (linked) return json(req, { linked: true, bot_url: await botLink() });
        const code = randomCode(12);
        const { error } = await db.from("telegram_auth_requests").insert({
          code, kind: "link", user_id: user.id, client_info: clientInfo(req),
        });
        if (error) throw error;
        return json(req, { linked: false, url: await botLink(`link_${code}`), expires_in: 600 });
      }

      case "unlink": {
        if (isTelegramEmail(user.email)) {
          return json(req, { error: "This account was created with Telegram and cannot be disconnected from it." }, 400);
        }
        const { error } = await db.from("telegram_accounts").update({ user_id: null, linked_at: null }).eq("user_id", user.id);
        if (error) throw error;
        return json(req, { linked: false });
      }

      case "settings": {
        if (!linked) return json(req, { error: "Telegram is not connected" }, 400);
        const patch: Record<string, boolean> = {};
        for (const key of ["notify_results", "notify_reminders", "notify_news"] as const) {
          if (typeof body[key] === "boolean") patch[key] = body[key] as boolean;
        }
        if (!Object.keys(patch).length) return json(req, { error: "Nothing to update" }, 400);
        const { error } = await db.from("telegram_accounts").update(patch).eq("user_id", user.id);
        if (error) throw error;
        return json(req, { ok: true, ...patch });
      }
    }
    return json(req, { error: "Unknown action" }, 400);
  } catch (e) {
    console.error("telegram-auth error:", e);
    return json(req, { error: "Telegram service error" }, 500);
  }
});

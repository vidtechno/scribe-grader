// Links Telegram identities to Scorify (Supabase Auth) users.
import { serviceClient } from "./quota.ts";
import { fullName, type TelegramUser } from "./telegram.ts";

export type Db = ReturnType<typeof serviceClient>;

export interface TelegramAccount {
  telegram_id: number;
  user_id: string | null;
  username: string | null;
  first_name: string | null;
  last_name: string | null;
  language_code: string | null;
  notify_results: boolean;
  notify_reminders: boolean;
  notify_news: boolean;
  reminder_mode: "normal" | "light" | "off";
  is_blocked: boolean;
  is_banned: boolean;
  pending_ref: string | null;
  state: Record<string, unknown> | null;
  quiz_correct: number;
  quiz_total: number;
  linked_at: string | null;
  created_at: string;
}

/** Placeholder address for accounts created through Telegram (Supabase Auth needs an email). */
export const TELEGRAM_EMAIL_DOMAIN = "telegram.scorify.uz";
export const telegramEmail = (telegramId: number) => `tg${telegramId}@${TELEGRAM_EMAIL_DOMAIN}`;
export const isTelegramEmail = (email?: string | null) => !!email && email.endsWith(`@${TELEGRAM_EMAIL_DOMAIN}`);

/** Creates or refreshes the Telegram account row from the latest profile data. */
export async function upsertTelegramAccount(db: Db, u: TelegramUser, extra: Record<string, unknown> = {}): Promise<TelegramAccount> {
  const { data, error } = await db.from("telegram_accounts").upsert({
    telegram_id: u.id,
    username: u.username ?? null,
    first_name: u.first_name ?? null,
    last_name: u.last_name ?? null,
    language_code: u.language_code ?? null,
    is_blocked: false,
    last_seen_at: new Date().toISOString(),
    ...extra,
  }, { onConflict: "telegram_id" }).select("*").single();
  if (error) throw error;
  return data as TelegramAccount;
}

async function userIdByEmail(db: Db, email: string): Promise<string | null> {
  const { data } = await db.from("profiles").select("user_id").eq("email", email).maybeSingle();
  return (data?.user_id as string | undefined) ?? null;
}

/**
 * Returns the Scorify user for a Telegram account, creating one when the account is not linked yet.
 * New accounts get the Free plan through the existing handle_new_user trigger.
 */
export async function ensureScorifyUser(db: Db, account: TelegramAccount): Promise<{ userId: string; created: boolean }> {
  if (account.user_id) return { userId: account.user_id, created: false };

  const email = telegramEmail(account.telegram_id);
  let userId = await userIdByEmail(db, email);
  let created = false;
  if (!userId) {
    const { data, error } = await db.auth.admin.createUser({
      email,
      email_confirm: true,
      user_metadata: {
        full_name: fullName(account) || account.username || "Telegram user",
        telegram_id: account.telegram_id,
        telegram_username: account.username,
        signup_source: "telegram",
      },
      app_metadata: { provider: "telegram", providers: ["telegram"] },
    });
    if (error || !data.user) {
      // A parallel request may have created the same user a moment ago.
      userId = await userIdByEmail(db, email);
      if (!userId) throw error ?? new Error("Could not create user");
    } else {
      userId = data.user.id;
      created = true;
    }
  }

  const { error: linkError } = await db.from("telegram_accounts")
    .update({ user_id: userId, linked_at: new Date().toISOString(), pending_ref: null })
    .eq("telegram_id", account.telegram_id).is("user_id", null);
  if (linkError) throw linkError;
  const { data: row } = await db.from("telegram_accounts").select("user_id").eq("telegram_id", account.telegram_id).single();
  const finalUserId = (row?.user_id as string | null) ?? userId;

  if (created && account.pending_ref) {
    const { error } = await db.rpc("internal_claim_referral", { _me: finalUserId, _code: account.pending_ref });
    if (error) console.error("referral claim failed:", error.message);
  }
  return { userId: finalUserId, created };
}

/** One-time token the browser exchanges for a session with supabase.auth.verifyOtp({ token_hash, type: 'magiclink' }). */
export async function createSessionToken(db: Db, userId: string): Promise<{ token_hash: string; email: string }> {
  const { data: userData, error: userError } = await db.auth.admin.getUserById(userId);
  if (userError || !userData.user?.email) throw userError ?? new Error("User has no email");
  const email = userData.user.email;
  const { data, error } = await db.auth.admin.generateLink({ type: "magiclink", email });
  if (error) throw error;
  const tokenHash = data.properties?.hashed_token;
  if (!tokenHash) throw new Error("Could not create sign-in token");
  return { token_hash: tokenHash, email };
}

export async function isSiteAdmin(db: Db, userId: string | null): Promise<boolean> {
  if (!userId) return false;
  const { data } = await db.from("user_roles").select("role").eq("user_id", userId).eq("role", "admin").maybeSingle();
  return !!data;
}

/** True when a Telegram-only account has nothing worth keeping, so it can be replaced by a linked account. */
export async function isEmptyTelegramOnlyUser(db: Db, userId: string): Promise<boolean> {
  const { data: profile } = await db.from("profiles").select("email").eq("user_id", userId).maybeSingle();
  if (!isTelegramEmail(profile?.email as string | undefined)) return false;
  const counts = await Promise.all([
    db.from("essays").select("id", { count: "exact", head: true }).eq("user_id", userId),
    db.from("speaking_attempts").select("id", { count: "exact", head: true }).eq("user_id", userId),
    db.from("mock_tests").select("id", { count: "exact", head: true }).eq("user_id", userId),
    // Study progress is worth keeping too: never replace an account that has started the course.
    db.from("learning_profiles").select("user_id", { count: "exact", head: true }).eq("user_id", userId),
    db.from("user_follows").select("follower_id", { count: "exact", head: true }).or(`follower_id.eq.${userId},followee_id.eq.${userId}`),
  ]);
  const { data: sub } = await db.from("subscriptions").select("plan_type").eq("user_id", userId).maybeSingle();
  return counts.every((c) => (c.count ?? 0) === 0) && (sub?.plan_type ?? "free") === "free";
}

/**
 * Connects a Telegram account to an existing site user (the "Connect Telegram" flow).
 * Returns a reason code when the link is not possible.
 */
export async function linkTelegramToUser(db: Db, account: TelegramAccount, userId: string):
  Promise<{ ok: true } | { ok: false; reason: "linked_elsewhere" | "telegram_account_has_data" }> {
  if (account.user_id === userId) return { ok: true };
  let replacedUser: string | null = null;
  if (account.user_id) {
    const { data: current } = await db.from("profiles").select("email").eq("user_id", account.user_id).maybeSingle();
    if (!isTelegramEmail(current?.email as string | undefined)) return { ok: false, reason: "linked_elsewhere" };
    if (!(await isEmptyTelegramOnlyUser(db, account.user_id))) return { ok: false, reason: "telegram_account_has_data" };
    replacedUser = account.user_id;
  }
  // A site user has at most one Telegram account: release any previous one.
  await db.from("telegram_accounts").update({ user_id: null, linked_at: null }).eq("user_id", userId);
  const { error } = await db.from("telegram_accounts")
    .update({ user_id: userId, linked_at: new Date().toISOString(), pending_ref: null })
    .eq("telegram_id", account.telegram_id);
  if (error) throw error;
  if (replacedUser) {
    const { error: deleteError } = await db.auth.admin.deleteUser(replacedUser);
    if (deleteError) console.error("could not remove empty Telegram-only user:", deleteError.message);
  }
  return { ok: true };
}

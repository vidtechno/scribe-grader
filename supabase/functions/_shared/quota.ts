import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export type QuotaKind = "writing" | "speaking" | "mock_test";

export interface QuotaResult {
  allowed: boolean;
  reason?: string;
  plan?: string;
  kind?: string;
  used?: number;
  limit?: number;
}

export function serviceClient() {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
}

/** Resolves the caller from the Authorization header. Returns null when unauthenticated. */
export async function getRequestUser(req: Request, supabase: ReturnType<typeof serviceClient>) {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return null;
  const token = authHeader.replace("Bearer ", "");
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data?.user) return null;
  return data.user;
}

/** Atomically checks the plan allowance and increments usage. Server-side only. */
export async function consumeQuota(
  supabase: ReturnType<typeof serviceClient>,
  userId: string,
  kind: QuotaKind,
): Promise<QuotaResult> {
  const { data, error } = await supabase.rpc("consume_quota", { _user_id: userId, _kind: kind });
  if (error) {
    console.error("consume_quota error:", error.message);
    return { allowed: false, reason: "quota_check_failed" };
  }
  return (data ?? { allowed: false, reason: "quota_check_failed" }) as QuotaResult;
}

/** Gives the allowance back when the evaluation could not be produced. */
export async function refundQuota(
  supabase: ReturnType<typeof serviceClient>,
  userId: string,
  kind: QuotaKind,
) {
  try {
    await supabase.rpc("refund_quota", { _user_id: userId, _kind: kind });
  } catch (e) {
    console.error("refund_quota failed:", e);
  }
}

const LABELS: Record<QuotaKind, string> = {
  writing: "Writing evaluations",
  speaking: "Speaking evaluations",
  mock_test: "Mock Tests",
};

export function quotaErrorMessage(result: QuotaResult, kind: QuotaKind): string {
  if (result.reason === "limit_reached") {
    return result.plan === "free"
      ? `You have used your free ${LABELS[kind]}. Upgrade to Scorify Pro to keep practising.`
      : `You have used all ${result.limit} ${LABELS[kind]} in your plan this period.`;
  }
  if (result.reason === "no_subscription") return "No active plan found for this account.";
  return "Could not verify your plan allowance. Please try again.";
}

// Pure helpers for the Checkout.uz integration (no network and no remote imports, so they are easy to test).

export const CHECKOUT_BASE = "https://checkout.uz/api/v1";
export const PERIOD_DAYS: Record<number, number> = { 1: 30, 3: 90, 6: 180 };
export const PLAN_NAME: Record<string, string> = { go: "Learn", plus: "IELTS" };
export type CheckoutMethod = "click" | "payme";

export const isPeriod = (v: unknown): v is 1 | 3 | 6 => v === 1 || v === 3 || v === 6;
export const isPaidPlan = (v: unknown): v is "go" | "plus" => v === "go" || v === "plus";
export const isMethod = (v: unknown): v is CheckoutMethod => v === "click" || v === "payme";

const hex = (buf: ArrayBuffer) => Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");

/**
 * Checkout does not sign its webhooks, so the webhook URL carries a secret token. It is derived from the API key
 * (nothing extra to configure) and the payment is re-checked with Checkout before anything is credited.
 */
export async function webhookToken(apiKey: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", enc.encode(apiKey), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return hex(await crypto.subtle.sign("HMAC", key, enc.encode("scorify-checkout-webhook-v1")));
}

export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** Compares the amount Checkout reports with the amount we asked for (whole so'm). */
export function amountsMatch(reported: unknown, expected: number): boolean {
  const n = typeof reported === "string" ? Number(reported) : reported;
  return typeof n === "number" && Number.isFinite(n) && Math.abs(n - expected) < 0.5;
}

/** Reads a Checkout webhook body. Returns null when it does not look like one. */
export function parseWebhook(body: unknown): { orderId: number; system: string | null } | null {
  if (typeof body !== "object" || body === null) return null;
  const b = body as Record<string, unknown>;
  const data = typeof b.data === "object" && b.data !== null ? (b.data as Record<string, unknown>) : null;
  const id = Number(data?.order_id);
  if (!data || !Number.isSafeInteger(id) || id <= 0) return null;
  return { orderId: id, system: typeof b.payment_system === "string" ? b.payment_system.slice(0, 40) : null };
}

/** Which link the payer is sent to: the method they picked when Checkout offers it, else the hosted page. */
export function payerUrl(invoice: { _url?: unknown; _pay_via?: unknown }, method?: CheckoutMethod | null): string | null {
  const via = typeof invoice._pay_via === "object" && invoice._pay_via !== null ? (invoice._pay_via as Record<string, unknown>) : {};
  const direct = method ? via[method] : null;
  if (typeof direct === "string" && direct.startsWith("https://")) return direct;
  return typeof invoice._url === "string" && invoice._url.startsWith("https://") ? invoice._url : null;
}

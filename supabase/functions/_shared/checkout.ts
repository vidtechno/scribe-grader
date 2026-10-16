// Talks to Checkout.uz and settles invoices. Server-side only: the API key never leaves the edge functions.
import { amountsMatch, CHECKOUT_BASE } from "./checkout-core.ts";
import type { serviceClient } from "./quota.ts";

type Db = ReturnType<typeof serviceClient>;

export function checkoutKey(): string {
  const key = Deno.env.get("CHECKOUT_API_KEY");
  if (!key) throw new Error("CHECKOUT_API_KEY is not configured");
  return key;
}

export async function checkoutCall<T = Record<string, unknown>>(path: string, body: Record<string, unknown>): Promise<{ ok: boolean; status: number; data: T }> {
  const res = await fetch(`${CHECKOUT_BASE}/${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${checkoutKey()}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(12_000),
  });
  const data = await res.json().catch(() => ({})) as T;
  return { ok: res.ok, status: res.status, data };
}

export interface PaymentRow {
  id: string; user_id: string; plan: string; months: number; days: number; amount_uzs: number;
  status: string; method: string | null; checkout_id: number | null; checkout_url: string | null;
}

export type Settled = "paid" | "pending" | "failed" | "expired" | "error";

/**
 * Asks Checkout for the invoice and, only when it is paid for exactly the amount we asked for, activates the plan.
 * Safe to call any number of times: the database function activates once.
 */
export async function settlePayment(db: Db, pay: PaymentRow, system: string | null = null): Promise<Settled> {
  if (pay.status === "paid") return "paid";
  if (pay.status === "expired" || pay.status === "failed") return pay.status as Settled;
  if (!pay.checkout_id) return "pending";

  const r = await checkoutCall<{ data?: { status?: string; amount?: unknown } }>("status_payment", { id: pay.checkout_id });
  if (!r.ok) {
    console.error("status_payment failed", r.status, JSON.stringify(r.data).slice(0, 200));
    return "error";
  }
  const info = r.data.data;
  if (info?.status !== "paid") return "pending";
  if (!amountsMatch(info.amount, pay.amount_uzs)) {
    console.error("paid amount mismatch", pay.id, info.amount, pay.amount_uzs);
    await db.from("payments").update({ status: "failed", note: `Amount mismatch: Checkout reports ${String(info.amount)}` }).eq("id", pay.id).eq("status", "pending");
    return "failed";
  }
  const { error } = await db.rpc("internal_activate_payment", { _id: pay.id, _method: system, _raw: r.data });
  if (error) {
    console.error("internal_activate_payment failed", pay.id, error.message);
    return "error";
  }
  return "paid";
}

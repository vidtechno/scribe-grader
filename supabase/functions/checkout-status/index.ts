// Two callers: the signed-in payer's browser (is my payment through yet?) and the 5-minute safety net that re-checks
// invoices whose webhook never arrived. Both only ask Checkout and settle; nothing here trusts the caller's input.
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getRequestUser, serviceClient } from "../_shared/quota.ts";
import { isRecord, json, preflight } from "../_shared/http.ts";
import { settlePayment, type PaymentRow } from "../_shared/checkout.ts";

const COLUMNS = "id, user_id, plan, months, days, amount_uzs, status, method, checkout_id, checkout_url";

serve(async (req) => {
  const early = preflight(req);
  if (early) return early;
  try {
    const db = serviceClient();
    const body = await req.json().catch(() => null);
    const user = await getRequestUser(req, db);

    if (user && isRecord(body) && typeof body.payment_id === "string") {
      const { data: pay } = await db.from("payments").select(COLUMNS).eq("id", body.payment_id).eq("user_id", user.id).maybeSingle();
      if (!pay) return json(req, { error: "Payment not found" }, 404);
      const status = await settlePayment(db, pay as PaymentRow);
      return json(req, { status, plan: pay.plan, months: pay.months });
    }

    if (!user && isRecord(body) && body.reconcile === true) {
      const { data: list, error } = await db.rpc("internal_payments_sweep");
      if (error) throw error;
      let paid = 0;
      for (const item of (Array.isArray(list) ? list : []) as { id: string }[]) {
        const { data: pay } = await db.from("payments").select(COLUMNS).eq("id", item.id).maybeSingle();
        if (pay && (await settlePayment(db, pay as PaymentRow)) === "paid") paid++;
      }
      return json(req, { checked: Array.isArray(list) ? list.length : 0, paid });
    }
    return json(req, { error: "Unauthorized" }, user ? 400 : 401);
  } catch (e) {
    console.error("checkout-status error:", e instanceof Error ? e.message : e);
    return json(req, { error: "Server error" }, 500);
  }
});

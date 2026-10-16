// Checkout.uz calls this when an invoice is paid. The call is not signed, so it only triggers a re-check:
// the plan is activated only after Checkout itself confirms the invoice and the amount.
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { serviceClient } from "../_shared/quota.ts";
import { checkoutKey, settlePayment, type PaymentRow } from "../_shared/checkout.ts";
import { parseWebhook, safeEqual, webhookToken } from "../_shared/checkout-core.ts";

const reply = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

serve(async (req) => {
  if (req.method !== "POST") return reply({ error: "Method not allowed" }, 405);
  try {
    const token = new URL(req.url).searchParams.get("token") ?? "";
    if (!safeEqual(token, await webhookToken(checkoutKey()))) return reply({ error: "Forbidden" }, 403);

    const event = parseWebhook(await req.json().catch(() => null));
    if (!event) return reply({ ok: true, ignored: "unrecognised body" });

    const db = serviceClient();
    const { data: pay } = await db.from("payments").select("id, user_id, plan, months, days, amount_uzs, status, method, checkout_id, checkout_url")
      .eq("checkout_id", event.orderId).maybeSingle();
    if (!pay) return reply({ ok: true, ignored: "unknown invoice" });

    const result = await settlePayment(db, pay as PaymentRow, event.system);
    return reply({ ok: result !== "error", status: result }, result === "error" ? 500 : 200);
  } catch (e) {
    console.error("checkout-webhook error:", e instanceof Error ? e.message : e);
    return reply({ ok: false }, 500);
  }
});

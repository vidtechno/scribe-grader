// Creates a Checkout.uz invoice for a plan and period and returns the link the payer is sent to.
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getRequestUser, serviceClient } from "../_shared/quota.ts";
import { isRecord, json, preflight } from "../_shared/http.ts";
import { checkoutCall, checkoutKey } from "../_shared/checkout.ts";
import { isMethod, isPaidPlan, isPeriod, payerUrl, PERIOD_DAYS, PLAN_NAME, webhookToken } from "../_shared/checkout-core.ts";

const SITE_URL = (Deno.env.get("SITE_URL") ?? "https://www.scorify.uz").replace(/\/+$/, "");
const MAX_INVOICES_PER_HOUR = 10;

serve(async (req) => {
  const early = preflight(req);
  if (early) return early;
  try {
    const db = serviceClient();
    const user = await getRequestUser(req, db);
    if (!user) return json(req, { error: "Unauthorized" }, 401);

    const body = await req.json().catch(() => null);
    if (!isRecord(body) || !isPaidPlan(body.plan) || !isPeriod(body.months)) return json(req, { error: "Invalid plan or period" }, 400);
    const method = isMethod(body.method) ? body.method : null;
    const { plan, months } = body;

    // IELTS includes everything in Learn: an active IELTS plan must not be replaced by a Learn payment.
    const { data: sub } = await db.from("subscriptions").select("plan_type, expires_at").eq("user_id", user.id).maybeSingle();
    const active = !!sub?.expires_at && new Date(sub.expires_at).getTime() > Date.now();
    if (plan === "go" && active && sub?.plan_type === "plus") {
      return json(req, { error: "IELTS tarifingiz faol: Learn kerak emas, u IELTS ichida bor." }, 409);
    }

    const { data: price, error: priceError } = await db.rpc("internal_pay_price", { _plan: plan, _months: months });
    if (priceError || typeof price !== "number") throw priceError ?? new Error("No price");

    const since = new Date(Date.now() - 60 * 60_000).toISOString();
    const { count } = await db.from("payments").select("id", { head: true, count: "exact" }).eq("user_id", user.id).gte("created_at", since);
    if ((count ?? 0) >= MAX_INVOICES_PER_HOUR) return json(req, { error: "Juda ko'p urinish. Birozdan keyin qayta urinib ko'ring." }, 429);

    // The same unpaid invoice is reused for 50 minutes (Checkout invoices last an hour).
    const reuseSince = new Date(Date.now() - 50 * 60_000).toISOString();
    const { data: existing } = await db.from("payments").select("id, checkout_url, checkout_uuid, amount_uzs").eq("user_id", user.id).eq("plan", plan)
      .eq("months", months).eq("status", "pending").eq("amount_uzs", price).not("checkout_url", "is", null).gte("created_at", reuseSince)
      .order("created_at", { ascending: false }).limit(1).maybeSingle();
    if (existing?.checkout_url) {
      const direct = method && existing.checkout_uuid ? `https://checkout.uz/pay/${existing.checkout_uuid}/${method}` : existing.checkout_url;
      return json(req, { payment_id: existing.id, url: direct, amount: existing.amount_uzs });
    }

    const { data: row, error: insertError } = await db.from("payments").insert({
      user_id: user.id, plan, months, days: PERIOD_DAYS[months], amount_uzs: price,
    }).select("id").single();
    if (insertError || !row) throw insertError ?? new Error("Could not create the payment");

    const functionsBase = `${Deno.env.get("SUPABASE_URL")}/functions/v1`;
    const token = await webhookToken(checkoutKey());
    const created = await checkoutCall<{ status?: string; error?: string; payment?: Record<string, unknown> }>("create_payment", {
      amount: price,
      description: `Scorify ${PLAN_NAME[plan]}: ${months} oy`,
      return_url: `${SITE_URL}/dashboard?payment=${row.id}`,
      webhook_url: `${functionsBase}/checkout-webhook?token=${token}`,
    });
    const inv = created.data.payment;
    const url = inv ? payerUrl(inv, method) : null;
    if (!created.ok || !inv || !url || typeof inv._id !== "number") {
      console.error("create_payment failed", created.status, JSON.stringify(created.data).slice(0, 300));
      await db.from("payments").update({ status: "failed", note: `create_payment ${created.status}` }).eq("id", row.id);
      return json(req, { error: "To'lov tizimi javob bermadi. Birozdan keyin qayta urinib ko'ring." }, 502);
    }
    await db.from("payments").update({
      checkout_id: inv._id, checkout_uuid: typeof inv._uuid === "string" ? inv._uuid : null,
      checkout_url: typeof inv._url === "string" ? inv._url : url,
    }).eq("id", row.id);
    return json(req, { payment_id: row.id, url, amount: price });
  } catch (e) {
    console.error("create-checkout error:", e instanceof Error ? e.message : e);
    return json(req, { error: "Server xatosi. Qayta urinib ko'ring." }, 500);
  }
});

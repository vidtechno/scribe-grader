import { supabase } from '@/integrations/supabase/client';
import { BILLING_MONTHS, type Billing } from '@/lib/plans';

export type CheckoutMethod = 'click' | 'payme';
export type PaymentState = 'paid' | 'pending' | 'failed' | 'expired' | 'error';

async function failure(error: unknown, fallback: string): Promise<Error> {
  const ctx = (error as { context?: Response } | null)?.context;
  if (ctx && typeof ctx.json === 'function') {
    try {
      const body = await ctx.json() as { error?: string };
      if (body?.error) return new Error(body.error);
    } catch { /* fall through */ }
  }
  return new Error(fallback);
}

/** Creates an invoice and returns the Click / Payme link to send the payer to. */
export async function startCheckout(input: { plan: 'go' | 'plus'; billing: Billing; method: CheckoutMethod }) {
  const { data, error } = await supabase.functions.invoke('create-checkout', {
    body: { plan: input.plan, months: BILLING_MONTHS[input.billing], method: input.method },
  });
  if (error) throw await failure(error, "To'lovni boshlab bo'lmadi. Qayta urinib ko'ring.");
  const result = data as { url?: string; payment_id?: string; amount?: number } | null;
  if (!result?.url || !result.payment_id) throw new Error("To'lovni boshlab bo'lmadi. Qayta urinib ko'ring.");
  return { url: result.url, paymentId: result.payment_id, amount: Number(result.amount) || 0 };
}

/** Asks the server whether a payment went through (it re-checks with Checkout and activates the plan). */
export async function checkPayment(paymentId: string): Promise<{ status: PaymentState; plan?: string; months?: number }> {
  const { data, error } = await supabase.functions.invoke('checkout-status', { body: { payment_id: paymentId } });
  if (error) throw await failure(error, "To'lov holatini tekshirib bo'lmadi.");
  return data as { status: PaymentState; plan?: string; months?: number };
}

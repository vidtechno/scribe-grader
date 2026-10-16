import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

type Untyped = { from: (table: string) => { select: (cols: string) => { maybeSingle: () => Promise<{ data: { test_price_uzs: number | null } | null; error: unknown }> } } };

/** While testing payments every plan costs one flat amount (set in `payment_settings`); null means real prices. */
export function usePaymentSettings() {
  const { data } = useQuery({
    queryKey: ['payment-settings'],
    staleTime: 5 * 60_000,
    queryFn: async () => {
      const { data, error } = await (supabase as unknown as Untyped).from('payment_settings').select('test_price_uzs').maybeSingle();
      if (error) throw error;
      return data?.test_price_uzs ?? null;
    },
  });
  return { testPriceUzs: data ?? null };
}

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

/** Dashboard nudge: shows referral progress and prompts activation when the 10-friend reward is ready. */
export function ReferralBanner() {
  const [info, setInfo] = useState<{ counted: number; can_claim_go: boolean } | null>(null);
  useEffect(() => {
    supabase.rpc('my_referral').then(({ data, error }) => {
      if (!error && data) setInfo(data as unknown as { counted: number; can_claim_go: boolean });
    });
  }, []);
  if (!info) return null;
  const ready = info.can_claim_go;
  return (
    <div className={`mb-7 flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-4 ${ready ? 'border-primary/50 bg-primary/10' : 'border-border bg-card/60'}`}>
      <p className="text-sm flex items-center gap-2">
        <Gift className="h-4 w-4 text-primary shrink-0" />
        {ready
          ? 'You invited 10 friends — your free month of Learn is ready to activate!'
          : `Invite friends: ${Math.min(info.counted, 20)}/20 joined. 10 friends = 1 month Learn, 20 friends = 1 month IELTS.`}
      </p>
      <Link to="/referral"><Button size="sm" variant={ready ? 'glow' : 'outline'}>{ready ? 'Activate now' : 'Invite friends'}</Button></Link>
    </div>
  );
}

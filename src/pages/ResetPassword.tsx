import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { authErrorMessage } from '@/lib/auth-errors';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoadingScreen } from '@/components/LoadingScreen';
import { toast } from 'sonner';

export default function ResetPassword() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [saving, setSaving] = useState(false);
  if (loading) return <LoadingScreen />;
  return <main className="min-h-screen flex items-center justify-center p-4 bg-background">
    <div className="glass-card p-8 w-full max-w-md space-y-5">
      <h1 className="text-2xl font-bold">Reset your password</h1>
      {!user ? <><p>This reset link is invalid or expired. Please request another link.</p><Link to="/auth">Back to sign in</Link></> :
        <form className="space-y-4" onSubmit={async event => {
          event.preventDefault();
          if (password.length < 6) { toast.error('Password must be at least 6 characters'); return; }
          if (password !== confirmation) { toast.error('Passwords do not match'); return; }
          setSaving(true);
          try {
            const { error } = await supabase.auth.updateUser({ password });
            if (error) { toast.error(authErrorMessage(error)); return; }
            toast.success('Password updated');
            navigate('/dashboard', { replace: true });
          } catch { toast.error('Unable to update password. Please try again.'); }
          finally { setSaving(false); }
        }}>
          <Label htmlFor="new-password">New password</Label>
          <Input id="new-password" type="password" autoComplete="new-password" minLength={6} required value={password} onChange={e => setPassword(e.target.value)} />
          <Label htmlFor="confirm-password">Confirm password</Label>
          <Input id="confirm-password" type="password" autoComplete="new-password" minLength={6} required value={confirmation} onChange={e => setConfirmation(e.target.value)} />
          <Button type="submit" className="w-full" disabled={saving}>{saving ? 'Saving…' : 'Update password'}</Button>
        </form>}
    </div>
  </main>;
}

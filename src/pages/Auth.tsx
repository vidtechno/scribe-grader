import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, User, Loader2, ArrowRight, MapPin, Phone, Calendar } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';
import { authErrorMessage } from '@/lib/auth-errors';
import { supabase } from '@/integrations/supabase/client';
import { safeReturnTo } from '@/lib/returnTo';

const emailSchema = z.string().email('Please enter a valid email address');
const passwordSchema = z.string().min(6, 'Password must be at least 6 characters');
const nameSchema = z.string().min(2, 'Name must be at least 2 characters');
const ageSchema = z.number().min(10, 'Age must be at least 10').max(80, 'Age must be less than 80');
const citySchema = z.string().min(2, 'City must be at least 2 characters');

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmationEmail, setConfirmationEmail] = useState('');
  const [recoveryMode, setRecoveryMode] = useState(false);
  const [recoverySent, setRecoverySent] = useState(false);
  const [googleEnabled, setGoogleEnabled] = useState(false);
  const navigate = useNavigate();
  const next = safeReturnTo(new URLSearchParams(window.location.search).get('next'));
  if (next !== '/dashboard') sessionStorage.setItem('scorify:returnTo', next);
  else sessionStorage.removeItem('scorify:returnTo');
  const { signIn, signUp } = useAuth();

  useEffect(() => {
    if (typeof fetch !== 'function') return;
    const controller = new AbortController();
    fetch(`${import.meta.env.VITE_SUPABASE_URL}/auth/v1/settings`, {
      headers: { apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY }, signal: controller.signal,
    }).then(r => r.json()).then(settings => setGoogleEnabled(settings.external?.google === true)).catch(() => {});
    return () => controller.abort();
  }, []);

  const signInWithGoogle = async () => {
    if (next !== '/dashboard') sessionStorage.setItem('scorify:returnTo', next);
    const callback = `${window.location.origin}/auth/callback${next === '/dashboard' ? '' : `?next=${encodeURIComponent(next)}`}`;
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: callback } });
    if (error) toast.error(authErrorMessage(error));
  };

  const validateForm = () => {
    try {
      emailSchema.parse(email);
      passwordSchema.parse(password);
      if (!isLogin) {
        nameSchema.parse(fullName);
        ageSchema.parse(Number(age));
        citySchema.parse(city);
      }
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (recoveryMode) {
      const valid = emailSchema.safeParse(email.trim());
      if (!valid.success) { toast.error('Please enter a valid email address'); return; }
      setLoading(true);
      try {
        const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
          redirectTo: `${window.location.origin}/reset-password`,
        });
        if (error) toast.error(authErrorMessage(error));
        else setRecoverySent(true);
      } catch {
        toast.error('Unable to request a reset link. Please try again.');
      } finally { setLoading(false); }
      return;
    }
    
    if (!validateForm()) return;
    
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email.trim(), password);
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            toast.error('Invalid email or password');
          } else {
            toast.error(authErrorMessage(error));
          }
        } else {
          toast.success('Welcome back!');
          navigate(next);
        }
      } else {
        const { error, confirmationRequired } = await signUp(email.trim(), password, fullName.trim(), Number(age), city.trim(), phone.trim() || undefined);
        if (error) {
          if (error.message.includes('already registered')) {
            toast.error('This email is already registered. Please sign in.');
          } else {
            toast.error(authErrorMessage(error));
          }
        } else if (confirmationRequired) {
          setConfirmationEmail(email.trim());
          setPassword('');
        } else {
          toast.success('Account created! Welcome to Scorify.uz');
          navigate(next);
        }
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="w-full max-w-md relative animate-fade-in">
        {/* Logo */}
        <div className="text-center mb-8">
          <img src="/logo.png" alt="Scorify" className="w-16 h-16 object-contain mx-auto mb-4" />
          <h1 className="text-3xl font-bold">
            {isLogin ? 'Sign in to Scorify.uz' : 'Create your Scorify.uz account'}
          </h1>
          <p className="text-muted-foreground mt-2">
            {isLogin ? 'Welcome back! Sign in to continue.' : 'Create your account to get started.'}
          </p>
        </div>

        {/* Auth Card */}
        <div className="glass-card p-8">
          {googleEnabled && <Button type="button" variant="outline" className="w-full mb-5" onClick={() => void signInWithGoogle()}>
            Continue with Google
          </Button>}
          <div className="flex p-1 bg-muted/50 rounded-xl mb-6">
            <button
              type="button"
              onClick={() => { setIsLogin(true); setRecoveryMode(false); setConfirmationEmail(''); }}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                isLogin
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => { setIsLogin(false); setRecoveryMode(false); setConfirmationEmail(''); }}
              className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                !isLogin
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Create Account
            </button>
          </div>

          {confirmationEmail && (
            <div role="status" className="mb-6 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm space-y-2">
              <p className="font-semibold">Check your email</p>
              <p>Open the confirmation link sent to {confirmationEmail} before signing in. Please also check your spam folder.</p>
              <Button type="button" variant="outline" onClick={() => { setIsLogin(true); setConfirmationEmail(''); }}>Back to sign in</Button>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            {recoveryMode && <p role="status" className="text-sm text-muted-foreground">{recoverySent ? 'If this email has an account, a password reset link has been sent. Check your inbox and spam folder.' : 'Enter your account email to receive a password reset link.'}</p>}
            {!isLogin && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="pl-10 input-glass"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="age"
                        type="number"
                        placeholder="18"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="pl-10 input-glass"
                        required
                        min={10}
                        max={80}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="city"
                        type="text"
                        placeholder="Tashkent"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="pl-10 input-glass"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (optional)</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+998 90 123 45 67"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-10 input-glass"
                    />
                  </div>
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 input-glass"
                  required
                />
              </div>
            </div>

            {!recoveryMode && <div className="space-y-2">
              <Label htmlFor="password">Password *</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 input-glass"
                  required
                />
              </div>
            </div>}

            <Button
              type="submit"
              variant="glow"
              size="lg"
              className="w-full"
              disabled={loading || (recoveryMode && recoverySent) || !!confirmationEmail}
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  {recoveryMode ? 'Send reset link' : isLogin ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </form>
          {isLogin && <Button type="button" variant="link" className="w-full mt-3" disabled={loading}
            onClick={() => { setRecoveryMode(!recoveryMode); setRecoverySent(false); }}>
            {recoveryMode ? 'Back to sign in' : 'Forgot password?'}
          </Button>}

        </div>

        {/* Features list for signup */}
        {!isLogin && (
          <div className="mt-6 text-center text-sm text-muted-foreground animate-fade-in">
            <p>✓ Free Writing and Speaking practice to start</p>
            <p>✓ AI-powered essay evaluation</p>
            <p>✓ Detailed feedback & band scores</p>
          </div>
        )}
      </div>
    </div>
  );
}

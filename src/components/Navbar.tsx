import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useState, useEffect } from 'react';
import { LogOut, User, BookOpen, LayoutDashboard, Shield, Trophy, Crown, ClipboardList, PenLine, PenTool, Mic } from 'lucide-react';
import { PricingModal } from '@/components/PricingModal';
import { useSubscription } from '@/hooks/useSubscription';

export function Navbar() {
  const { user, profile, signOut } = useAuth();
  const { planName, planType } = useSubscription();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  useEffect(() => {
    if (!user) return;
    if (user.email === 'anorboyevdiyorbek714@gmail.com') {
      setIsAdmin(true);
    } else {
      supabase.from('user_roles').select('role').eq('user_id', user.id).eq('role', 'admin').single()
        .then(({ data }) => { if (data) setIsAdmin(true); });
    }
  }, [user]);

  const handleSignOut = async () => { await signOut(); navigate('/auth'); };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={user ? '/dashboard' : '/'} className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold gradient-text">Scorify.uz</span>
          </Link>

          {user ? (
            <div className="flex items-center gap-2 sm:gap-3">
              {isAdmin && (
                <Link to="/admin">
                  <Button variant="ghost" size="sm" className="gap-2 text-yellow-400">
                    <Shield className="h-4 w-4" />
                    <span className="hidden sm:inline">Admin</span>
                  </Button>
                </Link>
              )}
              <Link to="/dashboard" className="hidden md:block">
                <Button variant="ghost" size="sm" className="gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  <span className="hidden sm:inline">Dashboard</span>
                </Button>
              </Link>
              <Link to="/writing" className="hidden md:block">
                <Button variant="ghost" size="sm" className="gap-2">
                  <PenTool className="h-4 w-4" />
                  <span className="hidden sm:inline">Writing</span>
                </Button>
              </Link>
              <Link to="/speaking" className="hidden md:block">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Mic className="h-4 w-4" />
                  <span className="hidden sm:inline">Speaking</span>
                </Button>
              </Link>
              <Link to="/mock-test" className="hidden md:block">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ClipboardList className="h-4 w-4" />
                  <span className="hidden sm:inline">Mock Test</span>
                </Button>
              </Link>
              <Link to="/leaderboard" className="hidden md:block">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Trophy className="h-4 w-4" />
                  <span className="hidden sm:inline">Ranking</span>
                </Button>
              </Link>
              <button
                onClick={() => setShowPricing(true)}
                className="glass-card px-3 py-1.5 flex items-center gap-2 hover:bg-primary/10 transition-colors"
                title="Manage subscription"
              >
                <Crown className={`h-4 w-4 ${planType !== 'free' ? 'text-amber-500' : 'text-primary'}`} />
                <span className="text-sm font-medium">{planName}</span>
                {planType === 'free' && (
                  <span className="hidden sm:inline text-xs text-primary">Upgrade</span>
                )}
              </button>
              <ThemeToggle />
              <Link to="/profile" className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <User className="h-4 w-4" />
                <span className="max-w-[140px] truncate">{profile?.full_name || user.email}</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link to="/auth">
                <Button variant="glow">Sign In</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <PricingModal open={showPricing} onOpenChange={setShowPricing} />
    </nav>
  );
}

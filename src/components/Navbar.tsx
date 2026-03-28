import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { SubscriptionBadge } from '@/components/SubscriptionBadge';
import { useSubscription } from '@/hooks/useSubscription';
import { useState, useEffect } from 'react';
import { LogOut, User, CreditCard, BookOpen, LayoutDashboard, Shield, Trophy } from 'lucide-react';

export function Navbar() {
  const { user, profile, signOut } = useAuth();
  const { subscription } = useSubscription();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!user) return;
    // Check admin by email for nav button visibility
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
            <span className="text-xl font-bold gradient-text">WritingExam.uz</span>
          </Link>

          {user ? (
            <div className="flex items-center gap-3">
              {isAdmin && (
                <Link to="/admin">
                  <Button variant="ghost" size="sm" className="gap-2 text-yellow-400">
                    <Shield className="h-4 w-4" />
                    <span className="hidden sm:inline">Admin</span>
                  </Button>
                </Link>
              )}
              <Link to="/dashboard">
                <Button variant="ghost" size="sm" className="gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  <span className="hidden sm:inline">Dashboard</span>
                </Button>
              </Link>
              <Link to="/leaderboard">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Trophy className="h-4 w-4" />
                  <span className="hidden sm:inline">Ranking</span>
                </Button>
              </Link>
              <div className="glass-card px-3 py-1.5 flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{profile?.credits ?? 0}</span>
              </div>
              {subscription && (
                <SubscriptionBadge planType={subscription.plan_type} />
              )}
              <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{profile?.full_name || user.email}</span>
              </div>
              <Button variant="ghost" size="icon" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button variant="glow">Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

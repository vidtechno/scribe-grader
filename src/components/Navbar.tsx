import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Suspense, lazy, useState, useEffect } from 'react';
import { LogOut, User, LayoutDashboard, Shield, Crown, PenTool, Mic, BrainCircuit, BookOpen, GraduationCap, ChevronDown, ClipboardList, Target, Trophy } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import { useSubscription } from '@/hooks/useSubscription';

/** Pages that belong to the IELTS Practice section. */
const PRACTICE_PATHS = /^\/(practice|writing|exam|speaking|speaking-history|speaking-result|essays|result|drafts|mock-test|grammar-test|vocabulary)(\/|$)/;

const PricingModal = lazy(() => import('@/components/PricingModal').then(m => ({ default: m.PricingModal })));

export function Navbar() {
  const { user, profile, signOut } = useAuth();
  const { planName, planType, trialActive, trialDaysLeft } = useSubscription();
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={user ? '/dashboard' : '/'} className="flex items-center gap-2.5 shrink-0">
            <img src="/logo-128.webp" alt="Scorify" className="h-9 w-9 object-contain" />
            <span className="text-xl font-extrabold tracking-tight">Scorify<span className="text-primary">.uz</span></span>
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
                <Button variant="ghost" size="sm" className={`gap-2 ${pathname === '/dashboard' ? 'bg-secondary text-foreground' : ''}`}>
                  <LayoutDashboard className="h-4 w-4" />
                  <span className="hidden sm:inline">Dashboard</span>
                </Button>
              </Link>
              {/* The English course is the main section of the site. */}
              <Link to="/learn" className="hidden md:block" aria-current={pathname.startsWith('/learn') ? 'page' : undefined}>
                <Button size="sm" className={`gap-2 font-semibold ${pathname.startsWith('/learn') ? '' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}>
                  <GraduationCap className="h-4 w-4" />
                  <span>Learn</span>
                </Button>
              </Link>
              <Link to="/leaderboard" className="hidden md:block" aria-current={pathname === '/leaderboard' ? 'page' : undefined}>
                <Button variant="ghost" size="sm" className={`gap-2 font-semibold ${pathname === '/leaderboard' ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400' : 'text-amber-600 dark:text-amber-400 hover:bg-amber-500/10'}`}>
                  <Trophy className="h-4 w-4" />
                  <span>Reyting</span>
                </Button>
              </Link>
              <div className="hidden md:block">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className={`gap-1.5 ${PRACTICE_PATHS.test(pathname) ? 'bg-secondary text-foreground' : ''}`}>
                      <Target className="h-4 w-4" />
                      <span>IELTS Practice</span>
                      <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem asChild><Link to="/writing" className="gap-2 cursor-pointer"><PenTool className="h-4 w-4" />Writing</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link to="/speaking" className="gap-2 cursor-pointer"><Mic className="h-4 w-4" />Speaking</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link to="/mock-test" className="gap-2 cursor-pointer"><ClipboardList className="h-4 w-4" />Full Mock Test</Link></DropdownMenuItem>
                    <DropdownMenuItem asChild><Link to="/grammar-test" className="gap-2 cursor-pointer"><BrainCircuit className="h-4 w-4" />Daily Grammar</Link></DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild><Link to="/practice" className="gap-2 cursor-pointer text-primary">All practice</Link></DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <a href="/blog" className="hidden xl:block">
                <Button variant="ghost" size="sm" className="gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Blog</span>
                </Button>
              </a>
              <button
                onClick={() => setShowPricing(true)}
                className="glass-card px-3 py-1.5 flex items-center gap-2 hover:bg-primary/10 transition-colors"
                title="Manage subscription"
              >
                <Crown className={`h-4 w-4 ${planType !== 'free' ? 'text-amber-500' : 'text-primary'}`} />
                <span className="text-sm font-medium">{planType === 'free' ? (trialActive ? `Trial · ${trialDaysLeft}d` : 'Free') : planName}</span>
                {planType === 'free' && (
                  <span className="hidden sm:inline text-xs text-primary">{trialActive ? 'Plans' : 'Upgrade'}</span>
                )}
              </button>
              <ThemeToggle />
              <Link to="/profile" aria-label="Profile" title="Profile" aria-current={pathname === '/profile' ? 'page' : undefined}
                className={`group flex items-center gap-2 rounded-full border pl-1 pr-1 sm:pr-3 py-1 transition-all hover:border-primary/60 hover:shadow-md hover:shadow-primary/10 ${pathname === '/profile' ? 'border-primary bg-primary/10' : 'border-border bg-card/60'}`}>
                <span className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-brand-red-soft grid place-items-center text-xs font-bold text-primary-foreground">
                  {(profile?.full_name || user.email || 'U').split(' ').map((s) => s[0]).join('').slice(0, 2).toUpperCase()}
                </span>
                <span className="hidden sm:block max-w-[110px] truncate text-sm font-medium group-hover:text-primary">{(profile?.full_name || 'Profile').split(' ')[0]}</span>
              </Link>
              <Button variant="ghost" size="icon" aria-label="Sign out" title="Sign out" onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <a href="/#course" className="hidden md:block"><Button variant="ghost" size="sm">Kurs</Button></a>
              <a href="/#pricing" className="hidden md:block"><Button variant="ghost" size="sm">Narxlar</Button></a>
              <a href="/#ielts" className="hidden lg:block"><Button variant="ghost" size="sm">IELTS</Button></a>
              <a href="/blog" className="hidden sm:block"><Button variant="ghost" size="sm" className="gap-2"><BookOpen className="h-4 w-4" />Blog</Button></a>
              <ThemeToggle />
              <Link to="/auth">
                <Button variant="glow">Kirish</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {showPricing && <Suspense fallback={null}><PricingModal open={showPricing} onOpenChange={setShowPricing} /></Suspense>}
    </nav>
  );
}

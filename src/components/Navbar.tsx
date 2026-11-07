import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LifeBuoy, Menu, GraduationCap, Target } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useT } from '@/i18n';
import { Suspense, lazy, useState, useEffect } from 'react';
import { LogOut, User, LayoutDashboard, Shield, Crown, BookOpen, Trophy, Flame } from 'lucide-react';
import { useLearningState } from '@/features/learn/api';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import { useSubscription } from '@/hooks/useSubscription';

const PricingModal = lazy(() => import('@/components/PricingModal').then(m => ({ default: m.PricingModal })));

export function Navbar() {
  const { user, profile, signOut } = useAuth();
  const { t, lang } = useT();
  const { planName, planType, trialActive, trialDaysLeft } = useSubscription();
  const { data: learning } = useLearningState();
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
        <div className="flex items-center justify-between h-16 gap-3">
          <Link to={user ? '/dashboard' : '/'} className="flex items-center gap-2.5 shrink-0">
            <img src="/logo-128.webp" alt="Scorify" className="h-8 w-8 sm:h-9 sm:w-9 object-contain" />
            <span className="text-lg sm:text-xl font-extrabold tracking-tight">Scorify<span className="text-primary">.uz</span></span>
          </Link>

          {user ? (
            <>
            <div className="hidden md:flex items-center gap-2 lg:gap-3">
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
                  <span className="hidden sm:inline">{t('nav.dashboard')}</span>
                </Button>
              </Link>
              <Link to="/leaderboard" className="hidden md:block" aria-current={pathname === '/leaderboard' ? 'page' : undefined}>
                <Button variant="ghost" size="sm" className={`gap-2 font-semibold ${pathname === '/leaderboard' ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400' : 'text-amber-600 dark:text-amber-400 hover:bg-amber-500/10'}`}>
                  <Trophy className="h-4 w-4" />
                  <span>{t('nav.leaderboard')}</span>
                </Button>
              </Link>
              {learning?.profile ? <Link to="/learn" className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1.5 text-sm font-bold text-orange-600 hover:bg-orange-500/15" title={t('social.streak')}><Flame className="h-4 w-4 fill-orange-400" />{learning.streak_info?.current ?? learning.streak ?? 0}</Link> : null}
              <Link to="/support" aria-label={t('nav.help')} aria-current={pathname === '/support' ? 'page' : undefined}>
                <Button variant="ghost" size="sm" className="gap-2 px-2.5 lg:px-3"><LifeBuoy className="h-4 w-4 text-primary" /><span className="hidden lg:inline">{t('nav.help')}</span></Button>
              </Link>
              <a href="/blog" className="hidden xl:block">
                <Button variant="ghost" size="sm" className="gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>{t('nav.blog')}</span>
                </Button>
              </a>
              <button
                onClick={() => setShowPricing(true)}
                className="glass-card px-3 py-1.5 flex items-center gap-2 hover:bg-primary/10 transition-colors"
                title={t('nav.manageSub')}
              >
                <Crown className={`h-4 w-4 ${planType !== 'free' ? 'text-amber-500' : 'text-primary'}`} />
                <span className="text-sm font-medium">{planType === 'free' ? (trialActive ? t('nav.trial', { days: trialDaysLeft }) : 'Free') : planName}</span>
                {planType === 'free' && (
                  <span className="hidden sm:inline text-xs text-primary">{trialActive ? t('nav.plans') : t('nav.upgrade')}</span>
                )}
              </button>
              <LanguageSwitcher />
              <ThemeToggle />
              <Link to="/profile" aria-label={t('nav.profile')} title={t('nav.profile')} aria-current={pathname === '/profile' ? 'page' : undefined}
                className={`group flex items-center gap-2 rounded-full border pl-1 pr-1 sm:pr-3 py-1 transition-all hover:border-primary/60 hover:shadow-md hover:shadow-primary/10 ${pathname === '/profile' ? 'border-primary bg-primary/10' : 'border-border bg-card/60'}`}>
                <span className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-brand-red-soft grid place-items-center text-xs font-bold text-primary-foreground">
                  {(profile?.full_name || user.email || 'U').split(' ').map((s) => s[0]).join('').slice(0, 2).toUpperCase()}
                </span>
                <span className="hidden sm:block max-w-[110px] truncate text-sm font-medium group-hover:text-primary">{(profile?.full_name || t('nav.profile')).split(' ')[0]}</span>
              </Link>
              <Button variant="ghost" size="icon" aria-label={t('nav.signOut')} title={t('nav.signOut')} onClick={handleSignOut}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex md:hidden items-center gap-2">
              <LanguageSwitcher />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl" aria-label="Menu"><Menu className="h-5 w-5" /></Button>
                </SheetTrigger>
                <SheetContent className="w-[88vw] max-w-sm overflow-y-auto p-5">
                  <SheetHeader className="pr-8 text-left">
                    <SheetTitle className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary to-orange-500 text-sm font-extrabold text-white">{(profile?.full_name || user.email || 'U').split(' ').map((s) => s[0]).join('').slice(0, 2).toUpperCase()}</span>
                      <span className="min-w-0"><span className="block truncate">{profile?.full_name || t('nav.profile')}</span><span className="block truncate text-xs font-normal text-muted-foreground">{user.email}</span></span>
                    </SheetTitle>
                    <SheetDescription>{planType === 'free' ? (trialActive ? t('nav.trial', { days: trialDaysLeft }) : 'Free') : planName}</SheetDescription>
                  </SheetHeader>
                  <div className="mt-6 grid gap-2">
                    {[
                      ['/dashboard', LayoutDashboard, t('nav.dashboard')],
                      ['/learn', GraduationCap, t('nav.learn')],
                      ['/practice', Target, 'IELTS'],
                      ['/leaderboard', Trophy, t('nav.leaderboard')],
                      ['/profile', User, t('nav.profile')],
                      ['/support', LifeBuoy, t('nav.help')],
                    ].map(([to, Icon, label]) => {
                      const ItemIcon = Icon as typeof User;
                      return <SheetClose asChild key={to as string}><Link to={to as string} className={`flex min-h-12 items-center gap-3 rounded-2xl px-4 text-sm font-semibold transition-colors ${pathname === to ? 'bg-primary text-primary-foreground' : 'bg-secondary/55 hover:bg-secondary'}`}><ItemIcon className="h-5 w-5" />{label as string}</Link></SheetClose>;
                    })}
                    {isAdmin ? <SheetClose asChild><Link to="/admin" className="flex min-h-12 items-center gap-3 rounded-2xl bg-amber-500/10 px-4 text-sm font-semibold text-amber-600"><Shield className="h-5 w-5" />Admin</Link></SheetClose> : null}
                  </div>
                  <div className="mt-5 rounded-2xl border bg-gradient-to-br from-primary/[0.08] to-orange-500/[0.08] p-4">
                    <div className="flex items-center gap-2"><Crown className="h-5 w-5 text-amber-500" /><b>{planType === 'free' ? 'Scorify Free' : planName}</b></div>
                    <SheetClose asChild><Button className="mt-3 w-full" variant="glow" onClick={() => setShowPricing(true)}>{planType === 'free' ? t('nav.upgrade') : t('nav.manageSub')}</Button></SheetClose>
                  </div>
                  <div className="mt-5 flex items-center justify-between rounded-2xl border p-3"><span className="text-sm font-medium">{lang === 'uz' ? 'Ko‘rinish' : 'Appearance'}</span><ThemeToggle /></div>
                  <Button variant="ghost" className="mt-3 w-full justify-start gap-3 text-destructive" onClick={handleSignOut}><LogOut className="h-4 w-4" />{t('nav.signOut')}</Button>
                </SheetContent>
              </Sheet>
            </div>
            </>
          ) : (
            <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
              <a href="/#course" className="hidden md:block"><Button variant="ghost" size="sm">{t('nav.course')}</Button></a>
              <a href="/#pricing" className="hidden md:block"><Button variant="ghost" size="sm">{t('nav.pricing')}</Button></a>
              <a href="/#ielts" className="hidden lg:block"><Button variant="ghost" size="sm">IELTS</Button></a>
              <a href="/blog" className="hidden sm:block"><Button variant="ghost" size="sm" className="gap-2"><BookOpen className="h-4 w-4" />{t('nav.blog')}</Button></a>
              <Link to="/support" className="hidden sm:block" aria-label={t('nav.help')}><Button variant="ghost" size="sm" className="gap-2 px-2.5 lg:px-3"><LifeBuoy className="h-4 w-4 text-primary" /><span className="hidden lg:inline">{t('nav.help')}</span></Button></Link>
              <LanguageSwitcher />
              <span className="hidden sm:inline-flex"><ThemeToggle /></span>
              <Link to="/auth">
                <Button variant="glow" size="sm" className="px-3 sm:px-4">{t('nav.signIn')}</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {showPricing && <Suspense fallback={null}><PricingModal open={showPricing} onOpenChange={setShowPricing} /></Suspense>}
    </nav>
  );
}

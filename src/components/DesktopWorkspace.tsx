import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Brain, BrainCircuit, ChevronRight, GraduationCap, Home, LifeBuoy, LogOut, Settings, Shield, Trophy } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useT } from '@/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export function DesktopWorkspace({ isAdmin, onSignOut }: { isAdmin: boolean; onSignOut: () => void }) {
  const { profile } = useAuth();
  const { t, lang } = useT();
  const { pathname, search } = useLocation();
  const words = pathname === '/learn' && new URLSearchParams(search).get('tab') === 'words';
  const practice = /^\/(practice|writing|exam|speaking|speaking-history|speaking-result|essays|result|reading|listening|mock-test|drafts)(\/|$)/.test(pathname);
  const items = [
    { to: '/dashboard', icon: Home, label: lang === 'uz' ? 'Bosh sahifa' : 'Overview', active: pathname === '/dashboard' },
    { to: '/learn', icon: BookOpen, label: lang === 'uz' ? 'Mening darslarim' : 'My learning', active: pathname.startsWith('/learn') && !words },
    { to: '/practice', icon: GraduationCap, label: 'IELTS practice', active: practice },
    { to: '/learn?tab=words', icon: Brain, label: t('learn.home.tabWords'), active: words },
    { to: '/grammar-test', icon: BrainCircuit, label: t('nav.grammar'), active: pathname === '/grammar-test' },
    { to: '/leaderboard', icon: Trophy, label: t('nav.leaderboard'), active: pathname === '/leaderboard' },
  ];
  const current = items.find(item => item.active)?.label ?? (pathname === '/profile' ? t('nav.profile') : pathname === '/support' ? t('nav.help') : 'Scorify');
  const name = profile?.full_name || t('nav.profile');
  const initials = name.split(' ').map(s => s[0]).join('').slice(0, 2).toUpperCase();
  return <>
    <aside className="workspace-sidebar fixed inset-y-0 left-0 z-50 hidden w-[232px] flex-col border-r border-border/60 bg-card lg:flex xl:w-[256px]" aria-label={lang === 'uz' ? 'Asosiy menyu' : 'Main navigation'}>
      <Link to="/dashboard" className="flex h-20 shrink-0 items-center gap-3 px-7"><img src="/logo-128.webp" alt="" className="h-10 w-10 object-contain" /><span className="text-2xl font-extrabold tracking-tight">Scorify</span></Link>
      <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-7">
        {items.map(({ to, icon: Icon, label, active }) => <Link key={to} to={to} aria-current={active ? 'page' : undefined} className={`relative flex min-h-12 items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors ${active ? 'bg-primary/[0.08] font-bold text-primary before:absolute before:inset-y-2 before:left-0 before:w-1 before:rounded-full before:bg-primary' : 'font-medium text-muted-foreground hover:bg-secondary/60 hover:text-foreground'}`}><Icon className="h-5 w-5 shrink-0" />{label}</Link>)}
        {isAdmin && <Link to="/admin" className="flex min-h-12 items-center gap-3 rounded-xl px-4 text-sm font-medium text-muted-foreground hover:bg-secondary"><Shield className="h-5 w-5" />Admin</Link>}
      </nav>
      <div className="mx-4 border-t border-border/60 py-3">
        <Link to="/support" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-secondary"><LifeBuoy className="h-5 w-5" />{t('nav.help')}</Link>
        <Link to="/profile" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-secondary"><Settings className="h-5 w-5" />{lang === 'uz' ? 'Sozlamalar' : 'Settings'}</Link>
      </div>
      <Link to="/profile" className="mx-4 mb-5 flex items-center gap-3 border-t border-border/60 px-2 pt-5"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-sm font-bold text-primary">{initials}</span><span className="min-w-0 flex-1"><b className="block truncate text-sm">{name}</b><span className="text-xs text-muted-foreground">{lang === 'uz' ? 'Shaxsiy hisob' : 'Personal account'}</span></span><ChevronRight className="h-4 w-4 text-muted-foreground" /></Link>
    </aside>
    <header className="workspace-topbar fixed right-0 top-0 z-40 hidden h-[72px] items-center justify-between gap-4 border-b border-border/60 bg-card/95 px-8 backdrop-blur-lg lg:flex">
      <p className="flex items-center gap-3 text-sm"><span className="text-muted-foreground">{lang === 'uz' ? 'O‘quv maydoni' : 'Learning space'}</span><span className="text-border">/</span><b>{current}</b></p>
      <div className="flex items-center gap-4"><LanguageSwitcher /><ThemeToggle /><Link to="/profile" aria-label={t('nav.profile')} className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 text-xs font-bold text-primary">{initials}</Link><button type="button" onClick={onSignOut} aria-label={t('nav.signOut')} className="rounded-lg p-2 text-muted-foreground hover:bg-secondary"><LogOut className="h-4 w-4" /></button></div>
    </header>
  </>;
}

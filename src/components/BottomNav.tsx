import { useLocation, useNavigate } from 'react-router-dom';
import { BrainCircuit, LayoutDashboard, Mic, PenTool, User as UserIcon } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function BottomNav() {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (!user || location.pathname === '/exam' || location.pathname.startsWith('/mock-test/exam/')) return null;
  const active = (path: string) => location.pathname === path;

  return <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-bottom" aria-label="Main navigation">
    <div className="mx-3 mb-3 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/60 shadow-lg shadow-black/10">
      <div className="flex items-end justify-around h-16 px-2">
        <NavItem icon={LayoutDashboard} label="Home" active={active('/dashboard')} onClick={() => navigate('/dashboard')} />
        <NavItem icon={PenTool} label="Writing" active={active('/writing')} onClick={() => navigate('/writing')} />
        <button type="button" onClick={() => navigate('/grammar-test')} aria-label="Today's Grammar Test" aria-current={active('/grammar-test') ? 'page' : undefined}
          className="relative -mt-6 flex-1 flex flex-col items-center justify-center text-primary">
          <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-brand-red-soft flex items-center justify-center shadow-lg shadow-primary/30 ring-4 ring-background">
            <BrainCircuit className="h-6 w-6 text-primary-foreground" />
          </span>
          <span className="text-[10px] font-semibold mt-1 whitespace-nowrap">Daily Test</span>
        </button>
        <NavItem icon={Mic} label="Speaking" active={active('/speaking')} onClick={() => navigate('/speaking')} />
        <NavItem icon={UserIcon} label="Profile" active={active('/profile')} onClick={() => navigate('/profile')} />
      </div>
    </div>
  </nav>;
}

function NavItem({ icon: Icon, label, active, onClick }: { icon: typeof LayoutDashboard; label: string; active: boolean; onClick: () => void }) {
  return <button type="button" onClick={onClick} aria-current={active ? 'page' : undefined}
    className={`flex flex-1 flex-col items-center justify-center gap-0.5 py-2 transition-colors ${active ? 'text-primary' : 'text-muted-foreground hover:text-primary'}`}>
    <span className={`flex items-center justify-center w-9 h-9 rounded-xl ${active ? 'bg-primary/10' : ''}`}><Icon className="h-5 w-5" /></span>
    <span className="text-[10px] font-medium leading-none">{label}</span>
  </button>;
}

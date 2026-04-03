import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, PenTool, Trophy, Bot } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Home' },
  { to: '/exam?task=2', icon: PenTool, label: 'Write' },
  { to: '/leaderboard', icon: Trophy, label: 'Rank' },
  { to: '#mentor', icon: Bot, label: 'Mentor' },
];

export function BottomNav({ onMentorClick }: { onMentorClick?: () => void }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return null;

  // Hide on exam workspace
  if (location.pathname === '/exam') return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-xl border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = item.to === '#mentor' ? false : location.pathname === item.to.split('?')[0];
          const Icon = item.icon;

          if (item.to === '#mentor') {
            return (
              <button
                key={item.label}
                onClick={onMentorClick}
                className="flex flex-col items-center justify-center gap-0.5 flex-1 py-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-5 w-5" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          }

          return (
            <Link
              key={item.label}
              to={item.to}
              className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-2 transition-colors ${
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

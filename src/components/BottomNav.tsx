import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, PenTool, Trophy, Bot, Clock, FileText, X } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

const navItems = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Home' },
  { to: '#write', icon: PenTool, label: 'Write' },
  { to: '/leaderboard', icon: Trophy, label: 'Rank' },
  { to: '#mentor', icon: Bot, label: 'Mentor' },
];

export function BottomNav({ onMentorClick }: { onMentorClick?: () => void }) {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showTaskPicker, setShowTaskPicker] = useState(false);

  if (!user) return null;
  if (location.pathname === '/exam') return null;

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-xl border-t border-border safe-area-bottom">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.icon;

            if (item.to === '#write') {
              return (
                <button
                  key={item.label}
                  onClick={() => setShowTaskPicker(true)}
                  className="flex flex-col items-center justify-center gap-0.5 flex-1 py-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-[10px] font-medium">{item.label}</span>
                </button>
              );
            }

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

            const isActive = location.pathname === item.to.split('?')[0];
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

      <Drawer open={showTaskPicker} onOpenChange={setShowTaskPicker}>
        <DrawerContent>
          <DrawerHeader className="text-center">
            <DrawerTitle>Choose Task Type</DrawerTitle>
          </DrawerHeader>
          <div className="px-4 pb-6 space-y-3">
            <button
              onClick={() => { setShowTaskPicker(false); navigate('/exam?task=1'); }}
              className="w-full p-4 rounded-xl border border-border bg-secondary/30 hover:bg-secondary/50 transition-all text-left flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Task 1 — 20 minutes</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Summarise visual information (chart, graph, table, or diagram) in at least 150 words.
                </p>
              </div>
            </button>

            <button
              onClick={() => { setShowTaskPicker(false); navigate('/exam?task=2'); }}
              className="w-full p-4 rounded-xl border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all text-left flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Task 2 — 40 minutes</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Write an essay responding to a point of view, argument, or problem in at least 250 words.
                </p>
              </div>
            </button>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

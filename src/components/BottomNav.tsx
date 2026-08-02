import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, PenTool, Mic, Clock, FileText, Crown, User as UserIcon } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { PricingModal } from '@/components/PricingModal';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

export function BottomNav({ onMentorClick }: { onMentorClick?: () => void }) {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [showTaskPicker, setShowTaskPicker] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  if (!user) return null;
  if (location.pathname === '/exam') return null;
  if (location.pathname.startsWith('/mock-test/exam/')) return null;

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-bottom">
        <div className="mx-3 mb-3 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/60 shadow-lg shadow-black/10">
          <div className="relative flex items-end justify-around h-16 px-2">
            <NavItem icon={LayoutDashboard} label="Home" active={isActive('/dashboard')} onClick={() => navigate('/dashboard')} />
            <NavItem icon={PenTool} label="Writing" active={isActive('/writing')} onClick={() => navigate('/writing')} />

            {/* Center Write CTA */}
            <button
              onClick={() => setShowTaskPicker(true)}
              className="relative -mt-6 flex flex-col items-center justify-center"
              aria-label="Start writing"
            >
              <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-brand-red-soft flex items-center justify-center shadow-lg shadow-primary/30 ring-4 ring-background">
                <FileText className="h-6 w-6 text-primary-foreground" />
              </span>
              <span className="text-[10px] font-semibold text-primary mt-1">Write</span>
            </button>

            <NavItem icon={Mic} label="Speaking" active={isActive('/speaking')} onClick={() => navigate('/speaking')} />
            <NavItem icon={UserIcon} label="Profile" active={isActive('/profile')} onClick={() => navigate('/profile')} />
          </div>
        </div>
      </nav>

      <PricingModal open={showPricing} onOpenChange={setShowPricing} />

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

function NavItem({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: any;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-0.5 flex-1 py-2 transition-colors ${
        active ? 'text-primary' : 'text-muted-foreground hover:text-primary'
      }`}
    >
      <span
        className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all ${
          active ? 'bg-primary/10' : ''
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-[10px] font-medium leading-none">{label}</span>
    </button>
  );
}

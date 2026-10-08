import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BookOpen, FileText, LayoutDashboard, Megaphone, Settings, Shield, Users, Wallet } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { LoadingScreen } from '@/components/LoadingScreen';
import { SEOHead } from '@/components/SEOHead';
import { BlogManager } from '@/components/admin/BlogManager';
import { OverviewTab } from '@/components/admin/OverviewTab';
import { UsersTab } from '@/components/admin/UsersTab';
import { LearningTab } from '@/components/admin/LearningTab';
import { MoneyTab } from '@/components/admin/MoneyTab';
import { AnnouncementsTab } from '@/components/admin/AnnouncementsTab';
import { SettingsTab } from '@/components/admin/SettingsTab';

const TABS = [
  { id: 'overview', label: 'Umumiy', icon: LayoutDashboard },
  { id: 'users', label: 'Foydalanuvchilar', icon: Users },
  { id: 'learning', label: "Ta'lim", icon: BookOpen },
  { id: 'money', label: 'Pul va referal', icon: Wallet },
  { id: 'news', label: "E'lonlar", icon: Megaphone },
  { id: 'blog', label: 'Blog', icon: FileText },
  { id: 'settings', label: 'Sozlamalar', icon: Settings },
] as const;
type TabId = typeof TABS[number]['id'];

/** Admin panel: one clear section per job. Everything is read live from admin-only database functions. */
export default function Admin() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const tab: TabId = TABS.some(t => t.id === params.get('tab')) ? (params.get('tab') as TabId) : 'overview';

  useEffect(() => {
    if (!user) return;
    void supabase.from('user_roles').select('role').eq('user_id', user.id).eq('role', 'admin').maybeSingle()
      .then(({ data }) => setIsAdmin(!!data));
  }, [user]);

  if (authLoading || (user && isAdmin === null)) return <LoadingScreen />;
  if (!user) { navigate('/auth'); return null; }
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center glass-card p-8">
          <Shield className="h-16 w-16 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Kirish taqiqlangan</h1>
          <p className="text-muted-foreground mb-4">Sizda admin huquqi yo'q.</p>
          <Button onClick={() => navigate('/dashboard')}>Bosh sahifaga</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Admin panel" path="/admin" noindex />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center"><Shield className="h-5 w-5 text-primary" /></div>
          <div><h1 className="text-2xl font-bold">Admin panel</h1><p className="text-sm text-muted-foreground">Foydalanuvchilar, o'qish, to'lovlar va e'lonlar</p></div>
        </div>

        <nav className="flex gap-1 overflow-x-auto pb-2 mb-6 border-b border-border" aria-label="Bo'limlar">
          {TABS.map(t => (
            <button key={t.id} type="button" onClick={() => setParams(t.id === 'overview' ? {} : { tab: t.id }, { replace: true })}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-t-lg text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${tab === t.id ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}>
              <t.icon className="h-4 w-4" />{t.label}
            </button>
          ))}
        </nav>

        {tab === 'overview' && <OverviewTab />}
        {tab === 'users' && <UsersTab />}
        {tab === 'learning' && <LearningTab />}
        {tab === 'money' && <MoneyTab />}
        {tab === 'news' && <AnnouncementsTab />}
        {tab === 'blog' && <BlogManager />}
        {tab === 'settings' && <SettingsTab />}
      </main>
    </div>
  );
}

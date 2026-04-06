import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { LoadingScreen } from '@/components/LoadingScreen';
import { SEOHead } from '@/components/SEOHead';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { 
  Users, CreditCard, Plus, Minus, Search, Shield, Loader2,
  BarChart3, Calendar, Crown, Zap, FileText, TrendingUp,
  DollarSign, Eye, ChevronRight, Megaphone, Trash2, ToggleLeft, ToggleRight, Settings, Bot
} from 'lucide-react';
import { toast } from 'sonner';
import { format, subDays, isAfter, startOfDay } from 'date-fns';

interface Profile {
  id: string;
  user_id: string;
  email: string;
  full_name: string | null;
  credits: number;
  age: number | null;
  city: string | null;
  phone: string | null;
  created_at: string;
}

interface Subscription {
  id: string;
  user_id: string;
  plan_type: string;
  credits_limit: number;
  credits_used: number;
  started_at: string;
  expires_at: string | null;
  is_active: boolean;
}

interface Announcement {
  id: string;
  type: string;
  title: string;
  content: string;
  status: string;
  created_at: string;
  view_count?: number;
}

const PLAN_CONFIGS: Record<string, { credits: number; label: string }> = {
  free: { credits: 3, label: 'Free' },
  pro: { credits: 30, label: 'Pro' },
  pro_plus: { credits: 60, label: 'Pro Plus' },
};

export default function Admin() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<Profile[]>([]);
  const [subscriptions, setSubscriptions] = useState<Record<string, Subscription>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [updatingUser, setUpdatingUser] = useState<string | null>(null);
  const [essayCounts, setEssayCounts] = useState<Record<string, number>>({});
  const [viewEssaysUser, setViewEssaysUser] = useState<{ userId: string; name: string } | null>(null);
  const [userEssays, setUserEssays] = useState<any[]>([]);
  const [loadingEssays, setLoadingEssays] = useState(false);

  // Announcements state
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [newAnnouncement, setNewAnnouncement] = useState({ type: 'alert', title: '', content: '' });
  const [creatingAnnouncement, setCreatingAnnouncement] = useState(false);

  // Settings state
  const [aiChatEnabled, setAiChatEnabled] = useState(false);
  const [togglingAiChat, setTogglingAiChat] = useState(false);

  useEffect(() => { checkAdminStatus(); }, [user]);

  const checkAdminStatus = async () => {
    if (!user) { setLoading(false); return; }
    try {
      const { data, error } = await supabase
        .from('user_roles').select('role').eq('user_id', user.id).eq('role', 'admin').single();
      if (error || !data) { setIsAdmin(false); setLoading(false); return; }
      setIsAdmin(true);
      fetchData();
    } catch { setIsAdmin(false); setLoading(false); }
  };

  const fetchData = async () => {
    try {
      const [usersRes, subsRes, essaysRes, settingsRes] = await Promise.all([
        supabase.from('profiles').select('*').order('created_at', { ascending: false }),
        supabase.from('subscriptions').select('*'),
        supabase.from('essays').select('user_id'),
        supabase.from('app_settings').select('key, value').eq('key', 'ai_chat_enabled').single(),
      ]);

      setUsers(usersRes.data || []);

      const subsMap: Record<string, Subscription> = {};
      (subsRes.data || []).forEach((s: any) => { subsMap[s.user_id] = s as Subscription; });
      setSubscriptions(subsMap);

      const counts: Record<string, number> = {};
      (essaysRes.data || []).forEach((e: any) => { counts[e.user_id] = (counts[e.user_id] || 0) + 1; });
      setEssayCounts(counts);

      if (settingsRes.data) {
        setAiChatEnabled(settingsRes.data.value === 'true');
      }

      fetchAnnouncements();
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const fetchAnnouncements = async () => {
    const { data: anns } = await supabase
      .from('announcements')
      .select('*')
      .order('created_at', { ascending: false });

    if (!anns) { setAnnouncements([]); return; }

    // Get view counts
    const { data: views } = await supabase
      .from('announcement_views')
      .select('announcement_id');

    const viewCounts: Record<string, number> = {};
    (views || []).forEach((v: any) => {
      viewCounts[v.announcement_id] = (viewCounts[v.announcement_id] || 0) + 1;
    });

    setAnnouncements((anns as any[]).map(a => ({ ...a, view_count: viewCounts[a.id] || 0 })));
  };

  const createAnnouncement = async () => {
    if (!newAnnouncement.title.trim() || !newAnnouncement.content.trim()) {
      toast.error('Please fill in title and content');
      return;
    }
    setCreatingAnnouncement(true);
    try {
      const { error } = await supabase.from('announcements').insert({
        type: newAnnouncement.type,
        title: newAnnouncement.title.trim(),
        content: newAnnouncement.content.trim(),
        status: 'active',
      });
      if (error) throw error;
      toast.success('Announcement created');
      setNewAnnouncement({ type: 'alert', title: '', content: '' });
      fetchAnnouncements();
    } catch {
      toast.error('Failed to create announcement');
    } finally {
      setCreatingAnnouncement(false);
    }
  };

  const toggleAnnouncementStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
    await supabase.from('announcements').update({ status: newStatus }).eq('id', id);
    setAnnouncements(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a));
    toast.success(`Announcement ${newStatus}`);
  };

  const deleteAnnouncement = async (id: string) => {
    await supabase.from('announcements').delete().eq('id', id);
    setAnnouncements(prev => prev.filter(a => a.id !== id));
    toast.success('Announcement deleted');
  };

  const fetchUserEssays = async (userId: string, name: string) => {
    setViewEssaysUser({ userId, name });
    setLoadingEssays(true);
    try {
      const { data } = await supabase
        .from('essays')
        .select('id, task_type, topic, score, word_count, created_at')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(20);
      setUserEssays(data || []);
    } catch { setUserEssays([]); }
    finally { setLoadingEssays(false); }
  };

  const updateCredits = async (userId: string, currentCredits: number, delta: number) => {
    const newCredits = Math.max(0, currentCredits + delta);
    setUpdatingUser(userId);
    try {
      const { error: profileError } = await supabase.from('profiles').update({ credits: newCredits }).eq('user_id', userId);
      if (profileError) throw profileError;

      const sub = subscriptions[userId];
      if (sub) {
        const newLimit = Math.max(0, sub.credits_limit + delta);
        await supabase.from('subscriptions').update({ credits_limit: newLimit }).eq('user_id', userId);
        setSubscriptions({ ...subscriptions, [userId]: { ...sub, credits_limit: newLimit } });
      }

      setUsers(users.map(u => u.user_id === userId ? { ...u, credits: newCredits } : u));
      toast.success(`Credits updated to ${newCredits}`);
    } catch {
      toast.error('Failed to update credits');
    } finally { setUpdatingUser(null); }
  };

  const updatePlan = async (userId: string, newPlan: string) => {
    setUpdatingUser(userId);
    const config = PLAN_CONFIGS[newPlan];
    const expiresAt = newPlan === 'free' ? null : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

    try {
      const sub = subscriptions[userId];
      if (sub) {
        await supabase.from('subscriptions')
          .update({ plan_type: newPlan, credits_limit: config.credits, credits_used: 0, expires_at: expiresAt, is_active: true, started_at: new Date().toISOString() })
          .eq('user_id', userId);
      } else {
        await supabase.from('subscriptions')
          .insert({ user_id: userId, plan_type: newPlan, credits_limit: config.credits, credits_used: 0, expires_at: expiresAt, is_active: true });
      }

      await supabase.from('profiles').update({ credits: config.credits }).eq('user_id', userId);
      setUsers(users.map(u => u.user_id === userId ? { ...u, credits: config.credits } : u));
      
      setSubscriptions({
        ...subscriptions,
        [userId]: { ...(sub || { id: '', user_id: userId, started_at: new Date().toISOString() }), plan_type: newPlan, credits_limit: config.credits, credits_used: 0, expires_at: expiresAt, is_active: true } as Subscription,
      });

      toast.success(`Plan updated to ${config.label}`);
    } catch {
      toast.error('Failed to update plan');
    } finally { setUpdatingUser(null); }
  };

  const filteredUsers = users.filter(u =>
    u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.phone?.includes(searchQuery)
  );

  const totalEssays = Object.values(essayCounts).reduce((a, b) => a + b, 0);
  const proUsers = Object.values(subscriptions).filter(s => s.plan_type !== 'free').length;

  const now = new Date();
  const todayStart = startOfDay(now);
  const weekAgo = subDays(now, 7);
  const monthAgo = subDays(now, 30);

  const newUsersToday = users.filter(u => isAfter(new Date(u.created_at), todayStart)).length;
  const newUsersWeek = users.filter(u => isAfter(new Date(u.created_at), weekAgo)).length;
  const newUsersMonth = users.filter(u => isAfter(new Date(u.created_at), monthAgo)).length;

  const revenueEstimate = Object.values(subscriptions).reduce((acc, s) => {
    if (s.plan_type === 'pro') return acc + 7;
    if (s.plan_type === 'pro_plus') return acc + 13;
    return acc;
  }, 0);

  if (authLoading || loading) return <LoadingScreen />;
  if (!user) { navigate('/auth'); return null; }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center glass-card p-8">
          <Shield className="h-16 w-16 text-destructive mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
          <p className="text-muted-foreground mb-4">You don't have admin privileges.</p>
          <Button onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Admin Panel" path="/admin" />
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <p className="text-muted-foreground">Users, plans, announcements & analytics</p>
          </div>
        </motion.div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { icon: Users, value: users.length, label: 'Total Users', color: 'text-primary' },
            { icon: Crown, value: proUsers, label: 'Paid Users', color: 'text-primary' },
            { icon: FileText, value: totalEssays, label: 'Total Essays', color: 'text-primary' },
            { icon: DollarSign, value: `$${revenueEstimate}`, label: 'Monthly Revenue', color: 'text-primary' },
          ].map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }} className="glass-card p-4 sm:p-5">
              <div className="flex items-center gap-3 sm:gap-4">
                <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${stat.color}`} />
                <div>
                  <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* User Growth */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="glass-card p-5">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" /> User Growth
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Today</span>
                <span className="font-medium text-primary">+{newUsersToday}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Last 7 Days</span>
                <span className="font-medium text-primary">+{newUsersWeek}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Last 30 Days</span>
                <span className="font-medium text-primary">+{newUsersMonth}</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="glass-card p-5">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" /> Revenue Overview
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Monthly Revenue</span>
                <span className="font-medium text-primary">${revenueEstimate.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Essays</span>
                <span className="font-medium">{totalEssays}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Paid Users</span>
                <span className="font-medium text-primary">{proUsers}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="w-full sm:w-auto">
            <TabsTrigger value="users" className="gap-1"><Users className="h-3.5 w-3.5" /> Users</TabsTrigger>
            <TabsTrigger value="announcements" className="gap-1"><Megaphone className="h-3.5 w-3.5" /> Announcements</TabsTrigger>
          </TabsList>

          {/* Users Tab */}
          <TabsContent value="users">
            {/* Search */}
            <div className="glass-card p-6 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search users by email, name, city, or phone..." value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 input-glass" />
              </div>
            </div>

            {/* Users Table */}
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">User</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden md:table-cell">Details</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground">Plan</th>
                      <th className="text-center p-4 text-sm font-medium text-muted-foreground">Credits</th>
                      <th className="text-center p-4 text-sm font-medium text-muted-foreground hidden sm:table-cell">Essays</th>
                      <th className="text-left p-4 text-sm font-medium text-muted-foreground hidden lg:table-cell">Subscription</th>
                      <th className="text-right p-4 text-sm font-medium text-muted-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((profile) => {
                      const sub = subscriptions[profile.user_id];
                      const pt = sub?.plan_type || 'free';
                      const expiresAt = sub?.expires_at;
                      const daysLeft = expiresAt ? Math.max(0, Math.ceil((new Date(expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24))) : null;
                      const isExpired = expiresAt ? new Date(expiresAt) < new Date() : false;
                      const subProgress = sub && sub.credits_limit > 0 ? ((sub.credits_limit - sub.credits_used) / sub.credits_limit) * 100 : 0;

                      return (
                        <tr key={profile.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                          <td className="p-4">
                            <div>
                              <span className="font-medium block">{profile.full_name || 'No name'}</span>
                              <span className="text-xs text-muted-foreground">{profile.email}</span>
                            </div>
                          </td>
                          <td className="p-4 hidden md:table-cell">
                            <div className="text-xs text-muted-foreground space-y-0.5">
                              {profile.age && <span className="block">Age: {profile.age}</span>}
                              {profile.city && <span className="block">City: {profile.city}</span>}
                              {profile.phone && <span className="block">Phone: {profile.phone}</span>}
                              {!profile.age && !profile.city && !profile.phone && <span>—</span>}
                            </div>
                          </td>
                          <td className="p-4">
                            <Select value={pt} onValueChange={(val) => updatePlan(profile.user_id, val)}
                              disabled={updatingUser === profile.user_id}>
                              <SelectTrigger className="w-28 h-8 text-xs">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="free">Free</SelectItem>
                                <SelectItem value="pro">Pro</SelectItem>
                                <SelectItem value="pro_plus">Pro Plus</SelectItem>
                              </SelectContent>
                            </Select>
                          </td>
                          <td className="p-4 text-center">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                              {profile.credits}
                            </span>
                          </td>
                          <td className="p-4 text-center hidden sm:table-cell">
                            <span className="text-sm">{essayCounts[profile.user_id] || 0}</span>
                          </td>
                          <td className="p-4 hidden lg:table-cell">
                            {sub ? (
                              <div className="space-y-1 min-w-[140px]">
                                <Progress value={subProgress} className="h-1.5" />
                                <div className="flex justify-between text-xs text-muted-foreground">
                                  <span>{sub.credits_used}/{sub.credits_limit} used</span>
                                  {daysLeft !== null && (
                                    <span className={isExpired ? 'text-destructive' : ''}>
                                      {isExpired ? 'Expired' : `${daysLeft}d left`}
                                    </span>
                                  )}
                                </div>
                              </div>
                            ) : (
                              <span className="text-xs text-muted-foreground">—</span>
                            )}
                          </td>
                          <td className="p-4">
                            <div className="flex items-center justify-end gap-1 flex-wrap">
                              <Button variant="ghost" size="icon" className="h-8 w-8"
                                onClick={() => fetchUserEssays(profile.user_id, profile.full_name || profile.email)}
                                title="View essays">
                                <Eye className="h-3.5 w-3.5" />
                              </Button>
                              <Button variant="outline" size="icon" className="h-8 w-8"
                                onClick={() => updateCredits(profile.user_id, profile.credits, -1)}
                                disabled={updatingUser === profile.user_id || profile.credits === 0}>
                                {updatingUser === profile.user_id ? <Loader2 className="h-3 w-3 animate-spin" /> : <Minus className="h-3 w-3" />}
                              </Button>
                              <Button variant="outline" size="icon" className="h-8 w-8"
                                onClick={() => updateCredits(profile.user_id, profile.credits, 1)}
                                disabled={updatingUser === profile.user_id}>
                                {updatingUser === profile.user_id ? <Loader2 className="h-3 w-3 animate-spin" /> : <Plus className="h-3 w-3" />}
                              </Button>
                              <Button variant="default" size="sm" className="h-8 text-xs"
                                onClick={() => updateCredits(profile.user_id, profile.credits, 5)}
                                disabled={updatingUser === profile.user_id}>+5</Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {filteredUsers.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">No users found</div>
              )}
            </div>
          </TabsContent>

          {/* Announcements Tab */}
          <TabsContent value="announcements">
            <div className="glass-card p-6 mb-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Plus className="h-4 w-4 text-primary" /> Create Announcement
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Type</label>
                  <Select value={newAnnouncement.type} onValueChange={(v) => setNewAnnouncement(prev => ({ ...prev, type: v }))}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="alert">Alert (Top Banner)</SelectItem>
                      <SelectItem value="modal">Modal (Popup)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Title</label>
                  <Input value={newAnnouncement.title} onChange={e => setNewAnnouncement(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Announcement title..." />
                </div>
              </div>
              <div className="mb-4">
                <label className="text-sm text-muted-foreground mb-1 block">Content</label>
                <Textarea value={newAnnouncement.content} onChange={e => setNewAnnouncement(prev => ({ ...prev, content: e.target.value }))}
                  placeholder="Announcement content..." rows={3} />
              </div>
              <Button onClick={createAnnouncement} disabled={creatingAnnouncement} className="gap-2">
                {creatingAnnouncement ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
                Create
              </Button>
            </div>

            <div className="space-y-3">
              {announcements.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground glass-card">
                  <Megaphone className="h-12 w-12 mx-auto mb-3 opacity-30" />
                  <p>No announcements yet</p>
                </div>
              ) : announcements.map(ann => (
                <div key={ann.id} className="glass-card p-4 flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${ann.type === 'alert' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent-foreground'}`}>
                        {ann.type === 'alert' ? 'Alert' : 'Modal'}
                      </span>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${ann.status === 'active' ? 'bg-green-500/10 text-green-600' : 'bg-secondary text-muted-foreground'}`}>
                        {ann.status}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Seen by {ann.view_count || 0} users
                      </span>
                    </div>
                    <p className="font-medium text-sm">{ann.title}</p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{ann.content}</p>
                    <p className="text-xs text-muted-foreground mt-1">{format(new Date(ann.created_at), 'MMM d, yyyy HH:mm')}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8"
                      onClick={() => toggleAnnouncementStatus(ann.id, ann.status)}
                      title={ann.status === 'active' ? 'Deactivate' : 'Activate'}>
                      {ann.status === 'active' ? <ToggleRight className="h-4 w-4 text-green-600" /> : <ToggleLeft className="h-4 w-4 text-muted-foreground" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive"
                      onClick={() => deleteAnnouncement(ann.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* View User Essays Dialog */}
      <Dialog open={!!viewEssaysUser} onOpenChange={() => setViewEssaysUser(null)}>
        <DialogContent className="glass-card border-border max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Essays by {viewEssaysUser?.name}</DialogTitle>
          </DialogHeader>
          {loadingEssays ? (
            <div className="py-8 text-center text-muted-foreground">Loading...</div>
          ) : userEssays.length === 0 ? (
            <div className="py-8 text-center text-muted-foreground">No essays found</div>
          ) : (
            <div className="space-y-2">
              {userEssays.map((essay: any) => (
                <Link key={essay.id} to={`/result/${essay.id}`}
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all group">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{essay.task_type}</span>
                      <span className="text-xs text-muted-foreground">{format(new Date(essay.created_at), 'MMM d, yyyy')}</span>
                      <span className="text-xs text-muted-foreground">{essay.word_count}w</span>
                    </div>
                    <p className="text-sm truncate text-muted-foreground">{essay.topic?.substring(0, 60)}...</p>
                  </div>
                  {essay.score !== null && (
                    <span className={`text-lg font-bold ml-3 ${essay.score >= 7 ? 'text-primary' : essay.score >= 5 ? 'text-yellow-500' : 'text-destructive'}`}>
                      {essay.score}
                    </span>
                  )}
                  <ChevronRight className="h-4 w-4 text-muted-foreground ml-2 group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

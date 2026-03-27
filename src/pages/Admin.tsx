import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { SubscriptionBadge } from '@/components/SubscriptionBadge';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { 
  Users, CreditCard, Plus, Minus, Search, Shield, Loader2,
  BarChart3, Calendar, Crown, Zap, Star, FileText, TrendingUp
} from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

interface Profile {
  id: string;
  user_id: string;
  email: string;
  full_name: string | null;
  credits: number;
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

const PLAN_CONFIGS: Record<string, { credits: number; label: string }> = {
  free: { credits: 3, label: 'Free' },
  pro: { credits: 25, label: 'Pro' },
  pro_plus: { credits: 100, label: 'Pro Plus' },
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
      const [usersRes, subsRes, essaysRes] = await Promise.all([
        supabase.from('profiles').select('*').order('created_at', { ascending: false }),
        supabase.from('subscriptions').select('*'),
        supabase.from('essays').select('user_id'),
      ]);

      setUsers(usersRes.data || []);

      const subsMap: Record<string, Subscription> = {};
      (subsRes.data || []).forEach((s: any) => { subsMap[s.user_id] = s as Subscription; });
      setSubscriptions(subsMap);

      const counts: Record<string, number> = {};
      (essaysRes.data || []).forEach((e: any) => { counts[e.user_id] = (counts[e.user_id] || 0) + 1; });
      setEssayCounts(counts);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const updateCredits = async (userId: string, currentCredits: number, delta: number) => {
    const newCredits = Math.max(0, currentCredits + delta);
    setUpdatingUser(userId);
    try {
      // Update profiles.credits
      const { error: profileError } = await supabase.from('profiles').update({ credits: newCredits }).eq('user_id', userId);
      if (profileError) throw profileError;

      // Also update subscription credits_limit to reflect extra credits
      const sub = subscriptions[userId];
      if (sub) {
        const newLimit = Math.max(0, sub.credits_limit + delta);
        const { error: subError } = await supabase.from('subscriptions')
          .update({ credits_limit: newLimit })
          .eq('user_id', userId);
        if (subError) throw subError;
        setSubscriptions({
          ...subscriptions,
          [userId]: { ...sub, credits_limit: newLimit },
        });
      }

      setUsers(users.map(u => u.user_id === userId ? { ...u, credits: newCredits } : u));
      toast.success(`Credits updated to ${newCredits}`);
    } catch (err) {
      console.error('Update credits error:', err);
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
        const { error } = await supabase.from('subscriptions')
          .update({ plan_type: newPlan, credits_limit: config.credits, credits_used: 0, expires_at: expiresAt, is_active: true, started_at: new Date().toISOString() })
          .eq('user_id', userId);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('subscriptions')
          .insert({ user_id: userId, plan_type: newPlan, credits_limit: config.credits, credits_used: 0, expires_at: expiresAt, is_active: true });
        if (error) throw error;
      }

      await supabase.from('profiles').update({ credits: config.credits }).eq('user_id', userId);
      setUsers(users.map(u => u.user_id === userId ? { ...u, credits: config.credits } : u));
      
      setSubscriptions({
        ...subscriptions,
        [userId]: { ...(sub || { id: '', user_id: userId, started_at: new Date().toISOString() }), plan_type: newPlan, credits_limit: config.credits, credits_used: 0, expires_at: expiresAt, is_active: true } as Subscription,
      });

      toast.success(`Plan updated to ${config.label}`);
    } catch (error) {
      console.error(error);
      toast.error('Failed to update plan');
    } finally { setUpdatingUser(null); }
  };

  const filteredUsers = users.filter(u =>
    u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.full_name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalCredits = users.reduce((acc, u) => acc + u.credits, 0);
  const totalEssays = Object.values(essayCounts).reduce((a, b) => a + b, 0);
  const proUsers = Object.values(subscriptions).filter(s => s.plan_type !== 'free').length;

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
      <Navbar />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Admin Panel</h1>
            <p className="text-muted-foreground">Manage users, plans & credits</p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Users, value: users.length, label: 'Total Users', color: 'text-primary' },
            { icon: Crown, value: proUsers, label: 'Paid Users', color: 'text-yellow-400' },
            { icon: FileText, value: totalEssays, label: 'Total Essays', color: 'text-primary' },
            { icon: CreditCard, value: totalCredits, label: 'Total Credits', color: 'text-primary' },
          ].map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }} className="glass-card p-6">
              <div className="flex items-center gap-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="glass-card p-6 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search users by email or name..." value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 input-glass" />
          </div>
        </motion.div>

        {/* Users Table */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">User</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Plan</th>
                  <th className="text-center p-4 text-sm font-medium text-muted-foreground">Credits</th>
                  <th className="text-center p-4 text-sm font-medium text-muted-foreground">Essays</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Subscription</th>
                  <th className="text-right p-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((profile) => {
                  const sub = subscriptions[profile.user_id];
                  const planType = sub?.plan_type || 'free';
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
                      <td className="p-4">
                        <Select value={planType} onValueChange={(val) => updatePlan(profile.user_id, val)}
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
                      <td className="p-4 text-center">
                        <span className="text-sm">{essayCounts[profile.user_id] || 0}</span>
                      </td>
                      <td className="p-4">
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
                        <div className="flex items-center justify-end gap-2">
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
        </motion.div>
      </main>
    </div>
  );
}

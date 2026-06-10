import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PricingModal } from '@/components/PricingModal';
import { SEOHead } from '@/components/SEOHead';
import {
  User as UserIcon, Mail, Calendar, Coins, FileText, Mic, Award, Target,
  Trophy, History, LogOut, Save, Edit2, MapPin, Phone, Sparkles
} from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export default function Profile() {
  const { user, profile, signOut, refreshProfile } = useAuth();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const [stats, setStats] = useState({
    essays: 0, speaking: 0, avgEssay: 'N/A' as string,
    bestEssay: 'N/A' as string | number, avgSpeaking: 'N/A' as string,
    bestSpeaking: 'N/A' as string | number,
  });

  useEffect(() => {
    if (!profile) return;
    const parts = (profile.full_name || '').trim().split(' ');
    setFirstName(parts[0] || '');
    setLastName(parts.slice(1).join(' ') || '');
    setCity(profile.city || '');
    setPhone(profile.phone || '');
  }, [profile]);

  useEffect(() => {
    (async () => {
      if (!user) return;
      const [{ data: essays }, { data: speaking }] = await Promise.all([
        supabase.from('essays').select('score').eq('user_id', user.id),
        supabase.from('speaking_attempts').select('score').eq('user_id', user.id),
      ]);
      const eScored = (essays || []).filter((e: any) => e.score !== null);
      const sScored = (speaking || []).filter((s: any) => s.score !== null);
      setStats({
        essays: essays?.length || 0,
        speaking: speaking?.length || 0,
        avgEssay: eScored.length ? (eScored.reduce((a: number, e: any) => a + e.score, 0) / eScored.length).toFixed(1) : 'N/A',
        bestEssay: eScored.length ? Math.max(...eScored.map((e: any) => e.score)) : 'N/A',
        avgSpeaking: sScored.length ? (sScored.reduce((a: number, s: any) => a + s.score, 0) / sScored.length).toFixed(1) : 'N/A',
        bestSpeaking: sScored.length ? Math.max(...sScored.map((s: any) => s.score)) : 'N/A',
      });
    })();
  }, [user]);

  const handleSave = async () => {
    if (!user) return;
    if (!firstName.trim()) { toast.error('First name is required'); return; }
    setSaving(true);
    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();
    const { error } = await supabase
      .from('profiles')
      .update({ full_name: fullName, city: city.trim() || null, phone: phone.trim() || null })
      .eq('user_id', user.id);
    setSaving(false);
    if (error) { toast.error('Failed to save'); return; }
    toast.success('Profile updated');
    setEditing(false);
    refreshProfile();
  };

  const handleSignOut = async () => { await signOut(); navigate('/auth'); };

  const initials = (profile?.full_name || profile?.email || 'U')
    .split(' ').map(s => s[0]).join('').slice(0, 2).toUpperCase();

  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <SEOHead title="Profile" description="Manage your account, view stats and credits." path="/profile" />
      <Navbar />

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 sm:p-8 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-primary-foreground">
              {initials}
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold truncate">{profile?.full_name || 'Student'}</h1>
              <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                <Mail className="h-4 w-4 flex-shrink-0" /> <span className="truncate">{profile?.email}</span>
              </p>
              {profile?.created_at && (
                <p className="text-xs text-muted-foreground flex items-center gap-2 mt-1">
                  <Calendar className="h-3.5 w-3.5" /> Member since {format(new Date(profile.created_at), 'MMMM d, yyyy')}
                </p>
              )}
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="glass-card px-4 py-2 flex items-center gap-2">
                <Coins className="h-5 w-5 text-primary" />
                <span className="text-xl font-bold">{profile?.credits ?? 0}</span>
                <span className="text-xs text-muted-foreground">credits</span>
              </div>
              <Button variant="glow" size="sm" className="gap-1" onClick={() => setShowPricing(true)}>
                <Coins className="h-4 w-4" /> Buy Credits
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Edit info */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
          className="glass-card p-6 mb-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <UserIcon className="h-5 w-5 text-primary" /> Personal Information
            </h2>
            {!editing ? (
              <Button variant="outline" size="sm" className="gap-2" onClick={() => setEditing(true)}>
                <Edit2 className="h-4 w-4" /> Edit
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => setEditing(false)} disabled={saving}>Cancel</Button>
                <Button variant="glow" size="sm" className="gap-2" onClick={handleSave} disabled={saving}>
                  <Save className="h-4 w-4" /> {saving ? 'Saving…' : 'Save'}
                </Button>
              </div>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>First name</Label>
              <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled={!editing} placeholder="Diyorbek" />
            </div>
            <div className="space-y-2">
              <Label>Last name</Label>
              <Input value={lastName} onChange={(e) => setLastName(e.target.value)} disabled={!editing} placeholder="Anorboyev" />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" /> Email</Label>
              <Input value={profile?.email || ''} disabled />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> Phone</Label>
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} disabled={!editing} placeholder="+998 ..." />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> City</Label>
              <Input value={city} onChange={(e) => setCity(e.target.value)} disabled={!editing} placeholder="Tashkent" />
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="glass-card p-6 mb-6">
          <h2 className="text-lg font-semibold mb-5 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" /> Your Statistics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { icon: FileText, label: 'Total Essays', value: stats.essays },
              { icon: Award, label: 'Avg Writing Band', value: stats.avgEssay },
              { icon: Target, label: 'Best Writing Band', value: stats.bestEssay },
              { icon: Mic, label: 'Speaking Attempts', value: stats.speaking },
              { icon: Award, label: 'Avg Speaking Band', value: stats.avgSpeaking },
              { icon: Target, label: 'Best Speaking Band', value: stats.bestSpeaking },
            ].map((s) => (
              <div key={s.label} className="glass-card-hover p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{s.value}</p>
                    <p className="text-[11px] text-muted-foreground">{s.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="grid sm:grid-cols-3 gap-3 mb-6">
          <Link to="/essays" className="glass-card-hover p-4 flex items-center gap-3">
            <FileText className="h-5 w-5 text-primary" />
            <span className="font-medium text-sm">Essay History</span>
          </Link>
          <Link to="/speaking-history" className="glass-card-hover p-4 flex items-center gap-3">
            <History className="h-5 w-5 text-primary" />
            <span className="font-medium text-sm">Speaking History</span>
          </Link>
          <Link to="/leaderboard" className="glass-card-hover p-4 flex items-center gap-3">
            <Trophy className="h-5 w-5 text-primary" />
            <span className="font-medium text-sm">Leaderboard</span>
          </Link>
        </motion.div>

        <div className="flex justify-end">
          <Button variant="outline" className="gap-2 text-destructive border-destructive/30 hover:bg-destructive/10" onClick={handleSignOut}>
            <LogOut className="h-4 w-4" /> Sign Out
          </Button>
        </div>
      </main>

      <PricingModal open={showPricing} onOpenChange={setShowPricing} />
    </div>
  );
}
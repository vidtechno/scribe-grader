import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useT } from '@/i18n';
import { useAuth } from '@/hooks/useAuth';
import { X, Megaphone } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface Announcement {
  id: string;
  type: 'alert' | 'modal';
  title: string;
  content: string;
  title_en?: string | null;
  content_en?: string | null;
  audience?: string;
  created_at: string;
}

/** `existing`: only people who signed up before the announcement was written. Everyone else sees nothing. */
export const isForUser = (a: Pick<Announcement, 'audience' | 'created_at'>, userCreatedAt?: string) =>
  a.audience === 'all' || !userCreatedAt || new Date(userCreatedAt).getTime() <= new Date(a.created_at).getTime();

export function Announcements() {
  const { user } = useAuth();
  const { t, lang } = useT();
  const [alerts, setAlerts] = useState<Announcement[]>([]);
  const [modal, setModal] = useState<Announcement | null>(null);
  const [dismissedAlerts, setDismissedAlerts] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!user) return;
    fetchAnnouncements();
  }, [user]);

  const fetchAnnouncements = async () => {
    if (!user) return;

    // Fetch active announcements
    const { data: announcements } = await supabase
      .from('announcements')
      .select('*')
      .eq('status', 'active');

    if (!announcements || announcements.length === 0) return;

    // Fetch already viewed announcements for this user
    const { data: views } = await supabase
      .from('announcement_views')
      .select('announcement_id')
      .eq('user_id', user.id);

    const viewedIds = new Set((views || []).map((v: any) => v.announcement_id));

    const unseen = (announcements as Announcement[]).filter(a => !viewedIds.has(a.id) && isForUser(a, user.created_at));

    const alertItems = unseen.filter(a => a.type === 'alert');
    const modalItem = unseen.find(a => a.type === 'modal');

    setAlerts(alertItems);
    if (modalItem) {
      setModal(modalItem);
      // Counted as seen the moment it is shown, so closing the tab without pressing a button still means "once".
      await supabase.from('announcement_views').insert({ announcement_id: modalItem.id, user_id: user.id });
    }
  };

  const dismissAnnouncement = async (id: string) => {
    if (!user) return;
    await supabase.from('announcement_views').insert({
      announcement_id: id,
      user_id: user.id,
    });
    setDismissedAlerts(prev => new Set([...prev, id]));
    setAlerts(prev => prev.filter(a => a.id !== id));
  };

  const dismissModal = () => setModal(null);

  const visibleAlerts = alerts.filter(a => !dismissedAlerts.has(a.id));
  const pick = (a: Announcement | null) => (a ? { title: lang === 'en' && a.title_en ? a.title_en : a.title, content: lang === 'en' && a.content_en ? a.content_en : a.content } : { title: '', content: '' });

  return (
    <>
      {/* Alert Banners */}
      {visibleAlerts.map(alert => (
        <div key={alert.id} className="bg-primary text-primary-foreground px-4 py-2.5 flex items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <Megaphone className="h-4 w-4 flex-shrink-0" />
            <span className="font-medium truncate">{pick(alert).title}</span>
            {pick(alert).content && <span className="hidden sm:inline text-primary-foreground/80">— {pick(alert).content}</span>}
          </div>
          <button onClick={() => dismissAnnouncement(alert.id)} aria-label={t('ann.dismiss')} className="hover:opacity-80 flex-shrink-0">
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}

      {/* Modal Announcement: shown once per person */}
      <Dialog open={!!modal} onOpenChange={() => dismissModal()}>
        <DialogContent className="glass-card border-border max-w-md max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <span className="mb-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary"><Megaphone className="h-3.5 w-3.5" />{t('ann.badge')}</span>
            <DialogTitle className="text-xl leading-snug">{pick(modal).title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-2.5 text-sm leading-relaxed text-foreground/85">
            {pick(modal).content.split('\n').filter((l) => l.trim()).map((line, i) => <p key={i}>{line}</p>)}
          </div>
          <Button onClick={dismissModal} className="w-full mt-2">{t('ann.gotIt')}</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

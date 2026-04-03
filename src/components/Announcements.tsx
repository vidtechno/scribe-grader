import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { X, Megaphone } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface Announcement {
  id: string;
  type: 'alert' | 'modal';
  title: string;
  content: string;
}

export function Announcements() {
  const { user } = useAuth();
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

    const unseen = (announcements as any[]).filter(a => !viewedIds.has(a.id));

    const alertItems = unseen.filter(a => a.type === 'alert');
    const modalItem = unseen.find(a => a.type === 'modal');

    setAlerts(alertItems);
    if (modalItem) setModal(modalItem);
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

  const dismissModal = async () => {
    if (!modal || !user) return;
    await supabase.from('announcement_views').insert({
      announcement_id: modal.id,
      user_id: user.id,
    });
    setModal(null);
  };

  const visibleAlerts = alerts.filter(a => !dismissedAlerts.has(a.id));

  return (
    <>
      {/* Alert Banners */}
      {visibleAlerts.map(alert => (
        <div key={alert.id} className="bg-primary text-primary-foreground px-4 py-2.5 flex items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <Megaphone className="h-4 w-4 flex-shrink-0" />
            <span className="font-medium truncate">{alert.title}</span>
            {alert.content && <span className="hidden sm:inline text-primary-foreground/80">— {alert.content}</span>}
          </div>
          <button onClick={() => dismissAnnouncement(alert.id)} className="hover:opacity-80 flex-shrink-0">
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}

      {/* Modal Announcement */}
      <Dialog open={!!modal} onOpenChange={() => dismissModal()}>
        <DialogContent className="glass-card border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Megaphone className="h-5 w-5 text-primary" />
              {modal?.title}
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
            {modal?.content}
          </p>
          <Button onClick={dismissModal} className="w-full mt-2">Got it</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}

import { useEffect, useState } from 'react';
import { Bot, Loader2, ToggleLeft, ToggleRight } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { AdminAnalytics } from '@/components/AdminAnalytics';

export function SettingsTab() {
  const [aiChat, setAiChat] = useState<boolean | null>(null);
  const [lessonHelp, setLessonHelp] = useState<boolean | null>(null);
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    void supabase.from('app_settings').select('value').eq('key', 'ai_chat_enabled').maybeSingle().then(({ data }) => setAiChat(data ? data.value === 'true' : false));
  }, []);
  useEffect(() => {
    void supabase.from('app_settings').select('value').eq('key', 'ai_lesson_help_enabled').maybeSingle().then(({ data }) => setLessonHelp(data ? data.value === 'true' : false));
  }, []);
  const toggleLessonHelp = async () => {
    const next = !lessonHelp;
    setBusy(true);
    const { error } = await supabase.from('app_settings').update({ value: String(next) }).eq('key', 'ai_lesson_help_enabled');
    setBusy(false);
    if (error) { toast.error('Saqlanmadi'); return; }
    setLessonHelp(next);
    toast.success(`Dars ichidagi AI mentor ${next ? 'yoqildi' : "o'chirildi"}`);
  };
  const toggle = async () => {
    const next = !aiChat;
    setBusy(true);
    const { error } = await supabase.from('app_settings').update({ value: String(next) }).eq('key', 'ai_chat_enabled');
    setBusy(false);
    if (error) { toast.error('Saqlanmadi'); return; }
    setAiChat(next);
    toast.success(`AI mentor ${next ? 'yoqildi' : "o'chirildi"}`);
  };
  return (
    <div className="space-y-6">
      <section className="glass-card p-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Bot className="h-5 w-5 text-primary" />
          <div><p className="font-medium text-sm">AI Mentor chat</p><p className="text-xs text-muted-foreground">Barcha foydalanuvchilar uchun AI chatni yoqish yoki o'chirish</p></div>
        </div>
        <Button variant={aiChat ? 'default' : 'outline'} size="sm" onClick={() => void toggle()} disabled={busy || aiChat === null} className="gap-2">
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : aiChat ? <ToggleRight className="h-4 w-4" /> : <ToggleLeft className="h-4 w-4" />}
          {aiChat ? 'Yoqilgan' : "O'chirilgan"}
        </Button>
      </section>
      <section className="glass-card p-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Bot className="h-5 w-5 text-primary" />
          <div><p className="font-medium text-sm">Dars ichidagi AI mentor («Tushunmadim?»)</p><p className="text-xs text-muted-foreground">Darsda 3 ta, kuniga 15 ta savol. Yoqish yoki o'chirish</p></div>
        </div>
        <Button variant={lessonHelp ? 'default' : 'outline'} size="sm" onClick={() => void toggleLessonHelp()} disabled={busy || lessonHelp === null} className="gap-2">
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : lessonHelp ? <ToggleRight className="h-4 w-4" /> : <ToggleLeft className="h-4 w-4" />}
          {lessonHelp ? 'Yoqilgan' : "O'chirilgan"}
        </Button>
      </section>
      <section>
        <h2 className="font-bold mb-3">Sayt trafigi (DataFast)</h2>
        <AdminAnalytics />
      </section>
    </div>
  );
}

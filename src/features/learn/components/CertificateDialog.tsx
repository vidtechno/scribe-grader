import { useEffect, useMemo, useState } from 'react';
import { Download, Loader2, Share2, X } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { callLearning } from '../api';
import { levelOf } from '../course';
import { CERT_CEFR, certificateImage, certificateSvg, type CertificateData } from '../certificate';

const validName = (s: string) => s.trim().split(/\s+/).filter((w) => /\p{L}{2,}/u.test(w)).length >= 2;

interface Issued { number: string; full_name: string; percent: number | null; passed_at: string | null; issued_at: string }

/**
 * The completion certificate of a level. The number is issued by the server (once per learner and level, only after
 * the level test was passed) so every certificate can be checked in the admin panel. Asks for the full name first
 * when the profile has none.
 */
export function CertificateDialog({ levelId, onClose }: { levelId: string; onClose: () => void }) {
  const { user, profile, refreshProfile } = useAuth();
  const [name, setName] = useState(validName(profile?.full_name ?? '') ? (profile!.full_name as string) : '');
  const [asking, setAsking] = useState(!validName(profile?.full_name ?? ''));
  const [saving, setSaving] = useState(false);
  const [busy, setBusy] = useState(false);
  const [issued, setIssued] = useState<Issued | null>(null);
  const [failed, setFailed] = useState(false);
  const level = levelOf(levelId);

  const issue = async (n: string) => {
    try {
      setFailed(false);
      setIssued(await callLearning<Issued>('learning_issue_certificate', { _level: levelId, _name: n.trim() }));
    } catch (e) {
      setFailed(true);
      toast.error(String(e instanceof Error && e.message.includes('level_not_passed') ? "Sertifikat daraja testidan o'tgandan keyin beriladi." : "Sertifikatni tayyorlab bo'lmadi. Qayta urinib ko'ring."));
    }
  };
  useEffect(() => { if (!asking && !issued) void issue(name); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [asking]);

  const data: CertificateData | null = useMemo(() => issued ? ({
    name: issued.full_name, levelTitle: level.title, cefr: CERT_CEFR[levelId] ?? level.cefr,
    date: new Date(issued.passed_at ?? issued.issued_at), percent: issued.percent, number: issued.number,
  }) : null, [issued, level.title, level.cefr, levelId]);
  const preview = useMemo(() => (data ? `data:image/svg+xml;charset=utf-8,${encodeURIComponent(certificateSvg(data))}` : ''), [data]);

  const saveName = async () => {
    if (!validName(name)) { toast.error("Ism va familiyangizni to'liq yozing (kamida ikkita so'z)."); return; }
    setSaving(true);
    try {
      if (user) {
        const { error } = await supabase.from('profiles').update({ full_name: name.trim() }).eq('user_id', user.id);
        if (error) throw error;
        await refreshProfile();
      }
      await issue(name);
      setAsking(false);
    } catch { toast.error("Ismni saqlab bo'lmadi. Qayta urinib ko'ring."); } finally { setSaving(false); }
  };
  const file = async () => new File([await certificateImage(data!)], `scorify-${levelId}-sertifikat.jpg`, { type: 'image/jpeg' });
  const download = async () => {
    if (!data) return;
    setBusy(true);
    try {
      const f = await file();
      const a = document.createElement('a');
      a.href = URL.createObjectURL(f); a.download = f.name; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    } catch { toast.error("Rasmni tayyorlab bo'lmadi."); } finally { setBusy(false); }
  };
  const share = async () => {
    if (!data) return;
    setBusy(true);
    try {
      const f = await file();
      if (navigator.canShare?.({ files: [f] })) await navigator.share({ files: [f], title: 'Scorify.uz sertifikati', text: `${level.title} (${level.cefr}) darajasini tugatdim! scorify.uz` });
      else await download();
    } catch { /* the share sheet was closed */ } finally { setBusy(false); }
  };

  return (
    <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur overflow-y-auto">
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-5">
          <button type="button" onClick={onClose} aria-label="Yopish" className="h-9 w-9 rounded-full grid place-items-center hover:bg-secondary"><X className="h-5 w-5" /></button>
          <h2 className="text-lg font-extrabold">{level.title} sertifikati</h2>
        </div>
        {asking ? (
          <div className="glass-card p-5">
            <p className="font-semibold mb-1">Sertifikatda qanday ism bo'lsin?</p>
            <p className="text-sm text-muted-foreground mb-4">Ism va familiyangizni yozing. U sertifikatga shunday chiqadi va profilingizda saqlanadi.</p>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Masalan: Dilnoza Karimova" autoFocus
              onKeyDown={(e) => { if (e.key === 'Enter') void saveName(); }} maxLength={48} />
            <Button className="w-full mt-4" disabled={saving || !name.trim()} onClick={() => void saveName()}>
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : "Sertifikatni ko'rish"}
            </Button>
          </div>
        ) : !data ? (
          <div className="grid place-items-center py-20 text-center">
            {failed ? <><p className="text-sm text-muted-foreground mb-3">Sertifikat tayyorlanmadi.</p><Button onClick={() => void issue(name)}>Qayta urinish</Button></> : <Loader2 className="h-8 w-8 animate-spin text-primary" />}
          </div>
        ) : (
          <>
            <img src={preview} alt={`${data.name} — ${level.title} sertifikati`} className="w-full rounded-2xl border border-border shadow-lg" />
            <p className="text-xs text-muted-foreground text-center mt-2">Sertifikat raqami: <b>{data.number}</b>. U Scorify.uz tizimida ro'yxatga olingan.</p>
            <div className="grid sm:grid-cols-2 gap-2.5 mt-4">
              <Button size="lg" variant="glow" className="gap-2" disabled={busy} onClick={() => void download()}><Download className="h-4 w-4" />Yuklab olish</Button>
              <Button size="lg" variant="outline" className="gap-2" disabled={busy} onClick={() => void share()}><Share2 className="h-4 w-4" />Ulashish</Button>
            </div>
            <button type="button" className="block mx-auto mt-4 text-xs text-muted-foreground underline" onClick={() => setAsking(true)}>Ismni o'zgartirish</button>
          </>
        )}
      </div>
    </div>
  );
}

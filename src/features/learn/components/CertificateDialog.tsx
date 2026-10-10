import { useMemo, useState } from 'react';
import { Download, Loader2, Share2, X } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { levelOf } from '../course';
import { CERT_CEFR, certificateImage, certificateNumber, certificateSvg, type CertificateData } from '../certificate';

const validName = (s: string) => s.trim().split(/\s+/).filter((w) => /\p{L}{2,}/u.test(w)).length >= 2;

/** The completion certificate of a level: asks for the full name first when the profile has none, then shows and exports the image. */
export function CertificateDialog({ levelId, score, total, passedAt, onClose }: {
  levelId: string; score?: number | null; total?: number | null; passedAt?: string | null; onClose: () => void;
}) {
  const { user, profile, refreshProfile } = useAuth();
  const [name, setName] = useState(validName(profile?.full_name ?? '') ? (profile!.full_name as string) : '');
  const [asking, setAsking] = useState(!validName(profile?.full_name ?? ''));
  const [saving, setSaving] = useState(false);
  const [busy, setBusy] = useState(false);
  const level = levelOf(levelId);
  const data: CertificateData = useMemo(() => {
    const date = passedAt ? new Date(passedAt) : new Date();
    return {
      name, levelTitle: level.title, cefr: CERT_CEFR[levelId] ?? level.cefr, date,
      percent: score != null && total ? (score / total) * 100 : null,
      number: certificateNumber(levelId, user?.id ?? 'guest', date),
    };
  }, [name, level.title, levelId, passedAt, score, total, user?.id]);
  const preview = useMemo(() => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(certificateSvg(data))}`, [data]);

  const saveName = async () => {
    if (!validName(name)) { toast.error("Ism va familiyangizni to'liq yozing (kamida ikkita so'z)."); return; }
    setSaving(true);
    try {
      if (user) {
        const { error } = await supabase.from('profiles').update({ full_name: name.trim() }).eq('user_id', user.id);
        if (error) throw error;
        await refreshProfile();
      }
      setAsking(false);
    } catch { toast.error("Ismni saqlab bo'lmadi. Qayta urinib ko'ring."); } finally { setSaving(false); }
  };
  const file = async () => new File([await certificateImage(data)], `scorify-${levelId}-sertifikat.jpg`, { type: 'image/jpeg' });
  const download = async () => {
    setBusy(true);
    try {
      const f = await file();
      const a = document.createElement('a');
      a.href = URL.createObjectURL(f); a.download = f.name; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    } catch { toast.error("Rasmni tayyorlab bo'lmadi."); } finally { setBusy(false); }
  };
  const share = async () => {
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
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Sertifikatni ko\'rish'}
            </Button>
          </div>
        ) : (
          <>
            <img src={preview} alt={`${data.name} — ${level.title} sertifikati`} className="w-full rounded-2xl border border-border shadow-lg" />
            <div className="grid sm:grid-cols-2 gap-2.5 mt-5">
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

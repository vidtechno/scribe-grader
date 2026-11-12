import { useEffect, useMemo, useState } from 'react';
import { Loader2, X } from 'lucide-react';
import { toast } from 'sonner';
import { useT } from '@/i18n';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { callLearning } from '../api';
import { LEVELS, levelOf } from '../course';
import { CERT_CEFR, certificateSvg, type CertificateData } from '../certificate';
import { isFreshlyIssued } from '../certificate-share';
import { CertificateCelebration } from './CertificateCelebration';
import { CertificateShare } from './CertificateShare';

const validName = (s: string) => s.trim().split(/\s+/).filter((w) => /\p{L}{2,}/u.test(w)).length >= 2;

/** True the first time a certificate number is seen in this browser (so a reload does not replay the animation). */
function markCelebrated(number: string): boolean {
  try {
    const key = `scorify:cert-party:${number}`;
    if (localStorage.getItem(key)) return false;
    localStorage.setItem(key, '1');
  } catch { /* storage unavailable: celebrate anyway */ }
  return true;
}

interface Issued { number: string; full_name: string; percent: number | null; passed_at: string | null; issued_at: string }

/**
 * The completion certificate of a level. The number is issued by the server (once per learner and level, only after
 * the level test was passed) so every certificate can be checked in the admin panel. Asks for the full name first
 * when the profile has none.
 */
export function CertificateDialog({ levelId, onClose }: { levelId: string; onClose: () => void }) {
  const { t, lang } = useT();
  const { user, profile, refreshProfile } = useAuth();
  const [name, setName] = useState(validName(profile?.full_name ?? '') ? (profile!.full_name as string) : '');
  const [asking, setAsking] = useState(!validName(profile?.full_name ?? ''));
  const [saving, setSaving] = useState(false);
  const [busy, setBusy] = useState(false);
  const [issued, setIssued] = useState<Issued | null>(null);
  const [failed, setFailed] = useState(false);
  const [party, setParty] = useState(false);
  const level = levelOf(levelId);

  const issue = async (n: string) => {
    try {
      setFailed(false);
      const res = await callLearning<Issued>('learning_issue_certificate', { _level: levelId, _name: n.trim() });
      // The big celebration is for a certificate earned just now, once per certificate number; reopening it shows the plain view.
      if (isFreshlyIssued(res.issued_at) && markCelebrated(res.number)) setParty(true);
      setIssued(res);
    } catch (e) {
      setFailed(true);
      toast.error(String(e instanceof Error && e.message.includes('level_not_passed') ? t('learn.certDialog.notPassed') : t('learn.certDialog.failed')));
    }
  };
  useEffect(() => { if (!asking && !issued) void issue(name); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [asking]);

  const data: CertificateData | null = useMemo(() => issued ? ({
    name: issued.full_name, levelTitle: level.title, cefr: CERT_CEFR[levelId] ?? level.cefr,
    date: new Date(issued.passed_at ?? issued.issued_at), percent: issued.percent, number: issued.number, lang,
  }) : null, [issued, level.title, level.cefr, levelId, lang]);
  const preview = useMemo(() => (data ? `data:image/svg+xml;charset=utf-8,${encodeURIComponent(certificateSvg(data))}` : ''), [data]);

  const saveName = async () => {
    if (!validName(name)) { toast.error(t('learn.certDialog.fullName')); return; }
    setSaving(true);
    try {
      if (user) {
        const { error } = await supabase.from('profiles').update({ full_name: name.trim() }).eq('user_id', user.id);
        if (error) throw error;
        await refreshProfile();
      }
      await issue(name);
      setAsking(false);
    } catch { toast.error(t('learn.certDialog.nameFailed')); } finally { setSaving(false); }
  };
  const next = useMemo(() => { const n = LEVELS[LEVELS.findIndex((l) => l.id === levelId) + 1]; return n?.available ? { title: n.title, cefr: n.cefr } : null; }, [levelId]);

  return (
    <>
    {party && data && <CertificateCelebration data={data} previewSrc={preview} nextLevel={next} onDone={() => setParty(false)} />}
    <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur overflow-y-auto">
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3 mb-5">
          <button type="button" onClick={onClose} aria-label={t('learn.common.close')} className="h-9 w-9 rounded-full grid place-items-center hover:bg-secondary"><X className="h-5 w-5" /></button>
          <h2 className="text-lg font-extrabold">{t('learn.certDialog.title', { level: level.title })}</h2>
        </div>
        {asking ? (
          <div className="glass-card p-5">
            <p className="font-semibold mb-1">{t('learn.certDialog.askName')}</p>
            <p className="text-sm text-muted-foreground mb-4">{t('learn.certDialog.askNameHint')}</p>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder={t('learn.certDialog.namePlaceholder')} autoFocus
              onKeyDown={(e) => { if (e.key === 'Enter') void saveName(); }} maxLength={48} />
            <Button className="w-full mt-4" disabled={saving || !name.trim()} onClick={() => void saveName()}>
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : t('learn.certDialog.view')}
            </Button>
          </div>
        ) : !data ? (
          <div className="grid place-items-center py-20 text-center">
            {failed ? <><p className="text-sm text-muted-foreground mb-3">{t('learn.certDialog.notReady')}</p><Button onClick={() => void issue(name)}>{t('learn.unitTest.retry')}</Button></> : <Loader2 className="h-8 w-8 animate-spin text-primary" />}
          </div>
        ) : (
          <>
            <img src={preview} alt={t('learn.certDialog.alt', { name: data.name, level: level.title })} className="w-full rounded-2xl border border-border shadow-lg" />
            <p className="text-xs text-muted-foreground text-center mt-2">{t('learn.certDialog.numberA')} <b>{data.number}</b>. {t('learn.certDialog.numberB')}</p>
            <CertificateShare data={data} className="mt-4" />
            <button type="button" className="block mx-auto mt-4 text-xs text-muted-foreground underline" onClick={() => setAsking(true)}>{t('learn.certDialog.changeName')}</button>
          </>
        )}
      </div>
    </div>
    </>
  );
}

import { useState } from 'react';
import { Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useT } from '@/i18n';
import { CertificateDialog } from '@/features/learn/components/CertificateDialog';
import { CERT_CEFR, formatCertDate } from '@/features/learn/certificate';
import { levelOf } from '@/features/learn/course';
import { useMyCertificates, type PublicCertificate } from './api';

/** "Beginner · A0–A1" for a level id (unknown ids fall back to the first level, like the rest of the course UI). */
export const certificateLabel = (levelId: string) => {
  const level = levelOf(levelId);
  return `${level.title} · ${CERT_CEFR[levelId] ?? level.cefr}`;
};

function Badge({ c, action }: { c: PublicCertificate; action?: React.ReactNode }) {
  const { t } = useT();
  return (
    <li className="flex items-center gap-3 rounded-xl border border-amber-500/30 bg-amber-500/5 px-3 py-2.5" data-testid="certificate-badge">
      <span className="h-9 w-9 shrink-0 rounded-full bg-amber-500/15 text-amber-600 grid place-items-center"><Award className="h-5 w-5" aria-hidden /></span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold truncate">{certificateLabel(c.level_id)}</span>
        <span className="block text-xs text-muted-foreground">{formatCertDate(new Date(c.issued_at))}{typeof c.percent === 'number' ? ` · ${t('cert.result', { n: Math.round(c.percent) })}` : ''}</span>
      </span>
      {action}
    </li>
  );
}

/** Certificates on someone's public profile. Renders nothing when there are none. */
export function CertificateBadges({ certificates }: { certificates?: PublicCertificate[] }) {
  const { t } = useT();
  if (!certificates?.length) return null;
  return (
    <div className="glass-card p-4">
      <p className="text-sm font-semibold mb-3 flex items-center gap-1.5"><Award className="h-4 w-4 text-amber-600" />{t('pub.certificates')}</p>
      <ul className="grid gap-2 sm:grid-cols-2">{certificates.map((c) => <Badge key={c.number} c={c} />)}</ul>
    </div>
  );
}

/** The learner's own certificates, each opening the certificate dialog to view or download it again. */
export function MyCertificates() {
  const { t } = useT();
  const { data } = useMyCertificates();
  const [open, setOpen] = useState<string | null>(null);
  if (!data?.length) return null;
  return (
    <div className="mb-5">
      <p className="text-sm font-semibold mb-0.5 flex items-center gap-1.5"><Award className="h-4 w-4 text-amber-600" />{t('cert.my')}</p>
      <p className="text-xs text-muted-foreground mb-2">{t('cert.myHint')}</p>
      <ul className="grid gap-2 sm:grid-cols-2">
        {data.map((c) => <Badge key={c.number} c={c} action={<Button size="sm" variant="outline" onClick={() => setOpen(c.level_id)}>{t('cert.view')}</Button>} />)}
      </ul>
      {open && <CertificateDialog levelId={open} onClose={() => setOpen(null)} />}
    </div>
  );
}

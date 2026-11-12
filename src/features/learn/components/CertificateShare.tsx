import { useMemo, useState } from 'react';
import { Copy, Download, Instagram, Linkedin, Loader2, Send, Share2 } from 'lucide-react';
import { toast } from 'sonner';
import { useT } from '@/i18n';
import { Button } from '@/components/ui/button';
import { certificateImage, certificateStoryImage, type CertificateData } from '../certificate';
import { linkedinAddUrl, linkedinShareUrl, shareText, shareUrl, telegramShareUrl } from '../certificate-share';

type Action = 'instagram' | 'more' | 'download' | null;

const save = (file: File) => {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(file);
  a.download = file.name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
};
const aborted = (e: unknown) => e instanceof DOMException && e.name === 'AbortError';

/** Share buttons of a certificate: Instagram (story picture), Telegram, LinkedIn, the system share sheet, copy link, download. */
export function CertificateShare({ data, className = '' }: { data: CertificateData; className?: string }) {
  const { t, lang } = useT();
  const [busy, setBusy] = useState<Action>(null);
  const url = shareUrl(data.number);
  const text = useMemo(() => shareText({ levelTitle: data.levelTitle, cefr: data.cefr, percent: data.percent, lang }), [data.levelTitle, data.cefr, data.percent, lang]);
  const addUrl = linkedinAddUrl({ levelTitle: data.levelTitle, cefr: data.cefr, number: data.number, date: data.date });
  const name = `scorify-${data.number}-${t('learn.certDialog.fileSuffix')}`;

  const run = async (action: Exclude<Action, null>, job: () => Promise<void>) => {
    setBusy(action);
    try { await job(); } catch (e) { if (!aborted(e)) toast.error(t('learn.certDialog.imageFailed')); } finally { setBusy(null); }
  };

  const download = () => run('download', async () => {
    save(new File([await certificateImage(data)], `${name}.jpg`, { type: 'image/jpeg' }));
  });

  const instagram = () => run('instagram', async () => {
    const story = new File([await certificateStoryImage(data)], `${name}-story.png`, { type: 'image/png' });
    if (navigator.canShare?.({ files: [story] })) { await navigator.share({ files: [story], text, url }); return; }
    save(story);
    toast.info(t('learn.certShare.igHint'), { duration: 8000 });
  });

  const more = () => run('more', async () => {
    if (!navigator.share) { await copy(); return; }
    const file = new File([await certificateImage(data)], `${name}.jpg`, { type: 'image/jpeg' });
    const payload = { title: t('learn.certDialog.shareTitle'), text, url };
    if (navigator.canShare?.({ files: [file] })) await navigator.share({ ...payload, files: [file] });
    else await navigator.share(payload);
  });

  const copy = async () => {
    try { await navigator.clipboard.writeText(url); toast.success(t('learn.certShare.copied')); } catch { toast.error(t('learn.certShare.copyFailed')); }
  };
  const open = (href: string) => { window.open(href, '_blank', 'noopener,noreferrer'); };
  const icon = (action: Exclude<Action, null>, node: React.ReactNode) => (busy === action ? <Loader2 className="h-4 w-4 animate-spin" /> : node);

  return (
    <div className={className}>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <Button variant="outline" className="gap-2" disabled={busy !== null} onClick={() => void instagram()}>{icon('instagram', <Instagram className="h-4 w-4" />)}{t('learn.certShare.instagram')}</Button>
        <Button variant="outline" className="gap-2" onClick={() => open(telegramShareUrl(url, text))}><Send className="h-4 w-4" />{t('learn.certShare.telegram')}</Button>
        <Button variant="outline" className="gap-2" onClick={() => open(linkedinShareUrl(url))}><Linkedin className="h-4 w-4" />{t('learn.certShare.linkedin')}</Button>
        <Button variant="outline" className="gap-2" disabled={busy !== null} onClick={() => void more()}>{icon('more', <Share2 className="h-4 w-4" />)}{t('learn.certShare.more')}</Button>
        <Button variant="outline" className="gap-2" onClick={() => void copy()}><Copy className="h-4 w-4" />{t('learn.certShare.copy')}</Button>
        <Button variant="glow" className="gap-2" disabled={busy !== null} onClick={() => void download()}>{icon('download', <Download className="h-4 w-4" />)}{t('learn.certShare.download')}</Button>
      </div>
      <a href={addUrl} target="_blank" rel="noopener noreferrer" className="block text-center mt-3 text-xs text-muted-foreground underline">{t('learn.certShare.addToLinkedin')}</a>
    </div>
  );
}

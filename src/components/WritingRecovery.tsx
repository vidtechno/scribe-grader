import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useT } from '@/i18n';
import { useAuth } from '@/hooks/useAuth';
import { readDrafts, removeDraft, type WritingDraft } from '@/lib/writing-drafts';
import { writingRpc } from '@/lib/writing-api';
import { toast } from 'sonner';

export async function copyWriting(text: string, t: (key: string) => string) {
  try { await navigator.clipboard.writeText(text); toast.success(t('writing.copied')); }
  catch { toast.error(t('writing.copyError')); }
}
export function WritingConflict({ device, account, onChoose }: {
  device: WritingDraft; account: WritingDraft; onChoose: (device: boolean) => void;
}) {
  const { t } = useT();
  return <section role="alert" className="rounded-xl border border-amber-500 bg-background p-4 space-y-3 text-foreground">
    <p>{t('writing.conflict')}</p>
    <div className="grid gap-3 sm:grid-cols-2">
      {[device, account].map((d, i) => <div key={i} className="min-w-0 space-y-2">
        <strong>{t(i === 0 ? 'writing.device' : 'writing.account')}</strong>
        <pre className="max-h-40 overflow-auto whitespace-pre-wrap break-words text-xs">{d.text}</pre>
        <Button variant="outline" onClick={() => copyWriting(d.text, t)}>{t('writing.copy')}</Button>
        <Button onClick={() => onChoose(i === 0)} className="whitespace-normal h-auto py-2">
          {t(i === 0 ? 'writing.deviceCopy' : 'writing.accountCopy')}
        </Button>
      </div>)}
    </div>
  </section>;
}

export function WritingRecoveryList() {
  const { user } = useAuth();
  const { t, lang } = useT();
  const [, render] = useState(0);
  let drafts: WritingDraft[] = [];
  try { if (user) drafts = readDrafts(user.id).filter(d => !d.mockId && d.text.trim()); } catch { /* storage disabled */ }
  if (!drafts.length) return null;
  return <section className="mb-6 rounded-2xl border border-primary/20 bg-primary/5 p-4 space-y-3">
    <h2 className="font-semibold">{t('writing.found')}</h2>
    {drafts.map(d => <div key={d.id} className="flex flex-wrap items-center gap-2 border-t border-border pt-3">
      <div className="min-w-0 flex-1 basis-48"><p className="font-medium truncate">{d.task} · {d.topic}</p>
        <p className="text-xs text-muted-foreground">{t('writing.savedAt', { date: new Date(d.updatedAt).toLocaleString(lang) })}</p></div>
      <Button asChild size="sm"><Link to={`/exam?attempt=${d.id}`}>{t('writing.resume')}</Link></Button>
      <Button size="sm" variant="outline" onClick={() => copyWriting(d.text, t)}>{t('writing.copy')}</Button>
      <Button size="sm" variant="ghost" onClick={async () => {
        if (!window.confirm(t('writing.confirmDelete'))) return;
        try { await writingRpc('discard_writing_attempt', { _id: d.id }); removeDraft(d); render(n => n + 1); }
        catch (e) { toast.error(t(e instanceof Error ? e.message : 'writing.saveError')); }
      }}>{t('writing.delete')}</Button>
    </div>)}
  </section>;
}

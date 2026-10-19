import { useLang, type Lang } from '@/i18n';
import { useT } from '@/i18n';

const OPTIONS: { lang: Lang; short: string; name: string }[] = [
  { lang: 'en', short: 'EN', name: 'English' },
  { lang: 'uz', short: 'UZ', name: "O'zbekcha" },
];

/** Two-state switch (EN | UZ): small enough for the top bar on phones. */
export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLang();
  const { t } = useT();
  return (
    <div role="group" aria-label={t('lang.label')} className={`inline-flex rounded-lg border border-border bg-card/60 p-0.5 ${className}`}>
      {OPTIONS.map((o) => (
        <button key={o.lang} type="button" lang={o.lang} title={o.name} aria-label={o.name} aria-pressed={lang === o.lang}
          onClick={() => setLang(o.lang)}
          className={`px-2 py-1 text-xs font-semibold rounded-md transition-colors ${lang === o.lang ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
          {o.short}
        </button>
      ))}
    </div>
  );
}

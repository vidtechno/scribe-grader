import { Component, type ReactNode } from 'react';
import { currentLang, translate } from '@/i18n';

/** Catches a crash while rendering so the learner never sees a blank screen; a failed page chunk (new deploy) reloads once. */
export class AppErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error: Error) {
    const chunk = /Loading chunk|dynamically imported module|Importing a module script failed|Failed to fetch dynamically/i.test(error.message);
    try {
      if (chunk && !sessionStorage.getItem('chunk-reloaded')) { sessionStorage.setItem('chunk-reloaded', '1'); window.location.reload(); }
    } catch { /* storage unavailable: show the message below */ }
  }
  render() {
    if (!this.state.failed) return this.props.children;
    // A class component: the language is read directly (the boundary sits above nothing that could change it while crashed).
    const t = (key: string) => translate(currentLang(), key);
    return (
      <div className="min-h-screen grid place-items-center bg-background px-6 text-center">
        <div className="max-w-sm">
          <h1 className="text-xl font-bold mb-2">{t('errBoundary.title')}</h1>
          <p className="text-sm text-muted-foreground mb-5">{t('errBoundary.text')}</p>
          <button type="button" className="rounded-lg bg-primary text-primary-foreground px-5 py-2.5 font-semibold" onClick={() => window.location.reload()}>{t('errBoundary.reload')}</button>
        </div>
      </div>
    );
  }
}

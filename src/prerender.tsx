// Server-side entry used at build time (scripts/prerender.mjs): renders the public landing pages (`/`, `/uz`) and the
// 404 page to plain HTML, so the first response already contains the real, visible content.
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from '@/i18n';
import { AuthProvider } from '@/hooks/useAuth';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';

export interface Rendered { html: string; head: string }

function render(path: string, page: React.ReactNode): Rendered {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const queryClient = new QueryClient();
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={path}>
          <LanguageProvider>
            <AuthProvider>{page}</AuthProvider>
          </LanguageProvider>
        </StaticRouter>
      </QueryClientProvider>
    </HelmetProvider>,
  );
  const h = helmetContext.helmet;
  const head = h ? [h.title, h.priority, h.meta, h.link, h.script].map((x) => x?.toString() ?? '').join('\n') : '';
  return { html, head };
}

export const renderLanding = (path: '/' | '/uz') => render(path, <Index />);
export const renderNotFound = () => render('/404', <NotFound />);

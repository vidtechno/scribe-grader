/**
 * Runs after `vite build`. Produces, inside dist/:
 *  - index.html        the English landing page, prerendered (real content, single title/description/canonical from <SEOHead>)
 *  - uz/index.html     the Uzbek landing page, prerendered
 *  - app.html          the empty shell for the signed-in app routes (no landing metadata; noindex comes from X-Robots-Tag headers)
 *  - 404.html          static not-found page (Vercel serves it with status 404 for every unmatched URL)
 * The SSR bundle is built into dist-ssr/ (not deployed).
 */
import { build } from 'vite';
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const dist = resolve(root, 'dist');
const ssrOut = resolve(root, 'dist-ssr');
// The browser client is created at import time; nothing is requested while rendering to a string.
process.env.VITE_SUPABASE_URL ||= 'https://prerender.invalid';
process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||= 'prerender';

await build({
  configFile: resolve(root, 'vite.config.ts'),
  logLevel: 'warn',
  build: { ssr: 'src/prerender.tsx', outDir: ssrOut, emptyOutDir: true, rollupOptions: { output: { format: 'esm' } } },
  ssr: { noExternal: true },
  resolve: { alias: [{ find: '@/integrations/supabase/client', replacement: resolve(root, 'src/prerender/supabase-stub.ts') }] },
  define: { 'import.meta.env.SSR_PRERENDER': 'true' },
});

const mod = await import(pathToFileURL(join(ssrOut, 'prerender.js')).href);
const template = readFileSync(join(dist, 'index.html'), 'utf8');
if (!template.includes('<!--app-html-->') || !template.includes('<!--head-seo-->')) throw new Error('index.html template markers are missing');

// Ownership tags for Bing / Yandex / Google: only written when the owner set the codes in the build environment.
const verification = [
  ['msvalidate.01', process.env.BING_SITE_VERIFICATION],
  ['yandex-verification', process.env.YANDEX_SITE_VERIFICATION],
  ['google-site-verification', process.env.GOOGLE_SITE_VERIFICATION],
]
  .filter(([, v]) => v && /^[A-Za-z0-9_\-:.]+$/.test(v))
  .map(([n, v]) => `<meta name="${n}" content="${v}">`)
  .join('\n');

const put = (html, ...path) => {
  const file = join(dist, ...path);
  mkdirSync(resolve(file, '..'), { recursive: true });
  writeFileSync(file, html);
};
const fill = (rendered, { lang, keepSiteJsonLd = true, extraHead = '' }) => {
  let out = template
    .replace('<html lang="en">', `<html lang="${lang}">`)
    .replace('<!--head-seo-->', rendered.head + extraHead + (keepSiteJsonLd ? verification : ''))
    .replace('<!--app-html-->', rendered.html);
  if (!keepSiteJsonLd) out = out.replace(/<!--site-jsonld-start-->[\s\S]*?<!--site-jsonld-end-->/, '');
  return out;
};

put(fill(mod.renderLanding('/'), { lang: 'en' }), 'index.html');
put(fill(mod.renderLanding('/uz'), { lang: 'uz' }), 'uz', 'index.html');
// App shell: neutral title only; the pages set their own head through <SEOHead>.
put(fill({ html: '', head: '<title>Scorify.uz</title>' }, { lang: 'en', keepSiteJsonLd: false }), 'app.html');
put(fill({ html: mod.renderNotFound().html, head: '<title>Page not found | Scorify.uz</title>\n<meta name="robots" content="noindex, nofollow">' }, { lang: 'en', keepSiteJsonLd: false }), '404.html');

rmSync(ssrOut, { recursive: true, force: true });
console.log('prerendered: /, /uz, app.html, 404.html');

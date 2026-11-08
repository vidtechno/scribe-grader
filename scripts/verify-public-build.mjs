import { readdirSync, readFileSync, lstatSync } from 'node:fs';
import { resolve, relative, extname } from 'node:path';
import { pathToFileURL } from 'node:url';

/** Detect accidental publication; errors deliberately contain filenames, never credential values. */
export function verifyPublicBuild(directory, environment = process.env) {
  const root = resolve(directory);
  const sensitiveValues = ['OPENAI_API_KEY', 'SUPABASE_SERVICE_ROLE_KEY', 'DATABASE_URL', 'POSTGRES_URL', 'DATABASE_PASSWORD', 'SUPABASE_DB_PASSWORD', 'TELEGRAM_BOT_TOKEN']
    .map(name => environment[name]).filter(value => typeof value === 'string' && value.length >= 12);
  const failures = [];
  let files = 0;
  const scan = folder => {
    for (const entry of readdirSync(folder)) {
      const file = resolve(folder, entry), name = relative(root, file).replaceAll('\\', '/');
      const stat = lstatSync(file);
      if (stat.isSymbolicLink()) { failures.push(`${name}: symbolic link`); continue; }
      if (/(^|\/)(?:\.env(?:\..*)?|\.git|src|supabase|api|scripts|node_modules)(?:\/|$)/i.test(name)
        || /\.(?:map|tsx?|jsx|pem|key|sql|toml|bak)$/i.test(name)) {
        failures.push(`${name}: private source/configuration`); continue;
      }
      if (stat.isDirectory()) { scan(file); continue; }
      files++;
      if (!['.js', '.css', '.html', '.json', '.txt', '.xml', '.svg', '.webmanifest'].includes(extname(name))) continue;
      const text = readFileSync(file, 'utf8');
      const privilegedJwt = [...text.matchAll(/eyJ[A-Za-z0-9_-]+\.([A-Za-z0-9_-]+)\.[A-Za-z0-9_-]+/g)].some(match => {
        try { return JSON.parse(Buffer.from(match[1], 'base64url').toString()).role === 'service_role'; } catch { return false; }
      });
      if (sensitiveValues.some(value => text.includes(value)) || privilegedJwt
        || /\bsk-(?:proj-|svcacct-)?[A-Za-z0-9_-]{24,}|\bsb_secret_[A-Za-z0-9_-]{20,}/.test(text)
        || /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----\s+[A-Za-z0-9+/=]{32}/.test(text)) {
        failures.push(`${name}: possible private credential`);
      }
      if (/sourceMappingURL\s*=\s*(?:data:application\/json|[^\s]+\.map)/.test(text)) failures.push(`${name}: source map reference`);
    }
  };
  scan(root);
  if (failures.length) throw new Error(`Public build rejected:\n${failures.join('\n')}`);
  return files;
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  console.log(`Public build verified: ${verifyPublicBuild('dist')} files; no detected private credentials, source maps or server source.`);
}

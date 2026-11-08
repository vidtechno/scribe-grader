import { afterEach, describe, expect, it } from 'vitest';
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { verifyPublicBuild } from '../../scripts/verify-public-build.mjs';

const folders: string[] = [];
const fixture = () => { const folder = mkdtempSync(join(tmpdir(), 'scorify-build-check-')); folders.push(folder); return folder; };
afterEach(() => { for (const folder of folders.splice(0)) rmSync(folder, { recursive: true, force: true }); });
describe('public deployment gate', () => {
  it('allows the public anon key but rejects a privileged JWT', () => {
    const folder = fixture();
    const jwt = (role: string) => `eyJhbGciOiJIUzI1NiJ9.${Buffer.from(JSON.stringify({ role })).toString('base64url')}.signature`;
    writeFileSync(join(folder, 'app.js'), `const key = '${jwt('anon')}'`);
    expect(verifyPublicBuild(folder, {})).toBe(1);
    writeFileSync(join(folder, 'app.js'), `const key = '${jwt('service_role')}'`);
    expect(() => verifyPublicBuild(folder, {})).toThrow('possible private credential');
  });
  it('rejects source maps, dotenv and server source without exposing their contents', () => {
    for (const name of ['.env.local', 'app.js.map', 'server.ts', 'private.pem']) {
      const folder = fixture(); writeFileSync(join(folder, name), 'sensitive value');
      expect(() => verifyPublicBuild(folder, {})).toThrow('private source/configuration');
    }
    const folder = fixture(); mkdirSync(join(folder, 'supabase'));
    expect(() => verifyPublicBuild(folder, {})).toThrow('private source/configuration');
  });
  it('rejects private provider keys and exact server secrets while redacting the error', () => {
    const folder = fixture();
    const secret = ['sk', 'proj', 'x'.repeat(40)].join('-');
    writeFileSync(join(folder, 'bundle.js'), secret);
    expect(() => verifyPublicBuild(folder, {})).toThrow('bundle.js: possible private credential');
    try { verifyPublicBuild(folder, {}); } catch (error) { expect(String(error)).not.toContain(secret); }
    const custom = 'test-private-value-1234'; writeFileSync(join(folder, 'bundle.js'), custom);
    expect(() => verifyPublicBuild(folder, { DATABASE_PASSWORD: custom })).toThrow('possible private credential');
  });
});

/**
 * Records the IELTS Listening sections with the free Kokoro voices (British: emma, isabella, george, lewis).
 *   KOKORO_DIR=<kokoro-int8-en-v0_19> PYTHON=<python with sherpa-onnx> npx tsx scripts/generate-ielts-listening.ts [--force] [--only l1]
 * Each section becomes one mp3 (announcer line, then every turn with short pauses) at public/ielts-audio/<test>-s<n>.mp3.
 */
import { execFile } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { promisify } from 'node:util';
import { pathToFileURL } from 'node:url';
import type { ListeningTest } from '../src/features/ielts/types';

const run = promisify(execFile);
const args = process.argv.slice(2);
const force = args.includes('--force');
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : '';
const SID = { emma: 7, isabella: 8, george: 9, lewis: 10 } as const;
const OUT = join(process.cwd(), 'public', 'ielts-audio');

const speech = (t: string) => t.replace(/\s+/g, ' ').replace(/[“”"]/g, '').replace(/…/g, '...').trim();

async function main() {
  if (!process.env.KOKORO_DIR) throw new Error('Set KOKORO_DIR');
  mkdirSync(OUT, { recursive: true });
  const dir = join(process.cwd(), 'src', 'features', 'ielts', 'listening');
  const files = readdirSync(dir).filter((f) => /^l\d+\.ts$/.test(f) && (!only || f.startsWith(only + '.')));
  for (const f of files) {
    const test = (await import(pathToFileURL(join(dir, f)).href)).default as ListeningTest;
    for (const [si, section] of test.sections.entries()) {
      const out = join(OUT, `${test.id}-s${si + 1}.mp3`);
      if (existsSync(out) && !force) continue;
      const tmp = mkdtempSync(join(tmpdir(), 'ielts-'));
      const items = [{ voice: 'emma' as const, text: section.context, gap: 1.2 }, ...section.lines.map((l, i, a) => ({ voice: l.voice, text: l.say ?? l.text, gap: a[i + 1] && a[i + 1].voice === l.voice ? 0.35 : 0.6 }))];
      const jobs = items.map((it, i) => ({ out: join(tmp, `${String(i).padStart(4, '0')}.mp3`), text: speech(it.text), sid: SID[it.voice] }));
      const shards = 3;
      await Promise.all(Array.from({ length: shards }, (_, s) => {
        const file = join(tmp, `jobs-${s}.json`);
        writeFileSync(file, JSON.stringify(jobs.filter((_, n) => n % shards === s)));
        return run(process.env.PYTHON ?? 'python3', [join(process.cwd(), 'scripts', 'kokoro-tts.py'), file], { env: process.env, maxBuffer: 1 << 28 });
      }));
      // Silences of the lengths used, then one concat list.
      const gaps = [...new Set(items.map((i) => i.gap))];
      for (const g of gaps) await run('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'lavfi', '-i', 'anullsrc=r=22050:cl=mono', '-t', String(g), '-codec:a', 'libmp3lame', '-b:a', '48k', join(tmp, `gap-${g}.mp3`)]);
      const list = items.map((it, i) => `file '${jobs[i].out}'\nfile '${join(tmp, `gap-${it.gap}.mp3`)}'`).join('\n');
      writeFileSync(join(tmp, 'list.txt'), list);
      await run('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', join(tmp, 'list.txt'), '-ar', '22050', '-ac', '1', '-codec:a', 'libmp3lame', '-b:a', '48k', out]);
      rmSync(tmp, { recursive: true, force: true });
      console.log(`recorded ${test.id}-s${si + 1} (${items.length} turns)`);
    }
  }
}
main().catch((e) => { console.error(e); process.exit(1); });

// node render.mjs <id>   →   out/<id>.mp4   (uses out/<id>.mp3 and out/<id>.timeline.json, see build-timeline.py)
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const id = process.argv[2] ?? 'to-be';
const FPS = 30;
const timeline = JSON.parse(readFileSync(join(here, 'out', `${id}.timeline.json`), 'utf8'));
const chrome = process.env.CHROME_PATH ?? ['/opt/pw-browsers/chromium-1194/chrome-linux/chrome'].find(existsSync);

const browser = await chromium.launch({ executablePath: chrome, args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1080, height: 1080 } });
await page.goto(`file://${join(here, 'scene.html')}`);
await page.evaluate((t) => window.setTimeline(t), timeline);

const out = join(here, 'out', `${id}.mp4`);
const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-', '-i', join(here, 'out', `${id}.mp3`),
  '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '26', '-preset', 'medium', '-c:a', 'aac', '-b:a', '96k', '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });
const frames = Math.ceil(timeline.duration * FPS);
for (let i = 0; i < frames; i++) {
  await page.evaluate((t) => window.renderAt(t), i / FPS);
  const png = await page.screenshot({ type: 'jpeg', quality: 92 });
  if (!ff.stdin.write(png)) await new Promise((r) => ff.stdin.once('drain', r));
}
ff.stdin.end();
await new Promise((r) => ff.on('close', r));
await browser.close();
console.log(`wrote ${out} (${frames} frames)`);

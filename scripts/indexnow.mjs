#!/usr/bin/env node
/**
 * IndexNow submission (Bing, Yandex and other participating engines; Google does not use it).
 *
 *   node scripts/indexnow.mjs                  dry run: lists what WOULD be sent, sends nothing (default)
 *   node scripts/indexnow.mjs --submit         really sends the new/changed URLs
 *   node scripts/indexnow.mjs --urls /a,/b     only these paths (still deduplicated against the state file)
 *   node scripts/indexnow.mjs --all            treat every sitemap URL as new (use once, deliberately)
 *
 * Source of URLs: the live sitemap (SITEMAP_URL, default https://www.scorify.uz/sitemap.xml). A URL is sent only when it is new or its
 * <lastmod> changed since the last submission, tracked in scripts/.indexnow-state.json, so a deploy never resubmits all ~700 pages.
 * URLs without <lastmod> are sent once and then only when --urls names them. Max 10 000 URLs per request (IndexNow limit); we batch at 500.
 * The key file must be served at https://<host>/<key>.txt with the key as its only content: it is checked before submitting.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const STATE = join(here, '.indexnow-state.json');
const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : undefined; };

const HOST = process.env.INDEXNOW_HOST || 'www.scorify.uz';
const SITEMAP = process.env.SITEMAP_URL || `https://${HOST}/sitemap.xml`;
const ENDPOINT = process.env.INDEXNOW_ENDPOINT || 'https://api.indexnow.org/indexnow';
const submit = flag('--submit');

const keyFile = readdirSync(join(here, '..', 'public')).find((f) => /^[0-9a-f]{8,128}\.txt$/i.test(f));
if (!keyFile) throw new Error('No IndexNow key file (public/<key>.txt) found');
const KEY = keyFile.replace(/\.txt$/, '');
if (readFileSync(join(here, '..', 'public', keyFile), 'utf8').trim() !== KEY) throw new Error('Key file content does not match its name');

const state = existsSync(STATE) ? JSON.parse(readFileSync(STATE, 'utf8')) : {};

/** Parses <url><loc>…</loc><lastmod>…</lastmod></url> pairs; hreflang alternates are separate xhtml:link tags and are ignored. */
export function parseSitemap(xml) {
  const out = [];
  for (const m of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = /<loc>([^<]+)<\/loc>/.exec(m[1])?.[1]?.trim();
    if (!loc) continue;
    out.push({ loc: loc.replace(/&amp;/g, '&'), lastmod: /<lastmod>([^<]+)<\/lastmod>/.exec(m[1])?.[1]?.trim() ?? '' });
  }
  return out;
}

/** Pure selection logic (unit tested): which entries still need to be sent. */
export function selectChanged(entries, seen, { all = false, only = null } = {}) {
  const pick = only ? entries.filter((e) => only.includes(new URL(e.loc).pathname)) : entries;
  const seenUrls = new Set();
  return pick.filter((e) => {
    if (seenUrls.has(e.loc)) return false;
    seenUrls.add(e.loc);
    if (all || only) return true;
    const prev = seen[e.loc];
    return prev === undefined || (e.lastmod !== '' && e.lastmod !== prev);
  });
}

async function main() {
  const keyRes = await fetch(`https://${HOST}/${KEY}.txt`).catch(() => null);
  const keyOk = keyRes?.ok && (await keyRes.text()).trim() === KEY;
  console.log(`key file https://${HOST}/${KEY}.txt: ${keyOk ? 'OK' : 'NOT SERVED YET (deploy it before --submit)'}`);

  const xml = await (await fetch(SITEMAP)).text();
  const entries = parseSitemap(xml).filter((e) => new URL(e.loc).host === HOST);
  const only = opt('--urls')?.split(',').map((s) => s.trim()).filter(Boolean) ?? null;
  const todo = selectChanged(entries, state, { all: flag('--all'), only });
  console.log(`sitemap: ${entries.length} URLs, to send: ${todo.length}`);
  todo.slice(0, 20).forEach((e) => console.log('  ', e.loc));
  if (todo.length > 20) console.log(`   … and ${todo.length - 20} more`);
  if (!submit) return console.log('dry run: nothing sent (add --submit to send)');
  if (!keyOk) throw new Error('Refusing to submit: the key file is not reachable on the live host');

  for (let i = 0; i < todo.length; i += 500) {
    const batch = todo.slice(i, i + 500);
    const res = await fetch(ENDPOINT, {
      method: 'POST', headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: batch.map((e) => e.loc) }),
    });
    console.log(`batch ${i / 500 + 1}: HTTP ${res.status}`);
    if (res.status !== 200 && res.status !== 202) throw new Error(`IndexNow rejected the batch (${res.status})`);
    for (const e of batch) state[e.loc] = e.lastmod;
    writeFileSync(STATE, JSON.stringify(state, null, 1));
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main().catch((e) => { console.error(e.message); process.exit(1); });

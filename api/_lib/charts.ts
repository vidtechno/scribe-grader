import type { ChartSpec } from './types.js';
import { esc } from './shell.js';

const COLORS = ['#e80b2d', '#0f172a', '#0d9488', '#f59e0b', '#7c3aed', '#64748b'];
const FONT = 'Inter, Helvetica, Arial, sans-serif';

function niceMax(v: number) {
  const exp = Math.pow(10, Math.floor(Math.log10(v || 1)));
  for (const m of [1, 2, 2.5, 5, 10]) if (v <= m * exp) return m * exp;
  return 10 * exp;
}
const fmt = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1));
const legend = (names: string[], x: number, y: number) =>
  names.map((n, i) => `<g transform="translate(${x + i * 150} ${y})"><rect width="14" height="14" rx="3" fill="${COLORS[i % COLORS.length]}"/><text x="22" y="12" font-size="13" fill="#334155" font-family="${FONT}">${esc(n)}</text></g>`).join('');
const wrapFig = (title: string, body: string, desc: string) =>
  `<figure class="chart" role="img" aria-label="${esc(desc)}"><figcaption>${esc(title)}</figcaption>${body}</figure>`;

function axes(maxY: number, unit: string, W: number, H: number, L: number, T: number, B: number) {
  const plotH = H - T - B; let g = '';
  for (let i = 0; i <= 5; i++) {
    const v = (maxY / 5) * i; const y = T + plotH - (plotH * i) / 5;
    g += `<line x1="${L}" x2="${W - 20}" y1="${y}" y2="${y}" stroke="#e2e8f0"/><text x="${L - 8}" y="${y + 4}" font-size="12" text-anchor="end" fill="#64748b" font-family="${FONT}">${fmt(v)}</text>`;
  }
  return g + `<text x="14" y="${T - 14}" font-size="12" fill="#64748b" font-family="${FONT}">${esc(unit)}</text>`;
}

function line(s: Extract<ChartSpec, { kind: 'line' }>) {
  const W = 760, H = 400, L = 64, T = 34, B = 86; const plotW = W - L - 24, plotH = H - T - B;
  const maxY = niceMax(Math.max(...s.series.flatMap(x => x.values)));
  const px = (i: number) => L + (plotW * i) / Math.max(1, s.xLabels.length - 1);
  const py = (v: number) => T + plotH - (plotH * v) / maxY;
  let g = axes(maxY, s.unit, W, H, L, T, B);
  s.xLabels.forEach((x, i) => { g += `<text x="${px(i)}" y="${H - B + 22}" font-size="12" text-anchor="middle" fill="#64748b" font-family="${FONT}">${esc(x)}</text>`; });
  s.series.forEach((se, si) => {
    const c = COLORS[si % COLORS.length];
    g += `<polyline fill="none" stroke="${c}" stroke-width="3" stroke-linejoin="round" points="${se.values.map((v, i) => `${px(i)},${py(v)}`).join(' ')}"/>` + se.values.map((v, i) => `<circle cx="${px(i)}" cy="${py(v)}" r="4" fill="${c}"/>`).join('');
  });
  g += legend(s.series.map(x => x.name), L, H - 26);
  const desc = `${s.title}. ${s.series.map(se => `${se.name}: ${se.values.join(', ')}`).join('; ')}.`;
  return wrapFig(s.title, `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">${g}</svg>`, desc);
}

function bar(s: Extract<ChartSpec, { kind: 'bar' }>) {
  const W = 760, H = 400, L = 64, T = 34, B = 86; const plotW = W - L - 24, plotH = H - T - B;
  const maxY = niceMax(Math.max(...s.series.flatMap(x => x.values)));
  const groupW = plotW / s.categories.length; const barW = Math.min(46, (groupW * 0.72) / s.series.length);
  let g = axes(maxY, s.unit, W, H, L, T, B);
  s.categories.forEach((c, ci) => {
    const gx = L + ci * groupW + (groupW - barW * s.series.length) / 2;
    s.series.forEach((se, si) => {
      const h = (plotH * se.values[ci]) / maxY;
      g += `<rect x="${gx + si * barW}" y="${T + plotH - h}" width="${barW - 3}" height="${h}" rx="3" fill="${COLORS[si % COLORS.length]}"/>`;
      g += `<text x="${gx + si * barW + (barW - 3) / 2}" y="${T + plotH - h - 6}" font-size="11" text-anchor="middle" fill="#334155" font-family="${FONT}">${fmt(se.values[ci])}</text>`;
    });
    g += `<text x="${L + ci * groupW + groupW / 2}" y="${H - B + 22}" font-size="12" text-anchor="middle" fill="#64748b" font-family="${FONT}">${esc(c)}</text>`;
  });
  g += legend(s.series.map(x => x.name), L, H - 26);
  const desc = `${s.title}. ${s.categories.map((c, i) => `${c}: ${s.series.map(se => `${se.name} ${se.values[i]}`).join(', ')}`).join('; ')}.`;
  return wrapFig(s.title, `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">${g}</svg>`, desc);
}

function pie(s: Extract<ChartSpec, { kind: 'pie' }>) {
  const n = s.pies.length; const W = 760, H = 330; const R = 105;
  let g = '';
  s.pies.forEach((p, pi) => {
    const cx = (W / (n + 1)) * (pi + 1) - (n === 1 ? 100 : 0), cy = 150; const total = p.slices.reduce((a, b) => a + b.value, 0);
    let a0 = -Math.PI / 2;
    p.slices.forEach((sl, i) => {
      const a1 = a0 + (2 * Math.PI * sl.value) / total; const large = a1 - a0 > Math.PI ? 1 : 0;
      const x0 = cx + R * Math.cos(a0), y0 = cy + R * Math.sin(a0), x1 = cx + R * Math.cos(a1), y1 = cy + R * Math.sin(a1);
      g += `<path d="M${cx} ${cy} L${x0} ${y0} A${R} ${R} 0 ${large} 1 ${x1} ${y1} Z" fill="${COLORS[i % COLORS.length]}" stroke="#fff" stroke-width="2"/>`;
      const am = (a0 + a1) / 2; g += `<text x="${cx + R * 0.62 * Math.cos(am)}" y="${cy + R * 0.62 * Math.sin(am) + 4}" font-size="12" font-weight="700" text-anchor="middle" fill="#fff" font-family="${FONT}">${fmt(sl.value)}%</text>`;
      a0 = a1;
    });
    g += `<text x="${cx}" y="${cy + R + 30}" font-size="14" font-weight="700" text-anchor="middle" fill="#0f172a" font-family="${FONT}">${esc(p.label)}</text>`;
  });
  g += legend(s.pies[0].slices.map(x => x.label), 40, H - 8).replace(/translate\((\d+) (\d+)\)/g, (_m, x, y) => `translate(${x} ${y})`);
  const desc = `${s.title}. ${s.pies.map(p => `${p.label}: ${p.slices.map(x => `${x.label} ${x.value}%`).join(', ')}`).join('; ')}.`;
  return wrapFig(s.title, `<svg viewBox="0 0 ${W} ${H + 10}" xmlns="http://www.w3.org/2000/svg">${g}</svg>`, desc);
}

function table(s: Extract<ChartSpec, { kind: 'table' }>) {
  const body = `<div class="table-scroll"><table class="data"><thead><tr>${s.headers.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${s.rows.map(r => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`)).join('')}</tr>`).join('')}</tbody></table></div>`;
  return `<figure class="chart"><figcaption>${esc(s.title)}</figcaption>${body}</figure>`;
}

function process(s: Extract<ChartSpec, { kind: 'process' }>) {
  const perRow = 3, bw = 200, bh = 74, gap = 52, W = 760; const rows = Math.ceil(s.steps.length / perRow); const H = rows * (bh + 46) + 10;
  let g = `<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#e80b2d"/></marker></defs>`;
  s.steps.forEach((st, i) => {
    const r = Math.floor(i / perRow), c = i % perRow; const x = 28 + c * (bw + gap), y = 10 + r * (bh + 46);
    g += `<rect x="${x}" y="${y}" width="${bw}" height="${bh}" rx="14" fill="#fff1f3" stroke="#ffd0d8" stroke-width="2"/><text x="${x + 18}" y="${y + 28}" font-size="13" font-weight="800" fill="#e80b2d" font-family="${FONT}">STAGE ${i + 1}</text>`;
    const words = st.split(' '); const lines: string[] = []; let cur = '';
    for (const w of words) { if ((cur + ' ' + w).trim().length > 24) { lines.push(cur); cur = w; } else cur = (cur + ' ' + w).trim(); } if (cur) lines.push(cur);
    lines.slice(0, 2).forEach((l, li) => { g += `<text x="${x + 18}" y="${y + 50 + li * 16}" font-size="13" fill="#0f172a" font-family="${FONT}">${esc(l)}</text>`; });
    if (c < perRow - 1 && i < s.steps.length - 1) g += `<line x1="${x + bw + 6}" y1="${y + bh / 2}" x2="${x + bw + gap - 6}" y2="${y + bh / 2}" stroke="#e80b2d" stroke-width="3" marker-end="url(#ar)"/>`;
    if (c === perRow - 1 && i < s.steps.length - 1) g += `<path d="M${x + bw / 2} ${y + bh + 4} L${x + bw / 2} ${y + bh + 18} L${28 + bw / 2} ${y + bh + 18} L${28 + bw / 2} ${y + bh + 40}" fill="none" stroke="#e80b2d" stroke-width="3" marker-end="url(#ar)"/>`;
  });
  return wrapFig(s.title, `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">${g}</svg>`, `${s.title}: ${s.steps.join(' then ')}.`);
}

export function renderChart(s: ChartSpec): string {
  switch (s.kind) {
    case 'line': return line(s);
    case 'bar': return bar(s);
    case 'pie': return pie(s);
    case 'table': return table(s);
    case 'process': return process(s);
  }
}

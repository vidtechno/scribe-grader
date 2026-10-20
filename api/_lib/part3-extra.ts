import { esc } from './shell.js';
import type { Part1Topic } from './types.js';

/** Extra sections of a Speaking Part 1/3 topic page (development steps, more follow-up questions, common mistakes). Empty when the topic has none. */
export function part3Extra(t: Part1Topic): string {
  return (t.extra ?? []).map(x => `<section class="section" id="${esc(x.id)}"><h2>${esc(x.h2)}</h2>${(x.p ?? []).map(p => `<p>${esc(p)}</p>`).join('')}${x.steps ? `<ol class="steps">${x.steps.map(([l, s]) => `<li><strong>${esc(l)}.</strong> ${esc(s)}</li>`).join('')}</ol>` : ''}${x.quote ? `<blockquote><p>${esc(x.quote)}</p></blockquote>` : ''}${(x.qa ?? []).map(q => `<div class="qa"><h3>${esc(q.q)}</h3><p>${esc(q.a)}</p></div>`).join('')}${x.list ? `<ul>${x.list.map(i => `<li>${esc(i)}</li>`).join('')}</ul>` : ''}</section>`).join('\n');
}

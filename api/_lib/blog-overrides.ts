// Code overrides for blog articles that live in the production database (or in the static data files) and need better titles,
// snippets or extra sections. The database is never touched: getPost/listPosts pass every post through applyOverride().
//
// Usage (the lead wires it):
//   posts.ts   getPost():   return post ? applyOverride(post) : null        (the Post from DB or static data)
//   posts.ts   listPosts(): rows.map(applyOverride)                        (title / excerpt / cover_alt only; list rows have no content)
//   blog.ts    renderPost(): after enhance(post.content_html), append  needsTimerScript(html) ? TIMER_SCRIPT : ''  to the page body.
//              (enhance() strips <script> from article HTML on purpose; the timer script is a fixed constant owned by this module.)
//
// An override can change: title, excerpt, seo_title, seo_description, cover_alt, updated_at, and the article HTML, either replaced as a
// whole (content_html) or edited with insertions (insertAtStart, insertAfterIntro, insertions[{before|after, html}], insertBeforeEnd).
// applyOverride is pure and idempotent: an applied article starts with an <!--ov:slug--> comment and is never edited twice.
import {
  GRAPH_PRACTICE, GRAPH_WORKED, PART2_ANSWER, PART2_TIMER, SCORED_ARTICLE, TIMER_SCRIPT,
  UZ_T1_MODEL_SECTION, UZ_T1_PRACTICE, UZ_T2_ANALYSIS, UZ_T2_PRACTICE,
} from './blog-override-content.js';

export { TIMER_SCRIPT };

/** The fields of a Post (or of a list row, which has no content/SEO fields) that an override may touch. */
export type OverridablePost = {
  slug: string; title: string; excerpt: string | null; cover_alt?: string | null; seo_title?: string | null; seo_description?: string | null;
  content_html?: string; updated_at?: string;
};

export type Insertion = { before?: string; after?: string; html: string };
export type Override = {
  title?: string; excerpt?: string; seo_title?: string; seo_description?: string; cover_alt?: string; updated_at?: string;
  /** Replaces the whole article body. Applied before the insertions. */
  content_html?: string;
  insertAtStart?: string;
  /** Inserted after the first paragraph. */
  insertAfterIntro?: string;
  /** Inserted before (or after) the first occurrence of the given text, normally a heading such as '<h2>Frequently asked questions</h2>'. A missing marker appends the HTML at the end instead of losing it. */
  insertions?: Insertion[];
  insertBeforeEnd?: string;
};

const MODIFIED = '2026-10-20T00:00:00.000Z';

export const OVERRIDES: Record<string, Override> = {
  // ---- English: graph description (DB post)
  'ielts-writing-task-1-how-to-describe-a-graph': {
    title: 'How to Describe a Graph in IELTS Writing Task 1 (Model Overview + Practice)',
    seo_title: 'How to Describe a Graph in IELTS Writing Task 1: Model + Practice',
    seo_description: 'Describe an IELTS Task 1 line graph step by step: a worked example with a model report, how to choose which numbers to mention, and a practice task with a sample answer.',
    excerpt: 'A 20-minute method for Task 1, a worked line graph with a model report, advice on choosing numbers and a practice task with a sample answer.',
    updated_at: MODIFIED,
    insertions: [
      { before: '<h2>The language of change</h2>', html: GRAPH_WORKED },
      { before: '<h2>Frequently asked questions</h2>', html: GRAPH_PRACTICE },
    ],
  },

  // ---- Uzbek: Task 1 (DB post)
  'ielts-writing-task-1-qanday-yoziladi': {
    title: 'IELTS Writing Task 1 qanday yoziladi? Reja, namuna hisobot va tahlil',
    seo_title: 'IELTS Writing Task 1 qanday yoziladi? Reja, namuna va tahlil',
    seo_description: 'IELTS Academic Task 1 ni 20 daqiqada yozish: reja, namuna hisobot va uning to‘rt mezon bo‘yicha tahlili, mashq topshirig‘i va tayyor iboralar. O‘zbek tilida.',
    excerpt: 'Task 1 ni 20 daqiqada yozish usuli: reja, namuna hisobot va uning tahlili, diagramma turlari uchun iboralar va mashq topshirig‘i.',
    updated_at: MODIFIED,
    insertions: [
      { before: '<h2>Diagramma turlari va ularga mos iboralar</h2>', html: UZ_T1_MODEL_SECTION },
      { before: '<h2>Haqiqiy diagrammalar bilan mashq qiling</h2>', html: UZ_T1_PRACTICE },
    ],
  },

  // ---- Uzbek: Task 2 (DB post)
  'ielts-writing-task-2-qanday-yoziladi': {
    title: 'IELTS Writing Task 2 qanday yoziladi? Reja, namuna insho va tahlil',
    seo_title: 'IELTS Writing Task 2 qanday yoziladi? Reja, namuna va tahlil',
    seo_description: 'IELTS Writing Task 2 ni 40 daqiqada yozish: reja, insho turlari, namuna insho va uning to‘rt mezon bo‘yicha tahlili, mashq topshirig‘i. O‘zbek tilida.',
    excerpt: 'Task 2 ni aniq tuzilma bilan yozing: reja, kirish, asosiy paragraflar, xulosa, namuna insho va uning tahlili, mashq topshirig‘i.',
    updated_at: MODIFIED,
    insertions: [
      { before: '<h2>Eng ko‘p uchraydigan 7 ta xato</h2>', html: UZ_T2_ANALYSIS },
      { before: '<h2>Mashq qiling va natijani o‘lchang</h2>', html: UZ_T2_PRACTICE },
    ],
  },

  // ---- English: how scoring works (static post: the whole body is replaced)
  'how-ielts-speaking-and-writing-are-scored': {
    title: 'How Is IELTS Scored in Speaking and Writing? Criteria, Weighting and Rounding',
    seo_title: 'How Is IELTS Scored in Speaking and Writing? Criteria and Bands',
    seo_description: 'IELTS Speaking is scored on four equal criteria; Writing on four criteria per task, with Task 2 counting more than Task 1. See the criteria tables and how the overall band is rounded.',
    excerpt: 'The short answer first, then the Speaking and Writing criteria tables, how Task 1 and Task 2 combine and how the overall band is rounded.',
    updated_at: MODIFIED,
    content_html: SCORED_ARTICLE,
  },

  // ---- English: Speaking Part 2 length (DB post)
  'ielts-speaking-part-2-how-to-speak-for-two-minutes': {
    title: 'IELTS Speaking Part 2: How Many Minutes to Speak (With a Practice Timer)',
    seo_title: 'IELTS Speaking Part 2: How Many Minutes? 1 to Prepare, 1–2 to Speak',
    seo_description: 'IELTS Speaking Part 2 gives you 1 minute to prepare and 1–2 minutes to speak; the examiner stops you at 2 minutes. Use the practice timer, a four-step structure and a model answer.',
    excerpt: 'How long Part 2 lasts (1 minute to prepare, 1–2 minutes to speak), a practice timer, a four-step structure and a model answer.',
    updated_at: MODIFIED,
    insertAtStart: PART2_ANSWER,
    insertions: [{ before: '<h2>The two-minute plan</h2>', html: PART2_TIMER }],
  },
};

const marker = (slug: string) => `<!--ov:${slug}-->`;

function insert(html: string, ins: Insertion): string {
  if (ins.before !== undefined) { const i = html.indexOf(ins.before); if (i >= 0) return html.slice(0, i) + ins.html + html.slice(i); }
  if (ins.after !== undefined) { const i = html.indexOf(ins.after); if (i >= 0) return html.slice(0, i + ins.after.length) + ins.html + html.slice(i + ins.after.length); }
  return html + ins.html;
}

/** Applies the override for post.slug, if any. Returns the same object when there is nothing to do. */
export function applyOverride<T extends OverridablePost>(post: T): T {
  const o = OVERRIDES[post.slug];
  if (!o) return post;
  if (post.content_html !== undefined && post.content_html.startsWith(marker(post.slug))) return post;
  const out: T = { ...post, title: o.title ?? post.title, excerpt: o.excerpt ?? post.excerpt };
  if ('cover_alt' in post || o.cover_alt) out.cover_alt = o.cover_alt ?? post.cover_alt ?? null;
  if (post.content_html !== undefined) {
    out.seo_title = o.seo_title ?? post.seo_title ?? null;
    out.seo_description = o.seo_description ?? post.seo_description ?? null;
    let html = o.content_html ?? post.content_html;
    if (o.insertAtStart) html = o.insertAtStart + html;
    if (o.insertAfterIntro) { const i = html.indexOf('</p>'); html = i >= 0 ? html.slice(0, i + 4) + o.insertAfterIntro + html.slice(i + 4) : html + o.insertAfterIntro; }
    for (const ins of o.insertions ?? []) html = insert(html, ins);
    if (o.insertBeforeEnd) html += o.insertBeforeEnd;
    out.content_html = marker(post.slug) + html;
  }
  if (o.updated_at && 'updated_at' in post && post.updated_at && +new Date(post.updated_at) < +new Date(o.updated_at)) out.updated_at = o.updated_at;
  return out;
}

/** True when the article HTML contains the practice timer, so the renderer must append TIMER_SCRIPT. */
export const needsTimerScript = (html: string): boolean => html.includes('data-ielts-timer');

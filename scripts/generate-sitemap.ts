// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://www.scorify.uz";

interface SitemapEntry {
  path: string;
  priority: string;
  changefreq: 'weekly' | 'monthly';
}

// Only public, indexable routes. Authenticated app routes are excluded.
const entries: SitemapEntry[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/ielts-writing-task-1", priority: "0.9", changefreq: "monthly" },
  { path: "/ielts-writing-task-2", priority: "0.9", changefreq: "monthly" },
  { path: "/ielts-speaking-practice", priority: "0.9", changefreq: "monthly" },
  { path: "/blog/computer-based-ielts-writing", priority: "0.8", changefreq: "monthly" },
];

function generateSitemap(list: SitemapEntry[]) {
  const urls = list.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      `    <changefreq>${e.changefreq}</changefreq>`,
      `    <priority>${e.priority}</priority>`,
      `  </url>`,
    ].filter(Boolean).join("\n"),
  );
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);

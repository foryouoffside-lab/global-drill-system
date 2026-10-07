import { readFileSync, writeFileSync } from 'node:fs';

const [, , origin = 'http://localhost:3100', out = 'english-prose-leak.csv'] = process.argv;
const CONCURRENCY = Number(process.env.CONCURRENCY || 6);
const LOCALE = /^\/(ko|ja|de|pt|es|fr)(\/|$)/;
const STRONG = new Set(['the', 'and', 'of', 'with', 'your', 'you', 'this', 'that', 'are', 'from', 'is', 'for', 'to']);
const CITATION = /Journal|Frontiers|University|Psychological Review|Neuroscience|Behavioral|Neurophysiology|Press|Review of|Proceedings|Nature|Science|Trends in|Vision Research|Over de snelheid/;

const sourceStrings = new Set(
  [...readFileSync('lib/drillSources.js', 'utf8').matchAll(/(?:title|venue|authors):\s*(["'`])((?:\\.|(?!\1).)*)\1/g)].map((m) =>
    m[2].replace(/\\'/g, "'").replace(/&/g, '&amp;').slice(0, 70)
  )
);

const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => new URL(m[1]).pathname.replace(/\/+$/, '') || '/')
  .filter((p) => LOCALE.test(p));

const isEnglishProse = (t) => {
  const words = t.toLowerCase().split(/[^a-z']+/).filter(Boolean);
  return (
    words.length >= 7 &&
    words.filter((w) => STRONG.has(w)).length >= 3 &&
    !sourceStrings.has(t.slice(0, 70)) &&
    !CITATION.test(t) &&
    t !== 'This will just take a moment'
  );
};

const rows = [];
let next = 0;
async function worker() {
  while (next < paths.length) {
    const path = paths[next++];
    const html = await (await fetch(origin + path)).text();
    const body = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ');
    const nodes = [...body.matchAll(/>([^<>]{18,})</g)]
      .map((m) => m[1].replace(/\s+/g, ' ').trim())
      .filter((t) => /^[\x20-\x7e&;#]+$/.test(t))
      .filter(isEnglishProse);
    if (nodes.length) rows.push({ path, n: nodes.length, first: nodes[0].slice(0, 90) });
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

rows.sort((a, b) => b.n - a.n || a.path.localeCompare(b.path));
const q = (s) => `"${s.replace(/"/g, '""')}"`;
writeFileSync(out, ['path,english_nodes,first_node', ...rows.map((r) => `${r.path},${r.n},${q(r.first)}`)].join('\n') + '\n');
process.stdout.write(`checked ${paths.length} localized pages; ${rows.length} contain English prose\n`);

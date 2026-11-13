import { execFileSync } from 'node:child_process';
import { readdirSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../..', import.meta.url));
const appDir = join(root, 'app');
const map = {};

const walk = (dir) => {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = entries.filter((e) => e.isFile()).map((e) => join(dir, e.name));
  if (entries.some((e) => e.isFile() && /^page\.(js|jsx|ts|tsx)$/.test(e.name))) {
    const date = execFileSync('git', ['log', '-1', '--format=%cs', '--', ...files.map((f) => relative(root, f))], { cwd: root, encoding: 'utf8' }).trim();
    const route = '/' + relative(appDir, dir).split(/[\\/]/).filter(Boolean).join('/');
    if (date) map[route] = date;
  }
  for (const e of entries) if (e.isDirectory()) walk(join(dir, e.name));
};

walk(appDir);
const sorted = Object.fromEntries(Object.entries(map).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync(join(root, 'lib', 'sitemapLastmod.json'), JSON.stringify(sorted, null, 2) + '\n');
console.log(`${Object.keys(sorted).length} routes`);

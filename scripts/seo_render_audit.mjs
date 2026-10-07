import { writeFileSync, readFileSync } from 'node:fs';

const BASE = 'https://skilldrills.online';
const [, , origin = 'http://localhost:3100', out = 'seo-render-audit.json', only = ''] = process.argv;
const CONCURRENCY = Number(process.env.CONCURRENCY || 6);

const EN_STOP = new Set(['the', 'and', 'with', 'your', 'you', 'for', 'this', 'that', 'are', 'from', 'how', 'what', 'is', 'of', 'to', 'in']);

const decode = (s) =>
  s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');

const norm = (s) => decode(s).replace(/\s+/g, ' ').trim();
const tag = (html, re) => (html.match(re) || [])[1];
const attr = (t, name) => (t.match(new RegExp(`${name}="([^"]*)"`, 'i')) || [])[1];
const pathOf = (u) => {
  try {
    const p = new URL(u, BASE).pathname.replace(/\/+$/, '');
    return p || '/';
  } catch {
    return u;
  }
};
const localeOf = (p) => (p.match(/^\/(ko|ja|de|pt|es|fr)(\/|$)/) || [])[1] || 'en';

async function loadUrls() {
  if (only) return only.split(',').map((u) => u.trim());
  const xml = await (await fetch(`${origin}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => pathOf(m[1]));
}

async function fetchPage(path) {
  const res = await fetch(origin + path, { redirect: 'manual' });
  const status = res.status;
  const location = res.headers.get('location');
  const html = status === 200 ? await res.text() : '';
  return { status, location, html };
}

function analyse(path, { status, location, html }) {
  const row = { path, locale: localeOf(path), status, redirect: location || null };
  if (status !== 200) return row;

  const title = norm(tag(html, /<title[^>]*>([\s\S]*?)<\/title>/i) || '');
  const descTag = html.match(/<meta[^>]*name="description"[^>]*>/i);
  const desc = descTag ? norm(attr(descTag[0], 'content') || '') : '';
  const robotsTag = html.match(/<meta[^>]*name="robots"[^>]*>/i);
  const canonTag = html.match(/<link[^>]*rel="canonical"[^>]*>/i);
  const alts = [...html.matchAll(/<link[^>]*rel="alternate"[^>]*hreflang="([^"]+)"[^>]*>/gi)].map((m) => ({
    lang: m[1],
    href: attr(m[0], 'href'),
  }));
  const body = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<noscript[\s\S]*?<\/noscript>/gi, ' ');
  const text = norm(body.replace(/<[^>]+>/g, ' '));
  const h1s = [...body.matchAll(/<h1[\s>][\s\S]*?<\/h1>/gi)].map((m) => norm(m[0].replace(/<[^>]+>/g, ' ')));
  const h2s = [...body.matchAll(/<h2[\s>][\s\S]*?<\/h2>/gi)].map((m) => norm(m[0].replace(/<[^>]+>/g, ' ')));

  const ld = [];
  const ldErrors = [];
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const j = JSON.parse(decode(m[1]));
      for (const n of Array.isArray(j) ? j : j['@graph'] || [j]) ld.push(n);
    } catch (e) {
      ldErrors.push(e.message);
    }
  }
  const types = ld.flatMap((n) => [].concat(n['@type'] || []));
  const faqQs = ld
    .filter((n) => [].concat(n['@type'] || []).includes('FAQPage'))
    .flatMap((n) => n.mainEntity || [])
    .map((q) => ({ q: norm(q.name || ''), a: norm((q.acceptedAnswer && q.acceptedAnswer.text) || '').replace(/<[^>]+>/g, '') }));
  const missingQ = faqQs.filter((f) => f.q && !text.includes(f.q)).length;
  const missingA = faqQs.filter((f) => f.a && !text.includes(f.a.slice(0, 40))).length;
  const jsonLd = JSON.stringify(ld);
  const words = text.toLowerCase().split(/[^a-zà-ÿ']+/).filter(Boolean);
  const enHits = words.filter((w) => EN_STOP.has(w)).length;

  const ldStrings = [];
  const collect = (v, k) => {
    if (typeof v === 'string') {
      if (!/^(@type|@context|url|item|@id|sameAs|inLanguage|dateModified|datePublished|image|logo)$/.test(k || '')) ldStrings.push(v);
    } else if (Array.isArray(v)) v.forEach((x) => collect(x, k));
    else if (v && typeof v === 'object') Object.entries(v).forEach(([kk, vv]) => collect(vv, kk));
  };
  collect(ld);
  const ldWords = ldStrings.join(' ').toLowerCase().split(/[^a-zà-ÿ']+/).filter(Boolean);
  const ldEnHits = ldWords.filter((w) => EN_STOP.has(w)).length;
  const crumbs = ld.filter((n) => [].concat(n['@type'] || []).includes('BreadcrumbList')).flatMap((n) => (n.itemListElement || []).map((i) => i.name));
  const ogTitle = (html.match(/<meta[^>]*property="og:title"[^>]*>/i) || [])[0];
  const ogDesc = (html.match(/<meta[^>]*property="og:description"[^>]*>/i) || [])[0];
  const ogLocale = (html.match(/<meta[^>]*property="og:locale"[^>]*>/i) || [])[0];

  const links = [...body.matchAll(/<a\s[^>]*href="([^"]+)"/gi)]
    .map((m) => m[1])
    .filter((h) => h.startsWith('/') || h.startsWith(BASE))
    .map(pathOf);
  const own = path;
  const placeholders = faqQs.filter((f) => /\bQ\s?\d{1,2}\b/.test(f.q)).length;

  return {
    ...row,
    htmlLang: tag(html, /<html[^>]*lang="([^"]+)"/i) || null,
    title,
    titleLen: [...title].length,
    desc,
    descLen: [...desc].length,
    robots: robotsTag ? attr(robotsTag[0], 'content') : null,
    canonical: canonTag ? attr(canonTag[0], 'href') : null,
    canonicalSelf: canonTag ? pathOf(attr(canonTag[0], 'href')) === own : false,
    alts,
    h1: h1s.length,
    h1Text: h1s[0] || '',
    h2: h2s.length,
    h2Text: h2s,
    enStopRatio: words.length ? Number((enHits / words.length).toFixed(4)) : 0,
    words: text.split(' ').filter(Boolean).length,
    ldTypes: types,
    ldErrors,
    faqSchema: faqQs.length,
    faqMissingQ: missingQ,
    faqMissingA: missingA,
    placeholders,
    ldEnRatio: ldWords.length ? Number((ldEnHits / ldWords.length).toFixed(4)) : 0,
    crumbs,
    ogTitle: ogTitle ? attr(ogTitle, 'content') : null,
    ogDesc: ogDesc ? attr(ogDesc, 'content') : null,
    ogLocale: ogLocale ? attr(ogLocale, 'content') : null,
    aggregateRating: /aggregateRating/i.test(jsonLd) || /aggregateRating/i.test(html),
    subMs: /sub-?millisecond/i.test(text) || /sub-?millisecond/i.test(jsonLd),
    links: [...new Set(links.filter((l) => l !== own))],
    nonLocaleLinks:
      localeOf(own) === 'en'
        ? 0
        : [...new Set(links)].filter((l) => localeOf(l) === 'en' && l.startsWith('/drills')).length,
  };
}

function crossChecks(rows) {
  const ok = rows.filter((r) => r.status === 200);
  const byPath = new Map(ok.map((r) => [r.path, r]));
  const dupT = new Map();
  const dupD = new Map();
  const inbound = new Map();
  for (const r of ok) {
    dupT.set(r.title, (dupT.get(r.title) || 0) + 1);
    dupD.set(r.desc, (dupD.get(r.desc) || 0) + 1);
    for (const l of r.links) inbound.set(l, (inbound.get(l) || 0) + 1);
  }
  for (const r of ok) {
    r.dupTitle = dupT.get(r.title) > 1;
    r.dupDesc = r.desc && dupD.get(r.desc) > 1;
    r.inbound = inbound.get(r.path) || 0;
    const self = r.alts.find((a) => pathOf(a.href) === r.path);
    r.hreflangSelf = Boolean(self);
    r.hreflangDefault = r.alts.some((a) => a.lang === 'x-default');
    const recip = [];
    for (const a of r.alts) {
      const p = pathOf(a.href);
      const t = byPath.get(p);
      if (!t) {
        recip.push(`${a.lang}:uncrawled`);
        continue;
      }
      if (!t.alts.some((b) => pathOf(b.href) === r.path)) recip.push(`${a.lang}:no-return`);
    }
    r.hreflangIssues = recip;
  }
  return rows;
}

const urls = await loadUrls();
const rows = process.env.MERGE
  ? JSON.parse(readFileSync(out, 'utf8')).filter((r) => r.status === 200 && !urls.includes(r.path))
  : [];
let i = 0;
async function worker() {
  while (i < urls.length) {
    const path = urls[i++];
    try {
      rows.push(analyse(path, await fetchPage(path)));
    } catch (e) {
      rows.push({ path, locale: localeOf(path), status: 0, error: e.message });
    }
    if (i % 25 === 0) process.stderr.write(`${i}/${urls.length}\n`);
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));
rows.sort((a, b) => a.path.localeCompare(b.path));
crossChecks(rows);
writeFileSync(out, JSON.stringify(rows, null, 1));
const bad = rows.filter((r) => r.status !== 200);
process.stdout.write(`audited ${rows.length}; non-200: ${bad.length}\n`);

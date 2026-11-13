const fs = require('fs');
const rs = fs.readFileSync(__dirname + '/results.jsonl', 'utf8').split('\n').filter(Boolean).map(JSON.parse);
const B = 'https://skilldrills.online';
const THIRD = /googletagmanager|google-analytics|doubleclick|googlesyndication|adsbygoogle|vercel-insights|_vercel\/(insights|speed-insights)|clarity\.ms|facebook|hotjar/i;
const g = {};
const add = (k, p, d) => { (g[k] = g[k] || []).push(d ? p + ' :: ' + d : p); };
let drills = 0, started = 0;
for (const r of rs) {
  const p = r.path;
  if (r.navError) add('navError', p, r.navError);
  if (r.status !== 200) add('status!=200', p, r.status + ' final=' + r.finalUrl);
  if (r.finalUrl && r.finalUrl.replace(/\/$/, '') !== p.replace(/\/$/, '')) add('redirected', p, r.finalUrl);
  if (r.h1 !== 1) add('h1!=1', p, r.h1 + ' ' + JSON.stringify(r.h1Text));
  if (!r.title) add('noTitle', p);
  const canon = (r.canonical || '').replace(/\/$/, ''), self = (B + p).replace(/\/$/, '');
  if (canon !== self) add('canonicalNotSelf', p, r.canonical);
  if (r.canonicalCount > 1) add('multiCanonical', p, r.canonicalCount);
  if (!r.hreflang || !r.hreflang.length) add('noHreflang', p);
  else if (!r.hreflang.some(h => h.startsWith('x-default='))) add('noXDefault', p);
  else if (!r.hreflang.some(h => h.split('=').slice(1).join('=').replace(/\/$/, '') === self)) add('hreflangMissingSelf', p);
  if (r.scrollWidth > 391) add('overflow390', p, r.scrollWidth + ' ' + JSON.stringify(r.wideEls));
  for (const i of r.badImgs || []) add('brokenImg', p, i);
  for (const f of r.failedReqs || []) if (!THIRD.test(f) && !/net::ERR_ABORTED/.test(f)) add('failedReq', p, f);
  for (const e of r.pageErrors) add('pageerror: ' + e.slice(0, 90), p);
  for (const e of r.consoleErrors) if (!THIRD.test(e)) add('console: ' + e.slice(0, 110), p);
  if (r.drill) { drills++; if (r.startClicked) started++; else add('noStartButton', p, JSON.stringify(r.visibleButtons)); }
  for (const e of r.startErrors) if (!THIRD.test(e)) add('afterStart: ' + e.slice(0, 110), p);
}
console.log(JSON.stringify({ pages: rs.length, drills, started, ok200: rs.filter(r => r.status === 200).length }));
for (const [k, v] of Object.entries(g).sort((a, b) => b[1].length - a[1].length)) { console.log('\n### ' + k + ' (' + v.length + ')'); for (const x of v.slice(0, 200)) console.log('  ' + x); }

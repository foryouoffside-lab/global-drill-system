const { chromium } = require(process.argv[2] + '/node_modules/playwright');
const fs = require('fs');
const path = require('path');
const DIR = __dirname;
const BASE = 'https://skilldrills.online';
const paths = fs.readFileSync(path.join(DIR, 'urls.txt'), 'utf8').split(/\r?\n/).filter(Boolean).map(u => u.replace(BASE, '') || '/');
const OUT = path.join(DIR, 'results.jsonl');
const done = new Set();
if (fs.existsSync(OUT)) for (const l of fs.readFileSync(OUT, 'utf8').split('\n').filter(Boolean)) done.add(JSON.parse(l).path);
const todo = paths.filter(p => !done.has(p));
const isDrill = p => /^(\/(pt|es|ja|ko|de|fr))?\/drills\/[^/]+\/[^/]+/.test(p);
const NOISE = /pointer ?lock|requestPointerLock|PointerLock|WrongDocumentError|Download the React|chrome-extension:\/\//i;
const START = /(start|시작|開始|スタート|starten|démarrer|commencer|iniciar|comenzar|empezar|começar|lancer|jouer)/iu;
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function visit(browser, p) {
  const r = { path: p, drill: isDrill(p), attempts: 0, pageErrors: [], consoleErrors: [], startErrors: [], badImgs: [], failedReqs: [] };
  for (let a = 1; a <= 3; a++) {
    r.attempts = a;
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await ctx.newPage();
    const pe = [], ce = [], fr = [];
    let phase = 'load';
    page.on('pageerror', e => { const m = String(e && e.message || e).slice(0, 400); if (!NOISE.test(m)) (phase === 'start' ? r.startErrors : pe).push(m); });
    page.on('console', m => { if (m.type() !== 'error') return; const t = m.text().slice(0, 400); if (NOISE.test(t)) return; (phase === 'start' ? r.startErrors : ce).push('console: ' + t + (m.location() && m.location().url ? ' @' + m.location().url.slice(0, 120) : '')); });
    page.on('response', res => { const s = res.status(); if (s >= 400) fr.push(s + ' ' + res.request().resourceType() + ' ' + res.url().slice(0, 200)); });
    page.on('requestfailed', rq => { const f = rq.failure(); fr.push('FAIL ' + rq.resourceType() + ' ' + rq.url().slice(0, 200) + ' ' + (f ? f.errorText : '')); });
    try {
      const cb = a === 1 ? (p.includes('?') ? '&' : '?') + 'cb=' + Math.random().toString(36).slice(2, 9) : '';
      const resp = await page.goto(BASE + p + cb, { waitUntil: 'load', timeout: 60000 });
      r.status = resp ? resp.status() : null;
      r.finalUrl = page.url().replace(BASE, '').replace(/[?&]cb=[a-z0-9]+/, '');
      if ((r.status >= 500 || r.status === 404) && a < 3) { await ctx.close(); await sleep(4000); continue; }
      await sleep(2000);
      Object.assign(r, await page.evaluate(() => ({
        h1: document.querySelectorAll('h1').length,
        h1Text: [...document.querySelectorAll('h1')].map(h => h.innerText.trim().slice(0, 80)),
        title: (document.title || '').trim(),
        titleCount: document.querySelectorAll('head title').length,
        lang: document.documentElement.getAttribute('lang'),
        canonical: (document.querySelector('link[rel=canonical]') || {}).href || null,
        canonicalCount: document.querySelectorAll('link[rel=canonical]').length,
        hreflang: [...document.querySelectorAll('link[rel=alternate][hreflang]')].map(l => l.getAttribute('hreflang') + '=' + l.href),
        scrollWidth: document.documentElement.scrollWidth,
        bodyScrollWidth: document.body ? document.body.scrollWidth : 0,
        wideEls: (() => { const o = []; for (const el of document.querySelectorAll('body *')) { const b = el.getBoundingClientRect(); if (b.right > window.innerWidth + 1 && b.width > 0 && getComputedStyle(el).position !== 'fixed') { o.push((el.tagName + '.' + (el.className && el.className.baseVal === undefined ? String(el.className) : '')).slice(0, 100) + ' r=' + Math.round(b.right)); if (o.length >= 5) break; } } return o; })(),
        brokenImgs: [...document.images].filter(i => i.complete && i.naturalWidth === 0 && i.getAttribute('src') && i.loading !== 'lazy').map(i => i.currentSrc || i.src),
        links: [...new Set([...document.querySelectorAll('a[href]')].map(a => a.href).filter(h => h.startsWith(location.origin)).map(h => h.split('#')[0].replace(/[?&]cb=[a-z0-9]+/, '')))],
      })));
      r.badImgs = r.brokenImgs; delete r.brokenImgs;
      r.pageErrors = pe.slice(); r.consoleErrors = ce.slice();
      if (r.drill) {
        await page.setViewportSize({ width: 1366, height: 768 });
        await sleep(600);
        const btns = page.getByRole('button', { name: START });
        const n = await btns.count();
        let clicked = null;
        for (let i = 0; i < n && !clicked; i++) {
          const b = btns.nth(i);
          if (await b.isVisible().catch(() => false)) {
            clicked = ((await b.innerText().catch(() => '')) || '').trim().replace(/\s+/g, ' ').slice(0, 40);
            phase = 'start';
            await b.click({ timeout: 5000 }).catch(e => { r.startErrors.push('click failed: ' + e.message.split('\n')[0]); });
          }
        }
        if (!clicked) r.visibleButtons = await page.$$eval('button', bs => bs.filter(x => x.offsetParent).map(x => x.innerText.trim().slice(0, 30)).slice(0, 12));
        r.startClicked = clicked;
        if (clicked) { await sleep(6000); await page.keyboard.press('Escape').catch(() => {}); await sleep(500); }
      }
      r.failedReqs = fr.slice();
    } catch (e) {
      r.navError = e.message.split('\n')[0];
      if (a < 3) { await ctx.close().catch(() => {}); await sleep(4000); continue; }
    }
    await ctx.close().catch(() => {});
    break;
  }
  return r;
}

(async () => {
  const browser = await chromium.launch();
  let i = 0;
  const worker = async () => {
    while (i < todo.length) {
      const p = todo[i++];
      const r = await visit(browser, p);
      fs.appendFileSync(OUT, JSON.stringify(r) + '\n');
      console.log(`${done.size + i}/${paths.length} ${r.status} ${p} h1=${r.h1} pe=${r.pageErrors.length} ce=${r.consoleErrors.length} se=${r.startErrors.length} start=${r.startClicked || '-'}`);
    }
  };
  await Promise.all([worker(), worker(), worker()]);
  await browser.close();
})();

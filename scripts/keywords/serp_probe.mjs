import { chromium } from 'playwright';
import { readFileSync, appendFileSync } from 'node:fs';

const [, , arg1, cc = 'us', lang = 'en', out = ''] = process.argv;
if (!arg1) {
  console.error('usage: node serp_probe.mjs "<query>" <cc> <lang> [out.jsonl]  |  node serp_probe.mjs --file q.tsv [out.jsonl]  (query<TAB>cc<TAB>lang)');
  process.exit(1);
}

const jobs = [];
let outFile = out;
if (arg1 === '--file') {
  outFile = cc === 'us' ? '' : cc;
  for (const line of readFileSync(process.argv[3] ?? '', 'utf8').split('\n')) {
    const p = line.replace(/\r$/, '').split('\t');
    if (p[0]) jobs.push({ q: p[0], cc: p[1] || 'us', lang: p[2] || 'en' });
  }
  outFile = process.argv[4] || '';
} else {
  jobs.push({ q: arg1, cc, lang });
}

const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const browser = await chromium.launch({ headless: true });

for (const job of jobs) {
  const ctx = await browser.newContext({
    locale: job.lang === 'en' ? 'en-US' : job.lang,
    viewport: { width: 1280, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
  });
  const page = await ctx.newPage();
  const url = `https://www.bing.com/search?q=${encodeURIComponent(job.q)}&cc=${job.cc}&setlang=${job.lang}&mkt=${job.lang}-${job.cc.toUpperCase()}`;
  let rec;
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForSelector('#b_results li.b_algo', { timeout: 15000 });
    await page.waitForTimeout(800);
    rec = await page.evaluate(() => {
      const txt = (e) => (e ? e.textContent.replace(/\s+/g, ' ').trim() : '');
      const organic = [...document.querySelectorAll('#b_results > li.b_algo')].slice(0, 10).map((li, i) => {
        const a = li.querySelector('h2 a');
        const cite = txt(li.querySelector('cite'));
        const host = cite.replace(/^https?:\/\//, '').split(/[\/\s›]/)[0].replace(/^www\./, '');
        return { rank: i + 1, host, title: txt(a), snippet: txt(li.querySelector('.b_caption p, .b_lineclamp2, .b_lineclamp3, .b_lineclamp4')) };
      });
      const paa = [...document.querySelectorAll('.rs_faq_ques, .b_ans .df_alaqn, [data-tag="RelatedQuestions"] .b_demoteText, .relatedQuestionsTitle')].map(txt).filter(Boolean).slice(0, 10);
      const related = [...document.querySelectorAll('.b_rs li a, #b_context .b_rs a')].map(txt).filter(Boolean).slice(0, 12);
      const answer = txt(document.querySelector('.b_ans:not(.b_rs) .b_focusTextLarge, .b_ans .b_focusTextMedium, .b_ans .b_secondaryFocus, .b_antiTopBleed .b_focusTextLarge'));
      const copilot = !!document.querySelector('#b_copilot, .b_copilot, [id*="gen_ans"], .gs_ans, #b_gen_ans');
      const ads = document.querySelectorAll('li.b_ad').length;
      const rail = txt(document.querySelector('#b_context')).slice(0, 200);
      const answers = document.querySelectorAll('#b_results > li.b_ans').length;
      const resultsText = txt(document.querySelector('.sb_count'));
      return { organic, paa, related, answer, copilot, ads, rail, answers, resultsText, captcha: /captcha|unusual traffic|verify/i.test(document.body.innerText.slice(0, 600)) };
    });
    rec = { query: job.q, cc: job.cc, lang: job.lang, ...rec };
  } catch (e) {
    rec = { query: job.q, cc: job.cc, lang: job.lang, error: String(e.message).slice(0, 120) };
  }
  const line = JSON.stringify(rec);
  if (outFile) appendFileSync(outFile, line + '\n');
  else console.log(line);
  await ctx.close();
  await delay(4000 + Math.random() * 3000);
}
await browser.close();

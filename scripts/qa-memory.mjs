import { chromium } from 'playwright';

const url = process.argv[2];
if (!url) throw new Error('Usage: node scripts/qa-memory.mjs <url>');

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on('pageerror', error => errors.push(`pageerror: ${error.message}`));
page.on('console', message => {
  if (message.type() === 'error') errors.push(`console: ${message.text()}`);
});

const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
const title = await page.title();
const start = page.getByRole('button', { name: /start|begin|play/i }).first();
await start.waitFor({ state: 'visible', timeout: 15000 });
await start.click();
await page.waitForTimeout(7000);

// Exercise the first available drill input without making assumptions about the
// specific memory modality. The timed session still provides the primary flow test.
if (!process.argv.includes('--no-input')) {
  const cell = page.locator('button[aria-label="Grid Cell"]:visible').first();
  if (await cell.count()) await cell.click();
  const color = page.locator('button[aria-label^="Select "]:visible').first();
  if (await color.count()) await color.click();
  const answer = page.locator('button:visible').filter({ hasText: /match|no match/i }).first();
  if (await answer.count()) await answer.click();
  const input = page.locator('input:visible').first();
  if (await input.count()) {
    await input.fill('0');
    await input.press('Enter');
  }
}

await page.waitForTimeout(50000);
const body = (await page.locator('body').innerText()).replace(/\s+/g, ' ').trim();
const buttons = await page.locator('button:visible').allTextContents();
const resultVisible = /play again|final score|game over|complete/i.test(body);

console.log(JSON.stringify({
  url,
  status: response?.status(),
  title,
  resultVisible,
  playAgain: buttons.some(text => /play again/i.test(text)),
  buttons: buttons.map(text => text.trim()).filter(Boolean).slice(-12),
  body: body.slice(-900),
  errors,
}, null, 2));

await browser.close();

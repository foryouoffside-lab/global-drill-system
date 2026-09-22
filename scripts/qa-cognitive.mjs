import { chromium } from 'playwright';

const url = process.argv[2];
if (!url) throw new Error('Usage: node scripts/qa-cognitive.mjs <drill-url>');

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on('pageerror', (error) => errors.push(`pageerror: ${error.message}`));
page.on('console', (message) => {
  if (message.type() === 'error') errors.push(`console: ${message.text()}`);
});

const response = await page.goto(url, { waitUntil: 'networkidle' });
const startButtons = page.getByRole('button', { name: /start|begin|play/i });
const startCount = await startButtons.count();
if (startCount === 0) throw new Error(`No start button found on ${url}`);
await startButtons.first().click();
await page.waitForTimeout(3000);

if (process.argv.includes('--exercise')) {
  if (url.includes('concentration-stamina')) {
    const stimulus = page.locator('div.text-8xl').first();
    if (await stimulus.count()) await stimulus.click();
  } else if (url.includes('divided-attention')) {
    const target = page.locator('button.absolute.z-20').first();
    if (await target.count()) await target.click();
    const match = page.getByRole('button', { name: /^MATCH$/i });
    if (await match.count()) await match.click();
  } else if (url.includes('multi-tasking')) {
    const badge = page.locator('div').filter({ hasText: /^TARGET:\s*[▲◆●■★✦]$/ }).last();
    if (await badge.count()) {
      const glyph = (await badge.innerText()).replace('TARGET:', '').trim();
      const shape = page.locator('div').filter({ hasText: new RegExp(`^${glyph}$`) }).last();
      if (await shape.count()) await shape.click();
    }
  } else if (url.includes('concentration-grid')) {
    const grid = page.locator('div.grid.mx-auto').first();
    const one = grid.getByRole('button', { name: '1', exact: true });
    if (await one.count()) await one.click();
  } else if (url.includes('distraction-fighter')) {
    const option = page.getByRole('button', { name: /red|blue|green|yellow/i }).last();
    if (await option.count()) await option.click();
  } else if (url.includes('reaction-time')) {
    const targets = page.locator('button.absolute.z-30');
    if (await targets.count()) await targets.first().click();
  } else if (url.includes('rsvp-reader')) {
    const respond = page.getByRole('button', { name: /detected|catch|respond/i }).last();
    if (await respond.count()) await respond.click();
  } else if (url.includes('symbol-matching')) {
    const digit = page.locator('button').filter({ hasText: /^[1-6]$/ }).last();
    if (await digit.count()) await digit.click();
  }
  await page.waitForTimeout(1200);
}
if (process.argv.includes('--finish')) await page.waitForTimeout(46000);

console.log(JSON.stringify({
  status: response?.status(),
  title: await page.title(),
  url: page.url(),
  startCount,
  resultVisible: /accuracy|final score|play again|run again/i.test(await page.locator('body').innerText()),
  exercise: process.argv.includes('--exercise'),
  body: (await page.locator('body').innerText()).slice(0, 2600),
  buttons: await page.getByRole('button').allTextContents(),
  errors,
}, null, 2));

await browser.close();

import { chromium } from 'playwright';

const url = process.argv[2];
if (!url) throw new Error('Usage: node scripts/qa-motor.mjs <url>');

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
await page.waitForTimeout(5000);

const canvas = page.locator('canvas:visible').last();
if (await canvas.count()) {
  const box = await canvas.boundingBox();
  if (box) await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
}

// Exercise keyboard-driven drills and keep pointer-lock drills alive while the
// timed session completes.
for (const key of ['a', 's', 'd', 'f', 'j', 'k', 'l']) await page.keyboard.press(key);
const keepAlive = setInterval(() => page.mouse.move(720, 500).catch(() => {}), 500);
await page.waitForTimeout(65000);
clearInterval(keepAlive);

const body = (await page.locator('body').innerText()).replace(/\s+/g, ' ').trim();
const buttons = await page.locator('button:visible').allTextContents();
console.log(JSON.stringify({
  url,
  status: response?.status(),
  title,
  resultVisible: /play again|final score|game over|complete/i.test(body),
  playAgain: buttons.some(text => /play again/i.test(text)),
  buttons: buttons.map(text => text.trim()).filter(Boolean).slice(-12),
  body: body.slice(-900),
  errors,
}, null, 2));

await browser.close();

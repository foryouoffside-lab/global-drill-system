import { chromium } from 'playwright';

const url = process.argv[2];
if (!url) throw new Error('Usage: node scripts/qa-fps.mjs <drill-url>');

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

const playSurface = page.locator('div[class*="touch-none"], canvas').filter({ visible: true }).last();
if (await playSurface.count()) {
  const box = await playSurface.boundingBox();
  if (box) await playSurface.click({ position: { x: Math.max(10, box.width / 2), y: Math.max(10, box.height / 2) } }).catch(() => {});
}
await page.waitForTimeout(1200);
if (process.argv.includes('--finish')) {
  const keepAlive = setInterval(() => page.mouse.move(720, 500).catch(() => {}), 500);
  await page.waitForTimeout(50000);
  clearInterval(keepAlive);
}

const body = await page.locator('body').innerText();
console.log(JSON.stringify({
  status: response?.status(),
  title: await page.title(),
  url: page.url(),
  startCount,
  active: /time|score|level|target/i.test(body),
  pointerLocked: await page.evaluate(() => Boolean(document.pointerLockElement)),
  resultVisible: /play again|final score|complete|accuracy/i.test(body),
  body: body.slice(0, 2200),
  buttons: await page.getByRole('button').allTextContents(),
  errors,
}, null, 2));

await browser.close();

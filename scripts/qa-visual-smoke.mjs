import { chromium } from 'playwright';

const base = process.argv[2] || 'http://localhost:3005';
const allRoutes = [
  '/drills/visual/depth-perception/distance-judgment',
  '/drills/visual/reaction-speed/go/no-go',
  '/drills/visual/reaction-speed/light-reaction',
  '/drills/visual/tracking-accuracy/moving-target',
  '/drills/visual/tracking-accuracy/multiple-targets',
  '/drills/visual/tracking-accuracy/pursuit-tracker',
  '/drills/visual/visual-recognition/entropic-grid',
  '/drills/visual/visual-recognition/rhythm-anomaly',
  '/drills/visual/visual-recognition/visual-search',
];
const routeFilter = process.argv.slice(3).find((arg) => !arg.startsWith('-'));
const routes = routeFilter ? allRoutes.filter((route) => route.includes(routeFilter)) : allRoutes;

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
const page = await context.newPage();
const results = [];
const finish = process.argv.includes('--finish');

async function visible(locator) {
  try { return await locator.isVisible(); } catch { return false; }
}

async function exercise(route) {
  const canvas = page.locator('canvas:visible').last();
  if (await canvas.count()) {
    const box = await canvas.boundingBox();
    if (box) {
      if (route.includes('pursuit-tracker')) {
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.move(box.x + box.width * 0.6, box.y + box.height * 0.4);
      } else {
        await canvas.click({ position: { x: box.width / 2, y: box.height / 2 } });
      }
    }
  } else if (route.includes('entropic-grid')) {
    const body = await page.locator('body').innerText();
    const target = body.match(/FIND TARGET CODE\s+([A-Z0-9]{2})/)?.[1];
    if (target) await page.getByRole('button', { name: target, exact: true }).first().click();
  } else if (route.includes('visual-search')) {
    const labels = await page.locator('span').allTextContents();
    const target = labels.map((text) => text.trim().match(/^FIND ['’]([A-Z0-9])['’]$/)?.[1]).find(Boolean);
    if (target) await page.getByRole('button', { name: new RegExp(`^Search Cell ${target}$`), exact: true }).first().click();
  }
  await page.waitForTimeout(500);
}

for (const route of routes) {
  const errors = [];
  const pageErrors = [];
  const onConsole = (message) => { if (message.type() === 'error') errors.push(message.text()); };
  const onPageError = (error) => pageErrors.push(error.message);
  page.on('console', onConsole);
  page.on('pageerror', onPageError);
  const url = `${base}${route}`;
  try {
    console.error(`testing ${route}`);
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(700);
    const start = page.getByRole('button', { name: /start|begin|play/i }).first();
    await start.waitFor({ state: 'visible', timeout: 15000 });
    const startText = (await start.innerText()).trim();
    await start.click();
    await page.waitForTimeout(4500);
    const beforeExercise = (await page.locator('body').innerText()).replace(/\s+/g, ' ').trim();
    await exercise(route);
    const afterExercise = (await page.locator('body').innerText()).replace(/\s+/g, ' ').trim();
    let finished = false;
    if (finish) {
      const result = page.getByRole('button', { name: /play again/i }).first();
      if (route.includes('multiple-targets')) {
        await page.getByText(/SELECT 3 TARGETS \(\d\/3\)/).waitFor({ state: 'visible', timeout: 75000 });
        const stage = page.locator('canvas:visible').last();
        const box = await stage.boundingBox();
        if (!box) throw new Error('Multiple-targets canvas was not measurable during identify phase');
        for (let y = 24; y < box.height - 24; y += 32) {
          for (let x = 24; x < box.width - 24; x += 32) {
            const identifyText = await page.locator('body').innerText();
            if (/SELECT 3 TARGETS \(3\/3\)/.test(identifyText)) break;
            await page.mouse.click(box.x + x, box.y + y);
          }
          if (/SELECT 3 TARGETS \(3\/3\)/.test(await page.locator('body').innerText())) break;
        }
        const confirm = page.getByRole('button', { name: /Confirm \(3\/3\)/i });
        await confirm.waitFor({ state: 'visible', timeout: 5000 });
        await confirm.click();
        await result.waitFor({ state: 'visible', timeout: 10000 });
      } else {
        await result.waitFor({ state: 'visible', timeout: 60000 });
      }
      finished = await visible(result);
    }
    const body = (await page.locator('body').innerText()).replace(/\s+/g, ' ').trim();
    const buttons = (await page.locator('button:visible').allTextContents()).map((x) => x.trim()).filter(Boolean);
    results.push({ route, status: response?.status(), title: await page.title(), startText, activeBeforeExercise: !/START DRILL/i.test(beforeExercise), exerciseChangedState: beforeExercise !== afterExercise, finished, buttons, body: body.slice(0, 900), errors, pageErrors });
  } catch (error) {
    results.push({ route, error: error.message, errors, pageErrors });
  } finally {
    page.removeListener('console', onConsole);
    page.removeListener('pageerror', onPageError);
  }
}

console.log(JSON.stringify(results, null, 2));
await browser.close();

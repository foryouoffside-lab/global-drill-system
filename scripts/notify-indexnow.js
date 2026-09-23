// Automatically notifies search engines after deployment
if (process.env.ENABLE_INDEXNOW !== 'true') {
  console.log('IndexNow submission is disabled until post-deployment (set ENABLE_INDEXNOW=true to run). Skipping.');
  process.exit(0);
}

// This is the PUBLIC IndexNow protocol key. The protocol requires it to be
// downloadable at public/indexnow-key.txt so the engines can verify host
// ownership, so it is published by design and is not a secret. It authenticates
// *us to the engines* and nothing else — never reuse it to gate a write.
//
// This script is the only IndexNow path the site has. It runs as `postbuild` on
// every deploy and can be run on demand with `npm run notify-search-engines`.
// It posts to the engines directly, so it needs no server route and no secret.
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'c8f7a3b2e1d4f5a6b7c8d9e0f1a2b3c4';

const SITEMAP_URL = 'https://skilldrills.online/sitemap.xml';

async function submitToIndexNow() {
  const sitemap = await fetch(SITEMAP_URL);
  if (!sitemap.ok) throw new Error(`Could not read sitemap: HTTP ${sitemap.status}`);
  const fullUrls = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  if (!fullUrls.length) throw new Error('The live sitemap contains no URLs');
  console.log(`\n🚀 SkillDrills IndexNow - Submitting ${fullUrls.length} URLs...\n`);

  // Submit in batches of 100
  const batchSize = 100;
  const batches = [];
  for (let i = 0; i < fullUrls.length; i += batchSize) {
    batches.push(fullUrls.slice(i, i + batchSize));
  }

  const engines = [
    { name: 'Bing', url: 'https://www.bing.com/indexnow' },
    { name: 'Yandex', url: 'https://yandex.com/indexnow' },
    { name: 'Seznam', url: 'https://search.seznam.cz/indexnow' },
  ];

  let totalSuccess = 0;
  let totalFailed = 0;

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`📦 Batch ${i + 1}/${batches.length}: ${batch.length} URLs`);

    const payload = {
      host: 'skilldrills.online',
      key: INDEXNOW_KEY,
      keyLocation: 'https://skilldrills.online/indexnow-key.txt',
      urlList: batch,
    };

    for (const engine of engines) {
      try {
        const response = await fetch(engine.url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(10000),
        });

        if (response.ok) {
          totalSuccess++;
          console.log(`   ✅ ${engine.name}: Submitted successfully`);
        } else {
          totalFailed++;
          const text = await response.text();
          console.log(`   ⚠️ ${engine.name}: HTTP ${response.status} - ${text.substring(0, 100)}`);
        }
      } catch (error) {
        totalFailed++;
        console.log(`   ❌ ${engine.name}: ${error.message}`);
      }
    }

    // Delay between batches
    if (i < batches.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  console.log(`\n============================================`);
  console.log(`📊 IndexNow Summary:`);
  console.log(`   URLs Submitted: ${fullUrls.length}`);
  console.log(`   Engine Responses: ${totalSuccess} success, ${totalFailed} failed`);
  console.log(`   Time: ${new Date().toISOString()}`);
  console.log(`============================================\n`);
}

submitToIndexNow();

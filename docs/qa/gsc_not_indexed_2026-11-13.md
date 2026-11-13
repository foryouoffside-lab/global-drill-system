# GSC not-indexed diagnosis — 2026-11-13

Source: URL Inspection API over all 648 live sitemap URLs (0 errors, ~650 of 2000 daily quota).
Raw: `docs/qa/gsc_index_2026-11-13.jsonl` (URLs + GSC fields only; `sitemapLastmod` column is empty — runner regex bug, ignore).
Live evidence: Googlebot-UA fetch of all 648 URLs (status/canonical/robots/h1/word count) + full internal `<a href>` link graph.
Baseline compared: `scripts/gsc/index-status.json` (2026-11-09, 641 URLs).

## 1. Counts

| coverageState | Count | verdict / fetch | crawledAs |
|---|---|---|---|
| Submitted and indexed | 207 | PASS / SUCCESSFUL | MOBILE |
| Discovered - currently not indexed | 279 | NEUTRAL / never fetched | unspecified |
| URL is unknown to Google | 144 | NEUTRAL / never fetched | none |
| Crawled - currently not indexed | 18 | NEUTRAL / SUCCESSFUL, INDEXING_ALLOWED | MOBILE |

**Zero** of these states occurred: duplicate/Google-chose-other-canonical (googleCanonical == userCanonical on all 225 crawled URLs), alternate-with-canonical, page with redirect, 404, soft 404, 5xx, blocked by robots.txt, noindex.
GSC sitemap: submitted/downloaded 2026-11-09, 641 URLs, 0 errors, 0 warnings.

423 / 648 URLs (65%) have **never been fetched** by Googlebot. Last crawl times: 143 in Sep, 58 in Oct, 24 in Nov — crawl rate is falling.

### Per locale

| state | en | de | es | fr | ja | ko | pt |
|---|---|---|---|---|---|---|---|
| Indexed | 33 | 29 | 31 | 30 | 33 | 24 | 27 |
| Discovered | 26 | 44 | 39 | 42 | 42 | 44 | 42 |
| Unknown | 26 | 18 | 21 | 20 | 17 | 20 | 22 |
| Crawled-not-indexed | 11 | 1 | 1 | 0 | 0 | 4 | 1 |
| total | 96 | 92 | 92 | 92 | 92 | 92 | 92 |

### Per category (all locales)

| section | Indexed | Discovered | Unknown | Crawled-NI |
|---|---|---|---|---|
| home/site pages + /drills + 8 hubs | 9 + 7 + 46 | 10 | 2 | 0 |
| fps drills | 33 | 46 | 23 | 3 |
| visual-tracking drills | 28 | 52 | 25 | 0 |
| reaction-speed drills | 22 | 21 | 10 | 3 |
| physical drills | 15 | 41 | 20 | 1 |
| visual drills | 17 | 30 | 14 | 2 |
| cognitive drills | 13 | 22 | 15 | 6 |
| motor drills | 12 | 32 | 18 | 1 |
| memory drills | 5 | 25 | 17 | 2 |

Hubs are 46/53 indexed; drill leaf pages are ~145/588. Same pattern as the memory note "Google indexed hubs only", now extended one level down.

### Change since 2026-11-09
- 207 indexed both runs; 3 dropped indexed -> Crawled-NI (`/drills/memory/spatial-memory/path-tracing`, `/drills/reaction-speed/visual-tracking-speed-test`, `/drills/visual/tracking-accuracy/multiple-targets`).
- 119 went Discovered -> **Unknown** (spread evenly over all locales and categories): Google pruned its crawl queue — a crawl-demand signal, not a page defect.
- 43 went Unknown -> Discovered. 7 new keyboard-tester locale URLs (lastmod 2026-11-09) are Unknown — expected, 4 days old.

## 2. Root causes

### (A) Technical — fixable by us

**A1. Locale trees have zero crawlable links into them (HIGH).**
Link graph of all 648 live pages: **0 `<a href>` links cross locale boundaries** in either direction. Every locale tree is internally fine (home -> hubs -> drills, all 92 pages reachable at depth <=2 from `/pt`, `/ja`, …) but no English page (where the authority sits) links to `/pt`, `/ja`, etc. The only entry points Google gets are the sitemap and `<link rel=alternate hreflang>` — both weak discovery hints with no PageRank.
Cause: `components/LanguageSwitcher.js` renders `<button onClick={router.push(...)}>` and only mounts the option list `{isOpen && …}` — no hrefs, not in the HTML.
Evidence fit: locale URLs are 253/279 Discovered and 118/144 Unknown; 102 Discovered URLs have no referringUrls at all.
Unpushed commits: do NOT fix this (switcher/header/footer untouched in `origin/main..main`).

**A2. `<html lang="en">` on all 552 locale pages (MEDIUM).**
Live HTML: `lang="en"` on 641/641 fetched pages. `app/layout.js:96` hardcodes `en`; a client script rewrites it after load. Google mostly detects language from content and hreflang is present, so this is a secondary signal conflict, not a blocker. Known structural gap (parallel-run memory). Not fixed by unpushed commits.

**A3. Sitemap lastmod is bulk-stamped (LOW-MEDIUM).**
545/648 URLs share `2026-10-08`, 57 share `2026-10-07`. The ~25 unpushed commits rewrite locale copy across physical/visual/cognitive/memory but `app/sitemap.js` `UPDATED`/`AUDIT_*` is not bumped in them — after push, Google gets no freshness signal for the changed pages, and a later single bulk bump repeats the problem.

**A4. Crawled-not-indexed EN pages target head terms owned by big incumbents / overlap internally (LOW, partially fixable).**
All 18 CNI pages fetch 200, self-canonical, index,follow, h1 present, 1,000–2,400 words server-side (median 1,788 — *more* than indexed pages' 1,301), so not thin/SSR. Titles: "Stroop Test Online", "Schulte Table Online", "SDMT-Style Symbol Digit Test", "Divided Attention Test", "Multiple Object Tracking Test", "Reaction Time Test: Light Reflex Drill", "Visual Tracking Test Online", "Mouse Tracking Test". Overlaps: `/drills/reaction-speed/visual-tracking-speed-test` ("Visual Tracking Test") vs hub `/drills/visual-tracking` ("Visual Tracking Training"); `/drills/visual/reaction-speed/light-reaction` ("Reaction Time Test") vs `/drills/reaction-speed` hub + `/drills/fps/instant-response` ("FPS Reaction Time Test"); 3 "… Tracking Test" titles. Google crawled and declined = quality/value judgment at this authority level. Unpushed no-clinical scrub / honesty passes touch some of this copy; not verifiable until live.

**Checked and clean (no action):** robots.txt allows Googlebot everywhere except `/api/`; no noindex/X-Robots-Tag on any sitemap URL; all 648 return 200 directly (no redirects); canonicals self-referential (home `https://skilldrills.online` vs loc `/` is equivalent); h1 server-rendered on 641/641; no orphans (min 2 inlinks within the locale); only `/search` (noindex) is linked but absent from sitemap — correct. The 7 fetch failures in my scan were transient timeouts; refetched 200. `BAILOUT_TO_CLIENT_SIDE_RENDERING` appears on 626 pages but only around the drill stage; h1 + guide text are in the HTML.

### (B) Not a defect — crawl budget / authority (time + links only)

- 423 never-fetched URLs on a site Google crawls ~25 URLs/month now. 648 URLs (85% of them translations) is far beyond the crawl demand of a low-authority domain; Google crawled hubs, then a sample of leaves, then stopped and is now pruning its queue (119 Discovered -> Unknown).
- Every referringUrl Google holds is on skilldrills.online itself: **0 external referring URLs** in any inspection result.
- CLAUDE.md §10 says localized pages need verified demand; memory notes say only ko/ja (typing/reaction/keyboard) show it. The other ~4 x 92 locale URLs dilute the crawl Google is willing to spend.

## 3. Prioritized FIX LIST (apply after current edit pass)

1. **Crawlable language links (A1).** `components/LanguageSwitcher.js`: replace option `<button>`s with `<a href={localizedPath(loc, pathname)} hrefLang={loc} lang={loc}>` (keep the cookie/localStorage write in onClick, drop `router.push`), and render the list in the DOM always (hide with CSS / `hidden` class instead of `{isOpen && …}`). Also update the stale comment "Only 11 routes are localized". Optionally add a plain footer row of 7 locale `<a>` links in the site footer component. Verify: curl a drill page, grep `href="/ja/drills/`.
2. **Sitemap scope decision (B, owner decision).** Per CLAUDE.md §10 "demand-driven only": drop zero-demand locale drill URLs from `app/sitemap.js` (keep locale home + hubs + measured-demand drills, e.g. ko/ja reaction/typing/keyboard-tester) — or noindex them. Concentrates crawl on ~150–250 URLs Google will actually fetch. Do not delete pages without owner sign-off.
3. **Honest lastmod on push (A3).** In `app/sitemap.js`, add per-locale/per-route dates in `UPDATED_OVERRIDES` for pages actually changed by the unpushed phase-B / no-clinical commits (use commit dates), not one bulk bump.
4. **Server-side `<html lang>` (A2).** Either root layouts per locale via route groups (`app/(en)/layout.js`, `app/(loc)/[...]`) or set lang from a middleware request header read in `app/layout.js`. Check the rendering-mode cost before choosing; keep the client script as fallback.
5. **De-overlap CNI titles (A4).** Retitle `/drills/reaction-speed/visual-tracking-speed-test` away from the visual-tracking hub's head term; differentiate `light-reaction` from `reaction-time-test`/`instant-response`. Must stay factually honest (memory: keyword targets from demand) and pass the no-clinical rule. Check `lib/drillSeo.js` / page metadata.
6. **After deploy:** resubmit sitemap (`python scripts/gsc/gsc.py submit`), request indexing in the GSC UI for the top ~10 demand pages (API has no request-indexing endpoint), re-run this inspection in ~3 weeks and diff against this jsonl.
7. **Only real long-term lever (B):** external links. 0 external referrers seen. Nothing in the repo fixes this.

## 4. What the ~25 unpushed commits already fix
- Group-URL 308s (`next.config.js` +10 lines) — fixes 404s Google may hold for old `/drills/<cat>/<group>` URLs (Pages report "Not found"), not any sitemap URL here.
- Locale copy retargets + honesty/no-clinical passes — may help A4-type quality judgments on locale pages, unverifiable until crawled.
- None of A1, A2, A3 (they need the edits above), and none of B.

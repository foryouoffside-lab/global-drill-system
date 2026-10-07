# Technical audit and fixes — 2026-10-07

Scope: Phase A of `2.md` (audit, inventory, site-wide technical pass) plus the first page-loop items. Branch: `ccr-109ee186-jucejh`. Vercel stays disconnected; nothing here is deployed.

## Method

- `scripts/seo_render_audit.mjs <origin> <out.json>` fetches every URL in `/sitemap.xml` (641) and checks the rendered HTML: status, title/description length, canonical, hreflang set and reciprocity, `x-default`, H1 count, JSON-LD parse, FAQPage vs visible FAQ text, `aggregateRating`, "sub-millisecond", numbered FAQ placeholders, duplicate titles/descriptions, internal links and inbound counts, breadcrumb names, English-stop-word ratio.
- Run against a production build (`npx next build`, not `npm run build`) served by `next start`. `next dev` was tried first and was OOM-killed at ~13 GB after ~300 routes.
- English-prose check: a second pass (`scratchpad`, not committed) extracts text nodes, drops citation titles from `lib/drillSources.js` and keeps nodes with ≥7 words and ≥3 strong English stop words.
- Console check: headless Chromium over CDP on the edited pages and hubs (probe error detected, edited pages produced no console errors or warnings).
- Changed since the last deploy (`git diff 9f445a3..HEAD -- app`): 470 `page.js/tsx` files (440 localized, 30 English).

## Results

| Check | Before | After |
|---|---|---|
| URLs returning 200 | 641/641 | 641/641 |
| Titles > 60 chars | 12 | 0 |
| Descriptions > 160 chars | 9 | 0 |
| Pages sharing a title | 13 pages / 6 groups | 0 |
| Pages sharing a description | 3 | 0 |
| FAQPage JSON-LD ≠ visible FAQ | 17 pages | 0 |
| Canonical not self-referencing | 0 | 0 |
| hreflang self-reference / reciprocity / `x-default` issues | 0 | 0 |
| JSON-LD parse errors, `aggregateRating`, numbered FAQ placeholders | 0 | 0 |
| Localized drills with exactly 10 FAQs | all | all |
| Locale homes linking to English hubs | 6 | 0 |
| English breadcrumb names in locale JSON-LD | 42 pages | 0 |
| English hubs without BreadcrumbList | 3 | 0 |
| Pages rendering English title/H1/guide on a locale tree | 2 (ja, ko `barrier-sequence-pursuit`) | 0 |
| Locale pages with English body prose | 286 | 243 (see D2) |
| `<html lang>` correct in server HTML on locale pages | 0/545 | 0/545 (see D3) |

## Fixes shipped

Commits `f6f05c8`, `38e596d`, `3ba8e51`, `36eedbe`, `10e3a68`.

- **Metadata:** 12 titles and 9 descriptions trimmed to limits without dropping the target phrase; duplicate titles split (`entropic-grid` vs `visual-search` in es/fr/pt, `directional-chaos` vs `dynamic-evasion` in de, fr `barrier-sequence` vs `fps-tracking-trainer`).
- **Schema/HTML parity:** FAQ answers rendered from `faqSchema` on n-back (6 locales), triangular/zig-zag (es/fr/pt, `guide.faqs` was missing so the 10 FAQs were never rendered), fr aim-trainer (schema was ASCII-stripped, now matches the accented visible text); schema answers synced to the visible text on four English visual pages.
- **Native content:** `content.ja` and `content.ko` added to `lib/i18n/drills/barrierSequencePursuit.js`.
- **Accuracy:** removed the unsupported "sub-millisecond hardware debounce" claim (keyboard-recognition); removed "typing" from the home meta description, home keywords and Organization JSON-LD (section deleted 2026-08); locale pages said 82 drills, registry/sitemap/llms.txt say 81; FPS hub FAQ and cards no longer claim OS acceleration is bypassed or that sensitivity maps per game; cognitive hub cards no longer promise frame-exact timing or zero telemetry.
- **Localization of shared chrome:** FPS, visual-tracking and cognitive hubs (18 locale pages) now have localized H2s, domain cards and engine cards (`lib/i18n/hubCopy.js`); visual-tracking scope note localized in `DrillGuide` for all locales; breadcrumb JSON-LD labels localized for seven shared builders (`lib/i18n/breadcrumbLabels.js`), home item now locale-prefixed.
- **Entity anchors (checklist 5.2):** English Wikipedia `sameAs` URLs added to the SoftwareApplication JSON-LD of 469 drill pages (81 English + locale copies) from a per-route concept map (e.g. N-back, Stroop effect, Fitts's law, Smooth pursuit, Memory span, Multiple object tracking). Coverage of drill pages with a Wikipedia `sameAs`: 7/81 English before, 538/567 drill URLs after. Article titles were confirmed through search results (Wikipedia itself is not reachable from this environment); `symbol-matching` has no dedicated article and was left without one.
- **Internal links:** locale home hero CTAs and category cards use `localizeHref`.
- **Sitemap:** hreflang `xhtml:link` alternates on every URL that has locale versions; `lastmod` set from the git history (locale trees 2026-09-22, privacy/delete-account 2026-10-01, pages touched today 2026-10-07, locale-specific changes dated per locale URL).
- **Headers:** `Content-Language` per locale tree in `next.config.js`.

Checked and unchanged: robots.txt allows `GPTBot`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `Claude-SearchBot`, `Google-Extended`; `/search` is `noindex,follow` and absent from the sitemap; `llms.txt` counts match the registry (81); no `aggregateRating`; no numbered FAQ placeholders; home `testimonials` untouched.

False positives in the audit script: `sub-millisecond` on `/about` and `/drills/motor` appears inside a disclaimer ("any site claiming sub-millisecond precision … is overstating"), kept. `desc<70` and `words<400` flag Japanese because those measures are character-sparse.

## Not fixed

See "Blockers and owner decisions" in `docs/seo/PAGE_QUEUE.md` (D1–D8). Highest impact: D1 (research hosts blocked), D2 (243 localized pages with English body copy), D3 (`html lang`), D4 (claims the code does not support).

## Artifacts

- `docs/seo/PAGE_QUEUE.md` — 641 rows, priority, status, research link, commit.
- `docs/seo/audit/render-audit-2026-10-07.csv` — per-URL metrics after the fixes.
- `docs/seo/audit/english-prose-leak-2026-10-07.csv` — localized pages with English prose, with the first offending node.
- `docs/seo/research/{ja,ko,fr,es,pt,de,en}/` — per-page research logs for pages changed.

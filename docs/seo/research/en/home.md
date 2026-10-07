# en / home — research log

Date: 2026-10-07 · Route: `/`

## Decision on title and H1
- No change. `docs/SEO_PROGRESS.md` (GSC 2026-08-21): `/` holds 181 of 244 clicks at position 5.5 and 33% CTR, mostly brand queries. Title `Free Aim Trainer & Brain Games Online | SkillDrills` and H1 `Master Your Mind & Mechanics` stay.

## Tools
- WebSearch (extended), 2026-10-07: `SkillDrills free browser training drills aim reaction time memory`. Suggest/Trends/Bing unavailable.

## Observations
- Top results: AimTests, the live skilldrills.online home (indexed title `Free Aim Trainer & Brain Training Drills`, an older title than the repo), onlineaimtrainer.com, aimbetween.games, plus three SkillDrills drill/hub URLs. The brand query returns the site plus its own pages.
- The answer summary built from the live pages repeats "improve FPS aim, reaction time, memory, focus, typing speed, and mental fitness". Typing drills were deleted on 2026-08; the claim comes from the home meta description and Organization JSON-LD. Both are corrected in this pass (`36eedbe`).
- The live index also lists `/drills/fps` as "19 Free Drills" while the repo has 15 FPS drills: the deployed site is behind the repository, so these fixes only reach search engines after the owner reconnects Vercel and redeploys.

## Change
- Visible FAQ (6 questions) plus matching FAQPage JSON-LD on the English home: what SkillDrills is, free/no account, areas covered, timing accuracy, mouse vs touch, data collected. Every answer restates facts already published on `/about`, `/privacy` and `/llms.txt`; no new numbers other than the registry drill count.
- Locale homes unchanged (they pass no `faqs`).
- B3 score for the FAQ target (brand/entity queries, AI answer text): demand 3 (brand queries dominate GSC clicks), competition ease 5 (own brand), intent fit 5.

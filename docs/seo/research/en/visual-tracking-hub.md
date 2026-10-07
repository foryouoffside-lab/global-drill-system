# en (+ko,ja,de,pt,es,fr) / visual-tracking hub — research log

Date: 2026-10-07 · Routes: `/drills/visual-tracking`, `/<locale>/drills/visual-tracking`

## Defects found
- Localized hubs rendered English `Tracking Domains`, three domain cards and `Engine & Hardware Optimization` with three English cards.
- English hub lacked BreadcrumbList JSON-LD.

## Tools
- WebSearch (extended), 2026-10-07: `smooth pursuit eye tracking exercises online`. Others unavailable.
- SERP (en-US): ResearchGate figure, YouTube smooth-pursuit video, The OT Toolbox, Wikipedia, AmblyoPlay, colorpage.ai, eyedottrainer.com (`Eye Tracking Exercises Online — Free Trainer`), neurovisualtrainer.com, eyerehab.app. Mix of clinical/OT how-to pages and a few free online trainers; the phrases `eye tracking exercises` and `smooth pursuit exercises` both appear in titles.
- No volume available, so the H1 `Visual Tracking Training Online` (set 2026-08-21 from GSC clusters) is unchanged. Label: proxy.

## Change
- BreadcrumbList added (English hub). Localized hub sections served from `lib/i18n/hubCopy.js`.

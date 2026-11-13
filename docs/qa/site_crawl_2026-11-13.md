# Site crawl QA 2026-11-13 (PARTIAL)

- Crawled: 242/648 sitemap URLs (run still in progress at write time)
- Drill pages: 198, Start clicked: 197
- Pages with >=1 issue: 8
- Broken internal links: not yet checked (runs after crawl)

## Failing URLs grouped by error

| Issue type :: exact error | Count | URLs |
|---|---|---|
| hreflang :: missing | 4 | /about<br>/privacy<br>/delete-account<br>/terms |
| pageerror :: Invalid or unexpected token | 2 | /pt/drills/cognitive/focus/distraction-fighter<br>/pt/drills/reaction-speed/reflex-training-drill |
| after-start :: console: Failed to load resource: net::ERR_NETWORK_IO_SUSPENDED | 1 | /ja/drills/motor/movement-speed/finger-sequencing |
| after-start :: console: Failed to fetch RSC payload for http://localhost:3000/ja/drills/motor/movement-speed/finger-sequencing. Falling back to browser navigation. TypeError: Failed to fetch
    at createFetch (webp | 1 | /ja/drills/motor/movement-speed/finger-sequencing |
| start :: no Start button found | 1 | /ja/drills/motor/movement-speed/keyboard-tester |

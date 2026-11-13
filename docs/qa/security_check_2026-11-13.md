# Pre-deploy security check: 2026-11-13

Scope: `origin/main..HEAD` (22 commits, 752 files, +68k/-61k), plus the security surfaces that apply to the whole site.
Method: static, read-only review. No build, no server, no network calls except `npm audit --omit=dev --json`.

## Verdict

- **No deploy blocker in the unpushed diff.** The diff contains copy, i18n, JSON-LD, drill client and research-doc changes, plus 2 redirects. None of it introduces XSS, an open redirect, eval, or a committed secret.
- **One critical item, independent of this push.** Production runs `next@15.5.27`, and `npm audit` reports a critical and a high advisory against it. Bump to the patched release in the same deploy. Mitigating config is described in finding 1.

## Findings

| # | Severity | Location | Issue |
|---|---|---|---|
| 1 | Critical (likely not exploitable here) | `package.json:19` (`next ^15.1.4`, installed 15.5.27) | npm audit: GHSA-2464-fhr4-w9xw (RCE in the Image Optimization API with SVG), GHSA-p3m5-59mp-jv5r (Server Actions DoS) |
| 2 | High (build-time only) | transitive `source-map-js@1.2.1` via `critters` → `postcss` | GHSA-68fv-2mgg-jv7q event-loop DoS |
| 3 | Moderate (build-time only) | transitive `postcss-selector-parser@6.1.4` via `tailwindcss` | GHSA-rj75-hqrm-r3gf quadratic selector parsing |
| 4 | Low | `components/LanguageSwitcher.js:50`, `lib/i18n/locales.js:256-259` | `router.push(localizedPath(newLocale, pathname))` returns `stripLocale(pathname)` unchanged for EN and does not reject a leading `//` |
| 5 | Low | `middleware.js:99,106,121`, `components/LanguageSwitcher.js:45` | Locale cookie set without `Secure` |
| 6 | Low (info) | `scripts/gsc/gsc.py:18-19,42-43` | Hardcoded local paths reveal the Windows username (`C:\Users\<user>\Desktop\credentials.json`) |
| 7 | Low (info) | `docs/seo/research/**/_work-*/gsc_*.json` (new in the diff) | Raw Search Console query and page dumps committed to the repo |
| 8 | Info | `next.config.js:35` | CSP keeps `'unsafe-inline'` in `script-src` (unchanged and documented; there is no nonce plumbing) |

### 1. Next.js advisories (critical/high): fix available

- **Exploit scenario:**
  - The RCE needs the image optimizer to process an attacker-influenced SVG.
  - The Server Actions DoS needs Server Actions to exist.
- **Exposure here:**
  - `images` has no `dangerouslyAllowSVG`.
  - `remotePatterns` allows only `skilldrills.online`.
  - There are no `'use server'` modules in `app/`, `components/` or `lib/`.
  - Real exposure is therefore low. However, `/_next/image` is public and `public/logo.svg` and `public/favicon.svg` exist. I did not read the advisory text, so the exact trigger is not verified.
- **Fix:** `npm i next@<patched 15.5.x>` (npm audit `fixAvailable: true`, non-major). Then run `npx next build` (not `npm run build`, which pings IndexNow) and smoke-test `/` plus one drill. Pre-existing in production; the pushed diff does not touch it.

### 2-3. Transitive build-tooling DoS: fix available

- **Exploit scenario:** these only run against attacker-controlled source maps or CSS at build time. Nothing user-supplied reaches them at runtime, so runtime risk is close to zero.
- **Fix:** `npm audit fix` (non-breaking). Non-blocking.

### 4. LanguageSwitcher protocol-relative path (low)

- **Exploit scenario:**
  1. A victim opens `https://skilldrills.online//evil.example` (for example from a crafted link). If Next serves the 404 page with the header for that path, `usePathname()` could return `//evil.example`.
  2. The victim then picks English in the switcher.
  3. `localizedPath('en', '//evil.example')` returns `'//evil.example'`, and `router.push` navigates off-site.
- **Likelihood:** it needs user interaction, and Next normally normalises repeated slashes, so this is unverified at runtime.
- **Fix:** at the top of `stripLocale`, collapse leading slashes: `pathname.replace(/^\/+/, '/')`.
- **Other paths checked:**
  - Non-EN locales are safe: they go through `hasLocalizedRoute`/`localeUrl` or fall back to the locale root.
  - The middleware redirect is same-origin (`nextUrl.clone()` with only the pathname changed).

### 5. Cookie flags (low)

- `skilldrills_locale` is a non-sensitive preference. Its value is never read back on the server (middleware only checks `cookies.has`), so it cannot be used for injection.
- **Fix (optional):** add `secure: true` in the middleware calls and `; Secure` in the `document.cookie` string. `HttpOnly` is not possible because the client writes the cookie.

### 6-7. Repo hygiene (low)

- **Secrets:** no secrets are committed.
  - `.gitignore` covers `.env*`, `credentials.json`, `*-token.json` and `scripts/bing/.bing-key`.
  - `git ls-files` shows no `.env`, PEM or service-account files.
  - A grep of the diff for `private_key|client_secret|refresh_token|Bearer|api_key=<literal>` found nothing.
- **What the repo does expose:** the GSC dumps reveal the site's query and traffic data, and `gsc.py` reveals the local username. This matters only if `origin` (`foryouoffside-lab/global-drill-system`) is public; I did not verify its visibility.
- **Fix (if public):**
  - Replace the default credential paths with `os.path.expanduser("~/...")` or make them env-only.
  - Gitignore `docs/seo/research/**/_work-*/gsc_*.json`.

## Checks that passed

- **XSS / JSON-LD:**
  - Every `dangerouslySetInnerHTML` in `app/`, `components/` and `lib/` serialises static module data (`*Schema`, `seo.*Schema`, keyboard-tester `s`).
  - No JSON-LD reads `params`, `searchParams` or cookies.
  - The only `useSearchParams` consumer (`app/search/SearchClient.js:17`) renders through React text nodes and links to registry `drill.href` values.
  - No `</script` or `<!--` string literals exist in `lib/` or `app/`.
- **eval / new Function:** none were added in the diff.
- **localStorage:** the diff mentions localStorage only in privacy copy text, with no new storage code paths.
- **Redirects (`next.config.js:124-133`):**
  - The new group→hub redirects use closed regex allowlists for `:loc`, `:cat` and `:group`.
  - Destinations are relative.
  - The only absolute destination (`:240`) is the www→apex redirect, which is host-pinned. There is no open redirect.
- **IndexNow (memory item):**
  - The API route was removed (commit `2e3a1500`), so `app/api/**` is empty and there is no relay to authenticate or rate-limit.
  - `scripts/notify-indexnow.js:15` uses only the public protocol key, which `public/indexnow-key.txt` (32 bytes) exposes by design. The key is gated by `ENABLE_INDEXNOW`.
  - No `INDEXNOW_ADMIN_KEY` usage remains, so there is nothing merged.
  - The only route handler is `app/llms.txt/route.js` (`force-static`, no input).
- **Headers/CSP (`next.config.js:27-83`):**
  - The diff did not change this block.
  - Present: `default-src 'self'`, `object-src 'none'`, `frame-ancestors 'none'`, `base-uri 'self'`, `form-action 'self'` and `upgrade-insecure-requests`. `unsafe-eval` appears in dev only.
  - Also present: HSTS with preload, `nosniff`, `X-Frame-Options DENY`, `Referrer-Policy`, `Permissions-Policy`, COOP/CORP, and `poweredByHeader: false`.
- **Middleware:**
  - The crawler regex exempts bots before any redirect.
  - The cookie short-circuits geo-routing.
  - Redirects are 307 and same-origin.
  - The matcher excludes `api`, static files, robots and sitemap.
- **robots/sitemap:** `PRIVATE_PATHS` (`/api/`, `/.vercel/`) is disallowed. The sitemap lists only public drill and hub URLs.
- **Personal data in shipped files:**
  - `public/` has only `security.txt` (role address `security@skilldrills.online`), the Google verification file, the IndexNow key, the manifest and icons.
  - The only third-party email in `docs/` is `testharo.com@gmail.com`, which comes from scraped public SERP snippets. It is not the owner's data, and `docs/` is not served.

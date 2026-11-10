# Slate by Avolyn

React + Vite website for a modular desk mat in development, with a dedicated e-ink display, wireless charging and a swappable mat.

## Pages

| URL | Purpose |
| --- | --- |
| `/` | About Slate: product, rotating display examples, audiences, modularity, finishes and waitlist |
| `/specs/` | Current design dimensions, display, charging rating, power/data connections and setup requirements |
| `/faq/` | Product, setup, software, charging and ordering questions |
| `/updates/` | Current development status, launch timing and dated progress notes |

These are separate HTML entry points with distinct titles/descriptions. Navigation opens documents rather than scrolling between homepage sections. Only the waitlist CTA and skip link use section anchors. Each page can be loaded and refreshed directly on a static host.

## Run locally

```powershell
npm.cmd ci
npm.cmd run dev
```

Open Vite's Local URL. `npm.cmd` avoids the Windows PowerShell script execution-policy issue. On macOS/Linux, use `npm ci` and `npm run dev`.

## Build and deploy

```powershell
npm.cmd run build
npm.cmd run preview
```

Upload all of `dist`, preserving the `specs`, `faq`, `updates` and `assets` folders. The host must serve directory `index.html` files. The Vite multi-page inputs are in `vite.config.js`; no SPA rewrite or client router is required.

The branch is for review. Do not merge or deploy until the owner approves.

## Product facts and pricing

`src/product.js` holds shared values. Current design: 800 × 350 mm mat, 5.79-inch black/white display, 792 × 272 pixels. The prototype uses a charging module rated at 15 W; assembled charging output is not validated. Final adapter requirements and included cables are unresolved, so no adapter rating or delivered charging guarantee is invented.

`PRODUCT.priceUsd` is `null` because retail pricing has not been finalized. The hero prominently shows “Pricing to be announced.” Once an actual public price is approved, populate this value and update the related FAQ/package content. Internal planning figures are not retail commitments.

Power, USB and local 2.4 GHz Wi-Fi serve different roles. The Specs page explains computer/app requirements for live data and the difference between wired transfer, wireless transfer and external power. Current development status and known unknowns are retained in `docs/specs-provenance.md`.

## Homepage examples

Four sample layouts rotate every seven seconds: minimal, combined calendars, PC stats and a personal background. Prev/next, direct selection and pause/play remain available. Interaction pauses rotation; reduced-motion preference disables automatic rotation. Hover, enlarged mode and hidden tabs suspend automatic advancement. A phone can enlarge the screen inside a contained horizontal scroll region.

Examples are illustrations with fictional data, not the desktop app itself or a demonstration of e-ink refresh timing. Editing widgets, fonts and backgrounds happens in the desktop app. No file upload or calendar sign-in is added to this website.

## Waitlist

Copy `.env.example` to `.env` and set `VITE_WAITLIST_ENDPOINT` to an HTTPS service accepting POST JSON with `name`, `email`, `finish`, `product` and `source`. It must allow the site's origin and return success only after accepting a signup. Restart Vite after environment changes. Do not put secrets in VITE variables.

Without an endpoint, the form clearly states details were not sent or saved. No signup backend, checkout or payment processing is included. Finish selections on the homepage and form stay in sync.

## Assets and review

Product images are concept renders. Desk accessories are not included, and accessory brands are not affiliated with Avolyn. Final materials, mounts, compatibility, spare parts, warranty, shipping hardware and launch timing remain in development. The creative audience image has a more colorful workspace; see `IMAGE_PROMPTS.md` for its creation record.

Current review images: [homepage](docs/slate-pages-home.png) and [Specs](docs/slate-specs-page.png). `VALIDATION.md` records the checks and their limits. Earlier screenshots and showcase notes are historical; the current screen treatment is the carousel.

# Slate by Avolyn

React + Vite product website for a modular desk mat in development: an e-ink information display, wireless charging and interchangeable mat finishes.

The homepage leads with the product and its display, explains customization in the Avolyn desktop app, and shows three interactive sample layouts: Day planner, PC stats and Your design. Short audience cards follow, then one underside-transfer illustration, the finish selector, FAQs and the waitlist.

## Run locally

```powershell
npm.cmd ci
npm.cmd run dev
```

Open the Local URL printed by Vite. `npm.cmd` avoids the PowerShell script execution-policy issue. On macOS/Linux, use `npm ci` and `npm run dev`.

## Production build

```powershell
npm.cmd run build
npm.cmd run preview
```

Deploy the contents of `dist` to your static host. Source is in `src/App.jsx` and `src/styles.css`. This branch is for review; merging and production deployment require the owner's approval.

## Waitlist

Copy `.env.example` to `.env` and configure `VITE_WAITLIST_ENDPOINT` with an HTTPS service that accepts POST JSON containing `name`, `email`, `finish`, `product` and `source`. It must accept requests from the site's origin and return success only after accepting a signup. Restart Vite after changing environment variables. Do not put secrets in VITE variables.

Without an endpoint, the form says that details were not sent or saved. This project includes no signup backend, checkout, payments or ordering. The finish selected on the homepage and in the form stays in sync.

## Product and content boundaries

- Product images are concept renders. Keyboards, mice, phones, computers and other desk accessories are not included. Accessory brands are not affiliated with Avolyn.
- The website's display selector is an illustrative preview with sample data, not a screenshot of the desktop app, live integration or simulation of e-ink refresh speed. Layout changes happen on the computer; the e-ink module has no touch input.
- Final integrations, Windows/macOS support, sensors, power requirements, charging speed, phone compatibility and display refresh timing remain to be confirmed for the shipping product.
- Modules are designed to release from the underside and move to compatible mats. The illustration is schematic, not final assembly instructions. Mounts, spare parts, compatibility, replacement pricing and warranty remain in development.
- The woven, linen-inspired surface and five finishes describe the material direction. Final composition, dimensions and care instructions are not promised.
- No confirmed launch date or price is published. The FAQ explains that pricing and starter-kit contents will be shared before orders open.

## Feedback revision

Nina and Autumn's feedback prompted removal of the numbered journey bar, repeated introductory/material/platform sections, extra section links, and the large failure/replacement block. Each audience card now has one title and one description. Fabric and finish content share a section. The page explicitly identifies the desktop app and excluded accessories, and replaces abstract workflow claims with concrete display examples.

Rendered copy fell from 1,807 to 781 words (about 57% fewer), including FAQ answers and both navigation variants. See [VALIDATION.md](VALIDATION.md) for completed checks and limitations, and [the display preview](docs/slate-display-preview.png) for the reviewed desktop layout. Image creation history is retained in [IMAGE_PROMPTS.md](IMAGE_PROMPTS.md).

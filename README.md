# Avolyn / Slate

React + Vite product story with a six-chapter journey, premium material narrative, modular platform positioning, five image-based finishes, FAQs and a bottom-of-page waitlist. Every signup CTA scrolls to the inline destination form, and selected finishes carry through.


## Audience-first homepage positioning (November 2026)

The homepage now directly explains who Slate is for: professionals balancing a busy day, gaming/PC enthusiasts, and creators and developers. The opening statement identifies Slate as a premium modular desk mat rather than relying only on abstract lifestyle language. A dedicated "Who it's for" section reuses the existing work, gaming, and studio concept scenes and describes the value for each audience. Navigation, chapter numbers, CTA copy, section headlines, and SEO metadata follow the same positioning.

**Claims policy:** All audience scenes are concept renders with sample data. Calendar, stock, PC-temperature and wireless charging integrations remain planned features, not shipping functionality. Modules and surface replaceability describe design intent; they are not tested durability or compatibility guarantees. No launch date, pricing, compatibility or measured productivity improvement is promised.

**Review checklist:** Confirm hero text contrast and section spacing at desktop/tablet/mobile widths; verify navigation links include `#for-you`; confirm all three images load from `public/images`; check all journey anchors, colorway selections, and waitlist form behavior. Check the actual deployment and the mobile browser before approving a merge.

## Run on Windows

Extract this ZIP first. Open a terminal in the folder containing package.json.

```powershell
npm.cmd install
npm.cmd run dev
```

Open the Local URL printed in the terminal. Using npm.cmd avoids the PowerShell npm.ps1 execution-policy error without changing your security settings.

## Production

```powershell
npm.cmd run build
npm.cmd run preview
```

Upload the contents of `dist` to your static host. Do not open index.html directly from the filesystem. Source code is in `src/App.jsx` and `src/styles.css`; images are bundled in `public/images`.

## Signup configuration

Copy `.env.example` to `.env` and set `VITE_WAITLIST_ENDPOINT` to an HTTPS service that accepts POST JSON with name, email, finish, product and source, returning a successful HTTP status only after accepting the signup. It must allow requests from your site's origin. Restart Vite after changing environment variables. Never place secret API keys in VITE variables.

Without an endpoint the form clearly reports that nothing was submitted or saved. This project does not include a mailing-list server, checkout, payments, or product ordering. Review consent and privacy language before collecting real signups.

## Product content

Slate is in development. Dimensions are retained from the supplied concept project, not independently verified engineering specifications. Charging speed, phone compatibility, integrations, launch date and pricing are intentionally not promised.

The new imagery is AI-generated concept rendering depicting Keychron Q1 and Logitech MX Master 3S accessories. It is not exact manufacturer product photography. Accessories are not included and no affiliation is implied. Review renders and final specifications before a public commercial launch.

## Image generation

Built-in image generation was used. Prompts directed it to preserve the 800 x 350 mm mat, small six inch display, top-right charging module and single top-middle cable, replace imaginary peripherals with Keychron Q1 and Logitech MX Master 3S, and produce Sakura, cream Linen, Charcoal, Sage and Navy fabric concepts. Sage uses a botanical pale-oak daylight workspace. Navy uses a dark-walnut evening workspace with a blue monitor scene. Asset filenames: `public/images/slate-{sakura,linen,charcoal,sage,navy}.webp`.

## Mobile

Responsive phone and tablet grids, touch targets, collapsible navigation, dynamic viewport modal sizing, safe-area spacing, 16px form inputs to avoid iOS zoom, inline form labels, keyboard-accessible navigation and reduced-motion support are included. See VALIDATION.md for actual test coverage.

## Story and claims

The story moves through the idea, materials, function, platform, finish and waitlist. Material language describes a woven, linen-inspired direction without claiming a final fiber composition. Long-term use is a design goal. Tested lifespan, warranty, replacement supply and future module compatibility are not promised. The waitlist remains in preview mode until its endpoint is configured.

## Workspace carousel and e-ink detail

The platform chapter includes six distinct concept setups: gaming, professional work, MacBook, compact workspace, creative studio, and light gaming. Use the arrow buttons, selection dots, left/right keyboard keys, Home/End, or horizontal touch swipes. It does not auto-advance. Vertical swipes remain available for normal page scrolling.

A small native SVG display character appears beside the carousel and at the final waitlist. Its blink, glance, wave, and brief e-ink refresh effects are disabled by reduced-motion preferences. Click or tap the character to pause or resume its animation. The pause state persists when changing carousel slides. It is a decorative brand detail, not an interactive chatbot or product capability.

New carousel image assets are in `public/images/slate-setup-gaming.webp`, `slate-setup-work.webp`, and `slate-setup-macbook.webp`. They were generated with the built-in image tool. See IMAGE_PROMPTS.md for prompt details. Apple, Keychron, and Logitech accessories are illustrative props, not included items or endorsements. A MacBook scene does not establish Slate hardware compatibility.

## E-ink dashboard content

Product imagery now illustrates Google Calendar events, stock watchlists, and CPU/GPU temperatures. All values are sample data. Gaming scenes emphasize system temperatures, the professional scene emphasizes calendar events, and the MacBook scene illustrates a market watchlist. These are product concept renderings, not live data or implemented hardware integrations. Site copy describes the planned features with final supported systems, data sources and update intervals to be confirmed.

Workflow messaging emphasizes a quick glance at the e-ink display instead of switching tabs or opening a dashboard. No measured productivity gains are claimed.

The display feature now uses `public/images/slate-display-context.webp`, showing surrounding fabric and a partial keyboard instead of an isolated dimension drawing.

## Modularity and typography refresh (November 10, 2026)

A new illustrated, three-stage modular story directly follows the existing platform carousel. It shows the same display and charger installed on a Linen concept, lifted above their openings, then installed on a Sage concept. The illustration is CSS-based, responsive, and labeled as a simplified development concept rather than a representation of the final attachment mechanism. The header, journey navigation, and footer link to `#modularity`, and the FAQ explains the intended transfer between compatible Slate surfaces.

Small chapter labels, cards, support captions, concept notices, setup captions, footer links, and journey labels have been made larger and darker for legibility. Check both accessibility contrast and layout on actual browsers and mobile devices before launch.

## November 2026 refinement: contrast and underside removal

Sections 1 and 2 now use different backgrounds (near-white intro and warm taupe audience) to make the chapter transition easier to perceive. The modular-transfer story's middle step is explicitly a diagram of the **underside** of the mat with electronic housings below the attachment bays. The concept does not show electronics being pulled upward through the top. The FAQ and adjacent design language describe module release from underneath. Exact fastener design and transfer procedure remain in development; do not publish this simplified schematic as verified assembly instructions.

## Replace a failed module (November 2026)

The modularity section includes a dedicated "One part stops working. Keep the rest." block with conceptual before/after illustrations for separately replacing the display or charger, while retaining the mat and remaining working component. The design benefit is intended independent serviceability; no tested ease-of-repair rating, guaranteed DIY operation, production spare availability, warranty coverage, replacement pricing or specific module compatibility is promised. A corresponding FAQ answers the failure scenario explicitly. Review the actual attachment and safety requirements before finalizing customer-facing service promises.

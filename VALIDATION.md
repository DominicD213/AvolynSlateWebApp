# Validation — November 10, 2026

## Current revision: separate pages and specifications

- Production build emits `dist/index.html`, `dist/specs/index.html`, `dist/faq/index.html` and `dist/updates/index.html`, sharing hashed assets.
- `npm run build` and `git diff --check` passed.
- Actual desktop browser navigation opened Specs, FAQs and Updates as separate document URLs. Specs and Updates survived direct refresh. Direct-loaded responsive frames also rendered Specs, FAQs and Updates.
- Header and footer links use document paths; active page state is correct. The homepage contains no FAQ disclosure list. FAQ page contains 15 questions in three groups.
- Expanded the computer/live-update question and verified its answer. The subpage waitlist CTA returned to the home form.
- Observed the automatic carousel advance from the initial simple screen to the PC screen. Pause changed to Play correctly. All four direct selections worked, and Next wrapped from fourth to first. Reduced-motion handling was reviewed in code; no system preference was changed during testing.
- Phone carousel enlargement created an 816 px screen within a 297 px scroll container while the page stayed 375 px wide. Fit restored normal display.
- Responsive frames: homepage at 390 px, Specs at 768 px, and Specs/FAQs/Updates at 320 px. Available content widths with desktop scrollbars were 375, 753 and 305 px. None had horizontal page overflow.
- Mobile menu showed all four page links. Choosing Specs loaded the actual Specs document, closed the menu and selected its active-page marker.
- The colorful creative workspace image loaded and was visually checked alongside the distinct professional/gaming cards.
- Finish selection still updates the form; form selection still updates the finish.
- Desktop review images saved in `docs/slate-pages-home.png` and `docs/slate-specs-page.png`.

## Content checks

The Specs page uses the current 800 × 350 mm design and 792 × 272 / 5.79-inch display profile. Charging is explicitly a 15 W prototype module rating rather than a tested delivered-output claim. Power-adapter specification and final phone compatibility remain open. The mat diagram has the correct 800:350 aspect ratio but is schematic, not an assembly drawing.

The opening name is Slate, with Avolyn as the company. Pricing status is visible near the product name; no unapproved price or launch date was added. The accessory/concept notice sits below the opening section. The footer uses Avolyn without a product tagline beneath the company name.

## Limits

Browser frames are not physical iOS/Android device testing or a complete accessibility audit. No physical panel refresh, charging output, provider account authorization or firmware flash was tested here. Website readings are samples, and development specifications are not final shipping guarantees.

Live email collection was not tested. `VITE_WAITLIST_ENDPOINT` still needs a configured signup service before collecting subscribers. This revision is on `feature/slate-pages-and-specs`; no merge or deployment was performed.

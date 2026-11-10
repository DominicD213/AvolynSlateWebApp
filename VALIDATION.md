# Validation — November 10, 2026

## Current screen showcase revision

- Reviewed desktop app `main` at `fb49fd287707a29b092abb6cbc5bfe31559216a8`, calendar connection UI, themes documentation and theme controls, plus latest Mac candidate PR #35. See `docs/display-showcase.md`.
- Production build and `git diff --check` passed.
- Exercised six sample layouts with all three fonts (18 combinations), measuring SVG text bounds against their panels. Fixed the PC note in Typewriter and verified that corrected combination fits.
- Exercised all four backgrounds and verified background/font choices persist while switching layouts.
- Verified responsive browser frames at 320/390/768 px, with available content widths 305/375/753 px. Corrected a narrow heading-wrap issue; page widths fit without horizontal overflow.
- Enlarge preview created an 816 px horizontally scrollable screen inside the 227 px narrow container while the page remained 305 px wide; Fit preview restored the normal view.
- Both calendar providers are visible in the combined dashboard. Dedicated Google/Microsoft layouts and the minimal layout were exercised.
- Internal anchors resolved. Final desktop screenshot updated in `docs/slate-display-preview.png`.

These checks cover the website examples, not real calendar authorization, hardware refresh or a pixel-for-pixel reproduction of the desktop app.

## Previous homepage simplification (historical)

## Completed

- `npm ci --no-audit --no-fund` succeeded with the existing lockfile.
- Production build (`npm run build`) passed.
- `git diff --check` passed.
- Actual browser review of the hero, display/app section, audience cards and modular illustration at a desktop viewport approximately 1363 × 936.
- Responsive browser review in 320, 390 and 768 px iframe viewports. No horizontal overflow at the corresponding available content widths (305, 375 and 753 px with desktop scrollbars). Fixed the previous minimum-body-width overflow at the narrowest size. No overflowing headings, paragraphs or buttons in the narrowest layout.
- Phone menu opened, displayed the navigation and closed on selecting The display.
- Day planner, PC stats and Your design switched the display preview and selected state; PC stats and Your design also exercised in phone/tablet frames.
- All five finishes selected successfully and updated the waitlist's finish. Changing the form's finish also updated the page selector.
- FAQ expanded to show the pricing answer.
- Submitting fictional details with no endpoint configured displayed: "Signups are not open yet. Your details have not been sent or saved."
- All internal anchor targets resolved. No broken image sources in the rendered desktop page.
- Copy measurement using React static rendering: 1,807 words before, 781 after (56.8% reduction). Includes FAQ answers and hidden mobile navigation; not just initially visible text.

The reviewed desktop display/app section is saved in `docs/slate-display-preview.png`.

## Limits and launch dependencies

These are browser/iframe checks, not physical iOS/Android testing, a full accessibility audit or hardware verification. Desktop app features and final hardware integrations were not exercised through this website. Product/demo readings remain illustrative.

No live email collection was tested. `VITE_WAITLIST_ENDPOINT` must be configured with a working signup backend before collecting subscribers. Launch price/date, final specifications, shipping integrations, service terms and production compatibility still need the owner's product decisions and hardware testing.

The homepage simplification was merged separately. This screen revision is on `feature/showcase-custom-display` for review. No merge or production deployment was performed.

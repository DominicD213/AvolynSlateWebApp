# Specifications and page structure

This revision follows the owner’s website feedback: navigation should open separate pages, the product name and pricing should be easy to find, detailed specifications and setup answers should live away from the main product story, and display possibilities should be shown without exposing a full editor.

## Basis for current public values

| Value | Basis | Public treatment |
| --- | --- | --- |
| 800 × 350 mm mat | Owner's accepted current design dimensions, reiterated in the October product concept work | Current design, not final manufacturing guarantee |
| 5.79-inch black/white e-ink; 792 × 272 px | Owner-selected Waveshare profile and desktop app display configuration | Current panel/profile; physical controller/refresh validation remains separate |
| 15 W charging | Selected prototype Fusion Republic Qi module rating | Explicit component rating; no measured assembled-output claim |
| Power via external supply and USB-C connections | Current power/data design direction | Adapter output/negotiation, connector layout and included supply/cables remain unconfirmed; no exact consumer adapter recommendation |
| USB and 2.4 GHz Wi-Fi | Matching development desktop and firmware support for setup/preset operations | Describe setup and transfer roles; do not present current headless development work as completed physical display validation |
| Three on-device presets | Development firmware/desktop preset interface | Prototype implementation, distinct from the desktop's editable library |
| Windows and Mac | Windows development builds; latest Mac candidate work | Development/testing status, no customer-ready compatibility guarantee |
| Price | No finalized public price | `PRODUCT.priceUsd = null`; show pricing status prominently in the hero |

The business-plan retail figures are planning/test prices. They are not reused as an approved price. Internal voltage architecture and speculative adapter-current estimates are deliberately not turned into consumer instructions.

Desktop source already reviewed: `DominicD213/AvolynSlateDesktopApp` main `fb49fd287707a29b092abb6cbc5bfe31559216a8`, including its README, calendar connection UI, screen styling controls and themes documentation; latest Mac candidate PR #35. The earlier screen review is retained in `display-showcase.md` for source context, but the previous interactive editor-like website controls have been replaced by a four-example carousel.

## Routes

The homepage remains the product story. Specs contains measurements, ratings and requirements. FAQ holds detailed questions. Updates contains the current prototype status and a real dated development note, without invented milestone dates or launch promises.

`vite.config.js` builds actual `/specs/index.html`, `/faq/index.html` and `/updates/index.html` documents. This avoids relying on server rewrites for direct links and refreshes. All pages share the Avolyn brand, navigation, active-page markers and footer. Waitlist CTAs intentionally link to the one homepage form.

## Images

The creative audience image is a new colorful concept variant, not a representation of a finalized production colorway. Original images are retained. `IMAGE_PROMPTS.md` records the generation brief; final site asset is `public/images/slate-setup-creative-v2.webp`.

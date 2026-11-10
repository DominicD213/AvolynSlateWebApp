# Customizable display showcase

The screen section now explains customization through the desktop app and demonstrates six starting points, four background directions and three font families. Examples share the landscape 792 × 272 aspect ratio. The default Daily dashboard combines Google and Microsoft calendar events with a clock, sample weather, tasks and PC readings. Dedicated calendar views are quieter; Minimal and Make it yours emphasize a clock, personal words and background artwork.

Background and font state is independent of the selected layout. The website offers Plain, Dot grid, Botanical and Christmas examples. The desktop app supports additional built-in themes and importing a PNG/JPEG background; this is stated next to the controls and in the FAQ. No file upload or account sign-in was added to the website. Enlarge preview allows horizontal inspection at a readable size on narrow screens, and Fit preview returns to the fitted screen.

## Desktop source reviewed

Capabilities were checked against desktop `main` at `fb49fd287707a29b092abb6cbc5bfe31559216a8`:

- [README](https://github.com/DominicD213/AvolynSlateDesktopApp/blob/fb49fd287707a29b092abb6cbc5bfe31559216a8/README.md): widgets, display size, placement/resizing, calendar setup and data-source requirements.
- [ConnectionsPage](https://github.com/DominicD213/AvolynSlateDesktopApp/blob/fb49fd287707a29b092abb6cbc5bfe31559216a8/src/ConnectionsPage.jsx): Google/Microsoft calendar connections, calendar selection and .ics snapshots.
- [ScreenStylePanel](https://github.com/DominicD213/AvolynSlateDesktopApp/blob/fb49fd287707a29b092abb6cbc5bfe31559216a8/src/ScreenStylePanel.jsx) and [themes documentation](https://github.com/DominicD213/AvolynSlateDesktopApp/blob/fb49fd287707a29b092abb6cbc5bfe31559216a8/docs/screen-themes.md): themes, custom PNG/JPEG backgrounds and Modern/Classic serif/Typewriter fonts.
- [Latest Mac candidate PR #35](https://github.com/DominicD213/AvolynSlateDesktopApp/pull/35): platform packaging update; does not establish a customer-ready release or physical hardware support.

## Boundaries

Website layouts and botanical/seasonal patterns are purpose-built illustrations, not app screenshots. All events, weather and PC readings are fictional sample data. Changing a layout is not a demonstration of actual e-ink refresh speed. Calendar connections require provider configuration and account permission; work accounts can be subject to organizational approval. Physical panel refresh and customer-ready integrations remain separate validation work.

## Verification

Production build and diff checks passed. Browser checks exercised every layout/font combination, all background choices, independent appearance state, narrow frame widths and enlarge/fit behavior. One long Typewriter note and one narrow heading-wrap issue were corrected. See `VALIDATION.md`; the reviewed default view is in `slate-display-preview.png`.

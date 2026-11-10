import React from 'react';
import { ArrowUpRight, Cable, Monitor, Plug, Wifi } from 'lucide-react';
import { PRODUCT, pageHref } from './product.js';
import './pages.css';

function PageIntro({ eyebrow, title, children }) {
  return <section className="page-intro"><div className="container"><p className="section-kicker"><span aria-hidden="true"/>{eyebrow}</p><h1>{title}</h1>{children && <p className="page-lead">{children}</p>}</div></section>;
}
function PageCta() {
  return <section className="page-cta"><div className="container"><div><h2>Stay close to Slate.</h2><p>Development updates, launch timing and pricing.</p></div><a href={`${pageHref('about')}#waitlist`} className="button button-dark">Join the waitlist <ArrowUpRight size={17}/></a></div></section>;
}
function DimensionDiagram() {
  return <figure className="dimension-figure"><svg viewBox="0 0 790 425" role="img" aria-label="Current desk mat design: 800 millimeters wide by 350 millimeters deep, with separate display and charging areas. Diagram is schematic."><g fill="none" stroke="#8d755c" strokeWidth="1.5"><path d="M75 52H715M75 44V60M715 44V60M38 85V365M30 85H46M30 365H46"/><rect x="75" y="85" width="640" height="280" rx="18" fill="#e5d7c2" stroke="#aa9275"/><rect x="280" y="105" width="200" height="63" rx="7" fill="#efeee3" stroke="#766e5b"/><rect x="576" y="105" width="126" height="76" rx="10" fill="#c7c3ae"/><circle cx="512" cy="136" r="11" fill="#a49b88"/><path d="M616 143H662M639 120V165" stroke="#7f816a"/></g><g fill="#51412f" fontFamily="Arial, sans-serif"><text x="395" y="35" textAnchor="middle" fontSize="21">800 mm / 31.5 in</text><text x="18" y="225" textAnchor="middle" fontSize="20" transform="rotate(-90 18 225)">350 mm / 13.8 in</text><text x="380" y="144" textAnchor="middle" fontSize="19">E-INK DISPLAY</text><text x="395" y="287" textAnchor="middle" fontSize="35" letterSpacing="6">SLATE</text></g></svg><figcaption>Current design dimensions · Simplified diagram, not an assembly drawing.</figcaption></figure>;
}
export function SpecsPage() {
  const specs = [
    ['Desk mat', PRODUCT.matSize, 'Current design · Approximately 31.5 × 13.8 in'],
    ['Display', `${PRODUCT.displaySize} · Black and white e-ink`, 'Dedicated information display; no touch input'],
    ['Resolution', PRODUCT.resolution, 'Landscape profile used by the desktop app'],
    ['Wireless charging', PRODUCT.chargingRating, 'Prototype component rating. Delivered charging power and phone compatibility still need testing.'],
    ['Power', 'External power through USB-C', 'Final adapter rating, connector layout and included cables to be confirmed. A basic computer USB port is not a confirmed full-power charging source.'],
    ['USB', 'Setup and saved-layout transfers', 'Development desktop app and matching Slate firmware'],
    ['Wi-Fi', '2.4 GHz · Local network connection', 'For wireless transfer, Slate and the computer must be on a reachable shared network.'],
    ['Desktop software', 'Windows development builds · macOS in testing', 'Use the Avolyn desktop app to build layouts, connect data and manage presets.'],
    ['Saved layouts', 'Three on-device preset slots in prototype firmware', 'The desktop app also keeps your editable preset library.'],
    ['Construction', 'Swappable mat, display and charging modules', 'Woven, linen-inspired surface; final materials, mounts and compatibility are in development.'],
  ];
  return <><PageIntro eyebrow="SLATE / SPECS" title="The details behind your desk.">Size, power, connections, and what you’ll need to get started.</PageIntro>
    <section className="specs-overview"><div className="container"><div className="spec-metrics"><div><strong>800 × 350<span>mm</span></strong><p>Current mat design</p></div><div><strong>792 × 272<span>px</span></strong><p>5.79-inch e-ink display</p></div><div><strong>15<span>W</span></strong><p>Charging module rating*</p></div></div><DimensionDiagram/><p className="spec-status">Slate is a prototype in development. These are current design specifications and component ratings, rather than a finalized shipping specification. *Actual charging output depends on the final hardware, power supply, phone and case.</p></div></section>
    <section className="spec-details section-pad"><div className="container"><h2>Current specifications.</h2><table className="spec-table"><caption className="sr-only">Slate prototype specifications, with current status and requirements</caption><thead><tr><th scope="col">Specification</th><th scope="col">Current design</th><th scope="col">What to know</th></tr></thead><tbody>{specs.map(([label, value, note]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td><td>{note}</td></tr>)}</tbody></table></div></section>
    <section className="requirements-section section-pad"><div className="container"><h2>What you’ll need.</h2><div className="requirement-grid">{[
      [Monitor, 'A computer and the app', 'Create layouts and connect your data in the Avolyn desktop app. Keep the app open and the computer awake for live updates.'],
      [Plug, 'A suitable power supply', 'Slate needs external power for its electronics and phone charging. The final adapter requirements and package contents will be published before orders open.'],
      [Wifi, 'USB or a local Wi-Fi connection', 'USB supports setup and saved-layout transfers. For wireless transfers, use a 2.4 GHz network that lets Slate reach your computer.'],
      [Cable, 'Your chosen data sources', 'Sign in to connected calendars as required. Stocks may need a provider API key, and PC temperatures depend on your computer’s supported sensors.'],
    ].map(([Icon, title, copy]) => <article key={title}><Icon size={25} aria-hidden="true"/><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="connection-note"><h3>Power and data do different jobs.</h3><p>Wall power keeps Slate powered. Your computer supplies layouts and connected information through the desktop app, using USB or local Wi-Fi. A Wi-Fi connection does not replace the power connection.</p><a className="text-link" href={pageHref('faq')}>More setup answers <ArrowUpRight size={16}/></a></div></div></section><PageCta/></>;
}
const faqGroups = [
  { title: 'The product', items: [
    ['What is Slate?', 'Slate is Avolyn’s modular desk mat, being developed with a dedicated e-ink information display, wireless charging and a swappable fabric surface. Information appears on the display built into the mat.'],
    ['Is the display a touchscreen or touchpad?', 'No. It is an e-ink information display. You edit layouts and choose content in the Avolyn desktop app on your computer.'],
    ['How customizable is the display?', 'Move and resize widgets for calendars, time, tasks, notes, weather, news, pictures and supported PC readings. Change fonts, choose a built-in theme or add your own PNG/JPEG background, and save or import presets. Website examples are starting points, not fixed layouts.'],
    ['Can I swap the mat or replace one module?', 'That is the design goal: release the display and charger from underneath and move them into a compatible Slate mat. Individual modules are intended to be replaceable. Mounts, compatibility, spare parts and warranty terms are still being finalized.'],
    ['Are the keyboard, mouse and phone included?', 'No. Keyboards, mice, phones, computers and other desk accessories in the concept images are not included. Accessory brands are not affiliated with Avolyn. Final starter-kit contents will be published before orders open.'],
  ]},
  { title: 'Setup and connections', items: [
    ['How does Slate connect?', 'The development system supports USB setup and saved-layout transfers, plus authenticated preset transfers over local 2.4 GHz Wi-Fi. Wireless use needs Slate and your computer on a network where they can reach one another. Slate also needs a power connection.'],
    ['Does the computer need to stay on?', 'For live calendar, stock, weather or system updates from the desktop app, keep the app open and the computer awake. Stored presets and live data updates are different features; the final device’s offline behavior and refresh timing are still being validated.'],
    ['Can I use Google or Microsoft Calendar?', 'The desktop app includes Google Calendar and Microsoft Calendar connections, calendar selection and agenda views. Account setup and permission are required; workplace accounts may need administrator approval. An imported .ics calendar file is a snapshot and must be imported again when it changes.'],
    ['Can it show stock prices and CPU/GPU temperatures?', 'The desktop app includes stock and supported PC-stat widgets. Stock data can need your own provider API key and is subject to provider limits and update intervals. Temperature readings depend on the computer, sensors and any required monitoring software; unavailable readings stay unavailable.'],
    ['Will it work on Windows and Mac?', 'Windows development builds are available for testing, and Apple Silicon and Intel Mac builds are being tested. Final customer-ready support and installation requirements will be published before launch.'],
    ['Will it charge my phone at 15 watts?', 'The chosen prototype charging module has a 15 W rating. Actual delivered power in the assembled Slate has not been validated and depends on the phone, case, power supply, coil placement and thermal design. Final charging speeds and compatible phones will be published after testing.'],
    ['What power adapter do I need?', 'The design uses external power with USB-C connections. The final adapter rating, power negotiation, cable layout and included accessories are still being validated. Do not assume a basic computer USB port can provide the intended phone-charging performance.'],
  ]},
  { title: 'Launch and availability', items: [
    ['How much will Slate cost?', 'Launch pricing has not been finalized. Once confirmed, the starter-kit price will appear prominently at the top of the About Slate page, alongside what is included.'],
    ['When can I buy it?', 'Slate is in prototype development with no confirmed launch date. The Updates page shares current progress; the waitlist is for development news, launch timing and pricing.'],
    ['Where can I find the size and specifications?', 'The Specs page lists the current 800 × 350 mm mat design, 5.79-inch display, 792 × 272 pixel profile, charging module rating and connection requirements. Final production specifications may change.'],
  ]},
];
export function FAQPage() {
  return <><PageIntro eyebrow="SLATE / FAQS" title="A few useful answers.">From your first connection to a new finish.</PageIntro><section className="faq-page-body"><div className="container">{faqGroups.map(group => <section className="faq-topic" key={group.title}><h2>{group.title}</h2><div className="faq-questions">{group.items.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>)}<p className="faq-spec-link">Looking for measurements and setup requirements? <a className="text-link" href={pageHref('specs')}>See Slate Specs <ArrowUpRight size={16}/></a></p></div></section><PageCta/></>;
}
export function UpdatesPage() {
  return <><PageIntro eyebrow="SLATE / UPDATES" title="Taking shape, one detail at a time.">Follow the work behind Slate and what comes next.</PageIntro><section className="updates-section"><div className="container"><div className="development-status"><div><span className="status-pill">IN DEVELOPMENT</span><h2>Prototype stage.</h2><p>The product is taking shape across hardware, software and materials.</p></div><div className="launch-status"><span>LAUNCH TIMING</span><strong>To be announced.</strong><p>We’ll share a date when the complete experience is ready.</p></div></div><article className="update-entry"><div><time dateTime="2026-11-10">November 10, 2026</time><span>DEVELOPMENT NOTE</span></div><div><h2>A more personal display.</h2><p>The desktop app now brings together editable widgets, Google and Microsoft calendar connections, built-in themes, your own image backgrounds, fonts and saved presets. USB and local Wi-Fi preset transfers are part of the development system.</p><p>Windows builds are being tested, with Apple Silicon and Intel Mac builds also in testing. Product images and screen examples show the direction of the experience.</p><h3>What we’re validating next</h3><ul><li>The physical e-ink display and refresh behavior.</li><li>Charging performance with the assembled mat, power supply and phones.</li><li>Material feel, underside module mounts and swapping between compatible mats.</li></ul><p className="update-outlook">Launch pricing, final specifications and package contents will be shared before orders open.</p></div></article></div></section><PageCta/></>;
}

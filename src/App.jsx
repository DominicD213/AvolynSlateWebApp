import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Layers3, Menu, Monitor, X, Zap } from 'lucide-react';

import DisplayShowcase from './DisplayShowcase.jsx';

const ASSET = `${import.meta.env.BASE_URL}images/`;
const colorways = [
  { id: 'sakura', name: 'Sakura', description: 'Cherry blossoms and ink-wash landscapes.', color: '#c9a799' },
  { id: 'linen', name: 'Linen', description: 'Warm, understated, and easy to make your own.', color: '#c9bcaa' },
  { id: 'charcoal', name: 'Charcoal', description: 'A darker canvas for a clean setup.', color: '#353535' },
  { id: 'sage', name: 'Sage', description: 'Muted green with a natural character.', color: '#7f9282' },
  { id: 'navy', name: 'Navy', description: 'Deep blue with an understated finish.', color: '#2f4355' },
];
function Logo({ onClick }) {
  return <a className="brand" href="#top" onClick={onClick} aria-label="Avolyn home">AVOLYN<span>.</span></a>;
}
function Header({ onWaitlist }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  useEffect(() => {
    const onKey = event => { if (event.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return <header className="site-header"><div className="header-inner container">
    <Logo onClick={close}/>
    <nav id="main-navigation" className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
      <a href="#features" onClick={close}>The display</a><a href="#modularity" onClick={close}>Modularity</a><a href="#colors" onClick={close}>Finishes</a><a href="#faq" onClick={close}>FAQs</a>
      <button className="nav-mobile-cta" onClick={() => { close(); onWaitlist(); }}>Join the waitlist <ArrowUpRight size={17}/></button>
    </nav>
    <button className="button button-dark header-cta" onClick={onWaitlist}>Join the waitlist <ArrowUpRight size={16}/></button>
    <button className="menu-toggle" aria-controls="main-navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}>{menuOpen ? <X size={25}/> : <Menu size={25}/>}</button>
  </div></header>;
}
function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title"><div className="hero-image" role="img" aria-label="Sakura Slate desk mat concept with e-ink display and wireless charging area. Keyboard, mouse, phone and desk accessories shown separately."/><div className="hero-shade"/>
    <div className="container hero-inner"><div className="hero-copy"><p className="eyebrow">SLATE BY AVOLYN</p><h1 id="hero-title">The modular<br/><em>desk mat.</em></h1><p>An e-ink display for your daily essentials. Wireless charging within reach. A swappable mat that makes the setup yours.</p><a className="button button-cream" href="#waitlist">Join the waitlist <ArrowUpRight size={17}/></a><p className="hero-availability">In development · Launch date to be announced</p></div><p className="hero-product-note">Product concept. Keyboard, mouse, phone and other desk accessories are not included.</p></div>
  </section>;
}
function SectionKicker({ children }) {
  return <p className="section-kicker"><span aria-hidden="true"/>{children}</p>;
}
function Features() {
  return <section className="features-section section-pad" id="features" aria-labelledby="features-title"><div className="container">
    <div className="display-intro"><div className="display-copy"><SectionKicker>THE E-INK DISPLAY</SectionKicker><h2 id="features-title">Your day in view.<br/><em>Your work on screen.</em></h2><p>Keep a useful detail beside your keyboard, so checking your next meeting doesn’t mean leaving what you’re doing.</p><span className="display-type"><Monitor size={17} aria-hidden="true"/>Information display · No touch input</span></div><figure className="display-photo"><img src={`${ASSET}slate-display-context.webp`} alt="Close-up concept of Slate's e-ink display set into the fabric mat, beside a keyboard and charging area" loading="lazy" width="1894" height="830"/><figcaption>Product concept · Sample display content</figcaption></figure></div>
    <DisplayShowcase/>
    <article className="charging-feature"><img src={`${ASSET}slate-hero.webp`} alt="Concept close-up of Slate's removable wireless charging area" loading="lazy"/><div><span className="feature-label"><Zap size={16} aria-hidden="true"/>WIRELESS CHARGING</span><h3>A home for your phone.</h3><p>A dedicated charging area, built into your mat. One fewer separate accessory on your desk.</p><span className="small-note">In development · Phone compatibility and charging speed to be confirmed.</span></div></article>
  </div></section>;
}
const audienceStories = [
  { id: 'work', title: 'For focused work', copy: 'Keep your next event in sight while the work stays on your main screen.', image: 'slate-setup-work.webp', alt: 'Slate concept in a professional desk setup' },
  { id: 'gaming', title: 'For setup enthusiasts', copy: 'Bring your desk together with a personal finish and planned PC stats at a glance.', image: 'slate-setup-gaming.webp', alt: 'Charcoal Slate concept in a gaming and PC enthusiast setup' },
  { id: 'studio', title: 'For creative spaces', copy: 'Match your workspace to your style, with a display layout you make your own.', image: 'slate-setup-studio.webp', alt: 'Slate concept in a bright creative studio' },
];
function WhoItsFor() {
  return <section className="audience-section section-pad" id="for-you" aria-labelledby="audience-title"><div className="container"><h2 id="audience-title">For people who care<br/><em>about their desk.</em></h2><div className="audience-grid">{audienceStories.map(story => <article className="audience-card" key={story.id}><img src={ASSET + story.image} alt={story.alt} loading="lazy" width="1536" height="1024"/><div><h3>{story.title}</h3><p>{story.copy}</p></div></article>)}</div><p className="small-note audience-note">Concept setups · Desk accessories are not included.</p></div></section>;
}
function MatDiagram({ underside = false }) {
  if (underside) return <div className="mat-diagram mat-diagram--underside" role="img" aria-label="Simplified underside concept: the display and charger housings are released below their mounts."><div className="mat-underside"><span>DISPLAY MOUNT</span><span>CHARGER MOUNT</span></div><div className="mat-release-arrows" aria-hidden="true"><ArrowDown/><ArrowDown/></div><div className="mat-housings"><span>Display module</span><span>Charger module</span></div></div>;
  return <div className="mat-diagram mat-diagram--sage" role="img" aria-label="Simplified top view of a Sage mat with the same display and wireless charger installed."><div className="mat-top"><div className="mat-display"><strong>09:41</strong><span>YOUR DAY, IN VIEW.</span></div><div className="mat-charger"><Zap size={22} aria-hidden="true"/></div></div></div>;
}
function ModularSwapStory() {
  return <section className="modular-section section-pad" id="modularity" aria-labelledby="modular-title"><div className="container modular-layout"><div className="modular-copy"><SectionKicker>MODULAR BY DESIGN</SectionKicker><h2 id="modular-title">New mat.<br/><em>Same modules.</em></h2><p>The display and charger are designed to release from underneath and move into another compatible Slate mat.</p><p className="replacement-note"><Layers3 size={22} aria-hidden="true"/><span>Replace an individual module when needed. Keep the rest of your setup.</span></p></div><figure className="swap-visual"><div className="swap-stages"><div><MatDiagram underside/><h3>Release from underneath</h3></div><ArrowRight className="swap-arrow" aria-hidden="true" size={26}/><div><MatDiagram/><h3>Refit in a compatible mat</h3></div></div><figcaption>Modular design concept. Mounts, swapping process, compatibility and replacement-part availability are still being developed.</figcaption></figure></div></section>;
}
function Colorways({ activeId, setActiveId }) {
  const active = colorways.find(item => item.id === activeId);
  return <section className="colorways-section section-pad" id="colors" aria-labelledby="colors-title"><div className="container"><div className="color-heading"><div><SectionKicker>FIND YOUR FINISH</SectionKicker><h2 id="colors-title">Premium begins<br/><em>on the surface.</em></h2></div><p>A woven, linen-inspired texture with a tailored edge. Explore five finishes for a desk that feels like yours.</p></div><div className="color-layout"><div className="color-main-visual" aria-live="polite"><img key={active.id} src={`${ASSET}slate-${active.id}.webp`} alt={`${active.name} Slate mat concept with e-ink display and charging area; keyboard and mouse are illustrative accessories`} loading="lazy"/><span className="preview-watermark">{active.name} / Concept finish</span></div><div className="color-panel"><span className="feature-label">CHOOSE A FINISH</span><h3>{active.name}</h3><p>{active.description}</p><div className="swatch-list" role="group" aria-label="Choose a Slate colorway">{colorways.map(item => <button type="button" key={item.id} className={`swatch-button ${activeId === item.id ? 'active' : ''}`} onClick={() => setActiveId(item.id)} aria-pressed={activeId === item.id}><span className={`swatch-circle ${item.id}`} style={{ '--swatch': item.color }}/><span>{item.name}</span>{activeId === item.id && <Check size={17} aria-hidden="true"/>}</button>)}</div><p className="small-note finish-note">Concept previews. Final materials and colors may vary.</p></div></div></div></section>;
}
function FAQ() {
  const items = [
    ['What is Avolyn Slate?', 'A modular desk mat being developed with an e-ink information display, a removable wireless charging module, and interchangeable mat finishes.'],
    ['Are the keyboard and mouse included?', 'No. Keyboards, mice, phones, computers and other desk accessories in the images are not included. Product images are concept renders; accessory brands are not affiliated with Avolyn.'],
    ['Is the display a touchscreen or touchpad?', 'No. The e-ink module displays information. You customize its layout in the Avolyn desktop app on your computer.'],
    ['How customizable is the screen?', 'Build a minimal clock or a detailed dashboard in the Avolyn desktop app. Add, move and resize widgets for calendars, time, tasks, notes, weather, news, pictures and supported PC stats. Choose a built-in background or add your own PNG/JPEG, change the font, and save or import your own presets. Website examples use sample data; final hardware behavior is still being validated.'],
    ['Can I use Google or Microsoft Calendar?', 'The desktop app includes Google Calendar and Microsoft Calendar connections, calendar selection and agenda views. Account setup and permission are required; workplace accounts may need administrator approval. You can also import an .ics calendar file as a snapshot. Live customer sign-in and final hardware behavior are still being validated.'],
    ['Will it work with my computer and phone?', 'Final Windows and macOS support, connection requirements, compatible phones and charging speeds will be published after testing. Some PC sensors and connected data sources may need additional setup.'],
    ['Can I swap the mat or replace a module?', 'That is the design goal: release the display and charger from underneath, then refit them into a compatible Slate mat. Each module is intended to be replaceable separately. The attachment method, compatibility, spare parts, pricing and warranty are still being finalized.'],
    ['What are the materials and dimensions?', 'The current direction is a woven, linen-inspired surface with a tailored edge. Final fabric composition, dimensions and care instructions will be shared before orders open.'],
    ['How much will Slate cost?', 'Launch pricing is still being finalized. We’ll share the starter-kit price and what it includes before orders open.'],
    ['When will Slate be available?', 'Slate is in development, with no confirmed launch date yet. Join the waitlist for development updates, launch timing and pricing.'],
  ];
  return <section className="faq-section section-pad" id="faq" aria-labelledby="faq-title"><div className="container faq-layout"><h2 id="faq-title">A few<br/><em>useful answers.</em></h2><div>{items.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>;
}
function WaitlistForm({ finish, setFinish }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const endpoint = import.meta.env.VITE_WAITLIST_ENDPOINT?.trim();
  async function submit(event) {
    event.preventDefault();
    if (!endpoint) { setStatus('demo'); setMessage('Signups are not open yet. Your details have not been sent or saved.'); return; }
    setStatus('loading'); setMessage('');
    try {
      const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify({ name, email, finish, product: 'Slate', source: 'Avolyn site' }) });
      if (!response.ok) throw new Error('We could not add you right now. Please try again.');
      setStatus('success'); setMessage('You’re on the list. We’ll keep you updated on Slate’s development and launch.');
    } catch (error) { setStatus('error'); setMessage(error.message || 'Please try again later.'); }
  }
  return <div className="destination-form">{status === 'success' ? <div className="form-feedback success" role="status"><Check size={22}/>{message}</div> : <form className="waitlist-form" onSubmit={submit}>
    <label htmlFor="waitlist-name">Your name</label><input id="waitlist-name" name="name" autoComplete="name" placeholder="Your name" required value={name} onChange={event => setName(event.target.value)}/>
    <label htmlFor="waitlist-email">Email address</label><input id="waitlist-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required value={email} onChange={event => setEmail(event.target.value)}/>
    <label htmlFor="waitlist-finish">Favorite finish</label><select id="waitlist-finish" name="finish" value={finish} onChange={event => setFinish(event.target.value)}>{colorways.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select>
    <button className="button button-dark" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Joining…' : 'Join the waitlist'}<ArrowUpRight size={17}/></button>
    {message && <div className={`form-feedback ${status}`} role="status">{message}</div>}
    <small>{endpoint ? 'Occasional Slate product updates.' : 'Preview only. Signups are not open yet.'}</small>
  </form>}</div>;
}
function FinalCta({ finish, setFinish }) {
  return <section className="destination section-pad" id="waitlist" aria-labelledby="destination-title"><div className="container destination-grid"><div className="destination-copy"><SectionKicker>SLATE IS TAKING SHAPE</SectionKicker><h2 id="destination-title">Be part of<br/><em>what comes next.</em></h2><p>Join the waitlist for development updates, launch timing and pricing.</p></div><WaitlistForm finish={finish} setFinish={setFinish}/></div></section>;
}
function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><div><Logo/><p>A modular desk mat. Made to be yours.</p></div><a href="#faq">FAQs</a><span>© {new Date().getFullYear()} Avolyn · In development</span></div></footer>;
}
export default function App() {
  const [finish, setFinish] = useState('sakura');
  const goToWaitlist = () => document.getElementById('waitlist')?.scrollIntoView({ behavior: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  return <><a className="skip-link" href="#features">Skip to product details</a><Header onWaitlist={goToWaitlist}/><main><Hero/><Features/><WhoItsFor/><ModularSwapStory/><Colorways activeId={finish} setActiveId={setFinish}/><FAQ/><FinalCta finish={finish} setFinish={setFinish}/></main><Footer/></>;
}

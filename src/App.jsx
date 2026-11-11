import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Layers3, Menu, Monitor, X, Zap } from 'lucide-react';

import DisplayShowcase from './DisplayShowcase.jsx';
import { SpecsPage, FAQPage, UpdatesPage } from './ContentPages.jsx';
import { PAGE_LINKS, PRODUCT, pageHref } from './product.js';

const ASSET = `${import.meta.env.BASE_URL}images/`;
const colorways = [
  { id: 'sakura', name: 'Sakura', description: 'Cherry blossoms and ink-wash landscapes.', color: '#c9a799' },
  { id: 'linen', name: 'Linen', description: 'Warm, understated, and easy to make your own.', color: '#c9bcaa' },
  { id: 'charcoal', name: 'Charcoal', description: 'A darker canvas for a clean setup.', color: '#353535' },
  { id: 'sage', name: 'Sage', description: 'Muted green with a natural character.', color: '#7f9282' },
  { id: 'navy', name: 'Navy', description: 'Deep blue with an understated finish.', color: '#2f4355' },
];
function Logo({ onClick }) {
  return <a className="brand" href={pageHref('about')} onClick={onClick} aria-label="Avolyn home">AVOLYN<span>.</span></a>;
}
function Header({ page }) {
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
      {PAGE_LINKS.map(item => <a key={item.id} href={pageHref(item.id)} aria-current={page === item.id ? 'page' : undefined} onClick={close}>{item.label}</a>)}
      <a className="nav-mobile-cta" href={`${pageHref('about')}#waitlist`} onClick={close}>Join the waitlist <ArrowUpRight size={17}/></a>
    </nav>
    <a className="button button-dark header-cta" href={`${pageHref('about')}#waitlist`}>Join the waitlist <ArrowUpRight size={16}/></a>
    <button className="menu-toggle" aria-controls="main-navigation" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}>{menuOpen ? <X size={25}/> : <Menu size={25}/>}</button>
  </div></header>;
}
function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title"><div className="hero-image" role="img" aria-label="Sakura Slate desk mat concept with e-ink display and wireless charging area. Keyboard, mouse, phone and desk accessories shown separately."/><div className="hero-shade"/>
    <div className="container hero-inner"><div className="hero-copy"><p className="eyebrow">BY AVOLYN</p><h1 id="hero-title">Slate<span>.</span></h1><p className="hero-product-type">The modular desk mat.</p><div className="hero-price">{PRODUCT.priceUsd === null ? PRODUCT.pricePending : new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0}).format(PRODUCT.priceUsd)}</div><p>A dedicated e-ink display, wireless charging, and a mat you can swap. Useful information, right beside your keyboard.</p><a className="button button-cream" href="#waitlist">Join the waitlist <ArrowUpRight size={17}/></a><p className="hero-availability">In development · <a href={pageHref('updates')}>Follow the progress <ArrowUpRight size={13}/></a></p></div></div>
  </section>;
}
function SectionKicker({ children }) {
  return <p className="section-kicker"><span aria-hidden="true"/>{children}</p>;
}
function Features() {
  return <section className="features-section section-pad" id="features" aria-labelledby="features-title"><div className="container">
    <div className="display-intro"><div className="display-copy"><SectionKicker>THE E-INK DISPLAY</SectionKicker><h2 id="features-title">Your day in view.<br/><em>Your work on screen.</em></h2><p>Keep a useful detail beside your keyboard, so checking your next meeting doesn’t mean leaving what you’re doing.</p><span className="display-type"><Monitor size={17} aria-hidden="true"/>Information display · No touch input</span></div><figure className="display-photo"><img src={`${ASSET}slate-display-context.webp`} alt="Close-up concept of Slate's e-ink display set into the fabric mat, beside a keyboard and charging area" loading="lazy" width="1894" height="830"/><figcaption>Product concept · Sample display content</figcaption></figure></div>
    <DisplayShowcase/>
    <article className="charging-feature"><img src={`${ASSET}slate-hero.webp`} alt="Concept close-up of Slate's removable wireless charging area" loading="lazy"/><div><span className="feature-label"><Zap size={16} aria-hidden="true"/>WIRELESS CHARGING</span><h3>A home for your phone.</h3><p>A dedicated charging area, built into your mat. One fewer accessory on your desk.</p><span className="small-note">In development · Phone compatibility and charging speed to be confirmed.</span></div></article>
  </div></section>;
}
const audienceStories = [
  { id: 'work', title: 'For focused work', copy: 'Keep your next event in sight while the work stays on your main screen.', image: 'slate-setup-work-master-v3.webp', alt: 'Slate concept in a professional desk setup' },
  { id: 'gaming', title: 'For setup enthusiasts', copy: 'Bring your desk together with a personal finish and planned PC stats at a glance.', image: 'slate-setup-gaming-master-v3.webp', alt: 'Charcoal Slate concept in a gaming and PC enthusiast setup' },
  { id: 'studio', title: 'For creative spaces', copy: 'Match your workspace to your style, with a display layout you make your own.', image: 'slate-setup-creative-master-v4.webp', alt: 'Slate concept in a bright creative studio' },
];
function WhoItsFor() {
  return <section className="audience-section section-pad" id="for-you" aria-labelledby="audience-title"><div className="container"><h2 id="audience-title">For people who care<br/><em>about their desk.</em></h2><div className="audience-grid">{audienceStories.map(story => <article className="audience-card" key={story.id}><img src={ASSET + story.image} alt={story.alt} loading="lazy" decoding="async" width="1672" height="941"/><div><h3>{story.title}</h3><p>{story.copy}</p></div></article>)}</div><p className="small-note audience-note">Concept setups · Desk accessories are not included.</p></div></section>;
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
function SetupSummary() {
  return <section className="setup-summary section-pad"><div className="container"><div><h2>Made for your setup.</h2><p>Power Slate, create your layout in the desktop app, and connect over USB or local Wi-Fi.</p><a className="text-link" href={pageHref('specs')}>Size, power and setup requirements <ArrowUpRight size={16}/></a></div><aside><p>Slate is in development. Images show design concepts; keyboards, mice, phones and other desk accessories are not included.</p><a href={pageHref('faq')}>Read the FAQs <ArrowUpRight size={15}/></a></aside></div></section>;
}
function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><Logo/><nav aria-label="Footer navigation">{PAGE_LINKS.map(item => <a key={item.id} href={pageHref(item.id)}>{item.label}</a>)}</nav><span>© {new Date().getFullYear()} Avolyn</span></div></footer>;
}
export default function App() {
  const [finish, setFinish] = useState('sakura');
  const page = document.body.dataset.page || 'about';
  const content = page === 'specs' ? <SpecsPage/> : page === 'faq' ? <FAQPage/> : page === 'updates' ? <UpdatesPage/> : <><Hero/><Features/><WhoItsFor/><ModularSwapStory/><Colorways activeId={finish} setActiveId={setFinish}/><SetupSummary/><FinalCta finish={finish} setFinish={setFinish}/></>;
  return <><a className="skip-link" href="#main-content">Skip to content</a><Header page={page}/><main id="main-content">{content}</main><Footer/></>;
}

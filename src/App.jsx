import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowDown, ArrowUpRight, ArrowLeft, ArrowRight, Check, Layers3,
  Leaf, Menu, RotateCcw, X
} from 'lucide-react';

const ASSET = `${import.meta.env.BASE_URL}images/`;
const colorways = [
  { id: 'sakura', name: 'Sakura', eyebrow: 'Signature concept', description: 'Cherry blossoms and ink-wash landscapes bring an expressive touch to your desk.', color: '#c9a799', className: 'sakura', status: 'Shown in reference render' },
  { id: 'linen', name: 'Linen', eyebrow: 'Color exploration', description: 'Warm, understated, and at home in almost any workspace.', color: '#c9bcaa', className: 'linen', status: 'Concept colorway' },
  { id: 'charcoal', name: 'Charcoal', eyebrow: 'Color exploration', description: 'A quieter, darker canvas for a clean setup.', color: '#353535', className: 'charcoal', status: 'Concept colorway' },
  { id: 'sage', name: 'Sage', eyebrow: 'Color exploration', description: 'A muted green that brings a calm, natural character to your workspace.', color: '#7f9282', className: 'sage', status: 'Concept colorway' },
  { id: 'navy', name: 'Navy', eyebrow: 'Color exploration', description: 'Deep blue with a rich, understated finish.', color: '#2f4355', className: 'navy', status: 'Concept colorway' },
];

function Logo({ onClick }) {
  return <a className="brand" href="#top" onClick={onClick} aria-label="Avolyn home">AVOLYN<span className="brand-dot">.</span></a>;
}

function Header({ onWaitlist }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return <header className="site-header">
    <div className="header-inner container">
      <Logo onClick={close}/>
      <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        <a href="#materials" onClick={close}>The feel</a>
        <a href="#features" onClick={close}>The function</a>
        <a href="#design" onClick={close}>The platform</a>
        <a href="#colors" onClick={close}>Colorways</a>
        <a href="#faq" onClick={close}>FAQs</a>
        <button className="nav-mobile-cta" onClick={() => {close(); onWaitlist();}}>Join the waitlist <ArrowUpRight size={17}/></button>
      </nav>
      <button className="button button-dark header-cta" onClick={onWaitlist}>Join the waitlist <ArrowUpRight size={15}/></button>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(o => !o)}>{menuOpen ? <X size={25}/> : <Menu size={25}/>}</button>
    </div>
  </header>;
}

function Hero() {
  return <section className="hero" id="top">
    <div className="hero-image" role="img" aria-label="Slate smart desk mat with Sakura artwork, keyboard, e-ink module, wireless charging area and a Japanese-inspired desktop setup"/>
    <div className="hero-shade"/>
    <div className="container hero-inner">
      <div className="hero-copy">
        <div className="eyebrow eyebrow-light"><span className="tiny-diamond"/> MEET SLATE BY AVOLYN</div>
        <h1>A place to begin.<br/><em>Room to evolve.</em></h1>
        <p>A premium desk surface built around a modular platform. Keep everyday information in view, spend less time switching tabs, and make room for the way you work.</p>
        <div className="hero-actions">
          <a className="button button-cream" href="#slate">Begin the journey <ArrowDown size={17}/></a>
          <a className="hero-text-link" href="#waitlist">Join the waitlist <ArrowUpRight size={17}/></a>
        </div>
      </div>
      <div className="hero-footer">
        <span>ONE SURFACE. AN OPEN FUTURE.</span>
        <span className="hero-footer-right"><span className="hero-line"/> SCROLL TO EXPLORE</span>
      </div>
    </div>
  </section>;
}

function SectionKicker({ children }) {
  return <div className="section-kicker"><span className="kicker-square"/>{children}</div>;
}

function Introduction() {
  return <section className="intro-section section-pad" id="slate"><div className="container intro-grid">
    <div className="intro-copy"><SectionKicker>01 / FIND YOUR SPACE</SectionKicker><h2>Your everyday.<br/>Reconsidered<span className="punctuation">.</span></h2><p>From your first coffee to focused work and an evening game, your desk is part of your everyday life. Slate brings a comfortable surface and useful technology together in a space that feels like yours.</p><a href="#materials" className="inline-link">Start with the surface <ArrowUpRight size={17}/></a></div>
    <div className="intro-visual"><img src={`${ASSET}slate-sakura.webp`} alt="Sakura Slate desk mat concept with keyboard and e-ink display" loading="lazy"/><div className="intro-visual-tag"><span className="tag-point"/> THE SAKURA CONCEPT</div></div>
  </div></section>;
}

function Features() {
  return <section className="features-section section-pad" id="features"><div className="container">
    <div className="features-heading"><div><SectionKicker>03 / FIND YOUR FLOW</SectionKicker><h2>Quiet technology.<br/><span className="muted-italic">Right where it belongs.</span></h2></div><p>Check what matters with a glance at Slate’s e-ink display. Keep your schedule, watchlist, and system information nearby while staying with the task in front of you.</p></div>
    <div className="feature-grid">
      <article className="feature-card feature-card-large"><div className="feature-card-visual display-visual"><img src={`${ASSET}slate-display-context.webp`} loading="lazy" alt="Slate e-ink module surrounded by woven mat fabric, with part of a keyboard for scale and sample calendar, stock and temperature information"/></div><div className="feature-card-body"><div className="feature-number">01 / DISPLAY</div><h3>Stay in your flow.</h3><p>See your next Google Calendar event, follow your stock watchlist, or check CPU and GPU temperatures. Slate is designed to keep that information visible without searching through tabs or opening another dashboard.</p><div className="display-capabilities" aria-label="Planned display features"><span>Google Calendar</span><span>Stock market</span><span>CPU + GPU temps</span><span>More views to come</span></div><span className="feature-small">Sample display content · 6 in module concept</span></div></article>
      <article className="feature-card feature-card-large"><div className="feature-card-visual charger-visual"><img src={`${ASSET}slate-charger.webp`} loading="lazy" alt="Slate integrated wireless charger concept close-up"/></div><div className="feature-card-body"><div className="feature-number">02 / POWER</div><h3>Charge without the clutter.</h3><p>A dedicated wireless charging module keeps your phone close and your surface uncluttered.</p><span className="feature-small">Removable module concept</span></div></article>
      <article className="feature-card feature-card-small"><div className="feature-detail-img"><img src={`${ASSET}slate-edge.webp`} alt="Close-up of Slate's stitched fabric edge" loading="lazy"/></div><div className="feature-card-body compact"><div className="feature-number">03 / MATERIAL</div><h3>Made to feel at home.</h3><p>A soft, cohesive fabric surface with a tailored edge.</p></div></article>
      <article className="feature-card feature-card-small"><div className="feature-detail-img"><img src={`${ASSET}slate-cable.webp`} alt="Close-up of a single USB-C cable entering the Slate mat" loading="lazy"/></div><div className="feature-card-body compact"><div className="feature-number">04 / CONNECTION</div><h3>Less cable. More space.</h3><p>A single USB-C connection is planned to bring power and data to the mat.</p></div></article>
    </div><a className="inline-link chapter-next" href="#design">See how Slate evolves <ArrowDown size={16}/></a>
  </div></section>;
}

function EInkMark({ mood = 'calm' }) {
  const [paused, setPaused] = useState(() => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false);
  return <button type="button" className={`eink-mark eink-${mood} ${paused ? 'ink-paused' : 'ink-active'}`} onClick={()=>setPaused(p=>!p)} aria-label={`${paused ? 'Play' : 'Pause'} e-ink character animation`} aria-pressed={!paused} title={paused ? 'Play character animation' : 'Pause character animation'}><svg aria-hidden="true" viewBox="-6 -6 76 60" fill="none" shapeRendering="crispEdges"><g className="ink-body"><path d="M8 4h48v4h4v32h-4v4H8v-4H4V8h4Z" fill="currentColor"/><path d="M10 10h44v28H10Z" fill="var(--ink-screen, #eee9de)"/><g className="ink-face"><g className="ink-eyes" fill="currentColor"><path d="M21 19h4v6h-4zM39 19h4v6h-4z"/></g>{mood === 'welcome' ? <path d="M26 29v3h12v-3" stroke="currentColor" strokeWidth="2"/> : <path d="M28 30h8" stroke="currentColor" strokeWidth="2"/>}</g><path className="ink-pixel" d="M51 33h3v3h-3z" fill="currentColor"/><path className="ink-refresh" d="M10 10h44v28H10Z" fill="currentColor"/></g><path className="ink-wave" d="M59 25h4v-8h4V9" stroke="currentColor" strokeWidth="3"/></svg></button>;
}
const deskScenes = [
  { id:'gaming', label:'After hours', category:'GAMING', title:'From focused hours to one more game.', copy:'Charcoal Slate brings your setup together, with CPU and GPU temperatures in view while you focus on the game.', alt:'Charcoal Slate gaming setup with Keychron Q1 keyboard, Logitech mouse and sample CPU and GPU temperatures on e-ink' },
  { id:'work', label:'In your element', category:'PROFESSIONAL', title:'A clearer space for your next idea.', copy:'Warm materials and Google Calendar at a glance. Keep your next event in sight while your work stays on screen.', alt:'Cream Slate professional desk with Keychron Q1 keyboard, Logitech mouse and sample Google Calendar events on e-ink' },
  { id:'macbook', label:'A lighter approach', category:'MACBOOK', title:'Your essentials. A clearer view.', copy:'A soft green surface and a clean laptop setup, with a stock watchlist close by on e-ink. The same platform, adapted to a different workspace.', alt:'Sage Slate with MacBook Pro, Apple keyboard and mouse, and a sample stock market watchlist on e-ink' },

  { id:'compact', label:'Small space, considered', category:'COMPACT', title:'A smaller desk. A complete setup.', copy:'A focused footprint with your schedule close by. Slate brings a consistent foundation to a compact workspace.', alt:'Navy Slate on a compact oak desk with a Keychron keyboard, Logitech mouse and sample calendar on e-ink' },
  { id:'studio', label:'Space to create', category:'STUDIO', title:'A foundation for your next idea.', copy:'A clean creative workspace with a calendar in view, leaving your main screen free for the work taking shape.', alt:'Cream Slate in a creative studio with Apple keyboard, mouse and Studio Display, and sample calendar data' },
  { id:'light-gaming', label:'A brighter perspective', category:'LIGHT GAMING', title:'Light tones. Focused play.', copy:'A fresh take on the gaming desk, with system temperatures visible on a quiet e-ink display.', alt:'Sage Slate in a white gaming setup with Keychron keyboard, Logitech mouse and sample CPU and GPU temperatures' },
];
function SetupCarousel() {
  const [index, setIndex] = useState(0);
  const touch = useRef(null);
  const scene = deskScenes[index];
  const move = (delta) => setIndex(i => (i + delta + deskScenes.length) % deskScenes.length);
  const keydown = e => {
    if(e.key === 'ArrowRight'){e.preventDefault();move(1);}
    if(e.key === 'ArrowLeft'){e.preventDefault();move(-1);}
    if(e.key === 'Home'){e.preventDefault();setIndex(0);}
    if(e.key === 'End'){e.preventDefault();setIndex(deskScenes.length-1);}
  };
  return <div className="setup-carousel" role="region" aria-roledescription="carousel" aria-label="Slate in different workspaces" onKeyDown={keydown}>
    <div className="setup-carousel-top"><span>ONE PLATFORM. YOUR WORLD.</span><span>{String(index+1).padStart(2,'0')} / {String(deskScenes.length).padStart(2,'0')}</span></div>
    <div className="setup-stage" tabIndex={0} aria-label="Workspace image. Use left and right arrows to explore." onTouchStart={e=>{touch.current={x:e.touches[0].clientX,y:e.touches[0].clientY};}} onTouchEnd={e=>{if(!touch.current)return;const dx=e.changedTouches[0].clientX-touch.current.x,dy=e.changedTouches[0].clientY-touch.current.y;if(Math.abs(dx)>50 && Math.abs(dx)>Math.abs(dy)*1.5)move(dx<0?1:-1);touch.current=null;}} onTouchCancel={()=>{touch.current=null;}}>
      <div role="group" aria-roledescription="slide" aria-label={`${index+1} of ${deskScenes.length}: ${scene.category}`}><img key={scene.id} src={`${ASSET}slate-setup-${scene.id}.webp`} alt={scene.alt} loading="lazy" width="1536" height="1024"/></div><span className="setup-image-note">SLATE / SAMPLE DISPLAY DATA</span>
    </div>
    <div className="setup-caption" aria-live="polite" aria-atomic="true"><span className="setup-category">{scene.category} / {scene.label}</span><h3>{scene.title}</h3><p>{scene.copy}</p></div>
    <div className="setup-controls"><div className="setup-dots" role="group" aria-label="Choose a workspace">{deskScenes.map((item,i)=><button key={item.id} type="button" aria-label={`Show ${item.category.toLowerCase()} setup`} aria-pressed={i===index} onClick={()=>setIndex(i)}><span/></button>)}</div><div className="setup-arrows"><button type="button" onClick={()=>move(-1)} aria-label="Previous workspace"><ArrowLeft size={18}/></button><button type="button" onClick={()=>move(1)} aria-label="Next workspace"><ArrowRight size={18}/></button></div></div>
    <div className="ink-signature"><EInkMark/><span>Quiet by design.<small>Inspired by the simplicity of e-ink.</small></span></div>
  </div>;
}

function Design() {
  return <section className="design-section section-pad" id="design"><div className="container design-grid">
    <SetupCarousel/>
    <div className="design-copy-col"><SectionKicker>04 / THINK BEYOND TODAY</SectionKicker><h2>A surface you love.<br/><em>A platform you keep.</em></h2><p>Your workspace evolves, and your desk accessories should be able to evolve with it. Slate pairs a changeable fabric surface with independent display and charging modules. Refresh the surface or replace an individual component while keeping the rest of your setup in use.</p>
      <div className="design-points">
        <div><div className="point-icon"><RotateCcw size={21}/></div><div><h4>Replaceable modules</h4><p>The display and charger are designed to lift out individually, so one component can be replaced while the rest stays in use.</p></div></div>
        <div><div className="point-icon"><Layers3 size={21}/></div><div><h4>Changeable surface</h4><p>Refresh a worn surface or choose a new finish while keeping your electronics in use.</p></div></div>
        <div><div className="point-icon"><Leaf size={21}/></div><div><h4>Designed with years in mind</h4><p>Separating the surface from the technology supports our goal: a platform you can maintain and use for years.</p></div></div>
      </div>
      <p className="concept-note">Long-term use is the goal. Final construction, replacement-part availability, and module compatibility are still in development.</p><a className="inline-link chapter-next" href="#colors">Explore the finishes <ArrowDown size={16}/></a>
    </div>
  </div></section>;
}

function Colorways({ onWaitlist, activeId, setActiveId }) {
  const active = colorways.find(c => c.id === activeId);
  return <section className="colorways-section section-pad" id="colors"><div className="container">
    <div className="color-heading"><div><SectionKicker>05 / MAKE IT YOURS</SectionKicker><h2>Find your<br/><em>kind of Slate.</em></h2></div><p>Choose a finish that fits your space and explore the possibilities for your setup.</p></div>
    <div className="color-layout"><div className="color-main-visual" aria-live="polite"><img key={active.id} src={`${ASSET}slate-${active.id}.webp`} alt={`${active.name} Slate concept with real-world keyboard and mouse designs and a sample calendar, stock and system-temperature dashboard`} loading="lazy"/><div className="preview-watermark">{active.name.toUpperCase()} · CONCEPT PREVIEW</div></div><div className="color-panel"><span className="color-panel-kicker">CHOOSE YOUR FINISH / 5 CONCEPTS</span><h3>{active.name}</h3><p>{active.description}</p><div className="swatch-list" role="group" aria-label="Choose a Slate colorway">{colorways.map(c => <button key={c.id} className={`swatch-button ${activeId === c.id ? 'active' : ''}`} onClick={() => setActiveId(c.id)} aria-pressed={activeId === c.id}><span className={`swatch-circle ${c.className}`} style={{'--swatch':c.color}}/><span>{c.name}</span>{activeId === c.id && <Check size={17} aria-hidden="true"/>}</button>)}</div><button className="button button-dark finish-cta" onClick={() => onWaitlist(active.name)}>Continue with {active.name} <ArrowUpRight size={16}/></button><div className="color-panel-bottom"><span className="status-dot"/><span>Finish preview with sample display data. Final materials and colors may vary.</span></div></div></div>
  </div></section>;
}


function FAQ() {
  const items = [
    ['When can I buy Slate?', 'Slate is currently in development. Join the waitlist for launch timing, pricing, and availability. No orders or payments are being accepted on this preview.'],
    ['What makes Slate different?', 'Slate brings a fabric desk surface, compact e-ink module, and removable wireless charging module into one cohesive design. The goal is fewer separate accessories and everyday information you can check without switching tabs, all in a setup that is easier to make your own.'],
    ['Can I change the mat without replacing the electronics?', 'That is central to the design. The display and charging modules are intended to be removable so the surface can be changed independently. The final attachment system is still being developed.'],
    ['Will it charge my iPhone or Android phone?', 'Wireless charging is planned. Supported phone models, cases, charging standards, power requirements, and charging speeds will be published after hardware testing.'],
    ['What materials will Slate use?', 'The current direction is a premium woven fabric surface with a linen-inspired texture, a finished perimeter, and removable electronics housings. Exact fiber composition, production materials, and care instructions will be confirmed before launch.'],
    ['How long will Slate last?', 'Our aim is a platform you can use for years by changing the surface and replacing individual modules. A tested service life, warranty terms, replacement-part availability, and future module compatibility have not been finalized.'],
    ['Are the keyboard and mouse included?', 'No. Keyboards, mice, phones, laptops, and other desk accessories are shown for illustration and are not included. Concept renders depict Keychron, Logitech, and Apple products. These brands are not affiliated with Avolyn.'],
    ['What will the display show?', 'Planned views include Google Calendar events, stock market information, CPU and GPU temperatures, and other useful daily information. The renderings show sample content. Final integrations, supported systems, data sources, and update intervals will be confirmed before launch.']
  ];
  return <section className="faq-section section-pad" id="faq"><div className="container faq-layout"><div><SectionKicker>BEFORE THE NEXT CHAPTER</SectionKicker><h2>The details.<br/><em>Before you begin.</em></h2><p>The details that matter, without the guesswork.</p></div><div>{items.map(([q,a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></div></section>;
}

function FinalCta({ finish, setFinish }) {
  return <section className="destination section-pad" id="waitlist" aria-labelledby="destination-title"><div className="container destination-grid"><div className="destination-copy"><SectionKicker>06 / YOUR NEXT CHAPTER</SectionKicker><div className="arrival-ink"><EInkMark mood="welcome"/><span>Your next chapter starts here.</span></div><h2 id="destination-title">You’ve found<br/><em>your starting point.</em></h2><p>A premium surface, everyday information at a glance, and a modular platform designed to evolve with your workspace.</p><p>Join the Slate waitlist for launch news, available finishes, and pricing. Be among the first to hear when Slate is ready.</p><div className="destination-promise"><span>No payment today</span><span>Product updates only</span></div></div><WaitlistForm finish={finish} setFinish={setFinish}/></div></section>;
}

function Footer({ onWaitlist }) {
  return <footer className="site-footer"><div className="container"><div className="footer-main"><div><Logo/><p>A more considered desk experience.<br/>Designed for the way you work.</p></div><div className="footer-links"><div><strong>Explore</strong><a href="#slate">Slate</a><a href="#features">Features</a><a href="#design">Design</a><a href="#colors">Colorways</a></div><div><strong>Stay in the loop</strong><button onClick={onWaitlist}>Join the waitlist <ArrowUpRight size={13}/></button><span>Currently in development.</span></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} AVOLYN. Slate is in development.</span><span>Designed for your everyday.</span></div></div></footer>;
}

function WaitlistForm({ finish, setFinish }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const endpoint = import.meta.env.VITE_WAITLIST_ENDPOINT?.trim();
  async function submit(e) {
    e.preventDefault();
    if (!endpoint) { setStatus('demo'); setMessage('Signups are not open yet. Your details have not been sent or saved.'); return; }
    setStatus('loading'); setMessage('');
    try {
      const response = await fetch(endpoint, {method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({name,email,finish,product:'Slate',source:'Avolyn site'})});
      if (!response.ok) throw new Error('We could not add you right now. Please try again.');
      setStatus('success');setMessage('You’re on the list. We’ll keep you updated on Slate’s development and launch.');
    } catch (error) {setStatus('error');setMessage(error.message || 'Please try again later.');}
  }
  return <div className="destination-form"><span className="color-panel-kicker">AVOLYN / SLATE WAITLIST</span><h3>Be part of what comes next.</h3>{status === 'success' ? <div className="form-feedback success" role="status"><Check size={22}/>{message}</div> : <form className="waitlist-form" onSubmit={submit}>
    <label htmlFor="waitlist-name">Your name</label><input id="waitlist-name" name="name" autoComplete="name" placeholder="Your name" required value={name} onChange={e=>setName(e.target.value)}/>
    <label htmlFor="waitlist-email">Email address</label><input id="waitlist-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required value={email} onChange={e=>setEmail(e.target.value)}/>
    <label htmlFor="waitlist-finish">Your finish</label><select id="waitlist-finish" name="finish" value={finish} onChange={e=>setFinish(e.target.value)}>{colorways.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}</select>
    <button className="button button-dark" type="submit" disabled={status==='loading'}>{status==='loading'?'Joining…':'Join the Slate waitlist'}<ArrowUpRight size={17}/></button>
    {message && <div className={`form-feedback ${status}`} role="status">{message}</div>}
    <small>{endpoint?'By joining, you agree to receive occasional Slate product updates.':'Preview only. Signups are not open yet.'}</small>
  </form>}</div>;
}

function Materials() {
  return <section className="materials-section section-pad" id="materials"><div className="container"><div className="materials-heading"><div><SectionKicker>02 / FEEL THE DIFFERENCE</SectionKicker><h2>Premium begins<br/><em>at the surface.</em></h2></div><p>The texture beneath your hands. The finish along the edge. The way everything belongs together. These are the details that make a desk feel like yours.</p></div><div className="materials-grid"><div className="material-photo"><img src={`${ASSET}slate-texture.webp`} alt="Concept close-up of Slate’s woven fabric texture" loading="lazy"/><span>TACTILE BY DESIGN</span></div><div className="material-story"><span className="material-index">A CLOSER LOOK</span><h3>Soft texture.<br/>Considered construction.</h3><p>Our material direction centers on a premium woven surface with a linen-inspired character. One cohesive fabric canvas brings warmth to the space beneath your keyboard and mouse.</p><div className="material-details"><div><h4>A continuous fabric surface</h4><p>A consistent look and feel across the mat, with dedicated spaces for the display and charging modules.</p></div><div><h4>A carefully finished edge</h4><p>A tailored perimeter completes the surface with a clean, carefully finished edge.</p></div><div><h4>Built around renewal</h4><p>The changeable surface is designed to let you update the look of your mat while keeping the electronics.</p></div></div><p className="concept-note">Final fabric composition, construction, and care details will be shared before launch.</p><a className="inline-link" href="#features">Explore the technology <ArrowDown size={16}/></a></div></div></div></section>;
}

const chapters = [['slate','The idea'],['materials','The feel'],['features','The function'],['design','The platform'],['colors','Your finish'],['waitlist','Your next chapter']];
function JourneyNav() {
  const [active, setActive] = useState('slate');
  useEffect(()=>{
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)setActive(e.target.id);});},{rootMargin:'-15% 0px -50% 0px',threshold:0});
    chapters.forEach(([id])=>{const el=document.getElementById(id);if(el)observer.observe(el);});
    return ()=>observer.disconnect();
  },[]);
  return <nav className="journey-nav" aria-label="The Slate journey"><div className="container journey-track">{chapters.map(([id,label],i)=><a key={id} href={`#${id}`} aria-current={active===id?'step':undefined}><span>{String(i+1).padStart(2,'0')}</span><span>{label}</span></a>)}</div></nav>;
}

export default function App() {
  const [finish, setFinish] = useState('sakura');
  const goToWaitlist = () => document.getElementById('waitlist')?.scrollIntoView({behavior:window.matchMedia?.('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  return <><Header onWaitlist={goToWaitlist}/><main><Hero/><JourneyNav/><Introduction/><Materials/><Features/><Design/><Colorways activeId={finish} setActiveId={setFinish} onWaitlist={goToWaitlist}/><FAQ/><FinalCta finish={finish} setFinish={setFinish}/></main><Footer onWaitlist={goToWaitlist}/></>;
}

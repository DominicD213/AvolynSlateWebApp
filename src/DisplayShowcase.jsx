import React, { useEffect, useId, useRef, useState } from 'react';
import './DisplayShowcase.css';
import { ArrowLeft, ArrowRight, CalendarDays, Pause, Play } from 'lucide-react';

const slides = [
  { id: 'minimal', title: 'Keep it simple.', description: 'A clock, a reminder, and room to breathe.', background: 'plain', font: 'modern' },
  { id: 'workday', title: 'Bring your day together.', description: 'Google and Microsoft calendars, tasks and PC stats in one view.', background: 'dots', font: 'modern' },
  { id: 'stats', title: 'Keep an eye on your setup.', description: 'Supported CPU, GPU and memory readings beside your keyboard.', background: 'plain', font: 'typewriter' },
  { id: 'personal', title: 'Make the screen your own.', description: 'Your words, your font, a built-in theme or your own background.', background: 'botanical', font: 'serif' },
];
const fonts = { modern: 'Arial, sans-serif', serif: 'Georgia, serif', typewriter: 'Courier New, monospace' };

function ScreenText({ x, y, size = 18, bold = false, children, ...props }) {
  return <text x={x} y={y} fontSize={size} fontWeight={bold ? 700 : 400} {...props}>{children}</text>;
}
function Panel({ x, y, width, height, children }) {
  return <g><rect x={x} y={y} width={width} height={height} rx="4" fill="#fdfcf7"/>{children}</g>;
}
function EventRow({ x, y, time, title, provider }) {
  return <g><ScreenText x={x} y={y} size={18} bold>{time}</ScreenText><ScreenText x={x + 68} y={y} size={18}>{title}</ScreenText><ScreenText x={x + 68} y={y + 21} size={13} fill="#57594e">{provider}</ScreenText></g>;
}
function SampleScreen({ layout, background, font, patternId }) {
  const detailed = layout === 'workday' || layout === 'stats';
  return <svg className="sample-screen" viewBox="0 0 792 272" aria-hidden="true" style={{ fontFamily: fonts[font] }}>
    <defs>
      <pattern id={patternId} width={background === 'dots' ? 18 : 160} height={background === 'dots' ? 18 : 130} patternUnits="userSpaceOnUse">
        {background === 'dots' && <circle cx="4" cy="4" r="1.1" fill="#92988a"/>}
        {background === 'botanical' && <g fill="none" stroke="#919b84" strokeWidth="1.4"><path d="M34 132Q25 66 59 8M33 96Q5 90 13 69Q37 69 35 90M35 77Q64 74 66 54Q43 50 39 69M44 51Q20 46 29 29Q48 29 47 42"/><path d="M125 125Q105 84 131 46M116 104Q95 105 95 86Q113 79 116 97M119 82Q144 83 143 65Q126 59 123 75"/></g>}
        {background === 'christmas' && <g stroke="#92988a" strokeWidth="1.3" fill="none"><path d="M43 16L21 53H33L16 78H70L53 53H65ZM43 78V94M120 20V50M105 35H135M109 24L131 46M109 46L131 24M114 101H140M127 88V114M118 92L136 110M118 110L136 92"/></g>}
      </pattern>
    </defs>
    <rect width="792" height="272" fill="#edece3"/>
    {background !== 'plain' && <rect width="792" height="272" fill={`url(#${patternId})`}/>}
    <rect x="12" y="10" width="768" height="32" rx="3" fill="#fdfcf7"/>
    <ScreenText x={23} y={32} size={14} bold>TUESDAY, NOVEMBER 10</ScreenText>
    <ScreenText x={768} y={32} size={12} textAnchor="end">{detailed ? 'DAILY DETAILS' : 'A LITTLE SPACE FOR YOU'}</ScreenText>
    {layout === 'minimal' && <Panel x={123} y={69} width={546} height={166}><ScreenText x={396} y={151} size={76} textAnchor="middle">09:41</ScreenText><ScreenText x={396} y={197} size={20} textAnchor="middle">One thing at a time.</ScreenText></Panel>}
    {(layout === 'google' || layout === 'microsoft') && <>
      <Panel x={16} y={56} width={222} height={200}><ScreenText x={36} y={91} size={13} bold>{layout === 'google' ? 'YOUR DAY' : 'WORKDAY'}</ScreenText><ScreenText x={34} y={161} size={59}>09:41</ScreenText><ScreenText x={36} y={199} size={17}>Tuesday, Nov 10</ScreenText><ScreenText x={36} y={232} size={13}>{layout === 'google' ? 'Room for what matters.' : 'Keep your work in focus.'}</ScreenText></Panel>
      <Panel x={250} y={56} width={526} height={200}>
        <ScreenText x={271} y={86} size={15} bold>{layout === 'google' ? 'GOOGLE CALENDAR' : 'MICROSOFT CALENDAR'}</ScreenText>
        <line x1="271" y1="101" x2="754" y2="101" stroke="#c4c5b9"/>
        {layout === 'google' ? <><EventRow x={271} y={133} time="10:30" title="Design review" provider="Personal · Google Calendar"/><EventRow x={271} y={192} time="15:30" title="Dentist appointment" provider="Personal · Google Calendar"/></> : <><EventRow x={271} y={130} time="10:00" title="Team stand-up" provider="Work · Microsoft Calendar"/><EventRow x={271} y={184} time="13:00" title="Project check-in" provider="Work · Microsoft Calendar"/><ScreenText x={271} y={237} size={15}>14:30   Focus time</ScreenText></>}
      </Panel>
    </>}
    {layout === 'workday' && <>
      <Panel x={16} y={56} width={166} height={200}><ScreenText x={30} y={89} size={13} bold>AT A GLANCE</ScreenText><ScreenText x={28} y={151} size={48}>09:41</ScreenText><ScreenText x={30} y={181} size={15}>Tuesday, Nov 10</ScreenText><line x1="30" y1="198" x2="168" y2="198" stroke="#c4c5b9"/><ScreenText x={30} y={231} size={17}>Raleigh · 66°F</ScreenText></Panel>
      <Panel x={194} y={56} width={314} height={200}><ScreenText x={209} y={86} size={14} bold>YOUR CALENDARS</ScreenText><EventRow x={209} y={119} time="10:30" title="Design review" provider="Google Calendar"/><EventRow x={209} y={174} time="13:00" title="Project check-in" provider="Microsoft Calendar"/><ScreenText x={209} y={235} size={14}>15:30   Dentist · Google Calendar</ScreenText></Panel>
      <Panel x={520} y={56} width={256} height={100}><ScreenText x={536} y={84} size={14} bold>TO DO</ScreenText><rect x="536" y="99" width="11" height="11" stroke="currentColor" fill="none"/><ScreenText x={556} y={110} size={16}>Finish the prototype</ScreenText><rect x="536" y="126" width="11" height="11" stroke="currentColor" fill="none"/><ScreenText x={556} y={137} size={16}>Plan tomorrow</ScreenText></Panel>
      <Panel x={520} y={168} width={256} height={88}><ScreenText x={536} y={194} size={12} bold>PC AT A GLANCE</ScreenText><ScreenText x={536} y={231} size={24}>CPU 54°C</ScreenText><ScreenText x={662} y={231} size={24}>42% RAM</ScreenText></Panel>
    </>}
    {layout === 'stats' && <>
      <Panel x={16} y={56} width={184} height={200}><ScreenText x={31} y={88} size={13} bold>YOUR SETUP</ScreenText><ScreenText x={30} y={150} size={51}>09:41</ScreenText><ScreenText x={31} y={191} size={15}>Make it happen.</ScreenText><ScreenText x={31} y={232} size={14}>Uptime · 3h 24m</ScreenText></Panel>
      {[{ x: 212, name: 'CPU', value: '54°C', detail: 'Usage 24%' },{ x: 404, name: 'GPU', value: '62°C', detail: 'Usage 38%' },{ x: 596, name: 'MEMORY', value: '42%', detail: '13.4 / 32 GB' }].map(item => <Panel key={item.name} x={item.x} y={56} width={180} height={200}><ScreenText x={item.x+16} y={89} size={14} bold>{item.name}</ScreenText><ScreenText x={item.x+13} y={154} size={44}>{item.value}</ScreenText><ScreenText x={item.x+16} y={194} size={17}>{item.detail}</ScreenText><rect x={item.x+16} y="215" width="148" height="7" fill="#d9dacd"/><rect x={item.x+16} y="215" width={item.name === 'CPU' ? 36 : item.name === 'GPU' ? 56 : 62} height="7" fill="#43483c"/></Panel>)}
    </>}
    {layout === 'personal' && <>
      <Panel x={46} y={76} width={223} height={154}><ScreenText x={64} y={148} size={60}>09:41</ScreenText><ScreenText x={66} y={192} size={17}>A fresh start.</ScreenText></Panel>
      <Panel x={338} y={76} width={404} height={154}><ScreenText x={361} y={108} size={12} bold>YOUR WORDS, YOUR WAY</ScreenText><ScreenText x={361} y={153} size={28}>Make room</ScreenText><ScreenText x={361} y={193} size={28}>for a good day.</ScreenText></Panel>
    </>}
  </svg>;
}

export default function DisplayShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reduced, setReduced] = useState(() => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false);
  const [zoomed, setZoomed] = useState(false);
  const touch = useRef(null);
  const active = slides[index];
  const id = useId().replace(/:/g, '');
  const move = amount => setIndex(value => (value + amount + slides.length) % slides.length);
  const choose = value => { setIndex(value); setPaused(true); };
  useEffect(() => {
    const media = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    media?.addEventListener?.('change', update);
    return () => media?.removeEventListener?.('change', update);
  }, []);
  useEffect(() => {
    if (paused || hovered || reduced || zoomed) return;
    const timer = window.setInterval(() => { if (!document.hidden) move(1); }, 7000);
    return () => window.clearInterval(timer);
  }, [paused, hovered, reduced, zoomed]);
  return <section className="screen-showcase" role="region" aria-roledescription="carousel" aria-label="Slate display examples" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={event => { if (!event.target.closest('[data-carousel-toggle]')) setPaused(true); }}>
    <div className="showcase-intro"><h3>Your screen.<br/><em>Your way.</em></h3><div><p>Customize widgets, layouts, fonts and backgrounds in the Avolyn desktop app. These are just a few possibilities.</p><div className="calendar-services"><span><CalendarDays size={17} aria-hidden="true"/>Google Calendar</span><span><CalendarDays size={17} aria-hidden="true"/>Microsoft Calendar</span></div></div></div>
    <div className="carousel-preview-top"><span>DISPLAY EXAMPLES</span><button type="button" className="preview-zoom" aria-pressed={zoomed} onClick={() => setZoomed(value => !value)}>{zoomed ? 'Fit example' : 'Enlarge example'}</button></div>
    <div className={`screen-scroll ${zoomed ? 'is-zoomed' : ''}`} tabIndex={zoomed ? 0 : undefined} role="region" aria-label="Screen example. Scroll horizontally when enlarged." onTouchStart={event => { touch.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }} onTouchEnd={event => { if (!touch.current || zoomed) return; const dx = event.changedTouches[0].clientX - touch.current.x, dy = event.changedTouches[0].clientY - touch.current.y; if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) { move(dx < 0 ? 1 : -1); setPaused(true); } touch.current = null; }} onTouchCancel={() => { touch.current = null; }}>
      <div className="display-frame" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}: ${active.title}`}><div role="img" aria-label={`${active.title} ${active.description} Illustrative layout with sample data.`}><SampleScreen layout={active.id} background={active.background} font={active.font} patternId={`${id}-pattern`}/></div></div>
    </div>
    <div className="carousel-bottom"><div className="carousel-caption" aria-live={paused || reduced ? 'polite' : 'off'} aria-atomic="true"><h4>{active.title}</h4><p>{active.description}</p></div><div className="carousel-controls"><button type="button" aria-label="Previous screen example" onClick={() => { move(-1); setPaused(true); }}><ArrowLeft size={18}/></button>{!reduced && <button type="button" data-carousel-toggle aria-label={paused ? 'Play screen examples' : 'Pause screen examples'} onClick={() => setPaused(value => !value)}>{paused ? <Play size={17}/> : <Pause size={17}/>}</button>}<button type="button" aria-label="Next screen example" onClick={() => { move(1); setPaused(true); }}><ArrowRight size={18}/></button></div></div>
    <div className="carousel-dots" role="group" aria-label="Choose a screen example">{slides.map((slide, i) => <button type="button" key={slide.id} aria-label={`Show example ${i + 1}: ${slide.title}`} aria-pressed={index === i} onClick={() => choose(i)}><span/></button>)}</div>
    <p className="preview-note">Sample layouts and data. Backgrounds can also be added from your own PNG or JPEG in the desktop app.</p>
  </section>;
}

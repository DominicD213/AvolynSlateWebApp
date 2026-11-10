import React, { useId, useState } from 'react';
import './DisplayShowcase.css';
import { CalendarDays, Check, Clock3, Cpu, Image, LayoutDashboard } from 'lucide-react';

const layouts = [
  { id: 'minimal', title: 'Minimal', density: 'Simple', icon: Clock3, description: 'Just the time and a reminder. Leave the rest of the screen quiet.' },
  { id: 'google', title: 'Google Calendar', density: 'Focused', icon: CalendarDays, description: 'Keep personal plans and your next Google Calendar event in view.' },
  { id: 'microsoft', title: 'Microsoft Calendar', density: 'Focused', icon: CalendarDays, description: 'A dedicated work agenda with upcoming events from Microsoft Calendar.' },
  { id: 'workday', title: 'Daily dashboard', density: 'Detailed', icon: LayoutDashboard, description: 'Google and Microsoft events, tasks, time and PC stats together in one layout.' },
  { id: 'stats', title: 'PC dashboard', density: 'Detailed', icon: Cpu, description: 'Give supported PC readings more room, with a clock and a personal note alongside.' },
  { id: 'personal', title: 'Make it yours', density: 'Creative', icon: Image, description: 'Your background, your words, your layout. Start with a preset and change every widget.' },
];
const backgrounds = [
  { id: 'plain', name: 'Plain' }, { id: 'dots', name: 'Dot grid' },
  { id: 'botanical', name: 'Botanical' }, { id: 'christmas', name: 'Christmas' },
];
const fonts = { modern: 'Arial, sans-serif', serif: 'Georgia, serif', typewriter: 'Courier New, monospace' };
const fontNames = { modern: 'Modern', serif: 'Classic serif', typewriter: 'Typewriter' };

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
  const [layout, setLayout] = useState('workday');
  const [background, setBackground] = useState('botanical');
  const [font, setFont] = useState('modern');
  const [zoomed, setZoomed] = useState(false);
  const active = layouts.find(item => item.id === layout);
  const backgroundName = backgrounds.find(item => item.id === background).name;
  const id = useId().replace(/:/g, '');
  return <div className="screen-showcase" aria-labelledby="app-title">
    <div className="showcase-intro"><h3 id="app-title">Fully customizable.<br/><em>Entirely yours.</em></h3><div><p>Build your screen in the Avolyn desktop app. Move and resize widgets, change fonts, add a background, and save your own presets.</p><div className="calendar-services" aria-label="Desktop app calendar connections"><span><CalendarDays size={17} aria-hidden="true"/>Google Calendar</span><span><CalendarDays size={17} aria-hidden="true"/>Microsoft Calendar</span></div></div></div>
    <div className="showcase-layout"><div className="showcase-presets"><span className="showcase-label">TRY A STARTING POINT</span><div className="preset-options" role="group" aria-label="Explore sample display layouts">{layouts.map(item => <button type="button" key={item.id} aria-pressed={layout === item.id} aria-controls={`${id}-preview`} onClick={() => setLayout(item.id)}><item.icon size={18} aria-hidden="true"/><span>{item.title}<small>{item.density}</small></span>{layout === item.id && <Check size={15} aria-hidden="true"/>}</button>)}</div></div>
      <div className="showcase-preview" id={`${id}-preview`}><div className="preview-heading"><span>DISPLAY LAYOUT PREVIEW</span><button type="button" className="preview-zoom" aria-pressed={zoomed} aria-controls={`${id}-screen`} onClick={() => setZoomed(value => !value)}>{zoomed ? 'Fit preview' : 'Enlarge preview'}</button></div><div className={`screen-scroll ${zoomed ? 'is-zoomed' : ''}`} tabIndex={zoomed ? 0 : undefined} role="region" aria-label="Display preview. When enlarged, scroll horizontally to explore."><div className="display-frame" id={`${id}-screen`} role="img" aria-label={`${active.title}, ${active.density.toLowerCase()} sample layout. ${active.description} ${backgroundName} background. ${fontNames[font]} font. All values are sample data.`}><SampleScreen layout={layout} background={background} font={font} patternId={`${id}-pattern`}/></div></div><p className="showcase-benefit" aria-live="polite" aria-atomic="true">{active.description} <span className="sr-only">{backgroundName} background. {fontNames[font]} font.</span></p>
        <div className="showcase-appearance"><div><span className="showcase-label">TRY A BACKGROUND</span><div className="background-options" role="group" aria-label="Preview background">{backgrounds.map(item => <button type="button" key={item.id} className={`background-choice background-choice--${item.id}`} aria-pressed={background === item.id} onClick={() => setBackground(item.id)}><span aria-hidden="true"/>{item.name}</button>)}</div></div><label className="font-choice"><span className="showcase-label">PREVIEW FONT</span><select aria-label="Preview font" value={font} onChange={event => setFont(event.target.value)}>{Object.entries(fontNames).map(([value, name]) => <option value={value} key={value}>{name}</option>)}</select></label></div>
        <p className="custom-background-note"><Image size={16} aria-hidden="true"/>Built-in themes or your own PNG/JPEG background in the desktop app.</p>
      </div>
    </div><p className="preview-note">Sample layouts and data · Calendar connections require account setup · Slate hardware is in development.</p>
  </div>;
}

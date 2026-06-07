import React, { useState } from 'react';
import './FontChanger.css';

const FONTS = [
  {
    id: 'opendyslexic',
    name: 'OpenDyslexic',
    desc: 'Heavy bottoms stop letters from flipping.',
    cssFamily: '"OpenDyslexic", serif',
    preview: 'Aa',
    accent: '#3B82F6',
    bg: '#DBEAFE',
  },
  {
    id: 'lexend',
    name: 'Lexend',
    desc: 'Reduces visual stress and improves fluency.',
    cssFamily: '"Lexend", sans-serif',
    preview: 'Aa',
    accent: '#8B5CF6',
    bg: '#EDE9FE',
  },
  {
    id: 'atkinson',
    name: 'Atkinson Hyperlegible',
    desc: 'Distinct letterforms from the Braille Institute.',
    cssFamily: '"Atkinson Hyperlegible", sans-serif',
    preview: 'Aa',
    accent: '#10B981',
    bg: '#D1FAE5',
  },
  {
    id: 'comic',
    name: 'Comic Sans',
    desc: 'Surprisingly effective for many dyslexic readers.',
    cssFamily: '"Comic Sans MS", cursive',
    preview: 'Aa',
    accent: '#F59E0B',
    bg: '#FEF3C7',
  },
  {
    id: 'arial',
    name: 'Arial',
    desc: 'Clean, no serifs to confuse letter shapes.',
    cssFamily: 'Arial, sans-serif',
    preview: 'Aa',
    accent: '#EC4899',
    bg: '#FCE7F3',
  },
];

const SAMPLE_TEXT = `Reading is a wonderful journey. Every word is a small adventure, and every sentence is a path leading somewhere new. With the right font and size, reading becomes easier and more enjoyable for everyone.`;

/* ── Writing hand illustration ── */
function WritingIllustration({ fontFamily }) {
  return (
    <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg"
      className="fc-illustration" aria-label="A hand writing letters on paper">

      {/* Paper / notebook */}
      <rect x="20" y="30" width="200" height="150" rx="10" fill="white"
        stroke="#E5E7EB" strokeWidth="2"/>
      {/* Ruled lines */}
      {[70, 90, 110, 130, 150].map(y => (
        <line key={y} x1="36" y1={y} x2="204" y2={y}
          stroke="#DBEAFE" strokeWidth="1.2"/>
      ))}
      {/* Red margin line */}
      <line x1="54" y1="30" x2="54" y2="180" stroke="#FCA5A5" strokeWidth="1.5"/>

      {/* The four letters b d p q — shown clearly */}
      <text x="66" y="68" fontSize="28" fontWeight="bold" fill="#3B82F6"
        fontFamily={fontFamily} className="fc-letter-anim fc-letter-b">b</text>
      <text x="106" y="68" fontSize="28" fontWeight="bold" fill="#8B5CF6"
        fontFamily={fontFamily} className="fc-letter-anim fc-letter-d">d</text>
      <text x="146" y="68" fontSize="28" fontWeight="bold" fill="#10B981"
        fontFamily={fontFamily} className="fc-letter-anim fc-letter-p">p</text>
      <text x="186" y="68" fontSize="28" fontWeight="bold" fill="#F59E0B"
        fontFamily={fontFamily} className="fc-letter-anim fc-letter-q">q</text>

      {/* Sample word in selected font */}
      <text x="66" y="108" fontSize="15" fill="#6B7280" fontFamily={fontFamily}>
        reading
      </text>
      <text x="66" y="128" fontSize="15" fill="#6B7280" fontFamily={fontFamily}>
        dyslexia
      </text>

      {/* ── HAND ── */}
      {/* Arm */}
      <rect x="155" y="140" width="80" height="30" rx="14" fill="#FDE68A"
        transform="rotate(-20 155 140)"/>
      {/* Palm */}
      <ellipse cx="162" cy="162" rx="22" ry="16" fill="#FDE68A"/>
      {/* Fingers */}
      <rect x="148" y="148" width="10" height="22" rx="5" fill="#FDE68A"
        transform="rotate(-15 148 148)"/>
      <rect x="160" y="144" width="10" height="26" rx="5" fill="#FDE68A"
        transform="rotate(-5 160 144)"/>
      <rect x="172" y="145" width="10" height="24" rx="5" fill="#FDE68A"
        transform="rotate(5 172 145)"/>
      <rect x="183" y="150" width="10" height="20" rx="5" fill="#FDE68A"
        transform="rotate(15 183 150)"/>
      {/* Thumb */}
      <rect x="140" y="158" width="10" height="18" rx="5" fill="#FDE68A"
        transform="rotate(-40 140 158)"/>
      {/* Pencil held in hand */}
      <rect x="149" y="128" width="6" height="36" rx="2" fill="#FCD34D"
        transform="rotate(-15 149 128)"/>
      <polygon points="149,164 155,164 152,174"
        fill="#FCA5A5" transform="rotate(-15 152 164)"/>
      {/* Pencil tip dot (writing) */}
      <circle cx="149" cy="172" r="2" fill="#1E1B4B" opacity="0.5"
        transform="rotate(-15 152 164)"/>
    </svg>
  );
}

/* ── Floating background letters ── */
function FloatingLetters() {
  const items = [
    { l: 'b', x: '2%',  y: '14%', color: '#BFDBFE', size: 56, delay: 0,   rot: -10 },
    { l: 'd', x: '88%', y: '10%', color: '#DDD6FE', size: 48, delay: 0.8, rot: 8   },
    { l: 'p', x: '91%', y: '44%', color: '#A7F3D0', size: 42, delay: 1.4, rot: -6  },
    { l: 'q', x: '3%',  y: '52%', color: '#FDE68A', size: 50, delay: 0.5, rot: 12  },
    { l: 'A', x: '5%',  y: '80%', color: '#BFDBFE', size: 38, delay: 1.1, rot: -14 },
    { l: 'R', x: '86%', y: '78%', color: '#DDD6FE', size: 44, delay: 0.3, rot: 7   },
  ];
  return (
    <>
      {items.map((item, i) => (
        <div key={i} className="fc-float-letter" style={{
          left: item.x, top: item.y,
          color: item.color,
          fontSize: item.size,
          animationDelay: `${item.delay}s`,
          transform: `rotate(${item.rot}deg)`,
        }}>
          {item.l}
        </div>
      ))}
    </>
  );
}

/* ── Slider ── */
function Slider({ label, value, min, max, step, format, onChange, accent }) {
  return (
    <div className="fc-slider-row">
      <div className="fc-slider-meta">
        <span className="fc-slider-label">{label}</span>
        <span className="fc-slider-value" style={{ color: accent, background: accent + '18' }}>
          {format(value)}
        </span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        className="fc-slider" style={{ '--fc-accent': accent }}
      />
    </div>
  );
}

export default function FontChanger() {
  const [text, setText]               = useState(SAMPLE_TEXT);
  const [selected, setSelected]       = useState(FONTS[0]);
  const [fontSize, setFontSize]       = useState(18);
  const [lineHeight, setLineHeight]   = useState(1.8);
  const [letterSpacing, setLetterSpacing] = useState(0.05);

  return (
    <div className="fc-page">
      <FloatingLetters />

      {/* ── HERO ── */}
      <div className="fc-hero">
        <div className="fc-hero-inner">
          <div className="fc-hero-text">
            <h1>Font <span className="fc-hero-accent">Changer</span></h1>
            <p>Letters like b, d, p and q are easily confused with dyslexia. These fonts are built to keep them distinct. Paste your text and see the difference.</p>
          </div>
          <div className="fc-hero-art">
            <WritingIllustration fontFamily={selected.cssFamily} />
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="fc-body">

        {/* Font picker */}
        <div className="fc-font-picker">
          {FONTS.map(f => (
            <button key={f.id}
              className={`fc-font-btn ${selected.id === f.id ? 'selected' : ''}`}
              style={{ '--fca': f.accent, '--fcbg': f.bg }}
              onClick={() => setSelected(f)}>
              <div className="fc-font-btn-preview" style={{ fontFamily: f.cssFamily }}>
                {f.preview}
              </div>
              <div className="fc-font-btn-name">{f.name}</div>
              <div className="fc-font-btn-desc">{f.desc}</div>
              {selected.id === f.id && (
                <div className="fc-font-btn-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <polyline points="20,6 9,17 4,12" stroke="white" strokeWidth="3"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Two-column: input + controls left, preview right */}
        <div className="fc-workspace">

          {/* Left: input + sliders */}
          <div className="fc-left">

            <div className="fc-panel">
              <div className="fc-panel-label">Your text</div>
              <textarea className="fc-textarea"
                value={text}
                onChange={e => setText(e.target.value)}
                rows={6}
                placeholder="Paste or type your text here..."
              />
            </div>

            <div className="fc-panel">
              <div className="fc-panel-label">Fine-tune</div>
              <div className="fc-sliders-stack">
                <Slider label="Font size"     value={fontSize}      min={12} max={32}  step={1}    format={v => `${v}px`}            onChange={setFontSize}      accent={selected.accent} />
                <Slider label="Line height"   value={lineHeight}    min={1.2} max={3.0} step={0.1} format={v => `${v.toFixed(1)}×`}  onChange={setLineHeight}    accent={selected.accent} />
                <Slider label="Letter spacing" value={letterSpacing} min={0} max={0.3}  step={0.01} format={v => `${v.toFixed(2)}em`} onChange={setLetterSpacing} accent={selected.accent} />
              </div>
            </div>

          </div>

          {/* Right: live preview */}
          <div className="fc-right">
            <div className="fc-preview-panel" style={{ background: selected.bg }}>
              <div className="fc-preview-tag" style={{ color: selected.accent, background: selected.accent + '22' }}>
                {selected.name}
              </div>
              <div className="fc-preview-text" style={{
                fontFamily: selected.cssFamily,
                fontSize: `${fontSize}px`,
                lineHeight: lineHeight,
                letterSpacing: `${letterSpacing}em`,
              }}>
                {text || 'Your text will appear here.'}
              </div>
            </div>

            {/* Why it helps */}
            <div className="fc-why-cards">
              <div className="fc-why-card">
                <div className="fc-why-bar" style={{ background: selected.accent }} />
                <p><strong>Why fonts matter</strong> — dyslexia-friendly fonts make b, d, p, q look distinct so your brain stops second-guessing them.</p>
              </div>
              <div className="fc-why-card">
                <div className="fc-why-bar" style={{ background: selected.accent }} />
                <p><strong>Spacing helps too</strong> — more room between letters and lines makes text feel less crowded and easier to track.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
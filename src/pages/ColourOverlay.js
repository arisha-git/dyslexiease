import React, { useState } from 'react';
import './ColourOverlay.css';

const COLOURS = [
  { name: 'Soft Yellow', value: '#FEFCE8', accent: '#CA8A04', desc: 'Reduces glare, widely recommended' },
  { name: 'Peach',       value: '#FFF7ED', accent: '#EA580C', desc: 'Warm and calming for most readers' },
  { name: 'Mint Green',  value: '#F0FDF4', accent: '#16A34A', desc: 'Helps with tracking and focus' },
  { name: 'Lavender',    value: '#F5F3FF', accent: '#7C3AED', desc: 'Reduces visual stress' },
  { name: 'Sky Blue',    value: '#EFF6FF', accent: '#2563EB', desc: 'Cool tone, good for extended reading' },
  { name: 'Rose',        value: '#FFF1F2', accent: '#E11D48', desc: 'Gentle and easy on the eyes' },
  { name: 'Cream',       value: '#FFFBEB', accent: '#D97706', desc: 'Classic reading comfort colour' },
  { name: 'Sage',        value: '#F0FDF9', accent: '#0D9488', desc: 'Natural, relaxing tone' },
  { name: 'Lilac',       value: '#FAF5FF', accent: '#9333EA', desc: 'Soft purple, reduces glare' },
  { name: 'Apricot',     value: '#FFF8F1', accent: '#F97316', desc: 'Warm, cosy reading atmosphere' },
  { name: 'Ice Blue',    value: '#F0F9FF', accent: '#0284C7', desc: 'Clean, crisp, minimal strain' },
  { name: 'White',       value: '#FFFFFF', accent: '#6B7280', desc: 'Standard — no overlay' },
];

const SAMPLE = `Once upon a time, in a land where every page was a new adventure, there lived a young reader who discovered that words could take you anywhere. The trick was finding the right light, the right colour, and the right font to make the journey comfortable.\n\nReading should never feel like hard work. With the right settings, words flow easily from the page to the mind, and stories come alive in vivid colour.`;

/* ── Kid reading under a lamp illustration ── */
function ReadingIllustration({ bgColour }) {
  return (
    <svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg"
      className="co-illustration" aria-label="A child reading a book under a lamp">

      {/* Floor */}
      <ellipse cx="120" cy="208" rx="100" ry="8" fill="#E5E7EB" opacity="0.5"/>

      {/* Lamp stand */}
      <rect x="117" y="60" width="6" height="90" rx="3" fill="#9CA3AF"/>
      <rect x="100" y="148" width="40" height="6" rx="3" fill="#6B7280"/>

      {/* Lamp shade */}
      <path d="M90 60 L150 60 L138 30 L102 30 Z" fill="#FCD34D"/>
      <path d="M90 60 L150 60 L138 30 L102 30 Z" fill="none" stroke="#F59E0B" strokeWidth="2"/>
      {/* Lamp glow */}
      <ellipse cx="120" cy="65" rx="36" ry="12" fill="#FEF9C3" opacity="0.6"/>

      {/* Light cone hitting the book */}
      <path d="M95 65 L68 155 L172 155 L145 65 Z" fill="#FEFCE8" opacity="0.35"/>

      {/* Beanbag / cushion the kid sits on */}
      <ellipse cx="120" cy="195" rx="64" ry="18" fill="#C4B5FD"/>
      <ellipse cx="120" cy="188" rx="56" ry="22" fill="#DDD6FE"/>

      {/* Kid body */}
      <rect x="90" y="148" width="60" height="52" rx="20" fill="#FDE68A"/>
      {/* Shirt */}
      <rect x="90" y="158" width="60" height="8" rx="0" fill="#60A5FA" opacity="0.5"/>
      <rect x="90" y="170" width="60" height="8" rx="0" fill="#60A5FA" opacity="0.4"/>

      {/* Legs (crossed) */}
      <ellipse cx="104" cy="200" rx="18" ry="10" fill="#FDE68A" transform="rotate(-15 104 200)"/>
      <ellipse cx="136" cy="200" rx="18" ry="10" fill="#FDE68A" transform="rotate(15 136 200)"/>

      {/* Book resting on lap */}
      <rect x="82" y="162" width="76" height="52" rx="6" fill={bgColour} stroke="#E5E7EB" strokeWidth="1.5"/>
      <rect x="82" y="162" width="38" height="52" rx="0" fill={bgColour === '#FFFFFF' ? '#F9FAFB' : bgColour} opacity="0.8"/>
      <rect x="119" y="162" width="2" height="52" fill="#D1D5DB"/>
      {/* Book text lines */}
      <rect x="88"  y="174" width="26" height="3" rx="1.5" fill="#9CA3AF" opacity="0.5"/>
      <rect x="88"  y="181" width="20" height="3" rx="1.5" fill="#9CA3AF" opacity="0.5"/>
      <rect x="88"  y="188" width="24" height="3" rx="1.5" fill="#9CA3AF" opacity="0.5"/>
      <rect x="88"  y="195" width="18" height="3" rx="1.5" fill="#9CA3AF" opacity="0.5"/>
      <rect x="123" y="174" width="26" height="3" rx="1.5" fill="#9CA3AF" opacity="0.5"/>
      <rect x="123" y="181" width="20" height="3" rx="1.5" fill="#9CA3AF" opacity="0.5"/>
      <rect x="123" y="188" width="24" height="3" rx="1.5" fill="#9CA3AF" opacity="0.5"/>

      {/* Arms holding book */}
      <rect x="66"  y="168" width="28" height="11" rx="5" fill="#FDE68A" transform="rotate(10 66 168)"/>
      <rect x="146" y="168" width="28" height="11" rx="5" fill="#FDE68A" transform="rotate(-10 146 168)"/>

      {/* Neck */}
      <rect x="110" y="128" width="20" height="22" rx="8" fill="#FDE68A"/>

      {/* Head */}
      <ellipse cx="120" cy="114" rx="30" ry="30" fill="#FDE68A"/>

      {/* Hair */}
      <ellipse cx="120" cy="88"  rx="30" ry="16" fill="#92400E"/>
      <ellipse cx="93"  cy="102" rx="9"  ry="16" fill="#92400E"/>
      <ellipse cx="147" cy="102" rx="9"  ry="16" fill="#92400E"/>

      {/* Eyes — looking down at book */}
      <ellipse cx="111" cy="116" rx="4.5" ry="3.5" fill="white"/>
      <ellipse cx="129" cy="116" rx="4.5" ry="3.5" fill="white"/>
      <ellipse cx="111" cy="117" rx="3"   ry="2.5"  fill="#1E1B4B"/>
      <ellipse cx="129" cy="117" rx="3"   ry="2.5"  fill="#1E1B4B"/>
      <circle  cx="112" cy="116" r="1"   fill="white"/>
      <circle  cx="130" cy="116" r="1"   fill="white"/>

      {/* Smile */}
      <path d="M112 126 Q120 132 128 126" stroke="#92400E" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Cheeks */}
      <ellipse cx="103" cy="122" rx="6" ry="4" fill="#FCA5A5" opacity="0.45"/>
      <ellipse cx="137" cy="122" rx="6" ry="4" fill="#FCA5A5" opacity="0.45"/>

      {/* Colour swatches floating around — tiny circles */}
      <circle cx="44"  cy="80"  r="10" fill="#FEFCE8" stroke="#FCD34D" strokeWidth="2" className="co-swatch-float" style={{animationDelay:'0s'}}/>
      <circle cx="196" cy="70"  r="8"  fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" className="co-swatch-float" style={{animationDelay:'0.6s'}}/>
      <circle cx="30"  cy="130" r="7"  fill="#F5F3FF" stroke="#C4B5FD" strokeWidth="2" className="co-swatch-float" style={{animationDelay:'1.2s'}}/>
      <circle cx="210" cy="120" r="9"  fill="#F0FDF4" stroke="#6EE7B7" strokeWidth="2" className="co-swatch-float" style={{animationDelay:'0.3s'}}/>
      <circle cx="52"  cy="170" r="6"  fill="#FFF1F2" stroke="#FDA4AF" strokeWidth="2" className="co-swatch-float" style={{animationDelay:'0.9s'}}/>
      <circle cx="200" cy="165" r="7"  fill="#FFF7ED" stroke="#FDba74" strokeWidth="2" className="co-swatch-float" style={{animationDelay:'1.5s'}}/>
    </svg>
  );
}

/* ── Floating colour blobs ── */
function FloatingBlobs() {
  const blobs = [
    { color: '#FEFCE8', x: '2%',  y: '12%', size: 80, delay: 0    },
    { color: '#EFF6FF', x: '88%', y: '8%',  size: 64, delay: 0.8  },
    { color: '#F5F3FF', x: '91%', y: '42%', size: 72, delay: 1.4  },
    { color: '#F0FDF4', x: '3%',  y: '50%', size: 60, delay: 0.5  },
    { color: '#FFF1F2', x: '6%',  y: '78%', size: 68, delay: 1.0  },
    { color: '#FFF7ED', x: '85%', y: '74%', size: 56, delay: 0.3  },
  ];
  return (
    <>
      {blobs.map((b, i) => (
        <div key={i} className="co-bg-blob" style={{
          left: b.x, top: b.y,
          width: b.size, height: b.size,
          background: b.color,
          animationDelay: `${b.delay}s`,
        }} />
      ))}
    </>
  );
}

export default function ColourOverlay() {
  const [selected, setSelected] = useState(COLOURS[0]);
  const [text, setText]         = useState(SAMPLE);
  const [fontSize, setFontSize] = useState(18);
  const [lineHeight, setLineHeight] = useState(1.8);

  return (
    <div className="co-page">
      <FloatingBlobs />

      {/* ── HERO ── */}
      <div className="co-hero">
        <div className="co-hero-inner">
          <div className="co-hero-text">
            <h1>Colour <span className="co-hero-accent" style={{ color: selected.accent }}>Overlay</span></h1>
            <p>Many people with dyslexia read much more easily on a coloured background. Try each colour and find the one that makes words feel still and clear.</p>
          </div>
          <div className="co-hero-art">
            <ReadingIllustration bgColour={selected.value} />
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="co-body">

        {/* Colour swatches */}
        <div className="co-swatch-grid">
          {COLOURS.map(c => (
            <button key={c.name}
              className={`co-swatch ${selected.name === c.name ? 'selected' : ''}`}
              style={{ '--csv': c.value, '--csa': c.accent }}
              onClick={() => setSelected(c)}
              title={c.desc}>
              <div className="co-swatch-circle" style={{ background: c.value }} />
              <span className="co-swatch-name">{c.name}</span>
              {selected.name === c.name && (
                <div className="co-swatch-check">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <polyline points="20,6 9,17 4,12" stroke="white" strokeWidth="3.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Selected info strip */}
        <div className="co-selected-strip" style={{ background: selected.value, borderColor: selected.accent + '44' }}>
          <div className="co-selected-dot" style={{ background: selected.accent }}/>
          <strong style={{ color: selected.accent }}>{selected.name}</strong>
          <span>{selected.desc}</span>
        </div>

        {/* Two-column workspace */}
        <div className="co-workspace">

          {/* Left: input + controls */}
          <div className="co-left">

            <div className="co-panel">
              <div className="co-panel-label">Your text</div>
              <textarea className="co-textarea"
                value={text}
                onChange={e => setText(e.target.value)}
                rows={7}
                placeholder="Paste or type your text here..."
              />
            </div>

            <div className="co-panel">
              <div className="co-panel-label">Reading controls</div>
              <div className="co-sliders">
                <div className="co-slider-row">
                  <div className="co-slider-meta">
                    <span>Font size</span>
                    <span className="co-slider-val" style={{ color: selected.accent, background: selected.accent + '18' }}>{fontSize}px</span>
                  </div>
                  <input type="range" min={12} max={32} step={1} value={fontSize}
                    onChange={e => setFontSize(Number(e.target.value))}
                    className="co-slider" style={{ '--coa': selected.accent }}/>
                </div>
                <div className="co-slider-row">
                  <div className="co-slider-meta">
                    <span>Line height</span>
                    <span className="co-slider-val" style={{ color: selected.accent, background: selected.accent + '18' }}>{lineHeight.toFixed(1)}×</span>
                  </div>
                  <input type="range" min={1.2} max={3.0} step={0.1} value={lineHeight}
                    onChange={e => setLineHeight(Number(e.target.value))}
                    className="co-slider" style={{ '--coa': selected.accent }}/>
                </div>
              </div>
            </div>

          </div>

          {/* Right: live preview */}
          <div className="co-right">
            <div className="co-preview-panel"
              style={{ background: selected.value, borderColor: selected.accent + '33' }}>
              <div className="co-preview-label" style={{ color: selected.accent }}>
                <div className="co-preview-dot" style={{ background: selected.accent }}/>
                Reading on {selected.name}
              </div>
              <div className="co-preview-text" style={{
                fontSize: `${fontSize}px`,
                lineHeight: lineHeight,
              }}>
                {text || 'Your text will appear here.'}
              </div>
            </div>

            {/* Science note */}
            <div className="co-science">
              <div className="co-science-bar" style={{ background: selected.accent }} />
              <div>
                <strong>Why this works</strong>
                <p>Some people with dyslexia experience visual stress — where white backgrounds cause letters to shimmer or blur. A coloured overlay lowers visual contrast and calms the effect. Studies show up to a 20% improvement in reading speed for those affected.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
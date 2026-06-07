import React, { useState } from 'react';
import './FeaturePage.css';
import './FontChanger.css';

const FONTS = [
  {
    id: 'opendyslexic',
    name: 'OpenDyslexic',
    desc: 'Specifically designed for dyslexia. Heavy bottoms help prevent letter flipping.',
    cssFamily: '"OpenDyslexic", serif',
    googleUrl: null, /* loaded via @font-face */
    preview: 'AaBbCcDd',
    color: '#DBEAFE',
  },
  {
    id: 'lexend',
    name: 'Lexend',
    desc: 'Designed to reduce visual stress and improve reading fluency.',
    cssFamily: '"Lexend", sans-serif',
    preview: 'AaBbCcDd',
    color: '#EDE9FE',
  },
  {
    id: 'atkinson',
    name: 'Atkinson Hyperlegible',
    desc: 'Created by the Braille Institute. Makes easily confused letters very distinct.',
    cssFamily: '"Atkinson Hyperlegible", sans-serif',
    preview: 'AaBbCcDd',
    color: '#D1FAE5',
  },
  {
    id: 'comic',
    name: 'Comic Sans MS',
    desc: 'Many people with dyslexia find Comic Sans surprisingly helpful to read.',
    cssFamily: '"Comic Sans MS", "Comic Sans", cursive',
    preview: 'AaBbCcDd',
    color: '#FEF3C7',
  },
  {
    id: 'arial',
    name: 'Arial (sans-serif)',
    desc: 'Clean, simple sans-serif. No serifs to confuse letter shapes.',
    cssFamily: 'Arial, sans-serif',
    preview: 'AaBbCcDd',
    color: '#FCE7F3',
  },
];

const SIZES = [14, 16, 18, 20, 24, 28];

const SAMPLE_TEXT = `Reading is a wonderful journey. Every word is a small adventure, and every sentence is a path leading somewhere new. With the right font and size, reading becomes easier, faster, and more enjoyable for everyone.`;

export default function FontChanger() {
  const [text, setText] = useState(SAMPLE_TEXT);
  const [selectedFont, setSelectedFont] = useState(FONTS[0]);
  const [fontSize, setFontSize] = useState(18);
  const [lineHeight, setLineHeight] = useState(1.8);
  const [letterSpacing, setLetterSpacing] = useState(0.05);

  return (
    <div className="feature-page">
      <div className="fp-hero" style={{ '--hero-color': '#EDE9FE', '--hero-accent': '#8B5CF6' }}>
        <div className="fp-hero-blob" aria-hidden="true" />
        <div className="fp-hero-inner">
          <div className="fp-icon">🔤</div>
          <h1>Dyslexia-Friendly Fonts</h1>
          <p>Try fonts specially designed to make reading easier. Paste your own text and see the difference instantly.</p>
        </div>
      </div>

      <div className="fp-body">

        {/* Font picker */}
        <div className="fc-section">
          <h2 className="fc-section-title">Choose a Font</h2>
          <div className="font-cards">
            {FONTS.map(f => (
              <button
                key={f.id}
                className={`font-card ${selectedFont.id === f.id ? 'selected' : ''}`}
                style={{ '--fc': f.color }}
                onClick={() => setSelectedFont(f)}
              >
                <div className="font-preview" style={{ fontFamily: f.cssFamily }}>{f.preview}</div>
                <div className="font-name">{f.name}</div>
                <div className="font-desc">{f.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Fine-tune controls */}
        <div className="fc-section fc-controls-box">
          <h2 className="fc-section-title">Fine-Tune</h2>
          <div className="fc-sliders">
            <SliderControl
              label="Font Size"
              value={fontSize}
              min={12} max={32} step={1}
              format={v => `${v}px`}
              onChange={setFontSize}
            />
            <SliderControl
              label="Line Height"
              value={lineHeight}
              min={1.2} max={3.0} step={0.1}
              format={v => `${v.toFixed(1)}×`}
              onChange={setLineHeight}
            />
            <SliderControl
              label="Letter Spacing"
              value={letterSpacing}
              min={0} max={0.3} step={0.01}
              format={v => `${v.toFixed(2)}em`}
              onChange={setLetterSpacing}
            />
          </div>

          <div className="font-size-btns">
            {SIZES.map(s => (
              <button
                key={s}
                className={`size-btn ${fontSize === s ? 'active' : ''}`}
                onClick={() => setFontSize(s)}
              >
                {s}px
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="fc-section">
          <h2 className="fc-section-title">Your Text</h2>
          <textarea
            className="fc-textarea"
            value={text}
            onChange={e => setText(e.target.value)}
            rows={5}
            placeholder="Paste or type your text here..."
          />
        </div>

        {/* Preview */}
        <div className="fc-section">
          <div className="fc-preview-header">
            <h2 className="fc-section-title">Preview</h2>
            <div className="fc-preview-tag">{selectedFont.name}</div>
          </div>
          <div
            className="fc-preview"
            style={{
              fontFamily: selectedFont.cssFamily,
              fontSize: `${fontSize}px`,
              lineHeight: lineHeight,
              letterSpacing: `${letterSpacing}em`,
              background: selectedFont.color,
            }}
          >
            {text || 'Your text will appear here.'}
          </div>
        </div>

        {/* Info cards */}
        <div className="fc-info-cards">
          <div className="fc-info-card">
            <span>🧠</span>
            <p><strong>Why fonts matter:</strong> Dyslexia-friendly fonts have distinct letterforms so similar letters (b, d, p, q) are harder to confuse.</p>
          </div>
          <div className="fc-info-card">
            <span>📏</span>
            <p><strong>Spacing helps too:</strong> More space between letters and lines makes text less overwhelming and easier to track.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

function SliderControl({ label, value, min, max, step, format, onChange }) {
  return (
    <div className="slider-control">
      <div className="slider-header">
        <span className="slider-label">{label}</span>
        <span className="slider-value">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step}
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        className="slider"
      />
    </div>
  );
}

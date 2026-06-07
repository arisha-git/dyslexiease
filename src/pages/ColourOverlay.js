import React, { useState } from 'react';
import './FeaturePage.css';
import './ColourOverlay.css';

const COLOURS = [
  { name: 'Soft Yellow', value: '#FEFCE8', text: '#1E1B4B', desc: 'Reduces glare, widely recommended' },
  { name: 'Peach', value: '#FFF7ED', text: '#1E1B4B', desc: 'Warm and calming for most readers' },
  { name: 'Mint Green', value: '#F0FDF4', text: '#1E1B4B', desc: 'Helps with tracking and focus' },
  { name: 'Lavender', value: '#F5F3FF', text: '#1E1B4B', desc: 'Reduces visual stress' },
  { name: 'Sky Blue', value: '#EFF6FF', text: '#1E1B4B', desc: 'Cool tone, good for extended reading' },
  { name: 'Rose', value: '#FFF1F2', text: '#1E1B4B', desc: 'Gentle and easy on the eyes' },
  { name: 'Cream', value: '#FFFBEB', text: '#1E1B4B', desc: 'Classic reading comfort colour' },
  { name: 'Sage', value: '#F0FDF9', text: '#1E1B4B', desc: 'Natural, relaxing tone' },
  { name: 'Lilac', value: '#FAF5FF', text: '#1E1B4B', desc: 'Soft purple, reduces glare' },
  { name: 'Apricot', value: '#FFF8F1', text: '#1E1B4B', desc: 'Warm, cosy reading atmosphere' },
  { name: 'Ice Blue', value: '#F0F9FF', text: '#1E1B4B', desc: 'Clean, crisp, minimal strain' },
  { name: 'White', value: '#FFFFFF', text: '#1E1B4B', desc: 'Standard (default)' },
];

const SAMPLE = `Once upon a time, in a land where every page was a new adventure, there lived a young reader who discovered that words could take you anywhere. The trick was finding the right light, the right colour, and the right font to make the journey comfortable.

Reading should never feel like hard work. With the right settings, words flow easily from the page to the mind, and stories come alive in vivid colour.`;

export default function ColourOverlay() {
  const [selected, setSelected] = useState(COLOURS[0]);
  const [text, setText] = useState(SAMPLE);
  const [fontSize, setFontSize] = useState(18);
  const [brightness, setBrightness] = useState(100);

  return (
    <div className="feature-page">
      <div className="fp-hero" style={{ '--hero-color': '#D1FAE5', '--hero-accent': '#10B981' }}>
        <div className="fp-hero-blob" aria-hidden="true" />
        <div className="fp-hero-inner">
          <div className="fp-icon">🎨</div>
          <h1>Colour Overlay</h1>
          <p>Many people with dyslexia find reading much easier on a coloured background. Try different colours and find what works best for you.</p>
        </div>
      </div>

      <div className="fp-body">

        {/* Colour picker */}
        <div className="co-section">
          <h2 className="co-section-title">Choose a Background Colour</h2>
          <p className="co-sub">Research shows different colours help different people. Try a few!</p>
          <div className="colour-grid">
            {COLOURS.map(c => (
              <button
                key={c.name}
                className={`colour-swatch ${selected.name === c.name ? 'selected' : ''}`}
                style={{ background: c.value }}
                onClick={() => setSelected(c)}
                title={c.desc}
              >
                <span className="swatch-name">{c.name}</span>
                {selected.name === c.name && <span className="swatch-check">✓</span>}
              </button>
            ))}
          </div>
          <div className="selected-colour-info">
            <div className="colour-dot" style={{ background: selected.value, border: '2px solid #E5E7EB' }} />
            <div>
              <strong>{selected.name}</strong>
              <span>{selected.desc}</span>
            </div>
          </div>
        </div>

        {/* Reading controls */}
        <div className="co-section co-controls-box">
          <h2 className="co-section-title">Reading Controls</h2>
          <div className="co-sliders">
            <div className="co-slider-row">
              <label>Font Size: <strong>{fontSize}px</strong></label>
              <input type="range" min={12} max={32} step={1} value={fontSize}
                onChange={e => setFontSize(Number(e.target.value))} className="co-slider" />
            </div>
            <div className="co-slider-row">
              <label>Brightness: <strong>{brightness}%</strong></label>
              <input type="range" min={70} max={100} step={1} value={brightness}
                onChange={e => setBrightness(Number(e.target.value))} className="co-slider" />
            </div>
          </div>
        </div>

        {/* Text input */}
        <div className="co-section">
          <h2 className="co-section-title">Paste Your Text</h2>
          <textarea
            className="co-textarea"
            value={text}
            onChange={e => setText(e.target.value)}
            rows={4}
            placeholder="Paste or type your text here..."
          />
        </div>

        {/* Preview */}
        <div className="co-section">
          <h2 className="co-section-title">Reading Preview</h2>
          <div
            className="co-preview"
            style={{
              background: selected.value,
              color: selected.text,
              fontSize: `${fontSize}px`,
              filter: `brightness(${brightness}%)`,
            }}
          >
            <div className="co-preview-label">
              <span className="co-preview-dot" style={{ background: selected.value, border: '2px solid #ccc' }} />
              Reading on: <strong>{selected.name}</strong>
            </div>
            <div className="co-preview-text" style={{ fontFamily: 'Lexend, sans-serif', lineHeight: 1.8 }}>
              {text || 'Your text will appear here.'}
            </div>
          </div>
        </div>

        {/* Science box */}
        <div className="co-science">
          <h3>🔬 Why coloured overlays help</h3>
          <p>
            Some people with dyslexia experience a condition called <em>Meares-Irlen Syndrome</em> (also called visual stress),
            where white backgrounds cause letters to appear to move, shimmer, or blur. A coloured overlay reduces this effect
            by lowering visual contrast and calming the overactive visual system. Studies show up to <strong>20% improvement
            in reading speed</strong> for those affected.
          </p>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPage.css';

export default function Parents() {
  return (
    <div className="info-page">
      <div className="info-hero" style={{ background: 'linear-gradient(135deg, #EDE9FE, #DDD6FE)' }}>
        <div className="info-hero-inner">
          <div className="info-big-emoji">👨‍👩‍👧💙</div>
          <h1>Supporting your child with dyslexia</h1>
          <p>Your child is not struggling because they are not trying. Dyslexia is a neurological difference — not a lack of intelligence or effort.</p>
        </div>
      </div>

      <div className="info-body">

        <div className="info-message-card" style={{ background: '#EDE9FE' }}>
          <h2>🧠 What is dyslexia?</h2>
          <p>
            Dyslexia is a specific learning difference that primarily affects reading, spelling, and writing. It's caused
            by differences in how the brain processes language — not by vision problems or lack of intelligence.
            About <strong>1 in 5 people</strong> have some form of dyslexia, making it the most common learning difference.
          </p>
        </div>

        <h2 className="info-section-title">🔍 Signs to look for</h2>
        <div className="signs-grid">
          {[
            { emoji: '📖', text: 'Reads slowly or avoids reading' },
            { emoji: '✏️', text: 'Spells the same word differently each time' },
            { emoji: '🔀', text: 'Reverses letters (b/d, p/q)' },
            { emoji: '🧩', text: 'Strong verbally but struggles in writing' },
            { emoji: '🎧', text: 'Better at listening than reading' },
            { emoji: '⏰', text: 'Takes much longer to complete reading tasks' },
          ].map(s => (
            <div key={s.text} className="sign-card">
              <span>{s.emoji}</span>
              <p>{s.text}</p>
            </div>
          ))}
        </div>

        <h2 className="info-section-title">💡 How you can help at home</h2>
        <div className="tips-list">
          {[
            { emoji: '🔊', tip: 'Use text-to-speech tools', detail: 'Let your child listen to their school books and homework. Our Text to Speech tool is completely free.' },
            { emoji: '🎨', tip: 'Try coloured overlays', detail: 'Place a yellow or blue acetate sheet over pages. Or try our Colour Overlay tool on screen.' },
            { emoji: '🔤', tip: 'Use dyslexia-friendly fonts', detail: 'Fonts like OpenDyslexic and Lexend reduce letter confusion. Switch any document using our Font Changer.' },
            { emoji: '📚', tip: 'Read together daily', detail: 'Take turns reading. Never correct every mistake — focus on meaning and enjoyment.' },
            { emoji: '⏳', tip: 'Give more time', detail: 'Allow extra time for reading and writing tasks. Pressure makes dyslexia worse.' },
            { emoji: '🌟', tip: 'Focus on strengths', detail: 'Children with dyslexia are often highly creative, empathetic, and excellent problem-solvers.' },
          ].map(t => (
            <div key={t.tip} className="tip-item">
              <div className="tip-emoji">{t.emoji}</div>
              <div>
                <strong>{t.tip}</strong>
                <p>{t.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="info-section-title">🛠️ Try our tools now</h2>
        <div className="info-tool-cards">
          <Link to="/text-to-speech" className="info-tool-card" style={{ background: '#DBEAFE' }}>
            <div className="itc-icon">🔊</div>
            <h3>Text to Speech</h3>
            <p>Any text, PDF, or homework read aloud with speed control.</p>
            <span className="itc-btn">Try it →</span>
          </Link>
          <Link to="/font-changer" className="info-tool-card" style={{ background: '#EDE9FE' }}>
            <div className="itc-icon">🔤</div>
            <h3>Font Changer</h3>
            <p>Convert text into dyslexia-friendly fonts instantly.</p>
            <span className="itc-btn">Try it →</span>
          </Link>
          <Link to="/colour-overlay" className="info-tool-card" style={{ background: '#D1FAE5' }}>
            <div className="itc-icon">🎨</div>
            <h3>Colour Overlay</h3>
            <p>Find the perfect background colour for your child's reading.</p>
            <span className="itc-btn">Try it →</span>
          </Link>
        </div>

      </div>
    </div>
  );
}

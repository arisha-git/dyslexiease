import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPage.css';

export default function Educators() {
  return (
    <div className="info-page">
      <div className="info-hero" style={{ background: 'linear-gradient(135deg, #DBEAFE, #BFDBFE)' }}>
        <div className="info-hero-inner">
          <div className="info-big-emoji">🏫📚</div>
          <h1>Creating inclusive classrooms</h1>
          <p>Every student with dyslexia has the right to access education effectively. Small changes make a huge difference.</p>
        </div>
      </div>

      <div className="info-body">

        <div className="info-message-card" style={{ background: '#DBEAFE' }}>
          <h2>📊 The numbers</h2>
          <p>
            Approximately <strong>15–20% of the population</strong> has dyslexia. In a class of 30 students,
            that's likely 4–6 students who experience some level of reading difficulty. Early identification and
            the right support can transform outcomes. Students who receive appropriate support in early years
            close the gap significantly with peers.
          </p>
        </div>

        <h2 className="info-section-title">✅ Classroom strategies that work</h2>
        <div className="strategies-grid">
          {[
            { emoji: '🎧', title: 'Audio alternatives', body: 'Let students listen to text instead of reading silently. Use our TTS tool for worksheets and books.' },
            { emoji: '🎨', title: 'Coloured paper', body: 'Print worksheets on cream or yellow paper. Even this small change reduces visual stress for many students.' },
            { emoji: '🔤', title: 'Font choices', body: 'Use sans-serif fonts (Arial, Lexend, OpenDyslexic) in size 14+. Avoid decorative or italic-heavy fonts.' },
            { emoji: '📏', title: 'Generous spacing', body: 'Increase line spacing to at least 1.5×. Keep text columns narrow (under 70 characters per line).' },
            { emoji: '⏳', title: 'Extended time', body: 'Allow 25–50% extra time for exams and reading tasks. This is a reasonable adjustment, not an advantage.' },
            { emoji: '🗣️', title: 'Oral alternatives', body: 'Allow verbal answers, voice recordings, or oral exams as alternatives to written responses.' },
            { emoji: '🧪', title: 'Multisensory learning', body: 'Combine visual, auditory, and kinaesthetic approaches. Touching letters, using sandpaper letters, acting out words.' },
            { emoji: '💬', title: 'Positive framing', body: 'Celebrate strengths. Students with dyslexia are often brilliant at storytelling, creativity, and big-picture thinking.' },
          ].map(s => (
            <div key={s.title} className="strategy-card">
              <div className="sc-emoji">{s.emoji}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>

        <h2 className="info-section-title">🛠️ Use these tools in your classroom</h2>
        <div className="info-tool-cards">
          <Link to="/text-to-speech" className="info-tool-card" style={{ background: '#DBEAFE' }}>
            <div className="itc-icon">🔊</div>
            <h3>Text to Speech</h3>
            <p>Paste any worksheet text. Students can hear it at their own speed.</p>
            <span className="itc-btn">Try it →</span>
          </Link>
          <Link to="/font-changer" className="info-tool-card" style={{ background: '#EDE9FE' }}>
            <div className="itc-icon">🔤</div>
            <h3>Font Changer</h3>
            <p>Instantly convert classroom materials to OpenDyslexic or Lexend font.</p>
            <span className="itc-btn">Try it →</span>
          </Link>
          <Link to="/colour-overlay" className="info-tool-card" style={{ background: '#D1FAE5' }}>
            <div className="itc-icon">🎨</div>
            <h3>Colour Overlay</h3>
            <p>Let students find their ideal reading colour for digital work.</p>
            <span className="itc-btn">Try it →</span>
          </Link>
        </div>

        <div className="info-message-card" style={{ background: '#D1FAE5' }}>
          <h2>🌱 Remember</h2>
          <p>
            Accommodations for dyslexic students <em>do not</em> lower standards — they level the playing field.
            A student who has their work read aloud is demonstrating the same knowledge as one who reads silently;
            they're just accessing it differently. Inclusive teaching benefits every student in the class.
          </p>
        </div>

      </div>
    </div>
  );
}

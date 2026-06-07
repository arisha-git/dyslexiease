import React from 'react';
import { Link } from 'react-router-dom';
import './InfoPage.css';

export default function Kids() {
  return (
    <div className="info-page">
      <div className="info-hero" style={{ background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)' }}>
        <div className="info-hero-inner">
          <div className="info-big-emoji">🧒✨</div>
          <h1>Hey there, superstar reader!</h1>
          <p>Did you know that some of the most creative people in the world have dyslexia? That includes astronauts, artists, scientists and inventors!</p>
        </div>
      </div>

      <div className="info-body">

        <div className="info-message-card" style={{ background: '#FEF3C7' }}>
          <h2>🌟 You are NOT behind — you learn differently!</h2>
          <p>
            Dyslexia just means your amazing brain processes words in a unique way.
            It's not about being clever or not clever. Lots of brilliant people have dyslexia —
            and many say it's actually a <em>superpower</em> because it helps them think creatively and see things others miss.
          </p>
        </div>

        <h2 className="info-section-title">🛠️ Tools just for you</h2>
        <div className="info-tool-cards">
          <Link to="/text-to-speech" className="info-tool-card" style={{ background: '#DBEAFE' }}>
            <div className="itc-icon">🔊</div>
            <h3>Listen to text</h3>
            <p>Have any text, book, or worksheet read aloud to you in a friendly voice. You can even slow it down!</p>
            <span className="itc-btn">Try it →</span>
          </Link>
          <Link to="/font-changer" className="info-tool-card" style={{ background: '#EDE9FE' }}>
            <div className="itc-icon">🔤</div>
            <h3>Special fonts</h3>
            <p>Change text into a font made especially for people like you. Letters stay still and stop flipping!</p>
            <span className="itc-btn">Try it →</span>
          </Link>
          <Link to="/colour-overlay" className="info-tool-card" style={{ background: '#D1FAE5' }}>
            <div className="itc-icon">🎨</div>
            <h3>Colour your page</h3>
            <p>Reading on yellow or green is so much easier than white! Try different colours and find your favourite.</p>
            <span className="itc-btn">Try it →</span>
          </Link>
        </div>

        <div className="famous-people">
          <h2 className="info-section-title">⭐ Famous people with dyslexia</h2>
          <div className="famous-grid">
            {[
              { emoji: '🚀', name: 'Richard Branson', role: 'Space entrepreneur' },
              { emoji: '🎨', name: 'Keira Knightley', role: 'Hollywood actress' },
              { emoji: '🔬', name: 'Albert Einstein', role: 'Physicist & genius' },
              { emoji: '🎵', name: 'John Lennon', role: 'Musician & songwriter' },
              { emoji: '📖', name: 'Agatha Christie', role: 'World\'s best-selling mystery writer' },
              { emoji: '🏊', name: 'Michael Phelps', role: 'Olympic gold medallist' },
            ].map(p => (
              <div key={p.name} className="famous-card">
                <div className="famous-emoji">{p.emoji}</div>
                <div className="famous-name">{p.name}</div>
                <div className="famous-role">{p.role}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="info-message-card" style={{ background: '#FCE7F3' }}>
          <h2>💪 Tip: Be kind to yourself</h2>
          <p>Reading might take longer sometimes — and that's okay! Always ask for help when you need it. Your teachers and parents are here for you. And remember: you are trying your best, and that is always enough.</p>
        </div>

      </div>
    </div>
  );
}

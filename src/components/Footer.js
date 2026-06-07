import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo-box">DyslexiEase.</span>
          <p>Making reading joyful for everyone. Free, forever.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Tools</h4>
            <Link to="/text-to-speech">Text to Speech</Link>
            <Link to="/font-changer">Font Changer</Link>
            <Link to="/colour-overlay">Colour Overlay</Link>
          </div>
          <div className="footer-col">
            <h4>For</h4>
            <Link to="/kids">Kids</Link>
            <Link to="/parents">Parents</Link>
            <Link to="/educators">Educators</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 DyslexiEase — Free for everyone, always 💙</p>
      </div>
    </footer>
  );
}

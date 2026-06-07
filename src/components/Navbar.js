import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src="logo.png" alt="DyslexiEase Logo" />
        </Link>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/kids" className="nav-link">Kids</Link>
          <Link to="/parents" className="nav-link">Parents</Link>
          <Link to="/educators" className="nav-link">Educators</Link>
          <div className="nav-divider" />
          <Link to="/text-to-speech" className="nav-link tool-link">Text to Speech</Link>
          <Link to="/font-changer" className="nav-link tool-link">Font Changer</Link>
          <Link to="/colour-overlay" className="nav-link tool-link">Colour Overlay</Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

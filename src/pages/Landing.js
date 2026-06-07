import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

function BlobBg() {
  return (
    <div className="blob-bg" aria-hidden="true">
      <svg className="blob blob-1" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path fill="url(#g1)" d="M321.5,298.5Q281,397,175.5,390Q70,383,45.5,291.5Q21,200,60,120Q99,40,186,44Q273,48,317,124Q361,200,321.5,298.5Z"/>
      </svg>
      <svg className="blob blob-2" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCA5A5" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FDBA74" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path fill="url(#g2)" d="M314,302Q268,404,170,392Q72,380,39,290Q6,200,50,117Q94,34,184,46Q274,58,316,129Q358,200,314,302Z"/>
      </svg>
      <svg className="blob blob-3" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path fill="url(#g3)" d="M304,303.5Q258,407,163,391Q68,375,45,287.5Q22,200,56,120Q90,40,183,46.5Q276,53,312,126.5Q348,200,304,303.5Z"/>
      </svg>
      <svg className="blob blob-4" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g4" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F9A8D4" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path fill="url(#g4)" d="M326,293Q270,386,173,393Q76,400,42,300Q8,200,46,108Q84,16,182,29Q280,42,327,121Q374,200,326,293Z"/>
      </svg>
    </div>
  );
}

function IllustrationCard({ label, color, delay = 0, style = {} }) {
  return (
    <div
      className="illus-card"
      style={{ '--delay': `${delay}s`, '--color': color, ...style }}
    >
      <span className="illus-label">{label}</span>
    </div>
  );
}

export default function Landing() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll('[data-reveal]');
    items.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(28px)';
      setTimeout(() => {
        item.style.transition = 'all 0.7s cubic-bezier(0.22,1,0.36,1)';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 120 * i);
    });
  }, []);

  return (
    <div className="landing">

      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <BlobBg />

        <div className="hero-content">
          <div data-reveal>
            <div className="hero-badge">✨Free forever — no login needed✨</div>
          </div>

          <h1 data-reveal>
            Reading made <span className="highlight-blue">joyful</span> for
            <br />every <span className="highlight-purple">brilliant</span> mind
          </h1>

          <p className="hero-sub" data-reveal>
            DyslexiEase gives people with dyslexia superpowered reading tools —
            text-to-speech, dyslexia-friendly fonts, colour overlays and more.
            100% free, no signup, no fuss.
          </p>

          <div className="hero-ctas" data-reveal>
            <Link to="/text-to-speech" className="btn-primary">Start Listening</Link>
            <Link to="/font-changer" className="btn-secondary">Explore Tools</Link>
          </div>

          <div className="hero-stats" data-reveal>
            <StatPill num="1 in 5" label="people have dyslexia" />
            <StatPill num="100%" label="free, always" />
            <StatPill num="3 tools" label="ready right now" />
          </div>
        </div>

        <IllustrationCard label="📚Reading" color="#DBEAFE" delay={0.2} style={{ top: '18%', right: '4%' }} />
        <IllustrationCard label="🎶Listening" color="#EDE9FE" delay={0.5} style={{ top: '42%', right: '1%' }} />
        <IllustrationCard label="🎨Colours" color="#FCE7F3" delay={0.8} style={{ bottom: '22%', right: '6%' }} />
        <IllustrationCard label="📔Fonts" color="#D1FAE5" delay={1.0} style={{ top: '22%', left: '2%' }} />
        <IllustrationCard label="❤️You can do it!" color="#FEF3C7" delay={1.3} style={{ bottom: '28%', left: '1%' }} />
      </section>

      {/* ILLUSTRATION STRIP */}
      <section className="illus-strip">
        <div className="illus-strip-inner">
          <IllusBlock
            img="https://i.pinimg.com/736x/fa/be/62/fabe624e42e75abf027078f927bcc601.jpg"
            title="Kids love learning"
            color="#DBEAFE"
          />
          <IllusBlock
            img="https://img.magnific.com/premium-vector/three-preschool-kids-sitting-floor-learning-together_79217-424.jpg"
            title="Every child can read"
            color="#EDE9FE"
          />
          <IllusBlock
            img="https://img.freepik.com/free-vector/children-doing-experiment-vector-educational-flat-graphic_53876-105793.jpg"
            title="Tools that really help"
            color="#D1FAE5"
          />
        </div>
      </section>

      {/* TOOLS — clean minimal strip, no section headers */}
      <section className="tools-strip">
        <div className="tools-inner">
          <ToolCard
            to="/text-to-speech"
            title="Text to Speech"
            desc="Hear any text read aloud. Control speed, click any word."
            color="#DBEAFE"
            accent="#3B82F6"
          />
          <ToolCard
            to="/font-changer"
            title="Font Changer"
            desc="Switch to fonts built to stop letters from flipping."
            color="#EDE9FE"
            accent="#8B5CF6"
          />
          <ToolCard
            to="/colour-overlay"
            title="Colour Overlay"
            desc="Pick a background colour that makes reading click for you."
            color="#D1FAE5"
            accent="#10B981"
          />
        </div>
      </section>

    </div>
  );
}

function StatPill({ num, label }) {
  return (
    <div className="stat-pill">
      <div className="stat-num">{num}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

function IllusBlock({ img, title, color }) {
  return (
    <div className="illus-block" style={{ '--block-color': color }}>
      <div className="illus-block-img">
        <img src={img} alt={title} loading="lazy" />
      </div>
      <p>{title}</p>
    </div>
  );
}

function ToolCard({ to, title, desc, color, accent }) {
  return (
    <Link to={to} className="tool-card" style={{ '--tc': color, '--ta': accent }}>
      <div className="tool-card-bar" />
      <h3>{title}</h3>
      <p>{desc}</p>
      <span className="tool-card-link">Try it →</span>
    </Link>
  );
}
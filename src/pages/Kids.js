import React from 'react';
import { Link } from 'react-router-dom';
import './Kids.css';

/* ── Illustrated reading kid ── */
function KidReading() {
  return (
    <svg viewBox="0 0 220 260" xmlns="http://www.w3.org/2000/svg" className="kid-illustration" aria-label="A kid happily reading a book">

      {/* Chair */}
      <rect x="30" y="200" width="160" height="12" rx="6" fill="#C4B5FD"/>
      <rect x="45" y="212" width="12" height="40" rx="4" fill="#A78BFA"/>
      <rect x="163" y="212" width="12" height="40" rx="4" fill="#A78BFA"/>
      <rect x="22" y="168" width="12" height="52" rx="4" fill="#A78BFA"/>

      {/* Body */}
      <rect x="70" y="148" width="80" height="68" rx="20" fill="#FDE68A"/>

      {/* Legs */}
      <rect x="78" y="200" width="22" height="38" rx="10" fill="#FDE68A"/>
      <rect x="120" y="200" width="22" height="38" rx="10" fill="#FDE68A"/>

      {/* Shoes */}
      <ellipse cx="89" cy="238" rx="16" ry="9" fill="#6D28D9"/>
      <ellipse cx="131" cy="238" rx="16" ry="9" fill="#6D28D9"/>

      {/* Arms */}
      <rect x="42" y="158" width="32" height="14" rx="7" fill="#FDE68A"/>
      <rect x="146" y="158" width="32" height="14" rx="7" fill="#FDE68A"/>

      {/* Book */}
      <rect x="58" y="158" width="104" height="70" rx="8" fill="#3B82F6"/>
      <rect x="58" y="158" width="52" height="70" rx="0" fill="#60A5FA"/>
      <rect x="108" y="158" width="2" height="70" fill="#1D4ED8"/>
      {/* Book lines */}
      <rect x="66" y="172" width="36" height="4" rx="2" fill="white" opacity="0.6"/>
      <rect x="66" y="182" width="28" height="4" rx="2" fill="white" opacity="0.6"/>
      <rect x="66" y="192" width="32" height="4" rx="2" fill="white" opacity="0.6"/>
      <rect x="66" y="202" width="24" height="4" rx="2" fill="white" opacity="0.6"/>
      <rect x="116" y="172" width="36" height="4" rx="2" fill="white" opacity="0.6"/>
      <rect x="116" y="182" width="28" height="4" rx="2" fill="white" opacity="0.6"/>
      <rect x="116" y="192" width="32" height="4" rx="2" fill="white" opacity="0.6"/>

      {/* Neck */}
      <rect x="98" y="120" width="24" height="30" rx="10" fill="#FDE68A"/>

      {/* Head */}
      <ellipse cx="110" cy="104" rx="38" ry="40" fill="#FDE68A"/>

      {/* Hair */}
      <ellipse cx="110" cy="70" rx="38" ry="20" fill="#92400E"/>
      <ellipse cx="76" cy="90" rx="10" ry="18" fill="#92400E"/>
      <ellipse cx="144" cy="90" rx="10" ry="18" fill="#92400E"/>

      {/* Eyes */}
      <ellipse cx="96" cy="104" rx="6" ry="7" fill="white"/>
      <ellipse cx="124" cy="104" rx="6" ry="7" fill="white"/>
      <ellipse cx="97" cy="105" rx="4" ry="4.5" fill="#1E1B4B"/>
      <ellipse cx="125" cy="105" rx="4" ry="4.5" fill="#1E1B4B"/>
      <circle cx="99" cy="103" r="1.5" fill="white"/>
      <circle cx="127" cy="103" r="1.5" fill="white"/>

      {/* Smile */}
      <path d="M98 118 Q110 128 122 118" stroke="#92400E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* Rosy cheeks */}
      <ellipse cx="84" cy="115" rx="8" ry="5" fill="#FCA5A5" opacity="0.5"/>
      <ellipse cx="136" cy="115" rx="8" ry="5" fill="#FCA5A5" opacity="0.5"/>
    </svg>
  );
}

/* ── Floating letter shapes ── */
function FloatingLetter({ letter, x, y, color, size = 40, delay = 0, rotate = 0 }) {
  return (
    <div
      className="floating-letter"
      style={{
        left: x, top: y,
        color,
        fontSize: size,
        animationDelay: `${delay}s`,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {letter}
    </div>
  );
}

/* ── Decorative blob shape ── */
function BlobShape({ color, opacity = 0.15, style = {} }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
      className="deco-blob" style={style} aria-hidden="true">
      <path
        fill={color}
        fillOpacity={opacity}
        d="M48,-67C60,-55,67,-38,72,-20C77,-2,80,17,73,32C65,47,48,58,30,66C12,74,-7,80,-25,75C-43,70,-60,56,-68,38C-76,20,-75,0,-67,-17C-59,-34,-44,-48,-28,-59C-12,-70,5,-79,20,-75C35,-71,36,-79,48,-67Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/* ── Star shape ── */
function Star({ style = {}, color = '#FCD34D', size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      style={{ position: 'absolute', ...style }} aria-hidden="true">
      <polygon
        points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9"
        fill={color}
      />
    </svg>
  );
}

/* ── Sparkle dot cluster ── */
function Dots({ style = {} }) {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60"
      style={{ position: 'absolute', ...style }} aria-hidden="true">
      {[
        [10,10],[30,8],[50,12],[8,30],[52,28],
        [12,50],[32,52],[50,48],
      ].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#A78BFA" opacity="0.5"/>
      ))}
    </svg>
  );
}

export default function Kids() {
  return (
    <div className="kids-page">

      {/* Decorative background shapes */}
      <BlobShape color="#8B5CF6" opacity={0.12} style={{ top: -60, right: -60, width: 400, height: 400 }} />
      <BlobShape color="#3B82F6" opacity={0.1}  style={{ bottom: 100, left: -80, width: 360, height: 360 }} />
      <BlobShape color="#10B981" opacity={0.1}  style={{ top: '40%', right: '5%', width: 280, height: 280 }} />

      {/* Floating letters */}
      <FloatingLetter letter="A" x="5%"  y="15%"  color="#8B5CF6" size={48} delay={0}   rotate={-12} />
      <FloatingLetter letter="b" x="88%" y="20%"  color="#3B82F6" size={40} delay={0.6} rotate={8} />
      <FloatingLetter letter="d" x="92%" y="52%"  color="#10B981" size={36} delay={1.2} rotate={-5} />
      <FloatingLetter letter="p" x="3%"  y="55%"  color="#F59E0B" size={44} delay={0.9} rotate={14} />
      <FloatingLetter letter="q" x="8%"  y="78%"  color="#EC4899" size={32} delay={0.3} rotate={-8} />
      <FloatingLetter letter="R" x="85%" y="78%"  color="#8B5CF6" size={38} delay={1.5} rotate={6} />

      {/* Stars */}
      <Star style={{ top: '12%', left: '18%' }} color="#FCD34D" size={20} />
      <Star style={{ top: '28%', right: '22%' }} color="#A78BFA" size={14} />
      <Star style={{ top: '65%', left: '14%' }} color="#6EE7B7" size={18} />
      <Star style={{ bottom: '18%', right: '18%' }} color="#FCA5A5" size={22} />

      {/* Dot clusters */}
      <Dots style={{ top: '8%', right: '28%' }} />
      <Dots style={{ bottom: '25%', left: '10%' }} />

      {/* Page content */}
      <div className="kids-inner">

        {/* Hero row: text + illustration */}
        <div className="kids-hero-row">
          <div className="kids-hero-text">
            <h1>
              Your brain works<br />
              <span className="kids-accent">differently.</span><br />
              That's a good thing.
            </h1>
            <p>Dyslexia doesn't mean you're behind. It means you think in a way most people can't.</p>
          </div>
          <div className="kids-hero-art">
            <KidReading />
          </div>
        </div>

        {/* Message */}
        <div className="kids-message">
          <div className="kids-message-accent" />
          <div className="kids-message-body">
            <h2>You are not behind.</h2>
            <p>
              Dyslexia means your brain processes words in its own way — not a wrong way, just a different one.
              Reading might take a little more effort, but that same brain is often brilliant at seeing the big picture,
              solving problems, and thinking creatively in ways others simply can't.
            </p>
            <p>
              The tools here are built to make reading easier, so you can focus on what you actually want to say and learn.
            </p>
          </div>
        </div>

        {/* Tools */}
        <div className="kids-tools">
          <p className="kids-tools-label">Tools built for you</p>
          <div className="kids-tools-grid">
            <KidToolCard
              to="/text-to-speech"
              title="Listen to text"
              desc="Paste anything and hear it read aloud at whatever speed works for you."
              bg="#DBEAFE" accent="#3B82F6"
              shape={<ListenShape />}
            />
            <KidToolCard
              to="/font-changer"
              title="Change the font"
              desc="Swap any text into a font where letters don't flip or get confused."
              bg="#EDE9FE" accent="#8B5CF6"
              shape={<FontShape />}
            />
            <KidToolCard
              to="/colour-overlay"
              title="Change the colour"
              desc="A different background colour can make words sit still on the page."
              bg="#D1FAE5" accent="#10B981"
              shape={<ColourShape />}
            />
          </div>
        </div>

        {/* Closing */}
        <p className="kids-note">
          Reading might take longer sometimes — and that's okay. 
          Ask for help when you need it. 
          You are always enough.
        </p>

      </div>
    </div>
  );
}

function KidToolCard({ to, title, desc, bg, accent, shape }) {
  return (
    <Link to={to} className="ktc" style={{ '--ktc-bg': bg, '--ktc-a': accent }}>
      <div className="ktc-shape">{shape}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <span className="ktc-arrow">Try it →</span>
    </Link>
  );
}

/* Mini SVG icon illustrations for each tool card */
function ListenShape() {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="32" cy="32" rx="28" ry="28" fill="#BFDBFE"/>
      <path d="M24 22 C24 16 40 16 40 22 L40 34 C40 40 24 40 24 34 Z" fill="#3B82F6"/>
      <rect x="28" y="40" width="8" height="6" fill="#3B82F6"/>
      <rect x="22" y="46" width="20" height="4" rx="2" fill="#3B82F6"/>
      <path d="M18 26 Q14 32 18 38" stroke="#3B82F6" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M46 26 Q50 32 46 38" stroke="#3B82F6" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function FontShape() {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="32" cy="32" rx="28" ry="28" fill="#DDD6FE"/>
      <text x="16" y="40" fontSize="28" fontWeight="bold" fill="#7C3AED" fontFamily="serif">A</text>
      <text x="36" y="38" fontSize="20" fontWeight="bold" fill="#8B5CF6" fontFamily="sans-serif">a</text>
    </svg>
  );
}

function ColourShape() {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="32" cy="32" rx="28" ry="28" fill="#A7F3D0"/>
      <circle cx="22" cy="28" r="10" fill="#FCD34D"/>
      <circle cx="38" cy="24" r="10" fill="#60A5FA" opacity="0.85"/>
      <circle cx="30" cy="38" r="10" fill="#F472B6" opacity="0.8"/>
    </svg>
  );
}
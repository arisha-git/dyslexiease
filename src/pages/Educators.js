import React from 'react';
import './Educators.css';

/* ══════════════════════════════════════
   CLASSROOM ILLUSTRATION
══════════════════════════════════════ */
function ClassroomIllustration() {
  return (
    <svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg"
      className="educators-illustration" aria-label="A teacher writing on a blackboard while a student sits at a desk">

      {/* ── BLACKBOARD ── */}
      <rect x="10" y="20" width="170" height="110" rx="6" fill="#1a3a2a"/>
      <rect x="16" y="26" width="158" height="98" rx="4" fill="#1e4d36"/>
      {/* chalk tray */}
      <rect x="10" y="130" width="170" height="8" rx="3" fill="#78350F"/>
      {/* Board letters */}
      <text x="30" y="80" fontSize="28" fontWeight="bold" fill="white" fontFamily="serif" opacity="0.9">a b</text>
      <text x="100" y="80" fontSize="28" fontWeight="bold" fill="white" fontFamily="serif" opacity="0.9">c d</text>
      {/* underline */}
      <line x1="30" y1="88" x2="155" y2="88" stroke="white" strokeWidth="1.5" opacity="0.3" strokeDasharray="4 3"/>
      {/* small chalk marks */}
      <rect x="32" y="100" width="18" height="3" rx="1.5" fill="white" opacity="0.25"/>
      <rect x="58" y="100" width="12" height="3" rx="1.5" fill="white" opacity="0.25"/>
      <rect x="78" y="100" width="20" height="3" rx="1.5" fill="white" opacity="0.25"/>
      {/* Board frame shadow */}
      <rect x="10" y="20" width="170" height="110" rx="6" fill="none" stroke="#92400E" strokeWidth="2.5"/>

      {/* ── TEACHER ── */}
      {/* Body */}
      <rect x="192" y="128" width="52" height="80" rx="18" fill="#FDE68A"/>
      {/* Blazer/jacket overlay */}
      <rect x="192" y="128" width="52" height="80" rx="18" fill="#DC2626" opacity="0.85"/>
      {/* Collar */}
      <path d="M210 128 L218 148 L226 128" fill="white" opacity="0.9"/>
      {/* Legs */}
      <rect x="200" y="200" width="14" height="40" rx="7" fill="#1E293B"/>
      <rect x="222" y="200" width="14" height="40" rx="7" fill="#1E293B"/>
      {/* Shoes */}
      <ellipse cx="207" cy="240" rx="12" ry="7" fill="#0F172A"/>
      <ellipse cx="229" cy="240" rx="12" ry="7" fill="#0F172A"/>
      {/* Arm holding chalk */}
      <rect x="155" y="112" width="46" height="12" rx="6" fill="#FDE68A" transform="rotate(-15 155 112)"/>
      {/* Chalk */}
      <rect x="148" y="108" width="16" height="6" rx="3" fill="white"/>
      {/* Other arm */}
      <rect x="238" y="140" width="30" height="12" rx="6" fill="#FDE68A"/>
      {/* Neck */}
      <rect x="210" y="106" width="16" height="24" rx="7" fill="#FDE68A"/>
      {/* Head */}
      <ellipse cx="218" cy="92" rx="26" ry="28" fill="#FDE68A"/>
      {/* Hair (teacher - bun) */}
      <ellipse cx="218" cy="67" rx="26" ry="14" fill="#B45309"/>
      <ellipse cx="195" cy="80" rx="7" ry="14" fill="#B45309"/>
      <ellipse cx="241" cy="80" rx="7" ry="14" fill="#B45309"/>
      {/* Bun */}
      <ellipse cx="218" cy="62" rx="12" ry="10" fill="#92400E"/>
      {/* Glasses */}
      <rect x="204" y="88" width="12" height="9" rx="4" fill="none" stroke="#1E293B" strokeWidth="1.8"/>
      <rect x="220" y="88" width="12" height="9" rx="4" fill="none" stroke="#1E293B" strokeWidth="1.8"/>
      <line x1="216" y1="92" x2="220" y2="92" stroke="#1E293B" strokeWidth="1.5"/>
      <line x1="204" y1="92" x2="200" y2="91" stroke="#1E293B" strokeWidth="1.5"/>
      <line x1="232" y1="92" x2="236" y2="91" stroke="#1E293B" strokeWidth="1.5"/>
      {/* Eyes behind glasses */}
      <ellipse cx="210" cy="92" rx="2.5" ry="3" fill="#1E1B4B"/>
      <ellipse cx="226" cy="92" rx="2.5" ry="3" fill="#1E1B4B"/>
      {/* Smile */}
      <path d="M210 102 Q218 109 226 102" stroke="#92400E" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* ── DESK ── */}
      <rect x="290" y="190" width="80" height="10" rx="4" fill="#B45309"/>
      <rect x="295" y="200" width="8" height="50" rx="3" fill="#92400E"/>
      <rect x="357" y="200" width="8" height="50" rx="3" fill="#92400E"/>
      {/* Notebook on desk */}
      <rect x="294" y="178" width="52" height="14" rx="3" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
      {/* Notebook lines */}
      <line x1="298" y1="183" x2="342" y2="183" stroke="#DBEAFE" strokeWidth="1.2"/>
      <line x1="298" y1="187" x2="338" y2="187" stroke="#DBEAFE" strokeWidth="1.2"/>
      {/* Pencil */}
      <rect x="348" y="174" width="6" height="24" rx="2" fill="#FCD34D" transform="rotate(10 348 174)"/>
      <polygon points="348,198 354,198 351,206" fill="#FCA5A5" transform="rotate(10 351 202)"/>

      {/* ── STUDENT ── */}
      {/* Body */}
      <rect x="295" y="148" width="46" height="52" rx="16" fill="#BFDBFE"/>
      {/* Legs */}
      <rect x="302" y="192" width="12" height="28" rx="6" fill="#1E293B"/>
      <rect x="323" y="192" width="12" height="28" rx="6" fill="#1E293B"/>
      {/* Shoes */}
      <ellipse cx="308" cy="220" rx="10" ry="6" fill="#0F172A"/>
      <ellipse cx="329" cy="220" rx="10" ry="6" fill="#0F172A"/>
      {/* Writing arm */}
      <rect x="320" y="172" width="32" height="10" rx="5" fill="#FDE68A"/>
      {/* Other arm on desk */}
      <rect x="277" y="168" width="26" height="10" rx="5" fill="#FDE68A" transform="rotate(-10 277 168)"/>
      {/* Neck */}
      <rect x="311" y="128" width="14" height="22" rx="6" fill="#FDE68A"/>
      {/* Head — animated group */}
      <g className="student-head-group">
        {/* Head */}
        <ellipse cx="318" cy="114" rx="22" ry="24" fill="#FDE68A"/>
        {/* Hair */}
        <ellipse cx="318" cy="93" rx="22" ry="12" fill="#1E293B"/>
        <ellipse cx="298" cy="105" rx="6" ry="12" fill="#1E293B"/>
        <ellipse cx="338" cy="105" rx="6" ry="12" fill="#1E293B"/>
        {/* Eyes — looking up (default) */}
        <g className="eyes-up">
          <ellipse cx="311" cy="112" rx="3.5" ry="4" fill="white"/>
          <ellipse cx="325" cy="112" rx="3.5" ry="4" fill="white"/>
          <ellipse cx="311" cy="110" rx="2.2" ry="2.5" fill="#1E1B4B"/>
          <ellipse cx="325" cy="110" rx="2.2" ry="2.5" fill="#1E1B4B"/>
          <circle cx="312" cy="109" r="0.9" fill="white"/>
          <circle cx="326" cy="109" r="0.9" fill="white"/>
        </g>
        {/* Mouth */}
        <path d="M312 122 Q318 127 324 122" stroke="#92400E" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        {/* Cheeks */}
        <ellipse cx="304" cy="118" rx="5" ry="3" fill="#FCA5A5" opacity="0.45"/>
        <ellipse cx="332" cy="118" rx="5" ry="3" fill="#FCA5A5" opacity="0.45"/>
      </g>

      {/* Floor line */}
      <line x1="10" y1="248" x2="370" y2="248" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="6 4"/>
    </svg>
  );
}

/* ── Decorative blob ── */
function BlobShape({ color, opacity = 0.12, style = {} }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
      className="educators-deco-blob" style={style} aria-hidden="true">
      <path fill={color} fillOpacity={opacity}
        d="M38,-54C49,-44,57,-30,62,-14C67,2,69,20,62,35C55,50,39,62,22,68C5,74,-13,74,-30,66C-47,58,-63,42,-68,24C-73,6,-67,-14,-57,-30C-47,-46,-33,-58,-18,-63C-3,-68,14,-66,27,-60C40,-54,27,-64,38,-54Z"
        transform="translate(100 100)"/>
    </svg>
  );
}

function Star({ style = {}, color = '#FCD34D', size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      style={{ position: 'absolute', ...style }} aria-hidden="true">
      <polygon points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9" fill={color}/>
    </svg>
  );
}

const STRATEGIES = [
  { title: 'Audio alternatives', body: 'Let students listen to text instead of reading silently. Use the Text to Speech tool here for any worksheet or passage.' },
  { title: 'Coloured paper', body: 'Print worksheets on cream or yellow paper. This single change reduces visual stress for many students at no cost.' },
  { title: 'Font choices', body: 'Use sans-serif fonts like Arial, Lexend, or OpenDyslexic at size 14+. Avoid decorative or heavily italic fonts.' },
  { title: 'Generous spacing', body: 'Set line spacing to at least 1.5×. Keep text columns under 70 characters wide to reduce tracking difficulty.' },
  { title: 'Extended time', body: 'Allow 25–50% extra time for reading and writing tasks. This levels the field — it is not an unfair advantage.' },
  { title: 'Oral alternatives', body: 'Accept verbal answers, voice recordings, or oral exams as valid alternatives to written responses.' },
  { title: 'Multisensory learning', body: 'Combine visual, auditory, and kinaesthetic approaches — tracing letters, building words, acting out meanings.' },
  { title: 'Celebrate strengths', body: 'Students with dyslexia are often exceptional storytellers, creative thinkers, and big-picture problem-solvers.' },
];

export default function Educators() {
  return (
    <div className="educators-page">

      <BlobShape color="#EA580C" opacity={0.1} style={{ top: -60, right: -60, width: 420, height: 420 }} />
      <BlobShape color="#F97316" opacity={0.08} style={{ bottom: 80, left: -80, width: 380, height: 380 }} />
      <BlobShape color="#FB923C" opacity={0.07} style={{ top: '45%', right: '4%', width: 300, height: 300 }} />

      <Star style={{ top: '10%', left: '14%' }} color="#FED7AA" size={18} />
      <Star style={{ top: '24%', right: '18%' }} color="#FDBA74" size={14} />
      <Star style={{ top: '58%', left: '7%' }} color="#FB923C" size={20} />
      <Star style={{ bottom: '18%', right: '10%' }} color="#FED7AA" size={16} />

      <div className="educators-inner">

        {/* Hero */}
        <div className="educators-hero-row">
          <div className="educators-hero-text">
            <h1>
              Every student<br />
              <span className="educators-accent">deserves a classroom</span><br />
              built for them.
            </h1>
            <p>
              Around 1 in 5 students has dyslexia. Small, deliberate changes to how you teach
              can transform how they learn — and benefit every student in the room.
            </p>
          </div>
          <div className="educators-hero-art">
            <ClassroomIllustration />
          </div>
        </div>

        {/* The numbers */}
        <div className="educators-section">
          <div className="educators-section-label">The numbers</div>
          <div className="educators-stat-row">
            <div className="educators-stat-card">
              <div className="esc-num">1 in 5</div>
              <div className="esc-label">students has dyslexia</div>
            </div>
            <div className="educators-stat-card">
              <div className="esc-num">4 - 6</div>
              <div className="esc-label">students per class of 30</div>
            </div>
            <div className="educators-stat-card">
              <div className="esc-num">Early</div>
              <div className="esc-label">support transforms outcomes</div>
            </div>
          </div>
          <div className="educators-what">
            <div className="educators-what-bar" />
            <p>
              Dyslexia is not a vision problem or a sign of low intelligence. It is a neurological difference
              in how the brain processes written language. Students with dyslexia who receive the right support
              in their early years close the gap with peers significantly — and often go on to excel.
              Accommodations do not lower standards. They level the playing field.
            </p>
          </div>
        </div>

        {/* Strategies */}
        <div className="educators-section">
          <div className="educators-section-label">Classroom strategies that work</div>
          <div className="educators-strategies-grid">
            {STRATEGIES.map((s, i) => (
              <div key={i} className="educators-strategy-card">
                <div className="estr-num">{String(i + 1).padStart(2, '0')}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="educators-closing">
          <div className="educators-what-bar" />
          <p>
            Inclusive teaching is not about lowering expectations — it is about removing the barriers
            that prevent students from showing what they actually know. Every adjustment you make
            for a dyslexic student makes your classroom better for everyone.
          </p>
        </div>

      </div>
    </div>
  );
}
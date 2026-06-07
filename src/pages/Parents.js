import React from 'react';
import './Parents.css';

/* ── Family illustration ── */
function FamilyIllustration() {
  return (
    <svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg"
      className="parents-illustration" aria-label="A family of three playing together">

      {/* Ground */}
      <ellipse cx="150" cy="228" rx="130" ry="10" fill="#D1FAE5" opacity="0.6"/>

      {/* ── KID (centre) ── */}
      {/* Kid body */}
      <rect x="128" y="152" width="44" height="52" rx="16" fill="#fb1010"/>
      {/* Kid legs */}
      <rect x="132" y="196" width="14" height="30" rx="7" fill="#FDE68A"/>
      <rect x="154" y="196" width="14" height="30" rx="7" fill="#FDE68A"/>
      {/* Kid shoes */}
      <ellipse cx="139" cy="226" rx="11" ry="7" fill="#0F766E"/>
      <ellipse cx="161" cy="226" rx="11" ry="7" fill="#0F766E"/>
      {/* Kid neck */}
      <rect x="143" y="132" width="14" height="22" rx="6" fill="#FDE68A"/>
      {/* Kid head */}
      <ellipse cx="150" cy="118" rx="26" ry="26" fill="#FDE68A"/>
      {/* Kid hair */}
      <ellipse cx="150" cy="96" rx="26" ry="14" fill="#92400E"/>
      <ellipse cx="126" cy="110" rx="7" ry="14" fill="#92400E"/>
      <ellipse cx="174" cy="110" rx="7" ry="14" fill="#92400E"/>
      {/* Kid eyes */}
      <ellipse cx="142" cy="118" rx="4" ry="4.5" fill="white"/>
      <ellipse cx="158" cy="118" rx="4" ry="4.5" fill="white"/>
      <ellipse cx="142" cy="119" rx="2.5" ry="3" fill="#1E1B4B"/>
      <ellipse cx="158" cy="119" rx="2.5" ry="3" fill="#1E1B4B"/>
      <circle cx="143" cy="118" r="1" fill="white"/>
      <circle cx="159" cy="118" r="1" fill="white"/>
      {/* Kid smile */}
      <path d="M143 128 Q150 135 157 128" stroke="#92400E" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Kid cheeks */}
      <ellipse cx="135" cy="124" rx="5" ry="3.5" fill="#FCA5A5" opacity="0.5"/>
      <ellipse cx="165" cy="124" rx="5" ry="3.5" fill="#FCA5A5" opacity="0.5"/>
      {/* Kid raised arms */}
      <rect x="100" y="148" width="32" height="12" rx="6" fill="#FDE68A" transform="rotate(-20 100 148)"/>
      <rect x="168" y="138" width="32" height="12" rx="6" fill="#FDE68A" transform="rotate(20 168 138)"/>

      {/* ── PARENT LEFT (mum) ── */}
      {/* Body */}
      <rect x="34" y="128" width="56" height="72" rx="20" fill="#99F6E4"/>
      {/* Dress skirt */}
      <path d="M34 170 Q40 210 62 210 Q84 210 90 170 Z" fill="#5EEAD4"/>
      {/* Legs */}
      <rect x="46" y="200" width="14" height="28" rx="7" fill="#FDE68A"/>
      <rect x="66" y="200" width="14" height="28" rx="7" fill="#FDE68A"/>
      {/* Shoes */}
      <ellipse cx="53" cy="228" rx="11" ry="7" fill="#0F766E"/>
      <ellipse cx="73" cy="228" rx="11" ry="7" fill="#0F766E"/>
      {/* Neck */}
      <rect x="55" y="108" width="16" height="22" rx="7" fill="#FDE68A"/>
      {/* Head */}
      <ellipse cx="63" cy="94" rx="28" ry="30" fill="#FDE68A"/>
      {/* Hair (long) */}
      <ellipse cx="63" cy="68" rx="28" ry="16" fill="#B45309"/>
      <rect x="35" y="68" width="12" height="50" rx="6" fill="#B45309"/>
      <rect x="79" y="68" width="12" height="50" rx="6" fill="#B45309"/>
      {/* Eyes */}
      <ellipse cx="54" cy="94" rx="4.5" ry="5" fill="white"/>
      <ellipse cx="72" cy="94" rx="4.5" ry="5" fill="white"/>
      <ellipse cx="54" cy="95" rx="3" ry="3.5" fill="#1E1B4B"/>
      <ellipse cx="72" cy="95" rx="3" ry="3.5" fill="#1E1B4B"/>
      <circle cx="55" cy="93.5" r="1.2" fill="white"/>
      <circle cx="73" cy="93.5" r="1.2" fill="white"/>
      {/* Smile */}
      <path d="M54 106 Q63 114 72 106" stroke="#92400E" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Cheeks */}
      <ellipse cx="44" cy="102" rx="6" ry="4" fill="#FCA5A5" opacity="0.45"/>
      <ellipse cx="82" cy="102" rx="6" ry="4" fill="#FCA5A5" opacity="0.45"/>
      {/* Arm reaching toward kid */}
      <rect x="82" y="138" width="48" height="12" rx="6" fill="#FDE68A"/>

      {/* ── PARENT RIGHT (dad) ── */}
      {/* Body */}
      <rect x="210" y="124" width="58" height="76" rx="20" fill="#6EE7B7"/>
      {/* Legs */}
      <rect x="218" y="192" width="16" height="36" rx="8" fill="#1E293B"/>
      <rect x="244" y="192" width="16" height="36" rx="8" fill="#1E293B"/>
      {/* Shoes */}
      <ellipse cx="226" cy="228" rx="13" ry="7" fill="#134E4A"/>
      <ellipse cx="252" cy="228" rx="13" ry="7" fill="#134E4A"/>
      {/* Neck */}
      <rect x="230" y="104" width="18" height="22" rx="7" fill="#FDE68A"/>
      {/* Head */}
      <ellipse cx="239" cy="90" rx="30" ry="30" fill="#FDE68A"/>
      {/* Hair */}
      <ellipse cx="239" cy="64" rx="30" ry="15" fill="#1E293B"/>
      <ellipse cx="212" cy="76" rx="8" ry="16" fill="#1E293B"/>
      <ellipse cx="266" cy="76" rx="8" ry="16" fill="#1E293B"/>
      {/* Eyes */}
      <ellipse cx="229" cy="90" rx="5" ry="5.5" fill="white"/>
      <ellipse cx="249" cy="90" rx="5" ry="5.5" fill="white"/>
      <ellipse cx="229" cy="91" rx="3.2" ry="3.8" fill="#1E1B4B"/>
      <ellipse cx="249" cy="91" rx="3.2" ry="3.8" fill="#1E1B4B"/>
      <circle cx="230" cy="89.5" r="1.2" fill="white"/>
      <circle cx="250" cy="89.5" r="1.2" fill="white"/>
      {/* Smile */}
      <path d="M229 103 Q239 112 249 103" stroke="#92400E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Cheeks */}
      <ellipse cx="218" cy="98" rx="6" ry="4" fill="#FCA5A5" opacity="0.45"/>
      <ellipse cx="260" cy="98" rx="6" ry="4" fill="#FCA5A5" opacity="0.45"/>
      {/* Arm reaching toward kid */}
      <rect x="170" y="134" width="48" height="12" rx="6" fill="#FDE68A"/>

      {/* Hearts floating above */}
      <path d="M140 72 C140 68 134 64 134 70 C134 76 140 80 140 80 C140 80 146 76 146 70 C146 64 140 68 140 72Z" fill="#F472B6" opacity="0.7"/>
      <path d="M160 60 C160 57 156 54 156 58 C156 62 160 65 160 65 C160 65 164 62 164 58 C164 54 160 57 160 60Z" fill="#A78BFA" opacity="0.7"/>
      <path d="M178 72 C178 69 174 66 174 70 C174 74 178 77 178 77 C178 77 182 74 182 70 C182 66 178 69 178 72Z" fill="#FCD34D" opacity="0.8"/>
    </svg>
  );
}

/* ── Decorative blob ── */
function BlobShape({ color, opacity = 0.12, style = {} }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
      className="parents-deco-blob" style={style} aria-hidden="true">
      <path
        fill={color} fillOpacity={opacity}
        d="M44,-60C56,-50,64,-34,68,-17C72,0,72,18,64,33C56,48,40,60,23,67C6,74,-13,77,-30,70C-47,63,-62,48,-68,30C-74,12,-71,-9,-62,-26C-53,-43,-38,-56,-22,-63C-6,-70,11,-70,25,-67C39,-64,32,-70,44,-60Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/* ── Small star ── */
function Star({ style = {}, color = '#FCD34D', size = 20 }) {
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

const SIGNS = [
  { label: 'Reads slowly or avoids reading altogether' },
  { label: 'Spells the same word differently each time' },
  { label: 'Reverses or confuses letters — b/d, p/q' },
  { label: 'Strong verbally but struggles to write it down' },
  { label: 'Finds listening far easier than reading' },
  { label: 'Takes much longer on reading or writing tasks' },
];

const TIPS = [
  {
    title: 'Read together daily',
    body: 'Take turns reading aloud. Never correct every mistake — focus on meaning and enjoyment over perfection.',
  },
  {
    title: 'Give more time',
    body: 'Allow extra time for reading and writing tasks at home. Pressure and rushing make dyslexia significantly worse.',
  },
  {
    title: 'Use audio alternatives',
    body: 'Let your child listen to school books and homework read aloud. The Text to Speech tool on this site is completely free.',
  },
  {
    title: 'Try coloured backgrounds',
    body: 'A yellow, mint or lavender background reduces visual stress for many children. Try the Colour Overlay tool here.',
  },
  {
    title: 'Switch to a friendlier font',
    body: 'Fonts like OpenDyslexic and Lexend reduce letter confusion. Use the Font Changer on this site for any text.',
  },
  {
    title: 'Focus on their strengths',
    body: 'Children with dyslexia are often highly creative, empathetic, and brilliant at big-picture thinking. Celebrate that.',
  },
];

export default function Parents() {
  return (
    <div className="parents-page">

      {/* Decorative background */}
      <BlobShape color="#0D9488" opacity={0.12} style={{ top: -60, right: -60, width: 420, height: 420 }} />
      <BlobShape color="#10B981" opacity={0.09} style={{ bottom: 80, left: -80, width: 380, height: 380 }} />
      <BlobShape color="#06B6D4" opacity={0.08} style={{ top: '45%', right: '5%', width: 300, height: 300 }} />

      <Star style={{ top: '10%', left: '15%' }} color="#6EE7B7" size={18} />
      <Star style={{ top: '22%', right: '20%' }} color="#A7F3D0" size={14} />
      <Star style={{ top: '60%', left: '8%' }} color="#5EEAD4" size={20} />
      <Star style={{ bottom: '20%', right: '12%' }} color="#99F6E4" size={16} />

      <div className="parents-inner">

        {/* Hero */}
        <div className="parents-hero-row">
          <div className="parents-hero-text">
            <h1>
              Your child isn't<br />
              <span className="parents-accent">struggling — they're</span><br />
              wired differently.
            </h1>
            <p>
              Dyslexia is a neurological difference, not a lack of effort or intelligence.
              Understanding it is the first step to giving your child the right support.
            </p>
          </div>
          <div className="parents-hero-art">
            <FamilyIllustration />
          </div>
        </div>

        {/* What is dyslexia */}
        <div className="parents-section">
          <div className="parents-section-label">What is dyslexia?</div>
          <div className="parents-what">
            <div className="parents-what-bar" />
            <div className="parents-what-text">
              <p>
                Dyslexia is a learning difference that can make reading, spelling, and recognizing words more difficult, even though a person is intelligent and capable.

              </p>
              <p>
                Around <strong>1 in 5 people</strong> have some form of dyslexia, making it the most common
                learning difference in the world. Many dyslexic people go on to become exceptional thinkers,
                creators, and leaders precisely because their brains work differently.
              </p>
            </div>
          </div>
        </div>

        {/* Signs to look for */}
        <div className="parents-section">
          <div className="parents-section-label">Signs to look for</div>
          <div className="parents-signs-grid">
            {SIGNS.map((s, i) => (
              <div key={i} className="parents-sign-card">
                <div className="psc-dot" />
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How to help */}
        <div className="parents-section">
          <div className="parents-section-label">How to help at home</div>
          <div className="parents-tips-grid">
            {TIPS.map((t, i) => (
              <div key={i} className="parents-tip-card">
                <div className="ptc-num">{String(i + 1).padStart(2, '0')}</div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
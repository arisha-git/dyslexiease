import React, { useEffect, useRef, useState } from 'react';
import './MagicCursor.css';

const COLOURS = ['#A78BFA', '#60A5FA', '#F472B6', '#34D399', '#FBBF24', '#C4B5FD'];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function MagicCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [particles, setParticles] = useState([]);
  const idRef = useRef(0);

  useEffect(() => {
    /* Hide the default cursor site-wide */
    document.body.style.cursor = 'none';
    return () => { document.body.style.cursor = ''; };
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setPos({ x, y });

      /* Spawn a sparkle particle */
      const id = idRef.current++;
      const particle = {
        id,
        x: x + randomBetween(-6, 6),
        y: y + randomBetween(-6, 6),
        size: randomBetween(4, 10),
        color: COLOURS[Math.floor(Math.random() * COLOURS.length)],
        rotation: randomBetween(0, 360),
        shape: Math.random() > 0.5 ? 'star' : 'dot',
      };

      setParticles(prev => [...prev.slice(-18), particle]);

      /* Remove it after animation */
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== id));
      }, 700);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      {/* Wand cursor */}
      <div className="mc-wand" style={{ left: pos.x, top: pos.y }}>
        <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
          {/* Wand stick */}
          <line x1="6" y1="22" x2="20" y2="8"
            stroke="#4c0593" strokeWidth="3" strokeLinecap="round"/>
          {/* Wand handle wrap */}
          <line x1="6" y1="22" x2="10" y2="18"
            stroke="#7C3AED" strokeWidth="4.5" strokeLinecap="round"/>
          {/* Wand tip star */}
          <polygon
            points="20,2 21.5,7 26,7 22.5,10 24,15 20,12 16,15 17.5,10 14,7 18.5,7"
            fill="#FBBF24" stroke="#F59E0B" strokeWidth="0.5"
          />
          {/* Tip glow */}
          <circle cx="20" cy="8" r="3" fill="#FEF9C3" opacity="0.6"/>
        </svg>
      </div>

      {/* Sparkle trail */}
      {particles.map(p => (
        <div
          key={p.id}
          className="mc-particle"
          style={{
            left: p.x,
            top: p.y,
            '--pc': p.color,
            '--pr': `${p.rotation}deg`,
          }}
        >
          {p.shape === 'star'
            ? <StarShape size={p.size} color={p.color} />
            : <DotShape size={p.size} color={p.color} />
          }
        </div>
      ))}
    </>
  );
}

function StarShape({ size, color }) {
  return (
    <svg width={size * 2} height={size * 2} viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="12,2 14,9 21,9 15.5,14 17.5,21 12,17 6.5,21 8.5,14 3,9 10,9"
        fill={color}
      />
    </svg>
  );
}

function DotShape({ size, color }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="5" cy="5" r="5" fill={color}/>
    </svg>
  );
}
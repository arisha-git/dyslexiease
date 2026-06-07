import React, { useState, useRef, useEffect } from 'react';
import './TextToSpeech.css';

const SPEEDS = [
  { label: '0.5×', value: 0.5 },
  { label: '0.75×', value: 0.75 },
  { label: '1×', value: 1 },
  { label: '1.25×', value: 1.25 },
  { label: '1.5×', value: 1.5 },
];

/* ── Kid pointing at button ── */
function KidPointing({ playing }) {
  return (
    <svg viewBox="0 0 180 260" xmlns="http://www.w3.org/2000/svg"
      className="tts-kid-svg" aria-label="A kid pointing at the listen button">

      {/* Body */}
      <rect x="62" y="148" width="56" height="68" rx="18" fill="#4e98f2"/>

      {/* Shirt stripes */}
      <rect x="62" y="160" width="56" height="6" rx="0" fill="#57fb80" opacity="0.4"/>
      <rect x="62" y="172" width="56" height="6" rx="0" fill="#57fb80" opacity="0.4"/>

      {/* Legs */}
      <rect x="70" y="208" width="16" height="38" rx="8" fill="#FDE68A"/>
      <rect x="94" y="208" width="16" height="38" rx="8" fill="#FDE68A"/>

      {/* Shoes */}
      <ellipse cx="78" cy="246" rx="13" ry="8" fill="#6D28D9"/>
      <ellipse cx="102" cy="246" rx="13" ry="8" fill="#6D28D9"/>

      {/* Left arm (relaxed down) */}
      <rect x="36" y="158" width="30" height="12" rx="6" fill="#FDE68A" transform="rotate(20 36 158)"/>

      {/* Right arm — pointing forward */}
      <rect x="112" y="152" width="48" height="12" rx="6" fill="#FDE68A" transform="rotate(-10 112 152)"/>
      {/* Pointing hand / finger */}
      <ellipse cx="158" cy="149" rx="8" ry="7" fill="#FDE68A"/>
      <rect x="160" y="143" width="8" height="16" rx="4" fill="#FDE68A"/>

      {/* Neck */}
      <rect x="82" y="128" width="16" height="22" rx="7" fill="#FDE68A"/>

      {/* Head */}
      <ellipse cx="90" cy="112" rx="30" ry="30" fill="#FDE68A"/>

      {/* Hair */}
      <ellipse cx="90" cy="86" rx="30" ry="16" fill="#92400E"/>
      <ellipse cx="62" cy="100" rx="9" ry="16" fill="#92400E"/>
      <ellipse cx="118" cy="100" rx="9" ry="16" fill="#92400E"/>

      {/* Eyes — wide and excited */}
      <ellipse cx="80" cy="112" rx="5" ry="6" fill="white"/>
      <ellipse cx="100" cy="112" rx="5" ry="6" fill="white"/>
      <ellipse cx="80" cy="113" rx="3.2" ry="3.8" fill="#1E1B4B"/>
      <ellipse cx="100" cy="113" rx="3.2" ry="3.8" fill="#1E1B4B"/>
      <circle cx="81.5" cy="111.5" r="1.2" fill="white"/>
      <circle cx="101.5" cy="111.5" r="1.2" fill="white"/>

      {/* Eyebrows raised (excited) */}
      <path d="M74 104 Q80 100 86 104" stroke="#92400E" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M94 104 Q100 100 106 104" stroke="#92400E" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Big smile */}
      <path d="M78 124 Q90 136 102 124" stroke="#92400E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

      {/* Cheeks */}
      <ellipse cx="68" cy="120" rx="7" ry="5" fill="#FCA5A5" opacity="0.5"/>
      <ellipse cx="112" cy="120" rx="7" ry="5" fill="#FCA5A5" opacity="0.5"/>

      {/* Speech / sound waves from mouth when playing */}
      {playing && <>
        <path d="M112 96 Q120 90 112 84" stroke="#3B82F6" strokeWidth="2.5" fill="none" strokeLinecap="round" className="tts-wave-1"/>
        <path d="M116 100 Q128 90 116 80" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" className="tts-wave-2"/>
        <path d="M120 104 Q136 90 120 76" stroke="#3B82F6" strokeWidth="1.5" fill="none" strokeLinecap="round" className="tts-wave-3"/>
      </>}
    </svg>
  );
}

/* ── Floating letter decorations ── */
function FloatingLetters() {
  const letters = [
    { l: 'A', x: '3%',  y: '12%', color: '#A78BFA', size: 52, delay: 0,   rot: -15 },
    { l: 'b', x: '88%', y: '8%',  color: '#60A5FA', size: 44, delay: 0.7, rot: 10  },
    { l: 'S', x: '92%', y: '38%', color: '#34D399', size: 38, delay: 1.4, rot: -8  },
    { l: 'd', x: '2%',  y: '44%', color: '#F472B6', size: 46, delay: 0.4, rot: 12  },
    { l: 'p', x: '6%',  y: '72%', color: '#FBBF24', size: 36, delay: 1.0, rot: -10 },
    { l: 'z', x: '85%', y: '68%', color: '#A78BFA', size: 40, delay: 0.2, rot: 8   },
    { l: 'R', x: '90%', y: '88%', color: '#F87171', size: 34, delay: 1.6, rot: -6  },
    { l: 'e', x: '4%',  y: '88%', color: '#60A5FA', size: 42, delay: 0.9, rot: 15  },
  ];
  return (
    <>
      {letters.map((l, i) => (
        <div key={i} className="tts-float-letter" style={{
          left: l.x, top: l.y,
          color: l.color, fontSize: l.size,
          animationDelay: `${l.delay}s`,
          transform: `rotate(${l.rot}deg)`,
        }}>
          {l.l}
        </div>
      ))}
    </>
  );
}

/* ── Sound wave rings (decorative, background) ── */
function SoundRings() {
  return (
    <div className="tts-sound-rings" aria-hidden="true">
      <div className="tts-ring tts-ring-1"/>
      <div className="tts-ring tts-ring-2"/>
      <div className="tts-ring tts-ring-3"/>
    </div>
  );
}

export default function TextToSpeech() {
  const [text, setText]                     = useState('');
  const [speed, setSpeed]                   = useState(1);
  const [playing, setPlaying]               = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [status, setStatus]                 = useState('');
  const [voice, setVoice]                   = useState(null);
  const [voices, setVoices]                 = useState([]);
  const synthRef = useRef(window.speechSynthesis);

  useEffect(() => {
    const load = () => {
      const v = synthRef.current.getVoices().filter(v => v.lang.startsWith('en'));
      setVoices(v);
      if (v.length) setVoice(v[0]);
    };
    load();
    synthRef.current.addEventListener('voiceschanged', load);
    return () => synthRef.current.removeEventListener('voiceschanged', load);
  }, []);

  const stop = () => {
    synthRef.current.cancel();
    setPlaying(false);
    setCurrentWordIndex(-1);
    setStatus('');
  };

  const speak = (textToSpeak) => {
    stop();
    if (!textToSpeak.trim()) { setStatus('Add some text first!'); return; }
    const wordList = textToSpeak.trim().split(/\s+/);
    const utt = new SpeechSynthesisUtterance(textToSpeak.trim());
    utt.rate = speed;
    if (voice) utt.voice = voice;
    let wIndex = 0;
    utt.onboundary = (e) => { if (e.name === 'word') { setCurrentWordIndex(wIndex); wIndex++; } };
    utt.onend  = () => { setPlaying(false); setCurrentWordIndex(-1); setStatus('Finished!'); };
    utt.onerror = (e) => { if (e.error !== 'interrupted') setStatus('Something went wrong. Try again.'); };
    synthRef.current.speak(utt);
    setPlaying(true);
    setStatus('Reading...');
  };

  const handleWordClick = (word, index) => {
    stop();
    const utt = new SpeechSynthesisUtterance(word);
    utt.rate = speed;
    if (voice) utt.voice = voice;
    utt.onend = () => setCurrentWordIndex(-1);
    synthRef.current.speak(utt);
    setCurrentWordIndex(index);
  };

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type === 'text/plain') {
      const t = await file.text();
      setText(t);
      setStatus('File loaded! Press Listen.');
    } else if (file.type === 'application/pdf') {
      setStatus('PDF uploaded. Copy text from the PDF and paste it in the box.');
    } else if (file.type.startsWith('image/')) {
      setStatus('Image uploaded. Paste the text from the image into the box for best results.');
    } else {
      setStatus('Unsupported file type. Paste text directly.');
    }
  };

  const wordList = text.trim() ? text.trim().split(/\s+/) : [];

  return (
    <div className="tts-page">
      <FloatingLetters />

      {/* ── HERO ── */}
      <div className="tts-hero">
        <SoundRings />

        <div className="tts-hero-inner">
          <div className="tts-hero-text">
            <h1>Text to <span className="tts-hero-accent">Speech</span></h1>
            <p>Paste any text and hear it read aloud in a clear, natural voice. Click any word to hear it on its own.</p>
          </div>
          <div className="tts-hero-art">
            <KidPointing playing={playing} />
            <div className="tts-kid-label">Press Listen!</div>
          </div>
        </div>
      </div>

      {/* ── MAIN PANEL ── */}
      <div className="tts-main">

        {/* Controls strip */}
        <div className="tts-controls-strip">

          {/* Speed */}
          <div className="tts-ctrl-group">
            <span className="tts-ctrl-label">Speed</span>
            <div className="tts-speed-row">
              {SPEEDS.map(s => (
                <button key={s.value}
                  className={`tts-speed-btn ${speed === s.value ? 'active' : ''}`}
                  onClick={() => setSpeed(s.value)}>
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Voice */}
          {voices.length > 1 && (
            <div className="tts-ctrl-group">
              <span className="tts-ctrl-label">Voice</span>
              <select className="tts-voice-select"
                value={voice?.name || ''}
                onChange={e => setVoice(voices.find(v => v.name === e.target.value))}>
                {voices.map(v => <option key={v.name} value={v.name}>{v.name}</option>)}
              </select>
            </div>
          )}

          {/* Upload */}
          <div className="tts-ctrl-group">
            <span className="tts-ctrl-label">Upload file</span>
            <label className="tts-upload-btn">
              Choose file
              <input type="file" accept=".txt,.pdf,image/*" onChange={handleFile} style={{ display: 'none' }} />
            </label>
          </div>

        </div>

        {/* Textarea */}
        <textarea
          className="tts-textarea"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={e => { setText(e.target.value); stop(); }}
          rows={7}
        />

        {/* Listen + Clear buttons */}
        <div className="tts-btn-row">
          <button
            className={`tts-listen-btn ${playing ? 'is-playing' : ''}`}
            onClick={() => playing ? stop() : speak(text)}
          >
            <span className="tts-listen-icon">
              {playing
                ? <StopIcon />
                : <PlayIcon />}
            </span>
            {playing ? 'Stop' : 'Listen'}
          </button>

          <button className="tts-clear-btn"
            onClick={() => { setText(''); stop(); setStatus(''); }}>
            Clear
          </button>
        </div>

        {status && (
          <div className={`tts-status ${playing ? 'is-reading' : ''}`}>
            {playing && <span className="tts-status-dot"/>}
            {status}
          </div>
        )}

        {/* Word display */}
        {wordList.length > 0 && (
          <div className="tts-word-panel">
            <p className="tts-word-panel-hint">Click any word to hear it on its own</p>
            <div className="tts-words">
              {wordList.map((word, i) => (
                <span key={i}
                  className={`tts-word ${currentWordIndex === i ? 'active' : ''}`}
                  onClick={() => handleWordClick(word, i)}>
                  {word}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tips */}
        <div className="tts-tips-row">
          <TipCard text="Use 0.75× or 0.5× speed if the reading feels too fast" />
          <TipCard text="Click any highlighted word to hear just that word" />
          <TipCard text="For PDFs, copy all the text and paste it in the box above" />
        </div>

      </div>
    </div>
  );
}

function TipCard({ text }) {
  return (
    <div className="tts-tip-card">
      <div className="tts-tip-bar" />
      <p>{text}</p>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="6,3 20,12 6,21" fill="white"/>
    </svg>
  );
}

function StopIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="14" height="14" rx="2" fill="white"/>
    </svg>
  );
}
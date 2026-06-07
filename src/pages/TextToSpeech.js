import React, { useState, useRef, useEffect } from 'react';
import './FeaturePage.css';
import './TextToSpeech.css';

const SPEEDS = [
  { label: '0.5×', value: 0.5 },
  { label: '0.75×', value: 0.75 },
  { label: '1×', value: 1 },
  { label: '1.25×', value: 1.25 },
  { label: '1.5×', value: 1.5 },
];

export default function TextToSpeech() {
  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [words, setWords] = useState([]);
  const [status, setStatus] = useState('');
  const [voice, setVoice] = useState(null);
  const [voices, setVoices] = useState([]);
  const utteranceRef = useRef(null);
  const synthRef = useRef(window.speechSynthesis);

  /* Load voices */
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

  const speak = (textToSpeak, startFromWord = 0) => {
    stop();
    if (!textToSpeak.trim()) { setStatus('Please add some text first!'); return; }

    const wordList = textToSpeak.trim().split(/\s+/);
    setWords(wordList);
    const chunk = wordList.slice(startFromWord).join(' ');

    const utt = new SpeechSynthesisUtterance(chunk);
    utt.rate = speed;
    if (voice) utt.voice = voice;

    let wIndex = startFromWord;
    utt.onboundary = (e) => {
      if (e.name === 'word') {
        setCurrentWordIndex(wIndex);
        wIndex++;
      }
    };

    utt.onend = () => { setPlaying(false); setCurrentWordIndex(-1); setStatus('Finished! 🎉'); };
    utt.onerror = (e) => { if (e.error !== 'interrupted') setStatus('Something went wrong. Try again.'); };

    utteranceRef.current = utt;
    synthRef.current.speak(utt);
    setPlaying(true);
    setStatus('Reading...');
  };

  const handleWordClick = (word, index) => {
    const wordList = text.trim().split(/\s+/);
    setWords(wordList);
    // Speak just the clicked word
    stop();
    const utt = new SpeechSynthesisUtterance(word);
    utt.rate = speed;
    if (voice) utt.voice = voice;
    utt.onend = () => { setCurrentWordIndex(-1); };
    synthRef.current.speak(utt);
    setCurrentWordIndex(index);
  };

  /* File upload */
  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setStatus('Reading file...');

    if (file.type === 'text/plain') {
      const t = await file.text();
      setText(t);
      setStatus('File loaded! Press Listen.');
      return;
    }

    if (file.type.startsWith('image/')) {
      setStatus('🖼️ Image uploaded. We use browser OCR — try pasting text directly for best results.');
      return;
    }

    if (file.type === 'application/pdf') {
      setStatus('📄 PDF uploaded. Copy text from the PDF and paste it in the box for best results.');
      return;
    }

    setStatus('Unsupported file type. Paste text directly.');
  };

  const wordList = text.trim() ? text.trim().split(/\s+/) : [];

  return (
    <div className="feature-page">
      {/* Hero */}
      <div className="fp-hero" style={{ '--hero-color': '#DBEAFE', '--hero-accent': '#3B82F6' }}>
        <div className="fp-hero-blob" aria-hidden="true" />
        <div className="fp-hero-inner">
          <div className="fp-icon">🔊</div>
          <h1>Text to Speech</h1>
          <p>Paste any text below and hear it read aloud in a clear, natural voice. Click any word to hear it on its own. Upload a file or image too!</p>
        </div>
      </div>

      <div className="fp-body">

        {/* Controls row */}
        <div className="tts-controls-row">
          {/* Voice selector */}
          {voices.length > 1 && (
            <div className="tts-control-group">
              <label>Voice</label>
              <select value={voice?.name || ''} onChange={e => setVoice(voices.find(v => v.name === e.target.value))}>
                {voices.map(v => <option key={v.name} value={v.name}>{v.name}</option>)}
              </select>
            </div>
          )}

          {/* Speed */}
          <div className="tts-control-group">
            <label>Reading Speed</label>
            <div className="speed-pills">
              {SPEEDS.map(s => (
                <button
                  key={s.value}
                  className={`speed-pill ${speed === s.value ? 'active' : ''}`}
                  onClick={() => setSpeed(s.value)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* File upload */}
          <div className="tts-control-group">
            <label>Upload File</label>
            <label className="file-upload-btn">
              📎 Choose file
              <input type="file" accept=".txt,.pdf,image/*" onChange={handleFile} style={{ display: 'none' }} />
            </label>
          </div>
        </div>

        {/* Text input */}
        <div className="tts-input-wrapper">
          <textarea
            className="tts-textarea"
            placeholder="Type or paste your text here... or upload a file above."
            value={text}
            onChange={e => { setText(e.target.value); stop(); }}
            rows={8}
          />
        </div>

        {/* Main action buttons */}
        <div className="tts-actions">
          <button
            className={`tts-btn-listen ${playing ? 'playing' : ''}`}
            onClick={() => playing ? stop() : speak(text)}
          >
            {playing ? '⏹ Stop' : '▶ Listen'}
          </button>
          <button className="tts-btn-clear" onClick={() => { setText(''); stop(); setStatus(''); }}>
            🗑 Clear
          </button>
        </div>

        {status && <div className="tts-status">{status}</div>}

        {/* Highlighted word display */}
        {wordList.length > 0 && (
          <div className="tts-word-display">
            <div className="tts-word-hint">💡 <strong>Click any word</strong> to hear it read aloud</div>
            <div className="tts-words">
              {wordList.map((word, i) => (
                <span
                  key={i}
                  className={`tts-word ${currentWordIndex === i ? 'active' : ''}`}
                  onClick={() => handleWordClick(word, i)}
                  title={`Click to hear "${word}"`}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tips */}
        <div className="tts-tips">
          <h3>💡 Tips</h3>
          <ul>
            <li>Use <strong>0.75×</strong> or <strong>0.5×</strong> speed if the text is fast.</li>
            <li>Click any <strong>highlighted word</strong> to hear just that word.</li>
            <li>Try different <strong>voices</strong> — some are clearer than others.</li>
            <li>For PDFs: open the PDF, select all text (Ctrl+A), copy it, and paste it here.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

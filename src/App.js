import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MagicCursor from './components/MagicCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import TextToSpeech from './pages/TextToSpeech';
import FontChanger from './pages/FontChanger';
import ColourOverlay from './pages/ColourOverlay';
import Kids from './pages/Kids';
import Parents from './pages/Parents';
import Educators from './pages/Educators';

export default function App() {
  return (
    <BrowserRouter>
      <MagicCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/text-to-speech" element={<TextToSpeech />} />
        <Route path="/font-changer" element={<FontChanger />} />
        <Route path="/colour-overlay" element={<ColourOverlay />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/educators" element={<Educators />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

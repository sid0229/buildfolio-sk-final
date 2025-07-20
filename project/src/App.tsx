import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MagicalCursor from './components/Cursor';
import EnvelopeLanding from './components/EnvelopeLanding';
import SpellbookPortfolio from './components/SpellbookPortfolio';
import FloatingCandles from './components/FloatingCandles';
import MagicalClock from './components/MagicalClock';
import EasterEggs from './components/EasterEggs';
import ParticleTrail from './components/ParticleTrail';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [showMaraudersMap, setShowMaraudersMap] = useState(false);
  const [invisibilityMode, setInvisibilityMode] = useState(false);

  const handleEnterPortfolio = () => {
    setShowLanding(false);
  };

  const handleMaraudersMap = () => {
    setShowMaraudersMap(!showMaraudersMap);
  };

  const handleInvisibilityCloak = () => {
    setInvisibilityMode(true);
    setTimeout(() => setInvisibilityMode(false), 3000);
  };

  const handleTimeTravel = () => {
    const body = document.body;
    body.style.transform = 'rotateY(180deg)';
    body.style.transition = 'transform 0.5s';
    
    setTimeout(() => {
      body.style.transform = 'rotateY(0deg)';
    }, 1500);

    setTimeout(() => {
      body.style.transition = '';
      body.style.transform = '';
    }, 2000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-serif">
      <MagicalCursor />
      <ParticleTrail />
      
      {showLanding ? (
        <EnvelopeLanding onEnter={handleEnterPortfolio} />
      ) : (
        <>
          <FloatingCandles />
          <SpellbookPortfolio 
            showMaraudersMap={showMaraudersMap}
            invisibilityMode={invisibilityMode}
          />
          <MagicalClock />
          <EasterEggs
            onMaraudersMap={handleMaraudersMap}
            onInvisibilityCloak={handleInvisibilityCloak}
            onTimeTravel={handleTimeTravel}
          />
        </>
      )}
    </div>
  );
}

export default App;
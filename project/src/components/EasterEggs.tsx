import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EasterEggsProps {
  onMaraudersMap: () => void;
  onInvisibilityCloak: () => void;
  onTimeTravel: () => void;
}

const EasterEggs: React.FC<EasterEggsProps> = ({ 
  onMaraudersMap, 
  onInvisibilityCloak, 
  onTimeTravel 
}) => {
  const [konamiCode, setKonamiCode] = useState<string[]>([]);
  const [showSortingHat, setShowSortingHat] = useState(false);
  const [showPotionBubbles, setShowPotionBubbles] = useState(true);
  const [showQuote, setShowQuote] = useState(false);

  const correctKonami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...konamiCode, e.code].slice(-10);
      setKonamiCode(newSequence);

      if (newSequence.join(',') === correctKonami.join(',')) {
        onMaraudersMap();
        setKonamiCode([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiCode, onMaraudersMap]);

  const handleSortingHatClick = () => {
    setShowSortingHat(true);
    const audio = new Audio();
    // In a real implementation, you'd have an actual audio file
    setTimeout(() => {
      alert("🎩 Sorting Hat says: 'Hmm… Clever and brave — a rare combination.'");
      setShowSortingHat(false);
    }, 500);
  };

  const handleInvisibilityClick = () => {
    setShowQuote(true);
    onInvisibilityCloak();
    setTimeout(() => {
      setShowQuote(false);
    }, 3000);
  };

  const potionFacts = [
    "Siddhant once debugged code for 12 hours straight!",
    "Karina speaks 4 languages fluently",
    "They both love solving complex puzzles",
    "Their favorite coding snack? Chocolate frogs!",
    "They dream in both code and design"
  ];

  return (
    <>
      {/* Invisible Corner for Invisibility Cloak */}
      <div
        className="fixed top-0 left-0 w-16 h-16 cursor-pointer opacity-0 hoverable z-50"
        onClick={handleInvisibilityClick}
      />

      {/* Sorting Hat Icon */}
      <motion.div
        className="fixed top-6 right-6 w-12 h-12 cursor-pointer hoverable z-40"
        whileHover={{ scale: 1.1, rotate: 5 }}
        onClick={handleSortingHatClick}
      >
        <div className="w-full h-full bg-amber-800 rounded-full flex items-center justify-center text-2xl shadow-lg border-2 border-amber-600">
          🎩
        </div>
      </motion.div>

      {/* Time-Turner Icon */}
      <motion.div
        className="fixed top-24 right-6 w-10 h-10 cursor-pointer hoverable z-40"
        whileHover={{ scale: 1.1 }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        onClick={onTimeTravel}
      >
        <div className="w-full h-full bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-lg shadow-lg border border-gold-700">
          ⏰
        </div>
      </motion.div>

      {/* Potion Bubbles */}
      <AnimatePresence>
        {showPotionBubbles && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="fixed cursor-pointer hoverable z-20"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + Math.sin(i) * 20}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 1.2, 1],
                  opacity: [0, 0.7, 0.7, 0.5],
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
                onClick={() => {
                  const fact = potionFacts[Math.floor(Math.random() * potionFacts.length)];
                  alert(`🧪 Potion Fact: ${fact}`);
                }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-60 border-2 border-purple-300 flex items-center justify-center">
                  🫧
                </div>
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Invisibility Cloak Quote */}
      <AnimatePresence>
        {showQuote && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
          >
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-8 rounded-2xl shadow-2xl border-4 border-amber-300 max-w-md">
              <p className="font-serif text-2xl text-amber-900 text-center italic">
                "I solemnly swear that I am up to no good..."
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EasterEggs;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnvelopeLandingProps {
  onEnter: () => void;
}

const EnvelopeLanding: React.FC<EnvelopeLandingProps> = ({ onEnter }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showEnterButton, setShowEnterButton] = useState(false);

  const handleEnvelopeClick = () => {
    setIsOpened(true);
    setTimeout(() => setShowLetter(true), 800);
    setTimeout(() => setShowTypewriter(true), 1200);
    setTimeout(() => setShowEnterButton(true), 4000);
  };

  const letterText = `Dear Seeker of Enchanted Innovation,

You are invited to explore the Chronicles of
Siddhant & Karina —
Where Code Meets Charm,
And Design Casts Spells.`;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center z-40">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {!isOpened && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative cursor-pointer hoverable"
            onClick={handleEnvelopeClick}
          >
            {/* Envelope */}
            <div className="relative w-80 h-56 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg shadow-2xl border-2 border-amber-300">
              {/* Envelope flap */}
              <div className="absolute -top-2 left-0 right-0 h-32 bg-gradient-to-br from-amber-200 to-amber-300 transform rotate-0 origin-bottom rounded-t-lg border-2 border-amber-400">
                {/* Wax seal */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full border-4 border-red-900 shadow-lg">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
                    <span className="text-amber-100 text-xs font-bold">H</span>
                  </div>
                </div>
              </div>
              
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-amber-200 opacity-50 rounded-lg animate-pulse"></div>
            </div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-amber-300 text-lg font-serif"
            >
              Click to open
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpened && (
          <>
            {/* Opened envelope */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.2 }}
              className="absolute w-80 h-56"
            >
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{ rotateX: -60 }}
                transition={{ duration: 0.8 }}
                className="absolute -top-2 left-0 right-0 h-32 bg-gradient-to-br from-amber-200 to-amber-300 origin-bottom rounded-t-lg border-2 border-amber-400"
                style={{ transformStyle: 'preserve-3d' }}
              />
            </motion.div>

            {/* Letter */}
            {showLetter && (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute w-96 h-80 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-2xl border border-amber-300 p-8"
              >
                {showTypewriter && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-serif text-amber-900 leading-relaxed"
                  >
                    <TypewriterText text={letterText} />
                  </motion.div>
                )}

                {showEnterButton && (
                  <motion.button
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(245, 158, 11, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onEnter}
                    className="absolute bottom-6 right-6 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-amber-100 rounded-lg shadow-lg font-serif hoverable transition-all duration-300"
                  >
                    Enter
                  </motion.button>
                )}
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  React.useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <div className="whitespace-pre-line">
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default EnvelopeLanding;
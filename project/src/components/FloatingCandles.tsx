import React from 'react';
import { motion } from 'framer-motion';

const FloatingCandles: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + Math.sin(i) * 30}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {/* Candle */}
          <div className="relative">
            <div className="w-3 h-12 bg-gradient-to-b from-amber-100 to-amber-200 rounded-sm shadow-lg"></div>
            {/* Flame */}
            <motion.div
              className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-gradient-to-t from-orange-400 via-yellow-400 to-yellow-200 rounded-full"
              animate={{
                scaleY: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
              }}
            />
            {/* Glow */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-300 rounded-full opacity-20 blur-sm"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCandles;
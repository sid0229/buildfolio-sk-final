import React from 'react';
import { motion } from 'framer-motion';

const MagicalClock: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-30">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="relative w-24 h-24 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full shadow-2xl border-4 border-amber-600"
      >
        {/* Clock face */}
        <div className="absolute inset-2 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full border-2 border-amber-500">
          {/* Hour markers */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-2 bg-amber-800"
              style={{
                top: '2px',
                left: '50%',
                transformOrigin: '50% 40px',
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
              }}
            />
          ))}
          
          {/* Siddhant's hand (S) */}
          <motion.div
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 origin-bottom w-0.5 h-6 bg-red-600 transform -translate-x-1/2 -translate-y-full"
          >
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">S</span>
            </div>
          </motion.div>
          
          {/* Karina's hand (K) */}
          <motion.div
            animate={{ rotate: [0, -180, -360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 origin-bottom w-0.5 h-5 bg-blue-600 transform -translate-x-1/2 -translate-y-full"
          >
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">K</span>
            </div>
          </motion.div>
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-amber-800 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default MagicalClock;
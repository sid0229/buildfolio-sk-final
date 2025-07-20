import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

const ParticleTrail: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      };

      setParticles(prev => [...prev, newParticle].slice(-15)); // Keep last 15 particles
    };

    // Clean up old particles
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setParticles(prev => prev.filter(p => now - p.timestamp < 1000));
    }, 100);

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            style={{
              left: particle.x - 2,
              top: particle.y - 2,
            }}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ 
              scale: [1, 0.5, 0],
              opacity: [0.8, 0.4, 0],
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ParticleTrail;
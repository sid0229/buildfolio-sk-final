import React, { useEffect, useState } from 'react';

const MagicalCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Update position immediately for instant response
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('hoverable')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          // Remove transition for instant movement
          transform: `scale(${isHovering ? 1.3 : 1})`,
          transition: 'transform 0.1s ease-out, opacity 0.1s ease-out', // Only animate scale and opacity
        }}
      >
        <div className="relative">
          {/* Main cursor body */}
          <div className="w-6 h-6 bg-black rounded-full border-2 border-white shadow-lg"></div>
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Hover effect - optimized */}
          {isHovering && (
            <div 
              className="absolute -inset-2 bg-amber-400 rounded-full opacity-30"
              style={{
                animation: 'pulse 1s ease-in-out infinite'
              }}
            />
          )}
        </div>
      </div>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        body {
          cursor: none !important;
        }
        a, button, .hoverable {
          cursor: none !important;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
      `}</style>
    </>
  );
};

export default MagicalCursor;
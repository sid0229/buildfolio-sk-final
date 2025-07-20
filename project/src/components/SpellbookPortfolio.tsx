import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, ExternalLink, FileText } from 'lucide-react';

interface SpellbookPortfolioProps {
  showMaraudersMap: boolean;
  invisibilityMode: boolean;
}

const SpellbookPortfolio: React.FC<SpellbookPortfolioProps> = ({ 
  showMaraudersMap, 
  invisibilityMode 
}) => {
  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'contact'>('home');
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const siddhantsProjects = {
    title: "DeVahan - NFT Vehicle Platform",
    description: "Web3 app for secure vehicle NFT minting and transfer",
    demo: "https://devahan.vercel.app",
    tech: ["Blockchain", "NFT", "Web3", "React"]
  };

  const karinasProjects = {
    title: "CitySafe - Women's Safety",
    description: "Smart safety zone detector empowering women's safety",
    demo: "https://www.figma.com/proto/RxhNi03uIPPL8psIgzfVPV/--UXcore?node-id=0-1&t=FhHLahEJHHkk9K6j-1",
    tech: ["UI/UX", "Figma", "Safety Tech", "AI"]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: invisibilityMode ? 0.1 : 1,
        filter: showMaraudersMap ? 'grayscale(100%) sepia(20%)' : 'none'
      }}
      className={`min-h-screen relative ${showMaraudersMap ? 'bg-amber-50' : 'bg-gradient-to-br from-amber-50 via-amber-100 to-yellow-50'}`}
    >
      {/* Magical Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-amber-900/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-2xl border border-amber-600">
        <div className="flex space-x-6">
          {['home', 'about', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section as any)}
              className={`px-4 py-2 rounded-full transition-all duration-300 hoverable font-serif capitalize ${
                activeSection === section
                  ? 'bg-amber-600 text-amber-100 shadow-lg'
                  : 'text-amber-300 hover:text-amber-100 hover:bg-amber-700/50'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>

      {/* Marauder's Map Footprints */}
      {showMaraudersMap && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-6 opacity-60"
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              👣
            </motion.div>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {activeSection === 'home' && (
          <motion.div
            key="home"
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-24 px-8"
          >
            {/* Spellbook Layout */}
            <div className="max-w-7xl mx-auto">
              <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center text-6xl font-serif text-amber-900 mb-16 tracking-wide"
              >
                Chronicles of Magic & Code
              </motion.h1>

             <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="text-center text-lg font-serif text-amber-700 mb-12 italic"
             >
               ✨ PS: Click on bubbles for fun facts ✨
             </motion.p>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Siddhant's Page */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="relative bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-8 shadow-2xl border-4 border-amber-300 transform hover:scale-105 transition-all duration-500"
                >
                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-red-600 rounded-full border-2 border-amber-300"></div>
                  
                  {/* Profile Image */}
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-amber-600 shadow-lg">
                      <img 
                        src="https://images.pexels.com/photos/8391281/pexels-photo-8391281.jpeg?auto=compress&cs=tinysrgb&w=300" 
                        alt="Siddhant as a Wizard"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h2 className="text-3xl font-serif text-amber-900 text-center mb-2">Siddhant Gahlot</h2>
                  <p className="text-center text-amber-700 font-serif italic mb-6">The Boy Who Coded</p>
                  
                  <div className="space-y-4 text-amber-800">
                    <div>
                      <h3 className="font-serif text-lg font-bold mb-2">Education</h3>
                      <p className="text-sm">• IIT Madras (BS Data Science) + GGSIPU (B.Tech AIML)</p>
                      <p className="text-sm">• DPS Greater Noida - 12th: 97% (PCM + Economics)</p>
                    </div>
                    
                    <div>
                      <h3 className="font-serif text-lg font-bold mb-2">Magical Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {['Data Science', 'AI/ML', 'Blockchain', 'DSA'].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-amber-600 text-amber-100 rounded-full text-xs font-serif">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg font-bold mb-2">Featured Project</h3>
                      <div className="p-4 bg-amber-50 rounded-lg border border-amber-300">
                        <h4 className="font-bold text-amber-900">{siddhantsProjects.title}</h4>
                        <p className="text-sm text-amber-700 mb-2">{siddhantsProjects.description}</p>
                        <a 
                          href={siddhantsProjects.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-800 text-sm hoverable"
                        >
                          <ExternalLink size={12} />
                          Live Demo
                        </a>
                      </div>
                    </div>

                    <div className="flex justify-center space-x-4 pt-4">
                      <a href="https://github.com/sid0229" target="_blank" rel="noopener noreferrer" className="hoverable">
                        <Github className="w-6 h-6 text-amber-700 hover:text-amber-900 transition-colors" />
                      </a>
                      <a href="https://www.linkedin.com/in/siddhant-gahlot-b1215a284/" target="_blank" rel="noopener noreferrer" className="hoverable">
                        <Linkedin className="w-6 h-6 text-amber-700 hover:text-amber-900 transition-colors" />
                      </a>
                      <a href="https://drive.google.com/file/d/1UIHySTJp4SJvMkpXAlGPjMF_DqgBAdwu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hoverable">
                        <FileText className="w-6 h-6 text-amber-700 hover:text-amber-900 transition-colors" />
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Karina's Page */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-2xl border-4 border-blue-300 transform hover:scale-105 transition-all duration-500"
                >
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full border-2 border-blue-300"></div>
                  
                  {/* Profile Image */}
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
                      <img 
                        src="https://images.pexels.com/photos/8389770/pexels-photo-8389770.jpeg?auto=compress&cs=tinysrgb&w=300" 
                        alt="Karina as a Sorceress"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h2 className="text-3xl font-serif text-blue-900 text-center mb-2">Karina Bataeva</h2>
                  <p className="text-center text-blue-700 font-serif italic mb-6">The Brightest Sorceress of Design</p>
                  
                  <div className="space-y-4 text-blue-800">
                    <div>
                      <h3 className="font-serif text-lg font-bold mb-2">Education</h3>
                      <p className="text-sm">• B.Tech AIML - IGDTUW, Class of 2028</p>
                      <p className="text-sm">• DPS Greater Noida - 12th: 98% (PCM + English)</p>
                    </div>
                    
                    <div>
                      <h3 className="font-serif text-lg font-bold mb-2">Design Spells</h3>
                      <div className="flex flex-wrap gap-2">
                        {['UI/UX', 'Figma', 'Frontend', 'AI/ML'].map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-blue-600 text-blue-100 rounded-full text-xs font-serif">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg font-bold mb-2">Featured Project</h3>
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-300">
                        <h4 className="font-bold text-blue-900">{karinasProjects.title}</h4>
                        <p className="text-sm text-blue-700 mb-2">{karinasProjects.description}</p>
                        <a 
                          href={karinasProjects.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm hoverable"
                        >
                          <ExternalLink size={12} />
                          Figma Prototype
                        </a>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg font-bold mb-2">Languages</h3>
                      <p className="text-sm">English • Hindi • German • Russian</p>
                    </div>

                    <div className="flex justify-center space-x-4 pt-4">
                      <a href="https://www.linkedin.com/in/karinabataeva/" target="_blank" rel="noopener noreferrer" className="hoverable">
                        <Linkedin className="w-6 h-6 text-blue-700 hover:text-blue-900 transition-colors" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {activeSection === 'about' && (
          <motion.div
            key="about"
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-24 px-8"
          >
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl p-12 shadow-2xl border-4 border-amber-300"
              >
                <h2 className="text-4xl font-serif text-amber-900 text-center mb-8">Our Magical Journey</h2>
                <div className="font-serif text-amber-800 leading-relaxed text-lg space-y-6">
                  <p className="text-center italic">
                    "From potion pages to pixel potions,<br />
                    We dreamed and designed our destinies.<br />
                    Welcome to the journey of S&K."
                  </p>
                  
                  <p>
                    In the enchanted halls of learning, two paths converged. Siddhant, wielding the ancient arts of 
                    data and algorithms, discovered that code could be as powerful as any spell. Meanwhile, Karina 
                    mastered the subtle magic of design, where pixels dance and interfaces come alive with her touch.
                  </p>
                  
                  <p>
                    Together, they form a formidable duo - where logic meets creativity, where function meets beauty, 
                    and where technology serves humanity's greatest needs.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-amber-900 mb-4">Siddhant's Quest</h3>
                      <p className="text-sm">
                        National-level badminton & cricket champion, cinematographer, and operations wizard. 
                        When not coding, you'll find him capturing magical moments through his lens.
                      </p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-blue-900 mb-4">Karina's Mission</h3>
                      <p className="text-sm">
                        Multilingual sorceress and women's safety advocate. Her designs don't just look beautiful - 
                        they solve real-world problems and make technology accessible to all.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {activeSection === 'contact' && (
          <motion.div
            key="contact"
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-24 px-8"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-serif text-amber-900 text-center mb-16">Magical Contact Cards</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Siddhant's Card */}
                <div className="relative h-80 perspective-1000">
                  <motion.div
                    className="relative w-full h-full cursor-pointer hoverable"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setFlippedCard(flippedCard === 'siddhant' ? null : 'siddhant')}
                  >
                    <motion.div
                      className="absolute inset-0 w-full h-full rounded-xl preserve-3d"
                      animate={{ rotateY: flippedCard === 'siddhant' ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Front */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-red-600 to-red-800 rounded-xl shadow-2xl backface-hidden border-4 border-amber-300">
                        <div className="p-8 text-center text-white h-full flex flex-col justify-center">
                          <div className="text-6xl mb-4">♔</div>
                          <h3 className="text-2xl font-serif font-bold">King of Code</h3>
                          <p className="text-lg font-serif">Siddhant Gahlot</p>
                        </div>
                      </div>
                      
                      {/* Back */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl shadow-2xl backface-hidden border-4 border-amber-300 transform rotateY-180">
                        <div className="p-8 text-center h-full flex flex-col justify-center space-y-6">
                          <h3 className="text-xl font-serif font-bold text-amber-900">Connect with Siddhant</h3>
                          <div className="space-y-4">
                            <a href="https://github.com/sid0229" target="_blank" rel="noopener noreferrer" 
                               className="flex items-center justify-center gap-2 p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors hoverable">
                              <Github size={20} />
                              GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/siddhant-gahlot-b1215a284/" target="_blank" rel="noopener noreferrer"
                               className="flex items-center justify-center gap-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors hoverable">
                              <Linkedin size={20} />
                              LinkedIn
                            </a>
                            <a href="https://drive.google.com/file/d/1UIHySTJp4SJvMkpXAlGPjMF_DqgBAdwu/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                               className="flex items-center justify-center gap-2 p-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors hoverable">
                              <FileText size={20} />
                              Resume
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Karina's Card */}
                <div className="relative h-80 perspective-1000">
                  <motion.div
                    className="relative w-full h-full cursor-pointer hoverable"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setFlippedCard(flippedCard === 'karina' ? null : 'karina')}
                  >
                    <motion.div
                      className="absolute inset-0 w-full h-full rounded-xl preserve-3d"
                      animate={{ rotateY: flippedCard === 'karina' ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Front */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-2xl backface-hidden border-4 border-blue-300">
                        <div className="p-8 text-center text-white h-full flex flex-col justify-center">
                          <div className="text-6xl mb-4">♕</div>
                          <h3 className="text-2xl font-serif font-bold">Queen of Design</h3>
                          <p className="text-lg font-serif">Karina Bataeva</p>
                        </div>
                      </div>
                      
                      {/* Back */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-2xl backface-hidden border-4 border-blue-300 transform rotateY-180">
                        <div className="p-8 text-center h-full flex flex-col justify-center space-y-6">
                          <h3 className="text-xl font-serif font-bold text-blue-900">Connect with Karina</h3>
                          <div className="space-y-4">
                            <a href="https://www.linkedin.com/in/karinabataeva/" target="_blank" rel="noopener noreferrer"
                               className="flex items-center justify-center gap-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors hoverable">
                              <Linkedin size={20} />
                              LinkedIn
                            </a>
                            <a href="https://www.figma.com/proto/RxhNi03uIPPL8psIgzfVPV/--UXcore?node-id=0-1&t=FhHLahEJHHkk9K6j-1" target="_blank" rel="noopener noreferrer"
                               className="flex items-center justify-center gap-2 p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors hoverable">
                              <ExternalLink size={20} />
                              CitySafe Project
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SpellbookPortfolio;
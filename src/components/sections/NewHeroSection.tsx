import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';
import { GIF_POOL } from '../../data';

export function NewHeroSection() {
  const { theme } = useAppContext();
  const [currentBg, setCurrentBg] = useState(GIF_POOL[0]);

  useEffect(() => {
    // Preload next image to ensure smooth transition
    const preloadNext = (currentIndex: number) => {
      const nextIndex = (currentIndex + 1) % GIF_POOL.length;
      const img = new Image();
      img.src = GIF_POOL[nextIndex];
    };

    // Rotate every 8 seconds
    const interval = setInterval(() => {
      setCurrentBg(prev => {
        const currentIndex = GIF_POOL.indexOf(prev);
        const nextIndex = (currentIndex + 1) % GIF_POOL.length;
        preloadNext(nextIndex); // Preload the one after the next one
        return GIF_POOL[nextIndex];
      });
    }, 8000);

    // Initial preload
    preloadNext(0);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className={`relative min-h-[100svh] md:min-h-[90vh] flex flex-col justify-center pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden px-4 md:px-8 ${theme === 'dark' ? 'bg-zinc-950' : 'bg-neutral-50'}`}>
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${theme === 'dark' ? 'from-zinc-950/95 via-zinc-950/80 to-zinc-950/95' : 'from-white/95 via-white/80 to-white/95'} z-10 transition-colors duration-1000`} />
        
        <AnimatePresence mode="popLayout">
          <motion.img 
            key={currentBg}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            src={currentBg} 
            alt="Parkour Background" 
            fetchPriority={currentBg === GIF_POOL[0] ? "high" : "auto"}
            loading={currentBg === GIF_POOL[0] ? "eager" : "lazy"}
            className={`w-full h-full object-cover absolute inset-0 ${theme === 'dark' ? 'grayscale opacity-30 mix-blend-overlay' : 'grayscale-0 opacity-20'}`}
          />
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-start text-left"
        >
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter lowercase leading-[0.85] mb-6 md:mb-8`}>
            move better<br />in the real world.
          </h1>
          
          <p className={`text-base md:text-xl ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} mb-8 md:mb-10 max-w-2xl leading-relaxed font-medium lowercase`}>
            Stop guessing your progressions. Get direct access to the exact systems, weekly film analysis, and community feedback used to build World Champions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="https://www.skool.com/apexmovement"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center gap-3 px-8 py-5 font-black uppercase tracking-[0.2em] text-[12px] md:text-[13px] transition-all duration-300 active:scale-95 ${theme === 'dark' ? 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]' : 'bg-zinc-900 text-white hover:bg-black shadow-xl'}`}
            >
              Join Free Community <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#library"
              className={`inline-flex items-center justify-center gap-3 px-8 py-5 font-black uppercase tracking-[0.2em] text-[12px] md:text-[13px] transition-all duration-300 active:scale-95 border-2 ${theme === 'dark' ? 'border-zinc-700 text-zinc-300 hover:border-white hover:text-white' : 'border-zinc-300 text-zinc-600 hover:border-zinc-900 hover:text-zinc-900'}`}
            >
              Explore Library <Play className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

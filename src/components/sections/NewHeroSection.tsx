import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';

export function NewHeroSection() {
  const { theme } = useAppContext();
  
  return (
    <section className="relative min-h-[100svh] md:min-h-[85vh] flex flex-col justify-center pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden px-4 md:px-6">
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-b ${theme === 'dark' ? 'from-zinc-950 via-zinc-950/90 to-zinc-950' : 'from-white via-white/90 to-white'} z-10`} />
        <picture>
          <source media="(max-width: 640px)" srcSet="https://images.unsplash.com/photo-1574100511599-2777174db926?q=80&w=800&auto=format&fit=crop" />
          <source media="(max-width: 1024px)" srcSet="https://images.unsplash.com/photo-1574100511599-2777174db926?q=80&w=1200&auto=format&fit=crop" />
          <img 
            src="https://images.unsplash.com/photo-1574100511599-2777174db926?q=80&w=2000&auto=format&fit=crop" 
            alt="Parkour Athlete Outdoor" 
            className="w-full h-full object-cover opacity-30 grayscale"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter lowercase leading-[0.85] mb-6 md:mb-8`}>
            move better<br />in the real world.
          </h1>
          <p className={`text-base md:text-xl ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} mb-8 md:mb-10 max-w-2xl leading-relaxed font-medium lowercase`}>
            Stop guessing your progressions. Get direct access to the exact systems, weekly film analysis, and community feedback used to build World Champions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://www.skool.com/apexmovement"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-amber-400 text-zinc-950 px-8 py-4 rounded-none font-black uppercase tracking-[0.2em] text-[11px] md:text-[12px] hover:bg-amber-500 transition-colors shadow-[0_0_40px_-10px_rgba(251,191,36,0.5)] active:scale-95 border-2 border-amber-400"
            >
              Join Free Community <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="https://calendly.com/apexmovement/strategy"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-4 rounded-none font-black uppercase tracking-[0.2em] text-[11px] md:text-[12px] transition-colors active:scale-95 border-2 ${theme === 'dark' ? 'bg-transparent text-white border-white/40 hover:border-white hover:bg-white/10' : 'bg-transparent text-black border-black/30 hover:border-black hover:bg-black/5'}`}
            >
              Gym Owners: Book Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

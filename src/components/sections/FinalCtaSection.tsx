import React from 'react';
import { useAppContext } from '../../contexts/AppContext';

export function FinalCtaSection() {
  const { theme } = useAppContext();
  
  return (
    <section className={`py-16 md:py-32 px-4 md:px-6 ${theme === 'dark' ? 'bg-zinc-950' : 'bg-white'} text-center relative overflow-hidden`}>
      <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-zinc-950 via-amber-400/5 to-zinc-950' : 'from-white via-amber-400/10 to-white'} pointer-events-none`} />
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className={`text-5xl md:text-8xl font-black lowercase tracking-tighter mb-4 md:mb-6 leading-[0.85]`}>
          it's time to train<br className="hidden md:block"/>
          <span className="text-amber-500"> at a higher level.</span>
        </h2>
        <p className={`text-base md:text-xl ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} mb-8 md:mb-10 font-medium lowercase`}>
          Gain mastery. Develop better movement. Have more fun.
        </p>
        <div className="flex flex-col items-center gap-5">
           <a 
             href="https://www.skool.com/apexmovement"
             target="_blank"
             rel="noreferrer"
             className="bg-amber-400 text-zinc-950 px-8 py-4 md:px-12 md:py-6 font-black uppercase tracking-[0.2em] text-[11px] md:text-[13px] hover:bg-amber-500 transition-all shadow-[0_0_40px_-10px_rgba(251,191,36,0.6)] hover:scale-105 duration-200 w-full sm:w-auto block border-2 border-amber-400"
           >
             JOIN FREE COMMUNITY
           </a>
           <a href="https://calendly.com/apexmovement/strategy" target="_blank" rel="noreferrer" className={`text-xs ${theme === 'dark' ? 'text-zinc-400 hover:text-zinc-300' : 'text-zinc-500 hover:text-zinc-700'} font-bold lowercase underline decoration-zinc-500/30 underline-offset-4 mt-2`}>
             gym owner or coach? book a strategy call.
           </a>
           <div className={`text-[10px] ${theme === 'dark' ? 'text-zinc-600' : 'text-zinc-400'} font-bold tracking-widest uppercase flex flex-col md:flex-row items-center gap-2 md:gap-0 mt-4`}>
             <span>Hosted natively on Skool</span>
             <span className="hidden md:inline mx-2 opacity-50">•</span> 
             <span>Cancel anytime</span>
             <span className="hidden md:inline mx-2 opacity-50">•</span> 
             <span>Join 50k+ athletes</span>
           </div>
        </div>
      </div>
    </section>
  );
}

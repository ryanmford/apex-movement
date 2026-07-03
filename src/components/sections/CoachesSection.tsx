import React from 'react';
import { Users } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';

export function CoachesSection() {
  const { theme } = useAppContext();
  
  return (
    <section className={`py-16 md:py-24 px-4 md:px-6 ${theme === 'dark' ? 'bg-zinc-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} text-amber-500 text-sm font-medium mb-6`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            20+ Years Coaching • 50,000+ People Taught
          </div>
          <h2 className={`text-4xl md:text-6xl font-black lowercase tracking-tighter mb-4 md:mb-6`}>
            learn straight from the source.
          </h2>
          <p className={`text-base md:text-xl ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} font-medium lowercase`}>
            When you join our coaching programs, you aren't just getting curriculum. You get direct access and feedback from the industry's most elite coaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {[
            { name: 'Coach Ryan', role: 'Head Coach & Founder', desc: '15+ years experience. Has coached dozens of World Champions. Architect of the Apex systems.' },
            { name: 'Coach Alex', role: 'Strength Specialist', desc: 'Specializes in bulletproofing athletes for longevity and maximizing raw power generation.' },
            { name: 'Coach Dave', role: 'Speed & Flow Expert', desc: 'Master of efficiency, speed courses, and helping athletes enter flow states on demand.', colSpan: true }
          ].map((coach, i) => (
             <div key={i} className={`${theme === 'dark' ? 'bg-zinc-900 border-white/5' : 'bg-neutral-50 border-black/5'} border-4 p-6 md:p-8 flex flex-col items-center text-center ${coach.colSpan ? 'md:col-span-2 lg:col-span-1' : ''}`}>
               <div className={`w-32 h-32 ${theme === 'dark' ? 'bg-zinc-800 border-zinc-950' : 'bg-zinc-200 border-white'} border-4 mb-6 overflow-hidden relative flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-amber-400/10"></div>
                  <Users className={`w-10 h-10 ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'}`} />
               </div>
               <h3 className={`text-2xl font-black lowercase tracking-tight mb-1`}>{coach.name}</h3>
               <p className="text-amber-500 text-[10px] font-black tracking-[0.2em] uppercase mb-4">{coach.role}</p>
               <p className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} text-sm leading-relaxed font-medium lowercase`}>
                 {coach.desc}
               </p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Star } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';

export function TestimonialsSection() {
  const { theme } = useAppContext();
  
  return (
    <section className={`py-16 md:py-24 px-4 md:px-6 ${theme === 'dark' ? 'bg-zinc-950 border-white/5' : 'bg-white border-black/5'} border-t-2 relative overflow-hidden`}>
      <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${theme === 'dark' ? 'from-amber-400/5 via-zinc-950 to-zinc-950' : 'from-amber-400/10 via-white to-white'} pointer-events-none`} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className={`text-4xl md:text-6xl font-black tracking-tighter lowercase mb-4 md:mb-6`}>
            what athletes are saying about <span className="text-amber-500">apex.</span>
          </h2>
          <p className={`text-base md:text-xl ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} font-medium lowercase`}>
            Real feedback from tracers and competitors across every level who put Apex's systems to work.
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {[
            {
              text: "The programming completely transformed my movement speed and power. Easily the best investment I've ever made in my training.",
              author: "Alex M.", role: "Apex Athlete & Competitor"
            },
            {
              text: "Joining the community has been one of the best decisions for my parkour journey. In my first year running the systems, we set personal records for speed courses and finished on top of the podium.",
              author: "Justin W.", role: "Speed Parkour Champion"
            },
            {
              text: "I cannot tell you how many times I visit the library to find something useful or encouraging. My biggest personal celebration is a shift towards a growth mindset that I wouldn't have made without this community. It has revolutionized my training.",
              author: "Tim H.", role: "Senior Athlete"
            },
            {
              text: "We made competitive history last night by advancing to the Elite 8 in the local jam. Thank you, Apex Community!",
              author: "Dave R.", role: "Gym Owner"
            },
             {
              text: "Year 3 of systems and we broke through to win the main event at our largest regional jam. What an unbelievable difference the Apex systems have made for our kids and program!",
              author: "Alex L.", role: "Head Coach"
            },
            {
              text: "I joined the community in September and incorporated the strength systems. Started going strong and now my boys are jumping further with better technique. Love the energy here.",
              author: "Malyiek M.", role: "Parkour Instructor"
            }
          ].map((t, i) => (
            <div key={i} className={`w-[80vw] sm:w-[50vw] md:w-auto shrink-0 snap-center md:snap-align-none break-inside-avoid ${theme === 'dark' ? 'bg-zinc-900/50 border-white/10' : 'bg-neutral-50 border-black/10'} border-2 p-6 md:p-8 flex flex-col`}>
              <div className="flex gap-1 mb-4 md:mb-5">
                {[...Array(5)].map((_, j) => (
                   <Star key={j} className="w-4 h-4 text-amber-500 fill-current" />
                ))}
              </div>
              <p className={`${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'} text-sm md:text-base font-medium leading-relaxed mb-6 block flex-1 lowercase italic`}>"{t.text}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className={`w-10 h-10 ${theme === 'dark' ? 'bg-zinc-800 border-white/10' : 'bg-zinc-200 border-black/10'} border-2 flex items-center justify-center text-sm font-black uppercase`}>
                  {t.author.substring(0, 2)}
                </div>
                <div>
                  <div className={`text-sm font-black uppercase`}>{t.author}</div>
                  <div className={`text-[10px] font-bold tracking-widest uppercase opacity-50`}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <a 
             href="https://www.skool.com/apexmovement"
             target="_blank"
             rel="noreferrer"
             className="inline-flex items-center gap-2 bg-transparent text-amber-500 border-2 border-amber-500 px-8 py-4 font-black uppercase tracking-[0.2em] text-[11px] hover:bg-amber-500 hover:text-zinc-950 transition-colors active:scale-95"
           >
               Join the free community
           </a>
        </div>
      </div>
    </section>
  );
}

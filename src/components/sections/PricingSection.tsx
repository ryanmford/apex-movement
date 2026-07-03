import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';

export function PricingSection() {
  const { theme } = useAppContext();
  const [pricingTab, setPricingTab] = useState<'athletes' | 'coaches'>('athletes');
  
  return (
    <section id="pricing" className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className={`text-5xl md:text-7xl font-black lowercase tracking-tighter mb-4 md:mb-6`}>choose your plan.</h2>
          
          <div className={`inline-flex ${theme === 'dark' ? 'bg-zinc-900 border-white/10' : 'bg-neutral-100 border-black/10'} border-4 p-1 mt-6`}>
            <button 
              onClick={() => setPricingTab('athletes')} 
              className={`px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${pricingTab === 'athletes' ? 'bg-amber-400 text-zinc-950' : (theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black')}`}
            >
              For Athletes
            </button>
            <button 
              onClick={() => setPricingTab('coaches')} 
              className={`px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${pricingTab === 'coaches' ? 'bg-amber-400 text-zinc-950' : (theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black')}`}
            >
              For Coaches
            </button>
          </div>
        </div>

        {pricingTab === 'athletes' ? (
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Athletes Standard */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${theme === 'dark' ? 'bg-[#2e2e2e] border-white/5' : 'bg-neutral-50 border-black/5'} border-4 p-8 flex flex-col pt-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)]`}
            >
              <div className="text-center mb-8">
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className={`text-6xl font-black tracking-tighter leading-none`}>$0</span>
                  <span className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'} mb-2 font-bold text-[10px] uppercase tracking-widest`}>/month</span>
                </div>
                <h3 className={`text-2xl font-black lowercase`}>Standard</h3>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Monthly challenges",
                  "Worldwide community",
                  "Verify ASR video proofs"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-[#21c55e]" />
                    </div>
                    <span className={`text-sm ${theme === 'dark' ? 'text-zinc-200' : 'text-zinc-700'} font-medium lowercase leading-snug`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://www.skool.com/apexmovement"
                target="_blank"
                rel="noreferrer"
                className={`w-full py-4 px-6 font-black uppercase tracking-[0.2em] text-[11px] transition-colors active:scale-95 text-center block ${theme === 'dark' ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700' : 'bg-neutral-200 text-zinc-700 hover:bg-neutral-300'}`}
              >
                CURRENT PLAN
              </a>
            </motion.div>

            {/* Athletes Premium */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`${theme === 'dark' ? 'bg-[#2e2e2e] border-amber-500/50' : 'bg-neutral-50 border-amber-500'} border-4 p-8 flex flex-col pt-12 shadow-[12px_12px_0px_0px_rgba(251,191,36,0.3)] transform md:-translate-y-4`}
            >
              <div className="text-center mb-8">
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className={`text-6xl font-black tracking-tighter leading-none`}>$47</span>
                  <span className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'} mb-2 font-bold text-[10px] uppercase tracking-widest`}>/month</span>
                </div>
                <h3 className={`text-2xl font-black lowercase text-amber-500`}>Premium</h3>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Everything in Standard, plus...",
                  "Apex Movement Library, PK101, Climb-Up Blueprint, Power^ Program, Intro to PK Strength",
                  "24/7 Apex AI coach: Apex training insights on-demand",
                  "25% off Apex merch",
                  "Eligible for IRL workshops",
                  "Sponsor 1 Apex Speed Run course (annual only)"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-[#21c55e]" />
                    </div>
                    <span className={`text-sm ${theme === 'dark' ? 'text-zinc-200' : 'text-zinc-700'} font-medium lowercase leading-snug`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://www.skool.com/parkour-skool-8261"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 px-6 bg-amber-400 text-zinc-950 font-black uppercase tracking-[0.2em] text-[11px] hover:bg-amber-500 transition-colors active:scale-95 text-center block"
                >
                  JOIN PREMIUM
                </a>
                <a 
                  href="https://calendly.com/apexmovement/strategy"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full text-center text-[10px] font-bold uppercase tracking-widest hover:underline ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}
                >
                  NOT SURE? BOOK A CALL
                </a>
              </div>
            </motion.div>

            {/* Athletes VIP */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`${theme === 'dark' ? 'bg-[#2e2e2e] border-white/5' : 'bg-neutral-50 border-black/5'} border-4 p-8 flex flex-col pt-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)]`}
            >
              <div className="text-center mb-8">
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className={`text-6xl font-black tracking-tighter leading-none`}>$277</span>
                  <span className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'} mb-2 font-bold text-[10px] uppercase tracking-widest`}>/month</span>
                </div>
                <h3 className={`text-2xl font-black lowercase`}>VIP</h3>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {[
                  "Everything in Premium, plus...",
                  "Individualized programming & coaching + unlimited feedback",
                  "Free IRL workshop (annual only)",
                  "Sponsor 3 Apex Speed Run courses (annual only)"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-[#21c55e]" />
                    </div>
                    <span className={`text-sm ${theme === 'dark' ? 'text-zinc-200' : 'text-zinc-700'} font-medium lowercase leading-snug`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://www.skool.com/parkour-skool-8261"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 px-6 bg-amber-400 text-zinc-950 font-black uppercase tracking-[0.2em] text-[11px] hover:bg-amber-500 transition-colors active:scale-95 text-center block border-2 border-amber-400"
                >
                  JOIN VIP
                </a>
                <a 
                  href="https://calendly.com/apexmovement/strategy"
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full text-center text-[10px] font-bold uppercase tracking-widest hover:underline ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}
                >
                  NOT SURE? BOOK A CALL
                </a>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
             {/* Coaches Standard */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className={`${theme === 'dark' ? 'bg-[#2e2e2e] border-white/5' : 'bg-neutral-50 border-black/5'} border-4 p-8 flex flex-col pt-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)]`}
             >
               <div className="text-center mb-8">
                 <div className="flex items-end justify-center gap-1 mb-2">
                   <span className={`text-6xl font-black tracking-tighter leading-none`}>$97</span>
                   <span className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'} mb-2 font-bold text-[10px] uppercase tracking-widest`}>/month</span>
                 </div>
                 <h3 className={`text-2xl font-black lowercase`}>Standard</h3>
               </div>
               <ul className="space-y-4 mb-10 flex-1">
                 {[
                   "Daily support from our coaches & community",
                   "Monthly deep dive calls",
                   "Apex Movement Library, PK101, Climb-Up Blueprint, Power^ Program, Intro to PK Strength",
                   "24/7 Apex AI coach: Apex training insights on-demand",
                   "Eligible for Apex workshops IRL"
                 ].map((feature, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <div className="shrink-0 mt-0.5">
                       <CheckCircle2 className="w-5 h-5 text-[#21c55e]" />
                     </div>
                     <span className={`text-sm ${theme === 'dark' ? 'text-zinc-200' : 'text-zinc-700'} font-medium lowercase leading-snug`}>{feature}</span>
                   </li>
                 ))}
               </ul>
               <a 
                 href="https://www.skool.com/parkour-skool-8261"
                 target="_blank"
                 rel="noreferrer"
                 className="w-full py-4 px-6 bg-amber-400 text-zinc-950 font-black uppercase tracking-[0.2em] text-[11px] hover:bg-amber-500 transition-colors active:scale-95 text-center block border-2 border-amber-400"
               >
                 JOIN STANDARD
               </a>
             </motion.div>

             {/* Coaches Premium */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className={`${theme === 'dark' ? 'bg-[#2e2e2e] border-amber-500/50' : 'bg-neutral-50 border-amber-500'} border-4 p-8 flex flex-col pt-12 shadow-[12px_12px_0px_0px_rgba(251,191,36,0.3)] transform md:-translate-y-4`}
             >
               <div className="text-center mb-8">
                 <div className="flex items-end justify-center gap-1 mb-2">
                   <span className={`text-6xl font-black tracking-tighter leading-none`}>$977</span>
                   <span className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'} mb-2 font-bold text-[10px] uppercase tracking-widest`}>/year</span>
                 </div>
                 <h3 className={`text-2xl font-black lowercase text-amber-500`}>Premium</h3>
               </div>
               <ul className="space-y-4 mb-10 flex-1">
                 {[
                   "Everything in Standard, plus...",
                   "Weekly film analysis",
                   "Sponsor 2 Apex Speed Run courses for 1 year",
                   "25% off Apex merch & workshops",
                   "16% savings annually"
                 ].map((feature, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <div className="shrink-0 mt-0.5">
                       <CheckCircle2 className="w-5 h-5 text-[#21c55e]" />
                     </div>
                     <span className={`text-sm ${theme === 'dark' ? 'text-zinc-200' : 'text-zinc-700'} font-medium lowercase leading-snug`}>{feature}</span>
                   </li>
                 ))}
               </ul>
               <div className="flex flex-col gap-3">
                 <a 
                   href="https://www.skool.com/parkour-skool-8261"
                   target="_blank"
                   rel="noreferrer"
                   className="w-full py-4 px-6 bg-amber-400 text-zinc-950 font-black uppercase tracking-[0.2em] text-[11px] hover:bg-amber-500 transition-colors active:scale-95 text-center block"
                 >
                   JOIN PREMIUM
                 </a>
                 <a 
                   href="https://calendly.com/apexmovement/strategy"
                   target="_blank"
                   rel="noreferrer"
                   className={`w-full text-center text-[10px] font-bold uppercase tracking-widest hover:underline ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}
                 >
                   NOT SURE? BOOK A CALL
                 </a>
               </div>
             </motion.div>

             {/* Coaches VIP */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className={`${theme === 'dark' ? 'bg-[#2e2e2e] border-white/5' : 'bg-neutral-50 border-black/5'} border-4 p-8 flex flex-col pt-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)]`}
             >
               <div className="text-center mb-8">
                 <div className="flex items-end justify-center gap-1 mb-2">
                   <span className={`text-6xl font-black tracking-tighter leading-none`}>$977</span>
                   <span className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'} mb-2 font-bold text-[10px] uppercase tracking-widest`}>/month</span>
                 </div>
                 <h3 className={`text-2xl font-black lowercase`}>VIP</h3>
               </div>
               <ul className="space-y-4 mb-10 flex-1">
                 {[
                   "Everything in Premium, plus...",
                   "Apex level 1 AND level 2 parkour coaching certification (3-month program)",
                   "Weekly cohort calls (coaching, programming, leadership, professional & biz development)",
                   "Bonus: speed parkour course-setting + coaching certification",
                   "Free Apex workshop IRL (annual only)",
                   "Sponsor 20 Apex Speed Run courses for 1 year (annual only)"
                 ].map((feature, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <div className="shrink-0 mt-0.5">
                       <CheckCircle2 className="w-5 h-5 text-[#21c55e]" />
                     </div>
                     <span className={`text-sm ${theme === 'dark' ? 'text-zinc-200' : 'text-zinc-700'} font-medium lowercase leading-snug`}>{feature}</span>
                   </li>
                 ))}
               </ul>
               <div className="flex flex-col gap-3">
                 <a 
                   href="https://www.skool.com/parkour-skool-8261"
                   target="_blank"
                   rel="noreferrer"
                   className="w-full py-4 px-6 bg-amber-400 text-zinc-950 font-black uppercase tracking-[0.2em] text-[11px] hover:bg-amber-500 transition-colors active:scale-95 text-center block border-2 border-amber-400"
                 >
                   JOIN VIP
                 </a>
                 <a 
                   href="https://calendly.com/apexmovement/strategy"
                   target="_blank"
                   rel="noreferrer"
                   className={`w-full text-center text-[10px] font-bold uppercase tracking-widest hover:underline ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}
                 >
                   NOT SURE? BOOK A CALL
                 </a>
               </div>
             </motion.div>
          </div>
        )}

        <div className="mt-12 text-center text-[10px] font-bold uppercase tracking-widest opacity-50 flex flex-col items-center gap-4">
           <p className="max-w-md">{pricingTab === 'athletes' ? "You're currently paying $0/month for Standard." : ""}</p>
        </div>
      </div>
    </section>
  );
}

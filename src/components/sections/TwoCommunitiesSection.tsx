import React from 'react';
import { motion } from 'motion/react';
import { Mountain, CheckCircle2, MoveRight, Trophy } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';

export function TwoCommunitiesSection() {
  const { theme } = useAppContext();
  
  return (
    <section id="communities" className={`py-16 md:py-24 ${theme === 'dark' ? 'bg-zinc-900/50 border-white/5' : 'bg-neutral-100 border-black/5'} border-t-2 px-4 md:px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className={`text-4xl md:text-5xl font-black lowercase tracking-tighter mb-4`}>two ways to train with us</h2>
          <p className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} text-base md:text-lg font-medium lowercase`}>Start in our free community, then upgrade your training. Or, if you're a coach, join our elite certification cohort.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Free Skool */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${theme === 'dark' ? 'bg-zinc-950 border-white/10' : 'bg-white border-black/10'} border-4 p-8 md:p-12`}
          >
            <div className={`w-14 h-14 ${theme === 'dark' ? 'bg-zinc-800 text-white' : 'bg-zinc-200 text-black'} flex items-center justify-center mb-6`}>
              <Mountain className="w-7 h-7" />
            </div>
            <h3 className={`text-3xl font-black lowercase tracking-tighter mb-3`}>parkour skool app</h3>
            <p className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} mb-8 leading-relaxed font-medium lowercase`}>
              For athletes and coaches focused on their own movement. Connect with others for free, then upgrade inside the platform to group coaching or 1-on-1 individual design.
            </p>
            <ul className="space-y-4 mb-8">
              {['Free worldwide community & connections', 'Focus purely on your own training', 'Upgrade to group coaching or individualized design'].map((feature, i) => (
                <li key={i} className={`flex items-start gap-3 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'} font-medium lowercase`}>
                  <CheckCircle2 className="w-5 h-5 text-zinc-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a 
              href="https://www.skool.com/apexmovement"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-amber-400 text-zinc-950 px-6 py-3 font-black uppercase tracking-widest text-[11px] hover:bg-amber-500 transition-colors active:scale-95"
            >
              JOIN FOR FREE
            </a>
          </motion.div>

          {/* Paid Skool */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${theme === 'dark' ? 'bg-zinc-900' : 'bg-neutral-50'} border-4 border-amber-500/50 p-8 md:p-12 relative overflow-hidden group shadow-[12px_12px_0px_0px_rgba(251,191,36,0.3)]`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy className="w-32 h-32 text-amber-500" />
            </div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-amber-400/10 flex items-center justify-center mb-6 border-2 border-amber-500/20">
                <span className="text-[20px] text-amber-500 font-black uppercase">AC</span>
              </div>
              <h3 className={`text-3xl font-black lowercase tracking-tighter mb-3`}>premium coaches cohort</h3>
              <p className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} mb-8 leading-relaxed font-medium lowercase`}>
                For gym owners and coaches ready to level up. Master the individual design model to increase income, get better results, and build a sustainable remote lifestyle.
              </p>
              <ul className="space-y-4 mb-8">
                {['Level 1 & 2 Parkour Coaching Certification', '3-month intensive business & coaching cohort', 'Master the individual design training model', 'Build a sustainable & asynchronous income'].map((feature, i) => (
                  <li key={i} className={`flex items-start gap-3 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'} font-medium lowercase`}>
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a 
                  href="https://calendly.com/apexmovement/strategy"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-400 text-zinc-950 px-6 py-3 font-black uppercase tracking-widest text-[11px] hover:bg-amber-500 transition-colors active:scale-95"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

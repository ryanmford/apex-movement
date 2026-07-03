import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';

export function FaqSection() {
  const { theme } = useAppContext();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  return (
    <section className={`py-16 md:py-24 px-4 md:px-6 ${theme === 'dark' ? 'bg-zinc-900 border-white/5' : 'bg-neutral-100 border-black/5'} border-t-2`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-4xl md:text-5xl font-black lowercase tracking-tighter mb-3 md:mb-4`}>frequently asked questions.</h2>
          <p className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} text-sm md:text-base font-medium lowercase`}>Everything you need to know before you join.</p>
        </div>
        <div className="space-y-4 md:space-y-6">
          {[
            {
              q: "Do I need to be a professional athlete to join?",
              a: "Not at all. While we train world champions, our methods are designed for anyone who is serious about taking their movement to the next level, regardless of their current starting point."
            },
            {
              q: "What is the difference between Free and Premium plans?",
              a: "The free community is a great place to connect, share line videos, and get basic tips from peers. Upgrading gives you direct access to the exact programming and film analysis from our elite coaching staff."
            },
            {
              q: "Can I cancel at any time?",
              a: "Yes. Our monthly subscriptions are strictly month-to-month and you're free to cancel your plan at any time right from within the platform."
            }
          ].map((faq, i) => (
            <div key={i} className={`${theme === 'dark' ? 'bg-zinc-950 border-white/10' : 'bg-white border-black/10'} border-4 overflow-hidden`}>
              <button 
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
              >
                <h3 className={`text-lg md:text-2xl font-black lowercase tracking-tight leading-tight pr-4`}>{faq.q}</h3>
                <div className={`shrink-0 w-8 h-8 rounded-none border-2 ${theme === 'dark' ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5'} flex items-center justify-center transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-4 h-4 text-amber-500" />
                </div>
              </button>
              <AnimatePresence>
                {openFaqIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`px-6 pb-6 md:px-8 md:pb-8 pt-0 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} leading-relaxed text-sm md:text-base font-medium lowercase`}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

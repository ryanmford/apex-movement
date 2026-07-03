import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { BIOS } from '../data';
import { Button, Heading, Badge, Image } from '../components/ui';
import { useAppContext } from '../contexts/AppContext';
import { SEO } from '../components/SEO';

const UI = { Button, Heading, Badge, Image };

export default function About() {
  const { theme } = useAppContext();
  const navigate = useNavigate();

  return (
    <>
    <SEO title="About" description="Learn more about Apex Movement's background and mission." />
    <section className="pt-32 md:pt-48 pb-24 px-6 max-w-7xl mx-auto overflow-hidden animate-in fade-in duration-1000">
      <div className="mb-16 md:mb-32 space-y-6 md:space-y-10 text-center md:text-left">
        <button onClick={() => navigate('/')} className="flex items-center min-h-[44px] gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] opacity-70 hover:opacity-100 cursor-pointer transition-all group mx-auto md:mx-0 bg-transparent border-none active:scale-95">
          <ChevronLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> Return Home
        </button>
        <UI.Heading>ABOUT</UI.Heading>
      </div>
      <div className="space-y-32 md:space-y-48 mb-24 md:mb-48">
        {BIOS.map((bio, i) => (
          <div key={i} className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className={`flex justify-center ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="w-full max-w-sm sm:max-w-md border-4 border-current bg-neutral-100 dark:bg-neutral-800 aspect-[4/5] overflow-hidden shadow-[16px_16px_0px_0px_rgba(current,1)] md:shadow-[32px_32px_0px_0px_rgba(current,1)]">
                <UI.Image src={bio.gif} alt={bio.name} forceColor={true} />
              </div>
            </div>
            <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
              <UI.Badge theme={theme} className="mb-6 md:mb-8">{bio.role}</UI.Badge>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 md:mb-12 leading-none break-words">{bio.name}</h2>
              <p className="text-lg sm:text-xl md:text-3xl opacity-80 leading-relaxed mb-10 md:mb-12 max-w-2xl font-medium">{bio.story}</p>
              <div className="grid grid-cols-2 gap-8 md:gap-12 pt-8 md:pt-12 border-t-2 border-current/20">
                <div>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] opacity-30 block mb-2 md:mb-4">Status</span>
                  <span className="text-xl md:text-2xl font-black uppercase">{bio.metrics}</span>
                </div>
                {bio.focus.map((f, idx) => (
                  <div key={idx}>
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] opacity-30 block mb-2 md:mb-4">Core 0{idx+1}</span>
                    <span className="text-xl md:text-2xl font-black uppercase break-words leading-tight">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

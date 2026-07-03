import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { CONFIG } from '../data';
import { Button } from './ui';

export function Footer() {
  const { theme } = useAppContext();

  return (
    <>
      <div className={`border-t-4 border-current ${theme === 'dark' ? 'bg-zinc-950 text-white' : 'bg-neutral-50 text-black'} py-24 px-6 text-center`}>
         <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-black lowercase tracking-tighter">get our field notes.</h2>
            <p className={`text-lg font-medium lowercase ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
               join our email list on substack for the latest articles on movement science, culture, and training.
            </p>
            <div className="flex justify-center pt-4">
              <Button 
                onClick={() => window.open('https://apexmovement.substack.com/', '_blank')}
                theme={theme}
                primary={true}
                className="!py-4 !px-8 text-sm md:text-base"
              >
                Subscribe on Substack <ExternalLink size={16} className="ml-2" />
              </Button>
            </div>
         </div>
      </div>

      <footer className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} py-20 px-6 relative z-20 transition-colors duration-1000 border-t-4 border-current`}>
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
          <div className="flex gap-12">
            {CONFIG.socials.map((s) => (
              <a key={s.key} href={s.url} target="_blank" rel="noreferrer" className="hover:opacity-100 transition-all opacity-40 text-current hover:scale-125">{s.icon}</a>
            ))}
          </div>
          <div className="opacity-40 text-[10px] font-black uppercase tracking-[0.7em] text-center leading-loose">
              © 2026 APEX MOVEMENT<br/>efficiency is truth.
          </div>
        </div>
      </footer>
    </>
  );
}

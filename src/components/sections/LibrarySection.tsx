import React, { useState, useCallback } from 'react';
import { Loader2, ArrowRight, ExternalLink } from 'lucide-react';
import { SectionHeader, Image, Button } from '../ui';
import { useAppContext } from '../../contexts/AppContext';
import { CONFIG } from '../../data';

export function LibrarySection() {
  const { theme, movements, isLoadingMovements, setActiveManual } = useAppContext();
  
  const [hasExpandedLibrary, setHasExpandedLibrary] = useState(false);
  const [libraryDisplayCount, setLibraryDisplayCount] = useState(3);

  const openSkool = useCallback(() => window.open(CONFIG.skoolLink, '_blank'), []);
  
  const handleLibraryExpansion = useCallback(() => {
    if (!hasExpandedLibrary) {
      setHasExpandedLibrary(true);
      setLibraryDisplayCount(9); 
    } else {
      openSkool(); 
    }
  }, [hasExpandedLibrary, openSkool]);

  return (
    <section id="library" className="py-16 md:py-24 px-6 max-w-7xl mx-auto overflow-hidden scroll-mt-24">
      <div className="mb-12 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10">
        <SectionHeader 
          badge="Kinetic Database" 
          title="library." 
          description="A repository of human kinetic potential. Synchronized mechanical samples." 
          theme={theme} 
        />
        {isLoadingMovements && (
          <div className="flex items-center gap-3 opacity-30 text-[10px] font-black uppercase tracking-widest">
            <Loader2 className="animate-spin" size={14} /> Localizing Records...
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20">
        {movements.slice(0, libraryDisplayCount).map((item, index) => (
          <div 
            key={index} 
            onClick={() => setActiveManual(item)} 
            className={`group border-4 border-current ${theme === 'dark' ? 'bg-zinc-900/50 hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]' : 'bg-white hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]'} overflow-hidden transition-all duration-500 ease-out cursor-pointer active:scale-[0.98] animate-in fade-in slide-in-from-bottom-12 max-w-sm mx-auto w-full`} 
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className={`relative overflow-hidden border-b-4 border-current aspect-[4/5] ${theme === 'dark' ? 'bg-zinc-800' : 'bg-neutral-100'}`}>
              <Image src={item.gif} alt={item.title} coloredOnHover={true} />
            </div>
            <div className="p-6 md:p-10">
              <div className="flex justify-between items-start mb-4">
                 <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-30 block group-hover:opacity-100 transition-opacity truncate max-w-[140px]">
                    {item.intro}
                 </span>
                 <ArrowRight size={18} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
              </div>
              <h4 className="text-2xl md:text-4xl font-black lowercase leading-[0.9] tracking-tighter mb-6 md:mb-8 break-words">{item.title}</h4>
              <div className="pt-5 md:pt-6 border-t-2 border-current/10">
                <p className="text-xs md:text-sm font-medium opacity-40 leading-snug lowercase italic">"{item.law}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button onClick={handleLibraryExpansion} primary={!hasExpandedLibrary} theme={theme} className="w-full md:w-auto min-w-[260px] md:min-w-[340px] !py-6 md:!py-7">
          {hasExpandedLibrary ? (
            <>Access Full Community Archive <ExternalLink size={16} /></>
          ) : (
            <>Join Community to Unlock More</>
          )}
        </Button>
      </div>
    </section>
  );
}

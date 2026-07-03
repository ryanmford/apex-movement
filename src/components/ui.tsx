import React, { useState, memo } from 'react';
import { Loader2 } from 'lucide-react';

export const Badge = memo(({ children, className = "", theme = 'light' }: { children: React.ReactNode, className?: string, theme?: string }) => (
  <div className={`px-2.5 py-1 border border-current text-[9px] font-black uppercase tracking-widest inline-flex items-center gap-2 opacity-70 ${className}`}>
    {children}
  </div>
));

export const Button = memo(({ children, primary = true, className = "", onClick, theme = 'light', type = "button" }: { children: React.ReactNode, primary?: boolean, className?: string, onClick?: () => void, theme?: string, type?: "button" | "submit" | "reset" }) => {
  const base = "px-6 md:px-10 py-4 md:py-5 font-black transition-all duration-300 border-2 active:scale-95 text-[11px] md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.25em] flex items-center justify-center gap-3 cursor-pointer rounded-none text-center whitespace-normal break-words min-h-[44px]";
  let colors = "";
  if (theme === 'dark') {
    colors = primary 
      ? "bg-white text-black border-white hover:bg-black hover:text-white" 
      : "bg-transparent text-white border-white/40 hover:border-white hover:bg-white/10";
  } else {
    colors = primary 
      ? "bg-black text-white border-black hover:bg-white hover:text-black" 
      : "bg-transparent text-black border-black/30 hover:border-black hover:bg-black/5";
  }
  return (
    <button type={type} onClick={onClick} className={`${base} ${colors} ${className}`}>
      {children}
    </button>
  );
});

export const Heading = memo(({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <h1 className={`text-[11vw] sm:text-7xl md:text-[8rem] lg:text-[9rem] font-black tracking-tighter lowercase leading-[0.85] md:leading-[0.8] break-words ${className}`}>
    {children}
  </h1>
));

export const Image = memo(({ src, alt, className = "", coloredOnHover = false, forceColor = false, containerClass = "" }: { src: string, alt: string, className?: string, coloredOnHover?: boolean, forceColor?: boolean, containerClass?: string }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative w-full h-full bg-neutral-100 dark:bg-neutral-900/50 flex items-center justify-center overflow-hidden ${containerClass}`}>
      <img 
        src={src} 
        alt={alt} 
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-1000 ease-out ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} 
        ${forceColor ? 'grayscale-0' : (coloredOnHover ? 'grayscale group-hover:grayscale-0 group-hover:scale-105' : 'grayscale-0')} ${className}`}
        loading="lazy"
      />
      <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 mix-blend-overlay"></div>
      {!loaded && (
         <div className="absolute inset-0 flex items-center justify-center">
           <Loader2 className="w-8 h-8 animate-spin opacity-20" />
         </div>
      )}
    </div>
  );
});

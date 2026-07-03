import React, { useState, memo } from 'react';
import { Loader2 } from 'lucide-react';

export const Badge = memo(({ children, className = "", theme = 'light' }: { children: React.ReactNode, className?: string, theme?: string }) => (
  <div className={`px-2.5 py-1 border border-current text-[9px] font-black uppercase tracking-widest inline-flex items-center gap-2 opacity-70 ${className}`}>
    {children}
  </div>
));

export const Button = memo(({ children, primary = true, className = "", onClick, theme = 'light', type = "button", ...props }: { children: React.ReactNode, primary?: boolean, className?: string, onClick?: () => void, theme?: string, type?: "button" | "submit" | "reset" } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    buttonRef.current.style.setProperty('--x', `${e.clientX - rect.left}px`);
    buttonRef.current.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  const base = "relative overflow-hidden px-6 md:px-10 py-4 md:py-5 font-black transition-all duration-300 border-2 active:scale-95 text-[11px] md:text-[12px] uppercase tracking-[0.2em] md:tracking-[0.25em] flex items-center justify-center cursor-pointer rounded-none text-center whitespace-normal break-words min-h-[44px]";
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
    <button ref={buttonRef} type={type} onClick={onClick} onMouseMove={handleMouseMove} className={`${base} ${colors} ${className} group`} {...props}>
      <span className="relative z-10 flex items-center justify-center gap-3 w-full h-full">{children}</span>
      {primary && (
        <span 
          className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: theme === 'dark' 
              ? 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.2) 0%, transparent 60%)' 
              : 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(0,0,0,0.15) 0%, transparent 60%)'
          }}
        />
      )}
    </button>
  );
});

export const Heading = memo(({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <h1 className={`text-6xl sm:text-7xl md:text-[8rem] lg:text-[9rem] font-black tracking-tighter uppercase leading-[0.85] md:leading-[0.8] break-words ${className}`}>
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

export const SectionHeader = memo(({ badge, title, description, theme = 'light' }: { badge: string, title: string, description: string, theme?: string }) => (
  <div className="space-y-4 md:space-y-6">
    <Badge theme={theme}>{badge}</Badge>
    <h2 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter lowercase leading-none">{title}</h2>
    <p className="text-base md:text-xl opacity-70 lowercase italic font-medium leading-tight max-w-md">
      {description}
    </p>
  </div>
));

export const ExpandButton = memo(({ expanded, onExpand, onCollapse, expandText = "view more", collapseText = "collapse" }: { expanded: boolean, onExpand: () => void, onCollapse: () => void, expandText?: string, collapseText?: string }) => (
  <button 
    onClick={expanded ? onCollapse : onExpand} 
    className="mt-12 md:mt-20 mx-auto flex items-center justify-center min-h-[44px] gap-4 md:gap-6 text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] opacity-70 hover:opacity-100 active:scale-95 cursor-pointer p-6 md:p-8 transition-all group border-none bg-transparent"
  >
    <div className="w-8 md:w-10 h-[2px] bg-current group-hover:w-14 md:group-hover:w-20 transition-all duration-700"></div>
    {expanded ? collapseText : expandText}
    <div className="w-8 md:w-10 h-[2px] bg-current group-hover:w-14 md:group-hover:w-20 transition-all duration-700"></div>
  </button>
));

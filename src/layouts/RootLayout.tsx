import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Torus, Mountain, Menu, Moon, Sun, X, ChevronRight, ExternalLink } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { CONFIG } from '../data';
import { Button } from '../components/ui';
import { GlobalModals } from '../components/GlobalModals';

export default function RootLayout() {
  const { theme, toggleTheme, scrolled } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const currentView = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  const openMerch = useCallback(() => window.open(CONFIG.merchLink, '_blank'), []);
  const openSkool = useCallback(() => window.open(CONFIG.skoolLink, '_blank'), []);

  const handleNav = useCallback((view: string, anchor: string | null = null) => {
    setIsMenuOpen(false);
    
    if (anchor) {
      navigate(view === 'home' ? `/${anchor}` : `/${view}${anchor}`);
    } else {
      navigate(view === 'home' ? '/' : `/${view}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [navigate]);

  const navLinks = useMemo(() => [
    { label: 'library', onClick: () => handleNav('home', '#library'), href: '/#library' },
    { label: 'projects', onClick: () => handleNav('home', '#arc'), href: '/#arc' },
    { label: 'learn', onClick: () => handleNav('learn'), active: currentView === 'learn' },
    { label: 'blog', onClick: () => window.open('https://apexmovement.substack.com/', '_blank'), href: 'https://apexmovement.substack.com/', external: true },
    { label: 'about', onClick: () => handleNav('about'), active: currentView === 'about' },
    { label: 'merch', onClick: openMerch, href: CONFIG.merchLink, external: true },
    { label: 'hire apex', onClick: () => handleNav('hire'), active: currentView === 'hire' },
  ], [handleNav, currentView, openMerch]);

  return (
    <div className={`min-h-screen font-sans antialiased overflow-x-hidden transition-colors duration-700 selection:bg-yellow-400 selection:text-black 
      ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[1000] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {isMenuOpen && (
        <div className={`fixed inset-0 z-[400] pt-20 pb-[calc(2rem+env(safe-area-inset-bottom))] px-8 flex flex-col transition-all duration-500 animate-in fade-in slide-in-from-right-full ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black shadow-2xl'}`}>
          <div className="flex justify-between items-center mb-12 shrink-0 border-b-2 border-current/10 pb-8">
            <div className="text-2xl font-black tracking-tighter uppercase cursor-pointer flex items-center gap-2" onClick={() => handleNav('home')}>
              {CONFIG.brand}
            </div>
            <button className="cursor-pointer p-3 min-w-[44px] min-h-[44px] border-2 border-current rounded-full hover:rotate-90 active:scale-95 transition-transform duration-300 bg-transparent text-current flex items-center justify-center" onClick={() => setIsMenuOpen(false)}><X size={24} /></button>
          </div>
          
          <div className="flex-grow flex flex-col space-y-4 overflow-y-auto pb-10 scrollbar-hide">
            {navLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={(e) => { 
                  if (!link.external) {
                    e.preventDefault();
                    if (link.onClick) link.onClick(); 
                  } else {
                    setIsMenuOpen(false);
                  }
                }} 
                className={`group flex items-center justify-between text-4xl font-black lowercase tracking-tighter cursor-pointer border-b border-current/5 py-5 min-h-[60px] transition-all active:scale-[0.98]
                ${link.active ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
              >
                <span>{link.label}</span>
                {link.external ? <ExternalLink size={16} className="opacity-20" /> : <ChevronRight size={16} className="opacity-20" />}
              </a>
            ))}
          </div>
          
          <div className="shrink-0 pt-8 border-t-2 border-current/10 bg-inherit flex flex-col gap-6">
            <Button onClick={openSkool} className="w-full !py-4 !text-[12px]" theme={theme}>{CONFIG.cta}</Button>
            <div className="flex gap-8 justify-center">
              {CONFIG.socials.map((s) => (
                <a key={s.key} href={s.url} target="_blank" rel="noreferrer" className="opacity-30 hover:opacity-100 transition-all text-current">{s.icon}</a>
              ))}
            </div>
          </div>
        </div>
      )}

      <nav className={`fixed top-0 w-full z-[300] transition-all duration-700 px-6 py-4 flex justify-between items-center ${scrolled || currentView !== 'home' ? (theme === 'dark' ? 'bg-black/95 border-b-2 border-white/10 text-white' : 'bg-white/95 border-b-2 border-black/10 text-black') : (theme === 'dark' ? 'bg-transparent text-white' : 'bg-transparent text-black')} backdrop-blur-md`}>
        <div onClick={() => handleNav('home')} className="text-xl md:text-2xl font-black tracking-tighter uppercase cursor-pointer group flex items-center gap-2 shrink-0">
            <Mountain className="opacity-40 group-hover:-translate-y-1 group-hover:opacity-100 transition-all duration-300" size={18} />
            {CONFIG.brand}
        </div>
        
        <div className="hidden lg:flex flex-grow justify-center px-4 overflow-hidden">
          <div className="flex gap-4 lg:gap-5 xl:gap-10 items-center font-black lowercase text-[9px] xl:text-[10px] tracking-[0.2em] xl:tracking-[0.4em]">
            {navLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.href} 
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={(e) => { 
                  if (!link.external) {
                    e.preventDefault();
                    if (link.onClick) link.onClick(); 
                  }
                }} 
                className={`transition-all cursor-pointer relative group flex items-center gap-1 xl:gap-2 uppercase ${link.active ? 'opacity-100' : 'opacity-40 hover:opacity-100'} whitespace-nowrap`}
              >
                <span>{link.label}</span>
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-current transition-all duration-500 ${link.active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 xl:gap-4 shrink-0">
          <Button 
            onClick={openSkool} 
            primary={true}
            className={`hidden lg:flex !py-2.5 !px-4 xl:!px-6 !text-[9px] xl:!text-[10px] border-none !min-h-0 shadow-lg whitespace-nowrap`}
            theme={theme}
          >
            {CONFIG.cta}
          </Button>

          <button onClick={toggleTheme} className="p-3 min-w-[44px] min-h-[44px] rounded-full hover:bg-current/10 transition-all cursor-pointer border-2 border-current active:scale-90 flex items-center justify-center group bg-transparent text-current">
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          
          <button className="lg:hidden cursor-pointer p-3 min-w-[44px] min-h-[44px] border-2 border-current rounded-full bg-transparent text-current flex items-center justify-center active:scale-95 transition-transform" onClick={() => setIsMenuOpen(true)}>
            <Menu size={18} />
          </button>
        </div>
      </nav>

      <GlobalModals />
      <main className="relative z-10">
        <Outlet />
      </main>

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
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { GlobalModals } from '../components/GlobalModals';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function RootLayout() {
  const { theme } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <div className={`min-h-screen font-sans antialiased overflow-x-hidden transition-colors duration-700 selection:bg-yellow-400 selection:text-black 
      ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[1000] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <GlobalModals />
      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

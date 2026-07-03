import React from 'react';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button, Heading } from '../components/ui';
import { useAppContext } from '../contexts/AppContext';
import { SEO } from '../components/SEO';

export default function Blog() {
  const { theme } = useAppContext();
  const navigate = useNavigate();

  return (
    <>
      <SEO title="Blog" description="Read our latest articles on growth, AI, and strategy." />
      <section className="pt-32 md:pt-48 pb-24 px-6 max-w-5xl mx-auto overflow-hidden animate-in fade-in duration-1000 min-h-screen flex flex-col">
      <div className="mb-16 md:mb-32 space-y-6 md:space-y-10 text-center md:text-left">
        <button onClick={() => navigate('/')} className="flex items-center min-h-[44px] gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] opacity-30 hover:opacity-100 cursor-pointer transition-all group mx-auto md:mx-0 bg-transparent border-none active:scale-95">
          <ChevronLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> Return Home
        </button>
        <Heading>blog.</Heading>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium opacity-60 lowercase mt-6 md:mt-10 break-words mx-auto md:mx-0 max-w-2xl">
          we've moved our writing to substack. subscribe to get our latest articles on movement science, culture, and training directly in your inbox.
        </p>
      </div>

      <div className={`flex-1 flex flex-col items-center justify-center border-4 ${theme === 'dark' ? 'border-white/10 bg-zinc-950/50' : 'border-black/10 bg-neutral-50'} p-8 md:p-16 mb-24`}>
        <div className="w-full max-w-md mx-auto aspect-[4/3] relative z-10 mb-8 rounded-lg overflow-hidden border-2 border-current shadow-xl bg-white">
          <iframe 
            src="https://apexmovement.substack.com/embed" 
            width="100%" 
            height="100%" 
            style={{ border: 'none', background: 'white' }}
            title="Apex Movement Substack"
          ></iframe>
        </div>
        
        <div className="text-center space-y-8">
           <h2 className="text-2xl md:text-4xl font-black lowercase tracking-tighter">join the email list.</h2>
           <Button 
             onClick={() => window.open('https://apexmovement.substack.com/', '_blank')}
             theme={theme}
             primary={true}
             className="!py-6 !px-8 text-lg"
           >
             Read the Blog on Substack <ExternalLink size={20} className="ml-2" />
           </Button>
        </div>
      </div>
    </section>
    </>
  );
}

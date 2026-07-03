import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { CONFIG, PRODUCTS } from '../data';
import { Button, Heading, Badge, Image } from '../components/ui';
import { useAppContext } from '../contexts/AppContext';

const UI = { Button, Heading, Badge, Image };

export default function Learn() {
  const { theme } = useAppContext();
  const navigate = useNavigate();
  
  const openSkool = () => window.open(CONFIG.skoolLink, '_blank');

  return (
    
    <section className="pt-32 md:pt-48 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 md:mb-24 space-y-6 md:space-y-10 text-center md:text-left"
      >
        <button onClick={() => navigate('/')} className="flex items-center min-h-[44px] gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] opacity-70 hover:opacity-100 cursor-pointer transition-all group mx-auto md:mx-0 bg-transparent border-none active:scale-95">
          <ChevronLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> Return Home
        </button>
        <UI.Heading>LEARN</UI.Heading>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium opacity-80 mt-6 md:mt-10 max-w-3xl leading-snug break-words mx-auto md:mx-0">
          The technical hierarchy of movement. Physics-based training protocols and the Apex Standard.
        </p>
      </motion.div>

      <div className="space-y-24 md:space-y-32">
        {PRODUCTS.map((product, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            className="group grid lg:grid-cols-12 gap-8 md:gap-20 items-center"
          >
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="aspect-[4/5] w-full max-w-sm sm:max-w-md border-4 border-current bg-neutral-100 dark:bg-neutral-900 overflow-hidden relative shadow-[12px_12px_0px_0px_rgba(current,1)] group-hover:shadow-none transition-all duration-500">
                <UI.Image src={product.gif} alt={product.title} coloredOnHover={true} />
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 md:space-y-10 order-1 lg:order-2">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4">
                  <UI.Badge theme={theme} className="opacity-40">{product.tag}</UI.Badge>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">Protocol 0{i+1}</span>
                </div>
                <h3 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] break-words">
                  {product.title}
                </h3>
              </div>
              
              <div className="space-y-6 md:space-y-8 max-w-2xl">
                <p className="text-lg md:text-3xl opacity-80 leading-relaxed font-medium">
                  {product.blurb}
                </p>
              </div>

              <UI.Button onClick={openSkool} theme={theme} className="w-full sm:w-auto !py-6 md:!py-8 !px-12 md:!px-16">
                Master Protocol <ArrowRight size={18} />
              </UI.Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  
  );
}

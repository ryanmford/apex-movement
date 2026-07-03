import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ChevronLeft, Building, Camera, GraduationCap, DraftingCompass } from 'lucide-react';
import { motion } from 'motion/react';
import { Heading } from '../components/ui';
import { useAppContext } from '../contexts/AppContext';

const UI = { Heading };

export default function Hire() {
  const { theme } = useAppContext();
  const navigate = useNavigate();

  return (
    
    <section className="pt-32 md:pt-48 pb-24 px-6 max-w-5xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 md:mb-32 space-y-6 md:space-y-10 text-center md:text-left"
      >
        <button onClick={() => navigate('/')} className="flex items-center min-h-[44px] gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] opacity-70 hover:opacity-100 cursor-pointer transition-all group mx-auto md:mx-0 bg-transparent border-none active:scale-95">
          <ChevronLeft size={18} className="group-hover:-translate-x-2 transition-transform" /> Return Home
        </button>
        <UI.Heading>HIRE APEX</UI.Heading>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium opacity-80 mt-6 md:mt-10 break-words mx-auto md:mx-0">Deployment services for the elite movement sector.</p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`grid md:grid-cols-2 gap-px bg-current border-2 md:border-4 border-current mb-24 md:mb-32 transition-all duration-700 ${theme === 'dark' ? 'shadow-[16px_16px_0px_0px_rgba(255,255,255,1)] md:shadow-[40px_40px_0px_0px_rgba(255,255,255,1)]' : 'shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] md:shadow-[40px_40px_0px_0px_rgba(0,0,0,1)]'}`}
      >
        {[
            { id: 'consulting', title: 'Spatial Architecture', icon: <DraftingCompass size={32} />, detail: 'Biomechanical auditing and facility design.' },
            { id: 'media', title: 'Media Production', icon: <Camera size={32} />, detail: 'Stunt coordination and technical performance oversight.' },
            { id: 'gym', title: 'Facility Logic', icon: <Building size={32} />, detail: 'Structural logistics and specialized equipment procurement.' },
            { id: 'cert', title: 'Group Training', icon: <GraduationCap size={32} />, detail: 'Coaching certification for institutional athletic programs.' },
        ].map((cat, i) => (
            <motion.button 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              onClick={() => {
                window.location.href = `mailto:apexmovement@gmail.com?subject=Inquiry: ${cat.title}`;
              }} 
              className={`p-8 sm:p-12 md:p-16 text-left transition-all group cursor-pointer border-none active:scale-[0.98]
                ${theme === 'dark' 
                  ? 'bg-black text-white hover:bg-white hover:text-black' 
                  : 'bg-white text-black hover:bg-black hover:text-white'}`}
            >
                <div className="mb-6 md:mb-10 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all origin-left duration-500">{cat.icon}</div>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-none break-words">{cat.title}</h4>
                <p className="text-base md:text-xl leading-relaxed opacity-80 font-medium group-hover:opacity-100 transition-opacity">{cat.detail}</p>
            </motion.button>
        ))}
      </motion.div>
    </section>
  
  );
}

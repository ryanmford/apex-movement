import React, { useEffect, memo } from 'react';
import { X } from 'lucide-react';

export const Modal = memo(({ isOpen, onClose, children, theme = 'light' }: { isOpen: boolean, onClose: () => void, children: React.ReactNode, theme?: string }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-2 sm:p-4 md:p-8 animate-in fade-in duration-400">
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/98' : 'bg-white/98'} backdrop-blur-xl cursor-pointer`} onClick={onClose}></div>
      <div className={`relative w-full max-w-6xl ${theme === 'dark' ? 'bg-black border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] md:shadow-[24px_24px_0px_0px_rgba(255,255,255,1)] text-white' : 'bg-white border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] text-black'} border-2 md:border-4 p-5 sm:p-8 md:p-12 overflow-y-auto max-h-[92vh] transition-all duration-500 ease-out scrollbar-hide animate-in zoom-in-95`}>
        <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 hover:rotate-90 transition-transform duration-500 z-[600] cursor-pointer p-2 border-2 border-current rounded-full group bg-current text-white dark:text-black">
          <X size={20} className="group-hover:scale-110 transition-transform md:w-6 md:h-6" />
        </button>
        <div className="max-w-full overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
});

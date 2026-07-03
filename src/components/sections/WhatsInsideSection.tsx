import React from 'react';
import { Play, MessageCircle } from 'lucide-react';
import { useAppContext } from '../../contexts/AppContext';

export function WhatsInsideSection() {
  const { theme } = useAppContext();
  
  return (
    <section className={`py-16 md:py-24 px-4 md:px-6 ${theme === 'dark' ? 'bg-zinc-950 border-white/5' : 'bg-white border-black/5'} border-t-2`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <h2 className={`text-4xl md:text-6xl font-black lowercase tracking-tighter mb-4 md:mb-6`}>your training just got an <span className="text-amber-500 inline-block border-b-4 border-amber-500">upgrade.</span></h2>
            <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} font-medium lowercase`}>Coaching, Community, and Systems. Everything you need to train at a higher level, in one place.</p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {/* Feature 1 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <div className={`${theme === 'dark' ? 'bg-zinc-900 border-white/10 shadow-[24px_24px_0px_0px_rgba(255,255,255,0.05)]' : 'bg-neutral-50 border-black/10 shadow-[24px_24px_0px_0px_rgba(0,0,0,0.05)]'} border-4 p-4 relative overflow-hidden transform md:rotate-[-2deg] hover:rotate-0 transition-transform duration-500`}>
                  <div className="flex items-center gap-2 mb-3 px-2">
                    <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
                  </div>
                  <div className="aspect-video bg-zinc-950 overflow-hidden relative border-2 border-white/5 mb-4 group cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1200&auto=format&fit=crop" alt="Platform" className="w-full h-full object-cover opacity-50 grayscale group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-16 h-16 rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-400/50 flex items-center justify-center group-hover:bg-amber-400/40 transition-colors">
                        <Play className="w-6 h-6 text-amber-500 ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="px-2 space-y-3 pb-2">
                    <div className={`h-4 w-3/4 ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}></div>
                    <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full ${theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-300'}`}></div>
                        <div className={`h-3 w-1/4 ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}></div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex px-3 py-1 rounded-full bg-amber-400/10 text-amber-500 text-[10px] md:text-[11px] font-black tracking-widest uppercase mb-6">
                Drill Book & Library
              </div>
              <h3 className="text-3xl lg:text-5xl font-black lowercase tracking-tighter mb-4">apex movement library</h3>
              <p className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} leading-relaxed text-lg font-medium lowercase`}>Your go-to library of powerful, game-tested drills used to build our world champion parkour athletes. Build technical mastery and habits that transfer directly to the real world.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div className="inline-flex px-3 py-1 rounded-full bg-amber-400/10 text-amber-500 text-[10px] md:text-[11px] font-black tracking-widest uppercase mb-6">
                The Skool Community
              </div>
              <h3 className="text-3xl lg:text-5xl font-black lowercase tracking-tighter mb-4">your 24/7 coaching feed.</h3>
              <p className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'} leading-relaxed text-lg font-medium lowercase`}>Our community runs natively on Skool, giving you an addictive, gamified, distraction-free environment to post your training clips, get expert film analysis, and level up with other athletes worldwide.</p>
            </div>
            <div className="relative group perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 to-orange-500/20 blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className={`${theme === 'dark' ? 'bg-[#1C1D1F] border-white/10' : 'bg-white border-black/10'} border-4 overflow-hidden relative shadow-[24px_24px_0px_0px_rgba(251,191,36,0.2)] transform md:rotate-[2deg] group-hover:rotate-0 transition-transform duration-500`}>
                  <div className={`border-b-2 ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} px-4 py-3 flex items-center gap-3`}>
                    <div className="w-6 h-6 bg-zinc-800 flex items-center justify-center">
                        <span className="text-[10px] text-white font-bold">PS</span>
                    </div>
                    <div className={`text-sm font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-zinc-800'} flex-1`}>Parkour Skool by Apex Movement</div>
                    <div className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-zinc-800 relative">
                          <div className={`absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 ${theme === 'dark' ? 'border-[#1C1D1F]' : 'border-white'}`}></div>
                        </div>
                        <div className="w-5 h-5 rounded-full bg-blue-500"></div>
                    </div>
                  </div>
                  <div className={`p-4 ${theme === 'dark' ? 'bg-[#141517]' : 'bg-neutral-50'}`}>
                    <div className={`${theme === 'dark' ? 'bg-[#1C1D1F] border-white/5' : 'bg-white border-black/5'} border-2 p-3 flex items-center gap-3 mb-4`}>
                        <div className="w-8 h-8 rounded-full bg-blue-500 shrink-0"></div>
                        <div className="text-zinc-500 text-sm flex-1 font-medium">Write something</div>
                        <div className={`px-3 py-1.5 border-2 ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} text-xs text-zinc-400 flex items-center gap-1.5 shrink-0 font-bold`}>
                          <div className="w-2 h-2 rounded-full border border-zinc-400"></div> Go Live
                        </div>
                    </div>
                    <div className={`${theme === 'dark' ? 'bg-[#1C1D1F]' : 'bg-white'} border-2 border-amber-500/50 p-4 shadow-[8px_8px_0px_0px_rgba(251,191,36,0.2)]`}>
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex gap-3 items-center">
                              <div className="relative">
                                  <div className="w-10 h-10 rounded-full bg-blue-500 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop" alt="Ryan" className="w-full h-full object-cover" loading="lazy" />
                                  </div>
                                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 rounded-full text-[8px] flex items-center justify-center font-bold text-white border-2 ${theme === 'dark' ? 'border-[#1C1D1F]' : 'border-white'}`}>6</div>
                              </div>
                              <div>
                                  <div className={`font-bold text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-black'}`}>Ryan Ford</div>
                                  <div className="text-zinc-500 text-xs font-medium">Mar 3 • ASR 🔥</div>
                              </div>
                            </div>
                            <div className="text-zinc-400 text-xs flex items-center gap-1 font-bold">
                              <span className="text-[10px]">📌</span> Pinned
                            </div>
                        </div>
                        
                        <div className="mb-2">
                            <h4 className={`font-bold mb-1 ${theme === 'dark' ? 'text-gray-200' : 'text-black'}`}>share, verify, & audit ASR clips here ✅</h4>
                            <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 font-medium">
                              with today's launch of the 2026 ASR Open, we're updating our protocol for verifying runs. this goes for all players and runs from here on. you can read more about it here...
                            </p>
                        </div>

                        <div className={`flex flex-wrap items-center mt-4 pt-3 border-t-2 ${theme === 'dark' ? 'border-white/5' : 'border-black/5'} text-xs text-zinc-500 gap-4 font-bold`}>
                            <div className="flex items-center gap-1.5"><span className="text-amber-500">👍</span> 13</div>
                            <div className="flex items-center gap-1.5"><MessageCircle className="w-3.5 h-3.5" /> 257</div>
                            <div className="flex items-center -space-x-1.5 ml-auto md:ml-0">
                              <div className={`w-5 h-5 rounded-full bg-zinc-700 border-2 ${theme === 'dark' ? 'border-[#1C1D1F]' : 'border-white'}`}></div>
                              <div className={`w-5 h-5 rounded-full bg-zinc-600 border-2 ${theme === 'dark' ? 'border-[#1C1D1F]' : 'border-white'}`}></div>
                              <div className={`w-5 h-5 rounded-full bg-zinc-500 border-2 ${theme === 'dark' ? 'border-[#1C1D1F]' : 'border-white'}`}></div>
                            </div>
                            <div className="hidden sm:block text-[10px] ml-auto">Last comment 16d ago</div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

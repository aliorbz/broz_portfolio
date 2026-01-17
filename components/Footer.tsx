
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 space-y-4 scroll-reveal">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-6 bento-card p-8 sm:p-16 flex flex-col justify-between min-h-[350px]">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-10 text-[#1a1a1a]">Let's connect and chat</h2>
          <div className="flex items-center gap-2 sm:gap-4 group cursor-pointer w-fit max-w-full">
            <span className="text-sm sm:text-lg lg:text-xl xl:text-2xl font-black border-b-2 sm:border-b-4 border-black transition-all group-hover:text-indigo-600 group-hover:border-indigo-600 whitespace-nowrap uppercase text-black">
              HELLO@ALPHABROZ.DEV
            </span>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gray-900 text-white rounded-full flex-shrink-0 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform shadow-lg group-hover:bg-indigo-600">
              →
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-6 bg-[#2D9B9B] rounded-[2.5rem] sm:rounded-[3rem] p-10 sm:p-16 flex flex-col items-center justify-center relative overflow-hidden min-h-[400px]">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-xl relative z-10">
            {[
              { text: 'FOLLOW ME!', classes: 'bg-white/10 text-white border border-white/20' },
              { text: 'INSTAGRAM', classes: 'bg-white text-[#2D9B9B] rotate-[-6deg]' },
              { text: 'DRIBBBLE', classes: 'bg-white/20 text-white border border-white/20 rotate-[4deg]' },
              { text: 'BEHANCE', classes: 'bg-[#1a1a1a] text-white rotate-[-3deg]' },
              { text: 'LINKEDIN', classes: 'bg-white text-[#2D9B9B] rotate-[8deg]' },
              { text: 'Dribbble 🤩', classes: 'bg-white/20 text-white border border-white/20' },
            ].map((bubble, i) => (
              <div 
                key={i} 
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-black cursor-pointer hover:scale-110 hover:shadow-xl transition-all shadow-md ${bubble.classes}`}
              >
                {bubble.text}
              </div>
            ))}
          </div>
          {/* Decorative element */}
          <div className="absolute inset-0 bg-white/5 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)' }}></div>
        </div>
      </div>
      
      <div className="bento-card flex flex-col md:flex-row items-center justify-between px-8 sm:px-12 py-6 gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-4 border-gray-900 flex items-center justify-center font-black text-xs">A</div>
          <span className="font-black tracking-tighter text-gray-800 text-sm">BROZ.dev</span>
        </div>
        <div className="text-gray-400 font-bold text-sm tracking-widest uppercase text-center">© HEAVENLY DESIGN 2026</div>
        <div className="flex gap-8">
           <a href="#" className="text-gray-400 hover:text-black font-bold text-xs uppercase transition-colors">Privacy</a>
           <a href="#" className="text-gray-400 hover:text-black font-bold text-xs uppercase transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

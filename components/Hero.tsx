
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 scroll-reveal">
      {/* Left Text Part */}
      <div className="lg:col-span-7 bento-card p-6 sm:p-10 lg:p-16 flex flex-col justify-center min-h-[400px] sm:min-h-[500px]">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8F5F5] text-[#2D9B9B] rounded-full text-[10px] sm:text-xs font-bold mb-6 sm:mb-8 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2D9B9B] animate-pulse"></span>
          AVAILABLE FOR WORK
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#1a1a1a] leading-[0.9] tracking-tighter mb-6 sm:mb-8">
          Hi, I'm a product designer<span className="text-2xl sm:text-4xl align-top ml-1">©</span>
        </h1>
        <p className="text-black text-base sm:text-xl max-w-md mb-8 leading-relaxed font-medium">
          I have 11 years of experience working on useful and mindful products together with startups and known brands.
        </p>
        <button className="bg-[#1a1a1a] text-white w-full sm:w-fit px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95">
          Contact Us
        </button>
      </div>

      {/* Right Visual Part */}
      <div className="lg:col-span-5 grid grid-cols-1 gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bento-card p-4 sm:p-6 flex flex-col justify-between overflow-hidden relative min-h-[180px]">
             <div className="z-10">
                <h3 className="font-bold text-sm sm:text-xl leading-tight text-black">ALPHABROZ</h3>
                <p className="text-black/60 text-[10px] sm:text-sm font-semibold">World Wide</p>
             </div>
             <img src="https://picsum.photos/seed/ui/400/300" className="absolute -bottom-4 -right-4 w-24 h-24 sm:w-40 sm:h-40 object-cover rounded-xl rotate-12 opacity-80" />
             <div className="mt-auto z-10">
                <div className="bg-gray-100 p-1.5 rounded-lg text-[8px] sm:text-[10px] font-bold inline-flex items-center gap-1 w-fit mb-1 sm:mb-2 text-black">
                    <span>⚡ EXPERT</span>
                </div>
                <div className="text-blue-600 font-extrabold text-[10px] sm:text-sm">$150/HR</div>
             </div>
          </div>
          <div className="bento-card overflow-hidden min-h-[180px]">
             <img src="https://picsum.photos/seed/person/600/800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Designer Portrait" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-[#8E9EFF] to-[#A8B5FF] rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 text-white flex flex-col justify-between min-h-[160px]">
            <div>
              <p className="text-[8px] sm:text-xs font-bold uppercase tracking-widest opacity-80 mb-2 sm:mb-4">Clients</p>
            </div>
            <div className="flex flex-col gap-1">
               <span className="font-black text-xs sm:text-xl tracking-tighter">SQUARESPACE</span>
               <span className="font-black text-xs sm:text-xl tracking-tighter italic">asana</span>
            </div>
          </div>
          <div className="bento-card p-3 sm:p-6 grid grid-cols-3 gap-2 sm:gap-3 place-items-center">
            {['figma', 'linkedin', 'dribbble', 'pinterest', 'behance', 'twitter'].map((icon) => (
              <div key={icon} className="w-full aspect-square bg-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-colors group">
                <img src={`https://www.google.com/s2/favicons?domain=${icon}.com&sz=64`} className="w-4 h-4 sm:w-6 sm:h-6 grayscale group-hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
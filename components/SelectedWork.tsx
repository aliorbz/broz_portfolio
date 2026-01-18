
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'KITE AI Gold SBT winner',
    year: '2025',
    tags: [
      { name: 'CREATOR', color: 'bg-[#EAF8F8] text-[#42B1B1]' },
      { name: 'SBT', color: 'bg-[#F1F1F1] text-[#1a1a1a]' }
    ],
    image: 'https://i.ibb.co.com/Cp47MKdT/Picsart-26-01-18-22-15-53-203-1.jpg',
    link: 'https://x.com/Kite_Frens_Eco/status/1988558930671538247?s=20',
    fullWidth: true
  },
  {
    id: 2,
    title: 'Portal BB Rank #5',
    year: '2025',
    tags: [
      { name: 'CREATOR', color: 'bg-[#EAF8F8] text-[#42B1B1]' },
      { name: 'DC Role', color: 'bg-[#F1F1F1] text-[#1a1a1a]' }
    ],
    image: 'https://i.ibb.co.com/1fXfwmSV/20260118-220040.jpg'
  },
  {
    id: 3,
    title: 'WALRUS',
    year: '2024',
    tags: [
      { name: 'OnChain', color: 'bg-[#EAF8F8] text-[#42B1B1]' },
      { name: 'GALXE', color: 'bg-[#F1F1F1] text-[#1a1a1a]' }
    ],
    image: 'https://i.ibb.co.com/Kc8034jP/Screenshot-2026-01-18-224925.png'
  },
  {
    id: 4,
    title: 'ZAMA OG NFT',
    year: '2026',
    tags: [
      { name: 'CREATOR', color: 'bg-[#EAF8F8] text-[#42B1B1]' }
    ],
    image: 'https://i.ibb.co.com/Vcpj88L0/G96p-Ym-Ta-AAAWe-Y6.jpg'
  },
  {
    id: 5,
    title: 'PEAQ Testnet',
    year: '2024',
    tags: [
      { name: 'OnChain', color: 'bg-[#EAF8F8] text-[#42B1B1]' }
    ],
    image: 'https://i.ibb.co.com/bMFMmjdf/Screenshot-2026-01-18-231259.png'
  }
];

const SelectedWork: React.FC = () => {
  return (
    <section className="scroll-reveal bg-white rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-12 lg:px-16 lg:py-16 overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative items-start">
        {/* Left Column - Slightly narrower and title font size reduced */}
        <div className="lg:col-span-4 flex flex-col items-start gap-4 lg:sticky lg:top-40 h-fit pt-0">
          <div className="max-w-full lg:max-w-[300px]">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a1a1a] leading-[0.95] tracking-tighter mb-4">
              Achievements
            </h2>
            <p className="text-black font-bold text-sm sm:text-base leading-snug opacity-70">
              Explore my Achievemens on this web3 space...
            </p>
          </div>
        </div>

        {/* Right Column - Using col-span-8 to push it further away from the title */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`${project.fullWidth ? 'md:col-span-2' : 'md:col-span-1'} group flex flex-col`}
            >
              {project.link ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden mb-6 bg-[#f5f5f5] aspect-[16/10] relative border border-gray-100 block"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </a>
              ) : (
                <div className="rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden mb-6 bg-[#f5f5f5] aspect-[16/10] relative border border-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
              )}

              <div className="flex justify-between items-center px-1 mb-3">
                <h3 className="text-sm sm:text-base font-black text-[#1a1a1a] tracking-tight uppercase">
                  {project.title}
                </h3>
                <span className="text-xs sm:text-sm font-black text-black/50">
                  {project.year}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 px-0.5">
                {project.tags.map((tag) => (
                  <span 
                    key={tag.name} 
                    className={`${tag.color} px-4 py-2 rounded-full text-[9px] sm:text-[10px] font-black tracking-widest leading-none`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;

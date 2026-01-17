
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'DIGITAL AGENCY',
    year: '2021',
    tags: [
      { name: 'UI DESIGN', color: 'bg-[#EAF8F8] text-[#42B1B1]' },
      { name: 'MOBILE DEV', color: 'bg-[#F1F1F1] text-[#717171]' }
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1400',
    fullWidth: true
  },
  {
    id: 2,
    title: 'ZENPOINT',
    year: '2024',
    tags: [
      { name: 'UI DESIGN', color: 'bg-[#EAF8F8] text-[#42B1B1]' },
      { name: 'WEB DEV', color: 'bg-[#F1F1F1] text-[#717171]' }
    ],
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'PAYU',
    year: '2024',
    tags: [
      { name: 'UI DESIGN', color: 'bg-[#EAF8F8] text-[#42B1B1]' },
      { name: 'WEB DEV', color: 'bg-[#F1F1F1] text-[#717171]' }
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'COMPAI',
    year: '2024',
    tags: [
      { name: 'UI DESIGN', color: 'bg-[#EAF8F8] text-[#42B1B1]' },
      { name: 'MOBILE DEV', color: 'bg-[#F1F1F1] text-[#717171]' },
      { name: 'WEB DEV', color: 'bg-[#F1F1F1] text-[#717171]' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'CHATPIC.AI',
    year: '2024',
    tags: [
      { name: 'UI DESIGN', color: 'bg-[#EAF8F8] text-[#42B1B1]' },
      { name: 'MOBILE DEV', color: 'bg-[#F1F1F1] text-[#717171]' }
    ],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  }
];

const SelectedWork: React.FC = () => {
  return (
    <section className="scroll-reveal bg-white rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-12 lg:px-20 lg:py-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4">
        {/* Left Header Sidebar - Removed negative margin on mobile to prevent overflow */}
        <div className="lg:col-span-4 flex flex-col items-start gap-5 lg:sticky lg:top-32 h-fit pt-2 lg:-ml-8 xl:-ml-12">
          <h2 className="text-5xl lg:text-[72px] font-black text-[#1a1a1a] leading-[0.9] tracking-tighter">
            Selected<br />work
          </h2>
          <button className="bg-[#262626] text-white px-7 py-2.5 rounded-full text-xs font-bold shadow-sm hover:bg-black transition-all hover:scale-105 active:scale-95">
            See All
          </button>
        </div>

        {/* Right Project Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`${project.fullWidth ? 'md:col-span-2' : 'md:col-span-1'} group flex flex-col`}
            >
              <div className="rounded-[2.5rem] overflow-hidden mb-5 bg-[#f5f5f5] aspect-[16/10] sm:aspect-auto">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>

              <div className="flex justify-between items-center px-1 mb-3.5">
                <h3 className="text-[15px] font-bold text-[#1a1a1a] tracking-tight uppercase">
                  {project.title}
                </h3>
                <span className="text-[15px] font-bold text-[#1a1a1a]">
                  {project.year}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 px-0.5">
                {project.tags.map((tag) => (
                  <span 
                    key={tag.name} 
                    className={`${tag.color} px-5 py-2.5 rounded-full text-[10px] font-bold tracking-wider leading-none`}
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

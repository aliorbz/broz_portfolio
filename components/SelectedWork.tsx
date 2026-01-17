
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'DIGITAL AGENCY',
    year: '2021',
    tags: [
      { name: 'UI DESIGN', color: 'bg-[#EAF8F8] text-[#42B1B1]' },
      { name: 'MOBILE DEV', color: 'bg-[#F1F1F1] text-[#1a1a1a]' }
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
      { name: 'WEB DEV', color: 'bg-[#F1F1F1] text-[#1a1a1a]' }
    ],
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'PAYU',
    year: '2024',
    tags: [
      { name: 'UI DESIGN', color: 'bg-[#EAF8F8] text-[#42B1B1]' },
      { name: 'WEB DEV', color: 'bg-[#F1F1F1] text-[#1a1a1a]' }
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'COMPAI',
    year: '2024',
    tags: [
      { name: 'UI DESIGN', color: 'bg-[#EAF8F8] text-[#42B1B1]' },
      { name: 'MOBILE DEV', color: 'bg-[#F1F1F1] text-[#1a1a1a]' },
      { name: 'WEB DEV', color: 'bg-[#F1F1F1] text-[#1a1a1a]' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'CHATPIC.AI',
    year: '2024',
    tags: [
      { name: 'UI DESIGN', color: 'bg-[#EAF8F8] text-[#42B1B1]' },
      { name: 'MOBILE DEV', color: 'bg-[#F1F1F1] text-[#1a1a1a]' }
    ],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  }
];

const SelectedWork: React.FC = () => {
  return (
    <section className="scroll-reveal bg-white rounded-[2.5rem] sm:rounded-[3.5rem] p-6 sm:p-12 lg:px-20 lg:py-16 overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative items-start">
        <div className="lg:col-span-4 flex flex-col items-start gap-6 lg:sticky lg:top-40 h-fit pt-0">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#1a1a1a] leading-[0.9] tracking-tighter">
            Selected<br />work
          </h2>
          <p className="text-black font-bold max-w-[280px] hidden lg:block text-base leading-snug">
            Explore my latest projects across UI, Web, and Mobile domains crafted with precision.
          </p>
          <button className="bg-[#262626] text-white px-8 py-3 rounded-full text-xs font-bold shadow-sm hover:bg-black transition-all hover:scale-105 active:scale-95">
            See All Projects
          </button>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`${project.fullWidth ? 'md:col-span-2' : 'md:col-span-1'} group flex flex-col`}
            >
              <div className="rounded-[2.5rem] overflow-hidden mb-6 bg-[#f5f5f5] aspect-[16/10] relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>

              <div className="flex justify-between items-center px-1 mb-4">
                <h3 className="text-lg font-black text-[#1a1a1a] tracking-tight uppercase">
                  {project.title}
                </h3>
                <span className="text-sm font-black text-black/50">
                  {project.year}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 px-0.5">
                {project.tags.map((tag) => (
                  <span 
                    key={tag.name} 
                    className={`${tag.color} px-5 py-2.5 rounded-full text-[10px] font-black tracking-widest leading-none`}
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

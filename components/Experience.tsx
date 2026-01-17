
import React from 'react';

const experiences = [
  {
    company: 'GOOGLE',
    role: 'Full-time UI designer at Google',
    years: '2020-Present',
    icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64'
  },
  {
    company: 'GRAMMARLY',
    role: 'Lead Product Designer',
    years: '2018-2020',
    icon: 'https://www.google.com/s2/favicons?domain=grammarly.com&sz=64'
  },
  {
    company: 'AIRBNB',
    role: 'Senior UI/UX Consultant',
    years: '2016-2018',
    icon: 'https://www.google.com/s2/favicons?domain=airbnb.com&sz=64'
  }
];

const Experience: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 scroll-reveal">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-5 bento-card p-10 sm:p-14 lg:p-16 flex flex-col justify-between">
          <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-black tracking-tighter leading-[0.95] text-[#1a1a1a]">
            Wanna see<br />my<br />experience?
          </h2>
          <div className="mt-12">
            <p className="text-black font-bold text-[16px] sm:text-[18px] max-w-[260px] leading-snug mb-8">
              A decade of crafting digital experiences for world-class companies.
            </p>
            <button className="bg-[#1a1a1a] text-white px-9 py-4 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-sm">
              Download CV
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-7 flex flex-col gap-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bento-card p-7 sm:p-9 flex items-center gap-6 group transition-all flex-1">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#f9fafb] flex-shrink-0 flex items-center justify-center p-3 border border-gray-100 group-hover:bg-white group-hover:shadow-sm transition-all shadow-sm">
                <img 
                  src={exp.icon} 
                  alt={exp.company} 
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" 
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-black font-black text-[11px] uppercase tracking-[0.12em] font-sans">
                    {exp.company}
                  </h3>
                  {idx === 0 && (
                    <span className="text-black/40 font-bold text-[11px] tracking-tight">2020-Present</span>
                  )}
                </div>
                <h4 className="text-xl sm:text-2xl font-black tracking-tight text-[#1a1a1a] leading-tight">
                  {exp.role}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

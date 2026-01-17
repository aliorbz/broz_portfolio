
import React from 'react';

const services = [
  {
    title: 'UI Design',
    number: '01',
    desc: 'Intuitive, visually appealing interfaces.',
    icon: '💎'
  },
  {
    title: 'Dev',
    number: '02',
    desc: 'Reliable, scalable clean code.',
    icon: '⚡'
  },
  {
    title: 'Graphic',
    number: '03',
    desc: 'Responsive user-friendly designs.',
    icon: '🎨'
  },
  {
    title: 'Branding',
    number: '04',
    desc: 'Memorable brand identities.',
    icon: '✨'
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 scroll-reveal">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter lg:sticky lg:top-32 text-[#1a1a1a]">
            How Can I Assist You?
          </h2>
        </div>
        <div className="lg:col-span-8 grid grid-cols-2 gap-3 sm:gap-4">
          {services.map((service) => (
            <div key={service.number} className="bento-card p-4 sm:p-10 flex flex-col justify-between min-h-[220px] sm:min-h-[350px]">
              <div className="flex justify-between items-start mb-4 sm:mb-8">
                 <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gray-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-3xl shadow-sm">
                   {service.icon}
                 </div>
                 <span className="text-black/20 font-black text-2xl sm:text-4xl leading-none">{service.number}</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-3xl font-black mb-1 sm:mb-4 tracking-tight text-black">{service.title}</h3>
                <p className="text-black/70 text-[10px] sm:text-sm leading-relaxed font-bold line-clamp-2 sm:line-clamp-none">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="scroll-reveal py-4">
      <div className="bg-gradient-to-br from-[#F0F2FF] to-[#DBE1FF] rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-16 lg:p-24 flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] mb-6 max-w-3xl text-black">Contact with me to sizzle your project</h2>
        <p className="text-black font-bold mb-12 max-w-xl text-base sm:text-lg">Feel free to contact me if having any questions. I'm available for new projects or just for chatting.</p>
        
        <form className="w-full max-w-2xl space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-white border border-transparent rounded-2xl px-6 py-5 text-lg font-medium focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 outline-none transition-all shadow-sm placeholder-black/40"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-white border border-transparent rounded-2xl px-6 py-5 text-lg font-medium focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 outline-none transition-all shadow-sm placeholder-black/40"
            />
          </div>
          <textarea 
            placeholder="Project details..." 
            rows={5}
            className="w-full bg-white border border-transparent rounded-2xl px-6 py-5 text-lg font-medium focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 outline-none transition-all resize-none shadow-sm placeholder-black/40"
          ></textarea>
          <button className="w-full bg-[#1a1a1a] text-white py-5 rounded-2xl text-xl font-black hover:bg-black transition-all hover:shadow-xl active:scale-[0.98]">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

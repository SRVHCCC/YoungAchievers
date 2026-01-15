import React from "react";

const playLearnModules = [
  {
    title: "Sensory Exploration",
    method: "Tactile Learning",
    description: "Through clay modeling, sand play, and water activities, children explore different textures. This is essential for sensory processing and fine motor skill development.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    tag: "Motor Skills",
    color: "bg-[#FF5E5E]" // Red
  },
  {
    title: "Visual Recognition",
    method: "Observation-Based Learning",
    description: "Using colorful flashcards and 3D objects, we sharpen visual memory. Children learn to identify shapes, colors, and patterns in a fun, pressure-free way.",
    image: "https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=800&q=80",
    tag: "Visual Memory",
    color: "bg-[#FFB74D]" // Orange
  },
  {
    title: "Creative Expression",
    method: "Art & Storytelling",
    description: "Stories and puppet shows ignite imagination. We encourage children to express themselves through finger painting, drawing, and role-playing.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    tag: "Imagination",
    color: "bg-[#673AB7]" // Purple
  },
  {
    title: "Phonics & Language",
    method: "Auditory Discovery",
    description: "Rhymes, music, and phonics sounds help children recognize language patterns. This builds a strong foundation for future reading and speaking skills.",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80",
    tag: "Language Prep",
    color: "bg-[#00BCD4]" // Cyan
  },
  {
    title: "Social Interaction",
    method: "Value-Based Play",
    description: "Group games and shared activities teach children the importance of sharing, teamwork, and basic manners in a caring, social environment.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    tag: "Social Skills",
    color: "bg-[#4DD0E1]" // Light Cyan
  }
];

const PlayAndLearnPage = () => {
  return (
    <div className="font-sans text-slate-800 bg-white">

      {/* 1. COMPACT HERO SECTION (Matched to PrimaryFoundationPage) */}
      <section className="bg-[#fdfcf8] py-12 md:py-16 text-center border-b border-stone-200 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight text-slate-900">
            Nursery – UKG: <br className="hidden md:block" /> 
            <span className="text-[#00BCD4]">Play & Learn</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium text-slate-500 leading-relaxed">
            A joyful start where curiosity meets discovery. Our pre-primary wing 
            focuses on learning through play to build confidence and creativity.
          </p>
        </div>
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#4FC3F7]/10 rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-stone-100 rounded-full"></div>
      </section>

      {/* 2. LEARNING MODULES (Matched Photo-Story Style) */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">Our Pre-Primary Pillars</h2>
          <div className="w-20 h-1.5 bg-[#FFB74D] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {playLearnModules.map((item, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16`}>
              
              {/* Photo Side */}
              <div className="md:w-1/2 relative group w-full">
                <div className={`absolute -top-3 -left-3 ${item.color} w-full h-full rounded-[2rem] -z-10 opacity-20`}></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="rounded-[2rem] shadow-xl border-4 border-white w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className={`absolute top-6 left-6 ${item.color} text-white px-5 py-1.5 rounded-full font-black shadow-lg text-xs uppercase tracking-widest`}>
                  {item.tag}
                </div>
              </div>

              {/* Text Side */}
              <div className="md:w-1/2 text-left space-y-4 md:space-y-6">
                <h3 className={`font-black uppercase tracking-[0.25em] text-xs md:text-sm text-[#00BCD4]`}>{item.method}</h3>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">{item.title}</h2>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center gap-3 text-[#673AB7] font-bold">
                  <span className="text-xl">✨</span>
                  <span className="text-sm md:text-base italic">Joyful, safe, and activity-based environment for toddlers.</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. FINAL CALL TO ACTION (Matched Styling) */}
      <section className="bg-[#1A202C] py-16 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-black mb-6 text-[#00BCD4]">Start Your Child's Journey Today</h2>
          <p className="text-base md:text-lg text-gray-400 mb-10 max-w-xl mx-auto px-4 font-medium">
            Enroll your little one in our 2025-26 Play-Way session. Experience our safe 
            and vibrant campus at Gram Patna Tamoli, Panna.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-6">
            <button className="bg-[#FF5E5E] text-white px-10 py-4 rounded-full font-black shadow-lg hover:bg-red-600 transition tracking-widest uppercase text-sm">
              Apply Now
            </button>
            <button className="bg-[#00BCD4] text-white px-10 py-4 rounded-full font-black shadow-lg hover:bg-cyan-500 transition tracking-widest uppercase text-sm">
              Contact Desk
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PlayAndLearnPage;
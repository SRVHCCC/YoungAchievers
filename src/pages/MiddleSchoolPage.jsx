import React from "react";

const middleSchoolModules = [
  {
    title: "Advanced Concepts",
    method: "Depth-First Learning",
    description: "In Middle School, we move beyond the basics. We focus on in-depth understanding of complex scientific theories and mathematical logic to prepare students for high school challenges.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    tag: "Analytical Thinking",
    color: "bg-[#673AB7]" // Purple
  },
  {
    title: "Academic Discipline",
    method: "Structured Responsibility",
    description: "We instill a sense of accountability and time management. Our structured environment ensures that students develop the focus and consistency required for lifelong success.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    tag: "Self-Discipline",
    color: "bg-[#FFB74D]" // Orange
  },
  {
    title: "Scientific Temper",
    method: "Inquiry & Research",
    description: "Students are encouraged to analyze data and perform structured experiments. We foster a mindset that questions 'why' and seeks evidence-based answers.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    tag: "Science & Lab",
    color: "bg-[#FF5E5E]" // Red
  },
  {
    title: "Digital Leadership",
    method: "Advanced IT Skills",
    description: "Moving from basic computer literacy to digital creation. Students learn to use technology for research, presentation, and fundamental coding logic.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    tag: "Future Ready",
    color: "bg-[#00BCD4]" // Cyan
  },
  {
    title: "Character Building",
    method: "Ethics & Values",
    description: "Beyond textbooks, we focus on communication skills and emotional intelligence. We aim to build responsible, ethical, and confident young leaders.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80",
    tag: "Personality Dev",
    color: "bg-[#4DD0E1]" // Light Cyan
  }
];

const MiddleSchoolPage = () => {
  return (
    <div className="font-sans text-slate-800 bg-white">

      {/* 1. COMPACT HERO SECTION (Matched to PlayAndLearn & Primary) */}
      <section className="bg-[#fdfcf8] py-12 md:py-16 text-center border-b border-stone-200 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight text-slate-900">
            Middle School: <br className="hidden md:block" /> 
            <span className="text-[#00BCD4]">Class 6 – 8</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-medium text-slate-500 leading-relaxed">
            Strengthening academic concepts while fostering discipline, 
            responsibility, and analytical thinking for the next generation.
          </p>
        </div>
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#4FC3F7]/10 rounded-full"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-stone-100 rounded-full"></div>
      </section>

      {/* 2. ACADEMIC MODULES (Matched Photo-Story Style) */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">Academic Core</h2>
          <div className="w-20 h-1.5 bg-[#FFB74D] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {middleSchoolModules.map((item, index) => (
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
                  <span className="text-sm md:text-base italic uppercase tracking-tighter">Transitioning from learning to mastery.</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. FINAL CALL TO ACTION (Matched Styling) */}
      <section className="bg-[#1A202C] py-16 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-black mb-6 text-[#00BCD4]">Empower Your Child's Future</h2>
          <p className="text-base md:text-lg text-gray-400 mb-10 max-w-xl mx-auto px-4 font-medium">
            Join the 2025-26 Academic Session. Middle School is the foundation for future professional success. 
            Secure your seat at Young Achievers, Panna.
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

export default MiddleSchoolPage;
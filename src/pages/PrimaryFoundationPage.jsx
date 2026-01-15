import React from "react";

const primaryFeatures = [
  {
    title: "Core Foundation",
    description: "In-depth focus on English, Math, and Science to build strong fundamental knowledge.",
    icon: "📘",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Critical Thinking",
    description: "Moving beyond memorization to help students understand the 'How' and 'Why' of every topic.",
    icon: "🧠",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Confident Expression",
    description: "Daily reading and public speaking exercises to develop bilingual communication skills.",
    icon: "🗣️",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hands-on Learning",
    description: "Monthly projects and basic lab activities that make learning practical and engaging.",
    icon: "🧩",
    image: "https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?auto=format&fit=crop&w=600&q=80"
  }
];

const PrimaryFoundationPage = () => {
  return (
    <div className="font-sans text-slate-700 bg-white">
      
      {/* 1. REFINED BANNER */}
      <section className="bg-[#fdfcf8] py-20 border-b border-stone-200 text-center">
        <div className="container mx-auto px-6">
          <span className="text-[#334155] font-bold tracking-[0.2em] uppercase text-xs">Excellence in Education</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mt-4 text-slate-900 italic">
            Primary Foundation
          </h1>
          <div className="w-16 h-1 bg-stone-300 mx-auto my-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Nurturing young minds through a curriculum designed to foster academic rigor and emotional intelligence for Classes 1 to 5.
          </p>
        </div>
      </section>

      {/* 2. CORE FOCUS AREA */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Academic Pillars</h2>
            <p className="text-slate-500">Our primary wing focuses on four essential quadrants of development that prepare students for middle school and beyond.</p>
          </div>
          <div className="hidden md:block h-px bg-stone-200 flex-grow mx-10 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {primaryFeatures.map((item, index) => (
            <div key={index} className="group relative">
              <div className="overflow-hidden rounded-2xl aspect-video mb-6">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex gap-6">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. NEW SECTION: SUBJECT ROADMAP (Bda karne ke liye) */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Structured Curriculum</h2>
            <p className="text-slate-500 mt-2">Subjects mapped to holistic cognitive growth.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Languages", list: ["English Literature", "Hindi Vyakaran", "Phonics Mastery"] },
              { title: "Sciences", list: ["General Science", "EVS Projects", "Nature Observation"] },
              { title: "Numeracy", list: ["Mental Math", "Geometry Basics", "Data Handling"] },
              { title: "Digital Literacy", list: ["Basic Computing", "Logic Games", "Smart Board Interaction"] }
            ].map((box, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-stone-200">
                <h4 className="font-bold text-slate-900 mb-4 border-b border-stone-100 pb-2">{box.title}</h4>
                <ul className="space-y-3">
                  {box.list.map((item, j) => (
                    <li key={j} className="text-sm text-slate-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEW SECTION: CLASSROOM ENVIRONMENT */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Modern Learning <br/>Environment</h2>
            <div className="space-y-8">
              {[
                { t: "1:25 Teacher Ratio", d: "Personalized attention ensures no student is left behind in the learning curve." },
                { t: "Smart Class Integration", d: "Visual aids and interactive digital tools used for complex topic simplification." },
                { t: "Safe & Disciplined", d: "A respectful atmosphere where discipline is taught through positive reinforcement." }
              ].map((point, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold">{i+1}</div>
                  <div>
                    <h5 className="font-bold text-slate-800 mb-1">{point.t}</h5>
                    <p className="text-sm text-slate-500 leading-relaxed">{point.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1000&q=80" 
                className="rounded-3xl shadow-sm z-10 relative" 
                alt="Interactive learning" 
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-stone-100 -z-0 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section className="bg-slate-900 py-20 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif italic mb-6 text-stone-200 italic">Secure your child's future today.</h2>
          <p className="text-slate-400 mb-10 max-w-lg mx-auto">Registration for the 2025-26 Academic Session is now open for Classes 1 to 5.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 font-bold tracking-widest uppercase text-xs">
            <button className="bg-white text-slate-900 px-10 py-4 rounded-full hover:bg-stone-200 transition duration-300">
              Apply Now
            </button>
            <button className="border border-stone-700 text-white px-10 py-4 rounded-full hover:bg-slate-800 transition duration-300">
              Download Syllabus
            </button>
          </div>
          <p className="mt-12 text-slate-500 text-sm">📍 Gram Patna Tamoli, Panna | 📞 +91 87706 98713</p>
        </div>
      </section>

    </div>
  );
};

export default PrimaryFoundationPage;
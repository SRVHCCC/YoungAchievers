import React from 'react';

const AboutPage = () => {
  return (
    <div className="font-sans text-slate-800 bg-white">
      
      {/* 1. HERO BANNER - Original Blue/Cyan Theme */}
      <section className="bg-[#4FC3F7] py-16 text-center text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Young Achievers
          </h1>
          <p className="text-lg opacity-90 font-medium">
            Shaping Young Minds in Patna Tamoli (Panna)
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-white/10 rounded-full -translate-x-12 -translate-y-12"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-black/5 rounded-full translate-x-10 translate-y-10"></div>
      </section>

      {/* 2. SCHOOL INTRODUCTION - Photo Story Layout */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Photo Side with Original Orange Accent */}
          <div className="lg:w-1/2 relative group w-full">
            <div className="absolute -top-3 -left-3 bg-[#FFB74D] w-full h-full rounded-[2rem] -z-10 opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
              alt="School Campus"
              className="rounded-[2rem] shadow-xl border-4 border-white w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {/* Original Red Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#FF5E5E] text-white p-6 rounded-full w-32 h-32 flex flex-col justify-center items-center font-bold text-center border-4 border-white rotate-12 shadow-lg">
              <span className="text-2xl">2025</span>
              <span className="text-xs uppercase">Est. Year</span>
            </div>
          </div>

          {/* Text Side - Professional & Readable */}
          <div className="lg:w-1/2 text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7] leading-tight">
              Welcome to the <br/> New Era of Excellence
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong className="text-slate-900">Young Achievers English Medium School</strong> is a newly established educational institution launched in 2025. Located in Gram Patna Tamoli, District Panna, we provide a modern learning environment for children from <strong>Nursery to Class 8</strong>.
              </p>
              <p>
                Our school is built on the philosophy of discipline, safety, and concept-based education. We aim to make quality English-medium education accessible to every child in the region.
              </p>
            </div>
            <div className="flex items-center gap-3 text-[#4FC3F7] font-bold">
              <span className="text-2xl">✔</span>
              <span>NCERT Based English Medium Curriculum</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES GRID - Original Vibrant Colors */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#673AB7]">Why Choose Us?</h2>
            <div className="w-20 h-1.5 bg-[#FFB74D] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Cyan */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border-t-8 border-[#4FC3F7] hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-xl mb-3 text-[#4FC3F7]">Modern Curriculum</h4>
              <p className="text-gray-500 text-sm leading-relaxed">NCERT based English Medium pattern with a focus on conceptual understanding instead of rote learning.</p>
            </div>

            {/* Feature 2 - Red */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border-t-8 border-[#FF5E5E] hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-xl mb-3 text-[#FF5E5E]">Safe & Secure</h4>
              <p className="text-gray-500 text-sm leading-relaxed">A child-friendly campus with proper supervision and a disciplined atmosphere for every student.</p>
            </div>

            {/* Feature 3 - Orange */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border-t-8 border-[#FFB74D] hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-xl mb-3 text-[#FFB74D]">Expert Faculty</h4>
              <p className="text-gray-500 text-sm leading-relaxed">A team of qualified teachers dedicated to the overall personality development of every child.</p>
            </div>

            {/* Feature 4 - Purple */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border-t-8 border-[#673AB7] hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-xl mb-3 text-[#673AB7]">Holistic Growth</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Focus on moral values, sports, and activity-based learning to build confidence in children.</p>
            </div>

            {/* Feature 5 - Cyan Dark */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border-t-8 border-[#00BCD4] hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-xl mb-3 text-[#00BCD4]">Smart Classes</h4>
              <p className="text-gray-500 text-sm leading-relaxed">New infrastructure designed in 2025 to provide the best facilities for digital and smart learning.</p>
            </div>

            {/* Feature 6 - Gray/Neutral */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border-t-8 border-gray-400 hover:shadow-xl transition-shadow">
              <h4 className="font-bold text-xl mb-3 text-gray-700">Admission Open</h4>
              <p className="text-gray-500 text-sm leading-relaxed">Accepting inquiries for session 2025-26 from Nursery to Class 8. Visit us for a campus tour.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS SUMMARY - Original Colors */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-bold text-[#FF5E5E]">2025</h3>
            <p className="text-slate-500 text-sm mt-2 uppercase font-bold tracking-widest">Est. Year</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-[#4FC3F7]">30+</h3>
            <p className="text-slate-500 text-sm mt-2 uppercase font-bold tracking-widest">Teachers</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-[#FFB74D]">8+</h3>
            <p className="text-slate-500 text-sm mt-2 uppercase font-bold tracking-widest">Grade Levels</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-[#673AB7]">100%</h3>
            <p className="text-slate-500 text-sm mt-2 uppercase font-bold tracking-widest">Dedication</p>
          </div>
        </div>
      </section>

      {/* 5. QUICK CONTACT INFO - Purple Theme */}
      <section className="bg-[#673AB7] py-16 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 uppercase tracking-wide">Visit Young Achievers Today</h2>
          <p className="mb-10 opacity-90 font-medium">Gram Patna Tamoli, District Panna, Madhya Pradesh - 488333</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:+918770698713" className="bg-[#FF5E5E] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-red-600 transition uppercase tracking-wider text-sm">
              Call: +91 87706 98713
            </a>
            <a href="mailto:info@youngachievers.com" className="bg-[#4FC3F7] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-cyan-500 transition uppercase tracking-wider text-sm">
              Email Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
import React from 'react';

const AboutPage = () => {
  return (
    <div className="font-sans">

      {/* ================= BANNER ================= */}
      <section className="bg-[#4FC3F7] py-16 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">About Young Achievers</h1>
        <p className="text-lg opacity-90">
          Building strong foundations from Nursery to Class 8
        </p>
      </section>

      {/* ================= ABOUT STORY ================= */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">

        {/* Image */}
        <div className="md:w-1/2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
              alt="Young Achievers School"
              className="rounded-3xl border-8 border-[#FFB74D] shadow-xl"
            />

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#FF5E5E] text-white p-6 rounded-full w-32 h-32 flex flex-col justify-center items-center font-bold text-center border-4 border-white rotate-12">
              <span className="text-2xl">15+</span>
              <span className="text-xs">Years of Excellence</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="md:w-1/2">
          <h2 className="text-[#673AB7] text-4xl font-bold mb-6">
            Our Vision & Philosophy
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            <strong>Young Achievers</strong> is an English Medium school committed to
            nurturing young minds in a safe, disciplined and supportive environment.
            We focus on academic excellence, moral values and personality development
            from Nursery to Class 8.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Our teaching approach combines concept-based learning, activity-driven
            classrooms and continuous assessment to help every child grow with confidence.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="bg-[#4DD0E1] text-white p-1 rounded-full text-xs">✔</span>
              <span className="font-semibold text-gray-700">
                Qualified & Experienced Teaching Staff
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="bg-[#FF5E5E] text-white p-1 rounded-full text-xs">✔</span>
              <span className="font-semibold text-gray-700">
                Activity-Based & Concept-Focused Learning
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="bg-[#FFB74D] text-white p-1 rounded-full text-xs">✔</span>
              <span className="font-semibold text-gray-700">
                Safe, Secure & Child-Friendly Campus
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="bg-[#673AB7] text-white p-1 rounded-full text-xs">✔</span>
              <span className="font-semibold text-gray-700">
                Focus on Discipline, Values & Overall Development
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-4xl font-bold text-[#FF5E5E]">300+</h3>
            <p className="text-gray-500 uppercase text-sm font-bold mt-2">
              Students Enrolled
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#4FC3F7]">30+</h3>
            <p className="text-gray-500 uppercase text-sm font-bold mt-2">
              Experienced Teachers
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#FFB74D]">15+</h3>
            <p className="text-gray-500 uppercase text-sm font-bold mt-2">
              Years of Excellence
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#673AB7]">100%</h3>
            <p className="text-gray-500 uppercase text-sm font-bold mt-2">
              Parent Satisfaction
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;

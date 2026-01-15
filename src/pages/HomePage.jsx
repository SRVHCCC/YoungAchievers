import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main className="relative">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[650px] bg-[#4FC3F7] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=80" 
          alt="Young Achievers School"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-end pr-20 text-right bg-gradient-to-l from-white/40 to-transparent">
          <h2 className="text-[#FF5E5E] text-2xl font-bold italic">
            English Medium School (Nursery – Class 8)
          </h2>

          <h1 className="text-7xl font-bold text-white mt-2 drop-shadow-lg">
            Young Achievers
          </h1>

          <p className="max-w-md mt-4 text-gray-800 font-medium">
            A safe, caring and modern learning environment focused on academic excellence,
            discipline and overall child development.
          </p>

          <div className="flex gap-4 mt-8">
            <Link
              to="/admissions"
              className="bg-[#FF5E5E] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#e14d4d] transition transform hover:scale-105"
            >
              Admission Open 2025–26
            </Link>

            <Link
              to="/contact"
              className="bg-[#673AB7] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#5a32a3] transition transform hover:scale-105"
            >
              Book Campus Visit
            </Link>
          </div>
        </div>
      </section>

      {/* ================= KEY HIGHLIGHTS ================= */}
      <section className="container mx-auto px-4 -mt-32 relative z-10 grid grid-cols-1 md:grid-cols-3 shadow-2xl">

        <div className="bg-[#FF5E5E] text-white p-8">
          <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=400&q=80"
            className="w-full h-48 object-cover mb-6 border-4 border-white/20"
            alt="Learning Environment" />
          <h3 className="text-2xl font-bold mb-4">Activity-Based Learning</h3>
          <p className="text-sm mb-6">
            Hands-on teaching methods that improve understanding, confidence and curiosity.
          </p>
        </div>

        <div className="bg-[#FFB74D] text-white p-8">
          <img src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&w=400&q=80"
            className="w-full h-48 object-cover mb-6 border-4 border-white/20"
            alt="Curriculum" />
          <h3 className="text-2xl font-bold mb-4">Strong Academic Foundation</h3>
          <p className="text-sm mb-6">
            English Medium education with focus on reading, writing, math and logical thinking.
          </p>
        </div>

        <div className="bg-[#4DD0E1] text-white p-8">
          <img src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=400&q=80"
            className="w-full h-48 object-cover mb-6 border-4 border-white/20"
            alt="Sports & Activities" />
          <h3 className="text-2xl font-bold mb-4">Sports & Activities</h3>
          <p className="text-sm mb-6">
            Physical fitness, games, art and cultural activities for overall growth.
          </p>
        </div>

      </section>

      {/* ================= WELCOME SECTION ================= */}
      <section className="py-20 text-center container mx-auto px-6">
        <h2 className="text-[#4DD0E1] text-5xl font-bold">
          Welcome to Young Achievers
        </h2>
        <div className="w-24 h-1 bg-[#FF5E5E] mx-auto mt-4"></div>

        <p className="max-w-3xl mx-auto mt-8 text-gray-600 leading-relaxed text-lg">
          Young Achievers is an English Medium school committed to nurturing young minds
          from Nursery to Class 8. We focus on academic excellence, moral values,
          discipline and confidence building in a safe and supportive environment.
        </p>
      </section>

      {/* ================= ACADEMIC STRUCTURE ================= */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
              className="rounded-3xl shadow-xl border-8 border-white"
              alt="Classroom" />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-[#673AB7] text-3xl font-bold mb-6">
              Complete Schooling (Nursery – Class 8)
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>🐣 Play-based learning for Nursery – UKG</li>
              <li>📚 Strong foundation for Class 1 – 5</li>
              <li>🎓 Concept clarity & personality development for Class 6 – 8</li>
            </ul>

            <Link to="/admissions" className="inline-block mt-8 text-[#FF5E5E] font-bold border-b-2 border-[#FF5E5E]">
              View Admission Details →
            </Link>
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-[#673AB7] text-4xl font-bold mb-12">
            Why Parents Choose Young Achievers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>🏫 Smart Classrooms</div>
            <div>👨‍🏫 Experienced Teachers</div>
            <div>🛡 Safe & Disciplined Campus</div>
            <div>🏆 Overall Child Development</div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#673AB7] py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">
          Admissions Open for 2025–26
        </h2>

        <Link
          to="/admissions"
          className="bg-[#00BCD4] px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-[#00BCD4] transition"
        >
          Apply for Admission
        </Link>
      </section>

    </main>
  );
};

export default HomePage;

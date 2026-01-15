import React from "react";

const middleSchoolFeatures = [
  {
    title: "Concept-Based Learning",
    description:
      "Strong focus on understanding concepts deeply rather than rote memorization.",
    icon: "🧠"
  },
  {
    title: "Academic Discipline",
    description:
      "Structured learning environment that promotes focus, responsibility and consistency.",
    icon: "📏"
  },
  {
    title: "Critical Thinking",
    description:
      "Encouraging students to analyze, question and apply knowledge practically.",
    icon: "💡"
  },
  {
    title: "Personality Development",
    description:
      "Focus on confidence, communication skills and leadership qualities.",
    icon: "🎯"
  }
];

const MiddleSchoolPage = () => {
  return (
    <div className="font-sans">

      {/* ===== Banner ===== */}
      <section className="bg-[#4FC3F7] py-16 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Class 6 – 8 | Concept & Discipline
        </h1>
        <p className="text-lg opacity-90">
          Preparing students for higher education and life skills
        </p>
      </section>

      {/* ===== Introduction ===== */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80"
            alt="Middle School Classroom"
            className="rounded-3xl shadow-xl border-8 border-white"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2">
          <h2 className="text-[#673AB7] text-4xl font-bold mb-6">
            Building Strong Concepts with Discipline
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At <strong>Young Achievers</strong>, our Middle School program
            (Class 6 – 8) is designed to strengthen academic concepts
            while developing discipline, responsibility and self-confidence.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Students are guided to think independently, manage their time
            effectively and develop a strong sense of accountability.
          </p>
        </div>
      </section>

      {/* ===== Key Features ===== */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#673AB7] mb-12">
            Our Middle School Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {middleSchoolFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Subjects Offered ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#673AB7] mb-6">
            Subjects We Offer
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mb-12">
            Our curriculum ensures a balanced and in-depth understanding
            of all core subjects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="p-4 border rounded-xl">English</div>
            <div className="p-4 border rounded-xl">Mathematics</div>
            <div className="p-4 border rounded-xl">Science</div>
            <div className="p-4 border rounded-xl">Social Science</div>
            <div className="p-4 border rounded-xl">Computer Science</div>
            <div className="p-4 border rounded-xl">Moral Education</div>
          </div>
        </div>
      </section>

      {/* ===== Discipline & Values ===== */}
      <section className="bg-[#673AB7] py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Discipline, Values & Responsibility
        </h2>
        <p className="max-w-2xl mx-auto opacity-90">
          Our school culture emphasizes punctuality, respect, discipline
          and ethical values to help students grow into responsible individuals.
        </p>
      </section>

    </div>
  );
};

export default MiddleSchoolPage;

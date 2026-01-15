import React from "react";

const primaryFeatures = [
  {
    title: "Strong Academic Foundation",
    description:
      "Focus on core subjects like English, Mathematics, EVS and Science to build strong fundamentals.",
    icon: "📘"
  },
  {
    title: "Concept-Based Learning",
    description:
      "Teaching methods that focus on understanding concepts instead of rote learning.",
    icon: "🧠"
  },
  {
    title: "Reading & Writing Skills",
    description:
      "Regular reading, writing and speaking activities to improve language skills.",
    icon: "✍️"
  },
  {
    title: "Activity & Project Work",
    description:
      "Hands-on projects and activities to make learning interesting and practical.",
    icon: "🧩"
  }
];

const PrimaryFoundationPage = () => {
  return (
    <div className="font-sans">

      {/* ===== Banner ===== */}
      <section className="bg-[#4FC3F7] py-16 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Class 1 – 5 | Strong Foundation
        </h1>
        <p className="text-lg opacity-90">
          Building strong basics for lifelong learning
        </p>
      </section>

      {/* ===== Introduction ===== */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80"
            alt="Primary Classroom"
            className="rounded-3xl shadow-xl border-8 border-white"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2">
          <h2 className="text-[#673AB7] text-4xl font-bold mb-6">
            A Strong Start for Academic Success
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At <strong>Young Achievers</strong>, our Primary School program
            (Class 1 – 5) focuses on building a strong academic foundation
            while nurturing curiosity, discipline and confidence.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Students are encouraged to ask questions, think logically and
            express themselves clearly through interactive classroom learning.
          </p>
        </div>
      </section>

      {/* ===== Key Features ===== */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#673AB7] mb-12">
            Our Learning Approach (Class 1 – 5)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {primaryFeatures.map((item, index) => (
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
            Subjects We Teach
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mb-12">
            Our curriculum covers essential subjects required for academic
            and personal development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="p-4 border rounded-xl">English</div>
            <div className="p-4 border rounded-xl">Mathematics</div>
            <div className="p-4 border rounded-xl">EVS</div>
            <div className="p-4 border rounded-xl">Science</div>
            <div className="p-4 border rounded-xl">Computer Studies</div>
          </div>
        </div>
      </section>

      {/* ===== Skill Development ===== */}
      <section className="bg-[#673AB7] py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Beyond Academics
        </h2>
        <p className="max-w-2xl mx-auto opacity-90">
          We also focus on communication skills, moral values,
          discipline, teamwork and creative thinking to support
          overall child development.
        </p>
      </section>

    </div>
  );
};

export default PrimaryFoundationPage;

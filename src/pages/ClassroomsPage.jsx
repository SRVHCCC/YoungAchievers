import React from "react";

const classrooms = [
  {
    title: "Pre-Primary Classrooms (Nursery – UKG)",
    description:
      "Our pre-primary classrooms are colorful, safe and activity-based. Designed to encourage curiosity, communication and early learning through play.",
    points: [
      "Play-based & joyful learning",
      "Phonics & basic numeracy",
      "Child-friendly furniture",
      "Personal attention to every child"
    ],
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Primary Classrooms (Class 1 – 5)",
    description:
      "Primary classrooms focus on strong academic foundations with interactive teaching methods that make learning engaging and effective.",
    points: [
      "Smart classroom learning",
      "Strong focus on English & Mathematics",
      "Interactive teaching methods",
      "Regular assessments & feedback"
    ],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Middle School Classrooms (Class 6 – 8)",
    description:
      "Middle school classrooms encourage concept clarity, discipline and independent thinking to prepare students for higher education.",
    points: [
      "Concept-based learning",
      "Science & computer education",
      "Personality & leadership development",
      "Focus on discipline and responsibility"
    ],
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=900&q=80"
  }
];

const ClassroomsPage = () => {
  return (
    <div className="font-sans">

      {/* ===== Banner ===== */}
      <section className="bg-[#4FC3F7] py-16 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Our Classrooms</h1>
        <p className="text-lg opacity-90">
          Safe, engaging and well-equipped learning spaces
        </p>
      </section>

      {/* ===== Classrooms Sections ===== */}
      <section className="container mx-auto px-6 py-20 space-y-24">
        {classrooms.map((room, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-12`}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={room.image}
                alt={room.title}
                className="rounded-3xl shadow-xl border-8 border-white"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2">
              <h2 className="text-[#673AB7] text-3xl font-bold mb-4">
                {room.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {room.description}
              </p>

              <ul className="space-y-3">
                {room.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#FF5E5E] font-bold">✔</span>
                    <span className="text-gray-700 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* ===== Safety & Environment ===== */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#673AB7] mb-6">
            Safe & Student-Friendly Environment
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-12">
            All classrooms at Young Achievers are designed keeping student safety,
            comfort and effective learning in mind. We maintain a disciplined,
            clean and positive atmosphere for every child.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow">
              🪑
              <h4 className="font-bold mt-3">Comfortable Seating</h4>
              <p className="text-sm text-gray-500 mt-2">
                Age-appropriate furniture for students
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              📽
              <h4 className="font-bold mt-3">Smart Teaching Aids</h4>
              <p className="text-sm text-gray-500 mt-2">
                Digital & visual learning support
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              🧼
              <h4 className="font-bold mt-3">Clean & Hygienic</h4>
              <p className="text-sm text-gray-500 mt-2">
                Daily cleanliness & hygiene standards
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow">
              🛡
              <h4 className="font-bold mt-3">Safe & Secure</h4>
              <p className="text-sm text-gray-500 mt-2">
                Supervised classrooms & disciplined environment
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ClassroomsPage;

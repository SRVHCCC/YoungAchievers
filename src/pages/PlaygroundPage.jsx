import React from "react";

const playgroundFeatures = [
  {
    title: "Safe & Secure Area",
    description:
      "Our playground is fully secured and supervised to ensure complete safety of students during playtime.",
    icon: "🛡"
  },
  {
    title: "Age-Appropriate Equipment",
    description:
      "Different play equipment designed specially for Nursery, Primary and Middle school students.",
    icon: "🧸"
  },
  {
    title: "Physical Fitness",
    description:
      "Regular outdoor activities help improve strength, coordination and overall health.",
    icon: "🏃"
  },
  {
    title: "Teamwork & Discipline",
    description:
      "Sports and group games help children learn teamwork, leadership and discipline.",
    icon: "🤝"
  }
];

const PlaygroundPage = () => {
  return (
    <div className="font-sans">

      {/* ===== Banner ===== */}
      <section className="bg-[#4FC3F7] py-16 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">School Playground</h1>
        <p className="text-lg opacity-90">
          Where learning meets fun and fitness
        </p>
      </section>

      {/* ===== Main Content ===== */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=900&q=80"
            alt="School Playground"
            className="rounded-3xl shadow-xl border-8 border-white"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2">
          <h2 className="text-[#673AB7] text-4xl font-bold mb-6">
            A Healthy & Happy Play Environment
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At <strong>Young Achievers</strong>, we believe that outdoor play is
            an essential part of a child’s growth. Our playground is designed
            to encourage physical fitness, confidence and social skills in a
            safe and joyful environment.
          </p>

          <p className="text-gray-600 leading-relaxed">
            From Nursery to Class 8, students are given regular opportunities
            to participate in outdoor games, sports activities and free play
            under proper supervision.
          </p>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#673AB7] mb-12">
            Playground Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {playgroundFeatures.map((item, index) => (
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

      {/* ===== Activities Section ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#673AB7] mb-6">
            Outdoor Activities We Offer
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mb-12">
            Our playground activities are planned according to the age group
            to ensure safety, enjoyment and skill development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-2xl">
              🐣
              <h4 className="font-bold mt-3">Nursery – UKG</h4>
              <p className="text-sm text-gray-500 mt-2">
                Slides, swings, balancing games and free play
              </p>
            </div>
            <div className="p-6 border rounded-2xl">
              ⚽
              <h4 className="font-bold mt-3">Class 1 – 5</h4>
              <p className="text-sm text-gray-500 mt-2">
                Running games, basic sports and group activities
              </p>
            </div>
            <div className="p-6 border rounded-2xl">
              🏏
              <h4 className="font-bold mt-3">Class 6 – 8</h4>
              <p className="text-sm text-gray-500 mt-2">
                Cricket, football, physical training and fitness activities
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PlaygroundPage;

import React from "react";

const playLearnFeatures = [
  {
    title: "Play-Based Learning",
    description:
      "Learning through fun activities, games and stories that build curiosity and confidence.",
    icon: "🎈"
  },
  {
    title: "Phonics & Early Literacy",
    description:
      "Focus on sounds, letters and basic vocabulary to build a strong reading foundation.",
    icon: "🔤"
  },
  {
    title: "Motor Skill Development",
    description:
      "Activities designed to improve fine and gross motor skills in young children.",
    icon: "✋"
  },
  {
    title: "Safe & Caring Environment",
    description:
      "Child-friendly classrooms with close teacher supervision and personal attention.",
    icon: "🧸"
  }
];

const PlayAndLearnPage = () => {
  return (
    <div className="font-sans">

      {/* ===== Banner ===== */}
      <section className="bg-[#4FC3F7] py-16 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Nursery – UKG | Play & Learn
        </h1>
        <p className="text-lg opacity-90">
          A joyful beginning to your child’s learning journey
        </p>
      </section>

      {/* ===== Introduction Section ===== */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80"
            alt="Nursery Classroom"
            className="rounded-3xl shadow-xl border-8 border-white"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2">
          <h2 className="text-[#673AB7] text-4xl font-bold mb-6">
            Where Learning Begins with Fun
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At <strong>Young Achievers</strong>, our Nursery, LKG and UKG program
            focuses on learning through play. We believe that young children learn
            best when they feel happy, safe and engaged.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our Play & Learn curriculum helps children develop early literacy,
            numeracy, communication skills and social values in a joyful environment.
          </p>
        </div>
      </section>

      {/* ===== Key Features ===== */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#673AB7] mb-12">
            Our Play & Learn Approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {playLearnFeatures.map((item, index) => (
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

      {/* ===== Daily Activities ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#673AB7] mb-6">
            Daily Activities for Nursery – UKG
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mb-12">
            Our daily schedule is carefully designed to balance learning, play
            and rest for young children.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-2xl">
              🎵
              <h4 className="font-bold mt-3">Rhymes & Music</h4>
              <p className="text-sm text-gray-500 mt-2">
                Songs, actions and rhythm activities
              </p>
            </div>
            <div className="p-6 border rounded-2xl">
              🎨
              <h4 className="font-bold mt-3">Art & Craft</h4>
              <p className="text-sm text-gray-500 mt-2">
                Drawing, coloring and creative activities
              </p>
            </div>
            <div className="p-6 border rounded-2xl">
              📖
              <h4 className="font-bold mt-3">Story Time</h4>
              <p className="text-sm text-gray-500 mt-2">
                Listening, imagination and language development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Safety & Care ===== */}
      <section className="bg-[#673AB7] py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          A Safe, Caring & Child-Friendly Environment
        </h2>
        <p className="max-w-2xl mx-auto opacity-90">
          Our Nursery – UKG classrooms are designed to ensure safety, comfort and
          emotional well-being of every child with caring teachers and close supervision.
        </p>
      </section>

    </div>
  );
};

export default PlayAndLearnPage;

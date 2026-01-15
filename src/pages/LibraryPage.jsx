import React from "react";

const libraryFeatures = [
  {
    title: "Well-Stocked Library",
    description:
      "Our library has a wide collection of story books, reference books and academic resources suitable for all age groups.",
    icon: "📚"
  },
  {
    title: "Age-Wise Sections",
    description:
      "Separate reading materials for Nursery, Primary and Middle school students.",
    icon: "🧒"
  },
  {
    title: "Quiet & Disciplined Environment",
    description:
      "A calm reading space that helps students develop focus and concentration.",
    icon: "🤫"
  },
  {
    title: "Reading Habit Development",
    description:
      "Regular library periods to encourage reading, curiosity and self-learning.",
    icon: "🌱"
  }
];

const LibraryPage = () => {
  return (
    <div className="font-sans">

      {/* ===== Banner ===== */}
      <section className="bg-[#4FC3F7] py-16 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">School Library</h1>
        <p className="text-lg opacity-90">
          Building knowledge, imagination and curiosity
        </p>
      </section>

      {/* ===== Main Content ===== */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80"
            alt="School Library"
            className="rounded-3xl shadow-xl border-8 border-white"
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2">
          <h2 className="text-[#673AB7] text-4xl font-bold mb-6">
            A World of Books for Every Child
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At <strong>Young Achievers</strong>, the library plays an important role
            in developing reading habits and expanding knowledge from an early age.
            Students from Nursery to Class 8 are encouraged to explore books beyond
            their textbooks.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our library provides a peaceful and well-organized environment where
            children can read, learn and develop a love for knowledge.
          </p>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#673AB7] mb-12">
            Library Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {libraryFeatures.map((item, index) => (
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

      {/* ===== Age-Wise Reading ===== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#673AB7] mb-6">
            Reading for Every Age Group
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 mb-12">
            Our library resources are carefully selected to suit the reading
            level and learning needs of every student.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-2xl">
              🐣
              <h4 className="font-bold mt-3">Nursery – UKG</h4>
              <p className="text-sm text-gray-500 mt-2">
                Picture books, story books and early reading materials
              </p>
            </div>
            <div className="p-6 border rounded-2xl">
              📘
              <h4 className="font-bold mt-3">Class 1 – 5</h4>
              <p className="text-sm text-gray-500 mt-2">
                Story books, general knowledge and subject-based books
              </p>
            </div>
            <div className="p-6 border rounded-2xl">
              📗
              <h4 className="font-bold mt-3">Class 6 – 8</h4>
              <p className="text-sm text-gray-500 mt-2">
                Reference books, novels and academic resources
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LibraryPage;

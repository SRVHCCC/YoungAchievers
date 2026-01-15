import React from "react";

const galleryData = [
  {
    title: "Classroom Activities",
    images: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      "https://images.unsplash.com/photo-1588072432836-e10032774350",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
    ]
  },
  {
    title: "Sports & Games",
    images: [
      "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf"
    ]
  },
  {
    title: "Art & Creative Activities",
    images: [
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
    ]
  },
  {
    title: "School Events & Celebrations",
    images: [
      "https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc",
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7"
    ]
  }
];

const GalleryPage = () => {
  return (
    <div className="font-sans">

      {/* ===== Banner ===== */}
      <section className="bg-[#4FC3F7] py-16 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">School Gallery</h1>
        <p className="text-lg opacity-90">
          A glimpse of life at Young Achievers
        </p>
      </section>

      {/* ===== Gallery Sections ===== */}
      <section className="container mx-auto px-6 py-20">
        {galleryData.map((section, idx) => (
          <div key={idx} className="mb-16">

            <h2 className="text-3xl font-bold text-[#673AB7] mb-8 text-center">
              {section.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.images.map((img, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl shadow-lg"
                >
                  <img
                    src={`${img}?auto=format&fit=crop&w=800&q=80`}
                    alt={section.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </section>

    </div>
  );
};

export default GalleryPage;

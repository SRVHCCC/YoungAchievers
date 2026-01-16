import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const GalleryPage = () => {
  const { t } = useTranslation();

  // ✅ Gallery data JSON se
  const galleryData = useMemo(
    () => t("galleryPage.sections", { returnObjects: true }) || [],
    [t]
  );

  // ✅ Tabs JSON se
  const tabs = useMemo(
    () => t("galleryPage.tabs", { returnObjects: true }) || [],
    [t]
  );

  const heroChips = useMemo(
    () => t("galleryPage.hero.chips", { returnObjects: true }) || [],
    [t]
  );

  const [activeTab, setActiveTab] = useState("all");

  // Lightbox modal state
  const [lightbox, setLightbox] = useState({
    open: false,
    img: "",
    title: "",
    index: 0,
    list: [],
  });

  // flatten images for selected tab
  const filteredSections = useMemo(() => {
    if (activeTab === "all") return galleryData;
    return galleryData.filter((s) => s.key === activeTab);
  }, [activeTab, galleryData]);

  const allImagesFlat = useMemo(() => {
    const arr = [];
    filteredSections.forEach((sec) => {
      sec.images.forEach((img) => {
        arr.push({ img, title: sec.title });
      });
    });
    return arr;
  }, [filteredSections]);

  const openLightbox = (clickedImg) => {
    const idx = allImagesFlat.findIndex((x) => x.img === clickedImg);
    const item = allImagesFlat[idx];

    setLightbox({
      open: true,
      img: item.img,
      title: item.title,
      index: idx,
      list: allImagesFlat,
    });
  };

  const closeLightbox = () => {
    setLightbox({ open: false, img: "", title: "", index: 0, list: [] });
  };

  const nextImg = () => {
    const nextIndex = (lightbox.index + 1) % lightbox.list.length;
    setLightbox((prev) => ({
      ...prev,
      index: nextIndex,
      img: prev.list[nextIndex].img,
      title: prev.list[nextIndex].title,
    }));
  };

  const prevImg = () => {
    const prevIndex =
      (lightbox.index - 1 + lightbox.list.length) % lightbox.list.length;
    setLightbox((prev) => ({
      ...prev,
      index: prevIndex,
      img: prev.list[prevIndex].img,
      title: prev.list[prevIndex].title,
    }));
  };

  return (
    <div className="font-sans bg-white text-slate-800">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-[#673AB7] via-[#4FC3F7] to-[#FFB74D] py-20 md:py-24 text-white">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex flex-wrap justify-center gap-2 mb-6">
              {heroChips.map((chip, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-white/15 border border-white/20 text-xs font-bold uppercase tracking-widest"
                >
                  {chip}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              {t("galleryPage.hero.title")}
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl opacity-90 font-medium leading-relaxed">
              {t("galleryPage.hero.subtitle")}
            </p>
          </div>
        </div>

        <div className="absolute -top-20 -left-20 w-56 h-56 bg-white/15 rounded-full"></div>
        <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-black/10 rounded-full"></div>

        <div className="h-12 bg-white rounded-t-[45px] -mt-10"></div>
      </section>

      {/* ================= FILTER TABS ================= */}
      <section className="container mx-auto px-6 pt-14">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition border
                ${
                  activeTab === tab.key
                    ? "bg-[#00BCD4] text-white border-transparent shadow-md"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* ================= GALLERY GRID ================= */}
      <section className="container mx-auto px-6 py-16">
        {filteredSections.map((section, idx) => (
          <div key={idx} className="mb-16">
            {/* title */}
            <div className="flex items-center justify-center gap-4 mb-10">
              <div
                className="w-10 h-2 rounded-full"
                style={{ backgroundColor: section.accent }}
              />
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 text-center">
                {section.title}
              </h2>
              <div
                className="w-10 h-2 rounded-full"
                style={{ backgroundColor: section.accent }}
              />
            </div>

            {/* grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {section.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(img)}
                  className="group relative overflow-hidden rounded-3xl shadow-sm border bg-white text-left"
                >
                  <img
                    src={`${img}?auto=format&fit=crop&w=1200&q=80`}
                    alt={section.title}
                    className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                  {/* caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div
                      className="inline-flex px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest text-white shadow-md"
                      style={{ backgroundColor: section.accent }}
                    >
                      {section.title}
                    </div>
                    <div className="mt-3 text-white font-bold text-sm">
                      {t("galleryPage.card.viewPhoto")}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ================= LIGHTBOX MODAL ================= */}
      {lightbox.open && (
        <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center px-4">
          <div className="relative w-full max-w-5xl">
            {/* close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white font-black text-2xl"
            >
              {t("galleryPage.lightbox.close")}
            </button>

            {/* image */}
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img
                src={`${lightbox.img}?auto=format&fit=crop&w=1600&q=90`}
                alt="Gallery"
                className="w-full max-h-[78vh] object-contain bg-black"
              />
            </div>

            {/* bottom controls */}
            <div className="flex items-center justify-between mt-4 text-white">
              <div className="text-sm md:text-base font-bold">
                {lightbox.title}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prevImg}
                  className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 transition font-bold"
                >
                  {t("galleryPage.lightbox.prev")}
                </button>
                <button
                  onClick={nextImg}
                  className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 transition font-bold"
                >
                  {t("galleryPage.lightbox.next")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;

import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PlaygroundPage = () => {
  const { t } = useTranslation();

  const heroTags = useMemo(
    () => t("playground.hero.tags", { returnObjects: true }) || [],
    [t]
  );

  const miniStats = useMemo(
    () => t("playground.hero.miniStats", { returnObjects: true }) || [],
    [t]
  );

  const playgroundFeatures = useMemo(
    () => t("playground.highlights.features", { returnObjects: true }) || [],
    [t]
  );

  const activities = useMemo(
    () => t("playground.activities.items", { returnObjects: true }) || [],
    [t]
  );

  const introChips = useMemo(
    () => t("playground.intro.chips", { returnObjects: true }) || [],
    [t]
  );

  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-[#673AB7] via-[#4FC3F7] to-[#FFB74D] py-20 md:py-28 text-white">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex flex-wrap justify-center gap-2 mb-6">
              {heroTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-white/15 border border-white/20 text-xs font-black uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              {t("playground.hero.title")}
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl opacity-90 font-medium leading-relaxed">
              {t("playground.hero.subtitle")}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                to="/admissions"
                className="bg-[#FF5E5E] hover:bg-[#ff3d3d] px-10 py-4 rounded-full font-black shadow-lg transition"
              >
                {t("playground.hero.btnApply")}
              </Link>
              <Link
                to="/contact"
                className="bg-white/95 hover:bg-white text-[#673AB7] px-10 py-4 rounded-full font-black shadow-lg transition"
              >
                {t("playground.hero.btnContact")}
              </Link>
            </div>

            {/* mini stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
              {miniStats.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 border border-white/20 rounded-2xl p-5"
                >
                  <div className="text-2xl font-black">{s.value}</div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-90">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* decorative blobs */}
        <div className="absolute -top-20 -left-20 w-56 h-56 bg-white/15 rounded-full"></div>
        <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-black/10 rounded-full"></div>

        {/* wave */}
        <div className="h-12 bg-white rounded-t-[45px] -mt-10"></div>
      </section>

      {/* ================= INTRO (IMAGE + TEXT) ================= */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-[2.5rem] bg-[#FFB74D]/20 -z-10"></div>

            <img
              src="https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=900&q=80"
              alt={t("playground.intro.imageAlt")}
              className="w-full h-[420px] object-cover rounded-[2.5rem] shadow-xl border-8 border-white"
            />

            <div className="absolute -bottom-6 -right-6 bg-[#00BCD4] text-white px-6 py-5 rounded-full border-4 border-white shadow-lg rotate-6 text-center">
              <div className="text-xl font-black">
                {t("playground.intro.badgeTitle")}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider">
                {t("playground.intro.badgeSubtitle")}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-[#673AB7] leading-tight">
              {t("playground.intro.title")}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              {t("playground.intro.p1")}
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              {t("playground.intro.p2")}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {introChips.map((chip, idx) => (
                <span
                  key={idx}
                  className="px-5 py-3 rounded-full bg-gray-100 font-bold"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="bg-gray-50 py-20 border-y">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              {t("playground.highlights.title")}
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              {t("playground.highlights.subtitle")}
            </p>
            <div className="w-24 h-1.5 bg-[#4FC3F7] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {playgroundFeatures.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border shadow-sm hover:shadow-xl transition"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  {item.icon}
                </div>

                <h3
                  className="mt-5 text-xl font-black"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ACTIVITIES ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            {t("playground.activities.title")}
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 mt-4 text-lg">
            {t("playground.activities.subtitle")}
          </p>

          <div className="w-24 h-1.5 bg-[#FFB74D] mx-auto mt-6 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-14">
            {activities.map((x, i) => (
              <div
                key={i}
                className="rounded-3xl border shadow-sm hover:shadow-xl transition bg-white p-10 text-left"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ backgroundColor: `${x.color}15` }}
                >
                  {x.icon}
                </div>

                <h4 className="mt-5 text-2xl font-black" style={{ color: x.color }}>
                  {x.title}
                </h4>

                <p className="text-gray-600 mt-3 leading-relaxed">{x.desc}</p>

                <div className="mt-6 text-sm font-bold text-gray-700">
                  {t("playground.activities.footerLine")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden">
        <div className="bg-[#0f172a] py-20 text-center text-white">
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#00BCD4]">
              {t("playground.finalCta.title")}
            </h2>

            <p className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t("playground.finalCta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5 font-black uppercase tracking-widest text-sm">
              <Link
                to="/admissions"
                className="bg-[#FF5E5E] px-12 py-5 rounded-2xl shadow-2xl hover:bg-red-600 transition transform hover:-translate-y-1"
              >
                {t("playground.finalCta.btnApply")}
              </Link>
              <Link
                to="/contact"
                className="bg-white text-[#0f172a] px-12 py-5 rounded-2xl shadow-2xl hover:bg-gray-100 transition transform hover:-translate-y-1"
              >
                {t("playground.finalCta.btnContact")}
              </Link>
            </div>

            <p className="mt-12 text-gray-400 text-sm">
              {t("playground.finalCta.footer")}
            </p>
          </div>

          <div className="absolute -top-24 -right-20 w-72 h-72 bg-[#00BCD4] opacity-10 rounded-full"></div>
          <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-[#FF5E5E] opacity-10 rounded-full"></div>
        </div>

        <div className="h-12 bg-white rounded-t-[45px] -mt-10"></div>
      </section>
    </div>
  );
};

export default PlaygroundPage;

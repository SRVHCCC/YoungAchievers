import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LibraryPage = () => {
  const { t } = useTranslation();

  const heroTags = useMemo(
    () => t("libraryPage.hero.tags", { returnObjects: true }) || [],
    [t]
  );

  const miniStats = useMemo(
    () => t("libraryPage.hero.miniStats", { returnObjects: true }) || [],
    [t]
  );

  const features = useMemo(
    () => t("libraryPage.highlights.features", { returnObjects: true }) || [],
    [t]
  );

  const ageWise = useMemo(
    () => t("libraryPage.ageWise.cards", { returnObjects: true }) || [],
    [t]
  );

  const routine = useMemo(
    () => t("libraryPage.routine.items", { returnObjects: true }) || [],
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
              {t("libraryPage.hero.title")}
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl opacity-90 font-medium leading-relaxed">
              {t("libraryPage.hero.subtitle")}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                to="/admissions"
                className="bg-[#FF5E5E] hover:bg-[#ff3d3d] px-10 py-4 rounded-full font-black shadow-lg transition"
              >
                {t("libraryPage.hero.btnApply")}
              </Link>

              <Link
                to="/contact"
                className="bg-white/95 hover:bg-white text-[#673AB7] px-10 py-4 rounded-full font-black shadow-lg transition"
              >
                {t("libraryPage.hero.btnContact")}
              </Link>
            </div>

            {/* Mini stats */}
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

        {/* Decorative blobs */}
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
            <div className="absolute -top-4 -left-4 w-full h-full rounded-[2.5rem] bg-[#00BCD4]/15 -z-10"></div>

            <img
              src={t("libraryPage.intro.image")}
              alt="School Library"
              className="w-full h-[420px] object-cover rounded-[2.5rem] shadow-xl border-8 border-white"
            />

            <div className="absolute -bottom-6 -right-6 bg-[#673AB7] text-white px-6 py-5 rounded-full border-4 border-white shadow-lg rotate-6 text-center">
              <div className="text-xl font-black">
                {t("libraryPage.intro.badgeTitle")}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider">
                {t("libraryPage.intro.badgeSub")}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-[#673AB7] leading-tight">
              {t("libraryPage.intro.title")}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              {t("libraryPage.intro.p1")}
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              {t("libraryPage.intro.p2")}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {(t("libraryPage.intro.chips", { returnObjects: true }) || []).map(
                (chip, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-3 rounded-full bg-gray-100 font-bold"
                  >
                    {chip}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-gray-50 py-20 border-y">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              {t("libraryPage.highlights.title")}
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              {t("libraryPage.highlights.subtitle")}
            </p>
            <div className="w-24 h-1.5 bg-[#FFB74D] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {features.map((item, idx) => (
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

      {/* ================= AGE-WISE READING ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            {t("libraryPage.ageWise.title")}
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 mt-4 text-lg">
            {t("libraryPage.ageWise.subtitle")}
          </p>

          <div className="w-24 h-1.5 bg-[#4FC3F7] mx-auto mt-6 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-14">
            {ageWise.map((x, i) => (
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

                <h4
                  className="mt-5 text-2xl font-black"
                  style={{ color: x.color }}
                >
                  {x.title}
                </h4>

                <p className="text-gray-600 mt-3 leading-relaxed">{x.desc}</p>

                <div className="mt-6 text-sm font-bold text-gray-700">
                  {t("libraryPage.ageWise.footerLine")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ROUTINE / RULES ================= */}
      <section className="bg-gray-50 py-20 border-y">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              {t("libraryPage.routine.title")}
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              {t("libraryPage.routine.subtitle")}
            </p>
            <div className="w-24 h-1.5 bg-[#673AB7] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {routine.map((r, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border shadow-sm hover:shadow-xl transition"
              >
                <div className="text-4xl">{r.icon}</div>
                <h3 className="mt-4 text-lg font-black text-slate-900">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {r.desc}
                </p>
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
              {t("libraryPage.finalCta.title")}
            </h2>

            <p className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t("libraryPage.finalCta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5 font-black uppercase tracking-widest text-sm">
              <Link
                to="/admissions"
                className="bg-[#FF5E5E] px-12 py-5 rounded-2xl shadow-2xl hover:bg-red-600 transition transform hover:-translate-y-1"
              >
                {t("libraryPage.finalCta.btnApply")}
              </Link>

              <Link
                to="/contact"
                className="bg-white text-[#0f172a] px-12 py-5 rounded-2xl shadow-2xl hover:bg-gray-100 transition transform hover:-translate-y-1"
              >
                {t("libraryPage.finalCta.btnContact")}
              </Link>
            </div>

            <p className="mt-12 text-gray-400 text-sm">
              {t("libraryPage.finalCta.footer")}
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

export default LibraryPage;

import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PrimaryFoundationPage = () => {
  const { t } = useTranslation();

  const heroTags = useMemo(
    () => t("primaryFoundation.hero.tags", { returnObjects: true }) || [],
    [t]
  );

  const miniStats = useMemo(
    () => t("primaryFoundation.hero.miniStats", { returnObjects: true }) || [],
    [t]
  );

  const primaryFeatures = useMemo(
    () => t("primaryFoundation.pillars.items", { returnObjects: true }) || [],
    [t]
  );

  const curriculum = useMemo(
    () => t("primaryFoundation.curriculum.items", { returnObjects: true }) || [],
    [t]
  );

  const environmentPoints = useMemo(
    () => t("primaryFoundation.environment.points", { returnObjects: true }) || [],
    [t]
  );

  const pillarTags = useMemo(
    () => t("primaryFoundation.pillars.pillarsTags", { returnObjects: true }) || [],
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
              {t("primaryFoundation.hero.title")}
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl opacity-90 font-medium leading-relaxed">
              {t("primaryFoundation.hero.subtitle")}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                to="/admissions"
                className="bg-[#FF5E5E] hover:bg-[#ff3d3d] px-10 py-4 rounded-full font-black shadow-lg transition"
              >
                {t("primaryFoundation.hero.btnApply")}
              </Link>

              <Link
                to="/contact"
                className="bg-white/95 hover:bg-white text-[#673AB7] px-10 py-4 rounded-full font-black shadow-lg transition"
              >
                {t("primaryFoundation.hero.btnContact")}
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

        {/* white wave */}
        <div className="h-12 bg-white rounded-t-[45px] -mt-10"></div>
      </section>

      {/* ================= ACADEMIC PILLARS ================= */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">
            {t("primaryFoundation.pillars.title")}
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
            {t("primaryFoundation.pillars.subtitle")}
          </p>
          <div className="w-24 h-1.5 bg-[#FFB74D] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {primaryFeatures.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border shadow-sm hover:shadow-2xl transition bg-white p-9"
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ backgroundColor: `${item.color}18` }}
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-black" style={{ color: item.color }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-7 flex gap-3 flex-wrap">
                <span
                  className="px-4 py-2 rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                  }}
                >
                  {pillarTags[0] || "✅ Concept Clarity"}
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-bold bg-gray-100 text-gray-700">
                  {pillarTags[1] || "✅ Weekly Revision"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STRUCTURED CURRICULUM ================= */}
      <section className="py-20 bg-gray-50 border-y">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              {t("primaryFoundation.curriculum.title")}
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              {t("primaryFoundation.curriculum.subtitle")}
            </p>
            <div className="w-24 h-1.5 bg-[#4FC3F7] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((box, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border shadow-sm hover:shadow-xl transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{box.icon}</span>
                  <h4 className="font-black text-slate-900 text-lg">
                    {box.title}
                  </h4>
                </div>

                <ul className="space-y-3">
                  {(box.list || []).map((x, j) => (
                    <li
                      key={j}
                      className="text-sm text-gray-600 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LEARNING ENVIRONMENT ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">
              {t("primaryFoundation.environment.title")}
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              {t("primaryFoundation.environment.subtitle")}
            </p>
            <div className="w-24 h-1.5 bg-[#673AB7] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {environmentPoints.map((point, i) => (
              <div
                key={i}
                className="rounded-3xl border p-8 shadow-sm hover:shadow-xl transition bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#673AB7] text-white font-black flex items-center justify-center">
                    {point.badge}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900">
                      {point.t}
                    </h4>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {point.d}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Notice Card */}
          <div className="mt-14 bg-[#4FC3F7]/10 border border-[#4FC3F7]/20 rounded-3xl p-8 text-center">
            <h4 className="text-xl font-black text-[#4FC3F7]">
              {t("primaryFoundation.environment.notice.title")}
            </h4>
            <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
              {t("primaryFoundation.environment.notice.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden">
        <div className="bg-[#0f172a] py-20 text-center text-white">
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#00BCD4]">
              {t("primaryFoundation.finalCta.title")}
            </h2>

            <p className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t("primaryFoundation.finalCta.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5 font-black uppercase tracking-widest text-sm">
              <Link
                to="/admissions"
                className="bg-[#FF5E5E] px-12 py-5 rounded-2xl shadow-2xl hover:bg-red-600 transition transform hover:-translate-y-1"
              >
                {t("primaryFoundation.finalCta.btnApply")}
              </Link>

              <Link
                to="/contact"
                className="bg-white text-[#0f172a] px-12 py-5 rounded-2xl shadow-2xl hover:bg-gray-100 transition transform hover:-translate-y-1"
              >
                {t("primaryFoundation.finalCta.btnTalk")}
              </Link>
            </div>

            <p className="mt-12 text-gray-400 text-sm">
              {t("primaryFoundation.finalCta.footer")}
            </p>
          </div>

          {/* Decorative circles */}
          <div className="absolute -top-24 -right-20 w-72 h-72 bg-[#00BCD4] opacity-10 rounded-full"></div>
          <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-[#FF5E5E] opacity-10 rounded-full"></div>
        </div>

        <div className="h-12 bg-white rounded-t-[45px] -mt-10"></div>
      </section>
    </div>
  );
};

export default PrimaryFoundationPage;

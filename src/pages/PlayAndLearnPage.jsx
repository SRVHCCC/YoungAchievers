import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Importing local assets
import sensoryExploration from "../assets/img/SensoryExploration.png";
import visualRecognition from "../assets/img/VisualRecognition.png";
import creativeExpression from "../assets/img/CreativeExpression.png";
import phonicsLanguage from "../assets/img/PhonicsLanguage.png";
import socialInteraction from "../assets/img/SocialInteraction.png";

const PlayAndLearnPage = () => {
  const { t } = useTranslation();

  // ✅ local images map (text json se, image yahi file se)
  const imageMap = useMemo(
    () => [sensoryExploration, visualRecognition, creativeExpression, phonicsLanguage, socialInteraction],
    []
  );

  const heroTags = useMemo(
    () => t("playAndLearn.hero.tags", { returnObjects: true }) || [],
    [t]
  );

  const miniStats = useMemo(
    () => t("playAndLearn.hero.miniStats", { returnObjects: true }) || [],
    [t]
  );

  const playLearnModules = useMemo(() => {
    const modules = t("playAndLearn.modules", { returnObjects: true }) || [];
    // ✅ image attach by index (UI same)
    return modules.map((m, idx) => ({
      ...m,
      image: imageMap[idx] || sensoryExploration,
    }));
  }, [t, imageMap]);

  const finalPoints = useMemo(
    () => t("playAndLearn.finalCta.points", { returnObjects: true }) || [],
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
              {t("playAndLearn.hero.title")}
            </h1>

            <p className="max-w-3xl mx-auto mt-6 text-lg md:text-xl opacity-90 font-medium leading-relaxed">
              {t("playAndLearn.hero.subtitle")}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                to="/admissions"
                className="bg-[#FF5E5E] hover:bg-[#ff3d3d] px-10 py-4 rounded-full font-black shadow-lg transition"
              >
                {t("playAndLearn.hero.btnApply")}
              </Link>

              <Link
                to="/contact"
                className="bg-white/95 hover:bg-white text-[#673AB7] px-10 py-4 rounded-full font-black shadow-lg transition"
              >
                {t("playAndLearn.hero.btnTalk")}
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
        <div className="absolute -bottom-20 -right-16 w-72 h-72 bg-black/10 rounded-full"></div>

        {/* white wave */}
        <div className="h-12 bg-white rounded-t-[45px] -mt-10"></div>
      </section>

      {/* ================= SECTION TITLE ================= */}
      <section className="container mx-auto px-6 pt-16 pb-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900">
          {t("playAndLearn.sectionTitle.title")}
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          {t("playAndLearn.sectionTitle.subtitle")}
        </p>
        <div className="w-24 h-1.5 bg-[#FFB74D] mx-auto mt-6 rounded-full"></div>
      </section>

      {/* ================= MODULES ================= */}
      <section className="py-14 container mx-auto px-6">
        <div className="space-y-12 md:space-y-16">
          {playLearnModules.map((item, index) => (
            <div
              key={index}
              className="rounded-[2.5rem] border shadow-sm hover:shadow-2xl transition overflow-hidden bg-white"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 ${
                  index % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
                }`}
              >
                {/* Image Side */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[280px] md:h-[420px] object-cover object-center transition-transform duration-700 hover:scale-110"
                  />

                  {/* Tag */}
                  <div
                    className="absolute top-6 left-6 text-white px-5 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-lg"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.tag}
                  </div>

                  {/* corner gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
                </div>

                {/* Content Side */}
                <div className="p-10 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className="px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                      }}
                    >
                      {item.method}
                    </span>
                    <span className="px-4 py-2 rounded-full bg-gray-100 text-xs font-black uppercase tracking-wider text-gray-700">
                      {item.age}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-5 text-base md:text-lg leading-relaxed">
                    {item.description}
                  </p>

                  {/* Outcomes */}
                  <div className="mt-8">
                    <h4 className="font-black text-slate-900 mb-3">
                      {t("playAndLearn.keyOutcomesTitle")}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {(item.outcomes || []).map((x, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-full text-sm font-bold"
                          style={{
                            backgroundColor: `${item.color}12`,
                            color: item.color,
                          }}
                        >
                          ✅ {x}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Note */}
                  <div className="mt-8 flex items-center gap-3">
                    <span className="text-2xl">✨</span>
                    <p className="text-sm md:text-base text-gray-700 font-semibold italic">
                      {t("playAndLearn.note")}
                    </p>
                  </div>
                </div>
              </div>

              {/* bottom strip */}
              <div className="h-2 w-full" style={{ backgroundColor: item.color }}></div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden">
        <div className="bg-[#0f172a] py-20 text-center text-white">
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#00BCD4]">
              {t("playAndLearn.finalCta.title")}
            </h2>

            <p className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t("playAndLearn.finalCta.subtitle")}
            </p>

            {/* Points */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {finalPoints.map((p, idx) => (
                <span
                  key={idx}
                  className="px-5 py-3 rounded-full bg-white/10 border border-white/10 font-bold"
                >
                  {p}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8">
              <Link
                to="/admissions"
                className="bg-[#FF5E5E] text-white px-12 py-5 rounded-2xl font-black shadow-2xl hover:bg-red-600 transition-all tracking-widest uppercase text-sm transform hover:-translate-y-1"
              >
                {t("playAndLearn.finalCta.btnApply")}
              </Link>

              <Link
                to="/contact"
                className="bg-white text-[#0f172a] px-12 py-5 rounded-2xl font-black shadow-2xl hover:bg-gray-100 transition-all tracking-widest uppercase text-sm transform hover:-translate-y-1"
              >
                {t("playAndLearn.finalCta.btnContact")}
              </Link>
            </div>
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

export default PlayAndLearnPage;

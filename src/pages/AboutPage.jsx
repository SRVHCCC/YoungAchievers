import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Local asset
import aboutUsImg from "../assets/img/aboutus.png";

const AboutPage = () => {
  const { t } = useTranslation();

  const chips = useMemo(
    () => t("about.intro.chips", { returnObjects: true }) || [],
    [t]
  );

  const journeySteps = useMemo(
    () => t("about.journey.steps", { returnObjects: true }) || [],
    [t]
  );

  const features = useMemo(
    () => t("about.features.items", { returnObjects: true }) || [],
    [t]
  );

  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-[#673AB7] via-[#4FC3F7] to-[#FFB74D] text-white py-20 md:py-28">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-sm font-bold mb-6">
              {t("about.hero.badge")}
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              {t("about.hero.title")}
            </h1>

            <p className="max-w-3xl mx-auto mt-5 text-lg md:text-xl opacity-90 font-medium">
              {t("about.hero.subtitle")}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Link
                to="/admissions"
                className="bg-[#FF5E5E] hover:bg-[#ff3d3d] px-10 py-4 rounded-full font-black shadow-lg transition"
              >
                {t("about.hero.btnAdmissions")}
              </Link>
              <Link
                to="/contact"
                className="bg-white/90 hover:bg-white text-[#673AB7] px-10 py-4 rounded-full font-black shadow-lg transition"
              >
                {t("about.hero.btnContact")}
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute -top-12 -left-12 w-40 h-40 bg-white/15 rounded-full"></div>
        <div className="absolute -bottom-16 -right-10 w-56 h-56 bg-black/10 rounded-full"></div>

        {/* White wave */}
        <div className="h-12 bg-white rounded-t-[45px] -mt-10"></div>
      </section>

      {/* ================= INTRO SECTION (IMAGE + TEXT) ================= */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative w-full">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-[2.5rem] bg-[#FFB74D]/20 -z-10"></div>

            <img
              src={aboutUsImg}
              alt={t("about.intro.imageAlt")}
              className="w-full h-[420px] object-cover rounded-[2.5rem] shadow-xl border-8 border-white"
            />

            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#FF5E5E] text-white px-6 py-5 rounded-full text-center border-4 border-white shadow-lg rotate-6">
              <div className="text-2xl font-black">
                {t("about.intro.establishedYear")}
              </div>
              <div className="text-xs font-bold uppercase tracking-wider">
                {t("about.intro.establishedLabel")}
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-[#673AB7] leading-tight">
              {t("about.intro.titleLine1")} <br />
              {t("about.intro.titleLine2")}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              <span className="font-black text-slate-900">
                {t("about.intro.p1BoldName")}
              </span>{" "}
              {t("about.intro.p1Text1")}{" "}
              <span className="font-black">{t("about.intro.p1YearBold")}</span>
              {t("about.intro.p1Text2")}{" "}
              <span className="font-semibold">
                {t("about.intro.p1LocationBold")}
              </span>
              {t("about.intro.p1Text3")}{" "}
              <span className="font-black">{t("about.intro.p1ClassBold")}</span>
              {t("about.intro.p1Text4")}
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              {t("about.intro.p2Text1")}{" "}
              <span className="font-black">{t("about.intro.p2DisciplineBold")}</span>{" "}
              {t("about.intro.p2Text2")}{" "}
              <span className="font-black">{t("about.intro.p2ConceptBold")}</span>
              {t("about.intro.p2Text3")}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {chips.map((item, idx) => (
                <span
                  key={idx}
                  className="px-5 py-3 rounded-full bg-gray-100 font-bold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-[#673AB7]">
              {t("about.missionVision.title")}
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              {t("about.missionVision.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow hover:shadow-xl transition border-t-8 border-[#4FC3F7]">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-black text-[#4FC3F7] mb-4">
                {t("about.missionVision.missionTitle")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("about.missionVision.missionDesc")}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow hover:shadow-xl transition border-t-8 border-[#FF5E5E]">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-black text-[#FF5E5E] mb-4">
                {t("about.missionVision.visionTitle")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("about.missionVision.visionDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JOURNEY TIMELINE ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-[#673AB7]">
              {t("about.journey.title")}
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              {t("about.journey.subtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {journeySteps.map((step, idx) => (
              <div key={idx} className="flex gap-5">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-black ${
                    idx === 0
                      ? "bg-[#673AB7]"
                      : idx === 1
                      ? "bg-[#4FC3F7]"
                      : "bg-[#FFB74D]"
                  }`}
                >
                  {idx + 1}
                </div>
                <div className="bg-gray-50 p-7 rounded-3xl border w-full shadow-sm">
                  <h4 className="font-black text-lg text-slate-800">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 mt-2">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-[#673AB7]">
              {t("about.features.title")}
            </h2>
            <div className="w-24 h-1.5 bg-[#FFB74D] mx-auto mt-5 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition border-t-8"
                style={{ borderTopColor: item.color }}
              >
                <div className="text-4xl">{item.icon}</div>
                <h4
                  className="font-black text-xl mt-4 mb-3"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-3xl border shadow-sm hover:shadow-lg transition">
              <h3 className="text-5xl font-black text-[#FF5E5E]">2025</h3>
              <p className="text-slate-500 text-sm mt-2 uppercase font-black tracking-widest">
                {t("about.stats.estYearLabel")}
              </p>
            </div>
            <div className="p-6 rounded-3xl border shadow-sm hover:shadow-lg transition">
              <h3 className="text-5xl font-black text-[#4FC3F7]">15+</h3>
              <p className="text-slate-500 text-sm mt-2 uppercase font-black tracking-widest">
                {t("about.stats.teachersLabel")}
              </p>
            </div>
            <div className="p-6 rounded-3xl border shadow-sm hover:shadow-lg transition">
              <h3 className="text-5xl font-black text-[#FFB74D]">8+</h3>
              <p className="text-slate-500 text-sm mt-2 uppercase font-black tracking-widest">
                {t("about.stats.gradesLabel")}
              </p>
            </div>
            <div className="p-6 rounded-3xl border shadow-sm hover:shadow-lg transition">
              <h3 className="text-5xl font-black text-[#673AB7]">100%</h3>
              <p className="text-slate-500 text-sm mt-2 uppercase font-black tracking-widest">
                {t("about.stats.dedicationLabel")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#673AB7] py-16 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            {t("about.finalCta.title")}
          </h2>
          <p className="mb-10 opacity-90 font-medium">
            {t("about.finalCta.address")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="tel:+918770698713"
              className="bg-[#FF5E5E] px-10 py-4 rounded-full font-black shadow-lg hover:bg-red-600 transition uppercase tracking-wider text-sm"
            >
              {t("about.finalCta.callBtn")}
            </a>
            <a
              href="mailto:info@youngachievers.com"
              className="bg-[#4FC3F7] px-10 py-4 rounded-full font-black shadow-lg hover:bg-cyan-500 transition uppercase tracking-wider text-sm"
            >
              {t("about.finalCta.emailBtn")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

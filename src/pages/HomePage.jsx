import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../assets/img/banner.png";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  const testimonials = useMemo(
    () => t("home.testimonials.items", { returnObjects: true }) || [],
    [t]
  );

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const faqs = useMemo(() => t("home.faq.items", { returnObjects: true }) || [], [t]);
  const [openFAQ, setOpenFAQ] = useState(0);

  const nextTestimonial = () => {
    if (!testimonials.length) return;
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (!testimonials.length) return;
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <main className="bg-white">
      {/* ================= HERO (Responsive Perfect) ================= */}
      <section className="relative w-full overflow-hidden bg-black">
        {/* ✅ HEIGHT CONTROL */}
        <div className="relative h-[220px] sm:h-[320px] md:h-[640px] lg:h-[700px]">
          <img
            src={banner}
            alt="Young Achievers School Banner"
            className="
              absolute inset-0 w-full h-full 
              object-cover 
              object-[60%_center] 
              sm:object-center 
              md:object-center
            "
          />

          {/* ✅ Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/10"></div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 md:-mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🎯",
              title: t("home.highlights.activity.title"),
              desc: t("home.highlights.activity.desc"),
              color: "from-[#FF5E5E] to-[#ff2f2f]",
            },
            {
              icon: "📘",
              title: t("home.highlights.foundation.title"),
              desc: t("home.highlights.foundation.desc"),
              color: "from-[#FFB74D] to-[#ff9f1c]",
            },
            {
              icon: "🏆",
              title: t("home.highlights.development.title"),
              desc: t("home.highlights.development.desc"),
              color: "from-[#4DD0E1] to-[#00BCD4]",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 text-white shadow-2xl bg-gradient-to-br ${card.color} hover:scale-[1.02] transition`}
            >
              <div className="text-4xl">{card.icon}</div>
              <h3 className="mt-4 text-2xl font-black">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-95">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 md:py-24 text-center max-w-7xl mx-auto px-6">
        <h2 className="text-[#00BCD4] text-4xl md:text-5xl font-black">
          {t("home.aboutTitle")}
        </h2>
        <div className="w-28 h-1 bg-[#FF5E5E] mx-auto mt-5 rounded-full"></div>

        <p className="max-w-4xl mx-auto mt-10 text-gray-600 leading-relaxed text-lg">
          {t("home.aboutDesc")}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {[
            t("home.badges.safe"),
            t("home.badges.teachers"),
            t("home.badges.english"),
            t("home.badges.concept"),
          ].map((item, idx) => (
            <span
              key={idx}
              className="px-6 py-3 rounded-full bg-gray-50 border shadow-sm hover:shadow-md transition font-semibold text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[#673AB7] text-4xl font-black">
              {t("home.programs.title")}
            </h2>
            <p className="mt-4 text-gray-600">{t("home.programs.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-12">
            {[
              {
                icon: "🐣",
                title: t("home.programs.prePrimary.title"),
                desc: t("home.programs.prePrimary.desc"),
              },
              {
                icon: "📚",
                title: t("home.programs.primary.title"),
                desc: t("home.programs.primary.desc"),
              },
              {
                icon: "🎓",
                title: t("home.programs.middle.title"),
                desc: t("home.programs.middle.desc"),
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 border flex items-center justify-center text-3xl shadow-sm">
                  {p.icon}
                </div>
                <h3 className="mt-5 text-xl font-black text-gray-800">
                  {p.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 bg-[#673AB7] hover:bg-[#5e2fb0] text-white px-10 py-4 rounded-full font-black shadow-lg transition active:scale-[0.98]"
            >
              {t("home.programs.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🧒", value: "100+", label: t("home.stats.students"), color: "#FF5E5E" },
              { icon: "👨‍🏫", value: "20+", label: t("home.stats.teachers"), color: "#FFB74D" },
              { icon: "📘", value: "Nursery–8", label: t("home.stats.classes"), color: "#00BCD4" },
              { icon: "🛡", value: "Safe", label: t("home.stats.campus"), color: "#673AB7" },
            ].map((s, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-7 border shadow-sm hover:shadow-lg transition bg-white"
              >
                <div className="text-4xl">{s.icon}</div>
                <div className="mt-3 text-3xl font-black" style={{ color: s.color }}>
                  {s.value}
                </div>
                <div className="text-gray-600 font-semibold mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[#673AB7] text-4xl font-black">
              {t("home.testimonials.title")}
            </h2>
            <p className="mt-3 text-gray-600">{t("home.testimonials.subtitle")}</p>
          </div>

          <div className="max-w-4xl mx-auto mt-12 bg-white p-10 rounded-3xl shadow-xl border relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-[#00BCD4]/10"></div>
            <div className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-[#FF5E5E]/10"></div>

            <div className="relative">
              <div className="text-5xl mb-4">💬</div>

              <p className="text-gray-700 text-lg leading-relaxed">
                “{testimonials?.[activeTestimonial]?.msg || ""}”
              </p>

              <div className="mt-6 font-black text-[#FF5E5E] text-lg">
                — {testimonials?.[activeTestimonial]?.name || ""}
              </div>

              <div className="flex justify-between mt-10">
                <button
                  onClick={prevTestimonial}
                  className="px-6 py-3 rounded-full border font-bold hover:bg-gray-50 transition active:scale-[0.98]"
                >
                  {t("home.testimonials.prev")}
                </button>
                <button
                  onClick={nextTestimonial}
                  className="px-6 py-3 rounded-full border font-bold hover:bg-gray-50 transition active:scale-[0.98]"
                >
                  {t("home.testimonials.next")}
                </button>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      idx === activeTestimonial ? "bg-[#673AB7]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[#00BCD4] text-4xl font-black">
              {t("home.faq.title")}
            </h2>
            <p className="mt-3 text-gray-600">{t("home.faq.subtitle")}</p>
          </div>

          <div className="max-w-4xl mx-auto mt-12 space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openFAQ === index;
              return (
                <div
                  key={index}
                  className={`rounded-3xl border shadow-sm transition overflow-hidden ${
                    isOpen ? "shadow-lg border-[#00BCD4]/30" : "hover:shadow-md"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between text-left p-6 bg-white"
                    onClick={() => setOpenFAQ(isOpen ? -1 : index)}
                  >
                    <h3 className="font-black text-gray-800 text-lg">
                      {item.q}
                    </h3>
                    <span className="text-2xl font-black text-[#673AB7]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-[#673AB7] py-16 text-center text-white px-6">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-28 -left-28 w-80 h-80 bg-white/10 rounded-full"></div>

        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            {t("home.finalCta.title")}
          </h2>

          <p className="text-white/90 mb-8 text-lg leading-relaxed">
            {t("home.finalCta.desc")}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="bg-[#00BCD4] px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-[#00BCD4] transition inline-block shadow-xl active:scale-[0.98]"
            >
              {t("home.finalCta.apply")}
            </Link>

            <Link
              to="/about"
              className="bg-white/10 border border-white/25 px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-[#673AB7] transition inline-block shadow-xl active:scale-[0.98]"
            >
              {t("home.finalCta.learn")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;

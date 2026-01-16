import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import API_BASE_URL from "../config/config";

// ✅ Import your toaster component (App.js me nahi)
import AppToaster from "../component/toaster"; // path apne project ke hisaab se

const AdmissionInquiry = () => {
  const { t } = useTranslation();

  // ✅ page open -> scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // ✅ Dynamic arrays from JSON
  const classes = useMemo(
    () => t("admissionPage.form.classes", { returnObjects: true }) || [],
    [t]
  );

  const steps = useMemo(
    () => t("admissionPage.process.steps", { returnObjects: true }) || [],
    [t]
  );

  const highlights = useMemo(
    () => t("admissionPage.leftInfo.highlights", { returnObjects: true }) || [],
    [t]
  );

  // ✅ form states
  const [form, setForm] = useState({
    studentName: "",
    admissionClass: classes?.[0] || "Nursery",
    dob: "",
    phone: "",
    lastSchool: "",
    address: "",
    consent: false,
  });

  // ✅ if language change -> ensure admissionClass remains valid
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      admissionClass: classes?.includes(prev.admissionClass)
        ? prev.admissionClass
        : classes?.[0] || "Nursery",
    }));
  }, [classes]);

  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/\D/g, "");
    return cleaned.length === 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validations
    if (!form.studentName.trim())
      return toast.error(t("admissionPage.form.toast.studentNameRequired"));
    if (!form.dob) return toast.error(t("admissionPage.form.toast.dobRequired"));
    if (!form.phone.trim() || !validatePhone(form.phone))
      return toast.error(t("admissionPage.form.toast.phoneInvalid"));
    if (!form.consent)
      return toast.error(t("admissionPage.form.toast.consentRequired"));

    try {
      setLoading(true);

      const payload = {
        studentName: form.studentName.trim(),
        admissionClass: form.admissionClass,
        dob: form.dob,
        phone: form.phone.replace(/\D/g, ""),
        lastSchool: form.lastSchool.trim(),
        address: form.address.trim(),
        createdAt: new Date().toISOString(),
      };

      // ✅ Toast loading
      const toastId = toast.loading(t("admissionPage.form.toast.loading"));

      const res = await fetch(`${API_BASE_URL}/api/admission-inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        toast.dismiss(toastId);
        throw new Error(
          data?.message || t("admissionPage.form.toast.somethingWrong")
        );
      }

      toast.dismiss(toastId);
      toast.success(t("admissionPage.form.toast.success"));

      // ✅ reset form
      setForm({
        studentName: "",
        admissionClass: classes?.[0] || "Nursery",
        dob: "",
        phone: "",
        lastSchool: "",
        address: "",
        consent: false,
      });
    } catch (err) {
      toast.error(err.message || t("admissionPage.form.toast.failedToSubmit"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans bg-white text-slate-800">
      {/* ✅ IMPORTANT: Toaster inside component */}
      <AppToaster />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-[#673AB7] via-[#4FC3F7] to-[#FFB74D] py-16 md:py-20 text-white">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/20 text-xs font-black uppercase tracking-wider">
                {t("admissionPage.hero.badge")}
              </div>

              <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight">
                {t("admissionPage.hero.title")}
              </h1>

              <p className="mt-4 text-lg md:text-xl text-white/90 leading-relaxed font-medium">
                {t("admissionPage.hero.subtitle")}
              </p>

              <div className="flex flex-wrap gap-4 mt-7 justify-center">
                <a
                  href="tel:+918770698713"
                  className="bg-[#FF5E5E] hover:bg-red-600 transition px-8 py-4 rounded-full font-black shadow-lg"
                >
                  {t("admissionPage.hero.btnCall")}
                </a>

                <Link
                  to="/contact"
                  className="bg-white/95 hover:bg-white transition text-[#673AB7] px-8 py-4 rounded-full font-black shadow-lg"
                >
                  {t("admissionPage.hero.btnContact")}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -top-20 -left-20 w-56 h-56 bg-white/15 rounded-full"></div>
        <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-black/10 rounded-full"></div>

        <div className="h-12 bg-white rounded-t-[45px] -mt-10"></div>
      </section>

      {/* ================= STEPS ================= */}
      <section className="container mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black">
            {t("admissionPage.process.title")}
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            {t("admissionPage.process.subtitle")}
          </p>
          <div className="w-20 h-1.5 bg-[#FFB74D] mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="rounded-3xl border bg-white shadow-sm hover:shadow-xl transition p-8"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                style={{ backgroundColor: `${s.color}15` }}
              >
                {s.icon}
              </div>
              <h3 className="mt-5 text-xl font-black" style={{ color: s.color }}>
                {idx + 1}. {s.title}
              </h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* LEFT SIDE INFO */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl border p-8 shadow-sm bg-white">
              <h3 className="text-2xl font-black text-[#673AB7] mb-3">
                {t("admissionPage.leftInfo.whyTitle")}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("admissionPage.leftInfo.whyDesc")}
              </p>

              <div className="mt-6 space-y-4">
                {highlights.map((h, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-2xl">{h.icon}</div>
                    <div>
                      <div className="font-black text-slate-900">{h.title}</div>
                      <div className="text-sm text-gray-600">{h.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-8 bg-[#673AB7] text-white shadow-sm">
              <div className="text-sm uppercase tracking-widest font-black opacity-90">
                {t("admissionPage.leftInfo.officeTitle")}
              </div>
              <div className="mt-2 text-2xl md:text-3xl font-black">
                {t("admissionPage.leftInfo.officePhone")}
              </div>
              <p className="mt-3 text-white/80 text-sm">
                {t("admissionPage.leftInfo.officeDesc")}
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-3 rounded-[2rem] border shadow-sm p-10 bg-white">
            <h3 className="text-3xl font-black text-slate-900">
              {t("admissionPage.form.title")}
            </h3>
            <p className="text-gray-600 mt-2">
              {t("admissionPage.form.subtitle")}
            </p>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-black text-gray-700 mb-2">
                    {t("admissionPage.form.labels.studentName")}
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={form.studentName}
                    onChange={onChange}
                    placeholder={t("admissionPage.form.placeholders.studentName")}
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-[#00BCD4] outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-gray-700 mb-2">
                    {t("admissionPage.form.labels.admissionClass")}
                  </label>
                  <select
                    name="admissionClass"
                    value={form.admissionClass}
                    onChange={onChange}
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-[#00BCD4] outline-none"
                  >
                    {classes.map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-black text-gray-700 mb-2">
                    {t("admissionPage.form.labels.dob")}
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={form.dob}
                    onChange={onChange}
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-[#00BCD4] outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-black text-gray-700 mb-2">
                    {t("admissionPage.form.labels.phone")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder={t("admissionPage.form.placeholders.phone")}
                    className="w-full bg-gray-50 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-[#00BCD4] outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-black text-gray-700 mb-2">
                  {t("admissionPage.form.labels.lastSchool")}
                </label>
                <input
                  type="text"
                  name="lastSchool"
                  value={form.lastSchool}
                  onChange={onChange}
                  placeholder={t("admissionPage.form.placeholders.lastSchool")}
                  className="w-full bg-gray-50 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-[#00BCD4] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-gray-700 mb-2">
                  {t("admissionPage.form.labels.address")}
                </label>
                <textarea
                  rows="3"
                  name="address"
                  value={form.address}
                  onChange={onChange}
                  placeholder={t("admissionPage.form.placeholders.address")}
                  className="w-full bg-gray-50 border border-gray-200 p-4 rounded-2xl focus:ring-2 focus:ring-[#00BCD4] outline-none"
                ></textarea>
              </div>

              <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-2xl p-5">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={onChange}
                  className="mt-1 w-5 h-5"
                  required
                />
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("admissionPage.form.consentText")}
                </p>
              </div>

              {/* ✅ BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white font-black py-4 rounded-2xl shadow-lg transition transform uppercase tracking-widest
                  ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#00BCD4] hover:bg-[#26C6DA] hover:-translate-y-0.5"
                  }
                `}
              >
                {loading
                  ? t("admissionPage.form.btnSubmitting")
                  : t("admissionPage.form.btnSubmit")}
              </button>

              <p className="text-xs text-gray-500 text-center">
                {t("admissionPage.form.note")}
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="bg-[#0f172a] py-16 text-center text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-[#00BCD4]">
            {t("admissionPage.bottomCta.title")}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t("admissionPage.bottomCta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a
              href="tel:+918770698713"
              className="bg-[#FF5E5E] px-12 py-4 rounded-full font-black shadow-xl hover:bg-red-600 transition"
            >
              {t("admissionPage.bottomCta.btnCall")}
            </a>
            <Link
              to="/contact"
              className="bg-white text-[#0f172a] px-12 py-4 rounded-full font-black shadow-xl hover:bg-gray-100 transition"
            >
              {t("admissionPage.bottomCta.btnContact")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionInquiry;

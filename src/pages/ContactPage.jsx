import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import API_BASE_URL from "../config/config";

const ContactPage = () => {
  const { t } = useTranslation();

  // FAQ data
  const faqs = useMemo(
    () => t("contactPage.faq.items", { returnObjects: true }) || [],
    [t]
  );

  const classOptions = useMemo(
    () => t("contactPage.form.classOptions", { returnObjects: true }) || [],
    [t]
  );

  const [openFAQ, setOpenFAQ] = useState(0);

  // ✅ Form state
  const [form, setForm] = useState({
    childName: "",
    phone: "",
    admissionClass: classOptions?.[0] || "Nursery - UKG",
    message: ""
  });

  // ✅ UI state
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // ✅ Change handler
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ validate phone (10 digits)
  const validatePhone = (phone) => {
    const cleaned = phone.replace(/\D/g, "");
    return cleaned.length === 10;
  };

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    if (!form.childName.trim()) {
      setErrorMsg(t("contactPage.form.errors.childNameRequired"));
      return;
    }

    if (!form.phone.trim() || !validatePhone(form.phone)) {
      setErrorMsg(t("contactPage.form.errors.phoneInvalid"));
      return;
    }

    if (!form.message.trim() || form.message.trim().length < 5) {
      setErrorMsg(t("contactPage.form.errors.messageMin"));
      return;
    }

    try {
      setLoading(true);

      const payload = {
        childName: form.childName.trim(),
        phone: form.phone.replace(/\D/g, ""),
        admissionClass: form.admissionClass,
        message: form.message.trim(),
        createdAt: new Date().toISOString()
      };

      // ✅ Timeout add (IMPORTANT for live)
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000); // 20 seconds

      const res = await fetch(`${API_BASE_URL}/api/contact-inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data?.message || t("contactPage.form.errors.somethingWrong")
        );
      }

      setSuccessMsg(t("contactPage.form.successMsg"));

      // ✅ reset
      setForm({
        childName: "",
        phone: "",
        admissionClass: classOptions?.[0] || "Nursery - UKG",
        message: ""
      });
    } catch (err) {
      if (err.name === "AbortError") {
        setErrorMsg("Request timeout. Please try again.");
      } else {
        setErrorMsg(err.message || t("contactPage.form.errors.failedToSend"));
      }
    } finally {
      setLoading(false);
    }
  };

  const cards = t("contactPage.cards", { returnObjects: true });
  const mapSrc = t("contactPage.map.src");

  return (
    <div className="font-sans bg-white text-slate-800">
      {/* ================= HEADER BANNER ================= */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-[#673AB7] via-[#4FC3F7] to-[#FFB74D] py-20 text-center text-white">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              {t("contactPage.header.title")}
            </h1>
            <p className="text-lg md:text-xl opacity-90 font-semibold">
              {t("contactPage.header.subtitle")}
            </p>
          </div>
        </div>
        <div className="h-10 bg-white rounded-t-[40px] -mt-8"></div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* LEFT SIDE: CONTACT FORM */}
          <div
            id="contact-form"
            className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-lg"
          >
            <h2 className="text-3xl font-black mb-3 text-[#673AB7]">
              {t("contactPage.form.title")}
            </h2>
            <p className="text-gray-600 mb-8">
              {t("contactPage.form.subtitle")}
            </p>

            {/* ✅ Success/Error */}
            {(successMsg || errorMsg) && (
              <div
                className={`mb-6 rounded-2xl p-4 text-sm font-semibold border ${
                  successMsg
                    ? "bg-green-50 border-green-200 text-green-700"
                    : "bg-red-50 border-red-200 text-red-700"
                }`}
              >
                {successMsg || errorMsg}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-black mb-2">
                  {t("contactPage.form.labels.childName")}
                </label>
                <input
                  type="text"
                  name="childName"
                  value={form.childName}
                  onChange={onChange}
                  placeholder={t("contactPage.form.placeholders.childName")}
                  className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#4FC3F7] outline-none bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-black mb-2">
                  {t("contactPage.form.labels.phone")}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder={t("contactPage.form.placeholders.phone")}
                  className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#4FC3F7] outline-none bg-white"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-black mb-2">
                  {t("contactPage.form.labels.admissionClass")}
                </label>
                <select
                  name="admissionClass"
                  value={form.admissionClass}
                  onChange={onChange}
                  className="w-full p-4 rounded-xl border border-slate-300 outline-none bg-white"
                >
                  {classOptions.map((opt, idx) => (
                    <option key={idx}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-black mb-2">
                  {t("contactPage.form.labels.message")}
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder={t("contactPage.form.placeholders.message")}
                  className="w-full p-4 rounded-xl border border-slate-300 outline-none bg-white"
                  required
                ></textarea>
              </div>

              {/* ✅ WORKING BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full text-white font-black py-4 rounded-xl transition shadow-md uppercase tracking-wider
                  ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#FF5E5E] hover:bg-red-600"
                  }
                `}
              >
                {loading
                  ? t("contactPage.form.btnSending")
                  : t("contactPage.form.btnSend")}
              </button>

              <p className="text-xs text-gray-500 text-center mt-2">
                {t("contactPage.form.privacyNote")}
              </p>
            </form>
          </div>

          {/* RIGHT SIDE: DETAILS + FAQ */}
          <div className="space-y-10">
            {/* QUICK CONTACT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Address */}
              <div className="p-6 rounded-3xl border shadow-sm hover:shadow-lg transition">
                <div className="text-3xl mb-3">{cards.address.icon}</div>
                <h3
                  className="font-black text-lg mb-1"
                  style={{ color: cards.address.color }}
                >
                  {cards.address.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cards.address.text1} <br />
                  {cards.address.text2}
                </p>
              </div>

              {/* Call */}
              <div className="p-6 rounded-3xl border shadow-sm hover:shadow-lg transition">
                <div className="text-3xl mb-3">{cards.call.icon}</div>
                <h3
                  className="font-black text-lg mb-1"
                  style={{ color: cards.call.color }}
                >
                  {cards.call.title}
                </h3>
                <a
                  href="tel:+918770698713"
                  className="font-black text-gray-800 hover:text-[#FF5E5E] transition"
                >
                  {cards.call.phone}
                </a>
                <p className="text-gray-600 text-sm mt-1">{cards.call.note}</p>
              </div>

              {/* Email */}
              <div className="p-6 rounded-3xl border shadow-sm hover:shadow-lg transition">
                <div className="text-3xl mb-3">{cards.email.icon}</div>
                <h3
                  className="font-black text-lg mb-1"
                  style={{ color: cards.email.color }}
                >
                  {cards.email.title}
                </h3>
                <p className="text-gray-700 font-semibold">{cards.email.email}</p>
                <p className="text-gray-600 text-sm mt-1">{cards.email.note}</p>
              </div>

              {/* Timings */}
              <div className="p-6 rounded-3xl border shadow-sm hover:shadow-lg transition">
                <div className="text-3xl mb-3">{cards.timings.icon}</div>
                <h3
                  className="font-black text-lg mb-1"
                  style={{ color: cards.timings.color }}
                >
                  {cards.timings.title}
                </h3>
                <p className="text-sm text-gray-700 font-semibold">
                  {cards.timings.line1}
                </p>
                <p className="text-sm text-gray-700 font-semibold">
                  {cards.timings.line2}
                </p>
                <p className="text-sm font-black text-red-500 mt-1">
                  {cards.timings.line3}
                </p>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-3xl overflow-hidden border shadow-sm">
              <iframe
                title={t("contactPage.map.title")}
                src={mapSrc}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* FAQ SECTION */}
            <div className="bg-white border rounded-3xl p-8 shadow-sm">
              <h2 className="text-3xl font-black text-[#673AB7]">
                {t("contactPage.faq.title")}
              </h2>
              <p className="text-gray-600 mt-2 mb-6">
                {t("contactPage.faq.subtitle")}
              </p>

              <div className="space-y-4">
                {faqs.map((item, index) => {
                  const isOpen = openFAQ === index;
                  return (
                    <div
                      key={index}
                      className="border rounded-2xl p-5 hover:shadow-md transition"
                    >
                      <button
                        type="button"
                        className="w-full flex items-center justify-between text-left"
                        onClick={() => setOpenFAQ(isOpen ? -1 : index)}
                      >
                        <h3 className="font-black text-gray-800 text-base md:text-lg">
                          {item.q}
                        </h3>
                        <span className="text-2xl font-black text-[#4FC3F7]">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                          {item.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#673AB7] py-16 text-center text-white px-6">
        <h2 className="text-3xl md:text-4xl font-black mb-5">
          {t("contactPage.finalCta.title")}
        </h2>
        <p className="max-w-2xl mx-auto text-white/90 mb-8">
          {t("contactPage.finalCta.subtitle")}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+918770698713"
            className="bg-[#00BCD4] px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-[#00BCD4] transition inline-block shadow-lg"
          >
            {t("contactPage.finalCta.btnCall")}
          </a>

          {/* ✅ Scroll to form */}
          <a
            href="#contact-form"
            className="bg-white/10 border border-white/25 px-10 py-4 rounded-full font-black text-lg hover:bg-white hover:text-[#673AB7] transition inline-block shadow-lg"
          >
            {t("contactPage.finalCta.btnSend")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

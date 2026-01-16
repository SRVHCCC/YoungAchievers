import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const linkStyle =
    "text-gray-300 hover:text-white transition text-sm font-semibold hover:underline underline-offset-4 decoration-[#00BCD4]";
  const smallLink =
    "text-gray-400 hover:text-white transition text-sm font-medium hover:underline underline-offset-4 decoration-[#FFB74D]";

  // ✅ JSON data
  const socials = useMemo(
    () => t("footer.social", { returnObjects: true }) || [],
    [t]
  );

  const quickLinks = useMemo(
    () => t("footer.quickLinks.links", { returnObjects: true }) || [],
    [t]
  );

  const academicsLinks = useMemo(
    () => t("footer.academics.links", { returnObjects: true }) || [],
    [t]
  );

  const campusLinks = useMemo(
    () => t("footer.campus.links", { returnObjects: true }) || [],
    [t]
  );

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1224] text-white font-sans">
      {/* ========= MAIN FOOTER ========= */}
      <section className="pt-14 pb-10 px-5 border-t-4 border-[#673AB7]">
        {/* ✅ Mobile: 2 columns */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* 1) BRAND (full width on phone) */}
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-2xl shadow-md">
                <img src="/logo.png" alt="School Logo" className="h-12 w-auto" />
              </div>

              <div className="leading-tight">
                <h4 className="text-xl font-black tracking-tight">
                  {t("footer.brand.title1")}{" "}
                  <span className="text-[#00BCD4]">{t("footer.brand.title2")}</span>
                </h4>
                <p className="text-[11px] uppercase font-bold tracking-[0.25em] text-[#FFB74D]">
                  {t("footer.brand.tagline")}
                </p>
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              {t("footer.brand.description")}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  aria-label={item.label}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#00BCD4]/20 border border-white/10 hover:border-[#00BCD4]/40 transition flex items-center justify-center text-lg shadow-sm"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2) QUICK LINKS */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest">
              {t("footer.quickLinks.title")}
            </h4>
            <div className="w-12 h-1.5 bg-[#FF5E5E] rounded-full mt-3"></div>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <Link to={l.to} className={linkStyle}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3) ACADEMICS + CAMPUS */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest">
              {t("footer.academics.title")}
            </h4>
            <div className="w-12 h-1.5 bg-[#00BCD4] rounded-full mt-3"></div>

            <ul className="mt-5 space-y-3">
              {academicsLinks.map((l, i) => (
                <li key={i}>
                  <Link to={l.to} className={smallLink}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-black uppercase tracking-widest mt-8">
              {t("footer.campus.title")}
            </h4>
            <div className="w-12 h-1.5 bg-[#FFB74D] rounded-full mt-3"></div>

            <ul className="mt-5 space-y-3">
              {campusLinks.map((l, i) => (
                <li key={i}>
                  <Link to={l.to} className={smallLink}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4) CONTACT (full width on phone) */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-sm font-black uppercase tracking-widest">
              {t("footer.findUs.title")}
            </h4>
            <div className="w-12 h-1.5 bg-[#673AB7] rounded-full mt-3"></div>

            <div className="mt-6 space-y-6 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-[#00BCD4] text-xl">📍</span>
                <p className="leading-relaxed whitespace-pre-line">
                  {t("footer.findUs.address")}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm hover:bg-white/10 transition">
                <div className="text-xs font-black uppercase tracking-widest text-gray-400">
                  {t("footer.findUs.officeTitle")}
                </div>

                <a
                  href={t("footer.findUs.phoneHref")}
                  className="mt-2 block text-white font-black text-lg hover:text-[#FF5E5E] transition"
                >
                  {t("footer.findUs.phone")}
                </a>

                <div className="text-xs text-gray-400 mt-2">
                  {t("footer.findUs.timing")}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[#00BCD4] text-xl">✉️</span>
                <a
                  href={t("footer.findUs.emailHref")}
                  className="text-gray-300 hover:text-white underline underline-offset-4 decoration-[#00BCD4] transition break-all"
                >
                  {t("footer.findUs.email")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========= BOTTOM BAR ========= */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-gray-400">
          <p className="font-semibold tracking-wide text-center md:text-left">
            © {currentYear} Young Achievers English Medium School •{" "}
            {t("footer.bottom.rights")}
          </p>

          <div className="flex items-center gap-2 font-semibold tracking-wide">
            <span>{t("footer.bottom.designedText")}</span>
            <span className="text-[#FF5E5E] text-base animate-pulse">
              {t("footer.bottom.heart")}
            </span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

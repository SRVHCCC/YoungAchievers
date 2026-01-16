import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // ✅ Mobile accordion states
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(false);
  const [mobileCampusOpen, setMobileCampusOpen] = useState(false);

  const headerRef = useRef(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const closeAll = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileAcademicsOpen(false);
    setMobileCampusOpen(false);
  };

  // ✅ Route change -> close menus
  useEffect(() => {
    closeAll();
    // eslint-disable-next-line
  }, [location.pathname]);

  // ✅ Outside click close
  useEffect(() => {
    const handler = (e) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(e.target)) closeAll();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
    // eslint-disable-next-line
  }, []);

  // ✅ ESC close
  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  // ✅ Resize fix
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ✅ By default english (en)
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    if (i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
    // eslint-disable-next-line
  }, []);

  // ✅ Language change
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  // ✅ get selected lang (handles en-US etc.)
  const currentLang = (i18n.language || "en").split("-")[0];

  // ---------- Styles ----------
  const desktopItemBase =
    "px-4 py-2 rounded-xl text-[13px] font-semibold uppercase tracking-wide transition whitespace-nowrap";
  const desktopNavClass = ({ isActive }) =>
    isActive
      ? `${desktopItemBase} bg-white text-[#FF5E5E]`
      : `${desktopItemBase} text-white/95 hover:bg-white/15`;

  const mobileItemBase =
    "w-full px-4 py-3 rounded-xl text-[14px] font-semibold uppercase tracking-wide transition flex items-center justify-between";
  const mobileNavClass = ({ isActive }) =>
    isActive
      ? `${mobileItemBase} bg-[#00BCD4] text-white`
      : `${mobileItemBase} text-white hover:bg-white/10`;

  // ✅ Mobile submenu item
  const mobileSubItem =
    "w-full px-4 py-3 rounded-xl text-[13px] font-semibold tracking-wide transition flex items-center justify-between bg-white/10 hover:bg-white/15 text-white";

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      {/* ================= TOP BAR ================= */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 md:px-6 h-[56px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Young Achievers" className="h-9 w-auto" />
            <div className="hidden sm:block leading-tight">
              <div className="text-sm font-extrabold text-slate-900">
                Young Achievers
              </div>
              <div className="text-xs font-semibold text-slate-500">
                English Medium School
              </div>
            </div>
          </Link>

          {/* Desktop info + Language Switch */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a
              href="tel:+918770698713"
              className="flex items-center gap-2 text-slate-700 hover:text-[#FF5E5E] transition"
            >
              <span>📞</span>
              <span className="font-semibold">+91 87706 98713</span>
            </a>

            <div className="flex items-center gap-2 text-slate-700">
              <span>🕒</span>
              <span className="font-semibold">Mon–Fri 8AM–2PM</span>
            </div>

            {/* ✅ Language switch (Desktop) */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => changeLang("en")}
                className={`px-3 py-1.5 rounded-lg text-xs font-black border transition ${
                  currentLang === "en"
                    ? "bg-[#FF5E5E] text-white border-[#FF5E5E]"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => changeLang("hi")}
                className={`px-3 py-1.5 rounded-lg text-xs font-black border transition ${
                  currentLang === "hi"
                    ? "bg-[#FF5E5E] text-white border-[#FF5E5E]"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>

          {/* ✅ Mobile Top Right: Language + Admission CTA + Menu */}
          <div className="md:hidden flex items-center gap-2">
            {/* ✅ Mobile Language */}
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => changeLang("en")}
                className={`px-2 py-1 rounded-lg text-[11px] font-black border transition ${
                  currentLang === "en"
                    ? "bg-[#FF5E5E] text-white border-[#FF5E5E]"
                    : "bg-white text-slate-700 border-slate-200"
                }`}
              >
                EN
              </button>

              <button
                type="button"
                onClick={() => changeLang("hi")}
                className={`px-2 py-1 rounded-lg text-[11px] font-black border transition ${
                  currentLang === "hi"
                    ? "bg-[#FF5E5E] text-white border-[#FF5E5E]"
                    : "bg-white text-slate-700 border-slate-200"
                }`}
              >
                HI
              </button>
            </div>

            {/* ✅ Mobile Admission Button (TOP) */}
            <NavLink
              to="/admissions"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider bg-[#00BCD4] text-white shadow"
                  : "px-3 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider bg-[#FF5E5E] text-white shadow hover:opacity-95 transition"
              }
            >
              Admission
            </NavLink>

            {/* Mobile Toggle */}
            <button
              className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-xl"
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* ================= NAV BAR ================= */}
      <div className="bg-[#FF5E5E]">
        <div className="container mx-auto px-4 md:px-6">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-between py-2">
            <div className="flex items-center gap-1">
              <NavLink to="/" className={desktopNavClass}>
                {t("header.home")}
              </NavLink>

              <NavLink to="/about" className={desktopNavClass}>
                {t("header.about")}
              </NavLink>

              {/* ACADEMICS Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown((p) =>
                      p === "academics" ? null : "academics"
                    )
                  }
                  className={`${desktopItemBase} text-white/95 hover:bg-white/15 flex items-center gap-2`}
                >
                  {t("header.academics")}
                  <span className="text-xs">
                    {openDropdown === "academics" ? "▴" : "▾"}
                  </span>
                </button>

                {openDropdown === "academics" && (
                  <div className="absolute left-0 top-[44px] w-[260px] bg-white rounded-2xl shadow-xl border overflow-hidden z-50">
                    <NavLink
                      to="/academics/pre-primary"
                      className="block px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                    >
                      Nursery – UKG
                    </NavLink>
                    <NavLink
                      to="/academics/primary"
                      className="block px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                    >
                      Class 1 – 5
                    </NavLink>
                    <NavLink
                      to="/academics/middle"
                      className="block px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                    >
                      Class 6 – 8
                    </NavLink>
                  </div>
                )}
              </div>

              {/* CAMPUS Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown((p) => (p === "campus" ? null : "campus"))
                  }
                  className={`${desktopItemBase} text-white/95 hover:bg-white/15 flex items-center gap-2`}
                >
                  {t("header.campus")}
                  <span className="text-xs">
                    {openDropdown === "campus" ? "▴" : "▾"}
                  </span>
                </button>

                {openDropdown === "campus" && (
                  <div className="absolute left-0 top-[44px] w-[240px] bg-white rounded-2xl shadow-xl border overflow-hidden z-50">
                    <NavLink
                      to="/classrooms"
                      className="block px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                    >
                      Classrooms
                    </NavLink>
                    <NavLink
                      to="/playground"
                      className="block px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                    >
                      Playground
                    </NavLink>
                    <NavLink
                      to="/library"
                      className="block px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                    >
                      Library
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink to="/gallery" className={desktopNavClass}>
                {t("header.gallery")}
              </NavLink>

              <NavLink to="/contact" className={desktopNavClass}>
                {t("header.contact")}
              </NavLink>
            </div>

            {/* CTA */}
            <NavLink
              to="/admissions"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#00BCD4] text-white px-6 py-2.5 rounded-xl font-bold uppercase tracking-widest text-[13px] shadow"
                  : "bg-white text-[#FF5E5E] hover:bg-slate-50 px-6 py-2.5 rounded-xl font-bold uppercase tracking-widest text-[13px] shadow transition"
              }
            >
              {t("header.admission")}
            </NavLink>
          </nav>

          {/* ✅ Mobile Navigation */}
          {mobileOpen && (
            <div className="lg:hidden pb-4 pt-3">
              <div className="space-y-2 text-white">
                <NavLink to="/" className={mobileNavClass}>
                  <span className="flex items-center gap-2">🏠 {t("header.home")}</span>
                  <span>›</span>
                </NavLink>

                <NavLink to="/about" className={mobileNavClass}>
                  <span className="flex items-center gap-2">👤 {t("header.about")}</span>
                  <span>›</span>
                </NavLink>

                {/* Academics */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileAcademicsOpen((p) => !p);
                    setMobileCampusOpen(false);
                  }}
                  className={`${mobileItemBase} text-white hover:bg-white/10 border border-white/10`}
                >
                  <span className="flex items-center gap-2">📚 {t("header.academics")}</span>
                  <span className="text-lg font-black">
                    {mobileAcademicsOpen ? "−" : "+"}
                  </span>
                </button>

                {mobileAcademicsOpen && (
                  <div className="pl-2 space-y-2">
                    <NavLink to="/academics/pre-primary" className={mobileSubItem}>
                      <span className="flex items-center gap-2">🧸 Nursery – UKG</span>
                      <span>›</span>
                    </NavLink>
                    <NavLink to="/academics/primary" className={mobileSubItem}>
                      <span className="flex items-center gap-2">📘 Class 1 – 5</span>
                      <span>›</span>
                    </NavLink>
                    <NavLink to="/academics/middle" className={mobileSubItem}>
                      <span className="flex items-center gap-2">🎓 Class 6 – 8</span>
                      <span>›</span>
                    </NavLink>
                  </div>
                )}

                {/* Campus */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileCampusOpen((p) => !p);
                    setMobileAcademicsOpen(false);
                  }}
                  className={`${mobileItemBase} text-white hover:bg-white/10 border border-white/10`}
                >
                  <span className="flex items-center gap-2">🏫 {t("header.campus")}</span>
                  <span className="text-lg font-black">
                    {mobileCampusOpen ? "−" : "+"}
                  </span>
                </button>

                {mobileCampusOpen && (
                  <div className="pl-2 space-y-2">
                    <NavLink to="/classrooms" className={mobileSubItem}>
                      <span className="flex items-center gap-2">🪑 Classrooms</span>
                      <span>›</span>
                    </NavLink>
                    <NavLink to="/playground" className={mobileSubItem}>
                      <span className="flex items-center gap-2">⚽ Playground</span>
                      <span>›</span>
                    </NavLink>
                    <NavLink to="/library" className={mobileSubItem}>
                      <span className="flex items-center gap-2">📚 Library</span>
                      <span>›</span>
                    </NavLink>
                  </div>
                )}

                <NavLink to="/gallery" className={mobileNavClass}>
                  <span className="flex items-center gap-2">🖼 {t("header.gallery")}</span>
                  <span>›</span>
                </NavLink>

                <NavLink to="/contact" className={mobileNavClass}>
                  <span className="flex items-center gap-2">📞 {t("header.contact")}</span>
                  <span>›</span>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

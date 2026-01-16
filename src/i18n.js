import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locals/en.json";
import hi from "./locals/hi.json";

// ✅ Default language = English
const defaultLang = "en";

// ✅ localStorage se language read
const savedLang = localStorage.getItem("lang") || defaultLang;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi }
  },
  lng: savedLang,          // ✅ current language
  fallbackLng: defaultLang, // ✅ if key missing
  interpolation: { escapeValue: false }
});

export default i18n;

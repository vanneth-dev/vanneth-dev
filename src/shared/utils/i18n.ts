import { initReactI18next } from "react-i18next";
import en from "src/shared/lang/en.json";
import km from "src/shared/lang/km.json";
import i18n from "i18next";

const defaultLanguage = import.meta.env.VITE_DEFAULT_LANGUAGE;
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    km: { translation: km },
  },
  lng: localStorage.getItem("language") || defaultLanguage,
  fallbackLng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;

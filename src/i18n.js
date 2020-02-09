import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

const fallbackLng = ["en"];
const availableLanguages = ["es", "en", "fr"];

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // if user computer language is not on the list
    // of available languages, than we will be using
    // the fallback language specified earlier
    fallbackLng,
    debug: false,
    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false
    }
  });

export default i18next;

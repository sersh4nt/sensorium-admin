import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import ruTranslation from "./translation/ru-translation.json";
import enTranslation from "./translation/en-translation.json";

export const resources = {
  ru: { translation: ruTranslation },
  en: { translation: enTranslation },
};

i18next.use(initReactI18next).init({ resources, lng: "ru", returnNull: false });

export default i18next;

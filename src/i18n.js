import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';
import en from './assets/locales/en.json';
import ru from './assets/locales/ru.json';

i18next
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources: {
      en: {
        translation: en
      },
      ru: {
        translation: ru
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
    },
    react: {
      useSuspense: false,
    }
  });

export default i18next;
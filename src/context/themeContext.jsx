import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import ThemeReducer from "./themeReducer";
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import enTranslation from '../Translate/en.json';
import arTranslation from '../Translate/ar.json';

// Configure i18next
i18next
  .use(initReactI18next) // Initialize React-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation, // English translations
      },
      ar: {
        translation: arTranslation, // Arabic translations
      },
    },
    lng: 'en', // Set default language
    fallbackLng: 'en', // Fallback language if translation for current language is not available
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });
const INITAL_STATE = {
  darkMode: false,
  show: false,
  convert: false,
};

export const ThemeContext = createContext(INITAL_STATE);

export const ThemeContextProvider = ({ children }) => {
  document.documentElement.dir = i18next.language === 'ar' ? 'rtl' : 'ltr';

  const [state, dispatch] = useReducer(ThemeReducer, INITAL_STATE);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections with the "section" class
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [activeSection]);
  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };
  return (
    
    <ThemeContext.Provider
      value={{ ...state, activeSection,changeLanguage, setActiveSection, dispatch }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

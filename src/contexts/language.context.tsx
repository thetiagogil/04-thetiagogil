import { createContext, ReactNode, useContext, useState } from "react";
import { TranslationKeys, translations } from "../lib/translations/index.ts";
import { Languages } from "../types/common";

type LanguageContextProps = {
  language: Languages;
  setLanguage: (lang: Languages) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Languages>(
    (localStorage.getItem("thetiagogil-language") as Languages) || "en"
  );

  const changeLanguage = (lang: Languages) => {
    setLanguage(lang);
    localStorage.setItem("thetiagogil-language", lang);
  };

  const t = (key: string) => translations[language][key as TranslationKeys] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { TranslationKeys, translations } from "../lib/translations/index.ts";
import { LanguagesType } from "../types/common";

type LanguageContextProps = {
  language: LanguagesType;
  changeLanguage: (lang: LanguagesType) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageContextProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguagesType>("en");

  useEffect(() => {
    const stored = localStorage.getItem("thetiagogil-language") as LanguagesType;
    const fallback = "en";

    if (stored) {
      setLanguage(stored);
    } else {
      setLanguage(fallback);
      localStorage.setItem("thetiagogil-language", fallback);
    }
  }, []);

  const changeLanguage = (lang: LanguagesType) => {
    setLanguage(lang);
    localStorage.setItem("thetiagogil-language", lang);
  };

  const t = (key: string) => translations[language][key as TranslationKeys] || key;

  return <LanguageContext.Provider value={{ language, changeLanguage, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguageContext must be used within LanguageContextProvider");
  return context;
};

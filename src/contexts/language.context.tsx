import { createContext, ReactNode, useContext, useState } from "react";
import { LanguageType } from "../configs/contants";
import { translations } from "../configs/translations";

type LanguageContextProps = {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageType>(
    (localStorage.getItem("thetiagogil-language") as LanguageType) || "en"
  );

  const changeLanguage = (lang: LanguageType) => {
    setLanguage(lang);
    localStorage.setItem("thetiagogil-language", lang);
  };

  const t = (key: string) => translations[language][key] || key;

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

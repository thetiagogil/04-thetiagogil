import {
  translations,
  type TranslationKeys,
} from "@/lib/translations/index.ts";
import { LanguageContext } from "@/providers/language/language-context";
import type { LanguagesType } from "@/types/common";
import { useEffect, useState, type ReactNode } from "react";

export const LanguageContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [language, setLanguage] = useState<LanguagesType>("en");

  useEffect(() => {
    const stored = localStorage.getItem(
      "thetiagogil-language"
    ) as LanguagesType;
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

  const t = (key: string) =>
    translations[language][key as TranslationKeys] || key;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

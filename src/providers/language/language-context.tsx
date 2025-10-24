import type { LanguagesType } from "@/types/common";
import { createContext } from "react";

type LanguageContextProps = {
  language: LanguagesType;
  changeLanguage: (lang: LanguagesType) => void;
  t: (key: string) => string;
};

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

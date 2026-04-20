import type { Lang } from "@/types/common";
import { createContext, useContext } from "react";

export type I18nContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  tr: (key: string | undefined) => string;
};

export const I18nContext = createContext<I18nContextType | null>(null);

export const useI18n = () => {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
};

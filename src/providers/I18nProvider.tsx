import { dictionary } from "@/i18n";
import { I18nContext } from "@/providers/i18n-context";
import type { Lang } from "@/types/common";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "thetiagogil-lang";

const getInitialLang = (): Lang => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (stored === "en" || stored === "pt" || stored === "es") {
    return stored;
  }

  return "en";
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((nextLang: Lang) => {
    setLangState(nextLang);
    localStorage.setItem(STORAGE_KEY, nextLang);
    document.documentElement.lang = nextLang;
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key: string) => dictionary[key]?.[lang] ?? key,
    [lang],
  );

  const tr = useCallback(
    (key: string | undefined) => {
      if (!key) return "";
      return dictionary[key]?.[lang] ?? key;
    },
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, t, tr }),
    [lang, setLang, t, tr],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

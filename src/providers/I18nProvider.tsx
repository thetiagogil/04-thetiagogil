import { dictionary } from "@/translations";
import type { TranslationValue } from "@/translations/types";
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

  if (stored === "en" || stored === "pt") {
    return stored;
  }

  return "en";
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const getTranslationValue = useCallback(
    (key: string | undefined): TranslationValue | undefined => {
      if (!key) return undefined;

      const entry = dictionary[key];
      return entry?.[lang] ?? entry?.en;
    },
    [lang],
  );

  const setLang = useCallback((nextLang: Lang) => {
    setLangState(nextLang);
    localStorage.setItem(STORAGE_KEY, nextLang);
    document.documentElement.lang = nextLang;
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key: string) => {
      const value = getTranslationValue(key);
      return typeof value === "string" ? value : key;
    },
    [getTranslationValue],
  );

  const tr = useCallback(
    (key: string | undefined) => {
      if (!key) return "";

      const value = getTranslationValue(key);
      return typeof value === "string" ? value : key;
    },
    [getTranslationValue],
  );

  const tv = useCallback(
    (key: string | undefined) => getTranslationValue(key),
    [getTranslationValue],
  );

  const value = useMemo(
    () => ({ lang, setLang, t, tr, tv }),
    [lang, setLang, t, tr, tv],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

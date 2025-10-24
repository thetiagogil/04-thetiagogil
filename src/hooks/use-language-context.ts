import { LanguageContext } from "@/providers/language/language-context";
import { useContext } from "react";

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error(
      "useLanguageContext must be used within LanguageContextProvider"
    );
  return context;
};

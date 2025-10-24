import { en } from "@/lib/translations/en";
import { es } from "@/lib/translations/es";
import { pt } from "@/lib/translations/pt";

export type TranslationKeys = keyof typeof en;

export const translations = {
  en,
  pt,
  es,
};

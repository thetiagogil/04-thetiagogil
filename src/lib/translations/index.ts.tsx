import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";

export type TranslationKeys = keyof typeof en;

export const translations = {
  en,
  pt,
  es
};

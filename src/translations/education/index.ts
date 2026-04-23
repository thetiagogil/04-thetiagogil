import { faulTranslations } from "@/translations/education/faul";
import { ironhackTranslations } from "@/translations/education/ironhack";
import type { TranslationDictionary } from "@/translations/types";

export const educationTranslations: TranslationDictionary = {
  ...faulTranslations,
  ...ironhackTranslations,
};

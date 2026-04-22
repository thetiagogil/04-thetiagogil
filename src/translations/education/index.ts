import { faulTranslations } from "@/translations/education/faul";
import { guadalupeTranslations } from "@/translations/education/guadalupe";
import { ironhackTranslations } from "@/translations/education/ironhack";
import type { TranslationDictionary } from "@/translations/types";

export const educationTranslations: TranslationDictionary = {
  ...guadalupeTranslations,
  ...faulTranslations,
  ...ironhackTranslations,
};


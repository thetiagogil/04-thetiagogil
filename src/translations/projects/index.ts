import { poketrackerTranslations } from "@/translations/projects/poketracker";
import { uparqueTranslations } from "@/translations/projects/uparque";
import { wordlechainTranslations } from "@/translations/projects/wordlechain";
import type { TranslationDictionary } from "@/translations/types";

export const projectTranslations: TranslationDictionary = {
  ...wordlechainTranslations,
  ...poketrackerTranslations,
  ...uparqueTranslations,
};

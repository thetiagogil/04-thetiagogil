import { finAceTranslations } from "@/translations/projects/fin-ace";
import { giraffesTranslations } from "@/translations/projects/giraffes-vs-sea";
import { houseOfLegendsTranslations } from "@/translations/projects/house-of-legends";
import { poketrackerTranslations } from "@/translations/projects/poketracker";
import { uparqueTranslations } from "@/translations/projects/uparque";
import { wordlechainTranslations } from "@/translations/projects/wordlechain";
import type { TranslationDictionary } from "@/translations/types";

export const projectTranslations: TranslationDictionary = {
  ...wordlechainTranslations,
  ...giraffesTranslations,
  ...houseOfLegendsTranslations,
  ...finAceTranslations,
  ...poketrackerTranslations,
  ...uparqueTranslations,
};

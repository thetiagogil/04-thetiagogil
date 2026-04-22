import { buildTranslations } from "@/translations/projects/build";
import { builderfiTranslations } from "@/translations/projects/builderfi";
import { finaceTranslations } from "@/translations/projects/finace";
import { finaceV2Translations } from "@/translations/projects/finace-v2";
import { giraffesVsSeaTranslations } from "@/translations/projects/giraffes-vs-sea";
import { houseOfLegendsTranslations } from "@/translations/projects/house-of-legends";
import { passportTranslations } from "@/translations/projects/passport";
import { poketrackerTranslations } from "@/translations/projects/poketracker";
import { talentsyTranslations } from "@/translations/projects/talentsy";
import { uparqueTranslations } from "@/translations/projects/uparque";
import { wordlechainTranslations } from "@/translations/projects/wordlechain";
import type { TranslationDictionary } from "@/translations/types";

export const projectTranslations: TranslationDictionary = {
  ...giraffesVsSeaTranslations,
  ...houseOfLegendsTranslations,
  ...finaceTranslations,
  ...finaceV2Translations,
  ...passportTranslations,
  ...buildTranslations,
  ...builderfiTranslations,
  ...wordlechainTranslations,
  ...talentsyTranslations,
  ...poketrackerTranslations,
  ...uparqueTranslations,
};


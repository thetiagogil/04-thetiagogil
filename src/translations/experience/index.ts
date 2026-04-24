import { aquasisTranslations } from "@/translations/experience/aquasis";
import { crEspassosTranslations } from "@/translations/experience/cr-espassos";
import { subvisualTranslations } from "@/translations/experience/subvisual";
import { talentProtocolTranslations } from "@/translations/experience/talent-protocol";
import type { TranslationDictionary } from "@/translations/types";

export const experienceTranslations: TranslationDictionary = {
  ...crEspassosTranslations,
  ...subvisualTranslations,
  ...talentProtocolTranslations,
  ...aquasisTranslations,
};


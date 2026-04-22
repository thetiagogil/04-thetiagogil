import { agileTranslations } from "@/translations/certifications/agile";
import { outsystemsTranslations } from "@/translations/certifications/outsystems";
import { reactNativeTranslations } from "@/translations/certifications/react-native";
import type { TranslationDictionary } from "@/translations/types";

export const certificationTranslations: TranslationDictionary = {
  ...reactNativeTranslations,
  ...agileTranslations,
  ...outsystemsTranslations,
};


import { certificationTranslations } from "@/i18n/certifications";
import { educationTranslations } from "@/i18n/education";
import { experienceTranslations } from "@/i18n/experience";
import { projectTranslations } from "@/i18n/projects";
import type { TranslationDictionary } from "@/i18n/types";
import { uiTranslations } from "@/i18n/ui";

export const dictionary: TranslationDictionary = {
  ...uiTranslations,
  ...experienceTranslations,
  ...projectTranslations,
  ...educationTranslations,
  ...certificationTranslations,
};

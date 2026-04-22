import { certificationTranslations } from "@/translations/certifications";
import { educationTranslations } from "@/translations/education";
import { experienceTranslations } from "@/translations/experience";
import { projectTranslations } from "@/translations/projects";
import type { TranslationDictionary } from "@/translations/types";
import { uiTranslations } from "@/translations/ui";

export const dictionary: TranslationDictionary = {
  ...uiTranslations,
  ...experienceTranslations,
  ...projectTranslations,
  ...educationTranslations,
  ...certificationTranslations,
};


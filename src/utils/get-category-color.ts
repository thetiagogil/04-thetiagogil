import { CATEGORIES_TYPES } from "../configs/contants";
import { colors } from "../theme/colors";

const categoryColors: Record<CATEGORIES_TYPES, string> = {
  experience: colors.main.green,
  projects: colors.main.blue,
  education: colors.main.yellow,
  certifications: colors.main.pink
};

export const getCategoryColor = (category: CATEGORIES_TYPES) => categoryColors[category];

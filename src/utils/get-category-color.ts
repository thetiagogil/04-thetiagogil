import { CategoryType } from "../configs/contants";
import { colors } from "../theme/colors";

const categoryColors: Record<CategoryType, string> = {
  experience: colors.main.green,
  projects: colors.main.blue,
  education: colors.main.yellow,
  certifications: colors.main.pink
};

export const getCategoryColor = (category: CategoryType) => categoryColors[category];

import { useColorScheme } from "@mui/joy/styles";
import { CategoryType } from "../configs/contants";
import { colors } from "../theme/colors";

export const getCategoryColor = (category: CategoryType) => {
  const { mode } = useColorScheme();
  const themeColors = mode === "light" ? colors.main.light : colors.main.dark;

  const categoryColors: Record<CategoryType, string> = {
    experience: themeColors.green,
    projects: themeColors.blue,
    education: themeColors.yellow,
    certifications: themeColors.pink
  };

  return categoryColors[category];
};

import { colors } from "@/styles/colors";
import type { DataCategoryType } from "@/types/common";
import { useColorScheme } from "@mui/joy/styles";

export const useCategoryColor = () => {
  const { mode } = useColorScheme();
  const themeColors = mode === "light" ? colors.main.light : colors.main.dark;

  return (category: DataCategoryType) => {
    const categoryColors: Record<DataCategoryType, string> = {
      experience: themeColors.green,
      projects: themeColors.blue,
      education: themeColors.yellow,
      certifications: themeColors.pink,
    };
    return categoryColors[category];
  };
};

import { useColorScheme } from "@mui/joy/styles";
import { colors } from "../styles/colors";
import { DataCategory } from "../types/common";

export const useCategoryColor = () => {
  const { mode } = useColorScheme();
  const themeColors = mode === "light" ? colors.main.light : colors.main.dark;

  return (category: DataCategory) => {
    const categoryColors: Record<DataCategory, string> = {
      experience: themeColors.green,
      projects: themeColors.blue,
      education: themeColors.yellow,
      certifications: themeColors.pink
    };
    return categoryColors[category];
  };
};

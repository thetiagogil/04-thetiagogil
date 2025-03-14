import { Chip, useTheme } from "@mui/joy";
import { CategoryType } from "../../configs/contants";
import { getColorTransparency } from "../../utils/get-color-transparency";

type ChipTechProps = {
  tech: string;
  category: CategoryType;
};

export const chipColors = (category: CategoryType) => {
  const theme = useTheme();
  switch (category) {
    case "experience":
      return { bgcolor: getColorTransparency(theme.palette.main.green, 20), color: "main.green" };
    case "projects":
      return { bgcolor: getColorTransparency(theme.palette.main.blue, 20), color: "main.blue" };
    case "education":
      return { bgcolor: getColorTransparency(theme.palette.main.yellow, 20), color: "main.yellow" };
    case "certifications":
      return { bgcolor: getColorTransparency(theme.palette.main.pink, 20), color: "main.pink" };
  }
};

export const ChipTech = ({ tech, category }: ChipTechProps) => {
  const styles = chipColors(category);

  return (
    <Chip
      sx={{
        bgcolor: styles.bgcolor,
        color: styles.color,
        fontSize: 12,
        fontWeight: 700,
        my: 0.5,
        mr: 1,
        py: 0.5,
        px: 1,
        borderRadius: 8
      }}
    >
      {tech}
    </Chip>
  );
};

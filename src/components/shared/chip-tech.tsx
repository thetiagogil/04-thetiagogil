import { Chip } from "@mui/joy";
import { CATEGORIES_TYPES } from "../../configs/contants";
import { colors } from "../../theme/colors";
import { getColorTransparency } from "../../utils/get-color-transparency";

type ChipTechProps = { tech: string; category: CATEGORIES_TYPES };

const chipColors = (category: CATEGORIES_TYPES) => {
  switch (category) {
    case "experience":
      return { bgcolor: getColorTransparency(colors.main.green, 20), color: "main.green" };
    case "projects":
      return { bgcolor: getColorTransparency(colors.main.blue, 20), color: "main.blue" };
    case "education":
      return { bgcolor: getColorTransparency(colors.main.yellow, 20), color: "main.yellow" };
    case "certifications":
      return { bgcolor: getColorTransparency(colors.main.pink, 20), color: "main.pink" };
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

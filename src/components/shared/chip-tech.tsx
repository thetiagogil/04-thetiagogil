import { chipColors } from "@/lib/utils";
import type { DataCategoryType } from "@/types/common";
import { Chip, useTheme } from "@mui/joy";

type ChipTechProps = {
  tech: string;
  category: DataCategoryType;
};

export const ChipTech = ({ tech, category }: ChipTechProps) => {
  const theme = useTheme();
  const styles = chipColors(category, theme);

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
        borderRadius: 8,
      }}
    >
      {tech}
    </Chip>
  );
};

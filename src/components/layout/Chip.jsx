import { Chip } from "@mui/joy";

const chipColors = (type) => {
  switch (type) {
    case "projects":
      return {
        bgcolor: "secondary.blueBg",
        color: "primary.blue",
      };
    case "experience":
      return {
        bgcolor: "secondary.greenBg",
        color: "primary.green",
      };
    case "education":
      return {
        bgcolor: "secondary.yellowBg",
        color: "primary.yellow",
      };
    case "certifications":
      return {
        bgcolor: "secondary.pinkBg",
        color: "primary.pink",
      };
  }
};

export const ChipTech = ({ tech, type }) => {
  const styles = chipColors(type);

  return (
    <Chip
      sx={{
        fontSize: "12px",
        fontWeight: "700",
        my: 0.5,
        mr: 1,
        py: 0.5,
        px: 1,
        borderRadius: "8px",
        bgcolor: styles.bgcolor,
        color: styles.color,
      }}
    >
      {tech}
    </Chip>
  );
};

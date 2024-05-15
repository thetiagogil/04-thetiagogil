import { AspectRatio, Stack, Typography } from "@mui/joy";

export const Section1 = ({ element, type }) => {
  return (
    <Stack
      sx={{
        width: { xs: "100%", md: "30%" },
        alignSelf: { xs: "center", md: "baseline" },
      }}
    >
      {type === "projects" && element.img ? (
        <AspectRatio
          sx={{
            width: "100%",
            border: "1px solid",
            borderColor: "primary.white3",
            borderRadius: "8px",
          }}
        >
          <img src={element.img} alt={element.name} />
        </AspectRatio>
      ) : type === "projects" && !element.img ? null : (
        <Typography level="body-sm">{element.date}</Typography>
      )}
    </Stack>
  );
};

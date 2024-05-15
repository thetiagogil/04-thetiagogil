import { Stack, Typography } from "@mui/joy";

export const Section1 = () => {
  return (
    <Stack component="section" sx={{ textAlign: { xs: "center", lg: "left" } }}>
      <Typography level="h1">TIAGO GIL</Typography>
      <Typography level="h3" sx={{ fontSize: { xs: "20px", lg: "24px" } }}>
        Web Developer & Master Architect
      </Typography>
    </Stack>
  );
};

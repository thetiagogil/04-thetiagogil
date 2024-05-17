import { Link, Stack, Typography } from "@mui/joy";
import { FaArrowLeftLong } from "react-icons/fa6";

export const Section1 = () => {
  return (
    <Stack
      component="section"
      sx={{ alignItems: { xs: "center", lg: "baseline" } }}
    >
      <Link
        href="/"
        underline="none"
        startDecorator={<FaArrowLeftLong size={12} />}
        sx={{
          color: "primary.white3",
          fontSize: "14px",
          transition: "0.3s",
          "&:hover": {
            color: "primary.white",
          },
        }}
      >
        <Typography>back to homepage</Typography>
      </Link>

      <Typography level="h1">My timeline</Typography>
    </Stack>
  );
};

import { Link, Stack, Typography } from "@mui/joy";
import { FaArrowRightLong } from "react-icons/fa6";

export const Section4 = () => {
  return (
    <Stack component="section" sx={{ alignItems: {xs: "center", lg: 'baseline'} }}>
      <Link href="/timeline" underline="none">
        <Typography
          level="body-md"
          endDecorator={<FaArrowRightLong size={12} />}
          sx={{
            transition: "0.3s",
            "&:hover": { color: "primary.white" },
          }}
        >
          Check out my timeline
        </Typography>
      </Link>
    </Stack>
  );
};

import { Link, Typography } from "@mui/joy";
import { hoverColor } from "../../../../../components/variables/typeColors";

import { FaArrowRightLong } from "react-icons/fa6";

export const Section3 = ({ type }) => {
  return (
    <Link href="/timeline" underline="none">
      <Typography
        level="body-md"
        endDecorator={<FaArrowRightLong size={12} />}
        sx={{ transition: "0.3s", ...hoverColor(type) }}
      >
        Check out my timeline
      </Typography>
    </Link>
  );
};

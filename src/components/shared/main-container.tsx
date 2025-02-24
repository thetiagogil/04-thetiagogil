import { Stack } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import { ReactNode } from "react";

type MainContainerProps = {
  children: ReactNode;
  sx?: SxProps;
};

export const MainContainer = ({ children, sx }: MainContainerProps) => {
  return (
    <Stack
      width={{ xs: "100%" }}
      minWidth={{ lg: 1200 }}
      maxWidth={{ lg: 1400 }}
      justifySelf="center"
      px={{ xs: 2, md: 6 }}
      pt={{ xs: 4, lg: 10 }}
      pb={{ xs: 2, lg: 4 }}
      sx={{ ...sx }}
    >
      {children}
    </Stack>
  );
};

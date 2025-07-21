import { Stack } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import { ReactNode } from "react";
import { TopBar } from "../layout/top-bar";

type MainContainerProps = {
  children: ReactNode;
  sx?: SxProps;
  fullheight?: boolean;
};

export const MainContainer = ({ children, sx, fullheight }: MainContainerProps) => {
  return (
    <Stack
      className="fade-in"
      height={fullheight ? { xs: "auto", lg: "100vh" } : "auto"}
      width="100%"
      minWidth={{ lg: 1200 }}
      maxWidth={{ lg: 1400 }}
      justifySelf="center"
      px={{ xs: 2, md: 6 }}
      pb={{ xs: 2, lg: 4 }}
    >
      <TopBar />
      <Stack flex={1} sx={{ ...sx }}>
        {children}
      </Stack>
    </Stack>
  );
};

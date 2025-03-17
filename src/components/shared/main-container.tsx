import { Stack } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { TopBar } from "../sections/top-bar";

type MainContainerProps = {
  children: ReactNode;
  sx?: SxProps;
  fullheight?: boolean;
};

export const MainContainer = ({ children, sx, fullheight }: MainContainerProps) => {
  return (
    <Stack
      height={fullheight ? { xs: "auto", lg: "100vh" } : "auto"}
      width="100%"
      minWidth={{ lg: 1200 }}
      maxWidth={{ lg: 1400 }}
      justifySelf="center"
      px={{ xs: 2, md: 6 }}
      pb={{ xs: 2, lg: 4 }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <TopBar />
      <Stack flex={1} sx={{ ...sx }}>
        {children}
      </Stack>
    </Stack>
  );
};
